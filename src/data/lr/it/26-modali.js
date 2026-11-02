/* Lezione 26 · 能、要、应该：情态动词 (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["modali"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Posso entrare?", "tr": "我可以进来吗？" },
      { "t": "Voglio imparare l'italiano.", "tr": "我想学意大利语。" },
      { "t": "Devo andare.", "tr": "我得走了。" },
      { "t": "So nuotare.", "tr": "我会游泳。" }
    ],
    "domanda": "这四句话里的第一个动词（posso, voglio, devo, so）后面接的动词是什么形式？中间有没有 di 或 a 之类的小词？汉语里“能、想、得、会”是四个不同的词，意大利语用了几个动词？",
    "risposta": "第二个动词都是不定式原形（entrare, imparare, andare, nuotare），中间不加任何小词。汉语的“能/可以、想/要、得/应该、会”对应四个动词：potere、volere、dovere、sapere。前三个是典型的情态动词，sapere 用来表示学会的本领。"
  },
  "regola": {
    "enunciato": "potere（能、可以）、volere（想、要）、dovere（得、必须、应该）和 sapere（会，指学会的本领）后面直接接动词不定式，中间不加 di 或 a。四个动词的现在时都是不规则的，必须背熟。变位只发生在情态动词上，不定式永远不变：Devo andare, dobbiamo andare, devono andare。",
    "schema": ["主语", "potere / volere / dovere / sapere（变位）", "不定式（不变）", "其他成分"],
    "punti": [
      { "ok": true, "t": "**potere** 表示“能、可以、有条件做”，也用来问和给许可：Posso entrare? 否定 **non posso** 表示“不能、不行”。" },
      { "ok": true, "t": "**volere** 表示“想、要”：Voglio un caffè. 后面也可以接名词。想客气地说，用条件式 **vorrei**（上一课学过）。" },
      { "ok": true, "t": "**dovere** 表示“得、必须”：Devo studiare. 它还有“应该”和“欠（钱）”的意思，后面会讲。" },
      { "ok": true, "t": "**sapere** + 不定式表示“会（学过的本领）”：So guidare. 没有学过的话，用 non so：Non so cucinare." },
      { "ok": true, "t": "**代词的位置有两种**：放在情态动词前（Lo voglio vedere），或者接在不定式后面写成一个词（Voglio vederlo）。意思完全一样。" },
      { "ok": true, "t": "**近过去时**：助动词跟着后面不定式的助动词走。Ho dovuto aspettare（aspettare 用 avere）；Sono dovuto andare（andare 用 essere，分词要和主语一致）。" },
      { "ok": false, "t": "**情态动词和不定式之间不加 di 或 a**：不说 Devo di andare，不说 Voglio di mangiare。" },
      { "ok": false, "t": "**不定式不变位**：不说 Devo andato，不说 Voglio mangio，也不要说 Dobbo。" }
    ]
  },
  "logica": [
    "汉语的“能”是一个很宽的词：能力、条件、许可都可以说“能”。意大利语把它拆开：学会的本领用 **sapere**（So nuotare：我学过游泳），条件和许可用 **potere**（Oggi non posso nuotare：今天没有条件游泳；Posso entrare?：我可以进来吗）。所以遇到“能”或“会”，先问自己：这是学过的技能，还是眼前的条件和许可？",
    "三个情态动词都是“半个助动词”：它们本身只表示态度（想、能、得），真正的动作交给后面的不定式。所以只有第一个动词变位，第二个永远是原形——就像汉语里“我想去”“你得去”“他能去”，中间的“去”从来不变。",
    "汉语的“要”有时是 volere（我要一杯咖啡），有时是 dovere（我要走了）。意大利语分得很清楚：想要的是 voglio，不得不做的是 devo。说 Voglio andare 的意思是“我想走”，如果你的意思是“我得走了”，就必须说 Devo andare。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["人称", "potere", "volere", "dovere", "sapere"],
    "righe": [
      ["io", "posso", "voglio", "devo", "so"],
      ["tu", "puoi", "vuoi", "devi", "sai"],
      ["lui / lei / Lei", "può", "vuole", "deve", "sa"],
      ["noi", "possiamo", "vogliamo", "dobbiamo", "sappiamo"],
      ["voi", "potete", "volete", "dovete", "sapete"],
      ["loro", "possono", "vogliono", "devono", "sanno"]
    ]
  },
  "esempi": [
    { "gruppo": "potere：条件和许可", "items": [
      { "t": "Posso aprire la finestra? Fa caldo.", "tr": "我可以开窗吗？很热。" },
      { "t": "Domani non posso venire: lavoro fino a tardi.", "tr": "明天我来不了，我要工作到很晚。" },
      { "t": "Puoi ripetere, per favore?", "tr": "你可以再说一遍吗？" }
    ] },
    { "gruppo": "volere：想、要", "items": [
      { "t": "Voglio un caffè, e tu?", "tr": "我要一杯咖啡，你呢？" },
      { "t": "Stasera non voglio uscire: sono stanco.", "tr": "今晚我不想出去，我累了。" },
      { "t": "Mia sorella vuole fare il medico.", "tr": "我姐姐想当医生。" }
    ] },
    { "gruppo": "dovere：得、必须", "items": [
      { "t": "Devo comprare il latte.", "tr": "我得买牛奶。" },
      { "t": "Dobbiamo partire presto domani.", "tr": "我们明天得早点出发。" },
      { "t": "I bambini devono dormire almeno nove ore.", "tr": "小孩子至少要睡九个小时。" }
    ] },
    { "gruppo": "sapere：会（学过的本领）", "items": [
      { "t": "So cucinare il risotto.", "tr": "我会做意式炖饭。" },
      { "t": "Mio fratello non sa ancora nuotare.", "tr": "我弟弟还不会游泳。" }
    ] },
    { "gruppo": "代词的位置", "items": [
      { "t": "Lo posso fare domani.", "tr": "这件事我明天能做。", "nota": "代词放在情态动词前。" },
      { "t": "Posso farlo domani.", "tr": "这件事我明天能做。", "nota": "代词接在不定式后面，写成一个词。" }
    ] },
    { "gruppo": "过去时", "items": [
      { "t": "Ieri ho dovuto aspettare un'ora.", "tr": "昨天我不得不等了一个小时。" },
      { "t": "Non ho potuto venire, scusami.", "tr": "我没能来，对不起。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我会游泳。”（小时候学会的）哪一句对？", "opzioni": [
      { "t": "So nuotare.", "ok": true, "perche": "学会的本领用 sapere。" },
      { "t": "Posso nuotare.", "ok": false, "perche": "Posso nuotare 说的是现在有条件或被允许游泳，不是“会游泳”这项本领。" },
      { "t": "Devo nuotare.", "ok": false, "perche": "Devo 是“必须”，意思完全不同。" }
    ] },
    { "q": "“今天我来不了，我要开会。”哪一句对？", "opzioni": [
      { "t": "Oggi non posso venire, ho una riunione.", "ok": true, "perche": "开会是外部条件，使你来不了，用 potere。" },
      { "t": "Oggi non so venire, ho una riunione.", "ok": false, "perche": "sapere 说的是学过的本领，来不来和会不会没关系。" }
    ] },
    { "q": "“我得走了，已经很晚了。”哪一句对？", "opzioni": [
      { "t": "Devo andare, è tardi.", "ok": true, "perche": "已经很晚，是不得不走，用 dovere。" },
      { "t": "Voglio andare, è tardi.", "ok": false, "perche": "Voglio 是“我想走”，表达的是愿望，不是必须。" },
      { "t": "So andare, è tardi.", "ok": false, "perche": "sapere 不表示必须，这里的意思不通。" }
    ] },
    { "q": "“我想学意大利语。”哪一句对？", "opzioni": [
      { "t": "Voglio imparare l'italiano.", "ok": true, "perche": "volere 后面直接接不定式。" },
      { "t": "Voglio di imparare l'italiano.", "ok": false, "perche": "情态动词和不定式之间不加 di。" },
      { "t": "Voglio imparo l'italiano.", "ok": false, "perche": "第二个动词要用不定式 imparare，不变位。" }
    ] },
    { "q": "“我能做这件事。”（用代词 lo）哪一句对？", "opzioni": [
      { "t": "Posso farlo.", "ok": true, "perche": "代词接在不定式后面，写成一个词：farlo。" },
      { "t": "Posso lo fare.", "ok": false, "perche": "代词不能插到不定式的前面又分开写。" },
      { "t": "Posso fare lo.", "ok": false, "perche": "代词必须和不定式写成一个词，不能分开。" }
    ] },
    { "q": "“昨天我不得不等了一个小时。”哪一句对？", "opzioni": [
      { "t": "Ieri ho dovuto aspettare un'ora.", "ok": true, "perche": "aspettare 用 avere，所以助动词是 ho。" },
      { "t": "Ieri sono dovuto aspettare un'ora.", "ok": false, "perche": "aspettare 的助动词是 avere，不是 essere。" },
      { "t": "Ieri ho dovuto aspettato un'ora.", "ok": false, "perche": "dovere 后面接不定式 aspettare，不接过去分词。" }
    ] },
    { "q": "在咖啡馆客气地对服务员点单。哪一句对？", "opzioni": [
      { "t": "Vorrei un caffè, per favore.", "ok": true, "perche": "vorrei 是 volere 的条件式，把要求变成请求，适合点单。" },
      { "t": "Voglio un caffè.", "ok": false, "perche": "语法没错，但听起来像命令，不适合对服务员说。" }
    ] },
    { "q": "对一位不认识的老人客气地求助：“您能帮我一下吗？”哪一句对？", "opzioni": [
      { "t": "Può aiutarmi, per favore?", "ok": true, "perche": "对不熟的人或长辈用 Lei，动词是第三人称 può。" },
      { "t": "Puoi aiutarmi, per favore?", "ok": false, "perche": "puoi 是对朋友用的 tu，对陌生的长辈显得不够客气。" },
      { "t": "Deve aiutarmi, per favore?", "ok": false, "perche": "deve 是“您必须”，听起来像命令。" }
    ] },
    { "q": "“我不想去。”（这是你的意愿）哪一句对？", "opzioni": [
      { "t": "Non voglio andare.", "ok": true, "perche": "不想是愿望，用 non voglio。" },
      { "t": "Non posso andare.", "ok": false, "perche": "non posso 是“去不了”，说的是条件不允许。" },
      { "t": "Non so andare.", "ok": false, "perche": "non so 是“不会去”，意思不通。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Stasera cinema?",
    "righe": [
      { "chi": "A", "t": "Stasera vuoi venire al cinema con noi?", "tr": "今晚你想跟我们一起去看电影吗？" },
      { "chi": "B", "t": "Mi dispiace, non posso. Devo preparare l'esame di domani.", "tr": "对不起，我去不了。我得准备明天的考试。" },
      { "chi": "A", "t": "Peccato! Quando puoi?", "tr": "真可惜！那你什么时候有空？" },
      { "chi": "B", "t": "Sabato sono libero. Possiamo andare sabato?", "tr": "星期六我有空。我们星期六去行吗？" },
      { "chi": "A", "t": "Certo! Posso invitare anche Marta?", "tr": "当然！我可以也邀请玛尔塔吗？" },
      { "chi": "B", "t": "Sì, sì, volentieri.", "tr": "好啊好啊，我很乐意。" }
    ],
    "esercizi": [
      { "q": "B 为什么今晚去不了？", "opzioni": [
        { "t": "因为他得准备明天的考试", "ok": true, "perche": "Devo preparare l'esame 说的是不得不做的事。" },
        { "t": "因为他不想看电影", "ok": false, "perche": "他说的是 non posso（去不了），不是 non voglio。" },
        { "t": "因为他不会去电影院", "ok": false, "perche": "他没有说 non so，会不会不是问题。" }
      ] },
      { "q": "“Possiamo andare sabato?” 是什么意思？", "opzioni": [
        { "t": "我们星期六去行吗？", "ok": true, "perche": "Possiamo 是 potere 的 noi 形式，这里提出一个建议并征求同意。" },
        { "t": "我们星期六必须去。", "ok": false, "perche": "“必须”要用 dobbiamo。" },
        { "t": "我们星期六想去。", "ok": false, "perche": "“想”要用 vogliamo。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语里“能”“会”“要”一个词有几种用法，所以常说成 **Oggi non so venire**（今天我来不了）、**Devo di andare**、**Voglio di mangiare**。",
    "perche": "汉语的“能”既可以表示本领也可以表示条件，学习者用一个动词代替所有用法；汉语里动词连用时中间没有小词，但在意大利语的其他结构里（如 cercare di、finire di）动词和不定式之间要加 di，学习者会把这个习惯带过来。",
    "esci": "记住三句话：①“学会的本领”用 sapere，“条件、许可”用 potere；②potere、volere、dovere 后面直接接不定式，中间什么也不加；③只给第一个动词变位，第二个永远是原形。",
    "esempi": [
      { "sbagliata": "Oggi non so venire, ho una riunione.", "giusta": "Oggi non posso venire, ho una riunione." },
      { "sbagliata": "Devo di andare.", "giusta": "Devo andare." },
      { "sbagliata": "Voglio di mangiare.", "giusta": "Voglio mangiare." },
      { "sbagliata": "Devo andato.", "giusta": "Devo andare." }
    ]
  },
  "curiosi": [
    { "titolo": "dovere 还有“欠”的意思", "t": "Dovere 单独使用时是“欠、应该给”：Quanto ti devo?（我该给你多少钱？）在咖啡馆里，客人常这样问服务员：Quanto le devo?。同一个动词既表示义务，也表示欠的债，因为两者都是“应该做或应该给”。" },
    { "titolo": "dovere 也用来推测", "t": "Dovere 还可以表示“一定是……”：Deve essere tardi（一定很晚了），Dev'essere stanco（他一定累了）。表示“可能”时，常用 può darsi（也许）或 potrebbe essere（有可能是）。" },
    { "titolo": "volere che：想让别人做事", "t": "如果想做的事由别人完成，不能用 Voglio tu venire。要说 Voglio che tu venga（我想让你来），che 后面的动词用虚拟式。这一点本课只作预告，你先记住：主语不同，要用 che。" },
    { "titolo": "riuscire a：做得成", "t": "汉语的“能”有时是“有办法做到”。这时意大利语常用 riuscire a：Non riesco a dormire（我睡不着），Riesci a venire domani?（你明天能来吗？）。这里 riuscire 和不定式之间要加 a，是情态动词之外的一个例外。" }
  ],
  "pragmatica": "拒绝别人的邀请时，最自然的说法是先道歉，再说 non posso，然后给一个理由：Mi dispiace, non posso: devo lavorare. 请求许可，对朋友和陌生人都可以说 Posso…?；请对方帮忙，对朋友用 Puoi…?，对陌生人或长辈用 Può…? 或更客气的 Potrebbe…?。想说得更柔和，把 voglio 换成 vorrei。",
  "esercizi": [
    { "k": "scegli", "q": "“我会弹钢琴。”（学过的本领）哪一句对？", "opzioni": [
      { "t": "So suonare il pianoforte.", "ok": true, "perche": "学过的本领用 sapere。" },
      { "t": "Posso suonare il pianoforte.", "ok": false, "perche": "posso 说的是有条件或被允许，不是“会”。" },
      { "t": "Devo suonare il pianoforte.", "ok": false, "perche": "devo 是“必须”，意思不同。" }
    ] },
    { "k": "scegli", "q": "volere 的 voi 形式是哪一个？", "opzioni": [
      { "t": "volete", "ok": true, "perche": "voi 的词尾是 -ete：volete。" },
      { "t": "vogliate", "ok": false, "perche": "vogliate 是虚拟式，不是现在时直陈式。" },
      { "t": "vogliono", "ok": false, "perche": "vogliono 是 loro 的形式。" }
    ] },
    { "k": "scegli", "q": "“Non puoi fumare qui.” 是什么意思？", "opzioni": [
      { "t": "你在这里不能抽烟。", "ok": true, "perche": "non puoi 表示不被允许。" },
      { "t": "你在这里不想抽烟。", "ok": false, "perche": "“不想”要用 non vuoi。" },
      { "t": "你在这里不会抽烟。", "ok": false, "perche": "“不会”要用 non sai。" }
    ] },
    { "k": "buco", "zh": "＿ aprire la finestra? Fa caldo.", "tr": "我可以开窗吗？很热。", "opzioni": [
      { "t": "Posso", "ok": true, "perche": "征求许可用 Posso + 不定式。" },
      { "t": "So", "ok": false, "perche": "So 是“我会”，不表示许可。" },
      { "t": "Sono", "ok": false, "perche": "Sono 后面不能直接接不定式表示许可。" }
    ] },
    { "k": "buco", "zh": "Mio fratello non ＿ ancora nuotare.", "tr": "我弟弟还没学会游泳。", "opzioni": [
      { "t": "sa", "ok": true, "perche": "还没学会，是本领，用 sapere 的第三人称 sa。" },
      { "t": "è", "ok": false, "perche": "è 后面不能接不定式表示这个意思。" },
      { "t": "ha", "ok": false, "perche": "ha 后面不能直接接 nuotare。" }
    ] },
    { "k": "buco", "zh": "Ieri ho ＿ lavorare fino a tardi.", "tr": "昨天我不得不工作到很晚。", "opzioni": [
      { "t": "dovuto", "ok": true, "perche": "近过去时：ho + 过去分词 dovuto，后面接不定式。" },
      { "t": "dovere", "ok": false, "perche": "ho 后面要用过去分词，不用不定式。" },
      { "t": "devo", "ok": false, "perche": "devo 是现在时，前面不能再有 ho。" }
    ] },
    { "k": "ordine", "t": "adesso devo andare a casa", "alt": ["devo andare a casa adesso"], "tr": "现在我得回家了。" },
    { "k": "scrivi", "q": "用意大利语写：“我不能来，很抱歉。”", "a": "Non posso venire, mi dispiace.", "accetta": ["Mi dispiace, non posso venire.", "Mi dispiace, ma non posso venire.", "Non posso venire, scusa.", "Non posso venire, scusami."], "perche": "不能来用 non posso + 不定式 venire；抱歉用 mi dispiace。" },
    { "k": "scrivi", "q": "用意大利语写：“我想学开车。”", "a": "Voglio imparare a guidare.", "accetta": ["Io voglio imparare a guidare.", "Voglio imparare a guidare la macchina.", "Voglio imparare a guidare l'auto.", "Vorrei imparare a guidare."], "perche": "想用 voglio + 不定式；“学”后面接动词用 imparare a + 不定式。" },
    { "k": "trasforma", "consegna": "把代词接到不定式后面，写成一个词。", "base": "Lo voglio vedere subito.", "accetta": ["Voglio vederlo subito.", "Voglio vederlo subito"], "rifiutate": [
      { "t": "Voglio lo vedere subito.", "perche": "代词要么放在 voglio 前，要么和不定式写成一个词，不能夹在中间。" }
    ], "perche": "代词接在不定式后面时，不定式去掉最后的 -e，加上代词：vedere → vederlo。" },
    { "k": "trasforma", "consegna": "改成近过去时（说已经发生的事）。", "base": "Devo aspettare un'ora.", "accetta": ["Ho dovuto aspettare un'ora.", "Ieri ho dovuto aspettare un'ora.", "Ho dovuto aspettare un'ora ieri."], "rifiutate": [
      { "t": "Sono dovuto aspettare un'ora.", "perche": "aspettare 用 avere，所以助动词是 ho。" }
    ], "perche": "近过去时：助动词 ho + dovuto，不定式 aspettare 保持不变。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Vieni alla festa sabato?" },
      { "chi": "B", "t": "Mi dispiace, ___ lavorare.", "buco": true }
    ], "opzioni": [
      { "t": "devo", "ok": true, "perche": "要工作所以去不了，用 devo。" },
      { "t": "so", "ok": false, "perche": "so lavorare 是“我会工作”，不是理由。" },
      { "t": "posso", "ok": false, "perche": "Mi dispiace, posso lavorare 的意思是“我可以工作”，不是拒绝的理由。" }
    ] }
  ],
  "capaci": [
    "你会用 posso, voglio, devo 加不定式说“我可以、我想、我得……”。",
    "你会区分 sapere 和 potere：学会的本领用 so nuotare，条件和许可用 posso。",
    "你会礼貌地请求和拒绝：Posso entrare? Mi dispiace, non posso, devo lavorare。",
    "你会把代词放到情态动词前后：Lo posso fare / Posso farlo。"
  ],
  "fonti": [
    "Think in Italian, «Potere, volere, dovere in the past» (l'ausiliare del modale segue l'infinito; esempi con dovuto, potuto, voluto)",
    "Tatoeba (ita.tsv), ricerche mirate: Posso entrare, Devo andare, So nuotare, Lo posso fare, Posso farlo, Non puoi fumare, Non ho potuto, Ho dovuto, Sono dovuto, Voglio mangiare"
  ]
};
