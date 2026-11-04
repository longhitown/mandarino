#!/usr/bin/env node
/* màndarínō · i pacchetti di livello del corso di cinese (src/data/packs/*.js), generati dal dataset verificato.

   Un pacchetto è un gruppo di parole che chi studia accende in Impostazioni → Studia: nel file unico resta testo inerte (non pesa
   all'avvio) e si esegue solo se è attivo (cp-packs). Questo strumento li costruisce, non li inventa: ogni parola viene dal dataset
   (mandarino-dataset, pacchetto `dist/pack/libero.json` più `dati/morphemic_dataset.json`).

   Lista di riferimento: complete-hsk-vocabulary (MIT), livelli «new-N» (HSK 3.0), lo stesso commit di THIRD-PARTY-NOTICES.md.
   Uso:  node tools/packs.mjs <cartella-del-dataset> <complete.json> [--scrivi]
         senza --scrivi: mostra i numeri e controlla che src/data/packs/ e src/data/packs-index.js siano aggiornati (exit 1 altrimenti).

   Una parola entra se, tutte insieme:
     1. ha livello `new-N` in complete-hsk-vocabulary uguale a quello del pacchetto;
     2. non è già nell'app (neppure come forma con 儿);
     3. nel dataset ha rilettura «verificato», glossa italiana non vuota e nessuna segnalazione residua; oppure è in `lavoro/glosse_3b.json`
        (le 1.518 voci rimaste, con glossa scritta e riletta da Claude a partire da complete-hsk-vocabulary: vedi RILETTURA 3b in docs/rilettura.md);
     4. il pinyin si divide in una sillaba per carattere (letture del dataset, o pinyin indicato nella glossa 3b) e coincide con il pinyin della parola.
   Ordine: dalla più frequente (rango di complete-hsk-vocabulary). Sezioni da 30 parole. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { load } from "./lib/data.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src"), OUTDIR = path.join(SRC, "data/packs"), INDEX = path.join(SRC, "data/packs-index.js");
export const COMMIT = "7ac65bf1a6387d35f1ade478906172a19311c7f9", PER_SEZIONE = 30;
/* i pacchetti di questa versione; altri livelli si aggiungono qui, con la stessa regola */
export const PACCHETTI = [
  { id: "hsk6", course: "zh", level: 6, title: "HSK 6", sub: "Il sesto livello dell'HSK 3.0: parole di lettura e di lavoro" },
  /* i livelli 7-9 si dividono per frequenza: si aggiungono un po' alla volta, le più usate prima */
  { id: "hsk7a", course: "zh", level: 7, from: 0, to: 1000, title: "HSK 7–9 · A", pre: "HSK 7–9 · A", sub: "Livelli 7–9: le 1.000 parole più frequenti" },
  { id: "hsk7b", course: "zh", level: 7, from: 1000, to: 2000, title: "HSK 7–9 · B", pre: "HSK 7–9 · B", sub: "Livelli 7–9: dalla 1.001ª alla 2.000ª per frequenza" },
  { id: "hsk7c", course: "zh", level: 7, from: 2000, to: 3000, title: "HSK 7–9 · C", pre: "HSK 7–9 · C", sub: "Livelli 7–9: dalla 2.001ª alla 3.000ª per frequenza" },
  { id: "hsk7d", course: "zh", level: 7, from: 3000, to: 4008, title: "HSK 7–9 · D", pre: "HSK 7–9 · D", sub: "Livelli 7–9: dalla 3.001ª alla 4.008ª per frequenza" },
  { id: "hsk7e", course: "zh", level: 7, from: 4008, to: Infinity, title: "HSK 7–9 · E", pre: "HSK 7–9 · E", sub: "Livelli 7–9: le parole più rare, dalla 4.009ª in poi" }
];

