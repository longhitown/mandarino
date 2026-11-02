/* Lezione 8 · a, in, da, di (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["preposizioni"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Sono a Roma.", "tr": "我在罗马。" },
      { "t": "Vado a Roma.", "tr": "我去罗马。" },
      { "t": "Vengo da Roma.", "tr": "我从罗马来。" },
      { "t": "Vado dal medico.", "tr": "我去看医生。" }
    ],
    "domanda": "汉语用「在」「去」「从」三个不同的词。看前三句：「在罗马」和「去罗马」，Roma 前面是不是同一个词？「从罗马来」呢？第四句去的是一个人（医生），这个词又变了。你发现了什么规律？",
    "risposta": "「在罗马」和「去罗马」都用 **a**：到底是「在」还是「去」，由动词 sono / vado 来说明，介词不变。「从罗马来」用 **da**。第四句去的是**人**（医生），所以也用 **da**（dal = da + il）。可见：选介词要看**问题**（在哪儿？去哪儿？从哪儿来？）和**地点的类型**（城市、国家、人）。"
  },
  "regola": {
    "enunciato": "意大利语用 **a、in、da、di** 四个小词表示很多关系。选哪一个，看你回答的是什么问题、地点是什么类型：回答「在哪儿？去哪儿？」时，**城市用 a，国家和地区用 in，找人用 da**；回答「从哪儿来？」时用 **da**；说「谁的、什么做的、关于什么」时用 **di**。",
    "schema": ["sono / vado", "a · in · da", "城市 · 国家 · 人"],
    "punti": [
      { "ok": true, "t": "**城市、小岛、casa、scuola 用 a**：sono a Roma，vado a Capri，torno a casa，sono a scuola。" },
      { "ok": true, "t": "**国家、地区、大岛用 in**：in Italia，in Toscana，in Sicilia。很多场所也用 in：in ufficio，in banca，in centro，in cucina。" },
      { "ok": true, "t": "**在某人那里、去某人那里用 da**：sono da Marco，vado dal medico，vieni da me。人不是地点，所以不能用 a 或 in。" },
      { "ok": true, "t": "**从某地来用 da**：vengo da Roma，vengo dalla Cina。只说出身、家乡时用 **di** + 城市：sono di Napoli。" },
      { "ok": true, "t": "**交通工具**：in treno，in autobus，in macchina，in aereo；走路是 a piedi。说具体的某一辆、某一班时用 con：con l'autobus 12。" },
      { "ok": true, "t": "**di** 表示所属、材料、主题：il libro di Anna，un tavolo di legno，un libro di cucina。顺序和汉语相反：先说东西，再说是谁的。" },
      { "ok": true, "t": "**介词遇到定冠词会合成一个词**：a + il = al（al bar），da + il = dal（dal medico）。完整的合成表在第 22 课。" },
      { "ok": false, "t": "**不能把汉语的「在、到、去」逐个换成一个意大利语介词**：vado in Roma，abito a Cina，vado al medico 都不成立。" }
    ]
  },
  "logica": [
    "汉语把关系分给不同的词：「在」表示静止，「去、到」表示移动，「从」表示起点，「的」表示所属。意大利语的做法相反：**静止和移动常常用同一个介词**，区别放在动词里。sono a Roma（我在罗马）和 vado a Roma（我去罗马）介词一样，动词 sono 和 vado 告诉你是「在」还是「去」。",
    "意大利语选介词主要看**地点的类型**。可以这样想：城市是地图上的一个点，用 **a**；国家和地区是一个大范围，人在它「里面」，用 **in**；人本身不是地点，去找人就是「到某人那里」，用 **da**。所以 a Roma、in Italia、da Marco 三个说法各有各的位置，问题是「在哪儿」还是「去哪儿」并不改变它们。",
    "**da** 的核心是「起点、来源」：vengo da Roma（从罗马来）。同一个词也用来说「到某人那里」，因为那是从你这里出发、到他那里去：vado da Marco。**di** 对应汉语的「的」，也能表示所属、材料、主题，但位置不同：汉语的「的」在被修饰的词前面，di 在后面，老师的书 = il libro dell'insegnante。"
  ],
  "mappa": {
    "tipo": "albero",
    "inizio": "q0",
    "nodi": {
      "q0": {
        "q": "你要回答哪一个问题？",
        "risposte": [
          { "t": "Dove sei? Dove vai?（在哪儿？去哪儿？）", "vai": "q1" },
          { "t": "Da dove vieni?（从哪儿来？）", "vai": "q2" },
          { "t": "Di chi è? Di che cosa è? Di che cosa parla?（谁的？什么做的？关于什么？）", "vai": "fdi" }
        ]
      },
      "q1": {
        "q": "地点是什么？",
        "risposte": [
          { "t": "一个人（医生、朋友）", "vai": "fda1" },
          { "t": "城市、小岛、casa、scuola", "vai": "fa" },
          { "t": "国家、地区、大岛", "vai": "fin1" },
          { "t": "一个场所（办公室、银行、市中心）", "vai": "fin2" }
        ]
      },
      "q2": {
        "q": "你说的是什么？",
        "risposte": [
          { "t": "从某地来、出发（动作）", "vai": "fda2" },
          { "t": "只说出身、家乡", "vai": "fdi2" }
        ]
      },
      "fa": { "fine": "用 **a**：sono a Roma，vado a Capri，torno **a casa**，sono **a scuola**。这些地点都不加冠词。" },
      "fin1": { "fine": "用 **in**：abito **in** Italia，vado **in** Toscana，vivo **in** Sicilia。单数的国家名前面一般不加冠词。" },
      "fin2": { "fine": "多数场所用 **in**：in ufficio，in banca，in farmacia，in centro，in cucina。少数场所用 a + 冠词：al ristorante，al bar，al cinema，al mare。后一类整个记住。" },
      "fda1": { "fine": "用 **da**：sono **da** Marco，vado **dal** medico，vieni **da** me。找的是人，不是房子。" },
      "fda2": { "fine": "用 **da**：vengo **da** Roma，vengo **dalla** Cina，arrivo **dall'**Italia。" },
      "fdi2": { "fine": "用 **di** + 城市：sono **di** Napoli，Giulia è **di** Bari。国家用形容词说：sono cinese。" },
      "fdi": { "fine": "用 **di**：il libro **di** Anna（谁的），un tavolo **di** legno（什么做的），un libro **di** cucina（关于什么）。" }
    }
  },
  "esempi": [
    { "gruppo": "Dove sei? 在哪儿（a、in、da）", "items": [
      { "t": "Sono a Roma per lavoro.", "tr": "我因为工作在罗马。" },
      { "t": "Maria abita in Spagna.", "tr": "玛丽亚住在西班牙。" },
      { "t": "Il pomeriggio studio in biblioteca.", "tr": "下午我在图书馆学习。" },
      { "t": "Stasera sono da Marco.", "tr": "今晚我在马可家。", "nota": "人的家、店、诊所：用 da。" },
      { "t": "Di solito pranziamo al bar.", "tr": "我们通常在咖啡馆吃午饭。", "nota": "al = a + il，第 22 课详细讲。" }
    ] },
    { "gruppo": "Dove vai? 去哪儿", "items": [
      { "t": "Domani vado a Venezia con Luca.", "tr": "明天我和卢卡去威尼斯。" },
      { "t": "Quest'estate andiamo in Grecia.", "tr": "今年夏天我们去希腊。" },
      { "t": "Ho mal di denti: vado dal dentista.", "tr": "我牙疼，我去看牙医。" },
      { "t": "Dopo la scuola torno a casa a piedi.", "tr": "放学后我走路回家。", "nota": "a casa（回家）和 a piedi（步行）都是固定说法。" }
    ] },
    { "gruppo": "Da dove vieni? 从哪儿来", "items": [
      { "t": "Vengo da Shanghai, ma abito a Milano.", "tr": "我来自上海，但住在米兰。" },
      { "t": "Giulia è di Bari.", "tr": "朱莉娅是巴里人。", "nota": "说出身、家乡：di + 城市。" }
    ] },
    { "gruppo": "怎么去、从什么时候开始", "items": [
      { "t": "Di solito vado al lavoro in autobus, ma oggi vado a piedi.", "tr": "我平时坐公交车上班，但今天走路去。" },
      { "t": "Studio italiano da due anni.", "tr": "我学意大利语已经两年了。", "nota": "动词用现在时，da 说明这件事从两年前持续到现在。" }
    ] },
    { "gruppo": "di：谁的、什么做的、关于什么", "items": [
      { "t": "Questa è la macchina di Paolo.", "tr": "这是保罗的车。" },
      { "t": "Ho un tavolo di legno e una tazza da tè.", "tr": "我有一张木桌和一个茶杯。", "nota": "di legno 说材料；tazza da tè 说用途（喝茶用的杯子）。" },
      { "t": "Leggo un libro di cucina.", "tr": "我在读一本烹饪书。" }
    ] }
  ],
  "contrasti": [
    { "q": "「我去罗马」怎么说？", "opzioni": [
      { "t": "Vado a Roma.", "ok": true, "perche": "罗马是城市，用 a；是「去」还是「在」由动词 vado 表示。" },
      { "t": "Vado in Roma.", "ok": false, "perche": "城市前面不用 in。in 用在国家、地区和一部分场所前面。" },
      { "t": "Vado da Roma.", "ok": false, "perche": "da 表示起点（从罗马），或者去找一个人；去一个城市不能用 da。" }
    ] },
    { "q": "「我住在意大利」怎么说？", "opzioni": [
      { "t": "Abito in Italia.", "ok": true, "perche": "意大利是国家，用 in。" },
      { "t": "Abito a Italia.", "ok": false, "perche": "a 用在城市前面；国家要用 in。这是受汉语「在」影响最常见的错误。" }
    ] },
    { "q": "「我去看医生」怎么说？", "opzioni": [
      { "t": "Vado dal medico.", "ok": true, "perche": "医生是人，去找人用 da；dal = da + il。" },
      { "t": "Vado al medico.", "ok": false, "perche": "a 用在地点前面，医生是一个人，不是地点。汉语不分这两种，意大利语要分。" }
    ] },
    { "q": "「我从中国来」怎么说？", "opzioni": [
      { "t": "Vengo dalla Cina.", "ok": true, "perche": "「从」就是 da；dalla = da + la。" },
      { "t": "Vengo in Cina.", "ok": false, "perche": "in Cina 的意思是「到中国来」或「在中国」，不是「从中国来」。起点要用 da。" }
    ] },
    { "q": "「这是马可的书」怎么说？", "opzioni": [
      { "t": "È il libro di Marco.", "ok": true, "perche": "先说东西，再用 di 引出主人，顺序和汉语相反。" },
      { "t": "È Marco il libro.", "ok": false, "perche": "汉语是「马可的书」，但意大利语不能把人放在前面，也不能没有 di。" }
    ] },
    { "q": "「我走路去学校」怎么说？", "opzioni": [
      { "t": "Vado a scuola a piedi.", "ok": true, "perche": "a piedi 是固定说法，意思是「步行」。" },
      { "t": "Vado a scuola in piedi.", "ok": false, "perche": "in piedi 的意思是「站着」，不是「走路」。步行要说 a piedi。" }
    ] },
    { "q": "「我学意大利语已经两年了」怎么说？", "opzioni": [
      { "t": "Studio italiano da due anni.", "ok": true, "perche": "da + 一段时间 + 现在时：从过去开始、现在仍在继续。" },
      { "t": "Studio italiano per due anni.", "ok": false, "perche": "per 说的是一段独立的时间（学两年，然后结束或计划学两年），没有「已经……现在还在」的意思。" }
    ] },
    { "q": "「一张木桌子」怎么说？", "opzioni": [
      { "t": "Un tavolo di legno.", "ok": true, "perche": "材料用 di：di legno，di lana，di plastica。" },
      { "t": "Un tavolo da legno.", "ok": false, "perche": "da + 名词说的是用途（如 da tè，da letto），不是材料。" }
    ] },
    { "q": "你想买一个喝茶用的杯子。怎么说？", "opzioni": [
      { "t": "Una tazza da tè.", "ok": true, "perche": "da + 名词表示用途：这个杯子是为茶准备的。" },
      { "t": "Una tazza di tè.", "ok": false, "perche": "una tazza di tè 是「一杯茶」，杯子里装着茶；di 说里面的东西，不是杯子的用途。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Due vicini si conoscono",
    "righe": [
      { "chi": "A", "t": "Ciao, sei di Milano?", "tr": "你好，你是米兰人吗？" },
      { "chi": "B", "t": "No, sono di Chengdu, ma abito a Milano da due anni.", "tr": "不是，我是成都人，但我在米兰已经住了两年。" },
      { "chi": "A", "t": "Quindi vieni dalla Cina. E come vai al lavoro?", "tr": "那你是从中国来的。你怎么去上班？" },
      { "chi": "B", "t": "In metro, ma quando c'è il sole vado a piedi.", "tr": "坐地铁，但天晴的时候我走路去。" },
      { "chi": "A", "t": "Domani sera sono da Marco. Vieni anche tu?", "tr": "明天晚上我在马可家。你也来吗？" },
      { "chi": "B", "t": "Volentieri! Marco abita in centro?", "tr": "好啊！马可住在市中心吗？" },
      { "chi": "A", "t": "Sì, in via Verdi, a cinque minuti a piedi dalla stazione.", "tr": "对，住在威尔第街，离车站走路五分钟。" }
    ],
    "esercizi": [
      { "q": "B 说自己是成都人（说出身）。哪一句？", "opzioni": [
        { "t": "Sono di Chengdu.", "ok": true, "perche": "说出身、家乡用 di + 城市。" },
        { "t": "Sono da Chengdu.", "ok": false, "perche": "说出身、家乡用 di，不用 da；da 表示起点，要和 vengo（来）连用：vengo da Chengdu。" }
      ] },
      { "q": "A 说明天晚上他在马可家。哪一句？", "opzioni": [
        { "t": "Domani sera sono da Marco.", "ok": true, "perche": "在某人家里：da + 人名。" },
        { "t": "Domani sera sono a Marco.", "ok": false, "perche": "a 不能放在人名前面；人不是地点，要用 da。" }
      ] },
      { "q": "B 说自己坐地铁上班。哪一句？", "opzioni": [
        { "t": "Vado in metro.", "ok": true, "perche": "交通工具用 in：in metro，in treno，in autobus。" },
        { "t": "Vado a metro.", "ok": false, "perche": "a 只用在 a piedi、a cavallo 这样的固定说法里，坐地铁用 in。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语里「在、到、去、从」是不同的词，学生常常按汉语的词来选介词，或者所有地点都只用一个介词：Vado in Roma，Abito a Cina，Vado al medico，Vengo di Roma。",
    "perche": "汉语的「在、去」不分地点是城市、国家还是人，所以学生以为意大利语也不分。意大利语恰好相反：介词由地点的类型决定，而「在」和「去」的区别放在动词里。",
    "esci": "说话前先问两个问题：这个地点是城市、国家，还是一个人？我说的是「在哪儿、去哪儿」，还是「从哪儿来」？城市 a，国家 in，人 da，来源 da，出身 di。",
    "esempi": [
      { "sbagliata": "Vado in Roma.", "giusta": "Vado a Roma." },
      { "sbagliata": "Abito a Cina.", "giusta": "Abito in Cina." },
      { "sbagliata": "Vado al medico.", "giusta": "Vado dal medico." },
      { "sbagliata": "Vengo di Roma.", "giusta": "Vengo da Roma." }
    ]
  },
  "curiosi": [
    { "titolo": "a 和 ad", "t": "a 放在元音前面可以写成 ad，尤其是遇到同样的元音 a 的时候：ad Ancona，ad Alessandro。这只是书写和发音的习惯，意思完全一样。很多人也直接写 a Ancona。" },
    { "titolo": "带冠词的地名：nel Veneto, negli Stati Uniti", "t": "单数的国家名前面通常没有冠词：in Italia，in Cina。复数的国家名和某些地区名带冠词，in 要和冠词合成一个词：negli Stati Uniti，nei Paesi Bassi，nelle Filippine，nel Veneto。这个合成规则在第 22 课讲。" },
    { "titolo": "di 是最忙的介词", "t": "di 的用法很多：所属（il libro di Anna）、材料（di legno）、出身（sono di Napoli）、主题（parlare di musica）、比较（più alto di me）。初学者先掌握前四种；其中所属、材料、主题大多可以对应汉语的「的」或「关于」。" },
    { "titolo": "da 还能说「作为」", "t": "da + 名词 还可以表示「在……的时候、作为……」：Da piccolo abitavo a Genova（我小时候住在热那亚），da studente（当学生的时候）。这里的 da 来自「从……起」的意思，说的是那个阶段的起点。" }
  ],
  "pragmatica": "da 是日常口语里最常用的「去某人那里」：vieni da me（来我这儿），ci vediamo da Marco（我们在马可家见）。要说得更具体或更正式时，可以说 a casa di Marco，意思相同。问路、预约、约朋友见面，这四个介词几乎每句都会出现。",
  "esercizi": [
    { "k": "scegli", "q": "这句话是什么意思？", "zh": "Tra un'ora sono dal dentista.", "opzioni": [
      { "t": "一个小时后我在牙医那里。", "ok": true, "perche": "dal dentista 是「在牙医那里」；tra un'ora 是「一小时后」。" },
      { "t": "牙医一个小时后来我家。", "ok": false, "perche": "动词是 sono（我在），说的是我去牙医那里，不是牙医来。" },
      { "t": "一小时前我去了牙医那里。", "ok": false, "perche": "tra 说的是将来；说过去要用 un'ora fa。" }
    ] },
    { "k": "buco", "zh": "Domani vado ＿ Parigi.", "tr": "明天我去巴黎。", "opzioni": [
      { "t": "a", "ok": true, "perche": "巴黎是一座城市，城市前面用 a。" },
      { "t": "in", "ok": false, "perche": "in 用在国家、地区和一部分场所前面，不用在城市前面。" },
      { "t": "da", "ok": false, "perche": "da 用在人或起点前面，这里去的是城市。" }
    ] },
    { "k": "buco", "zh": "Yuki abita ＿ Giappone.", "tr": "优纪住在日本。", "opzioni": [
      { "t": "in", "ok": true, "perche": "日本是国家，用 in。" },
      { "t": "a", "ok": false, "perche": "a 用在城市前面，国家前面不用。" },
      { "t": "di", "ok": false, "perche": "di 表示所属或出身，不表示住在哪里。" }
    ] },
    { "k": "buco", "zh": "Domani pomeriggio vado ＿ Anna.", "tr": "明天下午我去安娜家。", "opzioni": [
      { "t": "da", "ok": true, "perche": "去的是一个人那里，用 da。" },
      { "t": "a", "ok": false, "perche": "a 不能放在人名前面，安娜不是地点。" },
      { "t": "di", "ok": false, "perche": "di 表示「安娜的」，不表示去哪里。" }
    ] },
    { "k": "ordine", "t": "questa è la macchina di Paolo", "tr": "这是保罗的车。" },
    { "k": "ordine", "t": "vengo da Napoli in treno", "alt": ["vengo in treno da Napoli"], "tr": "我坐火车从那不勒斯来。" },
    { "k": "scrivi", "q": "用意大利语写：「我去北京。」", "a": "Vado a Pechino.", "accetta": ["Vado a Pechino", "Io vado a Pechino.", "Io vado a Pechino", "Vado a Pechino!"], "perche": "北京是城市，所以用 a；vado 说明是「去」。" },
    { "k": "scrivi", "q": "用意大利语写：「我住在中国。」", "a": "Abito in Cina.", "accetta": ["Abito in Cina", "Vivo in Cina.", "Io abito in Cina.", "Io vivo in Cina."], "perche": "中国是国家，所以用 in；住在某处用 abito 或 vivo。" },
    { "k": "trasforma", "base": "Sono a Roma.", "consegna": "用动词 venire 把句子改成「我从罗马来」。", "accetta": ["Vengo da Roma.", "Io vengo da Roma."], "rifiutate": [
      { "t": "Vengo di Roma.", "perche": "说「从某地来」的动作要用 da，不用 di。" },
      { "t": "Vengo a Roma.", "perche": "Vengo a Roma 的意思是「我来罗马」，方向反了。" }
    ], "perche": "起点用 da：vengo da Roma。" },
    { "k": "trasforma", "base": "Mario va a Torino.", "consegna": "把句子改成「马里奥去卢卡家」（人名是 Luca）。", "accetta": ["Mario va da Luca."], "rifiutate": [
      { "t": "Mario va a Luca.", "perche": "a 不能放在人名前面，要用 da。" }
    ], "perche": "去的是一个人那里，所以用 da；Torino 是城市才用 a。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Dove vai in vacanza?" },
      { "chi": "B", "t": "Vado ＿ Sardegna.", "buco": true }
    ], "opzioni": [
      { "t": "in", "ok": true, "perche": "撒丁岛是大岛，和国家、地区一样用 in。" },
      { "t": "a", "ok": false, "perche": "a 用在城市和小岛前面（a Capri）；撒丁岛是大岛，要用 in。" },
      { "t": "da", "ok": false, "perche": "da 用在人或起点前面，这里去的是一个岛。" }
    ] },
    { "k": "scegli", "q": "下面哪一个说法是错的？", "opzioni": [
      { "t": "in Roma", "ok": true, "perche": "罗马是城市，要说 a Roma。" },
      { "t": "in Italia", "ok": false, "perche": "意大利是国家，in Italia 正确。" },
      { "t": "a Milano", "ok": false, "perche": "米兰是城市，a Milano 正确。" }
    ] },
    { "k": "scegli", "q": "这句话是什么意思？", "zh": "Studio italiano da tre mesi.", "opzioni": [
      { "t": "我学意大利语已经三个月了，现在还在学。", "ok": true, "perche": "da + 一段时间 + 现在时：从过去开始、一直持续到现在。" },
      { "t": "我只学了三个月，现在不学了。", "ok": false, "perche": "这句要用过去时：ho studiato italiano per tre mesi。" },
      { "t": "我打算学三个月。", "ok": false, "perche": "da 说的是已经持续的时间，不是计划。" }
    ] }
  ],
  "capaci": [
    "你会用 sono / vado / vengo 加 a、in、da 回答「在哪儿、去哪儿、从哪儿来」。",
    "你会按地点的类型选介词：城市 a，国家和地区 in，人 da。",
    "你会说交通方式：in treno、in autobus、a piedi。",
    "你会用 di 说「谁的、什么做的、关于什么」，并记得顺序和汉语相反。"
  ],
  "fonti": [
    "Lawless Italian, sezione «Prepositions»: pagina su da (origine, durata, andare da una persona)",
    "Tatoeba, corpus ita (frasi con a piedi, in treno, da due anni) per la naturalezza degli esempi"
  ]
};
