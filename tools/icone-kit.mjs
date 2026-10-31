#!/usr/bin/env node
/* màndarínō · kit grafico e adesivi delle icone: dal set di icone/ costruisce, in dist-kit/ (non si committa), due pacchetti .zip pronti da pubblicare:
     mandarino-icone-<versione>.zip      gli SVG, i PNG a 96 e 512 px (trasparenti), lo sprite, il manifest, le somme SHA-256, la licenza
     mandarino-adesivi-<versione>.zip    gli adesivi a sagoma (bordo carta di riso) in WebP 512 × 512 e PNG, pronti per Telegram e WhatsApp
   più SHA256SUMS-kit.txt con le somme dei due pacchetti, da incollare in icone/ICONE.md a ogni release.
   Nessuna dipendenza nuova: le immagini le disegna il Chromium di Playwright (già nel progetto) e lo zip lo scrive questo file (stesso input = stessi byte).
   node tools/icone-kit.mjs            tutto
   node tools/icone-kit.mjs --prova    solo cinque icone, per provare */
import fs from "fs";
import path from "path";
import zlib from "zlib";
import crypto from "crypto";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), ".."), DIR = path.join(ROOT, "icone"), OUT = path.join(ROOT, "dist-kit");
const M = JSON.parse(fs.readFileSync(path.join(DIR, "manifest.json"), "utf8"));
const args = process.argv.slice(2), PROVA = args.includes("--prova");
const icons = M.icone.filter((i) => i.file).slice(0, PROVA ? 5 : 1e9);
const rd = (f) => fs.readFileSync(path.join(DIR, f));
const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");

/* ---- zip minimo e riproducibile: stessi file = stessi byte (data fissa, ordine alfabetico) ---- */
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = (b) => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
function zip(files) {
  const DOS_TIME = 0, DOS_DATE = ((2026 - 1980) << 9) | (1 << 5) | 1;   /* 1 gennaio 2026, 00:00 */
  const parts = [], central = []; let off = 0;
  for (const f of files.slice().sort((a, b) => a.name.localeCompare(b.name))) {
    const name = Buffer.from(f.name, "utf8"), raw = f.data, def = zlib.deflateRawSync(raw, { level: 9 }), use = def.length < raw.length ? def : raw, method = use === def ? 8 : 0, crc = crc32(raw);
    const h = Buffer.alloc(30); h.writeUInt32LE(0x04034b50, 0); h.writeUInt16LE(20, 4); h.writeUInt16LE(0x0800, 6); h.writeUInt16LE(method, 8); h.writeUInt16LE(DOS_TIME, 10); h.writeUInt16LE(DOS_DATE, 12); h.writeUInt32LE(crc, 14); h.writeUInt32LE(use.length, 18); h.writeUInt32LE(raw.length, 22); h.writeUInt16LE(name.length, 26);
    parts.push(h, name, use);
    const c = Buffer.alloc(46); c.writeUInt32LE(0x02014b50, 0); c.writeUInt16LE(20, 4); c.writeUInt16LE(20, 6); c.writeUInt16LE(0x0800, 8); c.writeUInt16LE(method, 10); c.writeUInt16LE(DOS_TIME, 12); c.writeUInt16LE(DOS_DATE, 14); c.writeUInt32LE(crc, 16); c.writeUInt32LE(use.length, 20); c.writeUInt32LE(raw.length, 24); c.writeUInt16LE(name.length, 28); c.writeUInt32LE(off, 42);
    central.push(c, name); off += 30 + name.length + use.length;
  }
  const cd = Buffer.concat(central), end = Buffer.alloc(22); end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10); end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(off, 16);
  return Buffer.concat([...parts, cd, end]);
}