const J = (f) => JSON.parse(fs.readFileSync(f, "utf8"));
const strip = (s) => String(s).normalize("NFC").toLowerCase().replace(/[\s\-'’.·]/g, "");
const sillabe = (h, e) => {
  const ph = e.phonetics || [], chars = Array.from(h);
  if (ph.length !== chars.length || ph.some((p, i) => p.char !== chars[i] || !p.pinyin)) return null;
  return strip(ph.map((p) => p.pinyin).join("")) === strip(e.pinyin || "") ? ph.map((p) => p.pinyin).join(".") : null;
};

export function costruisci(ds, completePath) {  /* restituisce l'elenco dei pacchetti, con .meta (copertura della lista di riferimento) */
  const g3b = fs.existsSync(path.join(ds, "lavoro/glosse_3b.json")) ? J(path.join(ds, "lavoro/glosse_3b.json")) : {}, dataset = J(path.join(ds, "dati/morphemic_dataset.json")), pack = new Map(J(path.join(ds, "dist/pack/libero.json")).map((e) => [e.h, e]));
  const D = load(SRC), have = new Set(); for (const s of D.SECTIONS) for (const w of s.words) have.add(w[1]);
  const lv = new Map(), rank = new Map(), pinyinC = new Map();
  for (const w of J(completePath)) {
    const ns = w.level.filter((x) => /^new-/.test(x)).map((x) => +x.slice(4)); if (!ns.length) continue;
    lv.set(w.simplified, Math.min(...ns)); rank.set(w.simplified, w.frequency ?? 1e9);
    try { pinyinC.set(w.simplified, w.forms[0].transcriptions.pinyin || ""); } catch (e) {}
  }
  const out = [], perLivello = new Map();
  for (const P of PACCHETTI) {
    if (!perLivello.has(P.level)) perLivello.set(P.level, ammesse(P.level));
    const { words: tutte, scartate } = perLivello.get(P.level);
    out.push({ P, words: tutte.slice(P.from || 0, P.to === undefined ? undefined : P.to), scartate: P.from ? {} : scartate });
  }
  const nellApp = [...lv.keys()].filter((h) => have.has(h) || have.has(h.replace(/儿$/, "")) || have.has(h + "儿")).length;
  out.meta = { lista: "complete-hsk-vocabulary, livelli new-1…7", voci: lv.size, nellApp, neiPacchetti: out.reduce((a, r) => a + r.words.length, 0) };
  return out;
  function ammesse(livello) {
    const words = [], scartate = {};
    const no = (h, why) => { (scartate[why] = scartate[why] || []).push(h); };
    for (const [h, l] of lv) {
      if (l !== livello) continue;
      if (have.has(h) || have.has(h.replace(/儿$/, "")) || have.has(h + "儿")) continue;
      const e = dataset[h], k = pack.get(h), x = g3b[h];
      if (x) {   /* voce del lotto 3b: glossa riletta; pinyin dal lotto, oppure dal dataset, oppure da complete-hsk-vocabulary */
        const chars = Array.from(h).length, own = x.py ? x.py.replace(/[’']/g, "").trim().split(/\s+/) : null;
        let py = own && own.length === chars ? own.join(".") : (e ? sillabe(h, e) : null);
        if (!py) { const c = (pinyinC.get(h) || "").replace(/[’']/g, "").trim().split(/\s+/); if (c.length === chars) py = c.join("."); }
        if (!py) { no(h, "3b: pinyin non allineato ai caratteri"); continue; }
        words.push({ h, py, it: x.it, r: rank.get(h), b: 1 }); continue;
      }
      if (!e || !k) { no(h, "non nel dataset"); continue; }
      if (k.f !== "verificato") { no(h, "rilettura: " + k.f); continue; }
      const it = String(k.i || "").trim();
      if (!it) { no(h, "senza glossa"); continue; }
      if ((e.it_check || []).length) { no(h, "segnalazione residua"); continue; }
      const py = sillabe(h, e); if (!py) { no(h, "pinyin non allineato ai caratteri"); continue; }
      words.push({ h, py, it, r: rank.get(h) });
    }
    words.sort((a, b) => (a.b || 0) - (b.b || 0) || a.r - b.r || (a.h < b.h ? -1 : 1));   /* prima le voci già verificate dal dataset, poi quelle del lotto 3b: i pacchetti già usciti non cambiano */
    return { words, scartate };
  }
}

const q = (s) => JSON.stringify(s);
export function file(P, words) {
  const sec = [];
  for (let i = 0; i < words.length; i += PER_SEZIONE) sec.push(words.slice(i, i + PER_SEZIONE));
  const body = sec.map((g, i) => `    { "id": ${q(P.id + "_" + String(i + 1).padStart(2, "0"))}, "title": ${q((P.pre || P.title + " · ") + (i + 1))}, "words": [\n` +
    g.map((w) => `      [${q(w.py)}, ${q(w.h)}, ${q(w.it)}]`).join(",\n") + "\n    ] }").join(",\n");
  return `/* Pacchetto «${P.title}» · ${words.length} parole in ${sec.length} sezioni. GENERATO da tools/packs.mjs: non modificarlo a mano.
   Ogni parola: lista di riferimento complete-hsk-vocabulary (MIT, commit ${COMMIT.slice(0, 7)}), glossa italiana del progetto con rilettura «verificato».
   Licenza: CC BY-SA 4.0 (il vocabolario deriva in parte da CC-CEDICT, MDBG): vedi LICENZE/CONTENUTI.txt. Si attiva in Impostazioni → Studia. */
var PACKS = typeof PACKS === "undefined" ? [] : PACKS;
PACKS.push({ "id": ${q(P.id)}, "course": ${q(P.course)}, "chapter": ${P.level}, "sections": [
${body}
] });
`;
}
export function indice(res) {
  const rows = res.map(({ P, words }) => ({ id: P.id, course: P.course, title: P.title, sub: P.sub, level: P.level, n: words.length, sections: Math.ceil(words.length / PER_SEZIONE),
    kb: Math.ceil(Buffer.byteLength(file(P, words)) / 1024) }));
  return `/* Elenco dei pacchetti di livello (per Impostazioni → Studia) e copertura della lista di riferimento. GENERATO da tools/packs.mjs: non modificarlo a mano. */\nvar PACK_INDEX = ${JSON.stringify(rows, null, 1).replace(/\n\s*/g, " ")};\nvar PACK_META = ${JSON.stringify(res.meta)};\n`;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const DS = process.argv[2], COMPLETE = process.argv[3], SCRIVI = process.argv.includes("--scrivi");
  if (!DS || !COMPLETE) { console.error("Uso: node tools/packs.mjs <cartella-del-dataset> <complete.json> [--scrivi]"); process.exit(2); }
  const res = costruisci(DS, COMPLETE); let ko = 0;
  fs.mkdirSync(OUTDIR, { recursive: true });
  for (const { P, words, scartate } of res) {
    console.log(`${P.id}: ${words.length} parole in ${Math.ceil(words.length / PER_SEZIONE)} sezioni`);
    for (const [why, l] of Object.entries(scartate)) console.log(`   fuori: ${l.length} · ${why}${l.length < 12 ? " → " + l.join(" ") : ""}`);
    const f = path.join(OUTDIR, P.id + ".js"), t = file(P, words);
    if (SCRIVI) fs.writeFileSync(f, t); else if (!fs.existsSync(f) || fs.readFileSync(f, "utf8") !== t) { console.error("   ✗ " + f + " non è aggiornato"); ko = 1; }
  }
  const t = indice(res);
  if (SCRIVI) fs.writeFileSync(INDEX, t); else if (!fs.existsSync(INDEX) || fs.readFileSync(INDEX, "utf8") !== t) { console.error("   ✗ " + INDEX + " non è aggiornato"); ko = 1; }
  process.exit(ko);
}
