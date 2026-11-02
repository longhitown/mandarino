/* Lezione 25 · 数字、钟点和日期 (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["numeri-ore"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Sono le tre.", "tr": "三点了。" },
      { "t": "È l'una.", "tr": "一点了。" },
      { "t": "Parto il primo maggio.", "tr": "我五月一号出发。" },
      { "t": "Parto il due giugno.", "tr": "我六月二号出发。" }
    ],
    "domanda": "比较前两句：说“三点”用 sono，说“一点”却用 è，为什么？再比较后两句：五月一号和六月二号，数字的形式有什么不同？汉语的“号”前面一直用普通数字，意大利语呢？",
    "risposta": "“三点”是复数（le tre = 三个小时），动词用复数 sono；“一点”是单数（l'una），动词也是单数 è。日期一般用普通数字（il due giugno），只有每月一号用序数词 primo（il primo maggio）。另外，意大利语的日期是“日-月-年”，和汉语“年-月-日”的顺序相反。"
  },
  "regola": {
    "enunciato": "说钟点用 Sono le + 数字：因为“钟点”是复数的 ore，只有一点（È l'una）、中午（È mezzogiorno）和半夜（È mezzanotte）用单数 è；说“在几点”用 alle（在一点用 all'una）；说日期用 il + 数字 + 月份，只有一号用 primo；说价格用 Costa + 数字 + euro，euro 不变形。数字本身是一个词一个词拼起来的：ventitré、trentotto、centocinquanta、duemila。",
    "schema": ["Sono le + 数字 / È l'una", "alle + 数字 (all'una)", "il + 数字 + 月份", "Costa + 数字 + euro"],
    "punti": [
      { "ok": true, "t": "**整点**：Sono le due, Sono le tre……Sono le dodici 都用复数；但 **È l'una**、**È mezzogiorno**、**È mezzanotte** 用单数 è。" },
      { "ok": true, "t": "**分钟**：过了整点用 **e**（Sono le tre e dieci），一刻是 **e un quarto**，半点是 **e mezza**；快到下一个钟点用 **meno**（Sono le quattro meno dieci = 3:50，Sono le quattro meno un quarto = 3:45）。" },
      { "ok": true, "t": "**在几点**：问 A che ora…?，答 **alle** + 复数钟点（alle otto），一点是 **all'una**，中午和半夜是 **a mezzogiorno / a mezzanotte**；从几点到几点是 **dalle … alle …**。" },
      { "ok": true, "t": "**二十四小时制**用在时刻表、电影票、营业时间：Sono le diciotto e trenta。口语里常用十二小时制，再加 **di mattina / del pomeriggio / di sera / di notte** 说明是哪一段。" },
      { "ok": true, "t": "**日期**：Oggi è il 2 novembre. 顺序是 日-月-年；月份和星期名称**不大写**；只有 **il primo** 是序数词，其余用普通数字。遇到以元音开头的数字，il 变成 l'：**l'otto marzo**、**l'undici aprile**。" },
      { "ok": true, "t": "**数字拼写**：21、28 等去掉元音，写成 **ventuno、ventotto、trentotto**；**ventitré、trentatré** 的 tré 带重音符号（重音在最后一个音节）；1000 是 **mille**，2000 起是 **duemila、tremila**。" },
      { "ok": false, "t": "**不能把钟点和时长混淆**：**Sono le due** 是“两点钟”，**Sono due ore** 是“两个小时”；一个小时是 **un'ora**，一点钟是 **l'una**。" },
      { "ok": false, "t": "**价格不能写成 euros**：意大利语里 euro 单复数相同，是 un euro、due euro、venti euro。" }
    ]
  },
  "logica": [
    "汉语的数字是“二十三”这样一个一个说出来的，意大利语把它们**拼成一个词**：venti + tre = ventitré，trenta + otto = trentotto，cento + cinquanta = centocinquanta，due + mila = duemila。所以先背熟 0 到 19 和整十（venti, trenta, quaranta……），再学会拼起来，就能说出任何一个数。",
    "钟点里的 è 和 sono 不是随便选的。意大利语的“几点”其实是在说“有几个小时”：le ore（复数的小时）。所以三点是 Sono le tre（有三个小时）；一点是 l'una（单数，一个小时），所以 È l'una。中午和半夜是单个的时刻，也用 è。“在几点”则是介词 a 加上定冠词：a + le = alle，a + l' = all'。",
    "日期的顺序和汉语相反：汉语是“大到小”（年-月-日），意大利语是“小到大”（日-月-年），就像写地址时先写门牌号再写街道。日期里的数字是普通数字，只有第一天特别，用序数词 primo。所以 il primo maggio，但是 il due maggio, il tre maggio。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["时刻", "意大利语", "说明"],
    "righe": [
      ["1:00", "È l'una.", "单数：和 mezzogiorno、mezzanotte 一样用 è"],
      ["3:00", "Sono le tre.", "其余整点都用 sono le"],
      ["3:15", "Sono le tre e un quarto.", "过了整点用 e"],
      ["3:30", "Sono le tre e mezza.", "mezza 是阴性，因为 ora 是阴性"],
      ["3:45", "Sono le quattro meno un quarto.", "meno：离下一个钟点还差一刻"],
      ["12:00", "È mezzogiorno.", "中午不加冠词，说 a mezzogiorno"],
      ["0:00", "È mezzanotte.", "半夜，说 a mezzanotte"],
      ["20:30", "Sono le venti e trenta.", "二十四小时制，用在时刻表和票上"]
    ]
  },
  "esempi": [
    { "gruppo": "说钟点", "items": [
      { "t": "Che ore sono? Sono le dieci e un quarto.", "tr": "几点了？十点一刻。" },
      { "t": "È l'una e mezza: andiamo a pranzo.", "tr": "一点半了，我们去吃午饭吧。", "nota": "一点用单数 è，所以是 È l'una。" },
      { "t": "È mezzogiorno: la scuola è finita.", "tr": "中午十二点了，学校放学了。" },
      { "t": "Sono le sei meno dieci.", "tr": "五点五十分。", "nota": "meno dieci 是“差十分”，所以是 5:50。" }
    ] },
    { "gruppo": "在几点：alle、dalle…alle", "items": [
      { "t": "Il treno per Roma parte alle diciotto e venti.", "tr": "去罗马的火车十八点二十分开。" },
      { "t": "Lavoro dalle nove alle cinque.", "tr": "我从九点工作到五点。" },
      { "t": "Pranziamo all'una e mezza.", "tr": "我们一点半吃午饭。", "nota": "一点：a + l'una = all'una。" }
    ] },
    { "gruppo": "说日期", "items": [
      { "t": "Oggi è il 2 novembre.", "tr": "今天是十一月二号。" },
      { "t": "Il mio compleanno è il primo maggio.", "tr": "我的生日是五月一号。" },
      { "t": "Ci vediamo lunedì 9 novembre.", "tr": "我们十一月九号星期一见。", "nota": "有星期名称时，日期前面不加 il。" },
      { "t": "L'otto marzo è la festa della donna.", "tr": "三月八号是妇女节。", "nota": "otto 以元音开头，il 变成 l'。" }
    ] },
    { "gruppo": "价格、年份和大数字", "items": [
      { "t": "Questo libro costa dodici euro e cinquanta.", "tr": "这本书十二欧元五十分。" },
      { "t": "Quanto costano queste mele? Tre euro al chilo.", "tr": "这些苹果多少钱？三欧元一公斤。", "nota": "mele 是复数，所以问 costano。" },
      { "t": "Sono nato nel duemilaquattro.", "tr": "我是二零零四年出生的。" },
      { "t": "Il viaggio dura un'ora e mezza.", "tr": "旅程要一个半小时。", "nota": "时长是 un'ora，不是 l'una。" }
    ] }
  ],
  "contrasti": [
    { "q": "现在是一点钟。哪一句对？", "opzioni": [
      { "t": "È l'una.", "ok": true, "perche": "一点是单数的 l'una，动词也用单数 è。" },
      { "t": "Sono l'una.", "ok": false, "perche": "sono 是复数动词，l'una 是单数，两者不配。汉语不变形，所以容易出这个错。" },
      { "t": "Sono le una.", "ok": false, "perche": "le 是复数冠词，不能放在 una 前面；一点的冠词是 l'。" }
    ] },
    { "q": "现在是两点钟。哪一句对？", "opzioni": [
      { "t": "Sono le due.", "ok": true, "perche": "两点是复数 le due，动词用 sono。" },
      { "t": "È le due.", "ok": false, "perche": "è 是单数，只用于一点、中午和半夜；le due 是复数，要配 sono。" },
      { "t": "Sono due ore.", "ok": false, "perche": "这句话是“两个小时”（时长），不是“两点钟”。" }
    ] },
    { "q": "“我们八点见。”哪一句对？", "opzioni": [
      { "t": "Ci vediamo alle otto.", "ok": true, "perche": "“在几点”用 alle（a + le）加钟点。" },
      { "t": "Ci vediamo le otto.", "ok": false, "perche": "缺了介词 a；说“在八点”需要 alle。" },
      { "t": "Ci vediamo a otto.", "ok": false, "perche": "a 要和定冠词 le 连成 alle，不能单独放在数字前。" }
    ] },
    { "q": "“电影演一个半小时。”（说时长）哪一句对？", "opzioni": [
      { "t": "Il film dura un'ora e mezza.", "ok": true, "perche": "说时长用 un'ora（一个小时）加 e mezza。" },
      { "t": "Il film dura l'una e mezza.", "ok": false, "perche": "l'una e mezza 是“一点半”这个时刻，不是一个半小时的长度。" }
    ] },
    { "q": "“五月一号”哪一句对？", "opzioni": [
      { "t": "il primo maggio", "ok": true, "perche": "每月一号是日期里唯一用序数词的，所以是 primo。" },
      { "t": "il uno maggio", "ok": false, "perche": "日期的第一天不用 uno，要用序数词 primo。" },
      { "t": "maggio primo", "ok": false, "perche": "顺序错了：意大利语是“日-月”，先说日再说月份。" }
    ] },
    { "q": "“六月二号”哪一句对？", "opzioni": [
      { "t": "il due giugno", "ok": true, "perche": "除了一号，其他日期都用普通数字 due, tre, quattro……" },
      { "t": "il secondo giugno", "ok": false, "perche": "secondo 是序数词，只有 primo 可以用在日期里。" }
    ] },
    { "q": "28 怎么写？哪一个对？", "opzioni": [
      { "t": "ventotto", "ok": true, "perche": "venti 的最后一个元音 i 在 otto 前面省略，写成一个词：ventotto。" },
      { "t": "ventiotto", "ok": false, "perche": "venti 后面接 otto 时 i 要省略。" },
      { "t": "venti otto", "ok": false, "perche": "意大利语里 21 到 99 要写成一个词，不分开。" }
    ] },
    { "q": "时间是 2:45。哪一句对？", "opzioni": [
      { "t": "Sono le tre meno un quarto.", "ok": true, "perche": "meno un quarto = 离三点还差一刻，所以是两点四十五。" },
      { "t": "Sono le due e un quarto.", "ok": false, "perche": "e un quarto 是过一刻，也就是 2:15。" },
      { "t": "Sono le due meno un quarto.", "ok": false, "perche": "这是离两点差一刻，也就是 1:45。" }
    ] },
    { "q": "“这本书十二欧元五十分”哪一句对？", "opzioni": [
      { "t": "Costa dodici euro e cinquanta.", "ok": true, "perche": "欧元数 + euro + e + 分的数目；euro 不变形。" },
      { "t": "Costa dodici euros e cinquanta.", "ok": false, "perche": "euro 在意大利语里单复数相同，不加 s。" },
      { "t": "Costa dodici virgola cinquanta.", "ok": false, "perche": "买东西时通常说“欧元 e 分”，不会把逗号读出来。" }
    ] },
    { "q": "“这个星期一我去看牙医。”（只有一次）哪一句对？", "opzioni": [
      { "t": "Lunedì vado dal dentista.", "ok": true, "perche": "星期名称前不加冠词，指的是即将到来的这一个星期一。" },
      { "t": "Il lunedì vado dal dentista.", "ok": false, "perche": "加了 il 的 il lunedì 表示“每个星期一”，是习惯，不是这一次。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Al cinema",
    "righe": [
      { "chi": "A", "t": "Scusi, a che ora comincia il film?", "tr": "打扰一下，电影几点开始？" },
      { "chi": "B", "t": "Alle venti e trenta, cioè alle otto e mezza.", "tr": "二十点三十分，就是八点半。" },
      { "chi": "A", "t": "E quanto costa il biglietto?", "tr": "票多少钱？" },
      { "chi": "B", "t": "Costa nove euro e cinquanta.", "tr": "九欧元五十分。" },
      { "chi": "A", "t": "Ne prendo due. Quanto fa?", "tr": "我要两张。一共多少钱？" },
      { "chi": "B", "t": "Sono diciannove euro.", "tr": "十九欧元。" }
    ],
    "esercizi": [
      { "q": "电影几点开始？", "opzioni": [
        { "t": "晚上八点半", "ok": true, "perche": "alle venti e trenta 是二十四小时制的二十点三十分，也就是晚上八点半。" },
        { "t": "晚上九点半", "ok": false, "perche": "venti 是二十，二十点是晚上八点，不是九点。" },
        { "t": "下午两点半", "ok": false, "perche": "下午两点半是 le quattordici e trenta。" }
      ] },
      { "q": "两张票一共多少钱？", "opzioni": [
        { "t": "十九欧元", "ok": true, "perche": "9,50 × 2 = 19，B 说 Sono diciannove euro。" },
        { "t": "九欧元五十分", "ok": false, "perche": "这是一张票的价格，不是两张的总价。" },
        { "t": "十八欧元", "ok": false, "perche": "两张票是 19 欧元，不是 18。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的“点”“号”“块”都不变形，所以很容易说成 **Sono l'una**、**È le tre**，或把日期说成 **il secondo giugno**、把 28 写成 **ventiotto**。还有一个常见的错误：把“一个半小时”说成 l'una e mezza。",
    "perche": "汉语里“一点”和“三点”只有数字不同，动词完全一样；意大利语的“几点”其实是在数“小时”，数量一个还是多个，动词也跟着变。日期的数字则受汉语习惯影响，一号以外也想用序数词。",
    "esci": "先问自己：这是一点（单数）还是别的钟点（复数）？一点用 È l'una，其他都用 Sono le。再问：这是时刻还是时长？时刻用 le ore，时长用 un'ora, due ore。日期记住一句话：只有一号是 primo，其他用普通数字。数字写成一个词，venti 后面遇到 uno 或 otto 要省略 i。",
    "esempi": [
      { "sbagliata": "Sono l'una.", "giusta": "È l'una." },
      { "sbagliata": "È le tre.", "giusta": "Sono le tre." },
      { "sbagliata": "Il secondo giugno.", "giusta": "Il due giugno." },
      { "sbagliata": "Ventiotto.", "giusta": "Ventotto." }
    ]
  },
  "curiosi": [
    { "titolo": "两种钟点：书面用 24 小时，口语用 12 小时", "t": "火车、飞机、电影和营业时间用二十四小时制：Il treno parte alle diciotto e venti。朋友之间说话更常用十二小时制，再加上一段时间的说明：alle sei del pomeriggio, alle otto di sera, alle tre di notte。两种说法都对，场合不同。" },
    { "titolo": "问日期的两种方式", "t": "最常用的是 Che giorno è oggi?（今天几号？）和 Che data è oggi?。口语里还有一种很有意大利味的问法：Quanti ne abbiamo oggi?（今天几号？），回答 Ne abbiamo cinque（五号）。这里的 ne 指“月份里的日子”。" },
    { "titolo": "tré 为什么有重音，tre 却没有", "t": "意大利语的单音节词通常不带重音符号，所以单独的 tre 不写重音。但是 ventitré、trentatré 这样的复合词有两个以上的音节，重音落在最后一个音节，必须写出来。" },
    { "titolo": "逗号和小数点", "t": "意大利语的小数用逗号，千位用点，和汉语相反：3,50 是三点五，1.250 是一千二百五十。读价格时不读逗号：3,50 € 是 tre euro e cinquanta。千万以上的数用 milione：due milioni di euro（两百万欧元），后面要加 di。" }
  ],
  "pragmatica": "向陌生人问时间，说 Scusi, che ore sono?（对长辈、不熟的人用 Lei）；对朋友说 Che ore sono? 就行。付款时店员会说 Sono dodici euro（一共十二欧元）或 Fa dodici euro；你可以问 Quanto costa? 或 Quant'è?。约时间时说 Ci vediamo alle otto 之后，再确认一次 Alle otto, giusto? 最保险。",
  "esercizi": [
    { "k": "scegli", "q": "3:15 怎么说？", "opzioni": [
      { "t": "Sono le tre e un quarto.", "ok": true, "perche": "e un quarto 是过一刻，三点过一刻就是 3:15。" },
      { "t": "Sono le tre meno un quarto.", "ok": false, "perche": "meno un quarto 是差一刻，也就是 2:45。" },
      { "t": "Sono le quattro e un quarto.", "ok": false, "perche": "这是四点一刻，不是三点一刻。" }
    ] },
    { "k": "scegli", "q": "中午十二点怎么说？", "opzioni": [
      { "t": "È mezzogiorno.", "ok": true, "perche": "mezzogiorno 是单个的时刻，用单数 è，不加冠词。" },
      { "t": "Sono mezzogiorno.", "ok": false, "perche": "mezzogiorno 是单数，不能配复数动词 sono。" },
      { "t": "Sono le mezzogiorno.", "ok": false, "perche": "mezzogiorno 前面不加复数冠词 le。" }
    ] },
    { "k": "scegli", "q": "今天是 10 月 31 日，明天是几号？", "opzioni": [
      { "t": "Domani è il primo novembre.", "ok": true, "perche": "十月三十一日的后一天是十一月一号，一号用 primo。" },
      { "t": "Domani è il due novembre.", "ok": false, "perche": "二号是后天，不是明天。" },
      { "t": "Domani è il trentuno ottobre.", "ok": false, "perche": "三十一号是今天，不是明天。" }
    ] },
    { "k": "buco", "zh": "＿ le sei e mezza.", "tr": "现在六点半。", "opzioni": [
      { "t": "Sono", "ok": true, "perche": "六点是复数 le sei，动词用 sono。" },
      { "t": "È", "ok": false, "perche": "è 只用于一点、中午和半夜。" },
      { "t": "Ci sono", "ok": false, "perche": "Ci sono 的意思是“有”，不能用来报时。" }
    ] },
    { "k": "buco", "zh": "Il corso comincia ＿ nove.", "tr": "课九点开始。", "opzioni": [
      { "t": "alle", "ok": true, "perche": "“在几点”用 a + le = alle。" },
      { "t": "le", "ok": false, "perche": "句子里缺少表示“在几点”的介词 a。" },
      { "t": "nelle", "ok": false, "perche": "表示时刻不用 in，要用 a。" }
    ] },
    { "k": "buco", "zh": "Il film dura ＿ e mezza.", "tr": "电影长一个半小时。", "opzioni": [
      { "t": "un'ora", "ok": true, "perche": "说时长用 un'ora（一个小时）。" },
      { "t": "l'una", "ok": false, "perche": "l'una 是“一点钟”这个时刻，不是时长。" },
      { "t": "un ora", "ok": false, "perche": "ora 以元音开头，un 后面要加撇号：un'ora。" }
    ] },
    { "k": "ordine", "t": "il treno parte alle sei e un quarto", "alt": ["alle sei e un quarto il treno parte"], "tr": "火车六点一刻开。" },
    { "k": "scrivi", "q": "用意大利语写：“现在是一点半。”", "a": "È l'una e mezza.", "accetta": ["È l'una e mezza", "E' l'una e mezza.", "È l'una e trenta."], "perche": "一点是单数，所以用 È l'una；半点是 e mezza。" },
    { "k": "scrivi", "q": "用意大利语写：“这本书十二欧元。”", "a": "Questo libro costa dodici euro.", "accetta": ["Il libro costa dodici euro.", "Questo libro costa 12 euro.", "Costa dodici euro.", "Questo libro costa dodici euro"], "perche": "价格用 costa + 数字 + euro，euro 不变形；12 写成 dodici。" },
    { "k": "trasforma", "consegna": "改成用 meno 的说法（差几分到下一个整点）。", "base": "Sono le cinque e quarantacinque.", "accetta": ["Sono le sei meno un quarto.", "Sono le sei meno un quarto", "Sono le 6 meno un quarto."], "rifiutate": [
      { "t": "Sono le cinque meno un quarto.", "perche": "这是 4:45，差一刻到五点。" }
    ], "perche": "5:45 离六点差一刻，所以是 le sei meno un quarto。" },
    { "k": "trasforma", "consegna": "把 oggi 改成 domani，并改写日期。", "base": "Oggi è il trenta aprile.", "accetta": ["Domani è il primo maggio.", "Domani è il primo maggio", "Domani è il 1 maggio."], "rifiutate": [
      { "t": "Domani è il uno maggio.", "perche": "每月一号要用序数词 primo，不用 uno。" }
    ], "perche": "四月三十日的后一天是五月一号，说 il primo maggio。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "A che ora pranziamo?" },
      { "chi": "B", "t": "Pranziamo ___ una e mezza.", "buco": true }
    ], "opzioni": [
      { "t": "all'", "ok": true, "perche": "一点是单数，a + l' = all'：all'una e mezza。" },
      { "t": "alle", "ok": false, "perche": "alle 用于复数钟点（alle due），一点要用 all'。" },
      { "t": "le", "ok": false, "perche": "缺少介词 a，而且 una 前面应是 l'。" }
    ] }
  ],
  "capaci": [
    "你会问时间和报时间：Che ore sono? Sono le tre e mezza。区分 È l'una 和 Sono le due。",
    "你会约时间：Ci vediamo alle otto，也会说 dalle nove alle cinque。",
    "你会说日期：Oggi è il 2 novembre，并记住只有一号用 primo。",
    "你会问价格和说价格：Quanto costa? Costa dodici euro e cinquanta。"
  ],
  "fonti": [
    "Think in Italian, «How to Tell the Time in Italian» (è l'una e sono le, mezzogiorno, mezzanotte, e mezza, meno, alle, uso delle 24 ore)",
    "Mango Languages, «How to tell time in Italian» (domande con Che ore sono, a + articolo, dalle…alle, intorno alle, 12 e 24 ore)",
    "Think in Italian, «How to say the date in Italian» (ordine giorno-mese-anno, primo, minuscole, l'otto ottobre)",
    "Tatoeba (ita.tsv), ricerche mirate: Sono le due meno un quarto, È l'una, È mezzogiorno, Domani è il primo maggio, Costa trenta euro, Sono nato nel 1979"
  ]
};
