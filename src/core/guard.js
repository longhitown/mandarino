/* Guardia del motore (ML-FSRS-NET): sceglie fra il motore di sicurezza A (FSRS-6) e motori candidati con garanzie valide in ogni istante, e ricalibra le probabilita'.
   Matematica:
   - Perdita logaritmica troncata  l = -log(clip(p(y), eps, 1)) in [0, L], L = log(1/eps).   d_t = (l_A - l_B)/L in [-1, 1]   (positivo = B meglio di A).
   - ADOZIONE (e-process, "testing by betting"): K_t = prod (1 + lambda_t d_t), lambda_t in [0, 1/2] prevedibile (aGRAPA con pseudo-osservazioni). Sotto H0 "B non e' meglio di A in media" K e' una
     supermartingala non negativa: per la disuguaglianza di Ville P(esiste t: K_t >= 1/alpha) <= alpha, QUALUNQUE sia il momento in cui si guarda. Si adotta B se K >= 1/alpha_up.
   - DEGRADO (e-detector di Shiryaev-Roberts): R_t = (1 + R_{t-1}) (1 + lambda'_t d'_t),  d' = -d, lambda' prevedibile con memoria esponenziale; allarme se R_t >= h = 1/alpha_dn (lunghezza media di corsa
     fra falsi allarmi >= h ripassi). All'allarme si torna ad A e si riparte da zero.
   - Pesi/valori non finiti o fuori da [0,1] da un candidato: il candidato e' escluso per sempre (interruttore duro).
   - Calibrazione Platt online: p' = sigmoid(a logit(p) + b), MAP con prior N(1, 1/ka) su a e N(0, 1/kb) su b (Newton, ricalcolata ogni `every` ripassi su una finestra).
   Nessuna dipendenza. API: g = new Guard({engines:['B','C'], ...}); r = g.observe({A: p, B: p, C: p}, y) -> {active, p (calibrato dal motore attivo), K:{...}, R:{...}} */
