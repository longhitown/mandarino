/* ===== màndarínō · Pacchetti di parole (Impostazioni → Studia). Il corso base resta com'è; ogni pacchetto aggiunge parole che chi studia accende
   quando è pronto. L'elenco è data/packs-index.js (generato da tools/packs.mjs); le parole stanno in data/packs/<id>.js e nel file unico sono
   testo inerte finché il pacchetto non è acceso (cp-packs, letto da data/packs/activate.js all'avvio). Accendere o spegnere riavvia l'app,
   come il cambio di corso: i progressi non si toccano (restano anche per un pacchetto spento). ===== */
(function () {
  var CP = window.CP, T = CP.t, KEY = "cp-packs", pend = null;
  function on() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function list() { var c = CP.course ? CP.course() : "zh"; return (typeof PACK_INDEX !== "undefined" ? PACK_INDEX : []).filter(function (p) { return p.course === c; }); }
  function fmt(n) { try { return n.toLocaleString(document.documentElement.lang === "zh-CN" ? "zh-CN" : "it-IT"); } catch (e) { return String(n); } }
  function find(id) { return list().filter(function (p) { return p.id === id; })[0]; }
  (CP.settingsExtras = CP.settingsExtras || []).push({ group: "adv", html: function () {
    var L = list(), a = on(); if (!L.length) return "";
    return '<details class="set-sec" id="set-packs"><summary>⟦books⟧ ' + CP.esc(T("pk.title")) + '</summary><div class="vbody">' +
      '<p class="small muted" style="margin:0">' + CP.esc(T("pk.hint")) + "</p>" +
      L.map(function (p) {
        return '<label class="chk pk-row"><input type="checkbox" data-pk="' + CP.attr(p.id) + '"' + (a.indexOf(p.id) >= 0 ? " checked" : "") + '> <span><b>' + CP.esc(p.title) + "</b> · " + CP.esc(T("pk.n", { n: fmt(p.n) })) +
          '<br><span class="small muted">' + CP.esc(p.sub) + " · " + p.kb + " KB</span></span></label>";
      }).join("") + '<p class="small muted" style="margin:0">' + CP.esc(T("pk.restart")) + "</p></div></details>";
  } });
  function setClose() { var se = document.getElementById("settings"); if (se && !se.hidden) CP.untrap(se); }
  function back() { CP.closeSheet(); if (CP.openSettings) CP.openSettings("set-packs"); }
  function apply(id, yes) {
    var a = on().filter(function (x) { return x !== id; }); if (yes) a.push(id);
    try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {}
    if (window.Store && Store.flush) Store.flush();
    location.reload();
  }
  document.addEventListener("change", function (e) {
    var c = e.target; if (!c.getAttribute || !c.hasAttribute("data-pk")) return;
    var id = c.getAttribute("data-pk"), p = find(id); if (!p) return; pend = { id: id, yes: c.checked }; c.checked = !c.checked;
    setClose();
    CP.openSheet('<div class="unl-sheet"><div class="fam-head"><b>' + CP.esc(p.title) + '</b><button type="button" class="fam-x btn-s" data-famclose>' + CP.esc(T("common.close")) + "</button></div>" +
      "<p>" + CP.esc(T(pend.yes ? "pk.q1" : "pk.q0", { t: p.title, n: fmt(p.n) })) + '</p><div class="acts"><button type="button" class="btn-main" data-pk-go>' + CP.esc(T("pk.go")) + '</button><button type="button" class="btn-s" data-pk-no>' + CP.esc(T("pk.no")) + "</button></div></div>");
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-pk-go], [data-pk-no]") : null; if (!b) return;
    if (b.hasAttribute("data-pk-go") && pend) apply(pend.id, pend.yes); else { pend = null; back(); }
  });
  CP.packs = { on: on, list: list };
})();
