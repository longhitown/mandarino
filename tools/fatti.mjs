#!/usr/bin/env node
/* màndarínō · i fatti verificati: ogni numero che il sito, llms.txt e i dati strutturati dichiarano nasce qui, dal codice.

   Un assistente (o un motore di ricerca) che legge «6.385 parole» deve poter contare su quel numero: per questo non
   lo scriviamo a mano nelle pagine. tools/fatti.mjs lo ricava dai dati del corso, lo mette in docs/fatti.json (pubblico:
   https://mandarinoapp.org/fatti.json) e la CI fallisce se il file non è aggiornato o se una pagina dice un numero diverso.

   node tools/fatti.mjs            controlla: docs/fatti.json è aggiornato e le pagine concordano (exit 1 altrimenti)
   node tools/fatti.mjs --scrivi   rigenera docs/fatti.json
   node tools/fatti.mjs --stampa   mostra i fatti senza toccare nulla

   Cosa NON c'è, di proposito: confronti con altre app, classifiche, recensioni, numeri di utenti. Sono affermazioni su
   altri, o su ciò che non possiamo misurare qui: se un giorno servono, vanno scritte a mano con data e fonte. */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { load, check } from "./lib/data.mjs";
import { lab, verify } from "./lib/lab.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src");
const FILE = path.join(ROOT, "docs/fatti.json");
const rd = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");

/* i fatti che sono vere affermazioni di progetto (non numeri): stanno in un posto solo, e il test li confronta con le pagine */
const PROMESSE = {
  prezzo: "gratis, senza acquisti né abbonamenti",
  pubblicita: false,
  registrazione: false,
  tracciamento: false,
  offline: true,
  datiSulDispositivo: true,
  licenzaCodice: "MIT",
  licenzaGrafica: "CC BY-NC-SA 4.0",
  codice: "https://github.com/longhitown/mandarino",
  sito: "https://mandarinoapp.org"
};

/* le parole del corso di italiano: la stessa regola di src/it/course.js (un'entrata per id, solo se la parola cinese esiste nel vocabolario); il test e2e confronta con CP.itLexicon() */
export function paroleItaliano(D, conPacchetti) {
  const W = new Set(); D.SECTIONS.concat(conPacchetti ? (D.PACKS || []).flatMap((p) => p.sections) : []).forEach((s) => s.words.forEach((w) => { let k = w[1]; if (W.has(k)) { k = w[1] + "#" + w[0]; while (W.has(k)) k += "'"; } W.add(k); }));
  const ids = new Set(), G = D.GRAM || {};
  Object.keys(G.nouns || {}).forEach((k) => W.has(k) && ids.add("it:n:" + k));
  Object.keys(G.places || {}).forEach((k) => W.has(k) && G.places[k][0] && !ids.has("it:n:" + k) && ids.add("it:l:" + k));
  Object.keys(G.nations || {}).forEach((k) => W.has(k) && Array.isArray(G.nations[k]) && ids.add("it:a:" + k));
  Object.keys(G.verbs || {}).forEach((k) => W.has(k) && ids.add("it:v:" + k));
  Object.keys(G.adjs || {}).forEach((k) => W.has(k) && ids.add("it:j:" + k));
  Object.keys(G.time || {}).forEach((k) => W.has(k) && ids.add("it:t:" + k));
  (D.IT_LEXICON || []).concat(conPacchetti ? D.IT_LEXICON_PACKS || [] : []).forEach((r) => { const ks = r[0].split("|").filter((k) => W.has(k)); if (ks.length) ids.add("it:" + (r[1] === "n" ? "n" : r[1] === "j" ? "j" : r[1] === "v" ? "v" : "x") + ":" + ks[0]); });
  return ids.size;
}

