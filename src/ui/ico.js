/* ===== màndarínō · icone nel testo. Nel codice e nei testi le icone sono segnaposto con il nome tra parentesi quadre bianche (U+27E6 e U+27E7; il nome
   è l'id in icone/manifest.json): niente emoji di sistema, che ogni telefono disegna a modo suo. Nella pagina costruita (tools/build.mjs) ogni segnaposto
   dentro il JavaScript diventa un solo carattere dell'area privata (U+E000 + posizione dell'icona nell'elenco IDS): il codice di avvio pesa meno.
   Questo modulo li trasforma, dopo ogni modifica della pagina, nell'icona vera dello sprite (un svg con classe «ic» che usa «#i-nome»; lo sprite è
   dentro la pagina):
   - nel testo diventano un'icona in linea; dentro <option>, <title>, <textarea> (dove un'immagine non sta) spariscono;
   - negli attributi di lettura (aria-label, title, placeholder, alt) spariscono, perché lì l'icona non c'è;
   - un pulsante o un collegamento che resta con la sola icona prende come nome accessibile quello dell'icona (in italiano o in cinese);
   - il codice (<script>, <style>), anche quello dei moduli ancora da caricare, non si tocca mai.
   CP.ico(nome) rende il codice dell'icona (per chi costruisce HTML), CP.plain(testo) toglie i segnaposto (per il testo che esce dall'app:
   condivisione, e-mail, file), CP.icoImg(nome) rende un'immagine per il canvas (la carta da condividere). Il testo che esce dall'app non deve
   avere segnaposto: i messaggi di sfida e di classe scrivono «Impostazioni», non l'icona. Si carica all'avvio, ma fuori dal codice di
   partenza (tools/build.mjs, LAZYMOD): src/ui/ico-boot.js la chiama. Specifica: icone/ICONE.md. ===== */
(function () {
  var CP = window.CP, IDS = "__ICO_IDS__".split(","), NS = "http://www.w3.org/2000/svg", ATTR = ["aria-label", "title", "placeholder", "alt"],
    ONE = "[\uE000-\uE0FF]|\u27e6([a-z0-9-]+)\u27e7", TOK = new RegExp(ONE, "g"), HAS = new RegExp(ONE), QA = "[aria-label],[title],[placeholder],[alt]",
    NOIMG = /^(OPTION|TEXTAREA|TITLE)$/, CODE = /^(SCRIPT|STYLE)$/;
  function plain(s) { return String(s).replace(TOK, "").replace(/ {2,}/g, " ").replace(/^ +| +$/g, ""); }
  function idOf(m) { return m[1] || IDS[m[0].charCodeAt(0) - 0xE000]; }
  function name(n) { var s = document.getElementById("i-" + n); return s && s.getAttribute("data-" + (window.LANG === "zh" ? "zh" : "it")) || ""; }
  function mk(n) {
    var s = document.createElementNS(NS, "svg"), u = document.createElementNS(NS, "use");
    s.setAttribute("class", "ic"); s.setAttribute("aria-hidden", "true"); s.setAttribute("focusable", "false"); s.setAttribute("data-ic", n);
    u.setAttribute("href", "#i-" + n); s.appendChild(u); return s;
  }
  /* un pulsante che ha solo l'icona deve avere un nome per i lettori di schermo (prima l'emoji ne aveva uno suo) */
  function nameIt(sv) {
    var b = sv.parentNode && sv.parentNode.closest ? sv.parentNode.closest("button,a,summary,[role=button]") : null;
    if (b && !b.hasAttribute("aria-label") && !b.getAttribute("title") && !b.textContent.replace(/\s+/g, "")) { var n = name(sv.getAttribute("data-ic")); if (n) b.setAttribute("aria-label", n); }
  }
  function text(node) {
    var s = node.nodeValue, p = node.parentNode, f, last = 0, m, sv, made = [];
    if (!p || CODE.test(p.nodeName)) return;
    if (NOIMG.test(p.nodeName)) { node.nodeValue = s.replace(TOK, "").replace(/^ +/, ""); return; }
    f = document.createDocumentFragment(); TOK.lastIndex = 0;
    while ((m = TOK.exec(s))) {
      if (m.index > last) f.appendChild(document.createTextNode(s.slice(last, m.index)));
      sv = mk(idOf(m)); made.push(sv); f.appendChild(sv); last = TOK.lastIndex;
    }
    if (last < s.length) f.appendChild(document.createTextNode(s.slice(last)));
    p.replaceChild(f, node); made.forEach(nameIt);
  }
  function attrs(el) { for (var i = 0; i < ATTR.length; i++) { var v = el.getAttribute(ATTR[i]); if (v && HAS.test(v)) el.setAttribute(ATTR[i], plain(v)); } }
  function walk(root, all) {
    var w, n, list, els, i;
    if (root.nodeType === 3) { if (HAS.test(root.nodeValue)) text(root); return; }
    if (root.nodeType !== 1 || CODE.test(root.nodeName) || (!all && !HAS.test(root.outerHTML))) return;
    w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: function (t) { return CODE.test(t.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } }); list = [];
    while ((n = w.nextNode())) if (HAS.test(n.nodeValue)) list.push(n);
    list.forEach(text); attrs(root); els = root.querySelectorAll(QA); for (i = 0; i < els.length; i++) attrs(els[i]);
  }
  CP.ico = function (n) { return '<svg class="ic" aria-hidden="true" focusable="false"><use href="#i-' + n + '"/></svg>'; };
  CP.plain = plain;
  CP.icoImg = function (n) {
    var s = document.getElementById("i-" + n);
    return new Promise(function (ok) {
      var im;
      if (!s) { ok(null); return; }
      im = new Image(); im.onload = function () { ok(im); }; im.onerror = function () { ok(null); };
      im.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<svg xmlns="' + NS + '" viewBox="0 0 24 24" width="96" height="96" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + s.innerHTML + "</svg>");
    });
  };
  CP.icoBoot = true;
  /* rete di sicurezza: ciò che esce dall'app (condividi, copia) non porta mai segnaposto: le icone non esistono fuori di qui */
  if (navigator.share) { var sh = navigator.share.bind(navigator); navigator.share = function (d) { if (d) d = Object.assign({}, d, { title: d.title && plain(d.title), text: d.text && plain(d.text) }); return sh(d); }; }
  if (navigator.clipboard && navigator.clipboard.writeText) { var wt = navigator.clipboard.writeText.bind(navigator.clipboard); navigator.clipboard.writeText = function (t) { return wt(plain(t)); }; }
  if (window.MutationObserver) {
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        if (m.type === "childList") Array.prototype.forEach.call(m.addedNodes, function (x) { walk(x); });
        else if (m.type === "characterData") walk(m.target);
        else attrs(m.target);
      });
    }).observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTR });
  }
  function first() { if (document.body) walk(document.body, true); if (HAS.test(document.title)) document.title = plain(document.title); }
  if (document.body) first(); else document.addEventListener("DOMContentLoaded", first);
})();
