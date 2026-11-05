/* ===== màndarínō · abilità invisibili: le coppie di toni e i componenti dei caratteri. Nessun pulsante, nessuna schermata: lavorano dentro il motore del ripasso.
   1) Coppie di toni come «carte abilità». Ogni coppia di toni parlati di una parola di due sillabe (come si dice davvero, dopo il sandhi: CP.sandhi) ha la sua
      carta FSRS, separata da quelle delle parole: «33>23» è la coppia scritta 3+3 che si dice 2+3, «24» è 2° + 4°… Si aggiorna quando la persona risponde a una
      domanda sui toni di una parola (Duotono, esercizio «tono-parola» del ripasso) e quando sbaglia solo il tono di una parola di due sillabe. Serve a scegliere:
      Duotono fa uscire più spesso le coppie deboli, il ripasso (Misto/Guidato) propone «tono-parola» quando la coppia è in scadenza, la verifica di tappa lo usa
      per la parte «pinyin e toni». La verifica misura soltanto: non aggiorna nessuna carta.
   2) Componenti, solo come suggerimento IN OMBRA. Un componente (un radicale, la parte fonetica…) tiene il conto dei ripassi delle parole che lo contengono. Se due
      parole diverse con lo stesso componente sono state sbagliate in 14 giorni, nasce un «suggerimento» (di micro-ripasso del componente) che NON viene mai mostrato e
      NON tocca la coda. Si misura soltanto se avrebbe servito: i ripassi che arrivano con un suggerimento attivo sono confrontati, dal motore in ombra
      (core/mlnet-ombra.js), con quello che i motori prevedevano. Se i suggerimenti non aggiungono informazione, si tolgono; se la aggiungono, un'altra PR li mostrerà.
   Tutto sta in cp-ex-v1.sk (stesso posto degli esercizi, stessa unione tra dispositivi, core/store.js) e resta sul dispositivo. CP.skills si carica al primo uso
   (la prima valutazione di una carta) e non pesa sull'avvio. Ogni errore qui dentro è inghiottito: il ripasso non dipende da questo file. ===== */
