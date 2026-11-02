/* Lezione 51 · Le negazioni: non, mai, niente, nessuno, più, neanche (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["negazioni"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Non vedo niente.", "tr": "我什么都没看见。" },
      { "t": "Non vado mai al cinema.", "tr": "我从来不去看电影。" },
      { "t": "Nessuno lo sa.", "tr": "没有人知道。" },
      { "t": "Non fumo più.", "tr": "我不再抽烟了。" }
    ],
    "domanda": "汉语说“我什么都没看见”，只有一个否定词“没”。看这几句：第一句和第二句里有两个否定词（non 和 niente，non 和 mai），第三句却只有一个（nessuno），为什么？",
    "risposta": "否定词 **niente、mai、nessuno、più** 放在**动词后面**时，动词前面必须再加一个 **non**：**Non** vedo **niente**，**Non** vado **mai**。两个否定不会互相抵消，而是加强否定。如果否定词放在**动词前面**，就不用 non：**Nessuno** lo sa。所以 Nessuno lo sa 和 Non lo sa nessuno 意思一样。"
  },
  "regola": {
    "enunciato": "意大利语的否定以 **non** 为基础，放在变位动词前面。**niente / nulla**（什么都没有）、**nessuno**（没有人）、**mai**（从来不）、**più**（不再）、**ancora**（还没）、**neanche / nemmeno / neppure**（连……也不）在陈述句里，如果放在动词**后面**，前面必须有 **non**（双重否定）；放在动词**前面**时，不用 non。问句里的 mai 例外（Hai mai visto…?）。",
    "schema": ["non", "动词", "niente / nessuno / mai / più"],
    "punti": [
      { "ok": true, "t": "**非** = **non** + 动词。Lei **non** viene. 复合时态里，non 放在助动词前面：Noi **non** siamo andati in Italia." },
      { "ok": true, "t": "**双重否定**：否定词在动词后面时，前面必须有 non。**Non** vedo **niente**. **Non** viene **nessuno**. **Non** vado **mai** al cinema. 这里的两个否定不会互相抵消。注意：问句里的 mai 是“曾经”，不加 non：Hai mai visto un panda?（你见过熊猫吗？）；senza mai 也不加 non。" },
      { "ok": true, "t": "否定词放在**动词前面**时，不用 non：**Nessuno** lo sa. **Niente** mi convince. 此时动词是肯定形式。" },
      { "ok": true, "t": "**non … più**（不再）：Non fumo **più**. **non … ancora**（还没有）：Non ho **ancora** mangiato." },
      { "ok": true, "t": "**多个否定词**可以连用，顺序是 mai 在 niente / nessuno 前面：Non vedo **mai nessuno**. Non ho **mai** detto **niente** a **nessuno**." },
      { "ok": true, "t": "**né … né**（既不……也不）：Non sa **né** il francese **né** il tedesco. **neanche / nemmeno / neppure**（连……也不）：**Neanche** io." },
      { "ok": true, "t": "**nessuno** 做形容词时（nessun libro, nessuna amica）表示“没有任何”：Non mi piace **nessun** film italiano." },
      { "ok": false, "t": "**不要**把“也不”说成 anche：回答别人的否定句，说 **Neanche io**（我也不），不说 Anche io non。**不要**把 nessuno 放在 non 前面又重复：说 Non viene nessuno，不说 Non nessuno viene。" }
    ]
  },
  "logica": [
    "汉语的“没”只出现一次：“我什么都没看见”。英语里两个否定会互相抵消（I don’t see nothing 听起来有问题），所以很多人以为意大利语也这样。其实在意大利语里，双重否定不但可以，而且是必须的：Think in Italian 的说明是，否定词在动词后面时，要用 non + 动词 + niente / nessuno / mai 这个结构，双重否定在语法上是正确的，不会互相抵消。",
    "位置决定要不要 non。Think in Italian 说，niente、nulla、nessuno 作主语放在句首时，在动词前面，动词是肯定形式：Stasera nessuno è venuto（今晚没有人来）。放在动词后面时，它们是宾语，要用 non：Stasera non viene nessuno。这是一个简单的判断：否定词在前面，不用 non；否定词在后面，用 non。",
    "Vermont 大学 Mazzoni 的语法页给出了一张对照表：never = non … mai，not yet = non … ancora，no longer = non … più，neither … nor = né … né，not even = neanche / nemmeno / neppure，nobody = nessuno，nothing = niente / nulla。表里 non 都写在括号里或者在前面，提醒我们这些词一般要和 non 一起用。把它们当成“non + 一个词”的组合去记，最容易。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["你想说", "意大利语", "例句", "译文"],
    "righe": [
      ["不（一般否定）", "non + 动词", "Lei non viene.", "她不来。"],
      ["什么都没有", "non … niente / nulla", "Non vedo niente.", "我什么都没看见。"],
      ["没有人", "non … nessuno", "Non viene nessuno.", "没有人来。"],
      ["从来不", "non … mai", "Non vado mai al cinema.", "我从来不去看电影。"],
      ["不再", "non … più", "Non fumo più.", "我不再抽烟了。"],
      ["还没", "non … ancora", "Non ho ancora mangiato.", "我还没吃饭。"],
      ["连……也不", "neanche / nemmeno", "Neanche io.", "我也不。"]
    ]
  },
  "esempi": [
    { "gruppo": "non + 动词：基本否定", "items": [
      { "t": "Lei non viene.", "tr": "她不来。" },
      { "t": "Non parlo francese.", "tr": "我不会说法语。" },
      { "t": "Noi non siamo andati in Italia.", "tr": "我们没有去过意大利。" }
    ] },
    { "gruppo": "non … niente、non … nessuno：双重否定", "items": [
      { "t": "Non vedo niente.", "tr": "我什么都没看见。" },
      { "t": "Lei non vuole nulla.", "tr": "她什么也不要。" },
      { "t": "Stasera non viene nessuno.", "tr": "今晚没有人来。" },
      { "t": "Non c'è nessuno.", "tr": "没有人。" },
      { "t": "Non ho niente.", "tr": "我什么都没有。" }
    ] },
    { "gruppo": "否定词在动词前面：不用 non", "items": [
      { "t": "Nessuno lo sa.", "tr": "没有人知道。" },
      { "t": "Stasera nessuno è venuto.", "tr": "今晚没有人来。" },
      { "t": "Niente mi convince.", "tr": "什么都说服不了我。" }
    ] },
    { "gruppo": "non … mai、non … più、non … ancora", "items": [
      { "t": "Non vado mai al cinema.", "tr": "我从来不去看电影。" },
      { "t": "Non ho mai detto niente a nessuno.", "tr": "我从来没有对任何人说过什么。" },
      { "t": "Non fumo più.", "tr": "我不再抽烟了。" },
      { "t": "Non c'è più.", "tr": "已经没有了。" },
      { "t": "Non ho ancora mangiato.", "tr": "我还没吃饭。" }
    ] },
    { "gruppo": "né … né、neanche", "items": [
      { "t": "Non sa né il francese né il tedesco.", "tr": "他既不会法语也不会德语。" },
      { "t": "Non parlo cinese. — Neanche io.", "tr": "我不会说中文。——我也不会。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我什么都没看见。”哪一句对？", "opzioni": [
      { "t": "Non vedo niente.", "ok": true, "perche": "niente 在动词后面，动词前面必须有 non。" },
      { "t": "Vedo niente.", "ok": false, "perche": "niente 在动词后面时，缺少 non。" },
      { "t": "Non vedo non niente.", "ok": false, "perche": "non 只需要出现一次，不要重复。" }
    ] },
    { "q": "“今晚没有人来。”哪一句对？", "opzioni": [
      { "t": "Stasera non viene nessuno.", "ok": true, "perche": "nessuno 在动词后面，前面要有 non。" },
      { "t": "Stasera viene nessuno.", "ok": false, "perche": "nessuno 在动词后面时，缺少 non。" },
      { "t": "Stasera non nessuno viene.", "ok": false, "perche": "nessuno 不能夹在 non 和动词中间。" }
    ] },
    { "q": "“没有人知道。”（nessuno 放在句首）哪一句对？", "opzioni": [
      { "t": "Nessuno lo sa.", "ok": true, "perche": "nessuno 在动词前面，不用 non。" },
      { "t": "Nessuno non lo sa.", "ok": false, "perche": "nessuno 在前面时，不再加 non。" },
      { "t": "Nessuno lo non sa.", "ok": false, "perche": "non 不能放在代词和动词之间。" }
    ] },
    { "q": "“我从来不去看电影。”哪一句对？", "opzioni": [
      { "t": "Non vado mai al cinema.", "ok": true, "perche": "mai 在动词后面，前面要有 non。" },
      { "t": "Vado mai al cinema.", "ok": false, "perche": "mai 在动词后面时，缺少 non。" },
      { "t": "Non vado al cinema niente.", "ok": false, "perche": "“从来不”要用 mai，不是 niente。" }
    ] },
    { "q": "“我不再抽烟了。”哪一句对？", "opzioni": [
      { "t": "Non fumo più.", "ok": true, "perche": "non … più 表示“不再”。" },
      { "t": "Fumo più non.", "ok": false, "perche": "non 要放在动词前面，不能放在 più 后面。" },
      { "t": "Fumo non più.", "ok": false, "perche": "non 要放在动词 fumo 前面，不能放在 più 前面。" }
    ] },
    { "q": "“我还没吃饭。”哪一句对？", "opzioni": [
      { "t": "Non ho ancora mangiato.", "ok": true, "perche": "non … ancora 表示“还没有”，non 在助动词前。" },
      { "t": "Ho non ancora mangiato.", "ok": false, "perche": "non 要放在助动词 ho 前面。" },
      { "t": "Non ho mangiato ancora non.", "ok": false, "perche": "不能把 non 放在句子末尾。" }
    ] },
    { "q": "“我从来没有对任何人说过什么。”哪一句对？", "opzioni": [
      { "t": "Non ho mai detto niente a nessuno.", "ok": true, "perche": "多个否定词可以连用，前面只要一个 non。" },
      { "t": "Ho mai detto niente a nessuno.", "ok": false, "perche": "否定词都在后面，缺少 non。" },
      { "t": "Non ho mai non detto niente a nessuno.", "ok": false, "perche": "non 只出现一次，中间不要再加 non。" }
    ] },
    { "q": "有人说 Non parlo cinese，你回答“我也不会”，哪一句对？", "opzioni": [
      { "t": "Neanche io.", "ok": true, "perche": "neanche 表示“连……也不”，用来回应否定句。" },
      { "t": "Anche io non.", "ok": false, "perche": "回应否定句不用 anche，要用 neanche。" },
      { "t": "Io anche.", "ok": false, "perche": "这样说是肯定的“我也是”，不是“我也不”。" }
    ] },
    { "q": "“他既不会法语也不会德语。”哪一句对？", "opzioni": [
      { "t": "Non sa né il francese né il tedesco.", "ok": true, "perche": "né … né 表示“既不……也不”，通常前面有 non。" },
      { "t": "Non sa o il francese o il tedesco.", "ok": false, "perche": "o … o 表示“或者……或者”，不是否定。" },
      { "t": "Sa né il francese né il tedesco.", "ok": false, "perche": "动词前面没有 non，句子不自然。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Vai spesso al cinema?",
    "righe": [
      { "chi": "A", "t": "Vai spesso al cinema?", "tr": "你常去看电影吗？" },
      { "chi": "B", "t": "No, non vado mai al cinema.", "tr": "不，我从来不去看电影。" },
      { "chi": "A", "t": "Neanche io. Non mi piace nessun film.", "tr": "我也不去。我不喜欢任何电影。" },
      { "chi": "B", "t": "Allora non andiamo più!", "tr": "那我们再也不去了！" },
      { "chi": "A", "t": "Stasera non c'è nessuno a casa mia.", "tr": "今晚我家没有人。" },
      { "chi": "B", "t": "Perfetto: non ho niente da fare.", "tr": "太好了：我什么事也没有。" }
    ],
    "esercizi": [
      { "q": "B 说 “non vado mai”，为什么 vado 前面有 non？", "opzioni": [
        { "t": "mai 在动词后面，前面必须有 non", "ok": true, "perche": "否定词在动词后面时，要用 non + 动词 + mai 的双重否定。" },
        { "t": "因为 vado 是不规则动词", "ok": false, "perche": "是否用 non 和动词是否规则无关。" },
        { "t": "因为这是问句", "ok": false, "perche": "这是陈述句，不是问句。" }
      ] },
      { "q": "A 说 “Neanche io”，这句话的意思是什么？", "opzioni": [
        { "t": "我也不（回应别人的否定）", "ok": true, "perche": "neanche 表示“连……也不”，用来回应否定句。" },
        { "t": "我也是（回应别人的肯定）", "ok": false, "perche": "回应肯定句用 anche io，不是 neanche io。" },
        { "t": "我不是你", "ok": false, "perche": "这句话和“你”无关，是回应别人的否定。" }
      ] },
      { "q": "A 说 “non c'è nessuno”，nessuno 的意思是什么？", "opzioni": [
        { "t": "没有人", "ok": true, "perche": "nessuno 表示“没有人”，在动词后面时要和 non 连用。" },
        { "t": "每个人", "ok": false, "perche": "“每个人”是 ognuno，不是 nessuno。" },
        { "t": "有些人", "ok": false, "perche": "“有些人”是 qualcuno，不是 nessuno。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的否定只用一个词，英语里两个否定会互相抵消，所以学习者常常漏掉 non，或者把否定词放错位置：说成 **Vedo niente**（缺少 non）、**Non nessuno viene**（位置不对）、**Anche io non**（应该是 neanche）。",
    "perche": "汉语说“我什么都没看见”，“没”只出现一次，句尾的“什么都”是普通词。意大利语的 niente、nessuno、mai 本身是否定词，放在动词后面时，必须有 non 配合，这是语法的要求，不是强调。两个否定也不会互相抵消。",
    "esci": "记一个简单的判断：否定词在动词前面，不用 non（Nessuno lo sa）；否定词在动词后面，必须用 non（Non lo sa nessuno）。回应别人的否定句时，用 neanche（Neanche io），不要用 anche。",
    "esempi": [
      { "sbagliata": "Vedo niente.", "giusta": "Non vedo niente." },
      { "sbagliata": "Non nessuno viene.", "giusta": "Non viene nessuno." },
      { "sbagliata": "Nessuno non lo sa.", "giusta": "Nessuno lo sa." },
      { "sbagliata": "Anche io non.", "giusta": "Neanche io." }
    ]
  },
  "curiosi": [
    { "titolo": "双重否定不会互相抵消", "t": "Think in Italian 的说明是：双重否定在意大利语语法里是正确的，而且不会像数学里的负负得正那样互相抵消。它的作用是加强否定的意思。" },
    { "titolo": "多个否定词连用", "t": "意大利语可以在一个句子里放好几个否定词，只要最前面有一个 non：Non ho mai detto niente a nessuno（我从来没有对任何人说过什么）。把句子拆开看，每个否定词只负责一个成分：mai 管时间，niente 管内容，nessuno 管对象。" },
    { "titolo": "nessuno 也可以当形容词", "t": "Mazzoni 的语法页把 nessun / nessuna 单独列出，意思是“没有任何”：Non mi piace nessun film italiano（我不喜欢任何意大利电影）、Nessuna amica è simpatica come te（没有哪个朋友像你一样亲切）。作代词时，nessuno 后面的动词和形容词用单数。" },
    { "titolo": "neanche、nemmeno、neppure", "t": "Mazzoni 的语法页把这三个词放在一起，意思是“连……也不”。Neanche io 和 Nemmeno io 都是回应别人的否定句，意思差不多，日常说话里都很常见，选其中一个就好。" }
  ],
  "pragmatica": "回答问题时，最自然的是整句：Non vado mai al cinema，不要只说 mai。回应别人的否定，用 Neanche io 或者 Nemmeno io。对不熟的人说“我什么都不需要”，用 Non ho bisogno di niente，不说 Niente，因为只说 Niente 有时听起来很生硬。说“没有任何”的时候，用 nessun / nessuna + 名词：Non ho nessun problema。",
  "esercizi": [
    { "k": "scegli", "q": "“他从来不说话。”哪一句对？", "opzioni": [
      { "t": "Non parla mai.", "ok": true, "perche": "mai 在动词后面，前面要有 non。" },
      { "t": "Parla mai.", "ok": false, "perche": "mai 在动词后面时，缺少 non。" },
      { "t": "Non mai parla.", "ok": false, "perche": "mai 要放在动词的后面，不能夹在中间。" }
    ] },
    { "k": "scegli", "q": "“我没有任何问题。”（nessun + 名词）哪一句对？", "opzioni": [
      { "t": "Non ho nessun problema.", "ok": true, "perche": "nessun + 阳性单数名词，表示“没有任何”，前面有 non。" },
      { "t": "Non ho nessuni problemi.", "ok": false, "perche": "nessuno 不用复数，后面的名词也是单数。" },
      { "t": "Ho non nessun problema.", "ok": false, "perche": "non 要放在动词 ho 前面。" }
    ] },
    { "k": "scegli", "q": "别人说 Non mi piace il caffè，你想说“我也不喜欢”，哪一句对？", "opzioni": [
      { "t": "Neanche a me.", "ok": true, "perche": "回应否定句用 neanche，a me 表示“对我来说”。" },
      { "t": "Anche a me.", "ok": false, "perche": "anche a me 是“我也喜欢”，意思相反。" },
      { "t": "Niente a me.", "ok": false, "perche": "niente 不能这样回应别人的话。" }
    ] },
    { "k": "buco", "zh": "Non fumo ＿.", "tr": "我不再抽烟了。", "opzioni": [
      { "t": "più", "ok": true, "perche": "non … più 表示“不再”。" },
      { "t": "mai non", "ok": false, "perche": "mai non 不是一个固定搭配，也不表示“不再”。" },
      { "t": "nessuno", "ok": false, "perche": "nessuno 是“没有人”，这里需要“不再”。" }
    ] },
    { "k": "buco", "zh": "Non c'è ＿ a casa.", "tr": "家里没有人。", "opzioni": [
      { "t": "nessuno", "ok": true, "perche": "nessuno 表示“没有人”，和 non 连用。" },
      { "t": "niente", "ok": false, "perche": "niente 是“什么都没有”，指事物，不指人。" },
      { "t": "mai", "ok": false, "perche": "mai 是“从来不”，不表示“没有人”。" }
    ] },
    { "k": "buco", "zh": "Non ho ＿ da fare.", "tr": "我没有事情要做。", "opzioni": [
      { "t": "niente", "ok": true, "perche": "niente 表示“什么都没有”，和 non 连用。" },
      { "t": "nessuno", "ok": false, "perche": "nessuno 指人；这里指的是事情，要用 niente。" },
      { "t": "più", "ok": false, "perche": "più 表示“不再”，放在这里意思不通。" }
    ] },
    { "k": "ordine", "t": "non vado mai al cinema", "tr": "我从来不去看电影。" },
    { "k": "ordine", "t": "non viene nessuno stasera", "tr": "今晚没有人来。" },
    { "k": "scrivi", "q": "用意大利语写：“我什么都没看见。”", "a": "Non vedo niente.", "accetta": ["Non vedo nulla.", "Io non vedo niente.", "Io non vedo nulla."], "perche": "niente / nulla 在动词后面，前面要有 non。" },
    { "k": "scrivi", "q": "用意大利语写：“没有人知道。”", "a": "Nessuno lo sa.", "accetta": ["Non lo sa nessuno.", "Nessuno sa.", "Non sa nessuno."], "perche": "nessuno 在动词前面，不用 non；在后面则要用 non。" },
    { "k": "trasforma", "consegna": "把句子改成否定句：“我从来不去看电影”，用 non … mai。", "base": "Vado al cinema.", "accetta": ["Non vado mai al cinema.", "Io non vado mai al cinema."], "rifiutate": [
      { "t": "Vado mai al cinema.", "perche": "mai 在动词后面时，前面必须有 non。" }
    ], "perche": "non + 动词 + mai：Vado → Non vado mai。" },
    { "k": "trasforma", "consegna": "把句子改成“没有人来”，用 non … nessuno。", "base": "Viene Marco.", "accetta": ["Non viene nessuno."], "rifiutate": [
      { "t": "Viene nessuno.", "perche": "nessuno 在动词后面时，前面必须有 non。" }
    ], "perche": "non + 动词 + nessuno：Viene → Non viene nessuno。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Non parlo cinese." },
      { "chi": "B", "t": "＿ io.", "buco": true }
    ], "opzioni": [
      { "t": "Neanche", "ok": true, "perche": "回应别人的否定句用 neanche：我也不。" },
      { "t": "Anche", "ok": false, "perche": "anche 回应肯定句，意思是“我也是”。" },
      { "t": "Mai", "ok": false, "perche": "Mai io 不是“我也不”的说法。" }
    ] }
  ],
  "capaci": [
    "你会用 non + 动词 说普通的否定句，复合时态里把 non 放在助动词前面。",
    "你会用 non … niente、non … nessuno、non … mai、non … più 做双重否定，知道它们不会互相抵消。",
    "你会判断位置：否定词在动词前面不用 non，在动词后面必须有 non。",
    "你会用 Neanche io 或 Nemmeno io 回应别人的否定句，也会用 né … né 说“既不……也不”。"
  ],
  "fonti": [
    "Think in Italian, «Negative Sentences in Italian» (non, niente, nulla, nessuno, mai, né… né…; doppia negazione e posizione dell'espressione negativa)",
    "University of Vermont, Cristina Mazzoni, «il sito di grammatica italiana: negatives (i negativi)» (non… mai, non… ancora, non… più, né… né, neanche, nemmeno, neppure, nessuno, nessun, niente, nulla)",
    "Tatoeba (ita.tsv), controllo della naturalezza di non vedo niente, non vado mai, non c'è nessuno, non ho ancora, neanche io, nemmeno io"
  ]
};