/* ---- le immagini: l'SVG del set, disegnato dal Chromium di Playwright ---- */
const inner = (s) => s.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").replace(/\s*<title[^>]*>[\s\S]*?<\/title>/, "").trim();
const wrap = (body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
const sticker = (s) => { const b = inner(s), out = b.replace(/style="[^"]*"/g, 'style="fill:#FAF7EE;stroke:#FAF7EE;stroke-width:5.2"'); return wrap(`<g transform="translate(12 12) scale(.82) translate(-12 -12)">${out}${b}</g>`); };

const { chromium } = createRequire(import.meta.url)("playwright");
const browser = await chromium.launch(), page = await browser.newPage();
await page.setContent("<!doctype html><meta charset=utf-8><body></body>");
const draw = (svgText, size, mime) => page.evaluate(async ([svgText, size, mime]) => {
  const img = new Image(); await new Promise((ok, ko) => { img.onload = ok; img.onerror = () => ko(new Error("svg")); img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgText); });
  const c = document.createElement("canvas"); c.width = c.height = size; const x = c.getContext("2d"); x.clearRect(0, 0, size, size); x.drawImage(img, 0, 0, size, size);
  return c.toDataURL(mime, 0.92).split(",")[1];
}, [svgText, size, mime]);
const buf = async (svgText, size, mime) => Buffer.from(await draw(svgText, size, mime), "base64");

const V = M.versione, LIC = fs.readFileSync(path.join(ROOT, "LICENZE/ICONE.txt"));
const kit = [], adesivi = [], stk = {};
for (const i of icons) {
  const s = rd(i.file).toString("utf8"), plain = wrap(inner(s)), st = sticker(s);
  kit.push({ name: `svg/${i.categoria}/${i.id}.svg`, data: rd(i.file) }, { name: `png/512/${i.id}.png`, data: await buf(plain, 512, "image/png") }, { name: `png/96/${i.id}.png`, data: await buf(plain, 96, "image/png") });
  const web = await buf(st, 512, "image/webp");
  if (web.length > 512 * 1024) throw new Error(`${i.id}: adesivo troppo pesante (${web.length} byte, Telegram accetta fino a 512 KB)`);
  stk[i.id] = web;
  adesivi.push({ name: `webp/${i.id}.webp`, data: web }, { name: `png/${i.id}.png`, data: await buf(st, 512, "image/png") });
}
/* i pacchetti già pronti da caricare: Telegram (fino a 120 adesivi statici per pacchetto) e WhatsApp (da 3 a 30, con un'icona 96 × 96 per pacchetto) */
const tray = await buf(wrap(inner(rd(M.icone.find((i) => i.id === "mandarin").file).toString("utf8"))), 96, "image/png");
const ORD = ["ui", "comunita", "vita", "studio"], sorted = icons.slice().sort((a, b) => ORD.indexOf(a.categoria) - ORD.indexOf(b.categoria));
const TG = [["telegram/1-interfaccia-e-vita", sorted.filter((i) => i.categoria !== "studio")], ["telegram/2-studio", sorted.filter((i) => i.categoria === "studio")]].filter((p) => p[1].length);
const nWa = Math.ceil(sorted.length / 30), wa = []; for (let k = 0; k < nWa; k++) wa.push([`whatsapp/${k + 1}-di-${nWa}`, sorted.slice(Math.floor(k * sorted.length / nWa), Math.floor((k + 1) * sorted.length / nWa))]);
const emo = (i) => (i.emoji && i.emoji[0]) || "🍊";
for (const [dir, L] of TG.concat(wa)) {
  for (const i of L) adesivi.push({ name: `${dir}/${i.id}.webp`, data: stk[i.id] });
  adesivi.push({ name: `${dir}/ELENCO.tsv`, data: Buffer.from(L.map((i) => `${i.id}.webp\t${emo(i)}\t${i.it}`).join("\n") + "\n", "utf8") });
  if (dir.startsWith("whatsapp")) adesivi.push({ name: `${dir}/tray.png`, data: tray });
}
await browser.close();
const nomi = icons.map((i) => `${i.id}\t${i.it}\t${i.zh}`).join("\n") + "\n";
kit.push({ name: "sprite.svg", data: rd("sprite.svg") }, { name: "manifest.json", data: rd("manifest.json") }, { name: "LICENZA.txt", data: LIC },
  { name: "LEGGIMI.txt", data: Buffer.from(`Icone màndarínō ${V} (${M.set}), ${icons.length} icone\n© ${M.autore}, ${M.licenza} · https://mandarinoapp.org\n\nsvg/        un file per icona, 24 × 24 (i colori sono tre variabili CSS con i valori di riserva dentro il file)\npng/512/    trasparenti, 512 × 512 · png/96/ a 96 × 96\nsprite.svg  tutte le icone in un file, con <symbol id="i-nome">\nmanifest.json  nomi in italiano e cinese, categorie\n\nCitare così: Icone màndarínō, di ${M.autore}, CC BY 4.0 · https://mandarinoapp.org\nIl nome «màndarínō» e il logo non sono compresi nella licenza: MARCHIO.md nel repository.\nVerifica: confronta la somma SHA-256 di questo file zip con quella in icone/ICONE.md.\n`, "utf8") });
adesivi.push({ name: "LICENZA.txt", data: LIC }, { name: "ELENCO.tsv", data: Buffer.from(nomi, "utf8") },
  { name: "LEGGIMI.txt", data: Buffer.from(`Adesivi màndarínō ${V}: ${icons.length} adesivi a sagoma\n© ${M.autore}, ${M.licenza} · https://mandarinoapp.org\n\nwebp/  WebP 512 × 512 trasparenti, sotto i 512 KB: il formato che chiede Telegram (e WhatsApp, con l'app che li aggiunge)\npng/   gli stessi in PNG\n\ntelegram/   i pacchetti già divisi (fino a 120 adesivi ciascuno) · whatsapp/  i pacchetti da 30 al massimo, con tray.png (96 × 96)\nOgni cartella ha il suo ELENCO.tsv: nome del file, emoji da associare (Telegram la chiede per la ricerca) e nome.\n\nCome si aggiungono: icone/ADESIVI.md nel repository (passo passo).\n`, "utf8") });

fs.mkdirSync(OUT, { recursive: true });
const A = `mandarino-icone-${V}.zip`, B = `mandarino-adesivi-${V}.zip`, za = zip(kit), zb = zip(adesivi);
fs.writeFileSync(path.join(OUT, A), za); fs.writeFileSync(path.join(OUT, B), zb);
fs.writeFileSync(path.join(OUT, "SHA256SUMS-kit.txt"), `${sha(za)}  ${A}\n${sha(zb)}  ${B}\n`);
console.log(`✓ ${A}: ${kit.length} file, ${(za.length / 1024).toFixed(0)} KB\n✓ ${B}: ${adesivi.length} file, ${(zb.length / 1024).toFixed(0)} KB\n✓ SHA256SUMS-kit.txt`);
