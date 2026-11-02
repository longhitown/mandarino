/* Lezione 12 · L'imperfetto e il passato prossimo (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["imperfetto"] = {
  "v": 1,
  "svolta": true,
  "scopri": {
    "frasi": [
      { "t": "Da bambino giocavo ogni giorno in cortile.", "tr": "小时候我每天都在院子里玩。" },
      { "t": "Ieri sera ho giocato a carte con mio nonno.", "tr": "昨晚我和爷爷打了牌。" },
      { "t": "Mentre giocavo a carte, è squillato il telefono.", "tr": "我正打着牌，电话响了。" },
      { "t": "Era una sera tranquilla e fuori pioveva.", "tr": "那是个安静的晚上，外面在下雨。" }
    ],
    "domanda": "三个句子里都有“玩、打牌”的动作。哪一句把它说成一件已经完成的事？哪一句说的是习惯，哪一句说的是“背景”？动词的形式有什么不同？",
    "risposta": "第二句 **ho giocato** 是一件完成的事：昨晚，打完了。第一句 **giocavo** 是小时候的习惯；第三句 **giocavo** 是背景：电话响的时候，我正在打牌。第四句 **era、pioveva** 是在描写当时的情景。所以：**完成的事**用近过去时（ho giocato），**习惯、背景、描写**用未完成过去时（giocavo、era、pioveva）。"
  },
  "regola": {
    "enunciato": "说过去的事，意大利语要选一个“镜头”。**近过去时**（passato prossimo）把事情当作一件**完成了的事**来讲，有开始也有结束：ho mangiato、sono partito。**未完成过去时**（imperfetto）把事情当作过去的**一个场景**，从里面看，不说什么时候开始、什么时候结束：mangiavo、ero、avevo。",
    "schema": ["完成的事", "近过去时", "ho mangiato", "｜", "背景·习惯·描写", "未完成过去时", "mangiavo"],
    "punti": [
      { "ok": true, "t": "**习惯**：过去反复发生的事，用未完成过去时。常见的词：sempre（总是）、ogni giorno（每天）、di solito（通常）、da bambino（小时候）。Da piccolo andavo al mare ogni estate." },
      { "ok": true, "t": "**描写**：人、地方、天气、年龄、时间，用未完成过去时。Avevo dieci anni. Erano le otto. Faceva freddo." },
      { "ok": true, "t": "**正在进行的事（背景）**：一件事正在进行时，另一件事发生了。背景用未完成过去时，突然发生的事用近过去时。Mentre mangiavo, è arrivato Marco." },
      { "ok": true, "t": "**完成的事**：一次性的事，或者说清楚范围的事，用近过去时。Ieri ho comprato una bicicletta. Ho studiato tre ore.（“三个小时”划定了范围，所以是完成的事。）" },
      { "ok": true, "t": "**构成**：去掉 -re，加 -vo、-vi、-va、-vamo、-vate、-vano：parlavo、vendevo、dormivo。不规则的主要有 essere（ero、eri、era、eravamo、eravate、erano）、fare（facevo）、dire（dicevo）、bere（bevevo）。" },
      { "ok": false, "t": "**不要**把汉语的“了”直接当成近过去时：“昨天我很累”没有“了”，意大利语要说 Ieri ero stanco；“我要走了”也不是过去的事。" }
    ]
  },
  "logica": [
    "汉语的动词不变形，时间靠“昨天、以前”这样的词来表示；“了、过、着、在”表示的是**体**（aspetto）：事情是完成了、经历过、持续着，还是正在进行。意大利语的动词同时带着**时间**和**体**，所以说话人在选过去时的时候，其实是在选“怎么看这件事”：像**照片**（近过去时：整件事，停在那里），还是像**录像**（未完成过去时：场景在流动）。",
    "可以用汉语做一座桥，但只是大致的对应：**了**（完成）和**过**（经历）多半对应近过去时，如“我吃了饭”ho mangiato、“我去过罗马”sono stato a Roma；**在、正在、着**和“以前常常”多半对应未完成过去时，如“我正在吃饭”mangiavo、“以前我常常去”andavo spesso。但这座桥不是一一对应的：“昨天我很累”和“小时候他很瘦”没有“了”，意大利语都用未完成过去时（ero stanco、era magro）。",
    "为什么会这样？状态、描写、习惯没有一个清楚的“终点”，所以适合用“录像”；而 arrivare、comprare、cadere 这样的动作发生在一个时刻，适合用“照片”。同一个动词也可以换镜头：Ieri ho studiato tre ore（有范围，照片）；Studiavo tutte le sere（习惯，录像）。"
  ],
  "mappa": {
    "tipo": "timeline",
    "righe": [
      { "etichetta": "**sfondo**：Mentre mangiavo…（未完成过去时）", "tipo": "sfondo", "da": 10, "a": 90 },
      { "etichetta": "**事件**：…è arrivato Marco.（近过去时）", "tipo": "evento", "da": 55 },
      { "etichetta": "**习惯**：Ogni domenica andavo dai nonni.（未完成过去时）", "tipo": "abitudine" },
      { "etichetta": "**描写**：Pioveva e faceva freddo.（未完成过去时）", "tipo": "sfondo", "da": 5, "a": 95 },
      { "etichetta": "**事件**：Ho aperto la porta.（近过去时）", "tipo": "evento", "da": 40 }
    ],
    "nota": "长条是“背景”，闪电是一个突然发生的“事件”，圆点是反复发生的“习惯”。背景和习惯用 -vo/-va 这一类形式，事件用 ho / sono + 过去分词。"
  },
  "esempi": [
    { "gruppo": "习惯：反复发生的事", "items": [
      { "t": "Da piccolo andavo al mare ogni estate.", "tr": "小时候我每年夏天都去海边。", "nota": "da piccolo 和 ogni estate 都在说“反复”。" },
      { "t": "Mia nonna preparava la pasta tutte le domeniche.", "tr": "奶奶每个星期天都做面食。" },
      { "t": "Di solito mi alzavo alle sei e facevo colazione al bar.", "tr": "我通常六点起床，在咖啡馆吃早餐。" }
    ] },
    { "gruppo": "描写：年龄、时间、天气、地方", "items": [
      { "t": "Avevo dieci anni e abitavo a Napoli.", "tr": "我那时十岁，住在那不勒斯。", "nota": "说年龄用 avere，过去的年龄用 avevo。" },
      { "t": "Erano le otto di sera e c'era la nebbia.", "tr": "那时是晚上八点，有雾。", "nota": "时间用复数 erano le…；l'una、mezzogiorno、mezzanotte 用单数 era。" },
      { "t": "La casa era piccola, ma aveva un bel giardino.", "tr": "那房子不大，但有一个漂亮的花园。" }
    ] },
    { "gruppo": "背景加事件：Mentre mangiavo, è arrivato Marco", "items": [
      { "t": "Mentre mangiavo, è arrivato Marco.", "tr": "我正吃饭的时候，马可来了。", "nota": "mangiavo 是背景，è arrivato 是突然发生的事。" },
      { "t": "Camminavo in centro quando ho visto Luca.", "tr": "我在市中心走着，看见了卢卡。" },
      { "t": "Quando sono entrato, tutti ridevano.", "tr": "我进去的时候，大家都在笑。", "nota": "进门是一个时刻（事件），笑是当时的场面（背景）。" }
    ] },
    { "gruppo": "完成的事：一次性的，或有范围的", "items": [
      { "t": "Ieri ho studiato tre ore.", "tr": "昨天我学了三个小时。", "nota": "“三个小时”是一个范围，所以是完成的事。" },
      { "t": "Ieri ho comprato una bicicletta.", "tr": "昨天我买了一辆自行车。" },
      { "t": "Sabato scorso siamo andati al cinema.", "tr": "上个星期六我们去了电影院。" },
      { "t": "All'improvviso è saltata la luce.", "tr": "突然停电了。" }
    ] },
    { "gruppo": "意思会变的动词：sapere 和 conoscere", "items": [
      { "t": "Sapevo che Anna abitava a Roma.", "tr": "我（当时）知道安娜住在罗马。", "nota": "sapevo：知道，是一个已有的状态。" },
      { "t": "Ho saputo ieri che Anna si è trasferita.", "tr": "我昨天才得知安娜搬家了。", "nota": "ho saputo：在某个时刻得知，是一个事件。" },
      { "t": "Conoscevo già Luca.", "tr": "我早就认识卢卡。" },
      { "t": "Ho conosciuto Luca a una festa.", "tr": "我在一个聚会上认识了卢卡。", "nota": "ho conosciuto：第一次见面，是一个事件。" }
    ] }
  ],
  "contrasti": [
    { "q": "“小时候我每天踢足球。”（说的是习惯）哪一句对？", "opzioni": [
      { "t": "Da bambino giocavo a calcio ogni giorno.", "ok": true, "perche": "da bambino 和 ogni giorno 说明这是反复的习惯，用未完成过去时。" },
      { "t": "Da bambino ho giocato a calcio ogni giorno.", "ok": false, "perche": "近过去时把它当作一件完成的事，听起来像一次有范围的经历，不是小时候的日常习惯。" }
    ] },
    { "q": "“昨晚我和爷爷打了牌。”（一件完成的事）哪一句对？", "opzioni": [
      { "t": "Ieri sera ho giocato a carte con mio nonno.", "ok": true, "perche": "ieri sera 划定了时间，整件事已经结束，用近过去时。" },
      { "t": "Ieri sera giocavo a carte con mio nonno.", "ok": false, "perche": "未完成过去时像一个场景，听的人会等着你说“然后发生了什么”，而不是把它当作讲完的事。" }
    ] },
    { "q": "“我做饭的时候，门铃响了。”哪一句对？", "opzioni": [
      { "t": "Mentre cucinavo, è suonato il campanello.", "ok": true, "perche": "做饭是背景（未完成过去时），门铃响是突然的事件（近过去时）。" },
      { "t": "Mentre ho cucinato, è suonato il campanello.", "ok": false, "perche": "mentre 引出的是正在进行的背景，不能用说“已完成”的近过去时。" }
    ] },
    { "q": "“我回到家的时候，妈妈正在厨房里做饭。”哪一句对？", "opzioni": [
      { "t": "Quando sono tornato a casa, mia madre cucinava in cucina.", "ok": true, "perche": "回家是一个时刻（近过去时），妈妈做饭是当时的场面（未完成过去时）。" },
      { "t": "Quando sono tornato a casa, mia madre ha cucinato in cucina.", "ok": false, "perche": "ha cucinato 说的是做完了；这里要表达的是“我到的时候她正在做”。" }
    ] },
    { "q": "“昨天我很累。”（没有说累了多久）哪一句对？", "opzioni": [
      { "t": "Ieri ero stanco.", "ok": true, "perche": "累是一个状态，没有清楚的开头和结尾，用未完成过去时。汉语这里没有“了”。" },
      { "t": "Ieri sono stato stanco.", "ok": false, "perche": "sono stato 把状态当作一件有头有尾的整体，一般要配上时间范围才用（如 tutto il giorno）；单说“昨天很累”，自然的说法是 ero stanco。不要因为想到“了”就用近过去时。" }
    ] },
    { "q": "“我昨天才知道她结婚了。”哪一句对？", "opzioni": [
      { "t": "Ieri ho saputo che si è sposata.", "ok": true, "perche": "sapere 的近过去时表示“得知”这个时刻，正好是“才知道”。" },
      { "t": "Ieri sapevo che si è sposata.", "ok": false, "perche": "sapevo 表示“当时已经知道”，和“昨天才知道”意思相反。" }
    ] },
    { "q": "“十年前我们在大学认识了。”哪一句对？", "opzioni": [
      { "t": "Ci siamo conosciuti all'università dieci anni fa.", "ok": true, "perche": "conoscere 的近过去时是“第一次认识”，这是一个事件。" },
      { "t": "Ci conoscevamo all'università dieci anni fa.", "ok": false, "perche": "conoscevamo 表示“当时已经互相认识”，不是“认识的那一刻”。" }
    ] },
    { "q": "“那天我想出去，可是在下雨（所以没出去）。”哪一句对？", "opzioni": [
      { "t": "Volevo uscire, ma pioveva.", "ok": true, "perche": "volevo 只表示当时有这个愿望，不说结果；后面的 ma 说明没有出去。" },
      { "t": "Ho voluto uscire, ma pioveva.", "ok": false, "perche": "ho voluto 表示“坚持要做并且做了”，和“结果没出去”不合。" }
    ] },
    { "q": "“突然，灯灭了。”哪一句对？", "opzioni": [
      { "t": "All'improvviso è saltata la luce.", "ok": true, "perche": "all'improvviso 引出一个突然的、一次性的事件，用近过去时。" },
      { "t": "All'improvviso saltava la luce.", "ok": false, "perche": "未完成过去时不能表达“一下子发生”的事，除非是反复发生。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Che hai fatto ieri sera?",
    "righe": [
      { "chi": "A", "t": "Che hai fatto ieri sera?", "tr": "昨天晚上你做什么了？" },
      { "chi": "B", "t": "Niente di speciale. Ero stanco, così sono rimasto a casa.", "tr": "没什么特别的。我很累，所以待在家里。" },
      { "chi": "A", "t": "E come hai passato la serata?", "tr": "那你晚上是怎么过的？" },
      { "chi": "B", "t": "Guardavo un film quando ha chiamato Lucia.", "tr": "我正在看电影，露西亚打电话来了。" },
      { "chi": "A", "t": "Davvero? Che cosa voleva?", "tr": "真的吗？她想要什么？" },
      { "chi": "B", "t": "Voleva sapere se conoscevo un buon ristorante.", "tr": "她想知道我认不认识一家好餐厅。" }
    ],
    "esercizi": [
      { "q": "B 说 “Ero stanco”，为什么用 ero？", "opzioni": [
        { "t": "累是一个状态，是当时的背景", "ok": true, "perche": "状态和描写没有清楚的开头结尾，用未完成过去时。" },
        { "t": "因为累只发生了一次", "ok": false, "perche": "是不是一次不是关键；关键是状态没有划定范围。" },
        { "t": "因为 ero 比 sono stato 更正式", "ok": false, "perche": "两者不是正式不正式的区别，而是“镜头”不同。" }
      ] },
      { "q": "“Guardavo un film quando ha chiamato Lucia” 里，哪一个是突然发生的事件？", "opzioni": [
        { "t": "ha chiamato Lucia", "ok": true, "perche": "打电话来是一个时刻，用近过去时。" },
        { "t": "guardavo un film", "ok": false, "perche": "看电影是当时在进行的背景，用未完成过去时。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的动词不变形，所以常常**所有的过去**都用同一个形式，或者看到“了”就用近过去时，看到“以前”就忘了变位。会出现 *Ieri io andare al cinema*、*Quando ho avuto dieci anni, abitavo a Napoli*、*Da bambino sono andato sempre al mare* 这样的句子。",
    "perche": "汉语没有“变位”，也不要求在动词上同时表达人称和时间；而且汉语的“了”表示“完成”，和近过去时部分重合，容易让人以为“了 = 近过去时”。其实汉语里的状态、习惯、背景常常没有任何标记。",
    "esci": "说过去的事时，先在动词上做两件事：①选人称和时间（ho / sono + 过去分词，还是 -vo/-va）；②问自己：这是**一件完成的事**，还是**一个场景（状态、习惯、背景）**？有 sempre、ogni giorno、mentre、da bambino 这些词，多半是场景；有 ieri、una volta、all'improvviso、poi，多半是完成的事。",
    "esempi": [
      { "sbagliata": "Ieri io andare al cinema.", "giusta": "Ieri sono andato al cinema." },
      { "sbagliata": "Quando ho avuto dieci anni, abitavo a Napoli.", "giusta": "Quando avevo dieci anni, abitavo a Napoli." },
      { "sbagliata": "Da bambino sono andato sempre al mare.", "giusta": "Da bambino andavo sempre al mare." },
      { "sbagliata": "Mentre ho mangiato, è arrivato Marco.", "giusta": "Mentre mangiavo, è arrivato Marco." }
    ]
  },
  "curiosi": [
    { "titolo": "Volevo un caffè：礼貌的未完成过去时", "t": "在咖啡馆里，意大利人常说 Volevo un caffè，或者 Volevo un'informazione。这里的 volevo 不是在说过去，而是让请求更委婉、更客气，作用和条件式 vorrei 差不多，口语里很常见。" },
    { "titolo": "口语里的“Se lo sapevo, non venivo”", "t": "在日常口语里，意大利人常用未完成过去时代替虚拟式过去完成时和条件式过去时：Se lo sapevo, non venivo（如果我早知道，我就不来了）。这种说法在聊天时很自然，书面语和考试里则用 Se l'avessi saputo, non sarei venuto。" },
    { "titolo": "近过去时与远过去时", "t": "在意大利北部，说话时几乎都用近过去时，远过去时（passato remoto，如 mangiai、andò）主要出现在书里和报纸里；在南部和托斯卡纳，远过去时在口语里也仍然常用。无论在哪里，背景、习惯和描写都用未完成过去时。" }
  ],
  "pragmatica": "和朋友聊天，先用近过去时说发生了什么，再用未完成过去时补充背景和原因：Sono rimasto a casa perché ero stanco. 讲故事时，背景（Era una sera fredda…）和事件（…quando è suonato il telefono）轮流出现，故事才有层次。",
  "esercizi": [
    { "k": "scegli", "q": "哪一句说的是小时候的习惯？", "opzioni": [
      { "t": "Da piccolo andavo al mare ogni estate.", "ok": true, "perche": "da piccolo 和 ogni estate 说明是反复发生的习惯，用未完成过去时。" },
      { "t": "Ieri sono andato al mare.", "ok": false, "perche": "ieri 说的是一次完成的事。" },
      { "t": "Domenica scorsa siamo andati al mare.", "ok": false, "perche": "domenica scorsa 指一个具体的日子，是完成的事。" }
    ] },
    { "k": "scegli", "q": "“Conoscevo già Luca”是什么意思？", "opzioni": [
      { "t": "我早就认识卢卡", "ok": true, "perche": "conoscevo 表示当时已经认识，是状态。" },
      { "t": "我第一次见到卢卡", "ok": false, "perche": "第一次见面要说 ho conosciuto。" },
      { "t": "我以后会认识卢卡", "ok": false, "perche": "以后的事要用将来时，这里是过去。" }
    ] },
    { "k": "scegli", "q": "哪个词通常引出一个突然发生的事件（用近过去时）？", "opzioni": [
      { "t": "all'improvviso", "ok": true, "perche": "all'improvviso 是“突然”，引出一个时刻发生的事。" },
      { "t": "di solito", "ok": false, "perche": "di solito 是“通常”，说的是习惯，用未完成过去时。" },
      { "t": "ogni giorno", "ok": false, "perche": "ogni giorno 是“每天”，说的是反复的事。" }
    ] },
    { "k": "scegli", "q": "essere 的未完成过去时，主语是 noi（我们）：", "opzioni": [
      { "t": "eravamo", "ok": true, "perche": "essere 不规则：ero、eri、era、eravamo、eravate、erano。" },
      { "t": "essevamo", "ok": false, "perche": "essere 不能按规则变位，不存在 essevamo。" },
      { "t": "siamo stati", "ok": false, "perche": "siamo stati 是近过去时，不是未完成过去时。" }
    ] },
    { "k": "buco", "zh": "Quando ero piccolo, ＿ sempre dai nonni.", "tr": "我小时候，总是去爷爷奶奶家。", "opzioni": [
      { "t": "andavo", "ok": true, "perche": "sempre 说明是习惯，用未完成过去时。" },
      { "t": "sono andato", "ok": false, "perche": "近过去时说一次完成的事，和 sempre 不合。" },
      { "t": "andrò", "ok": false, "perche": "andrò 是将来时，这里说的是过去。" }
    ] },
    { "k": "buco", "zh": "Mentre ＿ la doccia, ha squillato il telefono.", "tr": "我洗澡的时候，电话响了。", "opzioni": [
      { "t": "facevo", "ok": true, "perche": "mentre 引出背景，fare 的未完成过去时是 facevo。" },
      { "t": "ho fatto", "ok": false, "perche": "ho fatto 说的是做完了，不是正在做。" },
      { "t": "farò", "ok": false, "perche": "farò 是将来时，这里说的是过去。" }
    ] },
    { "k": "buco", "zh": "Ieri ＿ tre ore per l'esame.", "tr": "昨天我为考试学了三个小时。", "opzioni": [
      { "t": "ho studiato", "ok": true, "perche": "“三个小时”划定了范围，是完成的事，用近过去时。" },
      { "t": "studiavo", "ok": false, "perche": "未完成过去时不说范围，和 tre ore 不合。" },
      { "t": "studierò", "ok": false, "perche": "studierò 是将来时。" }
    ] },
    { "k": "ordine", "t": "mentre dormivo è arrivato Marco", "alt": ["è arrivato Marco mentre dormivo"], "tr": "我睡觉的时候，马可来了。" },
    { "k": "ordine", "t": "da bambino avevo una bicicletta rossa", "tr": "小时候我有一辆红色的自行车。" },
    { "k": "scrivi", "q": "用意大利语写：“那时候我十岁。”", "a": "Avevo dieci anni.", "accetta": ["Io avevo dieci anni.", "Allora avevo dieci anni.", "A quel tempo avevo dieci anni.", "All'epoca avevo dieci anni.", "Avevo 10 anni."], "perche": "说年龄用 avere；描写当时的情况用未完成过去时 avevo。" },
    { "k": "scrivi", "q": "用意大利语写：“昨天我买了一辆自行车。”", "a": "Ieri ho comprato una bicicletta.", "accetta": ["Ho comprato una bicicletta ieri.", "Ieri io ho comprato una bicicletta.", "Ieri ho comprato una bici.", "Ieri mi sono comprato una bicicletta.", "Ho comprato una bici ieri."], "perche": "ieri 加一次完成的动作，用近过去时 ho comprato。" },
    { "k": "trasforma", "consegna": "改成小时候的习惯，用 «Da bambino» 开头。", "base": "Leggo sempre mentre mangio.", "accetta": ["Da bambino leggevo sempre mentre mangiavo.", "Da bambino, leggevo sempre mentre mangiavo.", "Da bambino mentre mangiavo leggevo sempre."], "rifiutate": [
      { "t": "Da bambino ho letto sempre mentre ho mangiato.", "perche": "sempre 和 mentre 说明是习惯和背景，不能用近过去时。" }
    ], "perche": "习惯和同时进行的事都用未完成过去时：leggevo、mangiavo。" },
    { "k": "trasforma", "consegna": "改成小时候的习惯，用 «Da piccoli» 开头。", "base": "Ogni estate andiamo al mare.", "accetta": ["Da piccoli andavamo al mare ogni estate.", "Da piccoli ogni estate andavamo al mare.", "Da piccoli, andavamo al mare ogni estate.", "Da piccoli, ogni estate andavamo al mare.", "Da piccoli andavamo ogni estate al mare."], "rifiutate": [
      { "t": "Da piccoli siamo andati al mare ogni estate.", "perche": "ogni estate 说的是反复的习惯，不是一次完成的事。" }
    ], "perche": "andiamo 变成 andavamo，说明这是过去反复发生的习惯。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Che hai fatto ieri?" },
      { "chi": "B", "t": "Mentre ___ in centro, ho incontrato Anna.", "buco": true }
    ], "opzioni": [
      { "t": "camminavo", "ok": true, "perche": "mentre 引出背景，用未完成过去时；ho incontrato 是事件。" },
      { "t": "ho camminato", "ok": false, "perche": "mentre 后面是正在进行的背景，不用近过去时。" },
      { "t": "camminerò", "ok": false, "perche": "camminerò 是将来时。" }
    ] }
  ],
  "capaci": [
    "你会用未完成过去时说小时候的习惯和过去的情景，比如 Da bambino giocavo in cortile。",
    "你会用 Mentre mangiavo, è arrivato Marco 这样的结构，把背景和事件放在同一个句子里。",
    "你会判断 sapere、conoscere、volere 在过去时里的意思有什么不同。",
    "你会避开“了 = 近过去时”的错误，先问：这是完成的事，还是一个场景。"
  ],
  "glosse": {
    "Sono rimasto a casa perché ero stanco": "我待在家里，因为我累了。"
  },
  "fonti": [
    "Treccani, Enciclopedia dell'Italiano, voce «imperfetto» (usi: abitudine, descrizione, azione in corso, imperfetto di cortesia)",
    "Northwestern Open Books, Intermediate Italian Grammar 1, capitolo 1 (ripasso di passato prossimo e imperfetto) e appendice su sapere e conoscere",
    "Tatoeba (ita.tsv), controllo della naturalezza delle frasi con mentre, quando ero, da bambino"
  ]
};
