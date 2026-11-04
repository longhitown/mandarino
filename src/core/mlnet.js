/* ML-FSRS-NET: motore integrato per l'app (in app solo in modalita' ombra). Compone:
   A = FSRS-6 (src/core/fsrs.js con dial 0: identico a py-fsrs)   B = ML-FSRS-32.1 (fsrs.js, dial 1)   C = FSRS-7 (fsrs7.js, porting di fsrs-rs, intervalli frazionari)
   Guard (e-process / e-detector, guard.js): decide quale motore e' ATTIVO; A e' sempre la rete di sicurezza e parte attivo.   Head (head.js): ricalibrazione bayesiana online.
   Richiede FSRS (fsrs.js), FSRS7, MLNetGuard, MLNetHead gia' caricati.  API:
     e = new MLNetEngine({ desiredRetention: 0.9 })
     r = e.predict(cardId, nowMs, ctx)                   -> { p, engine, raw:{A,B,C} }      // PRIMA di rispondere; ctx = { k, M, hint, rtPrev, load, kind, type, ms, base, tone, nights, comps, ncomp }
     o = e.review(cardId, nowMs, rating, ctx)            -> { p, engine, dueMs, intervalDays, targetR }  // DOPO la risposta (rating 1-4)
   Un ripasso e' VALUTATO dalla guardia/testa solo se la carta ha un ripasso precedente e sono passati >= 1 giorno (dove FSRS-6/ML-FSRS sanno prevedere). */
(function (root) {
  "use strict";
  var DAY = 86400000;
  function MLNetEngine(opts) {
    opts = opts || {};
    this.dr = opts.desiredRetention || 0.9;
    this.A = new root.FSRS.Scheduler({ dial: 0, retention: this.dr, fuzz: false, dayOf: root.FSRS.studyDay });
    this.B = new root.FSRS.Scheduler({ dial: 1, retention: this.dr, fuzz: false, dayOf: root.FSRS.studyDay });
    this.w7 = opts.w7 || root.FSRS7.DEFAULT_W;
    this.guard = new root.MLNetGuard.Guard({ engines: ["B", "C"], calibrate: false, alphaUp: opts.alphaUp || 0.01, alphaDown: opts.alphaDown || 5e-5 });
    this.heads = {}; this.cards = new Map(); this.dayLoad = {}; this.nObs = 0; this.log = [];
    ["A", "B", "C"].forEach(function (e) { this.heads[e] = new root.MLNetHead.Head({ nx: 4, minN: 40 }); }, this);
  }
  function feat(ctx, c) {
    var load = Math.min(1, (ctx.load || 0) / 60);
    return [Math.max(-2, Math.min(2, c.rtPrev || 0)) / 2, load, ctx.M ? 1 : 0, ctx.hint ? 1 : 0];
  }
  MLNetEngine.prototype._card = function (id, now) {
    var c = this.cards.get(id);
    if (!c) { c = { a: this.A.newCard(now), b: this.B.newCard(now), s7: null, last: null, rtPrev: 0, n: 0 }; this.cards.set(id, c); }
    return c;
  };
  MLNetEngine.prototype._raw = function (c, now) {
    if (c.last === null || c.a.st == null) return null;
    var el = this.A.elapsed(c.last, now), dt = Math.max(0, (now - c.last) / DAY);
    return { scored: el >= 1, A: this.A.retrievability(c.a, now), B: this.B.retrievability(c.b, now), C: root.FSRS7.retrievability(this.w7, dt, c.s7), el: el };
  };
  MLNetEngine.prototype.predict = function (id, now, ctx) {
    ctx = ctx || {};
    var c = this._card(id, now), raw = this._raw(c, now);
    if (!raw) return { p: null, engine: this.guard.active, raw: null };
    var e = this.guard.active, x = feat(ctx, c), k = ctx.k || 0;
    var p = this.heads[e].predict(raw[e], k, x);
    if (!isFinite(p)) p = Math.min(0.9999, Math.max(0.0001, raw.A));
    return { p: p, engine: e, raw: raw };
  };
  /* ritenzione-obiettivo del motore attivo corretta dalla testa (monotona: si inverte il ramo senza struttura ne' caratteristiche, cioe' ripasso di carta/scrittura tipico) */
  MLNetEngine.prototype._targetR = function (e) {
    var h = this.heads[e], dr = this.dr;
    if (h.n < h.minN) return dr;
    var a = h.th[0], b = h.th[1];
    if (!(a > 0.2)) return dr;
    var t = 1 / (1 + Math.exp(-((Math.log(dr / (1 - dr)) - b) / a)));
    return Math.min(0.97, Math.max(0.6, t));
  };
  MLNetEngine.prototype.review = function (id, now, rating, ctx) {
    ctx = ctx || {};
    var c = this._card(id, now), raw = this._raw(c, now), y = rating >= 2 ? 1 : 0, meta = {
      kind: ctx.kind, type: ctx.type, k: ctx.k, tone: ctx.tone, hint: ctx.hint, ms: ctx.ms, base: ctx.base, nights: ctx.nights, comps: ctx.comps, ncomp: ctx.ncomp }, pred = null;
    if (raw && raw.scored) {
      var x = feat(ctx, c), k = ctx.k || 0;
      pred = this.guard.observe({ A: raw.A, B: raw.B, C: raw.C }, y);        // aggiorna e-process / e-detector con le tre previsioni grezze
      ["A", "B", "C"].forEach(function (e) { if (isFinite(raw[e])) this.heads[e].observe(raw[e], k, x, y); }, this);
      this.nObs++;
    }
    // aggiornamento degli stati dei tre motori
    var dt = c.last === null ? 0 : Math.max(0, (now - c.last) / DAY);
    c.a = this.A.review(c.a, rating, now, meta); c.b = this.B.review(c.b, rating, now, meta);
    c.s7 = c.s7 === null ? root.FSRS7.firstState(this.w7, rating) : root.FSRS7.nextState(this.w7, c.s7, dt, rating);
    c.last = now; c.n++;
    if (ctx.ms > 0 && ctx.base > 0) c.rtPrev = Math.log(Math.max(50, ctx.ms) / Math.max(50, ctx.base));
    // intervallo dal motore attivo, alla ritenzione-obiettivo corretta
    var e = this.guard.active, tr = this._targetR(e), dueMs, ivDays;
    if (e === "C") { ivDays = root.FSRS7.nextInterval(this.w7, c.s7, tr); dueMs = now + ivDays * DAY; }
    else { var card = e === "A" ? c.a : c.b, sch = this[e], old = sch.retention; sch.retention = tr; ivDays = card.state === 2 ? sch.interval(card.st) : Math.max(0, (card.due - now) / DAY); sch.retention = old; dueMs = card.state === 2 ? now + ivDays * DAY : card.due; }
    return { p: pred ? pred.p : null, engine: e, dueMs: dueMs, intervalDays: ivDays, targetR: tr };
  };
  root.MLNetEngine = MLNetEngine;
  if (typeof module !== "undefined" && module.exports) module.exports = MLNetEngine;
})(typeof window !== "undefined" ? window : globalThis);
