/* Lezione 37 · 数量：qualche、alcuni、ogni、tutti、nessuno (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["quantita"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Ho qualche amico a Torino.", "tr": "我在都灵有几个朋友。" },
      { "t": "Ho alcuni amici a Torino.", "tr": "我在都灵有几个朋友。" },
      { "t": "Ogni sera chiamo mia madre.", "tr": "我每天晚上给妈妈打电话。" },
      { "t": "Non conosco nessuno a Torino.", "tr": "我在都灵一个人也不认识。" }
    ],
    "domanda": "前两句意思几乎一样，可是 qualche 后面的名词是 amico，alcuni 后面是 amici。再看 ogni 后面的 sera 和最后一句：nessuno 前面为什么还有一个 non？你能总结出这几个词的规律吗？",
    "risposta": "**qualche** 虽然表示“几个”，后面却永远接**单数**名词（qualche amico）；**alcuni** 后面接**复数**名词（alcuni amici）；**ogni** 表示“每”，后面也接**单数**（ogni sera）。最后一句里 **nessuno** 放在动词后面，所以前面必须加 **non**：Non conosco nessuno，字面是“我不认识没有一个人”，意思却是“我一个人也不认识”。"
  },
  "regola": {
    "enunciato": "表示数量的词，关键是看它后面的名词用**单数还是复数**，以及要不要加**冠词**：qualche 和 ogni 后面接单数名词，alcuni 后面接复数名词，tutti 后面接“定冠词 + 复数名词”，nessuno 放在动词后面时前面要加 non。",
    "schema": ["qualche / ogni", "+ 单数名词", "｜", "alcuni", "+ 复数名词", "｜", "tutti + 定冠词 + 复数"],
    "punti": [
      { "ok": true, "t": "**qualche** = 几个、一些，不变形，后面只接单数名词：qualche amico、qualche volta（有时）。它不能单独使用，要说“有几个”时用 alcuni 或 qualcuno。" },
      { "ok": true, "t": "**alcuni / alcune** = 几个、一些，后面接复数名词，要和名词的阴阳性一致：alcuni libri、alcune amiche。意思和 qualche 相近，但 alcuni 还能单独使用：Alcuni di noi sono stanchi（我们中有几个人累了）。" },
      { "ok": true, "t": "**un po' di** = 一点儿，用于不可数的东西：un po' di pane、un po' d'acqua、un po' di tempo。" },
      { "ok": true, "t": "**ogni** = 每，不变形，后面接单数名词，不加冠词：ogni giorno、ogni volta。后面如果是数词，名词用复数：ogni tre giorni（每三天）。" },
      { "ok": true, "t": "**tutti / tutte** = 所有的，后面通常要有定冠词（tutti noi、tutti e tre 这类说法除外）：tutti gli studenti、tutte le case。单数用 tutto il / tutta la，表示“整个”：tutto il giorno（一整天）、tutta la città（整个城市）。" },
      { "ok": true, "t": "**nessuno / nessun** = 没有一个。它在动词**后面**时要加 non：Non ho nessun amico。它在动词**前面**时不加 non：Nessuno parla。后面接名词时，形式像不定冠词 un：nessun amico、nessuna amica、nessuno studente。" },
      { "ok": false, "t": "**不要**在 qualche、ogni 后面用复数名词（*qualche amici、*ogni giorni），也不要省略 tutti 后面的冠词（*tutti studenti）。" }
    ]
  },
  "logica": [
    "汉语的“几个朋友、每天、所有学生”里，名词本身不分单复数，数量由前面的词来表示。意大利语的名词必须变单数或复数，所以每个数量词都有自己的“搭配习惯”。**qualche** 的意思虽然是复数（几个），形式却是单数；这是 qualche 的特点，它的形式是单数，意思却是几个。所以背的时候要记住：**qualche + 单数**，不要被汉语的“几个”带偏。",
    "**ogni** 的道理类似：“每一个”是一个一个地数，所以用单数。**tutti** 说的是整体，要用“定冠词 + 名词”，因为说话人指的是一个明确的、大家都知道的集合：tutti **gli** studenti 是“这一群学生全部”，不是泛泛的“学生”。",
    "最容易让说汉语的人困惑的是 **nessuno**。汉语说“没有人来”只用一个否定词，而意大利语在动词后面要用**两个**否定：Non è venuto nessuno。这不是“负负得正”，而是**加强否定**，法语（ne … personne）和西班牙语（no … nadie）也是这样。规律很简单：nessuno 在动词前面，就不用 non；nessuno 在动词后面，就要有 non。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["数量词", "后面接什么", "意思", "例句"],
    "righe": [
      ["qualche", "单数名词", "几个、一些", "Ho qualche amico."],
      ["alcuni / alcune", "复数名词", "几个、一些", "Ho alcune amiche."],
      ["un po' di", "不可数名词", "一点儿", "Voglio un po' di pane."],
      ["ogni", "单数名词（无冠词）", "每", "Ogni mattina corro."],
      ["tutti / tutte", "定冠词 + 复数名词", "所有的", "Tutte le case sono vecchie."],
      ["tutto il / tutta la", "单数名词", "整个、一整", "Ho dormito tutto il giorno."],
      ["nessun / nessuna", "单数名词（动词后要加 non）", "没有一个", "Non ho nessuna idea."],
      ["nessuno（代词）", "单独使用", "没有人", "Nessuno risponde."]
    ],
    "nota": "先看右边的例句，再回头看前两列：单数、复数、冠词，决定了每个词怎么用。"
  },
  "esempi": [
    { "gruppo": "qualche、alcuni、un po' di：几个和一点儿", "items": [
      { "t": "Ho qualche libro in valigia.", "tr": "我的行李箱里有几本书。", "nota": "qualche + 单数 libro，意思是几本。" },
      { "t": "Ho comprato alcuni libri usati.", "tr": "我买了几本二手书。" },
      { "t": "Alcune amiche mie vivono a Napoli.", "tr": "我有几个女性朋友住在那不勒斯。", "nota": "alcune 和 amiche 都是阴性复数。" },
      { "t": "Vuoi un po' di zucchero nel caffè?", "tr": "你咖啡里要加一点糖吗？", "nota": "糖是不可数的，用 un po' di。" }
    ] },
    { "gruppo": "ogni：每一个", "items": [
      { "t": "Ogni mattina faccio una passeggiata.", "tr": "我每天早上散步。" },
      { "t": "Ogni volta che piove, resto a casa.", "tr": "每次下雨，我都待在家里。" },
      { "t": "Il treno parte ogni dieci minuti.", "tr": "火车每十分钟开一班。", "nota": "ogni 后面有数词时，名词用复数：minuti。" }
    ] },
    { "gruppo": "tutti、tutto：所有和整个", "items": [
      { "t": "Tutti gli ospiti sono già arrivati.", "tr": "所有的客人都已经到了。" },
      { "t": "Tutte le sere guardo un po' di televisione.", "tr": "我每天晚上都看一会儿电视。", "nota": "tutte le sere 和 ogni sera 意思接近，tutte le sere 更强调“全部”。" },
      { "t": "Ha piovuto tutto il giorno.", "tr": "下了一整天的雨。" },
      { "t": "Tutti e due i miei fratelli studiano medicina.", "tr": "我的两个兄弟都在学医。", "nota": "tutti e due：两个都；tutti e tre：三个都。" }
    ] },
    { "gruppo": "nessuno：没有一个", "items": [
      { "t": "Nessuno sa dove sia Marco.", "tr": "没有人知道马可在哪里。", "nota": "nessuno 在动词前面，不加 non。" },
      { "t": "Non so dove sia Marco: non risponde nessuno.", "tr": "我不知道马可在哪里，没有人接电话。", "nota": "nessuno 在动词后面，所以前面有 non。" },
      { "t": "Non c'è nessun problema.", "tr": "没有任何问题。" },
      { "t": "Non ho visto nessuno studente al bar.", "tr": "我在酒吧里没有看到一个学生。", "nota": "nessuno 在 s + 辅音 开头的名词前面：nessuno studente。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我有几个朋友在罗马。”哪一句对？", "opzioni": [
      { "t": "Ho qualche amico a Roma.", "ok": true, "perche": "qualche 后面接单数名词，虽然意思是“几个”。" },
      { "t": "Ho qualche amici a Roma.", "ok": false, "perche": "汉语的“几个”是复数，但 qualche 要求单数名词；用复数就要换成 alcuni amici。" }
    ] },
    { "q": "“我每三天去买一次菜。”哪一句对？", "opzioni": [
      { "t": "Ogni tre giorni faccio la spesa.", "ok": true, "perche": "ogni + 数词 + 复数名词，表示“每隔几天”。" },
      { "t": "Ogni tre giorno faccio la spesa.", "ok": false, "perche": "数词 tre 后面的名词必须用复数 giorni。" },
      { "t": "Tutti tre giorni faccio la spesa.", "ok": false, "perche": "tutti 要加定冠词，而且不表示“每隔”。" }
    ] },
    { "q": "“所有的学生都通过了考试。”哪一句对？", "opzioni": [
      { "t": "Tutti gli studenti hanno superato l'esame.", "ok": true, "perche": "tutti 后面要有定冠词 gli，再接复数名词。" },
      { "t": "Tutti studenti hanno superato l'esame.", "ok": false, "perche": "tutti 后面缺少定冠词，汉语没有冠词，所以容易漏掉。" },
      { "t": "Tutto gli studenti hanno superato l'esame.", "ok": false, "perche": "tutto 是单数阳性，不能和复数的 gli studenti 搭配。" }
    ] },
    { "q": "“昨天我睡了一整天。”哪一句对？", "opzioni": [
      { "t": "Ieri ho dormito tutto il giorno.", "ok": true, "perche": "tutto il giorno 是固定搭配：tutto + 定冠词 + 单数名词。" },
      { "t": "Ieri ho dormito tutti il giorno.", "ok": false, "perche": "tutti 是复数，不能和单数的 il giorno 搭配。" },
      { "t": "Ieri ho dormito tutto giorno.", "ok": false, "perche": "tutto 和名词之间缺少定冠词 il。" }
    ] },
    { "q": "“我一个人也不认识。”哪一句对？", "opzioni": [
      { "t": "Non conosco nessuno.", "ok": true, "perche": "nessuno 在动词后面，前面必须有 non。" },
      { "t": "Conosco nessuno.", "ok": false, "perche": "nessuno 放在动词后面时没有 non，句子就不完整。汉语只用一个否定词，容易漏掉 non。" },
      { "t": "Non conosco ognuno.", "ok": false, "perche": "ognuno 的意思是“每个人”，不是“没有人”。" }
    ] },
    { "q": "“没有人来。”（nessuno 放在句首）哪一句对？", "opzioni": [
      { "t": "Nessuno è venuto.", "ok": true, "perche": "nessuno 在动词前面，已经是否定，不再加 non。" },
      { "t": "Non nessuno è venuto.", "ok": false, "perche": "non 不能放在 nessuno 前面。" },
      { "t": "Nessuno non è venuto.", "ok": false, "perche": "nessuno 在动词前面时，动词前不加 non。" }
    ] },
    { "q": "“我一个朋友也没有。”哪一句对？", "opzioni": [
      { "t": "Non ho nessun amico.", "ok": true, "perche": "nessun 用在阳性单数名词前，形式像 un amico；动词后面有 non。" },
      { "t": "Non ho nessuno amico.", "ok": false, "perche": "nessuno 只用在 s + 辅音、z、gn 等开头的名词前，amico 前要用 nessun。" },
      { "t": "Non ho nessuna amico.", "ok": false, "perche": "nessuna 是阴性，和阳性的 amico 不一致。" }
    ] },
    { "q": "“酒吧里没有来一个学生。”哪一句对？", "opzioni": [
      { "t": "Non è venuto nessuno studente al bar.", "ok": true, "perche": "studente 以 s + 辅音开头，所以用 nessuno，像 uno studente。" },
      { "t": "Non è venuto nessun studente al bar.", "ok": false, "perche": "nessun 不能用在 s + 辅音开头的名词前，要用 nessuno。" },
      { "t": "Non è venuto nessuna studente al bar.", "ok": false, "perche": "studente 是阳性，不能用阴性的 nessuna。" }
    ] },
    { "q": "“我想要一点水。”哪一句对？", "opzioni": [
      { "t": "Vorrei un po' d'acqua.", "ok": true, "perche": "水不可数，用 un po' di，di 遇到元音省略成 d'。" },
      { "t": "Vorrei alcune acque.", "ok": false, "perche": "alcune acque 是“几种水”，不是“一点水”。" },
      { "t": "Vorrei qualche acqua.", "ok": false, "perche": "qualche 用于可数的东西，表示“几个”，不能用在不可数的水上。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Chi viene alla festa?",
    "righe": [
      { "chi": "A", "t": "Chi viene alla tua festa sabato?", "tr": "星期六谁来你的聚会？" },
      { "chi": "B", "t": "Vengono quasi tutti gli amici. Ho invitato anche qualche vicino.", "tr": "几乎所有的朋友都来。我还请了几个邻居。" },
      { "chi": "A", "t": "E la famiglia di Paolo?", "tr": "保罗一家呢？" },
      { "chi": "B", "t": "Non lo so, non ha risposto nessuno al telefono.", "tr": "不知道，电话没有人接。" },
      { "chi": "A", "t": "Porto un po' di vino, va bene?", "tr": "我带点酒，好吗？" },
      { "chi": "B", "t": "Perfetto. Ogni ospite porta qualcosa da mangiare.", "tr": "太好了。每位客人都带点吃的。" }
    ],
    "esercizi": [
      { "q": "B 说 “non ha risposto nessuno”，为什么 nessuno 前面有 non？", "opzioni": [
        { "t": "因为 nessuno 在动词后面，需要 non", "ok": true, "perche": "nessuno 放在动词后面时，一定要和 non 一起用。" },
        { "t": "因为 non 表示过去时", "ok": false, "perche": "non 只表示否定，不表示时态。" },
        { "t": "因为有两个否定就变成肯定", "ok": false, "perche": "意大利语的双重否定是加强否定，不会变成肯定。" }
      ] },
      { "q": "“Ho invitato anche qualche vicino” 的意思是什么？", "opzioni": [
        { "t": "我还请了几个邻居", "ok": true, "perche": "qualche + 单数，意思是几个；说话人没有说具体人数。" },
        { "t": "我请了每一个邻居", "ok": false, "perche": "“每一个”要用 ogni 或 tutti。" },
        { "t": "我一个邻居也没请", "ok": false, "perche": "“一个也没有”要用 nessuno，并且要有否定。" }
      ] },
      { "q": "“Ogni ospite porta qualcosa” 里，ospite 为什么是单数？", "opzioni": [
        { "t": "因为 ogni 后面接单数名词", "ok": true, "perche": "ogni 是“每一个”，一个一个地数，所以后面用单数。" },
        { "t": "因为 ospite 是不可数名词", "ok": false, "perche": "ospite 是可数的，用单数是因为前面有 ogni。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的“几个朋友”“每天”“所有学生”“没有人来”里，名词不变形，也没有冠词，所以说汉语的人常常说出 *qualche amici*、*ogni giorni*、*tutti studenti*、*Ho nessun amico* 这样的句子。",
    "perche": "汉语里“几个”“每”后面的名词没有单复数的变化，所以学习者按汉语的意思选择复数形式；汉语也没有冠词，容易漏掉 tutti 后面的定冠词；汉语表示“没有”只用一个否定词，所以容易漏掉 nessuno 前面的 non。",
    "esci": "每学一个数量词，同时记住它的“搭档”：qualche / ogni + 单数；alcuni + 复数；tutti + 定冠词 + 复数；nessuno 在动词后面就加 non。说话之前问自己两个问题：名词是单数还是复数？nessuno 在动词前面还是后面？",
    "esempi": [
      { "sbagliata": "Ho qualche amici a Roma.", "giusta": "Ho qualche amico a Roma." },
      { "sbagliata": "Ogni giorni studio un'ora.", "giusta": "Ogni giorno studio un'ora." },
      { "sbagliata": "Tutti studenti sono qui.", "giusta": "Tutti gli studenti sono qui." },
      { "sbagliata": "Ho nessun amico.", "giusta": "Non ho nessun amico." }
    ]
  },
  "curiosi": [
    { "titolo": "qualche 从哪里来", "t": "qualche 没有复数形式，也不随阴阳性变化，后面的名词一律是单数。它的来历在语法书里没有统一的说法，记住这个搭配就够用了。在正式的书面语里，也可以见到用 alcuno 代替 qualche 的说法，日常口语里则以 qualche 和 alcuni 为主。" },
    { "titolo": "双重否定不是“负负得正”", "t": "拉丁语里，两个否定会互相抵消；但意大利语和法语、西班牙语一样，nessuno、niente、mai 等词放在动词后面时，必须和 non 一起使用，这叫作“否定呼应”。你可以把 non 看作整个句子的“否定开关”，nessuno 只是告诉你具体是“没有谁”。同样的道理：Non vedo niente（我什么也没看见）、Non vado mai al mare（我从来不去海边）。" },
    { "titolo": "ognuno、ciascuno 和 ogni 的分工", "t": "ogni 只能放在名词前面，不能单独使用。要单独说“每个人”，用代词 **ognuno** 或 **ciascuno**：Ognuno porta qualcosa（每个人都带点东西）。它们和 ogni 一样都是单数，动词也用单数。" }
  ],
  "pragmatica": "聊天的时候，qualche 常常带着“不多不少、随便说说”的口气：Ho qualche idea（我有一些想法）、Vengo tra qualche minuto（我几分钟后到）。回答问题时，Nessuno! 一个词就可以回答 Chi c'è?；如果想说得更肯定，再加 non: Non c'è nessuno. 在邮件或通知这类书面语里，tutti 与 ciascuno 更常见。",
  "esercizi": [
    { "k": "scegli", "q": "哪个词的意思是“几个”，但后面必须接单数名词？", "opzioni": [
      { "t": "qualche", "ok": true, "perche": "qualche + 单数名词：qualche amico。" },
      { "t": "alcuni", "ok": false, "perche": "alcuni 后面接复数名词。" },
      { "t": "tutti", "ok": false, "perche": "tutti 的意思是“所有的”，后面要有定冠词和复数名词。" }
    ] },
    { "k": "scegli", "q": "“Non c'è nessuno” 是什么意思？", "opzioni": [
      { "t": "没有人", "ok": true, "perche": "non … nessuno 是加强否定，意思是“没有人”。" },
      { "t": "有人", "ok": false, "perche": "有人要用 c'è qualcuno。" },
      { "t": "每个人都在", "ok": false, "perche": "“每个人”要用 ognuno 或 tutti。" }
    ] },
    { "k": "scegli", "q": "“每个星期”怎么说？", "opzioni": [
      { "t": "ogni settimana", "ok": true, "perche": "ogni + 单数名词，不加冠词。" },
      { "t": "ogni settimane", "ok": false, "perche": "ogni 后面用单数。" },
      { "t": "tutte settimane", "ok": false, "perche": "tutte 后面要有定冠词，而且这样说不够自然；要说 tutte le settimane。" }
    ] },
    { "k": "buco", "zh": "＿ sera guardo un film.", "tr": "我每天晚上看一部电影。", "opzioni": [
      { "t": "Ogni", "ok": true, "perche": "ogni + 单数名词 sera，表示“每”。" },
      { "t": "Tutti", "ok": false, "perche": "tutti 是复数，要接复数名词和定冠词。" },
      { "t": "Alcuni", "ok": false, "perche": "alcuni 是阳性复数，和单数的 sera 不一致。" }
    ] },
    { "k": "buco", "zh": "Ho invitato ＿ amici alla cena.", "tr": "我请了几个朋友来吃晚饭。", "opzioni": [
      { "t": "alcuni", "ok": true, "perche": "alcuni + 复数名词 amici。" },
      { "t": "qualche", "ok": false, "perche": "qualche 后面要接单数名词，不能接 amici。" },
      { "t": "ogni", "ok": false, "perche": "ogni 后面也要接单数名词。" }
    ] },
    { "k": "buco", "zh": "Non ho visto ＿ in giardino.", "tr": "我在花园里一个人也没看到。", "opzioni": [
      { "t": "nessuno", "ok": true, "perche": "nessuno 在动词后面，前面已有 non。" },
      { "t": "qualche", "ok": false, "perche": "qualche 不能单独使用，后面必须有名词。" },
      { "t": "ogni", "ok": false, "perche": "ogni 也不能单独使用，后面必须有名词。" }
    ] },
    { "k": "buco", "zh": "＿ la classe è uscita.", "tr": "全班同学都出去了。", "opzioni": [
      { "t": "Tutta", "ok": true, "perche": "classe 是阴性单数，所以用 tutta + la。" },
      { "t": "Tutti", "ok": false, "perche": "tutti 是阳性复数，和阴性单数的 la classe 不一致。" },
      { "t": "Ogni", "ok": false, "perche": "ogni 后面不加冠词，不能说 ogni la classe。" }
    ] },
    { "k": "ordine", "t": "non ho nessun problema", "tr": "我没有任何问题。" },
    { "k": "ordine", "t": "ogni sera leggo qualche pagina", "alt": ["leggo qualche pagina ogni sera"], "tr": "我每天晚上读几页书。" },
    { "k": "scrivi", "q": "用意大利语写：“我在米兰有几个朋友。”", "a": "Ho qualche amico a Milano.", "accetta": ["Ho alcuni amici a Milano.", "Io ho qualche amico a Milano.", "A Milano ho qualche amico.", "A Milano ho alcuni amici.", "Ho degli amici a Milano."], "perche": "qualche + 单数 amico，或者 alcuni + 复数 amici；两种说法意思一样。" },
    { "k": "scrivi", "q": "用意大利语写：“我一个人也不认识。”", "a": "Non conosco nessuno.", "accetta": ["Io non conosco nessuno.", "Non conosco proprio nessuno."], "perche": "nessuno 在动词后面，前面要有 non。" },
    { "k": "trasforma", "consegna": "改成否定句，用 nessun 表示“一个也没有”。", "base": "Ho qualche amico a Parma.", "accetta": ["Non ho nessun amico a Parma.", "A Parma non ho nessun amico.", "Io non ho nessun amico a Parma."], "rifiutate": [
      { "t": "Ho nessun amico a Parma.", "perche": "nessun 在动词后面，前面需要 non。" },
      { "t": "Non ho qualche amico a Parma.", "perche": "否定句里不用 qualche，要换成 nessun。" }
    ], "perche": "否定句里把 qualche 换成 nessun，并在动词前加 non。" },
    { "k": "trasforma", "consegna": "把 alcuni 改成 qualche，其余不变。", "base": "Ho comprato alcuni libri.", "accetta": ["Ho comprato qualche libro."], "rifiutate": [
      { "t": "Ho comprato qualche libri.", "perche": "qualche 后面要用单数名词 libro。" }
    ], "perche": "alcuni 后面是复数，qualche 后面要换成单数。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Quanto spesso vai in palestra?" },
      { "chi": "B", "t": "Vado in palestra ___ due giorni.", "buco": true }
    ], "opzioni": [
      { "t": "ogni", "ok": true, "perche": "ogni + 数词 + 复数名词：ogni due giorni，每两天。" },
      { "t": "tutti", "ok": false, "perche": "tutti 要加定冠词，不表示“每隔”。" },
      { "t": "qualche", "ok": false, "perche": "qualche 后面接单数名词，不能接数词。" }
    ] }
  ],
  "capaci": [
    "你会用 qualche 和 alcuni 说“几个”，并让名词的单复数跟着变。",
    "你会用 ogni 和 tutti / tutto il 说“每”“所有”“一整”，并记得冠词。",
    "你会用 nessuno / nessun 说“没有人”“一个也没有”，并知道什么时候要加 non。",
    "你会用 un po' di 说不可数东西的“一点儿”。"
  ],
  "fonti": [
    "UNC Learn Italian, «Indefinites» (letta: qualche solo singolare, alcuni/alcune plurale, ogni singolare invariabile, tutti/tutte con articolo; la pagina non tratta nessuno)",
    "Tatoeba (ita.tsv, grep): «Non ho visto nessuno» (5), «non risponde nessuno» (2), «tutti gli» (326), «tutto il giorno» (523)"
  ]
};