(function () {
  var CP = window.CP, KEY = "cp-ex-v1", DAY = 86400000, COOL = 6 * 3600000, SCH = null, asked = 0;
  function sch() { return SCH || (SCH = new FSRS.Scheduler({ retention: 0.9, fuzz: false, dayOf: FSRS.studyDay })); }
  function load() { try { var o = JSON.parse(localStorage.getItem(KEY) || "null"); return o && typeof o === "object" ? o : {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  /* sk = { p: coppie { chiave: { c: carta, n, ok, lq } }, c: componenti { carattere: { n, f, h, l, fw, sg } }, g: suggerimenti [ { c, t, ws, a, af } ] } */
  function sk(o) { var s = o.sk = o.sk && typeof o.sk === "object" ? o.sk : {}; s.p = s.p || {}; s.c = s.c || {}; s.g = s.g || []; return s; }

  /* ---- coppie di toni ---- */
  /* la coppia di toni di una parola di due sillabe e due caratteri, senza le ambigue e le parole con un tono non riconosciuto; null altrimenti */
  function pairOf(w) {
    if (!w || !w.hz || !CP.sandhi || Array.from(w.hz).length !== 2 || CP.syllables(w.py).length !== 2) return null;
    var r = CP.sandhi(w.hz, w.py); if (r.amb || r.parl.length !== 2 || r.parl.some(function (t) { return t < 1 || t > 5; })) return null;
    var chg = r.cit.join() !== r.parl.join();
    return { key: chg ? r.cit.join("") + ">" + r.parl.join("") : r.parl.join(""), parl: r.parl, cit: r.cit, sd: chg };
  }
  function rOf(e, now) { return e && e.c ? sch().rAt(e.c, now || Date.now()) : null; }
  /* debole 1 (R < 70 %), media 2 (< 90 %), solida 3; 0 = parola senza coppia o coppia mai provata */
  function bucket(k) {
    var P = pairOf(CP.WORDS[k]), e = P && sk(load()).p[P.key], r = rOf(e); if (r == null) return 0;
    return r < 0.7 ? 1 : r < 0.9 ? 2 : 3;
  }
  /* il peso con cui una coppia viene scelta (Duotono): 1 se solida, fino a 4 se debole, 1.5 se mai provata */
  function weight(key) { var r = rOf(sk(load()).p[key]); return r == null ? 1.5 : 1 + 3 * (1 - r); }
  /* il ripasso può proporre «tono-parola» per questa parola? coppia in scadenza (R < 85 %) e non chiesta da meno di 6 ore, o mai provata ma con la parola già nota;
     al massimo tre volte per apertura dell'app, così non diventa un esercizio fisso */
  function eligible(w) {
    var P = pairOf(w); if (!P || asked >= 3) return false;
    var e = sk(load()).p[P.key], now = Date.now();
    if (e && e.lq && now - e.lq < COOL) return false;
    if (!e) return CP.state(w.key) >= 2 && Math.random() < 0.3;
    var r = rOf(e, now); return r != null && r < 0.85;
  }
  /* una risposta sui toni della coppia: giusta = «Bene», sbagliata = «Di nuovo». Più risposte giuste lo stesso giorno contano una volta (come per le parole) */
  function observe(key, right, now, src) {
    if (!key) return; now = now || Date.now(); if (src === "ex") asked++;
    var o = load(), s = sk(o), e = s.p[key] || { n: 0, ok: 0 }, card = e.c || sch().newCard(now);
    var same = e.c && card.state === FSRS.REVIEW && card.last != null && FSRS.studyDay(card.last) === FSRS.studyDay(now);
    if (!same || !right) e.c = sch().review(card, right ? 3 : 1, now, { kind: "mc", k: 4 });
    e.n++; if (right) e.ok++; e.lq = now; s.p[key] = e; save(o);
  }
  function observeWord(w, right, now) { var P = pairOf(w); if (P) observe(P.key, right, now); }

  /* ---- componenti (solo in ombra) ---- */
  function compsOf(k) {
    var w = CP.WORDS[k], out = [], seen = {}; if (!w || !CP.anatomy) return out;
    Array.from(w.hz).forEach(function (ch) {
      var a = CP.anatomy.get(ch); if (!a) return;
      a.parts.forEach(function (p) { if (Array.from(p).length === 1 && p !== ch && !seen[p]) { seen[p] = 1; out.push(p); } });
    });
    return out;
  }
  var WIN = 21 * DAY;
  function compActive(k) {
    var s = sk(load()), now = Date.now();
    return compsOf(k).some(function (c) { var x = s.c[c]; return x && x.sg && now - x.sg < WIN; });
  }
  /* dopo ogni ripasso vero di una parola: aggiorna i componenti e, se due parole diverse con lo stesso componente sono state sbagliate in 14 giorni, scrive un suggerimento
     (mai mostrato); i ripassi che arrivano con un suggerimento attivo contano come «dopo» di quel suggerimento */
  function components(k, fail, now) {
    var o = load(), s = sk(o), cs = compsOf(k);
    cs.forEach(function (c) {
      var x = s.c[c] || (s.c[c] = { n: 0, f: 0, h: "", l: 0, fw: [] });
      x.n++; if (fail) x.f++; x.h = (x.h + (fail ? "1" : "0")).slice(-12); x.l = now;
      if (x.sg && now - x.sg < WIN) { var g = s.g.filter(function (q) { return q.c === c && q.t === x.sg; })[0]; if (g) { g.a = (g.a || 0) + 1; if (fail) g.af = (g.af || 0) + 1; } }
      if (!fail) return;
      x.fw = x.fw.filter(function (q) { return now - q[1] < 14 * DAY && q[0] !== k; }).concat([[k, now]]).slice(-6);
      if (x.fw.length >= 2 && !(x.sg && now - x.sg < 7 * DAY)) { x.sg = now; s.g.push({ c: c, t: now, ws: x.fw.map(function (q) { return q[0]; }), a: 0, af: 0 }); s.g = s.g.slice(-40); }
    });
    var ks = Object.keys(s.c); if (ks.length > 600) ks.sort(function (a, b) { return s.c[a].l - s.c[b].l; }).slice(0, ks.length - 600).forEach(function (c) { delete s.c[c]; });
    save(o);
  }

  /* chiamata da CP.grade dopo ogni ripasso vero (non le ripetizioni nella stessa sessione) */
  function fromGrade(k, g, meta, now, retry) {
    if (retry) return;
    var fail = g === 0;
    if (fail && meta && meta.tone && meta.type !== "tono-parola") observeWord(CP.WORDS[k], false, now);
    setTimeout(function () { try { components(k, fail, now); } catch (e) {} }, 0);   /* le anatomie si leggono quando l'app è libera */
  }

  function report() {
    var s = sk(load()), now = Date.now(), sh = null; try { sh = CP.mlnetShadow && CP.mlnetShadow.report(); } catch (e) {}
    return {
      pairs: Object.keys(s.p).map(function (k) { var e = s.p[k]; return { key: k, n: e.n, ok: e.ok, r: rOf(e, now) }; }).sort(function (a, b) { return (a.r == null ? 1 : a.r) - (b.r == null ? 1 : b.r); }),
      comps: { tracked: Object.keys(s.c).length, suggested: s.g.length, after: s.g.reduce(function (n, q) { return n + (q.a || 0); }, 0), afterFail: s.g.reduce(function (n, q) { return n + (q.af || 0); }, 0) },
      sugg: s.g.slice(), shadow: sh ? { psk: sh.psk || {}, csg: sh.csg || {} } : null
    };
  }
  CP.skills = { pairOf: pairOf, observe: observe, observeWord: observeWord, weight: weight, eligible: eligible, bucket: bucket, compActive: compActive, fromGrade: fromGrade, report: report };
})();
