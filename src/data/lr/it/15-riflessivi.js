/* Lezione 15 · I verbi riflessivi (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["riflessivi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Marco lava il bambino.", "tr": "马可给孩子洗澡。" },
      { "t": "Marco si lava.", "tr": "马可在洗澡（洗自己）。" },
      { "t": "Marco e Anna si salutano.", "tr": "马可和安娜互相打招呼。" },
      { "t": "Mi chiamo Marco.", "tr": "我叫马可。" }
    ],
    "domanda": "第一句和第二句的动词都是 lava，可是第二句多了一个 si。这个 si 指的是谁？第三句的 si 是什么意思？第四句的 mi 呢：汉语说“我叫马可”，有没有“自己”？",
    "risposta": "第二句的 **si** 指的就是**主语自己**：马可洗的是自己，不是别人。第三句的 **si** 是“互相”：马可和安娜互相打招呼。第四句的 **mi chiamo** 字面是“我把自己叫作马可”，汉语没有“自己”，意大利语却一定要有 **mi**。所以：动作回到做动作的人自己身上，或者在几个人之间互相发生，动词前就要加一个反身代词，动词叫**反身动词**。"
  },
  "regola": {
    "enunciato": "**反身动词**表示动作回到主语自己身上（lavarsi 洗自己、vestirsi 给自己穿衣服），或者几个人互相做（vedersi 互相见面），也有一些是固定形式（chiamarsi 叫……名字、arrabbiarsi 生气）。反身代词 **mi、ti、si、ci、vi、si** 必须和主语的人称一致，放在变位动词前面；近过去时通常用 **essere**，过去分词和主语一致。",
    "schema": ["主语", "反身代词 mi/ti/si…", "变位动词", "其他成分"],
    "punti": [
      { "ok": true, "t": "**代词跟着主语变**：io mi alzo, tu ti alzi, lui/lei si alza, noi ci alziamo, voi vi alzate, loro si alzano。代词放在变位动词前面，动词本身按 -are、-ere、-ire 的规则变位。" },
      { "ok": true, "t": "**三种常见的意思**：①自己对自己（lavarsi, vestirsi, svegliarsi）；②互相（vedersi, salutarsi, telefonarsi）；③固定形式，要整个记（chiamarsi, arrabbiarsi, divertirsi, addormentarsi）。" },
      { "ok": true, "t": "**不定式**：去掉 -e，加上代词，写成一个词，代词跟着主语变：Devo alzarmi presto. 有 dovere、potere、volere 时，代词也可以放在助动词前面：Mi devo alzare presto." },
      { "ok": true, "t": "**近过去时**：代词 + essere + 过去分词，分词和主语一致：Mi sono alzato（男）、Mi sono alzata（女）、Ci siamo alzati / alzate（我们）。即使后面有宾语也是如此：Mi sono lavato le mani." },
      { "ok": true, "t": "**身体部分和衣服**：用定冠词，不用物主词：Mi lavo le mani, Si è tagliata un dito, Mi metto il cappotto。“洗我的手”不说 le mie mani。" },
      { "ok": true, "t": "**命令式**：对 tu 说，代词接在动词后面：Alzati! Siediti! 对用 Lei 称呼的人，代词在前面：Si alzi, Si sieda, prego。" },
      { "ok": false, "t": "**不要**漏掉反身代词：不说 Io alzo alle sette，要说 Mi alzo alle sette。也不要用 avere：不说 Mi ho alzato，要说 Mi sono alzato。" }
    ]
  },
  "logica": [
    "汉语说“我起床”“我洗澡”“他穿衣服”，动词后面不需要“自己”，“自己”只在强调时才出现。意大利语不同：alzare 的意思是“把某个东西抬起来”，alzarsi 才是“起床”（把自己抬起来）。动作的对象如果就是做动作的人，就要在动词前用一个代词把它标出来。所以 Marco lava il bambino 和 Marco si lava 是两个不同的句子：前者洗别人，后者洗自己。",
    "有些动词的意思因为加了代词而变了：chiamare 是“呼叫、打电话给某人”，chiamarsi 是“名字叫……”；Chiamo Marco 是“我叫（呼叫）马可”，Mi chiamo Marco 才是“我叫马可”。这类动词要连代词整个记下来，不要按汉语去猜“自己”在哪里。",
    "近过去时用 essere，可以这样想：动作回到主语自己，主语既是做的人，也是受影响的人，所以和 essere 一类动词一样，分词要和主语的性和数一致：Maria si è alzata, i ragazzi si sono alzati。有直接宾语时也一样，用的还是 essere：Si è lavata le mani。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["人称", "现在时（svegliarsi）", "近过去时"],
    "righe": [
      ["io", "mi sveglio", "mi sono svegliato / svegliata"],
      ["tu", "ti svegli", "ti sei svegliato / svegliata"],
      ["lui / lei / Lei", "si sveglia", "si è svegliato / svegliata"],
      ["noi", "ci svegliamo", "ci siamo svegliati / svegliate"],
      ["voi", "vi svegliate", "vi siete svegliati / svegliate"],
      ["loro", "si svegliano", "si sono svegliati / svegliate"]
    ]
  },
  "esempi": [
    { "gruppo": "每天的动作：醒、起、洗、穿", "items": [
      { "t": "Di solito mi sveglio alle sei e mezza.", "tr": "我通常六点半醒。" },
      { "t": "Mi alzo, mi lavo e mi vesto in venti minuti.", "tr": "我二十分钟内起床、洗漱、穿好衣服。" },
      { "t": "I bambini si addormentano presto.", "tr": "孩子们很早入睡。" },
      { "t": "Come ti chiami?", "tr": "你叫什么名字？", "nota": "字面是“你把自己叫作什么”。" }
    ] },
    { "gruppo": "身体和衣服：用冠词，不用物主词", "items": [
      { "t": "Mi lavo le mani prima di mangiare.", "tr": "我吃饭前洗手。", "nota": "le mani，不是 le mie mani。" },
      { "t": "Si è tagliata un dito con il coltello.", "tr": "她用刀割到了手指。" },
      { "t": "Mi metto il cappotto perché fa freddo.", "tr": "我穿上大衣，因为很冷。" }
    ] },
    { "gruppo": "互相：几个人之间的动作", "items": [
      { "t": "Ci vediamo domani alle otto.", "tr": "我们明天八点见。", "nota": "告别时最常用的说法之一。" },
      { "t": "Luca e Sara si sono conosciuti a Milano.", "tr": "卢卡和萨拉是在米兰认识的。" },
      { "t": "Ci telefoniamo ogni sera.", "tr": "我们每天晚上互相打电话。" }
    ] },
    { "gruppo": "近过去时和不定式", "items": [
      { "t": "Stamattina mi sono svegliata tardi.", "tr": "今天早上我醒得很晚。（说话的是女性）" },
      { "t": "Ci siamo divertiti molto alla festa.", "tr": "我们在聚会上玩得很开心。" },
      { "t": "Domani devo alzarmi presto.", "tr": "明天我得早起。" },
      { "t": "Domani mi devo alzare presto.", "tr": "明天我得早起。", "nota": "和上一句意思一样：代词接在不定式后面，或放在 devo 前面。" }
    ] },
    { "gruppo": "有代词和没有代词：意思不同", "items": [
      { "t": "La mamma sveglia i bambini alle sette.", "tr": "妈妈七点叫醒孩子们。", "nota": "svegliare：叫醒别人，没有反身代词。" },
      { "t": "Chiamo il medico: mi sento male.", "tr": "我给医生打电话：我觉得不舒服。", "nota": "chiamare 是打电话找人；sentirsi 是“觉得自己怎么样”。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我七点起床。”哪一句对？", "opzioni": [
      { "t": "Mi alzo alle sette.", "ok": true, "perche": "起床是 alzarsi（把自己抬起来），要加反身代词 mi。" },
      { "t": "Io alzo alle sette.", "ok": false, "perche": "alzare 的意思是“抬起某物”，没有宾语的句子不通，也不是“起床”。" }
    ] },
    { "q": "“我叫马可。”（介绍自己的名字）哪一句对？", "opzioni": [
      { "t": "Mi chiamo Marco.", "ok": true, "perche": "名字叫……是 chiamarsi，必须带 mi。" },
      { "t": "Io chiamo Marco.", "ok": false, "perche": "chiamo Marco 的意思是“我叫（呼叫）马可”，不是介绍自己的名字。" }
    ] },
    { "q": "“她今天早上醒晚了。”（她是女的，近过去时）哪一句对？", "opzioni": [
      { "t": "Si è svegliata tardi.", "ok": true, "perche": "反身动词用 essere，分词和主语（她）一致，所以是 svegliata。" },
      { "t": "Si è svegliato tardi.", "ok": false, "perche": "svegliato 是阳性；主语是她，分词要用阴性 svegliata。" }
    ] },
    { "q": "“我洗了手。”（说话的是男性，近过去时）哪一句对？", "opzioni": [
      { "t": "Mi sono lavato le mani.", "ok": true, "perche": "反身动词的近过去时用 essere；分词和主语（我，男）一致。" },
      { "t": "Mi ho lavato le mani.", "ok": false, "perche": "反身代词不能和 avere 连用，近过去时要用 essere。" }
    ] },
    { "q": "“我洗手。”哪一句对？", "opzioni": [
      { "t": "Mi lavo le mani.", "ok": true, "perche": "反身动词加定冠词，表示“自己的手”，不用物主词。" },
      { "t": "Mi lavo le mie mani.", "ok": false, "perche": "反身代词已经说明手是自己的，再加 mie 重复，意大利语里不自然。" }
    ] },
    { "q": "“妈妈给孩子洗澡。”（洗的是孩子）哪一句对？", "opzioni": [
      { "t": "La mamma lava il bambino.", "ok": true, "perche": "洗的是别人，动词不加反身代词。" },
      { "t": "La mamma si lava il bambino.", "ok": false, "perche": "si lava 表示妈妈洗自己；洗孩子时不需要 si。" }
    ] },
    { "q": "“我们明天见面。”（互相见面）哪一句对？", "opzioni": [
      { "t": "Ci vediamo domani.", "ok": true, "perche": "表示互相，用 noi 的反身代词 ci。" },
      { "t": "Mi vediamo domani.", "ok": false, "perche": "代词要和主语 noi 一致，mi 是 io 的代词。" }
    ] },
    { "q": "“明天我得早起。”哪一句对？", "opzioni": [
      { "t": "Domani devo alzarmi presto.", "ok": true, "perche": "不定式接代词，代词和主语 io 一致，是 -mi。" },
      { "t": "Domani devo alzarsi presto.", "ok": false, "perche": "-si 对应 lui、lei 或 Lei；主语是 io，要用 alzarmi。" }
    ] },
    { "q": "“我们在聚会上玩得很开心。”（近过去时）哪一句对？", "opzioni": [
      { "t": "Ci siamo divertiti molto alla festa.", "ok": true, "perche": "divertirsi 是固定形式，近过去时用 essere，分词和 noi 一致。" },
      { "t": "Abbiamo divertito molto alla festa.", "ok": false, "perche": "divertire 的意思是“逗乐别人”，需要宾语；“自己玩得开心”是 divertirsi。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Una mattina difficile",
    "righe": [
      { "chi": "A", "t": "A che ora ti svegli di solito?", "tr": "你通常几点醒？" },
      { "chi": "B", "t": "Mi sveglio alle sette, ma mi alzo alle sette e mezza.", "tr": "我七点醒，可是七点半才起床。" },
      { "chi": "A", "t": "E stamattina?", "tr": "那今天早上呢？" },
      { "chi": "B", "t": "Stamattina mi sono svegliata tardi e mi sono vestita di corsa.", "tr": "今天早上我醒得晚，匆匆忙忙地穿好了衣服。" },
      { "chi": "A", "t": "Allora hai perso la colazione!", "tr": "那你错过早餐了！" },
      { "chi": "B", "t": "Sì, ma ci vediamo a pranzo, no?", "tr": "是啊，不过我们午饭时见，对吧？" }
    ],
    "esercizi": [
      { "q": "B 说 Mi sono svegliata，为什么结尾是 -a？", "opzioni": [
        { "t": "因为说话的 B 是女性，分词和主语一致", "ok": true, "perche": "反身动词用 essere，过去分词和主语的性、数一致。" },
        { "t": "因为 svegliarsi 总是阴性", "ok": false, "perche": "动词没有性；是主语决定分词的形式。" },
        { "t": "因为 tardi 是阴性", "ok": false, "perche": "tardi 是副词，不影响分词。" }
      ] },
      { "q": "B 说 Mi sveglio alle sette，用现在时，说明什么？", "opzioni": [
        { "t": "这是 B 平时的习惯", "ok": true, "perche": "A 问的是 di solito（通常），现在时可以说明习惯。" },
        { "t": "这是 B 昨天做的事", "ok": false, "perche": "说昨天的事要用近过去时。" },
        { "t": "这是 B 明天要做的事", "ok": false, "perche": "对话里问的是通常的习惯，不是将来的安排。" }
      ] },
      { "q": "Ci vediamo a pranzo 是什么意思？", "opzioni": [
        { "t": "午饭时我们见面", "ok": true, "perche": "ci vediamo：noi 的反身代词，表示互相见面。" },
        { "t": "我们午饭时看见他们", "ok": false, "perche": "ci 在这里是“互相”，不是“看见别人”。" },
        { "t": "他们午饭时去看我们", "ok": false, "perche": "主语是 noi，不是他们。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的“起床”“洗澡”“叫”后面不需要“自己”，所以学习者常常漏掉反身代词：*Io alzo alle sette*、*Io chiamo Marco*（想说“我叫马可”）；或者把近过去时的助动词说成 avere：*Mi ho alzato*；还有人忘了让分词和主语一致：*Lei si è alzato*，或者说 *Mi lavo le mie mani*。",
    "perche": "汉语里，动作回到自己身上是不用标出来的；意大利语把“自己”放在代词里，所以它是语法必须有的部分。近过去时的助动词也和汉语的习惯不同：汉语没有“有”和“是”的选择，学习者容易按英语或汉语的直觉用 avere。身体部分在汉语里要说“我的手”，意大利语已经有 mi 了，就用 le mani。",
    "esci": "说“起床、洗、穿、叫、醒、睡着、玩得开心”这类自己的事时，先在动词前面放对应的代词。近过去时：代词 + essere + 分词，分词跟主语变。身体和衣服前用 le、i、il，不用 mie、miei、mio。",
    "esempi": [
      { "sbagliata": "Io alzo alle sette.", "giusta": "Mi alzo alle sette." },
      { "sbagliata": "Io chiamo Marco.", "giusta": "Mi chiamo Marco." },
      { "sbagliata": "Mi ho alzato presto.", "giusta": "Mi sono alzato presto." },
      { "sbagliata": "Mi lavo i miei capelli.", "giusta": "Mi lavo i capelli." }
    ]
  },
  "curiosi": [
    { "titolo": "反身、互相、固定形式", "t": "语法书把这些动词分成几类：动作回到自己（Giuseppe si veste），动作作用在自己的某个部分或东西上，而主语是受益者（Federica si pulisce le mani），互相做（Luca e Simonetta si sposano），以及固定形式的“代词性动词”（arrabbiarsi、accorgersi）。对学习者来说，实用的办法是：先把常用动词连代词一起记，再慢慢认出它们属于哪一类。" },
    { "titolo": "有代词，意思就变了", "t": "很多动词有带代词和不带代词两种形式，意思不同：perdere 是“丢失”，perdersi 是“迷路”；aiutare 是“帮助”，aiutarsi 是“互相帮助”；alzare 是“抬起”，alzarsi 是“起床、站起来”；addormentare 是“哄睡”，addormentarsi 是“睡着”。" },
    { "titolo": "命令式和礼貌说法", "t": "对朋友：Alzati! Siediti! Vestiti, è tardi! 代词接在动词后面。对用 Lei 称呼的人，代词放在前面：Si accomodi, Si sieda, prego。在商店、办公室、医院里，这种说法很常用。" },
    { "titolo": "有 dovere 的近过去时", "t": "反身动词和 dovere、potere、volere 连用时，代词的位置决定助动词：代词在助动词前面，用 essere：Mi sono dovuto alzare presto；代词接在不定式后面，用 avere：Ho dovuto alzarmi presto。两种说法意思一样，日常口语里都能听到。" }
  ],
  "pragmatica": "自我介绍时，Mi chiamo… 最自然；问对方的名字，朋友之间说 Come ti chiami?，对用 Lei 称呼的人说 Come si chiama?。告别时 Ci vediamo!（回头见）、Ci sentiamo!（保持联系）比 Arrivederci 随意，朋友之间最常用。日常聊天里，说“我起床、洗、穿”要带上反身代词，听起来才自然。",
  "esercizi": [
    { "k": "scegli", "q": "“起床”（自己从床上起来）用哪一个动词？", "opzioni": [
      { "t": "alzarsi", "ok": true, "perche": "alzarsi 是反身动词，意思是“起床、站起来”。" },
      { "t": "alzare", "ok": false, "perche": "alzare 是“抬起某物”，需要宾语。" },
      { "t": "svegliare", "ok": false, "perche": "svegliare 是“叫醒别人”。" }
    ] },
    { "k": "scegli", "q": "Si sono sposati nel 2019 是什么意思？", "opzioni": [
      { "t": "他们是在 2019 年结婚的", "ok": true, "perche": "sposarsi 是“结婚”；si sono sposati 是近过去时。" },
      { "t": "他们在 2019 年互相看见了", "ok": false, "perche": "“互相看见”是 vedersi，不是 sposarsi。" },
      { "t": "他们将在 2019 年结婚", "ok": false, "perche": "si sono sposati 是过去时，不是将来时。" }
    ] },
    { "k": "buco", "zh": "Anna ＿ lava le mani prima di cenare.", "tr": "安娜晚饭前洗手。", "opzioni": [
      { "t": "si", "ok": true, "perche": "主语是 Anna（她），反身代词用 si。" },
      { "t": "mi", "ok": false, "perche": "mi 对应 io（我），不对应 Anna。" },
      { "t": "ti", "ok": false, "perche": "ti 对应 tu（你），不对应 Anna。" }
    ] },
    { "k": "buco", "zh": "Noi ＿ divertiamo sempre alle feste di Luca.", "tr": "我们在卢卡的聚会上总是玩得很开心。", "opzioni": [
      { "t": "ci", "ok": true, "perche": "主语是 noi，反身代词用 ci。" },
      { "t": "si", "ok": false, "perche": "si 对应 lui、lei、loro。" },
      { "t": "vi", "ok": false, "perche": "vi 对应 voi（你们），不对应 noi。" }
    ] },
    { "k": "buco", "zh": "Ieri sera Maria ＿ addormentata alle dieci.", "tr": "昨天晚上玛丽亚十点睡着了。", "opzioni": [
      { "t": "si è", "ok": true, "perche": "addormentarsi 的近过去时是代词 + essere + 分词。" },
      { "t": "è", "ok": false, "perche": "没有 si，è addormentata 表示“她睡着的状态”，和“昨晚十点入睡”不合。" },
      { "t": "si ha", "ok": false, "perche": "反身动词的近过去时不用 avere。" }
    ] },
    { "k": "buco", "zh": "Stamattina ＿ sono svegliato alle sei.", "tr": "今天早上我六点醒了。", "opzioni": [
      { "t": "mi", "ok": true, "perche": "主语是 io，反身代词用 mi。" },
      { "t": "ti", "ok": false, "perche": "ti 对应 tu（你），不对应 io。" },
      { "t": "si", "ok": false, "perche": "si 对应 lui、lei、loro，而助动词 sono 对应 io。" }
    ] },
    { "k": "ordine", "t": "mi alzo sempre alle sette", "tr": "我总是七点起床。" },
    { "k": "ordine", "t": "ci siamo conosciuti in treno", "tr": "我们是在火车上认识的。" },
    { "k": "scrivi", "q": "用意大利语写：“我叫安娜。”", "a": "Mi chiamo Anna.", "accetta": ["Io mi chiamo Anna.", "Mi chiamo Anna", "Il mio nome è Anna.", "Io mi chiamo Anna"], "perche": "名字叫……是 chiamarsi，说成 mi chiamo。" },
    { "k": "scrivi", "q": "用意大利语写：“我们明天八点见。”", "a": "Ci vediamo domani alle otto.", "accetta": ["Ci vediamo alle otto domani.", "Domani ci vediamo alle otto.", "Ci vediamo domani alle 8.", "Domani alle otto ci vediamo.", "Ci vediamo domani alle otto"], "perche": "互相见面用 vedersi，noi 的代词是 ci；“八点”用 alle otto。" },
    { "k": "trasforma", "consegna": "改成近过去时（说话的人是女性）。", "base": "Mi sveglio alle sei.", "accetta": ["Mi sono svegliata alle sei.", "Io mi sono svegliata alle sei.", "Mi sono svegliata alle 6."], "rifiutate": [
      { "t": "Mi sono svegliato alle sei.", "perche": "说话的是女性，分词要用阴性 svegliata。" },
      { "t": "Mi ho svegliata alle sei.", "perche": "反身动词的近过去时要用 essere，不用 avere。" }
    ], "perche": "代词 + essere + 分词，分词和主语（女性）一致。" },
    { "k": "trasforma", "consegna": "改成反身动词：安娜洗自己。", "base": "Anna lava il bambino.", "accetta": ["Anna si lava.", "Anna si lava"], "rifiutate": [
      { "t": "Anna lava si.", "perche": "反身代词要放在变位动词前面。" }
    ], "perche": "洗的是自己，所以加 si，不再有宾语 il bambino。" },
    { "k": "trasforma", "consegna": "主语改成 noi（我们）。", "base": "Mi alzo presto.", "accetta": ["Ci alziamo presto.", "Noi ci alziamo presto.", "Ci alziamo presto"], "rifiutate": [
      { "t": "Mi alziamo presto.", "perche": "代词和主语不一致：noi 的代词是 ci。" }
    ], "perche": "代词和动词都要换成 noi 的形式：ci alziamo。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Come ti chiami?" },
      { "chi": "B", "t": "＿ Sara.", "buco": true }
    ], "opzioni": [
      { "t": "Mi chiamo", "ok": true, "perche": "介绍自己的名字：chiamarsi，io 的形式是 mi chiamo。" },
      { "t": "Io chiamo", "ok": false, "perche": "Io chiamo Sara 的意思是“我叫（呼叫）萨拉”，缺少反身代词。" },
      { "t": "Mi chiama", "ok": false, "perche": "mi chiama 是“他（她）叫我”，不是介绍自己的名字。" }
    ] }
  ],
  "capaci": [
    "你会用 mi、ti、si、ci、vi 说日常的动作：Mi alzo alle sette, Ci vediamo domani。",
    "你会介绍自己和问别人的名字：Mi chiamo…, Come ti chiami?, Come si chiama?",
    "你会用近过去时说已经发生的事，并让分词和主语一致：Mi sono alzata, Ci siamo divertiti。",
    "你会说身体和衣服的动作，不用物主词：Mi lavo le mani, Mi metto il cappotto。",
    "你会区分有代词和没有代词的动词：lavare 和 lavarsi，svegliare 和 svegliarsi。"
  ],
  "glosse": {
    "Mi devo alzare presto": "我得早点起床。",
    "Mi sono lavato le mani": "我洗了手。"
  },
  "fonti": [
    "Treccani, Enciclopedia dell'Italiano, voce «verbi-riflessivi» (riflessivi diretti, indiretti e reciproci; accordo del participio con essere; pagina letta)",
    "Tatoeba (ita.tsv), frasi contate con grep: «Mi sono svegliato» (44), «Si è alzata» (8), «Mi lavo le mani» (4), «Mi sono tagliato» (11), «Si sono sposati» (20)"
  ]
};
