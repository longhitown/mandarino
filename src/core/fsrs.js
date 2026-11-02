/* FSRS in JavaScript puro. Porting fedele di py-fsrs (open-spaced-repetition/py-fsrs, HEAD, MIT) = FSRS-6, 21 parametri,
   con l'estensione ML-FSRS-32.1 (11 parametri in più, w21..w31: toni, tipo di esercizio, morfologia degli hanzi).
   Il flusso (stati, passi, fuzz, intervalli) è quello di FSRS-6: le estensioni cambiano solo la stabilità di un ripasso lungo
   (>= 1 giorno) e, senza informazioni dal chiamante, valgono 1 (o 0): review(carta, voto, ora) dà esattamente FSRS-6.
   dial in [0,1]: 0 = FSRS-6 esatto. w0..w20 sono i pesi di py-fsrs; w21..w31 sono valori di partenza, NON stimati su ripassi reali.
   I pesi sono UNA costante isolata (FSRS.DEFAULT_W): sostituibile. Nessun ottimizzatore ufficiale: vedi FSRS.calibrate. */
(function (root) {
  "use strict";
  var DAY = 86400000, MIN = 60000;
  var DEFAULT_W = [0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542,
    0.8158, 1, 0.2, 0.12, 0.18, 0.5, 0.5, 0.4, 0.4, 0.35, 0.1]; /* 21 sforzo, 22 scelta multipla, 23 oblio attivo, 24 rapidità, 25 lentezza, 26-27 tono, 28-29 morfemi, 30 indizio, 31 sonno */
  var LB = [0.001, 0.001, 0.001, 0.001, 1, 0.001, 0.001, 0.001, 0, 0, 0.001, 0.001, 0.001, 0.001, 0, 0, 1, 0, 0, 0, 0.1, 0, 0, 0, 0, 0, 0.1, 0.1, 0, 0, 0, 0];
  var UB = [100, 100, 100, 100, 10, 4, 4, 0.75, 4.5, 0.8, 3.5, 5, 0.25, 0.9, 4, 1, 6, 2, 2, 0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.8, 0.9, 1, 1.5, 1.5, 0.6, 0.5];
  var SMIN = 0.001, DMIN = 1, DMAX = 10;
  var FUZZ = [{ s: 2.5, e: 7, f: 0.15 }, { s: 7, e: 20, f: 0.1 }, { s: 20, e: Infinity, f: 0.05 }];
  var LEARNING = 1, REVIEW = 2, RELEARNING = 3;
  var AGAIN = 1, HARD = 2, GOOD = 3, EASY = 4;

  function pround(x) { /* come round() di Python: arrotonda .5 al pari */
    var f = Math.floor(x), d = x - f;
    if (d < 0.5) return f; if (d > 0.5) return f + 1; return (f % 2 === 0) ? f : f + 1;
  }
  function clampS(s) { return Math.max(s, SMIN); }
  function clampD(d) { return Math.min(Math.max(d, DMIN), DMAX); }

  function Scheduler(o) {
    o = o || {};
    this.w = (o.w || DEFAULT_W).slice();
    if (this.w.length === 21) this.w = this.w.concat(DEFAULT_W.slice(21));
    if (this.w.length !== 32) throw new Error("servono 21 o 32 parametri");
    for (var i = 0; i < 32; i++) if (!(this.w[i] >= LB[i] && this.w[i] <= UB[i])) throw new Error("parametro " + i + " fuori limiti: " + this.w[i]);
    this.retention = o.retention || 0.9;
    this.learningSteps = o.learningSteps || [];          /* ms; vuoto = una parola nuova entra subito in "ripasso" */
    this.relearningSteps = o.relearningSteps || [10 * MIN];
    this.maxInterval = o.maxInterval || 36500;
    this.fuzz = !!o.fuzz; this.rng = o.rng || Math.random;
    this.dial = typeof o.dial === "number" ? Math.min(1, Math.max(0, o.dial)) : 1;
    /* giorni trascorsi: di default giorni interi da 24 ore, come py-fsrs. Con dayOf (tempo -> numero del giorno) si contano
       i giorni del calendario, come Anki: la sera e la mattina dopo sono due giorni diversi anche se passano meno di 24 ore */
    this.dayOf = typeof o.dayOf === "function" ? o.dayOf : null;
    this.decay = -this.w[20];
    this.factor = Math.pow(0.9, 1 / this.decay) - 1;
  }
  var P = Scheduler.prototype;
  P.newCard = function (now) { return { state: LEARNING, step: 0, st: null, df: null, due: now || 0, last: null }; };
  P.elapsed = function (last, now) {
    return Math.max(0, this.dayOf ? this.dayOf(now) - this.dayOf(last) : Math.floor((now - last) / DAY));
  };
  P.retrievability = function (c, now) {
    if (c.last == null || c.st == null) return 0;
    var el = this.elapsed(c.last, now);
    return Math.pow(1 + this.factor * el / c.st, this.decay);
  };
  /* R in funzione del tempo trascorso in giorni (anche frazionari): per grafici e ordinamento */
  P.rAt = function (c, now) {
    if (c.last == null || c.st == null) return 0;
    var el = Math.max(0, (now - c.last) / DAY);
    return Math.pow(1 + this.factor * el / c.st, this.decay);
  };
  P.interval = function (S) {
    var i = (S / this.factor) * (Math.pow(this.retention, 1 / this.decay) - 1);
    i = pround(i); i = Math.max(i, 1); return Math.min(i, this.maxInterval);
  };
  P._s0 = function (r) { return clampS(this.w[r - 1]); };
  P._d0 = function (r, clamp) { var d = this.w[4] - Math.exp(this.w[5] * (r - 1)) + 1; return clamp ? clampD(d) : d; };
  P._shortS = function (S, r) {
    var inc = Math.exp(this.w[17] * (r - 3 + this.w[18])) * Math.pow(S, -this.w[19]);
    if (r >= HARD) inc = Math.max(inc, 1);
    return clampS(S * inc);
  };
  P._nextD = function (D, r) {
    var a1 = this._d0(EASY, false), delta = -(this.w[6] * (r - 3));
    var a2 = D + (10 - D) * delta / 9;
    return clampD(this.w[7] * a1 + (1 - this.w[7]) * a2);
  };
  P._forgetS = function (D, S, R) {
    var lt = this.w[11] * Math.pow(D, -this.w[12]) * (Math.pow(S + 1, this.w[13]) - 1) * Math.exp((1 - R) * this.w[14]);
    var st = S / Math.exp(this.w[17] * this.w[18]);
    return Math.min(lt, st);
  };
  P._recallS = function (D, S, R, r) {
    var hp = r === HARD ? this.w[15] : 1, eb = r === EASY ? this.w[16] : 1;
    return S * (1 + Math.exp(this.w[8]) * (11 - D) * Math.pow(S, -this.w[9]) * (Math.exp((1 - R) * this.w[10]) - 1) * hp * eb);
  };
  P._fuzzed = function (days) {
    if (days < 2.5) return days;
    var delta = 1;
    for (var i = 0; i < FUZZ.length; i++) delta += FUZZ[i].f * Math.max(Math.min(days, FUZZ[i].e) - FUZZ[i].s, 0);
    var lo = pround(days - delta), hi = pround(days + delta);
    lo = Math.max(2, lo); hi = Math.min(hi, this.maxInterval); lo = Math.min(lo, hi);
    return Math.min(pround(this.rng() * (hi - lo + 1) + lo), this.maxInterval);
  };
  /* un ripasso: restituisce una NUOVA carta. meta (tutto facoltativo): type (id dell'esercizio), kind "mc"|"type", k (opzioni),
     tone (sbagliato solo il tono), hint (c'era una frase d'aiuto), comps (stabilità dei caratteri già studiati), ncomp (caratteri
     della parola), ms + base (tempo di risposta e tempo abituale dell'utente), nights (notti, solo se date dal chiamante) */
  P.review = function (card, rating, now, meta) {
    var m = meta || {}, c = { state: card.state, step: card.step, st: card.st, df: card.df, due: card.due, last: card.last };
    var since = c.last != null ? this.elapsed(c.last, now) : null;
    var interval; /* ms */
    var self = this, w = this.w, dial = this.dial, saved = false;
    var k = m.k || (m.kind === "mc" || /^mc-/.test(m.type || "") ? 4 : 0), M = m.kind === "type" ? 1 : 0.45;
    var cs = (m.comps || []).filter(function (x) { return x > 0; }), sBar = 0, fPrior = 0;
    if (cs.length) { for (var j = 0; j < cs.length; j++) sBar += cs[j]; sBar /= cs.length; fPrior = Math.min(1, cs.length / Math.max(1, m.ncomp || cs.length)); }
    var morph = dial * w[28] * Math.log(1 + sBar) * fPrior;   /* giorni di stabilità «in prestito» dai caratteri già noti */
    function days(d) { return d * DAY; }
    function toReview() { c.state = REVIEW; c.step = null; return days(self.interval(c.st)); }
    function updateS() {
      if (c.st == null || c.df == null) { c.st = clampS(self._s0(rating) + (rating >= HARD ? morph : 0)); c.df = clampD(self._d0(rating, false) - dial * w[29] * fPrior); return; }
      if (since !== null && since < 1) { c.st = self._shortS(c.st, rating); c.df = self._nextD(c.df, rating); return; }
      var S = c.st, D = c.df, R = self.retrievability(c, now), ds = self._nextD(D, rating);
      if (rating === AGAIN) {
        var f = self._forgetS(D, S, R);
        if (m.tone && dial > 0 && c.state === REVIEW) { /* sbagliato solo il tono: si salva parte del solco, in proporzione a R */
          c.st = clampS(Math.max(0.1, f + dial * Math.max(0, S * w[26] - f) * R));
          ds = clampD(w[7] * self._d0(EASY, false) + (1 - w[7]) * (D + 2 * w[6] * (1 - dial * w[27]) * (10 - D) / 9));
          saved = true;
        } else c.st = clampS(f * (1 + dial * w[23] * Math.max(0, M - 0.45)));
      } else {
        var s6 = self._recallS(D, S, R, rating), phi = 1 + w[21] * (M - 0.45);   /* sforzo richiesto dall'esercizio */
        if (k > 0) phi *= Math.max(0.5, 1 - w[22] / k);                                             /* a caso si indovina 1 volta su k */
        if (m.hint || /^(buco|ordina|ascolto-frase|minidialogo)/.test(m.type || "")) phi /= 1 + w[30];   /* una frase aiuta a ricordare */
        if (m.nights > 1) phi *= 1 + w[31] * (Math.exp(-1) - Math.exp(-m.nights)) / (1 + S / 7);   /* notti di sonno oltre la prima */
        if (m.base > 0 && m.ms >= 250 && m.ms <= 30000 && w[24] + w[25] > 1e-6) phi *= 1 + (w[24] - w[25]) / 2 - (w[24] + w[25]) / 2 * Math.tanh(Math.log(m.ms / m.base) - Math.atanh((w[25] - w[24]) / (w[24] + w[25])));
        phi = 1 + dial * (Math.min(1.8, Math.max(0.4, phi)) - 1);
        var md = morph > 0 ? morph * (1 - R) * Math.exp(-S / sBar) : 0;
        c.st = clampS(phi === 1 && !md ? s6 : S + Math.max(0, s6 - S) * phi + md);
      }
      c.df = ds;
    }
    updateS();
    if (c.state === REVIEW) {
      if (rating === AGAIN && !saved) {
        if (this.relearningSteps.length === 0) interval = days(this.interval(c.st));
        else { c.state = RELEARNING; c.step = 0; interval = this.relearningSteps[0]; }
      } else interval = days(this.interval(c.st));
    } else { /* LEARNING e RELEARNING: stessi passi, liste diverse */
      var rs = c.state === LEARNING ? this.learningSteps : this.relearningSteps;
      if (rs.length === 0 || (c.step >= rs.length && rating >= HARD)) interval = toReview();
      else if (rating === AGAIN) { c.step = 0; interval = rs[0]; }
      else if (rating === HARD) {
        if (c.step === 0 && rs.length === 1) interval = rs[0] * 1.5;
        else if (c.step === 0 && rs.length >= 2) interval = (rs[0] + rs[1]) / 2;
        else interval = rs[c.step];
      } else if (rating === GOOD) {
        if (c.step + 1 === rs.length) interval = toReview(); else { c.step += 1; interval = rs[c.step]; }
      } else interval = toReview();
    }
    if (this.fuzz && c.state === REVIEW) interval = days(this._fuzzed(Math.floor(interval / DAY)));
    c.due = now + interval; c.last = now;
    return c;
  };

  /* ---- calibrazione leggera (NON e' l'ottimizzatore ufficiale) ----
     Dato un log [{R_prevista, ok}], misura la ritenzione osservata a fasce di R (grafico previsto-vs-reale) e
     stima UN solo fattore correttivo del decadimento con ricerca a griglia sulla log-loss. */
  function calibrate(log, w) {
    var n = log.length, bins = [];
    for (var b = 0; b < 10; b++) bins.push({ lo: b / 10, hi: (b + 1) / 10, n: 0, ok: 0, p: 0 });
    log.forEach(function (e) { var i = Math.min(9, Math.floor(e.r * 10)); bins[i].n++; bins[i].ok += e.ok ? 1 : 0; bins[i].p += e.r; });
    bins.forEach(function (x) { x.pred = x.n ? x.p / x.n : null; x.real = x.n ? x.ok / x.n : null; });
    var best = { k: 1, ll: Infinity };
    for (var k = 0.5; k <= 2.0001; k += 0.05) {
      var ll = 0;
      log.forEach(function (e) { /* k scala il "tempo effettivo": R' = R^k */
        var p = Math.min(0.999, Math.max(0.001, Math.pow(e.r, k))); ll -= e.ok ? Math.log(p) : Math.log(1 - p);
      });
      if (ll < best.ll) best = { k: Math.round(k * 100) / 100, ll: ll };
    }
    var obs = n ? log.filter(function (e) { return e.ok; }).length / n : null;
    var pred = n ? log.reduce(function (a, e) { return a + e.r; }, 0) / n : null;
    return { n: n, observed: obs, predicted: pred, bins: bins, k: best.k };
  }

  /* il giorno di studio cambia alle 4 del mattino (ora locale), come in Anki */
  function studyDay(t) { var d = new Date(t - 4 * 3600000); return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY); }

  var FSRS = { studyDay: studyDay, Scheduler: Scheduler, DEFAULT_W: DEFAULT_W, LB: LB, UB: UB, LEARNING: LEARNING, REVIEW: REVIEW, RELEARNING: RELEARNING,
    AGAIN: AGAIN, HARD: HARD, GOOD: GOOD, EASY: EASY, DAY: DAY, pround: pround, calibrate: calibrate, VERSION: "FSRS-6 + ML-FSRS-32.1 (py-fsrs, 32 parametri)" };
  root.FSRS = FSRS;
  if (typeof module !== "undefined" && module.exports) module.exports = FSRS;
})(typeof window !== "undefined" ? window : globalThis);
