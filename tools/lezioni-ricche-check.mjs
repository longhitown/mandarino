#!/usr/bin/env node
/* màndarínō · controllo delle lezioni ricche (src/data/lr/).
     node tools/lezioni-ricche-check.mjs                tutte le lezioni ricche, di tutti e due i corsi
     node tools/lezioni-ricche-check.mjs zh             solo il corso di cinese
     node tools/lezioni-ricche-check.mjs zh ba passato  solo queste lezioni (per id)
   Esce con 1 se trova errori. Non scrive niente e non costruisce dist/: si può lanciare in parallelo da più agenti. */
import path from "path";
import { fileURLToPath } from "url";
import { lab } from "./lib/lab.mjs";
import { checkRicche, statRicche } from "./lib/ricche.mjs";

const SRC = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src");
const [c, ...ids] = process.argv.slice(2), corsi = c === "zh" || c === "it" ? [c] : ["zh", "it"];
const L = lab(SRC);
let tot = 0, bad = 0;
for (const corso of corsi) {
  const R = L.D.LESSON_RICH[corso];
  if (ids.length) for (const id of Object.keys(R)) if (!ids.includes(id)) delete R[id];
  const err = checkRicche(L, corso), st = statRicche(L.D, corso);
  tot += st.length; bad += err.length;
  for (const s of st) console.log(`  ${corso}/${s.id}: ${(s.byte / 1024).toFixed(1)} KB · ${s.esempi} esempi · ${s.contrasti} contrasti · ${s.esercizi} esercizi`);
  if (err.length) console.error(err.map((x) => "✗ " + x).join("\n"));
}
console.log(bad ? `✗ ${bad} problemi in ${tot} lezioni ricche` : `✓ ${tot} lezioni ricche in regola`);
process.exit(bad ? 1 : 0);
