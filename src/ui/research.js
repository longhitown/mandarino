/* ===== màndarínō · Ricerca sulla memoria (facoltativa, spenta di base): i ripassi, in forma anonima, per stimare con ripassi veri i parametri
   aggiunti da ML-FSRS-32 (w21–w31, docs/motore-ripasso.md). Come lo Scambio linguistico (ui/scambio.js): prima il foglio del consenso
   (maggiorenni, CC0), poi un file .json che la persona legge, scarica o manda come vuole (Condividi o e-mail). Nessuna rete, niente parte da solo.
   Il consenso sta in md-srs-research-consent (senza il prefisso «cp-»: non entra nei backup). Si carica al primo uso di CP.research. ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc, KEY = "md-srs-research-consent", MIN = 300, MAX = 20000, MAIL = "mandarinoapp@gmail.com";
  var PRE = null, S = { err: "", sent: "", attach: false };

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
  function build(lg, since) {
    var c = consent() || {}, S0 = CP.S(), rs = rows(lg, since).slice(-MAX), cards = {};
    Object.keys(S0).forEach(function (k) { var r = S0[k]; if (CP.WORDS[k] && r && r.st != null) cards[k] = { st: r3(r.st), df: r3(r.df), sd: r.sd, reps: r.rp || 0, lapses: r.lp || 0 }; });
    return { schema: "mandarino-srs-research-v1", app: "mandarino", app_version: CP.version || "", engine: "ML-FSRS-32.1", engine_version: window.FSRS ? FSRS.VERSION : "",
      exported_at: Date.now(), user_anon_id: c.id || "", license: "CC0-1.0", retention: CP.srs ? CP.srs.retention() : 0.9,
      summary: { total_reviews: rs.length, cards_tracked: Object.keys(cards).length }, cards: cards,
      reviews: rs.map(function (e) {
        var x = e[7] || {};
        return { t: e[0], k: e[1], g: e[2], ms: e[3], type: e[4], pred_r: e[5], retry: e[6], kind: x.kd || "", k_opts: x.k || 0, tone_err: !!x.tn, comps: (x.cp || []).map(r3), nights: x.nt || 0, base_ms: x.bs || 0 };
      }) };
  }
  /* un ripasso per riga: il file resta leggibile a occhio prima di mandarlo */
  function text(o) { var r = o.reviews; o.reviews = null; var h = JSON.stringify(o, null, 1); o.reviews = r; return h.replace('"reviews": null', function () { return '"reviews": [\n' + r.map(function (x) { return JSON.stringify(x); }).join(",\n") + "\n]"; }); }
  function buildExport() { return (window.Store ? Store.logAll() : Promise.resolve([])).then(function (lg) { return build(lg, (consent() || {}).sent); }); }

  /* ---- il file si prepara in anticipo, appena si apre il foglio: il tocco su «Invia» condivide subito (Condividi vuole un tocco) ---- */
  function prepare(lg) {
    var c = consent() || {}, o = build(lg, c.sent), n = ready(lg, c.sent), name = "mandarino-ricerca-" + new Date().toISOString().slice(0, 10) + ".json", blob = null, file = null;
    PRE = null; if (!o.reviews.length) return;
    try { blob = new Blob([text(o)], { type: "application/json" }); } catch (e) { return; }
    try { file = new File([blob], name, { type: "application/json" }); } catch (e) {}
    PRE = { n: n, total: o.reviews.length, name: name, blob: blob, file: file, last: o.reviews[o.reviews.length - 1].t };
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
  function mainSheet(lg) {
    var c = consent(), n = ready(lg, c.sent), p = PRE, h;
    prepare(lg); p = PRE;
    h = head() + '<p class="small">' + esc(T("cm.rs.have", { n: n, min: MIN })) + '</p><p class="small muted">' + esc(T("cm.rs.id", { id: c.id })) + "</p>";
    if (S.err) h += '<p class="small" role="alert">' + esc(S.err) + "</p>";
    if (!p) h += '<p class="small muted">' + esc(T("cm.rs.none")) + "</p>";
    else {
      if (n < MIN) h += '<p class="small muted">' + esc(T("cm.rs.few", { min: MIN })) + "</p>";
      else h += '<p class="small muted">' + esc(T("cm.rs.help")) + "</p>";
      h += '<div class="acts">' + (n >= MIN ? '<button type="button" class="btn-main" data-rs-send="mail">⟦mail⟧ ' + esc(T("cm.rs.send")) + "</button>" : "") +
        '<button type="button" class="btn-s" data-rs-send="file">⟦download⟧ ' + esc(T("cm.rs.download")) + "</button></div>";
    }
    if (S.sent) h += '<p class="small okline" role="status">' + esc(T("cm.rs.done", { f: S.sent })) + ' <a href="mailto:' + MAIL + '">' + esc(MAIL) + "</a></p>" + (S.attach ? '<p class="small" role="alert">⟦warning⟧ ' + esc(T("cm.rs.attach", { f: S.sent })) + "</p>" : "");
    h += '<div class="acts"><button type="button" class="btn-s" data-rs-revoke>' + esc(T("cm.rs.revoke")) + "</button></div>";
    CP.openSheet(h);
  }
  function render() { (window.Store ? Store.logAll() : Promise.resolve([])).then(mainSheet, function () { S.err = T("cm.rs.e"); mainSheet([]); }); }
  function open() { S.err = ""; if (!consent()) { consentSheet(); return; } render(); }
  function revoke() { PRE = null; S.sent = ""; setConsent(null); CP.closeSheet(); if (CP.toast) CP.toast(T("cm.rs.revoked")); }

  document.addEventListener("change", function (e) {
    var t = e.target; if (!t || !t.hasAttribute || !t.hasAttribute("data-rs-chk")) return;
    var go = document.getElementById("rs-go"); if (go) go.disabled = !["rs-age", "rs-cc0", "rs-aware"].every(function (i) { var x = document.getElementById(i); return x && x.checked; });
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-rs-go],[data-rs-send],[data-rs-revoke]") : null; if (!b) return;
    if (b.hasAttribute("data-rs-go")) {
      if (!["rs-age", "rs-cc0", "rs-aware"].every(function (i) { var x = document.getElementById(i); return x && x.checked; })) return;
      setConsent({ v: 1, t: Date.now(), age: true, cc0: true, aware: true, id: rid(), sent: 0 }); CP.sfx("tap"); open();
    } else if (b.hasAttribute("data-rs-send")) send(b.getAttribute("data-rs-send"));
    else revoke();
  });
  CP.research = { open: open, consent: consent, buildExport: buildExport, build: build, ready: ready, text: text, revoke: revoke, MIN: MIN };
})();
