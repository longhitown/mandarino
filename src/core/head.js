/* Testa di calibrazione bayesiana online (ML-FSRS-NET).  p' = sigmoid( a * logit(p_struct) + b + beta . x )
   p_struct = g + (1 - g) p, con g = 1/k per la scelta multipla a k opzioni (probabilita' di indovinare: struttura nota, non appresa), 0 altrimenti.
   Prior gaussiano su (a, b, beta) centrato su (1, 0, 0) con precisioni ka, kb, kx; Newton (IRLS) su una finestra, ricalcolato ogni `every` ripassi, SOLO sul passato.
   Con poche osservazioni (< minN) restituisce p_struct invariata; con caratteristiche prive di informazione i coefficienti restano ~0 (costo misurato: ~0.00025 di log-loss).
   Identica al riferimento Python di testa_eval.py (test differenziale: test_head.py).  Nessuna dipendenza. */
(function (root) {
  "use strict";
  var EPS = 1e-4;
  function sigmoid(x) { return 1 / (1 + Math.exp(-x)); }
  function logit(p) { p = Math.min(1 - EPS, Math.max(EPS, p)); return Math.log(p / (1 - p)); }
  function solve(H, g) { /* eliminazione di Gauss con pivot parziale, d x d */
    var d = g.length, A = H.map(function (r, i) { return r.slice().concat([g[i]]); }), i, j, k, p, t, f;
    for (i = 0; i < d; i++) {
      p = i; for (j = i + 1; j < d; j++) if (Math.abs(A[j][i]) > Math.abs(A[p][i])) p = j;
      t = A[i]; A[i] = A[p]; A[p] = t;
      for (j = i + 1; j < d; j++) { f = A[j][i] / A[i][i]; for (k = i; k <= d; k++) A[j][k] -= f * A[i][k]; }
    }
    var x = new Array(d).fill(0);
    for (i = d - 1; i >= 0; i--) { x[i] = A[i][d]; for (j = i + 1; j < d; j++) x[i] -= A[i][j] * x[j]; x[i] /= A[i][i]; }
    return x;
  }
  function Head(opts) {
    opts = opts || {};
    this.nx = opts.nx === undefined ? 0 : opts.nx; this.ka = opts.ka || 8; this.kb = opts.kb || 8; this.kx = opts.kx || 16;
    this.every = opts.every || 25; this.minN = opts.minN || 40; this.window = opts.window || 3000;
    this.d = 2 + this.nx; this.th = [1, 0].concat(new Array(this.nx).fill(0));
    this.Z = []; this.y = []; this.n = 0;
  }
  Head.prototype.row = function (pStruct, x) { return [logit(pStruct), 1].concat(x || []); };
  /* probabilita' finale per un ripasso che sta per avvenire */
  Head.prototype.predict = function (p, k, x) {
    var g = k > 1 ? 1 / k : 0, ps = g + (1 - g) * p;
    if (this.n < this.minN) return Math.min(1 - EPS, Math.max(EPS, ps));
    var z = this.row(ps, x), s = 0, i; for (i = 0; i < this.d; i++) s += this.th[i] * z[i];
    return Math.min(1 - EPS, Math.max(EPS, sigmoid(s)));
  };
  Head.prototype.observe = function (p, k, x, y) {
    var g = k > 1 ? 1 / k : 0, ps = g + (1 - g) * p;
    this.Z.push(this.row(ps, x)); this.y.push(y ? 1 : 0);
    if (this.Z.length > this.window) { this.Z.shift(); this.y.shift(); }
    this.n++;
    if (this.n >= this.minN && this.n % this.every === 0) this.fit();
  };
  Head.prototype.fit = function () {
    var d = this.d, prm = [this.ka, this.kb].concat(new Array(this.nx).fill(this.kx)), th = this.th.slice(), m = [1, 0].concat(new Array(this.nx).fill(0)), it, i, j, a, q, w, g, H, dlt, s, step;
    for (it = 0; it < 12; it++) {
      g = new Array(d).fill(0); H = []; for (i = 0; i < d; i++) { H.push(new Array(d).fill(0)); g[i] = prm[i] * (th[i] - m[i]); H[i][i] = prm[i]; }
      for (a = 0; a < this.Z.length; a++) {
        s = 0; for (i = 0; i < d; i++) s += th[i] * this.Z[a][i];
        q = sigmoid(s); w = q * (1 - q);
        for (i = 0; i < d; i++) { g[i] += (q - this.y[a]) * this.Z[a][i]; for (j = 0; j < d; j++) H[i][j] += w * this.Z[a][i] * this.Z[a][j]; }
      }
      dlt = solve(H, g); step = 0; for (i = 0; i < d; i++) { th[i] -= dlt[i]; step += Math.abs(dlt[i]); }
      if (step < 1e-9) break;
    }
    var ok = th.every(isFinite);
    if (ok) this.th = th;
  };
  root.MLNetHead = { Head: Head };
  if (typeof module !== "undefined" && module.exports) module.exports = root.MLNetHead;
})(typeof window !== "undefined" ? window : globalThis);
