#!/usr/bin/env node
/* màndarínō · le pagine «di persona» del sito: l'autore (italiano e cinese) e il confronto con le altre app.

   Sono scritte a mano (non vengono dai dati dell'app, come le lezioni di tools/pagine.mjs), ma i numeri arrivano da docs/fatti.json
   e le celle del confronto da docs/ai/confronto.json, dove ogni dato ha la sua fonte e la data di lettura.
   Usate da tools/site.mjs; node tools/pagine-sito.mjs stampa quante pagine genera. */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { SITE, ID, build, facts, fill } from "./seo.mjs";
import { esc, inl, T, shell, cta, table, APK } from "./pagine.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const GH = "https://github.com/longhitown/mandarino";

/* ---------- l'autore ---------- */
const BIO = {
  it: {
    title: "Claudio Longhitano, ideatore e autore di màndarínō", h1: "Claudio Longhitano",
    paras: [
      "Sono Claudio Longhitano, ideatore e autore di màndarínō.",
      "Laureato in Scienze Internazionali all'Università di Torino, opero da anni nel campo della comunicazione, della linguistica applicata e della mediazione culturale (nel senso che faccio il markettaro. Ma a volte sono pure bravo.).",
      "màndarínō nasce da una convinzione precisa: lo studio di una lingua tramite app non deve monetizzare l'attenzione, sottrarre dati personali o imporre barriere economiche e psicologiche. Per questo il software è interamente open source, gratuito, fruibile al 100% offline e privo di account o tracciamento.",
      "Non essendo uno sviluppatore software tradizionale, ma un fiero vibe coder (lo so, lo so: mi faccio schifo da solo a dirlo) ho progettato e costruito màndarínō dirigendo modelli avanzati di intelligenza artificiale:",
      "L'architettura dell'applicazione è stata progettata e sviluppata combinando competenze umanistiche con strumenti di ultima generazione, adottati con un metodo rigoroso di prompting tecnico, verifica manuale del codice (si ringraziano gli amici ingegneri sfruttati durante la costruzione dell'app) e controllo delle fonti lessicali sullo standard HSK 3.0 (si ringraziano le librerie gratuite ed open source e gli amici sfruttati anche qui).",
      "Il progetto è un'opera viva in costante evoluzione: la revisione didattica e l'ampliamento dei contenuti seguono un modello aperto e collaborativo. Il codice sorgente e la segnalazione dei contributi sono liberamente accessibili su GitHub.",
      "Se trovi imprecisioni o vuoi contribuire a migliorare le lezioni, la porta è sempre aperta sul nostro repository GitHub."
    ],
    contact: "Contatti e profili", contactLines: [["GitHub (profilo)", "https://github.com/longhitown"], ["GitHub (progetto)", GH]], mail: "Scrivimi: ",
    src: "Fonti e licenze", srcIntro: "I dati e i componenti di terzi usati da màndarínō sono elencati con licenza e indirizzo nel file delle note sulle licenze del progetto. Questi i principali:",
    heads: ["Fonte", "A che cosa serve", "Licenza"], capt: "Fonti principali di màndarínō e relative licenze", all: "Elenco completo delle licenze",
    rows: [
      ["Make Me a Hanzi", "Ordine dei tratti e struttura dei caratteri", "Arphic Public License; LGPL 3.0"],
      ["complete-hsk-vocabulary", "Livelli HSK delle parole", "MIT"],
      ["Tatoeba", "Frasi d'esempio cinese-italiano e voci italiane", "CC BY 2.0 Francia; CC BY 4.0"],
      ["Mozilla Common Voice", "Voci in cinese per l'ascolto", "CC0"],
      ["Morph-it!", "Genere, plurale e forme dell'italiano", "LGPL (doppia licenza CC BY-SA 2.0)"],
      ["py-fsrs (Open Spaced Repetition)", "Algoritmo di ripasso a intervalli FSRS", "MIT"],
      ["wikidict-it (dati di Wikidata)", "Traduzioni di supporto", "CC0 1.0"]
    ],
    alt: "Versione in cinese"
  },
  zh: {
    title: "Claudio Longhitano，màndarínō 的发起人和作者", h1: "Claudio Longhitano",
    paras: [
      "我是 Claudio Longhitano，màndarínō 的发起人和作者。",
      "我毕业于都灵大学国际科学专业（Scienze Internazionali），多年来从事传播、应用语言学和文化沟通工作（说白了，就是做营销的。不过有时候我也挺在行）。",
      "màndarínō 源于一个明确的信念：通过应用学习语言，不应该把用户的注意力变现，不应该获取个人数据，也不应该设置经济或心理上的门槛。因此，这款软件完全开源、永久免费、可 100% 离线使用，没有账号，也不追踪用户。",
      "我不是传统意义上的软件开发者，而是一个自豪的“氛围编程者”（vibe coder；我知道我知道，自己说出来都嫌弃自己）。我通过指挥先进的人工智能模型，设计并构建了 màndarínō：",
      "应用的架构融合了人文学科的素养与最新一代的工具，并采用严谨的方法：技术性提示、人工代码审查（感谢在开发期间被我“压榨”的工程师朋友们），以及依据 HSK 3.0 标准核对词汇来源（感谢免费开源的软件库，以及同样被我“压榨”的朋友们）。",
      "这个项目是一部不断演进的“活作品”：教学内容的审校和扩充遵循开放协作的模式。源代码和贡献记录都可以在 GitHub 上自由查看。",
      "如果你发现不准确之处，或者想帮助改进课程，我们在 GitHub 仓库的大门始终敞开。"
    ],
    contact: "联系方式和主页", contactLines: [["GitHub（个人主页）", "https://github.com/longhitown"], ["GitHub（项目）", GH]], mail: "邮箱：",
    src: "数据来源与许可", srcIntro: "màndarínō 使用的第三方数据和组件，都在项目的许可说明文件中列出了许可证和地址。主要的有：",
    heads: ["来源", "用途", "许可"], capt: "màndarínō 的主要数据来源及许可", all: "完整的许可清单",
    rows: [
      ["Make Me a Hanzi", "笔顺和汉字结构", "Arphic Public License；LGPL 3.0"],
      ["complete-hsk-vocabulary", "词汇的 HSK 等级", "MIT"],
      ["Tatoeba", "中意例句和意大利语语音", "CC BY 2.0 France；CC BY 4.0"],
      ["Mozilla Common Voice", "中文听力语音", "CC0"],
      ["Morph-it!", "意大利语的词性、复数和词形", "LGPL（双重许可，另有 CC BY-SA 2.0）"],
      ["py-fsrs (Open Spaced Repetition)", "FSRS 间隔复习算法", "MIT"],
      ["wikidict-it（Wikidata 数据）", "辅助翻译", "CC0 1.0"]
    ],
    alt: "Versione italiana"
  }
};

