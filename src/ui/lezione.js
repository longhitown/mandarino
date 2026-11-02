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
  /* ---- testo della spiegazione ----
     Il testo scorre calmo. Un carattere o una parola di cui si parla ha SOLO il pinyin piccolo sopra (ruby); le frasi intere con la loro traduzione escono dal
     paragrafo e diventano card di esempio (pinyin, caratteri, traduzione). Le traduzioni tra parentesi dopo un termine non si mostrano più: il significato sta
     nelle card di esempio e nella scheda della parola (si apre toccando il carattere). */
  /* caratteri che il vocabolario dell'app non ha come parola (citati nelle spiegazioni): il pinyin viene dal dataset dei caratteri */
  var PYX = { "是": "shì", "儿": "ér", "個": "gè", "巴": "bā", "黎": "lí", "喜": "xǐ", "欢": "huān", "置": "zhì", "把": "bǎ", "评": "píng", "誉": "yù", "入": "rù", "聊": "liáo", "着": "zhe", "著": "zhe", "倘": "tǎng", "若": "ruò", "和": "hé", "语": "yǔ", "距": "jù", "给": "gěi", "澡": "zǎo", "今": "jīn", "与": "yǔ", "同": "tóng", "吗": "ma", "甭": "béng", "刚": "gāng", "才": "cái", "之": "zhī" };
  function ruby(run) {
    return CP.segment(run).map(function (x) {
      var w = x.w, raw = x.raw != null ? x.raw : x.p;
      if (!w) return Array.from(raw || "").map(function (ch) { return PYX[ch] ? '<ruby class="lz-rb han" lang="zh-CN" data-k="' + CP.attr(ch) + '">' + esc(ch) + "<rp>(</rp><rt>" + PYX[ch] + "</rt><rp>)</rp></ruby>" : '<span class="han" lang="zh-CN">' + esc(ch) + "</span>"; }).join("");
      return '<ruby class="lz-rb han" lang="zh-CN" data-k="' + CP.attr(w.key) + '">' + esc(w.hz) + "<rp>(</rp><rt>" + esc(w.py.replace(/\./g, "")) + "</rt><rp>)</rp></ruby>";
    }).join("");
  }
  function rich(t, rb) {
    var h = esc(String(t)).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\[\[(.+?)\]\]/g, "<mark>$1</mark>");
    if (S.corso === "zh") h = h.replace(/([㐀-鿿，。？！、：；＿…]+)/g, rb ? function (m) { return ruby(m); } : '<span class="han" lang="zh-CN">$1</span>'); else h = h.replace(/(<b>)([A-Za-zÀ-ÿ'’ ,.?!-]+)(<\/b>)/g, '$1<span lang="it">$2</span>$3');
    return h;
  }
  var RE_EX_ZH = /([㐀-鿿][㐀-鿿，、：；…]{3,}[。？！]?)\s*[（(]\s*[«“"]([^»”"）)]+)[»”"]\s*[）)]/g;
  var RE_EX_IT = /((?:[A-Za-zÀ-ÿ'’]+[ ,]+)+[A-Za-zÀ-ÿ'’]+[.?!]?)\s*[（(]([^）)]*[㐀-鿿][^）)]*)[）)]/g;
  var RE_TERM_ZH = /([㐀-鿿]{1,3})(\*\*)?\s*[（(]\s*[«“"][^»”"）)]+[»”"]\s*[）)]/g;
  /* le frasi della lezione con la loro traduzione: servono a mettere la traduzione sulle card estratte dal testo */
  function key(t) { return String(t).replace(/[。？！.?!\s]+$/g, ""); }
  /* le forme sbagliate che la lezione stessa dichiara (errori tipici, risposte da scartare): in una riga di esempio vengono barrate */
  function badTable(R) {
    var o = {}, add = function (t) { if (t) o[key(t)] = 1; };
    ((R.tranello || {}).esempi || []).forEach(function (x) { add(x.sbagliata); });
    (R.contrasti || []).forEach(function (q) { (q.opzioni || []).forEach(function (op) { if (op.ok === false) add(op.t); }); });
    Object.keys(R.glosse || {}).forEach(function (k) { if (/^!/.test(R.glosse[k])) add(k); });
    (R.esercizi || []).forEach(function (e) { (e.rifiutate || []).forEach(function (x) { add(x.t); }); (e.opzioni || []).forEach(function (op) { if (op.ok === false) add(op.t); }); });
    return o;
  }
  function trTable(R) {
    var o = {}, add = function (x) { if (x && x.t && x.tr) o[key(x.t)] = x.tr; };
    ((R.scopri || {}).frasi || []).forEach(add); (R.esempi || []).forEach(function (g) { (g.items || []).forEach(add); }); ((R.dialogo || {}).righe || []).forEach(add);
    Object.keys(R.glosse || {}).forEach(function (k) { if (!o[key(k)]) o[key(k)] = String(R.glosse[k]).replace(/^!/, ""); });
    return o;
  }
  /* una riga di esempio: la frase (cinese con il pinyin sopra ogni parola, o italiana) e a fianco la traduzione; le forme sbagliate sono barrate */
  function exRow(t, tr, bad) {
    var zh = S.corso === "zh"; bad = bad || !!S.bad[key(t)];
    return '<div class="lz-xr' + (bad ? " bad" : "") + '">' + (bad ? '<span class="lz-xb" aria-hidden="true">' + icon("close") + "</span>" : "") + '<div class="lz-xz" lang="' + (zh ? "zh-CN" : "it") + '">' + (zh ? ruby(t) : esc(t)) + "</div>" +
      (tr ? '<span class="lz-xg" lang="' + (zh ? "it" : "zh-CN") + '">' + rich(tr) + "</span>" : "") + "</div>";
  }
  /* una frase intera (da cinque caratteri, o già presente tra gli esempi) in mezzo al testo diventa card */
  var RE_RUN_ZH = /[㐀-鿿][㐀-鿿，、：；…]*[。？！]?/g, RE_RUN_IT = /(?:[A-Za-zÀ-ÿ'’]+[ ,]+){3,}[A-Za-zÀ-ÿ'’]+[.?!]?/g;
  function frasi(txt) {
    var re = new RegExp((S.corso === "zh" ? RE_RUN_ZH : RE_RUN_IT).source, "g"), out = [], last = 0, m, n;
    while ((m = re.exec(txt))) {
      n = S.corso === "zh" ? m[0].replace(/[^㐀-鿿]/g, "").length : 99;
      if (S.tr[key(m[0])] || (S.corso === "zh" ? n >= 5 : /[.?!]$/.test(m[0]))) { out.push({ txt: txt.slice(last, m.index) }); out.push({ ex: m[0].replace(/[，、：；…]+$/, ""), tr: S.tr[key(m[0])] || "" }); last = m.index + m[0].length; }
    }
    out.push({ txt: txt.slice(last) });
    return out;
  }
  function inline(t) { return rich(S.corso === "zh" ? String(t).replace(RE_TERM_ZH, "$1$2") : t, true); }
  /* una frase che segue «non si dice», «mai», 不说… è una forma sbagliata: si mostra barrata */
  var RE_BAD = /(?:\bnon(?: si dice| dire| va| è)?|\bmai|\bné|不说|不能说|不要说|错误)[\s:：(（]*$/i;
  function split(raw) {
    var re = new RegExp(S.corso === "zh" ? RE_EX_ZH.source : RE_EX_IT.source, "g"), parts = [], last = 0, m;
    while ((m = re.exec(raw))) { parts.push({ txt: raw.slice(last, m.index) }); parts.push({ ex: m[1], tr: m[2] }); last = m.index + m[0].length; }
    parts.push({ txt: raw.slice(last) });
    return parts.reduce(function (a, p) { return a.concat(p.ex ? [p] : frasi(p.txt)); }, []);
  }
  function trimTxt(x) { return x.replace(/^[\s,，;；、:：.。)）]+/, "").replace(/[\s,，;；、(（]+$/, ""); }
  var ITZH = null;
  function glossIt(t) {
    if (S.corso !== "it" || !/^[A-Za-zÀ-ÿ'’]+$/.test(t)) return "";
    if (!ITZH) { ITZH = {}; Object.keys(CP.WORDS || {}).forEach(function (k) { var w = CP.WORDS[k], g = CP.gloss(w).toLowerCase(); if (g && !ITZH[g]) ITZH[g] = w.hz; }); }
    var z = ITZH[t.toLowerCase()]; return z ? '<small lang="zh-CN">' + esc(z) + "</small>" : "";
  }
  function chip(x) { var t = x.trim(); return '<span class="lz-chip">' + (CJK(t) ? rich(t, true) : rich(t) + glossIt(t)) + "</span>"; }
  /* un punto della regola = una scheda: formula, regola in una riga, esempi, e il resto del discorso sotto «Perché» */
  function cardPunto(p) {
    var raw = String(p.t), m = /^\*\*(.+?)\*\*[:：]?\s*/.exec(raw), lead = m ? m[1] : "", rest = (m ? raw.slice(m[0].length) : raw).replace(/^\s*[（(]\s*[«“"][^»”"）)]+[»”"]\s*[）)]\s*[:：]?\s*/, ""), title = lead, chips = [], eq = lead.split(/\s*=\s*/);
    if (eq.length === 2) { title = eq[0]; chips = eq[1].split(/\s*\+\s*/); } else if (/\s\+\s/.test(lead)) { title = ""; chips = lead.split(/\s*\+\s*/); }
    var parts = split(rest), body = [], why = [], rule = "";
    parts.forEach(function (q, i) {
      if (q.ex) { body.push({ ex: q.ex, tr: q.tr, bad: RE_BAD.test(i ? parts[i - 1].txt || "" : "") }); return; }
      var x = trimTxt(q.txt); if (!x || /^(e|ed|o|oppure|ma|和|或|或者|non|non si dice|non va|non è|mai|né|不说|不能说|不要说)$/i.test(x)) return;
      if (!rule && !body.length) { var ss = x.split(/(?<=[.!?。？！])\s+/); rule = ss.shift(); if (ss.length) why.push(ss.join(" ")); return; }
      if (parts[i + 1] && parts[i + 1].ex && x.length <= 70) { body.push({ cap: x }); return; }
      why.push(x);
    });
    var fm = chips.length ? '<span class="lz-fm">' + chips.map(function (c, i) { return (i ? "<i>+</i>" : "") + chip(c); }).join("") + "</span>" : "";
    var no = p.ok === false, h = '<div class="lz-card' + (no ? " no" : "") + '"><div class="lz-ch"><span class="lz-pi" aria-hidden="true">' + icon(no ? "close" : "check") + "</span>" +
      (title ? '<b class="lz-ct">' + inline(title) + "</b>" : "") + (chips.length && !title ? fm : "") + "</div>" + (chips.length && title ? fm : "");
    if (rule) h += '<p class="lz-rule">' + inline(rule) + "</p>";
    var xs = []; function fx() { if (xs.length) { h += '<div class="lz-xl">' + xs.join("") + "</div>"; xs = []; } }
    body.forEach(function (b) { if (b.ex) xs.push(exRow(b.ex, b.tr, b.bad)); else { fx(); h += '<p class="lz-cap">' + inline(b.cap) + "</p>"; } });
    fx();
    if (why.length) h += '<details class="lz-why"><summary>' + esc(lab("why")) + "</summary>" + why.map(function (x) { return "<p>" + inline(x) + "</p>"; }).join("") + "</details>";
    return h + "</div>";
  }
  /* il paragrafo diviso: il testo resta un testo; le frasi escono e formano una lista di esempi (cls: classe dei paragrafi) */
  function prose(t, cls) {
    var raw = String(t), re = new RegExp(S.corso === "zh" ? RE_EX_ZH.source : RE_EX_IT.source, "g"), parts = [], last = 0, m, out = [], cards = [];
    while ((m = re.exec(raw))) { parts.push({ txt: raw.slice(last, m.index) }); parts.push({ ex: m[1], tr: m[2] }); last = m.index + m[0].length; }
    parts.push({ txt: raw.slice(last) });
    parts = parts.reduce(function (a, p) { return a.concat(p.ex ? [p] : frasi(p.txt)); }, []);
    function flush() { if (cards.length) { out.push('<div class="lz-xl">' + cards.join("") + "</div>"); cards = []; } }
    parts.forEach(function (p, i) {
      if (p.ex) { cards.push(exRow(p.ex, p.tr, RE_BAD.test(i ? parts[i - 1].txt || "" : ""))); return; }
      var x = p.txt.replace(/^[\s,，;；、:：.。)）]+/, "").replace(/[\s,，;；、(（]+$/, "");
      if (!x || /^[.。,，;；:：\s]*$/.test(x) || /^(e|ed|o|oppure|ma|和|或|或者)$/i.test(x)) return;
      flush(); out.push("<p" + (cls ? ' class="' + cls + '"' : "") + ">" + inline(x) + "</p>");
    });
    flush();
    return out.join("");
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
      '<div class="lz-ans lz-prose" id="lz-ans" hidden>' + prose(s.risposta) + "</div>");
  }

  /* ---------- regola ---------- */
  function regola(R) {
    var g = R.regola, sch = g.schema || [];
    return sec("regola", head(2, "regola", "scales") +
      '<div class="lz-prose">' + prose(g.enunciato, "lz-lead") + "</div>" +
      (sch.length ? '<div class="lz-formula" role="group" aria-label="' + CP.attr(lab("regola")) + '">' + sch.map(function (x, j) { return (j ? '<span class="lz-arrow" aria-hidden="true">→</span>' : "") + '<span class="lz-fx f' + (j % 5) + (CJK(x) && x.length <= 2 ? " key" : "") + '">' + (CJK(x) ? '<span class="han" lang="zh-CN">' + esc(x) + "</span>" : esc(x)) + "</span>"; }).join("") + "</div>" : "") +
      '<div class="lz-cards">' + g.punti.map(cardPunto).join("") + "</div>");
  }

  /* ---------- logica ---------- */
  function logica(R) { return sec("logica", head(3, "logica", "brain") + '<details class="lz-why lz-why-s"><summary>' + esc(lab("why")) + '</summary><div class="lz-callout">' + R.logica.map(function (p) { return '<div class="lz-prose">' + prose(p) + "</div>"; }).join("") + "</div></details>"); }

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
    return sec("tranello", head(7, "tranello", "warning") + '<div class="lz-trap"><div class="lz-prose lz-trap-t">' + prose(t.errore) + "</div>" +
      (t.esempi ? '<div class="lz-pairs">' + t.esempi.map(function (x) { return '<div class="lz-pair"><div class="bad"><span aria-hidden="true">' + icon("close") + '</span><span class="han" lang="' + (S.corso === "zh" ? "zh-CN" : "it") + '">' + esc(x.sbagliata) + '</span></div><div class="good"><span aria-hidden="true">' + icon("check") + '</span><span class="han" lang="' + (S.corso === "zh" ? "zh-CN" : "it") + '">' + esc(x.giusta) + "</span></div></div>"; }).join("") + "</div>" : "") +
      '<p class="lz-why"><b>' + esc(lab("why")) + ".</b> " + inline(t.perche) + '</p><p class="lz-escape"><b>' + esc(lab("avoid")) + ".</b> " + inline(t.esci) + "</p></div>");
  }

  /* ---------- curiosi e pragmatica ---------- */
  function curiosi(R) {
    return sec("curiosi", head(8, "curiosi", "telescope") + R.curiosi.map(function (c) { return '<details class="lz-det"><summary><span>' + rich(c.titolo) + '</span><i aria-hidden="true"></i></summary><div class="lz-det-b lz-prose">' + prose(c.t) + "</div></details>"; }).join("") +
      (R.pragmatica ? '<div class="lz-prag"><h4>' + icon("handshake") + " " + esc(lab("pragmatica")) + '</h4><div class="lz-prose">' + prose(R.pragmatica) + "</div></div>" : ""));
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
  function view() { try { return JSON.parse(localStorage.getItem("cp-lz-view") || "{}"); } catch (e) { return {}; } }
  function viewBar() {
    var v = view(), zh = S.corso === "zh";
    function sw(k, txt) { return '<button type="button" class="lz-sw" data-lz="view" data-v="' + k + '" aria-pressed="' + (v[k] !== 0) + '">' + esc(txt) + "</button>"; }
    return '<div class="lz-view" role="group" lang="' + (zh ? "it" : "zh-CN") + '">' + (zh ? sw("py", "Pinyin") : "") + sw("gl", zh ? "Traduzioni" : "译文") + "</div>";
  }
  function html(l, R, ctx) {
    if (!document.getElementById("lz-css")) { var st = document.createElement("style"); st.id = "lz-css"; st.textContent = CP.lzCss; document.head.appendChild(st); }
    S = { l: l, R: R, ctx: ctx, corso: ctx.corso, prog: ctx.prog || {}, q: {}, run: null, tr: trTable(R), bad: badTable(R) };
    uid = 0;
    var tocKeys = ["scopri", "regola", "logica"].concat(R.mappa ? ["mappa"] : []).concat(["esempi", "contrasti", "dialogo", "tranello", "curiosi", "esercizi"]);
    var toc = '<nav class="lz-toc" aria-label="' + CP.attr(lab("sections")) + '">' + tocKeys.map(function (k) { return '<button type="button" class="lz-tchip" data-lz="toc" data-to="' + k + '">' + esc(lab(k)) + "</button>"; }).join("") + "</nav>";
    return '<div class="acts lz-back"' + (ctx.corso === "zh" ? ' lang="it"' : "") + '><button type="button" class="btn-s" ' + ctx.backAttr + ">← " + esc(lab("back")) + "</button></div>" +
      '<article class="lz' + (view().py === 0 ? " lz-nopy" : "") + (view().gl === 0 ? " lz-nogl" : "") + '" data-lz-root data-corso="' + ctx.corso + '"' + (ctx.corso === "zh" ? ' lang="it"' : "") + '><header class="lz-top"><span class="tag muted small">' + ctx.tag + (S.prog.best != null ? " · " + S.prog.best + "%" : "") + (R.svolta ? ' · <span class="lz-svolta">' + (S.corso === "zh" ? "Punto di svolta" : "关键一课") + "</span>" : "") + "</span>" +
      '<h2 class="lz-title" lang="' + (S.corso === "zh" ? "it" : "zh-CN") + '">' + rich(l.title) + '</h2><p class="lz-goal">' + icon("target") + " " + rich(l.goal) + "</p>" + viewBar() + "</header>" +
      '<div class="lz-sticky"><div class="lz-bar" aria-hidden="true"><i id="lz-bar"></i></div>' + toc + "</div>" +
      scopri(R) + regola(R) + logica(R) + mappa(R) + esempi(R) + contrasti(R) + dialogo(R) + tranello(R) + curiosi(R) + exercises(R) + "</article>";
  }

  /* ---------- eventi: un solo ascoltatore per tutta la pagina ---------- */
  function find(e, sel) { return e.target && e.target.closest ? e.target.closest(sel) : null; }
  document.addEventListener("click", function (e) {
    var rb = find(e, ".lz-rb[data-k]"); if (rb && S && CP.openFamily) { try { CP.openFamily(rb.getAttribute("data-k")); } catch (x) {} return; }
    var b = find(e, "[data-lz]"); if (!b || !S || !document.querySelector("[data-lz-root]")) return;
    var a = b.getAttribute("data-lz");
    if (a === "reveal") { var ans = document.getElementById("lz-ans"), open = ans.hidden; ans.hidden = !open; b.setAttribute("aria-expanded", String(open)); b.querySelector("span:last-child").textContent = lab(open ? "hide" : "show"); if (open) { ans.classList.remove("lz-in"); void ans.offsetWidth; ans.classList.add("lz-in"); CP.sfx && CP.sfx("tap"); } return; }
    if (a === "view") { var v = view(), k = b.getAttribute("data-v"), art0 = document.querySelector("[data-lz-root]"); v[k] = v[k] === 0 ? 1 : 0; try { localStorage.setItem("cp-lz-view", JSON.stringify(v)); } catch (x) {} art0.classList.toggle("lz-nopy", v.py === 0); art0.classList.toggle("lz-nogl", v.gl === 0); b.setAttribute("aria-pressed", String(v[k] !== 0)); return; }
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

  /* lezione ricca (data/lr/<corso>/NN-<id>.js): nel file unico è un blocco di testo eseguito solo quando la lezione si apre; da src/ è uno script normale */
  function carica(c, id) { var R = LESSON_RICH[c]; if (R && !R[id]) { var el = document.getElementById("lr-" + c + "-" + id); if (el) { var s = document.createElement("script"); s.textContent = el.textContent; document.head.appendChild(s); el.parentNode.removeChild(el); } } return R && R[id] || null; }
  /* a: [T, prog, nextOf, zhHTML, toks, tileHTML, W, mark] di phrases/lessons.js */
  function zh(l, a) {
    var h = { T: a[0], prog: a[1], nextOf: a[2], zh: a[3], toks: a[4], tile: a[5], W: a[6], mark: a[7] };
    var R = carica("zh", l.id); if (!R) return null;
    setTimeout(mount, 0);
    return html(l, R, {
      corso: "zh", tag: l.review ? h.T("ls.rev") : h.T("ls.n", { n: l.n }), prog: h.prog(l.id), next: l.review ? null : h.nextOf(l),
      backAttr: "data-ls-back", openAttr: function (id) { return 'data-ls-open="' + CP.attr(id) + '"'; },
      sent: function (t, compact) { return h.zh(t, compact ? "ls-zh lz-c" : "ls-zh"); },
      say: function (t) { return CP.audioBtns(t.replace(/[。？！，]/g, "")); },
      tokens: h.toks, tile: h.tile, tokText: function (b) { return h.W[b.k].hz; }, strip: CP.lab.strip,
      mark: function (patch) { h.mark(l.id, patch); }
    });
  }
  CP.lezione = { html: html, mount: mount, rich: carica, zh: zh };
})();
