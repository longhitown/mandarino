/* Lezione 2 · Il nome: maschile, femminile e plurale (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["genere"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Il ragazzo mangia una mela.", "tr": "男孩吃一个苹果。" },
      { "t": "I ragazzi mangiano due mele.", "tr": "男孩们吃两个苹果。" },
      { "t": "Una ragazza apre la finestra.", "tr": "一个女孩打开窗户。" },
      { "t": "Due ragazze aprono le finestre.", "tr": "两个女孩打开几扇窗户。" }
    ],
    "domanda": "比较 ragazzo / ragazzi / ragazza / ragazze，以及 mela / mele、finestra / finestre：名词的哪一部分在变？冠词（il、i、una、la、le）跟着发生了什么变化？汉语说“两个苹果”时，“苹果”会变吗？",
    "risposta": "变的是名词的**最后一个元音**：-o 表示阳性单数（ragazzo），-i 表示阳性复数（ragazzi），-a 表示阴性单数（ragazza），-e 表示阴性复数（ragazze）。冠词也跟着变：il → i，una → le。汉语的“苹果”在“一个”和“两个”里完全相同，意大利语却要在名词的结尾上表示**性**和**数**。"
  },
  "regola": {
    "enunciato": "意大利语的每个名词都有固定的**性**（阳性或阴性）和**数**（单数或复数）。名词最后的元音通常告诉你它是什么：**-o 多是阳性，-a 多是阴性，-e 两种都有**；变复数时，最后的元音也要变：**-o → -i，-a → -e，-e → -i**。冠词和名词一起变化，所以学名词时要把冠词一起记住：il libro、la casa、il pane、la chiave。",
    "schema": ["-o → -i", "｜", "-a → -e", "｜", "-e → -i"],
    "punti": [
      { "ok": true, "t": "**性看结尾，但 -e 要记**：libro、quaderno 是阳性，casa、mela 是阴性；-e 结尾的词没有规律，要和冠词一起记：il pane、il fiore、il dente 是阳性，la chiave、la notte、la lezione 是阴性。" },
      { "ok": true, "t": "**规则复数**：-o 变 -i（libro → libri），-a 变 -e（casa → case），-e 变 -i（chiave → chiavi，fiore → fiori）。数量多于一时，名词一定要变。" },
      { "ok": true, "t": "**以 -a 结尾的阳性名词**：problema、programma、sistema 是阳性，复数是 -i：il problema → i problemi。指人的 -ista 同形：il turista 是男游客，la turista 是女游客，复数 i turisti（男或混合）、le turiste（全是女性）。" },
      { "ok": true, "t": "**复数不变的名词**：最后一个元音有重音符号的（città、caffè、università），外来词（film、bar、computer），缩略词（foto、bici、auto）。una città → due città，un film → tre film。" },
      { "ok": true, "t": "**-co、-go、-ca、-ga 的复数**：-ca、-ga 一律变 -che、-ghe（amica → amiche，riga → righe），写 h 是为了保持硬音；-co、-go 多数变 -chi、-ghi（lago → laghi，gioco → giochi），但有些变 -ci（amico → amici，medico → medici），要记。" },
      { "ok": true, "t": "**不规则复数要单独记**：uomo → uomini；uovo（阳性）→ uova（阴性复数）；mano（阴性）→ mani；un paio → due paia。" },
      { "ok": true, "t": "**指人的名词常有成对的阳性和阴性**：maestro / maestra，studente / studentessa，scrittore / scrittrice；以 -ista 结尾的词阴阳同形：il / la giornalista。" },
      { "ok": false, "t": "**不要加 -s，也不要保持单数**：汉语不变，英语加 -s，意大利语是改最后的元音。不说 *due libro*、*due libros*、*due caffès*。" }
    ]
  },
  "logica": [
    "汉语的名词没有性，也没有单复数：一本书、两本书里“书”都不变，数量靠“两”和量词来表示。意大利语相反：数量和性别都写在**名词的结尾**上，冠词、形容词再重复一次。所以数量一旦多于一，名词的结尾就必须变。",
    "性是名词的“标签”，和事物是不是真有性别无关：la casa（房子）、la porta（门）是阴性，il libro（书）、il tavolo（桌子）是阳性。好消息是，结尾给了很大的帮助：大多数 -o 结尾的名词是阳性，大多数 -a 结尾的是阴性。-e 结尾最不好判断，所以要把冠词当作名词的一部分来记。",
    "变复数的规律其实很简单：**元音换一换**。-o 和 -e 变成 -i，-a 变成 -e。把它看成“交换元音”，比记很多表格更有效。真正需要额外记忆的，是少数不变的词、有 h 的拼写变化，以及 uomo、uovo、mano 这样的不规则词。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["单数结尾", "性", "复数", "例子"],
    "righe": [
      ["-o", "阳性", "-i", "il libro → i libri"],
      ["-a", "阴性", "-e", "la casa → le case"],
      ["-e", "阳性或阴性", "-i", "il dente → i denti，la chiave → le chiavi"],
      ["-ca · -ga", "阴性", "-che · -ghe", "l'amica → le amiche"],
      ["-co · -go", "阳性", "-chi · -ghi（多数）", "il lago → i laghi"],
      ["-ma（希腊词）", "阳性", "-mi", "il problema → i problemi"],
      ["重读的元音", "阳性或阴性", "不变", "il caffè → i caffè，la città → le città"],
      ["辅音结尾（外来词）", "多为阳性", "不变", "il film → i film"],
      ["不规则", "—", "单独记", "l'uomo → gli uomini，l'uovo → le uova"]
    ]
  },
  "esempi": [
    { "gruppo": "-o 和 -a：最常见的两类", "items": [
      { "t": "Ho un libro e due quaderni.", "tr": "我有一本书和两个本子。", "nota": "libro、quaderno 是阳性，复数变 -i。" },
      { "t": "Compro una mela e due pere.", "tr": "我买一个苹果和两个梨。", "nota": "mela、pera 是阴性，复数变 -e。" }
    ] },
    { "gruppo": "-e：阳性还是阴性，要和冠词一起记", "items": [
      { "t": "Ho perso due chiavi.", "tr": "我丢了两把钥匙。", "nota": "chiave 是阴性：la chiave，复数 le chiavi。" },
      { "t": "Mi fanno male i denti.", "tr": "我牙疼。", "nota": "dente 是阳性：il dente，复数 i denti。" }
    ] },
    { "gruppo": "以 -a 结尾的阳性名词", "items": [
      { "t": "Questo problema è difficile.", "tr": "这个问题很难。", "nota": "problema 是阳性，所以用 questo，不用 questa。" },
      { "t": "Il turista è inglese, la turista è francese.", "tr": "那位男游客是英国人，那位女游客是法国人。", "nota": "turista 阴阳同形，要看冠词判断性别。" }
    ] },
    { "gruppo": "复数不变的名词", "items": [
      { "t": "Prendiamo due caffè, per favore.", "tr": "请来两杯咖啡。", "nota": "caffè 最后的元音重读，复数不变。" },
      { "t": "Ho visto tre film questa settimana.", "tr": "这个星期我看了三部电影。", "nota": "film 是外来词，复数不变。" },
      { "t": "Ci sono due università in questa città.", "tr": "这座城市有两所大学。", "nota": "università 和 città 都不变。" }
    ] },
    { "gruppo": "-co、-go、-ca、-ga：保持硬音要加 h", "items": [
      { "t": "In Italia ci sono molti laghi.", "tr": "意大利有很多湖。", "nota": "lago → laghi，h 让 g 保持硬音 [g]。" },
      { "t": "Le banche aprono alle otto e mezza.", "tr": "银行八点半开门。", "nota": "banca → banche，h 让 c 保持硬音 [k]。" },
      { "t": "Ho molti amici e molte amiche.", "tr": "我有很多朋友，男的女的都有。", "nota": "amico → amici，amica → amiche。" }
    ] },
    { "gruppo": "不规则的复数", "items": [
      { "t": "Per fare la torta servono sei uova.", "tr": "做蛋糕要六个鸡蛋。", "nota": "uovo → uova，复数是阴性。" },
      { "t": "Lavati le mani prima di mangiare.", "tr": "吃饭前去洗手。", "nota": "mano 是阴性，复数 le mani。" },
      { "t": "Nella sala ci sono dieci uomini e dieci donne.", "tr": "大厅里有十个男人和十个女人。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我有两本书。”里的“两本书”怎么说？", "opzioni": [
      { "t": "due libri", "ok": true, "perche": "libro 是 -o 结尾的阳性名词，复数变 -i。" },
      { "t": "due libro", "ok": false, "perche": "数量多于一，名词要变复数；汉语不变，意大利语要变。" },
      { "t": "due libros", "ok": false, "perche": "意大利语不加 -s，而是改最后的元音。" }
    ] },
    { "q": "“三个苹果”怎么说？（说的是水果）", "opzioni": [
      { "t": "tre mele", "ok": true, "perche": "mela 是阴性，复数变 -e。" },
      { "t": "tre meli", "ok": false, "perche": "meli 是 melo（苹果树）的复数，意思变成了“三棵苹果树”。" },
      { "t": "tre mela", "ok": false, "perche": "数量多于一，名词要变复数。" }
    ] },
    { "q": "“这个问题很难。”哪一句对？", "opzioni": [
      { "t": "Questo problema è difficile.", "ok": true, "perche": "problema 虽然以 -a 结尾，但它是阳性，要用 questo。" },
      { "t": "Questa problema è difficile.", "ok": false, "perche": "不能只看 -a 来判断性：problema 是阳性。" },
      { "t": "Questo problemo è difficile.", "ok": false, "perche": "problemo 不存在；problema 的结尾不能改成 -o。" }
    ] },
    { "q": "“两杯咖啡”怎么说？", "opzioni": [
      { "t": "due caffè", "ok": true, "perche": "最后一个元音重读的词，复数形式不变。" },
      { "t": "due caffès", "ok": false, "perche": "意大利语不用 -s 表示复数。" },
      { "t": "due caffi", "ok": false, "perche": "这类词（重读元音结尾）不换元音，复数不变。" }
    ] },
    { "q": "“两个鸡蛋”怎么说？", "opzioni": [
      { "t": "due uova", "ok": true, "perche": "uovo 的复数是不规则的 uova，变成了阴性。" },
      { "t": "due uovi", "ok": false, "perche": "按“-o 变 -i”会得到 uovi，但 uovo 是不规则词。" },
      { "t": "due uove", "ok": false, "perche": "uove 不存在，复数是 uova。" }
    ] },
    { "q": "“我的朋友们”，全是女生。哪一个对？", "opzioni": [
      { "t": "le mie amiche", "ok": true, "perche": "amica 的复数是 amiche，用 h 保持硬音 [k]。" },
      { "t": "le mie amice", "ok": false, "perche": "amice 会读成 [aˈmitʃe]，不是想要的硬音。" },
      { "t": "i miei amici", "ok": false, "perche": "amici 是阳性复数，用于男生或男女混合，不符合“全是女生”。" }
    ] },
    { "q": "“意大利有很多湖”里的“很多湖”怎么说？", "opzioni": [
      { "t": "molti laghi", "ok": true, "perche": "lago 的复数是 laghi，h 保持 g 的硬音。" },
      { "t": "molti lagi", "ok": false, "perche": "lagi 会读成 [ˈladʒi]，不是硬音。" },
      { "t": "molti lago", "ok": false, "perche": "molti 后面的名词必须用复数形式。" }
    ] },
    { "q": "三位女游客：“这些都是游客”（全是女性）。哪一句对？", "opzioni": [
      { "t": "Sono turiste.", "ok": true, "perche": "turista 复数：全是女性用 turiste，男性或混合用 turisti。" },
      { "t": "Sono turisti.", "ok": false, "perche": "turisti 是男性或混合的群体，全是女性时用 turiste。" },
      { "t": "Sono turistas.", "ok": false, "perche": "意大利语不用加 -s 来表示复数。" }
    ] },
    { "q": "“洗手”：哪一句对？", "opzioni": [
      { "t": "Lavati le mani.", "ok": true, "perche": "mano 以 -o 结尾，但是阴性；复数是 mani，冠词用 le。" },
      { "t": "Lavati i mani.", "ok": false, "perche": "mano 是阴性，冠词要用 le，不是 i。" },
      { "t": "Lavati le mane.", "ok": false, "perche": "mano 的复数是 mani，不是 mane，也不会换成别的结尾。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Al negozio di alimentari",
    "righe": [
      { "chi": "A", "t": "Buongiorno! Vorrei due chili di mele e sei uova, per favore.", "tr": "你好！请给我两公斤苹果和六个鸡蛋。" },
      { "chi": "B", "t": "Ecco le mele. Altro?", "tr": "苹果给您。还要别的吗？" },
      { "chi": "A", "t": "Sì, due formaggi e tre bottiglie d'acqua.", "tr": "要，两块奶酪和三瓶水。" },
      { "chi": "B", "t": "Ecco i formaggi. Le bottiglie sono là.", "tr": "奶酪给您。水在那边。" },
      { "chi": "A", "t": "Perfetto. Quanto pago?", "tr": "好的。我付多少钱？" },
      { "chi": "B", "t": "Sono dodici euro.", "tr": "十二欧元。" }
    ],
    "esercizi": [
      { "q": "A 说 sei uova，uova 是什么？", "opzioni": [
        { "t": "uovo 的不规则复数，是阴性", "ok": true, "perche": "uovo 单数阳性，复数 uova 属于阴性，要说 le uova。" },
        { "t": "uovo 的规则复数，是阳性", "ok": false, "perche": "规则复数会是 uovi，但 uovo 是不规则词。" },
        { "t": "uovo 的单数", "ok": false, "perche": "单数是 uovo；sei（六）后面要用复数。" }
      ] },
      { "q": "B 说 Le bottiglie sono là，为什么用 le？", "opzioni": [
        { "t": "bottiglia 是阴性，bottiglie 是阴性复数", "ok": true, "perche": "-ia 阴性名词变复数，冠词用阴性复数 le。" },
        { "t": "bottiglie 是阳性复数", "ok": false, "perche": "阳性复数的冠词是 i（或 gli），bottiglie 是阴性。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的名词不变，所以说“两本书”时常常保持单数，说成 *due libro*；或者受英语影响加 -s：*due caffès*。另一个常见错误是只看结尾猜性别：*una problema*、*il mano*。",
    "perche": "汉语靠“两”和量词表示数量，名词不需要变；意大利语的数量和性别都写在名词的结尾元音上。而且有一部分名词是例外，不能只看结尾。",
    "esci": "每次说名词，先问两个问题：①是一个还是多个？多个就把结尾元音换掉（-o/-e → -i，-a → -e）；②这个词有没有例外？带重音的词不变，problema 是阳性，uovo 的复数是 uova，mano 是阴性。记新词时连冠词一起记。",
    "esempi": [
      { "sbagliata": "due libro", "giusta": "due libri" },
      { "sbagliata": "due caffès", "giusta": "due caffè" },
      { "sbagliata": "una problema", "giusta": "un problema" },
      { "sbagliata": "due uovi", "giusta": "due uova" }
    ]
  },
  "curiosi": [
    { "titolo": "uova、mani、paia：拉丁语留下的痕迹", "t": "uova 来自拉丁语的中性复数 ova。拉丁语有阳性、阴性、中性三个性，意大利语只保留两个，一部分中性词变成了阳性，复数却保留了 -a，并被当作阴性：un uovo, due uova；un paio di scarpe, due paia di scarpe。mano 来自拉丁语的第四变格法，一直是阴性，复数是 le mani。" },
    { "titolo": "性和事物的性别无关", "t": "名词的性是语法上的：la guardia（守卫）是阴性，但可以指男人；il soprano（女高音）是阳性，却常指女歌手。指人的名词有 -tore → -trice、-e → -essa 这样的成对形式；近年来职业名称的阴性形式（la sindaca, l'avvocata）在日常和新闻中越来越常见。" },
    { "titolo": "-cia、-gia 的复数要单独记", "t": "以 -cia、-gia 结尾的阴性名词有两种复数：arancia → arance，spiaggia → spiagge；camicia → camicie，valigia → valigie，ciliegia → ciliegie。哪种形式是哪个词，要在学新词时一起记，最常用的词多数都能在日常生活里反复遇到。" }
  ],
  "pragmatica": "学新词时一定要连冠词一起记：不是 chiave，而是 la chiave；不是 problema，而是 il problema。点餐和买东西时，数量加名词的复数是最常用的结构：due caffè, tre mele, sei uova。说错了性或数，对方通常也能听懂，但会觉得别扭；先把最常用的几十个名词的性和复数记牢，效果最好。",
  "esercizi": [
    { "k": "scegli", "q": "下面哪个名词是阴性？", "opzioni": [
      { "t": "la chiave", "ok": true, "perche": "chiave 以 -e 结尾，但是阴性：la chiave。" },
      { "t": "il libro", "ok": false, "perche": "libro 是 -o 结尾的阳性名词。" },
      { "t": "il problema", "ok": false, "perche": "problema 虽然以 -a 结尾，却是阳性。" }
    ] },
    { "k": "scegli", "q": "下面哪个词的复数和单数一样？", "opzioni": [
      { "t": "città", "ok": true, "perche": "最后一个元音重读的词，复数不变：una città, due città。" },
      { "t": "casa", "ok": false, "perche": "casa 的复数是 case。" },
      { "t": "libro", "ok": false, "perche": "libro 的复数是 libri。" }
    ] },
    { "k": "scegli", "q": "le uova 里，为什么冠词用 le？", "opzioni": [
      { "t": "uova 是阴性复数", "ok": true, "perche": "uovo 单数阳性，不规则复数 uova 属于阴性，冠词用 le。" },
      { "t": "uova 是阳性复数", "ok": false, "perche": "阳性复数的冠词是 i，不是 le。" },
      { "t": "因为 uova 以 -a 结尾，所以是单数", "ok": false, "perche": "uova 是复数，单数是 uovo。" }
    ] },
    { "k": "buco", "zh": "Ho tre ＿ in borsa.", "tr": "我包里有三把钥匙。", "opzioni": [
      { "t": "chiavi", "ok": true, "perche": "chiave 是 -e 结尾，复数变 -i。" },
      { "t": "chiave", "ok": false, "perche": "tre 后面要用复数。" },
      { "t": "chiavo", "ok": false, "perche": "chiave 不能改成 -o 结尾。" }
    ] },
    { "k": "buco", "zh": "Nella mia città ci sono due ＿.", "tr": "我的城市有两所大学。", "opzioni": [
      { "t": "università", "ok": true, "perche": "最后一个元音重读的词，复数不变。" },
      { "t": "universite", "ok": false, "perche": "不存在这个形式，重读元音结尾的词不变。" },
      { "t": "universiti", "ok": false, "perche": "不存在这个形式，复数仍是 università。" }
    ] },
    { "k": "buco", "zh": "In Italia ci sono molti ＿ bellissimi.", "tr": "意大利有很多非常美的湖。", "opzioni": [
      { "t": "laghi", "ok": true, "perche": "lago → laghi，h 保持硬音。" },
      { "t": "lagi", "ok": false, "perche": "lagi 会读成 [ˈladʒi]，硬音丢了。" },
      { "t": "lago", "ok": false, "perche": "molti 后面要用复数。" }
    ] },
    { "k": "ordine", "t": "ho comprato due libri e tre penne", "tr": "我买了两本书和三支笔。" },
    { "k": "ordine", "t": "le chiavi sono sul tavolo", "tr": "钥匙在桌子上。" },
    { "k": "scrivi", "q": "用意大利语写：“两杯咖啡”。", "a": "due caffè", "accetta": ["Due caffè", "2 caffè"], "perche": "caffè 的最后一个元音重读，复数不变。" },
    { "k": "scrivi", "q": "写出 amica（女性朋友）的复数形式，要带冠词 le。", "a": "le amiche", "accetta": ["Le amiche", "amiche", "Amiche"], "perche": "amica → amiche，h 让 c 保持硬音 [k]。" },
    { "k": "trasforma", "consegna": "把句子改成复数：男孩们吃苹果（几个苹果都可以）。", "base": "Il ragazzo mangia una mela.", "accetta": ["I ragazzi mangiano le mele.", "I ragazzi mangiano due mele.", "I ragazzi mangiano delle mele.", "I ragazzi mangiano mele."], "rifiutate": [
      { "t": "I ragazzo mangiano le mele.", "perche": "冠词变成 i 时，名词也要变成复数 ragazzi。" }
    ], "perche": "il ragazzo → i ragazzi，una mela → le mele / due mele；动词也要变成 mangiano。" },
    { "k": "trasforma", "consegna": "把句子里的钥匙和鸡蛋都改成“两个”，用 due。", "base": "Compro una chiave e un uovo.", "accetta": ["Compro due chiavi e due uova.", "Compro due chiavi e due uova"], "rifiutate": [
      { "t": "Compro due chiavi e due uovi.", "perche": "uovo 是不规则词，复数是 uova，不是 uovi。" }
    ], "perche": "chiave → chiavi，uovo → uova。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Che cosa c'è nel frigo?" },
      { "chi": "B", "t": "Ci sono sei ＿ e due formaggi.", "buco": true }
    ], "opzioni": [
      { "t": "uova", "ok": true, "perche": "sei 要求复数，uovo 的复数是不规则的 uova。" },
      { "t": "uovi", "ok": false, "perche": "uovi 是按规则得到的形式，但 uovo 的复数是 uova。" },
      { "t": "uovo", "ok": false, "perche": "sei 后面要用复数。" }
    ] }
  ],
  "capaci": [
    "你会根据结尾判断大多数名词的性，并把冠词和名词一起记。",
    "你会把 -o、-a、-e 结尾的名词变成复数，也会处理 amiche、laghi 这类带 h 的变化。",
    "你会认出 città、caffè、film 这样复数不变的名词，以及 uova、mani 这样的不规则词。",
    "你会避开 *due libro*、*due caffès*、*una problema* 这样的汉语母语者常见错误。"
  ],
  "fonti": [
    "Treccani, Enciclopedia dell'Italiano, voce «plurale» (Cimaglia, 2011): nomi invariabili, uovo/uova, mano/mani, nomi in -a maschili e in -ista (pagina letta)",
    "Tatoeba (ita.tsv), frasi reali con amici, amiche, laghi, banche, medici, le uova, le mani: verificate con grep nel corpus locale"
  ]
};
