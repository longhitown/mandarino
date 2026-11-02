/* Lezione 14 · I pronomi indiretti (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["pronomi-indiretti"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Telefono a Marco ogni sera.", "tr": "我每天晚上给马可打电话。" },
      { "t": "Gli telefono ogni sera.", "tr": "我每天晚上给他打电话。" },
      { "t": "Ho scritto a Giulia. Le ho scritto ieri.", "tr": "我给朱莉娅写了信。我昨天给她写了信。" },
      { "t": "Non gli rispondo mai prima delle nove.", "tr": "九点以前我从来不回他。" }
    ],
    "domanda": "第一句的 a Marco 在第二句里变成了什么？它放在动词的前面还是后面？第三句里 Giulia 变成了 le，动词 scritto 有没有跟着变？第四句里 non 和 gli 谁在前？",
    "risposta": "**a Marco**（“给马可”）变成了 **gli**，放在变位动词**前面**。**a Giulia** 变成 **le**；动词 **scritto** 不变，不管代词是阳性还是阴性。有 **non** 的时候，顺序是 **non + 代词 + 动词**：non gli rispondo。所以：“a + 人”可以用一个很短的代词代替，它紧贴在动词前面，不影响过去分词。"
  },
  "regola": {
    "enunciato": "表示**“给谁、对谁、向谁”**的 “a + 人”，在意大利语里可以换成**间接宾语代词**：mi、ti、gli、le（尊称 Le）、ci、vi、gli。它是一个很短的、不重读的小词，紧贴在**变位动词前面**，和动词读成一个整体；它只代替“a + 人”，不代替没有 a 的直接宾语。",
    "schema": ["（non）", "代词 mi/ti/gli/le", "变位动词", "其他成分"],
    "punti": [
      { "ok": true, "t": "**八个形式**：mi（给我）、ti（给你）、gli（给他）、le（给她）、Le（给您）、ci（给我们）、vi（给你们）、gli（给他们或她们）。第三人称复数还有书面形式 loro，放在动词后面：Scrivo loro. 口语里几乎都说 Gli scrivo." },
      { "ok": true, "t": "**位置**：在变位动词前面，有 non 时在 non 后面：Non ti telefono. Gli dico la verità. 不能把代词放在变位动词后面（命令式和不定式除外）。" },
      { "ok": true, "t": "**不定式和命令式**：代词接在动词后面，写成一个词，不定式去掉最后的 -e：Voglio telefonarle. Dimmi la verità! 有 dovere、potere、volere 时，代词可以放在助动词前面，也可以接在不定式后面：Le voglio telefonare. = Voglio telefonarle." },
      { "ok": true, "t": "**近过去时**：过去分词不和间接宾语代词一致：Le ho scritto. Gli abbiamo telefonato. 单数的 gli、le 不省音，不写成 gl'、l'。" },
      { "ok": true, "t": "**哪些动词要 a + 人**：dare、dire、chiedere、rispondere、telefonare、scrivere、mandare、regalare、spiegare、raccontare、consigliare、piacere。判断办法：汉语的“给……”“对……”“向……”多半就是 a + 人；而 chiamare、aiutare、ascoltare、vedere、incontrare 后面的人是直接宾语，用 lo、la、li、le。" },
      { "ok": false, "t": "**不要**因为汉语说“我给他打电话”，就把“他”当成直接宾语：Lo telefono 是错的，要说 Gli telefono。也不要把 gli 用在 aiutare 上：Lo aiuto，不是 Gli aiuto。" }
    ]
  },
  "logica": [
    "汉语里，“他”是同一个字：我看见他、我给他打电话、我送他一本书，“他”的形式都不变，靠“给”“对”这样的介词来分清。意大利语把这个区别放进了代词本身：直接宾语是 lo / la / li / le，间接宾语（“给谁、对谁”）是 gli / le。所以选代词之前，要先问一个问题：这个人是动作**直接作用**的对象，还是动作**朝向**的对象，也就是在意大利语里前面要不要加 a？",
    "只有第三人称才需要这样区分。mi、ti、ci、vi 既可以是直接宾语也可以是间接宾语：Mi vedi（你看见我）和 Mi telefoni（你给我打电话）用的是同一个 mi。因此真正需要记的，是 gli 和 le 两个形式，以及“telefonare、rispondere、scrivere 带 a”这一类动词。",
    "代词放在动词前面，是因为它和动词读成一个词，不能被拆开。所以否定词 non 在最前面，副词和其他成分跟在后面：Non gli ho ancora risposto。这一点和汉语很不同：汉语说“我还没回他”，宾语在动词后面；意大利语里代词先于动词出现。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["汉语", "代词", "例句"],
    "righe": [
      ["给我、对我", "mi", "Mi scrivi presto?"],
      ["给你、对你", "ti", "Ti telefono domani."],
      ["给他", "gli", "Gli dico la verità."],
      ["给她", "le", "Le ho regalato un fiore."],
      ["给您（尊称）", "Le", "Le porto il conto."],
      ["给我们、对我们", "ci", "Ci mandano una foto."],
      ["给你们、对你们", "vi", "Vi spiego tutto."],
      ["给他们、她们", "gli（书面 loro）", "Gli scrivo una lettera."]
    ]
  },
  "esempi": [
    { "gruppo": "八个形式在句子里", "items": [
      { "t": "Ti telefono domani sera.", "tr": "我明天晚上给你打电话。" },
      { "t": "Gli ho regalato un orologio.", "tr": "我送了他一块手表。" },
      { "t": "Le ho detto la verità.", "tr": "我对她说了实话。" },
      { "t": "Ci ha mandato una foto del mare.", "tr": "他给我们寄了一张海边的照片。" },
      { "t": "Vi spiego tutto dopo.", "tr": "我等一下给你们解释一切。" },
      { "t": "Ai ragazzi non parlo mai di soldi. Gli parlo di libri.", "tr": "我从不和孩子们谈钱。我和他们谈书。", "nota": "gli 代替 ai ragazzi；parlare a qualcuno 也用 gli。" }
    ] },
    { "gruppo": "尊称：Le（给您）", "items": [
      { "t": "Signora Rossi, Le porto subito il conto.", "tr": "罗西太太，我马上给您拿账单来。", "nota": "对一位用 Lei 称呼的人，代词写成大写的 Le。" },
      { "t": "Professore, Le scrivo per una domanda sull'esame.", "tr": "教授，我写信是想请教您一个关于考试的问题。", "nota": "Le scrivo per… 是写信、发邮件常见的开头。" }
    ] },
    { "gruppo": "位置：前面、后面、non", "items": [
      { "t": "Non gli rispondo mai prima delle nove.", "tr": "九点以前我从来不回他。", "nota": "顺序是 non + 代词 + 动词。" },
      { "t": "Posso scriverti domani?", "tr": "我明天可以给你写信吗？" },
      { "t": "Ti posso scrivere domani?", "tr": "我明天可以给你写信吗？", "nota": "和上一句意思一样：代词在 posso 前面，或接在不定式后面。" },
      { "t": "Dimmi la verità!", "tr": "跟我说实话！", "nota": "命令式：di' + mi 连写成 dimmi。" }
    ] },
    { "gruppo": "和直接宾语比较：a 在不在", "items": [
      { "t": "Telefono a Marco e gli dico di venire.", "tr": "我给马可打电话，叫他过来。", "nota": "telefonare a、dire a 都要 gli。" },
      { "t": "Lo aiuto, ma lui non mi ringrazia.", "tr": "我帮他，可是他不谢我。", "nota": "aiutare 后面的人是直接宾语，用 lo；ringraziare 也是直接宾语，所以是 mi。" },
      { "t": "Gli piace il caffè, ma a me piace il tè.", "tr": "他喜欢咖啡，可是我喜欢茶。", "nota": "piacere 用间接宾语代词；a me 是加强语气的重读形式。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我给马可打电话。”（马可是男孩）哪一句对？", "opzioni": [
      { "t": "Gli telefono.", "ok": true, "perche": "telefonare a qualcuno：马可是“给谁打电话”的对象，要用间接宾语代词 gli。" },
      { "t": "Lo telefono.", "ok": false, "perche": "lo 是直接宾语代词；汉语说“给他打”，意大利语是 telefonare a lui，所以不能用 lo。" }
    ] },
    { "q": "“我叫他过来。”（chiamo = 叫、打电话找，对象是直接宾语）哪一句对？", "opzioni": [
      { "t": "Lo chiamo.", "ok": true, "perche": "chiamare 后面不加 a，人是直接宾语，用 lo。" },
      { "t": "Gli chiamo.", "ok": false, "perche": "chiamare 不带 a，不能用间接宾语代词 gli。" }
    ] },
    { "q": "“我送了她一本书。”哪一句对？", "opzioni": [
      { "t": "Le ho regalato un libro.", "ok": true, "perche": "间接宾语代词不影响过去分词，regalato 不变。" },
      { "t": "Le ho regalata un libro.", "ok": false, "perche": "分词只和直接宾语代词（lo、la、li、le）一致；这里的 le 是间接宾语“给她”，分词不变。" }
    ] },
    { "q": "“明天我不给他打电话。”哪一句对？", "opzioni": [
      { "t": "Domani non gli telefono.", "ok": true, "perche": "否定句里，代词紧贴动词，放在 non 后面。" },
      { "t": "Domani gli non telefono.", "ok": false, "perche": "non 必须紧挨着代词和动词，放在它们前面，不能插在中间。" }
    ] },
    { "q": "“我给孩子们（两个男孩）写信。”哪一句对？", "opzioni": [
      { "t": "Gli scrivo.", "ok": true, "perche": "gli 也可以指“他们”；口语里最自然的说法。" },
      { "t": "Le scrivo.", "ok": false, "perche": "le 的意思是“给她”或“给您”，不是“给他们”。" }
    ] },
    { "q": "你在对一位刚认识的女士说话，用 Lei 称呼她：“我可以问您一件事吗？”哪一句对？", "opzioni": [
      { "t": "Le posso chiedere una cosa?", "ok": true, "perche": "用 Lei 称呼，间接宾语代词是 Le；写出来用大写，读音和 le 一样。" },
      { "t": "Ti posso chiedere una cosa?", "ok": false, "perche": "ti 是对朋友的称呼；对 Lei 要用 Le。" }
    ] },
    { "q": "“她喜欢这本书。”（她 = 一位女士）哪一句对？", "opzioni": [
      { "t": "Le piace il libro.", "ok": true, "perche": "piacere 是“让……喜欢”，喜欢的人是间接宾语，用 le。" },
      { "t": "La piace il libro.", "ok": false, "perche": "la 是直接宾语代词；piacere 的“喜欢的人”是间接宾语，不能用 la。" }
    ] },
    { "q": "“我昨天回他了。”（回答他）哪一句对？", "opzioni": [
      { "t": "Ieri gli ho risposto.", "ok": true, "perche": "rispondere a qualcuno，用 gli；分词 risposto 不变。" },
      { "t": "Ieri l'ho risposto.", "ok": false, "perche": "rispondere 带 a，要用间接宾语代词 gli；l'（= lo）是直接宾语代词，用在这里不合。" }
    ] },
    { "q": "“我常常帮他。”哪一句对？", "opzioni": [
      { "t": "Lo aiuto spesso.", "ok": true, "perche": "aiutare 后面的人是直接宾语，用 lo；汉语的“帮他”不一定对应 a + 人。" },
      { "t": "Gli aiuto spesso.", "ok": false, "perche": "aiutare 不带 a，不能用 gli。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Un regalo per Luca",
    "righe": [
      { "chi": "A", "t": "Che cosa regali a Luca per il compleanno?", "tr": "你送卢卡什么生日礼物？" },
      { "chi": "B", "t": "Gli regalo un libro di cucina. Gli piace molto cucinare.", "tr": "我送他一本烹饪书。他很喜欢做饭。" },
      { "chi": "A", "t": "Bella idea! Io gli preparo una torta.", "tr": "好主意！我给他做一个蛋糕。" },
      { "chi": "B", "t": "Hai già telefonato a sua sorella?", "tr": "你给他妹妹打过电话了吗？" },
      { "chi": "A", "t": "Sì, le ho telefonato ieri e le ho chiesto un consiglio.", "tr": "打了，我昨天给她打了电话，向她请教了一个建议。" },
      { "chi": "B", "t": "Perfetto. Allora ti scrivo stasera.", "tr": "太好了。那我今晚给你写消息。" }
    ],
    "esercizi": [
      { "q": "第二句里的 Gli regalo… 中，gli 指的是谁？", "opzioni": [
        { "t": "卢卡，也就是生日的那个人", "ok": true, "perche": "regalare a qualcuno：礼物是给卢卡的，gli 代替 a Luca。" },
        { "t": "卢卡的妹妹", "ok": false, "perche": "妹妹要用 le（她）。" },
        { "t": "说话的人自己", "ok": false, "perche": "“给我”要用 mi，这里不是说话人。" }
      ] },
      { "q": "A 说 Sì, le ho telefonato ieri，le 指的是谁？", "opzioni": [
        { "t": "卢卡的妹妹", "ok": true, "perche": "B 问的是 a sua sorella，所以用 le（给她）。" },
        { "t": "卢卡", "ok": false, "perche": "卢卡是男的，应该用 gli。" },
        { "t": "A 自己", "ok": false, "perche": "A 是说话的人，“给我”要用 mi，不是 le。" }
      ] },
      { "q": "为什么是 le ho telefonato，分词是 telefonato，而不是 telefonata？", "opzioni": [
        { "t": "因为 le 是间接宾语，过去分词不和它一致", "ok": true, "perche": "分词只和直接宾语代词（lo、la、li、le）一致。" },
        { "t": "因为 telefonare 是不规则动词", "ok": false, "perche": "telefonare 是规则动词，分词不变是因为 le 是间接宾语。" },
        { "t": "因为说话的是男人", "ok": false, "perche": "说话人的性别不影响这个分词。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "因为汉语说“我给他打电话”“我回答他”，“他”看起来像一个普通的宾语，所以学习者常常选直接宾语代词：*Lo telefono*、*La rispondo*；或者反过来，把 aiutare 这样的动词也加上 gli：*Gli aiuto*；还有人把分词也改了：*Le ho scritta*。",
    "perche": "汉语的“他”在“看见他”“给他打电话”中形式一样，介词“给”不是代词的一部分。意大利语的 telefonare、rispondere、scrivere 本身带 a，a 的作用被吸收进代词 gli / le 里。而 aiutare 不带 a，人是直接宾语。",
    "esci": "说之前先问：这个动词后面的人，前面要不要加 a？telefonare a、rispondere a、scrivere a、dire a、dare a：要 a，就用 gli / le。aiutare、chiamare、vedere、ascoltare：不加 a，用 lo / la。分词只和 lo、la、li、le 一致，和 gli、le（间接）无关。",
    "esempi": [
      { "sbagliata": "Lo telefono domani.", "giusta": "Gli telefono domani." },
      { "sbagliata": "Le ho scritta una lettera.", "giusta": "Le ho scritto una lettera." },
      { "sbagliata": "Non telefono gli.", "giusta": "Non gli telefono." },
      { "sbagliata": "Gli aiuto sempre.", "giusta": "Lo aiuto sempre." }
    ]
  },
  "curiosi": [
    { "titolo": "gli 还是 loro", "t": "第三人称复数的间接宾语代词，标准语法里有 loro，放在动词后面：Scrivo loro. Ho dato loro un consiglio. 但日常口语里几乎都用 gli：Gli scrivo, gli ho dato un consiglio。loro 常见于正式的书面语和文告，口语里听起来有些郑重。你学会 gli 就够用了。" },
    { "titolo": "le 的两种身份", "t": "le 可以是“给她”（间接宾语），也可以是“她们”（直接宾语复数）。Le ho scritto 是“我给她写了信”，分词不变；Le ho comprate 是“我买了它们（阴性复数）”，分词 comprate 要和 le 一致。所以看分词是否变化，就能判断 le 是哪一种。" },
    { "titolo": "两个代词一起用：glielo", "t": "间接和直接代词可以连用：Me lo dai?（你把它给我吗？）Glielo dico domani.（我明天对他、对她或对您说这件事。）mi、ti、ci、vi 在 lo、la、li、le、ne 前面变成 me、te、ce、ve；gli 和 le 变成 glie- 并和后面的代词连写。这是后面可以继续学的内容，现在先知道有这个形式。" },
    { "titolo": "a me、a te：重读形式", "t": "mi、ti 很轻，不能单独回答，也不能放在介词后面。要强调对象，或者对比两个人时，用 a me、a te、a lui：Telefona a me, non a lui. A me piace il tè, a lui il caffè。口语里还会同时出现 a Luca gli telefono，表示强调，这种重复在日常聊天里很常见。" }
  ],
  "pragmatica": "和朋友说话用 mi、ti、ci、vi；对陌生人、老师、客服等用 Lei 称呼的人，代词是 Le：Le porto il conto, Le scrivo per… 写邮件或信时，开头常见 Le scrivo per chiederLe… 一类的句式。把 Le 写成大写，书面上才能和“给她”的 le 区分开；说话时听不出区别，靠情景判断。",
  "esercizi": [
    { "k": "scegli", "q": "下面哪一个动词后面的人要用间接宾语代词（gli、le）？", "opzioni": [
      { "t": "rispondere", "ok": true, "perche": "rispondere a qualcuno，人前面有 a，用 gli / le。" },
      { "t": "aiutare", "ok": false, "perche": "aiutare 不带 a，人是直接宾语，用 lo / la。" },
      { "t": "vedere", "ok": false, "perche": "vedere 的对象是直接宾语。" }
    ] },
    { "k": "scegli", "q": "Vi scrivo domani 是什么意思？", "opzioni": [
      { "t": "我明天给你们写信", "ok": true, "perche": "vi 是“给你们”，scrivo 是我写。" },
      { "t": "我明天给你写信", "ok": false, "perche": "“给你”是 ti，不是 vi。" },
      { "t": "你们明天给我写信", "ok": false, "perche": "动词 scrivo 的主语是 io，不是你们。" }
    ] },
    { "k": "buco", "zh": "I miei genitori abitano lontano, così ＿ telefono ogni domenica.", "tr": "我的父母住得很远，所以我每个星期天给他们打电话。", "opzioni": [
      { "t": "gli", "ok": true, "perche": "telefonare a qualcuno：“给他们”用 gli。" },
      { "t": "li", "ok": false, "perche": "li 是直接宾语代词，telefonare 需要间接宾语。" },
      { "t": "le", "ok": false, "perche": "le 是“给她”或“给您”，不是“给他们”。" }
    ] },
    { "k": "buco", "zh": "Ho conosciuto Sara ieri e ＿ ho dato il mio numero.", "tr": "我昨天认识了萨拉，把我的号码给了她。", "opzioni": [
      { "t": "le", "ok": true, "perche": "dare a qualcuno：“给她”用 le，分词 dato 不变。" },
      { "t": "gli", "ok": false, "perche": "gli 是“给他”或“给他们”，萨拉是女的。" },
      { "t": "la", "ok": false, "perche": "la 是直接宾语代词；dare 的人要用间接宾语代词。" }
    ] },
    { "k": "buco", "zh": "Ciao Maria, ＿ posso chiedere un favore?", "tr": "你好玛丽亚，我可以请你帮个忙吗？", "opzioni": [
      { "t": "ti", "ok": true, "perche": "用 Ciao 打招呼，是朋友之间的口气，用 ti（给你）。" },
      { "t": "Le", "ok": false, "perche": "Le 是对用 Lei 称呼的人说话，和 Ciao 的亲切口气不合。" },
      { "t": "mi", "ok": false, "perche": "mi 是“给我”，这里请求的对象是玛丽亚。" }
    ] },
    { "k": "ordine", "t": "non gli ho ancora risposto", "tr": "我还没回他。" },
    { "k": "ordine", "t": "ti scrivo una cartolina da Roma", "tr": "我从罗马给你寄一张明信片。" },
    { "k": "scrivi", "q": "用意大利语写：“我给她打电话。”（用 telefonare）", "a": "Le telefono.", "accetta": ["Io le telefono.", "Le telefono", "Le sto telefonando.", "Io le telefono"], "perche": "telefonare a qualcuno：“给她”是 le，放在动词前面。" },
    { "k": "scrivi", "q": "用意大利语写：“昨天我给他们写了一封信。”（用 scrivere）", "a": "Ieri gli ho scritto una lettera.", "accetta": ["Gli ho scritto una lettera ieri.", "Ieri ho scritto loro una lettera.", "Ho scritto loro una lettera ieri.", "Ieri gli ho scritto una lettera"], "perche": "“给他们”用 gli（书面也可以用 loro，放在动词后面）；近过去时用 avere，分词 scritto 不变。" },
    { "k": "trasforma", "consegna": "用一个代词代替 a Marco。", "base": "Telefono a Marco ogni sera.", "accetta": ["Gli telefono ogni sera.", "Ogni sera gli telefono.", "Gli telefono ogni sera"], "rifiutate": [
      { "t": "Lo telefono ogni sera.", "perche": "telefonare a Marco 需要间接宾语代词 gli，lo 是直接宾语代词。" },
      { "t": "Telefono gli ogni sera.", "perche": "代词要放在变位动词前面，不能放在后面。" }
    ], "perche": "a Marco 被 gli 代替，放在动词 telefono 前面。" },
    { "k": "trasforma", "consegna": "用一个代词代替 a Giulia（近过去时）。", "base": "Ho scritto a Giulia.", "accetta": ["Le ho scritto.", "Io le ho scritto.", "Le ho scritto"], "rifiutate": [
      { "t": "Le ho scritta.", "perche": "间接宾语代词不影响过去分词，不能写成 scritta。" }
    ], "perche": "a Giulia 变成 le，放在 ho 前面；分词 scritto 不变。" },
    { "k": "trasforma", "consegna": "改成对用 Lei 称呼的人说话（尊称）。", "base": "Ti posso chiedere una cosa?", "accetta": ["Le posso chiedere una cosa?", "Posso chiederle una cosa?", "Posso chiederLe una cosa?", "Le posso chiedere una cosa"], "rifiutate": [
      { "t": "La posso chiedere una cosa?", "perche": "chiedere a qualcuno 需要间接宾语代词 Le，la 是直接宾语代词。" }
    ], "perche": "ti（你）换成 Le（您）；位置不变，或接在不定式后面。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Hai risposto a Paolo?" },
      { "chi": "B", "t": "Sì, ＿ ho risposto ieri.", "buco": true }
    ], "opzioni": [
      { "t": "gli", "ok": true, "perche": "rispondere a Paolo：Paolo 是男的，用 gli。" },
      { "t": "lo", "ok": false, "perche": "lo 是直接宾语代词；rispondere 带 a，要用 gli。" },
      { "t": "le", "ok": false, "perche": "le 是“给她”，Paolo 是男的。" }
    ] }
  ],
  "capaci": [
    "你会用 mi、ti、gli、le、Le、ci、vi 说“给谁、对谁”，例如 Gli telefono、Le ho scritto。",
    "你会判断一个动词后面的人是要 a（间接宾语）还是不要 a（直接宾语），区分 telefonare / rispondere 和 aiutare / chiamare。",
    "你会把代词放在正确的位置：在变位动词前面，在 non 后面，在不定式和命令式后面。",
    "你会在近过去时里让分词保持不变：Le ho regalato un libro。",
    "你会在朋友之间用 ti，对用 Lei 称呼的人用 Le。"
  ],
  "fonti": [
    "Humanities LibreTexts, D'accordo (Blum e Gemmani), sezione 3.06 «Pronomi oggetto combinati» (glie- con lo, la, li, le, ne; il participio non concorda con gli e le; pagina letta)",
    "Tatoeba (ita.tsv), frasi contate con grep: «Le ho detto» (224), «Le ho dato» (49), «Gli piace» (336), «Le piace» (523), «Gli ho telefonato» (2)"
  ]
};
