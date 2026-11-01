/* Lezione 5 · L'accordo di genere e numero (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["accordo"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Ho un gatto nero.", "tr": "我有一只黑色的公猫。" },
      { "t": "Ho una gatta nera.", "tr": "我有一只黑色的母猫。" },
      { "t": "Ho due gatti neri.", "tr": "我有两只黑色的公猫。" },
      { "t": "Ho due gatte nere.", "tr": "我有两只黑色的母猫。" }
    ],
    "domanda": "比较这四句话：哪些词在变？是什么决定了它们怎么变？想一想：汉语说“黑猫”“两只黑猫”，“黑”变不变？",
    "risposta": "变的是 **un / una**、**nero / nera / neri / nere**，还有名词本身 gatto / gatta / gatti / gatte。决定变化的是**名词**：名词是阳性还是阴性、是单数还是复数，跟着它的词就要变成同样的“性”和“数”。汉语的“黑”永远是“黑”，意大利语的 nero 要看名词是谁。"
  },
  "regola": {
    "enunciato": "意大利语的**名词决定一切**：每个名词有固定的性（阳性或阴性）和数（单数或复数），所有跟在它身边、说明它的词——冠词、物主词、形容词、过去分词——都要变成和它**相同的性和数**。这叫“一致”（concordanza）。先找到名词，再让身边的每个词向它看齐。",
    "schema": ["冠词", "物主词", "名词（它说了算）", "形容词", "过去分词"],
    "punti": [
      { "ok": true, "t": "**-o 类形容词有四种形式**：nuov**o**（阳单）、nuov**a**（阴单）、nuov**i**（阳复）、nuov**e**（阴复）：un libro nuovo, una casa nuova, due libri nuovi, due case nuove。" },
      { "ok": true, "t": "**-e 类形容词只有两种形式**：单数 -e（阴阳同形），复数 -i（阴阳同形）：un uomo felice, una donna felice, due uomini felici, due donne felici。" },
      { "ok": true, "t": "**有些形容词永远不变**，主要是颜色词（来自外语或来自名词）：blu, rosa, viola, beige：una borsa blu, due borse blu, una camicia rosa, due camicie rosa。" },
      { "ok": true, "t": "**一个形容词说明几个名词时**：如果名词性别不同，形容词用阳性复数。Luca e Sara sono stanchi。只有全部是阴性时才用阴性复数：Sara e Anna sono stanche。" },
      { "ok": true, "t": "**用 essere 的时态，过去分词要和主语一致**：Maria è arrivata, i ragazzi sono partiti, le amiche sono uscite。用 avere 的时态，过去分词一般不变：Maria ha mangiato（宾语代词 lo, la, li, le 放在前面时例外：le ho comprate）。" },
      { "ok": true, "t": "**形容词一般放在名词后面**：un film interessante, una ragazza italiana。常用的短形容词（bello, buono, grande, piccolo, vecchio, nuovo, giovane, bravo, brutto）常放在名词前面。" },
      { "ok": false, "t": "**不能只改名词，不改身边的词**：不说 una casa nuovo, due libri nuova, la mia amica è italiano。每个说明名词的词都要一起变。" }
    ]
  },
  "logica": [
    "汉语的形容词不变：一本好书、两本好书、一个好人、很多好人，“好”都是同一个字，“性”和“数”也不是语法必须表达的东西。意大利语不同：每个名词都带着一个看不见的“标签”——阳性或阴性，单数或复数——这个标签要在整个名词短语里重复出现。你可以把它想成多米诺骨牌：名词倒下，身边的每个词都跟着倒向同一个方向。",
    "“性”不是生物的性别。casa（房子）、porta（门）是阴性，libro（书）、tavolo（桌子）是阳性，这是名词的性质，要和名词一起记住。重复标签看起来多余，其实有用：句子里每个词都在提醒听的人“我们在说哪一个名词”，所以即使说得很快，也不容易听错。",
    "对说汉语的人，最好的办法是养成一个习惯：每说一个形容词之前，先问自己“它说明的名词是谁？”。找到名词，看它的结尾（-o、-a、-e）和数，再决定形容词的结尾。"
  ],
  "mappa": {
    "tipo": "catena",
    "frasi": [
      { "parole": [
        { "t": "le", "g": "f", "n": "p" },
        { "t": "mie", "g": "f", "n": "p" },
        { "t": "amiche", "g": "f", "n": "p", "nome": true },
        { "t": "italiane", "g": "f", "n": "p" },
        { "t": "sono", "g": "f", "n": "p" },
        { "t": "simpatiche", "g": "f", "n": "p" }
      ] },
      { "parole": [
        { "t": "i", "g": "m", "n": "p" },
        { "t": "miei", "g": "m", "n": "p" },
        { "t": "amici", "g": "m", "n": "p", "nome": true },
        { "t": "sono", "g": "m", "n": "p" },
        { "t": "arrivati", "g": "m", "n": "p" },
        { "t": "stanchi", "g": "m", "n": "p" }
      ] },
      { "parole": [
        { "t": "una", "g": "f", "n": "s" },
        { "t": "bella", "g": "f", "n": "s" },
        { "t": "giacca", "g": "f", "n": "s", "nome": true },
        { "t": "blu", "g": "f", "n": "s" }
      ] }
    ]
  },
  "esempi": [
    { "gruppo": "Aggettivi in -o: quattro forme", "items": [
      { "t": "Mia sorella ha un gatto nero.", "tr": "我姐姐（妹妹）有一只黑色的公猫。", "nota": "gatto 是阳性单数，所以 nero 也是阳性单数。" },
      { "t": "Ho una gonna nera e due maglioni neri.", "tr": "我有一条黑裙子和两件黑毛衣。", "nota": "gonna 是阴性，maglioni 是阳性复数：nera 和 neri 各跟各的名词。" },
      { "t": "Le tue scarpe nuove sono molto comode.", "tr": "你的新鞋子非常舒服。", "nota": "scarpe 是阴性复数：冠词 le、物主词 tue、形容词 nuove、comode 全是阴性复数。" }
    ] },
    { "gruppo": "Aggettivi in -e e aggettivi invariabili", "items": [
      { "t": "È un film interessante.", "tr": "这是一部有意思的电影。", "nota": "-e 类形容词，阳性单数。" },
      { "t": "Sono due storie interessanti.", "tr": "这是两个有意思的故事。", "nota": "storie 是阴性复数，interessante 变成 interessanti，阴阳同形。" },
      { "t": "Marta ha una giacca blu e due camicie rosa.", "tr": "玛尔塔有一件蓝夹克和两件粉衬衫。", "nota": "blu 和 rosa 不变，无论单数复数、阴性阳性。" }
    ] },
    { "gruppo": "一个形容词，几个名词", "items": [
      { "t": "Luca e Sara sono stanchi.", "tr": "卢卡和萨拉很累。", "nota": "一男一女：用阳性复数。" },
      { "t": "La pasta e la pizza sono pronte.", "tr": "意面和比萨好了。", "nota": "两个名词都是阴性，所以用阴性复数 pronte。" }
    ] },
    { "gruppo": "国籍和颜色", "items": [
      { "t": "I miei vicini sono giapponesi.", "tr": "我的邻居是日本人。", "nota": "giapponese 属于 -e 类，复数 giapponesi。国籍形容词在意大利语里用小写字母。" },
      { "t": "Alice è una studentessa francese.", "tr": "爱丽丝是法国学生。", "nota": "francese 阴阳同形，studentessa 是阴性名词。" },
      { "t": "Sul tavolo ci sono due tazze verdi.", "tr": "桌子上有两个绿杯子。", "nota": "verde 是 -e 类，复数 verdi，和 tazze 的性无关。" }
    ] },
    { "gruppo": "形容词的位置和意思", "items": [
      { "t": "Giorgio è un vecchio amico di mio padre.", "tr": "乔治是我爸爸的老朋友。", "nota": "vecchio 放在前面：认识很久，不一定年纪大。" },
      { "t": "Mio nonno ha un cane vecchio e un gatto giovane.", "tr": "我爷爷有一条老狗和一只年轻的猫。", "nota": "放在后面：真的是年纪大、年纪小。" },
      { "t": "Ha avuto una buona idea.", "tr": "他（她）有了一个好主意。", "nota": "buona 在前面，和 una 一样是阴性单数。" },
      { "t": "Pavese è un grande scrittore.", "tr": "帕韦泽是一位伟大的作家。", "nota": "grande 在名词前，常表示“伟大的、重要的”；un tavolo grande 则是“一张大桌子”。" }
    ] },
    { "gruppo": "过去分词和 essere", "items": [
      { "t": "Le mie amiche sono arrivate tardi.", "tr": "我的朋友们（女）来晚了。", "nota": "主语是阴性复数，所以 arrivate 也是阴性复数。" },
      { "t": "I bambini sono già usciti.", "tr": "孩子们已经出去了。", "nota": "阳性复数：usciti。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我有一个难题。”哪一句是对的？", "opzioni": [
      { "t": "Ho un problema difficile.", "ok": true, "perche": "problema 虽然以 -a 结尾，但它是阳性名词，所以用 un 和 difficile。" },
      { "t": "Ho una problema difficile.", "ok": false, "perche": "不能只看结尾 -a：problema 是阳性，要用 un，不能用 una。" },
      { "t": "Ho un problema difficilo.", "ok": false, "perche": "difficile 属于 -e 类，没有 -o 结尾的形式。" }
    ] },
    { "q": "“两个友好的女孩”怎么说？", "opzioni": [
      { "t": "due ragazze simpatiche", "ok": true, "perche": "ragazze 是阴性复数，simpatica 变成阴性复数 simpatiche。" },
      { "t": "due ragazze simpatici", "ok": false, "perche": "simpatici 是阳性复数，和 ragazze 不一致。" },
      { "t": "due ragazze simpatica", "ok": false, "perche": "simpatica 是单数，名词是复数，形容词也要用复数。" }
    ] },
    { "q": "卢卡（男）和朱莉娅（女）都累了。怎么说？", "opzioni": [
      { "t": "Luca e Giulia sono stanchi.", "ok": true, "perche": "一男一女，形容词用阳性复数 stanchi。" },
      { "t": "Luca e Giulia sono stanche.", "ok": false, "perche": "stanche 只在所有人都是女性时使用。" },
      { "t": "Luca e Giulia sono stanco.", "ok": false, "perche": "主语是两个人，形容词要用复数，stanco 是单数。" }
    ] },
    { "q": "“两个蓝色的包”怎么说？", "opzioni": [
      { "t": "due borse blu", "ok": true, "perche": "blu 是不变的形容词，复数也还是 blu。" },
      { "t": "due borse blue", "ok": false, "perche": "意大利语没有 blue 这个形式，blu 的结尾不变。" },
      { "t": "due borse blui", "ok": false, "perche": "blu 不加 -i：它是不变的颜色词，不按 -o 或 -e 类变化。" }
    ] },
    { "q": "你想说“马里奥是认识很久的老朋友”（不是说他年纪大）。哪一句？", "opzioni": [
      { "t": "Mario è un vecchio amico.", "ok": true, "perche": "vecchio 放在名词前面，表示“认识很久的”。" },
      { "t": "Mario è un amico vecchio.", "ok": false, "perche": "vecchio 放在后面，意思是这位朋友年纪大。" }
    ] },
    { "q": "“日本女学生们”怎么说？", "opzioni": [
      { "t": "le studentesse giapponesi", "ok": true, "perche": "giapponese 是 -e 类，复数是 giapponesi，阴阳同形。" },
      { "t": "le studentesse giapponese", "ok": false, "perche": "studentesse 是复数，形容词要用复数 giapponesi。" },
      { "t": "le studentesse giapponesse", "ok": false, "perche": "giapponesse 不是意大利语的形式，复数只是把 -e 换成 -i。" }
    ] },
    { "q": "“多好的咖啡！”哪一句是对的？", "opzioni": [
      { "t": "Che buon caffè!", "ok": true, "perche": "buono 放在阳性单数名词前，且名词以普通辅音开头，用短形式 buon，和 un 的规律相同。" },
      { "t": "Che buono caffè!", "ok": false, "perche": "buono 只出现在 s+辅音、z 等开头的名词前，如 un buono studente；caffè 以 c 开头，用 buon。" },
      { "t": "Che buona caffè!", "ok": false, "perche": "caffè 是阳性名词，不能用阴性形式 buona。" }
    ] },
    { "q": "“我的朋友们（都是女生）昨天到了。”哪一句？", "opzioni": [
      { "t": "Le mie amiche sono arrivate ieri.", "ok": true, "perche": "用 essere，过去分词和主语一致：阴性复数 arrivate。" },
      { "t": "Le mie amiche sono arrivati ieri.", "ok": false, "perche": "arrivati 是阳性复数，和阴性的 amiche 不一致。" },
      { "t": "Le mie amiche sono arrivato ieri.", "ok": false, "perche": "arrivato 是阳性单数，主语是复数，也是阴性。" }
    ] },
    { "q": "“多漂亮的花！”哪一句是对的？", "opzioni": [
      { "t": "Che bei fiori!", "ok": true, "perche": "bello 在阳性复数名词前像冠词 i，变成 bei：i fiori, bei fiori。" },
      { "t": "Che belli fiori!", "ok": false, "perche": "belli 放在 fiori 前不对：在名词前，bello 要缩短成 bei。" },
      { "t": "Che bel fiori!", "ok": false, "perche": "bel 是单数形式（un bel fiore），fiori 是复数。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Al mercato della frutta",
    "righe": [
      { "chi": "A", "t": "Buongiorno, vorrei due mele rosse e un chilo di pere mature. Sono fresche?", "tr": "您好，我想要两个红苹果和一公斤熟梨。新鲜吗？" },
      { "chi": "B", "t": "Sì, le pere sono arrivate stamattina e sono buonissime.", "tr": "新鲜，梨今天早上刚到，非常好吃。" },
      { "chi": "A", "t": "Bene. E quelle arance? Sono dolci?", "tr": "好。那些橙子呢？甜吗？" },
      { "chi": "B", "t": "Molto dolci. Sono arance siciliane.", "tr": "很甜。是西西里的橙子。" },
      { "chi": "A", "t": "Allora prendo anche mezzo chilo di arance.", "tr": "那我也要半公斤橙子。" },
      { "chi": "B", "t": "Ecco, signora. Altro?", "tr": "给您，女士。还要别的吗？" }
    ],
    "esercizi": [
      { "q": "B 说梨是今天早上到的。哪一句和对话一致？", "opzioni": [
        { "t": "Le pere sono arrivate stamattina.", "ok": true, "perche": "pere 是阴性复数，过去分词也用阴性复数 arrivate。" },
        { "t": "Le pere sono arrivati stamattina.", "ok": false, "perche": "arrivati 是阳性复数，pere 是阴性。" }
      ] },
      { "q": "B 说这些橙子是西西里的。哪一句？", "opzioni": [
        { "t": "Sono arance siciliane.", "ok": true, "perche": "arance 是阴性复数，siciliano 变成 siciliane。" },
        { "t": "Sono arance siciliani.", "ok": false, "perche": "siciliani 是阳性复数，和阴性的 arance 不一致。" },
        { "t": "Sono arance siciliana.", "ok": false, "perche": "siciliana 是单数，arance 是复数。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语里形容词永远不变，所以学生常常只改名词，不改形容词和冠词：una casa nuovo, due case nuovo, la mia amica è italiano。另一个常见错误是只看名词结尾：因为 problema 以 -a 结尾，就说 una problema。",
    "perche": "汉语没有“性”和“数”的变化，大脑会把形容词当成一个固定的词来背。意大利语里，形容词不是固定的，每次都要和名词重新对齐。而且名词的性要和名词一起记，不能只看结尾：problema, programma, sistema 是阳性，mano 是阴性。",
    "esci": "说形容词之前先问：“名词是谁？”然后检查三个地方：冠词、形容词、过去分词，是不是和名词的性、数一样。记名词时连冠词一起记：il problema, la mano, la casa。",
    "esempi": [
      { "sbagliata": "una problema difficile", "giusta": "un problema difficile" },
      { "sbagliata": "La mia amica è italiano.", "giusta": "La mia amica è italiana." },
      { "sbagliata": "Ho due case nuovo.", "giusta": "Ho due case nuove." },
      { "sbagliata": "Le ragazze sono simpatico.", "giusta": "Le ragazze sono simpatiche." }
    ]
  },
  "curiosi": [
    { "titolo": "从拉丁语的三个性到两个性", "t": "拉丁语有阳性、阴性、中性三个“性”。意大利语只剩两个，中性的名词大多变成了阳性。但还留着一些痕迹：l'uovo（单数，阳性）的复数是 le uova（阴性），il braccio 的复数是 le braccia。这些名词单数用阳性的词，复数却要配阴性的词：un uovo fresco, ma due uova fresche。" },
    { "titolo": "为什么混合的群体用阳性", "t": "在意大利语里，阳性复数是“不特别标记”的形式：一群人里有男有女时，用阳性复数：i ragazzi, gli amici, i genitori。近年来，职业名称的阴性形式也越来越多：la ministra, l'avvocata, la sindaca 在日常和新闻里都很常见。" },
    { "titolo": "bello, quello 和冠词是一家人", "t": "bello 放在名词前面时，变化和定冠词几乎一样：il libro → un bel libro, i libri → bei libri, lo studente → un bello studente, l'amico → un bell'amico, gli amici → begli amici。quello 也一样：quel libro, quei libri, quello studente, quegli amici。把冠词学好，这两个词就跟着学会了。" }
  ],
  "pragmatica": "日常说话和写作中，让形容词和名词一致是基本要求：说错性和数，对方依然能听懂，但会觉得你的意大利语“有外国口音”。口语中不用担心，说得慢一点，先找到名词再说形容词。形容词放在名词前面，语气更主观、更有感情（una bella giornata）；放在后面，更客观、更具体（una giornata bella e calda）。",
  "esercizi": [
    { "k": "scegli", "q": "哪一句话里的形容词用对了？", "opzioni": [
      { "t": "Ho visto due film interessanti.", "ok": true, "perche": "film 是阳性复数，interessante 是 -e 类，复数 interessanti。" },
      { "t": "Ho visto due film interessante.", "ok": false, "perche": "名词是复数，形容词不能用单数形式 interessante。" },
      { "t": "Ho visto due film interessanta.", "ok": false, "perche": "interessante 是 -e 类形容词，没有 -a 结尾的形式。" }
    ] },
    { "k": "buco", "zh": "Mia sorella è molto ＿.", "tr": "我姐姐（妹妹）个子很高。", "opzioni": [
      { "t": "alta", "ok": true, "perche": "sorella 是阴性单数，所以用阴性单数形式 alta。" },
      { "t": "alto", "ok": false, "perche": "alto 是阳性单数，sorella 是阴性。" },
      { "t": "alti", "ok": false, "perche": "alti 是阳性复数，主语是一个人，也是阴性。" }
    ] },
    { "k": "buco", "zh": "Le scarpe ＿ sono comode.", "tr": "新鞋子很舒服。", "opzioni": [
      { "t": "nuove", "ok": true, "perche": "scarpe 是阴性复数，所以用阴性复数 nuove。" },
      { "t": "nuovi", "ok": false, "perche": "nuovi 是阳性复数，scarpe 是阴性。" },
      { "t": "nuova", "ok": false, "perche": "nuova 是单数，scarpe 是复数。" }
    ] },
    { "k": "buco", "zh": "Anna e Paola sono ＿ ieri sera.", "tr": "安娜和宝拉昨天晚上走了。", "opzioni": [
      { "t": "partite", "ok": true, "perche": "两个人都是女性，用 essere，过去分词用阴性复数 partite。" },
      { "t": "partiti", "ok": false, "perche": "partiti 是阳性复数，只在群体里有男性时才用。" },
      { "t": "partito", "ok": false, "perche": "partito 是阳性单数，主语是两个人，是阴性。" }
    ] },
    { "k": "ordine", "t": "la mia amica italiana è simpatica", "tr": "我的意大利朋友（女）很友好。" },
    { "k": "ordine", "t": "ho comprato due borse blu", "tr": "我买了两个蓝色的包。" },
    { "k": "trasforma", "base": "Il ragazzo italiano è alto.", "consegna": "把主语改成“那些女孩”（le ragazze），整句话跟着变。", "accetta": ["Le ragazze italiane sono alte."], "rifiutate": [
      { "t": "Le ragazze italiani sono alti.", "perche": "italiani 和 alti 是阳性复数，ragazze 是阴性：形容词要用 italiane 和 alte。" }
    ], "perche": "ragazze 是阴性复数，所以冠词 le、形容词 italiane 和 alte、动词 sono 都要一起变成复数。" },
    { "k": "trasforma", "base": "Ho visto un bel film.", "consegna": "把 un bel film 改成复数，用 dei（几部电影）。", "accetta": ["Ho visto dei bei film.", "Ho visto bei film."], "rifiutate": [
      { "t": "Ho visto dei belli film.", "perche": "bello 放在名词前时像冠词一样变化：复数是 bei，不是 belli。" }
    ], "perche": "un bel film 的复数是 dei bei film：un → dei，bel → bei，film 不变。" },
    { "k": "scrivi", "q": "用意大利语写：“我的新家很大。”（casa 用阴性，nuovo 和 grande 说明 casa）", "a": "La mia casa nuova è grande.", "accetta": ["La mia nuova casa è grande.", "La mia casa nuova è molto grande.", "La mia nuova casa è molto grande."], "perche": "casa 是阴性单数：la mia casa nuova，grande 是 -e 类，阴性单数不变。nuova 放在名词前后都可以。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Ti piacciono queste scarpe?" },
      { "chi": "B", "t": "Sì, sono molto ＿.", "buco": true }
    ], "opzioni": [
      { "t": "comode", "ok": true, "perche": "scarpe 是阴性复数，所以用阴性复数 comode。" },
      { "t": "comodi", "ok": false, "perche": "comodi 是阳性复数，scarpe 是阴性。" },
      { "t": "comodo", "ok": false, "perche": "comodo 是阳性单数，主语是复数，而且是阴性。" }
    ] },
    { "k": "scegli", "q": "下面哪个形容词的形式永远不变？", "opzioni": [
      { "t": "viola", "ok": true, "perche": "viola（紫色）是不变的颜色词：una gonna viola, due gonne viola。" },
      { "t": "rosso", "ok": false, "perche": "rosso 是 -o 类，有 rosso, rossa, rossi, rosse 四种形式。" },
      { "t": "verde", "ok": false, "perche": "verde 是 -e 类，单数 verde，复数 verdi，会变。" }
    ] },
    { "k": "scegli", "q": "un povero uomo 是什么意思？（povero 放在名词前面）", "opzioni": [
      { "t": "一个可怜的人", "ok": true, "perche": "povero 放在前面，表示同情：可怜的、不幸的。" },
      { "t": "一个没钱的人", "ok": false, "perche": "“没钱的”要说 un uomo povero：povero 放在名词后面，意思是穷。" },
      { "t": "一个很老的人", "ok": false, "perche": "povero 不表示年龄；“老”要用 vecchio 或 anziano。" }
    ] }
  ],
  "capaci": [
    "你会先找出名词，再让冠词、形容词和过去分词与它保持相同的性和数。",
    "你会用 -o、-e 两类形容词，以及 blu、rosa、viola 这类不变的形容词，正确说出单数和复数。",
    "你会选择形容词的位置，并区分 un vecchio amico 和 un amico vecchio 这样的意思变化。",
    "你会避免“una problema”“la mia amica è italiano”这类汉语母语者常见的错误。"
  ],
  "fonti": [
    "D'accordo, Intermediate Italian (LibreTexts), capitolo sull'accordo del nome, sezione Aggettivi (classi in -o ed -e, colori invariabili, accordo con nomi di genere diverso, aggettivi prima del nome)",
    "Tatoeba, corpus italiano locale (frasi con una casa nuova, un vecchio amico, bei fiori, le scarpe nuove) per la naturalezza degli esempi"
  ]
};
