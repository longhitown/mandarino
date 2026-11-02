/* Lezione 6 · Il presente: -are, -ere, -ire (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["presente"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Parlo cinese.", "tr": "我说中文。" },
      { "t": "Parliamo italiano.", "tr": "我们说意大利语。" },
      { "t": "Marco prende un caffè.", "tr": "马可要一杯咖啡。" },
      { "t": "Capisco tutto, ma non parlo molto.", "tr": "我全都听得懂，但是说得不多。" }
    ],
    "domanda": "这几句话里，动词 parlare 出现了两种不同的样子（parlo、parliamo），而且前三句里“我、我们”这样的主语根本没有说出来。你注意到了什么？动词的哪一部分在变？",
    "risposta": "变的是动词的**结尾**：parl- 不变，后面的 -o 表示“我”，-iamo 表示“我们”。因为结尾已经说明了是谁在做，所以主语（io、noi）常常不说。汉语的动词永远是同一个形状（说），意大利语的动词要跟着“谁做”变化，这就叫**变位**。第四句里的 capisco 比 capire 多了一段 -isc-，这是某些 -ire 动词的特点，后面会讲。"
  },
  "regola": {
    "enunciato": "意大利语的现在时由**词干**加**词尾**构成：先去掉不定式（原形）的 -are、-ere、-ire，再按主语加上词尾。不定式以什么结尾，决定用哪一套词尾。词尾本身已经说明了人称和数，所以主语代词（io、tu、lui……）平时可以省略，只有在强调或对比时才说出来。",
    "schema": ["词干", "+", "词尾", "｜", "parl-", "+", "-o / -i / -a…"],
    "punti": [
      { "ok": true, "t": "**-are**（parlare）：parlo、parli、parla、parliamo、parlate、parlano。这是最大的一类，大部分新动词都属于它：lavorare、abitare、studiare、mangiare。" },
      { "ok": true, "t": "**-ere**（prendere）：prendo、prendi、prende、prendiamo、prendete、prendono。和 -are 相比，lui / lei 用 -e（不是 -a），voi 用 -ete（不是 -ate），loro 用 -ono（不是 -ano）。" },
      { "ok": true, "t": "**-ire**（dormire）：dormo、dormi、dorme、dormiamo、dormite、dormono。注意第三人称复数是 -ono，不是 -ano：-are 动词才用 -ano（parlano）。" },
      { "ok": true, "t": "**-isc- 动词**：很多 -ire 动词在 io、tu、lui/lei、loro 这四个形式里加 -isc-：capisco、capisci、capisce、capiamo、capite、capiscono。noi 和 voi 不加。常见的有 capire、finire、preferire、pulire。dormire、partire、aprire、sentire 不加。" },
      { "ok": true, "t": "**拼写**：-care、-gare 结尾的动词，在 tu 和 noi 前面要加 h，保持硬音：cercare → cerchi、cerchiamo；pagare → paghi、paghiamo。-iare 结尾的动词，tu 和 noi 只留一个 i：mangiare → mangi、mangiamo。" },
      { "ok": true, "t": "**用法**：现在时说此刻的事、习惯和一般的事实，也常常说马上要发生的事：Domani parto（我明天出发）。说“从……起一直……”用 da：Studio italiano da due anni（我学意大利语已经两年了）。" },
      { "ok": false, "t": "**不能**直接用不定式当谓语（*Io parlare cinese*），也不能把词尾混用（*Loro prendano*、*Io dormisco*）。动词一定要按主语变位。" }
    ]
  },
  "logica": [
    "汉语用词序和“了、着、过”等词来表达时间和体，动词本身不变；意大利语把“谁做”和“什么时候做”都放进动词的**结尾**里。所以意大利语的一个动词就是一个小句子：Parlo 已经是“我说”。这也是为什么意大利语的主语可以省略，而汉语在没有上下文时往往要说出“我”。",
    "三类动词的词尾其实很像，可以抓住共同点来记：**tu 总是 -i**（parli、prendi、dormi），**noi 总是 -iamo**（parliamo、prendiamo、dormiamo），**io 总是 -o**。真正的区别只有 lui/lei、voi 和 loro 的元音：-are 用 -a、-ate、-ano；-ere 用 -e、-ete、-ono；-ire 用 -e、-ite、-ono。",
    "-isc- 看起来是例外，其实有规律：它只出现在**重音落在词干**的形式里（capisco 读作 ca-PI-sco）。noi 和 voi 的重音落在词尾（capiamo、capite），所以不需要加。这些动词没有简便的识别方法，需要在学新动词时顺便记住：词典里常写作 capire (-isc-)。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["主语", "parlare（-are）", "prendere（-ere）", "dormire（-ire）", "capire（-isc-）"],
    "righe": [
      ["io", "parlo", "prendo", "dormo", "capisco"],
      ["tu", "parli", "prendi", "dormi", "capisci"],
      ["lui / lei / Lei", "parla", "prende", "dorme", "capisce"],
      ["noi", "parliamo", "prendiamo", "dormiamo", "capiamo"],
      ["voi", "parlate", "prendete", "dormite", "capite"],
      ["loro", "parlano", "prendono", "dormono", "capiscono"]
    ],
    "nota": "竖着看：tu 都是 -i，noi 都是 -iamo。横着看：-isc- 只出现在 io、tu、lui/lei、loro 这四行，noi 和 voi 两行与 dormire 一样。"
  },
  "esempi": [
    { "gruppo": "-are 动词：最常见的一类", "items": [
      { "t": "Parlo cinese e un po' di italiano.", "tr": "我会说中文，也会一点意大利语。" },
      { "t": "Marco abita a Milano e lavora in banca.", "tr": "马可住在米兰，在银行工作。", "nota": "两个动词的主语都是 Marco，所以都用第三人称单数 -a。" },
      { "t": "Aspettiamo l'autobus da dieci minuti.", "tr": "我们等公交车已经十分钟了。", "nota": "“从……起一直”用 da + 时间，动词仍然用现在时。" }
    ] },
    { "gruppo": "-ere 动词", "items": [
      { "t": "Prendo un caffè, e tu?", "tr": "我要一杯咖啡，你呢？" },
      { "t": "Leggete molto?", "tr": "你们读书读得多吗？", "nota": "没有 io、tu 这样的主语，词尾 -ete 说明是 voi。" },
      { "t": "Mia sorella vende fiori al mercato.", "tr": "我姐姐（妹妹）在市场上卖花。" }
    ] },
    { "gruppo": "-ire 动词：加 -isc- 和不加 -isc-", "items": [
      { "t": "Parto domani mattina.", "tr": "我明天早上出发。", "nota": "partire 不加 -isc-。现在时可以说将要发生的事。" },
      { "t": "Dormite ancora?", "tr": "你们还在睡吗？" },
      { "t": "Finisco di lavorare alle sei.", "tr": "我六点下班。", "nota": "finire 加 -isc-：finisco、finisci、finisce、finiamo、finite、finiscono。" },
      { "t": "Preferisci il tè o il caffè?", "tr": "你喜欢茶还是咖啡？" }
    ] },
    { "gruppo": "拼写要保持读音", "items": [
      { "t": "Cerchi le chiavi?", "tr": "你在找钥匙吗？", "nota": "cercare 的 tu 形式加 h，c 才读硬音 /k/。" },
      { "t": "Pago io stasera.", "tr": "今晚我来付钱。", "nota": "这里的 io 表示强调：是我，不是别人。" },
      { "t": "Mangiamo alle otto.", "tr": "我们八点吃饭。", "nota": "mangiare 的 noi 形式只有一个 i。" }
    ] },
    { "gruppo": "现在时的几种用法", "items": [
      { "t": "Domani vado a Roma con Lucia.", "tr": "明天我和露西亚去罗马。", "nota": "andare 是不规则动词：vado、vai、va、andiamo、andate、vanno。" },
      { "t": "Studio italiano da due anni.", "tr": "我学意大利语已经两年了。" },
      { "t": "L'acqua bolle a cento gradi.", "tr": "水在一百度时沸腾。", "nota": "一般的事实也用现在时。" }
    ] }
  ],
  "contrasti": [
    { "q": "你对一位朋友说：“你会说意大利语吗？”哪一句对？", "opzioni": [
      { "t": "Parli italiano?", "ok": true, "perche": "对朋友说“你”，用 tu，-are 动词的词尾是 -i。" },
      { "t": "Parla italiano?", "ok": false, "perche": "-a 是 lui / lei（他、她）的形式；对朋友说话不能用它。" },
      { "t": "Parlate italiano?", "ok": false, "perche": "-ate 是 voi（你们），问的是几个人。" }
    ] },
    { "q": "“我们一起吃饭。”哪一句对？", "opzioni": [
      { "t": "Mangiamo insieme.", "ok": true, "perche": "noi 的词尾是 -iamo；mangiare 的词干末尾的 i 和词尾 -iamo 合在一起，只写一个 i。" },
      { "t": "Mangiano insieme.", "ok": false, "perche": "-ano 是 loro（他们）的形式。" },
      { "t": "Mangiate insieme.", "ok": false, "perche": "-ate 是 voi（你们）的形式。" }
    ] },
    { "q": "“他要一杯咖啡。”（prendere）哪一句对？", "opzioni": [
      { "t": "Lui prende un caffè.", "ok": true, "perche": "-ere 动词的 lui / lei 形式是 -e。" },
      { "t": "Lui prendi un caffè.", "ok": false, "perche": "-i 是 tu 的词尾，主语是 lui 就不能用。" },
      { "t": "Lui prendono un caffè.", "ok": false, "perche": "-ono 是 loro（他们）的词尾，主语是单数。" }
    ] },
    { "q": "“我听得懂。”（capire）哪一句对？", "opzioni": [
      { "t": "Capisco.", "ok": true, "perche": "capire 是加 -isc- 的动词，io 的形式是 capisco。" },
      { "t": "Capo.", "ok": false, "perche": "capo 不是 capire 的变位形式。capire 的单数形式都要带 -isc-。" },
      { "t": "Capite.", "ok": false, "perche": "capite 是 voi（你们）的形式，而且 voi 不加 -isc-。" }
    ] },
    { "q": "“我睡得很少。”（dormire）哪一句对？", "opzioni": [
      { "t": "Dormo poco.", "ok": true, "perche": "dormire 不属于 -isc- 动词，io 形式直接是 dormo。" },
      { "t": "Dormisco poco.", "ok": false, "perche": "dormire 不加 -isc-；不是所有 -ire 动词都加。" },
      { "t": "Dormi poco.", "ok": false, "perche": "dormi 是 tu（你）的形式，说的是“你睡得很少”。" }
    ] },
    { "q": "你在办公室里问一位不熟的年长客人：“您明白吗？”（用尊称 Lei）哪一句对？", "opzioni": [
      { "t": "Capisce?", "ok": true, "perche": "尊称 Lei 使用第三人称单数的形式：capisce。" },
      { "t": "Capisci?", "ok": false, "perche": "capisci 是 tu 的形式，对不熟的人或长辈在正式场合显得过于随便。" },
      { "t": "Capite?", "ok": false, "perche": "capite 是 voi（你们）的形式，问的是几个人。" }
    ] },
    { "q": "“他们在睡觉。”（dormire）哪一句对？", "opzioni": [
      { "t": "Dormono.", "ok": true, "perche": "-ire 动词的 loro 形式是 -ono，dormire 不加 -isc-。" },
      { "t": "Dormano.", "ok": false, "perche": "-ano 只属于 -are 动词（parlano）；-ire 动词是 -ono。" },
      { "t": "Dormiscono.", "ok": false, "perche": "dormire 不属于 -isc- 类。" }
    ] },
    { "q": "你对两个朋友说：“你们拿点什么？”（prendere）哪一句对？", "opzioni": [
      { "t": "Che cosa prendete?", "ok": true, "perche": "voi 的词尾：-ere 动词是 -ete。" },
      { "t": "Che cosa prendate?", "ok": false, "perche": "-ate 只属于 -are 动词；-ere 动词的 voi 形式是 -ete。" },
      { "t": "Che cosa prendiamo?", "ok": false, "perche": "-iamo 是 noi（我们）的形式。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Un nuovo collega",
    "righe": [
      { "chi": "A", "t": "Ciao! Abiti qui vicino?", "tr": "你好！你住在这附近吗？" },
      { "chi": "B", "t": "Sì, abito in via Verdi e lavoro in una scuola.", "tr": "是的，我住在威尔第街，在一所学校工作。" },
      { "chi": "A", "t": "Che cosa insegni?", "tr": "你教什么？" },
      { "chi": "B", "t": "Insegno cinese. E tu, che lavoro fai?", "tr": "我教中文。你呢，你做什么工作？" },
      { "chi": "A", "t": "Studio all'università e finisco gli esami a giugno.", "tr": "我在大学读书，六月考完试。" },
      { "chi": "B", "t": "Bravo! Allora il sabato dormi fino a tardi?", "tr": "真棒！那么星期六你会睡到很晚吗？" }
    ],
    "esercizi": [
      { "q": "B 说 “lavoro in una scuola”，lavoro 是谁的形式？", "opzioni": [
        { "t": "io（我）", "ok": true, "perche": "-are 动词的 io 形式是 -o，B 在说自己的工作。" },
        { "t": "tu（你）", "ok": false, "perche": "tu 的形式是 lavori。" },
        { "t": "loro（他们）", "ok": false, "perche": "loro 的形式是 lavorano。" }
      ] },
      { "q": "A 说 “finisco gli esami”，为什么是 finisco，不是 fino？", "opzioni": [
        { "t": "finire 是加 -isc- 的 -ire 动词", "ok": true, "perche": "finire 的 io 形式是 finisco。" },
        { "t": "因为 finire 是 -are 动词", "ok": false, "perche": "finire 以 -ire 结尾，不是 -are。" },
        { "t": "因为后面有 gli esami", "ok": false, "perche": "动词的形式由主语决定，与宾语无关。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的动词不变形，所以很容易把不定式直接放进句子：*Io parlare cinese*、*Lui mangiare pizza*。另一种常见的错误是把一类的词尾用到另一类动词上，或者给所有 -ire 动词都加 -isc-：*Loro prendano*、*Io dormisco*。",
    "perche": "原形是词典里的样子，不是句子里的样子。而且汉语没有“按主语改变动词”的习惯，所以不容易想到“要先看主语，再选结尾”。-isc- 的错误来自过度概括：学了 capisco 和 finisco 之后，容易以为所有 -ire 动词都一样。",
    "esci": "说每一个句子之前，先问自己两件事：①主语是谁（我、你、他……）？②这个动词以 -are、-ere 还是 -ire 结尾，是不是 -isc- 动词？记住 tu 总是 -i，noi 总是 -iamo，loro 在 -are 动词里是 -ano，在 -ere、-ire 动词里是 -ono。",
    "esempi": [
      { "sbagliata": "Io parlare italiano.", "giusta": "Io parlo italiano." },
      { "sbagliata": "Noi parlo cinese.", "giusta": "Noi parliamo cinese." },
      { "sbagliata": "Luca capisci tutto.", "giusta": "Luca capisce tutto." },
      { "sbagliata": "Io dormisco poco.", "giusta": "Io dormo poco." }
    ]
  },
  "curiosi": [
    { "titolo": "-isc- 是从哪里来的？", "t": "这个小段 -isc- 来自拉丁语里表示“开始做某事”的后缀。后来它失去了“开始”的意思，只留在 -ire 动词的几个形式里。在今天的意大利语里，带 -isc- 的 -ire 动词比不带的多得多，所以遇到新的 -ire 动词时，带 -isc- 的可能性更大。学新动词时顺手记下它属于哪一种，词典里通常会标出 (-isc-)。" },
    { "titolo": "重音在哪里？", "t": "三个词尾 -ano 的动词，重音不在词尾：PAR-la-no、A-bi-ta-no、LA-vo-ra-no，重音在倒数第三个音节。这是学习者常读错的地方，把 parlano 读成 par-LA-no 听起来很不自然。noi 和 voi 的形式重音在词尾之前的元音上：par-LIA-mo、par-LA-te。" },
    { "titolo": "Lei：用第三人称表示“您”", "t": "对不熟的人、长辈或在正式场合，意大利语用 Lei（书写时常用大写）加第三人称单数动词，表示“您”：Lei parla italiano? 对同辈、朋友、孩子用 tu。选对 tu 和 Lei，比语法正确更能让人觉得你有礼貌。" }
  ],
  "pragmatica": "平时说话，意大利人几乎不说主语代词：Parlo cinese、Vieni?、Mangiamo? 只有在对比或强调时才加上：Io parlo cinese, tu parli italiano。对朋友、同事、同龄人用 tu；对陌生的成年人、年长者、柜台后的工作人员用 Lei，动词用第三人称单数。Scusi, parla inglese? 是询问陌生人的礼貌说法。",
  "esercizi": [
    { "k": "scegli", "q": "tu + prendere，哪一个形式是对的？", "opzioni": [
      { "t": "prendi", "ok": true, "perche": "tu 的词尾总是 -i。" },
      { "t": "prende", "ok": false, "perche": "prende 是 lui / lei 的形式。" },
      { "t": "prendo", "ok": false, "perche": "prendo 是 io 的形式。" }
    ] },
    { "k": "scegli", "q": "loro + finire，哪一个形式是对的？", "opzioni": [
      { "t": "finiscono", "ok": true, "perche": "finire 带 -isc-，loro 的形式是 finiscono。" },
      { "t": "finiono", "ok": false, "perche": "finire 在 loro 形式中必须带 -isc-。" },
      { "t": "finiscano", "ok": false, "perche": "-ano 只属于 -are 动词。" }
    ] },
    { "k": "scegli", "q": "哪一个动词在 io 形式里不加 -isc-？", "opzioni": [
      { "t": "partire：parto", "ok": true, "perche": "partire 不属于 -isc- 类。" },
      { "t": "preferire：prefero", "ok": false, "perche": "preferire 带 -isc-：preferisco。" },
      { "t": "capire：capo", "ok": false, "perche": "capire 带 -isc-：capisco。" }
    ] },
    { "k": "buco", "zh": "Marco ＿ a Roma.", "tr": "马可住在罗马。", "opzioni": [
      { "t": "abita", "ok": true, "perche": "主语是 Marco（lui），-are 动词用 -a。" },
      { "t": "abiti", "ok": false, "perche": "-i 是 tu 的词尾。" },
      { "t": "abitano", "ok": false, "perche": "-ano 是 loro 的词尾，主语是单数。" }
    ] },
    { "k": "buco", "zh": "Voi ＿ il caffè?", "tr": "你们喝咖啡吗？", "opzioni": [
      { "t": "prendete", "ok": true, "perche": "voi 与 -ere 动词搭配的词尾是 -ete。" },
      { "t": "prendono", "ok": false, "perche": "-ono 是 loro 的词尾。" },
      { "t": "prendiamo", "ok": false, "perche": "-iamo 是 noi 的词尾。" }
    ] },
    { "k": "buco", "zh": "Tu ＿ sempre tardi?", "tr": "你总是很晚才睡吗？（dormire）", "opzioni": [
      { "t": "dormi", "ok": true, "perche": "tu 的词尾是 -i，dormire 不加 -isc-。" },
      { "t": "dormisci", "ok": false, "perche": "dormire 不属于 -isc- 类。" },
      { "t": "dorme", "ok": false, "perche": "dorme 是 lui / lei 的形式。" }
    ] },
    { "k": "ordine", "t": "noi parliamo italiano a scuola", "tr": "我们在学校说意大利语。", "alt": ["a scuola noi parliamo italiano", "a scuola parliamo italiano", "parliamo italiano a scuola"] },
    { "k": "ordine", "t": "loro dormono fino a tardi", "tr": "他们睡到很晚。", "alt": ["dormono fino a tardi"] },
    { "k": "scrivi", "q": "用意大利语写：“我们在家睡觉。”（dormire）", "a": "Dormiamo a casa.", "accetta": ["Noi dormiamo a casa.", "A casa dormiamo.", "Dormiamo a casa", "Noi dormiamo a casa"], "perche": "noi 的词尾是 -iamo，dormire 不加 -isc-。" },
    { "k": "scrivi", "q": "用意大利语写：“我六点下班。”（finire di lavorare）", "a": "Finisco di lavorare alle sei.", "accetta": ["Io finisco di lavorare alle sei.", "Alle sei finisco di lavorare.", "Finisco di lavorare alle 6.", "Finisco il lavoro alle sei."], "perche": "finire 带 -isc-，io 的形式是 finisco；“六点”说 alle sei。" },
    { "k": "trasforma", "consegna": "把主语改成 noi（我们）。", "base": "Io parlo cinese.", "accetta": ["Noi parliamo cinese.", "Parliamo cinese."], "rifiutate": [
      { "t": "Noi parlo cinese.", "perche": "主语变了，动词也要跟着变：noi 对应 parliamo。" },
      { "t": "Noi parlate cinese.", "perche": "parlate 是 voi（你们）的形式。" }
    ], "perche": "noi 的词尾 -iamo 取代 io 的 -o；主语 noi 可以省略。" },
    { "k": "trasforma", "consegna": "把主语改成 loro（他们）。", "base": "Prendo un caffè.", "accetta": ["Prendono un caffè.", "Loro prendono un caffè."], "rifiutate": [
      { "t": "Prende un caffè.", "perche": "prende 是 lui / lei 的形式，说的是一个人。" },
      { "t": "Prendano un caffè.", "perche": "-ano 只属于 -are 动词；-ere 动词的 loro 形式是 -ono。" }
    ], "perche": "prendere 是 -ere 动词，loro 的形式是 prendono。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Capisci l'italiano?" },
      { "chi": "B", "t": "Sì, ___ quasi tutto.", "buco": true }
    ], "opzioni": [
      { "t": "capisco", "ok": true, "perche": "B 说自己，io 的形式带 -isc-：capisco。" },
      { "t": "capiscono", "ok": false, "perche": "capiscono 是 loro 的形式。" },
      { "t": "capiamo", "ok": false, "perche": "capiamo 是 noi 的形式，B 只说自己。" }
    ] }
  ],
  "capaci": [
    "你会给 -are、-ere、-ire 三类规则动词按主语变位，并省略多余的主语代词，比如 Parlo cinese。",
    "你会判断一个 -ire 动词是否带 -isc-，并说出 capisco、finisco、dormo、parto 这样的形式。",
    "你会处理拼写：cercare → cerchi，pagare → paghi，mangiare → mangiamo。",
    "你会用现在时说此刻的事、习惯和马上要做的事，以及用 da 说“已经……了”。"
  ],
  "fonti": [
    "Wikipedia (inglese), «Italian verbs», sezione sul presente indicativo: schemi -are, -ere, -ire e verbi in -isc-",
    "Tatoeba (ita.tsv), ricerca di frasi con cerchi, Quanti anni hai?, Non fumo più, Sei stanco, Dormite per controllare forme e uso"
  ]
};
