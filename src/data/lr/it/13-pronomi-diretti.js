/* Lezione 13 · 代替东西和人：直接宾语代词 (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["pronomi-diretti"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Conosci Marco? — Sì, lo conosco.", "tr": "你认识马可吗？——认识，我认识他。" },
      { "t": "Dov'è la chiave? — Non la trovo.", "tr": "钥匙在哪儿？——我找不到它。" },
      { "t": "Le scarpe? Le ho comprate ieri.", "tr": "那双鞋？我昨天买的。" },
      { "t": "Voglio vederla domani.", "tr": "我想明天见她。" }
    ],
    "domanda": "每一句里，被代替的人或东西在哪里？代词 lo、la、le 放在动词的前面还是后面？第三句的 comprate 为什么以 -e 结尾？第四句的代词放在哪里？",
    "risposta": "代词**紧贴在变位动词前面**：lo conosco、la trovo、le ho comprate。汉语说“我认识他”，意大利语说成“他认识我”的顺序：他（lo）+ 认识（conosco）。第三句的 comprate 以 -e 结尾，是因为它要和 **le**（阴性复数，指 le scarpe）一致。第四句动词是不定式，代词**接在不定式后面**：vederla（vedere 去掉 e，再加 la）。"
  },
  "regola": {
    "enunciato": "**直接宾语代词**（pronomi diretti）用来代替前面已经说过的人或东西，这样就不用重复名词。它们是 **mi、ti、lo、la、ci、vi、li、le**；位置在**变位动词的前面**，否定词 non 在代词前面；动词是不定式时，代词接在后面。",
    "schema": ["（non）", "代词 mi · ti · lo · la · ci · vi · li · le", "变位动词", "宾语不再重复"],
    "punti": [
      { "ok": true, "t": "**形式**：mi（我）、ti（你）、lo（他、它，阳性）、la（她、它，阴性；对 Lei 说话时写 La）、ci（我们）、vi（你们）、li（他们、它们，阳性）、le（她们、它们，阴性）。选 lo/la/li/le 看**被代替的名词**的性和数：il libro → lo，la chiave → la，i libri → li，le chiavi → le。" },
      { "ok": true, "t": "**位置**：代词放在变位动词前面，non 放在代词前面：Lo vedo. Non la trovo. Non ti sento." },
      { "ok": true, "t": "**两个动词在一起**：代词可以接在不定式后面（不定式去掉词尾的 e）：Voglio vederlo. Devo chiamarla. 也可以放在整个动词组前面：Lo voglio vedere. La devo chiamare. 两种说法意思一样，口语里都常用。" },
      { "ok": true, "t": "**命令式**：肯定的命令，代词接在后面，成为一个词：Prendilo! Aspettami! 否定的命令（tu），两种位置都可以：Non lo prendere! / Non prenderlo!" },
      { "ok": true, "t": "**近过去时**：lo、la 在 ho、hai、ha… 前面省略成 **l'**：L'ho comprato. L'ho comprata. li 和 le 不省略：Li ho visti. Le ho viste. 过去分词必须和 lo、la、li、le **在性和数上一致**：L'ho vista（她）、Li ho comprati（那些书）、Le ho mangiate（那些苹果）。" },
      { "ok": true, "t": "**lo 还可以指一件事**：Sai che Anna è partita? — Sì, lo so. Non lo so. 这里的 lo 代替的是整个句子的内容，永远是 lo，不会变成 la。" },
      { "ok": false, "t": "**不要把代词放在变位动词后面**：不说 Vedo lo，说 Lo vedo。也不要像汉语那样省略宾语：问 Hai comprato il pane? 回答 Sì, l'ho comprato.，不能只说 Sì, ho comprato." }
    ]
  },
  "logica": [
    "汉语里，宾语可以放在动词后面（我看见他），可以提前（那本书我买了），也可以直接省略（买了）。听的人靠上下文就明白。意大利语的动词几乎总要带上它的宾语，已经说过的东西就用**代词**来代替，而且代词不是独立的词，而是**依附在动词上**，念的时候和动词连成一个词：lo-vedo、la-trovo。这就是为什么它的位置那么固定。",
    "汉语的“他、她、它”说出来都是 tā，不分性别，而意大利语的 lo 和 la 要看被代替的**名词**是阳性还是阴性，即使是东西也一样：il libro → lo，la chiave → la。所以学名词的时候，要把性一起记下来。第三人称代词就是这样把“名词的性和数”带进了后面的句子。",
    "过去分词为什么要一致？近过去时里，代词先出现在动词前面，说话人在说出分词的时候已经知道宾语是什么了，所以分词会“回头看”宾语的性和数：L'ho comprata（la torta）。如果宾语是名词放在动词后面，就不一致：Ho comprato la torta。mi、ti、ci、vi 后面的一致是可以的，但不是必须的：Mi ha visto / Mi ha vista 都对。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["人称", "代词", "例句", "意思"],
    "righe": [
      ["我", "mi", "Mi senti?", "你听得见我吗？"],
      ["你", "ti", "Ti aspetto qui.", "我在这儿等你。"],
      ["他、它（阳性）", "lo", "Il libro? Lo leggo stasera.", "那本书？我今晚读。"],
      ["她、它（阴性）", "la", "La pizza? La mangio volentieri.", "比萨？我很乐意吃。"],
      ["我们", "ci", "Ci invitano a cena.", "他们请我们吃晚饭。"],
      ["你们", "vi", "Vi chiamo domani.", "我明天给你们打电话。"],
      ["他们、它们（阳性）", "li", "I biglietti? Li compro io.", "票？我来买。"],
      ["她们、它们（阴性）", "le", "Le chiavi? Le trovo subito.", "钥匙？我马上就能找到。"]
    ]
  },
  "esempi": [
    { "gruppo": "代替前面说过的东西", "items": [
      { "t": "Il libro? L'ho comprato ieri.", "tr": "那本书？我昨天买的。" },
      { "t": "Dov'è la chiave? Non la trovo.", "tr": "钥匙在哪儿？我找不到。" },
      { "t": "Hai visto i miei occhiali? Li ho lasciati qui.", "tr": "你看见我的眼镜了吗？我把它们放在这儿的。" }
    ] },
    { "gruppo": "代替人，也可以是你和我", "items": [
      { "t": "Conosci Marco? — Sì, lo conosco.", "tr": "你认识马可吗？——认识。" },
      { "t": "Anna? La vedo domani.", "tr": "安娜？我明天见她。" },
      { "t": "Le ragazze? Le ho viste in biblioteca.", "tr": "那些女孩？我在图书馆见到她们了。" },
      { "t": "Mi senti?", "tr": "你听得见我吗？" }
    ] },
    { "gruppo": "两个动词在一起：代词接在不定式后面，或放在前面", "items": [
      { "t": "Voglio vederlo.", "tr": "我想看看他。", "nota": "也可以说 Lo voglio vedere，意思一样。" },
      { "t": "Devo chiamarla stasera.", "tr": "我今晚得给她打电话。" },
      { "t": "Non posso aprirla.", "tr": "我打不开它。（比如一扇门）" }
    ] },
    { "gruppo": "近过去时：l' 和过去分词的一致", "items": [
      { "t": "La torta? L'ho mangiata tutta.", "tr": "蛋糕？我全吃了。" },
      { "t": "Le mele? Le ho comprate al mercato.", "tr": "苹果？我在市场买的。" },
      { "t": "Ho incontrato Paolo e l'ho salutato.", "tr": "我遇见了保罗，和他打了招呼。" }
    ] },
    { "gruppo": "lo 指一件事，和命令式", "items": [
      { "t": "Non lo so.", "tr": "我不知道。" },
      { "t": "Lo so, hai ragione.", "tr": "我知道，你说得对。" },
      { "t": "Prendilo pure!", "tr": "你就拿去吧！" }
    ] }
  ],
  "contrasti": [
    { "q": "“我认识他。”（他是 Marco）哪一句对？", "opzioni": [
      { "t": "Lo conosco.", "ok": true, "perche": "代词 lo 放在变位动词前面，代替阳性单数的 Marco。" },
      { "t": "Conosco lo.", "ok": false, "perche": "代词不能放在变位动词后面，汉语的语序在这里不适用。" },
      { "t": "Gli conosco.", "ok": false, "perche": "gli 是间接宾语代词（“对他”），conoscere 的宾语是直接的，要用 lo。" }
    ] },
    { "q": "“那本书（il libro）？我昨天买的。”哪一句对？", "opzioni": [
      { "t": "L'ho comprato ieri.", "ok": true, "perche": "il libro 是阳性单数，代词 lo 省略成 l'，分词是阳性单数 comprato。" },
      { "t": "L'ho comprata ieri.", "ok": false, "perche": "comprata 是阴性，要和 la 一致；这里被代替的是阳性的 il libro。" },
      { "t": "Lo ho comprato ieri.", "ok": false, "perche": "lo 在 ho 前面习惯上要省略成 l'ho。" }
    ] },
    { "q": "“那些苹果（le mele）我买了。”用代词代替，哪一句对？", "opzioni": [
      { "t": "Le ho comprate.", "ok": true, "perche": "le 代替阴性复数，分词也是阴性复数 comprate；le 不省略。" },
      { "t": "Le ho comprati.", "ok": false, "perche": "comprati 是阳性复数，和阴性的 le 不一致。" },
      { "t": "Li ho comprate.", "ok": false, "perche": "li 是阳性复数，被代替的 le mele 是阴性。" }
    ] },
    { "q": "“我想看他。”（把代词放在 voglio 前面）哪一句对？", "opzioni": [
      { "t": "Lo voglio vedere.", "ok": true, "perche": "代词放在整个动词组的前面，后面的不定式 vedere 保持原样。" },
      { "t": "Lo voglio vederlo.", "ok": false, "perche": "代词重复了两次，只能在 voglio 前面或者 vederlo 里出现一次。" },
      { "t": "Voglio lo vedere.", "ok": false, "perche": "代词要么在 voglio 前面，要么接在不定式后面，不能夹在中间。" }
    ] },
    { "q": "“我不知道。”哪一句对？", "opzioni": [
      { "t": "Non lo so.", "ok": true, "perche": "non 放在代词 lo 的前面，lo 代替前面说过的事。" },
      { "t": "Lo non so.", "ok": false, "perche": "non 要紧挨着代词，放在最前面：Non lo so。" },
      { "t": "Non so lo.", "ok": false, "perche": "代词不能放在变位动词后面。" }
    ] },
    { "q": "“拿走吧！”（对朋友说，指 il libro，用命令式 prendere）哪一句对？", "opzioni": [
      { "t": "Prendilo!", "ok": true, "perche": "肯定命令式里，代词接在动词后面，形成一个词；tu 的命令式是 prendi。" },
      { "t": "Prendelo!", "ok": false, "perche": "tu 的命令式是 prendi，不是 prende。" },
      { "t": "Prendere lo!", "ok": false, "perche": "代词要和命令式连写，而且这里要用 prendi，不是不定式。" }
    ] },
    { "q": "“我看见他们了。”（他们是 i ragazzi）哪一句对？", "opzioni": [
      { "t": "Li ho visti.", "ok": true, "perche": "li 代替阳性复数，分词 visti 也是阳性复数，li 不省略。" },
      { "t": "Li ho visto.", "ok": false, "perche": "分词必须和 li 一致，要说 visti。" },
      { "t": "Gli ho visti.", "ok": false, "perche": "gli 是间接宾语代词，而 vedere 的宾语是直接的，要用 li。" }
    ] },
    { "q": "“我给她打电话。”（用 chiamare，直接宾语）哪一句对？", "opzioni": [
      { "t": "La chiamo.", "ok": true, "perche": "chiamare 带直接宾语，la 代替阴性单数的“她”。" },
      { "t": "Le chiamo.", "ok": false, "perche": "le 在这里是阴性复数，指好几个人；说“她”要用 la。" },
      { "t": "Gli chiamo.", "ok": false, "perche": "gli 是间接宾语代词，chiamare 不是这样的动词。" }
    ] },
    { "q": "“你知道安娜走了吗？——知道。”哪一句对？", "opzioni": [
      { "t": "Sì, lo so.", "ok": true, "perche": "lo 代替整件事（Anna è partita），这时永远用 lo。" },
      { "t": "Sì, la so.", "ok": false, "perche": "这里被代替的不是阴性名词 Anna，而是整个句子的内容。" },
      { "t": "Sì, li so.", "ok": false, "perche": "li 是复数代词，这里说的是一件事，不是几件。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Dove sono le mie chiavi?",
    "righe": [
      { "chi": "A", "t": "Hai visto le mie chiavi? Non le trovo.", "tr": "你看见我的钥匙了吗？我找不到它们。" },
      { "chi": "B", "t": "Le ho viste in cucina, vicino al pane.", "tr": "我在厨房看见的，在面包旁边。" },
      { "chi": "A", "t": "Ah, eccole! E il portafoglio? L'hai preso tu?", "tr": "啊，在这儿！那钱包呢？是你拿了吗？" },
      { "chi": "B", "t": "No, non l'ho preso io. Guarda in borsa: forse l'hai lasciato lì.", "tr": "不是我拿的。看看包里吧，也许你把它放在那里了。" },
      { "chi": "A", "t": "Eccolo! Grazie, mi salvi sempre.", "tr": "在这儿！谢谢，你总是帮我。" }
    ],
    "esercizi": [
      { "q": "B 说 Le ho viste，为什么分词是 viste，而不是 visto？", "opzioni": [
        { "t": "le 代替 le chiavi（阴性复数），分词要一致", "ok": true, "perche": "代词 le 是阴性复数，所以过去分词也变成阴性复数 viste。" },
        { "t": "因为 vedere 的分词总是 viste", "ok": false, "perche": "vedere 的分词是 visto；只有在和代词一致时才变化。" },
        { "t": "因为 B 是女生", "ok": false, "perche": "分词的变化取决于被代替的宾语，不是说话人的性别。" }
      ] },
      { "q": "A 说的 eccole 里，le 指的是什么？", "opzioni": [
        { "t": "前面说的 le chiavi", "ok": true, "perche": "ecco 后面的代词接在它后面，指向前面说过的东西：eccole = 它们在这里。" },
        { "t": "说话人 A 自己", "ok": false, "perche": "指自己要用 mi，如 eccomi（我在这儿）。" },
        { "t": "一个冠词", "ok": false, "perche": "这里的 le 是代词，不是冠词，它代替了 le chiavi。" }
      ] },
      { "q": "A 问 L'hai preso tu?，其中的 l' 代替的是什么？", "opzioni": [
        { "t": "il portafoglio（阳性单数）", "ok": true, "perche": "il portafoglio 是阳性单数，所以代词是 lo，省略成 l'，分词是 preso。" },
        { "t": "la borsa（阴性单数）", "ok": false, "perche": "被代替的名词在前面一句 E il portafoglio?，不是 borsa。" },
        { "t": "le chiavi（阴性复数）", "ok": false, "perche": "le chiavi 已经找到了，复数代词 le 不会省略成 l'。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "照汉语的语序把代词放在动词后面，或者干脆省略宾语：说成 *Vedo lo*、*Ho comprato la*、*Hai il pane? Sì, ho comprato*；另一个常见的错误是把阴性的东西说成 lo，或者忘了让过去分词和 la、le 一致。",
    "perche": "汉语的宾语可以放在动词后面，可以省略，“他、她、它”也不分性别；所以学习者容易以为意大利语的代词也是一个能放在动词后面的独立的词，也不一定要出现。其实 lo、la、li、le 是附在动词上的，必须出现，而且要和被代替的名词在性和数上一致。",
    "esci": "说完一个宾语之后，再提到它的时候，先问两个问题：①它是阳性还是阴性，单数还是复数？（选 lo, la, li, le）②动词变位了吗？变了就把代词放在它前面；没有变（不定式）就接在后面。近过去时里，再让分词和代词一致：L'ho comprata。",
    "esempi": [
      { "sbagliata": "Vedo lo.", "giusta": "Lo vedo." },
      { "sbagliata": "La ho comprata.", "giusta": "L'ho comprata." },
      { "sbagliata": "Ho comprato la torta e l'ho mangiato.", "giusta": "Ho comprato la torta e l'ho mangiata." },
      { "sbagliata": "Hai comprato il pane? Sì, ho comprato.", "giusta": "Hai comprato il pane? Sì, l'ho comprato." }
    ]
  },
  "curiosi": [
    { "titolo": "重读代词：Conosco lui, non lei", "t": "lo、la 这些是不重读的弱形式，必须附在动词上。要强调或对比的时候，意大利语用重读形式 me、te、lui、lei、noi、voi、loro，放在动词后面：Conosco lui, non lei.（我认识的是他，不是她。）Chiama me, non lui. 这时候不能说 Lo conosco, non la，要用重读形式。" },
    { "titolo": "Ce l'ho：和 ci 连在一起", "t": "avere 带直接宾语代词时，口语里常常加上 ci：Hai una penna? — Ce l'ho.（你有笔吗？——有。）Hai le chiavi? — Ce le ho. 这是一个固定的说法，ci 本身没有“这里”的意思。除此之外，还有两个代词同时出现的情况（如 me lo dai?），这要到后面的课再学。" },
    { "titolo": "书面语里的写法", "t": "在正式的书面文字里，代词可以接在过去分词后面：una volta ottenutolo（得到它之后）。在日常口语里，几乎不用这样的形式，而是说 dopo averlo ottenuto 或者 quando l'ho ottenuto。对 Lei（您）说话时，代词用 La，信里常常大写：La ringrazio, signor Rossi." }
  ],
  "pragmatica": "和朋友聊天，用 lo、la、li、le 避免重复，听起来自然、流畅：Il caffè? Lo prendo io. 对不太熟的人或在正式场合称呼 Lei，代词也用第三人称 La：La chiamo domani, dottoressa. 回答问题的时候，意大利人几乎总用代词，Sì, l'ho fatto 比 Sì, ho fatto 更自然，也更清楚。",
  "esercizi": [
    { "k": "scegli", "q": "代替 la torta（蛋糕）应该用哪个代词？", "opzioni": [
      { "t": "la", "ok": true, "perche": "torta 是阴性单数，代词是 la。" },
      { "t": "lo", "ok": false, "perche": "lo 代替阳性单数，如 il libro。" },
      { "t": "le", "ok": false, "perche": "le 代替阴性复数，如 le torte。" }
    ] },
    { "k": "scegli", "q": "哪一句里的 l' 代替的是阴性单数的名词？", "opzioni": [
      { "t": "L'ho comprata ieri.", "ok": true, "perche": "分词 comprata 是阴性单数，说明 l' 是 la。" },
      { "t": "L'ho comprato ieri.", "ok": false, "perche": "comprato 是阳性单数，l' 在这里代替 lo。" },
      { "t": "Li ho comprati ieri.", "ok": false, "perche": "li 是阳性复数，而且不省略成 l'。" }
    ] },
    { "k": "scegli", "q": "Ti amo. 里的 ti 是什么意思？", "opzioni": [
      { "t": "你（宾语）：我爱你", "ok": true, "perche": "ti 是直接宾语代词，代替“你”，主语 io 在 amo 里。" },
      { "t": "你（主语）：你爱我", "ok": false, "perche": "你爱我要说 Mi ami；这里的主语是 io。" },
      { "t": "你的", "ok": false, "perche": "表示“你的”要用 tuo，ti 是代词。" }
    ] },
    { "k": "buco", "zh": "Le chiavi? Non ＿ trovo.", "tr": "钥匙？我找不到。", "opzioni": [
      { "t": "le", "ok": true, "perche": "le chiavi 是阴性复数，代词是 le。" },
      { "t": "la", "ok": false, "perche": "la 代替阴性单数，如 la chiave。" },
      { "t": "li", "ok": false, "perche": "li 代替阳性复数，chiavi 是阴性。" }
    ] },
    { "k": "buco", "zh": "Ho incontrato Paolo e ＿ ho salutato.", "tr": "我遇见了保罗，和他打了招呼。", "opzioni": [
      { "t": "l'", "ok": true, "perche": "代替阳性单数的 Paolo，lo 在 ho 前面省略成 l'。" },
      { "t": "li", "ok": false, "perche": "li 是阳性复数，Paolo 只有一个人。" },
      { "t": "le", "ok": false, "perche": "le 是阴性复数，Paolo 是男性单数。" }
    ] },
    { "k": "buco", "zh": "Le mele? ＿ ho mangiate tutte.", "tr": "苹果？我全吃了。", "opzioni": [
      { "t": "Le", "ok": true, "perche": "le mele 是阴性复数，代词是 le，分词 mangiate 与之一致。" },
      { "t": "La", "ok": false, "perche": "la 是单数，而且 la ho 要写成 l'ho；这里说的是复数。" },
      { "t": "Li", "ok": false, "perche": "li 是阳性复数，mele 是阴性。" }
    ] },
    { "k": "ordine", "t": "non lo so", "tr": "我不知道。" },
    { "k": "ordine", "t": "li ho visti ieri in centro", "tr": "我昨天在市中心看见他们了。", "alt": ["ieri li ho visti in centro"] },
    { "k": "scrivi", "q": "用意大利语写：“我认识她。”（她是 Maria，用代词）", "a": "La conosco.", "accetta": ["Sì, la conosco.", "Io la conosco."], "perche": "conoscere 带直接宾语；la 代替阴性单数的 Maria，放在变位动词前面。" },
    { "k": "scrivi", "q": "用意大利语写：“我昨天买了它们。”（它们是 le scarpe，用代词）", "a": "Le ho comprate ieri.", "accetta": ["Ieri le ho comprate.", "Io le ho comprate ieri.", "Le ho acquistate ieri."], "perche": "le 代替阴性复数，不省略；分词 comprate 与 le 一致。" },
    { "k": "trasforma", "consegna": "用代词代替宾语，不要重复名词。", "base": "Apro la finestra.", "accetta": ["La apro.", "Io la apro."], "rifiutate": [
      { "t": "Lo apro.", "perche": "finestra 是阴性，要用 la，不是 lo。" },
      { "t": "Apro la.", "perche": "代词要放在变位动词前面。" }
    ], "perche": "la 代替阴性单数的 la finestra，放在 apro 的前面。" },
    { "k": "trasforma", "consegna": "用代词代替宾语，注意过去分词。", "base": "Ho comprato le arance.", "accetta": ["Le ho comprate.", "Io le ho comprate."], "rifiutate": [
      { "t": "Le ho comprato.", "perche": "分词必须和 le 一致，要说 comprate。" },
      { "t": "Li ho comprate.", "perche": "arance 是阴性，用 le，不用阳性的 li。" }
    ], "perche": "le 代替阴性复数 le arance，分词变成 comprate。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Hai chiamato i tuoi genitori?" },
      { "chi": "B", "t": "Sì, ___ ho chiamati ieri.", "buco": true }
    ], "opzioni": [
      { "t": "li", "ok": true, "perche": "i tuoi genitori 是阳性复数，代词是 li，分词 chiamati 与之一致。" },
      { "t": "gli", "ok": false, "perche": "gli 是间接宾语代词，而 chiamare 的宾语是直接的。" },
      { "t": "lo", "ok": false, "perche": "lo 是单数，而 i genitori 是复数。" }
    ] }
  ],
  "capaci": [
    "你会根据名词的性和数选择 lo、la、li、le，并把它放在变位动词的前面。",
    "你会在近过去时里使用 l'ho comprato / l'ho comprata，并让分词与 la、le、li 一致。",
    "你会处理两个动词在一起的情况：Voglio vederlo 和 Lo voglio vedere。",
    "你会回答 Non lo so 这样的句子，也会避开把代词放在动词后面或省略宾语的错误。"
  ],
  "fonti": [
    "Treccani, Enciclopedia dell'Italiano, voce «clitici» (2010): elisione di lo e la, clitici con i verbi modali, enclisi (pagina letta)",
    "Tatoeba (ita.tsv), frasi reali con Non lo so (114), L'ho comprato ieri (2), Li ho visti ieri (3), Le ho viste (43), Mi ha vista (9), Ci ha invitati (6): verificate con grep nel corpus locale"
  ]
};
