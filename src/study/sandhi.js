/* ===== màndarínō · sandhi tonale dentro la parola (CP.sandhi). Funzione pura e deterministica: dal pinyin di una parola dice i toni di citazione,
   i toni che si pronunciano davvero, dove cade il semiterzo e il pinyin parlato. Nessun modello, nessuna statistica: sono le regole del putonghua
   che dipendono solo dalla parola (quelle che dipendono dalla frase restano fuori e si segnalano).
   Regole:
   - 3+3 → 2+3 (la prima sillaba); con tre o più terzi di fila il risultato dipende dal ritmo: `amb`;
   - 不 (bù) → bú davanti a un 4° tono;
   - 一 (yī) → yí davanti a 4° tono (o a un 个 atono), yì davanti a 1°, 2°, 3°; resta yī a fine parola e dopo 第/初; V一V (看一看) → atono;
   - semiterzo (21): un 3° tono che non è seguito da un altro 3° si dice solo discendente, senza risalita: è una nota di pronuncia, il pinyin non cambia.
   Il pinyin delle fonti riporta già 不 e 一 «di superficie» (bú shì, yìqǐ) ma non il 3+3 (nǐ hǎo): dove la fonte dice altro per 不/一, vince la fonte
   (eccezione lessicale). Provata su tutte le 12.360 parole del vocabolario contro i valori di riferimento del dataset (script/sandhi.py): zero differenze.
   CP.sandhi(hz, py) → { cit:[toni], parl:[toni], semi:[posizioni], pp:"ní hǎo", reg:[nomi delle regole], amb:bool }
   CP.sandhi.why(res) → elenco delle spiegazioni, nella lingua dell'interfaccia. Non ha dipendenze: si prova anche fuori dal browser. ===== */
