/* FSRS-7 in JavaScript puro (float64): porting delle formule di fsrs-rs (open-spaced-repetition/fsrs-rs, licenza BSD-3-Clause, Copyright (c) 2023 Open Spaced Repetition)
   src/model_v7.rs, model.rs, parameter_clipper_v7.rs, inference_v7.rs. Stato di memoria a TRE variabili: stabilita' lenta S, difficolta' D, stabilita' veloce Sf.
   Curva dell'oblio = miscela di due leggi di potenza (traccia veloce e lenta) con pesi che dipendono da S, Sf e D; intervalli FRAZIONARI; i ripassi nello stesso giorno usano le stesse formule.
   In app solo in MODALITA' OMBRA (core/mlnet-ombra.js): calcola, non decide mai un intervallo. Verificato contro fsrs-rs in fsrs7/test_differenziale7.py (float32 nell'oracolo, float64 qui: ci si aspetta differenze ~1e-6). */
(function (root) {
  "use strict";
  var S_MIN = 0.0001, S_MAX = 36500, D_MIN = 1, D_MAX = 10, DR_MIN = 0.0001, DR_MAX = 0.9999, MIN_T = 1 / 86400, INIT_S_MAX = 100, NEWTON_ITERS = 7, BISECT_ITERS = 50;
  var DEFAULT_W = [0.1104, 2.2395, 3.9221, 11.7841, 6.1686, 0.6457, 3.6807, 1.9795, 0.0, 1.3826, 0.7024, 0.5999, 0.8146, 0.6398, 1.0, 1.3207, 0.6707, 3.8668, 0.4416, 0.0934, 1.8631,
    0.6162, 1.0869, 0.1567, 0.0801, 0.2421, 0.9464, 0.1433, 0.7145, 0.0, 0.5667, 0.3734, 0.5333, 0.3048];
  function clamp(x, lo, hi) { return x < lo ? lo : x > hi ? hi : x; }
  function clampSafe(v, lo, hi) { if (!isFinite(lo)) lo = 0; if (!isFinite(hi)) hi = lo; if (lo > hi) { var t = lo; lo = hi; hi = t; } if (!isFinite(v)) v = lo; return clamp(v, lo, hi); }
  /* limiti dei parametri (parameter_clipper_v7.rs); alcuni dipendono dai parametri precedenti */
  function clip(w0) {
    var w = w0.slice();
    w[0] = clampSafe(w[0], S_MIN, INIT_S_MAX / 2); w[1] = clampSafe(w[1], w[0], INIT_S_MAX); w[2] = clampSafe(w[2], w[1], INIT_S_MAX); w[3] = clampSafe(w[3], w[2], INIT_S_MAX);
    w[4] = clampSafe(w[4], 1, 10); w[5] = clampSafe(w[5], 0.001, 4); w[6] = clampSafe(w[6], 0.1, 4);
    w[7] = clampSafe(w[7], 0, 4); w[8] = clampSafe(w[8], 0, 1.2); w[9] = clampSafe(w[9], 0.3, 3); w[10] = clampSafe(w[10], 0.01, 1.5); w[11] = clampSafe(w[11], 0.1, 1);
    w[12] = clampSafe(w[12], 0, 3.5); w[13] = clampSafe(w[13], 0, 1); w[14] = clampSafe(w[14], 1, 7);
    w[15] = clampSafe(w[15], 0, 4); w[16] = clampSafe(w[16], 0, 2); w[17] = clampSafe(w[17], 0.5, 6); w[18] = clampSafe(w[18], 0.001, 1.5); w[19] = clampSafe(w[19], 0.001, 1);
    w[20] = clampSafe(w[20], 0, 5); w[21] = clampSafe(w[21], 0, 1); w[22] = clampSafe(w[22], 1, 7);
    w[23] = clampSafe(w[23], 0.01, 0.25); w[24] = clampSafe(w[24], 0.01, 0.95); w[25] = clampSafe(w[25], 0.2, 0.85); w[26] = clampSafe(w[26], Math.max(w[25], 0.5), 0.99);
    w[27] = clampSafe(w[27], 0.01, 1); w[28] = clampSafe(w[28], 0.1, 1); w[29] = clampSafe(w[29], 0, 0.9); w[30] = clampSafe(w[30], 0.1, 1.1); w[31] = clampSafe(w[31], 0, 1);
    w[32] = clampSafe(w[32], 0, 0.6); w[33] = clampSafe(w[33], 0, 0.6);
    return w;
  }
  function initDifficulty(w, r) { return w[4] - Math.exp(w[5] * (r - 1)) + 1; }
  function nextDifficulty(w, d, r, retention) {
    r = clamp(r, 1, 4);
    var dd = -w[6] * (r - 3);
    if (r === 1) dd *= (retention + 0.1);
    var nd = d + (10 - d) * dd / 9;
    return clamp(initDifficulty(w, 4) * 0.01 + nd * 0.99, D_MIN, D_MAX);
  }
  function stabilityForSet(w, lastS, lastD, R, r, start) {
    r = clamp(r, 1, 4);
    var hard = r === 2 ? w[start + 6] : 1, easy = r === 4 ? w[start + 7] : 1;
    var fail = w[start + 3] * (Math.pow(lastS + 1, w[start + 4]) - 1) * Math.exp((1 - R) * w[start + 5]);
    var pls = Math.min(lastS, fail);
    var sinc = Math.exp(w[start] - 1.5) * (11 - lastD) * Math.pow(lastS, -w[start + 1]) * (Math.exp((1 - R) * w[start + 2]) - 1) * hard * easy + 1;
    var succ = Math.max(pls, lastS * sinc);
    return clamp(r > 1 ? succ : pls, S_MIN, S_MAX);
  }
  function fastRecall(w, t, sf) {
    t = Math.max(t, 0); sf = clamp(sf, S_MIN, S_MAX);
    var mag = clamp(w[23] * Math.pow(sf, w[33] - 0.3), 0.01, 0.95), dec = -mag;
    var f1 = Math.exp(Math.min(Math.log(w[25]) / dec, 60)) - 1;
    return Math.pow(1 + f1 * (t / sf), dec);
  }
  /* curva dell'oblio R(t | S, D, Sf) -- miscela di due leggi di potenza */
  function retrievability(w, t, st) {
    t = Math.max(t, 0);
    var s = Math.max(st.s, S_MIN), sf = Math.max(st.sf, S_MIN), d = clamp(st.d, D_MIN, D_MAX);
    var mag1 = clamp(w[23] * Math.pow(sf, w[33] - 0.3), 0.01, 0.95), dec1 = -mag1;
    var f1 = Math.exp(Math.min(Math.log(w[25]) / dec1, 60)) - 1;
    var r1 = Math.pow(1 + f1 * (t / sf), dec1);
    var dec2 = -clamp(w[24], 0.01, 0.95);
    var f2 = Math.pow(w[26], 1 / dec2) - 1;
    var dts = Math.exp((d - 5) * (w[32] - 0.3));
    var r2 = Math.pow(1 + f2 * dts * (t / s), dec2);
    var w1 = w[27] * Math.pow(sf, -w[29]);
    var w2 = w[28] * Math.pow(s, w[30]) * Math.exp((d - 5) * (w[31] - 0.5));
    var ret = (w1 * r1 + w2 * r2) / (w1 + w2);
    return ret * (1 - 2e-5) + 1e-5;
  }
  function retAndDerivative(w, t, st) {
    t = Math.max(t, 0);
    var s = Math.max(st.s, S_MIN), sf = Math.max(st.sf, S_MIN), d = clamp(st.d, D_MIN, D_MAX);
    var mag1 = clamp(w[23] * Math.pow(sf, w[33] - 0.3), 0.01, 0.95), dec1 = -mag1;
    var f1 = Math.exp(Math.min(Math.log(w[25]) / dec1, 60)) - 1;
    var b1 = 1 + f1 * (t / sf), r1 = Math.pow(b1, dec1), dr1 = dec1 * Math.pow(b1, dec1 - 1) * f1 / sf;
    var dec2 = -clamp(w[24], 0.01, 0.95);
    var f2 = Math.pow(w[26], 1 / dec2) - 1;
    var dts = Math.exp((d - 5) * (w[32] - 0.3));
    var b2 = 1 + f2 * dts * (t / s), r2 = Math.pow(b2, dec2), dr2 = dec2 * Math.pow(b2, dec2 - 1) * f2 * dts / s;
    var w1 = w[27] * Math.pow(sf, -w[29]);
    var w2 = w[28] * Math.pow(s, w[30]) * Math.exp((d - 5) * (w[31] - 0.5));
    var ws = Math.max(w1 + w2, 1e-9);
    return [((w1 * r1 + w2 * r2) / ws) * (1 - 2e-5) + 1e-5, ((w1 * dr1 + w2 * dr2) / ws) * (1 - 2e-5)];
  }
  /* primo ripasso */
  function firstState(w, r) {
    r = clamp(r, 1, 4);
    var s = clamp(w[r - 1], S_MIN, S_MAX);
    return { s: s, d: clamp(initDifficulty(w, r), D_MIN, D_MAX), sf: clamp(s * 0.8, S_MIN, S_MAX) };
  }
  /* ripasso successivo dopo dt giorni (anche frazionari) -- stesse formule per ripassi dello stesso giorno */
  function nextState(w, st, dt, r) {
    dt = Math.max(dt, 0); r = clamp(r, 1, 4);
    var R = retrievability(w, dt, st);
    var ns = stabilityForSet(w, st.s, st.d, R, r, 7);
    var rf = fastRecall(w, dt, st.sf);
    var nf = stabilityForSet(w, st.sf, st.d, rf, r, 15);
    if (r === 1) nf = Math.min(nf, ns * 0.8);
    return { s: ns, d: nextDifficulty(w, st.d, r, R), sf: clamp(nf, S_MIN, S_MAX) };
  }
  function intervalBisection(w, st, dr) {
    dr = clamp(dr, DR_MIN, DR_MAX);
    if (dr >= DR_MAX) return 0;
    var lo = 0, hi = Math.max(st.s, st.sf, 1);
    while (retrievability(w, hi, st) > dr && hi < S_MAX) hi = Math.min(hi * 2, S_MAX);
    for (var i = 0; i < BISECT_ITERS; i++) { var mid = (lo + hi) / 2; if (retrievability(w, mid, st) > dr) lo = mid; else hi = mid; }
    return clamp((lo + hi) / 2, 0, S_MAX);
  }
  /* intervallo (giorni, frazionario) alla ritenzione desiderata: Newton in log t con ripiego sulla bisezione, come fsrs-rs */
  function nextInterval(w, st0, dr) {
    dr = clamp(dr, DR_MIN, DR_MAX);
    if (dr >= DR_MAX) return 0;
    var st = { s: clamp(st0.s, S_MIN, S_MAX), d: clamp(st0.d, D_MIN, D_MAX), sf: clamp(st0.sf, S_MIN, S_MAX) };
    var minLog = Math.log(MIN_T), maxLog = Math.log(S_MAX), logT = Math.log(Math.max(st.s, st.sf, MIN_T)), i, t, rd, dfdu, step;
    for (i = 0; i < NEWTON_ITERS; i++) {
      logT = clamp(logT, minLog, maxLog); t = clamp(Math.exp(logT), MIN_T, S_MAX);
      rd = retAndDerivative(w, t, st); dfdu = Math.min(rd[1] * t, -1e-12);
      step = clamp((rd[0] - dr) / dfdu, -4, 4); logT -= step;
      if (!isFinite(logT)) return intervalBisection(w, st, dr);
    }
    var interval = clamp(Math.exp(logT), 0, S_MAX);
    var r = retrievability(w, interval, st);
    return (isFinite(r) && Math.abs(r - dr) <= 1e-3) ? interval : intervalBisection(w, st, dr);
  }
  /* i quattro esiti possibili di un ripasso (come FSRS::next_states_with_elapsed_days); st = null per una carta nuova */
  function nextStates(w, st, dr, elapsedDays) {
    var out = {}, names = ["again", "hard", "good", "easy"], r, ns;
    for (r = 1; r <= 4; r++) {
      ns = st ? nextState(w, st, elapsedDays, r) : firstState(w, r);
      out[names[r - 1]] = { memory: ns, interval: nextInterval(w, ns, dr) };
    }
    return out;
  }
  var FSRS7 = { DEFAULT_W: DEFAULT_W, clip: clip, retrievability: retrievability, firstState: firstState, nextState: nextState, nextInterval: nextInterval, nextStates: nextStates, initDifficulty: initDifficulty, nextDifficulty: nextDifficulty,
    stabilityForSet: stabilityForSet, S_MIN: S_MIN, S_MAX: S_MAX, D_MIN: D_MIN, D_MAX: D_MAX, VERSION: "FSRS-7 (porting di fsrs-rs, BSD-3-Clause), float64" };
  root.FSRS7 = FSRS7;
  if (typeof module !== "undefined" && module.exports) module.exports = FSRS7;
})(typeof window !== "undefined" ? window : globalThis);
