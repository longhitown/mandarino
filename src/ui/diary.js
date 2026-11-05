/* ===== màndarínō · Taccuino del viaggiatore (corso di cinese; per il corso di italiano il viaggio al contrario, Guilin → Roma, con le lezioni superate).
   Un viaggio immaginario Roma → Guilin: le città (DIARY.stops, data/diary.js) si «sbloccano» con le tappe del Percorso
   finite (CP.pathDoneCount). Gli sbagli non sono penalità: se la persona ha davvero scambiato una coppia di parole simili
   (cp-ex-v1.conf, scritto da CP.exConf in study/memory.js), sulla pagina della città compare l'aneddoto scritto a mano.
   Senza sbagli il taccuino è bello lo stesso: le tappe e le parole raccolte lungo la strada.
   La mappa è un SVG disegnato qui, pulito e stilizzato ma con la geografia in ordine (nessuna libreria, nessuna rete). Ogni pagina si può
   trasformare in un'immagine (CP.shareCard, modello «zh-diary») solo se la persona lo sceglie. Caricato al primo uso (LAZYMOD). ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc, S = DIARY.stops, N = DIARY.notes, ZH = typeof LANG !== "undefined" && LANG === "zh";
  function lget(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
  /* il corso di italiano (per chi parla cinese) fa lo stesso viaggio al contrario: le stesse città, soglie in lezioni superate */
  var ITS = S.slice().reverse().map(function (s, j) { var o = {}; Object.keys(s).forEach(function (k) { o[k] = s[k]; }); o.th = DIARY.itTh[j]; return o; });
  function stopsOf(c) { return c === "it" ? ITS : S; }
  function city(i, st) { st = st || S; return ZH ? st[i].zh : st[i].it; }

  /* ---- dove si è arrivati ---- */
  function stopAt(n, st) { var i = 0; (st || S).forEach(function (s, j) { if (n >= s.th) i = j; }); return i; }
  function itLessons() { return typeof ITLESSONS === "undefined" ? [] : ITLESSONS.slice().sort(function (a, b) { return a.n - b.n; }); }
  function doneCount(c) {
    if (c !== "it") return CP.pathDoneCount ? CP.pathDoneCount() : 0;
    var P = lget("cp-it-lessons-v1") || {};
    return itLessons().filter(function (l) { var p = P[l.id] || {}; return p.done || (p.best || 0) >= 80; }).length;
  }
  /* le frasi della lezione che ha aperto la città (corso di italiano): fino a tre esempi, italiano + cinese */
  function examplesOfStop(i, st) {
    var L = itLessons(), l = i > 0 ? L[Math.min(L.length, st[i].th) - 1] : null;
    return l && l.ex ? l.ex.slice(0, 3).map(function (e) { return { it: e[0], zh: e[1] }; }) : [];
  }

  /* ---- gli aneddoti guadagnati: coppie scambiate nei dati, membri dell'insieme ---- */
  function member(m) { var p = m.split(" "); return { hz: p[0], py: p[1] }; }
  function plain(py) { return String(py).normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function toneOf(py) { var t = String(py).normalize("NFD"); return /̄/.test(t) ? 1 : /́/.test(t) ? 2 : /̌/.test(t) ? 3 : /̀/.test(t) ? 4 : 0; }
  /* la prova che questa persona ha scambiato i membri della nota: { n, ultimo, d } o null */
  function evidence(note, conf) {
    var ms = note.m.map(member), ev = null;
    Object.keys(conf || {}).forEach(function (k) {
      var p = k.split("|"), a = p[0], b = p[1], c = conf[k], hit = false;
      var ia = ms.filter(function (x) { return x.hz === a; })[0];
      if (!ia) return;
      if (b && b.charAt(0) === "~") {
        var tn = +b.slice(1);
        hit = Array.from(ia.hz).length === 1 && ms.some(function (y) { return y !== ia && Array.from(y.hz).length === 1 && plain(y.py) === plain(ia.py) && toneOf(y.py) === tn; });
      } else hit = ms.some(function (y) { return y.hz === b; });
      if (!hit) return;
      if (!ev) ev = { n: 0, ultimo: 0, d: 1e9 };
      ev.n += c.n || 1; ev.ultimo = Math.max(ev.ultimo, c.ultimo || 0); ev.d = Math.min(ev.d, c.d || 0);
    });
    return ev;
  }
  function earned() {
    var o = lget("cp-ex-v1") || {}, cf = o.conf || {}, out = [];
    N.forEach(function (n) { var ev = evidence(n, cf); if (ev) out.push({ note: n, ev: ev }); });
    return out;
  }

  /* ---- parole raccolte: le prime parole iniziate della tappa che ha aperto la città ---- */
  var SECK = null;
  function wordsOfSection(sec) {
    if (!SECK) { SECK = {}; CP.ORDER.forEach(function (k) { var w = CP.WORDS[k]; if (w) (SECK[w.sec] = SECK[w.sec] || []).push(k); }); }
    var ks = SECK[sec] || [], got = ks.filter(function (k) { return CP.state(k) >= 1; });
    return (got.length ? got : ks).slice(0, 5).map(function (k) { return CP.WORDS[k]; });
  }
  function wordsOfStop(i) {
    if (i < 1 || typeof SECTIONS === "undefined") return [];
    var sec = SECTIONS[Math.min(SECTIONS.length - 1, S[i].th - 1)];
    return sec ? wordsOfSection(sec.id) : [];
  }

  /* ---- le pagine: dalla più recente ---- */
  function build(c) {
    var st = stopsOf(c), n = doneCount(c), cur = stopAt(n, st), pages = [], i;
    if (c === "it") {
      for (i = 0; i <= cur; i++) pages.push({ i: i, st: st, course: "it", notes: [], words: [], ex: examplesOfStop(i, st) });
      return { n: n, cur: cur, st: st, course: "it", pages: pages.reverse() };
    }
    for (i = 0; i <= cur; i++) pages.push({ i: i, st: st, notes: [], words: wordsOfStop(i) });
    earned().forEach(function (e) { var p = pages[Math.min(cur, stopAt(e.ev.d === 1e9 ? n : e.ev.d))]; p.notes.push(e); });
    pages.forEach(function (p) { p.notes.sort(function (a, b) { return b.ev.ultimo - a.ev.ultimo; }); });
    return { n: n, cur: cur, st: st, pages: pages.reverse() };
  }
  function noteText(note, i) { return String(ZH ? note.zh : note.it).replace(/\{c\}/g, city(i)); }

  /* la mappa: carta pulita, geografia stilizzata ma ordinata (Ovest a sinistra, Nord in alto), tracciato a curve, nessun disegnino.
     Il corso di italiano la legge al contrario (Guilin → Roma): cambiano solo l'ordine delle tappe e il verso della freccia. */
  function curve(a, b, i) {
    var dx = b.x - a.x, dy = b.y - a.y, len = Math.sqrt(dx * dx + dy * dy) || 1, bow = (i % 2 ? 1 : -1) * Math.min(44, len * 0.2);
    return "M" + a.x + " " + a.y + " Q" + ((a.x + b.x) / 2 - dy / len * bow).toFixed(1) + " " + ((a.y + b.y) / 2 + dx / len * bow).toFixed(1) + " " + b.x + " " + b.y;
  }
  function mapSVG(cur, S) {
    S = S || stopsOf();
    var h = "", i, a, b, rev = S[0].id !== "roma", ax1 = rev ? 214 : 146, ax2 = rev ? 146 : 214;
    h += '<rect x="2" y="2" width="356" height="544" rx="12" class="dy-sheet"/><rect x="2" y="2" width="356" height="544" rx="12" fill="none" class="dy-edge" stroke-width="1"/>';
    /* il verso del viaggio: da una parte all'altra, non una bussola */
    h += '<g class="dy-flow"><path d="M' + ax1 + " 24 H" + ax2 + '" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M' + (ax2 + (rev ? 6 : -6)) + " 19 L" + ax2 + " 24 L" + (ax2 + (rev ? 6 : -6)) + ' 29" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<text x="' + (ax1 + (rev ? 6 : -6)) + '" y="28" text-anchor="' + (rev ? "start" : "end") + '" class="dy-n">' + esc(T(rev ? "dy.est" : "dy.ovest")) + '</text><text x="' + (ax2 + (rev ? -6 : 6)) + '" y="28" text-anchor="' + (rev ? "end" : "start") + '" class="dy-n">' + esc(T(rev ? "dy.ovest" : "dy.est")) + "</text></g>";
    /* il tracciato: pieno fin dove si è arrivati, a punti oltre */
    for (i = 0; i < S.length - 1; i++) {
      a = S[i]; b = S[i + 1];
      h += i < cur ? '<path d="' + curve(a, b, i) + '" fill="none" class="dy-road" stroke-width="2.6" stroke-linecap="round"/>' : '<path d="' + curve(a, b, i) + '" fill="none" class="dy-road-off" stroke-width="2" stroke-linecap="round" stroke-dasharray="1.5 7"/>';
    }
    /* le città: già raggiunta = piena; quella dove si è = cerchio cinabro con segno e anello; da raggiungere = cerchio vuoto con bordo arancio tenue */
    S.forEach(function (st, j) {
      var lp = st.lp || "r", cr = j === cur ? 15 : 10, tx = st.x, ty = st.y, anc = "middle", tick = '<path d="M' + (st.x - 3.6) + " " + (st.y + 0.2) + " l2.6 2.8 l5 -6" + '" class="dy-tick" fill="none"/>';
      if (j < cur) h += '<circle cx="' + st.x + '" cy="' + st.y + '" r="8" class="dy-done"/>' + tick;
      else if (j === cur) h += '<circle cx="' + st.x + '" cy="' + st.y + '" r="9.5" class="dy-seal"/><circle cx="' + st.x + '" cy="' + st.y + '" r="15" fill="none" class="dy-here" stroke-width="2"/>' + tick;
      else h += '<circle cx="' + st.x + '" cy="' + st.y + '" r="7.5" fill="none" class="dy-off" stroke-width="2"/>';
      if (lp === "r") { tx = st.x + cr + 6; ty = st.y + 4.5; anc = "start"; } else if (lp === "l") { tx = st.x - cr - 6; ty = st.y + 4.5; anc = "end"; } else if (lp === "a") { ty = st.y - cr - 6; } else if (lp === "al") { tx = st.x + 22; ty = st.y - cr - 6; anc = "end"; } else if (lp === "bl") { tx = st.x + 22; ty = st.y + cr + 15; anc = "end"; } else { ty = st.y + cr + 15; }
      h += '<text x="' + tx + '" y="' + ty + '" text-anchor="' + anc + '" class="dy-city' + (j > cur ? " off" : "") + (j === cur ? " cur" : "") + '"><tspan>' + esc(st.it) + '</tspan><tspan class="dy-zh" lang="zh-CN"> · ' + esc(st.zh) + "</tspan></text>";
    });
    return '<svg class="dy-map" viewBox="0 0 360 548" role="img" aria-label="' + CP.attr(T("dy.mapAria", { n: cur + 1, m: S.length })) + '" focusable="false">' + h + "</svg>";
  }
  /* la riga nei Progressi, una sola riga che apre il foglio con la mappa: «Taccuino del viaggiatore · Tappa 1 di 11: Roma →» */
  function row(c) {
    var d = build(c);
    return '<button type="button" class="dy-row" data-diary-open="' + (c === "it" ? "it" : "zh") + '">' + (CP.ico ? CP.ico("map") : "") + '<span class="dy-row-t">' + esc(T("dy.row", { n: d.cur + 1, m: d.st.length, c: city(d.cur, d.st) })) + '</span><span aria-hidden="true">→</span></button>';
  }

  /* ---- il foglio ---- */
  function wordChips(ws) {
    if (!ws.length) return "";
    return '<div class="dy-words"><p class="small muted">' + esc(T("dy.words")) + '</p><ul>' + ws.map(function (w) {
      return '<li><span class="dy-hz" lang="zh-CN">' + esc(w.hz) + '</span><span class="dy-py">' + CP.pinyinHTML(w.py) + '</span><span class="dy-gl" lang="it">' + esc(CP.gloss(w)) + "</span></li>";
    }).join("") + "</ul></div>";
  }
  function pairChips(note) {
    return '<ul class="dy-pair">' + note.m.map(function (m) {
      var x = member(m), w = CP.WORDS[x.hz];
      return '<li><span class="dy-hz" lang="zh-CN">' + esc(x.hz) + '</span><span class="dy-py">' + CP.pinyinHTML(x.py) + "</span>" + (w ? '<span class="dy-gl" lang="it">' + esc(CP.gloss(w)) + "</span>" : "") + "</li>";
    }).join("") + "</ul>";
  }
  function exChips(ex) {
    if (!ex.length) return "";
    return '<div class="dy-words"><p class="small muted">' + esc(T("dyi.words")) + '</p><ul>' + ex.map(function (e) {
      return '<li><span class="dy-gl" lang="it">' + esc(e.it) + '</span><span class="dy-gl"' + (ZH ? ' lang="zh-CN"' : "") + ">" + esc(ZH ? e.zh : "") + "</span></li>";
    }).join("") + "</ul></div>";
  }
  function page(p, open) {
    var st = p.st, h = '<article class="dy-page" aria-label="' + CP.attr(T("dy.page", { n: p.i + 1 }) + " · " + city(p.i, st)) + '">' +
      '<h4><small>' + esc(T("dy.page", { n: p.i + 1 })) + "</small> <span" + (ZH ? ' lang="zh-CN"' : "") + ">" + esc(city(p.i, st)) + "</span></h4>";
    if (p.course === "it") {
      var ln = DIARY.itLines[st[p.i].id], tx = ln ? String(ZH ? ln.zh : ln.it).replace(/\{c\}/g, city(p.i, st)) : "";
      return h + '<p class="dy-hand"' + (ZH ? ' lang="zh-CN"' : ' lang="it"') + ">" + esc(tx) + "</p>" + exChips(p.ex) + "</article>";
    }
    if (p.i === 0) h += '<p class="dy-hand"' + (ZH ? ' lang="zh-CN"' : ' lang="it"') + ">" + esc(T("dy.start")) + "</p>";
    h += wordChips(p.words);
    p.notes.forEach(function (e) {
      h += '<div class="dy-note"><p class="dy-hand"' + (ZH ? ' lang="zh-CN"' : ' lang="it"') + ">" + esc(noteText(e.note, p.i)) + "</p>" + pairChips(e.note) +
        '<button type="button" class="btn-s" data-diary-share="' + CP.attr(e.note.id + "|" + p.i) + '">' + esc(T("dy.share")) + "</button></div>";
    });
    if (!p.notes.length) h += '<div class="dy-note"><button type="button" class="btn-s" data-diary-share="' + CP.attr("|" + p.i) + '">' + esc(T("dy.share")) + "</button></div>";
    return h + "</article>";
  }
  function open(c) {
    var d = build(c), it = c === "it", St = d.st, total = d.pages.reduce(function (n, p) { return n + p.notes.length; }, 0), next = St[d.cur + 1];
    var h = '<div class="fam-head"><div class="meta"><b>' + esc(T("dy.title")) + '</b><div class="small muted">' + esc(T("dy.at", { c: city(d.cur, St), n: d.cur + 1, m: St.length })) + '</div></div><button type="button" class="fam-x btn-s" data-famclose>' + esc(T("common.close")) + "</button></div>" +
      '<div class="dy-wrap">' + mapSVG(d.cur, St) + "</div>" +
      '<p class="small muted dy-next">' + esc(next ? T(it ? "dyi.next" : "dy.next", { c: city(d.cur + 1, St), n: d.n, k: next.th }) : T(it ? "dyi.end" : "dy.end")) + "</p>";
    h += page(d.pages[0]);
    if (!total && !it) h += '<p class="dy-empty small muted">' + esc(T("dy.none")) + "</p>";
    if (d.pages.length > 1) h += '<details class="dy-older"><summary>' + esc(T("dy.older", { n: d.pages.length - 1 })) + "</summary>" + d.pages.slice(1).map(function (p) { return page(p); }).join("") + "</details>";
    h += '<p class="small muted dy-priv">' + esc(T("dy.privacy")) + "</p>";
    CP.openSheet(h);
  }

  /* ---- una pagina da condividere ---- */
  function shareData(noteId, stopIdx) {
    var d = build(), p = d.pages.filter(function (x) { return x.i === stopIdx; })[0] || d.pages[0], e = noteId ? p.notes.filter(function (x) { return x.note.id === noteId; })[0] : null;
    return { stop: { n: p.i + 1, m: S.length, city: city(p.i) }, route: S.map(function (s, i) { return i <= d.cur; }),
      text: e ? noteText(e.note, p.i) : T("dy.cardEmpty", { c: city(p.i) }), pair: e ? e.note.m.map(member) : [], words: p.words.slice(0, 4).map(function (w) { return { hz: w.hz, py: String(w.py).replace(/\./g, ""), it: CP.gloss(w) }; }),
      date: new Date(e ? e.ev.ultimo || Date.now() : Date.now()), name: "" };
  }
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest ? ev.target.closest("[data-diary-open], [data-diary-share]") : null; if (!b) return;
    if (b.hasAttribute("data-diary-open")) { open(b.getAttribute("data-diary-open") === "it" ? "it" : "zh"); return; }
    var v = b.getAttribute("data-diary-share").split("|");
    CP.shareCard.open("zh-diary", shareData(v[0], +v[1]));
  });

  CP.diary = { row: row, open: open, build: build, earned: earned, evidence: evidence, stopAt: stopAt, shareData: shareData, stops: S, notes: N, mapSVG: mapSVG };
})();
