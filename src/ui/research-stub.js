/* ===== màndarínō · Ricerca sulla memoria: la sezione in gear → Comunità e voci (poche righe). Il resto (consenso, file, invio) sta in
   ui/research.js e si carica al primo tocco su «Partecipa» (tools/build.mjs, LAZYMOD). Questo file viaggia con le Impostazioni
   (come ui/community.js), non con l'avvio: così non pesa sul tetto dei 1500 KB. ===== */
(function () {
  var CP = window.CP;
  (CP.settingsExtras = CP.settingsExtras || []).push({ group: "community", html: function () {
    var T = CP.t;
    return '<details class="set-sec" id="set-research"><summary>⟦chart⟧ ' + T("cm.rs.title") + '</summary><div class="vbody"><p class="small muted" style="margin:0">' + T("cm.rs.lede") +
      '</p><div class="acts" style="margin:0"><button type="button" class="btn-s" data-rs-open>' + T("cm.rs.open") + "</button></div></div></details>";
  } });
  document.addEventListener("click", function (e) {
    if (!(e.target.closest && e.target.closest("[data-rs-open]"))) return;
    var st = document.getElementById("settings"); if (st && CP.untrap) CP.untrap(st);
    CP.research.open();
  });
})();
