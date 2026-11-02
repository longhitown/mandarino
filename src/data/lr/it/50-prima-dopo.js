/* Lezione 50 · 先后顺序：prima di、dopo、quando、mentre (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["prima-dopo"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Prima di mangiare mi lavo le mani.", "tr": "吃饭前我洗手。" },
      { "t": "Dopo aver mangiato faccio una passeggiata.", "tr": "吃过饭以后我去散步。" },
      { "t": "Mentre cammino ascolto la musica.", "tr": "我一边走路一边听音乐。" },
      { "t": "Quando arrivo a casa ti scrivo.", "tr": "我到家的时候给你发消息。" }
    ],
    "domanda": "这四句话都在说两件事的先后或同时。连词和动词的形式有什么特点？汉语的“……以前、……以后”放在从句后面，意大利语放在哪里？",
    "risposta": "意大利语的时间词放在**从句前面**：**prima di** + 动词原形（mangiare），**dopo aver** + 过去分词（mangiato），**mentre / quando** + 变位的动词（cammino、arrivo）。汉语把“以前、以后”放在从句后面（吃饭以前），意大利语把它放在前面，而且动词的形式要跟着变。"
  },
  "regola": {
    "enunciato": "意大利语用一个**放在前面的时间词**连接两件事：**prima di** + 动词原形表示“在……之前”，**dopo aver / essere** + 过去分词表示“在……之后”，**quando** 表示“……的时候（一个时刻）”，**mentre** 表示“一边……一边（两件事同时持续）”，**appena** 表示“一……就”。",
    "schema": ["Prima di", "＋原形", "｜", "Dopo aver", "＋过去分词", "｜", "Quando / Mentre / Appena"],
    "punti": [
      { "ok": true, "t": "**prima di**：后面接动词原形或名词，两个动作的主语相同。Prima di uscire spengo la luce. / Prima di cena faccio una doccia." },
      { "ok": true, "t": "**dopo + 名词**：直接接名词，不加 di。Dopo cena guardo un film. **dopo + 动词**：用过去不定式 aver / essere + 过去分词，两个动作的主语相同。Dopo aver mangiato esco. / Dopo essere tornato a casa, mi sono riposato." },
      { "ok": true, "t": "**quando**：说一个时间点或一个条件，后面接变位的动词。Quando arrivo ti chiamo.（口语里用现在时表示将来）" },
      { "ok": true, "t": "**mentre**：两件事同时进行，而且都持续一段时间。Mentre cucino ascolto la radio." },
      { "ok": true, "t": "**appena**：一件事刚发生，立刻做下一件事，相当于汉语的“一……就……”。Appena finisco il lavoro, ti chiamo." },
      { "ok": true, "t": "**两个动作的主语不同**：不能用 prima di / dopo aver。要用 **dopo che** + 直陈式（Dopo che sei uscito, ho pulito la casa）；prima che 要用虚拟式（见第 27 课）。" },
      { "ok": false, "t": "**不要**说 *prima mangiare*（漏了 di）、*dopo mangiare*（标准语里要用 dopo aver mangiato）、*mentre arrivo*（“到达”是一个时刻，用 quando 或 appena）。" }
    ]
  },
  "logica": [
    "汉语的“前、后、时”是**后置**的：吃饭**以前**、吃饭**以后**、吃饭的**时候**，说完从句再加时间词。意大利语把连词放在**前面**，先告诉听话人“接下来是在什么时间关系下”，再说动作：prima di mangiare、dopo aver mangiato、quando mangio。所以练习时，先想好连词，再想动词。",
    "动词的形式取决于连词。**prima di** 要求动词原形（不变位），因为主语相同，不需要再说一遍是谁；**dopo** 要用过去不定式 aver / essere + 过去分词，因为“做完了”要显示出来：dopo **aver mangiato**；而 **quando、mentre、appena** 后面是一个完整的句子，动词要变位。",
    "quando 和 mentre 的区别是汉语里没有的：汉语“……的时候”既可以指一个时刻，也可以指一段时间。意大利语要选：**quando** 指一个时间点（arrivo、finisco、torno），**mentre** 指一段持续的时间，而且两件事是同时进行的（cucino、guido、leggo）。“我到的时候”是一个点，所以是 quando arrivo，不能说 mentre arrivo。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["想说的", "汉语", "意大利语", "例句"],
    "righe": [
      ["在……之前", "……以前", "prima di + 原形 / 名词", "Prima di uscire spengo la luce."],
      ["在……之后", "……以后", "dopo + 名词 / dopo aver + 分词", "Dopo aver mangiato esco."],
      ["……的时候（时刻）", "……的时候", "quando + 句子", "Quando arrivo ti chiamo."],
      ["一边……一边（持续）", "一边……一边", "mentre + 句子", "Mentre cucino ascolto la radio."],
      ["一……就……", "一……就……", "appena + 句子", "Appena arrivo ti chiamo."],
      ["先……然后……最后", "先……再……最后", "prima … poi … infine", "Prima mi lavo, poi mangio, infine esco."]
    ],
    "nota": "意大利语的时间词都在从句前面；汉语多数在后面。"
  },
  "esempi": [
    { "gruppo": "prima di：在……之前", "items": [
      { "t": "Prima di uscire spengo la luce.", "tr": "出门前我关灯。" },
      { "t": "Prima di cena faccio una doccia.", "tr": "晚饭前我洗个澡。", "nota": "后面是名词时也用 prima di。" },
      { "t": "Prima di partire controllo sempre il passaporto.", "tr": "出发前我总是检查护照。" }
    ] },
    { "gruppo": "dopo：在……之后", "items": [
      { "t": "Dopo cena guardo un film.", "tr": "晚饭后我看电影。", "nota": "dopo 后面直接接名词，不加 di。" },
      { "t": "Dopo aver mangiato faccio una passeggiata.", "tr": "吃过饭以后我去散步。" },
      { "t": "Dopo essere tornato a casa, mi sono riposato.", "tr": "回到家以后，我休息了一会儿。", "nota": "tornare 用 essere，所以是 dopo essere tornato。" }
    ] },
    { "gruppo": "quando 和 appena：一个时刻", "items": [
      { "t": "Quando arrivo a casa ti scrivo.", "tr": "我到家的时候给你发消息。" },
      { "t": "Appena finisco il lavoro, ti chiamo.", "tr": "我一下班就给你打电话。" },
      { "t": "Quando ho tempo, leggo un libro.", "tr": "有时间的时候，我看书。" }
    ] },
    { "gruppo": "mentre：同时进行", "items": [
      { "t": "Mentre cucino, ascolto la radio.", "tr": "我一边做饭一边听广播。" },
      { "t": "Studio mentre ascolto la musica.", "tr": "我一边听音乐一边学习。", "nota": "mentre 的从句也可以放在后面。" },
      { "t": "Mentre io lavoro, tu dormi.", "tr": "我在工作，而你在睡觉。", "nota": "mentre 也可以表示对比，相当于“而”。" }
    ] },
    { "gruppo": "按顺序说几件事", "items": [
      { "t": "Prima mi lavo, poi faccio colazione e infine esco.", "tr": "我先洗漱，然后吃早饭，最后出门。" }
    ] }
  ],
  "contrasti": [
    { "q": "“吃饭前我洗手。”（主语都是“我”）哪一句对？", "opzioni": [
      { "t": "Prima di mangiare mi lavo le mani.", "ok": true, "perche": "prima di 后面接动词原形 mangiare。" },
      { "t": "Prima mangiare mi lavo le mani.", "ok": false, "perche": "prima 后面接动词原形时，中间要有 di。" },
      { "t": "Prima che mangiare mi lavo le mani.", "ok": false, "perche": "prima che 后面是变位的虚拟式，不能接动词原形。" }
    ] },
    { "q": "“吃过饭以后我出门。”（主语都是“我”）哪一句对？", "opzioni": [
      { "t": "Dopo aver mangiato esco.", "ok": true, "perche": "dopo 后面接动词时，用 aver + 过去分词，表示先做完了。" },
      { "t": "Dopo mangiare esco.", "ok": false, "perche": "标准意大利语里，dopo 后面的动词要用过去不定式 aver mangiato，不用原形。" },
      { "t": "Dopo che mangiare esco.", "ok": false, "perche": "dopo che 后面需要变位的句子，不能接动词原形。" }
    ] },
    { "q": "“我到的时候给你打电话。”（到达是一个时刻）哪一句对？", "opzioni": [
      { "t": "Quando arrivo ti chiamo.", "ok": true, "perche": "到达是一个时间点，用 quando。" },
      { "t": "Mentre arrivo ti chiamo.", "ok": false, "perche": "mentre 指一段持续的时间；“到达”是一个时刻，不适合。" }
    ] },
    { "q": "“我先洗手，然后吃饭。”哪一句对？", "opzioni": [
      { "t": "Prima mi lavo le mani, poi mangio.", "ok": true, "perche": "prima ... poi ... 是副词，用来按顺序说两件事，后面是变位的动词。" },
      { "t": "Prima di mi lavo le mani, poi mangio.", "ok": false, "perche": "prima di 后面只能接动词原形或名词，不能接变位的动词。" },
      { "t": "Prima lavarmi le mani, poi mangio.", "ok": false, "perche": "prima 单独使用时，不能直接接动词原形，要说 prima di lavarmi。" }
    ] },
    { "q": "“我一到就给你打电话。”哪一句对？", "opzioni": [
      { "t": "Appena arrivo ti chiamo.", "ok": true, "perche": "appena 表示“一……就……”，一件事刚发生就做下一件。" },
      { "t": "Mentre arrivo ti chiamo.", "ok": false, "perche": "mentre 指同时持续的两件事，不表示“一到就”。" },
      { "t": "Prima arrivo ti chiamo.", "ok": false, "perche": "prima 表示先后，不能这样连接两个变位的动词。" }
    ] },
    { "q": "“你出门以后，我打扫了房间。”（两个动作的主语不同：你出门，我打扫）哪一句对？", "opzioni": [
      { "t": "Dopo che sei uscito, ho pulito la casa.", "ok": true, "perche": "主语不同时，用 dopo che + 变位的直陈式。" },
      { "t": "Dopo essere uscito, ho pulito la casa.", "ok": false, "perche": "这句话的意思是“我出门以后，我打扫了”，出门的人变成了“我”。" },
      { "t": "Dopo che uscire, ho pulito la casa.", "ok": false, "perche": "dopo che 后面要变位，不能接动词原形。" }
    ] },
    { "q": "“看完电影以后我们去吃披萨。”哪一句对？", "opzioni": [
      { "t": "Dopo il film andiamo a mangiare la pizza.", "ok": true, "perche": "dopo 后面直接接名词（带冠词）。" },
      { "t": "Dopo di il film andiamo a mangiare la pizza.", "ok": false, "perche": "dopo 后面接名词时不加 di，而且 di il 要合成 del。" },
      { "t": "Dopo al film andiamo a mangiare la pizza.", "ok": false, "perche": "dopo 后面不能加介词 a。" }
    ] },
    { "q": "“我吃饭的时候看电视。”（两件事同时持续）哪一句对？", "opzioni": [
      { "t": "Mangio mentre guardo la TV.", "ok": true, "perche": "两件事同时持续，用 mentre。" },
      { "t": "Mangio dopo guardo la TV.", "ok": false, "perche": "dopo 表示先后，不表示同时，而且不能这样连接两个变位的动词。" },
      { "t": "Mangio prima di guardo la TV.", "ok": false, "perche": "prima di 后面要接动词原形，不能接 guardo。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Che programmi hai per stasera?",
    "righe": [
      { "chi": "A", "t": "Che programmi hai per stasera?", "tr": "你今晚有什么安排？" },
      { "chi": "B", "t": "Prima di cena devo fare la spesa, poi cucino.", "tr": "晚饭前我得去买东西，然后做饭。" },
      { "chi": "A", "t": "E dopo aver mangiato?", "tr": "吃过饭以后呢？" },
      { "chi": "B", "t": "Faccio una passeggiata. Vuoi venire?", "tr": "我去散步。你想来吗？" },
      { "chi": "A", "t": "Volentieri. Ti chiamo appena finisco di lavorare.", "tr": "好啊。我一下班就给你打电话。" },
      { "chi": "B", "t": "Perfetto. Quando arrivi, suona il campanello.", "tr": "好的。你到的时候，按门铃。" }
    ],
    "esercizi": [
      { "q": "B 在晚饭前要做什么？", "opzioni": [
        { "t": "先去买东西，然后做饭", "ok": true, "perche": "B 说 Prima di cena devo fare la spesa, poi cucino：先买东西，再做饭。" },
        { "t": "先做饭，然后去买东西", "ok": false, "perche": "顺序反了：买东西在前，做饭在后。" },
        { "t": "先散步，然后做饭", "ok": false, "perche": "散步是吃过饭以后（dopo aver mangiato）的安排。" }
      ] },
      { "q": "A 说 Ti chiamo appena finisco di lavorare，是什么意思？", "opzioni": [
        { "t": "我一下班就给你打电话", "ok": true, "perche": "appena 表示“一……就……”。" },
        { "t": "我一边工作一边给你打电话", "ok": false, "perche": "一边……一边要用 mentre，不是 appena。" },
        { "t": "我工作以前给你打电话", "ok": false, "perche": "工作以前要说 prima di lavorare。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的“……以前、……以后、……的时候”放在从句后面，动词不变形，所以会说出 *Prima mangiare mi lavo le mani*、*Dopo mangiare esco*、*Mentre arrivo ti chiamo*、*Dopo di cena guardo la TV* 这样的句子：漏了 di、用了原形、把一个时刻说成持续。",
    "perche": "汉语里，“吃饭以前”“吃饭以后”的“吃饭”不需要变形，连词放在后面也不影响理解。意大利语的每个连词都规定了后面的动词形式：prima di 配原形，dopo 配 aver / essere + 过去分词，quando 和 mentre 配变位的动词。另外，汉语的“时候”不分时刻和持续，所以容易把 quando 和 mentre 混在一起。",
    "esci": "先选连词，再按连词决定动词：**prima di + 原形**；**dopo aver + 过去分词**；**dopo + 名词**（没有 di）；“一个时刻”用 **quando / appena**，“同时持续”用 **mentre**。",
    "esempi": [
      { "sbagliata": "Prima mangiare mi lavo le mani.", "giusta": "Prima di mangiare mi lavo le mani." },
      { "sbagliata": "Dopo mangiare esco.", "giusta": "Dopo aver mangiato esco." },
      { "sbagliata": "Mentre arrivo ti chiamo.", "giusta": "Quando arrivo ti chiamo." },
      { "sbagliata": "Dopo di cena guardo la TV.", "giusta": "Dopo cena guardo la TV." }
    ]
  },
  "curiosi": [
    { "titolo": "Prima che 和 dopo che：主语不同的时候", "t": "两个动作的主语相同，用 prima di + 原形、dopo aver + 过去分词。主语不同，要换成带 che 的连词：**dopo che** + 直陈式（Dopo che sei uscito, ho pulito），**prima che** + 虚拟式（Prima che tu parta, ti chiamo）。虚拟式在第 27 课里专门讲。" },
    { "titolo": "Mentre 也可以是“而”", "t": "mentre 除了“一边……一边”，还可以对比两件事，相当于汉语的“而”：Io lavoro, mentre tu dormi（我在工作，而你在睡觉）。这时重点不是时间，而是两个人的差别。" },
    { "titolo": "Quando 加将来时", "t": "口语里，说将来的事常常用现在时：Quando arrivo ti chiamo。在书面语或需要强调将来的时候，也可以用将来时：Quando arriverò, ti chiamerò。汉语没有这种区别，学习者只要记住：两种都对，口语多用前一种。" },
    { "titolo": "Prima 和 dopo 也可以单独使用", "t": "prima、dopo 不跟 di 的时候是副词：Ci vediamo dopo（待会儿见）、A dopo!（回头见）、Prima non lo sapevo（以前我不知道）。dopo 后面接代词时才要加 di：dopo di te（在你之后）。动词后面的代词会跟在 aver 后面合成一个词：Dopo averlo visto（看见他以后）。" }
  ],
  "pragmatica": "安排事情时，意大利人喜欢用这些连词把一天说清楚：Prima di pranzo… Dopo cena… Appena posso…。约时间时，Quando arrivi, scrivimi（你到了就告诉我）很自然；A dopo! 是和刚见过面、晚些还会见的人道别时常说的话。",
  "esercizi": [
    { "k": "scegli", "q": "哪一句表示两件事同时持续进行？", "opzioni": [
      { "t": "Mentre studio ascolto la musica.", "ok": true, "perche": "mentre 引出同时进行的两件事。" },
      { "t": "Prima di studiare ascolto la musica.", "ok": false, "perche": "prima di 表示先后，不是同时。" },
      { "t": "Dopo aver studiato ascolto la musica.", "ok": false, "perche": "dopo aver 表示先学习，学完才听音乐。" }
    ] },
    { "k": "scegli", "q": "dopo 后面接动词时，要用哪种形式？", "opzioni": [
      { "t": "aver / essere + 过去分词（dopo aver mangiato）", "ok": true, "perche": "dopo 配过去不定式，表示这个动作已经做完。" },
      { "t": "动词原形（dopo mangiare）", "ok": false, "perche": "标准语里 dopo 不接单纯的动词原形。" },
      { "t": "现在时（dopo mangio）", "ok": false, "perche": "dopo 后面不直接接变位的动词；要变位，用 dopo che。" }
    ] },
    { "k": "scegli", "q": "汉语的“一……就……”最接近意大利语的哪个词？", "opzioni": [
      { "t": "appena", "ok": true, "perche": "appena 表示一件事刚发生，马上做下一件。" },
      { "t": "mentre", "ok": false, "perche": "mentre 表示同时持续，不是“一……就……”。" },
      { "t": "prima di", "ok": false, "perche": "prima di 表示“在……之前”。" }
    ] },
    { "k": "buco", "zh": "＿ di uscire spengo la luce.", "tr": "出门前我关灯。", "opzioni": [
      { "t": "Prima", "ok": true, "perche": "“出门前”用 prima di + 原形。" },
      { "t": "Dopo", "ok": false, "perche": "dopo 表示“之后”，意思相反。" },
      { "t": "Mentre", "ok": false, "perche": "mentre 后面要接变位的动词，不接 di uscire。" }
    ] },
    { "k": "buco", "zh": "Dopo ＿ cenato, guardiamo un film.", "tr": "吃过晚饭以后，我们看电影。", "opzioni": [
      { "t": "aver", "ok": true, "perche": "cenare 用 avere 做助动词，过去不定式是 aver cenato。" },
      { "t": "essere", "ok": false, "perche": "cenare 的助动词是 avere，不是 essere。" },
      { "t": "abbiamo", "ok": false, "perche": "过去不定式里助动词用原形，不变位。" }
    ] },
    { "k": "buco", "zh": "＿ arrivo a casa, ti scrivo.", "tr": "我到家的时候给你发消息。", "opzioni": [
      { "t": "Quando", "ok": true, "perche": "到家是一个时刻，用 quando。" },
      { "t": "Mentre", "ok": false, "perche": "mentre 指持续的时间，不适合表示一个时刻。" },
      { "t": "Prima di", "ok": false, "perche": "prima di 后面接原形，不接 arrivo。" }
    ] },
    { "k": "ordine", "t": "dopo aver mangiato faccio una passeggiata", "alt": ["faccio una passeggiata dopo aver mangiato"], "tr": "吃过饭以后我去散步。" },
    { "k": "ordine", "t": "prima di dormire leggo un libro", "alt": ["leggo un libro prima di dormire"], "tr": "睡觉前我看书。" },
    { "k": "scrivi", "q": "用意大利语写：“睡觉前我关灯。”", "a": "Prima di dormire spengo la luce.", "accetta": ["Spengo la luce prima di dormire.", "Prima di dormire spengo le luci.", "Prima di andare a dormire spengo la luce.", "Prima di andare a letto spengo la luce."], "perche": "“在……之前”用 prima di + 动词原形；spegnere 的第一人称现在时是 spengo。" },
    { "k": "scrivi", "q": "用意大利语写：“我一到就给你打电话。”", "a": "Appena arrivo ti chiamo.", "accetta": ["Ti chiamo appena arrivo.", "Appena arrivo, ti chiamo.", "Appena arrivo ti telefono.", "Ti telefono appena arrivo."], "perche": "“一……就……”用 appena，后面接变位的动词 arrivo。" },
    { "k": "trasforma", "consegna": "把两句话连成一句，用 dopo aver + 过去分词。", "base": "Ho mangiato. Poi sono uscito.", "accetta": ["Dopo aver mangiato sono uscito.", "Dopo aver mangiato, sono uscito.", "Sono uscito dopo aver mangiato.", "Dopo avere mangiato sono uscito."], "rifiutate": [
      { "t": "Dopo mangiare sono uscito.", "perche": "dopo 后面要用过去不定式 aver mangiato，不用单纯的原形。" }
    ], "perche": "两个动作的主语都是“我”，所以可以用 dopo aver + 过去分词。" },
    { "k": "trasforma", "consegna": "把两句话连成一句，用 prima di 说“吃饭前洗手”。", "base": "Mi lavo le mani. Poi mangio.", "accetta": ["Prima di mangiare mi lavo le mani.", "Prima di mangiare, mi lavo le mani.", "Mi lavo le mani prima di mangiare."], "rifiutate": [
      { "t": "Prima mangiare mi lavo le mani.", "perche": "prima 后面接动词原形时必须有 di。" }
    ], "perche": "主语相同，用 prima di + 动词原形。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Quando mi chiami?" },
      { "chi": "B", "t": "Ti chiamo ___ finisco di lavorare.", "buco": true }
    ], "opzioni": [
      { "t": "appena", "ok": true, "perche": "“一下班就”用 appena，后面接变位的动词 finisco。" },
      { "t": "dopo", "ok": false, "perche": "dopo 后面不能直接接变位的动词。" },
      { "t": "prima di", "ok": false, "perche": "prima di 后面要接动词原形，不接 finisco。" }
    ] }
  ],
  "capaci": [
    "你会用 prima di + 动词原形和 dopo aver + 过去分词，说两件事的先后。",
    "你会区分 quando（一个时刻）、mentre（同时持续）和 appena（一……就……）。",
    "你会用 prima … poi … infine 按顺序说一个流程。",
    "你会避开 *prima mangiare*、*dopo mangiare*、*mentre arrivo* 这样的错误。"
  ],
  "fonti": [
    "Elon.io, «Temporal Conjunctions: quando, mentre, appena» (letta: quando e appena con indicativo, mentre per azioni contemporanee, prima che + congiuntivo; dopo aver + participio con stesso soggetto)",
    "Think in Italian, «Before and After in Italian: Prima and Dopo Explained» (letta: prima di + infinito con stesso soggetto, prima che + congiuntivo, dopo aver/essere + participio, dopo che + indicativo)",
    "Tatoeba (ita.tsv, grep): «Prima di uscire» (5), «Dopo aver» (195), «Appena arrivo» (3), «Quando arrivo» (5), «Prima di cena» (1)"
  ]
};
