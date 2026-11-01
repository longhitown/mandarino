/* màndarínō · avvio. Gira per primo nel <body>: memorizza la pagina com'era (per la copia scaricabile, CP.snapshot)
   e prepara i registri che i file di dati riempiono (SECTIONS.push, DIALOGS.push). */
(function(){var cs=document.currentScript,s="",c;for(c=document.body.firstElementChild;c&&c!==cs;c=c.nextElementSibling)s+=c.outerHTML;window.__PRISTINE={head:document.head?document.head.innerHTML:"",body:s,lang:document.documentElement.getAttribute("lang")||"it"};})();
var SECTIONS = [], DIALOGS = [], LESSONS = [], ITLESSONS = [], LESSON_RICH = { zh: {}, it: {} };
/* lezione ricca (data/lr/<corso>/NN-<id>.js): nel file unico è un blocco di testo che si esegue solo quando la lezione si apre; da src/ è uno script normale */
window.LRL = function (c, id) { var R = LESSON_RICH[c]; if (R && !R[id]) { var el = document.getElementById("lr-" + c + "-" + id); if (el) { var s = document.createElement("script"); s.textContent = el.textContent; document.head.appendChild(s); el.parentNode.removeChild(el); } } return R && R[id] || null; };
