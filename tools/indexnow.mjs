#!/usr/bin/env node
/* màndarínō · IndexNow: dice ai motori di ricerca che aderiscono (Bing, Yandex, Naver, Seznam…) quali pagine sono nuove o cambiate.

   Non parte mai da solo: lo lanci tu, a mano, dopo che il sito è stato pubblicato.
   Google non aderisce a IndexNow: per Google valgono la sitemap e l'«Ispezione URL» di Search Console.

     node tools/indexnow.mjs                    mostra che cosa invierebbe (nessuna richiesta di rete)
     node tools/indexnow.mjs --invia            invia gli indirizzi della sitemap pubblicata
     node tools/indexnow.mjs --invia --url https://mandarinoapp.org/ …    invia solo questi
     node tools/indexnow.mjs --chiave           crea la chiave se non esiste (una volta sola)

   La chiave è un file di testo pubblico nella radice del sito (docs/<chiave>.txt, copiato da tools/site.mjs): per il protocollo
   non è un segreto, serve a dimostrare che il sito è tuo. Prima di inviare lo script controlla che il file sia raggiungibile
   sul sito vero, e legge la sitemap pubblicata (https://mandarinoapp.org/sitemap.xml), così invia solo ciò che è davvero online. */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "mandarinoapp.org", SITE = "https://" + HOST;
const args = process.argv.slice(2), has = (a) => args.includes(a);
const KEYFILE = /^[a-f0-9]{32}\.txt$/;
const found = () => fs.readdirSync(path.join(ROOT, "docs")).find((f) => KEYFILE.test(f));

if (has("--chiave")) {
  if (found()) console.log("✓ la chiave c'è già: docs/" + found());
  else { const k = crypto.randomBytes(16).toString("hex"); fs.writeFileSync(path.join(ROOT, "docs", k + ".txt"), k); console.log("✓ chiave creata: docs/" + k + ".txt (committala: è pubblica per progetto)"); }
  process.exit(0);
}

const file = found();
if (!file) { console.error("✗ nessuna chiave: lancia prima node tools/indexnow.mjs --chiave"); process.exit(1); }
const key = file.replace(/\.txt$/, ""), keyLocation = `${SITE}/${file}`;
if (fs.readFileSync(path.join(ROOT, "docs", file), "utf8").trim() !== key) { console.error("✗ il contenuto di docs/" + file + " deve essere solo la chiave"); process.exit(1); }

let urls;
const i = args.indexOf("--url");
if (i >= 0) urls = args.slice(i + 1).filter((a) => !a.startsWith("--"));
else {
  const r = await fetch(SITE + "/sitemap.xml").catch(() => null);
  if (!r || !r.ok) { console.error("✗ non riesco a leggere " + SITE + "/sitemap.xml (il sito è pubblicato?)"); process.exit(1); }
  urls = [...(await r.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
urls = [...new Set(urls)].filter((u) => { try { return new URL(u).hostname === HOST; } catch (e) { return false; } });
if (!urls.length) { console.error("✗ nessun indirizzo da inviare"); process.exit(1); }
console.log(`${urls.length} indirizzi di ${HOST}; chiave: ${keyLocation}`);
if (!has("--invia")) { console.log("(prova: non ho inviato niente. Aggiungi --invia per inviare)"); urls.slice(0, 5).forEach((u) => console.log("  " + u)); if (urls.length > 5) console.log("  …"); process.exit(0); }

const live = await fetch(keyLocation).then((r) => (r.ok ? r.text() : "")).catch(() => "");
if (live.trim() !== key) { console.error("✗ " + keyLocation + " non è raggiungibile o non contiene la chiave: pubblica prima il sito con il file della chiave"); process.exit(1); }
for (let n = 0; n < urls.length; n += 10000) {
  const r = await fetch("https://api.indexnow.org/IndexNow", { method: "POST", headers: { "content-type": "application/json; charset=utf-8" }, body: JSON.stringify({ host: HOST, key, keyLocation, urlList: urls.slice(n, n + 10000) }) });
  console.log(`${r.status === 200 || r.status === 202 ? "✓" : "✗"} blocco ${n / 10000 + 1}: risposta ${r.status} ${r.statusText} (200/202 = accettato)`);
  if (r.status !== 200 && r.status !== 202) process.exit(1);
}