(function (root) {
  "use strict";
  var MARK = { 1: "̄", 2: "́", 3: "̌", 4: "̀" }, ORD = /^[第初]/;
  function toneOf(s) {
    var d = String(s).normalize("NFD");
    if (d.indexOf("̄") >= 0) return 1; if (d.indexOf("́") >= 0) return 2; if (d.indexOf("̌") >= 0) return 3; if (d.indexOf("̀") >= 0) return 4;
    return 5;
  }
  function base(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̄́̌̀]/g, "").normalize("NFC"); }
  function withTone(syl, t) {
    var s = base(syl), pats = ["a", "e", "ou"], i, j, idx = [], c;
    if (!MARK[t]) return s;
    for (i = 0; i < pats.length; i++) {
      j = s.indexOf(pats[i]);
      if (j >= 0) { j += pats[i] === "ou" ? 1 : 0; return (s.slice(0, j + 1) + MARK[t] + s.slice(j + 1)).normalize("NFC"); }
    }
    for (i = 0; i < s.length; i++) { c = s.charAt(i); if ("aeiouü".indexOf(c) >= 0) idx.push(i); }
    if (!idx.length) return s;
    j = idx[idx.length - 1];
    return (s.slice(0, j + 1) + MARK[t] + s.slice(j + 1)).normalize("NFC");
  }
  function sandhi(hz, py) {
    var sil = String(py).replace(/[’']/g, "").replace(/\./g, " ").split(/\s+/).filter(Boolean), n = sil.length, i, j, k, c, nxt, par, cit, surf, reg = [], amb = false, chars = Array.from(String(hz));
    surf = sil.map(toneOf); cit = surf.slice();
    if (chars.length !== n) chars = sil.map(function () { return ""; });
    for (i = 0; i < n; i++) {
      if (chars[i] === "不" && cit[i] === 2) cit[i] = 4;
      if (chars[i] === "一" && (cit[i] === 2 || cit[i] === 4)) cit[i] = 1;
    }
    par = cit.slice();
    for (i = 0; i < n; i++) {
      c = chars[i]; nxt = i + 1 < n ? cit[i + 1] : null;
      if (c === "不" && cit[i] === 4 && nxt === 4) { par[i] = 2; reg.push({ pos: i, r: "bu4_davanti_a_4" }); }
      if (c === "一" && i + 1 < n && !(i > 0 && ORD.test(chars[i - 1]))) {
        if (i > 0 && chars[i - 1] === chars[i + 1] && chars[i - 1] !== "一") { par[i] = 5; reg.push({ pos: i, r: "V一V_atono" }); }
        else if (nxt === 4 || (nxt === 5 && chars[i + 1] === "个")) { par[i] = 2; reg.push({ pos: i, r: "yi1_davanti_a_4" }); }
        else if (nxt === 1 || nxt === 2 || nxt === 3) { par[i] = 4; reg.push({ pos: i, r: "yi1_davanti_a_1_2_3" }); }
      }
    }
    for (i = 0; i < n; i++) {
      c = chars[i];
      if ((c === "不" || c === "一") && par[i] !== surf[i]) {
        reg = reg.filter(function (x) { return x.pos !== i; }); reg.push({ pos: i, r: "eccezione_lessicale_dalla_fonte" }); par[i] = surf[i];
      }
    }
    i = 0;
    while (i < n) {
      if (par[i] === 3) {
        j = i; while (j + 1 < n && par[j + 1] === 3) j++;
        if (j > i) { if (j - i >= 2) amb = true; for (k = i; k < j; k++) { par[k] = 2; reg.push({ pos: k, r: "3+3_in_2+3" }); } }
        i = j + 1;
      } else i++;
    }
    var semi = []; for (i = 0; i < n; i++) if (par[i] === 3 && i + 1 < n) semi.push(i);
    return { cit: cit, parl: par, semi: semi, pp: sil.map(function (s, x) { return s ? withTone(s, par[x]) : ""; }).join(" ").trim(), reg: reg.map(function (x) { return x.r; }), amb: amb };
  }
  /* le spiegazioni, nella lingua dell'interfaccia (CP.t); senza CP restano le chiavi */
  var TXT = {
    it: { "sd.r.3+3_in_2+3": "due 3° toni di fila: il primo si dice 2° tono", "sd.r.bu4_davanti_a_4": "不 davanti a un 4° tono si dice bú", "sd.r.yi1_davanti_a_4": "一 davanti a un 4° tono si dice yí",
      "sd.r.yi1_davanti_a_1_2_3": "一 davanti a un 1°, 2° o 3° tono si dice yì", "sd.r.V一V_atono": "一 tra due verbi uguali è atono", "sd.r.eccezione_lessicale_dalla_fonte": "in questa parola si dice così per abitudine",
      "sd.semi": "il 3° tono davanti a un altro tono resta basso, senza risalire (semiterzo)", "sd.amb": "tre 3° toni di fila: come si dice dipende dal ritmo" },
    zh: { "sd.r.3+3_in_2+3": "两个三声连读：前一个读二声", "sd.r.bu4_davanti_a_4": "不 在四声前读 bú", "sd.r.yi1_davanti_a_4": "一 在四声前读 yí", "sd.r.yi1_davanti_a_1_2_3": "一 在一声、二声、三声前读 yì",
      "sd.r.V一V_atono": "两个相同动词之间的 一 读轻声", "sd.r.eccezione_lessicale_dalla_fonte": "这个词习惯这样读", "sd.semi": "三声后面有别的声调时只降不升（半三声）", "sd.amb": "连续三个三声：读法取决于节奏" }
  };
  if (root.I18N) { Object.assign(root.I18N.it, TXT.it); Object.assign(root.I18N.zh, TXT.zh); }
  sandhi.why = function (r) {
    var T = root.CP && root.CP.t ? root.CP.t : function (k) { return k; }, out = [], seen = {};
    r.reg.forEach(function (x) { if (!seen[x]) { seen[x] = 1; out.push(T("sd.r." + x)); } });
    if (r.amb) out.push(T("sd.amb"));
    if (r.semi.length) out.push(T("sd.semi"));
    return out;
  };
  root.CP ? (root.CP.sandhi = sandhi) : (root.SANDHI = sandhi);
  if (typeof module !== "undefined" && module.exports) module.exports = sandhi;
})(typeof window !== "undefined" ? window : globalThis);
