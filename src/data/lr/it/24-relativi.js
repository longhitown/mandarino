/* Lezione 24 · I pronomi relativi che e cui (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["relativi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Il libro che ho comprato ieri è bellissimo.", "tr": "我昨天买的书非常好看。" },
      { "t": "La ragazza che parla con Marco è mia cugina.", "tr": "和马可说话的那个女孩是我表姐。" },
      { "t": "La città in cui abito è piccola ma tranquilla.", "tr": "我住的城市不大，但很安静。" },
      { "t": "Ecco la persona di cui ti parlavo.", "tr": "这就是我跟你说过的那个人。" }
    ],
    "domanda": "汉语把“我昨天买”“和马可说话”“我住”这些成分放在名词的**前面**，再加“的”。意大利语把它们放在名词的哪一边？连接词是什么？为什么第三、第四句里不是 che，而是 in cui、di cui？",
    "risposta": "意大利语把这部分放在名词的**后面**：先说 il libro、la ragazza、la città、la persona，再接一个连接词和一个完整的句子。前两句用 **che**（la ragazza 是“说话”的人，il libro 是“买”的东西）。第三、四句里，动词本来带介词：abitare **in**、parlare **di**，介词不能丢，所以写成 **in cui**、**di cui**，介词放在 cui 的前面。"
  },
  "regola": {
    "enunciato": "意大利语的关系从句放在名词的**后面**，由关系代词引出，作用相当于汉语名词前面的“……的”。如果被修饰的名词在从句里是**主语或直接宾语**，用不变的 **che**；如果它在从句里带着**介词**（di、a、in、con、per……），用 **介词 + cui**，介词一定放在 cui 前面。关系代词不能省略，从句里也不能再重复这个名词的代词。",
    "schema": ["名词", "＋ che ＋ 句子", "｜", "名词", "＋ 介词 + cui ＋ 句子"],
    "punti": [
      { "ok": true, "t": "**che 作主语**：动词和前面的名词在人称和数上一致。La ragazza che parla（说话的女孩）；i ragazzi che parlano（说话的男孩们）。" },
      { "ok": true, "t": "**che 作宾语**：从句有自己的主语，宾语位置空着。Il libro che ho comprato（我买的书）。che 对人、对物都可以用，不变形。" },
      { "ok": true, "t": "**介词 + cui**：动词本来带什么介词，就放在 cui 前面，cui 前面不加冠词。La persona con cui lavoro（和我共事的人）；l'amico a cui ho scritto（我写信给他的朋友）。" },
      { "ok": true, "t": "**in cui 与 dove**：表示地点和时间时，in cui 是标准的说法；说地点时也可以用 dove：la casa in cui abito ＝ la casa dove abito。时间用 in cui：il giorno in cui ci siamo conosciuti。" },
      { "ok": true, "t": "**il cui / la cui / i cui / le cui**（……的）：表示所属，冠词和被拥有的东西一致。Un amico il cui padre è pianista（父亲是钢琴家的朋友）。" },
      { "ok": true, "t": "**quello che / ciò che**（……的东西）：名词没有出现时用。Quello che dici è vero.（你说的是真的。）介词放在前面：quello di cui ho bisogno（我需要的东西）。" },
      { "ok": false, "t": "**不要**省略 che，也**不要**给 che 加介词。*Il libro ho comprato* 和 *La città che abito* 都是错的：连接词不能少，介词要用 in cui。" },
      { "ok": false, "t": "**不要**在从句里再说一次这个名词的代词。*Il libro che l'ho letto* 是错的：che 已经代替了它，写成 Il libro che ho letto。" }
    ]
  },
  "logica": [
    "汉语的定语在名词前面：“我昨天买的书”“穿红衣服的女孩”，听的人要先听完整个修饰成分才知道说的是什么。意大利语相反：先说出名词（il libro），再说它是哪一个（che ho comprato ieri）。所以不能按汉语的顺序翻译，要先找出**中心名词**，把它放前面，再接 che 或 介词 + cui。",
    "一个很可靠的办法是把关系从句看成**两个句子合成一个**：Ho comprato un libro. Il libro è bello. 重复的名词（il libro）用关系代词代替，移到从句的开头：Il libro che ho comprato è bello. 如果重复的名词在第二句里带介词（Abito in una città → la città），介词就连同 cui 一起移到开头：La città in cui abito.",
    "为什么 che 前面不能有介词？che 本身没有“格”的标志，既当主语又当宾语，不适合再带介词。需要介词的时候，意大利语换成 cui，它专门用来放在介词后面，所以介词永远在关系代词前面，不会被留在句末。汉语的“我住的城市”里没有介词，所以学习者容易写成 *la città che abito*。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["句中本来的介词", "关系代词", "例句", "汉语"],
    "righe": [
      ["无：主语或直接宾语", "che", "Il libro che ho comprato", "我买的书"],
      ["di", "di cui", "La persona di cui parlo", "我说的人"],
      ["a", "a cui", "L'amico a cui scrivo", "我写信给他的朋友"],
      ["in", "in cui", "La città in cui abito", "我住的城市"],
      ["con", "con cui", "Il collega con cui lavoro", "和我共事的同事"],
      ["per", "per cui", "Il motivo per cui studio", "我学习的原因"],
      ["da", "da cui", "Il paese da cui vengo", "我来自的国家"],
      ["表示所属", "il cui / la cui", "La donna il cui figlio è medico", "儿子是医生的女人"]
    ]
  },
  "esempi": [
    { "gruppo": "che 作主语：谁做了这件事", "items": [
      { "t": "Conosci la ragazza che parla con Marco?", "tr": "你认识和马可说话的那个女孩吗？" },
      { "t": "Ho un amico che lavora a Berlino.", "tr": "我有一个在柏林工作的朋友。" },
      { "t": "I ragazzi che abitano qui sono miei cugini.", "tr": "住在这儿的男孩们是我的表兄弟。", "nota": "che 是主语，动词 abitano 和 i ragazzi 一致。" }
    ] },
    { "gruppo": "che 作宾语：被做的是什么", "items": [
      { "t": "Il libro che ho comprato ieri è bellissimo.", "tr": "我昨天买的书非常好看。" },
      { "t": "La pizza che hai ordinato è già pronta.", "tr": "你点的比萨已经好了。" },
      { "t": "Il film che abbiamo visto era lungo.", "tr": "我们看的电影很长。" },
      { "t": "Mi piace la maglia che porti oggi.", "tr": "我喜欢你今天穿的毛衣。" }
    ] },
    { "gruppo": "介词 + cui：介词跟着 cui", "items": [
      { "t": "La città in cui abito è piccola ma tranquilla.", "tr": "我住的城市不大，但很安静。" },
      { "t": "Ecco la persona di cui ti parlavo.", "tr": "这就是我跟你说过的那个人。" },
      { "t": "Il collega con cui lavoro è molto gentile.", "tr": "和我共事的同事很亲切。" },
      { "t": "L'amica a cui ho scritto vive a Torino.", "tr": "我写信给她的那个朋友住在都灵。" },
      { "t": "Il motivo per cui sono qui è semplice.", "tr": "我来这儿的原因很简单。" }
    ] },
    { "gruppo": "地点和时间：dove、in cui", "items": [
      { "t": "Questo è il bar dove ci incontriamo ogni mattina.", "tr": "这就是我们每天早上碰面的咖啡馆。" },
      { "t": "Ricordo il giorno in cui ci siamo conosciuti.", "tr": "我记得我们认识的那一天。" }
    ] },
    { "gruppo": "il cui 与 quello che", "items": [
      { "t": "Ho un vicino il cui cane abbaia tutta la notte.", "tr": "我有个邻居，他的狗整夜叫。" },
      { "t": "Quello che dici è vero.", "tr": "你说的是真的。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我昨天看的电影”。哪一个对？", "opzioni": [
      { "t": "il film che ho visto ieri", "ok": true, "perche": "名词放前面，用 che 引出从句；il film 是“看”的直接宾语。" },
      { "t": "il film ho visto ieri", "ok": false, "perche": "缺少关系代词。汉语的“的”在意大利语里必须由 che 或 介词 + cui 表达。" },
      { "t": "ieri ho visto il film che", "ok": false, "perche": "che 必须紧跟在它修饰的名词后面，不能放在句末。" }
    ] },
    { "q": "“我住的城市”。哪一个对？", "opzioni": [
      { "t": "la città in cui abito", "ok": true, "perche": "abitare 带介词 in，介词要放在 cui 前面。" },
      { "t": "la città che abito", "ok": false, "perche": "che 前面不能有介词，也不能漏掉 in；这句话意思不完整。" },
      { "t": "la città cui abito", "ok": false, "perche": "cui 前面必须有介词，这里漏掉了 in。" }
    ] },
    { "q": "“我跟你说过的那个人”。哪一个对？", "opzioni": [
      { "t": "la persona di cui ti ho parlato", "ok": true, "perche": "parlare di qualcuno：介词 di 放在 cui 前面。" },
      { "t": "la persona che ti ho parlato", "ok": false, "perche": "parlare 带介词 di，不能用 che；che 只代替主语或直接宾语。" },
      { "t": "la persona di che ti ho parlato", "ok": false, "perche": "介词后面的关系代词是 cui，不是 che。" }
    ] },
    { "q": "“说话的女孩。”哪一个对？", "opzioni": [
      { "t": "la ragazza che parla", "ok": true, "perche": "女孩是“说话”的人，也就是主语，用 che。" },
      { "t": "la ragazza cui parla", "ok": false, "perche": "cui 前面必须有介词；这里 la ragazza 是主语，用 che。" },
      { "t": "la ragazza di cui parla", "ok": false, "perche": "di cui parla 的意思是“他说起的女孩”，女孩变成了被谈论的人，不是“说话的女孩”。" }
    ] },
    { "q": "“住在这儿的男孩们是我的表兄弟。”哪一个对？", "opzioni": [
      { "t": "I ragazzi che abitano qui sono miei cugini.", "ok": true, "perche": "che 是主语，动词和 i ragazzi 一致，用复数 abitano。" },
      { "t": "I ragazzi che abita qui sono miei cugini.", "ok": false, "perche": "abita 是单数，但 i ragazzi 是复数；che 作主语时，动词和名词一致。" }
    ] },
    { "q": "“父亲是医生的那个男孩。”哪一个对？", "opzioni": [
      { "t": "il ragazzo il cui padre è medico", "ok": true, "perche": "il cui 表示所属，冠词 il 和 padre 一致。" },
      { "t": "il ragazzo che il padre è medico", "ok": false, "perche": "che 不能表示所属，也不能再重复 il padre；所属关系用 il cui。" },
      { "t": "il ragazzo cui il padre è medico", "ok": false, "perche": "表示所属要说 il cui，冠词在 cui 前面；单独的 cui 前面必须是介词，所以 cui il padre 不成立。" }
    ] },
    { "q": "“我读过的书。”哪一个对？", "opzioni": [
      { "t": "il libro che ho letto", "ok": true, "perche": "che 已经代替了 il libro，从句里不再重复代词。" },
      { "t": "il libro che l'ho letto", "ok": false, "perche": "l' 是“它”，和 che 重复。汉语里不会重复，意大利语里也不能。" }
    ] },
    { "q": "“我们认识的那一天。”哪一个对？", "opzioni": [
      { "t": "il giorno in cui ci siamo conosciuti", "ok": true, "perche": "表示时间用 in cui。" },
      { "t": "il giorno dove ci siamo conosciuti", "ok": false, "perche": "dove 只用于地点，不用于“那一天”这样的时间。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Alla festa di Sara",
    "righe": [
      { "chi": "A", "t": "Chi è il ragazzo che parla con Sara?", "tr": "和萨拉说话的那个男孩是谁？" },
      { "chi": "B", "t": "È Luca, l'amico di cui ti ho parlato ieri.", "tr": "是卢卡，就是我昨天跟你说过的那个朋友。" },
      { "chi": "A", "t": "Ah, quello che lavora a Milano?", "tr": "啊，在米兰工作的那个？" },
      { "chi": "B", "t": "Sì. La città in cui lavora è lontana, ma torna spesso.", "tr": "对。他工作的城市很远，不过他常回来。" },
      { "chi": "A", "t": "E la ragazza che porta il vestito rosso?", "tr": "那穿红色连衣裙的女孩呢？" },
      { "chi": "B", "t": "È sua sorella, quella con cui abita.", "tr": "是他妹妹，和他住在一起的那个。" }
    ],
    "esercizi": [
      { "q": "“l'amico di cui ti ho parlato” 里的 di 从哪里来？", "opzioni": [
        { "t": "parlare di qualcuno，动词本来带 di", "ok": true, "perche": "动词带什么介词，介词就放在 cui 前面。" },
        { "t": "di 在这里表示“的”，表示所属", "ok": false, "perche": "表示所属的是 il cui，不是 di cui。" },
        { "t": "di cui 是一个人名", "ok": false, "perche": "di cui 是关系代词，不是名字。" }
      ] },
      { "q": "“quello che lavora a Milano” 里的 che 是什么成分？", "opzioni": [
        { "t": "主语：是 quello 在米兰工作", "ok": true, "perche": "lavora 的主语就是 quello，che 代替它。" },
        { "t": "直接宾语：quello 被别人做某事", "ok": false, "perche": "lavorare 在这里没有宾语，che 代替的是做动作的人。" }
      ] },
      { "q": "“La città in cui lavora” 里的 in cui 代替什么？", "opzioni": [
        { "t": "lavora in una città 里的“in 这座城市”", "ok": true, "perche": "lavorare in + 地点：介词 in 和 cui 一起移到名词后面。" },
        { "t": "他本人", "ok": false, "perche": "in cui 代替的是地点，不是人。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "学习者常按汉语的顺序，把整个修饰成分放在名词前面，漏掉 che（*Ieri ho comprato il libro è bello*）；或者看到“住的城市”没有介词，就直接写 che（*la città che abito*）；还有人在从句里再重复一次代词（*il libro che l'ho letto*）。",
    "perche": "汉语的“的”只需要一个标记，就能把任何成分变成定语，动词需要什么介词也不必说出来。意大利语的关系从句是一个完整的句子：名词在前，连接词在中间，介词要跟着 cui 一起出现。汉语里没有这一步，所以容易漏掉。",
    "esci": "三步：①先找中心名词，把它放前面；②问：这个名词在从句里是主语或直接宾语吗？是，用 che；③如果动词需要介词（abitare in、parlare di、lavorare con、scrivere a），就写 介词 + cui，介词紧贴 cui。从句里不要再重复这个名词的代词。",
    "esempi": [
      { "sbagliata": "Ieri ho comprato il libro è bello.", "giusta": "Il libro che ho comprato ieri è bello." },
      { "sbagliata": "La città che abito è piccola.", "giusta": "La città in cui abito è piccola." },
      { "sbagliata": "La persona che parlo di è Luca.", "giusta": "La persona di cui parlo è Luca." },
      { "sbagliata": "Il libro che l'ho letto è bello.", "giusta": "Il libro che ho letto è bello." }
    ]
  },
  "curiosi": [
    { "titolo": "il quale：书面语里的另一个关系代词", "t": "在书面语和正式文件中，常用 il quale、la quale、i quali、le quali 代替 che 或 cui。它们和名词一致，也能和介词合成一个词：Le amiche alle quali scrivo vivono a Roma. 口语里很少这样说，日常说 cui 就可以了。" },
    { "titolo": "quello che、ciò che、chi：名词没有出现的时候", "t": "名词没有说出来时，意大利语用 quello che 或 ciò che 表示“……的东西”：Ciò che voglio adesso è un caffè caldo. 带介词时：Quello di cui ho bisogno è dormire un po'. chi 表示“……的人”，常出现在谚语里：Chi cerca trova.（找的人就会找到。）" },
    { "titolo": "il cui：冠词跟着被拥有的东西", "t": "il cui、la cui、i cui、le cui 的冠词和**被拥有的东西**一致，不和所有者一致：Ho un amico il cui padre è un famoso pianista.（padre 是阳性单数，所以用 il cui；朋友是男是女都不影响。）il cui 和被拥有的名词之间不能插入别的冠词。" },
    { "titolo": "口语里的 che：不要在书面语里模仿", "t": "说话时，有人会用 che 代替 in cui，比如 il giorno che ci siamo conosciuti、la volta che sono stato a Roma。这是一种随意的口语。写作文、考试和面试时，请使用 il giorno in cui、la volta in cui，这是所有人都接受的标准写法。" }
  ],
  "pragmatica": "说话时，关系从句越短越自然：Il film che ho visto ieri, il ragazzo con cui parlavo, la casa dove abito。正式的书面语里再用 il quale。询问时常用 Chi è quello che…? / Qual è la città in cui…? 来引出你想知道的人或地方。对客人或长辈说话，从句的动词用 Lei 的形式：La persona di cui Lei ha parlato.",
  "esercizi": [
    { "k": "scegli", "q": "哪个词连接“名词 + 句子”，而且前面不能有介词？", "opzioni": [
      { "t": "che", "ok": true, "perche": "che 代替主语或直接宾语，前面不带介词。" },
      { "t": "cui", "ok": false, "perche": "cui 的前面必须有介词。" },
      { "t": "dove", "ok": false, "perche": "dove 只用于地点，不能代替人或事物。" }
    ] },
    { "k": "scegli", "q": "“La persona di cui parlo” 是什么意思？", "opzioni": [
      { "t": "我说的那个人", "ok": true, "perche": "parlare di qualcuno：di cui 表示“关于他（她）”。" },
      { "t": "跟我说话的人", "ok": false, "perche": "跟我说话是 la persona che parla con me。" },
      { "t": "说我的人", "ok": false, "perche": "说我的人是 la persona che parla di me。" }
    ] },
    { "k": "buco", "zh": "Il libro ＿ ho letto ieri è molto interessante.", "tr": "我昨天读的书很有意思。", "opzioni": [
      { "t": "che", "ok": true, "perche": "il libro 是 leggere 的直接宾语，用 che。" },
      { "t": "cui", "ok": false, "perche": "cui 前面要有介词；这里没有介词。" },
      { "t": "di cui", "ok": false, "perche": "leggere 后面不带 di。" }
    ] },
    { "k": "buco", "zh": "La casa in ＿ abito ha un piccolo giardino.", "tr": "我住的房子有一个小花园。", "opzioni": [
      { "t": "cui", "ok": true, "perche": "介词 in 后面用 cui。" },
      { "t": "che", "ok": false, "perche": "che 前面不能有介词。" },
      { "t": "dove", "ok": false, "perche": "dove 本身已包含“在”，不能再和 in 连用。" }
    ] },
    { "k": "buco", "zh": "I ragazzi che ＿ qui sono miei cugini.", "tr": "住在这儿的男孩们是我的表兄弟。", "opzioni": [
      { "t": "abitano", "ok": true, "perche": "che 作主语，动词和 i ragazzi 一致，用复数。" },
      { "t": "abita", "ok": false, "perche": "abita 是单数，和 i ragazzi 不一致。" },
      { "t": "abitiamo", "ok": false, "perche": "abitiamo 是 noi 的形式，主语是 i ragazzi。" }
    ] },
    { "k": "ordine", "t": "la persona di cui ti ho parlato", "tr": "我跟你说过的那个人" },
    { "k": "ordine", "t": "il libro che hai comprato ieri è bello", "tr": "你昨天买的书很好看。" },
    { "k": "scrivi", "q": "用意大利语写：“我昨天买的书”（只写这个名词短语）", "a": "Il libro che ho comprato ieri", "accetta": ["Il libro che ho comprato ieri.", "il libro che ho comprato ieri", "Il libro che ieri ho comprato", "Il libro che ho acquistato ieri", "Il libro che io ho comprato ieri"], "perche": "名词放前面，che 引出从句；il libro 是 comprare 的直接宾语。" },
    { "k": "scrivi", "q": "用意大利语写：“我住的城市”（只写这个名词短语）", "a": "La città in cui abito", "accetta": ["La città in cui abito.", "La città dove abito", "La città dove abito.", "La città in cui vivo", "La città in cui io abito"], "perche": "abitare 带介词 in，所以是 in cui（也可以用 dove）。" },
    { "k": "trasforma", "consegna": "用 che 把两个句子合成一句。", "base": "Ho un amico. L'amico vive a Londra.", "accetta": ["Ho un amico che vive a Londra.", "Ho un amico che abita a Londra."], "rifiutate": [
      { "t": "Ho un amico vive a Londra.", "perche": "两个动词之间缺少连接词 che。" },
      { "t": "Ho un amico cui vive a Londra.", "perche": "cui 前面要有介词；这里 amico 是 vive 的主语，用 che。" }
    ], "perche": "l'amico 是 vive 的主语，所以用 che 代替。" },
    { "k": "trasforma", "consegna": "用 in cui 把两个句子合成一句。", "base": "Questa è la città. Abito in questa città.", "accetta": ["Questa è la città in cui abito.", "Questa è la città dove abito.", "Questa è la città in cui vivo."], "rifiutate": [
      { "t": "Questa è la città che abito.", "perche": "abitare in：介词 in 不能丢，要写成 in cui。" }
    ], "perche": "介词 in 跟着 cui 一起移到 la città 的后面。" },
    { "k": "trasforma", "consegna": "用 di cui 把两个句子合成一句。", "base": "Ecco la persona. Ti ho parlato di questa persona.", "accetta": ["Ecco la persona di cui ti ho parlato.", "Ecco la persona di cui ti parlavo."], "rifiutate": [
      { "t": "Ecco la persona che ti ho parlato.", "perche": "parlare di：介词 di 不能丢，要写成 di cui。" },
      { "t": "Ecco la persona che ti ho parlato di.", "perche": "介词不能留在句末，要放在 cui 前面。" }
    ], "perche": "parlare di qualcuno 的 di 跟着 cui 一起放在 la persona 后面。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Com'è il film che hai visto ieri?" },
      { "chi": "B", "t": "Bello! È proprio il film ＿ ti parlavo.", "buco": true }
    ], "opzioni": [
      { "t": "di cui", "ok": true, "perche": "parlare di：介词 di 放在 cui 前面。" },
      { "t": "che", "ok": false, "perche": "parlare 带 di，不能只用 che。" },
      { "t": "cui", "ok": false, "perche": "cui 前面需要介词 di。" }
    ] }
  ],
  "capaci": [
    "你会用 che 把“……的人、……的东西”放在名词后面，比如 il libro che ho comprato。",
    "你会判断一个名词在从句里是主语、宾语还是带介词，从而选 che 或 介词 + cui。",
    "你会写出 la città in cui abito、la persona di cui parlo 这样的句子，介词始终紧贴 cui。",
    "你会避开三个常见的错误：漏掉 che、给 che 加介词、在从句里重复代词。"
  ],
  "glosse": {
    "Ho comprato un libro": "我买了一本书。",
    "Il libro è bello": "这本书很好看。",
    "Il libro che ho comprato è bello": "我买的那本书很好看。",
    "La città in cui abito": "我住的城市。",
    "Le amiche alle quali scrivo vivono a Roma": "我写信的朋友们住在罗马。",
    "Ciò che voglio adesso è un caffè caldo": "我现在想要的是一杯热咖啡。",
    "Quello di cui ho bisogno è dormire un po'": "我需要的是睡一会儿。",
    "La persona di cui Lei ha parlato": "您说起的那个人。"
  },
  "fonti": [
    "Gymglish, Saga Baldoria, Italian grammar, «The relative pronouns che, cui and quale» (aperta e letta: che invariabile, cui dopo preposizione, il quale, il cui, posizione della preposizione)",
    "Think in Italian, «How to use cui in Italian» (aperta e letta: cui sempre dopo preposizione, invariabile, senza articolo, esempi con di cui, con cui, da cui, in cui)",
    "Tatoeba (ita.tsv), interrogato con ricerche su «il libro che», «la persona di cui», «la città in cui», «la persona con cui», «il giorno in cui», «la casa dove», «il cui», «quello che», «ciò che», «quello di cui»"
  ]
};
