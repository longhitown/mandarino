/* Lezione 29 · 人们怎么说：无人称的 si (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["si-impersonale"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "In Italia si cena tardi.", "tr": "在意大利，晚饭吃得很晚。" },
      { "t": "Qui non si fuma.", "tr": "这儿不能抽烟。" },
      { "t": "In questo negozio si vendono scarpe e borse.", "tr": "这家店卖鞋子和包。" },
      { "t": "Come si dice «ciao» in inglese?", "tr": "“ciao”用英语怎么说？" }
    ],
    "domanda": "这四句话里都没有说“谁”在吃饭、抽烟、卖东西、说话。每句话里都有一个小词 si。再看动词：前两句和最后一句的动词是单数，第三句却是复数 vendono。你觉得动词的数是由什么决定的？",
    "risposta": "si 的意思是“人们、一般的人”，说话人不指定是谁，所以汉语常常干脆省略主语。动词永远是第三人称。单数还是复数，要看后面有没有名词：cena、fuma、dice 后面没有名词（或名词是单数），动词用单数；第三句 scarpe e borse 是复数名词，动词就跟着变成复数 vendono。这个名词在语法上起到“主语”的作用，动词要和它一致。"
  },
  "regola": {
    "enunciato": "意大利语的动词一定要有主语的位置，说“人们、大家、一般的人”时，用 **si + 第三人称动词**，这就是无人称的 si（si impersonale）。si 后面如果有一个名词做动作的对象（这时叫被动的 si，si passivante），动词要和这个名词在数上一致：**Si mangia la pizza. / Si mangiano due pizze.** 没有名词时，动词用第三人称单数：**Qui si dorme bene.**",
    "schema": ["si", "第三人称动词", "（名词）", "名词是复数 → 动词是复数"],
    "punti": [
      { "ok": true, "t": "**没有宾语**：si + 第三人称单数。In Italia si cena tardi. A teatro non si parla. Qui si sta bene.（汉语的无主句，大多可以这样译。）" },
      { "ok": true, "t": "**有名词做对象**：动词和这个名词一致。Si vende una casa.（单数）Si vendono due case.（复数）Si affittano biciclette.（这里出租自行车。）在规范的书面语里一定要一致。" },
      { "ok": true, "t": "**Si può / Si deve + 动词原形**：问许可、说规矩最常用。Si può entrare? Non si deve correre. 后面的原形动词如果带复数名词，书面语里 può 也变成 possono：Si possono comprare i biglietti online." },
      { "ok": true, "t": "**反身动词用 ci si**：alzarsi、sentirsi、vestirsi 本身已经有 si，无人称的 si 要换成 ci 放在前面：Ci si alza presto in campagna. Ci si sente bene qui. 不能写成 si si。" },
      { "ok": true, "t": "**essere + 形容词，形容词用复数**：Quando si è stanchi, si dorme male. Da giovani si è più coraggiosi. 这里的 si 指“人们”，所以形容词是阳性复数。" },
      { "ok": true, "t": "**复合时态一律用 essere**：Ieri sera si è mangiato tardi.（没有宾语时，过去分词用阳性单数。）有复数宾语时，过去分词跟着宾语一致：Alla festa si sono bevute dieci bottiglie di vino." },
      { "ok": true, "t": "**宾语人称代词放在 si 前面**：Lo si vede spesso.（人们常常看到他。）Ce la si fa.（人们做得到。）口语里 si 还常常表示“我们”：Domani si va al mare?（明天我们去海边吧？）" },
      { "ok": false, "t": "**不能省略 si，也不能把 si 放在动词后面**：不说 *Qui non fuma*（这句话的意思变成“他或您在这儿不抽烟”），不说 *Qui si non fuma*。否定词 non 在 si 的前面：non si fuma。" }
    ]
  },
  "logica": [
    "汉语的句子可以没有主语：“这儿不能抽烟”“怎么去车站”“在意大利晚饭吃得很晚”。意大利语的动词要靠词尾表示人称，所以句子里必须有一个“人”。当说话人想说“一般的人”，没有特别指谁时，意大利语就用 si 来占住这个位置。和汉语相比，si 的作用像“人们”“大家”“一般”，只是不能省掉。",
    "为什么有复数名词时动词也要变复数？因为 si 有一半像被动句：Si vendono scarpe 差不多相当于 Le scarpe sono vendute（鞋子被卖）。鞋子在语法上成了主语，动词当然要和它一致。汉语没有数的变化，所以这一点要多留心：看到 si 后面有复数名词，先检查动词有没有变成复数。",
    "还要记住 si 的限制：它配的动词永远是第三人称，不会出现 -o、-i、-iamo 这样的词尾。口语里 si 可以表示“我们”（Si va? 是“我们走吧？”），动词也仍然是第三人称。要说具体的某个人（我、你、他）时，用 io、tu、lui 和相应的变位，不用 si。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["汉语", "意大利语", "为什么这样变"],
    "righe": [
      ["这儿不能抽烟。", "Qui non si fuma.", "没有宾语：fumare 用单数"],
      ["这里出租自行车。", "Qui si affittano biciclette.", "biciclette 是复数：动词也是复数"],
      ["怎么去博物馆？", "Come si arriva al museo?", "没有宾语：arrivare 用单数"],
      ["累的时候睡不好。", "Quando si è stanchi, si dorme male.", "essere + 复数形容词"],
      ["乡下的人起得早。", "In campagna ci si alza presto.", "反身动词：ci si"],
      ["昨晚大家吃得很晚。", "Ieri sera si è mangiato tardi.", "复合时态：essere + 阳性单数分词"],
      ["聚会上喝了十瓶酒。", "Alla festa si sono bevute dieci bottiglie.", "分词和复数宾语一致"]
    ]
  },
  "esempi": [
    { "gruppo": "规矩和告示：不能做什么，可以做什么", "items": [
      { "t": "Qui non si fuma.", "tr": "这儿不能抽烟。", "nota": "non 放在 si 的前面。" },
      { "t": "In biblioteca non si parla ad alta voce.", "tr": "图书馆里不能大声说话。" },
      { "t": "Non si può parcheggiare davanti al cancello.", "tr": "不能把车停在大门前。", "nota": "Non si può + 动词原形。" }
    ] },
    { "gruppo": "习惯和风俗：人们通常怎么做", "items": [
      { "t": "In Italia si cena tardi.", "tr": "在意大利，晚饭吃得很晚。" },
      { "t": "A Napoli si mangia molto bene.", "tr": "在那不勒斯吃得非常好。" },
      { "t": "In Italia si beve il cappuccino solo la mattina.", "tr": "在意大利，人们只在早上喝卡布奇诺。", "nota": "il cappuccino 是单数，所以 beve。" }
    ] },
    { "gruppo": "有名词做对象：动词和名词一致", "items": [
      { "t": "In questo negozio si vende il pane fresco.", "tr": "这家店卖新鲜面包。" },
      { "t": "Qui si affittano biciclette.", "tr": "这里出租自行车。", "nota": "biciclette 是复数，所以 affittano。" },
      { "t": "Si compra il biglietto alla cassa.", "tr": "在售票处买票。" }
    ] },
    { "gruppo": "essere 和 ci si：形容词用复数，反身动词用 ci", "items": [
      { "t": "Quando si è stanchi, si lavora male.", "tr": "累的时候，工作做不好。", "nota": "stanchi：阳性复数。" },
      { "t": "Da giovani si è più coraggiosi.", "tr": "年轻的时候人更勇敢。" },
      { "t": "In campagna ci si alza presto.", "tr": "在乡下人们起得早。", "nota": "alzarsi 是反身动词，用 ci si。" }
    ] },
    { "gruppo": "有用的问句和过去时", "items": [
      { "t": "Come si arriva alla stazione?", "tr": "怎么去火车站？" },
      { "t": "Come si scrive il suo cognome?", "tr": "您的姓怎么写？" },
      { "t": "Ieri sera si è mangiato tardi.", "tr": "昨晚大家吃得很晚。", "nota": "mangiare 的复合时态用 essere。" },
      { "t": "Alla festa si sono bevute dieci bottiglie di vino.", "tr": "聚会上喝了十瓶酒。", "nota": "bevute：和 bottiglie 一致，阴性复数。" }
    ] }
  ],
  "contrasti": [
    { "q": "商店告示“这里卖鞋子”（鞋子是复数，规范的书面语）。哪一句对？", "opzioni": [
      { "t": "Qui si vendono scarpe.", "ok": true, "perche": "scarpe 是复数名词，动词和它一致：si vendono。" },
      { "t": "Qui si vende scarpe.", "ok": false, "perche": "后面是复数名词，规范的书面语里动词也要变复数。单数 vende 只配单数名词，如 si vende pane。" }
    ] },
    { "q": "“这儿不能抽烟。”哪一句对？", "opzioni": [
      { "t": "Qui non si fuma.", "ok": true, "perche": "non 在 si 的前面，动词用第三人称单数。" },
      { "t": "Qui non fuma.", "ok": false, "perche": "少了 si，句子的主语变成“他、她”，意思是“他或她在这儿不抽烟”，不再是一般的规矩。" },
      { "t": "Qui si non fuma.", "ok": false, "perche": "否定词 non 必须放在 si 的前面，不能放在后面。" }
    ] },
    { "q": "“怎么去火车站？”哪一句对？", "opzioni": [
      { "t": "Come si arriva alla stazione?", "ok": true, "perche": "arrivare 后面没有宾语，用单数：si arriva。" },
      { "t": "Come si arrivano alla stazione?", "ok": false, "perche": "后面 alla stazione 不是宾语，也不是复数名词，动词不需要变复数。" },
      { "t": "Come arriva si alla stazione?", "ok": false, "perche": "si 必须紧靠在动词的前面，不能放在后面。" }
    ] },
    { "q": "“累的时候，人做什么都慢。”（规范说法，用 essere）哪一句对？", "opzioni": [
      { "t": "Quando si è stanchi, si fa tutto più lentamente.", "ok": true, "perche": "si 指“人们”，形容词 stanchi 是阳性复数。" },
      { "t": "Quando si è stanco, si fa tutto più lentamente.", "ok": false, "perche": "无人称 si 后面的形容词要用复数 stanchi；stanco 是单数，不符合规范。" },
      { "t": "Quando si ha stanchi, si fa tutto più lentamente.", "ok": false, "perche": "“累”要用 essere：si è stanchi；avere 不能和 stanchi 连用。" }
    ] },
    { "q": "“在乡下，人们起得早。”（alzarsi 是反身动词）哪一句对？", "opzioni": [
      { "t": "In campagna ci si alza presto.", "ok": true, "perche": "反身动词的无人称用 ci si；ci 取代了第一个 si。" },
      { "t": "In campagna si si alza presto.", "ok": false, "perche": "两个 si 不能连在一起，要把第一个换成 ci。" },
      { "t": "In campagna si alzano presto.", "ok": false, "perche": "这是普通的反身动词，意思是“他们起床很早”，说的是某些具体的人。" }
    ] },
    { "q": "“昨晚大家吃得很晚。”（复合时态）哪一句对？", "opzioni": [
      { "t": "Ieri sera si è mangiato tardi.", "ok": true, "perche": "无人称 si 的复合时态用 essere，没有宾语时分词是阳性单数。" },
      { "t": "Ieri sera si ha mangiato tardi.", "ok": false, "perche": "有 si 的句子，助动词一律用 essere，不能用 avere。" },
      { "t": "Ieri sera si sono mangiati tardi.", "ok": false, "perche": "句子里没有复数名词，不需要复数的 sono mangiati；这里是 è mangiato。" }
    ] },
    { "q": "“这里可以买到邮票。”（复数名词，规范的书面语）哪一句对？", "opzioni": [
      { "t": "Qui si possono comprare i francobolli.", "ok": true, "perche": "i francobolli 是复数，所以 potere 也变成 possono。" },
      { "t": "Qui si possiamo comprare i francobolli.", "ok": false, "perche": "si 只能配第三人称动词，possiamo 是“我们”的变位，不能和 si 连用。" },
      { "t": "Qui si possono comprano i francobolli.", "ok": false, "perche": "potere 后面要接动词原形 comprare，不能再变位。" }
    ] },
    { "q": "“在这儿，人觉得很自在。”（sentirsi 是反身动词）哪一句对？", "opzioni": [
      { "t": "Qui ci si sente a proprio agio.", "ok": true, "perche": "sentirsi 是反身动词，无人称要说 ci si sente。" },
      { "t": "Qui si si sente a proprio agio.", "ok": false, "perche": "两个 si 连在一起是不允许的，要写成 ci si。" },
      { "t": "Qui si sente a proprio agio.", "ok": false, "perche": "少了反身的部分，sentire 本身是“听到”，意思就不一样了。" }
    ] }
  ],
  "dialogo": {
    "titolo": "A che ora si cena?",
    "righe": [
      { "chi": "A", "t": "Buonasera, a che ora si cena in albergo?", "tr": "晚上好，酒店里几点吃晚饭？" },
      { "chi": "B", "t": "Di solito si cena dalle otto alle dieci.", "tr": "通常八点到十点吃晚饭。" },
      { "chi": "A", "t": "Così tardi? Da noi si cena molto presto.", "tr": "这么晚？我们那里吃得很早。" },
      { "chi": "B", "t": "In Italia si fa così. Ma al bar si mangia anche prima.", "tr": "在意大利就是这样。不过酒吧里更早就有吃的。" },
      { "chi": "A", "t": "E si può pagare con la carta?", "tr": "可以刷卡吗？" },
      { "chi": "B", "t": "Certo, si può pagare con la carta.", "tr": "当然，可以刷卡。" }
    ],
    "esercizi": [
      { "q": "B 说 “si cena dalle otto alle dieci”，si 指的是谁？", "opzioni": [
        { "t": "一般的人，也就是住在这里的大家", "ok": true, "perche": "si 不指具体的人，表示一般的习惯。" },
        { "t": "只有说话的 B 自己", "ok": false, "perche": "si 在这里没有说“我”，而是说一般的做法。" },
        { "t": "只有 A 一个人", "ok": false, "perche": "si 没有指定对象，A 只是询问时间。" }
      ] },
      { "q": "“E si può pagare con la carta?” 是在做什么？", "opzioni": [
        { "t": "问可不可以用卡付款", "ok": true, "perche": "Si può + 动词原形是问许可的常用句型。" },
        { "t": "问谁可以付款", "ok": false, "perche": "句子里没有问“谁”，问的是方式可不可行。" },
        { "t": "说明已经付过款了", "ok": false, "perche": "这是一个问句，没有说明已经完成。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "照着汉语的无主句直接翻译，把 si 漏掉；或者记得 si，却让动词永远用单数，不管后面有没有复数名词；还有人在反身动词前写出两个 si，或者在 si è 后面用单数的形容词。",
    "perche": "汉语的动词不变形，句子没有主语也很自然，名词有单复数的区别也不会影响动词；而意大利语里动词要和主语在人称、数上一致，被动的 si 后面的名词就是这个主语。si 是一个很小的词，学习者很容易看不见它。",
    "esci": "每次想说“在……人们怎么样”“……怎么说”“能不能……”，先放上 si，再把动词变成第三人称，然后回头看动词后面有没有复数名词，有就让动词变复数。遇到反身动词换成 ci si，遇到 essere 加形容词，形容词写复数。",
    "esempi": [
      { "sbagliata": "Qui si non fuma.", "giusta": "Qui non si fuma." },
      { "sbagliata": "In Italia si mangia molti spaghetti.", "giusta": "In Italia si mangiano molti spaghetti." },
      { "sbagliata": "Quando si è stanco, si dorme male.", "giusta": "Quando si è stanchi, si dorme male." },
      { "sbagliata": "In campagna si si alza presto.", "giusta": "In campagna ci si alza presto." }
    ]
  },
  "curiosi": [
    { "titolo": "annunci：Affittasi、Vendesi、Cercasi", "t": "在房屋、商店的告示里，常常看到 Affittasi appartamento（出租公寓）、Vendesi bicicletta（出售自行车）、Cercasi cameriere（招聘服务员）。这是书写的老形式：si 接在动词的后面，写成一个词。口语里不这样说，口语里说 Si affitta un appartamento。" },
    { "titolo": "Si prega di…：公共场所的客气提示", "t": "车站、银行、医院里常有 Si prega di non fumare（请勿吸烟）、Si prega di attendere（请稍候）。动词用单数，语气客气，不是命令。它是一个固定的书面说法，写给不特定的大家看，口语里朋友之间不会这么说。" },
    { "titolo": "口语里的 si：也可以是“我们”", "t": "意大利人邀请朋友时，经常用 si 代替 noi：Domani si va al cinema? 的意思是“明天我们去看电影怎么样？”。在托斯卡纳，Noi si va 这样的说法也能在口语里听到。书面语里则通常说 noi andiamo。" },
    { "titolo": "被动的 si 和无人称的 si 的界线", "t": "语法书把 si vendono case（有名词，动词一致）叫“被动的 si”，把 si dorme（没有宾语）叫“无人称的 si”，两者之间的分界其实很细。口语里有时也会听到 si vende case 这样不一致的说法，但在考试和正式的文章里，复数名词配复数动词是标准。" }
  ],
  "pragmatica": "si 让话变得客观、有礼貌：Non si fuma 比 Non fumare 更像规矩，Si può? 比 Posso? 更像是把决定权交给在场的大家。问路和问词汇时 Come si dice…? Come si arriva…? 最自然，也不会冒犯任何人。说自己的习惯时，用 io 更准确；说“人们一般这样做”时，用 si。书写告示用 Si prega di…，朋友之间用 si 邀约：Si va?",
  "esercizi": [
    { "k": "scegli", "q": "Si vendono case. 里，为什么动词是复数 vendono？", "opzioni": [
      { "t": "因为 case 是复数名词，动词要和它一致", "ok": true, "perche": "si + 名词的结构里，名词起到主语的作用，所以动词与它一致。" },
      { "t": "因为 si 本身是复数", "ok": false, "perche": "si 没有数，数的变化来自后面的名词。" },
      { "t": "因为主语是 noi", "ok": false, "perche": "无人称的 si 不是 noi，动词始终是第三人称。" }
    ] },
    { "k": "scegli", "q": "什么时候用 ci si 代替 si si？", "opzioni": [
      { "t": "动词本身是反身动词，如 alzarsi、sentirsi", "ok": true, "perche": "反身动词已有一个 si，所以无人称的 si 说成 ci si。" },
      { "t": "动词是及物动词，如 mangiare", "ok": false, "perche": "及物动词用普通的 si：si mangia。" },
      { "t": "句子里有 essere", "ok": false, "perche": "essere 用 si è 加复数形容词，不变成 ci si。" }
    ] },
    { "k": "buco", "zh": "In Italia ＿ cena tardi.", "tr": "在意大利，晚饭吃得很晚。", "opzioni": [
      { "t": "si", "ok": true, "perche": "表示“一般的人”要用无人称的 si。" },
      { "t": "ci", "ok": false, "perche": "ci 是“这里、我们”的另一个小词，不能表示“人们”。" },
      { "t": "ne", "ok": false, "perche": "ne 是“其中、关于它”的小词，在这里没有意思。" }
    ] },
    { "k": "buco", "zh": "In questa libreria si ＿ libri usati.", "tr": "这家书店卖二手书。", "opzioni": [
      { "t": "vendono", "ok": true, "perche": "libri 是复数，动词变成复数：si vendono。" },
      { "t": "vende", "ok": false, "perche": "vende 是单数，不能和复数名词 libri 一致（规范的书面语）。" },
      { "t": "vendi", "ok": false, "perche": "vendi 是 tu 的变位，si 只能配第三人称。" }
    ] },
    { "k": "buco", "zh": "Quando si è ＿, si dorme male.", "tr": "累的时候，睡得不好。", "opzioni": [
      { "t": "stanchi", "ok": true, "perche": "si è 后面的形容词用阳性复数。" },
      { "t": "stanco", "ok": false, "perche": "单数形容词不符合无人称 si 的规范。" },
      { "t": "stancano", "ok": false, "perche": "stancano 是动词（使人累），这里需要形容词。" }
    ] },
    { "k": "ordine", "t": "in Italia si cena molto tardi", "alt": ["si cena molto tardi in Italia"], "tr": "在意大利，晚饭吃得很晚。" },
    { "k": "ordine", "t": "ci si alza presto in campagna", "alt": ["in campagna ci si alza presto"], "tr": "在乡下人们起得早。" },
    { "k": "scrivi", "q": "用意大利语和 si 写：“这儿不能抽烟。”", "a": "Qui non si fuma.", "accetta": ["Non si fuma qui.", "Qui non si può fumare.", "Non si può fumare qui."], "perche": "non 在 si 的前面；也可以用 non si può + 动词原形。" },
    { "k": "scrivi", "q": "用意大利语和 si 写一个问句：“这里可以刷卡吗？”", "a": "Qui si può pagare con la carta?", "accetta": ["Si può pagare con la carta qui?", "Si può pagare con la carta?", "Qui si può pagare con carta?", "Si può pagare con carta?", "Qui si può pagare con la carta di credito?"], "perche": "Si può + 动词原形，是问许可的标准句型。" },
    { "k": "trasforma", "consegna": "改成使用 si 的无人称句，开头保持 In Italia。", "base": "In Italia gli italiani cenano tardi.", "accetta": ["In Italia si cena tardi.", "In Italia si cena tardi"], "rifiutate": [
      { "t": "In Italia si cenano tardi.", "perche": "cenare 后面没有复数名词，动词不用复数；si 后面用第三人称单数。" },
      { "t": "In Italia cena tardi.", "perche": "漏掉 si，句子变成“他或她”的意思，不是一般的人。" }
    ], "perche": "gli italiani 换成 si，动词 cenano 变成第三人称单数 cena。" },
    { "k": "trasforma", "consegna": "改成昨晚发生的事，用近过去时，开头是 Ieri sera。", "base": "Qui si mangia bene.", "accetta": ["Ieri sera qui si è mangiato bene.", "Ieri sera si è mangiato bene qui.", "Ieri sera si è mangiato bene."], "rifiutate": [
      { "t": "Ieri sera qui si ha mangiato bene.", "perche": "有 si 的复合时态用 essere，不用 avere。" },
      { "t": "Ieri sera qui si sono mangiati bene.", "perche": "没有复数名词，分词不用复数，应该是 è mangiato。" }
    ], "perche": "si mangia 的复合时态是 si è mangiato。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Come ＿ «welcome» in italiano?", "buco": true },
      { "chi": "B", "t": "Si dice «benvenuto»." }
    ], "opzioni": [
      { "t": "si dice", "ok": true, "perche": "Come si dice…? 是问“……怎么说”的固定问句。" },
      { "t": "si dicono", "ok": false, "perche": "没有复数名词，动词用单数 dice。" },
      { "t": "dice si", "ok": false, "perche": "si 要放在动词前面。" }
    ] }
  ],
  "capaci": [
    "你会用 si 说规矩、习惯和风俗，如 Qui non si fuma、In Italia si cena tardi。",
    "你会用 Come si dice…? Come si scrive…? Come si arriva…? 询问词汇、写法和路线。",
    "你会判断 si 后面的动词用单数还是复数，如 si vende il pane、si vendono scarpe。",
    "你会用 ci si 和 si è + 复数形容词，如 Ci si alza presto、Quando si è stanchi。"
  ],
  "fonti": [
    "Accademia della Crusca, Consulenza linguistica, «Usi e funzioni del pronome clitico si» (si impersonale, si passivante, accordo del participio, regola della persona)",
    "DICO (Dubbi sull'Italiano, Consulenza Online, Università di Messina), «Si passivante e si impersonale» (accordo del verbo con il soggetto plurale, confine tra i due usi)",
    "Wikipedia (inglese), «Italian grammar», sezione sul si impersonale (combinazione con altri clitici, uso di essere nei tempi composti, aggettivo al maschile plurale)",
    "Ricerca web sul si impersonale (ci si con i riflessivi, essere + aggettivo plurale), sintesi dei risultati consultata",
    "Tatoeba (ita.tsv): controllo della naturalezza di Come si dice, Si può + infinito, si mangia bene, ci si alza presto"
  ]
};
