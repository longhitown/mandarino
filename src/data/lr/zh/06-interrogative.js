/* Lezione 6 · Che cosa, chi, dove: le parole interrogative (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["interrogative"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "你吃什么？", "tr": "Che cosa mangi?" },
      { "t": "我吃饺子。", "tr": "Mangio ravioli." },
      { "t": "你去哪里？", "tr": "Dove vai?" },
      { "t": "我去北京。", "tr": "Vado a Pechino." }
    ],
    "domanda": "Metti a confronto ogni domanda con la sua risposta. In quale posizione della frase sta la parola interrogativa (什么, 哪里)? Che cosa prende il suo posto nella risposta? In italiano «Dove vai?» comincia con la parola interrogativa: succede lo stesso qui?",
    "risposta": "In cinese la parola interrogativa **non si sposta**: 什么 sta dopo il verbo, esattamente dove nella risposta sta 饺子; 哪里 sta dove nella risposta sta 北京. La domanda ha la forma di una frase affermativa nella quale la risposta è sostituita da una parola interrogativa. Non c'è inversione, non c'è 吗, non c'è una parola da portare all'inizio come in italiano."
  },
  "regola": {
    "enunciato": "La parola interrogativa (什么, 谁, 哪里, 几, 多少, 为什么, 什么时候, 怎么) **sta nel punto della frase in cui starebbe la risposta**, e la domanda non vuole 吗. Per fare una domanda basta prendere la frase con la risposta e sostituire la parte che non conosci.",
    "schema": ["chi", "verbo", "什么 · 哪里 · 谁"],
    "punti": [
      { "ok": true, "t": "**什么** (che cosa) e **谁** (chi) occupano il posto di un oggetto o di un soggetto: 你吃什么？ 你找谁？ 谁在家？ Con un nome diventano «che…»: 什么书 («che libro»), 什么名字 («che nome»)." },
      { "ok": true, "t": "**哪里** (o 哪儿) è il posto: 你去哪里？ 你在哪里工作？ Sta dopo 去 e 在, dove starebbe il nome del luogo. 哪里 e 哪儿 hanno lo stesso significato." },
      { "ok": true, "t": "**Tempo, modo e motivo** vanno prima del verbo, come nelle frasi senza domanda (我明天去): 你什么时候去？ 你怎么去？ 你为什么去？ Mai in fondo: 你去什么时候 non si dice." },
      { "ok": true, "t": "**几** chiede un numero piccolo (di solito fino a dieci) e vuole il classificatore: 你有几个孩子？ Serve anche per l'ora e la data: 现在几点？ 今天几号？ **多少** chiede qualsiasi quantità e i prezzi: 这个多少钱？ 你们学校有多少学生？" },
      { "ok": true, "t": "**哪** + classificatore significa «quale» tra cose conosciute: 你要哪个？ 你喜欢哪本书？ **哪国人** vuol dire «di quale paese»: 你是哪国人？" },
      { "ok": true, "t": "**怎么** + verbo chiede il modo: 这个字怎么写？ («come si scrive questo carattere?»). **怎么样** chiede «com'è»: 你的朋友怎么样？" },
      { "ok": false, "t": "**Non si porta la parola in testa e non si aggiunge 吗**: 什么你吃？ e 你去哪里吗？ sono errate. 吗 serve per le domande sì o no; una parola interrogativa fa già la domanda." }
    ]
  },
  "logica": [
    "In italiano la parola interrogativa va all'inizio: «**Dove** vai?», «**Che cosa** mangi?». Il cinese non sposta niente. La domanda è una frase completa con un **vuoto** al posto dell'informazione che manca, e la parola interrogativa è il segnaposto: 你吃＿ diventa 你吃什么. La risposta riempie il vuoto, e per questo ha lo stesso identico ordine: 我吃饺子. Se sai fare una frase affermativa, sai già fare tutte queste domande.",
    "Perché 吗 non serve? Perché 吗 trasforma una frase completa in una domanda sì o no. Con 什么, 谁, 哪里 la frase ha già un vuoto da riempire, quindi il tipo di risposta è chiaro. La stessa cosa spiega la posizione di 什么时候, 怎么 e 为什么 davanti al verbo: in cinese, tempo, modo e motivo stanno prima del verbo (我明天去, 我坐车去), quindi le parole interrogative corrispondenti stanno là.",
    "Anche la differenza tra 几 e 多少 ha una logica semplice: 几 presuppone una quantità piccola e per questo è di solito seguito da un classificatore (几个, 几本; con le parole di tempo no: 几天, 几年). 多少 non presuppone niente e per questo si usa con i prezzi, le popolazioni, i totali. Quando non sai quanto sarà grande il numero, 多少 è sicuro."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Vuoi chiedere", "Parola", "Dove sta", "Esempio"],
    "righe": [
      ["che cosa", "什么", "dove sta la cosa (dopo il verbo)", "你吃什么？"],
      ["chi", "谁", "dove sta la persona", "他是谁？"],
      ["dove", "哪里 / 哪儿", "dopo 去, 在, 到", "你去哪里？"],
      ["quando", "什么时候", "prima del verbo", "你什么时候去中国？"],
      ["perché", "为什么", "prima del verbo", "你为什么学中文？"],
      ["come (modo)", "怎么", "prima del verbo", "这个字怎么写？"],
      ["quanti (pochi)", "几 + classificatore", "davanti al nome", "你有几个孩子？"],
      ["quanto, quanti", "多少", "davanti al nome, anche nei prezzi", "这个多少钱？"],
      ["quale", "哪 + classificatore", "davanti al nome", "你要哪个？"],
      ["com'è", "怎么样", "in fondo", "你的朋友怎么样？"]
    ]
  },
  "esempi": [
    { "gruppo": "Che cosa e chi", "items": [
      { "t": "你吃什么？", "tr": "Che cosa mangi?" },
      { "t": "这是什么？", "tr": "Che cos'è questo?" },
      { "t": "他是谁？", "tr": "Chi è lui?" },
      { "t": "你找谁？", "tr": "Chi cerchi?" },
      { "t": "谁在家？", "tr": "Chi è in casa?", "nota": "谁 qui è il soggetto e sta all'inizio perché il soggetto sta all'inizio anche nella risposta: 我在家." }
    ] },
    { "gruppo": "Dove e quando", "items": [
      { "t": "你去哪里？", "tr": "Dove vai?" },
      { "t": "你在哪里工作？", "tr": "Dove lavori?", "nota": "哪里 sta dopo 在, come 北京 nella risposta 我在北京工作." },
      { "t": "你什么时候去中国？", "tr": "Quando vai in Cina?", "nota": "什么时候 sta prima del verbo, come 明天 nella risposta." }
    ] },
    { "gruppo": "Perché e come", "items": [
      { "t": "你为什么学中文？", "tr": "Perché studi cinese?" },
      { "t": "你怎么去学校？", "tr": "Come vai a scuola?" },
      { "t": "这个字怎么写？", "tr": "Come si scrive questo carattere?" }
    ] },
    { "gruppo": "Quanti, quale, come ti chiami", "items": [
      { "t": "你有几个孩子？", "tr": "Quanti figli hai?" },
      { "t": "这个多少钱？", "tr": "Quanto costa questo?" },
      { "t": "你要哪个？", "tr": "Quale vuoi?" },
      { "t": "你是哪国人？", "tr": "Di che nazionalità sei?" },
      { "t": "你叫什么名字？", "tr": "Come ti chiami?", "nota": "Letteralmente «ti chiami che nome?»: 什么 sta davanti a 名字 e vuol dire «che»." }
    ] }
  ],
  "contrasti": [
    { "q": "Come chiedi «Dove vai?»", "opzioni": [
      { "t": "你去哪里？", "ok": true, "perche": "哪里 sta dove nella risposta starebbe il luogo: 我去北京." },
      { "t": "哪里你去？", "ok": false, "perche": "Porti in testa la parola interrogativa come in italiano, ma in cinese resta al suo posto dopo il verbo." }
    ] },
    { "q": "Come chiedi «Chi è lui?»", "opzioni": [
      { "t": "他是谁？", "ok": true, "perche": "谁 prende il posto della persona nella frase 他是…: la domanda è completa." },
      { "t": "他是谁吗？", "ok": false, "perche": "谁 fa già la domanda: 吗 la raddoppia e non si mette dopo le parole interrogative." }
    ] },
    { "q": "Come chiedi «Quanti figli hai?»", "opzioni": [
      { "t": "你有几个孩子？", "ok": true, "perche": "几 chiede un numero piccolo e vuole sempre il classificatore (个)." },
      { "t": "你有几孩子？", "ok": false, "perche": "Dopo 几 manca il classificatore: come in 三个孩子, anche con 几 si dice 几个." }
    ] },
    { "q": "Come chiedi «Quanto costa questo?»", "opzioni": [
      { "t": "这个多少钱？", "ok": true, "perche": "多少 è la parola per i prezzi: non presuppone un numero piccolo." },
      { "t": "这个几钱？", "ok": false, "perche": "几 si usa per quantità piccole e con un classificatore; per il prezzo si dice 多少钱." }
    ] },
    { "q": "Come rispondi a 你什么时候来？ se vieni domani?", "opzioni": [
      { "t": "我明天来。", "ok": true, "perche": "La risposta riempie il vuoto di 什么时候: 明天 sta prima del verbo." },
      { "t": "我来明天。", "ok": false, "perche": "Il tempo sta prima del verbo; dopo il verbo non può stare 明天." }
    ] },
    { "q": "Come chiedi «Come si scrive questo carattere?»", "opzioni": [
      { "t": "这个字怎么写？", "ok": true, "perche": "怎么 prima del verbo chiede il modo: «come si scrive»." },
      { "t": "这个字为什么写？", "ok": false, "perche": "为什么 chiede il motivo: la frase vuol dire «perché si scrive questo carattere?»." }
    ] },
    { "q": "Cerchi una persona e vuoi chiedere «Chi cerchi?»", "opzioni": [
      { "t": "你找谁？", "ok": true, "perche": "谁 chiede una persona e prende il posto dell'oggetto di 找." },
      { "t": "你找什么？", "ok": false, "perche": "什么 chiede una cosa: la domanda vuol dire «che cosa cerchi?»." }
    ] },
    { "q": "Hai due libri sul tavolo e chiedi all'amico quale vuole.", "opzioni": [
      { "t": "你要哪本书？", "ok": true, "perche": "哪 + classificatore sceglie tra oggetti che si vedono e si conoscono." },
      { "t": "你要什么书？", "ok": false, "perche": "什么书 chiede «che tipo di libro»: non sceglie tra i due che hai davanti." }
    ] },
    { "q": "Come chiedi «Dove lavori?»", "opzioni": [
      { "t": "你在哪里工作？", "ok": true, "perche": "哪里 sta dopo 在, dove nella risposta starebbe il luogo (我在北京工作)." },
      { "t": "你工作在哪里？", "ok": false, "perche": "Il luogo dell'azione si mette prima del verbo (在 + luogo + verbo), non dopo 工作." }
    ] }
  ],
  "dialogo": {
    "titolo": "Una festa tra studenti",
    "righe": [
      { "chi": "A", "t": "你好！你叫什么名字？", "tr": "Ciao! Come ti chiami?" },
      { "chi": "B", "t": "我叫小王。你呢？", "tr": "Mi chiamo Xiao Wang. E tu?" },
      { "chi": "A", "t": "我叫马可。你是哪国人？", "tr": "Mi chiamo Marco. Di che nazionalità sei?" },
      { "chi": "B", "t": "我是中国人。你为什么学中文？", "tr": "Sono cinese. Perché studi cinese?" },
      { "chi": "A", "t": "因为我想去中国工作。你的家在哪里？", "tr": "Perché voglio andare a lavorare in Cina. Dov'è la tua casa?" },
      { "chi": "B", "t": "在上海。你什么时候去？", "tr": "A Shanghai. Quando vai?" },
      { "chi": "A", "t": "明年去。", "tr": "L'anno prossimo." }
    ],
    "esercizi": [
      { "q": "A risponde 明年去 alla domanda 你什么时候去？ Che cosa è successo al posto di 什么时候?", "opzioni": [
        { "t": "È stato sostituito da 明年, che sta prima del verbo.", "ok": true, "perche": "La risposta riempie il vuoto della domanda: 明年 prende il posto di 什么时候." },
        { "t": "È rimasto nella risposta.", "ok": false, "perche": "Nella risposta compare l'informazione, non la parola interrogativa." },
        { "t": "È stato spostato in fondo.", "ok": false, "perche": "Il tempo sta prima del verbo, sia nella domanda sia nella risposta." }
      ] },
      { "q": "Che cosa chiede B con 你是哪国人？", "opzioni": [
        { "t": "Il paese di origine.", "ok": true, "perche": "哪国人 vuol dire «persona di quale paese»." },
        { "t": "Il nome.", "ok": false, "perche": "Il nome si chiede con 你叫什么名字." },
        { "t": "Il luogo dove si trova.", "ok": false, "perche": "Per il luogo si usa 哪里 con 在." }
      ] },
      { "q": "Perché 你为什么学中文？ non ha 吗?", "opzioni": [
        { "t": "Perché 为什么 fa già la domanda.", "ok": true, "perche": "Con una parola interrogativa il vuoto da riempire è già nella frase, e 吗 non serve." },
        { "t": "Perché 学 è un verbo breve.", "ok": false, "perche": "La lunghezza del verbo non conta: 吗 dipende dal tipo di domanda." },
        { "t": "Perché è una domanda sul passato.", "ok": false, "perche": "Il tempo non c'entra: nessuna domanda con parola interrogativa vuole 吗." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette la parola interrogativa all'inizio (什么你吃？, 哪里你去？), aggiunge 吗 a ogni domanda (你去哪里吗？) e dimentica il classificatore dopo 几 (你有几孩子？). Per tempo e modo mette la parola dopo il verbo (你去什么时候？).",
    "perche": "L'italiano è abituato a portare la parola interrogativa in testa, e a usare il punto interrogativo come segno unico. In cinese la parola interrogativa sostituisce l'informazione mancante e resta nel suo posto. Il tempo, il modo e il motivo precedono il verbo come in ogni altra frase.",
    "esci": "Scrivi la risposta (我吃饺子) e sostituisci la parte nuova con la parola interrogativa (我吃什么 → 你吃什么). Poi controlla: niente 吗 e, dopo 几, un classificatore. Per quando, come e perché la parola sta prima del verbo.",
    "esempi": [
      { "sbagliata": "什么你吃？", "giusta": "你吃什么？" },
      { "sbagliata": "你去哪里吗？", "giusta": "你去哪里？" },
      { "sbagliata": "你有几孩子？", "giusta": "你有几个孩子？" },
      { "sbagliata": "你去什么时候？", "giusta": "你什么时候去？" }
    ]
  },
  "curiosi": [
    { "titolo": "哪里 e 哪儿", "t": "Le due forme hanno lo stesso significato, «dove». 哪儿 ha la finale -r del parlato; 哪里 è la forma piena. Inoltre 哪里哪里 è la risposta modesta a un complimento («ma no, figuriamoci»)." },
    { "titolo": "Quando la parola interrogativa diventa «qualcosa» o «tutto»", "t": "Con 什么 e 谁 si possono esprimere cose indeterminate. 你想吃点什么吗？ vuol dire «vuoi mangiare qualcosa?» ed è una domanda sì o no, quindi con 吗. Con 都 la parola diventa «tutto»: 我什么都吃 («mangio di tutto»), 谁都可以 («chiunque va bene»). Il significato dipende dalla frase." },
    { "titolo": "怎么, 怎么样, 怎么了", "t": "怎么 + verbo chiede il modo: 怎么去？ («come ci si va?»). 怎么样 chiede il giudizio: 这个怎么样？ («come ti sembra questo?»). 怎么了？ vuol dire «che cosa è successo?» e si dice a chi sembra turbato. Davanti a una negazione 怎么 esprime sorpresa: 你怎么不吃？ («come mai non mangi?»)." },
    { "titolo": "几 per l'ora e la data", "t": "几 si usa anche per l'ora e la data, perché sono numeri piccoli: 现在几点？ («che ore sono?»), 今天几号？ («che giorno è oggi?»), 今天星期几？ («che giorno della settimana è oggi?»). La risposta riempie il vuoto: 现在三点. Qui il classificatore è 点, 号." }
  ],
  "pragmatica": "你叫什么名字？ è la formula quotidiana tra pari; con una persona a cui devi rispetto si usa la forma più formale 您贵姓？ («qual è il suo cognome?»). 为什么 chiede il motivo in modo neutro; 你怎么不吃？ aggiunge sorpresa, quindi si usa con amici. Per la quantità e il prezzo, 多少钱？ è la domanda che si sente più spesso al mercato.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "你什么时候去中国？", "opzioni": [
      { "t": "Quando vai in Cina?", "ok": true, "perche": "什么时候 chiede il tempo e sta prima del verbo." },
      { "t": "Dove vai in Cina?", "ok": false, "perche": "Per il luogo si userebbe 哪里." },
      { "t": "Perché vai in Cina?", "ok": false, "perche": "Per il motivo si userebbe 为什么." }
    ] },
    { "k": "scegli", "q": "Che cosa chiede la frase?", "zh": "这个字怎么写？", "opzioni": [
      { "t": "Come si scrive questo carattere.", "ok": true, "perche": "怎么 prima del verbo chiede il modo." },
      { "t": "Perché si scrive questo carattere.", "ok": false, "perche": "Il motivo si chiede con 为什么." },
      { "t": "Chi scrive questo carattere.", "ok": false, "perche": "Chi scrive si chiede con 谁, non con 怎么." }
    ] },
    { "k": "buco", "zh": "他是＿？", "tr": "Chi è lui?", "opzioni": [
      { "t": "谁", "ok": true, "perche": "谁 chiede una persona, non una cosa." },
      { "t": "什么", "ok": false, "perche": "什么 chiede una cosa: «che cos'è»." },
      { "t": "哪里", "ok": false, "perche": "哪里 chiede un luogo, non una persona." }
    ] },
    { "k": "buco", "zh": "这本书＿钱？", "tr": "Quanto costa questo libro?", "opzioni": [
      { "t": "多少", "ok": true, "perche": "多少钱 è la domanda sul prezzo." },
      { "t": "几", "ok": false, "perche": "几 chiede un numero piccolo e vuole un classificatore." },
      { "t": "什么", "ok": false, "perche": "什么钱 vuol dire «che denaro», non «quanto costa»." }
    ] },
    { "k": "buco", "zh": "你＿时候去中国？", "tr": "Quando vai in Cina?", "opzioni": [
      { "t": "什么", "ok": true, "perche": "什么时候 è la parola per «quando»." },
      { "t": "哪", "ok": false, "perche": "哪 vuole un classificatore e non forma la parola «quando»." },
      { "t": "几", "ok": false, "perche": "几 chiede un numero piccolo con un classificatore: per «quando» il modo normale è 什么时候." }
    ] },
    { "k": "ordine", "t": "你的朋友在哪里工作", "tr": "Dove lavora il tuo amico?" },
    { "k": "ordine", "t": "你为什么学中文", "tr": "Perché studi cinese?" },
    { "k": "trasforma", "base": "他去北京。", "consegna": "Chiedi dove va, sostituendo 北京 con la parola interrogativa.", "accetta": ["他去哪里？", "他去哪儿？"], "rifiutate": [
      { "t": "他去哪里吗？", "perche": "Con una parola interrogativa 吗 non serve." },
      { "t": "哪里他去？", "perche": "La parola interrogativa resta dove stava 北京, dopo il verbo." }
    ], "perche": "Si sostituisce 北京 con 哪里 e il resto della frase non cambia." },
    { "k": "trasforma", "base": "他明天去中国。", "consegna": "Chiedi quando va, sostituendo 明天 con la parola interrogativa.", "accetta": ["他什么时候去中国？"], "rifiutate": [
      { "t": "他去中国什么时候？", "perche": "Il tempo sta prima del verbo, non in fondo." }
    ], "perche": "什么时候 prende il posto di 明天, prima del verbo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Che cosa bevi?»", "a": "你喝什么？", "accetta": ["你喝什么"], "perche": "什么 sta dopo il verbo, dove starebbe la bevanda: 我喝茶." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Quanto costa questo?»", "a": "这个多少钱？", "accetta": ["这个多少钱", "这个是多少钱？"], "perche": "多少钱 è la domanda per i prezzi." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "他是我的朋友。" },
      { "chi": "B", "t": "他叫＿名字？", "buco": true }
    ], "opzioni": [
      { "t": "什么", "ok": true, "perche": "叫什么名字 è la domanda per il nome." },
      { "t": "谁", "ok": false, "perche": "谁 chiede «chi»: 他叫谁名字 non si dice." },
      { "t": "哪", "ok": false, "perche": "哪 vuole un classificatore e chiede «quale»." }
    ] },
    { "k": "scegli", "q": "In quale frase va tolto 吗?", "opzioni": [
      { "t": "你去哪里吗？", "ok": true, "perche": "哪里 fa già la domanda: 吗 non serve." },
      { "t": "你是学生吗？", "ok": false, "perche": "Qui non c'è nessuna parola interrogativa: 吗 è giusto." },
      { "t": "你喝茶吗？", "ok": false, "perche": "Qui non c'è nessuna parola interrogativa: 吗 è giusto." }
    ] }
  ],
  "capaci": [
    "Sai fare una domanda con 什么, 谁, 哪里 mettendo la parola interrogativa dove starebbe la risposta.",
    "Sai chiedere il tempo, il motivo e il modo con 什么时候, 为什么, 怎么, prima del verbo.",
    "Sai scegliere tra 几 e 多少, e usare 哪 + classificatore per «quale».",
    "Sai evitare 吗 con le parole interrogative e riconoscere le domande sbagliate."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Interrogative pronouns»: chi, che cosa, dove, quando, perché, come; 几 e 多少; le parole restano al loro posto",
    "Tatoeba (cinese-italiano), frasi come 你想吃什么？ e 你的中文老师是谁？, consultato con tools/lezioni-check.mjs",
    "CC-CEDICT, voci 什么, 谁, 哪里, 哪儿, 几, 多少, 怎么, 为什么"
  ]
};
