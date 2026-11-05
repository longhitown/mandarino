/* ===== màndarínō · Duotono: l'orecchio ai toni, a coppie e oltre. Si ascolta una parola di due, tre o quattro sillabe (la voce del dispositivo) e si
   sceglie il tono di ogni sillaba, compreso il tono neutro. La risposta giusta è il tono che si pronuncia davvero (CP.sandhi, study/sandhi.js): dove parlando il tono cambia, come in 你好
   (si scrive nǐ hǎo, si dice ní hǎo), dopo la risposta c'è la spiegazione. Dieci parole a sessione, già viste per prime; un terzo circa sono parole
   con sandhi, le altre sono scelte combinazione per combinazione perché 4+4 non copra tutto. Si carica al primo uso (CP.duotono).
   Microdescrizione (it): «Ascolta una parola e scegli il tono di ogni sillaba, anche il neutro. Dove il tono cambia parlando, come in 你好
   (ní hǎo), te lo spieghiamo.» Restano fuori solo le parole di tre o più terzi toni di fila (come si dicono dipende dal ritmo) e quelle di cinque o più sillabe. ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc, root = CP.studyRoot, W = CP.WORDS, ROUNDS = 10, duo = null, active = false;
  var TXT = {
    it: { "duo.title": "Duotono", "duo.desc": "Ascolta una parola (due, tre o quattro sillabe) e scegli il tono di ogni sillaba, anche il neutro. Dove il tono cambia parlando, come in 你好 (ní hǎo), te lo spieghiamo.",
      "duo.q": "Che toni senti?", "duo.sN": "{n}ª sillaba", "duo.neu": "neutro", "duo.neuN": "tono neutro", "duo.say": "Si dice", "duo.write": "Si scrive", "duo.was": "Era: {t}.", "duo.okN": "coppie giuste", "duo.again": "Riascolta",
      "duo.change": "In questa parola il tono cambia parlando:", "duo.next": "Avanti", "duo.result": "Vedi il risultato", "duo.r9": "Orecchio fine: senti anche i cambi di tono.", "duo.r6": "Buon lavoro. I cambi di tono sono la parte difficile: riprova.", "duo.r0": "Ci vuole orecchio: riascolta e riprova, sbagliare serve.",
      "duo.few": "Servono almeno dieci parole di più sillabe: studia ancora un po'." },
    zh: { "duo.title": "Duotono", "duo.desc": "听一个词（两到四个音节），为每个音节选出声调，轻声也算。说话时声调会变的地方，比如 你好（ní hǎo），我们会解释。", "duo.q": "你听到的是哪些声调？", "duo.sN": "第{n}个音节", "duo.neu": "轻声", "duo.neuN": "轻声",
      "duo.say": "实际读音", "duo.write": "拼写", "duo.was": "正确答案：{t}。", "duo.okN": "答对的组合", "duo.again": "再听一遍", "duo.change": "这个词说话时声调会变：", "duo.next": "下一个", "duo.result": "查看结果",
      "duo.r9": "耳朵很灵：连变调都听出来了。", "duo.r6": "不错。变调是难点，再试一次。", "duo.r0": "多听几遍，再试一次，出错也是练习。", "duo.few": "至少需要十个多音节词：请再多学一些。" }
  };
  Object.assign(window.I18N.it, TXT.it); Object.assign(window.I18N.zh, TXT.zh);
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  /* le parole di due-quattro caratteri e altrettante sillabe, con i toni parlati da 1° a 5° (neutro compreso); fuori le ambigue (tre terzi di fila) */
  function pool() {
    var keys = CP.ORDER.filter(function (k) { var w = W[k], n = Array.from(w.hz).length; return n >= 2 && n <= 4 && CP.syllables(w.py).length === n; }), seen = keys.filter(function (k) { return CP.state(k) >= 1; });
    if (seen.length < 30) keys.some(function (k) { if (seen.indexOf(k) < 0) seen.push(k); return seen.length >= 30; });
    function ent(k) { var w = W[k], r = CP.sandhi(w.hz, w.py); return { w: w, r: r, n: r.parl.length, sd: !!(r.reg.length || r.parl.join() !== r.cit.join()) }; }
    var out = seen.map(ent), have = out.filter(function (x) { return x.sd; }).length;
    /* di parole con sandhi se ne vogliono almeno tre: chi ne ha viste poche ne trova le più comuni, anche se non le ha ancora studiate */
    if (have < 3) for (var i = 0; i < keys.length && have < 6; i++) if (seen.indexOf(keys[i]) < 0) { var x = ent(keys[i]); if (x.sd) { out.push(x); have++; } }
    return out.filter(function (x) { return !x.r.amb && x.r.parl.every(function (t) { return t >= 1 && t <= 5; }); });
  }
  function start() {
    var p = pool(); if (p.length < ROUNDS) { CP.toast(T("duo.few")); return; }
    var byCombo = {}, sd = [], by3 = [], by4 = [], neu = [];
    p.forEach(function (x) { var c = x.r.parl.join("-"); (byCombo[c] = byCombo[c] || []).push(x); if (x.sd) sd.push(x); if (x.n === 3) by3.push(x); if (x.n === 4) by4.push(x); if (x.r.parl.indexOf(5) >= 0) neu.push(x); });
    duo = { n: 0, ok: 0, pool: p, combos: Object.keys(byCombo), byCombo: byCombo, sandhi: sd, long3: by3, long4: by4, neutral: neu, q: null, picks: [], answered: false, used: {} };
    active = true; root.classList.remove("is-card"); CP.focusMode(true); next();
  }
  function next() {
    if (duo.n >= ROUNDS) return done();
    var x, tries = 0;
    do {
      var d = Math.random();
      /* un terzo circa con sandhi, un quinto con tono neutro, un quinto di tre sillabe, uno su otto di quattro: il resto, combinazione per combinazione */
      x = (duo.sandhi.length && d < 0.3) ? pick(duo.sandhi) : (duo.neutral.length && d < 0.5) ? pick(duo.neutral) : (duo.long3.length && d < 0.7) ? pick(duo.long3) : (duo.long4.length && d < 0.82) ? pick(duo.long4) : pick(duo.byCombo[pick(duo.combos)]); tries++;
    } while (duo.used[x.w.key] && tries < 40);
    duo.used[x.w.key] = 1; duo.q = x; duo.picks = x.r.parl.map(function () { return 0; }); duo.answered = false; render();
    CP.speak(x.w.hz, { rate: Math.min(CP.pref.rate, 0.9) });
  }
  function rowBtns(r) {
    return [1, 2, 3, 4, 5].map(function (t) {
      var st = "", sample = ["mā", "má", "mǎ", "mà", "ma"][t - 1];
      if (duo.answered) st = t === duo.q.r.parl[r] ? " right" : (t === duo.picks[r] ? " wrong" : ""); else if (duo.picks[r] === t) st = " on";
      return '<button type="button" class="t' + t + st + '" data-dtone="' + r + "," + t + '"' + (duo.answered ? " disabled" : "") + ' aria-pressed="' + (duo.picks[r] === t) + '" aria-label="' + CP.attr(T("duo.sN", { n: r + 1 }) + ": " + (t === 5 ? T("duo.neuN") : T("ear.toneN", { n: t }))) + '">' + CP.toneCurveHTML(sample) + "<span>" + (t === 5 ? T("duo.neu") : t + "°") + "</span></button>";
    }).join("");
  }
  function render() {
    var x = duo.q, w = x.w, r = x.r, pct = Math.round(duo.n / ROUNDS * 100), h = '<div class="sess"><button type="button" class="btn-quiet" id="m-quit">' + T("fx.leave") + "</button>" +
      '<div class="meter" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><i class="k" style="width:' + pct + '%"></i></div><span class="cnt">' + duo.n + " / " + ROUNDS + "</span></div>";
    h += '<div class="panel fc"><span class="tag">' + T("duo.title") + "</span>" + (duo.n === 0 && !duo.answered ? '<p class="small muted" style="margin:0">' + esc(T("duo.desc")) + "</p>" : "") +
      '<button type="button" class="btn-main" style="margin:0;max-width:260px" data-dplay>⟦speaker⟧ ' + T("duo.again") + "</button><p class=\"small muted\" style=\"margin:0\">" + T("duo.q") + "</p>" +
      r.parl.map(function (t, i) { return '<div class="duo-row"><span class="small muted">' + T("duo.sN", { n: i + 1 }) + '</span><div class="tonebtns' + (r.parl.length > 2 ? " compact" : "") + '">' + rowBtns(i) + "</div></div>"; }).join("");
    if (duo.answered) {
      var right = same(duo.picks, r.parl), why = CP.sandhi.why(r), chg = r.parl.join() !== r.cit.join();
      h += '<p class="verdict ' + (right ? "ok" : "ko") + '" style="width:100%;text-align:left">' + (right ? T("ex.right") : T("duo.was", { t: r.parl.map(function (t) { return t === 5 ? T("duo.neu") : t + "°"; }).join(" + ") })) + "</p>" +
        '<div class="cd-py">' + CP.pinyinHTML(w.py) + '</div><div class="cd-hz" lang="zh-CN">' + CP.hanziHTML(w.hz, w.py) + '</div><div class="cd-it" style="font-size:20px" lang="it">' + esc(w.it) + "</div>";
      if (chg) h += '<div class="spoken"><span class="tag">' + T("duo.say") + '</span><div class="cd-hz sp-hz" lang="zh-CN">' + CP.hanziHTML(w.hz, r.pp) + '</div><div class="sp">' + CP.pinyinHTML(r.pp) + '</div><span class="small muted">' + T("duo.write") + " " + esc(w.py.replace(/\./g, "")) + "</span></div>";
      if (why.length) h += '<ul class="small muted duo-why" style="margin:0;padding-left:18px">' + why.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
      h += '<button type="button" class="btn-main" id="d-next" style="margin-top:0">' + T(duo.n >= ROUNDS ? "duo.result" : "duo.next") + "</button>";
    }
    root.innerHTML = h + "</div>"; window.scrollTo(0, 0);
  }
  function same(a, b) { return a.length === b.length && a.every(function (t, i) { return t === b[i]; }); }
  function pickTone(r, t) {
    if (duo.answered || r >= duo.picks.length) return; duo.picks[r] = t;
    if (duo.picks.every(function (x) { return x; })) answer(); else render();
  }
  function answer() {
    var rr = duo.q.r, right = same(duo.picks, rr.parl);
    duo.answered = true; duo.n++; if (right) duo.ok++;
    CP.sfx(right ? "ok" : "ko"); if (CP.game && CP.game.ear) CP.game.ear(right);
    if (!right && CP.confuse) rr.parl.forEach(function (_, i) { if (duo.picks[i] !== rr.parl[i]) CP.confuse(rr.parl[i], duo.picks[i], duo.q.w.key); });
    render();
  }
  function done() {
    active = false; CP.focusMode(false);
    root.innerHTML = '<h2 style="margin-top:20px">' + T("duo.title") + '</h2><div class="stats"><div class="stat"><b>' + duo.ok + "/" + ROUNDS + "</b><span>" + T("duo.okN") + "</span></div></div>" +
      '<p class="muted">' + T(duo.ok >= 9 ? "duo.r9" : duo.ok >= 6 ? "duo.r6" : "duo.r0") + '</p><button type="button" class="btn-main" id="duo-open">' + T("ex.again") + '</button><button type="button" class="btn-main btn-quiet" id="m-quit" style="margin-top:10px">' + T("ear.back") + "</button>";
    window.scrollTo(0, 0);
  }
  root.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("button") : null; if (!t || !active) return;
    if (t.id === "m-quit") { active = false; duo = null; return; }
    if (t.id === "d-next") { CP.sfx("tap"); next(); }
    else if (t.hasAttribute("data-dplay")) CP.speak(duo.q.w.hz, { rate: Math.min(CP.pref.rate, 0.9) });
    else if (t.hasAttribute("data-dtone")) { var a = t.getAttribute("data-dtone").split(","); pickTone(+a[0], +a[1]); }
  });
  document.addEventListener("keydown", function (e) {
    if (!active || !duo || e.ctrlKey || e.metaKey || e.altKey || document.getElementById("view-study").hidden || !document.getElementById("fam").hidden) return;
    var a = document.activeElement; if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return;
    if (!duo.answered && /^[0-5]$/.test(e.key)) { e.preventDefault(); var ix = duo.picks.indexOf(0); pickTone(ix < 0 ? 0 : ix, e.key === "0" ? 5 : +e.key); }
    else if (duo.answered && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); if (a && a.blur) a.blur(); next(); }
  });
  var oldOnStudy = CP.onStudy;
  CP.onStudy = function () { if (active) { active = false; duo = null; CP.focusMode(false); CP.studyHome(); return; } if (oldOnStudy) oldOnStudy(); };
  CP.duotono = { start: start, active: function () { return active; } };
})();
