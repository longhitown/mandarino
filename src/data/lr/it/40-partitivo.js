/* Lezione 40 · Il partitivo: del, dei, delle (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["partitivo"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Vuoi del pane?", "tr": "你要一点面包吗？" },
      { "t": "Ho dei libri interessanti.", "tr": "我有一些有意思的书。" },
      { "t": "Non ho soldi.", "tr": "我没有钱。" },
      { "t": "Amo la musica.", "tr": "我爱音乐。" }
    ],
    "domanda": "前两句里有 del、dei，后两句里没有。再想想汉语：说“一点面包、一些书”的时候，这个“一点、一些”是不是总要说？你觉得什么时候意大利语才用 del、dei？",
    "risposta": "第一句 **del pane** 是“一点面包”，第二句 **dei libri** 是“一些书”：数量不确定，所以用 **di + 定冠词**。第三句是否定句，说的是“没有”，不用。第四句说的是自己喜欢的、泛指的东西，要用定冠词 **la musica**，不说 della musica。所以：**部分冠词只用在“不确定的数量”上**。"
  },
  "regola": {
    "enunciato": "**部分冠词**是 **di + 定冠词**，表示不确定的数量，“一点、一些”。单数 **del / dello / dell' / della** 和不可数名词连用（del pane = 一点面包），复数 **dei / degli / delle** 和可数名词连用（dei libri = 一些书）。否定句里通常省略；数量说清楚时用 **di**，不加冠词（un chilo di pane）。",
    "schema": ["di + 定冠词", "名词（性、数要一致）", "= 一点 / 一些"],
    "punti": [
      { "ok": true, "t": "**形式**：单数 **del**（阳性）、**dello**（阳性，s + 辅音、z 前）、**dell'**（元音前）、**della**（阴性）；复数 **dei**（阳性）、**degli**（阳性，元音、s + 辅音、z 前）、**delle**（阴性）。del pane、dello zucchero、dell'acqua、della frutta、dei libri、degli amici、delle mele。" },
      { "ok": true, "t": "**单数**用于不可数名词，意思是“一点”，可以换成 **un po' di**：Vuoi del pane? = Vuoi un po' di pane?　**复数**像是不定冠词 un / una 的复数，意思是“一些”，可以换成 **alcuni / alcune**：Ho dei libri = Ho alcuni libri。" },
      { "ok": true, "t": "**只用于不确定的数量**：想要、买、吃、有。Vorrei dell'acqua. Compro delle mele. 说喜欢、讨厌或泛指的东西，要用定冠词：Amo la musica. Odio la carne。" },
      { "ok": true, "t": "**否定句**里通常不用部分冠词：Non ho soldi. Non c'è latte.　**问句**里也常常省略：Hai amici a Roma?　不过招待别人时 Vuoi del pane? 是很自然的问法。" },
      { "ok": true, "t": "**数量说清楚**时用 **di**，不加部分冠词：un chilo **di** pane、una bottiglia **d'**acqua。**数词**后面直接加名词：due libri。" },
      { "ok": true, "t": "**另外两种“一些”**：**qualche** 后面接**单数**名词（qualche amico = 几个朋友，意思是复数，名词却是单数）；**alcuni / alcune** 后面接复数名词（alcuni amici）。" },
      { "ok": false, "t": "**不要**说 qualche amici：qualche 后面必须是单数 qualche amico。**不要**在数词后面用部分冠词：说 due libri，不说 dei due libri。" }
    ]
  },
  "logica": [
    "汉语没有冠词，“买一些书、喝一点水”里的“一些、一点”常常可以不说，直接说“买书、喝水”。意大利语的名词前面通常要有冠词或别的限定词：un libro、il libro、dei libri。部分冠词就是专门说“一部分、不确定数量”的那一个：它告诉听的人，你说的不是“那一个”，也不是“全部”。",
    "为什么单数和复数不完全一样？意大利语语法学家（Treccani《意大利语百科》）指出：严格说，真正的部分冠词是单数的 del、della，对应“一点”，和不可数名词连用；复数的 dei、delle 更像是不定冠词 un / una 的复数形式，因为 un / una 本身没有复数。检验方法：bevete del latte 可以换成 bevete un po' di latte，但不能说 bevete qualche latte；hai degli amici 可以换成 hai alcuni amici。",
    "部分冠词需要一个“不确定”的宾语。Vorremmo della carne（我们想要一点肉）可以；Odiamo la carne 却不能说 odiamo della carne，因为 odiare 说的是确定的、泛指的东西。否定句说的是“没有”，不是“一点”，所以通常省略。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["你想说", "意大利语", "例句"],
    "righe": [
      ["一点面包（不可数，单数）", "del pane（或 un po' di pane）", "Vuoi del pane?"],
      ["一些书（可数，复数）", "dei libri（或 alcuni libri）", "Ho dei libri interessanti."],
      ["几个朋友", "qualche amico（名词用单数）", "Ho qualche amico a Roma."],
      ["没有钱（否定）", "省略", "Non ho soldi."],
      ["一公斤面包（数量说清楚）", "un chilo di pane", "Compro un chilo di pane."],
      ["两本书（数词）", "due libri", "Ho due libri."],
      ["爱音乐（泛指、喜欢）", "la musica", "Amo la musica."]
    ]
  },
  "esempi": [
    { "gruppo": "单数：不可数名词，“一点”", "items": [
      { "t": "Vuoi del pane?", "tr": "你要一点面包吗？" },
      { "t": "Vorrei dell'acqua.", "tr": "我想要一点水。", "nota": "acqua 以元音开头，所以是 dell'。" },
      { "t": "Metto dello zucchero nel caffè.", "tr": "我在咖啡里放一点糖。", "nota": "zucchero 以 z 开头，阳性单数用 dello。" },
      { "t": "Mangio della frutta.", "tr": "我吃一些水果。", "nota": "frutta 是阴性单数名词，所以是 della。" }
    ] },
    { "gruppo": "复数：可数名词，“一些”", "items": [
      { "t": "Ho dei libri interessanti.", "tr": "我有一些有意思的书。" },
      { "t": "Ci sono degli amici a casa.", "tr": "家里有几个朋友。", "nota": "amici 以元音开头，阳性复数用 degli。" },
      { "t": "Ho comprato delle verdure al supermercato.", "tr": "我在超市买了一些蔬菜。" },
      { "t": "Ci sono dei buoni ristoranti qui intorno?", "tr": "这附近有一些好餐厅吗？" }
    ] },
    { "gruppo": "不用部分冠词：否定、数量说清楚、数词、泛指", "items": [
      { "t": "Non ho soldi.", "tr": "我没有钱。" },
      { "t": "Non c'è latte nel bicchiere.", "tr": "杯子里没有牛奶。" },
      { "t": "Compro un chilo di pane.", "tr": "我买一公斤面包。" },
      { "t": "Ho due libri.", "tr": "我有两本书。" },
      { "t": "Amo la musica.", "tr": "我爱音乐。" }
    ] },
    { "gruppo": "换一种说法：un po' di、qualche、alcuni", "items": [
      { "t": "Vuoi un po' di torta?", "tr": "你要一点蛋糕吗？" },
      { "t": "Ho qualche amico a Roma.", "tr": "我在罗马有几个朋友。", "nota": "qualche 后面是单数名词。" },
      { "t": "Ho alcuni amici a Roma.", "tr": "我在罗马有几个朋友。", "nota": "alcuni 后面是复数名词，意思和上一句一样。" }
    ] }
  ],
  "contrasti": [
    { "q": "“你要一点面包吗？”哪一句对？", "opzioni": [
      { "t": "Vuoi del pane?", "ok": true, "perche": "pane 是阳性单数，部分冠词用 del。" },
      { "t": "Vuoi dei pane?", "ok": false, "perche": "dei 是复数，而这里的面包是单数、不可数。" },
      { "t": "Vuoi della pane?", "ok": false, "perche": "pane 是阳性名词，不能用阴性的 della。" }
    ] },
    { "q": "“我有一些有意思的书。”哪一句对？", "opzioni": [
      { "t": "Ho dei libri interessanti.", "ok": true, "perche": "libri 是阳性复数，部分冠词用 dei。" },
      { "t": "Ho del libri interessanti.", "ok": false, "perche": "del 是单数，libri 是复数，要用 dei。" },
      { "t": "Ho delle libri interessanti.", "ok": false, "perche": "libri 是阳性，不能用阴性的 delle。" }
    ] },
    { "q": "“家里有几个朋友。”（amici：阳性复数，以元音开头）哪一句对？", "opzioni": [
      { "t": "Ci sono degli amici a casa.", "ok": true, "perche": "阳性复数、以元音开头的名词前用 degli。" },
      { "t": "Ci sono dei amici a casa.", "ok": false, "perche": "amici 以元音开头，要用 degli，不用 dei。" },
      { "t": "Ci sono delle amici a casa.", "ok": false, "perche": "amici 是阳性名词，delle 是阴性复数。" }
    ] },
    { "q": "“我买一些水果。”（frutta：阴性单数名词）哪一句对？", "opzioni": [
      { "t": "Compro della frutta.", "ok": true, "perche": "frutta 是阴性单数，所以是 della。" },
      { "t": "Compro dei frutta.", "ok": false, "perche": "frutta 是阴性单数，不能用阳性复数的 dei。" },
      { "t": "Compro delle frutta.", "ok": false, "perche": "frutta 是单数名词，不能用复数的 delle。" }
    ] },
    { "q": "“我没有钱。”哪一句对？", "opzioni": [
      { "t": "Non ho soldi.", "ok": true, "perche": "否定句里通常省略部分冠词，直接说 non ho soldi。" },
      { "t": "Non ho di soldi.", "ok": false, "perche": "这里的 di 多余了，宾语前面不需要介词。" },
      { "t": "Non ho dello soldi.", "ok": false, "perche": "soldi 是复数，dello 是单数，形式也不对。" }
    ] },
    { "q": "“我爱音乐。”（泛指自己喜欢的东西）哪一句对？", "opzioni": [
      { "t": "Amo la musica.", "ok": true, "perche": "喜欢、泛指的东西要用定冠词 la。" },
      { "t": "Amo della musica.", "ok": false, "perche": "amare 说的是泛指的东西，不用表示“一部分”的部分冠词。" }
    ] },
    { "q": "“我买一公斤面包。”（数量说清楚）哪一句对？", "opzioni": [
      { "t": "Compro un chilo di pane.", "ok": true, "perche": "数量说清楚时，用 di 加名词，不加冠词。" },
      { "t": "Compro un chilo del pane.", "ok": false, "perche": "del pane 指的是“那个面包”，意思变了；说“一公斤面包”要用 di pane。" },
      { "t": "Compro un chilo pane.", "ok": false, "perche": "少了 di：chilo 后面要接 di。" }
    ] },
    { "q": "“我在罗马有几个朋友。”（用 qualche）哪一句对？", "opzioni": [
      { "t": "Ho qualche amico a Roma.", "ok": true, "perche": "qualche 后面接单数名词，意思却是“几个”。" },
      { "t": "Ho qualche amici a Roma.", "ok": false, "perche": "qualche 不能接复数名词，要说 qualche amico。" },
      { "t": "Ho alcuni amico a Roma.", "ok": false, "perche": "alcuni 后面要接复数名词：alcuni amici。" }
    ] },
    { "q": "“我有两本书。”哪一句对？", "opzioni": [
      { "t": "Ho due libri.", "ok": true, "perche": "数词后面直接加名词，不用部分冠词。" },
      { "t": "Ho dei due libri.", "ok": false, "perche": "数词已经说清了数量，不能再加部分冠词。" },
      { "t": "Ho di due libri.", "ok": false, "perche": "宾语前面不需要介词 di。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Al mercato",
    "righe": [
      { "chi": "A", "t": "Che cosa compri?", "tr": "你买什么？" },
      { "chi": "B", "t": "Compro del pane e della frutta.", "tr": "我买一点面包和水果。" },
      { "chi": "A", "t": "Prendi anche dei biscotti?", "tr": "也买一些饼干吗？" },
      { "chi": "B", "t": "Sì, e un chilo di mele.", "tr": "买，还要一公斤苹果。" },
      { "chi": "A", "t": "Hai dello zucchero a casa?", "tr": "你家里有糖吗？" },
      { "chi": "B", "t": "No, non ho zucchero.", "tr": "没有，我没有糖。" }
    ],
    "esercizi": [
      { "q": "B 说 “un chilo di mele”，为什么用 di，而不是 delle？", "opzioni": [
        { "t": "数量已经说清楚了：一公斤", "ok": true, "perche": "数量说清楚时用 di 加名词，不用部分冠词。" },
        { "t": "因为 mele 是单数", "ok": false, "perche": "mele 是复数（单数是 mela），和 di 的选择无关。" },
        { "t": "因为这是否定句", "ok": false, "perche": "这是肯定句，说要买一公斤苹果。" }
      ] },
      { "q": "B 说 “No, non ho zucchero”，为什么没有 dello？", "opzioni": [
        { "t": "否定句里通常省略部分冠词", "ok": true, "perche": "否定句说的是“没有”，不是“一点”，所以直接说 non ho zucchero。" },
        { "t": "因为 zucchero 是复数", "ok": false, "perche": "zucchero 是单数名词。" },
        { "t": "因为 dello 只能用在问句里", "ok": false, "perche": "dello 不限于问句，肯定句里也用：Metto dello zucchero。" }
      ] },
      { "q": "A 问 “Hai dello zucchero a casa?”，为什么用 dello？", "opzioni": [
        { "t": "zucchero 以 z 开头，阳性单数用 dello", "ok": true, "perche": "阳性单数的名词以 z 或 s + 辅音开头时，部分冠词用 dello。" },
        { "t": "因为 zucchero 是阴性名词", "ok": false, "perche": "阴性单数用 della，zucchero 是阳性名词。" },
        { "t": "因为 zucchero 是复数", "ok": false, "perche": "复数要用 dei、degli 或 delle。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "学习者常把汉语的“一些”直接翻译：说成 **qualche amici**；随手选一个 dei / delle，却不看名词的性和数（**dei pane**、**della libri**）；说喜欢、讨厌或泛指的东西时也加上部分冠词（**Odio della carne**）；甚至在数词后面加（**dei due libri**）。",
    "perche": "汉语的“一些、一点”不随名词变化，没有性和数，也不影响动词。意大利语的部分冠词要和名词一致，而且只表示“不确定的数量”，所以它不能用在泛指的、喜欢的东西上，也不能和数词叠在一起。",
    "esci": "先看名词：单数还是复数？阳性还是阴性？第一个字母是什么？这样选出 del / dello / dell' / della 或 dei / degli / delle。再问自己：这是不确定的数量吗？是不是否定句？有没有数词或 un chilo di 这样的数量词？如果有，就不用部分冠词。",
    "esempi": [
      { "sbagliata": "Ho qualche amici.", "giusta": "Ho qualche amico." },
      { "sbagliata": "Vuoi dei pane?", "giusta": "Vuoi del pane?" },
      { "sbagliata": "Odio della carne.", "giusta": "Odio la carne." },
      { "sbagliata": "Ho dei due libri.", "giusta": "Ho due libri." }
    ]
  },
  "curiosi": [
    { "titolo": "ne：用来接着说“一点”", "t": "说过 del pane 之后，再提到同样的东西，意大利人常用 ne：Vuoi del pane? — Sì, ne voglio. 问数量时也用：Me ne dai un chilo?（你给我一公斤好吗？）Treccani 指出，代词 ne 也承担“部分”的作用，常常和部分冠词搭配出现。" },
    { "titolo": "del succo 和 dei succhi 不一样", "t": "液体用单数：del succo 是“一点果汁”。如果用复数 dei succhi，意思就变成“几种果汁”，比如苹果的、梨的。所以点饮料或买牛奶时，说 del latte、dell'acqua，不说复数。" },
    { "titolo": "介词后面：con alcuni amici 还是 con degli amici？", "t": "介词后面，口语里 esco con degli amici 很常见，也可以换成 alcuni：esco con alcuni amici。在 di 和 da 后面，部分冠词不能用，要换成 alcuni 这样的词：Parlo di alcune idee，不说 Parlo di delle idee。" },
    { "titolo": "抽象名词：del coraggio、c'è del buono", "t": "部分冠词也能和抽象名词连用：Mario ha del coraggio（马里奥有一点勇气）、quel pianista ha del talento（那位钢琴家有一些天赋）、In questo libro c'è del buono（这本书里有好的东西）。fare del bene（做点好事）和 fare bene（做得好）意思不同。" }
  ],
  "pragmatica": "点菜、买东西、招待客人时，部分冠词最自然：Vorrei dell'acqua, per favore. Vuoi del vino? Prendo delle olive. 写购物清单、说数量、回答否定的问题时则省略：pane, latte, un chilo di mele; Non ho tempo; Non c'è problema。拿不准时，想一想这是不是“一点、一些”：是，就用；说“没有”或数量已经说清楚，就不用。",
  "esercizi": [
    { "k": "scegli", "q": "哪一句里部分冠词的形式是对的？", "opzioni": [
      { "t": "Metto dello zucchero nel caffè.", "ok": true, "perche": "zucchero 是阳性单数，以 z 开头，所以用 dello。" },
      { "t": "Metto del zucchero nel caffè.", "ok": false, "perche": "以 z 开头的阳性名词前，要用 dello，不用 del。" },
      { "t": "Metto della zucchero nel caffè.", "ok": false, "perche": "zucchero 是阳性名词，della 是阴性。" }
    ] },
    { "k": "scegli", "q": "“我有两个姐妹。”哪一句对？", "opzioni": [
      { "t": "Ho due sorelle.", "ok": true, "perche": "数词后面直接加名词，不用部分冠词。" },
      { "t": "Ho delle due sorelle.", "ok": false, "perche": "数词已经说清了数量，不能再加部分冠词。" },
      { "t": "Ho dei sorelle.", "ok": false, "perche": "sorelle 是阴性复数，不能用阳性的 dei。" }
    ] },
    { "k": "scegli", "q": "有人问 Vuoi del pane?，哪个回答自然、意思是“要”？", "opzioni": [
      { "t": "Sì, ne voglio.", "ok": true, "perche": "ne 代替“一点面包”，是接着说的自然说法。" },
      { "t": "Sì, voglio dei.", "ok": false, "perche": "dei 不能单独使用，后面需要名词。" },
      { "t": "Sì, voglio di.", "ok": false, "perche": "di 不能这样单独使用，要用 ne 来代替。" }
    ] },
    { "k": "buco", "zh": "Vorrei ＿ acqua, per favore.", "tr": "我想要一点水。", "opzioni": [
      { "t": "dell'", "ok": true, "perche": "acqua 以元音开头，部分冠词写成 dell'。" },
      { "t": "della", "ok": false, "perche": "元音前要缩写成 dell'，不写 della。" },
      { "t": "dello", "ok": false, "perche": "acqua 是阴性名词，dello 是阳性。" }
    ] },
    { "k": "buco", "zh": "Ci sono ＿ studenti in classe.", "tr": "教室里有几个学生。", "opzioni": [
      { "t": "degli", "ok": true, "perche": "studenti 是 s + 辅音开头的阳性复数，用 degli。" },
      { "t": "dei", "ok": false, "perche": "s + 辅音开头的阳性复数，要用 degli，不用 dei。" },
      { "t": "delle", "ok": false, "perche": "studenti 是阳性复数，delle 是阴性复数。" }
    ] },
    { "k": "buco", "zh": "Compro un chilo ＿ mele.", "tr": "我买一公斤苹果。", "opzioni": [
      { "t": "di", "ok": true, "perche": "数量说清楚时用 di 加名词。" },
      { "t": "delle", "ok": false, "perche": "delle mele 指的是“那些苹果”，意思变了；说“一公斤苹果”用 di mele。" },
      { "t": "da", "ok": false, "perche": "da 不能表示“一公斤的苹果”，要用 di。" }
    ] },
    { "k": "ordine", "t": "vuoi un po' di torta", "tr": "你要一点蛋糕吗？" },
    { "k": "ordine", "t": "ho comprato delle verdure al supermercato", "tr": "我在超市买了一些蔬菜。" },
    { "k": "scrivi", "q": "用意大利语写：“你要一点面包吗？”（用部分冠词）", "a": "Vuoi del pane?", "accetta": ["Vuoi un po' di pane?", "Vuole del pane?", "Vuole un po' di pane?"], "perche": "pane 是阳性单数，不确定的一点用 del；也可以说 un po' di pane。" },
    { "k": "scrivi", "q": "用意大利语写：“我没有钱。”", "a": "Non ho soldi.", "accetta": ["Io non ho soldi.", "Non ho denaro.", "Non ho dei soldi."], "perche": "否定句里通常省略部分冠词：non ho soldi。" },
    { "k": "trasforma", "consegna": "把句子改成否定句，意思是“我没有书”。", "base": "Ho dei libri.", "accetta": ["Non ho libri.", "Non ho nessun libro.", "Non ho alcun libro.", "Non ho dei libri."], "rifiutate": [
      { "t": "Non ho di libri.", "perche": "宾语前面不需要 di，否定句直接说 non ho libri。" }
    ], "perche": "否定句里通常省略部分冠词：Ho dei libri → Non ho libri。" },
    { "k": "trasforma", "consegna": "把“一点”换成 un po' di，其他不变。", "base": "Vuoi del pane?", "accetta": ["Vuoi un po' di pane?"], "rifiutate": [
      { "t": "Vuoi un po' del pane?", "perche": "del pane 指“那个面包”，意思变了；说“一点面包”要用 un po' di pane。" }
    ], "perche": "un po' di 后面直接加名词，不再加冠词：un po' di pane。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Che cosa bevi la mattina?" },
      { "chi": "B", "t": "Bevo ＿ latte.", "buco": true }
    ], "opzioni": [
      { "t": "del", "ok": true, "perche": "latte 是阳性单数，不确定的一点，用 del。" },
      { "t": "dei", "ok": false, "perche": "latte 是单数，dei 是复数。" },
      { "t": "della", "ok": false, "perche": "latte 是阳性名词，della 是阴性。" }
    ] }
  ],
  "capaci": [
    "你会用 del、dello、dell'、della 和 dei、degli、delle 说“一点、一些”，并且让它们和名词的性、数一致。",
    "你会判断什么时候不用部分冠词：否定句、数词后面、数量说清楚（un chilo di）、说喜欢和泛指的东西。",
    "你会用 un po' di、qualche、alcuni 换一种说法，并且知道 qualche 后面是单数名词。",
    "你会用 ne 接着说：Vuoi del pane? — Sì, ne voglio."
  ],
  "glosse": {
    "Vuoi un po' di pane": "你要一点面包吗？",
    "Hai amici a Roma": "你在罗马有朋友吗？",
    "Vorrei dell'acqua, per favore": "请给我一点水。"
  },
  "fonti": [
    "Treccani, Enciclopedia dell'Italiano, voce «Partitivo» (letta: singolare del/della per la quantità indeterminata; plurale come plurale dell'indeterminativo; test con un po' di e alcuni; ne partitivo; articolo zero)",
    "Treccani, La grammatica italiana, voce «Partitivo, articolo» (singolare con nomi non numerabili, plurale come plurale dell'indeterminativo)",
    "University of Iowa, D'accordo! (pressbooks), capitolo «Partitivi» (qualche, alcuni, un po' di; partitivo non espresso nelle frasi negative)",
    "New York University, ALLORA Online Grammar Reference, sezione 10.8 «Partitives» (un po' di; qualche)",
    "Tatoeba (ita.tsv, grep): «Vuoi del» (76), «dell'acqua» (612), «degli amici» (166), «un chilo di» (28), «Non ho soldi» (30)"
  ]
};
