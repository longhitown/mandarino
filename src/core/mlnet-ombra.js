/* ML-FSRS-NET in MODALITA' OMBRA. Non decide MAI un intervallo, non cambia nessun dato dei progressi: il motore che pianifica i ripassi resta FSRS (core/fsrs.js, core/core.js).
   Qui il motore candidato (FSRS-7 + ML-FSRS + guardia + testa di calibrazione, core/mlnet.js) guarda gli stessi ripassi e misura, solo su questo dispositivo, se avrebbe previsto meglio.
   Niente esce dal dispositivo e niente viene scritto: lo stato si ricostruisce dal registro dei ripassi (Store.logAll) all'avvio, a blocchi, senza bloccare l'interfaccia.
   Qualsiasi errore qui dentro viene inghiottito: la sicurezza dell'app non dipende da questo file.   API:  MLNetShadow.observe(k, rating, now, ctx)   MLNetShadow.report()  -> { n, loss:{A,B,C,head}, active, ready } */
(function (root) {
  "use strict";
  var EPS = 1e-4, eng = null, ready = false, off = false, n = 0, loss = { A: 0, B: 0, C: 0, M: 0 }, pending = [], ch = {}, psk = {}, csg = {};
  function ll(p, y) { p = Math.min(1 - EPS, Math.max(EPS, p)); return -Math.log(y ? p : 1 - p); }
  function engine() {
    if (!eng) { if (!(root.FSRS && root.FSRS7 && root.MLNetGuard && root.MLNetHead && root.MLNetEngine)) throw new Error("moduli mancanti"); eng = new root.MLNetEngine({ desiredRetention: 0.9 }); }
    return eng;
  }
  function feed(k, rating, now, ctx) {
    var e = engine(), pr = e.predict(k, now, ctx), raw = pr && pr.raw, o;
    if (raw && raw.scored) {
      var y = rating >= 2 ? 1 : 0;
      if (isFinite(raw.A)) loss.A += ll(raw.A, y); if (isFinite(raw.B)) loss.B += ll(raw.B, y); if (isFinite(raw.C)) loss.C += ll(raw.C, y);
      if (pr.p != null && isFinite(pr.p)) loss.M += ll(pr.p, y);
      /* per tipo di esercizio (ctx.type): quanto avrebbero previsto il motore di base (A) e la testa calibrata (M), contro com'è andata: serve a «Quanto ti conosco?» (study/conosci.js) */
      if (ctx && ctx.type && isFinite(raw.A) && pr.p != null && isFinite(pr.p)) { var c = ch[ctx.type] || (ch[ctx.type] = { n: 0, y: 0, pA: 0, pM: 0, lA: 0, lM: 0 }); c.n++; c.y += y; c.pA += raw.A; c.pM += pr.p; c.lA += ll(raw.A, y); c.lM += ll(pr.p, y); }
      /* abilità invisibili: i ripassi con una coppia di toni debole/media/solida (psk 1-3) e con un suggerimento di componente attivo (csg 1), confrontati con la previsione */
      if (ctx && isFinite(raw.A) && pr.p != null && isFinite(pr.p)) [["psk", ctx.psk, psk], ["csg", ctx.csg, csg]].forEach(function (z) { if (z[1] > 0) { var q = z[2][z[1]] || (z[2][z[1]] = { n: 0, y: 0, pA: 0, pM: 0 }); q.n++; q.y += y; q.pA += raw.A; q.pM += pr.p; } });
      n++;
    }
    o = e.review(k, now, rating, ctx);
    return o;
  }
  var M = {
    observe: function (k, rating, now, ctx) {
      if (off) return;
      try { if (!ready) { pending.push([k, rating, now, ctx]); return; } feed(k, rating, now, ctx); } catch (e) { off = true; }
    },
    /* ricostruzione dal registro: [ora, parola, voto 1-4, ms, tipo, previsione, ripetizione, {kd,k,tn,cp,nt,bs}?]; le ripetizioni nella stessa sessione sono saltate (come fa core.js quando non aggiornano la carta) */
    start: function () {
      if (off || !root.Store || !root.Store.logAll) { ready = true; return; }
      root.Store.logAll().then(function (all) {
        var rows = (all || []).filter(function (r) { return r && r.length >= 3 && !r[6]; }).sort(function (a, b) { return a[0] - b[0]; }), i = 0, seen = {};
        rows.forEach(function (r) { seen[r[0] + "|" + r[1]] = 1; });
        (function chunk() {
          try {
            var t = Date.now();
            while (i < rows.length && Date.now() - t < 12) {
              var r = rows[i++], x = r[7] || {};
              feed(r[1], r[2], r[0], { kind: x.kd, type: r[4], k: x.k, tone: x.tn, ms: r[3], base: x.bs, nights: x.nt, comps: x.cp, ncomp: x.cp && x.cp.length ? x.cp.length + 1 : 0 });
            }
            if (i < rows.length) return setTimeout(chunk, 0);
            ready = true; pending.forEach(function (p) { if (!seen[p[2] + "|" + p[0]]) feed(p[0], p[1], p[2], p[3]); }); pending = [];
          } catch (e) { off = true; }
        })();
      }, function () { ready = true; });
    },
    report: function () {
      var d = Math.max(1, n);
      return { n: n, ready: ready, off: off, active: eng ? eng.guard.active : "A", loss: { A: loss.A / d, B: loss.B / d, C: loss.C / d, head: loss.M / d }, ch: ch, psk: psk, csg: csg };
    }
  };
  root.MLNetShadow = M; if (root.CP) root.CP.mlnetShadow = M;   /* nel file unico il blocco si carica al primo accesso a CP.mlnetShadow */
  if (typeof setTimeout === "function" && typeof document !== "undefined") setTimeout(function () { try { M.start(); } catch (e) { off = true; } }, 3000);
  if (typeof module !== "undefined" && module.exports) module.exports = M;
})(typeof window !== "undefined" ? window : globalThis);
