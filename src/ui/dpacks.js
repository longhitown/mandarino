/* ===== màndarínō · Pacchetti di dati scaricabili (Impostazioni → Avanzate). «L'app cresce insieme a te»: dati in più (per esempio i chengyu o le
   trappole del corso di italiano) che si scaricano UNA volta, solo al tocco di «Scarica», da https://mandarinoapp.org/packs/ (PRIVACY.md).
   Regole, tutte controllate in tools/unit.mjs:
   - nessuna richiesta parte da sola: l'elenco (indice.json) si chiede al tocco di «Vedi i pacchetti disponibili», i file al tocco di «Scarica»;
   - richieste statiche e anonime: niente cookie (credentials "omit"), niente Referer, niente dati nostri;
   - ogni file ha il suo SHA-256 nell'indice: si calcola con crypto.subtle e SOLO se coincide (e se la lunghezza coincide) il file va in cache;
     senza crypto.subtle non si salva nulla; se un file fallisce, quelli già messi in cache per quel pacchetto vengono tolti;
   - i file stanno nella cache «mandarino-pacchetti» (il service worker non la cancella e non tocca /packs/); lo stato in md-dpacks, fuori dai backup;
   - eliminare chiede due conferme, con l'avviso su che cosa si perde; il pacchetto si può riscaricare. I progressi di studio non dipendono dai pacchetti.
   L'app di base non ne ha bisogno: il modulo si carica con le Impostazioni (build.mjs, gruppo openSettings). ===== */
