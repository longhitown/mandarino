/* màndarínō · controllo delle lezioni ricche (src/data/lr/zh/ e src/data/lr/it/).
   Una lezione ricca arricchisce una lezione che esiste già (stesso id in LESSONS o ITLESSONS) con le sezioni di un capitolo di manuale:
   Scopri, Regola, Logica, Esempi, Contrasti, Dialogo, Il tranello, Per i più curiosi, Pragmatica, Esercizi, «Che cosa sai fare ora».
   Il formato è descritto, con un esempio completo, in docs/lezioni-guida.md. Qui si controlla: struttura, quantità, una sola risposta
   giusta per esercizio, ogni risposta con il suo «perché», lessico del corso (le frasi cinesi usano solo parole del vocabolario),
   nessuna parola di incertezza nel testo che legge chi studia.

   corso "zh": spiegazioni in italiano, esempi in cinese (con pinyin automatico). corso "it": spiegazioni in cinese, esempi in italiano. */

const CJK = /[㐀-鿿]/, CJKRUN = /[㐀-鿿＿]+/g;
const KEYS = ["v", "svolta", "scopri", "regola", "logica", "mappa", "esempi", "contrasti", "dialogo", "tranello", "curiosi", "pragmatica", "esercizi", "capaci", "fonti"];
const TIPI = ["scegli", "buco", "ordine", "scrivi", "trasforma", "minidialogo"];
const MAPPE = ["catena", "timeline", "albero", "tabella"];
/* parole che non possono stare nel testo di una lezione: nessuna incertezza dichiarata, nessun segnaposto */
const VIETATE = /bozza|da verificare|non verificat|non documentat|da confermare|\bTODO\b|FIXME|XXX|\?\?\?|lorem|草稿|待核实|待确认|未经证实/i;
const EMOJI = /\p{Extended_Pictographic}/u;

/* lunghezze minime: in caratteri (nel cinese un carattere vale circa due lettere) */
const MIN = { it: { enunciato: 140, logica: 90, risposta: 60, perche: 22, curioso: 90, tranello: 50, pragmatica: 60 }, zh: { enunciato: 70, logica: 45, risposta: 30, perche: 11, curioso: 45, tranello: 25, pragmatica: 30 } };

