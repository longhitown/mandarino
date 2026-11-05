/* màndarínō · significato dei componenti che il vocabolario e i 214 radicali non spiegano (src/data/anatomy-mean.js).
   Fonte: il dataset del progetto (mandarino-dataset/dati/morphemic_dataset.json: glossa italiana e pinyin della voce di un solo carattere).
   Si tiene la prima accezione, senza cognomi. Si rilancia dopo tools/anatomy.mjs:
   node tools/componenti.mjs percorso/morphemic_dataset.json */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { lab } from "./lib/lab.mjs";
const SRC = path.join(path.dirname(fileURLToPath(import.meta.url)), "../src"), file = process.argv[2];
if (!file) { console.error("Uso: node tools/componenti.mjs morphemic_dataset.json"); process.exit(2); }
const L = lab(SRC), W = L.W, D = L.D, M = JSON.parse(fs.readFileSync(file, "utf8"));
const A = {}; new Function("c", fs.readFileSync(path.join(SRC, "data/anatomy.js"), "utf8").replace(/^var ANATOMY/m, "c.ANATOMY") + ";")(A);
const rad = new Set(); (D.RADICALS || []).forEach((r) => { rad.add(r[1]); Array.from(r[2] || "").forEach((v) => rad.add(v)); });
const parts = new Set(); Object.values(A.ANATOMY).forEach((x) => Array.from(x[0] || "").slice(1).join("").split("|").filter(Boolean).forEach((p) => parts.add(p)));
const first = (s) => s.split(/[;；]/)[0].replace(/\s*\(.*?\)\s*/g, " ").trim(), out = {};
for (const c of [...parts].sort()) {
  if (Array.from(c).length !== 1 || W[c] || rad.has(c) || !M[c] || !M[c].it || /cognome/i.test(first(M[c].it))) continue;
  const g = first(M[c].it); if (g && g.length <= 40 && M[c].pinyin) out[c] = [M[c].pinyin.split(/[\/,]/)[0].trim(), g];
}
const head = `/* Significato dei componenti dei caratteri che non sono né parole del vocabolario né radicali (${Object.keys(out).length} voci): pinyin e prima accezione italiana
   dal dataset del progetto (parte derivata da CC-CEDICT, CC BY-SA 4.0). Generato da tools/componenti.mjs; non modificare a mano. */\n`;
fs.writeFileSync(path.join(SRC, "data/anatomy-mean.js"), head + "var ANATOMY_MEAN = " + JSON.stringify(out).replace(/\],"/g, '],\n"') + ";\n");
console.log(`✓ src/data/anatomy-mean.js · ${Object.keys(out).length} componenti con significato su ${parts.size}`);
