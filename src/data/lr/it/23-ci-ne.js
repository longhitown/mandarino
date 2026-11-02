/* Lezione 23 · Ci e ne (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["ci-ne"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Bologna è bellissima: ci vado ogni primavera.", "tr": "博洛尼亚很美：我每年春天都去那儿。" },
      { "t": "Marco ha due sorelle e io ne ho tre.", "tr": "马可有两个姐妹，我有三个。" },
      { "t": "Quel film? Ne parlano tutti.", "tr": "那部电影吗？大家都在谈论它。" },
      { "t": "Il problema è serio, ma ci penso io.", "tr": "问题很严重，不过我来处理。" }
    ],
    "domanda": "每个句子里都有一个很小的词：ci 或 ne。它们在句子里代替了什么？汉语说“我每年春天都去”“我有三个”时，需要把“那儿”“姐妹”再说一遍吗？",
    "risposta": "第一句 **ci** 代替 a Bologna（地点：去那儿）。第二句 **ne** 代替“姐妹”里的数量（三个**姐妹中的**三个）。第三句 **ne** 代替 di + 那部电影（谈论**它**）。第四句 **ci** 代替 a + 那个问题（想**它**、处理**它**）。汉语可以直接省略已经知道的宾语；意大利语的动词后面如果缺了这个成分，就要用一个小词把它补上：地点、a + 事情用 **ci**；di + 事情、数量用 **ne**。"
  },
  "regola": {
    "enunciato": "ci 和 ne 是两个很小的代词，用来代替前面已经说过的内容，不再重复。**ci** 代替**地点**（a / in / su + 地方：那儿）和 **a + 事情**（pensare a、credere a、riuscire a）；**ne** 代替 **di + 事情**（parlare di、avere bisogno di）、**数量里的东西**（其中的……）和“从那儿”。两个词都放在变位动词的前面。",
    "schema": ["ci", "＝", "那儿 · a + 事情", "｜", "ne", "＝", "di + 事情 · 其中的（数量）"],
    "punti": [
      { "ok": true, "t": "**ci = 地点**：说过地方以后不再重复。Sei mai stato a Roma? Sì, ci sono stato due volte.（你去过罗马吗？去过两次。）" },
      { "ok": true, "t": "**ci = a + 事情**：动词本身带 a 时，用 ci。Ci penso.（我想一想／我来处理。）Non ci credo.（我不信。）Ci riesco.（我做得到。）" },
      { "ok": true, "t": "**ne = di + 事情**：动词本身带 di 时，用 ne。Ne parlo domani.（我明天说这件事。）Ne ho bisogno.（我需要它。）Ne sono sicuro.（我对此很有把握。）Che ne pensi?（你觉得怎么样？）" },
      { "ok": true, "t": "**ne = 数量**：已经提到的东西，现在只说数量时，一定要有 ne。Hai fratelli? Ne ho due.（我有两个。）Quante ne vuoi?（你要几个？）" },
      { "ok": true, "t": "**位置**：在变位动词前面（ci vado、ne parlo）。接在不定式、命令式后面时连写：andarci、pensaci、parlane。有 potere、volere、dovere 时可以放前面，也可以接在不定式后面：ci posso andare ＝ posso andarci。" },
      { "ok": true, "t": "**ce ne**：ci 和 ne 同时出现时，ci 变成 ce，顺序固定：Ce ne sono tre.（有三个。）Non ce ne sono più.（已经没有了。）" },
      { "ok": true, "t": "**c'è / ci sono**（有）、**ci vuole / ci vogliono**（需要，时间或东西）、**ci metto**（我花……时间）是固定说法，ci 已经成了动词的一部分。" },
      { "ok": false, "t": "**不要**把数量里的 ne 省掉。*Ho tre.* 是汉语“我有三个”的直译，意大利语要说 Ne ho tre。**不要**把 ci 和 ne 弄反：parlare di 用 ne，不用 ci。" }
    ]
  },
  "logica": [
    "汉语里，上下文已经清楚的宾语可以直接不说：“你去罗马吗？——去。”“你要几个？——要三个。”意大利语的主语可以省略（vado 已经含有“我”），但是动词需要的**其他成分**不能凭空消失。如果它不是一个完整的名词，就要用一个小词来站位。ci 和 ne 就是这两个“站位”的词。",
    "怎么选？最可靠的办法是看动词后面**本来**用哪个介词：pensare **a** qualcosa → ci；parlare **di** qualcosa → ne；andare **a / in** un luogo → ci；介词是 a、in、su 时用 ci，介词是 di 时用 ne（da 表示“从那儿”时也用 ne，多见于书面语）。数量是一个特殊的位置：有“……中的三个”，就是 di + 全体，所以也用 ne。",
    "这两个词一般代替**事物、地点、事情**。指人的时候，意大利语更常用重读形式：penso a lui、parlo di lei、esco con loro。在口语里 ci 有时也指人，但初学阶段先把 ci / ne 当作“那儿”“它”“其中的”，不容易出错。"
  ],
  "mappa": {
    "tipo": "albero",
    "inizio": "q0",
    "nodi": {
      "q0": {
        "q": "你要代替的是什么？",
        "risposte": [
          { "t": "一个地方（去那儿、在那儿）", "vai": "luogo" },
          { "t": "数量：已经提到的东西，现在只说几个", "vai": "quantita" },
          { "t": "一件事，动词后面本来有介词", "vai": "prep" }
        ]
      },
      "luogo": { "fine": "用 ci：Roma? Ci vado domani. Sei mai stato a Napoli? Ci sono stato una volta. ci 放在变位动词前面。" },
      "quantita": { "fine": "用 ne：Quante mele? Ne ho tre. 数量一定要有 ne，句子才完整。" },
      "prep": {
        "q": "动词后面本来用哪个介词？",
        "risposte": [
          { "t": "a（pensare a、credere a、riuscire a）", "vai": "fci2" },
          { "t": "di（parlare di、avere bisogno di、essere sicuro di）", "vai": "fne2" }
        ]
      },
      "fci2": { "fine": "用 ci：Ci penso. Non ci credo. Ci riesco." },
      "fne2": { "fine": "用 ne：Ne parlo domani. Ne ho bisogno. Ne sono sicuro." }
    }
  },
  "esempi": [
    { "gruppo": "ci：代替地点", "items": [
      { "t": "Bologna è bellissima: ci vado ogni primavera.", "tr": "博洛尼亚很美：我每年春天都去那儿。" },
      { "t": "Sei mai stato a Venezia? Sì, ci sono stato due volte.", "tr": "你去过威尼斯吗？去过，两次。" },
      { "t": "Vado in biblioteca e ci resto fino alle sei.", "tr": "我去图书馆，在那儿待到六点。" }
    ] },
    { "gruppo": "ci：代替 a + 事情", "items": [
      { "t": "Il compito è difficile, ma ci riesco.", "tr": "作业很难，不过我做得出来。", "nota": "riuscire a + 动词：a 对应 ci。" },
      { "t": "Non ci credo: è impossibile!", "tr": "我不信，这不可能！", "nota": "credere a qualcosa：a 对应 ci。" },
      { "t": "Ci penso io, tu riposati.", "tr": "我来处理，你休息吧。", "nota": "Ci penso io 是很常用的说法，意思是“交给我”。" }
    ] },
    { "gruppo": "ne：代替 di + 事情", "items": [
      { "t": "Ho un problema, ma non ne voglio parlare.", "tr": "我有个问题，不过我不想谈。" },
      { "t": "Questo lavoro non mi piace: ne ho abbastanza.", "tr": "我不喜欢这份工作，我受够了。", "nota": "averne abbastanza (di qualcosa)：受够了。" },
      { "t": "Il tuo aiuto mi serve: ne ho bisogno.", "tr": "我需要你的帮助：我需要它。" },
      { "t": "Che ne pensi del nuovo direttore?", "tr": "你觉得新经理怎么样？" }
    ] },
    { "gruppo": "ne：代替数量", "items": [
      { "t": "Quante sorelle hai? Ne ho due.", "tr": "你有几个姐妹？我有两个。" },
      { "t": "Vuoi dei biscotti? Ne prendo solo uno.", "tr": "要饼干吗？我只拿一块。" },
      { "t": "Quanti caffè hai bevuto? Ne ho bevuti quattro.", "tr": "你喝了几杯咖啡？四杯。", "nota": "bevuti 要和所指的 caffè（阳性复数）一致。" }
    ] },
    { "gruppo": "ce ne、c'è、ci vuole、ci metto", "items": [
      { "t": "In frigo ce ne sono ancora quattro.", "tr": "冰箱里还有四个。" },
      { "t": "C'è una farmacia qui vicino?", "tr": "这附近有药店吗？" },
      { "t": "Per arrivare ci vogliono due ore.", "tr": "到那儿要两个小时。" },
      { "t": "Ci metto venti minuti ad andare al lavoro.", "tr": "我上班要花二十分钟。" }
    ] }
  ],
  "contrasti": [
    { "q": "朋友问：“Sei mai stato a Parigi?” 你去过两次，想回答。哪一句对？", "opzioni": [
      { "t": "Sì, ci sono stato due volte.", "ok": true, "perche": "essere stato a Parigi 的“地点”用 ci 代替，ci 放在动词前面。" },
      { "t": "Sì, ne sono stato due volte.", "ok": false, "perche": "ne 代替 di / da + 名词或数量；这里要代替的是“a Parigi”这个地点，应该用 ci。" }
    ] },
    { "q": "有人邀请你周末去旅行，你想说“我考虑一下”（pensare a）。哪一句对？", "opzioni": [
      { "t": "Ci devo pensare.", "ok": true, "perche": "pensare a qualcosa 带 a，所以用 ci；有 dovere 时 ci 放在 dovere 前面。" },
      { "t": "Ne devo pensare.", "ok": false, "perche": "ne 对应 di；pensare a 的“想这件事”要用 ci。" },
      { "t": "Lo devo pensare.", "ok": false, "perche": "lo 是直接宾语代词，但 pensare 后面有 a，不能用 lo。" }
    ] },
    { "q": "对方问：“Parliamo del problema?” 你想说“我们明天再谈这件事”。哪一句对？", "opzioni": [
      { "t": "Ne parliamo domani.", "ok": true, "perche": "parlare di qualcosa 带 di，所以用 ne，表示“谈论这件事”。" },
      { "t": "Ci parliamo domani.", "ok": false, "perche": "ci parliamo 的意思是“我们明天互相说话”（ci 是“彼此”），不是“谈论这个问题”。" }
    ] },
    { "q": "对方问：“Hai delle penne?” 你有三支，想回答。哪一句对？", "opzioni": [
      { "t": "Ne ho tre.", "ok": true, "perche": "已经提到“penne”，现在只说数量，必须有 ne 代替“其中的”。" },
      { "t": "Le ho tre.", "ok": false, "perche": "le 是“它们”（整体）；这里说的是“其中的三支”，要用 ne。" }
    ] },
    { "q": "你想说“我需要它”，需要的东西前面已经提到。哪一句对？", "opzioni": [
      { "t": "Ne ho bisogno.", "ok": true, "perche": "avere bisogno di qualcosa 带 di，所以用 ne。" },
      { "t": "Ci ho bisogno.", "ok": false, "perche": "bisogno 后面的介词是 di，不是 a，所以不能用 ci。" },
      { "t": "Lo ho bisogno.", "ok": false, "perche": "avere bisogno 后面本来带 di，“它”要用 ne；直接宾语代词 lo 在这里不能用。" }
    ] },
    { "q": "对方问：“Ci sono biscotti?” 你想说“有，还有很多”。哪一句对？", "opzioni": [
      { "t": "Sì, ce ne sono molti.", "ok": true, "perche": "ci 和 ne 同时出现，ci 变成 ce；molti 表示数量，需要 ne。" },
      { "t": "Sì, ci ne sono molti.", "ok": false, "perche": "ci 放在 ne 前面时必须变成 ce，不存在 ci ne。" },
      { "t": "Sì, ne ci sono molti.", "ok": false, "perche": "顺序固定是 ce ne，不是 ne ci。" }
    ] },
    { "q": "你想说“从家到公司要四十分钟”（用 volerci，表示需要时间）。哪一句对？", "opzioni": [
      { "t": "Ci vogliono quaranta minuti.", "ok": true, "perche": "volerci 的动词和后面的名词一致：minuti 是复数，所以用 vogliono。" },
      { "t": "Ci vuole quaranta minuti.", "ok": false, "perche": "quaranta minuti 是复数，动词也要用复数 vogliono。" }
    ] },
    { "q": "对方问：“Vai spesso in palestra?” 你想说“是的，我每周去三次”。哪一句对？", "opzioni": [
      { "t": "Sì, ci vado tre volte a settimana.", "ok": true, "perche": "代替的是“去健身房”这个地点，用 ci。" },
      { "t": "Sì, ne vado tre volte a settimana.", "ok": false, "perche": "不要被“三次”带偏：tre volte 是时间，不是被代替的名词。被代替的是地点，用 ci。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Dal fruttivendolo",
    "righe": [
      { "chi": "A", "t": "Buongiorno, vorrei delle arance.", "tr": "早上好，我想买些橙子。" },
      { "chi": "B", "t": "Quante ne vuole?", "tr": "您要多少个？" },
      { "chi": "A", "t": "Ne prendo un chilo. Ci sono anche le mele?", "tr": "我要一公斤。也有苹果吗？" },
      { "chi": "B", "t": "Sì, ce ne sono di due tipi: rosse e verdi.", "tr": "有，有两种：红的和绿的。" },
      { "chi": "A", "t": "Allora ne prendo mezzo chilo di quelle rosse.", "tr": "那我要半公斤红的。" },
      { "chi": "B", "t": "Perfetto. Vuole altro?", "tr": "好的。您还要别的吗？" }
    ],
    "esercizi": [
      { "q": "A 说 “Ne prendo un chilo”，ne 代替什么？", "opzioni": [
        { "t": "delle arance，也就是要买的东西", "ok": true, "perche": "ne 代替“橙子中的一公斤”：东西前面已经提到，现在只说数量。" },
        { "t": "il negozio，也就是地点", "ok": false, "perche": "代替地点的是 ci，不是 ne。" },
        { "t": "la persona B", "ok": false, "perche": "ne 在这里不指人，而是指“橙子”这类被计量的东西。" }
      ] },
      { "q": "B 说 “Ce ne sono di due tipi”，这句话的意思是什么？", "opzioni": [
        { "t": "（苹果）有两种", "ok": true, "perche": "ce ne sono 表示“有（其中的）……”：ne 指苹果，“di due tipi”说明种类。" },
        { "t": "我们去了两个地方", "ok": false, "perche": "这里没有“去”这个动词，ce ne sono 是“存在”的意思。" }
      ] },
      { "q": "为什么这里是 ce ne，不是 ci ne？", "opzioni": [
        { "t": "ci 在 ne 前面时要变成 ce", "ok": true, "perche": "ci 和 ne 连用时，ci 变成 ce，顺序固定为 ce ne。" },
        { "t": "因为 ce ne 是复数形式", "ok": false, "perche": "ce 不是复数，只是 ci 的组合形式。" },
        { "t": "因为 ce ne 表示地点", "ok": false, "perche": "ce ne sono 表示“有若干个”，不是地点。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语可以省掉已知的宾语，所以学习者常把数量后面的名词一并省掉（*Voglio tre*），或者按汉语的语序把 ci 放到动词后面（*Vado ci*）。另一个常见的错误是按“意思相近”随便选一个：看到“谈论”想到 ci，看到“需要”想到 ci。",
    "perche": "汉语的“那儿”“它”“其中的”是在动词前后的普通词，位置灵活；意大利语的 ci 和 ne 是一种粘附在动词上的小词，位置固定，而且选哪一个由动词本身的介词决定，不由汉语的意思决定。",
    "esci": "先问两个问题：①这个位置在汉语里是“数量”吗？是，就用 ne。②动词后面本来用什么介词？a、in、su → ci；di、da → ne。选好以后，把它放在变位动词前面。",
    "esempi": [
      { "sbagliata": "Quante mele vuoi? Voglio tre.", "giusta": "Quante mele vuoi? Ne voglio tre." },
      { "sbagliata": "Vado ci domani.", "giusta": "Ci vado domani." },
      { "sbagliata": "Ho bisogno di aiuto: ci ho bisogno.", "giusta": "Ho bisogno di aiuto: ne ho bisogno." },
      { "sbagliata": "C'è due caffè sul tavolo.", "giusta": "Ci sono due caffè sul tavolo." }
    ]
  },
  "curiosi": [
    { "titolo": "Ce la faccio, ce l'ho：ci 变成了动词的一部分", "t": "在 Ce la faccio（我做得到）、Non ce la faccio più（我撑不住了）这样的固定说法里，ci（ce）已经不再指任何地点，它和 la 一起成了动词 farcela 的一部分。Ce l'ho 在口语里是“我有它”的意思：Hai un euro? Sì, ce l'ho. 这类说法没有逐字的翻译，要整句记。" },
    { "titolo": "Me ne vado, non ne posso più：ne 在动词里", "t": "andarsene（走掉）、non poterne più（受不了）、dimenticarsene（忘记）里的 ne 同样已经成了动词的一部分：Me ne vado a casa.（我回家了。）Non ne posso più.（我受不了了。）Me ne sono dimenticato.（我忘了。）前面的 me 是反身代词，随主语变化：te ne vai、se ne va。" },
    { "titolo": "Ci vediamo 里的 ci 不是地点", "t": "Ci vediamo domani! 里的 ci 是“彼此”（我们互相见面），所以才是“明天见”，不是“在那儿见”。意大利语里同一个 ci 有几种身份：地点、a + 事情、互相（彼此），所以先看整个句子，再决定它是哪一种。" },
    { "titolo": "数量的 ne 和过去分词", "t": "ne 表示数量，用复合时态时，过去分词要和被代替的名词一致：Ho mangiato le mele → Ne ho mangiate due. 如果 ne 只是 di + 事情，不表示数量，分词不变：Ne ho parlato.（我谈过这件事。）" }
  ],
  "pragmatica": "日常说话里，ci 和 ne 非常多。Ci penso io 是主动帮忙的话，Che ne pensi? 是请对方说看法，Ne vuoi ancora? 是请客时的问话，Ci vediamo 是告别时说的。对不认识的人或在正式场合，把 tu 换成 Lei 即可：Quanti ne vuole? Che ne pensa?",
  "esercizi": [
    { "k": "scegli", "q": "哪一句里的 ne 代替“数量”？", "opzioni": [
      { "t": "Ne ho tre.", "ok": true, "perche": "ne 代替“其中的”，后面是数量 tre。" },
      { "t": "Ne ho bisogno.", "ok": false, "perche": "这里的 ne 代替 di + 事情，不是数量。" },
      { "t": "Che ne pensi?", "ok": false, "perche": "这里的 ne 代替 di + 这件事，不是数量。" }
    ] },
    { "k": "scegli", "q": "动词 pensare a（想、考虑）要用哪一个小词？", "opzioni": [
      { "t": "ci", "ok": true, "perche": "pensare a 带介词 a，a 对应 ci：Ci penso." },
      { "t": "ne", "ok": false, "perche": "ne 对应 di 或 da，不对应 a。" },
      { "t": "lo", "ok": false, "perche": "lo 是直接宾语代词，pensare 后面有 a，不能直接带宾语。" }
    ] },
    { "k": "buco", "zh": "＿ vado ogni estate, perché mi piace il mare.", "tr": "我每年夏天都去那儿，因为我喜欢海。", "opzioni": [
      { "t": "Ci", "ok": true, "perche": "代替的是地点，用 ci。" },
      { "t": "Ne", "ok": false, "perche": "ne 对应 di / da 或数量，不对应去某个地方。" },
      { "t": "Lo", "ok": false, "perche": "lo 代替人或事物（直接宾语），不代替地点。" }
    ] },
    { "k": "buco", "zh": "Hai delle uova? Sì, ＿ ho sei.", "tr": "你有鸡蛋吗？有，我有六个。", "opzioni": [
      { "t": "ne", "ok": true, "perche": "已经提到“uova”，现在只说数量，用 ne。" },
      { "t": "ci", "ok": false, "perche": "ci 代替地点或 a + 事情，不代替数量。" },
      { "t": "le", "ok": false, "perche": "le 是“它们”（整体）；这里说“其中的六个”，要用 ne。" }
    ] },
    { "k": "buco", "zh": "In classe ＿ trenta studenti.", "tr": "班里有三十个学生。", "opzioni": [
      { "t": "ci sono", "ok": true, "perche": "“有”（存在）用 c'è / ci sono，studenti 是复数，所以用 ci sono。" },
      { "t": "c'è", "ok": false, "perche": "c'è 用于单数，trenta studenti 是复数。" },
      { "t": "ci è", "ok": false, "perche": "不存在 ci è 这个说法，“有”要说 c'è 或 ci sono。" }
    ] },
    { "k": "ordine", "t": "domani ci vado con Marco", "tr": "明天我和马可一起去那儿。" },
    { "k": "ordine", "t": "ce ne sono ancora tre in frigo", "alt": ["in frigo ce ne sono ancora tre"], "tr": "冰箱里还有三个。" },
    { "k": "scrivi", "q": "朋友问：“Quanti fratelli hai?” 用意大利语回答：“我有两个。”", "a": "Ne ho due.", "accetta": ["Ne ho due", "Io ne ho due.", "Ne ho 2."], "perche": "说数量时，已经提到的东西由 ne 代替，句子要写成 Ne ho due。" },
    { "k": "scrivi", "q": "用意大利语问对方：“你去过那儿吗？”（那儿是前面说过的罗马，用 tu）", "a": "Ci sei stato?", "accetta": ["Ci sei stata?", "Ci sei mai stato?", "Ci sei mai stata?", "Ci sei già stato?"], "perche": "essere stato a Roma 的地点由 ci 代替，ci 放在 sei stato 前面。" },
    { "k": "trasforma", "consegna": "用 ne 代替“panini”，改写这句话。", "base": "Prendo due panini.", "accetta": ["Ne prendo due.", "Io ne prendo due.", "Ne prendo due"], "rifiutate": [
      { "t": "Prendo ne due.", "perche": "ne 要放在变位动词前面。" },
      { "t": "Ci prendo due.", "perche": "ci 代替地点或 a + 事情，不代替数量。" }
    ], "perche": "panini 已经提到，只说数量，所以变成 Ne prendo due。" },
    { "k": "trasforma", "consegna": "用 ci 代替“a Napoli”，改写这句话。", "base": "Vado a Napoli domani.", "accetta": ["Ci vado domani.", "Domani ci vado.", "Io ci vado domani.", "Domani io ci vado."], "rifiutate": [
      { "t": "Vado ci domani.", "perche": "ci 放在变位动词前面，不在动词后面。" },
      { "t": "Ne vado domani.", "perche": "去某个地方，地点用 ci；ne 对应 di / da 或数量。" }
    ], "perche": "a Napoli 是地点，由 ci 代替，位置在动词 vado 前面。" },
    { "k": "trasforma", "consegna": "用 ne 代替“di questo problema”，改写这句话。", "base": "Parlo spesso di questo problema.", "accetta": ["Ne parlo spesso.", "Io ne parlo spesso.", "Spesso ne parlo."], "rifiutate": [
      { "t": "Ci parlo spesso.", "perche": "parlare di 对应 ne；用 ci 就不再是“谈论这个问题”。" }
    ], "perche": "parlare di qualcosa 带 di，由 ne 代替，放在 parlo 前面。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Vai in palestra stasera?" },
      { "chi": "B", "t": "No, non ＿ vado: sono stanco.", "buco": true }
    ], "opzioni": [
      { "t": "ci", "ok": true, "perche": "in palestra 是地点，由 ci 代替；否定词 non 在 ci 前面。" },
      { "t": "ne", "ok": false, "perche": "ne 对应 di / da 或数量，不代替“去健身房”。" },
      { "t": "lo", "ok": false, "perche": "lo 代替人或事物，不代替地点。" }
    ] }
  ],
  "capaci": [
    "你会用 ci 代替已经说过的地点和 a + 事情，比如 Ci vado domani、Ci penso io。",
    "你会用 ne 回答数量问题和 di + 事情，比如 Ne ho due、Ne parliamo domani、Che ne pensi?",
    "你会说 c'è / ci sono、ci vuole / ci vogliono、ce ne sono 这些最常用的组合。",
    "你会先看动词后面本来的介词，再在 ci 和 ne 之间选择，并把它放在变位动词前面。"
  ],
  "glosse": {
    "Sei mai stato a Roma": "你去过罗马吗？",
    "Ne ho mangiate due": "我吃了两个。"
  },
  "fonti": [
    "Elon.io, Italian grammar, «Ci vs Ne: Choosing Between Italian's Two Particles» (aperta e letta: scelta secondo la preposizione, ne partitivo, posizione, ce ne, accordo del participio)",
    "Simone Pols, «Clitics in Italian: how to use Ci and Ne» (aperta e letta: ci di luogo, ci con verbi che reggono a, ne con di e da, posizione con l'infinito)",
    "Tatoeba (ita.tsv), interrogato con ricerche su «Ci vado», «Ne ho», «Ce ne sono», «Ci penso», «Ne sono sicuro», «Che ne pensi», «Ci vuole», «Ci metto», «Ce la faccio», «Me ne vado», «Non ne posso più», «Ci vediamo»"
  ]
};
