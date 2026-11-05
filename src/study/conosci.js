/* ===== màndarínō · «Quanto ti conosco?»: lo specchio di calibrazione, in Studia sotto «Memoria e orecchio: i numeri». Prima di ogni ripasso il motore
   prevede quanto è probabile che tu ricordi; qui si vede se ci azzecca, per canale (capire, dire, ascoltare, scrivere, frasi): previsto contro ottenuto.
   Il previsto di base è quello scritto nel registro dei ripassi (previsione prima del voto, FSRS); il motore sperimentale ML-FSRS-NET, che gira solo
   in ombra (core/mlnet-ombra.js), mostra accanto la sua previsione e il suo errore medio, senza decidere niente: la trasparenza è lo scopo.
   Tutto si calcola sul dispositivo dal registro; niente esce. Si carica al primo uso (CP.conosci). ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc, MIN = 30;
  var TXT = {
    it: { "kn.title": "Quanto ti conosco?", "kn.lede": "Prima di ogni ripasso il motore prevede quanto è probabile che ti ricordi. Qui vedi se ci azzecca: la barra scura è quello che ti avevo previsto, quella chiara è come è andata davvero.",
      "kn.all": "Tutto insieme", "kn.c.cap": "Capire", "kn.c.dire": "Dire e toni", "kn.c.asc": "Ascoltare", "kn.c.scr": "Scrivere", "kn.c.fra": "Nelle frasi",
      "kn.pred": "previsto", "kn.real": "ottenuto", "kn.n": "{n} ripassi", "kn.few": "ancora pochi ripassi ({n} su {m}): tra poco ti conosco meglio",
      "kn.v.ok": "Ci siamo: la previsione e la realtà coincidono.", "kn.v.hi": "Ti credevo un po' più preparato di quanto sei.", "kn.v.lo": "Sei più bravo di quanto pensassi.",
      "kn.none": "Non ci sono ancora ripassi abbastanza per fare un confronto: studia qualche giorno e torna qui.", "kn.net.h": "Il motore sperimentale, in ombra",
      "kn.net.p": "Osserva i tuoi ripassi senza cambiare nulla: ogni volta prova a prevedere l'esito e poi si confronta con la realtà. Un errore più basso significa previsioni migliori.",
      "kn.net.err": "errore medio di previsione (più basso è meglio)", "kn.net.base": "motore attuale", "kn.net.nn": "motore sperimentale", "kn.net.pred": "Previsto dal motore sperimentale:", "kn.net.wait": "Sta ricostruendo i tuoi ripassi, qualche secondo…",
      "kn.net.few": "Servono almeno {m} ripassi misurati: per ora ne ha visti {n}.", "kn.foot": "Non è un voto e non decide quando ripassi: è uno specchio, per sapere quanto fidarti delle date che vedi." },
    zh: { "kn.title": "我有多了解你？", "kn.lede": "每次复习前，系统会预测你记得的可能性。这里看它准不准：深色条是预测，浅色条是实际结果。", "kn.all": "全部", "kn.c.cap": "理解", "kn.c.dire": "说和声调", "kn.c.asc": "听", "kn.c.scr": "写", "kn.c.fra": "句子里",
      "kn.pred": "预测", "kn.real": "实际", "kn.n": "{n} 次复习", "kn.few": "复习次数还不多（{n}/{m}）：很快就会更了解你", "kn.v.ok": "很准：预测和实际一致。", "kn.v.hi": "我高估了你一点。", "kn.v.lo": "你比我想的更厉害。",
      "kn.none": "复习次数还不够做比较：学几天再来看看。", "kn.net.h": "实验引擎（旁观模式）", "kn.net.p": "它只观察你的复习，不改变任何东西：每次先预测结果，再和现实对比。误差越小，预测越好。",
      "kn.net.err": "平均预测误差（越小越好）", "kn.net.base": "现行引擎", "kn.net.nn": "实验引擎", "kn.net.pred": "实验引擎预测", "kn.net.wait": "正在重建你的复习记录，请稍候……", "kn.net.few": "至少需要 {m} 次已测量的复习：目前只有 {n} 次。",
      "kn.foot": "这不是分数，也不决定你何时复习：它只是一面镜子，让你知道可以多相信看到的日期。" }
  };
  Object.assign(window.I18N.it, TXT.it); Object.assign(window.I18N.zh, TXT.zh);
  /* tipo di ripasso (registro: elemento 5) → canale */
  var CH = { cap: ["pi", "mc-significato", "mc-parola", "abbina", "zh", "zh-clf"], dire: ["ip", "hp", "mc-pinyin", "scrivi-pinyin", "tono", "tono-parola"], asc: ["mc-ascolto", "ascolto-frase"], scr: ["scrivi-significato", "traccia", "componente"], fra: ["buco", "buco-gram", "buco-scrivi", "ordina"] };
  var OF = {}; Object.keys(CH).forEach(function (c) { CH[c].forEach(function (t) { OF[t] = c; }); });
  var ORDER = ["cap", "dire", "asc", "scr", "fra"];
  function pct(x) { return Math.round(x * 100); }
  function bar(cls, v, label) { return '<div class="kn-bar ' + cls + '"><i style="width:' + pct(v) + '%"></i><span>' + label + " " + pct(v) + "%</span></div>"; }
  /* dal registro: per canale { n, p (somma previsto), y (somma riusciti) }; solo ripassi veri con una previsione */
  function tally(rows) {
    var out = { all: { n: 0, p: 0, y: 0 } };
    ORDER.forEach(function (c) { out[c] = { n: 0, p: 0, y: 0 }; });
    (rows || []).forEach(function (r) {
      if (!r || r.length < 6 || r[6] || r[5] == null || !(r[5] >= 0 && r[5] <= 1)) return;
      var y = r[2] >= 2 ? 1 : 0, c = OF[r[4]] || (r[4] ? null : "cap");
      [out.all].concat(c ? [out[c]] : []).forEach(function (o) { o.n++; o.p += r[5]; o.y += y; });
    });
    return out;
  }
  function row(label, o, net) {
    var h = '<div class="kn-row"><div class="kn-h"><b>' + esc(label) + '</b><span class="small muted">' + T("kn.n", { n: o.n }) + "</span></div>";
    if (o.n < MIN) return h + '<p class="small muted" style="margin:0">' + T("kn.few", { n: o.n, m: MIN }) + "</p></div>";
    var p = o.p / o.n, y = o.y / o.n, d = y - p;
    h += bar("pred", p, T("kn.pred")) + bar("real", y, T("kn.real"));
    if (net && net.n >= MIN) h += '<p class="small muted" style="margin:2px 0 0">' + T("kn.net.pred") + " " + pct(net.pM / net.n) + "%</p>";
    return h + '<p class="small" style="margin:2px 0 0">' + T(Math.abs(d) <= 0.05 ? "kn.v.ok" : d < 0 ? "kn.v.hi" : "kn.v.lo") + "</p></div>";
  }
  function shadowBlock(rep) {
    var h = '<div class="kn-net"><h4>' + T("kn.net.h") + "</h4><p class=\"small muted\" style=\"margin:0\">" + T("kn.net.p") + "</p>";
    if (!rep || !rep.ready) return h + '<p class="small">' + T("kn.net.wait") + "</p></div>";
    if (rep.n < MIN) return h + '<p class="small">' + T("kn.net.few", { n: rep.n, m: MIN }) + "</p></div>";
    return h + '<p class="small" style="margin:6px 0 0">' + T("kn.net.err") + ':</p><div class="stats"><div class="stat"><b>' + rep.loss.A.toFixed(3) + "</b><span>" + T("kn.net.base") + '</span></div><div class="stat"><b>' + rep.loss.head.toFixed(3) + "</b><span>" + T("kn.net.nn") + "</span></div></div></div>";
  }
  function fill(el) {
    if (!el) return;
    var go = function (rows) {
      var t = tally(rows), rep = null; try { rep = CP.mlnetShadow && CP.mlnetShadow.report(); } catch (e) {}
      var net = rep && rep.ch ? rep.ch : {}, byChan = {};
      /* il previsto dal motore sperimentale, per canale, dai tipi di esercizio che il motore ha visto */
      Object.keys(net).forEach(function (ty) { var c = OF[ty] || (ty ? null : "cap"); if (!c) return; var o = byChan[c] || (byChan[c] = { n: 0, pM: 0 }); o.n += net[ty].n; o.pM += net[ty].pM; });
      var h = '<p class="muted small" style="margin:0">' + T("kn.lede") + "</p>";
      if (t.all.n < MIN) h += '<p class="small">' + T("kn.none") + "</p>";
      h += row(T("kn.all"), t.all, rep && rep.n ? { n: rep.n, pM: Object.keys(net).reduce(function (s, k) { return s + net[k].pM; }, 0) } : null);
      ORDER.forEach(function (c) { if (t[c].n) h += row(T("kn.c." + c), t[c], byChan[c]); });
      h += shadowBlock(rep) + '<p class="small muted" style="margin:6px 0 0">' + T("kn.foot") + "</p>";
      el.innerHTML = h;
      if (rep && !rep.ready && el.isConnected) setTimeout(function () { if (el.isConnected && el.closest("details") && el.closest("details").open) fill(el); }, 2000);
    };
    if (window.Store && Store.logAll) Store.logAll().then(go, function () { go([]); }); else go([]);
  }
  CP.conosci = { fill: fill, tally: tally, channelOf: function (t) { return OF[t] || null; } };
})();
