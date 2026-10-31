#!/usr/bin/env node
/* màndarínō · le pagine statiche del sito, generate dai dati dell'app.

   Le 55 lezioni di cinese, le 51 di italiano per chi parla cinese e le 220 sezioni di vocabolario diventano pagine HTML vere,
   leggibili senza JavaScript, dentro il sito (non nell'app): chi cerca «il verbo essere in cinese» o «意大利语冠词» trova la
   lezione, con gli esempi e gli esercizi, e da lì può aprire l'app. Ogni pagina nasce dagli stessi file che alimentano l'app
   (src/data/…): niente testo scritto due volte, niente numeri a mano.

   Come sono fatte (pensate per essere estratte a pezzi da un motore di ricerca o da un assistente):
   - sotto ogni titolo (h2/h3) c'è un paragrafo che si capisce da solo: soggetto, verbo e complemento espliciti, nessun «questo»;
   - dati in tabelle HTML vere (esempi, dialoghi, errori tipici, parole), mai in elenchi di testo;
   - domande in h3, scritte come le direbbe una persona, con la risposta subito sotto;
   - ogni pagina ha il proprio indirizzo canonico (si indicizza da sola: non rimanda alla home), JSON-LD, breadcrumb e link alle vicine;
   - nessuno script e nessuna risorsa esterna: l'unica uscita è il bottone per aprire l'app o scaricare l'APK.

   Usato da tools/site.mjs. Da solo: node tools/pagine.mjs  → stampa quante pagine genera e controlla i limiti. */
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { load } from "./lib/data.mjs";
import { SITE, build, graph, ldScript, facts } from "./seo.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
export const APK = "https://github.com/longhitown/mandarino/releases/latest/download/mandarino.apk";