function autorePage(lang) {
  const zh = lang === "zh", t = zh ? T.zh : T.it, b = BIO[lang], path_ = zh ? "/zh/autore/" : "/autore/", url = SITE + path_;
  const desc = b.paras[0] + " " + (zh ? "màndarínō 是免费、开源、可离线使用的中文和意大利语学习应用。" : "màndarínō è un'app gratuita, open source e offline per imparare cinese e italiano.");
  const body = `<article>
<header><h1>${esc(b.h1)}</h1>
<p class="resp">${esc(b.paras[0])}</p></header>
<section><h2>${zh ? "关于我和 màndarínō" : "Chi sono e come è nato màndarínō"}</h2>
${b.paras.slice(1).map((p) => `<p>${esc(p)}</p>`).join("\n")}</section>
<section><h2>${b.contact}</h2>
<address><ul>${b.contactLines.map(([n, u]) => `<li><a ${u.endsWith("/longhitown") ? 'rel="me" ' : ""}href="${u}">${esc(n)}</a></li>`).join("")}<li>${esc(b.mail)}<a href="mailto:mandarinoapp@gmail.com">mandarinoapp@gmail.com</a></li></ul></address></section>
<section><h2>${b.src}</h2>
<p>${esc(b.srcIntro)}</p>
${table(b.capt, b.heads, b.rows, (c) => esc(c))}
<p><a href="${GH}/blob/HEAD/THIRD-PARTY-NOTICES.md">${esc(b.all)}</a></p></section>
</article>
<p><a href="${zh ? "/autore/" : "/zh/autore/"}" hreflang="${zh ? "it" : "zh-CN"}" lang="${zh ? "it" : "zh-CN"}">${esc(b.alt)}</a></p>
${cta(t, zh ? "màndarínō" : "màndarínō")}`;
  const alts = [["it", SITE + "/autore/"], ["zh-CN", SITE + "/zh/autore/"], ["x-default", SITE + "/autore/"]];
  return { path: path_, html: shell({ t, url, title: b.title, desc, body, crumbs: [[t.crumbHome, "/"], [zh ? "作者" : "Autore", path_]], nodes: [], alts, type: "ProfilePage", main: ID.person }), lang: t.lang, kind: "author", sources: ["tools/pagine-sito.mjs"] };
}

/* ---------- i confronti (italiano: per chi impara il cinese; cinese: per chi impara l'italiano) ----------
   I testi e i dati stanno in docs/ai/confronto.json e docs/ai/confronto-zh.json: qui si assembla solo la pagina. */
const FILES = { it: "docs/ai/confronto.json", zh: "docs/ai/confronto-zh.json" };
export function confronto(lang = "it") { return JSON.parse(fs.readFileSync(path.join(ROOT, FILES[lang]), "utf8")); }
export const CONFRONTO_PATH = confronto("it").path;
const fmtDate = (d, lang) => lang === "zh" ? d.replace(/^(\d+)-0?(\d+)-0?(\d+)$/, "$1年$2月$3日") : new Date(d + "T12:00:00Z").toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const joinNames = (names, lang) => lang === "zh" ? names.slice(0, -1).join("、") + " 和 " + names[names.length - 1] : names.slice(0, -1).join(", ") + " e " + names[names.length - 1];
/* segnaposto: {{data}}, {{altre}}, {{totale}} del confronto, e {{chiave.dei.fatti}} di docs/fatti.json */
const sub = (s, v, f) => fill(String(s).replace(/\{\{(data|altre|totale)\}\}/g, (m, k) => v[k]), f);

