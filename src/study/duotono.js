/* ===== màndarínō · Duotono: l'orecchio ai toni, a coppie. Si ascolta una parola di due sillabe (la voce del dispositivo) e si scelgono i due toni,
   uno per sillaba. La risposta giusta è il tono che si pronuncia davvero (CP.sandhi, study/sandhi.js): dove parlando il tono cambia, come in 你好
   (si scrive nǐ hǎo, si dice ní hǎo), dopo la risposta c'è la spiegazione. Dieci parole a sessione, già viste per prime; un terzo circa sono parole
   con sandhi, le altre sono scelte combinazione per combinazione perché 4+4 non copra tutto. Si carica al primo uso (CP.duotono).
   Microdescrizione (it): «Ascolta una parola di due sillabe e scegli i due toni, uno per sillaba. Dove il tono cambia parlando, come in 你好
   (ní hǎo), te lo spieghiamo.» ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc, root = CP.studyRoot, W = CP.WORDS, ROUNDS = 10, duo = null, active = false;
  var TXT = {
    it: { "duo.title": "Duotono", "duo.desc": "Ascolta una parola di due sillabe e scegli i due toni, uno per sillaba. Dove il tono cambia parlando, come in 你好 (ní hǎo), te lo spieghiamo.",
      "duo.q": "Che toni senti?", "duo.s1": "1ª sillaba", "duo.s2": "2ª sillaba", "duo.say": "Si dice", "duo.write": "Si scrive", "duo.was": "Era {a}° + {b}°.", "duo.okN": "coppie giuste", "duo.again": "Riascolta",
      "duo.change": "In questa parola il tono cambia parlando:", "duo.next": "Avanti", "duo.result": "Vedi il risultato", "duo.r9": "Orecchio fine: senti anche i cambi di tono.", "duo.r6": "Buon lavoro. I cambi di tono sono la parte difficile: riprova.", "duo.r0": "Ci vuole orecchio: riascolta e riprova, sbagliare serve.",
      "duo.few": "Servono almeno dieci parole di due sillabe: studia ancora un po'." },
    zh: { "duo.title": "Duotono", "duo.desc": "听一个双音节词，为每个音节选出声调。说话时声调会变的地方，比如 你好（ní hǎo），我们会解释。", "duo.q": "你听到的是哪两个声调？", "duo.s1": "第一个音节", "duo.s2": "第二个音节",
      "duo.say": "实际读音", "duo.write": "拼写", "duo.was": "正确答案：{a}声 + {b}声。", "duo.okN": "答对的组合", "duo.again": "再听一遍", "duo.change": "这个词说话时声调会变：", "duo.next": "下一个", "duo.result": "查看结果",
      "duo.r9": "耳朵很灵：连变调都听出来了。", "duo.r6": "不错。变调是难点，再试一次。", "duo.r0": "多听几遍，再试一次，出错也是练习。", "duo.few": "至少需要十个双音节词：请再多学一些。" }
  };
  Object.assign(window.I18N.it, TXT.it); Object.assign(window.I18N.zh, TXT.zh);
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  /* le parole di due caratteri e due sillabe, con i toni parlati tutti da 1° a 4° (il tono neutro viene dopo) */
  function pool() {
    var keys = CP.ORDER.filter(function (k) { var w = W[k]; return Array.from(w.hz).length === 2 && CP.syllables(w.py).length === 2; }), seen = keys.filter(function (k) { return CP.state(k) >= 1; });
    if (seen.length < 30) keys.some(function (k) { if (seen.indexOf(k) < 0) seen.push(k); return seen.length >= 30; });
    function ent(k) { var w = W[k], r = CP.sandhi(w.hz, w.py); return { w: w, r: r, sd: !!(r.reg.length || r.parl.join() !== r.cit.join()) }; }
    var out = seen.map(ent), have = out.filter(function (x) { return x.sd; }).length;
    /* di parole con sandhi se ne vogliono almeno tre: chi ne ha viste poche ne trova le più comuni, anche se non le ha ancora studiate */
    if (have < 3) for (var i = 0; i < keys.length && have < 6; i++) if (seen.indexOf(keys[i]) < 0) { var x = ent(keys[i]); if (x.sd) { out.push(x); have++; } }
    return out.filter(function (x) { return x.r.parl.length === 2 && x.r.parl.every(function (t) { return t >= 1 && t <= 4; }); });
  }
  function start() {
    var p = pool(); if (p.length < ROUNDS) { CP.toast(T("duo.few")); return; }
    var byCombo = {}, sd = [];
    p.forEach(function (x) { var c = x.r.parl.join("-"); (byCombo[c] = byCombo[c] || []).push(x); if (x.sd) sd.push(x); });
    duo = { n: 0, ok: 0, pool: p, combos: Object.keys(byCombo), byCombo: byCombo, sandhi: sd, q: null, picks: [0, 0], answered: false, used: {} };
    active = true; root.classList.remove("is-card"); CP.focusMode(true); next();
  }
  function next() {
    if (duo.n >= ROUNDS) return done();
    var x, tries = 0;
    do {
      x = (duo.sandhi.length && Math.random() < 0.34) ? pick(duo.sandhi) : pick(duo.byCombo[pick(duo.combos)]); tries++;
    } while (duo.used[x.w.key] && tries < 40);
    duo.used[x.w.key] = 1; duo.q = x; duo.picks = [0, 0]; duo.answered = false; render();
    CP.speak(x.w.hz, { rate: Math.min(CP.pref.rate, 0.9) });
  }
  function rowBtns(r) {
    return [1, 2, 3, 4].map(function (t) {
      var st = "", sample = ["mā", "má", "mǎ", "mà"][t - 1];
      if (duo.answered) st = t === duo.q.r.parl[r] ? " right" : (t === duo.picks[r] ? " wrong" : ""); else if (duo.picks[r] === t) st = " on";
      return '<button type="button" class="t' + t + st + '" data-dtone="' + r + "," + t + '"' + (duo.answered ? " disabled" : "") + ' aria-pressed="' + (duo.picks[r] === t) + '" aria-label="' + CP.attr(T("duo.s" + (r + 1)) + ": " + T("ear.toneN", { n: t })) + '">' + CP.toneCurveHTML(sample) + "<span>" + t + "°</span></button>";
    }).join("");
  }
  function render() {
    var x = duo.q, w = x.w, r = x.r, pct = Math.round(duo.n / ROUNDS * 100), h = '<div class="sess"><button type="button" class="btn-quiet" id="m-quit">' + T("fx.leave") + "</button>" +
      '<div class="meter" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><i class="k" style="width:' + pct + '%"></i></div><span class="cnt">' + duo.n + " / " + ROUNDS + "</span></div>";
    h += '<div class="panel fc"><span class="tag">' + T("duo.title") + "</span>" + (duo.n === 0 && !duo.answered ? '<p class="small muted" style="margin:0">' + esc(T("duo.desc")) + "</p>" : "") +
      '<button type="button" class="btn-main" style="margin:0;max-width:260px" data-dplay>⟦speaker⟧ ' + T("duo.again") + "</button><p class=\"small muted\" style=\"margin:0\">" + T("duo.q") + "</p>" +
      '<div class="duo-row"><span class="small muted">' + T("duo.s1") + '</span><div class="tonebtns">' + rowBtns(0) + '</div></div><div class="duo-row"><span class="small muted">' + T("duo.s2") + '</span><div class="tonebtns">' + rowBtns(1) + "</div></div>";
    if (duo.answered) {
      var right = duo.picks[0] === r.parl[0] && duo.picks[1] === r.parl[1], why = CP.sandhi.why(r), chg = r.parl.join() !== r.cit.join();
      h += '<p class="verdict ' + (right ? "ok" : "ko") + '" style="width:100%;text-align:left">' + (right ? T("ex.right") : T("duo.was", { a: r.parl[0], b: r.parl[1] })) + "</p>" +
        '<div class="cd-py">' + CP.pinyinHTML(w.py) + '</div><div class="cd-hz" lang="zh-CN">' + CP.hanziHTML(w.hz, w.py) + '</div><div class="cd-it" style="font-size:20px" lang="it">' + esc(w.it) + "</div>";
      if (chg) h += '<div class="spoken"><span class="tag">' + T("duo.say") + '</span><div class="sp">' + CP.pinyinHTML(r.pp) + '</div><span class="small muted">' + T("duo.write") + " " + esc(w.py.replace(/\./g, "")) + "</span></div>";
      if (why.length) h += '<ul class="small muted duo-why" style="margin:0;padding-left:18px">' + why.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
      h += '<button type="button" class="btn-main" id="d-next" style="margin-top:0">' + T(duo.n >= ROUNDS ? "duo.result" : "duo.next") + "</button>";
    }
    root.innerHTML = h + "</div>"; window.scrollTo(0, 0);
  }
  function pickTone(r, t) {
    if (duo.answered) return; duo.picks[r] = t;
    if (duo.picks[0] && duo.picks[1]) answer(); else render();
  }
  function answer() {
    var rr = duo.q.r, right = duo.picks[0] === rr.parl[0] && duo.picks[1] === rr.parl[1];
    duo.answered = true; duo.n++; if (right) duo.ok++;
    CP.sfx(right ? "ok" : "ko"); if (CP.game && CP.game.ear) CP.game.ear(right);
    if (!right && CP.confuse) [0, 1].forEach(function (i) { if (duo.picks[i] !== rr.parl[i]) CP.confuse(rr.parl[i], duo.picks[i], duo.q.w.key); });
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
    if (!duo.answered && /^[1-4]$/.test(e.key)) { e.preventDefault(); pickTone(duo.picks[0] ? 1 : 0, +e.key); }
    else if (duo.answered && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); if (a && a.blur) a.blur(); next(); }
  });
  var oldOnStudy = CP.onStudy;
  CP.onStudy = function () { if (active) { active = false; duo = null; CP.focusMode(false); CP.studyHome(); return; } if (oldOnStudy) oldOnStudy(); };
  CP.duotono = { start: start, active: function () { return active; } };
})();
