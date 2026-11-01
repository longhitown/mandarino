/* Lezione 21 · 客气地说：条件式 (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["condizionale"] = {
  "v": 1,
  "svolta": true,
  "scopri": {
    "frasi": [
      { "t": "Voglio un caffè.", "tr": "我要一杯咖啡。" },
      { "t": "Vorrei un caffè.", "tr": "我想要一杯咖啡。（更客气）" },
      { "t": "Puoi chiudere la porta?", "tr": "你能关一下门吗？" },
      { "t": "Potresti chiudere la porta?", "tr": "你能不能关一下门？（更客气）" }
    ],
    "domanda": "比较第一句和第二句、第三句和第四句：意思几乎一样，哪一句听起来更客气？动词的形式有什么变化？汉语里你会加哪些词（请、麻烦、能不能……）来让话变软？",
    "risposta": "第二句和第四句更客气。动词从现在时（voglio, puoi）变成了条件式（vorrei, potresti）：词干相同，词尾换成 -ei、-esti。意大利语不靠“请”这样的词，而是靠**动词的形式**让话变软：说 vorrei 就像退后一步，把选择权留给对方。"
  },
  "regola": {
    "enunciato": "条件式现在时是意大利语表达**客气**的主要工具：用 vorrei 代替 voglio，用 potrebbe 代替 può，就把“要求”变成了“请求”，让对方可以自由回答。同一个形式还用来给**建议**（Dovresti…）、说**愿望**（Mi piacerebbe…）和做**温和的假设**（Sarebbe bello…）。构成：词干（和将来时一样）+ -ei、-esti、-ebbe、-emmo、-este、-ebbero。",
    "schema": ["词干（同将来时）", "-ei / -esti / -ebbe", "-emmo / -este / -ebbero", "客气 · 建议 · 愿望"],
    "punti": [
      { "ok": true, "t": "**规则变位**：-are 动词的 a 变成 e：parlare → parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero；-ere 和 -ire 动词直接加词尾：prendere → prenderei，dormire → dormirei。" },
      { "ok": true, "t": "**拼写要注意**：-care、-gare 要加 h（cercare → cercherei，pagare → pagherei）；-ciare、-giare 要去掉 i（cominciare → comincerei，mangiare → mangerei）。" },
      { "ok": true, "t": "**常用的不规则词干要背下来**：essere → sarei，avere → avrei，andare → andrei，potere → potrei，volere → vorrei，dovere → dovrei，venire → verrei，vedere → vedrei，sapere → saprei。fare、dire、stare、dare 看起来短，其实是规则的：farei, direi, starei, darei。" },
      { "ok": true, "t": "**请求**：用 Vorrei…, Potresti…?, Potrebbe…?, Le dispiacerebbe…? 把话说得客气。对陌生人、长辈、服务人员用 Lei，动词是第三人称：Potrebbe, Avrebbe, Le dispiacerebbe。" },
      { "ok": true, "t": "**建议和愿望**：Dovresti dormire di più. 和 Al tuo posto direi di sì. 是温和的建议；Mi piacerebbe… 和 Sarebbe bello… 说的是愿望和想象，比 Voglio… 轻、暖。" },
      { "ok": true, "t": "**转述消息**：Secondo il giornale ci sarebbero… 表示“这是报纸说的”：说话人只是转述，不替消息担保。这是新闻里很常见的用法，这里先认识一下。" },
      { "ok": false, "t": "**表示假设的 se 后面不用条件式**：不说 Se avrei tempo, verrei；说 Se avessi tempo, verrei。这是“假设句”，本课只作预告，后面的课会细讲。" },
      { "ok": false, "t": "**不要把 voglio 当成“请给我”**：Voglio un caffè 听起来像命令。在咖啡馆、商店、餐厅，对服务员说 Vorrei。" }
    ]
  },
  "logica": [
    "汉语的客气靠**词**和**语气**：请、麻烦您、能不能、可以……吗，再加上“一下”“稍微”。意大利语的客气主要靠**动词的形式**：voglio 是“我要”，vorrei 是“如果可以的话，我想要”。条件式里藏着一个没有说出口的“如果你愿意的话”，所以听起来不强迫别人。",
    "汉语的几个客气说法在意大利语里对应不同的“程度”：请 ≈ per favore（常放在句尾）；能不能…… ≈ Potresti…? 或 Potrebbe…?；麻烦您…… ≈ Le dispiacerebbe…?（请别人帮较大的忙）。所以不能只把汉语的“请”翻成 per favore：动词也要变成条件式，句子才真正客气。",
    "同样的形式还用在别的地方。建议：Dovresti… 比 Devi… 软，因为没有命令的口气。愿望：Mi piacerebbe… 说的是想象中的事。转述：Secondo il giornale… sarebbe… 说的是别人的话。这些用法共同的核心是：说话人和事实之间留出一点距离。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["客气程度", "意大利语说法", "对谁用", "汉语里相当于"],
    "righe": [
      ["直接", "Dammi il sale. / Voglio il sale.", "家人、很熟的朋友", "给我盐。 / 我要盐。"],
      ["日常", "Mi passi il sale? / Mi puoi passare il sale?", "朋友、同事", "把盐递给我好吗？"],
      ["客气（tu）", "Mi passeresti il sale? / Potresti passarmi il sale?", "不太熟的人、同龄人", "能不能把盐递给我？"],
      ["客气（Lei）", "Può passarmi il sale?", "陌生人，一般场合", "您能把盐递给我吗？"],
      ["很客气（Lei）", "Potrebbe passarmi il sale, per favore?", "陌生人、长辈、服务场合", "麻烦您把盐递给我，好吗？"],
      ["非常客气", "Le dispiacerebbe passarmi il sale?", "正式场合，或请别人帮较大的忙", "不知道您介意不介意……"]
    ]
  },
  "esempi": [
    { "gruppo": "在咖啡馆和商店：vorrei, potrebbe", "items": [
      { "t": "Vorrei due caffè e un cornetto, per favore.", "tr": "请给我两杯咖啡和一个牛角包。", "nota": "点东西的标准说法；per favore 常放在句尾。" },
      { "t": "Vorrei provare questa giacca.", "tr": "我想试试这件夹克。" },
      { "t": "Potrebbe portarmi il conto, per favore?", "tr": "您能把账单拿给我吗？", "nota": "对服务员用 Lei：potrebbe（第三人称）。" },
      { "t": "Mi darebbe un sacchetto, per favore?", "tr": "您能给我一个袋子吗？" }
    ] },
    { "gruppo": "在办公室：请别人帮忙", "items": [
      { "t": "Le dispiacerebbe spostare un attimo la macchina?", "tr": "您介意把车稍微挪一下吗？", "nota": "dispiacere 的条件式：Le dispiacerebbe + 动词原形。" },
      { "t": "Potresti mandarmi il file entro domani?", "tr": "你能在明天之前把文件发给我吗？", "nota": "对同事用 tu：potresti。" }
    ] },
    { "gruppo": "建议：dovresti, al tuo posto", "items": [
      { "t": "Dovresti dormire di più.", "tr": "你应该多睡一点。" },
      { "t": "Al tuo posto direi di sì.", "tr": "如果我是你，我会答应。" },
      { "t": "Sarebbe meglio partire presto.", "tr": "早点出发会更好。" }
    ] },
    { "gruppo": "愿望和想象", "items": [
      { "t": "Mi piacerebbe vivere vicino al mare.", "tr": "我很想住在海边。", "nota": "piacerebbe 后面接想做的事（动词原形）。" },
      { "t": "Sarebbe bello rivederci presto.", "tr": "要是能早点再见就好了。" },
      { "t": "Dormirei volentieri fino a mezzogiorno.", "tr": "我很愿意睡到中午。" }
    ] },
    { "gruppo": "转述的消息和假设的预告", "items": [
      { "t": "Secondo il giornale, il museo chiuderebbe per tre mesi.", "tr": "据报纸说，博物馆要关闭三个月。", "nota": "条件式表示这是别人说的消息。" },
      { "t": "Se avessi tempo, verrei volentieri.", "tr": "要是我有时间，我很愿意来。", "nota": "预告：se + avessi，主句用条件式。" }
    ] }
  ],
  "contrasti": [
    { "q": "在咖啡馆对不认识的服务员点咖啡，哪一句最自然？", "opzioni": [
      { "t": "Vorrei un caffè, per favore.", "ok": true, "perche": "vorrei 是点东西的标准客气说法，再加 per favore 就很得体。" },
      { "t": "Voglio un caffè, per favore.", "ok": false, "perche": "voglio 是现在时，像直接下命令；加了 per favore 也不能完全补救。" }
    ] },
    { "q": "你想请一位不认识的老太太再说一遍。哪一句正确？", "opzioni": [
      { "t": "Potrebbe ripetere, per favore?", "ok": true, "perche": "对陌生的长辈用 Lei，动词是第三人称 potrebbe。" },
      { "t": "Potresti ripetere, per favore?", "ok": false, "perche": "potresti 是 tu（你）的形式，对陌生的长辈显得太随便。" },
      { "t": "Potrei ripetere, per favore?", "ok": false, "perche": "potrei 的主语是“我”，意思变成“我可以重复吗？”，请求的方向反了。" }
    ] },
    { "q": "你和好朋友一起吃饭，想请他递盐。哪一句最自然？", "opzioni": [
      { "t": "Mi passi il sale?", "ok": true, "perche": "朋友之间用现在时就很自然，不需要多余的客气。" },
      { "t": "Le dispiacerebbe passarmi il sale?", "ok": false, "perche": "Le dispiacerebbe 是 Lei 的正式说法，对好朋友说像在开玩笑。" }
    ] },
    { "q": "朋友最近很累，你想温和地建议他多睡觉，不想下命令。哪一句？", "opzioni": [
      { "t": "Dovresti dormire di più.", "ok": true, "perche": "dovresti 是 dovere 的条件式，给的是建议，不是命令。" },
      { "t": "Devi dormire di più.", "ok": false, "perche": "devi 是现在时，说的是“你必须”，听起来像命令。" },
      { "t": "Dovrei dormire di più.", "ok": false, "perche": "dovrei 的主语是“我”：“我应该多睡”，不是对朋友的建议。" }
    ] },
    { "q": "你想说“我想去（但还没决定）”，表达愿望。哪个动词形式对？", "opzioni": [
      { "t": "Andrei volentieri al mare.", "ok": true, "perche": "andare 的不规则词干是 andr-，加 -ei：andrei，表示愿望。" },
      { "t": "Andarei volentieri al mare.", "ok": false, "perche": "andare 不能按规则变 a→e；词干是 andr-，不是 and-。" },
      { "t": "Andrò volentieri al mare.", "ok": false, "perche": "andrò 是将来时，说的是已经决定要去。" }
    ] },
    { "q": "你转述报纸的消息，但不替它担保。哪一句最合适？", "opzioni": [
      { "t": "Secondo il giornale, il sindaco si dimetterebbe.", "ok": true, "perche": "条件式表示这是报纸说的，说话人只是转述。" },
      { "t": "Secondo il giornale, il sindaco si dimetterà.", "ok": false, "perche": "将来时把消息当作事实来说，不能表示“只是转述”。" },
      { "t": "Secondo il giornale, il sindaco si è dimesso.", "ok": false, "perche": "这是过去的事实，意思也不同，不是转述将要发生的事。" }
    ] },
    { "q": "你请一位年长的邻居（不太熟）帮一个较大的忙：照看你的猫两天。哪一句最得体？", "opzioni": [
      { "t": "Le dispiacerebbe tenere il mio gatto per due giorni?", "ok": true, "perche": "较大的忙用 Le dispiacerebbe…?，既客气又给对方拒绝的余地。" },
      { "t": "Tieni il mio gatto per due giorni?", "ok": false, "perche": "这是对熟人的 tu 现在时，对年长的邻居太直接。" },
      { "t": "Voglio che tenga il mio gatto per due giorni.", "ok": false, "perche": "voglio che… 是命令的口气，不是请求。" }
    ] },
    { "q": "“Io vorrei” 的正确拼写是哪一个？", "opzioni": [
      { "t": "Io vorrei", "ok": true, "perche": "volere 的条件式词干是 vorr-，所以有两个 r：vorrei。" },
      { "t": "Io vorei", "ok": false, "perche": "少了一个 r；词干 vorr- 的两个 r 都要写。" },
      { "t": "Io voglierei", "ok": false, "perche": "条件式不是从现在时 voglio 变来的，而是从将来时词干 vorr- 变来的。" }
    ] },
    { "q": "要说“要是我有时间，我就来”（现在没有时间）。哪一句正确？", "opzioni": [
      { "t": "Se avessi tempo, verrei.", "ok": true, "perche": "se 后面用 avessi（虚拟式），主句用条件式 verrei。" },
      { "t": "Se avrei tempo, verrei.", "ok": false, "perche": "表示假设的 se 后面不能用条件式；这是学习者最常见的错误。" },
      { "t": "Se avessi tempo, verrò.", "ok": false, "perche": "假设的句子，主句也要是条件式；verrò 是将来时，两部分不配套。" }
    ] }
  ],
  "dialogo": {
    "titolo": "在服装店试穿夹克",
    "righe": [
      { "chi": "A", "t": "Buongiorno, vorrei provare questa giacca.", "tr": "您好，我想试试这件夹克。" },
      { "chi": "B", "t": "Certo. Che taglia porta?", "tr": "当然可以。您穿多大号？" },
      { "chi": "A", "t": "La quarantaquattro. Avrebbe anche un altro colore?", "tr": "四十四号。有别的颜色吗？" },
      { "chi": "B", "t": "Ho il blu e il grigio. Le dispiacerebbe aspettare un momento?", "tr": "有蓝色和灰色。您介意稍等一下吗？" },
      { "chi": "A", "t": "Si figuri. Potrei provare anche il grigio?", "tr": "不用客气。我也可以试试灰色的吗？" },
      { "chi": "B", "t": "Certo, glielo porto subito.", "tr": "当然，我马上给您拿来。" }
    ],
    "esercizi": [
      { "q": "A 对店员说想试穿夹克，用的是哪种客气说法？", "opzioni": [
        { "t": "Vorrei provare questa giacca.", "ok": true, "perche": "vorrei + 动词原形，是在店里表达愿望的标准客气说法。" },
        { "t": "Voglio provare questa giacca.", "ok": false, "perche": "voglio 是现在时，对店员显得生硬。" }
      ] },
      { "q": "对话里，B 是怎么请 A 稍等的？", "opzioni": [
        { "t": "Le dispiacerebbe aspettare un momento?", "ok": true, "perche": "店员对顾客用 Lei 的条件式，客气又不强迫。" },
        { "t": "Aspetti un momento.", "ok": false, "perche": "对话里 B 没有这样说；Aspetti 是命令式，比 Le dispiacerebbe 直接得多。" }
      ] },
      { "q": "A 说 “Si figuri” 是什么意思？", "opzioni": [
        { "t": "不用客气，我不介意。", "ok": true, "perche": "Si figuri 是 Lei 的说法，意思是“您别担心，没关系”。" },
        { "t": "我很不高兴。", "ok": false, "perche": "这句话是礼貌地接受请求，不是抱怨。" },
        { "t": "请想象一下。", "ok": false, "perche": "figurarsi 在这里是固定用法，不是“想象”。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语学习者常把 voglio 当作“我要”，在咖啡馆说 Voglio un caffè。另外也容易把条件式变位写错：voglierei, andarei, mangierei；或者在 se 后面也用条件式：Se avrei tempo…",
    "perche": "汉语的“我要一杯咖啡”在咖啡馆完全自然，所以直接翻成 voglio；汉语的动词也不变形，所以不习惯用词尾来表示客气。变位错误则是因为把条件式当成从现在时变出来的，而它其实来自将来时的词干。",
    "esci": "点东西、请求时，先想“对谁说？”：对服务员和陌生人用 vorrei, potrebbe；对朋友可以用现在时。变位时想将来时的词干：andrò → andrei，vorrò → vorrei。mangiare 去掉 i：mangerei。表示假设的 se 后面用 avessi, fossi 这样的形式。",
    "esempi": [
      { "sbagliata": "Voglio un caffè.", "giusta": "Vorrei un caffè." },
      { "sbagliata": "Io andarei al cinema.", "giusta": "Io andrei al cinema." },
      { "sbagliata": "Io mangierei una pizza.", "giusta": "Io mangerei una pizza." },
      { "sbagliata": "Se avrei tempo, verrei.", "giusta": "Se avessi tempo, verrei." }
    ]
  },
  "curiosi": [
    { "titolo": "新闻里的条件式", "t": "在报纸和电视新闻里，条件式常用来报道还没有最后确定的消息：Il ministro sarebbe in partenza.（据说部长即将出发。）记者用它表示“这是别人告诉我们的”。在日常对话里这种用法不多，但看新闻时你会经常遇到。" },
    { "titolo": "Volevo un caffè：口语里的客气", "t": "在咖啡馆和商店里，你也会听到未完成过去时的客气说法：Volevo un caffè. 意思和 Vorrei 一样，但更口语、更随便。作为学习者，先用 Vorrei 最稳妥，到处都合适。" },
    { "titolo": "为什么对 Lei 用第三人称", "t": "Lei 原本是对人的尊称（来自阴性的“阁下”一类称呼），所以对陌生人的客气说法用第三人称单数动词：Potrebbe, Avrebbe, Le dispiacerebbe。这和汉语的“您”类似：不是新的动词，而是换一种称呼的方式，所以 Lei 的条件式词尾是 -ebbe。" },
    { "titolo": "过去的条件式和后悔", "t": "条件式还有过去时：Avrei dovuto chiamarti.（我本来应该给你打电话的。）表示后悔或没有发生的事。构成是 avere / essere 的条件式 + 过去分词：avrei dovuto, sarei andato。本课先认识现在时，过去时留到后面。" }
  ],
  "pragmatica": "在咖啡馆、商店、餐厅、办公室，对陌生人和服务人员用 Vorrei, Potrebbe, Le dispiacerebbe 是最稳妥的；朋友之间说 Mi dai…? Mi passi…? 就很自然，条件式（Mi daresti…?）会增加一点礼貌的距离。给建议时 Dovresti 比 Devi 柔和。写正式邮件时，条件式几乎是标准：Vorrei chiedere…, Potrebbe inviarmi…?",
  "esercizi": [
    { "k": "scegli", "q": "在咖啡馆对服务员说，哪一句最客气？", "opzioni": [
      { "t": "Vorrei un tè, per favore.", "ok": true, "perche": "vorrei 加 per favore，是点东西最客气、最自然的说法。" },
      { "t": "Voglio un tè.", "ok": false, "perche": "voglio 是现在时，听起来像命令，也没有 per favore。" },
      { "t": "Vorrebbe un tè.", "ok": false, "perche": "vorrebbe 的主语是 lui/lei/Lei，不是“我”。" }
    ] },
    { "k": "scegli", "q": "Sarebbe meglio partire presto. 是什么意思？", "opzioni": [
      { "t": "早点出发会更好。", "ok": true, "perche": "sarebbe meglio + 动词原形，是温和的建议。" },
      { "t": "我们已经出发了。", "ok": false, "perche": "这句话是条件式，说的不是已经发生的事。" },
      { "t": "不应该出发。", "ok": false, "perche": "meglio 是“更好”，句子没有否定。" }
    ] },
    { "k": "buco", "zh": "Mi ＿ tanto andare in Giappone.", "tr": "我很想去日本。", "opzioni": [
      { "t": "piacerebbe", "ok": true, "perche": "piacere 的条件式 piacerebbe，用来说愿望。" },
      { "t": "piace", "ok": false, "perche": "piace 是现在时，说的是“喜欢”，不是“很想”。" },
      { "t": "piacque", "ok": false, "perche": "piacque 是远过去时，不用于日常口语。" }
    ] },
    { "k": "buco", "zh": "Al tuo posto ＿ di sì.", "tr": "如果我是你，我会答应。", "opzioni": [
      { "t": "direi", "ok": true, "perche": "dire 的条件式是 direi，用来给建议。" },
      { "t": "dico", "ok": false, "perche": "dico 是现在时，不能表达“如果我是你”的假设。" },
      { "t": "dirò", "ok": false, "perche": "dirò 是将来时，说的是已经决定的事。" }
    ] },
    { "k": "buco", "zh": "Se ＿ tempo, verrei volentieri.", "tr": "要是我有时间，我很愿意来。", "opzioni": [
      { "t": "avessi", "ok": true, "perche": "se 后面用 avessi（虚拟式），主句用条件式 verrei。" },
      { "t": "avrei", "ok": false, "perche": "表示假设的 se 后面不能用条件式；这是常见错误。" },
      { "t": "ho", "ok": false, "perche": "ho 是现在时，句子变成可能实现的条件，意思和 verrei 不配。" }
    ] },
    { "k": "ordine", "t": "Potrebbe portarmi il conto, per favore", "tr": "您能把账单拿给我吗？" },
    { "k": "ordine", "t": "Vorrei prenotare un tavolo per due", "tr": "我想订一张两人的桌子。" },
    { "k": "trasforma", "base": "Voglio un biglietto.", "consegna": "对售票员更客气地说：只把 volere 改成条件式，其他词不变。", "accetta": ["Vorrei un biglietto."], "rifiutate": [
      { "t": "Voglio un biglietto, per favore.", "perche": "只加了 per favore，动词还是现在时，没有变成条件式。" }
    ], "perche": "volere 的条件式第一人称是 vorrei，词干 vorr- 有两个 r。" },
    { "k": "trasforma", "base": "Mi puoi aiutare?", "consegna": "你要请一位陌生的老先生帮忙。用 Lei 和 potere 的条件式，以 Potrebbe 开头改写。", "accetta": ["Potrebbe aiutarmi?", "Potrebbe aiutarmi, per favore?", "Potrebbe aiutarmi per favore?"], "rifiutate": [
      { "t": "Potresti aiutarmi?", "perche": "potresti 是 tu 的形式，对陌生的老先生要用 Lei：potrebbe。" }
    ], "perche": "对陌生人用 Lei，动词是第三人称条件式 potrebbe，代词 mi 接在动词原形后面：aiutarmi。" },
    { "k": "trasforma", "base": "Devi dormire di più.", "consegna": "改成温和的建议，对朋友（tu）说，用 dovere 的条件式。", "accetta": ["Dovresti dormire di più."], "rifiutate": [
      { "t": "Dovrei dormire di più.", "perche": "dovrei 的主语是“我”：这是对自己的建议。" }
    ], "perche": "dovere 的条件式第二人称单数是 dovresti，比 devi 柔和，是建议而不是命令。" },
    { "k": "scrivi", "q": "用意大利语写，对服务员说：“请给我一份披萨。”（用 volere 的条件式）", "a": "Vorrei una pizza, per favore.", "accetta": ["Vorrei una pizza, per favore", "Vorrei una pizza per favore.", "Per favore, vorrei una pizza.", "Vorrei una pizza, per piacere.", "Vorrei una pizza."], "perche": "点东西用 vorrei；per favore 常放在句尾。" },
    { "k": "scrivi", "q": "写出 venire 的条件式第一人称单数（只写一个词）。", "a": "verrei", "accetta": ["Verrei", "verrei.", "io verrei", "Io verrei"], "perche": "venire 的不规则词干是 verr-，加 -ei：verrei。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Ho mal di schiena da giorni." },
      { "chi": "B", "t": "＿ andare dal medico.", "buco": true }
    ], "opzioni": [
      { "t": "Dovresti", "ok": true, "perche": "朋友之间的温和建议：dovresti + 动词原形。" },
      { "t": "Dovrei", "ok": false, "perche": "dovrei 的主语是“我”，不是对 A 的建议。" },
      { "t": "Dovevano", "ok": false, "perche": "dovevano 是第三人称复数的过去时，与 A 的话题不配。" }
    ] }
  ],
  "capaci": [
    "你会在咖啡馆、商店和餐厅用 Vorrei 和 Potrebbe 客气地点东西、提要求。",
    "你会选择客气的程度：对朋友用现在时，对陌生人和长辈用 Lei 的条件式。",
    "你会变出常用动词的条件式，包括 sarei, avrei, andrei, potrei, vorrei, dovrei, verrei。",
    "你会用 Dovresti… 和 Al tuo posto direi… 给出温和的建议，用 Mi piacerebbe… 说愿望。",
    "你认识新闻里转述消息的条件式，也认识 Se avessi tempo, verrei 这样的假设句。"
  ],
  "fonti": [
    "Northwestern Open Books, Intermediate Italian Grammar 1, cap. 8 (il condizionale presente: forme e usi)",
    "Treccani, Enciclopedia dell'Italiano, voce «condizionale» (richiesta attenuata con vorrei, desiderio, condizionale di dissociazione nelle notizie riportate)",
    "Tatoeba (corpus italiano), frasi con Vorrei, Potresti, Dovresti, Mi piacerebbe (controllo della naturalezza)"
  ]
};
