/* Lezione 36 · 怎么去：in、a、con 和交通工具 (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["mezzi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Ogni mattina vado in ufficio in metropolitana.", "tr": "每天早上我坐地铁去办公室。" },
      { "t": "Siamo andati a Firenze in treno.", "tr": "我们坐火车去了佛罗伦萨。" },
      { "t": "Il bar è vicino: ci andiamo a piedi.", "tr": "酒吧很近：我们走着去。" },
      { "t": "Domani arrivo con il treno delle undici.", "tr": "明天我坐十一点的火车到。" }
    ],
    "domanda": "汉语要分“坐、开、骑、走”，意大利语的动词是一样的吗？in 后面的 metropolitana 和 treno 前面有冠词吗？第三句的“走路”为什么不是 in？第四句为什么换成了 con il？",
    "risposta": "四句话的动词都是 andare 或 arrivare，没有“坐、开、骑”的区别：交通工具由后面的小词来说。前两句用 **in + 交通工具**，**不加冠词**（in metropolitana，in treno）。第三句 **a piedi** 是固定说法：靠自己的双脚走路用 a。第四句说的是“十一点的那一班火车”，是具体的一班，所以用 **con + 冠词**（con il treno delle undici）。"
  },
  "regola": {
    "enunciato": "说“用什么交通方式去”，意大利语只需要 andare（或 venire、viaggiare、arrivare）加一个小词：**in + 交通工具**，不加冠词（in treno，in macchina，in aereo）；**走路**用固定说法 **a piedi**。如果说的是某一辆具体的车或某一班车，就换成 **con + 冠词**：con la macchina di Marco，con il treno delle undici。",
    "schema": ["andare / venire", "in", "交通工具（无冠词）", "｜", "a piedi", "｜", "con + 冠词 + 具体的车"],
    "punti": [
      { "ok": true, "t": "**in + 无冠词的交通工具**：in treno、in autobus、in macchina（也说 in auto）、in aereo、in metropolitana、in taxi、in tram、in bici、in moto、in barca、in nave。问方式时就用这个：Come vai? ─ In treno." },
      { "ok": true, "t": "**a piedi** 是走路的固定说法，不加冠词，也不能拆开：Vado al lavoro a piedi. 骑马也用 a：a cavallo。" },
      { "ok": true, "t": "**con + 冠词**：用来说具体的一辆车、一班车，或者在比较的时候：con la macchina di Marco，con il treno delle undici，con l'autobus。这时前面有冠词或物主，in 就不能再用了。" },
      { "ok": true, "t": "**问法**：Come vai a Milano?（你怎么去米兰？）也可以问 Con che mezzo viaggi?（你乘什么交通工具旅行？）。回答只要说交通工具：In treno. / A piedi." },
      { "ok": true, "t": "**prendere + 冠词 + 交通工具**：这里的“乘、搭”是动词 prendere，交通工具前要有冠词：Prendo il treno delle otto. Prendo l'autobus." },
      { "ok": true, "t": "**驾驶**用 guidare：Guido io.（我来开。）说“开车去”时，andare in macchina 不说明谁在开，开车的人和乘客都可以这样说。" },
      { "ok": false, "t": "**不要**在 in 后面加冠词（in il treno），也不要把走路说成 in piedi：in piedi 的意思是“站着”。" }
    ]
  },
  "logica": [
    "汉语用动词来区分：“坐火车、开车、骑自行车、走路”是四个不同的动词。意大利语把方式交给介词：andare 只管“去”，in 或 a 加上后面的名词再说明怎么去。所以不用再找“坐、开、骑”的意大利语动词，说 andare in treno、andare in bici、andare in macchina 就够了。",
    "为什么 in 后面没有冠词？这里的 in treno、in macchina 说的是“交通方式”这一类，而不是某一辆具体的车，所以名词不需要冠词，和 in città、in vacanza、in ufficio 这类说法是一个思路。一旦说到具体的一辆或一班（macchina di Marco，treno delle undici），名词就被限定了，需要冠词，介词也就换成 con。",
    "a piedi 的 a 常见的解释是：坐在车里的人是“在车里”（in），靠自己的双脚或牲畜行动的人是“靠着、凭着”（a）。但 in bici、in moto 里人是骑在上面，也说 in，所以最稳妥的记法是：把 in treno、in macchina、in bici 和 a piedi、a cavallo 当作固定搭配来记。"
  ],
  "mappa": {
    "tipo": "albero",
    "inizio": "q0",
    "nodi": {
      "q0": { "q": "你是靠自己的双脚（或骑动物）去的吗？", "risposte": [
        { "t": "是，走路或骑马", "vai": "piedi" },
        { "t": "不是，乘交通工具", "vai": "q1" }
      ] },
      "piedi": { "fine": "说 a piedi（走路）或 a cavallo（骑马），不加冠词：Vado a scuola a piedi." },
      "q1": { "q": "你说的是某一辆具体的车或某一班车吗（有车主、有时间）？", "risposte": [
        { "t": "不是，只说交通方式", "vai": "in" },
        { "t": "是，具体的一辆或一班", "vai": "con" }
      ] },
      "in": { "fine": "说 in + 交通工具，不加冠词：Vado in treno / in autobus / in bici." },
      "con": { "fine": "说 con + 冠词 + 交通工具：con il treno delle otto，con la macchina di Marco." }
    }
  },
  "esempi": [
    { "gruppo": "in + 交通工具：说怎么去", "items": [
      { "t": "Ogni mattina vado in ufficio in metropolitana.", "tr": "每天早上我坐地铁去办公室。" },
      { "t": "Siamo andati a Firenze in treno.", "tr": "我们坐火车去了佛罗伦萨。" },
      { "t": "Mia zia viene sempre in macchina.", "tr": "我姑姑总是乘汽车来。" },
      { "t": "Domani torno a casa in aereo.", "tr": "明天我坐飞机回家。" }
    ] },
    { "gruppo": "a piedi、a cavallo、in bici", "items": [
      { "t": "Il bar è vicino: ci andiamo a piedi.", "tr": "酒吧很近：我们走着去。", "nota": "ci 代替地点“那里”，放在动词前。" },
      { "t": "Torno a casa a piedi, mi fa bene.", "tr": "我走路回家，这对我有好处。" },
      { "t": "Mio fratello va in bici anche quando piove.", "tr": "我弟弟下雨也骑车。" },
      { "t": "I turisti visitano il parco a cavallo.", "tr": "游客骑马游览公园。" }
    ] },
    { "gruppo": "con + 冠词：具体的一辆或一班", "items": [
      { "t": "Domani arrivo con il treno delle undici.", "tr": "明天我坐十一点的火车到。", "nota": "有具体的班次，所以有冠词。" },
      { "t": "Domani andiamo a Roma con la macchina di Marco.", "tr": "明天我们坐马可的车去罗马。" },
      { "t": "In città mi sposto sempre con i mezzi pubblici.", "tr": "在城里我总是乘公共交通出行。" }
    ] },
    { "gruppo": "问法、prendere、guidare", "items": [
      { "t": "Come vieni, in treno o in autobus?", "tr": "你怎么来，坐火车还是坐公共汽车？" },
      { "t": "Prendo il treno delle otto.", "tr": "我坐八点的火车。", "nota": "prendere 是“乘、搭”，交通工具前有冠词。" },
      { "t": "Guido io, tu dormi in macchina.", "tr": "我来开车，你在车里睡觉。" },
      { "t": "Sono in treno, arrivo tra dieci minuti.", "tr": "我在火车上，十分钟后到。", "nota": "essere in treno 还可以表示“人在火车上”。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我坐地铁去上班。”哪一句对？", "opzioni": [
      { "t": "Vado al lavoro in metropolitana.", "ok": true, "perche": "交通方式用 in，后面不加冠词。" },
      { "t": "Vado al lavoro in la metropolitana.", "ok": false, "perche": "说方式时 in 后面不加冠词。" },
      { "t": "Vado al lavoro a metropolitana.", "ok": false, "perche": "a 只用在 a piedi、a cavallo 这些固定说法里，乘地铁用 in。" }
    ] },
    { "q": "“我走路去学校。”哪一句对？", "opzioni": [
      { "t": "Vado a scuola a piedi.", "ok": true, "perche": "走路是固定说法 a piedi。" },
      { "t": "Vado a scuola in piedi.", "ok": false, "perche": "in piedi 的意思是“站着”，不是“走路”。" },
      { "t": "Vado a scuola con i piedi.", "ok": false, "perche": "con i piedi 是“用脚”，不是日常说法。" }
    ] },
    { "q": "你想问朋友“怎么去米兰”，哪一句最自然？", "opzioni": [
      { "t": "Come vai a Milano?", "ok": true, "perche": "问方式用 come，常见又自然。" },
      { "t": "Che cosa vai a Milano?", "ok": false, "perche": "che cosa 问的是“什么东西”，不能问方式。" },
      { "t": "Quanto vai a Milano?", "ok": false, "perche": "quanto 问数量或价钱，不能问方式。" }
    ] },
    { "q": "“我们坐飞机去的。”哪一句对？", "opzioni": [
      { "t": "Siamo andati in aereo.", "ok": true, "perche": "交通工具用 in，不加冠词。" },
      { "t": "Siamo andati a aereo.", "ok": false, "perche": "乘飞机用 in，不用 a。" },
      { "t": "Siamo andati con aereo.", "ok": false, "perche": "用 con 时名词要有冠词（con l'aereo）；光秃秃的 con aereo 不通。" }
    ] },
    { "q": "“明天我坐马可的车去罗马。”（具体的一辆车）哪一句对？", "opzioni": [
      { "t": "Domani vado a Roma con la macchina di Marco.", "ok": true, "perche": "具体的一辆车要有冠词，用 con la macchina。" },
      { "t": "Domani vado a Roma in macchina di Marco.", "ok": false, "perche": "in 后面是不带冠词的泛指名词，不能再接 di Marco。" },
      { "t": "Domani vado a Roma in la macchina di Marco.", "ok": false, "perche": "in 和 la 不能连用来表示交通方式。" }
    ] },
    { "q": "“她骑车去公园。”哪一句对？", "opzioni": [
      { "t": "Va al parco in bici.", "ok": true, "perche": "骑自行车用 in bici，不加冠词。" },
      { "t": "Va al parco a bici.", "ok": false, "perche": "a 只用于 a piedi、a cavallo 这类固定说法。" },
      { "t": "Va al parco per bici.", "ok": false, "perche": "per 表示目的或对象，不表示交通方式。" }
    ] },
    { "q": "“我坐八点的火车。”（动词是“乘、搭”）哪一句对？", "opzioni": [
      { "t": "Prendo il treno delle otto.", "ok": true, "perche": "prendere 后面直接接带冠词的交通工具。" },
      { "t": "Prendo in treno delle otto.", "ok": false, "perche": "prendere 是及物动词，后面不加 in。" },
      { "t": "Prendo treno delle otto.", "ok": false, "perche": "这里是具体的一班车，treno 前面需要冠词 il。" }
    ] },
    { "q": "你在电话里说“我在火车上，一会儿就到”，哪一句对？", "opzioni": [
      { "t": "Sono in treno, arrivo tra poco.", "ok": true, "perche": "essere in treno 表示人在火车上。" },
      { "t": "Sono in il treno, arrivo tra poco.", "ok": false, "perche": "in 后面不能再加冠词 il。" },
      { "t": "Sono per treno, arrivo tra poco.", "ok": false, "perche": "per 不能表示“在……上”。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Come arrivi in ufficio?",
    "righe": [
      { "chi": "A", "t": "Come vieni in ufficio, Marta? In macchina?", "tr": "玛尔塔，你怎么来办公室？开车吗？" },
      { "chi": "B", "t": "No, vengo in bici quando c'è il sole. Oggi invece sono venuta in autobus.", "tr": "不，有太阳的时候我骑车来。今天却是坐公共汽车来的。" },
      { "chi": "A", "t": "Io abito vicino, vengo a piedi.", "tr": "我住得近，走路来。" },
      { "chi": "B", "t": "Beato te! Io ci metto quaranta minuti.", "tr": "你真幸运！我要花四十分钟。" },
      { "chi": "A", "t": "Allora domani vieni con me? Passo a prenderti con la macchina di mio fratello.", "tr": "那明天你跟我一起来吧？我开我哥哥的车去接你。" },
      { "chi": "B", "t": "Volentieri, grazie!", "tr": "好啊，谢谢！" }
    ],
    "esercizi": [
      { "q": "今天玛尔塔是怎么来办公室的？", "opzioni": [
        { "t": "坐公共汽车", "ok": true, "perche": "她说 Oggi sono venuta in autobus。" },
        { "t": "骑自行车", "ok": false, "perche": "骑车是天晴时的习惯（vengo in bici），今天她没有骑。" },
        { "t": "走路", "ok": false, "perche": "走路来的是 A，不是玛尔塔。" }
      ] },
      { "q": "A 平时怎么上班？", "opzioni": [
        { "t": "走路", "ok": true, "perche": "A 说 vengo a piedi，因为住得近。" },
        { "t": "开车", "ok": false, "perche": "开车是明天去接玛尔塔时的安排，不是平时的方式。" },
        { "t": "坐地铁", "ok": false, "perche": "对话里完全没有提到地铁这件事。" }
      ] },
      { "q": "明天他们怎么安排？", "opzioni": [
        { "t": "A 开他哥哥的车去接玛尔塔", "ok": true, "perche": "con la macchina di mio fratello：具体的一辆车，所以用 con。" },
        { "t": "玛尔塔骑车来", "ok": false, "perche": "明天是 A 去接她，不是她骑车。" },
        { "t": "两个人都走路", "ok": false, "perche": "玛尔塔住得远，要花四十分钟，所以 A 开车接她。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "学习者常把“走路”说成 in piedi，在 in 后面加冠词（in il treno），或者把汉语的“坐、开、骑”硬译出来，说成 a treno、a autobus：Vado al lavoro in piedi / Vado in il treno / Vado a autobus。",
    "perche": "in piedi 和 a piedi 看起来只差一个字母，英语和汉语的“站着、走路”又容易混在一起。冠词的错误来自母语：英语有 by train、汉语有“坐火车”，而意大利语的 in 后面没有冠词，学习者会按照有冠词的名词短语习惯把它补上。",
    "esci": "把交通方式当成固定搭配来记：in treno，in autobus，in macchina，in bici；走路只有一个说法 a piedi，in piedi 永远是“站着”。需要说具体的一辆车或一班车时，换成 con + 冠词。",
    "esempi": [
      { "sbagliata": "Vado al lavoro in piedi.", "giusta": "Vado al lavoro a piedi." },
      { "sbagliata": "Vado a Roma in il treno.", "giusta": "Vado a Roma in treno." },
      { "sbagliata": "Vado a scuola a autobus.", "giusta": "Vado a scuola in autobus." },
      { "sbagliata": "Prendo treno delle otto.", "giusta": "Prendo il treno delle otto." }
    ]
  },
  "curiosi": [
    { "titolo": "in treno 与 sul treno", "t": "in treno 说的是“用火车这种方式”，也可以说人在火车里；sul treno 则把火车看作一个地方，强调“在火车上这个位置”：Ho dimenticato la borsa sul treno（我把包忘在火车上了）。想说“怎么去”，用 in treno。" },
    { "titolo": "macchina 与 auto", "t": "macchina 是日常口语里最常用的“汽车”，auto 和 automobile 也常见，在书面语和报道里更多。in macchina 还可以表示“在车里”：Ti aspetto in macchina（我在车里等你）。" },
    { "titolo": "con il treno 也是地道的说法", "t": "con + 冠词 + 交通工具不是错误，它在日常里也常听到，特别是指具体的一班车，或者拿两种方式作比较：È più facile arrivare con l'autobus che con la macchina（坐公共汽车比开车更容易到）。学习者先掌握 in + 无冠词，就能自然地表达绝大多数场合。" }
  ],
  "pragmatica": "问路和商量出行时，这些句子最实用：Come ci arrivo?（我怎么去那里？），Ci puoi andare a piedi, sono dieci minuti.（你可以走路去，十分钟。），Vengo in macchina, ti do un passaggio?（我开车来，要不要载你一程？）。回答别人 Come vai? 时，只说交通工具就足够了：In bici. A piedi. 打电话时说 Sono in treno 或 Sono in macchina，对方就知道你在路上。",
  "esercizi": [
    { "k": "scegli", "q": "等车时，朋友说 Sono in piedi. 他的意思是什么？", "opzioni": [
      { "t": "我站着（没有坐下）", "ok": true, "perche": "in piedi 的意思是“站着”。" },
      { "t": "我走路去", "ok": false, "perche": "走路是 a piedi，不是 in piedi。" },
      { "t": "我骑车去", "ok": false, "perche": "骑车是 in bici。" }
    ] },
    { "k": "buco", "zh": "Domani vado a Roma ＿ aereo.", "tr": "明天我坐飞机去罗马。", "opzioni": [
      { "t": "in", "ok": true, "perche": "乘飞机用 in，后面不加冠词。" },
      { "t": "a", "ok": false, "perche": "a 只用在 a piedi、a cavallo 这类说法里。" },
      { "t": "con", "ok": false, "perche": "con 后面要加冠词（con l'aereo），而这里 aereo 前没有冠词。" }
    ] },
    { "k": "buco", "zh": "Torno a casa ＿ piedi, abito vicino.", "tr": "我走路回家，我住得近。", "opzioni": [
      { "t": "a", "ok": true, "perche": "走路的固定说法是 a piedi。" },
      { "t": "in", "ok": false, "perche": "in piedi 是“站着”。" },
      { "t": "con", "ok": false, "perche": "走路不说 con piedi。" }
    ] },
    { "k": "buco", "zh": "Domani verrò con ＿ macchina di Luca.", "tr": "明天我坐卢卡的车来。", "opzioni": [
      { "t": "la", "ok": true, "perche": "macchina 是阴性单数，具体的一辆车前用冠词 la。" },
      { "t": "il", "ok": false, "perche": "il 用在阳性单数名词前，macchina 是阴性。" },
      { "t": "le", "ok": false, "perche": "le 是阴性复数，这里只有一辆车。" }
    ] },
    { "k": "ordine", "t": "Vado al lavoro in metropolitana", "tr": "我坐地铁去上班。" },
    { "k": "ordine", "t": "Come vieni in ufficio", "tr": "你怎么来办公室？" },
    { "k": "scrivi", "q": "用意大利语写：“我坐火车去米兰。”", "a": "Vado a Milano in treno.", "accetta": ["Io vado a Milano in treno.", "Vado in treno a Milano.", "In treno vado a Milano."], "perche": "交通方式用 in + 无冠词的 treno。" },
    { "k": "scrivi", "q": "用意大利语写：“我走路去上班。”", "a": "Vado al lavoro a piedi.", "accetta": ["Io vado al lavoro a piedi.", "Vado a piedi al lavoro.", "Vado in ufficio a piedi.", "Vado a lavorare a piedi."], "perche": "走路是固定说法 a piedi。" },
    { "k": "trasforma", "base": "Vado a scuola in autobus.", "consegna": "改成“走路去学校”：只换掉交通方式，其他词不变。", "accetta": ["Vado a scuola a piedi."], "rifiutate": [
      { "t": "Vado a scuola in piedi.", "perche": "in piedi 是“站着”，不是走路。" }
    ], "perche": "走路的固定说法是 a piedi。" },
    { "k": "trasforma", "base": "Vengo in macchina.", "consegna": "改成“坐马可的车来”：用 con 和冠词，说 la macchina di Marco。", "accetta": ["Vengo con la macchina di Marco."], "rifiutate": [
      { "t": "Vengo in macchina di Marco.", "perche": "in 后面不能再接 di Marco；具体的车要用 con + 冠词。" }
    ], "perche": "具体的一辆车有冠词和所属者，所以介词用 con。" },
    { "k": "trasforma", "base": "Prendo l'autobus.", "consegna": "改用 andare 重说：“我坐公共汽车去”，用 in。", "accetta": ["Vado in autobus.", "Io vado in autobus."], "rifiutate": [
      { "t": "Vado l'autobus.", "perche": "andare 不能直接接交通工具，要用 in + 无冠词。" }
    ], "perche": "andare + in + 交通工具，不加冠词。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Come vai a Torino?" },
      { "chi": "B", "t": "＿ treno, è più comodo.", "buco": true }
    ], "opzioni": [
      { "t": "In", "ok": true, "perche": "交通方式用 in，后面是不带冠词的 treno。" },
      { "t": "A", "ok": false, "perche": "a treno 不成立；a 只用在 a piedi 这类说法里。" },
      { "t": "Con", "ok": false, "perche": "Con treno 缺冠词；要说 Con il treno，这里的 treno 前没有冠词。" }
    ] }
  ],
  "capaci": [
    "你会回答 Come vai? 并说出常见的交通方式：in treno，in autobus，in macchina，in bici，a piedi。",
    "你会区分 a piedi（走路）和 in piedi（站着），不再把两者混用。",
    "你会在说具体的一辆车或一班车时选择 con + 冠词：con la macchina di Marco，con il treno delle otto。",
    "你会区分 andare in treno（怎么去）、prendere il treno（乘某一班）和 guidare（驾驶）。"
  ],
  "fonti": [
    "Elon.io, grammatica italiana, «A vs In for places» (pagina in inglese: in per i veicoli, a per il movimento con le proprie gambe o con un animale)",
    "Think in Italian, «How to say With and Without» (pagina in inglese: con per mezzo o strumento, compresi i mezzi di trasporto, con esempio con il treno)",
    "Treccani, Vocabolario, voce «con» (preposizione): compagnia, mezzo o strumento, modo, assenza",
    "Tatoeba (corpus italiano, file ita.tsv locale): frasi con in treno, in autobus, in bicicletta, in aereo, a piedi, con il treno, con l'autobus (controllo dell'uso naturale)"
  ]
};
