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
     3. nel dataset ha rilettura «verificato», glossa italiana non vuota e nessuna segnalazione residua;
     4. il pinyin si divide in una sillaba per carattere (letture del dataset) e coincide con il pinyin della parola.
   Ordine: dalla più frequente (rango di complete-hsk-vocabulary). Sezioni da 30 parole. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { load } from "./lib/data.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src"), OUTDIR = path.join(SRC, "data/packs"), INDEX = path.join(SRC, "data/packs-index.js");
export const COMMIT = "7ac65bf1a6387d35f1ade478906172a19311c7f9", PER_SEZIONE = 30;
/* i pacchetti di questa versione; altri livelli si aggiungono qui, con la stessa regola */
export const PACCHETTI = [{ id: "hsk6", course: "zh", level: 6, title: "HSK 6", sub: "Il sesto livello dell'HSK 3.0: parole di lettura e di lavoro" }];

const J = (f) => JSON.parse(fs.readFileSync(f, "utf8"));
const strip = (s) => String(s).normalize("NFC").toLowerCase().replace(/[\s\-'’.·]/g, "");
const sillabe = (h, e) => {
  const ph = e.phonetics || [], chars = Array.from(h);
  if (ph.length !== chars.length || ph.some((p, i) => p.char !== chars[i] || !p.pinyin)) return null;
  return strip(ph.map((p) => p.pinyin).join("")) === strip(e.pinyin || "") ? ph.map((p) => p.pinyin).join(".") : null;
};

export function costruisci(ds, completePath) {
  const dataset = J(path.join(ds, "dati/morphemic_dataset.json")), pack = new Map(J(path.join(ds, "dist/pack/libero.json")).map((e) => [e.h, e]));
  const D = load(SRC), have = new Set(); for (const s of D.SECTIONS) for (const w of s.words) have.add(w[1]);
  const lv = new Map(), rank = new Map();
  for (const w of J(completePath)) {
    const ns = w.level.filter((x) => /^new-/.test(x)).map((x) => +x.slice(4)); if (!ns.length) continue;
    lv.set(w.simplified, Math.min(...ns)); rank.set(w.simplified, w.frequency ?? 1e9);
  }
  const out = [];
  for (const P of PACCHETTI) {
    const words = [], scartate = {};
    const no = (h, why) => { (scartate[why] = scartate[why] || []).push(h); };
    for (const [h, l] of lv) {
      if (l !== P.level) continue;
      if (have.has(h) || have.has(h.replace(/儿$/, "")) || have.has(h + "儿")) continue;
      const e = dataset[h], k = pack.get(h);
      if (!e || !k) { no(h, "non nel dataset"); continue; }
      if (k.f !== "verificato") { no(h, "rilettura: " + k.f); continue; }
      const it = String(k.i || "").trim();
      if (!it) { no(h, "senza glossa"); continue; }
      if ((e.it_check || []).length) { no(h, "segnalazione residua"); continue; }
      const py = sillabe(h, e); if (!py) { no(h, "pinyin non allineato ai caratteri"); continue; }
      words.push({ h, py, it, r: rank.get(h) });
    }
    words.sort((a, b) => a.r - b.r || (a.h < b.h ? -1 : 1));
    out.push({ P, words, scartate });
  }
  return out;
}

const q = (s) => JSON.stringify(s);
export function file(P, words) {
  const sec = [];
  for (let i = 0; i < words.length; i += PER_SEZIONE) sec.push(words.slice(i, i + PER_SEZIONE));
  const body = sec.map((g, i) => `    { "id": ${q(P.id + "_" + String(i + 1).padStart(2, "0"))}, "title": ${q(P.title + " · " + (i + 1))}, "words": [\n` +
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
  return `/* Elenco dei pacchetti di livello (per Impostazioni → Studia). GENERATO da tools/packs.mjs: non modificarlo a mano. */\nvar PACK_INDEX = ${JSON.stringify(rows, null, 1).replace(/\n\s*/g, " ")};\n`;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const DS = process.argv[2], COMPLETE = process.argv[3], SCRIVI = process.argv.includes("--scrivi");
  if (!DS || !COMPLETE) { console.error("Uso: node tools/packs.mjs <cartella-del-dataset> <complete.json> [--scrivi]"); process.exit(2); }
  const res = costruisci(DS, COMPLETE); let ko = 0;
  fs.mkdirSync(OUTDIR, { recursive: true });
  for (const { P, words, scartate } of res) {
    console.log(`${P.id}: ${words.length} parole in ${Math.ceil(words.length / PER_SEZIONE)} sezioni`);
    for (const [why, l] of Object.entries(scartate)) console.log(`   fuori: ${l.length} · ${why}`);
    const f = path.join(OUTDIR, P.id + ".js"), t = file(P, words);
    if (SCRIVI) fs.writeFileSync(f, t); else if (!fs.existsSync(f) || fs.readFileSync(f, "utf8") !== t) { console.error("   ✗ " + f + " non è aggiornato"); ko = 1; }
  }
  const t = indice(res);
  if (SCRIVI) fs.writeFileSync(INDEX, t); else if (!fs.existsSync(INDEX) || fs.readFileSync(INDEX, "utf8") !== t) { console.error("   ✗ " + INDEX + " non è aggiornato"); ko = 1; }
  process.exit(ko);
}
