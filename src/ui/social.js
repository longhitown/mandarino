/* ===== màndarínō · ⚙️ → Social: i canali ufficiali (data/social.js), in fondo alle Impostazioni, prima di Informazioni, per non dar loro lo stesso
   peso delle sezioni principali. Solo collegamenti che si aprono al tocco: niente incorporati, niente script di terzi, nessun contatore.
   Una voce senza indirizzo non compare. Si carica con le Impostazioni (tools/build.mjs, LAZYMOD). ===== */
(function () {
  var CP = window.CP, T = CP.t, esc = CP.esc;
  (CP.settingsExtras = CP.settingsExtras || []).push({ group: "social", html: function () {
    var rows = (window.SOCIAL || []).filter(function (s) { return s.url; });
    return '<section class="set-sec" id="set-social" aria-labelledby="set-social-h"><h3 class="set-h" id="set-social-h">' + T("soc.t") + '</h3><div class="vbody"><p class="small muted" style="margin:0">' + T("soc.p") + "</p>" +
      (rows.length ? '<ul class="cm-list">' + rows.map(function (s) {
        return "<li><div><b>" + esc(s.nome) + "</b>" + (s.handle ? ' <span class="small muted">' + esc(s.handle) + "</span>" : "") + '<div class="small muted">' + esc(LANG === "zh" ? s.zh : s.it) + "</div></div>" +
          '<a class="btn-s sup-go" href="' + CP.attr(s.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + CP.attr(T("soc.open", { n: s.nome })) + '">' + T("soc.go") + "</a></li>";
      }).join("") + "</ul>" : '<p class="small">' + T("soc.none") + "</p>") + "</div></section>";
  } });
})();
