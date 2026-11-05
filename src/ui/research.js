/* ===== màndarínō · Ricerca sulla memoria (facoltativa, spenta di base): i ripassi, in forma anonima, per stimare con ripassi veri i parametri
   aggiunti da ML-FSRS-32 (w21–w31, docs/motore-ripasso.md). Come lo Scambio linguistico (ui/scambio.js): prima il foglio del consenso
   (maggiorenni, CC0), poi un file .json che la persona legge, scarica o manda come vuole (Condividi o e-mail). Nessuna rete, niente parte da solo.
   Il consenso sta in md-srs-research-consent (senza il prefisso «cp-»: non entra nei backup). Si carica al primo uso di CP.research. ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc, KEY = "md-srs-research-consent", MIN = 300, MIN_SUM = 30, MAX = 20000, MAIL = "mandarinoapp@gmail.com";
  /* che cosa entra nel file: di base TUTTO (servono per addestrare il motore); la persona può togliere ogni parte non essenziale. L'essenziale (codice casuale, versioni,
     ritenzione, totali, e per ogni ripasso: istante, parola, voto, tipo, previsione) resta sempre. `reviews` tolto = file di soli riassunti (sotto MIN_SUM ripassi non si manda) */
  var INC = ["reviews", "times", "detail", "engine", "cards", "shadow", "skills"];
  function incOf(c) { var o = {}; INC.forEach(function (k) { o[k] = !(c && c.inc && c.inc[k] === false); }); return o; }
  var PRE = null, S = { err: "", sent: "", attach: false, incOpen: false };

  /* ---- consenso: età, CC0 e consapevolezza firmate; id = codice casuale (16 caratteri), lo stesso a ogni invio; sent = istante dell'ultimo ripasso già mandato ---- */
  function consent() { try { var o = JSON.parse(localStorage.getItem(KEY) || "null"); return o && o.age && o.cc0 && o.aware && o.id ? o : null; } catch (e) { return null; } }
  function setConsent(o) { try { if (o) localStorage.setItem(KEY, JSON.stringify(o)); else localStorage.removeItem(KEY); } catch (e) {} }
  function rid() {
    var a = new Uint8Array(8), s = "", i;
    try { crypto.getRandomValues(a); } catch (e) { for (i = 0; i < 8; i++) a[i] = Math.floor(Math.random() * 256); }
    for (i = 0; i < 8; i++) s += (a[i] < 16 ? "0" : "") + a[i].toString(16);
    return s;
  }
  function r3(x) { return typeof x === "number" ? Math.round(x * 1000) / 1000 : x; }

  /* ---- il file: solo chiavi note, solo parole del dizionario dell'app (mai parole aggiunte dalla persona), solo i ripassi dopo l'ultimo invio ---- */
  function rows(lg, since) { return (lg || []).filter(function (e) { return e && e.length >= 7 && CP.WORDS[e[1]] && e[0] > (since || 0); }); }
  function ready(lg, since) { return rows(lg, since).filter(function (e) { return e[5] != null && !e[6]; }).length; }   /* ripassi di parole già viste, non ripetizioni */
  /* le misure del motore in ombra e le abilità (coppie di toni, componenti): solo numeri e parole del dizionario; null se non ci sono */
  function shadowPart() { try { var r = CP.mlnetShadow && CP.mlnetShadow.report(); if (!r || !r.n) return null; var o = { n: r.n, loss: {}, by_type: {}, pair_weakness: {}, component_hint: {} }; Object.keys(r.loss || {}).forEach(function (k) { o.loss[k] = r3(r.loss[k]); }); [["ch", "by_type"], ["psk", "pair_weakness"], ["csg", "component_hint"]].forEach(function (z) { Object.keys(r[z[0]] || {}).forEach(function (k) { var q = r[z[0]][k]; o[z[1]][k] = { n: q.n, y: q.y, pA: r3(q.pA), pM: r3(q.pM) }; }); }); return o; } catch (e) { return null; } }
  function skillsPart() { try { var r = CP.skills && CP.skills.report(); if (!r) return null; return { pairs: r.pairs.map(function (p) { return { key: p.key, n: p.n, ok: p.ok, r: r3(p.r) }; }), components: r.comps, suggestions: r.sugg.filter(function (q) { return CP.WORDS[(q.ws || [])[0]]; }).map(function (q) { return { c: q.c, t: q.t, ws: q.ws.filter(function (k) { return CP.WORDS[k]; }), after: q.a || 0, after_fail: q.af || 0 }; }) }; } catch (e) { return null; } }
  function build(lg, since, inc) {
    inc = inc || incOf(null);
    var c = consent() || {}, S0 = CP.S(), all = rows(lg, since).slice(-MAX), rs = inc.reviews ? all : [], cards = {};
    if (inc.cards) Object.keys(S0).forEach(function (k) { var r = S0[k]; if (CP.WORDS[k] && r && r.st != null) cards[k] = { st: r3(r.st), df: r3(r.df), sd: r.sd, reps: r.rp || 0, lapses: r.lp || 0 }; });
    return { schema: "mandarino-srs-research-v2", app: "mandarino", app_version: CP.version || "", engine: "ML-FSRS-32.1", engine_version: window.FSRS ? FSRS.VERSION : "",
      exported_at: Date.now(), user_anon_id: c.id || "", license: "CC0-1.0", retention: CP.srs ? CP.srs.retention() : 0.9,
      included: INC.filter(function (k) { return inc[k]; }), summary: { total_reviews: all.length, cards_tracked: Object.keys(cards).length }, cards: cards,
      shadow: inc.shadow ? shadowPart() : null, skills: inc.skills ? skillsPart() : null,
      reviews: rs.map(function (e) {
        var x = e[7] || {}, o = { t: e[0], k: e[1], g: e[2] };
        if (inc.times) o.ms = e[3];
        o.type = e[4]; o.pred_r = e[5]; o.retry = e[6];
        if (inc.detail) { o.kind = x.kd || ""; o.k_opts = x.k || 0; o.tone_err = !!x.tn; }
        if (inc.engine) { o.comps = (x.cp || []).map(r3); o.nights = x.nt || 0; o.base_ms = x.bs || 0; }
        return o;
      }) };
  }
  /* un ripasso per riga: il file resta leggibile a occhio prima di mandarlo */
  function text(o) { var r = o.reviews; o.reviews = null; var h = JSON.stringify(o, null, 1); o.reviews = r; return h.replace('"reviews": null', function () { return '"reviews": [\n' + r.map(function (x) { return JSON.stringify(x); }).join(",\n") + "\n]"; }); }
  function buildExport() { return (window.Store ? Store.logAll() : Promise.resolve([])).then(function (lg) { return build(lg, (consent() || {}).sent, incOf(consent())); }); }

  /* ---- il file si prepara in anticipo, appena si apre il foglio: il tocco su «Invia» condivide subito (Condividi vuole un tocco) ---- */
  function prepare(lg) {
    var c = consent() || {}, inc = incOf(c), o = build(lg, c.sent, inc), n = ready(lg, c.sent), name = "mandarino-ricerca-" + new Date().toISOString().slice(0, 10) + ".json", blob = null, file = null;
    PRE = null; if (!o.summary.total_reviews) return;
    try { blob = new Blob([text(o)], { type: "application/json" }); } catch (e) { return; }
    try { file = new File([blob], name, { type: "application/json" }); } catch (e) {}
    PRE = { n: n, total: o.summary.total_reviews, name: name, blob: blob, file: file, last: Math.max.apply(null, rows(lg, c.sent).map(function (e) { return e[0]; })), kb: Math.max(1, Math.round(blob.size / 1024)), inc: inc };
  }
  function toB64(blob) { return new Promise(function (ok, no) { var fr = new FileReader(); fr.onload = function () { var s = String(fr.result); ok(s.slice(s.indexOf(",") + 1)); }; fr.onerror = no; fr.readAsDataURL(blob); }); }
  function download(p) {
    var u = URL.createObjectURL(p.blob), a = document.createElement("a");
    a.href = u; a.download = p.name; document.body.appendChild(a); a.click(); a.parentNode.removeChild(a); setTimeout(function () { URL.revokeObjectURL(u); }, 4000);
  }
  /* «mail»: Condividi (dove c'è) con il file già allegato; altrimenti scarica e apre la bozza. «file»: solo il file, per leggerlo: non conta come invio */
  function send(how) {
    var p = PRE, c = consent(); if (!c || !p) return;
    var subject = T("cm.rs.subject"), body = T("cm.rs.body", { f: p.name }), A = window.MandarinoAndroid, onErr = function () { S.err = T("cm.rs.e"); render(); };
    var done = function () { c.sent = Math.max(c.sent || 0, p.last); setConsent(c); PRE = null; S.sent = p.name; render(); };
    S.err = ""; S.attach = false;
    if (how === "file") { download(p); if (CP.toast) CP.toast(T("cm.rs.saved", { f: p.name })); return; }
    if (A && typeof A.sendMail === "function") {
      return toB64(p.blob).then(function (b64) { var ok = false; try { ok = A.sendMail(MAIL, subject, body, p.name, "application/json", b64); } catch (e) {} if (ok) return done(); viaDownload(); }, onErr);
    }
    if (p.file && navigator.canShare && navigator.canShare({ files: [p.file] })) return navigator.share({ files: [p.file], title: subject, text: body }).then(done, function () {});
    viaDownload();
    function viaDownload() {
      download(p); S.attach = true; if (CP.toast) CP.toast(T("cm.rs.attach", { f: p.name }));
      location.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      done();
    }
  }

  /* ---- i fogli ---- */
  function head(sub) { return '<div class="fam-head"><div class="meta"><b>' + esc(T("cm.rs.sheetTitle")) + "</b>" + (sub ? '<div class="small muted">' + esc(sub) + "</div>" : "") + '</div><button type="button" class="fam-x btn-s" data-famclose>' + esc(T("common.close")) + "</button></div>"; }
  function consentSheet() {
    CP.openSheet(head(T("cm.rs.h")) +
      '<ol class="sc-terms small">' + [1, 2, 3, 4, 5, 6, 7, 8].map(function (i) { return "<li>" + esc(T("cm.rs.t" + i)) + "</li>"; }).join("") + "</ol>" +
      ["age", "cc0", "aware"].map(function (i) { return '<label class="sc-chk"><input id="rs-' + i + '" type="checkbox" data-rs-chk> ' + esc(T("cm.rs." + i)) + "</label>"; }).join("") +
      '<div class="acts"><button type="button" class="btn-main" id="rs-go" data-rs-go disabled>' + esc(T("cm.rs.go")) + "</button></div>");
  }
  function incList(c) {
    var inc = incOf(c);
    return '<details class="rs-inc"' + (S.incOpen ? " open" : "") + "><summary>" + esc(T("cm.rs.inc")) + " · " + esc(T("cm.rs.incN", { n: INC.filter(function (k) { return inc[k]; }).length, m: INC.length })) + '</summary><p class="small muted" style="margin:4px 0">' + esc(T("cm.rs.incHelp")) + "</p>" +
      '<label class="sc-chk"><input type="checkbox" checked disabled> <span><b>' + esc(T("cm.rs.i.base")) + '</b><br><span class="small muted">' + esc(T("cm.rs.i.baseD")) + "</span></span></label>" +
      INC.map(function (k) { return '<label class="sc-chk"><input type="checkbox" data-rs-inc="' + k + '"' + (inc[k] ? " checked" : "") + '> <span><b>' + esc(T("cm.rs.i." + k)) + '</b><br><span class="small muted">' + esc(T("cm.rs.i." + k + "D")) + "</span></span></label>"; }).join("") + "</details>";
  }
  function mainSheet(lg) {
    var c = consent(), inc = incOf(c), n = ready(lg, c.sent), p, h, tot = rows(lg, c.sent).length, need = inc.reviews ? MIN : MIN_SUM, have = inc.reviews ? n : tot, can;
    prepare(lg); p = PRE; can = !!p && have >= need;
    h = head() + '<p class="small">' + esc(T("cm.rs.have", { n: have, min: need })) + "</p>";
    if (S.err) h += '<p class="small" role="alert">' + esc(S.err) + "</p>";
    if (!p) h += '<p class="small muted">' + esc(T("cm.rs.none")) + "</p>";
    else {
      h += '<div class="acts">' + (can ? '<button type="button" class="btn-main" data-rs-send="mail">⟦mail⟧ ' + esc(T("cm.rs.send")) + "</button>" : "") +
        '<button type="button" class="btn-s" data-rs-send="file">⟦download⟧ ' + esc(T("cm.rs.download")) + "</button></div>" +
        '<p class="small muted">' + esc(can ? T("cm.rs.size", { kb: p.kb }) : T("cm.rs.few", { min: need })) + "</p>";
    }
    if (S.sent) h += '<p class="small okline" role="status">' + esc(T("cm.rs.done", { f: S.sent })) + ' <a href="mailto:' + MAIL + '">' + esc(MAIL) + "</a></p>" + (S.attach ? '<p class="small" role="alert">⟦warning⟧ ' + esc(T("cm.rs.attach", { f: S.sent })) + "</p>" : "");
    h += incList(c) + '<p class="small muted">' + esc(T("cm.rs.id", { id: c.id })) + '</p><div class="acts"><button type="button" class="btn-s" data-rs-revoke>' + esc(T("cm.rs.revoke")) + "</button></div>";
    CP.openSheet(h);
  }
  function render() { (window.Store ? Store.logAll() : Promise.resolve([])).then(mainSheet, function () { S.err = T("cm.rs.e"); mainSheet([]); }); }
  function open() { S.err = ""; if (!consent()) { consentSheet(); return; } render(); }
  function revoke() { PRE = null; S.sent = ""; setConsent(null); CP.closeSheet(); if (CP.toast) CP.toast(T("cm.rs.revoked")); }

  document.addEventListener("change", function (e) {
    var t = e.target; if (t && t.hasAttribute && t.hasAttribute("data-rs-inc")) { var c = consent(); if (!c) return; c.inc = incOf(c); c.inc[t.getAttribute("data-rs-inc")] = !!t.checked; setConsent(c); render(); return; }
    if (!t || !t.hasAttribute || !t.hasAttribute("data-rs-chk")) return;
    var go = document.getElementById("rs-go"); if (go) go.disabled = !["rs-age", "rs-cc0", "rs-aware"].every(function (i) { var x = document.getElementById(i); return x && x.checked; });
  });
  document.addEventListener("click", function (e) {
    var sm = e.target.closest ? e.target.closest(".rs-inc > summary") : null; if (sm) { S.incOpen = !S.incOpen; return; }
    var b = e.target.closest ? e.target.closest("[data-rs-go],[data-rs-send],[data-rs-revoke]") : null; if (!b) return;
    if (b.hasAttribute("data-rs-go")) {
      if (!["rs-age", "rs-cc0", "rs-aware"].every(function (i) { var x = document.getElementById(i); return x && x.checked; })) return;
      setConsent({ v: 1, t: Date.now(), age: true, cc0: true, aware: true, id: rid(), sent: 0 }); CP.sfx("tap"); open();
    } else if (b.hasAttribute("data-rs-send")) send(b.getAttribute("data-rs-send"));
    else revoke();
  });
  CP.research = { open: open, consent: consent, buildExport: buildExport, build: build, ready: ready, text: text, revoke: revoke, MIN: MIN, MIN_SUM: MIN_SUM, INC: INC, incOf: incOf };
})();
