/* Lezione 39 · 第几、几月几号：序数词和日期 (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["ordinali-date"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Il primo settembre inizia la scuola.", "tr": "九月一号开学。" },
      { "t": "Il due giugno è la festa della Repubblica.", "tr": "六月二号是共和国日。" },
      { "t": "Abito al terzo piano e non c'è l'ascensore.", "tr": "我住在三楼，而且没有电梯。" },
      { "t": "È la prima volta che mangio il tiramisù.", "tr": "这是我第一次吃提拉米苏。" }
    ],
    "domanda": "先看日期：九月一号用 primo，六月二号用 due。再看“三楼”“第一次”：terzo、prima。哪些地方用的是“第几”的词，哪些地方用的是普通的数字？terzo 和 prima 的结尾为什么不一样？",
    "risposta": "只有每个月的**一号**用序数词 **primo**；二号到三十一号都用普通的基数词：il due giugno，il trenta giugno。至于“三楼、第一次”这种真正的“第几”，用序数词，而且序数词是形容词，要和名词一致：il **terzo** piano（piano 是阳性），la **prima** volta（volta 是阴性）。所以：日期里除了一号都是基数词，“第几”才用序数词，并且要变性和数。"
  },
  "regola": {
    "enunciato": "意大利语有两套“数”：**基数词**（uno, due, tre……）数数量，**序数词**（primo, secondo, terzo……）表示“第几”。日期的规则很简单：**每月一号**说 **il primo**，**二号起**一律用基数词：il due, il tre, il ventitré。序数词是形容词，放在名词前，要和名词一致；年份用 **nel** 加基数词读法，世纪和国王教皇的名字用序数词读。",
    "schema": ["il", "基数词（一号：primo）", "月份", "（年份）"],
    "punti": [
      { "ok": true, "t": "**序数词 1–10 要单独记**：primo, secondo, terzo, quarto, quinto, sesto, settimo, ottavo, nono, decimo。从 11 起，基数词去掉最后的元音，加 **-esimo**：undici → undicesimo，venti → ventesimo，ventuno → ventunesimo，cento → centesimo。" },
      { "ok": true, "t": "**末尾是重读的 -tré 或 -sei 时，元音不去掉**：ventitré → ventitreesimo，trentasei → trentaseiesimo。mille 变成 millesimo。" },
      { "ok": true, "t": "**序数词和名词一致**（有 -o, -a, -i, -e 四种形式）：il primo giorno，la prima volta，i primi amici，le prime pagine。书写缩写：1º、2º（阳性），1ª、2ª（阴性）。" },
      { "ok": true, "t": "**日期**：il + 基数词 + 月份，次序是 日―月―年：il 12 ottobre 2026。说星期时不加冠词：Oggi è sabato 12 ottobre。问日期可以说 Che giorno è oggi?，口语里也说 Quanti ne abbiamo oggi?（答：Ne abbiamo dodici.）" },
      { "ok": true, "t": "**年份和月份**：说“在某年”用 **nel** + 完整读法：nel 1969 = nel millenovecentosessantanove；“在某月”用 **a / ad / in**：a maggio，ad aprile，in giugno。星期名、月份名和国籍一样，用小写字母。" },
      { "ok": true, "t": "**世纪和君主**：十三世纪可说 il tredicesimo secolo，也可以说 il **Duecento**（只用于 1200 年代起的世纪名）；Luigi XIV 读作 Luigi **quattordicesimo**，罗马数字读序数词。" },
      { "ok": false, "t": "**不要**把“二号”说成 il secondo ottobre：secondo 的意思是“第二”。也不要说 il uno ottobre，一号要说 il primo ottobre。" }
    ]
  },
  "logica": [
    "汉语的“号”和“第”是两个不同的词：日期说“十号”，不说“第十号”；楼层说“三楼”，序数就藏在“楼”里。意大利语的原则其实很像：日期是在**数日子**，所以用基数词 due, tre, dieci；“第几次、第几层”是在**排顺序**，所以用序数词。一号用 primo 是唯一的例外，可以想成“这个月的第一天”，是在说“开头”。",
    "序数词是形容词，所以它和名词一致，而且通常放在名词**前面**：la prima volta，il secondo piatto，i primi tre giorni。注意最后一个例子：序数词在基数词前面（i primi tre giorni = 最初的三天），顺序和汉语“前三天”很像。对说汉语的人来说，需要特别记住的是 -esimo 这个后缀：它只在第十一以后出现，前十个要一个个背。",
    "世纪的说法很有意思：学术和日常里都可以说 il ventesimo secolo；谈艺术和历史时，意大利人更爱用“百年名”：il Duecento（十三世纪）、il Quattrocento（十五世纪）、il Novecento（二十世纪）。这是在用“几百年代”命名，所以比序数词少一个数字，要小心不要弄错。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["想说什么", "用哪种数", "例子"],
    "righe": [
      ["每月一号", "序数词 primo", "il primo marzo"],
      ["每月二号到三十一号", "基数词", "il due marzo，il trentuno marzo"],
      ["楼层、第几次、第几个", "序数词，和名词一致", "al quinto piano，la seconda volta"],
      ["年份", "nel + 基数词的完整读法", "nel 1969，nel 2026"],
      ["世纪", "序数词，或“百年名”", "il ventesimo secolo，il Novecento"],
      ["国王、教皇的名字", "罗马数字，读序数词", "Luigi XIV = Luigi quattordicesimo"]
    ]
  },
  "esempi": [
    { "gruppo": "序数词：楼层、次数、顺序", "items": [
      { "t": "Abito al quarto piano e non c'è l'ascensore.", "tr": "我住在四楼，没有电梯。", "nota": "piano 是阳性，所以是 quarto。" },
      { "t": "È la prima volta che mangio il tiramisù.", "tr": "这是我第一次吃提拉米苏。", "nota": "volta 是阴性，所以是 prima。" },
      { "t": "Ho letto le prime venti pagine.", "tr": "我读了前二十页。", "nota": "序数词 prime 放在基数词 venti 前，和 pagine 一致。" },
      { "t": "Questa è la sua terza lettera.", "tr": "这是他的第三封信。" }
    ] },
    { "gruppo": "日期：一号用 primo，其余用基数词", "items": [
      { "t": "Il primo settembre inizia la scuola.", "tr": "九月一号开学。" },
      { "t": "Il due giugno è la festa della Repubblica.", "tr": "六月二号是共和国日。" },
      { "t": "Oggi è sabato 3 maggio.", "tr": "今天是五月三号，星期六。", "nota": "星期名在前，不加冠词；日期读作 il tre maggio。" },
      { "t": "Dal tre al dieci agosto siamo in vacanza.", "tr": "八月三号到十号我们休假。", "nota": "dal ... al ... 表示“从……到……”。" }
    ] },
    { "gruppo": "年份、月份、季节", "items": [
      { "t": "Nel 1969 l'uomo è arrivato sulla Luna.", "tr": "1969 年人类登上了月球。" },
      { "t": "Sono nato il 7 aprile 1998.", "tr": "我 1998 年 4 月 7 日出生。", "nota": "说出生的整个日子时，用 il 加日期，不加 nel。" },
      { "t": "Ci siamo sposati a giugno.", "tr": "我们是六月结婚的。", "nota": "a / ad / in 加月份：a giugno, ad aprile。" },
      { "t": "In estate fa molto caldo.", "tr": "夏天很热。" }
    ] },
    { "gruppo": "世纪和君主的名字", "items": [
      { "t": "Questa chiesa è del dodicesimo secolo.", "tr": "这座教堂是十二世纪的。" },
      { "t": "Leonardo da Vinci è nato nel Quattrocento.", "tr": "达芬奇生于十五世纪。", "nota": "Quattrocento 指 1400 年代，也就是十五世纪。" },
      { "t": "Luigi XIV era detto il Re Sole.", "tr": "路易十四被称为太阳王。", "nota": "读作 Luigi quattordicesimo。" }
    ] },
    { "gruppo": "星期：这个星期几，还是每个星期几", "items": [
      { "t": "Domenica scorsa ho visto i nonni.", "tr": "上个星期天我去看了爷爷奶奶。" },
      { "t": "Il martedì ho lezione di nuoto.", "tr": "每个星期二我有游泳课。", "nota": "阳性的星期名加 il：每一个星期二。" },
      { "t": "La domenica pranziamo dai nonni.", "tr": "每个星期天我们都去爷爷奶奶家吃午饭。", "nota": "domenica 是阴性，所以是 la domenica。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我住在三楼。”哪一句对？", "opzioni": [
      { "t": "Abito al terzo piano.", "ok": true, "perche": "楼层用序数词，terzo 和阳性的 piano 一致，al = a + il。" },
      { "t": "Abito al tre piano.", "ok": false, "perche": "tre 是基数词，说“第几层”要用序数词 terzo。" },
      { "t": "Abito al terzi piano.", "ok": false, "perche": "terzi 是复数，piano 是单数。" }
    ] },
    { "q": "“三月一号”哪一句对？", "opzioni": [
      { "t": "il primo marzo", "ok": true, "perche": "每月一号用序数词 primo。" },
      { "t": "il uno marzo", "ok": false, "perche": "一号不用基数词 uno；而且 uno 前面的冠词也不是 il。" },
      { "t": "marzo primo", "ok": false, "perche": "日期次序是先日后月：il primo marzo。" }
    ] },
    { "q": "“三月三号”哪一句对？", "opzioni": [
      { "t": "il tre marzo", "ok": true, "perche": "二号起的日期用基数词。" },
      { "t": "il terzo marzo", "ok": false, "perche": "terzo 是“第三”，日期里只有一号用序数词。" }
    ] },
    { "q": "“今天是十二月二十号，星期六。”哪一句对？", "opzioni": [
      { "t": "Oggi è sabato 20 dicembre.", "ok": true, "perche": "星期名直接放在日期前，不加冠词。" },
      { "t": "Oggi è il sabato 20 dicembre.", "ok": false, "perche": "冠词 il 属于日期（il 20 dicembre），不能放在星期名前面；“il sabato”表示每个星期六。" }
    ] },
    { "q": "“这个星期六我踢足球。”（指快要到来的那个星期六）哪一句对？", "opzioni": [
      { "t": "Sabato gioco a calcio.", "ok": true, "perche": "不加冠词的星期名指具体的某一天，这里是即将到来的星期六。" },
      { "t": "Il sabato gioco a calcio.", "ok": false, "perche": "il sabato 表示每个星期六，是习惯，和“这个星期六”不合。" }
    ] },
    { "q": "“1969 年人类登上月球。”哪一句对？", "opzioni": [
      { "t": "Nel 1969 l'uomo è arrivato sulla Luna.", "ok": true, "perche": "说“在某年”用 nel。" },
      { "t": "In 1969 l'uomo è arrivato sulla Luna.", "ok": false, "perche": "年份前面用 nel，不用 in。" },
      { "t": "Al 1969 l'uomo è arrivato sulla Luna.", "ok": false, "perche": "al 不能表示“在某年”。" }
    ] },
    { "q": "“这座教堂是十三世纪的。”哪一句对？（Duecento = 1200 年代）", "opzioni": [
      { "t": "La chiesa è del Duecento.", "ok": true, "perche": "Duecento 指 1200 年代，也就是十三世纪。" },
      { "t": "La chiesa è del Trecento.", "ok": false, "perche": "Trecento 是 1300 年代，也就是十四世纪。" }
    ] },
    { "q": "“路易十四”（Luigi XIV）怎么读？", "opzioni": [
      { "t": "Luigi quattordicesimo", "ok": true, "perche": "君主名字里的罗马数字读序数词。" },
      { "t": "Luigi quattordici", "ok": false, "perche": "基数词 quattordici 不能用在君主的名字后面。" },
      { "t": "Luigi quarto-dieci", "ok": false, "perche": "没有这样的说法；11 以上的序数词要用 -esimo。" }
    ] },
    { "q": "“我是五月出生的。”哪一句对？", "opzioni": [
      { "t": "Sono nato a maggio.", "ok": true, "perche": "月份前面用 a（元音前用 ad），表示“在某月”。" },
      { "t": "Sono nato al maggio.", "ok": false, "perche": "月份前不加定冠词，不能用 al。" },
      { "t": "Sono nato nel maggio giorno.", "ok": false, "perche": "没有这样的结构；“在五月”就是 a maggio。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Quando parti per le vacanze?",
    "righe": [
      { "chi": "A", "t": "Quando parti per le vacanze?", "tr": "你什么时候去度假？" },
      { "chi": "B", "t": "Il due agosto, un sabato. Torno il diciassette.", "tr": "八月二号，是个星期六。十七号回来。" },
      { "chi": "A", "t": "Quindi passi Ferragosto al mare.", "tr": "那你要在海边过八月中旬的节日了。" },
      { "chi": "B", "t": "Sì, il quindici agosto sono già in spiaggia. E tu?", "tr": "对，八月十五号我已经在海滩了。你呢？" },
      { "chi": "A", "t": "Io parto il primo settembre. È la prima volta che vado in montagna.", "tr": "我九月一号走。这是我第一次去山里。" },
      { "chi": "B", "t": "Bellissimo! Quanti ne abbiamo oggi?", "tr": "太好了！今天几号了？" }
    ],
    "esercizi": [
      { "q": "A 说九月一号动身。为什么用 il primo settembre？", "opzioni": [
        { "t": "每月一号用序数词 primo", "ok": true, "perche": "这是日期规则里的唯一例外。" },
        { "t": "因为九月是第九个月", "ok": false, "perche": "primo 和月份的顺序无关，说的是日期是一号。" },
        { "t": "因为 settembre 是阳性名词", "ok": false, "perche": "日期里用 primo，是因为是一号，不是因为月份名的性。" }
      ] },
      { "q": "B 几号回来？", "opzioni": [
        { "t": "十七号", "ok": true, "perche": "il diciassette 是基数词 17。" },
        { "t": "十五号", "ok": false, "perche": "十五号（il quindici agosto）是 B 在海滩上的那一天，不是回来的日子。" },
        { "t": "二号", "ok": false, "perche": "二号是出发的日子（il due agosto）。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的“号”和“第”是两个词，但学生容易把“第几”的 secondo, terzo 搬进日期，说成 *il secondo ottobre*；或者忘记序数词要和名词一致，说成 *la primo volta*；还有人照汉语的次序说 *ottobre dieci*。",
    "perche": "汉语日期是“月 + 号”，没有“第”；意大利语日期看起来也是数字，所以学生以为“二号”就是“第二”。另外汉语的序数“第一”没有性和数，所以容易忘记 primo 要变成 prima、primi、prime。",
    "esci": "说日期时先问自己：这是在数日子，还是在排顺序？日期用基数词（只有一号是 primo）；“第几层、第几次”用序数词，并且让它和名词一致。次序永远是 日―月―年。",
    "esempi": [
      { "sbagliata": "Il secondo ottobre parto.", "giusta": "Il due ottobre parto." },
      { "sbagliata": "Sono nato in 1999.", "giusta": "Sono nato nel 1999." },
      { "sbagliata": "È la primo volta.", "giusta": "È la prima volta." },
      { "sbagliata": "Oggi è ottobre il dieci.", "giusta": "Oggi è il dieci ottobre." }
    ]
  },
  "curiosi": [
    { "titolo": "1º 还是 1：一号怎么写", "t": "书面上，每月一号通常写成 1º（例如 1º dicembre），读作 il primo dicembre；只写 1 dicembre 也看得到，读的时候仍然是 primo。其他日期只写数字：2 giugno。" },
    { "titolo": "primo 和 secondo 也是菜单上的词", "t": "在餐厅里，primo 是第一道菜（通常是面食或汤），secondo 是第二道菜（肉或鱼）：Come primo prendo la pasta, come secondo il pesce。序数词在这里变成了名词。" },
    { "titolo": "星期名的小秘密", "t": "意大利语的星期名都是阳性，只有 domenica 是阴性，所以是 il lunedì，却是 la domenica。星期一到星期五的名字来自行星和神（lunedì 来自月亮，martedì 来自火星），不需要特别记，但重音要看清楚：lunedì, martedì 这些词的重音在最后一个音节。" },
    { "titolo": "年份的读法", "t": "年份按一个完整的数读：1999 是 millenovecentonovantanove，2026 是 duemilaventisei。口语里 2013 年也能听到 duemila e tredici 这种把 e 读出来的说法。在聊天时，也可以只说后两位：nel ’99。" }
  ],
  "pragmatica": "问日期时，Che giorno è oggi? 最常用，也可以说 Quanti ne abbiamo oggi?，回答只需要说数字：Ne abbiamo dodici，或者 È il dodici。写日期的时候，数字格式是 日/月/年：12/10/2026 是 2026 年 10 月 12 日，和美国的写法不同，所以在和外国人通信时最好把月份写成字母。说话时，朋友之间常常省略月份：Ci vediamo il venti（我们二十号见）。",
  "esercizi": [
    { "k": "scegli", "q": "“第二十一”用意大利语怎么说？", "opzioni": [
      { "t": "ventunesimo", "ok": true, "perche": "ventuno 去掉最后的 o，再加 -esimo。" },
      { "t": "ventiunesimo", "ok": false, "perche": "ventuno 的词干是 ventun-，不是 ventiun-。" },
      { "t": "ventuno", "ok": false, "perche": "ventuno 是基数词“二十一”，不是“第二十一”。" }
    ] },
    { "k": "scegli", "q": "“十月三十一号”哪一个是正确的？", "opzioni": [
      { "t": "il trentuno ottobre", "ok": true, "perche": "二号起的日期用基数词。" },
      { "t": "il trentunesimo ottobre", "ok": false, "perche": "trentunesimo 是“第三十一”，日期里不用序数词（一号除外）。" },
      { "t": "il ottobre trentuno", "ok": false, "perche": "意大利语日期的次序是“日 + 月”：il trentuno ottobre。把月份放在日期前面不对。" }
    ] },
    { "k": "scegli", "q": "“1.” 在 Papa Giovanni Paolo II 里怎么读 II？", "opzioni": [
      { "t": "secondo", "ok": true, "perche": "君主和教皇名字里的罗马数字读序数词：Giovanni Paolo secondo。" },
      { "t": "due", "ok": false, "perche": "due 是基数词，不用在君主的名字后面。" },
      { "t": "doppio", "ok": false, "perche": "doppio 是“双倍”，不是序数词。" }
    ] },
    { "k": "buco", "zh": "Abito al ＿ piano.", "tr": "我住在五楼。", "opzioni": [
      { "t": "quinto", "ok": true, "perche": "楼层用序数词，quinto 和阳性的 piano 一致。" },
      { "t": "cinque", "ok": false, "perche": "cinque 是基数词，“五楼”要用序数词。" },
      { "t": "cinquesimo", "ok": false, "perche": "-esimo 只用于第十一以后；第五是 quinto。" }
    ] },
    { "k": "buco", "zh": "È la ＿ volta che vedo il mare.", "tr": "这是我第一次看到大海。", "opzioni": [
      { "t": "prima", "ok": true, "perche": "volta 是阴性单数，所以用 prima。" },
      { "t": "primo", "ok": false, "perche": "primo 是阳性，volta 是阴性。" },
      { "t": "uno", "ok": false, "perche": "uno 是基数词，不能表示“第一次”。" }
    ] },
    { "k": "buco", "zh": "Sono nato ＿ 1995.", "tr": "我是 1995 年出生的。", "opzioni": [
      { "t": "nel", "ok": true, "perche": "说“在某年”用 nel。" },
      { "t": "in", "ok": false, "perche": "说“在某一年”要用 nel（in + il）：nel 1995。只写 in 1995，意大利语里不这样说。" },
      { "t": "al", "ok": false, "perche": "al 不能表示“在某年”。" }
    ] },
    { "k": "ordine", "t": "il quindici agosto siamo al mare", "alt": ["siamo al mare il quindici agosto"], "tr": "八月十五号我们在海边。" },
    { "k": "ordine", "t": "questa chiesa è del Duecento", "tr": "这座教堂是十三世纪的。" },
    { "k": "scrivi", "q": "用意大利语写：“十月一号是我的生日。”", "a": "Il primo ottobre è il mio compleanno.", "accetta": ["Il mio compleanno è il primo ottobre.", "Il 1º ottobre è il mio compleanno.", "Il 1° ottobre è il mio compleanno.", "Il mio compleanno è il 1º ottobre."], "perche": "一号用序数词 primo；先日后月。" },
    { "k": "scrivi", "q": "用意大利语写（男生）：“我是 1990 年 3 月 8 日出生的。”", "a": "Sono nato l'8 marzo 1990.", "accetta": ["Sono nato l'otto marzo 1990.", "Sono nato l'8 marzo del 1990.", "Sono nato l'otto marzo del 1990.", "Io sono nato l'8 marzo 1990."], "perche": "出生的整个日子用 il 加日期；otto 以元音开头，il 变成 l'：l'otto marzo。" },
    { "k": "trasforma", "consegna": "把日期改成五月一号。", "base": "Il due maggio parto.", "accetta": ["Il primo maggio parto.", "Parto il primo maggio.", "Il 1º maggio parto.", "Il 1 maggio parto."], "rifiutate": [
      { "t": "Il uno maggio parto.", "perche": "一号要用序数词 primo，不能用 uno。" }
    ], "perche": "一号是日期里唯一用序数词 primo 的日子。" },
    { "k": "trasforma", "consegna": "把“五楼”改成“十二楼”，整句话跟着改。", "base": "Abito al quinto piano.", "accetta": ["Abito al dodicesimo piano.", "Io abito al dodicesimo piano.", "Abito al 12º piano."], "rifiutate": [
      { "t": "Abito al dodici piano.", "perche": "说楼层要用序数词 dodicesimo，不能用基数词 dodici。" }
    ], "perche": "dodici 去掉最后的 i，再加 -esimo：dodicesimo。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Quando è il tuo compleanno?" },
      { "chi": "B", "t": "È il ＿ luglio.", "buco": true }
    ], "opzioni": [
      { "t": "tre", "ok": true, "perche": "二号起的日期用基数词。" },
      { "t": "terzo", "ok": false, "perche": "terzo 是“第三”，日期里不用序数词（一号除外）。" },
      { "t": "terzi", "ok": false, "perche": "terzi 是序数词的复数，日期里不用。" }
    ] }
  ],
  "capaci": [
    "你会说“第一、第二……第十二”和“第二十一”，并让序数词和名词保持一致，例如 al terzo piano、la prima volta。",
    "你会说日期和星期：il primo marzo、il due giugno、Oggi è sabato 3 maggio。",
    "你会用 nel 说年份，用 a / in 说月份，并区分 sabato 和 il sabato。",
    "你会读世纪和君主的名字：il Novecento、Luigi quattordicesimo。"
  ],
  "glosse": {
    "Che giorno è oggi": "今天是几号？",
    "Quanti ne abbiamo oggi": "今天是几号？"
  },
  "fonti": [
    "Wikipedia (inglese), «Date and time notation in Italy» (primo per il primo del mese, cardinali per gli altri giorni, articolo davanti alla data, mesi e giorni in minuscolo)",
    "Tatoeba (ita.tsv, grep): «il primo maggio» (4), «Che giorno è oggi» (7), «Quanti ne abbiamo» (3), «il ventesimo» (2)"
  ]
};
