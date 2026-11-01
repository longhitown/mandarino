#!/usr/bin/env node
/* màndarínō · il dataset aperto del vocabolario («italian-chinese-hsk3-vocabulary»).

   Esporta dal codice del progetto una tabella pulita (caratteri, pinyin, italiano, sezione, livello HSK 3.0, frequenza) in CSV e JSON,
   con la scheda del dataset (dataset card, anche per Hugging Face), la nota sulle licenze e le impronte SHA-256.
   Il controllo delle licenze è in docs/dataset-licenze.md: qui è anche nel codice, perché lo strumento si rifiuta di esportare
   se il dato di partenza non è tra quelli ammessi.

     node tools/dataset.mjs             scrive la cartella dist-dataset/ (non si committa: si pubblica da lì, a mano)
     node tools/dataset.mjs --controlla controlla senza scrivere (lo usa tools/unit.mjs)

   Non pubblica niente: GitHub e Hugging Face li fa la persona che firma il progetto (docs/dataset-licenze.md, «Chi pubblica»). */
import fs from "fs";
import path from "path";
import vm from "vm";
import crypto from "crypto";
import { execFileSync } from "child_process";
import { fileURLToPath, pathToFileURL } from "url";
import { load } from "./lib/data.mjs";
import { fatti } from "./fatti.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src"), OUT = path.join(ROOT, "dist-dataset");
export const NOME = "italian-chinese-hsk3-vocabulary", VERSIONE = "1.0.0";

/* le sole origini ammesse nella v1, con la licenza. Tutto il resto (tratti, struttura dei caratteri, lessico italiano, frasi) non entra nel dataset: ha licenze diverse (docs/dataset-licenze.md) */
export const AMMESSI = {
  "src/data/vocab/": "CC BY 4.0 (contenuti didattici del progetto, LICENZE/CONTENUTI.txt)",
  "src/data/levels.js": "MIT (complete-hsk-vocabulary, Yanis Zafirópulos)",
  "src/data/freq.js": "MIT (complete-hsk-vocabulary, Yanis Zafirópulos)"
};

const rd = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
const sha = (s) => crypto.createHash("sha256").update(s).digest("hex");
const csv = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };

function mappa(file, nome) { const ctx = vm.createContext({}); vm.runInContext(rd(file), ctx, { filename: file }); return vm.runInContext(nome, ctx); }

export function righe() {
  const D = load(SRC);
  const livelli = mappa("src/data/levels.js", "HSK_LEVEL"), liv = new Map();
  for (const [l, s] of Object.entries(livelli)) for (const w of String(s).split("|")) if (w && !liv.has(w)) liv.set(w, +l);
  const rango = new Map(String(D.WORD_FREQ).split("|").map((w, i) => [w, i + 1]).reverse());
  const out = [];
  for (const s of D.SECTIONS) for (const w of s.words) {
    out.push({ hanzi: w[1], pinyin: String(w[0]).replace(/\./g, ""), italiano: w[2], nota: w[3] || "", sezione: s.id, titolo_sezione: s.title, livello_hsk: liv.get(w[1]) || "", frequenza_rango: rango.get(w[1]) || "" });
  }
  return { rows: out, files: D.files, sezioni: D.SECTIONS.length };
}