function confrontoPage(lang) {
  const zh = lang === "zh", t = zh ? T.zh : T.it, C = confronto(lang), X = C.testi, f = facts() || {}, url = SITE + C.path, apps = C.app;
  const v = { data: fmtDate(C.verificatoIl, lang), altre: joinNames(apps.slice(1).map((a) => a.nome), lang), totale: String(apps.length) };
  const S = (s) => sub(s, v, f);
  const rows = C.righe.map((r) => [r.titolo, ...apps.map((a) => S(r.celle[a.id].t))]);
  const faq = C.faq.map(([q, a]) => [S(q), S(a)]);
  const li = (arr) => `<ul>${arr.map((x) => `<li>${esc(S(x))}</li>`).join("")}</ul>`;
  const body = `<article>
<header><h1>${esc(X.h1)}</h1>
<p class="resp">${esc(S(X.resp))}</p></header>
<section><h2>${esc(X.perche.titolo)}</h2>
<p>${esc(X.perche.intro)}</p>
${li(X.perche.voci)}</section>
<section><h2>${esc(X.tabellaTitolo)}</h2>
<p>${esc(X.tabellaIntro)}</p>
${table(S(X.caption), [X.criterio, ...apps.map((a) => a.nome)], rows, (c) => esc(c)).replace("<table>", '<table class="wide">')}
${li(X.avvisi)}</section>
<section><h2>${esc(X.limiti.titolo)}</h2>
<p>${esc(X.limiti.intro)}</p>
${li(X.limiti.voci)}
<p class="resp">${esc(X.limiti.cta)}</p>
<p><a class="btn" href="${X.limiti.url}">${esc(X.limiti.bottone)}</a><a class="btn g" href="/app/">${esc(t.open)}</a></p></section>
<section><h2>${esc(X.faqTitolo)}</h2>
${faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join("\n")}</section>
<section><h2>${esc(X.fontiTitolo)}</h2>
<ul>${apps.map((a) => `<li>${esc(a.nome)}: <a href="${a.fonte}" rel="noopener">${esc(a.fonte)}</a></li>`).join("")}</ul></section>
</article>
${cta(t, S(X.cta))}`;
  const nodes = [build("FAQPage", { url, questions: faq.map(([q, a]) => ({ q, a, lang: t.lang })) })];
  return { path: C.path, html: shell({ t, url, title: X.title, desc: S(X.resp), body, crumbs: [[t.crumbHome, "/"], [X.crumb, C.path]], nodes, modified: C.verificatoIl }), lang: t.lang, kind: "confronto", sources: [FILES[lang]] };
}

export function paginePersona() { return [autorePage("it"), autorePage("zh"), confrontoPage("it"), confrontoPage("zh")]; }

/* la tabella corta per la home (una riga per criterio, testo breve); lo stesso dato del confronto completo, in sintesi */
export function tabellaHome(lang = "it") {
  const zh = lang === "zh", C = confronto(lang), f = facts() || {}, apps = C.app, quando = fmtDate(C.verificatoIl, lang);
  const ids = zh ? ["costo", "pubblicita", "offline", "dati", "cinese"] : ["costo", "pubblicita", "offline", "dati", "hsk"];
  const pick = C.righe.filter((r) => ids.includes(r.id));
  const cap = sub(C.testi.caption, { data: quando }, f);
  return { quando, home: C.home, path: C.path, html: `<div class="tw"><table class="cmp"><caption>${esc(cap)}</caption><thead><tr><th scope="col">${esc(C.testi.criterio)}</th>${apps.map((a) => `<th scope="col"${a.nostra ? ' class="us"' : ""}>${esc(a.nome)}</th>`).join("")}</tr></thead><tbody>
${pick.map((r) => `<tr><th scope="row">${esc(r.titolo.replace(/[（(].*[）)]$/, "").trim())}</th>${apps.map((a) => `<td${a.nostra ? ' class="us"' : ""}>${esc(sub(r.celle[a.id].b, {}, f))}</td>`).join("")}</tr>`).join("\n")}
</tbody></table></div>` };
}

/* la sezione intera della home (italiano o cinese): titolo, frase d'apertura, tabella corta e bottone verso il confronto completo */
export function sezioneHome(lang = "it") {
  const t = tabellaHome(lang), H = t.home, v = { data: t.quando }, f = facts() || {};
  return `<span class="eyebrow rv">${esc(H.eyebrow)}</span>
    <h2 class="rv">${esc(H.h2)}</h2>
    <p class="lede rv">${esc(sub(H.lede, v, f))}</p>
    ${t.html}
    <p class="note rv"><a class="btn ghost" href="${t.path.slice(1)}">${esc(H.bottone)}</a></p>`;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const p = paginePersona(); console.log("✓ " + p.length + " pagine: " + p.map((x) => x.path).join(" "));
  void APK; void inl;
}