(function () {
  var CP = window.CP, T = CP.t, BASE = "https://mandarinoapp.org/packs/", INDEX_URL = BASE + "indice.json", CACHE = "mandarino-pacchetti", K = "md-dpacks", KI = "md-dpacks-idx";
  var IDRX = /^[a-z0-9-]{1,32}$/, FILERX = /^[A-Za-z0-9.\-]{1,64}\.col\.json$/, HEXRX = /^[0-9a-f]{64}$/, MAXB = 60e6;
  var LIST = null, BUSY = {}, MSG = "", OPEN = false, pend = null;
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { if (v) localStorage.setItem(k, v); else localStorage.removeItem(k); } catch (e) {} }
  function state() { try { var o = JSON.parse(lsGet(K) || "{}"); return o && typeof o === "object" && !Array.isArray(o) ? o : {}; } catch (e) { return {}; } }
  function saveState(o) { lsSet(K, Object.keys(o).length ? JSON.stringify(o) : ""); }
  function supported() { return !!(window.caches && window.crypto && window.crypto.subtle && window.fetch && location.protocol !== "file:"); }
  function mb(n) { var s = (Math.round(n / 104857.6) / 10).toFixed(1); return document.documentElement.lang === "zh-CN" ? s : s.replace(".", ","); }
  function sig(p) { return p.files.map(function (f) { return f.sha; }).join(""); }
  function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return (b < 16 ? "0" : "") + b.toString(16); }).join(""); }
  function url(id, f) { return BASE + id + "/" + f.file; }

  /* l'indice dichiarato dal sito → solo voci ben formate; il resto si scarta. Il core è dentro l'app, e non si scarica. */
  function parse(j) {
    if (!j || j.schema !== "colonnare-1" || !j.pacchetti || typeof j.pacchetti !== "object") return null;
    var out = [];
    Object.keys(j.pacchetti).forEach(function (id) {
      var p = j.pacchetti[id]; if (!IDRX.test(id) || !p || typeof p !== "object" || p.incluso_nell_app || p.stato !== "pronto" || !Array.isArray(p.file) || !p.file.length) return;
      var files = p.file.map(function (f) { return f && FILERX.test(String(f.file)) && HEXRX.test(String(f.sha256)) && isFinite(f.byte) && f.byte > 0 && f.byte < MAXB ? { file: f.file, sha: f.sha256, byte: +f.byte } : null; });
      if (files.some(function (f) { return !f; })) return;
      var deps = (Array.isArray(p.dipende_da) ? p.dipende_da : []).filter(function (d) { return IDRX.test(String(d)); });
      out.push({ id: id, title: String(p.titolo || id).slice(0, 80), sub: String(p.descrizione || "").slice(0, 200), deps: deps, files: files,
        byte: files.reduce(function (a, f) { return a + f.byte; }, 0), nodi: +p.nodi || 0, archi: +p.archi || 0 });
    });
    return out;
  }
  function byId(id) { return (LIST || []).filter(function (p) { return p.id === id; })[0]; }
  function status(p) { var s = state()[p.id]; return BUSY[p.id] ? "busy" : !s ? "no" : s.sig === sig(p) ? "yes" : "upd"; }
  function installed() { return Object.keys(state()); }
  if (!LIST) { try { LIST = parse({ schema: "colonnare-1", pacchetti: JSON.parse(lsGet(KI) || "{}") }); } catch (e) { LIST = null; } }

  /* ---- la richiesta dell'elenco: solo dal tocco su «Vedi i pacchetti disponibili» ---- */
  function checkIndex() {
    var ac = window.AbortController ? new AbortController() : null, to = setTimeout(function () { if (ac) ac.abort(); }, 12000);
    return fetch(INDEX_URL, { cache: "no-store", credentials: "omit", referrerPolicy: "no-referrer", signal: ac ? ac.signal : undefined }).then(function (r) {
      clearTimeout(to); if (!r.ok) throw new Error("http"); return r.json();
    }).then(function (j) {
      var L = parse(j); if (!L) throw new Error("indice");
      LIST = L; var raw = {}; Object.keys(j.pacchetti).forEach(function (id) { if (byId(id)) raw[id] = j.pacchetti[id]; }); lsSet(KI, JSON.stringify(raw));
      return L;
    }, function (e) { clearTimeout(to); throw e; });
  }

  /* ---- lo scaricamento: un file alla volta; salvato solo se lunghezza e SHA-256 coincidono ---- */
  function download(id, onStep) {
    var p = byId(id); if (!p) return Promise.reject(new Error("indice"));
    if (!supported()) return Promise.reject(new Error("nosupport"));
    var deps = p.deps.map(byId).filter(function (d) { return d && status(d) !== "yes"; });   /* i pacchetti da cui dipende, se non ci sono già */
    return deps.reduce(function (pr, d) { return pr.then(function () { return download(d.id, onStep); }); }, Promise.resolve()).then(function () {
      BUSY[id] = 1;
      return caches.open(CACHE).then(function (c) {
        var done = [], i = 0;
        function one() {
          if (i >= p.files.length) return Promise.resolve();
          var f = p.files[i++], u = url(id, f);
          return fetch(u, { cache: "no-store", credentials: "omit", referrerPolicy: "no-referrer" }).then(function (r) { if (!r.ok) throw new Error("http"); return r.arrayBuffer(); }).then(function (buf) {
            if (buf.byteLength !== f.byte) throw new Error("hash");
            return crypto.subtle.digest("SHA-256", buf).then(function (h) {
              if (hex(h) !== f.sha) throw new Error("hash");
              return c.put(u, new Response(buf, { headers: { "Content-Type": "application/json" } }));
            });
          }).then(function () { done.push(u); if (onStep) onStep(id, i, p.files.length); return one(); });
        }
        return one().then(function () { var s = state(); s[id] = { sig: sig(p), at: Date.now(), byte: p.byte }; saveState(s); }, function (err) {
          return Promise.all(done.map(function (u) { return c.delete(u); })).then(function () { throw err; });
        });
      });
    }).then(function () { delete BUSY[id]; }, function (err) { delete BUSY[id]; throw err; });
  }
  function remove(id) {
    var s = state(), known = s[id], p = byId(id), files = p ? p.files : [];
    delete s[id]; saveState(s);
    if (!window.caches) return Promise.resolve();
    return caches.open(CACHE).then(function (c) { return known || files.length ? c.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k.url.indexOf(BASE + id + "/") === 0; }).map(function (k) { return c.delete(k); })); }) : null; });
  }
  /* i dati di un pacchetto scaricato: { <licenza SPDX>: { pacchetto, licenza, nodi, archi } } (colonnare: vedi docs/v3-grafo.md); null se non c'è */
  function read(id) {
    var p = byId(id); if (!p || !window.caches || status(p) === "no") return Promise.resolve(null);
    return caches.open(CACHE).then(function (c) {
      return Promise.all(p.files.map(function (f) { return c.match(url(id, f)).then(function (m) { return m ? m.json() : null; }); })).then(function (js) {
        if (js.some(function (j) { return !j; })) return null; var o = {}; js.forEach(function (j, k) { o[p.files[k].file.replace(/\.col\.json$/, "")] = j; }); return o;
      });
    }).catch(function () { return null; });
  }

  /* ---- Impostazioni → Avanzate ---- */
  function row(p) {
    var st = status(p), s = state()[p.id], B = BUSY[p.id];
    var badge = st === "busy" ? T("dp.st.busy") : st === "yes" ? "✓ " + T("dp.st.yes") : st === "upd" ? T("dp.st.upd") : T("dp.st.no");
    var deps = p.deps.map(function (d) { var q = byId(d); return q ? q.title : ""; }).filter(Boolean).join(", ");
    return '<div class="chk pk-row dp-row" data-dp-id="' + CP.attr(p.id) + '"><span class="cm-pip ' + (st === "yes" || st === "upd" ? "on" : "off") + '" aria-hidden="true"></span><span><b>' + CP.esc(p.title) + "</b> · " + CP.esc(T("dp.mb", { n: mb(p.byte) })) +
      '<br><span class="small muted">' + CP.esc(p.sub) + (deps ? " · " + CP.esc(T("dp.deps", { d: deps })) : "") + '</span><br><span class="small" role="status">' + CP.esc(badge) + "</span></span>" +
      (st === "busy" ? "" : st === "yes" ? '<button type="button" class="btn-s" data-dp-del="' + CP.attr(p.id) + '">' + CP.esc(T("dp.del")) + "</button>" :
        '<button type="button" class="btn-s" data-dp-get="' + CP.attr(p.id) + '">' + CP.esc(T(st === "upd" ? "dp.upd" : "dp.get")) + "</button>" + (st === "upd" ? ' <button type="button" class="btn-s" data-dp-del="' + CP.attr(p.id) + '">' + CP.esc(T("dp.del")) + "</button>" : "")) + "</div>";
  }
  function html() {
    if (!supported()) return "";
    return '<details class="set-sec" id="set-dpacks"' + (OPEN ? " open" : "") + '><summary>⟦books⟧ ' + CP.esc(T("dp.title")) + '</summary><div class="vbody"><p class="small muted" style="margin:0">' + CP.esc(T("dp.hint")) + "</p>" +
      (LIST && LIST.length ? LIST.map(row).join("") : LIST ? '<p class="small muted" style="margin:0">' + CP.esc(T("dp.none")) + "</p>" : "") +
      '<div class="acts"><button type="button" class="btn-s" data-dp-check>' + CP.esc(T("dp.check")) + '</button></div><p class="small" id="dp-msg" role="status" style="margin:0">' + CP.esc(MSG) + "</p></div></details>";
  }
  (CP.settingsExtras = CP.settingsExtras || []).push({ group: "adv", html: html });
  function repaint() { var d = document.getElementById("set-dpacks"); if (d) { OPEN = d.open; d.outerHTML = html(); } }
  function say(s) { MSG = s; var m = document.getElementById("dp-msg"); if (m) m.textContent = s; }
  function why(e) { var m = e && e.message; return T(m === "hash" ? "dp.fail.hash" : m === "nosupport" ? "dp.nosup" : "dp.fail.net"); }
  function setClose() { var se = document.getElementById("settings"); if (se && !se.hidden) CP.untrap(se); }
  function back() { CP.closeSheet(); if (CP.openSettings) CP.openSettings("set-dpacks"); repaint(); }
  function sheet(title, body, goAttr, goKey) {
    CP.openSheet('<div class="unl-sheet"><div class="fam-head"><b>' + CP.esc(title) + '</b><button type="button" class="fam-x btn-s" data-famclose>' + CP.esc(T("common.close")) + "</button></div><p>" + body +
      '</p><div class="acts"><button type="button" class="btn-main" ' + goAttr + ">" + CP.esc(T(goKey)) + '</button><button type="button" class="btn-s" data-dp-no>' + CP.esc(T("dp.no")) + "</button></div></div>");
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-dp-check], [data-dp-get], [data-dp-del], [data-dp-d1], [data-dp-d2], [data-dp-no]") : null; if (!b) return;
    OPEN = true;
    if (b.hasAttribute("data-dp-check")) {
      if (b.disabled) return; b.disabled = true; say(T("dp.busy")); CP.sfx("tap");
      checkIndex().then(function (L) { MSG = L.length ? "" : T("dp.none"); }, function () { MSG = T("dp.err"); }).then(repaint);
    } else if (b.hasAttribute("data-dp-get")) {
      var id = b.getAttribute("data-dp-get"), p = byId(id); if (!p || BUSY[id]) return; CP.sfx("tap");
      BUSY[id] = 1; repaint();
      download(id, function (x, n, t) { say(T("dp.step", { t: (byId(x) || p).title, n: n, m: t })); }).then(function () { MSG = T("dp.done.get", { t: p.title }); }, function (err) { MSG = why(err); }).then(function () { delete BUSY[id]; repaint(); });
    } else if (b.hasAttribute("data-dp-del")) {
      var q = byId(b.getAttribute("data-dp-del")); if (!q) return; pend = q.id; setClose();
      var dep = (LIST || []).filter(function (x) { return x.deps.indexOf(q.id) >= 0 && state()[x.id]; }).map(function (x) { return x.title; }).join(", ");
      sheet(T("dp.d1", { t: q.title }), CP.esc(T("dp.d1.body", { mb: mb((state()[q.id] || {}).byte || q.byte) })) + (dep ? " " + CP.esc(T("dp.d1.dep", { d: dep })) : ""), "data-dp-d1", "dp.d1.go");
    } else if (b.hasAttribute("data-dp-d1")) {
      var r = byId(pend); if (!r) { back(); return; }
      CP.closeSheet(); sheet(T("dp.d2", { t: r.title }), CP.esc(T("dp.d2.body", { t: r.title })), "data-dp-d2", "dp.d2.go");
    } else if (b.hasAttribute("data-dp-d2")) {
      var t = byId(pend), id2 = pend; pend = null; remove(id2).then(function () { MSG = t ? T("dp.done.del", { t: t.title }) : ""; back(); }, function () { MSG = T("dp.fail.net"); back(); });
    } else { pend = null; back(); }
  });
  CP.dataPacks = { list: function () { return LIST || []; }, installed: installed, status: function (id) { var p = byId(id); return p ? status(p) : "no"; }, check: checkIndex, download: download, remove: remove, read: read, supported: supported };
})();