export function fatti() {
  const D = load(SRC), c = check(D), gv = verify(lab(SRC));
  const prop = Object.fromEntries(rd("android/version.properties").split(/\r?\n/).filter((l) => /^\w+=/.test(l)).map((l) => l.split("=")));
  const icone = JSON.parse(rd("icone/manifest.json"));
  const brani = fs.readdirSync(path.join(SRC, "audio/music")).filter((f) => f.endsWith(".ogg")).length;
  return {
    "$descrizione": "Fatti verificati di màndarínō, ricavati dal codice da tools/fatti.mjs. Non modificare a mano: node tools/fatti.mjs --scrivi",
    nome: "màndarínō",
    versioneNelCodice: prop.versionName,
    corsoDiCinese: {
      parole: c.words, sezioni: c.sections, dialoghi: c.dialogs, frasiVerificate: gv.total,
      lezioni: (D.LESSONS || []).length, standard: "HSK 3.0",
      pacchetti: (D.PACK_INDEX || []).map((p) => ({ id: p.id, titolo: p.title, parole: p.n })),
      paroleNeiPacchetti: c.packWords || 0,
      paroleConPacchetti: c.words + (c.packWords || 0),
      copertura: D.PACK_META ? { lista: D.PACK_META.lista, vociDellaLista: D.PACK_META.voci, presenti: D.PACK_META.nellApp + D.PACK_META.neiPacchetti, percentuale: Math.round(100 * (D.PACK_META.nellApp + D.PACK_META.neiPacchetti) / D.PACK_META.voci) } : null
    },
    corsoDiItaliano: { lezioni: (D.ITLESSONS || []).length, parole: paroleItaliano(D), paroleConPacchetti: paroleItaliano(D, true), perChiParla: "cinese (mandarino)" },
    app: { icone: icone.icone.length, brani, piattaforme: ["Android (APK)", "Web (browser, installabile)"] },
    lingue: ["it", "zh-CN"],
    promesse: PROMESSE
  };
}

const stringify = (f) => JSON.stringify(f, null, 2) + "\n";

/* frasi di una pagina che contengono un numero dei fatti: se il numero cambia, la pagina deve cambiare */
export function problemi(f) {
  const out = [];
  if (!fs.existsSync(FILE)) out.push("docs/fatti.json manca: node tools/fatti.mjs --scrivi");
  else if (rd("docs/fatti.json") !== stringify(f)) out.push("docs/fatti.json non è aggiornato: node tools/fatti.mjs --scrivi");
  const num = (n) => new RegExp("(^|[^\\d.,])(" + String(n).replace(/(\d)(?=(\d{3})+$)/, "$1[.,]?") + ")(?![\\d])");
  const home = rd("docs/index.html");
  if (!num(f.corsoDiCinese.parole).test(home)) out.push(`docs/index.html non dice ${f.corsoDiCinese.parole} parole`);
  /* anche la home (testi e FAQ) e il README devono dire i numeri veri: lezioni di cinese, di italiano e parole */
  for (const [nome, t] of [["docs/index.html", home], ["README.md", rd("README.md")]]) {
    if (!num(f.corsoDiCinese.parole).test(t)) out.push(`${nome} non dice ${f.corsoDiCinese.parole} parole`);
    if (!new RegExp(`${f.corsoDiCinese.lezioni} lezioni`).test(t)) out.push(`${nome} non dice ${f.corsoDiCinese.lezioni} lezioni di cinese`);
    if (!new RegExp(`${f.corsoDiItaliano.lezioni} (lezioni|节)`).test(t)) out.push(`${nome} non dice ${f.corsoDiItaliano.lezioni} lezioni di italiano`);
    if (!num(f.corsoDiItaliano.parole).test(t)) out.push(`${nome} non dice ${f.corsoDiItaliano.parole} parole di italiano`);
    if (!num(f.corsoDiCinese.paroleConPacchetti).test(t)) out.push(`${nome} non dice ${f.corsoDiCinese.paroleConPacchetti} parole con i pacchetti`);
  }
  return out;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const f = fatti(), a = process.argv.slice(2);
  if (a.includes("--stampa")) { process.stdout.write(stringify(f)); process.exit(0); }
  if (a.includes("--scrivi")) { fs.writeFileSync(FILE, stringify(f)); console.log("✓ docs/fatti.json scritto"); process.exit(0); }
  const p = problemi(f);
  if (p.length) { console.error("✗ fatti non allineati:\n  " + p.join("\n  ")); process.exit(1); }
  console.log(`✓ fatti allineati · ${f.corsoDiCinese.parole} parole, ${f.corsoDiCinese.lezioni} + ${f.corsoDiItaliano.lezioni} lezioni, ${f.app.icone} icone`);
}
