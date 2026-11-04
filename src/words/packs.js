/* pacchetti accesi (cp-packs) */
(function (d, o) {
  try { o = JSON.parse(localStorage.getItem("cp-packs")); } catch (e) {}
  (o = o || []).forEach(function (i, e) { e = d.getElementById("pack-" + i); if (e) d.head.appendChild(d.createElement("script")).textContent = e.textContent; });
  (window.PACKS || []).forEach(function (p) { o.indexOf(p.id) < 0 || p.sections.forEach(function (s) { SECTIONS.push(s); SECTION_CHAPTER[s.id] = p.chapter; }); });
})(document);
