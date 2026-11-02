/* Lezione 47 · 我看见他了：过去时和宾语代词 (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["pp-pronomi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Hai visto Marco? Sì, l'ho visto ieri.", "tr": "你看见马可了吗？看见了，我昨天看见他了。" },
      { "t": "Hai visto Anna? Sì, l'ho vista in biblioteca.", "tr": "你看见安娜了吗？看见了，我在图书馆看见她了。" },
      { "t": "Hai comprato i biglietti? Sì, li ho comprati online.", "tr": "你买票了吗？买了，我在网上买的。" },
      { "t": "E le mele? Le ho comprate al mercato.", "tr": "那苹果呢？我在市场上买的。" }
    ],
    "domanda": "四个答句里的动词都是 ho visto、ho comprato 这一类“ho + 过去分词”。请比较：代词放在动词的前面还是后面？分词的最后一个字母（visto / vista、comprati / comprate）为什么会变？它和什么有关？",
    "risposta": "代词（l'、li、le）都放在 **ho 的前面**。分词的词尾跟着**代词所指的东西**变：马可是男的，用 visto；安娜是女的，用 vista；biglietti 是阳性复数，用 comprati；mele 是阴性复数，用 comprate。所以：**宾语代词在助动词前，过去分词要和这个代词的性、数一致**。汉语只要说“看见了”“买了”，意大利语的代词和分词里却清楚地带着“看见的是谁、买的是什么”。"
  },
  "regola": {
    "enunciato": "用 avere 构成近过去时的时候，**直接宾语代词 lo、la、li、le 放在助动词前面**，过去分词的词尾要和这个代词的**性和数一致**：l'ho visto（他）、l'ho vista（她）、li ho visti（他们）、le ho viste（她们）。第一、第二人称的 mi、ti、ci、vi 后面，一致是可以选的。代词 ne 表示“其中的一部分”时，分词和被数的东西一致：ne ho comprate tre（苹果买了三个）。",
    "schema": ["（non）", "lo / la / li / le", "ho / hai / ha…", "过去分词 -o / -a / -i / -e"],
    "punti": [
      { "ok": true, "t": "**位置**：代词在助动词前，不在后面。Hai letto il messaggio? Sì, **l'ho letto**. 否定时 non 在代词前面：**Non l'ho** ancora letto." },
      { "ok": true, "t": "**一致是必须的**：lo → -o，la → -a，li → -i，le → -e。Ho comprato il libro → **Lo** ho comprat**o**；Ho comprato le mele → **Le** ho comprat**e**。" },
      { "ok": true, "t": "**省音**：lo 和 la 在 ho、hai、ha、hanno 前面写成 **l'**，所以 l'ho 本身看不出性别，要看分词：l'ho visto（他或阳性的东西），l'ho vista（她或阴性的东西）。li 和 le 不省音：li ho visti、le ho viste。" },
      { "ok": true, "t": "**男女都有的一组人**用阳性复数：Hai visto Anna e Marco? Sì, **li** ho vist**i**." },
      { "ok": true, "t": "**mi、ti、ci、vi**：分词一致是可选的。Marco mi ha chiamato / chiamata（我是女的）都对；Ci ha visti / visto 也都对。口语里常常不变，认真的书面语里常常一致。" },
      { "ok": true, "t": "**ne（其中一部分）**：Ne ho comprat**e** tre（指 le mele）；Ne ho mangiat**i** troppi（指 i biscotti）。分词和被数的东西一致。" },
      { "ok": false, "t": "**间接宾语代词（gli、le 表示“给他、给她”）不改变分词**：Le ho telefonato（我给她打了电话），不说 Le ho telefonata。直接宾语和间接宾语的区别见第 13、14 课。" },
      { "ok": false, "t": "**不要把代词放在助动词后面**，也不要把 li / le 省成 l'：说 Li ho visti，不说 Ho li visti，也不说 L'ho visti（指好几个人）。" }
    ]
  },
  "logica": [
    "第 9 课讲过：用 avere 的近过去时，分词一般不变（Ho mangiato）。这里出现了例外，原因很简单：**分词本来像一个形容词，它要“看见”前面的宾语**。宾语在动词后面时（Ho comprato le mele），分词还没有遇到宾语，所以不变；宾语代词跑到动词前面时（Le ho comprate），分词就和它连在一起，像形容词一样跟着它变性、数。所以：代词在前，分词就一致；宾语是名词、放在后面，分词不变。",
    "汉语的表现完全不同：“我看见他了”“我买了”里没有任何形式变化，宾语常常说一次就省略，“书我买了”这样的说法也很自然。意大利语把宾语的信息放进代词和分词里：**l'ho visto / l'ho vista** 里就已经告诉听的人“看见的是男的还是女的”。对说汉语的人来说，难点有两个：一是要想起代词（汉语可以不说），二是要让分词的词尾跟上。",
    "可以用一个小检查来练习：说完一句 ……ho + 分词，回头看一眼前面的代词。是 lo，分词用 -o；是 la，用 -a；是 li，用 -i；是 le，用 -e；是 l'，看所指的东西是阳性还是阴性。养成这个习惯，一致就不会再错。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["代词", "指什么", "分词词尾", "例句"],
    "righe": [
      ["lo", "阳性单数（他、它）", "-o", "Il caffè? Lo ho preso → L'ho preso."],
      ["la", "阴性单数（她、它）", "-a", "La chiave? L'ho persa."],
      ["li", "阳性复数（他们、它们）", "-i", "I biglietti? Li ho comprati."],
      ["le", "阴性复数（她们、它们）", "-e", "Le scarpe? Le ho messe."],
      ["li（混合）", "男女都有的一组人", "-i", "Anna e Marco? Li ho invitati."],
      ["mi、ti、ci、vi", "我、你、我们、你们", "-o / -a / -i / -e 可选", "Ci hanno invitati / invitato."],
      ["ne", "其中一部分", "与被数的东西一致", "Mele? Ne ho comprate tre."]
    ],
    "nota": "看分词的词尾，就知道省音的 l' 指的是谁；ne 后面的词尾看被数的东西，不看数字。"
  },
  "esempi": [
    { "gruppo": "单数：l'ho visto、l'ho vista", "items": [
      { "t": "Hai già letto il messaggio? Sì, l'ho letto stamattina.", "tr": "你已经看过那条消息了吗？看过了，今天早上看的。" },
      { "t": "Dov'è Giulia? L'ho vista in biblioteca un'ora fa.", "tr": "朱莉娅在哪儿？一个小时前我在图书馆看见她了。" },
      { "t": "Il caffè? Non l'ho ancora preso.", "tr": "咖啡呢？我还没喝。" },
      { "t": "La chiave? L'ho persa!", "tr": "钥匙呢？我弄丢了！" }
    ] },
    { "gruppo": "复数：li ho comprati、le ho messe", "items": [
      { "t": "I pomodori? Li ho comprati al mercato.", "tr": "西红柿吗？我在市场上买的。" },
      { "t": "Le scarpe nuove? Le ho messe solo una volta.", "tr": "新鞋吗？我只穿过一次。" },
      { "t": "Ho incontrato Paolo e Marta e li ho invitati a cena.", "tr": "我碰到了保罗和玛尔塔，请了他们来吃晚饭。", "nota": "一男一女，用阳性复数 li…invitati。" }
    ] },
    { "gruppo": "ne：只说其中一部分", "items": [
      { "t": "Biscotti? Ne ho mangiati troppi.", "tr": "饼干吗？我吃得太多了。" },
      { "t": "Vuoi della torta? Ne ho già mangiata una fetta.", "tr": "你要蛋糕吗？我已经吃了一块了。", "nota": "ne 指 torta，fetta 是阴性，所以是 mangiata。" }
    ] },
    { "gruppo": "mi、ti、ci：一致可选", "items": [
      { "t": "Ieri Marco mi ha chiamato due volte.", "tr": "昨天马可给我打了两次电话。", "nota": "说话人是女的时候，也可以说 mi ha chiamata。" },
      { "t": "Ci hanno invitati alla festa di Sara.", "tr": "他们请我们去参加萨拉的聚会。" },
      { "t": "Ti ho aspettato per un'ora.", "tr": "我等了你一个小时。" }
    ] },
    { "gruppo": "直接宾语和间接宾语：l'ho vista 和 le ho scritto", "items": [
      { "t": "L'ho vista ieri.", "tr": "我昨天看见她了。", "nota": "vedere 直接带宾语，分词一致。" },
      { "t": "Le ho scritto ieri.", "tr": "我昨天给她写了信。", "nota": "scrivere a qualcuno：le 是“给她”，分词不变。" }
    ] }
  ],
  "contrasti": [
    { "q": "有人问：Hai comprato le mele?（你买苹果了吗？）你回答“买了”。哪一句对？", "opzioni": [
      { "t": "Sì, le ho comprate.", "ok": true, "perche": "le 是阴性复数，分词用 comprate 和它一致。" },
      { "t": "Sì, le ho comprato.", "ok": false, "perche": "代词 le 在助动词前，分词必须跟着变成 comprate。" },
      { "t": "Sì, ho le comprate.", "ok": false, "perche": "宾语代词放在助动词前，不能放在 ho 和分词中间。" }
    ] },
    { "q": "问话是 Hai visto Marco?，你想说“看见他了”。哪一句对？", "opzioni": [
      { "t": "Sì, l'ho visto.", "ok": true, "perche": "Marco 是男的，l' 是 lo 的省音，分词用 visto。" },
      { "t": "Sì, l'ho vista.", "ok": false, "perche": "vista 对应阴性的“她”，指的是女的。" },
      { "t": "Sì, ho visto lo.", "ok": false, "perche": "代词不跟在动词后面，要放在 ho 前面。" }
    ] },
    { "q": "问话是 Hai visto Anna e Marco?，你想说“看见他们了”。哪一句对？", "opzioni": [
      { "t": "Sì, li ho visti.", "ok": true, "perche": "一男一女的一组人用阳性复数：li…visti。" },
      { "t": "Sì, le ho viste.", "ok": false, "perche": "le…viste 只指全是女的一组人。" },
      { "t": "Sì, l'ho visti.", "ok": false, "perche": "l' 只能代替单数的 lo 或 la，复数 li 不省音。" }
    ] },
    { "q": "问话是 Hai comprato delle mele?，你想说“买了三个”，用 ne 回答。哪一句对？", "opzioni": [
      { "t": "Sì, ne ho comprate tre.", "ok": true, "perche": "ne 指 mele，分词和被数的东西一致，用阴性复数 comprate。" },
      { "t": "Sì, ne ho comprato tre.", "ok": false, "perche": "ne 表示“其中的一部分”，分词仍要和 mele 一致，不能用 comprato。" },
      { "t": "Sì, le ho comprate tre.", "ok": false, "perche": "说出数量的时候用 ne；le ho comprate 的意思是“那些苹果我都买了”。" }
    ] },
    { "q": "说“我昨天给玛丽亚打了电话”，用代词代替 a Maria。哪一句对？", "opzioni": [
      { "t": "Ieri le ho telefonato.", "ok": true, "perche": "telefonare 带的是间接宾语（a Maria），le 是“给她”，分词不变。" },
      { "t": "Ieri l'ho telefonata.", "ok": false, "perche": "l'ho…ata 是直接宾语的形式，telefonare 的对象是间接宾语。" },
      { "t": "Ieri ho le telefonato.", "ok": false, "perche": "代词要放在助动词前面。" }
    ] },
    { "q": "我没看见她（La ragazza）。哪一句对？", "opzioni": [
      { "t": "Non l'ho vista.", "ok": true, "perche": "否定词 non 在代词前面，l' 指女的，分词用 vista。" },
      { "t": "L'ho non vista.", "ok": false, "perche": "non 要放在代词前面，不能插在代词和助动词中间。" },
      { "t": "Non l'ho visto.", "ok": false, "perche": "这句里的 l' 指阳性，如果指一个女孩，分词要写成 vista。" }
    ] },
    { "q": "问话是 Hai preso le chiavi?，回答“拿了”。哪一句对？", "opzioni": [
      { "t": "Sì, le ho prese.", "ok": true, "perche": "chiavi 是阴性复数，le…prese；prendere 的分词是不规则的 preso，阴性复数是 prese。" },
      { "t": "Sì, le ho presi.", "ok": false, "perche": "presi 是阳性复数，与 le 不一致。" },
      { "t": "Sì, li ho prese.", "ok": false, "perche": "代词和分词要指同一个东西：li 是阳性复数，不能配 prese。" }
    ] },
    { "q": "一位女士对朋友说 “Marco 昨天给我打电话了”。下面哪一句可以接受，而且是唯一合适的选择？", "opzioni": [
      { "t": "Ieri Marco mi ha telefonato.", "ok": true, "perche": "telefonare 带间接宾语，mi 是“给我”，分词永远不变。" },
      { "t": "Ieri Marco mi ha telefonata.", "ok": false, "perche": "telefonare 的 mi 是间接宾语，分词不能加 -a。" },
      { "t": "Ieri Marco ho mi telefonato.", "ok": false, "perche": "助动词要随主语变成 ha，代词在助动词前面。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Le chiavi sono sparite",
    "righe": [
      { "chi": "A", "t": "Hai visto le mie chiavi?", "tr": "你看见我的钥匙了吗？" },
      { "chi": "B", "t": "Sì, le ho viste sul tavolo, vicino al giornale.", "tr": "看见了，在桌子上，报纸旁边。" },
      { "chi": "A", "t": "Il giornale lo hai letto?", "tr": "报纸你看过了吗？" },
      { "chi": "B", "t": "Sì, l'ho letto stamattina. E Giulia l'hai chiamata?", "tr": "看过了，今天早上看的。那朱莉娅你给她打电话了吗？" },
      { "chi": "A", "t": "No, non l'ho ancora chiamata. Ma le ho scritto un messaggio.", "tr": "还没有。不过我给她发了一条消息。" },
      { "chi": "B", "t": "Bene. Allora le chiavi prendile e andiamo.", "tr": "好。那你把钥匙拿上，我们走吧。" }
    ],
    "esercizi": [
      { "q": "B 说 “Le ho viste sul tavolo”，为什么是 viste？", "opzioni": [
        { "t": "le 指 le chiavi，是阴性复数", "ok": true, "perche": "分词和前面的宾语代词 le 一致，所以用 viste。" },
        { "t": "因为主语是 B，B 是女的", "ok": false, "perche": "用 avere 构成近过去时，分词不跟主语一致，只跟前面的直接宾语代词一致。" },
        { "t": "因为 vedere 的分词总是 viste", "ok": false, "perche": "vedere 的分词是 visto，词尾随代词变化。" }
      ] },
      { "q": "A 说 “Le ho scritto un messaggio”，为什么 scritto 没有变化？", "opzioni": [
        { "t": "le 是间接宾语“给她”，真正的直接宾语是 un messaggio", "ok": true, "perche": "间接宾语代词不影响分词。" },
        { "t": "因为 scrivere 的分词不能变", "ok": false, "perche": "scritto 在 L'ho scritta（指一封信）这样的句子里也会变，关键是代词的作用。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "说汉语的人常常忘记代词，或者把代词放在动词后面，再加上分词不变：*Ho visto lo*、*Li ho comprato*、*L'ho visto*（指一个女孩）。",
    "perche": "汉语的宾语可以不出现，也不会因为宾语是男是女、是一个还是几个而改变动词，所以“看见了”只需要一个动词。意大利语要在动词前补上代词，分词还要和它一致，这两步在汉语里都没有对应的习惯，需要有意识地做。",
    "esci": "三步检查：①这句话需要代词吗（宾语已经说过了吗）？②代词放在助动词前面了吗？③回头看代词是 lo、la、li、le 中的哪一个，把分词改成 -o、-a、-i、-e。l' 要看所指的东西是男是女。",
    "esempi": [
      { "sbagliata": "Ho visto lo.", "giusta": "L'ho visto." },
      { "sbagliata": "Li ho comprato.", "giusta": "Li ho comprati." },
      { "sbagliata": "L'ho visto Anna.", "giusta": "L'ho vista." },
      { "sbagliata": "Le ho telefonata.", "giusta": "Le ho telefonato." }
    ]
  },
  "curiosi": [
    { "titolo": "Quando il participio non si accorda", "t": "宾语是名词、放在动词后面时，分词不变：Ho comprato le mele。你需要掌握的是代词在前面的情况：Le ho comprate。" },
    { "titolo": "Mi ha chiamato o mi ha chiamata?", "t": "mi、ti、ci、vi 后面，两种写法都对：Mi ha chiamato 和 Mi ha chiamata。口语里常常不加变化；书面语里，有些人更愿意让分词和说话人的性别一致。一般用法里，两种都不会被认为是错的。" },
    { "titolo": "Le mani me le sono lavate", "t": "反身动词用 essere 时，分词跟主语一致：Mi sono lavata。但如果还有一个直接宾语代词，分词会跟着这个代词：Le mani me le sono lavate（手我洗了）。这个现象是同一个规则：前面的直接宾语代词会“带动”分词，后面的课会再见到它。" }
  ],
  "pragmatica": "回答是非问句，意大利人通常用“Sì, + 代词 + ho + 分词”，而不是重复名词：Hai visto il film? — Sì, l'ho visto. 这和汉语“看了”的短答很像，只是多了代词和词尾。写信和邮件时要特别检查分词词尾，因为书面语里错了一眼就看得出来。",
  "esercizi": [
    { "k": "scegli", "q": "“我吃了它们（i biscotti）”，哪一句对？", "opzioni": [
      { "t": "Li ho mangiati.", "ok": true, "perche": "biscotti 是阳性复数，代词 li，分词 mangiati。" },
      { "t": "Li ho mangiato.", "ok": false, "perche": "分词要和 li 一致，应是 mangiati。" },
      { "t": "Le ho mangiati.", "ok": false, "perche": "le 是阴性复数，不能指 biscotti。" }
    ] },
    { "k": "scegli", "q": "“我找到了她（Sara）”，哪一句对？", "opzioni": [
      { "t": "L'ho trovata.", "ok": true, "perche": "Sara 是女的，l' 代替 la，分词用 trovata。" },
      { "t": "L'ho trovato.", "ok": false, "perche": "trovato 指阳性，如果指 Sara，要用 trovata。" },
      { "t": "Ho la trovata.", "ok": false, "perche": "代词不能放在 ho 和分词之间。" }
    ] },
    { "k": "scegli", "q": "下面哪一句里，分词 **不用** 和代词一致？", "opzioni": [
      { "t": "Le ho parlato ieri.", "ok": true, "perche": "le 是间接宾语“对她”，分词不变。" },
      { "t": "Le ho viste ieri.", "ok": false, "perche": "le 是直接宾语，分词 viste 要一致。" },
      { "t": "Li ho invitati ieri.", "ok": false, "perche": "li 是直接宾语，分词 invitati 要一致。" }
    ] },
    { "k": "buco", "zh": "I libri? Li ho ＿ in biblioteca.", "tr": "书吗？我在图书馆借的。", "opzioni": [
      { "t": "presi", "ok": true, "perche": "li 是阳性复数，prendere 的分词 preso 变成 presi。" },
      { "t": "preso", "ok": false, "perche": "preso 是阳性单数，和 li 不一致。" },
      { "t": "prese", "ok": false, "perche": "prese 是阴性复数，和 li 不一致。" }
    ] },
    { "k": "buco", "zh": "Le chiavi? ＿ ho lasciate in ufficio.", "tr": "钥匙吗？我把它们落在办公室了。", "opzioni": [
      { "t": "Le", "ok": true, "perche": "chiavi 是阴性复数，代词 le，lasciate 与它一致。" },
      { "t": "Li", "ok": false, "perche": "li 是阳性复数，和 lasciate 不配。" },
      { "t": "La", "ok": false, "perche": "la 是单数，chiavi 是复数。" }
    ] },
    { "k": "buco", "zh": "Quante mele hai? — Ne ho ＿ cinque.", "tr": "你有几个苹果？我买了五个。", "opzioni": [
      { "t": "comprate", "ok": true, "perche": "ne 指 mele，阴性复数，分词用 comprate。" },
      { "t": "comprato", "ok": false, "perche": "ne 后的分词要和被数的东西一致，不能用 comprato。" },
      { "t": "comprati", "ok": false, "perche": "mele 是阴性，不是阳性复数。" }
    ] },
    { "k": "ordine", "t": "li ho comprati ieri al mercato", "alt": ["ieri li ho comprati al mercato"], "tr": "我昨天在市场上买了它们。" },
    { "k": "ordine", "t": "non l'ho ancora vista", "alt": ["non l'ho vista ancora"], "tr": "我还没看见她。" },
    { "k": "scrivi", "q": "用意大利语写：“我昨天看见她了。”（用代词，不说名字）", "a": "L'ho vista ieri.", "accetta": ["Ieri l'ho vista.", "L'ho vista ieri", "Io l'ho vista ieri.", "Ieri io l'ho vista."], "perche": "代词 l'（la 的省音）在 ho 前面，分词 vista 指女的。" },
    { "k": "scrivi", "q": "有人问 Hai comprato i panini?，用 ne 回答：“买了三个。”", "a": "Ne ho comprati tre.", "accetta": ["Sì, ne ho comprati tre.", "Si, ne ho comprati tre.", "Ne ho presi tre.", "Sì, ne ho presi tre."], "perche": "说出数量时用 ne，分词和被数的 panini 一致（阳性复数）。" },
    { "k": "trasforma", "consegna": "用代词代替划线的名词（le mele），整句改写。", "base": "Ho comprato le mele.", "accetta": ["Le ho comprate.", "Le ho comprate"], "rifiutate": [
      { "t": "Le ho comprato.", "perche": "分词没有和 le 一致，应是 comprate。" }
    ], "perche": "le mele 变成代词 le，放到 ho 前面，分词随它变成 comprate。" },
    { "k": "trasforma", "consegna": "用代词代替 la finestra，整句改写。", "base": "Ho aperto la finestra.", "accetta": ["L'ho aperta.", "L'ho aperta"], "rifiutate": [
      { "t": "L'ho aperto.", "perche": "l' 指 la finestra，是阴性，分词要用 aperta。" }
    ], "perche": "la finestra 是阴性单数，代词 la 省成 l'，分词变成 aperta。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Hai preso le chiavi?" },
      { "chi": "B", "t": "Sì, ＿ ho prese.", "buco": true }
    ], "opzioni": [
      { "t": "le", "ok": true, "perche": "chiavi 是阴性复数，le…prese。" },
      { "t": "li", "ok": false, "perche": "li 是阳性复数，不能配 prese。" },
      { "t": "la", "ok": false, "perche": "la 是单数，不能配复数的 prese。" }
    ] }
  ],
  "capaci": [
    "你会用 l'ho visto、l'ho vista、li ho comprati、le ho comprate 回答是非问句，不重复名词。",
    "你会让过去分词和前面的直接宾语代词在性、数上一致。",
    "你会用 ne 说“其中一部分”，并让分词和被数的东西一致，如 ne ho comprate tre。",
    "你会区分直接宾语（l'ho vista）和间接宾语（le ho scritto），知道后者的分词不变。"
  ],
  "fonti": [
    "Wikipedia (inglese), Italian grammar, sezione sull'accordo del participio passato con i pronomi clitici complemento oggetto (lo, la, li, le obbligatorio; mi, ti, ci, vi facoltativo)",
    "Tatoeba (ita.tsv), interrogato con L'ho visto, L'ho vista, Le ho viste, Ci ha visti, Ne ho comprati, Li ho invitati, Le ho telefonato, Non l'ho ancora, Ti ho aspettato"  ]
};
