/* màndarínō · la lezione come capitolo (CP.lezione). Si carica la prima volta che si apre una lezione ricca (data/lr/…, tools/build.mjs: LAZYMOD).
   Sezioni: Scopri → Regola → Logica → (mappa) → Esempi → Contrasto → Dialogo → Il tranello → Per i più curiosi → Esercizi → «Che cosa sai fare ora».
   Serve due corsi con lo stesso codice: corso "zh" (spiegazioni in italiano, esempi in cinese) e corso "it" (spiegazioni in cinese, esempi in italiano).
   Chi lo usa (phrases/lessons.js e it/course.js) passa un contesto con le sue funzioni: come si disegna una frase della lingua che si impara, il suono,
   i pulsanti «indietro» e «prossima lezione», e come si salva il risultato. Qui dentro non c'è niente che dipenda da un corso solo. */
(function () {
  var CP = window.CP, esc = CP.esc;
  var PASS = 80;
  /* le parole dell'interfaccia: nella lingua di chi studia (italiano per il corso di cinese, cinese per il corso di italiano) */
  var LBL = {
    zh: {
      scopri: "Scopri", regola: "La regola", logica: "Il ragionamento", mappa: "Colpo d'occhio", esempi: "Esempi", contrasti: "Scegli la regola giusta", dialogo: "Dialogo", tranello: "Il tranello",
      curiosi: "Per i più curiosi", pragmatica: "Quando e con chi", esercizi: "Esercizi", capaci: "Che cosa sai fare ora",
      show: "Mostra la risposta", hide: "Nascondi", trOn: "Mostra le traduzioni", trOff: "Nascondi le traduzioni", check: "Controlla", next: "Avanti", finish: "Vedi il risultato",
      right: "Giusto.", wrong: "Non è questa.", rightIs: "La risposta giusta:", start: "Comincia", again: "Rifai gli esercizi", errors: "Rivedi gli errori", reread: "Rileggi la lezione", all: "Tutte le lezioni",
      nextL: "Prossima lezione", back: "Elenco delle lezioni", lesson: "Lezione", min: "min", ex: "esercizi", of: "su", passed: "Lezione superata", almost: "Ci sei quasi", answered: "Hai risposto bene a",
      yourAns: "La tua risposta", typeHere: "Scrivi qui", orderQ: "Rimetti in ordine la frase:", slotEmpty: "Tocca le tessere nell'ordine giusto", undo: "Annulla", transform: "Trasforma la frase", sentence: "Frase di partenza",
      accepted: "Una forma corretta:", missing: "La tua frase non coincide con nessuna forma attesa.", wrongSay: "Perché non va:", why: "Perché", bad: "Sbagliato", good: "Giusto", avoid: "Come evitarlo", whatTo: "Che cosa succede", best: "Ultimo risultato",
      restart: "Ricomincia", chain: "Il nome decide: le altre parole lo seguono", chooseQ: "Scegli", dlgComplete: "Completa il dialogo", read: "Leggi", progress: "Avanzamento", sections: "Sezioni della lezione", noteEx: "Nota",
      pickOne: "Scegli una risposta", counter: "risposte giuste"
    },
    it: {
      scopri: "发现", regola: "规则", logica: "背后的逻辑", mappa: "一目了然", esempi: "例句", contrasti: "选对规则", dialogo: "对话", tranello: "陷阱", curiosi: "想知道更多", pragmatica: "什么时候、对谁说",
      esercizi: "练习", capaci: "你现在会做什么",
      show: "看答案", hide: "收起", trOn: "显示翻译", trOff: "隐藏翻译", check: "检查", next: "继续", finish: "查看结果", right: "答对了。", wrong: "不是这个。", rightIs: "正确答案：", start: "开始", again: "重做练习",
      errors: "重做错题", reread: "再读一遍", all: "全部课程", nextL: "下一课", back: "课程列表", lesson: "第", min: "分钟", ex: "道练习", of: "/", passed: "本课已通过", almost: "差一点", answered: "答对了",
      yourAns: "你的答案", typeHere: "在这里输入", orderQ: "把句子排成正确的顺序：", slotEmpty: "按正确的顺序点选词块", undo: "撤销", transform: "改写句子", sentence: "原句", accepted: "一种正确的写法：",
      missing: "你的句子与预期的写法都不一致。", wrongSay: "为什么不对：", why: "为什么", bad: "错误", good: "正确", avoid: "怎样避免", whatTo: "发生了什么", best: "上次成绩", restart: "重新开始",
      chain: "名词决定一切：其他词跟着它变化", chooseQ: "选择", dlgComplete: "完成对话", read: "阅读", progress: "进度", sections: "本课各部分", noteEx: "说明", pickOne: "选一个答案", counter: "答对"
    }
  };
  var S = null;          /* la lezione aperta */
  var uid = 0;
  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function lab(k) { return LBL[S.corso][k] || k; }
  function CJK(t) { return /[㐀-鿿]/.test(t); }
  /* testo della spiegazione: **grassetto**, [[evidenziato]], i caratteri cinesi nel testo italiano prendono lang="zh-CN" */
  function rich(t) {
    var h = esc(String(t)).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\[\[(.+?)\]\]/g, "<mark>$1</mark>");
    if (S.corso === "zh") h = h.replace(/([㐀-鿿，。？！、：；＿…]+)/g, '<span class="han" lang="zh-CN">$1</span>'); else h = h.replace(/(<b>)([A-Za-zÀ-ÿ'’ ,.?!-]+)(<\/b>)/g, '$1<span lang="it">$2</span>$3');
    return h;
  }
  /* una frase nella lingua che si impara: intera (con suono) o compatta (dentro un'opzione) */
  function isTarget(t) { return S.corso === "zh" ? CJK(t) && !/[a-zàèéìòù]{3}/i.test(t) : !CJK(t) && /[a-zA-Zàèéìòù]/.test(t); }
  function sent(t, compact) { return S.ctx.sent(t, compact); }
  function say(t) { return S.ctx.say(t); }
  function icon(n) { return CP.ico(n); }
  function head(n, key, ic) { return '<h3 class="lz-h"><span class="lz-step" aria-hidden="true">' + (ic ? icon(ic) : n) + "</span><span>" + esc(lab(key)) + "</span></h3>"; }
  function sec(name, inner, extra) { return '<section class="lz-sec lz-' + name + (extra ? " " + extra : "") + '" id="lz-' + name + '" data-lz-sec="' + name + '" tabindex="-1">' + inner + "</section>"; }

  /* ---------- scopri ---------- */
  function scopri(R) {
    var s = R.scopri;
    return sec("scopri", head(1, "scopri", "puzzle") +
      '<div class="lz-sents">' + s.frasi.map(function (f) { return '<div class="lz-sent">' + sent(f.t) + '<div class="lz-tr" lang="' + (S.corso === "zh" ? "it" : "zh-CN") + '">' + rich(f.tr) + "</div></div>"; }).join("") + "</div>" +
      '<p class="lz-q-text">' + rich(s.domanda) + "</p>" +
      '<button type="button" class="btn-s lz-reveal" data-lz="reveal" aria-expanded="false" aria-controls="lz-ans">' + icon("bulb") + " <span>" + esc(lab("show")) + "</span></button>" +
      '<div class="lz-ans" id="lz-ans" hidden><p>' + rich(s.risposta) + "</p></div>");
  }

  /* ---------- regola ---------- */
  function regola(R) {
    var g = R.regola, sch = g.schema || [];
    return sec("regola", head(2, "regola", "scales") +
      '<p class="lz-lead">' + rich(g.enunciato) + "</p>" +
      (sch.length ? '<div class="lz-formula" role="group" aria-label="' + CP.attr(lab("regola")) + '">' + sch.map(function (x, j) { return (j ? '<span class="lz-arrow" aria-hidden="true">→</span>' : "") + '<span class="lz-fx f' + (j % 5) + (CJK(x) && x.length <= 2 ? " key" : "") + '">' + (CJK(x) ? '<span class="han" lang="zh-CN">' + esc(x) + "</span>" : esc(x)) + "</span>"; }).join("") + "</div>" : "") +
      '<ul class="lz-points">' + g.punti.map(function (p) { return '<li class="' + (p.ok === false ? "no" : "yes") + '"><span class="lz-pi" aria-hidden="true">' + icon(p.ok === false ? "close" : "check") + "</span><span>" + rich(p.t) + "</span></li>"; }).join("") + "</ul>");
  }

  /* ---------- logica ---------- */
  function logica(R) { return sec("logica", head(3, "logica", "brain") + '<div class="lz-callout">' + R.logica.map(function (p) { return "<p>" + rich(p) + "</p>"; }).join("") + "</div>"); }

  /* ---------- mappa visiva ---------- */
  function mappa(R) {
    var m = R.mappa; if (!m) return "";
    var inner = "";
    if (m.tipo === "tabella") {
      inner = '<div class="lz-tw"><table class="lz-table"><thead><tr>' + m.testa.map(function (c) { return "<th scope=\"col\">" + rich(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        m.righe.map(function (r) { return "<tr>" + r.map(function (c, j) { return (j ? "<td>" : '<th scope="row">') + rich(c) + (j ? "</td>" : "</th>"); }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
    } else if (m.tipo === "catena") {
      inner = '<p class="lz-hint">' + esc(lab("chain")) + "</p>" + m.frasi.map(function (f) {
        return '<div class="lz-chain" role="group">' + f.parole.map(function (x) { return '<span class="lz-chip g-' + x.g + " n-" + x.n + (x.nome ? " core" : "") + '"><b lang="' + (S.corso === "zh" ? "zh-CN" : "it") + '">' + esc(x.t) + '</b><i aria-hidden="true">' + x.g + "·" + x.n + "</i></span>"; }).join("") + "</div>";
      }).join("") + (m.nota ? '<p class="lz-note">' + rich(m.nota) + "</p>" : "");
    } else if (m.tipo === "timeline") {
      inner = '<div class="lz-tl" role="img" aria-label="' + CP.attr(m.righe.map(function (r) { return r.etichetta; }).join("; ")) + '">' + m.righe.map(function (r) {
        var da = r.da != null ? r.da : (r.tipo === "evento" ? 62 : 4), a = r.a != null ? r.a : (r.tipo === "evento" ? 62 : 96);
        var mark = r.tipo === "evento" ? '<span class="tl-ev" style="left:' + da + '%">' + icon("bolt") + "</span>" : r.tipo === "abitudine" ? [12, 30, 48, 66, 84].map(function (p) { return '<span class="tl-dot" style="left:' + p + '%"></span>'; }).join("") : '<span class="tl-bar" style="left:' + da + "%;width:" + (a - da) + '%"></span>';
        return '<div class="tl-row"><span class="tl-lab">' + rich(r.etichetta) + '</span><span class="tl-track">' + mark + "</span></div>";
      }).join("") + '<div class="tl-axis" aria-hidden="true"><span>→</span></div></div>' + (m.nota ? '<p class="lz-note">' + rich(m.nota) + "</p>" : "");
    } else if (m.tipo === "albero") {
      S.tree = m; inner = '<div class="lz-tree" id="lz-tree">' + treeHTML(m.inizio) + "</div>";
    }
    return sec("mappa", head("", "mappa", "map") + inner);
  }
  function treeHTML(id) {
    var n = S.tree.nodi[id];
    if (n.fine) return '<div class="lz-tnode end"><p>' + rich(n.fine) + '</p><button type="button" class="btn-s" data-lz="tree" data-to="' + CP.attr(S.tree.inizio) + '">' + esc(lab("restart")) + "</button></div>";
    return '<div class="lz-tnode"><p class="lz-tq">' + rich(n.q) + '</p><div class="lz-topts">' + n.risposte.map(function (r) { return '<button type="button" class="lz-opt" data-lz="tree" data-to="' + CP.attr(r.vai) + '">' + rich(r.t) + "</button>"; }).join("") + "</div></div>";
  }

  /* ---------- esempi ---------- */
  function esempi(R) {
    return sec("esempi", head(4, "esempi", "book-open") + R.esempi.map(function (g) {
      return '<h4 class="lz-sub">' + rich(g.gruppo) + "</h4>" + g.items.map(function (x) {
        return '<div class="lz-ex">' + sent(x.t) + '<div class="lz-ex-side">' + say(x.t) + '</div><div class="lz-tr" lang="' + (S.corso === "zh" ? "it" : "zh-CN") + '">' + rich(x.tr) + "</div>" + (x.nota ? '<div class="lz-ex-note">' + rich(x.nota) + "</div>" : "") + "</div>";
      }).join("");
    }).join(""));
  }

  /* ---------- una domanda a scelta (contrasti, dialogo, esercizi) ---------- */
  function optsHTML(id, opts) {
    return '<div class="lz-opts" role="group" aria-label="' + CP.attr(lab("pickOne")) + '" data-lz-opts="' + id + '">' + opts.map(function (o, j) {
      return '<button type="button" class="lz-opt" data-lz="opt" data-q="' + id + '" data-o="' + j + '">' + (isTarget(o.t) ? sent(o.t, true) : "<span>" + rich(o.t) + "</span>") + "</button>";
    }).join("") + "</div>";
  }
  function qcard(q, idx, kind) {
    var id = "q" + (++uid); S.q[id] = { opts: q.opzioni, kind: kind || "c" };
    return '<div class="lz-q" id="lz-' + id + '" data-lz-q="' + id + '"><div class="lz-q-top"><span class="lz-q-n" aria-hidden="true">' + idx + "</span><p class=\"lz-q-text\">" + rich(q.q) + "</p></div>" +
      (q.ctx ? '<div class="lz-q-ctx">' + (isTarget(q.ctx.t) ? sent(q.ctx.t) : rich(q.ctx.t)) + "</div>" : "") + optsHTML(id, q.opzioni) + '<div class="lz-fb" id="lz-fb-' + id + '" aria-live="polite"></div></div>';
  }
  function contrasti(R) {
    return sec("contrasti", head(5, "contrasti", "swap") + '<p class="lz-counter" id="lz-cnt-c"><span id="lz-cnt-c-n">0</span> / ' + R.contrasti.length + " " + esc(lab("counter")) + "</p>" +
      R.contrasti.map(function (q, j) { return qcard(q, j + 1, "c"); }).join(""));
  }
  function answer(id, j) {
    var Q = S.q[id]; if (!Q || Q.done) return;
    var o = Q.opts[j], right = Q.opts.filter(function (x) { return x.ok; })[0], ok = !!o.ok;
    Q.done = true; Q.ok = ok;
    var box = document.querySelector('[data-lz-opts="' + id + '"]'), fb = document.getElementById("lz-fb-" + id), card = document.getElementById("lz-" + id);
    if (box) [].forEach.call(box.querySelectorAll(".lz-opt"), function (b, k) { b.disabled = true; b.classList.add(Q.opts[k].ok ? "right" : k === j ? "wrong" : "off"); });
    if (card) card.classList.add(ok ? "is-ok" : "is-ko");
    if (fb) fb.innerHTML = '<p class="lz-verdict ' + (ok ? "ok" : "ko") + '"><span aria-hidden="true">' + icon(ok ? "check" : "close") + "</span> <b>" + esc(lab(ok ? "right" : "wrong")) + "</b> " + rich(o.perche) + "</p>" +
      (ok ? "" : '<p class="lz-verdict ok"><span aria-hidden="true">' + icon("check") + "</span> <b>" + esc(lab("rightIs")) + "</b> " + (isTarget(right.t) ? '<span class="han" lang="' + (S.corso === "zh" ? "zh-CN" : "it") + '">' + esc(right.t) + "</span>" : rich(right.t)) + " — " + rich(right.perche) + "</p>");
    CP.sfx && CP.sfx(ok ? "ok" : "ko");
    if (Q.kind === "c") { var n = 0; for (var k in S.q) if (S.q[k].kind === "c" && S.q[k].ok) n++; var el = document.getElementById("lz-cnt-c-n"); if (el) el.textContent = n; }
  }

  /* ---------- dialogo ---------- */
  function dialogo(R) {
    var d = R.dialogo;
    return sec("dialogo", head(6, "dialogo", "dialogue") + '<h4 class="lz-sub">' + rich(d.titolo) + "</h4>" +
      '<button type="button" class="btn-s lz-trtog" data-lz="tr" aria-pressed="false">' + icon("eye") + " <span>" + esc(lab("trOn")) + "</span></button>" +
      '<div class="lz-dlg" id="lz-dlg">' + d.righe.map(function (x) {
        return '<div class="lz-bub ' + (x.chi === "B" ? "b" : "a") + '"><span class="lz-who" aria-hidden="true">' + esc(x.chi) + "</span><div class=\"lz-bub-in\">" + sent(x.t) + '<div class="lz-ex-side">' + say(x.t) + '</div><div class="lz-tr lz-tr-dlg" lang="' + (S.corso === "zh" ? "it" : "zh-CN") + '">' + rich(x.tr) + "</div></div></div>";
      }).join("") + "</div>" +
      '<h4 class="lz-sub">' + esc(lab("dlgComplete")) + "</h4>" + d.esercizi.map(function (q, j) { return qcard(q, j + 1, "d"); }).join(""));
  }

  /* ---------- il tranello ---------- */
  function tranello(R) {
    var t = R.tranello;
    return sec("tranello", head(7, "tranello", "warning") + '<div class="lz-trap"><p class="lz-trap-t">' + rich(t.errore) + "</p>" +
      (t.esempi ? '<div class="lz-pairs">' + t.esempi.map(function (x) { return '<div class="lz-pair"><div class="bad"><span aria-hidden="true">' + icon("close") + '</span><span class="han" lang="' + (S.corso === "zh" ? "zh-CN" : "it") + '">' + esc(x.sbagliata) + '</span></div><div class="good"><span aria-hidden="true">' + icon("check") + '</span><span class="han" lang="' + (S.corso === "zh" ? "zh-CN" : "it") + '">' + esc(x.giusta) + "</span></div></div>"; }).join("") + "</div>" : "") +
      '<p class="lz-why"><b>' + esc(lab("why")) + ".</b> " + rich(t.perche) + '</p><p class="lz-escape"><b>' + esc(lab("avoid")) + ".</b> " + rich(t.esci) + "</p></div>");
  }

  /* ---------- curiosi e pragmatica ---------- */
  function curiosi(R) {
    return sec("curiosi", head(8, "curiosi", "telescope") + R.curiosi.map(function (c) { return '<details class="lz-det"><summary><span>' + rich(c.titolo) + '</span><i aria-hidden="true"></i></summary><div class="lz-det-b"><p>' + rich(c.t) + "</p></div></details>"; }).join("") +
      (R.pragmatica ? '<div class="lz-prag"><h4>' + icon("handshake") + " " + esc(lab("pragmatica")) + "</h4><p>" + rich(R.pragmatica) + "</p></div>" : ""));
  }

  /* ---------- esercizi ---------- */
  function exercises(R) {
    var n = R.esercizi.length, p = S.prog || {};
    return sec("esercizi", head(9, "esercizi", "pencil") + '<div class="lz-run" id="lz-run">' + startHTML(n, p) + "</div>");
  }
  function startHTML(n, p) {
    return '<div class="lz-start"><p class="lz-start-n"><b>' + n + "</b> " + esc(lab("ex")) + " · ~" + Math.max(3, Math.round(n * 0.6)) + " " + esc(lab("min")) + "</p>" + (p.best != null ? '<p class="small muted">' + esc(lab("best")) + ": " + p.best + "%</p>" : "") +
      '<button type="button" class="btn-main" data-lz="run" style="margin:0">' + icon("pencil") + " " + esc(lab("start")) + "</button></div>";
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function norm(s) {
    var t = String(s || "").toLowerCase().replace(/[\s，。？！、,.?!;:；：“”"«»…—\-]+/g, "");
    return t;
  }
  function noAccent(s) { try { return s.normalize("NFD").replace(/[̀-ͯ]/g, ""); } catch (e) { return s; } }
  function runStart(idxs) {
    var n = S.R.esercizi.length, list = idxs || (function () { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; })();
    S.run = { list: list, pos: 0, score: 0, wrong: [], st: "play", choice: null, typed: "", order: null, base: !idxs };
    prep(); paintRun(true);
  }
  function cur() { return S.R.esercizi[S.run.list[S.run.pos]]; }
  function prep() {
    var r = S.run, x = cur(); r.st = "play"; r.choice = null; r.typed = ""; r.order = null; r.fb = "";
    if (x.k === "ordine") {
      var t = S.ctx.tokens(x.t), bank = t.map(function (k, i) { return { id: i, k: k }; }), sh = bank;
      for (var n = 0; n < 6; n++) { sh = shuffle(bank); if (sh.map(function (b) { return b.k; }).join("|") !== t.join("|")) break; }
      r.order = { bank: sh, pick: [], want: t };
    }
    if (x.k === "scegli" || x.k === "buco" || x.k === "minidialogo") { r.shuf = shuffle(x.opzioni.map(function (o, i) { return i; })); }
  }
  function runHTML() {
    var r = S.run, x = cur(), n = r.list.length, h = "";
    h += '<div class="lz-rbar" aria-hidden="true"><i style="width:' + Math.round(r.pos * 100 / n) + '%"></i></div><p class="lz-rcount">' + (r.pos + 1) + " " + esc(lab("of")) + " " + n + "</p>";
    if (x.k === "scegli" || x.k === "buco" || x.k === "minidialogo") {
      var opts = r.shuf.map(function (i) { return { o: x.opzioni[i], i: i }; });
      if (x.k === "scegli") h += '<p class="lz-q-text">' + rich(x.q) + "</p>" + (x.zh ? '<div class="lz-q-ctx">' + sent(x.zh) + "</div>" : "");
      else if (x.k === "buco") h += '<p class="lz-q-text">' + rich(x.tr ? x.tr : lab("chooseQ")) + '</p><div class="lz-q-ctx">' + blank(x.zh) + "</div>";
      else h += '<p class="lz-q-text">' + esc(lab("dlgComplete")) + '.</p><div class="lz-dlg mini">' + x.righe.map(function (y) { return '<div class="lz-bub ' + (y.chi === "B" ? "b" : "a") + '"><span class="lz-who" aria-hidden="true">' + esc(y.chi) + '</span><div class="lz-bub-in">' + (y.buco ? blank(y.t) : sent(y.t)) + "</div></div>"; }).join("") + "</div>";
      h += '<div class="lz-opts" role="group" aria-label="' + CP.attr(lab("pickOne")) + '">' + opts.map(function (p, k) {
        var cls = r.st === "play" ? "" : p.o.ok ? " right" : p.i === r.choice ? " wrong" : " off";
        return '<button type="button" class="lz-opt' + cls + '" data-lz="rop" data-o="' + p.i + '"' + (r.st !== "play" ? " disabled" : "") + ">" + (isTarget(p.o.t) ? sent(p.o.t, true) : "<span>" + rich(p.o.t) + "</span>") + "</button>";
      }).join("") + "</div>";
    } else if (x.k === "ordine") {
      var o = r.order, by = {}; o.bank.forEach(function (b) { by[b.id] = b; });
      h += '<p class="lz-q-text">' + esc(lab("orderQ")) + ' <span class="lz-tr-in" lang="' + (S.corso === "zh" ? "it" : "zh-CN") + '">«' + esc(x.tr) + "»</span></p>" +
        '<div class="slot lz-slot" aria-live="polite" data-empty="' + CP.attr(lab("slotEmpty")) + '">' + o.pick.map(function (id) { return S.ctx.tile(by[id], 'data-lz="un" data-id="' + id + '"' + (r.st !== "play" ? " disabled" : "")); }).join("") + "</div>";
      if (r.st === "play") h += '<div class="bank lz-bank">' + o.bank.map(function (b) { return S.ctx.tile(b, 'data-lz="pk" data-id="' + b.id + '"', o.pick.indexOf(b.id) >= 0); }).join("") + "</div>" +
        '<div class="acts"><button type="button" class="btn-s" data-lz="undo"' + (o.pick.length ? "" : " disabled") + ">" + icon("undo") + " " + esc(lab("undo")) + '</button><button type="button" class="btn-main" data-lz="chk" style="margin:0"' + (o.pick.length === o.bank.length ? "" : " disabled") + ">" + esc(lab("check")) + "</button></div>";
    } else if (x.k === "scrivi" || x.k === "trasforma") {
      var tr = x.k === "trasforma";
      h += '<p class="lz-q-text">' + rich(tr ? x.consegna : x.q) + "</p>" + (tr ? '<div class="lz-q-ctx"><span class="lz-lab">' + esc(lab("sentence")) + "</span>" + sent(x.base) + "</div>" : (x.zh ? '<div class="lz-q-ctx">' + sent(x.zh) + "</div>" : "")) +
        '<form class="ex-type lz-form" data-lz-form><input id="lz-in" type="text" inputmode="text" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" lang="' + (x.py ? "zh-Latn" : S.corso === "zh" ? "zh-CN" : "it") + '" placeholder="' + CP.attr(lab("typeHere")) + '" aria-label="' + CP.attr(lab("yourAns")) + '"' + (r.st !== "play" ? ' disabled value="' + CP.attr(r.typed) + '"' : "") + "></form>";
      if (r.st === "play") h += '<div class="acts"><button type="button" class="btn-main" data-lz="chk" style="margin:0">' + esc(lab("check")) + "</button></div>";
    }
    if (r.st !== "play") {
      h += '<div class="lz-sheet ' + (r.st === "ok" ? "ok" : "ko") + '" role="status"><p class="lz-verdict ' + r.st + '"><span aria-hidden="true">' + icon(r.st === "ok" ? "check" : "close") + "</span> <b>" + esc(lab(r.st === "ok" ? "right" : "wrong")) + "</b> " + r.fb + "</p>" +
        '<div class="acts"><button type="button" class="btn-main" data-lz="rnext" style="margin:0">' + esc(lab(r.pos + 1 < n ? "next" : "finish")) + " →</button></div></div>";
    }
    return h;
  }
  function blank(t) { return sent(String(t).replace(/＿+|_{3,}/, "＿＿"), false); }
  function paintRun(scroll) {
    var box = document.getElementById("lz-run"); if (!box) return;
    box.innerHTML = S.run.done ? resultHTML() : runHTML();
    box.classList.remove("lz-in"); void box.offsetWidth; box.classList.add("lz-in");
    if (scroll) scrollTo(box);
    var i = document.getElementById("lz-in"); if (i && S.run.st === "play") try { i.focus({ preventScroll: true }); } catch (e) {}
  }
  function scrollTo(el) { try { el.scrollIntoView({ block: "start", behavior: REDUCED ? "auto" : "smooth" }); } catch (e) { el.scrollIntoView(); } }
  function grade(ok, fb) { var r = S.run; r.st = ok ? "ok" : "ko"; r.fb = fb || ""; if (ok) r.score++; else r.wrong.push(r.list[r.pos]); CP.sfx && CP.sfx(ok ? "ok" : "ko"); paintRun(); }
  function optFb(x, j) {
    var o = x.opzioni[j], right = x.opzioni.filter(function (y) { return y.ok; })[0];
    return rich(o.perche) + (o.ok ? "" : ' <span class="lz-rightis"><b>' + esc(lab("rightIs")) + "</b> " + (isTarget(right.t) ? '<span class="han" lang="' + (S.corso === "zh" ? "zh-CN" : "it") + '">' + esc(right.t) + "</span>" : rich(right.t)) + " — " + rich(right.perche) + "</span>");
  }
  function checkTyped(x, v) {
    var tr = x.k === "trasforma", okSet = tr ? x.accetta : [x.a].concat(x.accetta || []), nv = norm(v);
    if (!nv) return null;
    if (x.k === "scrivi" && x.py && CP.ex) { CP.ex.carica && CP.ex.carica(); if (CP.typing) { var rr = CP.typing.comparePinyin(v, x.a); return { ok: /^(esatto|accento|quasi)$/.test(rr), fb: rich(x.perche) + ' <span class="lz-rightis"><b>' + esc(lab("accepted")) + "</b> " + esc(x.a) + "</span>" }; } }
    var hit = okSet.some(function (a) { return norm(a) === nv || (S.corso === "it" && noAccent(norm(a)) === noAccent(nv)); });
    if (hit) return { ok: true, fb: rich(x.perche || (x.perche = "")) };
    var rf = (x.rifiutate || []).filter(function (a) { return norm(a.t) === nv; })[0];
    return { ok: false, fb: (rf ? "<b>" + esc(lab("wrongSay")) + "</b> " + rich(rf.perche) + " " : esc(lab("missing")) + " ") + '<span class="lz-rightis"><b>' + esc(lab("accepted")) + "</b> " + (isTarget(okSet[0]) ? '<span class="han" lang="' + (S.corso === "zh" ? "zh-CN" : "it") + '">' + esc(okSet[0]) + "</span>" : esc(okSet[0])) + " — " + rich(x.perche) + "</span>" };
  }
  function doCheck() {
    var r = S.run, x = cur(); if (r.st !== "play") return;
    if (x.k === "ordine") {
      var by = {}; r.order.bank.forEach(function (b) { by[b.id] = b; });
      var got = r.order.pick.map(function (id) { return S.ctx.tokText(by[id]); }).join(S.corso === "zh" ? "" : " "), want = [x.t].concat(x.alt || []).map(function (s) { return S.ctx.strip(s); });
      var ok = want.indexOf(S.ctx.strip(got)) >= 0;
      grade(ok, ok ? "" : esc(lab("rightIs")) + " " + sent(x.t));
    } else if (x.k === "scrivi" || x.k === "trasforma") {
      var inp = document.getElementById("lz-in"), v = inp ? inp.value : ""; r.typed = v;
      var res = checkTyped(x, v); if (!res) return; grade(res.ok, res.fb);
    }
  }
  function resultHTML() {
    var r = S.run, n = r.list.length, p = Math.round(r.score * 100 / n), ok = p >= PASS, R = S.R;
    return '<div class="lz-result ' + (ok ? "ok" : "ko") + '"><span class="lz-stamp" aria-hidden="true">' + icon(ok ? "seal" : "repeat") + "</span><h3>" + esc(lab(ok ? "passed" : "almost")) + "</h3>" +
      "<p>" + esc(lab("answered")) + " <b>" + r.score + "</b> " + esc(lab("of")) + " <b>" + n + "</b> " + (S.corso === "zh" ? "esercizi." : "题。") + "</p>" +
      '<div class="lz-capaci"><h4>' + esc(lab("capaci")) + "</h4><ul>" + R.capaci.map(function (c) { return "<li><span aria-hidden=\"true\">" + icon("check") + "</span><span>" + rich(c) + "</span></li>"; }).join("") + "</ul></div>" +
      '<div class="acts"><button type="button" class="btn-main" data-lz="run" style="margin:0">' + icon("repeat") + " " + esc(lab("again")) + "</button>" + (r.wrong.length ? '<button type="button" class="btn-s" data-lz="errs">' + esc(lab("errors")) + " (" + r.wrong.length + ")</button>" : "") +
      '<button type="button" class="btn-s" data-lz="top">' + icon("book-open") + " " + esc(lab("reread")) + "</button>" + (ok && S.ctx.next ? '<button type="button" class="btn-s" ' + S.ctx.openAttr(S.ctx.next.id) + ">" + esc(lab("nextL")) + " →</button>" : "") + '<button type="button" class="btn-s" ' + S.ctx.backAttr + ">" + esc(lab("all")) + "</button></div></div>";
  }
  function finish() {
    var r = S.run, n = r.list.length, p = Math.round(r.score * 100 / n);
    r.done = true;
    if (r.base) { var prev = S.prog || {}, patch = { best: Math.max(prev.best || 0, p) }; if (p >= PASS && !prev.done) patch.done = Date.now(); S.ctx.mark(patch); S.prog = Object.assign({}, prev, patch); }
    CP.sfx && CP.sfx(p >= PASS ? "ok" : "tap");
    paintRun(true);
  }

  /* ---------- la lezione intera ---------- */
  var ORDER = ["scopri", "regola", "logica", "mappa", "esempi", "contrasti", "dialogo", "tranello", "curiosi", "esercizi"];
  function html(l, R, ctx) {
    if (!document.getElementById("lz-css")) { var st = document.createElement("style"); st.id = "lz-css"; st.textContent = CP.lzCss; document.head.appendChild(st); }
    S = { l: l, R: R, ctx: ctx, corso: ctx.corso, prog: ctx.prog || {}, q: {}, run: null };
    uid = 0;
    var tocKeys = ["scopri", "regola", "logica"].concat(R.mappa ? ["mappa"] : []).concat(["esempi", "contrasti", "dialogo", "tranello", "curiosi", "esercizi"]);
    var toc = '<nav class="lz-toc" aria-label="' + CP.attr(lab("sections")) + '">' + tocKeys.map(function (k) { return '<button type="button" class="lz-tchip" data-lz="toc" data-to="' + k + '">' + esc(lab(k)) + "</button>"; }).join("") + "</nav>";
    return '<div class="acts lz-back"><button type="button" class="btn-s" ' + ctx.backAttr + ">← " + esc(lab("back")) + "</button></div>" +
      '<article class="lz" data-lz-root data-corso="' + ctx.corso + '"><header class="lz-top"><span class="tag muted small">' + ctx.tag + (S.prog.best != null ? " · " + S.prog.best + "%" : "") + (R.svolta ? ' · <span class="lz-svolta">' + (S.corso === "zh" ? "Punto di svolta" : "关键一课") + "</span>" : "") + "</span>" +
      '<h2 class="lz-title" lang="' + (S.corso === "zh" ? "it" : "zh-CN") + '">' + rich(l.title) + '</h2><p class="lz-goal">' + icon("target") + " " + rich(l.goal) + "</p></header>" +
      '<div class="lz-sticky"><div class="lz-bar" aria-hidden="true"><i id="lz-bar"></i></div>' + toc + "</div>" +
      scopri(R) + regola(R) + logica(R) + mappa(R) + esempi(R) + contrasti(R) + dialogo(R) + tranello(R) + curiosi(R) + exercises(R) + "</article>";
  }

  /* ---------- eventi: un solo ascoltatore per tutta la pagina ---------- */
  function find(e, sel) { return e.target && e.target.closest ? e.target.closest(sel) : null; }
  document.addEventListener("click", function (e) {
    var b = find(e, "[data-lz]"); if (!b || !S || !document.querySelector("[data-lz-root]")) return;
    var a = b.getAttribute("data-lz");
    if (a === "reveal") { var ans = document.getElementById("lz-ans"), open = ans.hidden; ans.hidden = !open; b.setAttribute("aria-expanded", String(open)); b.querySelector("span:last-child").textContent = lab(open ? "hide" : "show"); if (open) { ans.classList.remove("lz-in"); void ans.offsetWidth; ans.classList.add("lz-in"); CP.sfx && CP.sfx("tap"); } return; }
    if (a === "opt") { answer(b.getAttribute("data-q"), +b.getAttribute("data-o")); return; }
    if (a === "tr") { var d = document.getElementById("lz-dlg"), on = !d.classList.contains("tr-on"); d.classList.toggle("tr-on", on); b.setAttribute("aria-pressed", String(on)); b.querySelector("span:last-child").textContent = lab(on ? "trOff" : "trOn"); return; }
    if (a === "toc") { var s = document.getElementById("lz-" + b.getAttribute("data-to")); if (s) { scrollTo(s); try { s.focus({ preventScroll: true }); } catch (x) {} } return; }
    if (a === "tree") { var t = document.getElementById("lz-tree"); if (t) { t.innerHTML = treeHTML(b.getAttribute("data-to")); t.classList.remove("lz-in"); void t.offsetWidth; t.classList.add("lz-in"); CP.sfx && CP.sfx("tap"); } return; }
    if (a === "run") { runStart(); CP.sfx && CP.sfx("tap"); return; }
    if (a === "errs") { runStart(S.run.wrong.slice()); return; }
    if (a === "top") { var art = document.querySelector("[data-lz-root]"); if (art) scrollTo(art); return; }
    if (!S.run) return;
    var r = S.run, x = r.done ? null : cur();
    if (a === "rop" && r.st === "play") { r.choice = +b.getAttribute("data-o"); var ok = !!x.opzioni[r.choice].ok; grade(ok, optFb(x, r.choice)); return; }
    if (a === "pk" && r.st === "play") { r.order.pick.push(+b.getAttribute("data-id")); CP.sfx && CP.sfx("tap"); paintRun(); return; }
    if (a === "un" && r.st === "play") { var u = +b.getAttribute("data-id"); r.order.pick = r.order.pick.filter(function (v) { return v !== u; }); CP.sfx && CP.sfx("tap"); paintRun(); return; }
    if (a === "undo") { r.order.pick.pop(); paintRun(); return; }
    if (a === "chk") { doCheck(); return; }
    if (a === "rnext") { if (r.pos + 1 < r.list.length) { r.pos++; prep(); paintRun(true); } else finish(); return; }
  });
  document.addEventListener("submit", function (e) { if (e.target && e.target.hasAttribute && e.target.hasAttribute("data-lz-form")) { e.preventDefault(); if (S && S.run && S.run.st === "play") doCheck(); } });

  /* la barra di lettura e la sezione corrente nell'indice: si agganciano dopo che la pagina è disegnata */
  var io = null, onScroll = null;
  function mount() {
    var art = document.querySelector("[data-lz-root]"); if (!art || !S) return;
    if (onScroll) window.removeEventListener("scroll", onScroll);
    onScroll = function () {
      var el = document.querySelector("[data-lz-root]"), bar = document.getElementById("lz-bar"); if (!el || !bar) return;
      var r = el.getBoundingClientRect(), tot = r.height - window.innerHeight, p = tot > 0 ? Math.min(1, Math.max(0, -r.top / tot)) : 1; bar.style.width = Math.round(p * 100) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    if (io) io.disconnect();
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) { if (en.isIntersecting) { var n = en.target.getAttribute("data-lz-sec"); [].forEach.call(document.querySelectorAll(".lz-tchip"), function (c) { var on = c.getAttribute("data-to") === n; c.classList.toggle("on", on); if (on && c.scrollIntoView) { try { c.parentNode.scrollTo({ left: c.offsetLeft - 16, behavior: REDUCED ? "auto" : "smooth" }); } catch (x) {} } }); } });
      }, { rootMargin: "-30% 0px -60% 0px" });
      [].forEach.call(document.querySelectorAll("[data-lz-sec]"), function (s) { io.observe(s); });
    }
  }

  CP.lezione = { html: html, mount: mount };
})();
