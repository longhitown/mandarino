/* Lezione 7 · Negazione e domande (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["domande"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Non parlo spagnolo.", "tr": "我不说西班牙语。" },
      { "t": "Non bevo mai caffè la sera.", "tr": "晚上我从来不喝咖啡。" },
      { "t": "Sei stanco?", "tr": "你累吗？" },
      { "t": "Dove abiti?", "tr": "你住在哪里？" }
    ],
    "domanda": "比较这四句话和汉语：①“不”在意大利语里放在哪里？②第二句里为什么既有 non 又有 mai？③第三句没有“吗”，怎么知道是问句？④第四句里“哪里”放在句子的什么位置？",
    "risposta": "①否定词 **non** 放在动词前面。②“从来不”要用**两个**否定词：non 加 mai，缺一个都不对。③是非问句的词序和陈述句一样，只靠**升调**（书面上加问号）表示提问，没有“吗”。④疑问词 dove 放在**句首**，而汉语的“哪里”留在原来的位置（你住在哪里）。"
  },
  "regola": {
    "enunciato": "否定句：在变位动词前面加 **non**。如果还有 mai、niente、nessuno、più 等否定词，且它们在动词**后面**，非 non 不可（Non bevo mai）。提问：是非问句不改变词序，只用升调；特殊疑问句把**疑问词放在句首**，后面是动词，主语常常放在动词之后。",
    "schema": ["Non", "动词", "mai / niente", "｜", "疑问词", "动词", "?"],
    "punti": [
      { "ok": true, "t": "**non 的位置**：紧挨着变位动词前面；如果有宾语代词，non 在代词前面：Non parlo cinese. Non lo so. Non ci vado." },
      { "ok": true, "t": "**两个否定词**：mai（从不）、niente（什么也不）、nessuno（没有人）、più（不再）、ancora（还没）、neanche / nemmeno（连……也不）放在动词后面时，前面必须有 non：Non vedo nessuno. Non mangio più carne. Non è ancora qui." },
      { "ok": true, "t": "**否定词在动词前面**时不再加 non：Nessuno parla cinese. 说 Nessuno non parla 是错误的。" },
      { "ok": true, "t": "**是非问句**：词序和陈述句相同，读升调。回答用 Sì 或 No，常常再重复一遍动词：Sì, parlo. No, non parlo. 句末加 vero? 或 no? 表示“对吧”：Sei di Roma, vero?" },
      { "ok": true, "t": "**特殊疑问句**：疑问词放在句首：Dove abiti? Che cosa mangi? Quando parte il treno? 主语放在动词后很常见：Dove abita Marco?" },
      { "ok": true, "t": "**介词在疑问词前面**：Con chi parli? Di dove sei? A che ora parti? 介词不能留在句尾。" },
      { "ok": false, "t": "**不要**把汉语的词序搬过来：*Vai dove?*（普通提问）、*Bevo mai caffè*（少了 non）、*Io no parlo*（否定词是 non，不是 no）。" }
    ]
  },
  "logica": [
    "汉语的“不”和意大利语的 non 位置相近，都在动词前面。区别在于：意大利语是**否定一致**的语言，句子里的几个否定词不会互相抵消，而是一起表示一个否定。mai、niente、nessuno 本身只是“否定词语”（相当于“任何时候、任何东西、任何人”的否定一面），放在动词后面时要靠 non 来完成否定。汉语“我从不喝”只用一个否定词，所以学习者容易漏掉 non。另外，汉语的“不”和“没”在意大利语里都用 non：Non vado（我不去），Non sono andato（我没去）。",
    "汉语用“吗”或者“呢”来提问，意大利语只靠语调：同一个句子，降调是陈述（Sei stanco.），升调是提问（Sei stanco?）。所以问句的书面标志只有问号，听的时候要注意语调。句末的 vero? 相当于汉语的“……吧、对吧”，用来寻求对方确认。",
    "特殊疑问句是两种语言差别最大的地方：汉语的疑问词留在原位（你去哪里），意大利语把它**提到句首**（Dove vai?）。在对话中，如果没听清楚对方说了什么，也可以保留原位来重复提问（Vai dove?），这是回声式的追问，不是普通的问法。有介词时，介词跟着疑问词一起放在句首：Con chi parli?"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["疑问词", "意思", "例句"],
    "righe": [
      ["che cosa / cosa / che", "什么", "Che cosa mangi?"],
      ["chi", "谁", "Chi è lui?"],
      ["dove", "哪里", "Dove abiti?"],
      ["quando", "什么时候", "Quando parte il treno?"],
      ["perché", "为什么（也表示“因为”）", "Perché non vieni?"],
      ["come", "怎么、怎么样", "Come ti chiami?"],
      ["quanto / quanta / quanti / quante", "多少（和名词的性、数一致）", "Quanti anni hai?"],
      ["quale / quali", "哪一个、哪些", "Quale preferisci?"]
    ],
    "nota": "quanto 作形容词时要和后面的名词一致：Quanti anni（阳性复数），Quante lingue（阴性复数）；单独问价钱用 Quanto costa?。"
  },
  "esempi": [
    { "gruppo": "否定：non 放在动词前", "items": [
      { "t": "Non parlo spagnolo.", "tr": "我不说西班牙语。" },
      { "t": "Marco non lavora il sabato.", "tr": "马可星期六不工作。" },
      { "t": "Non lo conosco.", "tr": "我不认识他。", "nota": "non 放在宾语代词 lo 的前面。" }
    ] },
    { "gruppo": "两个否定词：non 加 mai、niente、nessuno、più", "items": [
      { "t": "Non bevo mai caffè la sera.", "tr": "晚上我从来不喝咖啡。" },
      { "t": "Non vedo nessuno in strada.", "tr": "街上我看不到一个人。" },
      { "t": "Non ho niente da fare.", "tr": "我什么事也没有（无事可做）。" },
      { "t": "Non abito più a Torino.", "tr": "我不再住在都灵了。", "nota": "non … più 常对应汉语的“不……了”。" },
      { "t": "Nessuno risponde al telefono.", "tr": "没有人接电话。", "nota": "nessuno 在动词前面，所以不加 non。" }
    ] },
    { "gruppo": "是非问句：语调代替“吗”", "items": [
      { "t": "Sei stanco?", "tr": "你累吗？" },
      { "t": "Vieni con noi stasera?", "tr": "今晚你和我们一起来吗？" },
      { "t": "Preferisci il tè o il caffè?", "tr": "你要茶还是咖啡？", "nota": "“还是”用 o。" },
      { "t": "Sei di Roma, vero?", "tr": "你是罗马人，对吧？" }
    ] },
    { "gruppo": "特殊疑问句：疑问词在句首", "items": [
      { "t": "Dove abiti?", "tr": "你住在哪里？" },
      { "t": "Che cosa mangi stasera?", "tr": "你今晚吃什么？" },
      { "t": "Con chi parli?", "tr": "你在和谁说话？", "nota": "介词 con 跟着 chi 一起放在句首。" },
      { "t": "Quanto costa questo libro?", "tr": "这本书多少钱？" },
      { "t": "Perché non vieni?", "tr": "你为什么不来？" }
    ] }
  ],
  "contrasti": [
    { "q": "“我从来不喝咖啡。”哪一句对？", "opzioni": [
      { "t": "Non bevo mai caffè.", "ok": true, "perche": "mai 在动词后面，前面必须有 non。" },
      { "t": "Bevo mai caffè.", "ok": false, "perche": "少了 non；mai 在动词后面时，必须由 non 来完成否定。" }    ] },
    { "q": "“我什么都不懂。”哪一句对？", "opzioni": [
      { "t": "Non capisco niente.", "ok": true, "perche": "niente 在动词后面时，要和 non 一起用。" },
      { "t": "Capisco niente.", "ok": false, "perche": "标准的说法需要 non；漏掉 non 是汉语“一个否定就够”的影响。" },
      { "t": "Non capisco non niente.", "ok": false, "perche": "non 只在动词前出现一次，后面不能再重复。" }
    ] },
    { "q": "“没有人来。”（nessuno 放在句首）哪一句对？", "opzioni": [
      { "t": "Nessuno viene.", "ok": true, "perche": "否定词 nessuno 在动词前面，已经完成了否定，不再加 non。" },
      { "t": "Nessuno non viene.", "ok": false, "perche": "nessuno 在动词前面时不能再加 non。" },
      { "t": "Non nessuno viene.", "ok": false, "perche": "non 必须紧挨着动词，不能放在主语 nessuno 前面。" }
    ] },
    { "q": "“他不再住在这里了。”哪一句对？", "opzioni": [
      { "t": "Non abita più qui.", "ok": true, "perche": "non … più 表示“不再”，对应汉语的“不……了”。" },
      { "t": "Non abita ancora qui.", "ok": false, "perche": "non … ancora 是“还没有”，意思不同。" },
      { "t": "Abita non più qui.", "ok": false, "perche": "non 要放在动词前面。" }
    ] },
    { "q": "“你去哪里？”（普通提问）哪一句对？", "opzioni": [
      { "t": "Dove vai?", "ok": true, "perche": "疑问词放在句子开头，这是普通提问的词序。" },
      { "t": "Vai dove?", "ok": false, "perche": "疑问词留在原位只用于回声式追问（没听清、感到惊讶时），普通提问要提到句首。" }
    ] },
    { "q": "你问朋友：“你在和谁说话？”哪一句对？", "opzioni": [
      { "t": "Con chi parli?", "ok": true, "perche": "介词 con 和疑问词 chi 一起放在句首。" },
      { "t": "Chi parli con?", "ok": false, "perche": "意大利语里介词不能留在句尾。" }
    ] },
    { "q": "“你是中国人吗？”哪一句对？", "opzioni": [
      { "t": "Sei cinese?", "ok": true, "perche": "是非问句的词序不变，用升调；没有“吗”。" },
      { "t": "Sei cinese ma?", "ok": false, "perche": "ma 的意思是“但是”，不是疑问助词。" },
      { "t": "Non sei cinese?", "ok": false, "perche": "这句是否定问句：“你不是中国人吗？”意思变了。" }
    ] },
    { "q": "朋友问：Non bevi caffè?（你不喝咖啡吗？）你确实不喝，哪一句回答对？", "opzioni": [
      { "t": "No, non bevo.", "ok": true, "perche": "意大利语的 Sì / No 对应的是事实本身：不喝，就说 No。汉语的“对，我不喝”要说 No, non bevo。" },
      { "t": "Sì, non bevo.", "ok": false, "perche": "Sì 表示“喝”，和后面的 non bevo 互相矛盾；不能直译汉语的“对”。" },
      { "t": "Sì, bevo.", "ok": false, "perche": "说的是“我喝”，与实际情况相反。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Un tè, grazie",
    "righe": [
      { "chi": "A", "t": "Che cosa prendi?", "tr": "你要点什么？" },
      { "chi": "B", "t": "Un tè, grazie. Non bevo mai caffè dopo pranzo.", "tr": "一杯茶，谢谢。午饭以后我从来不喝咖啡。" },
      { "chi": "A", "t": "Perché? Hai sonno?", "tr": "为什么？你困吗？" },
      { "chi": "B", "t": "No, ma la notte non dormo più bene.", "tr": "不是，但是晚上我睡不好了。" },
      { "chi": "A", "t": "Capisco. E Marco? Viene con noi?", "tr": "我明白了。马可呢？他和我们一起来吗？" },
      { "chi": "B", "t": "Non lo so. Non risponde al telefono.", "tr": "我不知道。他不接电话。" }
    ],
    "esercizi": [
      { "q": "B 说 “Non bevo mai caffè dopo pranzo”，是什么意思？", "opzioni": [
        { "t": "午饭后从来不喝咖啡", "ok": true, "perche": "non … mai 是“从来不”。" },
        { "t": "午饭后不再喝咖啡", "ok": false, "perche": "“不再”是 non … più。" },
        { "t": "午饭后还没有喝咖啡", "ok": false, "perche": "“还没有”是 non … ancora。" }
      ] },
      { "q": "A 问 “Hai sonno?”，这是什么问句？", "opzioni": [
        { "t": "是非问句，只靠升调", "ok": true, "perche": "词序和陈述句相同，没有疑问词。" },
        { "t": "特殊疑问句，疑问词在句首", "ok": false, "perche": "句中没有 dove、che cosa 这样的疑问词。" },
        { "t": "否定问句", "ok": false, "perche": "句子里没有 non，不是否定问句。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语说“我从不喝咖啡、我什么都不懂”只需要一个否定词，所以学习者常常漏掉 non：*Bevo mai caffè*、*Capisco niente*。另外，把汉语的疑问词留在原位（*Vai dove?*），或者把 non 说成 no（*Io no parlo*），也是常见的错误。",
    "perche": "汉语的“从不”“什么也”已经是完整的否定词，不需要另一个“不”配合；而意大利语的 mai、niente、nessuno 在动词后面时，要由 non 来负责“否定”。疑问词的位置则直接来自汉语的词序：疑问词留在它回答的位置。",
    "esci": "记住一个口诀：**动词后面有 mai、niente、nessuno、più，动词前面就要有 non**。提问时先把疑问词拿到句首，再说动词：Dove vai? Che cosa mangi? 否定词永远是 **non**；no 只用来回答问题。",
    "esempi": [
      { "sbagliata": "Bevo mai caffè.", "giusta": "Non bevo mai caffè." },
      { "sbagliata": "Capisco niente.", "giusta": "Non capisco niente." },
      { "sbagliata": "Io no parlo cinese.", "giusta": "Io non parlo cinese." },
      { "sbagliata": "Vai dove?", "giusta": "Dove vai?" }
    ]
  },
  "curiosi": [
    { "titolo": "口语里漏掉的 non", "t": "在一些口语变体里，主要是北部，有时会听到不带 non 的说法，比如 C'era nessuno。在问句里 non 也可以省略：Sei mai stato in Croazia? 这里的 mai 是“曾经”。这些都是口语的特点；书写和正式场合要用完整的否定：Non c'era nessuno。" },
    { "titolo": "perché：为什么，也是因为", "t": "perché 既是疑问词，也是连词。Perché non vieni?（你为什么不来？）— Perché ho sonno.（因为我困了。）问和答用同一个词，说话时靠语调和上下文区分：问句通常是升调，回答是降调。" },
    { "titolo": "Che cosa、cosa、che", "t": "“什么”有三种说法：Che cosa fai? Cosa fai? Che fai? 意思相同，Che cosa 稍微完整，Cosa 和 Che 在口语里更常用。后面接名词时只用 che：Che libro leggi?（你在读什么书？）" }
  ],
  "pragmatica": "直接说 No 会显得生硬，意大利人常常加一个缓冲：Mi dispiace, non posso. Purtroppo non ho tempo.向陌生人提问，先用 Scusi 开头，动词用 Lei 的形式：Scusi, dov'è la stazione? 对朋友说 Scusa, dove vai? 疑问词前面加一个礼貌的开头，就不会像在盘问。",
  "esercizi": [
    { "k": "scegli", "q": "哪一句问“你多大了？”（直译：你有几岁？）", "opzioni": [
      { "t": "Quanti anni hai?", "ok": true, "perche": "quanti 和阳性复数 anni 一致。" },
      { "t": "Quanto anni hai?", "ok": false, "perche": "quanto 要和后面的名词一致，anni 是复数。" },
      { "t": "Quando anni hai?", "ok": false, "perche": "quando 是“什么时候”，不能问数量。" }
    ] },
    { "k": "scegli", "q": "哪一句问“你为什么不来？”", "opzioni": [
      { "t": "Perché non vieni?", "ok": true, "perche": "疑问词在句首，non 紧贴动词。" },
      { "t": "Non perché vieni?", "ok": false, "perche": "non 要放在变位动词前面。" },
      { "t": "Vieni perché non?", "ok": false, "perche": "疑问词应在句首，non 也不能放在句尾。" }
    ] },
    { "k": "scegli", "q": "哪一句表示“我还没有吃饭”？", "opzioni": [
      { "t": "Non mangio ancora.", "ok": true, "perche": "non … ancora 是“还没有”。" },
      { "t": "Non mangio più.", "ok": false, "perche": "non … più 是“不再”。" },
      { "t": "Non mangio mai.", "ok": false, "perche": "non … mai 是“从不”。" }
    ] },
    { "k": "buco", "zh": "Non capisco ＿.", "tr": "我什么都不懂。", "opzioni": [
      { "t": "niente", "ok": true, "perche": "niente 是“什么也”，和 non 一起使用。" },
      { "t": "mai", "ok": false, "perche": "mai 是“从不”，不表示“什么”。" },
      { "t": "nessuno", "ok": false, "perche": "nessuno 指人（没有人），不指事物。" }
    ] },
    { "k": "buco", "zh": "＿ abiti?", "tr": "你住在哪里？", "opzioni": [
      { "t": "Dove", "ok": true, "perche": "dove 是“哪里”，问地点。" },
      { "t": "Quando", "ok": false, "perche": "quando 问时间。" },
      { "t": "Chi", "ok": false, "perche": "chi 是“谁”，问的是人。" }
    ] },
    { "k": "buco", "zh": "Non fumo ＿.", "tr": "我不再抽烟了。", "opzioni": [
      { "t": "più", "ok": true, "perche": "non … più 表示“不再”。" },
      { "t": "mai", "ok": false, "perche": "non … mai 是“从不”，意思不是“不再”。" },
      { "t": "niente", "ok": false, "perche": "niente 是“什么也”，不能表示“不再”。" }
    ] },
    { "k": "ordine", "t": "non bevo mai caffè la sera", "tr": "晚上我从来不喝咖啡。", "alt": ["la sera non bevo mai caffè"] },
    { "k": "ordine", "t": "con chi parli stasera", "tr": "你今晚和谁说话？", "alt": ["stasera con chi parli"] },
    { "k": "scrivi", "q": "用意大利语对一位朋友问：“你在哪里工作？”", "a": "Dove lavori?", "accetta": ["Dove lavori tu?", "Tu dove lavori?", "Dove lavori", "Dove lavori ?"], "perche": "疑问词 dove 放在句首，tu 的动词形式是 lavori。" },
    { "k": "scrivi", "q": "用意大利语写：“我从来不看电视。”", "a": "Non guardo mai la televisione.", "accetta": ["Non guardo mai la TV.", "Non guardo mai la tv.", "Io non guardo mai la televisione.", "Non vedo mai la televisione."], "perche": "mai 在动词后面，前面必须有 non。" },
    { "k": "trasforma", "consegna": "把这个句子改成否定句。", "base": "Parli italiano.", "accetta": ["Non parli italiano.", "Tu non parli italiano."], "rifiutate": [
      { "t": "Parli non italiano.", "perche": "non 要放在动词前面，不能放在宾语前面。" },
      { "t": "No parli italiano.", "perche": "否定词是 non，no 只用来回答。" }
    ], "perche": "在变位动词前面加 non 就构成否定句。" },
    { "k": "trasforma", "consegna": "改成“从来不”的句子，用 mai。", "base": "Bevo il caffè.", "accetta": ["Non bevo mai il caffè.", "Non bevo mai caffè.", "Io non bevo mai il caffè."], "rifiutate": [
      { "t": "Bevo mai il caffè.", "perche": "mai 在动词后面，要有 non。" }
    ], "perche": "non 放在动词前面，mai 紧跟在动词后面。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Mangi carne?" },
      { "chi": "B", "t": "No, ___ mangio mai carne.", "buco": true }
    ], "opzioni": [
      { "t": "non", "ok": true, "perche": "否定词 non 要放在动词前面，和 mai 一起使用。" },
      { "t": "no", "ok": false, "perche": "no 只用来回答，不能放在动词前表示否定。" },
      { "t": "niente", "ok": false, "perche": "niente 的意思是“什么也”，不能代替 non。" }
    ] }
  ],
  "capaci": [
    "你会用 non 构成否定句，也会用 non … mai、non … niente、non … più 说“从不、什么也不、不再”。",
    "你会区分“还没有”（non … ancora）和“不再”（non … più）。",
    "你会用升调提出是非问句，并用 Sì / No 回答，包括 Non bevi caffè? 这样的否定问句。",
    "你会把 dove、che cosa、chi、quando、perché、come、quanto 放在句首提问，并带上介词：Con chi parli?"
  ],
  "fonti": [
    "Treccani, Enciclopedia dell'Italiano, voce «negazione» (Bernini, 2011): posizione di non, concordanza negativa con mai, niente, nessuno (pagina letta)",
    "Tatoeba (ita.tsv), frasi reali con Dove vai? (4), Con chi parli? (1), Nessuno (1924): verificate con grep nel corpus locale"
  ]
};
