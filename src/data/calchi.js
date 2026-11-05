/* ===== màndarínō · calchi italiano → cinese: le trappole classiche di chi traduce parola per parola. PRIMA FASE, DEBOLE: poche voci, stato «bozza»,
   mostrate come avviso in X-Ray (phrases/xrt.js) quando una frase italiana invita al calco. Da rivedere e ampliare con madrelingua e con la comunità
   (CONTRIBUTING.md). Campi: id; re = come si riconosce nella frase italiana (minuscolo, solo lettere e cifre, spazi ai lati); wrong = il calco; right = la forma corretta;
   why = la regola in una riga; rev = 0 bozza | 1 rivista da un madrelingua. Ogni voce è provata da tools/unit.mjs (campi, sintassi, esempi che la attivano). ===== */
var CALCHI = [
  { id: "eta", re: " ho \\d+ anni | ho (venti|trenta|quaranta|dieci|quindici|diciotto) anni ", wrong: "我有二十岁", right: "我二十岁", why: "L'età si dice senza «avere»: il numero e 岁 (suì).", rev: 0 },
  { id: "fame-sete", re: " ho (fame|sete) ", wrong: "我有饿", right: "我饿了 / 我渴了", why: "Fame e sete sono aggettivi (饿, 渴), non cose che si «hanno».", rev: 0 },
  { id: "essere-aggettivo", re: " (sono|sei|è|siamo|siete) (molto |davvero )?(alto|alta|bello|bella|grande|piccolo|piccola|buono|buona|felice|stanco|stanca) ", wrong: "我是很高", right: "我很高", why: "Davanti a un aggettivo non si mette 是: l'aggettivo fa da verbo, di solito con 很.", rev: 0 },
  { id: "tempo-in-fondo", re: "^ (?!(domani|oggi|ieri|stasera|stanotte) ).+ (domani|oggi|ieri|stasera|stanotte) $", wrong: "我去学校明天", right: "我明天去学校", why: "Il momento va prima del verbo, di solito subito dopo il soggetto.", rev: 0 },
  { id: "classificatore", re: " (un|uno|una|due|tre|quattro|cinque) (libro|libri|amico|amici|gatto|gatti|cane|cani|casa|case) ", wrong: "一书", right: "一本书 / 一个朋友", why: "Tra il numero e il nome serve un classificatore (本, 个, 只…).", rev: 0 },
  { id: "anche", re: " anche ", wrong: "我去也", right: "我也去", why: "也 (anche) sta prima del verbo, non in fondo alla frase.", rev: 0 },
  { id: "possesso-cose", re: " (mio|mia|tuo|tua|suo|sua|nostro|nostra) (libro|telefono|cane|gatto|borsa) ", wrong: "我书", right: "我的书", why: "Con le cose il possesso vuole 的 (con i familiari spesso no: 我妈妈).", rev: 0 }
];