/* ---------- testi ---------- */
export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const CJK = /[　-〿㐀-鿿＀-￯]+/g;
const lc = (s) => s.charAt(0).toLowerCase() + s.slice(1);
const flat = (s) => String(s).replace(/\*\*/g, "");
/* **grassetto**; nelle pagine in italiano i caratteri cinesi prendono lang="zh-CN" (lettori di schermo, motori di ricerca) */
export const inl = (s, wrap) => { let h = esc(s).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>"); if (wrap) h = h.replace(CJK, (m) => `<span lang="zh-CN">${m}</span>`); return h; };
const py = (p) => String(p).replace(/\./g, "");
const slug = (id) => String(id).replace(/_/g, "-");

export const T = {
  it: {
    lang: "it", crumbHome: "Home", course: "Corso di cinese per italiani", courseDesc: "Corso di cinese mandarino per italiani, gratuito e offline: lezioni di grammatica con esempi, dialoghi, errori tipici ed esercizi.",
    lessonsHub: "Lezioni di grammatica cinese", wordsHub: "Parole di cinese", open: "Apri l'app", apk: "Scarica l'APK per Android",
    ctaTitle: "Esercitati offline con l'app", ctaText: (what) => `${what} è nell'app màndarínō, con esercizi e ripasso a intervalli. L'app è gratuita, funziona senza connessione, non ha pubblicità e non chiede di registrarsi.`,
    foot: "màndarínō è gratuita, offline e senza pubblicità. I progressi restano sul tuo dispositivo.", prev: "Lezione precedente", next: "Lezione successiva", all: "Tutte le lezioni"
  },
  zh: {
    lang: "zh-CN", crumbHome: "首页", course: "意大利语课程（给说中文的人）", courseDesc: "给说中文的人学意大利语的免费离线课程：语法课、例句、对话、常见错误和练习。",
    lessonsHub: "意大利语语法课程", open: "打开应用", apk: "下载安卓 APK",
    ctaTitle: "用应用离线练习", ctaText: (what) => `${what}在 màndarínō 应用里有配套练习和间隔复习。应用免费，无需联网，没有广告，也不需要注册。`,
    foot: "màndarínō 免费、离线、无广告。学习进度只保存在你的设备上。", prev: "上一课", next: "下一课", all: "全部课程"
  }
};

export const CSS = `:root{--bg:#F5F7F5;--ink:#16201B;--mute:#4A5A52;--accent:#14594A;--line:#D5DED9;--card:#fff;--btn:#14594A;--btnink:#fff}
@media (prefers-color-scheme:dark){:root{--bg:#0F1412;--ink:#E9EFEB;--mute:#A9B8B0;--accent:#5CC4A5;--line:#2A3530;--card:#18201C;--btn:#5CC4A5;--btnink:#0F1412}}
body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.65 system-ui,-apple-system,"Segoe UI",Roboto,"PingFang SC","Noto Sans CJK SC","Microsoft YaHei",sans-serif}
main{max-width:780px;margin:0 auto;padding:16px 16px 56px}a{color:var(--accent)}a:focus-visible,summary:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.nav{font-size:.92rem;color:var(--mute)}.nav a{display:inline-block;min-height:44px;line-height:44px}h1{font-size:1.8rem;line-height:1.25;margin:.4em 0}h2{margin-top:2em;font-size:1.3rem}h3{font-size:1.05rem;margin:1.4em 0 .2em}
.resp{font-size:1.1rem;border-left:4px solid var(--accent);padding:.2em 0 .2em 12px;margin:1em 0}.pat{font-weight:600}
.tw{overflow-x:auto}table{border-collapse:collapse;width:100%;font-size:.95rem;background:var(--card)}caption{text-align:left;color:var(--mute);padding:6px 0;font-size:.88rem}
th,td{border:1px solid var(--line);padding:6px 8px;text-align:left;vertical-align:top}th{background:rgba(127,127,127,.12)}
details{margin:.4em 0;border:1px solid var(--line);border-radius:8px;padding:6px 10px;background:var(--card)}summary{cursor:pointer;min-height:32px}
.cta{margin:2.2em 0;padding:16px;border:2px solid var(--accent);border-radius:12px;background:var(--card)}.cta h2{margin:0 0 .3em;font-size:1.2rem}
.btn{display:inline-block;min-height:44px;line-height:44px;padding:0 18px;margin:6px 8px 0 0;border-radius:10px;background:var(--btn);color:var(--btnink);font-weight:700;text-decoration:none}.btn.g{background:transparent;color:var(--accent);border:2px solid var(--accent);line-height:40px}
.pn{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:2em}.pn a{display:inline-block;min-height:44px;line-height:44px}footer{margin-top:3em;color:var(--mute);font-size:.88rem}
ol.opt{margin:.2em 0 .4em}
table.wide{min-width:820px}table.wide td{min-width:130px}table.wide th:first-child,table.wide td:first-child{position:sticky;left:0;background:var(--card);min-width:110px}`;

/* ---------- l'involucro di ogni pagina ---------- */
export function shell({ t, url, title, desc, body, crumbs, nodes, modified, alts, type, main }) {
  const nav = crumbs.map(([n, u], i) => (i < crumbs.length - 1 ? `<a href="${u}">${esc(n)}</a>` : esc(n))).join(" › ");
  const g = graph([build("Organization", { lang: t.lang }), build("WebSite", { lang: t.lang }), build("Person"),
    build("WebPage", { url, name: title, description: desc, lang: t.lang, breadcrumb: true, modified, type, main, image: SITE + "/img/anteprima.png" }),
    build("BreadcrumbList", { url, items: crumbs.map(([n, u]) => [n, SITE + u]) }), ...nodes]);
  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#14594A">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
${(alts || []).map(([l, u]) => `<link rel="alternate" hreflang="${l}" href="${u}">`).join("\n")}
<meta property="og:site_name" content="màndarínō"><meta property="og:type" content="article"><meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:image" content="${SITE}/img/anteprima.png">
<meta property="og:locale" content="${t.lang === "zh-CN" ? "zh_CN" : "it_IT"}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${SITE}/img/anteprima.png">
<link rel="icon" href="${"/icon.svg"}" type="image/svg+xml">
<!-- generata da tools/pagine.mjs dai dati dell'app: non modificarla a mano -->
<style>${CSS}</style>
${ldScript(g)}
</head>
<body><main>
<p class="nav">${nav}</p>
${body}
<footer>${esc(t.foot)} · ${t.lang === "zh-CN" ? '<a href="/privacy.html#中文">隐私说明</a> · <a href="/manifesto.html#中文">宣言</a>' : '<a href="/privacy.html">Privacy</a> · <a href="/manifesto.html">Manifesto</a>'}</footer>
</main></body>
</html>
`;
}

export const cta = (t, what, appPath) => `<aside class="cta" aria-labelledby="cta"><h2 id="cta">${esc(t.ctaTitle)}</h2><p>${esc(t.ctaText(what))}</p>
<a class="btn" href="/app/">${esc(t.open)}</a><a class="btn g" href="${APK}">${esc(t.apk)}</a></aside>`;

export const table = (caption, heads, rows, cell) => `<div class="tw"><table><caption>${esc(caption)}</caption><thead><tr>${heads.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>
${rows.map((r) => "<tr>" + r.map((c, i) => `<td>${cell(c, i)}</td>`).join("") + "</tr>").join("\n")}
</tbody></table></div>`;

/* ---------- una lezione ---------- */
function lessonPage(L, i, all, o) {
  const { t, base, zh } = o, url = SITE + base + slug(L.id) + "/", wrap = !zh;
  const H = zh
    ? { ex: "例句", exCap: "意大利语例句和中文意思", dlg: "对话", dlgCap: "对话：意大利语和中文", traps: "常见错误", trapsCap: "常见错误、正确说法和原因", quiz: "练习", faq: "常见问题", how: "怎么用",
        show: "显示答案", ans: "答案", heads: { ex: ["意大利语", "中文"], dlg: ["说话人", "意大利语", "中文"], traps: ["错误", "正确", "原因"] } }
    : { ex: "Esempi", exCap: "Esempi in cinese con traduzione in italiano", dlg: "Dialogo", dlgCap: "Dialogo in cinese con traduzione", traps: "Errori tipici", trapsCap: "Errori tipici, forma corretta e motivo", quiz: "Mettiti alla prova", faq: "Domande frequenti", how: "Come funziona",
        show: "Mostra la risposta", ans: "Risposta", heads: { ex: ["Cinese", "Italiano"], dlg: ["Chi parla", "Cinese", "Italiano"], traps: ["Sbagliato", "Giusto", "Perché"] } };
  const title = zh ? `${L.title} · 意大利语第 ${L.n} 课 · màndarínō` : `${flat(L.title)} · lezione ${L.n} di cinese · màndarínō`;
  const resp = zh ? `《${flat(L.title)}》是 màndarínō 意大利语课程的第 ${L.n} 课，学完这一课你就能${flat(L.goal).replace(/。$/, "")}。` : `La lezione «${flat(L.title)}» è la numero ${L.n} del corso di cinese di màndarínō e serve a ${lc(flat(L.goal)).replace(/\.$/, "")}.`;
  const desc = resp.length > 300 ? resp.slice(0, 297) + "…" : resp;
  const q = (L.quiz || []);
  const quiz = q.map((x) => {
    if (x.k === "pick") return `<li><p>${x.zh ? inl(x.zh, wrap) + " — " : ""}${inl(x.q, wrap)}</p><ol class="opt" type="A">${x.opts.map((a) => `<li>${inl(a, wrap)}</li>`).join("")}</ol><details><summary>${H.show}</summary><p>${H.ans}: ${inl(x.opts[x.a], wrap)}.${x.why ? " " + inl(x.why, wrap) : ""}</p></details></li>`;
    if (x.k === "buco") return `<li><p>${inl(x.zh || x.it || "", wrap)}</p><ol class="opt" type="A">${x.opts.map((a) => `<li>${inl(a, wrap)}</li>`).join("")}</ol><details><summary>${H.show}</summary><p>${H.ans}: ${inl(x.opts[x.a], wrap)}.</p></details></li>`;
    return `<li><p>${zh ? "把句子排成正确的顺序：" : "Ricomponi la frase: "}${inl(zh ? x.zh : x.it, wrap)}</p><details><summary>${H.show}</summary><p>${H.ans}: ${inl(zh ? x.it : x.zh, wrap)}</p></details></li>`;
  }).join("\n");
  const faq = zh
    ? [[`《${flat(L.title)}》这一课讲什么？`, `这一课教你${flat(L.goal).replace(/。$/, "")}。课里有 ${L.ex.length} 个例句、${(L.traps || []).length} 个常见错误和 ${q.length} 道练习。`],
       [`学意大利语时，${flat(L.title)}最常见的错误是什么？`, (L.traps || []).length ? `最常见的错误是把“${flat(L.traps[0][0])}”说成这样；正确的说法是“${flat(L.traps[0][1])}”。${flat(L.traps[0][2])}` : ""]]
    : [[`Che cosa si impara nella lezione «${flat(L.title)}»?`, `Nella lezione «${flat(L.title)}» si impara a ${lc(flat(L.goal)).replace(/\.$/, "")}. La lezione contiene ${L.ex.length} frasi di esempio, ${(L.traps || []).length} errori tipici e ${q.length} esercizi.`],
       [`Qual è l'errore più comune con «${flat(L.title)}»?`, (L.traps || []).length ? `L'errore più comune è dire «${flat(L.traps[0][0])}». La forma corretta è «${flat(L.traps[0][1])}». ${flat(L.traps[0][2])}` : ""]];
  const faqs = faq.filter((f) => f[1]);
  const course = SITE + base + "#course", prev = all[i - 1], next = all[i + 1];
  const body = `<article>
<header><h1>${inl(L.title, wrap)}</h1>
<p class="resp">${inl(resp, wrap)}</p></header>
<section><h2>${H.how}</h2>
${(L.body || []).map((p, k) => `<p>${inl(p, wrap)}</p>`).join("\n")}
<p class="pat">${(L.pattern || []).map((x) => inl(x, wrap)).join(" + ")}</p></section>
<section><h2>${H.ex}</h2>
${table(H.exCap, H.heads.ex, L.ex || [], (c, k) => inl(c, wrap && k === 1 ? true : !zh && k === 0))}</section>
${(L.dlg || []).length ? `<section><h2>${H.dlg}</h2>\n${table(H.dlgCap, H.heads.dlg, L.dlg, (c, k) => inl(c, !zh))}</section>` : ""}
${(L.traps || []).length ? `<section><h2>${H.traps}</h2>\n${table(H.trapsCap, H.heads.traps, L.traps, (c) => inl(c, !zh))}</section>` : ""}
${q.length ? `<section><h2>${H.quiz}</h2>\n<ol>\n${quiz}\n</ol></section>` : ""}
<section><h2>${H.faq}</h2>
${faqs.map(([a, b]) => `<h3>${inl(a, wrap)}</h3><p>${inl(b, wrap)}</p>`).join("\n")}</section>
</article>
${cta(t, zh ? `《${flat(L.title)}》` : `La lezione «${flat(L.title)}»`)}
<nav class="pn" aria-label="${esc(t.all)}">${prev ? `<a rel="prev" href="${base}${slug(prev.id)}/">← ${esc(t.prev)}: ${inl(prev.title, wrap)}</a>` : "<span></span>"}<a href="${base}">${esc(t.all)}</a>${next ? `<a rel="next" href="${base}${slug(next.id)}/">${esc(t.next)}: ${inl(next.title, wrap)} →</a>` : "<span></span>"}</nav>`;
  const nodes = [build("Course", { url: SITE + base, name: t.course, description: t.courseDesc, lang: t.lang, lessons: all.length }),
    build("LearningResource", { url, name: flat(L.title), description: resp, lang: t.lang, course, teaches: flat(L.goal), modified: o.modified })];
  if (faqs.length) nodes.push(build("FAQPage", { url, questions: faqs.map(([a, b]) => ({ q: a, a: b, lang: t.lang })) }));
  return { path: base + slug(L.id) + "/", html: shell({ t, url, title, desc, body, crumbs: [[t.crumbHome, "/"], [t.lessonsHub, base], [flat(L.title), base + slug(L.id) + "/"]], nodes, modified: o.modified }), lang: t.lang, kind: "lesson", sources: o.sources };
}

/* ---------- l'indice delle lezioni ---------- */
function lessonsHub(all, o) {
  const { t, base, zh } = o, url = SITE + base, wrap = !zh;
  const title = zh ? `${t.lessonsHub}：${all.length} 节免费课程 · màndarínō` : `${t.lessonsHub}: ${all.length} lezioni gratuite · màndarínō`;
  const resp = zh ? `màndarínō 的意大利语课程为说中文的人准备了 ${all.length} 节免费语法课，每节课都有例句、对话、常见错误和练习，应用可以离线使用。`
    : `Il corso di cinese di màndarínō comprende ${all.length} lezioni di grammatica gratuite per italiani, ciascuna con esempi, dialoghi, errori tipici ed esercizi, e funziona offline nell'app.`;
  const heads = zh ? ["课", "标题", "学完能做什么"] : ["N.", "Lezione", "Che cosa sai fare dopo"];
  const rows = all.map((L) => [L.n, L, L.goal]);
  const body = `<header><h1>${esc(t.lessonsHub)}</h1><p class="resp">${inl(resp, false)}</p></header>
<section><h2>${zh ? "全部课程" : "Tutte le lezioni"}</h2>
<div class="tw"><table><caption>${zh ? "意大利语课程的全部课" : "Tutte le lezioni del corso, in ordine"}</caption><thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>
${rows.map(([n, L, g]) => `<tr><td>${n}</td><td><a href="${base}${slug(L.id)}/">${inl(L.title, wrap)}</a></td><td>${inl(g, wrap)}</td></tr>`).join("\n")}
</tbody></table></div></section>
${cta(t, zh ? "这些课程" : "Le lezioni")}`;
  const nodes = [build("Course", { url, name: t.course, description: t.courseDesc, lang: t.lang, lessons: all.length })];
  return { path: base, html: shell({ t, url, title, desc: resp, body, crumbs: [[t.crumbHome, "/"], [t.lessonsHub, base]], nodes, modified: o.modified }), lang: t.lang, kind: "hub", sources: o.sources };
}

/* ---------- vocabolario: una pagina per sezione (parole, pinyin, italiano) ---------- */
const levelOf = (id) => { const m = /^hsk(\d)/.exec(id); return m ? +m[1] : 0; };
function wordsPages(D, o) {
  const t = T.it, base = "/parole/", S = D.SECTIONS, out = [];
  const hubUrl = SITE + base;
  S.forEach((s, i) => {
    const url = hubUrl + slug(s.id) + "/", lv = levelOf(s.id), n = s.words.length;
    const where = lv ? `del livello HSK ${lv}` : "di base, raggruppate per tema";
    const resp = `La sezione «${s.title}» di màndarínō raccoglie ${n} parole di cinese ${where}, ciascuna con caratteri, pinyin e traduzione in italiano.`;
    const title = `${s.title}: ${n} parole di cinese con pinyin e traduzione · màndarínō`;
    const rows = s.words.map((w) => [py(w[0]), w[1], w[2], w[3] || ""]);
    const hasNote = rows.some((r) => r[3]);
    const first = s.words.slice(0, 3);
    const faqs = [[`Quali parole di cinese contiene la sezione «${s.title}»?`, `La sezione contiene ${n} parole, tra cui ${first.map((w) => `${w[1]} (${py(w[0])}, «${w[2]}»)`).join(", ")}.`],
      [`Come si ripassano le parole della sezione «${s.title}»?`, `Le parole della sezione «${s.title}» si ripassano nell'app màndarínō con il ripasso a intervalli FSRS, che funziona offline e senza registrazione.`]];
    const prev = S[i - 1], next = S[i + 1];
    const body = `<article><header><h1>${esc(s.title)}: ${n} parole di cinese</h1><p class="resp">${esc(resp)}</p></header>
<section><h2>Elenco delle parole</h2>
${table(`Parole della sezione ${s.title}`, hasNote ? ["Pinyin", "Caratteri", "Italiano", "Nota"] : ["Pinyin", "Caratteri", "Italiano"], hasNote ? rows : rows.map((r) => r.slice(0, 3)), (c, k) => k === 1 ? `<span lang="zh-CN">${esc(c)}</span>` : (k === 0 ? `<span lang="zh-Latn-pinyin">${esc(c)}</span>` : inl(c, true)))}</section>
<section><h2>Domande frequenti</h2>
${faqs.map(([a, b]) => `<h3>${esc(a)}</h3><p>${inl(b, true)}</p>`).join("\n")}</section></article>
${cta(t, `Le parole della sezione «${s.title}»`)}
<nav class="pn" aria-label="${esc(t.wordsHub)}">${prev ? `<a rel="prev" href="${base}${slug(prev.id)}/">← ${esc(prev.title)}</a>` : "<span></span>"}<a href="${base}">${esc(t.wordsHub)}</a>${next ? `<a rel="next" href="${base}${slug(next.id)}/">${esc(next.title)} →</a>` : "<span></span>"}</nav>`;
    const nodes = [build("LearningResource", { url, name: s.title, description: resp, lang: "it", course: SITE + "/lezioni/#course", teaches: `${n} parole di cinese`, type: "vocabulary list", modified: o.modified }),
      build("Course", { url: SITE + "/lezioni/", name: t.course, description: t.courseDesc, lang: "it", lessons: D.LESSONS.length }),
      build("FAQPage", { url, questions: faqs.map(([a, b]) => ({ q: a, a: b, lang: "it" })) })];
    out.push({ path: base + slug(s.id) + "/", html: shell({ t, url, title, desc: resp, body, crumbs: [[t.crumbHome, "/"], [t.wordsHub, base], [s.title, base + slug(s.id) + "/"]], nodes, modified: o.modified }), lang: "it", kind: "words", sources: o.sources });
  });
  /* indice: una tabella per livello */
  const groups = [[0, "Vocabolario di base per tema"], ...[1, 2, 3, 4, 5].map((l) => [l, `Livello HSK ${l}`])];
  const total = S.reduce((a, s) => a + s.words.length, 0);
  const resp = `Il vocabolario cinese di màndarínō comprende ${total.toLocaleString("it-IT")} parole in ${S.length} sezioni, con caratteri, pinyin e traduzione in italiano, gratuite e consultabili offline nell'app.`;
  const body = `<header><h1>Parole di cinese: ${S.length} sezioni con pinyin e traduzione</h1><p class="resp">${esc(resp)}</p></header>
${groups.map(([l, name]) => { const ss = S.filter((s) => levelOf(s.id) === l); if (!ss.length) return ""; return `<section><h2>${name}</h2>\n${table(name, ["Sezione", "Parole"], ss.map((s) => [`<a href="${base}${slug(s.id)}/">${esc(s.title)}</a>`, s.words.length]), (c) => c)}</section>`; }).join("\n")}
${cta(t, "Il vocabolario")}`;
  const title = `Parole di cinese: ${total.toLocaleString("it-IT")} parole con pinyin e traduzione · màndarínō`;
  out.unshift({ path: base, html: shell({ t, url: hubUrl, title, desc: resp, body, crumbs: [[t.crumbHome, "/"], [t.wordsHub, base]], nodes: [build("Course", { url: SITE + "/lezioni/", name: t.course, description: t.courseDesc, lang: "it", lessons: D.LESSONS.length })], modified: o.modified }), lang: "it", kind: "hub", sources: o.sources });
  return out;
}

/* ---------- tutto insieme ---------- */
export function pagine(D = load(path.join(ROOT, "src")), ctx = {}) {
  const pages = [];
  const modified = ctx.modified || {};
  pages.push(lessonsHub(D.LESSONS, { t: T.it, base: "/lezioni/", zh: false, modified: modified.lessons, sources: ["src/data/lessons"] }));
  D.LESSONS.forEach((L, i) => pages.push(lessonPage(L, i, D.LESSONS, { t: T.it, base: "/lezioni/", zh: false, modified: modified.lessons, sources: ["src/data/lessons"] })));
  pages.push(lessonsHub(D.ITLESSONS, { t: T.zh, base: "/zh/lessons/", zh: true, modified: modified.itlessons, sources: ["src/data/it/lessons"] }));
  D.ITLESSONS.forEach((L, i) => pages.push(lessonPage(L, i, D.ITLESSONS, { t: T.zh, base: "/zh/lessons/", zh: true, modified: modified.itlessons, sources: ["src/data/it/lessons"] })));
  pages.push(...wordsPages(D, { modified: modified.vocab, sources: ["src/data/vocab"] }));
  return pages;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const p = pagine(), by = {}; for (const x of p) by[x.kind + ":" + x.lang] = (by[x.kind + ":" + x.lang] || 0) + 1;
  const big = p.filter((x) => x.html.length > 200000).map((x) => x.path);
  console.log(`✓ ${p.length} pagine`, JSON.stringify(by), big.length ? "· troppo grandi: " + big.join(" ") : "");
  void facts;
}
