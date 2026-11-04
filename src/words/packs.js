/* pacchetti accesi (cp-packs) */
(function (d, o, it) {
  try { o = JSON.parse(localStorage.getItem("cp-packs")); it = localStorage.getItem("cp-course") === "it"; } catch (e) {}
  (o = o || []).forEach(function (i, e) { [i, i + "-lex"].forEach(function (id, n) { e = d.getElementById("pack-" + id); if (e && (!n || it)) d.head.appendChild(d.createElement("script")).textContent = e.textContent; }); });
  (window.PACKS || []).forEach(function (p) { o.indexOf(p.id) < 0 || p.sections.forEach(function (s) { SECTIONS.push(s); SECTION_CHAPTER[s.id] = p.chapter; }); });
})(document);
