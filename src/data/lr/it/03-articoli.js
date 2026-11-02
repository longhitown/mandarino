/* Lezione 3 · Gli articoli (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["articoli"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Il libro è sul tavolo.", "tr": "那本书在桌子上。" },
      { "t": "Lo studente è nuovo e l'amico di Marco è simpatico.", "tr": "那个学生是新来的，马可的那个朋友很和善。" },
      { "t": "Ho uno zaino, un libro e un'amica a Roma.", "tr": "我有一个背包、一本书，在罗马还有一个女性朋友。" },
      { "t": "Gli zaini e le case sono qui.", "tr": "那些背包和那些房子都在这里。" }
    ],
    "domanda": "汉语说“书、学生、背包”，前面不需要任何小词。看这四句：名词前面的小词 il、lo、l'、uno、un'、gli、le 在变。你觉得它们是根据什么在变的？想想：名词的性、数，还有名词的第一个字母。",
    "risposta": "冠词要同时看三件事：名词是**阳性还是阴性**，是**单数还是复数**，还有名词**开头的音**。libro 前面是 il，studente（s + 辅音）前面是 lo，amico（元音）前面是 l'；zaino（z）前面是 uno。复数 zaini 前面是 gli，case 前面是 le。另外，il 和 lo 表示“说话双方都知道的那一个”，un、uno、una 表示“一个，第一次提到的”。"
  },
  "regola": {
    "enunciato": "意大利语的名词前面几乎总有冠词。**定冠词**（il、lo、l'、la、i、gli、le）指说话双方都知道的那一个或那一些，也可以泛指一类事物；**不定冠词**（un、uno、una、un'）指“一个”，通常是第一次提到的。具体用哪一个，取决于名词的**性、数**和名词**开头的音**。",
    "schema": ["性（阳 / 阴）", "数（单 / 复）", "名词开头的音", "定 / 不定", "冠词"],
    "punti": [
      { "ok": true, "t": "**阳性单数定冠词**：一般用 **il**（il libro）；在 **s + 辅音、z、gn、ps** 开头的词前用 **lo**（lo studente、lo zaino、lo gnocco、lo psicologo）；在元音前用 **l'**（l'amico）。" },
      { "ok": true, "t": "**阴性单数定冠词**：辅音前用 **la**（la casa），元音前用 **l'**（l'acqua）。**复数**：阳性用 **i**（i libri），在 lo 的那些音和元音前用 **gli**（gli studenti、gli zaini、gli amici）；阴性一律用 **le**（le case、le amiche）。" },
      { "ok": true, "t": "**不定冠词**：阳性用 **un**（un libro、un amico），在 s + 辅音、z、gn、ps 前用 **uno**（uno studente、uno zaino）；阴性用 **una**（una casa），元音前用 **un'**（un'amica）。阳性的 un 后面**没有**撇号，阴性的 un' 才有。" },
      { "ok": true, "t": "**看后面紧挨着的那个词**：冠词和它后面第一个词配合，不一定是名词。il bravo studente，因为紧接着的是 bravo；lo studente bravo，因为紧接着的是 studente。" },
      { "ok": true, "t": "**怎么知道性**：以 -o 结尾的名词多数是阳性，以 -a 结尾的多数是阴性，以 -e 结尾的两种都有，所以要连冠词一起记（il fiore、la notte）。常见的例外：il problema、il cinema、il tema 是阳性，la mano 是阴性。" },
      { "ok": true, "t": "**不定冠词没有真正的复数**：un libro 的复数想表示“一些”时，用 dei libri（di + i）、degli amici（di + gli）、delle case，或者干脆不加冠词：Ho amici a Roma。" },
      { "ok": false, "t": "**不能省掉冠词**：汉语说“我有书”，意大利语的单数可数名词前一般不能光秃秃地放着。不说 Ho libro，要说 Ho un libro 或 Ho il libro。" }
    ]
  },
  "logica": [
    "汉语没有冠词，“书”可以是一本书、这本书，也可以是书这一类东西，全靠上下文。意大利语把这些区别直接写在名词前面：un libro 是“某一本，听的人还不认识”，il libro 是“双方都知道的那一本”，i libri 可以是“那些书”，也可以是“书这类东西”。冠词其实是在回答一个问题：听的人知道我在说哪一个吗？",
    "为什么冠词会有这么多形式？原因是**发音顺畅**。il 后面接 studente 会连成 ilst-，不好发，所以换成 lo；l' 把冠词和元音开头的词连在一起，省去中间的停顿；gli 在元音前也是同样的道理。记住这条线索，规则就不用死记：**冠词的形状是为了让后面那个词好读**。",
    "冠词还要和名词的性、数一致（见上一课对“一致”的讲解）。所以说一个名词，最好养成习惯：**连冠词一起记**，la mano、il problema、l'acqua，而不是只记 mano、problema、acqua。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["名词开头", "单数定冠词", "单数不定冠词", "复数定冠词"],
    "righe": [
      ["阳性 · 普通辅音", "il (il libro)", "un (un libro)", "i (i libri)"],
      ["阳性 · s+辅音、z、gn、ps", "lo (lo studente)", "uno (uno studente)", "gli (gli studenti)"],
      ["阳性 · 元音", "l' (l'amico)", "un (un amico)", "gli (gli amici)"],
      ["阴性 · 辅音", "la (la casa)", "una (una casa)", "le (le case)"],
      ["阴性 · 元音", "l' (l'amica)", "un' (un'amica)", "le (le amiche)"]
    ]
  },
  "esempi": [
    { "gruppo": "阳性单数：il、lo、l' 三种形式", "items": [
      { "t": "Il libro è sul tavolo.", "tr": "那本书在桌子上。", "nota": "libro 以普通辅音 l 开头，用 il。" },
      { "t": "Lo studente dorme in biblioteca.", "tr": "那个学生在图书馆里睡觉。", "nota": "studente 以 s + 辅音开头，用 lo。" },
      { "t": "L'amico di Marco abita a Milano.", "tr": "马可的那个朋友住在米兰。", "nota": "amico 以元音开头，用 l'。" }
    ] },
    { "gruppo": "阴性和复数", "items": [
      { "t": "La casa di Anna è molto grande.", "tr": "安娜的家很大。" },
      { "t": "Le amiche di Anna sono simpatiche.", "tr": "安娜的那些朋友很和善。", "nota": "阴性复数一律用 le，不看开头的音。" },
      { "t": "Gli zaini sono vicino alla porta.", "tr": "那些背包在门边。", "nota": "zaini 以 z 开头，复数用 gli。" }
    ] },
    { "gruppo": "不定冠词：第一次提到", "items": [
      { "t": "Ho un amico a Torino.", "tr": "我在都灵有一个朋友。", "nota": "阳性的 un 后面没有撇号。" },
      { "t": "Ho uno zio che vive a Roma.", "tr": "我有一个住在罗马的叔叔。" },
      { "t": "Cerco una casa vicino al centro.", "tr": "我在找一套靠近市中心的房子。" },
      { "t": "Marta è un'amica di mia sorella.", "tr": "玛尔塔是我姐姐的一个朋友。", "nota": "阴性 + 元音：un' 要加撇号。" }
    ] },
    { "gruppo": "泛指和特指", "items": [
      { "t": "Mi piacciono i gatti.", "tr": "我喜欢猫。", "nota": "泛指一类东西，意大利语也要用定冠词。" },
      { "t": "Prendo un caffè, grazie.", "tr": "我要一杯咖啡，谢谢。" },
      { "t": "Il caffè italiano è molto forte.", "tr": "意大利的咖啡很浓。" }
    ] },
    { "gruppo": "冠词和介词合在一起", "items": [
      { "t": "Vado al mare con gli amici.", "tr": "我和朋友们去海边。", "nota": "al = a + il。" },
      { "t": "I libri dello studente sono qui.", "tr": "那个学生的书在这里。", "nota": "dello = di + lo。" }
    ] }
  ],
  "contrasti": [
    { "q": "“那个学生很高。”（studente，说话双方都知道是谁）哪一句是对的？", "opzioni": [
      { "t": "Lo studente è alto.", "ok": true, "perche": "studente 以 s + 辅音开头，阳性单数定冠词用 lo。" },
      { "t": "Il studente è alto.", "ok": false, "perche": "il 用在普通辅音前；s + 辅音开头的词要用 lo。" },
      { "t": "L'studente è alto.", "ok": false, "perche": "l' 只用在元音前，studente 以辅音 s 开头。" }
    ] },
    { "q": "“我有一个女性朋友在罗马。”（amica）哪一句是对的？", "opzioni": [
      { "t": "Ho un'amica a Roma.", "ok": true, "perche": "amica 是阴性，元音开头，不定冠词是 un'，要加撇号。" },
      { "t": "Ho un amica a Roma.", "ok": false, "perche": "un 是阳性的形式，阴性名词需要 una，在元音前缩成 un'。" },
      { "t": "Ho uno amica a Roma.", "ok": false, "perche": "uno 只用在阳性的 s + 辅音、z 等词前。" }
    ] },
    { "q": "“这些男性朋友来了。”（amici，说话双方都知道是谁）哪一句是对的？", "opzioni": [
      { "t": "Gli amici sono arrivati.", "ok": true, "perche": "阳性复数在元音前用 gli。" },
      { "t": "I amici sono arrivati.", "ok": false, "perche": "i 只用在普通辅音前，元音前要换成 gli。" },
      { "t": "Le amici sono arrivati.", "ok": false, "perche": "le 是阴性复数，amici 是阳性。" }
    ] },
    { "q": "“水是凉的。”（泛指杯子里的水，用定冠词）哪一句是对的？", "opzioni": [
      { "t": "L'acqua è fredda.", "ok": true, "perche": "acqua 是阴性，元音开头，定冠词用 l'。" },
      { "t": "La acqua è fredda.", "ok": false, "perche": "阴性单数在元音前要省音成 l'，日常和书面都说 l'acqua。" },
      { "t": "Lo acqua è fredda.", "ok": false, "perche": "lo 是阳性冠词，acqua 是阴性。" }
    ] },
    { "q": "zaino 的复数加定冠词，怎么说？", "opzioni": [
      { "t": "gli zaini", "ok": true, "perche": "zaino 以 z 开头，单数用 lo，复数相应地用 gli。" },
      { "t": "i zaini", "ok": false, "perche": "i 只用在普通辅音前，z 前要用 gli。" },
      { "t": "le zaini", "ok": false, "perche": "le 是阴性复数，zaino 是阳性。" }
    ] },
    { "q": "“那个好学生。”按 bravo 在 studente 前面的顺序，哪一句是对的？", "opzioni": [
      { "t": "il bravo studente", "ok": true, "perche": "冠词看紧挨着的词：后面是 bravo，普通辅音 b，用 il。" },
      { "t": "lo bravo studente", "ok": false, "perche": "lo 是给 studente 用的；这里冠词后面紧接着的是 bravo。" },
      { "t": "il studente bravo", "ok": false, "perche": "如果 studente 紧跟在冠词后面，要用 lo：lo studente bravo。" }
    ] },
    { "q": "你说“我喜欢咖啡”，泛指咖啡这类东西。哪一句是对的？", "opzioni": [
      { "t": "Mi piace il caffè.", "ok": true, "perche": "意大利语泛指一类东西时也要用定冠词。" },
      { "t": "Mi piace caffè.", "ok": false, "perche": "汉语不需要冠词，但意大利语的 piacere 前的名词需要冠词。" },
      { "t": "Mi piace un caffè.", "ok": false, "perche": "un caffè 指的是某一杯咖啡，不是泛指咖啡这一类。" }
    ] },
    { "q": "第一次提到哥哥，然后再提第二次。哪一句顺序是对的？", "ctx": { "t": "Ho ___ fratello. ___ fratello si chiama Marco." }, "opzioni": [
      { "t": "un ... Il", "ok": true, "perche": "第一次提到用 un，听的人还不认识；第二次已经知道是谁，用 il。" },
      { "t": "il ... Il", "ok": false, "perche": "第一次提到时，听的人还不知道是哪一个，不能用定冠词。" },
      { "t": "un ... Un", "ok": false, "perche": "第二次提到时，说的是同一个人，要用定冠词。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Che cosa c'è nello zaino?",
    "righe": [
      { "chi": "A", "t": "Che cosa c'è nello zaino?", "tr": "你的背包里有什么？" },
      { "chi": "B", "t": "C'è un libro, uno specchio e l'acqua.", "tr": "有一本书、一面镜子和水。" },
      { "chi": "A", "t": "Di chi è il libro?", "tr": "这本书是谁的？" },
      { "chi": "B", "t": "È di un'amica. Lo restituisco domani.", "tr": "是一个朋友的。我明天还给她。" },
      { "chi": "A", "t": "E lo specchio?", "tr": "那镜子呢？" },
      { "chi": "B", "t": "Lo specchio è mio. Gli altri libri sono a casa.", "tr": "镜子是我的。别的书在家里。" }
    ],
    "esercizi": [
      { "q": "B 说 uno specchio，为什么用 uno？", "opzioni": [
        { "t": "specchio 是 s + 辅音开头的阳性词", "ok": true, "perche": "不定冠词在 s + 辅音、z 等前用 uno。" },
        { "t": "specchio 是阴性名词", "ok": false, "perche": "specchio 是阳性；阴性要用 una。" },
        { "t": "specchio 以元音开头", "ok": false, "perche": "specchio 以 s 开头，后面是辅音 p。" }
      ] },
      { "q": "B 说 È di un'amica，un' 为什么有撇号？", "opzioni": [
        { "t": "amica 是阴性名词，以元音开头", "ok": true, "perche": "阴性单数不定冠词 una 在元音前省音成 un'。" },
        { "t": "amica 是阳性名词", "ok": false, "perche": "amica 以 -a 结尾，是阴性；阳性的 un 没有撇号。" }
      ] },
      { "q": "A 问 Di chi è il libro? 里 il 的含义是什么？", "opzioni": [
        { "t": "B 刚才已经提到了这本书，双方都知道", "ok": true, "perche": "定冠词指双方都知道的那一个；B 刚说了 un libro。" },
        { "t": "书是第一次出现", "ok": false, "perche": "书已经在 B 的上一句里出现，所以用定冠词。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语没有冠词，所以常见的错误有两种：一是**漏掉冠词**（*Ho amico a Roma*）；二是**只记一个形式**，到处用 il、un（*il zio*、*i studenti*、*un'amico*）。",
    "perche": "汉语的名词前面不需要任何标记，所以大脑里没有“冠词”这个位置。学会 il、un 之后，又容易把它们当作固定的词，忘了冠词要看名词的性、数和开头的音。尤其 un 和 un' 很容易混：阳性的 un 没有撇号，阴性的 un' 才有。",
    "esci": "说一个单数可数名词前，先问：①它是阳性还是阴性？②单数还是复数？③它的第一个音是普通辅音、s + 辅音 / z，还是元音？三个问题答完，冠词就定下来了。另外，记名词时连冠词一起记：lo zio、l'acqua、la mano。",
    "esempi": [
      { "sbagliata": "Ho amico a Roma.", "giusta": "Ho un amico a Roma." },
      { "sbagliata": "Il zio di Luca è medico.", "giusta": "Lo zio di Luca è medico." },
      { "sbagliata": "Marta è un'amico di Anna.", "giusta": "Marta è un'amica di Anna." },
      { "sbagliata": "I studenti sono in classe.", "giusta": "Gli studenti sono in classe." }
    ]
  },
  "curiosi": [
    { "titolo": "il 和 lo 是一家人", "t": "il 和 lo 都来自拉丁语的指示词 ille（那个）。lo 是较完整的形式，il 是在普通辅音前简化出来的。复数 gli 和单数 lo 配成一对，i 和 il 配成一对。这就是为什么它们的使用条件总是同一组声音。" },
    { "titolo": "人名前的冠词因地区而异", "t": "标准意大利语里，人名前通常不加冠词：Marco è qui。但在北方的口语里，常常说 il Marco、la Maria。这是地方习惯，书面语和正式场合不用。称呼别人时（Buongiorno, dottoressa Bianchi）也不加冠词。" },
    { "titolo": "冠词和介词的缩合", "t": "a、di、da、in、su 和定冠词相遇，要合在一起：a + il = al，di + lo = dello，in + i = nei，su + la = sulla。这些形式叫“冠词介词”，本身就包含了定冠词，所以不要再单独加 il。" },
    { "titolo": "世上独一无二的东西", "t": "la luna、il sole、il Papa 这类只有一个的东西，通常带定冠词。年份、日期和星期也一样：nel 2020、il 5 maggio。而 avere fame、cercare casa 这样的固定说法则不带冠词。" }
  ],
  "pragmatica": "说话时，冠词弱读得很快，听起来几乎只是名词前的一个小音，但说错会让整句话显得别扭。在口语里最重要的是 il、la、un、una 这几个高频形式；lo、gli、uno 要记住 s + 辅音和 z 这两类开头。写作时，注意 un' 的撇号和 l' 的省音。",
  "esercizi": [
    { "k": "scegli", "q": "zaino 前面的单数定冠词是哪一个？", "opzioni": [
      { "t": "lo", "ok": true, "perche": "zaino 以 z 开头，阳性单数定冠词用 lo。" },
      { "t": "il", "ok": false, "perche": "il 只用在普通辅音前。" },
      { "t": "l'", "ok": false, "perche": "l' 只用在元音前，zaino 以辅音 z 开头。" }
    ] },
    { "k": "scegli", "q": "哪一组的单数和复数都是对的？", "opzioni": [
      { "t": "lo zio, gli zii", "ok": true, "perche": "zio 以 z 开头，单数用 lo，复数用 gli。" },
      { "t": "il zio, i zii", "ok": false, "perche": "z 开头的词不能用 il、i。" },
      { "t": "lo zio, i zii", "ok": false, "perche": "单数用 lo 的词，复数也要用 gli。" }
    ] },
    { "k": "scegli", "q": "mano（手）的定冠词是什么？", "opzioni": [
      { "t": "la mano", "ok": true, "perche": "mano 以 -o 结尾，却是阴性，要用 la。" },
      { "t": "il mano", "ok": false, "perche": "mano 是阴性名词，不能因为结尾是 -o 就当阳性。" },
      { "t": "lo mano", "ok": false, "perche": "lo 是阳性冠词，而 mano 是阴性名词。" }
    ] },
    { "k": "buco", "zh": "＿ studenti sono in classe.", "tr": "那些学生在教室里。", "opzioni": [
      { "t": "Gli", "ok": true, "perche": "studenti 是阳性复数，s + 辅音开头，用 gli。" },
      { "t": "I", "ok": false, "perche": "i 只用在普通辅音前。" },
      { "t": "Le", "ok": false, "perche": "le 是阴性复数，studenti 是阳性。" }
    ] },
    { "k": "buco", "zh": "Marta è ＿ amica di mia sorella.", "tr": "玛尔塔是我姐姐的一个朋友。", "opzioni": [
      { "t": "un'", "ok": true, "perche": "amica 是阴性，元音开头，不定冠词是 un'。" },
      { "t": "un", "ok": false, "perche": "un 是阳性的形式，没有撇号。" },
      { "t": "uno", "ok": false, "perche": "uno 只用在阳性的 s + 辅音、z 等词前。" }
    ] },
    { "k": "buco", "zh": "＿ acqua è sul tavolo.", "tr": "水在桌子上。", "opzioni": [
      { "t": "L'", "ok": true, "perche": "acqua 是阴性，元音开头，定冠词是 l'。" },
      { "t": "Il", "ok": false, "perche": "il 是阳性冠词，且用在辅音前。" },
      { "t": "Lo", "ok": false, "perche": "lo 是阳性冠词，而 mano 是阴性名词。" }
    ] },
    { "k": "ordine", "t": "gli zaini sono vicino alla porta", "tr": "那些背包在门边。" },
    { "k": "ordine", "t": "lo zio di Marco abita a Napoli", "tr": "马可的叔叔住在那不勒斯。" },
    { "k": "scrivi", "q": "用意大利语写：“我有一个女性朋友。”", "a": "Ho un'amica.", "accetta": ["Io ho un'amica.", "Ho un’amica.", "Ho un' amica."], "perche": "amica 是阴性、元音开头，不定冠词用 un'，要加撇号。" },
    { "k": "scrivi", "q": "用意大利语写：“这些学生很好。”（用定冠词）", "a": "Gli studenti sono bravi.", "accetta": ["Gli studenti sono molto bravi.", "Gli studenti sono bravi", "Gli studenti sono buoni."], "perche": "studenti 是阳性复数，s + 辅音开头，定冠词用 gli。" },
    { "k": "trasforma", "consegna": "把句子改成复数。", "base": "Lo zaino è nuovo.", "accetta": ["Gli zaini sono nuovi.", "Gli zaini sono nuovi"], "rifiutate": [
      { "t": "I zaini sono nuovi.", "perche": "z 开头的词复数要用 gli，不是 i。" }
    ], "perche": "lo zaino 的复数是 gli zaini；动词 è 变成 sono，nuovo 变成 nuovi。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Che cosa c'è nello zaino?" },
      { "chi": "B", "t": "C'è ＿ libro e una penna.", "buco": true }
    ], "opzioni": [
      { "t": "un", "ok": true, "perche": "libro 是阳性、普通辅音开头，不定冠词用 un，第一次提到。" },
      { "t": "uno", "ok": false, "perche": "uno 只用在 s + 辅音、z 等词前。" },
      { "t": "un'", "ok": false, "perche": "un' 只用于阴性单数的元音词前。" }
    ] }
  ],
  "capaci": [
    "你会根据名词的性、数和开头的音，选出 il、lo、l'、la、i、gli、le。",
    "你会区分 un、uno、una、un'，并记得阳性的 un 没有撇号。",
    "你会分辨“第一次提到”（不定冠词）和“双方都知道”（定冠词），也知道泛指一类东西时要用定冠词。",
    "你会避开 il studente、un'amico、i studenti、Ho amico 这类汉语母语者常见的错误。"
  ],
  "fonti": [
    "Treccani, Enciclopedia dell'Italiano, voce «articolo» (forme dell'articolo determinativo e indeterminativo, condizioni d'uso, casi particolari: nomi propri, nomi unici, formule senza articolo)",
    "Risultati di una ricerca web su il, lo, gli e s+consonante, z, gn, ps (dispense universitarie e LibreTexts, Passo dopo passo: Italiano 1), controllo delle condizioni d'uso di lo e gli",
    "Tatoeba, corpus italiano locale (ita.tsv): riscontro di uno studente, lo zio, gli zaini, un'amica"
  ]
};
