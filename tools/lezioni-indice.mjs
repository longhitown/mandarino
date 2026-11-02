#!/usr/bin/env node
/* màndarínō · l'elenco delle lezioni ricche in src/index.html (tra <!-- LR:INIZIO --> e <!-- LR:FINE -->): un <script src> per ogni file di
   src/data/lr/zh/ e src/data/lr/it/, in ordine di nome. Si rilancia quando si aggiunge o si toglie un file.
     node tools/lezioni-indice.mjs          riscrive l'elenco
     node tools/lezioni-indice.mjs --verifica   esce con 1 se l'elenco non è aggiornato (lo usa tools/unit.mjs) */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const SRC = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src"), IDX = path.join(SRC, "index.html");
const lista = () => ["zh", "it"].flatMap((c) => { const d = path.join(SRC, "data/lr", c); return fs.existsSync(d) ? fs.readdirSync(d).filter((f) => /^\d+-.+\.js$/.test(f)).sort().map((f) => '<script src="data/lr/' + c + "/" + f + '"></script>') : []; });
export function aggiornato(html) {
  const re = /(<!-- LR:INIZIO[^\n]*-->\n)([\s\S]*?)(<!-- LR:FINE -->)/, m = re.exec(html);
  if (!m) throw new Error("mancano i marcatori LR:INIZIO / LR:FINE in src/index.html");
  const L = lista(), nuovo = html.replace(re, (x, a, _b, c) => a + L.map((t) => t + "\n").join("") + c);
  return { nuovo, ok: nuovo === html, n: L.length };
}
if (import.meta.url === "file:///" + process.argv[1].replace(/\\/g, "/")) {
  const html = fs.readFileSync(IDX, "utf8").replace(/\r\n/g, "\n"), r = aggiornato(html);
  if (process.argv.includes("--verifica")) { if (!r.ok) { console.error("✗ l'elenco delle lezioni ricche in src/index.html non è aggiornato: node tools/lezioni-indice.mjs"); process.exit(1); } console.log("✓ elenco delle lezioni ricche aggiornato (" + r.n + ")"); }
  else { fs.writeFileSync(IDX, r.nuovo); console.log("✓ elenco delle lezioni ricche scritto: " + r.n + " file"); }
}
