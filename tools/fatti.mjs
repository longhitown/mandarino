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
  licenzaGrafica: "CC BY 4.0",
  codice: "https://github.com/longhitown/mandarino",
  sito: "https://mandarinoapp.org"
};

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
      lezioni: (D.LESSONS || []).length, standard: "HSK 3.0"
    },
    corsoDiItaliano: { lezioni: (D.ITLESSONS || []).length, perChiParla: "cinese (mandarino)" },
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
