/* ===== màndarínō · Lavagna, in Studia: si scrive a mano la parola data dal pinyin e dal significato, carattere per carattere, su un quadrato con il 米字格
   (voice/pad.js). Ordine e direzione dei tratti si confrontano uno per uno con le linee centrali di Make Me a Hanzi (data/strokes.js), che oggi coprono
   TUTTI i caratteri del vocabolario, pacchetti compresi (tools/strokes.mjs). Cinque parole a sessione, tra quelle già viste per prime; un carattere scritto
   con almeno il 70% di aderenza conta come riuscito (lo decide la lavagna). Si carica al primo uso (CP.lavagna). ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc, root = CP.studyRoot, W = CP.WORDS, ROUNDS = 5, S = null, active = false, padObj = null;
  var TXT = {
    it: { "lv.title": "Lavagna", "lv.desc": "Scrivi la parola con il dito, un carattere alla volta: il pinyin e il significato sono il suggerimento. Ordine e direzione dei tratti si controllano tratto per tratto.",
      "lv.show": "Mostra il carattere", "lv.next": "Avanti", "lv.result": "Vedi il risultato", "lv.okN": "parole scritte bene", "lv.r5": "Mano ferma: tutte scritte bene.", "lv.r3": "Buon lavoro: ripassa i tratti sbagliati.", "lv.r0": "Si impara ripetendo: riprova con la guida accesa.",
      "lv.few": "Servono almeno cinque parole: studia ancora un po'.", "lv.write": "Scrivi:", "lv.again": "Riprova", "lv.chars": "{n} caratteri", "lv.char1": "1 carattere", "lv.print": "Stampa foglio di scrittura (PDF)" },
    zh: { "lv.title": "手写板 · Lavagna", "lv.desc": "用手指一个字一个字地写出这个词：拼音和意思是提示。笔顺和笔画方向会逐笔检查。", "lv.show": "显示汉字", "lv.next": "下一个", "lv.result": "查看结果", "lv.okN": "写对的词",
      "lv.r5": "手很稳：全部写对了。", "lv.r3": "不错：再练一练写错的笔画。", "lv.r0": "多练几遍：打开描红再试一次。", "lv.few": "至少需要五个词：请再多学一些。", "lv.write": "请写：", "lv.again": "再试一次", "lv.chars": "{n} 个字", "lv.char1": "1 个字", "lv.print": "打印书写练习纸（PDF）" }
  };
  Object.assign(window.I18N.it, TXT.it); Object.assign(window.I18N.zh, TXT.zh);
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  /* parole di uno-quattro caratteri, già viste per prime; se ne hai viste poche, anche le prime del corso. Evita i poliglotta di sole particelle */
  function pool() {
    var keys = CP.ORDER.filter(function (k) { var n = Array.from(W[k].hz).length; return n >= 1 && n <= 4; }), seen = keys.filter(function (k) { return CP.state(k) >= 1; });
    if (seen.length < 20) keys.some(function (k) { if (seen.indexOf(k) < 0) seen.push(k); return seen.length >= 20; });
    return seen;
  }
  function start() {
    var p = pool(); if (p.length < ROUNDS) { CP.toast(T("lv.few")); return; }
    S = { n: 0, ok: 0, pool: p, used: {}, k: null, shown: false, state: null }; active = true; root.classList.remove("is-card"); CP.focusMode(true); next();
  }
  /* il foglio di lavoro in PDF (ui/worksheet-stub.js): per scrivere gli stessi caratteri su carta vera; un chip discreto, solo qui */
  function printChip() { return '<p style="margin:0"><button type="button" class="chip-ws" data-ws-open>' + (CP.ico ? CP.ico("notes") : "") + esc(T("lv.print")) + "</button></p>"; }
  function destroyPad() { if (padObj) { try { padObj.destroy(); } catch (e) {} padObj = null; } }
  function next() {
    if (S.n >= ROUNDS) return done();
    var k, tries = 0; do { k = pick(S.pool); tries++; } while (S.used[k] && tries < 40);
    S.used[k] = 1; S.k = k; S.shown = false; render();
  }
  function render() {
    destroyPad();
    var w = W[S.k], pct = Math.round(S.n / ROUNDS * 100), n = Array.from(w.hz).length;
    root.innerHTML = '<div class="sess"><button type="button" class="btn-quiet" id="m-quit">' + T("fx.leave") + '</button><div class="meter" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><i class="k" style="width:' + pct + '%"></i></div><span class="cnt">' + S.n + " / " + ROUNDS + "</span></div>" +
      '<div class="panel fc lv-panel"><span class="tag">' + T("lv.title") + "</span>" + (S.n === 0 ? '<p class="small muted" style="margin:0">' + esc(T("lv.desc")) + "</p>" + printChip() : "") +
      '<div class="cd-py">' + CP.pinyinHTML(w.py) + '</div><div class="cd-it" style="font-size:20px" lang="it">' + esc(w.it) + '</div><p class="small muted" style="margin:0">' + T(n === 1 ? "lv.char1" : "lv.chars", { n: n }) + "</p>" +
      '<div id="lv-han" class="cd-hz" lang="zh-CN" hidden>' + CP.hanziHTML(w.hz, w.py) + '</div><div id="lv-pad"></div>' +
      '<div class="acts"><button type="button" class="btn-s" data-lvshow>' + T("lv.show") + '</button></div>' +
      '<button type="button" class="btn-main" id="lv-next" style="margin-top:0">' + T(S.n + 1 >= ROUNDS ? "lv.result" : "lv.next") + "</button></div>";
    padObj = CP.pad(w.hz, { ghost: false, blind: true });   /* i pulsanti dei caratteri dicono 1, 2, 3: il carattere si scrive a memoria */ root.querySelector("#lv-pad").appendChild(padObj.el); padObj.mount(); window.scrollTo(0, 0);
  }
  function finishWord() {
    var w = W[S.k], aw = padObj ? padObj.state().awarded : {}, chars = Array.from(w.hz), good = chars.every(function (c) { return aw[c] || aw["*"]; });
    S.n++; if (good) S.ok++; destroyPad();
  }
  function done() {
    active = false; CP.focusMode(false); destroyPad();
    root.innerHTML = '<h2 style="margin-top:20px">' + T("lv.title") + '</h2><div class="stats"><div class="stat"><b>' + S.ok + "/" + ROUNDS + "</b><span>" + T("lv.okN") + "</span></div></div>" +
      '<p class="muted">' + T(S.ok >= 5 ? "lv.r5" : S.ok >= 3 ? "lv.r3" : "lv.r0") + "</p>" + printChip() + '<button type="button" class="btn-main" id="lv-open">' + T("lv.again") + '</button><button type="button" class="btn-main btn-quiet" id="m-quit" style="margin-top:10px">' + T("ear.back") + "</button>";
    window.scrollTo(0, 0);
  }
  root.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("button") : null; if (!t) return;
    if (t.id === "lv-open") { CP.sfx("tap"); start(); return; }
    if (!active) return;
    if (t.id === "m-quit") { destroyPad(); active = false; S = null; return; }
    if (t.id === "lv-next") { CP.sfx("tap"); finishWord(); next(); }
    else if (t.hasAttribute("data-lvshow")) { var h = root.querySelector("#lv-han"); if (h) h.hidden = false; if (padObj) padObj.setGuide(true); t.hidden = true; }
  });
  var oldOnStudy = CP.onStudy;
  CP.onStudy = function () { if (active) { destroyPad(); active = false; S = null; CP.focusMode(false); CP.studyHome(); return; } if (oldOnStudy) oldOnStudy(); };
  CP.lavagna = { start: start, active: function () { return active; } };
})();
