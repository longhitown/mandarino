/* ===== màndarínō · traduttore istantaneo italiano ⇄ cinese, dentro X-Ray (Frasi → X-Ray). Si scrive in una lingua o nell'altra, qualunque sia il corso.
   Prudente per costruzione, come il traduttore del laboratorio (phrases/translate.js): non indovina, e dice sempre quanto è sicura la risposta.
   - cinese → italiano: le frasi dell'app (verificate, esempi, dialoghi) e poi le regole del laboratorio (CP.lab.translate); se non le conosce, lo dice.
   - italiano → cinese: 1) una frase che l'app già conosce (nei due versi); 2) una frase costruita con le parole e le regole che il traduttore conosce, e
     CONTROLLATA AL CONTRARIO: la frase cinese trovata viene ritradotta in italiano dalle stesse regole e deve dare la frase scritta (articoli a parte);
     3) altrimenti solo le parole, una per una, come indizio e dichiarato tale. Mai una frase inventata.
   Si può ascoltare il testo in entrambe le lingue (la voce del dispositivo). Tutto sul dispositivo, nessuna rete. Si carica al primo uso (CP.xrt).
   I calchi (data/calchi.js): una prima fase, deboli, come avvisi dove una frase italiana invita a un calco; stato «bozza», da rivedere con madrelingua. ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc, W = CP.WORDS;
  var TXT = {
    it: { "xt.title": "Traduzione", "xt.how.verified": "Frase dell'app", "xt.how.rules": "Per regole", "xt.how.inverse": "Per regole, controllata al contrario", "xt.how.words": "Parola per parola: solo un indizio", "xt.how.none": "Non so ancora tradurla con sicurezza",
      "xt.back": "Ritradotta: {t}", "xt.say.zh": "Ascolta il cinese", "xt.say.it": "Ascolta l'italiano", "xt.words": "Parole riconosciute", "xt.note.none": "Questa frase non è tra quelle che so tradurre bene: preferisco non inventarla. Qui sotto trovi le parole una per una.",
      "xt.note.words": "Non ho una frase sicura: le parole sono quelle giuste, l'ordine in cinese è diverso.", "xt.calco": "Attenzione al calco", "xt.calco.wrong": "Dall'italiano verrebbe «{w}»", "xt.calco.right": "In cinese si dice «{r}»", "xt.calco.draft": "Bozza, da rivedere con un madrelingua",
      "xt.dir.it": "Italiano → cinese", "xt.dir.zh": "Cinese → italiano" },
    zh: { "xt.title": "翻译", "xt.how.verified": "应用里的句子", "xt.how.rules": "按规则翻译", "xt.how.inverse": "按规则翻译，并反向核对过", "xt.how.words": "逐词对照：仅供参考", "xt.how.none": "我还不能可靠地翻译这句话",
      "xt.back": "回译：{t}", "xt.say.zh": "听中文", "xt.say.it": "听意大利语", "xt.words": "认出的词", "xt.note.none": "这句话不在我能可靠翻译的范围内，我宁愿不乱猜。下面是逐个词的意思。",
      "xt.note.words": "我没有可靠的整句：词是对的，但中文的语序不同。", "xt.calco": "小心直译", "xt.calco.wrong": "从意大利语直译会得到“{w}”", "xt.calco.right": "中文的说法是“{r}”", "xt.calco.draft": "草稿，需要母语者审阅",
      "xt.dir.it": "意大利语 → 中文", "xt.dir.zh": "中文 → 意大利语" }
  };
  Object.assign(window.I18N.it, TXT.it); Object.assign(window.I18N.zh, TXT.zh);
  var HAN = /[㐀-鿿]/;
  var ART = { il: 1, lo: 1, la: 1, l: 1, i: 1, gli: 1, le: 1, un: 1, uno: 1, una: 1, del: 1, dell: 1, della: 1, dello: 1, dei: 1, degli: 1, delle: 1 }, PRON = { io: 1, tu: 1, lui: 1, lei: 1, noi: 1, voi: 1, loro: 1 };
  /* le parole italiane di una frase, senza articoli e senza il pronome soggetto in testa: il confronto non si ferma su «io mangio il riso» / «mangio riso» */
  /* «vorrei» e «voglio» sono la stessa scelta per 想/要: si confrontano come uguali (e il ritraducente dice quale ha usato) */
  var COND = { vorrei: "voglio", vorresti: "vuoi", vorrebbe: "vuole", vorremmo: "vogliamo", vorreste: "volete", vorrebbero: "vogliono" };
  function toks(s) { var t = String(s).toLowerCase().replace(/[’`´]/g, "'").split(/[^a-zàèéìòù0-9]+/).filter(Boolean).filter(function (x) { return !ART[x]; }).map(function (x) { return COND[x] || x; }); if (t.length > 1 && PRON[t[0]]) t.shift(); return t; }
  function same(a, b) { a = toks(a); b = toks(b); return a.length === b.length && a.every(function (x, i) { return x === b[i]; }); }
  function sentences(s, re) { var p = s.split(new RegExp("(" + re.source + ")")), out = [], i; for (i = 0; i < p.length; i += 2) if (p[i].trim()) out.push([p[i], p[i + 1] || ""]); return out; }

  /* ---- frasi che l'app già conosce, nei due versi ---- */
  var MEMI = null;
  function inverse() {
    if (MEMI) return MEMI; MEMI = {};
    var add = function (zh, it, how) { var k = toks(it).join(" "); if (k && zh && !MEMI[k]) MEMI[k] = { zh: zh, how: how }; };
    var M = CP.lab.memory(); Object.keys(M).forEach(function (zh) { add(zh, M[zh].it, M[zh].src === "verified" ? "verified" : "verified"); });
    if (typeof EXAMPLES !== "undefined") Object.keys(EXAMPLES).forEach(function (w) { var e = EXAMPLES[w]; if (e && e[0] && e[1]) add(String(e[0]).replace(/[，。！？、；：,.!?]/g, ""), e[1], "verified"); });
    return MEMI;
  }

  /* ---- le parole italiane → parole cinesi che il traduttore conosce (schede di data/grammar.js) ---- */
  var FORMS = null;
  function key(hz) { return W[hz] ? hz : null; }
  function forms() {
    if (FORMS) return FORMS; FORMS = {};
    var G = GRAM, add = function (it, k, o) { var f = String(it).toLowerCase(); if (!k || !f) return; (FORMS[f] = FORMS[f] || []); if (!FORMS[f].some(function (x) { return x.k === k && x.pi === (o && o.pi); })) FORMS[f].push(Object.assign({ k: k }, o || {})); };
    Object.keys(G.verbs || {}).forEach(function (hz) { var v = G.verbs[hz], k = key(hz); if (!k) return; add(v[0], k, { t: "v" }); for (var pi = 0; pi < 6; pi++) { try { add(CP.ita.present(v[0], pi), k, { t: "v", pi: pi }); } catch (e) {} } });
    Object.keys(G.nouns || {}).forEach(function (hz) { var n = G.nouns[hz], k = key(hz); if (!k) return; add(n[0], k, { t: "n" }); if (n[2]) add(n[2], k, { t: "n" }); });
    Object.keys(G.adjs || {}).forEach(function (hz) { var a = G.adjs[hz], k = key(hz); if (!k) return; var b = String(a[0]); add(b, k, { t: "a" }); if (/o$/.test(b)) { add(b.slice(0, -1) + "a", k, { t: "a" }); add(b.slice(0, -1) + "i", k, { t: "a" }); add(b.slice(0, -1) + "e", k, { t: "a" }); } });
    var F = { non: ["不", "没"], molto: ["很"], anche: ["也"], tutti: ["都"], tutto: ["都"], ancora: ["还"], già: ["已经"], e: ["和"], questo: ["这"], quello: ["那"], mai: ["从来不"] };
    Object.keys(F).forEach(function (it) { F[it].forEach(function (hz) { add(it, key(hz), { t: "f" }); }); });
    var MOD = { volere: [["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"], ["想", "要"]], potere: [["posso", "puoi", "può", "possiamo", "potete", "possono"], ["能", "可以"]], dovere: [["devo", "devi", "deve", "dobbiamo", "dovete", "devono"], ["应该", "必须"]], sapere: [["so", "sai", "sa", "sappiamo", "sapete", "sanno"], ["会"]], essere: [["sono", "sei", "è", "siamo", "siete", "sono"], ["是"]], avere: [["ho", "hai", "ha", "abbiamo", "avete", "hanno"], ["有"]] };
    Object.keys(MOD).forEach(function (m) { MOD[m][0].forEach(function (f, pi) { MOD[m][1].forEach(function (hz) { add(f, key(hz), { t: "v", pi: pi }); }); }); });
    var PR = [["io", "我"], ["tu", "你"], ["lui", "他"], ["lei", "她"], ["noi", "我们"], ["voi", "你们"], ["loro", "他们"]]; PR.forEach(function (p) { add(p[0], key(p[1]), { t: "p" }); });
    return FORMS;
  }
  var SUBJ = ["我", "你", "他", "我们", "你们", "他们"];
  function perms(a, cap) { var out = []; (function rec(p, rest) { if (out.length >= cap) return; if (!rest.length) { out.push(p); return; } rest.forEach(function (x, i) { rec(p.concat([x]), rest.slice(0, i).concat(rest.slice(i + 1))); }); })([], a); return out; }
  var DG = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  function num99(n) { return n < 10 ? DG[n] : n < 20 ? "十" + (n % 10 ? DG[n % 10] : "") : DG[Math.floor(n / 10)] + "十" + (n % 10 ? DG[n % 10] : ""); }
  /* frase italiana → frase cinese per costruzione e controllo al contrario; null se non si riesce */
  function build(it, q) {
    var age = /^\s*(?:io\s+)?ho\s+(\d{1,2})\s+anni\s*$/i.exec(String(it)); if (age && +age[1] >= 1) return { zh: "我" + num99(+age[1]) + "岁", back: "Ho " + age[1] + " anni.", notes: [] };
    var F = forms(), ws = toks(it), opts = [], n = 0, raw0 = String(it).toLowerCase().replace(/[’`´]/g, "'").split(/[^a-zàèéìòù0-9]+/).filter(Boolean).filter(function (x) { return !ART[x]; });
    ws = raw0;
    if (!ws.length || ws.length > 6) return null;
    for (var i = 0; i < ws.length; i++) { var c = F[ws[i]]; if (!c) return null; opts.push(c); }
    var combos = [[]]; opts.forEach(function (c) { var nx = []; combos.forEach(function (p) { c.slice(0, 3).forEach(function (x) { if (nx.length < 36) nx.push(p.concat([x])); }); }); combos = nx; });
    for (var ci = 0; ci < combos.length; ci++) {
      var cs = combos[ci], keys = cs.map(function (x) { return x.k; }), hasP = cs.some(function (x) { return x.t === "p"; }), v = cs.filter(function (x) { return x.t === "v" && x.pi != null; })[0], sets = [keys];
      if (!hasP && v) sets.push([SUBJ[v.pi] && key(SUBJ[v.pi]) || null].concat(keys).filter(Boolean));
      if (q && key("吗")) sets = sets.concat(sets.map(function (s) { return s.concat([key("吗")]); }));
      for (var si = 0; si < sets.length; si++) {
        var ps = perms(sets[si], 120);
        for (var pi = 0; pi < ps.length; pi++) {
          if (++n > 700) return null;
          var r; try { r = CP.lab.translate(ps[pi], q ? "?" : "."); } catch (e) { continue; }
          if (r && r.sure && r.it && same(r.it, it)) return { zh: ps[pi].map(function (k) { return W[k].hz; }).join(""), back: r.it, notes: r.notes || [] };
        }
      }
    }
    return null;
  }

  /* ---- le glosse: una parola → parole cinesi (solo come indizio) ---- */
  var GLO = null;
  function gloss() {
    if (GLO) return GLO; GLO = {};
    CP.ORDER.forEach(function (k) { var w = W[k]; if (!w) return; String(CP.gloss ? CP.gloss(w) : w.it).toLowerCase().split(/[;,\/]/).forEach(function (g) { g = g.replace(/\(.*?\)/g, "").trim(); if (g && g.length < 30) (GLO[g] = GLO[g] || []).push(k); }); });
    return GLO;
  }
  function hint(it) {
    var F = forms(), G = gloss(), out = [];
    String(it).toLowerCase().split(/[^a-zàèéìòù']+/).filter(Boolean).forEach(function (t) {
      if (ART[t]) return; var k = (F[t] && F[t][0] && F[t][0].k) || (G[t] && G[t][0]); if (k) out.push(k);
    });
    return out;
  }

  /* ---- i calchi (prima fase, deboli) ---- */
  function calchi(it) {
    var s = " " + String(it).toLowerCase().replace(/[’`´]/g, "'").replace(/[^a-zàèéìòù0-9' ]+/g, " ").replace(/ +/g, " ").trim() + " ", out = [];
    (typeof CALCHI !== "undefined" ? CALCHI : []).forEach(function (c) { if (new RegExp(c.re, "i").test(s)) out.push(c); });
    return out;
  }

  /* ---- la risposta ---- */
  function translate(raw) {
    var dir = HAN.test(raw) ? "zh" : "it", parts = [], zhAll = [];
    if (dir === "zh") {
      sentences(raw, /[。！？!?；;\n]+/).forEach(function (sp) {
        var src = sp[0].trim(), punct = /[？?]/.test(sp[1]) ? "?" : /[！!]/.test(sp[1]) ? "!" : ".";
        function one(t, pu) { var keys = [], ok = true; CP.segment(t).forEach(function (s) { if (s.w) keys.push(s.w.key); else if (!s.p) ok = false; }); var r = ok && keys.length ? CP.lab.translate(keys, pu) : null; return r && r.sure ? { out: r.it, how: r.src === "rules" ? "rules" : "verified", notes: r.notes || [] } : { keys: keys }; }
        var w = one(src, punct);
        if (w.out) return parts.push({ src: src, out: w.out, how: w.how, notes: w.notes });
        /* una frase con virgole: clausola per clausola, solo se TUTTE sono sicure */
        var cl = src.split(/[，,、]+/).map(function (x) { return x.trim(); }).filter(Boolean);
        if (cl.length > 1) { var rs = cl.map(function (c, i) { return one(c, i === cl.length - 1 ? punct : ","); }); if (rs.every(function (x) { return x.out; })) return parts.push({ src: src, out: rs.map(function (x, i) { var t = x.out.replace(/[.!?,]+$/, ""); return i ? t.charAt(0).toLowerCase() + t.slice(1) : t; }).join(", ") + (punct === "?" ? "?" : punct === "!" ? "!" : "."), how: rs.some(function (x) { return x.how === "rules"; }) ? "rules" : "verified" }); }
        parts.push({ src: src, out: "", how: "none", keys: w.keys });
      });
    } else {
      sentences(raw, /[.!?;\n]+/).forEach(function (sp) {
        var src = sp[0].trim(), q = /\?/.test(sp[1]);
        function one(t, qq) { var m = inverse()[toks(t).join(" ")]; if (m) return { zh: m.zh, how: "verified" }; var b = build(t, qq); return b ? { zh: b.zh, how: "inverse", back: b.back } : null; }
        var r = one(src, q);
        if (!r && /,/.test(src)) { var cl = src.split(/,+/).map(function (x) { return x.trim(); }).filter(Boolean), rs = cl.map(function (c, i) { return one(c, q && i === cl.length - 1); }); if (cl.length > 1 && rs.every(Boolean)) r = { zh: rs.map(function (x) { return x.zh; }).join("，"), how: rs.some(function (x) { return x.how === "inverse"; }) ? "inverse" : "verified", back: rs.map(function (x, i) { return x.back || cl[i]; }).join(", ") }; }
        if (r) { zhAll.push(r.zh); parts.push({ src: src, out: r.zh, how: r.how, back: r.back }); return; }
        parts.push({ src: src, out: "", how: "words", keys: hint(src) });
      });
    }
    return { dir: dir, parts: parts, zh: zhAll.join("，"), calchi: dir === "it" ? calchi(raw) : [] };
  }
  function hzHTML(zh) { var segs = CP.segment(zh); return segs.map(function (s) { return s.w ? '<span class="xt-h"><span class="xt-p">' + CP.pinyinHTML(s.w.py) + '</span><span lang="zh-CN">' + CP.hanziHTML(s.w.hz, s.w.py) + "</span></span>" : '<span class="xp-punct">' + esc(s.raw) + "</span>"; }).join(""); }
  function card(r) {
    var h = '<section class="xr-tr" aria-label="' + CP.attr(T("xt.title")) + '"><h4>' + esc(T("xt.title")) + ' <span class="small muted">· ' + esc(T("xt.dir." + r.dir)) + "</span></h4>";
    r.parts.forEach(function (p) {
      h += '<div class="xt-row"><p class="small muted xt-src" lang="' + (r.dir === "zh" ? "zh-CN" : "it") + '">' + esc(p.src) + "</p>";
      if (p.out) h += '<p class="xt-out" lang="' + (r.dir === "zh" ? "it" : "zh-CN") + '">' + (r.dir === "zh" ? esc(p.out) : hzHTML(p.out)) + "</p>";
      h += '<span class="xt-how xt-' + p.how + '">' + esc(T("xt.how." + p.how)) + "</span>";
      if (p.back) h += '<p class="small muted" style="margin:2px 0 0" lang="it">' + esc(T("xt.back", { t: p.back })) + "</p>";
      if (!p.out) {
        h += '<p class="small muted" style="margin:4px 0 0">' + esc(T(p.how === "words" ? "xt.note.words" : "xt.note.none")) + "</p>";
        if (p.keys && p.keys.length) h += '<div class="xt-wl">' + p.keys.map(function (k) { var w = W[k]; return w ? '<button type="button" class="xw" data-fam="' + CP.attr(w.hz) + '"><span class="xp">' + CP.pinyinHTML(w.py) + '</span><span class="xh" lang="zh-CN">' + CP.hanziHTML(w.hz, w.py) + '</span><span class="xi">' + esc(CP.gloss(w).split(/[;,]/)[0]) + "</span></button>" : ""; }).join("") + "</div>";
      }
      h += "</div>";
    });
    r.calchi.forEach(function (c) { h += '<div class="xt-calco" role="note"><b>' + esc(T("xt.calco")) + "</b> <span class=\"small muted\">· " + esc(T("xt.calco.draft")) + '</span><p class="small" style="margin:2px 0 0">' + esc(T("xt.calco.wrong", { w: c.wrong })) + ". " + esc(T("xt.calco.right", { r: c.right })) + ". " + esc(c.why) + "</p></div>"; });
    var zh = r.dir === "zh" ? r.parts.map(function (p) { return p.src; }).join("，") : r.zh, it = r.dir === "zh" ? r.parts.map(function (p) { return p.out; }).filter(Boolean).join(" ") : r.parts.map(function (p) { return p.src; }).join(" ");
    h += '<div class="acts xt-acts">' + (zh ? '<button type="button" class="btn-s" data-xt-say="zh" data-xt-text="' + CP.attr(zh) + '">⟦play⟧ ' + esc(T("xt.say.zh")) + "</button>" : "") + (it ? '<button type="button" class="btn-s" data-xt-say="it" data-xt-text="' + CP.attr(it) + '">⟦play⟧ ' + esc(T("xt.say.it")) + "</button>" : "") + "</div></section>";
    return h;
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-xt-say]") : null; if (!b) return;
    var t = b.getAttribute("data-xt-text"), it = b.getAttribute("data-xt-say") === "it";
    if (it) CP.speak(t, { lang: "it-IT", voiceURI: CP.itVoiceURI ? CP.itVoiceURI() : undefined, el: b }); else CP.speak(t, { el: b });
  });
  CP.xrt = { translate: translate, card: card, build: build, toks: toks, same: same };
})();
