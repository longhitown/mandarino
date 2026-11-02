/* Lezione 34 · Preposizioni di tempo: da, per, fra, fa, in, entro, fino a (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["prep-tempo"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Abito a Milano da tre anni.", "tr": "我在米兰住了三年了。（现在还住）" },
      { "t": "Ho abitato a Torino per tre anni.", "tr": "我在都灵住过三年。（已经结束）" },
      { "t": "Parto fra tre giorni.", "tr": "我三天后出发。" },
      { "t": "Ho incontrato Anna tre giorni fa.", "tr": "我三天前见到了安娜。" }
    ],
    "domanda": "这四句都有“三”加时间。汉语里“三年”“三天后”“三天前”都是直接说。意大利语里，每一句用的小词一样吗？哪一句说的事现在还在继续？哪一句说将来，哪一句说过去？",
    "risposta": "小词不一样。**da tre anni** + 现在时：从三年前开始，到现在还在继续（我现在还住在米兰）。**per tre anni** + 过去时：一段已经结束的时间。**fra tre giorni**：从现在往后数，将来。**tre giorni fa**：从现在往前数，过去，**fa** 放在时间的后面。所以说时间前先问自己：这件事是“还在继续”“已经结束”“要在将来发生”，还是“发生在过去的某一刻”？"
  },
  "regola": {
    "enunciato": "意大利语表示时间的小词要看“时间线”上的位置：**da** 从过去某一点起，一直持续到现在；**per** 一段独立的时间长度（已经结束或有计划）；**fra / tra** 从现在往后数，将来；**fa** 从现在往前数，过去；**in** 完成一件事所用的时间；**entro** 最迟到什么时候；**fino a** 持续到什么时候为止。",
    "schema": ["动词", "da / per / in", "+ 一段时间", "｜", "fra + 一段时间", "｜", "一段时间 + fa"],
    "punti": [
      { "ok": true, "t": "**da**：持续到现在的事，动词用现在时。Studio italiano da due anni. Aspetto da un'ora. 也可以问：Da quanto tempo? Da quando?（多久了？从什么时候起？）" },
      { "ok": true, "t": "**per**：说一段时间的长度，常用过去时或将来时。Ho dormito per otto ore. Resto a Roma per una settimana. 口语里 per 经常省略：Ho dormito otto ore." },
      { "ok": true, "t": "**fra / tra**：“……以后”，指将来，放在时间前面。Torno fra due ore. 它说的是“到那时才发生”，不是“持续多久”。" },
      { "ok": true, "t": "**fa**：“……以前”，放在时间后面，动词是过去时。Sono arrivato due ore fa. 前面不加任何小词。" },
      { "ok": true, "t": "**in**：做完一件事花了多久。Ho finito il lavoro in due ore.（两小时就做完了。）也用于月份和季节：in estate，in inverno，in agosto。" },
      { "ok": true, "t": "**entro**：最迟的期限，后面直接接时间。Consegno entro venerdì. **fino a**：持续到某一点。Resto fino a domenica. **durante**：在某个过程之中。Durante la cena non uso il telefono." },
      { "ok": true, "t": "**a** 用于钟点和时刻：alle otto，all'una，a mezzogiorno，a mezzanotte。**da … a …** 表示范围：dalle nove alle cinque。" },
      { "ok": false, "t": "**不要**照汉语的顺序把“前、后”放在时间后面：*due giorni fra 不成立。“以后”是 fra + 时间，“以前”是 时间 + fa。" }
    ]
  },
  "logica": [
    "汉语的“三年”可以是“学了三年”也可以是“学三年了”，区别在“了”的位置或语境里；动词本身不变。意大利语把这个区别放在小词里：da 表示“从那时起一直到现在”，所以动词用现在时（意大利语认为，事情现在还在进行，所以用现在时）；per 只量一量长度，事情本身是否还在继续不在这个词里，要看动词的时态。",
    "fra 和 fa 是一对镜子：fra 在时间前面，指向将来；fa 在时间后面，指向过去。可以想象一条时间线，“现在”在中间，fra 是往右走，fa 是往左走。汉语的“后”“前”放在同一个位置，意大利语用两个不同的词和两个不同的位置，所以最容易搞混。",
    "in 说的是“用了多久完成”，所以它总是和能完成的动作连用（finire、fare、arrivare）：in un'ora。而 entro 说的是“期限”，是时间线上的一个点，不是一段长度：entro le sei。两个都可以译作汉语的“在……之内”，但意义不同：in 说花了多长，entro 说最晚什么时候。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["想表达", "用", "例句"],
    "righe": [
      ["从过去起，现在还在", "da + 时间（现在时）", "Studio da due anni."],
      ["一段时间的长度", "per + 时间（或省略）", "Ho dormito per otto ore."],
      ["将来，多久以后", "fra / tra + 时间", "Parto fra due giorni."],
      ["过去，多久以前", "时间 + fa", "Sono partito due giorni fa."],
      ["花了多久完成", "in + 时间", "Ho finito in un'ora."],
      ["最迟期限", "entro + 时间点", "Torno entro venerdì."],
      ["持续到……为止", "fino a + 时间点", "Resto fino a domenica."],
      ["在……之中", "durante + 名词", "Durante la lezione ascolto."]
    ]
  },
  "esempi": [
    { "gruppo": "da 与 per：持续到现在，还是已经结束", "items": [
      { "t": "Lavoro in questa azienda da cinque anni.", "tr": "我在这家公司工作五年了。", "nota": "现在还在这里工作。" },
      { "t": "Ho lavorato in banca per due anni.", "tr": "我在银行工作过两年。", "nota": "现在已经不在银行工作了。" },
      { "t": "Da quanto tempo aspetti?", "tr": "你等了多久了？" },
      { "t": "Ieri ho dormito per dieci ore.", "tr": "昨天我睡了十个小时。" }
    ] },
    { "gruppo": "fra 与 fa：将来与过去", "items": [
      { "t": "Il treno parte fra dieci minuti.", "tr": "火车十分钟后开。" },
      { "t": "Ci vediamo fra una settimana.", "tr": "我们一个星期后见。" },
      { "t": "Mi ha telefonato un'ora fa.", "tr": "他一个小时前给我打了电话。" },
      { "t": "Siamo arrivati a Roma due mesi fa.", "tr": "我们两个月前到了罗马。" }
    ] },
    { "gruppo": "in 与 entro：用了多久，最迟什么时候", "items": [
      { "t": "Ho preparato la cena in mezz'ora.", "tr": "我半小时就做好了晚饭。" },
      { "t": "Devo pagare l'affitto entro il cinque del mese.", "tr": "我必须在这个月五号之前付房租。" }
    ] },
    { "gruppo": "钟点、范围、季节", "items": [
      { "t": "Il negozio apre alle nove e chiude alle sette.", "tr": "商店九点开门，七点关门。" },
      { "t": "Lavoro dal lunedì al venerdì, dalle nove alle cinque.", "tr": "我从星期一到星期五工作，从九点到五点。" },
      { "t": "In estate vado spesso al mare.", "tr": "夏天我常去海边。" },
      { "t": "Resto a casa fino a domenica sera.", "tr": "我待在家里，一直到星期天晚上。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我学意大利语三年了。”（现在还在学）哪一句对？", "opzioni": [
      { "t": "Studio italiano da tre anni.", "ok": true, "perche": "da + 现在时：从三年前开始，现在还在继续。" },
      { "t": "Studio italiano per tre anni.", "ok": false, "perche": "per 只说一段时间的长度，不表示“到现在还在继续”，而且现在时的 studio 与它搭配不自然。" },
      { "t": "Ho studiato italiano tre anni fa.", "ok": false, "perche": "“三年前学过意大利语”，说的是过去某一个时间点，意思完全不同。" }
    ] },
    { "q": "“昨天我学习了三个小时。”哪一句对？", "opzioni": [
      { "t": "Ieri ho studiato per tre ore.", "ok": true, "perche": "ieri 加完成的动作，per 说明时长。" },
      { "t": "Ieri studio da tre ore.", "ok": false, "perche": "da + 现在时说的是“到现在为止”，与 ieri（昨天）矛盾。" },
      { "t": "Ieri ho studiato fra tre ore.", "ok": false, "perche": "fra 指将来，不能和过去时的 ho studiato 连用。" }
    ] },
    { "q": "“我两个星期后去意大利。”哪一句对？", "opzioni": [
      { "t": "Parto per l'Italia fra due settimane.", "ok": true, "perche": "fra + 一段时间：从现在往后数。" },
      { "t": "Parto per l'Italia due settimane fa.", "ok": false, "perche": "fa 表示过去，与 parto（将来的安排）矛盾。" },
      { "t": "Parto per l'Italia da due settimane.", "ok": false, "perche": "da 表示“从两周前起一直到现在”，不能用来说将来。" }
    ] },
    { "q": "“三天前我去了罗马。”哪一句对？", "opzioni": [
      { "t": "Sono stato a Roma tre giorni fa.", "ok": true, "perche": "时间 + fa，表示从现在往前数。" },
      { "t": "Sono stato a Roma fra tre giorni.", "ok": false, "perche": "fra 指将来，不能和过去时连用。" },
      { "t": "Sono stato a Roma da tre giorni.", "ok": false, "perche": "da + 时间表示持续到现在，而不是过去的一个时间点。" }
    ] },
    { "q": "“周五之前我要交报告。”（周五是最后期限）哪一句对？", "opzioni": [
      { "t": "Devo consegnare il rapporto entro venerdì.", "ok": true, "perche": "entro 表示最迟的期限，后面直接接日期。" },
      { "t": "Devo consegnare il rapporto fino a venerdì.", "ok": false, "perche": "fino a 表示持续到某一点，不表示“最迟”，与一次性的“交报告”不合。" },
      { "t": "Devo consegnare il rapporto da venerdì.", "ok": false, "perche": "da venerdì 的意思是“从周五起”，方向相反。" }
    ] },
    { "q": "“我会在家待到星期天。”哪一句对？", "opzioni": [
      { "t": "Resto a casa fino a domenica.", "ok": true, "perche": "fino a：持续到某一点为止，resto 是持续的状态。" },
      { "t": "Resto a casa entro domenica.", "ok": false, "perche": "entro 是期限（最迟什么时候），不用来说“待到”。" },
      { "t": "Resto a casa fra domenica.", "ok": false, "perche": "fra 后面要接一段时间（如 fra due giorni），不接星期几。" }
    ] },
    { "q": "“我两个小时就做完了所有的作业。”哪一句对？", "opzioni": [
      { "t": "Ho finito tutti i compiti in due ore.", "ok": true, "perche": "in + 一段时间，说明完成一件事用了多久。" },
      { "t": "Ho finito tutti i compiti fra due ore.", "ok": false, "perche": "fra 指将来，和过去时的 ho finito 矛盾。" },
      { "t": "Ho finito tutti i compiti da due ore.", "ok": false, "perche": "da 表示持续到现在，不能说明“完成用了多久”。" }
    ] },
    { "q": "“会议八点开始。”哪一句对？", "opzioni": [
      { "t": "La riunione inizia alle otto.", "ok": true, "perche": "钟点用 a：alle otto（a + le）。" },
      { "t": "La riunione inizia in otto.", "ok": false, "perche": "in 不用在钟点前面；in 后面接一段时间、月份或季节。" },
      { "t": "La riunione inizia da otto.", "ok": false, "perche": "da 表示从某一点开始持续，不能单独用来指一个钟点。" }
    ] },
    { "q": "“吃饭的时候不要看手机。”哪一句对？", "opzioni": [
      { "t": "Durante la cena non guardare il telefono.", "ok": true, "perche": "durante + 名词：在某个过程之中。" },
      { "t": "Fra la cena non guardare il telefono.", "ok": false, "perche": "fra 表示“多久以后”，不表示“在……的时候”。" },
      { "t": "Fino a la cena non guardare il telefono.", "ok": false, "perche": "fino a 表示“直到”，而且 a la 要合成 alla。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Quando parti?",
    "righe": [
      { "chi": "A", "t": "Da quanto tempo studi italiano?", "tr": "你学意大利语多久了？" },
      { "chi": "B", "t": "Da un anno. Parto per l'Italia fra due settimane.", "tr": "一年了。两个星期后我去意大利。" },
      { "chi": "A", "t": "Quanto tempo resti?", "tr": "你待多久？" },
      { "chi": "B", "t": "Per un mese. Torno entro il quindici di giugno.", "tr": "待一个月。我六月十五号之前回来。" }
    ],
    "esercizi": [
      { "q": "B 学意大利语的情况是怎样的？", "opzioni": [
        { "t": "已经学了一年，现在还在学", "ok": true, "perche": "da un anno + 现在时：从一年前起一直持续到现在。" },
        { "t": "一年前学过，现在不学了", "ok": false, "perche": "那样要说 ho studiato per un anno（已经结束）。" },
        { "t": "一年后才开始学", "ok": false, "perche": "一年后要说 fra un anno。" }
      ] },
      { "q": "“Torno entro il quindici di giugno” 的意思是？", "opzioni": [
        { "t": "最晚六月十五号回来", "ok": true, "perche": "entro 表示最迟的期限。" },
        { "t": "六月十五号再回来，之前都不在", "ok": false, "perche": "那样要说 torno il quindici di giugno 或 torno dopo il quindici。" },
        { "t": "一直待到六月十五号", "ok": false, "perche": "“待到”要用 fino a，不是 entro。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的“后”和“前”放在同一个位置，所以常常说成 *Parto in due giorni（想说两天后）、*Ho incontrato Marco fra due giorni（想说两天前）。另一个常见的错误是用 per 代替 da：*Studio italiano per tre anni（想说学了三年，现在还在学）。",
    "perche": "汉语的“三天后出发”“三天前见过”“学了三年”几乎不需要小词，时间点和长度由语境和动词后面的“了”提示。意大利语把这些区别放在小词上，而 in、fra、fa 又都常常翻译成“……内、……后、……前”，学习者容易选错。",
    "esci": "说时间前先画一条线：现在在中间。往后数是 **fra**（未来）；往前数是 **fa**（放在时间后面）；从过去一直到现在，动词用现在时，用 **da**；一段独立的时间长度用 **per**（或不加）；完成一件事用了多久，用 **in**；最迟的期限，用 **entro**。",
    "esempi": [
      { "sbagliata": "Parto in due giorni.", "giusta": "Parto fra due giorni." },
      { "sbagliata": "Ho incontrato Marco fra due giorni.", "giusta": "Ho incontrato Marco due giorni fa." },
      { "sbagliata": "Torno entro di venerdì.", "giusta": "Torno entro venerdì." },
      { "sbagliata": "Studio italiano per tre anni.", "giusta": "Studio italiano da tre anni." }
    ]
  },
  "curiosi": [
    { "titolo": "da 与过去时：Non lo vedo da due anni", "t": "da + 现在时是最常见的搭配：Non lo vedo da due anni（我两年没见他了）。在否定句里，也可以听到过去时：Non l'ho visto da due anni。两种说法都对，现在时更口语。如果要说过去某个时刻之前的持续，用未完成过去时：Lo aspettavo da un'ora quando è arrivato（他来的时候我已经等了一个小时了）。" },
    { "titolo": "fa 的来源", "t": "fa 本来是动词 fare（做）的第三人称现在时，原义是“……在这里过去了”。所以 due giorni fa 字面上是“两天过去了”，放在时间后面。这也解释了为什么 fa 是固定的，不随人称变化。" },
    { "titolo": "星期几要不要冠词", "t": "说“这个星期一”，不用冠词，也不用介词：Lunedì vado dal dentista。说“每个星期一”，用定冠词：Il lunedì vado in piscina。同样，la sera、la mattina 表示“每天晚上、每天早上”的习惯。" }
  ],
  "pragmatica": "约时间和安排计划时，最常用的是 fra + 一段时间（Ci vediamo fra un'ora）、alle + 钟点（Ci vediamo alle otto）和 entro + 期限（Ti rispondo entro domani）。在邮件和工作场合，entro 比 per 更精确，也更礼貌，因为它清楚说明“最迟什么时候”。",
  "esercizi": [
    { "k": "scegli", "q": "“我在这里工作两年了。”（现在还在这里）哪一句对？", "opzioni": [
      { "t": "Lavoro qui da due anni.", "ok": true, "perche": "da + 现在时：从两年前起到现在。" },
      { "t": "Lavoro qui due anni fa.", "ok": false, "perche": "due anni fa 是“两年前”，指过去的某一点。" },
      { "t": "Lavoro qui fra due anni.", "ok": false, "perche": "fra 指将来，这里说的是持续到现在。" }
    ] },
    { "k": "scegli", "q": "“Sono arrivato un'ora fa” 的意思是？", "opzioni": [
      { "t": "我一个小时前到的", "ok": true, "perche": "时间 + fa 表示过去的某一点。" },
      { "t": "我一个小时后到", "ok": false, "perche": "一个小时后要说 fra un'ora。" },
      { "t": "我到了一个小时", "ok": false, "perche": "“持续一个小时”要用 per 或 da，动词也不一样。" }
    ] },
    { "k": "buco", "zh": "Il treno parte ＿ dieci minuti.", "tr": "火车十分钟后开。", "opzioni": [
      { "t": "fra", "ok": true, "perche": "fra + 一段时间表示将来的“多久以后”。" },
      { "t": "fa", "ok": false, "perche": "fa 放在时间后面，指过去。" },
      { "t": "da", "ok": false, "perche": "da 表示从过去起持续到现在。" }
    ] },
    { "k": "buco", "zh": "Ho incontrato Anna due giorni ＿.", "tr": "我两天前见到了安娜。", "opzioni": [
      { "t": "fa", "ok": true, "perche": "时间 + fa：过去。" },
      { "t": "fra", "ok": false, "perche": "fra 在时间前面，指将来。" },
      { "t": "per", "ok": false, "perche": "per 说的是时长，不是“多久以前”。" }
    ] },
    { "k": "buco", "zh": "Posso risponderti ＿ domani sera.", "tr": "我最迟明天晚上回复你。", "opzioni": [
      { "t": "entro", "ok": true, "perche": "entro：最迟的期限，后面直接接时间。" },
      { "t": "durante", "ok": false, "perche": "durante 后面接过程，如 durante la cena。" },
      { "t": "fra", "ok": false, "perche": "fra 后面接一段时间，如 fra due ore，不接 domani sera。" }
    ] },
    { "k": "ordine", "t": "parto per l'Italia fra due settimane", "tr": "我两个星期后去意大利。" },
    { "k": "ordine", "t": "ho incontrato marco due giorni fa", "tr": "我两天前见到了马可。" },
    { "k": "scrivi", "q": "用意大利语写：“你学意大利语多久了？”（现在还在学）", "a": "Da quanto tempo studi italiano?", "accetta": ["Da quanto studi italiano?", "Da quanto tempo studi l'italiano?", "Da quanto tempo studia italiano?", "Da quanto tempo studia l'italiano?", "Da quanto studi l'italiano?"], "perche": "Da quanto tempo + 现在时：问一件事从过去持续到现在有多久。用 Lei 时动词是 studia。" },
    { "k": "scrivi", "q": "用意大利语写：“我两个小时后回来。”", "a": "Torno fra due ore.", "accetta": ["Torno tra due ore.", "Ritorno fra due ore.", "Ritorno tra due ore.", "Io torno fra due ore.", "Fra due ore torno."], "perche": "fra / tra + 一段时间：将来的“多久以后”。" },
    { "k": "trasforma", "consegna": "把“三天后”改成“三天前”，用 fa 和过去时（用阳性）。", "base": "Parto fra tre giorni.", "accetta": ["Sono partito tre giorni fa.", "Tre giorni fa sono partito.", "Io sono partito tre giorni fa."], "rifiutate": [
      { "t": "Parto tre giorni fa.", "perche": "fa 指过去，动词也要改成过去时 sono partito。" }
    ], "perche": "fra tre giorni（将来）变成 tre giorni fa（过去），动词从 parto 变成 sono partito。" },
    { "k": "trasforma", "consegna": "把“学了三年（现在不学了）”改成“学了三年（现在还在学）”。", "base": "Ho studiato italiano per tre anni.", "accetta": ["Studio italiano da tre anni.", "Studio l'italiano da tre anni.", "Io studio italiano da tre anni."], "rifiutate": [
      { "t": "Studio italiano per tre anni.", "perche": "per 不表示“到现在还在继续”，应该用 da。" }
    ], "perche": "还在继续的事，用现在时 + da。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Quando consegni il progetto?" },
      { "chi": "B", "t": "Lo consegno ＿ venerdì.", "buco": true }
    ], "opzioni": [
      { "t": "entro", "ok": true, "perche": "entro venerdì：最迟到周五。" },
      { "t": "fa", "ok": false, "perche": "fa 放在时间后面，指过去，不能放在 venerdì 前。" },
      { "t": "durante", "ok": false, "perche": "durante 后面接过程，不接星期几。" }
    ] }
  ],
  "capaci": [
    "你会区分 da 和 per：一件事从过去起到现在还在继续，还是一段已经结束的时间。",
    "你会用 fra 说将来的“多久以后”，用 fa 说过去的“多久以前”，并且放在正确的位置。",
    "你会用 in 说“用了多久完成”，用 entro 说“最迟什么时候”，用 fino a 说“待到什么时候”。",
    "你会用 alle、dal … al …、durante、in estate 等表达钟点、范围、季节和过程。"
  ],
  "fonti": [
    "Wikipedia italiano, voce «Preposizione» (quadro generale delle preposizioni proprie e improprie; non tratta nel dettaglio i complementi di tempo)",
    "Tatoeba (ita.tsv): frasi consultate con da tre anni, due giorni fa, fra due mesi per controllare la naturalezza delle costruzioni"
  ]
};
