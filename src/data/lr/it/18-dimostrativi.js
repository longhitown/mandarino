/* Lezione 18 · Questo e quello (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["dimostrativi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Questo zaino è nuovo, quello zaino è vecchio.", "tr": "这个背包是新的，那个背包是旧的。" },
      { "t": "Quel libro è di Anna e quei libri sono di Paolo.", "tr": "那本书是安娜的，那些书是保罗的。" },
      { "t": "Quest'estate vado al mare con quegli amici di Torino.", "tr": "今年夏天我和都灵的那些朋友去海边。" },
      { "t": "Ti piace questa borsa o preferisci quella?", "tr": "你喜欢这个包，还是更喜欢那个？" }
    ],
    "domanda": "看第一句和第二句：“那个”在 zaino 前面是 quello，在 libro 前面是 quel，在 libri 前面是 quei。是什么决定了它的形式？再看第三句和第四句：questo 什么时候变成 quest'？第四句最后的 quella 后面为什么没有名词？",
    "risposta": "**quello 的形式由后面的名词决定，规律和定冠词一样**：il libro → quel libro，i libri → quei libri，lo zaino → quello zaino，gli amici → quegli amici。**questo** 在元音开头的单数名词前可以省音成 quest'（quest'estate）。第四句的 **quella** 代替了前面出现过的 borsa，这是**代词**用法：单独出现，不再带名词。汉语的“这/那 + 量词 + 名词”在意大利语里没有量词，只有一个会变形的词。"
  },
  "regola": {
    "enunciato": "意大利语用两个指示词表示远近：**questo**（这个）指离说话人近的人或物，**quello**（那个）指离说话人远的人或物。它们既可以放在名词前面当**形容词**，也可以单独使用，代替一个已经说过或看得见的名词，当**代词**。形容词用法要和名词的性、数一致；quello 放在名词前时，形式还要跟着名词的开头音变化，规律和定冠词相同。",
    "schema": ["questo / quello", "＋ 名词", "｜", "questo / quello", "（代替名词）"],
    "punti": [
      { "ok": true, "t": "**questo 有四种形式**：questo（阳单）、questa（阴单）、questi（阳复）、queste（阴复）：questo libro, questa casa, questi libri, queste case。" },
      { "ok": true, "t": "**quest' 只用在元音开头的单数名词前**，阴阳都可以：quest'anno, quest'estate。复数不省音：queste amiche。省音不是强制的，questo anno 也能说，但 quest'anno 更常见。" },
      { "ok": true, "t": "**quello 放在名词前，变化和定冠词一样**：il → quel，i → quei，lo → quello，gli → quegli，l' → quell'，la → quella，le → quelle。看名词前面用哪一个冠词，就用对应的 quello 形式。" },
      { "ok": true, "t": "**代词用法单独出现，形式更简单**：questo / quello，questa / quella，questi / quelli，queste / quelle。阳性复数代词是 quelli，不是 quei。代词不省音：Questa è la mia amica。" },
      { "ok": true, "t": "**“……的那个”可以用 quello + 形容词**：Prendo quello rosso.（我要红的那个。）这里 quello 已经是代词，形容词跟在后面，所以用完整形式 quello，不用 quel。" },
      { "ok": true, "t": "**quello che 表示“……的东西、……的事”**：Quello che dici è vero.（你说的是对的。）在书面语里常用 ciò che，意思相同。" },
      { "ok": false, "t": "**不要把汉语的“这个、那个”当作固定的词**：不能不分性数地说 quello libro、questo casa、quelli studenti。名词变，指示词就跟着变。" }
    ]
  },
  "logica": [
    "汉语说“这本书、那个人、这些鞋”，“这、那”后面要加量词，量词和名词搭配，但“这、那”本身不变。意大利语没有量词，改成让指示词本身承担“性”和“数”的信息：questo libro 是阳性单数，queste scarpe 是阴性复数。所以学意大利语的指示词，就是学一个会变形的词，每次先看名词。",
    "quello 和定冠词变化相同，这不是巧合：两者来自同一个拉丁语词，冠词是“弱化”了的指示词。所以你已经会的冠词规律可以直接用：il libro → quel libro，lo studente → quello studente，l'amico → quell'amico，gli amici → quegli amici。唯一要多记的是，复数阳性单独使用时（代词）说 quelli，quei 和 quegli 只放在名词前面。",
    "汉语的“这、那”除了指示位置，还常用来指前面说过的话：“这个我不知道”。意大利语也一样，questo、quello 可以指说话的内容：Questo non lo sapevo. 另外汉语说“红的那个”，意大利语说 quello rosso：先用 quello 代替名词，再接形容词，不需要像汉语那样加“的”。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["名词的开头", "阳性单数", "阳性复数", "阴性单数", "阴性复数"],
    "righe": [
      ["questo（所有名词前）", "questo libro", "questi libri", "questa casa", "queste case"],
      ["questo 在元音前", "quest'amico", "questi amici", "quest'amica", "queste amiche"],
      ["quello：普通辅音（像 il, i）", "quel libro", "quei libri", "quella casa", "quelle case"],
      ["quello：s＋辅音、z、gn、ps、x、y（像 lo, gli）", "quello studente", "quegli studenti", "quella studentessa", "quelle studentesse"],
      ["quello：元音（像 l', gli）", "quell'amico", "quegli amici", "quell'amica", "quelle amiche"],
      ["代词（单独使用）", "questo / quello", "questi / quelli", "questa / quella", "queste / quelle"]
    ]
  },
  "esempi": [
    { "gruppo": "questo：离说话人近的人或物", "items": [
      { "t": "Questo caffè è troppo caldo.", "tr": "这杯咖啡太烫了。" },
      { "t": "Quanto costano queste scarpe?", "tr": "这双鞋多少钱？", "nota": "scarpe 是阴性复数，所以用 queste。" },
      { "t": "Questa sera resto a casa.", "tr": "今天晚上我待在家里。", "nota": "questa sera 指“说话这天的晚上”。" },
      { "t": "Quest'estate andiamo in Sicilia.", "tr": "今年夏天我们去西西里。", "nota": "estate 以元音开头，questa 省音成 quest'。" }
    ] },
    { "gruppo": "quello：形式跟着名词变", "items": [
      { "t": "Quel ragazzo laggiù è il mio vicino.", "tr": "那边那个男孩是我的邻居。", "nota": "il ragazzo → quel ragazzo。" },
      { "t": "Quello studente parla cinque lingue.", "tr": "那个学生会说五种语言。", "nota": "lo studente → quello studente。" },
      { "t": "Quell'albergo è molto economico.", "tr": "那家酒店很便宜。", "nota": "l'albergo → quell'albergo。" },
      { "t": "Quegli amici abitano a Genova.", "tr": "那些朋友住在热那亚。", "nota": "gli amici → quegli amici。" },
      { "t": "Quei libri sono di mia sorella.", "tr": "那些书是我姐姐（妹妹）的。", "nota": "i libri → quei libri。" }
    ] },
    { "gruppo": "代词：不带名词", "items": [
      { "t": "Quale borsa preferisci? Questa o quella?", "tr": "你更喜欢哪个包？这个还是那个？" },
      { "t": "Prendo quello rosso.", "tr": "我要红的那个。", "nota": "说话人和对方都知道指的是哪件东西。" },
      { "t": "Quelli sono i miei occhiali.", "tr": "那些是我的眼镜。", "nota": "阳性复数代词用 quelli。" }
    ] },
    { "gruppo": "时间和话语：不只是指位置", "items": [
      { "t": "In quel periodo lavoravo a Milano.", "tr": "那段时间我在米兰工作。" },
      { "t": "Quello che dici è vero.", "tr": "你说的是对的。" },
      { "t": "Questo non lo sapevo.", "tr": "这个我之前不知道。" },
      { "t": "Ciò che conta è la salute.", "tr": "重要的是健康。", "nota": "ciò 多用于书面语和较正式的场合。" }
    ] }
  ],
  "contrasti": [
    { "q": "“那本书是我的。”（il libro）哪一句对？", "opzioni": [
      { "t": "Quel libro è mio.", "ok": true, "perche": "libro 前面用 il，所以 quello 取短形式 quel。" },
      { "t": "Quello libro è mio.", "ok": false, "perche": "quello 只用在 lo、l'、gli 一类的名词前，如 quello studente；libro 前要用 quel。" },
      { "t": "Quella libro è mio.", "ok": false, "perche": "quella 是阴性，libro 是阳性名词，性不一致。" }
    ] },
    { "q": "“那些学生很聪明。”（gli studenti）哪一句对？", "opzioni": [
      { "t": "Quegli studenti sono bravi.", "ok": true, "perche": "gli studenti 用 gli，对应 quegli。" },
      { "t": "Quei studenti sono bravi.", "ok": false, "perche": "quei 对应 i，只用在 i libri 这类名词前；studenti 前的冠词是 gli。" },
      { "t": "Quelli studenti sono bravi.", "ok": false, "perche": "quelli 是代词，不放在名词前面。" }
    ] },
    { "q": "“那位女性朋友来了。”（l'amica）哪一句对？", "opzioni": [
      { "t": "Quell'amica è arrivata.", "ok": true, "perche": "amica 以元音开头，quella 在元音前省音成 quell'。" },
      { "t": "Quello amica è arrivata.", "ok": false, "perche": "quello 是阳性形式，amica 是阴性。" },
      { "t": "Quel amica è arrivata.", "ok": false, "perche": "quel 是阳性形式，而且只用在普通辅音前。" }
    ] },
    { "q": "“今年我们不去旅行。”（anno 以元音开头）哪一句对？", "opzioni": [
      { "t": "Quest'anno non viaggiamo.", "ok": true, "perche": "questo 在元音开头的单数名词前省音，quest'anno 是固定的常用说法。" },
      { "t": "Questa anno non viaggiamo.", "ok": false, "perche": "anno 是阳性名词，不能用阴性的 questa。" },
      { "t": "Questi anno non viaggiamo.", "ok": false, "perche": "questi 是复数，anno 是单数。" }
    ] },
    { "q": "桌上有两件毛衣，你想说“我要红的那件”（il maglione）。哪一句对？", "opzioni": [
      { "t": "Prendo quello rosso.", "ok": true, "perche": "后面没有名词，quello 是代词，保持完整形式，再接形容词。" },
      { "t": "Prendo quel rosso.", "ok": false, "perche": "quel 是名词前的短形式；这里没有名词，要用 quello。" },
      { "t": "Prendo quella rosso.", "ok": false, "perche": "maglione 是阳性，quella 是阴性，形容词 rosso 和它也不一致。" }
    ] },
    { "q": "你指着地上的几把钥匙（le chiavi）说“那些是我的钥匙”。哪一句对？", "opzioni": [
      { "t": "Quelle sono le mie chiavi.", "ok": true, "perche": "chiavi 是阴性复数，代词也用阴性复数 quelle。" },
      { "t": "Quelli sono le mie chiavi.", "ok": false, "perche": "quelli 是阳性复数，chiavi 是阴性。" },
      { "t": "Quei sono le mie chiavi.", "ok": false, "perche": "quei 只能放在名词前面，不能单独当代词用。" }
    ] },
    { "q": "咖啡就在你手里，你说“这杯咖啡太烫了”。哪一句对？", "opzioni": [
      { "t": "Questo caffè è troppo caldo.", "ok": true, "perche": "东西在手边，用表示“近”的 questo；caffè 是阳性。" },
      { "t": "Quel caffè è troppo caldo.", "ok": false, "perche": "quel 指离说话人远的东西，和“就在手里”不合。" },
      { "t": "Questa caffè è troppo caldo.", "ok": false, "perche": "caffè 是阳性名词，不能用阴性的 questa。" }
    ] },
    { "q": "你想说“那天晚上下雨了”（la sera）。哪一句对？", "opzioni": [
      { "t": "Quella sera pioveva.", "ok": true, "perche": "sera 是阴性单数，所以用 quella；quella sera 表示过去的“那天晚上”。" },
      { "t": "Quello sera pioveva.", "ok": false, "perche": "quello 是阳性形式，sera 是阴性名词。" },
      { "t": "Quel sera pioveva.", "ok": false, "perche": "quel 是阳性形式，sera 是阴性名词。" }
    ] }
  ],
  "dialogo": {
    "titolo": "In un negozio di scarpe",
    "righe": [
      { "chi": "A", "t": "Scusi, quanto costano quelle scarpe in vetrina?", "tr": "请问，橱窗里的那双鞋多少钱？" },
      { "chi": "B", "t": "Quelle blu o quelle nere?", "tr": "蓝的那双还是黑的那双？" },
      { "chi": "A", "t": "Quelle nere, accanto a quella borsa.", "tr": "黑的那双，在那个包旁边。" },
      { "chi": "B", "t": "Costano ottanta euro. Questi stivali, invece, sono in offerta.", "tr": "八十欧元。不过这几双靴子在打折。" },
      { "chi": "A", "t": "Allora provo questi. Ha il quarantatré?", "tr": "那我试这几双。有四十三码吗？" },
      { "chi": "B", "t": "Certo, un attimo.", "tr": "当然，请稍等。" }
    ],
    "esercizi": [
      { "q": "A 最后决定试哪一样东西？", "opzioni": [
        { "t": "靴子（questi stivali）", "ok": true, "perche": "A 说 provo questi，questi 代替前面 B 提到的 stivali。" },
        { "t": "橱窗里的黑色鞋", "ok": false, "perche": "A 先问了黑鞋的价格，但最后说试的是 questi，指靴子。" },
        { "t": "旁边的那个包", "ok": false, "perche": "包只是用来说明鞋的位置，没有人要试包。" }
      ] },
      { "q": "B 说 “Quelle blu o quelle nere?” 里的 quelle 是什么用法？", "opzioni": [
        { "t": "代词，代替前面的 scarpe", "ok": true, "perche": "quelle 后面跟的是形容词 blu、nere，不是名词，所以是代词，指前面说的 scarpe。" },
        { "t": "形容词，后面省略了名词", "ok": false, "perche": "形容词用法后面一定要有名词；这里 quelle 是单独代替名词。" },
        { "t": "副词，表示距离", "ok": false, "perche": "quelle 是指示词，会随性数变化，不是副词。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语里“这”和“那”不变形，所以常常用同一个形式配所有的名词：*quello libro*、*questo casa*、*quelli studenti*。另一个常见错误是省掉名词后还用短形式：*Prendo quel rosso*。",
    "perche": "汉语靠量词和名词配合，指示词本身不用考虑性和数。意大利语里指示词是会变形的形容词（或代词），必须和名词一致，而 quello 还要看名词前的冠词。省掉名词时它变成代词，不能再用名词前的短形式。",
    "esci": "说 quello 之前先想：这个名词前面用哪一个冠词？il 就用 quel，lo 就用 quello，l' 就用 quell'，gli 就用 quegli。如果后面没有名词，直接用代词形式：quello、quella、quelli、quelle。",
    "esempi": [
      { "sbagliata": "Quello libro è mio.", "giusta": "Quel libro è mio." },
      { "sbagliata": "Questo casa è bella.", "giusta": "Questa casa è bella." },
      { "sbagliata": "Quelli studenti sono bravi.", "giusta": "Quegli studenti sono bravi." },
      { "sbagliata": "Prendo quel rosso.", "giusta": "Prendo quello rosso." }
    ]
  },
  "curiosi": [
    { "titolo": "第三个指示词 codesto", "t": "传统语法里有三个指示词：questo 指离说话人近的，codesto 指离听话人近的，quello 指离双方都远的。今天 codesto 已经很少用，被 quello 取代，只在托斯卡纳一带的口语和一些公文里还能听到。所以学习时可以只掌握 questo 和 quello 这一组。" },
    { "titolo": "口语里的 'sto、'sta", "t": "意大利人说话时常把 questo 缩短：'sto film（这部电影）、'sta storia（这件事）、'ste scarpe（这双鞋）。这种说法很口语，常带一点随意或不耐烦的语气，一般不写在正式的文章里。你只要知道它们是 questo、questa、queste 的缩略形式就可以。" },
    { "titolo": "costui、colui 和 ciò", "t": "除了 questo 和 quello，书面语里还有专门指人的 costui / costei / costoro 和 colui / colei / coloro，以及指事情的 ciò。日常对话里很少用，常见的是 ciò che 和 coloro che，出现在法律文件、新闻和文学作品中。" }
  ],
  "pragmatica": "在店里、餐厅里，可以一边用手指一边说 Prendo questo.（我要这个。）Che cos'è quello?（那是什么？）想让意思更清楚，可以加上 qui（这里）或 là / lì（那里）：questo qui, quello là。指着一个在场的人说 questo qui，可能显得不太礼貌，更自然的做法是说出他的名字或说 questa signora。",
  "esercizi": [
    { "k": "scegli", "q": "代词 quelli 可以怎么用？", "opzioni": [
      { "t": "单独使用，代替阳性复数名词", "ok": true, "perche": "quelli 是阳性复数代词，如 Quelli sono i miei occhiali。" },
      { "t": "放在阳性复数名词前面", "ok": false, "perche": "名词前面用 quei 或 quegli，不用 quelli。" },
      { "t": "放在阴性复数名词前面", "ok": false, "perche": "阴性复数不论是形容词还是代词，都是 quelle。" }
    ] },
    { "k": "scegli", "q": "哪一个省音的说法是对的？", "opzioni": [
      { "t": "quest'amica", "ok": true, "perche": "questa 在元音开头的单数名词前可以省音。" },
      { "t": "quest'amiche", "ok": false, "perche": "复数 queste 不省音，要说 queste amiche。" },
      { "t": "quell'amici", "ok": false, "perche": "复数阳性名词前用 quegli，不省音：quegli amici。" }
    ] },
    { "k": "buco", "zh": "＿ studenti parlano italiano molto bene.", "tr": "那些学生意大利语说得很好。", "opzioni": [
      { "t": "Quegli", "ok": true, "perche": "gli studenti 用 gli，对应 quegli。" },
      { "t": "Quei", "ok": false, "perche": "quei 对应 i，用在 quei libri 这样的名词前。" },
      { "t": "Quelli", "ok": false, "perche": "quelli 是代词，不放在名词前面。" }
    ] },
    { "k": "buco", "zh": "Vorrei ＿ borsa qui, non quella lì.", "tr": "我想要这个包，不是那边那个。", "opzioni": [
      { "t": "questa", "ok": true, "perche": "borsa 是阴性单数，近处的东西用 questa。" },
      { "t": "quella", "ok": false, "perche": "quella 指远处的东西，句子里说的是 qui 这边的。" },
      { "t": "questo", "ok": false, "perche": "questo 是阳性，borsa 是阴性。" }
    ] },
    { "k": "buco", "zh": "Quale vestito compri? — ＿ blu.", "tr": "你买哪件衣服？——蓝色的那件。", "opzioni": [
      { "t": "Quello", "ok": true, "perche": "没有名词，quello 是代词，vestito 是阳性单数。" },
      { "t": "Quel", "ok": false, "perche": "quel 只能放在名词前面，这里名词省略了。" },
      { "t": "Quella", "ok": false, "perche": "vestito 是阳性，不能用阴性的 quella。" }
    ] },
    { "k": "buco", "zh": "＿ albergo è vicino alla stazione.", "tr": "那家酒店在车站附近。", "opzioni": [
      { "t": "Quell'", "ok": true, "perche": "albergo 以元音开头，quello 省音成 quell'。" },
      { "t": "Quel", "ok": false, "perche": "quel 只用在普通辅音开头的阳性单数名词前。" },
      { "t": "Quei", "ok": false, "perche": "quei 是复数，albergo 是单数。" }
    ] },
    { "k": "ordine", "t": "quanto costano quelle scarpe nere", "tr": "那双黑鞋多少钱？" },
    { "k": "ordine", "t": "quest'estate andiamo in montagna con quegli amici", "tr": "今年夏天我们和那些朋友去山里。" },
    { "k": "scrivi", "q": "用意大利语写：“这本书很有意思。”", "a": "Questo libro è interessante.", "accetta": ["Questo libro è molto interessante.", "Questo libro è davvero interessante.", "Questo è un libro interessante.", "Questo libro e interessante."], "perche": "libro 是阳性单数，所以用 questo；interessante 阴阳同形，单数也是 -e。" },
    { "k": "scrivi", "q": "用意大利语写：“那些钥匙是我的。”", "a": "Quelle chiavi sono mie.", "accetta": ["Quelle chiavi sono le mie.", "Quelle sono le mie chiavi.", "Quelle chiavi sono le mie chiavi."], "perche": "chiavi 是阴性复数，所以用 quelle；mie 也是阴性复数。" },
    { "k": "trasforma", "consegna": "把“这本书”改成“那本书”，其他不变。", "base": "Questo libro è nuovo.", "accetta": ["Quel libro è nuovo."], "rifiutate": [
      { "t": "Quello libro è nuovo.", "perche": "libro 前面用 il，所以是短形式 quel，不是 quello。" }
    ], "perche": "il libro → quel libro：quello 的形式跟着冠词变。" },
    { "k": "trasforma", "consegna": "把单数改成复数：“这些衣服”，用 questi。", "base": "Compro questo vestito.", "accetta": ["Compro questi vestiti."], "rifiutate": [
      { "t": "Compro questo vestiti.", "perche": "名词是复数，指示词也要用复数 questi。" }
    ], "perche": "vestito 变成复数 vestiti，questo 也要变成 questi。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Ti piacciono questi pantaloni?" },
      { "chi": "B", "t": "Sì, ma preferisco ＿ blu.", "buco": true }
    ], "opzioni": [
      { "t": "quelli", "ok": true, "perche": "pantaloni 是阳性复数，没有名词时用代词 quelli。" },
      { "t": "quei", "ok": false, "perche": "quei 只能放在名词前面，这里名词省略了。" },
      { "t": "quelle", "ok": false, "perche": "pantaloni 是阳性复数，quelle 是阴性。" }
    ] }
  ],
  "capaci": [
    "你会用 questo 和 quello 表示远近，并让它们和名词的性、数保持一致。",
    "你会根据名词前的冠词选择 quel、quello、quell'、quei、quegli、quella、quelle。",
    "你会在不带名词时使用代词，说出 Prendo quello rosso 这样的句子。",
    "你会避免 quello libro、questo casa 这类受汉语影响的错误。"
  ],
  "fonti": [
    "Mango Languages, «How to use the demonstratives questo and quello in Italian» (forme di questo e quello, elisione, aggettivo e pronome, codesto, ciò)",
    "Tatoeba, corpus italiano locale (ita.tsv): frasi con Questa, Quella, Quell' per controllare la naturalezza degli esempi"
  ]
};