/* il controllo: le origini devono esistere e avere la licenza dichiarata nei documenti del progetto, nessuna riga vuota o duplicata */
export function controlla() {
  const r = righe(), problemi = [], notice = rd("NOTICE.md"), terzi = rd("THIRD-PARTY-NOTICES.md");
  for (const f of Object.keys(AMMESSI)) if (!fs.existsSync(path.join(ROOT, f))) problemi.push("origine ammessa che non esiste: " + f);
  /* i documenti del progetto devono dire che levels.js e freq.js sono MIT e che il vocabolario curato è CC BY: se cambiano, si ferma */
  if (!/levels\.js[`, ]+[`]?freq\.js[`]?\s*\|[^|]*complete-hsk-vocabulary[^|]*\|\s*MIT/.test(notice)) problemi.push("NOTICE.md non dichiara più levels.js e freq.js come MIT (complete-hsk-vocabulary)");
  if (!/vocabolario curato[^|]*\|[^|]*\|\s*CC BY 4\.0/.test(notice)) problemi.push("NOTICE.md non dichiara più il vocabolario curato come CC BY 4.0");
  if (!/complete-hsk-vocabulary[^|]*\|\s*MIT/.test(terzi)) problemi.push("THIRD-PARTY-NOTICES.md non dichiara più complete-hsk-vocabulary come MIT");
  for (const row of r.rows) {
    if (!row.hanzi || !row.pinyin || !row.italiano) problemi.push("riga incompleta: " + JSON.stringify(row));
    if (/[\uE000-\uF8FF]/.test(row.italiano + row.nota + row.titolo_sezione)) problemi.push("segnaposto di icona rimasto in: " + row.hanzi);
  }
  const visti = new Set();
  for (const row of r.rows) { const k = [row.sezione, row.hanzi, row.pinyin, row.italiano].join("|"); if (visti.has(k)) problemi.push("riga duplicata: " + k); visti.add(k); }
  const f = fatti();
  if (r.rows.length !== f.corsoDiCinese.parole) problemi.push(`le righe (${r.rows.length}) non coincidono con le parole del corso (${f.corsoDiCinese.parole})`);
  if (!fs.existsSync(path.join(ROOT, "LICENZE/MIT-complete-hsk-vocabulary.txt"))) problemi.push("manca il testo della licenza MIT di complete-hsk-vocabulary");
  return { ...r, problemi, fatti: f };
}

const commit = () => { try { return execFileSync("git", ["rev-parse", "--short", "HEAD"], { cwd: ROOT, encoding: "utf8" }).trim(); } catch (e) { return ""; } };

function scheda(r, impronte) {
  const f = r.fatti, n = r.rows.length, conLiv = r.rows.filter((x) => x.livello_hsk).length, perLiv = [1, 2, 3, 4, 5, 6].map((l) => `${l}: ${r.rows.filter((x) => x.livello_hsk === l).length}`).join(" · ");
  return `---
license: cc-by-4.0
language:
- it
- zh
pretty_name: Vocabolario cinese-italiano HSK 3.0 (màndarínō)
size_categories:
- 1K<n<10K
tags:
- vocabulary
- chinese
- italian
- hsk
- language-learning
- pinyin
---

# ${NOME} · versione ${VERSIONE}

**Italiano.** Il vocabolario cinese-italiano che sta dietro a [màndarínō](https://mandarinoapp.org), l'app gratuita, offline e senza pubblicità per imparare il cinese (per italiani) e l'italiano (per chi parla cinese). ${n} voci con caratteri, pinyin, significato in italiano, sezione tematica, livello HSK 3.0 e posizione nella frequenza d'uso.

**English.** The Chinese–Italian vocabulary behind [màndarínō](https://mandarinoapp.org), a free, offline, ad-free app for learning Chinese (for Italian speakers) and Italian (for Chinese speakers). ${n} entries with Chinese characters, pinyin, Italian meaning, thematic section, HSK 3.0 level and frequency rank.

**中文。** 这是 [màndarínō](https://mandarinoapp.org)（免费、离线、无广告的中文和意大利语学习应用）所用的中意词汇表：共 ${n} 条，含汉字、拼音、意大利语释义、主题分组、HSK 3.0 等级和词频排名。

## Colonne

| Colonna | Che cosa contiene |
|---|---|
| \`hanzi\` | La parola in caratteri semplificati |
| \`pinyin\` | Il pinyin con i segni dei toni, senza i punti che nell'app separano le sillabe |
| \`italiano\` | Il significato in italiano |
| \`nota\` | Una nota d'uso, quando c'è |
| \`sezione\`, \`titolo_sezione\` | La sezione dell'app in cui compare la parola (identificatore e titolo) |
| \`livello_hsk\` | Il livello HSK 3.0, da 1 a 6, secondo complete-hsk-vocabulary; vuoto se la parola è oltre l'HSK 1-6 o non è nella lista (${conLiv} voci hanno un livello: ${perLiv}) |
| \`frequenza_rango\` | La posizione nella frequenza d'uso, dalla più comune (1); vuoto se non è nella lista |

Formati: \`vocabulary.csv\` (UTF-8, virgola, intestazione) e \`vocabulary.json\` (elenco di oggetti).

## Come è stato fatto

Il vocabolario è curato dentro il progetto màndarínō. Il lavoro è stato svolto con l'aiuto di un assistente di intelligenza artificiale (Claude, Anthropic), sotto la direzione dell'autore; ne parliamo apertamente perché in molti paesi la tutela di ciò che produce un'IA è ancora incerta. I controlli sono automatici: ortografia dell'italiano (Hunspell e Morph-it!) e pinyin confrontato con CC-CEDICT, che serve solo come controllo e non è copiato nei dati. I livelli e la frequenza vengono da complete-hsk-vocabulary.

## Limiti noti

- Le voci non sono state riviste una a una da madrelingua cinesi: se ne trovi una sbagliata, [segnalala](https://github.com/longhitown/mandarino/blob/HEAD/CONTRIBUTING.md).
- Una parola può comparire in più sezioni con significati diversi; non c'è una chiave unica per riga.
- Non contiene frasi d'esempio, audio, tratti dei caratteri né la struttura dei radicali: hanno licenze diverse e non fanno parte di questa versione.

## Licenza e come citare

I dati sono pubblicati con la licenza [Creative Commons Attribuzione 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.it). I livelli HSK e la frequenza vengono da complete-hsk-vocabulary (licenza MIT): vedi \`NOTICE.md\`. Il nome «màndarínō» e il logo non sono compresi nella licenza (vedi [MARCHIO.md](https://github.com/longhitown/mandarino/blob/HEAD/MARCHIO.md)).

> màndarínō, di Claudio Longhitano. ${NOME}, versione ${VERSIONE}. https://mandarinoapp.org

Questo dataset è la base del vocabolario dell'applicazione gratuita màndarínō (mandarinoapp.org).

## Provenienza e verifica

Generato da \`tools/dataset.mjs\` del repository https://github.com/longhitown/mandarino alla revisione \`${commit()}\`. Impronte SHA-256 in \`SHA256SUMS.txt\`:

${impronte.map(([n, h]) => `- \`${n}\`: \`${h}\``).join("\n")}
`;
}

function nota() {
  return `# Avvisi e licenze

I dati di ${NOME} sono © 2026 Claudio Longhitano, pubblicati con la licenza CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/legalcode.it): puoi copiarli, ridistribuirli, adattarli e usarli anche a fini commerciali, citando «màndarínō, di Claudio Longhitano», con il link alla licenza e indicando se hai fatto modifiche.

Le colonne \`livello_hsk\` e \`frequenza_rango\` sono ricavate da complete-hsk-vocabulary (https://github.com/drkameleon/complete-hsk-vocabulary), che ha la licenza MIT. Il suo avviso è qui sotto e va conservato in ogni copia sostanziale.

---

${rd("LICENZE/MIT-complete-hsk-vocabulary.txt").trim()}
`;
}

export function costruisci() {
  const r = controlla();
  if (r.problemi.length) throw new Error("dataset non esportabile:\n  " + r.problemi.slice(0, 20).join("\n  "));
  const cols = ["hanzi", "pinyin", "italiano", "nota", "sezione", "titolo_sezione", "livello_hsk", "frequenza_rango"];
  const CSV = [cols.join(","), ...r.rows.map((x) => cols.map((c) => csv(x[c])).join(","))].join("\n") + "\n";
  const JSONF = JSON.stringify(r.rows.map((x) => Object.fromEntries(cols.map((c) => [c, x[c]]))), null, 1) + "\n";
  const NOTE = nota();
  const base = [["vocabulary.csv", CSV], ["vocabulary.json", JSONF], ["NOTICE.md", NOTE]];
  const impronte = base.map(([n, d]) => [n, sha(d)]);
  const README = scheda(r, impronte);
  const files = [...base, ["README.md", README], ["SHA256SUMS.txt", impronte.map(([n, h]) => `${h}  ${n}`).join("\n") + "\n"]];
  return { files, righe: r.rows.length, fatti: r.fatti };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const solo = process.argv.includes("--controlla");
  try {
    const d = costruisci();
    if (!solo) { fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true }); for (const [n, c] of d.files) fs.writeFileSync(path.join(OUT, n), c); }
    console.log(`✓ dataset ${NOME} ${VERSIONE}: ${d.righe} voci${solo ? " (controllo, niente scritto)" : " in dist-dataset/"}`);
    const prima = rd("THIRD-PARTY-NOTICES.md").includes("commit non annotato");
    if (prima) console.log("  · da fare prima di pubblicare: il commit di complete-hsk-vocabulary non è annotato (THIRD-PARTY-NOTICES.md): rilancia node tools/levels.mjs e annota la versione");
  } catch (e) { console.error("✗ " + e.message); process.exit(1); }
}