export function checkRicche(L, corso) {
  const err = [], D = L.D, R = (D.LESSON_RICH || {})[corso] || {};
  const base = corso === "zh" ? D.LESSONS : D.ITLESSONS, ids = new Map((base || []).map((l) => [l.id, l]));
  const zhCourse = corso === "zh", m = zhCourse ? MIN.it : MIN.zh;   /* chi spiega: italiano nel corso di cinese, cinese nel corso di italiano */
  for (const [id, r] of Object.entries(R)) {
    const w = `lezione ricca ${corso}/${id}`, e = (msg) => err.push(w + ": " + msg);
    const str = (v, min, nome) => { if (typeof v !== "string" || v.trim().length < (min || 1)) { e(`${nome} deve essere un testo di almeno ${min || 1} caratteri`); return false; } return true; };
    const arr = (v, lo, hi, nome) => { if (!Array.isArray(v) || v.length < lo || v.length > hi) { e(`${nome}: servono da ${lo} a ${hi} elementi`); return false; } return true; };
    /* una frase che lo studente legge come lingua da imparare: cinese (corso zh) solo con parole del vocabolario; italiano (corso it) senza caratteri cinesi */
    const frase = (t, nome, opt) => {
      if (typeof t !== "string" || !t.trim()) { e(`${nome}: testo mancante`); return; }
      if (zhCourse) {
        if (!CJK.test(t)) { if (!(opt && opt.libera)) e(`${nome}: «${t}» non contiene cinese`); return; }
        for (const run of t.match(CJKRUN) || []) { const u = L.unknown(run.replace(/＿/g, "")); if (u.length) e(`${nome}: «${t}» usa caratteri fuori dal vocabolario (${[...new Set(u)].join("")})`); }
      } else if (CJK.test(t) && !(opt && opt.libera)) e(`${nome}: «${t}» deve essere in italiano`);
    };
    const trad = (t, nome) => { if (typeof t !== "string" || !t.trim()) { e(`${nome}: manca la traduzione`); return; } if (!zhCourse && !CJK.test(t)) e(`${nome}: la traduzione deve essere in cinese`); };
    const opzioni = (op, nome, libera) => {
      if (!arr(op, 2, 4, nome)) return;
      let ok = 0; const visti = new Set();
      op.forEach((o, j) => {
        const at = `${nome}[${j}]`;
        if (typeof o !== "object" || o === null) { e(at + ": deve essere { t, ok, perche }"); return; }
        frase(o.t, at + ".t", { libera }); if (visti.has(o.t)) e(at + ": opzione doppia"); visti.add(o.t);
        if (typeof o.ok !== "boolean") e(at + ": manca ok (true o false)"); else if (o.ok) ok++;
        str(o.perche, m.perche, at + ".perche");
      });
      if (ok !== 1) e(`${nome}: serve esattamente una risposta giusta (ce ne sono ${ok})`);
    };
    const tutto = JSON.stringify(Object.assign({}, r, { fonti: undefined }));
    if (!ids.has(id)) e("non esiste la lezione di base con questo id");
    for (const k of Object.keys(r)) if (!KEYS.includes(k)) e(`campo sconosciuto «${k}»`);
    if (r.v !== 1) e("v deve essere 1");
    const kb = Buffer.byteLength(JSON.stringify(r)); if (kb < 9000) e(`troppo breve (${kb} byte): una lezione ricca è un capitolo, almeno 9000 byte`); if (kb > 70000) e(`troppo lunga (${kb} byte)`);
    if (VIETATE.test(tutto)) e("contiene una parola vietata (incertezza dichiarata o segnaposto): " + (tutto.match(VIETATE) || [""])[0]);
    if (EMOJI.test(tutto)) e("contiene un'emoji: si usano i segnaposto ⟦icona⟧ del set o niente");
    /* scopri */
    const s = r.scopri;
    if (!s || typeof s !== "object") e("manca scopri");
    else {
      if (arr(s.frasi, 3, 4, "scopri.frasi")) s.frasi.forEach((f, j) => { frase(f.t, `scopri.frasi[${j}].t`); trad(f.tr, `scopri.frasi[${j}].tr`); });
      str(s.domanda, 20, "scopri.domanda"); str(s.risposta, m.risposta, "scopri.risposta");
    }
    /* regola */
    const g = r.regola;
    if (!g || typeof g !== "object") e("manca regola");
    else {
      str(g.enunciato, m.enunciato, "regola.enunciato");
      if (g.schema !== undefined && arr(g.schema, 2, 7, "regola.schema")) g.schema.forEach((x, j) => str(x, 1, `regola.schema[${j}]`));
      if (arr(g.punti, 2, 8, "regola.punti")) g.punti.forEach((p, j) => { str(p && p.t, zhCourse ? 25 : 12, `regola.punti[${j}].t`); if (p && p.ok !== undefined && typeof p.ok !== "boolean") e(`regola.punti[${j}].ok deve essere true o false`); });
    }
    if (arr(r.logica, 1, 4, "logica")) r.logica.forEach((p, j) => str(p, m.logica, `logica[${j}]`));
    /* mappa visiva (facoltativa) */
    if (r.mappa !== undefined) {
      const mp = r.mappa;
      if (!mp || !MAPPE.includes(mp.tipo)) e("mappa.tipo deve essere uno di " + MAPPE.join(", "));
      else if (mp.tipo === "catena") { if (arr(mp.frasi, 1, 3, "mappa.frasi")) mp.frasi.forEach((f, j) => { if (!arr(f.parole, 2, 8, `mappa.frasi[${j}].parole`)) return; f.parole.forEach((x, k) => { str(x.t, 1, `mappa.frasi[${j}].parole[${k}].t`); if (!/^(m|f)$/.test(x.g || "") || !/^(s|p)$/.test(x.n || "")) e(`mappa.frasi[${j}].parole[${k}]: servono g ("m" o "f") e n ("s" o "p")`); }); }); }
      else if (mp.tipo === "timeline") { if (arr(mp.righe, 1, 5, "mappa.righe")) mp.righe.forEach((x, j) => { str(x.etichetta, 1, `mappa.righe[${j}].etichetta`); if (!/^(sfondo|evento|abitudine)$/.test(x.tipo || "")) e(`mappa.righe[${j}].tipo: sfondo, evento o abitudine`); }); }
      else if (mp.tipo === "albero") { if (!mp.nodi || typeof mp.nodi !== "object" || !mp.nodi[mp.inizio]) e("mappa.albero: servono nodi e inizio"); else for (const [nid, n] of Object.entries(mp.nodi)) { if (n.q) { if (!arr(n.risposte, 2, 4, `mappa.nodi.${nid}.risposte`)) continue; n.risposte.forEach((x, j) => { if (!mp.nodi[x.vai]) e(`mappa.nodi.${nid}.risposte[${j}].vai: nodo «${x.vai}» inesistente`); }); } else if (!n.fine) e(`mappa.nodi.${nid}: serve q o fine`); } }
      else if (mp.tipo === "tabella") { if (!arr(mp.testa, 2, 6, "mappa.testa") || !arr(mp.righe, 1, 14, "mappa.righe")) { /* già segnalato */ } else mp.righe.forEach((x, j) => { if (!Array.isArray(x) || x.length !== mp.testa.length) e(`mappa.righe[${j}]: servono ${mp.testa.length} celle`); }); }
    }
    /* esempi */
    if (arr(r.esempi, 2, 6, "esempi")) {
      let n = 0; const visti = new Set();
      r.esempi.forEach((gr, j) => {
        str(gr.gruppo, 3, `esempi[${j}].gruppo`);
        if (arr(gr.items, 1, 8, `esempi[${j}].items`)) gr.items.forEach((x, k) => { n++; frase(x.t, `esempi[${j}].items[${k}].t`); trad(x.tr, `esempi[${j}].items[${k}].tr`); if (visti.has(x.t)) e(`esempio doppio: «${x.t}»`); visti.add(x.t); });
      });
      if (n < 10 || n > 18) e(`esempi: servono da 10 a 18 frasi in tutto (ce ne sono ${n})`);
    }
    /* contrasti */
    if (arr(r.contrasti, 6, 10, "contrasti")) r.contrasti.forEach((c, j) => { str(c.q, 10, `contrasti[${j}].q`); if (c.ctx) { frase(c.ctx.t, `contrasti[${j}].ctx.t`, { libera: true }); } opzioni(c.opzioni, `contrasti[${j}].opzioni`, true); });
    /* dialogo */
    const d = r.dialogo;
    if (!d || typeof d !== "object") e("manca dialogo");
    else {
      str(d.titolo, 3, "dialogo.titolo");
      if (arr(d.righe, 4, 8, "dialogo.righe")) d.righe.forEach((x, j) => { if (!/^[AB]$/.test(x.chi || "")) e(`dialogo.righe[${j}].chi: A o B`); frase(x.t, `dialogo.righe[${j}].t`); trad(x.tr, `dialogo.righe[${j}].tr`); });
      if (arr(d.esercizi, 2, 4, "dialogo.esercizi")) d.esercizi.forEach((x, j) => { str(x.q, 6, `dialogo.esercizi[${j}].q`); opzioni(x.opzioni, `dialogo.esercizi[${j}].opzioni`, true); });
    }
    /* il tranello */
    const t = r.tranello;
    if (!t || typeof t !== "object") e("manca tranello"); else { str(t.errore, m.tranello, "tranello.errore"); str(t.perche, m.tranello, "tranello.perche"); str(t.esci, m.tranello, "tranello.esci"); if (t.esempi) arr(t.esempi, 1, 4, "tranello.esempi") && t.esempi.forEach((x, j) => { frase(x.sbagliata, `tranello.esempi[${j}].sbagliata`); frase(x.giusta, `tranello.esempi[${j}].giusta`); if (x.sbagliata === x.giusta) e(`tranello.esempi[${j}]: sbagliata = giusta`); }); }
    if (arr(r.curiosi, 1, 4, "curiosi")) r.curiosi.forEach((x, j) => { str(x.titolo, 3, `curiosi[${j}].titolo`); str(x.t, m.curioso, `curiosi[${j}].t`); });
    if (r.pragmatica !== undefined) str(r.pragmatica, m.pragmatica, "pragmatica");
    /* esercizi */
    if (arr(r.esercizi, 8, 14, "esercizi")) {
      const tipi = new Set();
      r.esercizi.forEach((x, j) => {
        const at = `esercizi[${j}]`; tipi.add(x.k);
        if (!TIPI.includes(x.k)) { e(`${at}: tipo «${x.k}» sconosciuto (${TIPI.join(", ")})`); return; }
        if (x.k === "scegli") { str(x.q, 8, at + ".q"); if (x.zh) frase(x.zh, at + ".zh"); opzioni(x.opzioni, at + ".opzioni", true); }
        else if (x.k === "buco") { frase(x.zh, at + ".zh"); if (!/＿|___/.test(x.zh || "")) e(at + ": la frase deve avere il buco (＿ o ___)"); opzioni(x.opzioni, at + ".opzioni"); if (x.tr) trad(x.tr, at + ".tr"); }
        else if (x.k === "ordine") { frase(x.t, at + ".t"); trad(x.tr, at + ".tr"); const n = zhCourse ? L.tokens(x.t || "").length : String(x.t || "").split(/\s+/).filter(Boolean).length; if (n < 2) e(at + ": servono almeno due tessere"); if (x.alt) arr(x.alt, 1, 4, at + ".alt") && x.alt.forEach((a, k) => frase(a, `${at}.alt[${k}]`)); }
        else if (x.k === "scrivi") { str(x.q, 8, at + ".q"); if (x.zh) frase(x.zh, at + ".zh"); str(x.a, 1, at + ".a"); if (x.accetta) arr(x.accetta, 1, 5, at + ".accetta"); if (x.py && !/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(x.a || "")) e(at + ": con py la risposta è pinyin con i toni"); str(x.perche, m.perche, at + ".perche"); }
        else if (x.k === "trasforma") { frase(x.base, at + ".base"); str(x.consegna, 8, at + ".consegna"); if (arr(x.accetta, 1, 5, at + ".accetta")) x.accetta.forEach((a, k) => { frase(a, `${at}.accetta[${k}]`); if (a === x.base) e(`${at}.accetta[${k}]: uguale alla frase di partenza`); }); if (x.rifiutate) arr(x.rifiutate, 1, 4, at + ".rifiutate") && x.rifiutate.forEach((a, k) => { frase(a.t, `${at}.rifiutate[${k}].t`); str(a.perche, m.perche, `${at}.rifiutate[${k}].perche`); if ((x.accetta || []).includes(a.t)) e(`${at}.rifiutate[${k}]: è anche tra le accettate`); }); str(x.perche, m.perche, at + ".perche"); }
        else if (x.k === "minidialogo") { if (arr(x.righe, 2, 4, at + ".righe")) { let b = 0; x.righe.forEach((y, k) => { if (!/^[AB]$/.test(y.chi || "")) e(`${at}.righe[${k}].chi: A o B`); frase(y.t, `${at}.righe[${k}].t`, y.buco ? { libera: true } : undefined); if (y.buco) { b++; if (!/＿|___/.test(y.t || "")) e(`${at}.righe[${k}]: la battuta con il buco deve avere ＿ o ___`); } }); if (b !== 1) e(`${at}: serve una sola battuta con buco (ce ne sono ${b})`); } opzioni(x.opzioni, at + ".opzioni"); }
      });
      if (tipi.size < 3) e("negli esercizi servono almeno tre tipi diversi");
      if (![...tipi].some((k) => k === "trasforma" || k === "scrivi")) e("negli esercizi serve almeno un trasforma o uno scrivi (produrre, non solo riconoscere)");
    }
    if (arr(r.capaci, 3, 5, "capaci")) r.capaci.forEach((c, j) => str(c, zhCourse ? 20 : 10, `capaci[${j}]`));
    if (arr(r.fonti, 2, 12, "fonti")) r.fonti.forEach((c, j) => str(c, 10, `fonti[${j}]`));
  }
  return err;
}

/* statistiche per il rapporto: byte e tipi di esercizio di ogni lezione */
export function statRicche(D, corso) {
  return Object.entries((D.LESSON_RICH || {})[corso] || {}).map(([id, r]) => ({ id, byte: Buffer.byteLength(JSON.stringify(r)), esercizi: (r.esercizi || []).length, contrasti: (r.contrasti || []).length, esempi: (r.esempi || []).reduce((a, g) => a + (g.items || []).length, 0) }));
}
