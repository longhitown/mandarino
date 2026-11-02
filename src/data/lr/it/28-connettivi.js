/* Lezione 28 · 连接句子：因为、所以、如果、虽然 (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["connettivi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Siccome piove, resto a casa.", "tr": "因为下雨，我待在家里。" },
      { "t": "Piove, quindi resto a casa.", "tr": "下雨了，所以我待在家里。" },
      { "t": "Resto a casa perché piove.", "tr": "我待在家里，因为下雨。" },
      { "t": "Anche se piove, esco.", "tr": "虽然下雨，我还是出去。" }
    ],
    "domanda": "汉语说“因为下雨，所以我待在家里”，“因为”和“所以”两个词都说。看看前三句：意大利语的每个句子里有几个表示原因或结果的连接词？“原因”和“结果”谁在前面？第四句的“虽然……还是”又用了几个词？",
    "risposta": "每个句子**只有一个**连接词。原因在前，用 **siccome**；结果在后，用 **quindi**；主句在前、原因在后，用 **perché**。三个词不能叠用：*Perché piove, quindi…* 是错的。第四句也一样：**anche se** 一个词就表示“虽然”，后面不用再加“但是”(ma)。汉语的成对连接词，意大利语只取其一。"
  },
  "regola": {
    "enunciato": "意大利语用**一个**连接词连接两个分句，汉语常见的成对连接词（因为……所以、虽然……但是、如果……就）只翻译其中一个。表示**原因**：perché 放在主句后面，siccome 放在句首；表示**结果**：quindi、perciò、dunque 放在第二个分句开头；表示**条件**：se；表示**让步**：anche se 后面用直陈式，benché、sebbene 后面用虚拟式（nonostante 后面接名词或虚拟式）；表示**对比**：ma、però。",
    "schema": ["原因：perché / siccome", "结果：quindi / perciò", "条件：se", "让步：anche se / benché", "对比：ma / però"],
    "punti": [
      { "ok": true, "t": "**perché** 引出原因，通常放在主句之后：Non esco perché ho mal di testa. 同一个词也表示“为什么”（Perché non esci?）。" },
      { "ok": true, "t": "**siccome** 也是“因为”，通常放在句首，原因是对方已经知道的或显而易见的：Siccome è tardi, prendo un taxi. 书面和较正式的语体里还有 poiché、dato che、visto che。" },
      { "ok": true, "t": "**quindi、perciò、dunque** 引出结果：Ho mal di testa, quindi resto a letto. 口语里还常用 allora，意思是“那么、所以”。" },
      { "ok": true, "t": "**se** 引出真实的条件，后面用直陈式现在时（也可以用将来时）：Se hai fame, mangia. Se domani piove, resto a casa. **quando** 说的是“……的时候”，条件一定会发生：Quando arrivi, chiamami." },
      { "ok": true, "t": "**anche se** 表示“即使、虽然”，说真实的事时后面用直陈式：Anche se è tardi, esco（说假设的、不太可能的事时也可以用虚拟式，如 Anche se fosse tardi，学习时先记直陈式）。 **benché、sebbene** 的意思也是“虽然”，后面用虚拟式：Benché sia tardi, esco. **nonostante** 后面可以接名词（Nonostante la pioggia, esco），也可以接虚拟式的分句（Nonostante sia tardi, esco）。" },
      { "ok": true, "t": "**ma、però** 引出对比：È buono, ma è caro. mentre 表示“……的同时”，也可以表示对比：Leggo mentre aspetto." },
      { "ok": false, "t": "**不叠用**：不说 *Perché piove, quindi…*、*Anche se piove, ma…*、*Benché è tardi*（benché 要用虚拟式）。" },
      { "ok": false, "t": "**se 后面不用条件式**：真实的条件说 Se hai tempo, vieni；不说 *Se avresti tempo*。" }
    ]
  },
  "logica": [
    "汉语是“成对”出现连接词的语言：因为……所以……，虽然……但是……，如果……就……。前一个词预告后面有结果、转折或结论，听的人从第一个词开始就知道句子的结构。意大利语则靠**一个**连接词和词序来表达关系：连接词放在被引出的那个分句里，就够了。所以学习者最容易把汉语的成对结构整个搬过来。",
    "意大利语的连接词不但有意思，还有**位置**和**语气**的要求。perché 放在主句后面，siccome 放在句首；benché 要求虚拟式，anche se 不要求（用直陈式）。选连接词时先问三个问题：①是原因、结果、条件、让步还是对比？②原因或让步的分句放在前面还是后面？③语体是日常的还是书面、正式的？",
    "汉语的“就”和“还是”在意大利语里常常没有对应的词。“如果下雨，我就不去”说 Se piove, non vado，不需要再加“就”。“虽然累，我还是去”说 Anche se sono stanco, vado，不需要再加“还是”。口语里有时会加 allora、comunque 来加强语气，但这不是必须的。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["汉语", "意大利语", "位置", "后面的动词"],
    "righe": [
      ["因为（原因在后）", "perché", "主句之后", "直陈式"],
      ["因为（原因在前）", "siccome, dato che, visto che", "句首", "直陈式"],
      ["所以", "quindi, perciò, dunque, allora", "第二个分句开头", "直陈式"],
      ["如果", "se", "前面或后面", "直陈式（现在时或将来时）"],
      ["虽然、即使", "anche se", "前面或后面", "直陈式"],
      ["虽然、尽管（较正式）", "benché, sebbene, nonostante", "前面或后面", "benché、sebbene 用虚拟式；nonostante 接名词或虚拟式"],
      ["但是", "ma, però", "第二个分句开头", "直陈式"],
      ["……的同时", "mentre", "前面或后面", "直陈式"]
    ],
    "nota": "每次只选一个连接词：原因和结果、让步和对比不要叠用。"
  },
  "esempi": [
    { "gruppo": "原因和结果：perché, siccome, quindi", "items": [
      { "t": "Non esco perché ho mal di testa.", "tr": "我不出去，因为我头疼。", "nota": "perché 在主句之后。" },
      { "t": "Siccome è tardi, prendo un taxi.", "tr": "因为太晚了，我打车。", "nota": "siccome 在句首，原因是双方都清楚的。" },
      { "t": "Ho mal di testa, quindi resto a letto.", "tr": "我头疼，所以待在床上。", "nota": "quindi 引出结果。" },
      { "t": "Il negozio è chiuso, perciò torno domani.", "tr": "店关门了，所以我明天再来。" }
    ] },
    { "gruppo": "条件：se, quando", "items": [
      { "t": "Se hai fame, mangia qualcosa.", "tr": "如果你饿了，就吃点东西。", "nota": "汉语的“就”在意大利语里不用翻译。" },
      { "t": "Se domani non piove, andiamo al lago.", "tr": "如果明天不下雨，我们去湖边。", "nota": "se 后面用直陈式现在时。" },
      { "t": "Quando arrivi alla stazione, chiamami.", "tr": "你到车站的时候，给我打电话。", "nota": "quando 说的是一定会发生的事。" }
    ] },
    { "gruppo": "让步：anche se, benché, nonostante", "items": [
      { "t": "Anche se è stanco, studia ancora.", "tr": "他虽然累了，还在学习。", "nota": "anche se 后面用直陈式。" },
      { "t": "Anche se costa molto, compro il biglietto.", "tr": "虽然很贵，我还是买票。" },
      { "t": "Benché sia stanco, studia ancora.", "tr": "尽管他累了，他还在学习。", "nota": "benché 后面用虚拟式 sia。" },
      { "t": "Nonostante la pioggia, usciamo lo stesso.", "tr": "尽管下雨，我们还是出去。", "nota": "nonostante 后面接名词。" }
    ] },
    { "gruppo": "对比和同时：ma, però, mentre", "items": [
      { "t": "La pizza è buona, ma è un po' cara.", "tr": "比萨很好吃，不过有点贵。" },
      { "t": "Marco è simpatico, però parla troppo.", "tr": "马可人很好，不过话太多。" },
      { "t": "Leggo il giornale mentre aspetto l'autobus.", "tr": "我一边等公交车，一边看报纸。" }
    ] }
  ],
  "contrasti": [
    { "q": "“因为太晚了，所以我回家。”哪一句对？", "opzioni": [
      { "t": "Siccome è tardi, torno a casa.", "ok": true, "perche": "原因在前用 siccome，结果直接接在后面，不再加连接词。" },
      { "t": "Perché è tardi, quindi torno a casa.", "ok": false, "perche": "意大利语不叠用两个连接词；而且原因在前时一般用 siccome。" },
      { "t": "Quindi è tardi, torno a casa.", "ok": false, "perche": "quindi 引出的是结果，不是原因，这样说意思颠倒了。" }
    ] },
    { "q": "“我累了，所以我睡觉。”哪一句对？", "opzioni": [
      { "t": "Sono stanco, quindi dormo.", "ok": true, "perche": "quindi 引出结果：睡觉是累的结果。" },
      { "t": "Sono stanco, perché dormo.", "ok": false, "perche": "perché 引出原因，这句变成“我累，因为我睡觉”，因果颠倒。" },
      { "t": "Sono stanco, siccome dormo.", "ok": false, "perche": "siccome 也引出原因，同样颠倒了因果。" }
    ] },
    { "q": "“我不来了，因为我累了。”哪一句对？", "opzioni": [
      { "t": "Non vengo perché sono stanco.", "ok": true, "perche": "perché 放在主句之后，引出原因。" },
      { "t": "Non vengo quindi sono stanco.", "ok": false, "perche": "quindi 引出结果，这样说变成“我不来，所以我累”。" },
      { "t": "Non vengo se sono stanco.", "ok": false, "perche": "se 表示条件，意思是“如果我累了就不来”，不是“因为”。" }
    ] },
    { "q": "“如果明天不下雨，我们去海边。”哪一句对？", "opzioni": [
      { "t": "Se domani non piove, andiamo al mare.", "ok": true, "perche": "真实的条件：se 加直陈式现在时。" },
      { "t": "Se domani non pioverebbe, andiamo al mare.", "ok": false, "perche": "se 后面不用条件式。" },
      { "t": "Anche se domani non piove, andiamo al mare.", "ok": false, "perche": "anche se 是“即使”，意思变成“即使明天不下雨也去”。" }
    ] },
    { "q": "“虽然很贵，我还是买。”哪一句对？", "opzioni": [
      { "t": "Anche se è caro, lo compro.", "ok": true, "perche": "anche se 一个词就表示“虽然”，后面不再加 ma。" },
      { "t": "Anche se è caro, ma lo compro.", "ok": false, "perche": "汉语的“虽然……但是”在意大利语里不叠用 ma。" },
      { "t": "Se è caro, lo compro.", "ok": false, "perche": "这句的意思是“如果贵，我就买”，条件和让步不同。" }
    ] },
    { "q": "“尽管他很累，他还在工作。”（正式语体，用 benché）哪一句对？", "opzioni": [
      { "t": "Benché sia stanco, lavora ancora.", "ok": true, "perche": "benché 后面要用虚拟式，essere 的虚拟式是 sia。" },
      { "t": "Benché è stanco, lavora ancora.", "ok": false, "perche": "è 是直陈式；benché 要求虚拟式。" },
      { "t": "Benché essere stanco, lavora ancora.", "ok": false, "perche": "benché 后面的动词要变位，不能用不定式。" }
    ] },
    { "q": "“妈妈做饭的同时，爸爸在看电视。”哪一句对？", "opzioni": [
      { "t": "La mamma cucina mentre il papà guarda la TV.", "ok": true, "perche": "mentre 表示两件事同时进行。" },
      { "t": "La mamma cucina perché il papà guarda la TV.", "ok": false, "perche": "perché 表示原因，意思变成“妈妈做饭是因为爸爸看电视”。" },
      { "t": "La mamma cucina quindi il papà guarda la TV.", "ok": false, "perche": "quindi 表示结果，意思变成“妈妈做饭，所以爸爸看电视”。" }
    ] },
    { "q": "“我想去，可是我没有钱。”哪一句对？", "opzioni": [
      { "t": "Voglio andare, ma non ho soldi.", "ok": true, "perche": "ma 引出和前一句相反的情况。" },
      { "t": "Voglio andare, quindi non ho soldi.", "ok": false, "perche": "quindi 表示结果，“想去，所以没有钱”不合逻辑。" },
      { "t": "Voglio andare, se non ho soldi.", "ok": false, "perche": "se 表示条件，意思变成“如果我没有钱，我想去”。" }
    ] },
    { "q": "“尽管下雨，我们还是出去。”（nonostante 后面接名词）哪一句对？", "opzioni": [
      { "t": "Nonostante la pioggia, usciamo.", "ok": true, "perche": "nonostante 可以直接接名词，不需要另一个连接词。" },
      { "t": "Nonostante la pioggia, ma usciamo.", "ok": false, "perche": "nonostante 已经表示让步，后面不再叠用 ma。" },
      { "t": "Nonostante la pioggia, quindi usciamo.", "ok": false, "perche": "quindi 表示结果，不是让步，和 nonostante 的意思冲突。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Una gita al lago",
    "righe": [
      { "chi": "A", "t": "Domenica andiamo al lago, se fa bel tempo?", "tr": "星期天如果天气好，我们去湖边吧？" },
      { "chi": "B", "t": "Volentieri, ma prima devo finire un lavoro.", "tr": "好啊，不过我得先做完一件事。" },
      { "chi": "A", "t": "Siccome il lago è lontano, partiamo presto.", "tr": "因为湖很远，我们早点出发。" },
      { "chi": "B", "t": "Va bene. Anche se sono stanco, mi alzo alle sei.", "tr": "好。虽然我很累，我六点起床。" },
      { "chi": "A", "t": "Allora porto io i panini, mentre tu prepari lo zaino.", "tr": "那我带三明治，你准备背包。" },
      { "chi": "B", "t": "Perfetto. Ti chiamo quando sono pronto.", "tr": "太好了。我准备好了就给你打电话。" }
    ],
    "esercizi": [
      { "q": "“Siccome il lago è lontano, partiamo presto” 里，siccome 的作用是什么？", "opzioni": [
        { "t": "在句首引出双方都知道的原因", "ok": true, "perche": "siccome 放在句首，说明一个大家已知的原因。" },
        { "t": "引出结果", "ok": false, "perche": "引出结果的是 quindi、perciò。" },
        { "t": "表示让步（虽然）", "ok": false, "perche": "让步用 anche se 或 benché。" }
      ] },
      { "q": "“Anche se sono stanco, mi alzo alle sei” 是什么意思？", "opzioni": [
        { "t": "虽然我累，我还是六点起床", "ok": true, "perche": "anche se 表示让步：累，但仍然起床。" },
        { "t": "因为我累，所以我不起床", "ok": false, "perche": "这是因果关系，要用 siccome 或 quindi。" },
        { "t": "如果我累，我就六点起床", "ok": false, "perche": "条件要用 se，不用 anche se。" }
      ] },
      { "q": "“Se fa bel tempo” 里，fa 为什么是直陈式现在时？", "opzioni": [
        { "t": "se 引出真实的条件，后面用直陈式", "ok": true, "perche": "真实的条件说 se + 直陈式现在时。" },
        { "t": "因为 se 后面必须用虚拟式", "ok": false, "perche": "benché 才要求虚拟式，se 不要求。" },
        { "t": "因为说的是过去的事", "ok": false, "perche": "这是对未来的安排，不是过去。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "把汉语成对的连接词整个搬过来：*Perché piove, quindi resto a casa*、*Anche se è caro, ma lo compro*，或者把 benché 和直陈式连用：*Benché è tardi*。还有一个常见的错是把 quindi 当作“因为”来用：*Non vengo quindi sono stanco*。",
    "perche": "汉语的“因为……所以……”“虽然……但是……”两个词都要说，缺一个反而不通顺，所以学习者觉得意大利语也要说两个。另外，quindi 的位置和汉语的“所以”相同，但是意思是“结果”，容易和“因为”混淆。",
    "esci": "先看句子的结构，选一个连接词：原因在前用 siccome，原因在后用 perché，结果用 quindi，让步用 anche se。写完后检查：一个关系只出现了一个连接词吗？用了 benché、sebbene、nonostante 吗？如果用了，动词要变成虚拟式。",
    "esempi": [
      { "sbagliata": "Perché piove, quindi resto a casa.", "giusta": "Siccome piove, resto a casa." },
      { "sbagliata": "Anche se è caro, ma lo compro.", "giusta": "Anche se è caro, lo compro." },
      { "sbagliata": "Benché è tardi, esco.", "giusta": "Benché sia tardi, esco." },
      { "sbagliata": "Non vengo quindi sono stanco.", "giusta": "Non vengo perché sono stanco." }
    ]
  },
  "curiosi": [
    { "titolo": "siccome 说的是“你也知道的原因”", "t": "siccome 把原因当作已知的、不需要争论的事来讲：Siccome piove, resto a casa. 听的人看到下雨，当然明白。perché 则可以引入新信息：Resto a casa perché ho la febbre. 所以回答“为什么”的问题，用 perché：Perché non vieni? Perché ho la febbre." },
    { "titolo": "Perché sì! Perché no!", "t": "意大利语里，perché 既是“为什么”也是“因为”，所以有一个有名的小对话：Perché? Perché sì. 意思是“为什么？不为什么。”孩子和大人都爱这样说；Perché no? 也很常见，意思是“为什么不呢？”，可以用来爽快地答应别人。" },
    { "titolo": "语体：poiché, dato che, benché", "t": "日常聊天多用 perché、siccome、anche se、quindi、però；poiché、benché、sebbene、nonostante、dunque 更常出现在书面、新闻和演讲里。学会了两套说法，你就可以根据场合选用：和朋友说 Anche se è tardi, esco，写正式的信写 Benché sia tardi, esco。" }
  ],
  "pragmatica": "解释自己的决定时，perché 最自然：Non vengo perché ho da fare. 拒绝邀请时，先说 Mi dispiace, ma… 再给理由，听起来更有礼貌。说服别人时，用 se 提出条件：Se vieni, ti faccio vedere il giardino. 想让话听起来更正式、更有分寸，把 anche se 换成 benché，并把动词换成虚拟式。",
  "esercizi": [
    { "k": "scegli", "q": "放在句首、引出对方已经知道的原因，用哪个词？", "opzioni": [
      { "t": "siccome", "ok": true, "perche": "siccome 放在句首，引出已知的原因。" },
      { "t": "quindi", "ok": false, "perche": "quindi 引出结果。" },
      { "t": "ma", "ok": false, "perche": "ma 引出对比，不引出原因。" }
    ] },
    { "k": "scegli", "q": "哪个连接词引出“结果”？", "opzioni": [
      { "t": "quindi", "ok": true, "perche": "quindi 的意思是“所以”，引出结果。" },
      { "t": "perché", "ok": false, "perche": "perché 引出原因。" },
      { "t": "siccome", "ok": false, "perche": "siccome 引出原因。" }
    ] },
    { "k": "scegli", "q": "“如果你有时间，来看看我。”哪一句对？", "opzioni": [
      { "t": "Se hai tempo, vieni a trovarmi.", "ok": true, "perche": "se 加直陈式现在时，表示真实的条件。" },
      { "t": "Se avresti tempo, vieni a trovarmi.", "ok": false, "perche": "se 后面不用条件式。" },
      { "t": "Se avere tempo, vieni a trovarmi.", "ok": false, "perche": "se 之后的动词要变位，不能用不定式。" }
    ] },
    { "k": "scegli", "q": "哪个连接词之后要用虚拟式？", "opzioni": [
      { "t": "benché", "ok": true, "perche": "benché 和 sebbene 要求虚拟式。" },
      { "t": "anche se", "ok": false, "perche": "说真实的事时，anche se 后面用直陈式；虚拟式是 benché 的固定要求。" },
      { "t": "perché", "ok": false, "perche": "表示原因的 perché 后面用直陈式。" }
    ] },
    { "k": "buco", "zh": "＿ piove, resto a casa.", "tr": "因为下雨，我待在家里。", "opzioni": [
      { "t": "Siccome", "ok": true, "perche": "原因在前，句首用 siccome。" },
      { "t": "Quindi", "ok": false, "perche": "quindi 引出结果，不引出原因。" },
      { "t": "Mentre", "ok": false, "perche": "mentre 表示“同时”，不表示原因。" }
    ] },
    { "k": "buco", "zh": "Non ho fame, ＿ non mangio.", "tr": "我不饿，所以我不吃。", "opzioni": [
      { "t": "quindi", "ok": true, "perche": "后一个分句是结果，用 quindi。" },
      { "t": "perché", "ok": false, "perche": "perché 引出原因，意思会颠倒。" },
      { "t": "anche se", "ok": false, "perche": "anche se 是“即使”，不能表示结果。" }
    ] },
    { "k": "buco", "zh": "＿ sia tardi, esco lo stesso.", "tr": "虽然很晚了，我还是出去。", "opzioni": [
      { "t": "Benché", "ok": true, "perche": "后面是虚拟式 sia，所以连接词是 benché。" },
      { "t": "Perché", "ok": false, "perche": "perché 表示原因，不表示让步。" },
      { "t": "Quindi", "ok": false, "perche": "quindi 引出结果，不表示让步。" }
    ] },
    { "k": "ordine", "t": "se piove resto a casa", "alt": ["resto a casa se piove"], "tr": "如果下雨，我待在家里。" },
    { "k": "ordine", "t": "siccome è tardi prendiamo un taxi", "tr": "因为太晚了，我们打车。" },
    { "k": "scrivi", "q": "用意大利语写：“我不去，因为我没有时间。”", "a": "Non vado perché non ho tempo.", "accetta": ["Io non vado perché non ho tempo.", "Non ci vado perché non ho tempo.", "Non vengo perché non ho tempo.", "Perché non ho tempo, non vado."], "perche": "原因放在主句之后，用 perché；不再加其他连接词。" },
    { "k": "scrivi", "q": "用意大利语写：“虽然这块手表很贵，我还是买。”（手表 = l'orologio）", "a": "Anche se l'orologio è caro, lo compro.", "accetta": ["Anche se è caro, lo compro.", "Lo compro anche se è caro.", "Anche se l'orologio costa molto, lo compro.", "Lo compro anche se costa molto."], "perche": "anche se 一个词表示“虽然”；后面不加 ma。" },
    { "k": "trasforma", "consegna": "把句子改成原因在前的句子，用 siccome。", "base": "Piove, quindi resto a casa.", "accetta": ["Siccome piove, resto a casa.", "Siccome piove resto a casa."], "rifiutate": [
      { "t": "Perché piove, quindi resto a casa.", "perche": "两个连接词叠用，意大利语只取其一。" }
    ], "perche": "原因在前用 siccome，结果直接接在后面。" },
    { "k": "trasforma", "consegna": "把 anche se 改成 benché，并改变动词的形式。", "base": "Anche se è tardi, esco.", "accetta": ["Benché sia tardi, esco.", "Benché sia tardi, io esco.", "Esco benché sia tardi.", "Sebbene sia tardi, esco.", "Esco sebbene sia tardi."], "rifiutate": [
      { "t": "Benché è tardi, esco.", "perche": "benché 之后要用虚拟式 sia，不是 è。" }
    ], "perche": "benché 与 sebbene 要求虚拟式：è 变成 sia。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Perché non vieni al cinema?" },
      { "chi": "B", "t": "＿ ho molto da fare.", "buco": true }
    ], "opzioni": [
      { "t": "Perché", "ok": true, "perche": "回答“为什么”，用 perché 引出原因。" },
      { "t": "Quindi", "ok": false, "perche": "quindi 引出结果，不能回答“为什么”。" },
      { "t": "Benché", "ok": false, "perche": "benché 表示让步，而且后面要用虚拟式。" }
    ] }
  ],
  "capaci": [
    "你会选一个连接词表达因果：perché、siccome、quindi，并避免汉语的成对叠用。",
    "你会用 se 提出条件，用 quando 说“……的时候”。",
    "你会区分 anche se（说真实的事时用直陈式）和 benché、sebbene、nonostante（虚拟式）表示的让步。",
    "你会用 ma、però、mentre 连接对比和同时进行的事。"
  ],
  "fonti": [
    "Treccani, Enciclopedia dell'Italiano, voce «connettivi» (tipi: causali perché e siccome, consecutivi quindi e dunque, concessivi anche se e sebbene, condizionale se; il modo dopo sebbene e anche se non è spiegato con una regola esplicita; pagina letta)",
    "Wikipedia in inglese, voce «Italian grammar» (usi del congiuntivo e del periodo ipotetico; letta solo in parte)",
    "Tatoeba (ita.tsv), interrogato per le frasi con siccome, anche se, benché, sebbene, nonostante"
  ]
};
