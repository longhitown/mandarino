/* ===== màndarínō · il tutor: un invito gentile dopo la TERZA ricaduta su una parola (la scheda era in ripasso e si è sbagliata per la terza volta). Non è un menù
   a ogni errore: è un solo pop-up, a fine sessione (mai in mezzo alle carte), che dice «questo errore sembra particolarmente complicato per te, ti va se lo
   rivediamo insieme?». Sì → il foglio della parola (famiglia, componenti, esempi); se l'errore era del solo tono, anche l'allenamento sui toni (Duotono).
   Sempre con l'uscita: «Non ora» (la parola non viene riproposta) e «Non mostrarmi più questi consigli» (si riattiva da Impostazioni → Studio). Al massimo uno per
   sessione, una volta per parola. Tutto sul dispositivo (md-tutor-v1, md-tutor-off: non entrano nei backup). Si carica alla prima ricaduta (CP.tutor). ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc, K = "md-tutor-v1", OFF = "md-tutor-off", shown = false;
  var TXT = {
    it: { "tu.title": "Un consiglio dal tutor", "tu.q": "Hai sbagliato {w} per la terza volta: questo errore sembra essere particolarmente complicato per te. Ti va se lo rivediamo insieme?",
      "tu.qt": "Hai sbagliato il tono di {w} per la terza volta: questo errore sembra essere particolarmente complicato per te. Ti va se lo rivediamo insieme?",
      "tu.yes": "Sì, rivediamolo", "tu.tone": "Allena i toni", "tu.later": "Non ora", "tu.off": "Non mostrarmi più questi consigli", "tu.offDone": "Va bene, non te lo chiederò più. Puoi riattivarlo in Impostazioni → Studio."
    },
    zh: { "tu.title": "导师的小建议", "tu.q": "你已经第三次答错“{w}”了：这个错误对你来说似乎特别难。要不要我们一起再看一遍？", "tu.qt": "你已经第三次读错“{w}”的声调了：这个错误对你来说似乎特别难。要不要我们一起再看一遍？",
      "tu.yes": "好，一起看", "tu.tone": "练声调", "tu.later": "现在不要", "tu.off": "不再显示这类建议", "tu.offDone": "好的，以后不再问你。可以在“设置 → 学习”里重新打开。"
    }
  };
  Object.assign(window.I18N.it, TXT.it); Object.assign(window.I18N.zh, TXT.zh);
  function off() { try { return localStorage.getItem(OFF) === "1"; } catch (e) { return false; } }
  function load() { try { var o = JSON.parse(localStorage.getItem(K) || "null"); return o && typeof o === "object" ? o : { q: [], seen: {} }; } catch (e) { return { q: [], seen: {} }; } }
  function save(o) { try { localStorage.setItem(K, JSON.stringify(o)); } catch (e) {} }
  /* la terza ricaduta di una parola (da CP.grade): si mette da parte, si mostra a fine sessione */
  function note(k, meta) {
    if (off() || !CP.WORDS[k]) return;
    var o = load(); o.seen = o.seen || {}; o.q = o.q || [];
    if (o.seen[k]) return;
    o.q = o.q.filter(function (x) { return x.k !== k; }).concat([{ k: k, t: Date.now(), tone: !!(meta && meta.tone) }]).slice(-5); save(o);
  }
  function show() {
    if (off() || shown) return false;
    var o = load(), x = (o.q || []).pop(); if (!x || !CP.WORDS[x.k]) return false;
    o.seen = o.seen || {}; o.seen[x.k] = Date.now(); o.q = []; save(o); shown = true;
    var w = CP.WORDS[x.k], label = esc(w.hz) + " (" + esc(w.py.replace(/\./g, "")) + ", " + esc(CP.gloss ? CP.gloss(w) : w.it) + ")";
    CP.openSheet('<div class="fam-head"><div class="meta"><b>' + esc(T("tu.title")) + '</b></div><button type="button" class="fam-x btn-s" data-famclose data-tu="later">' + esc(T("common.close")) + "</button></div>" +
      '<div class="tu-card"><div class="cd-hz" lang="zh-CN">' + CP.hanziHTML(w.hz, w.py) + '</div><p class="tu-q" lang="it">' + T(x.tone ? "tu.qt" : "tu.q", { w: label })+ "</p>" +
      '<div class="acts"><button type="button" class="btn-main" data-tu="yes" data-tu-k="' + CP.attr(x.k) + '">' + esc(T("tu.yes")) + "</button>" +
      (x.tone ? '<button type="button" class="btn-s" data-tu="tone">' + esc(T("tu.tone")) + "</button>" : "") +
      '<button type="button" class="btn-s" data-tu="later">' + esc(T("tu.later")) + "</button></div>" +
      '<p style="margin:6px 0 0"><button type="button" class="btn-quiet small" data-tu="off">' + esc(T("tu.off")) + "</button></p></div>");
    return true;
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-tu]") : null; if (!b) return;
    var a = b.getAttribute("data-tu");
    if (a === "yes") { var k = b.getAttribute("data-tu-k"), w = CP.WORDS[k]; CP.closeSheet(); if (w) setTimeout(function () { CP.openFamily(w.hz); }, 120); }
    else if (a === "tone") { CP.closeSheet(); setTimeout(function () { if (CP.duotono) CP.duotono.start(); }, 120); }
    else if (a === "off") { try { localStorage.setItem(OFF, "1"); } catch (er) {} CP.closeSheet(); if (CP.toast) CP.toast(T("tu.offDone")); }
    else if (a === "later") CP.closeSheet();
  });
  CP.tutor = { note: note, show: show, off: off, load: load };
})();