(function (root) {
  "use strict";
  var EPS = 1e-4, EPS_T = 0.02, L = Math.log(1 / EPS_T);          // le probabilita' si tagliano a [EPS, 1-EPS]; la perdita DEL TEST a [EPS_T, 1-EPS_T] (intervallo L = 3.9 nat: scommesse piu' grandi, stessa validita')
  function lossOf(p, y) { p = Math.min(1 - EPS, Math.max(EPS, p)); return -Math.log(y ? p : 1 - p); }
  function lossTest(p, y) { p = Math.min(1 - EPS_T, Math.max(EPS_T, p)); return -Math.log(y ? p : 1 - p); }
  function clip01(p) { return Math.min(1 - EPS, Math.max(EPS, p)); }
  function logit(p) { p = clip01(p); return Math.log(p / (1 - p)); }
  function sigmoid(z) { return 1 / (1 + Math.exp(-z)); }

  /* stimatore aGRAPA con memoria: lambda_t = clip( mu / (m2) , 0, cap ), mu e m2 calcolati SOLO su osservazioni passate */
  function Bettor(opts) {
    opts = opts || {};
    this.gamma = opts.gamma === undefined ? 1 : opts.gamma; this.cap = opts.cap || 0.5; this.n0 = opts.n0 || 20; this.v0 = opts.v0 || 2e-3;
    this.s1 = 0; this.s2 = 0; this.n = 0;
  }
  Bettor.prototype.lambda = function () {
    var mu = this.s1 / (this.n + this.n0), m2 = (this.s2 + this.n0 * this.v0) / (this.n + this.n0);
    return Math.min(this.cap, Math.max(0, mu / m2));
  };
  Bettor.prototype.update = function (x) { this.s1 = this.gamma * this.s1 + x; this.s2 = this.gamma * this.s2 + x * x; this.n = this.gamma * this.n + 1; };

  function Platt(opts) {
    opts = opts || {};
    this.ka = opts.ka || 8; this.kb = opts.kb || 8; this.window = opts.window || 3000; this.every = opts.every || 25; this.minN = opts.minN || 40;
    this.z = []; this.y = []; this.a = 1; this.b = 0; this.cnt = 0;
  }
  Platt.prototype.fit = function () {
    var n = this.z.length, a = this.a, b = this.b, it, i, q, g0, g1, h00, h01, h11, w, det, da, db;
    for (it = 0; it < 12; it++) {
      g0 = this.ka * (a - 1); g1 = this.kb * b; h00 = this.ka; h01 = 0; h11 = this.kb;
      for (i = 0; i < n; i++) { q = sigmoid(a * this.z[i] + b); w = q * (1 - q); g0 += (q - this.y[i]) * this.z[i]; g1 += (q - this.y[i]); h00 += w * this.z[i] * this.z[i]; h01 += w * this.z[i]; h11 += w; }
      det = h00 * h11 - h01 * h01; if (!(det > 1e-12)) break;
      da = (h11 * g0 - h01 * g1) / det; db = (-h01 * g0 + h00 * g1) / det; a -= da; b -= db;
      if (Math.abs(da) + Math.abs(db) < 1e-10) break;
    }
    if (isFinite(a) && isFinite(b)) { this.a = Math.min(3, Math.max(0.2, a)); this.b = Math.min(2, Math.max(-2, b)); }
  };
  Platt.prototype.apply = function (p) { return this.z.length < this.minN ? clip01(p) : clip01(sigmoid(this.a * logit(p) + this.b)); };
  Platt.prototype.observe = function (pRaw, y) {
    this.z.push(logit(pRaw)); this.y.push(y ? 1 : 0);
    if (this.z.length > this.window) { this.z.shift(); this.y.shift(); }
    this.cnt++; if (this.z.length >= this.minN && this.cnt % this.every === 0) this.fit();
  };

  function Guard(opts) {
    opts = opts || {};
    this.cands = opts.engines || ["B"]; this.alphaUp = opts.alphaUp || 0.01; this.alphaDown = opts.alphaDown || 5e-5;
    this.up = {}; this.K = {}; this.det = {}; this.R = {}; this.broken = {}; this.bet = {}; this.betDown = {};
    var self = this; this.cands.forEach(function (c) { self.K[c] = 1; self.R[c] = 0; self.bet[c] = new Bettor({ gamma: 1 }); self.betDown[c] = new Bettor({ gamma: 1 - 1 / 150 }); self.broken[c] = false; });
    this.active = "A"; this.platt = { A: new Platt(opts.platt) }; this.cands.forEach(function (c) { self.platt[c] = new Platt(opts.platt); });
    this.useCalib = opts.calibrate !== false; this.n = 0; this.log = [];
    if (opts.initial && opts.initial !== "A" && this.cands.indexOf(opts.initial) >= 0) { this.active = opts.initial; this.R[opts.initial] = 0; this.betDown[opts.initial] = new Bettor({ gamma: 1 - 1 / 150 }); this.log.push(["avvio", 0, opts.initial]); }
  }
  /* p: {A, B, ...} probabilita' grezze dei motori PRIMA di vedere y; restituisce la previsione da usare e aggiorna dopo y */
  Guard.prototype.predict = function (p) {
    var e = this.active, raw = p[e];
    if (!(isFinite(raw) && raw >= 0 && raw <= 1)) { if (e !== "A") { this.broken[e] = true; this.active = "A"; this.log.push(["guasto", this.n, e]); } e = "A"; raw = p.A; }
    return { engine: e, p: this.useCalib ? this.platt[e].apply(raw) : clip01(raw) };
  };
  Guard.prototype.observe = function (p, y) {
    var self = this, lA = lossTest(p.A, y), pred = this.predict(p);
    this.cands.forEach(function (c) {
      if (self.broken[c]) return;
      var pc = p[c];
      if (!(isFinite(pc) && pc >= 0 && pc <= 1)) { self.broken[c] = true; if (self.active === c) { self.active = "A"; self.log.push(["guasto", self.n, c]); } return; }
      var d = (lA - lossTest(pc, y)) / L;                              // positivo = candidato meglio di A
      if (self.active !== c) {                                        // e-process di adozione
        var lam = self.bet[c].lambda();
        self.K[c] *= (1 + lam * d); self.bet[c].update(d);
        if (self.K[c] >= 1 / self.alphaUp * self.cands.length && self.active === "A") { self.active = c; self.R[c] = 0; self.betDown[c] = new Bettor({ gamma: 1 - 1 / 150 }); self.log.push(["adozione", self.n, c, self.K[c]]); }
      } else {                                                        // e-detector di degrado
        var dn = -d, lam2 = self.betDown[c].lambda();
        self.R[c] = (1 + self.R[c]) * (1 + lam2 * dn); self.betDown[c].update(dn);
        if (self.R[c] >= 1 / self.alphaDown) { self.active = "A"; self.K[c] = 1; self.bet[c] = new Bettor({ gamma: 1 }); self.log.push(["revoca", self.n, c, self.R[c]]); }
      }
    });
    Object.keys(this.platt).forEach(function (e) { if (isFinite(p[e])) self.platt[e].observe(p[e], y); });
    this.n++;
    return { engine: pred.engine, p: pred.p };
  };
  root.MLNetGuard = { Guard: Guard, Platt: Platt, Bettor: Bettor, lossOf: lossOf, lossTest: lossTest, L: L, EPS: EPS };
  if (typeof module !== "undefined" && module.exports) module.exports = root.MLNetGuard;
})(typeof window !== "undefined" ? window : globalThis);
