/* Lezione 31 · Anche e tutti: 也 e 都 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["ye-dou"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "他喝茶，我也喝茶。", "tr": "Lui beve tè, e anche io bevo tè." },
      { "t": "我们都喝茶。", "tr": "Beviamo tutti tè." },
      { "t": "他们都喝茶，我们也都喝茶。", "tr": "Loro bevono tutti tè, e anche noi beviamo tutti tè." },
      { "t": "他们都不喝茶。", "tr": "Nessuno di loro beve tè." }
    ],
    "domanda": "In ogni frase guarda dove stanno 也 e 都: prima o dopo il soggetto? prima o dopo il verbo? Che cosa succede quando compaiono tutti e due? E dove si mette 不 rispetto a 都?",
    "risposta": "Sia 也 sia 都 stanno **dopo il soggetto e prima del verbo** (我也喝, 我们都喝); mai in fondo alla frase e mai davanti al soggetto. Se compaiono insieme, l'ordine è sempre **也 + 都** (我们也都喝茶). La negazione 不 viene **dopo** tutti e due: 他们都不喝茶 vuol dire che non beve nessuno."
  },
  "regola": {
    "enunciato": "也 («anche, neanche») e 都 («tutti, entrambi, ogni») sono **avverbi**: stanno tra il soggetto e il verbo (o l'aggettivo). 也 aggiunge qualcosa a ciò che è già stato detto; 都 riassume un gruppo che si trova **prima di lui**. Insieme formano 也都, non 都也, e la negazione li segue: 也不, 都不.",
    "schema": ["chi", "也", "都", "不 · 没", "verbo · aggettivo"],
    "punti": [
      { "ok": true, "t": "**也 aggiunge** una persona o un fatto a quello che c'è già: 他是学生，我也是学生. Funziona anche con gli aggettivi (她很累，我也很累) e sta sempre prima di 很, 都, 不, 没." },
      { "ok": true, "t": "**都 riassume** un gruppo nominato prima: 我们都, 你们都, 大家都, 我和他都, 每天都. Con un solo elemento davanti non ha nulla da riassumere: 我都是老师 non è la frase giusta per «io sono insegnante»." },
      { "ok": true, "t": "**也 + 都**: 我们也都喜欢咖啡 («anche noi, tutti, amiamo il caffè»). L'ordine inverso (我们都也) non si usa." },
      { "ok": true, "t": "**也不 e 也没**: una frase negativa con «neanche, nemmeno» si fa con 也 + 不 (non si dice 不也): 我不去，他也不去. Per un fatto passato: 他没来，你也没来." },
      { "ok": true, "t": "**都不 e 不都**: 都不 = nessuno (我们都不去), 不都 = non tutti (我们不都去: qualcuno va, qualcuno no). Si legge da sinistra a destra: 不 nega ciò che gli sta subito dopo. Per un fatto passato si usa 都没: 他们都没来." },
      { "ok": true, "t": "**Complemento davanti al verbo**: se l'oggetto va in testa alla frase, 都 si mette dopo di lui: 这些书我都看过 («questi libri li ho letti tutti»)." },
      { "ok": false, "t": "**Non in fondo e non davanti al soggetto**: 我是学生也, 也我是学生, 都我们去. E 也 non unisce due nomi come «e»: per «tè e caffè» si usa 和 (茶和咖啡), non 茶也咖啡." }
    ]
  },
  "logica": [
    "In italiano «anche» e «tutti» si muovono con libertà: «anche io», «io anche», «bevo anche il tè», «tutti noi», «noi tutti». In cinese la posizione è fissa, perché 也 e 都 sono avverbi come 很 e 不: il loro posto è davanti al predicato. Cambia soltanto ciò che hanno alle spalle: 也 guarda **indietro** a una frase già detta («lui beve tè, io pure»); 都 guarda **indietro** a un gruppo («noi, loro, tutti»).",
    "Per questo la negazione si legge con facilità. 不 nega la parola che lo segue. In 我们都不去, 都 riassume il gruppo e 不 nega il verbo: tutti → non vanno. In 我们不都去, 不 nega 都 stesso: non è vero che vanno tutti. Anche per 也不 vale lo stesso ordine: 也 aggiunge un secondo caso e 不 nega il verbo: «io non vado, lui nemmeno». Il cinese di solito non usa una parola separata per «nemmeno»: lo costruisce con 也 + 不."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Anche io (stessa cosa di un altro)", "soggetto + 也 + verbo", "他是学生，我也是学生。"],
      ["Tutti noi, entrambi", "gruppo + 都 + verbo", "我们都是学生。"],
      ["Anche noi, tutti", "gruppo + 也都 + verbo", "我们也都是学生。"],
      ["Nemmeno io", "soggetto + 也不 + verbo", "他不去，我也不去。"],
      ["Nessuno", "gruppo + 都不 + verbo", "我们都不去。"],
      ["Non tutti", "gruppo + 不都 + verbo", "我们不都去。"],
      ["Nessuno (fatto passato)", "gruppo + 都没 + verbo", "他们都没来。"],
      ["Tè e caffè", "nome + 和 + nome", "我喝茶和咖啡。"]
    ]
  },
  "esempi": [
    { "gruppo": "也: anche, con la stessa struttura", "items": [
      { "t": "我是学生，他也是学生。", "tr": "Io sono studente, anche lui.", "nota": "也 sta tra il nuovo soggetto (他) e il verbo (是)." },
      { "t": "我很累，她也很累。", "tr": "Io sono stanco, anche lei.", "nota": "也 viene prima di 很." },
      { "t": "你去北京，我也去。", "tr": "Tu vai a Pechino, vado anch'io." },
      { "t": "我喜欢茶，也喜欢咖啡。", "tr": "Mi piace il tè e mi piace anche il caffè.", "nota": "Stesso soggetto: 也 introduce il secondo verbo." }
    ] },
    { "gruppo": "都: tutti, entrambi, ogni", "items": [
      { "t": "我们都是学生。", "tr": "Siamo tutti studenti." },
      { "t": "我和哥哥都是老师。", "tr": "Io e mio fratello siamo entrambi insegnanti.", "nota": "Il gruppo può essere formato con 和." },
      { "t": "大家都喜欢她。", "tr": "Lei piace a tutti." },
      { "t": "他每天都跑步。", "tr": "Corre tutti i giorni.", "nota": "都 riassume anche 每天: ogni giorno, senza eccezioni." },
      { "t": "这些书我都看过。", "tr": "Questi libri li ho letti tutti.", "nota": "L'oggetto sta in testa; 都 lo riassume." }
    ] },
    { "gruppo": "Tutti e due: 也都", "items": [
      { "t": "他们都喝茶，我们也都喝茶。", "tr": "Loro bevono tutti tè, e anche noi beviamo tutti tè." },
      { "t": "我家人也都喜欢这个电影。", "tr": "Anche a tutti i miei familiari piace questo film.", "nota": "也 prima di 都." }
    ] },
    { "gruppo": "Con la negazione", "items": [
      { "t": "我不去，他也不去。", "tr": "Io non vado, nemmeno lui." },
      { "t": "他昨天没来，你也没来。", "tr": "Ieri lui non è venuto, e neanche tu." },
      { "t": "我们都不去。", "tr": "Nessuno di noi va." },
      { "t": "我们不都去。", "tr": "Non andiamo tutti.", "nota": "Qualcuno va, qualcuno resta." },
      { "t": "他们都没来。", "tr": "Non è venuto nessuno di loro." }
    ] }
  ],
  "contrasti": [
    { "q": "Hai detto 他是学生。 Aggiungi che anche tu lo sei. Quale frase?", "opzioni": [
      { "t": "我也是学生。", "ok": true, "perche": "也 sta tra il soggetto e il verbo, come ogni avverbio." },
      { "t": "我是也学生。", "ok": false, "perche": "Dopo il verbo c'è già il suo oggetto: 也 è un avverbio e va prima di 是." }
    ] },
    { "q": "Lui non va. Dici che nemmeno tu vai. Quale frase?", "opzioni": [
      { "t": "我也不去。", "ok": true, "perche": "也 viene prima di 不: prima aggiungi, poi neghi." },
      { "t": "我不也去。", "ok": false, "perche": "Con 不 + 也 la frase non è una forma d'uso: «nemmeno» si dice sempre 也不." }
    ] },
    { "q": "Dici che tutti voi siete stanchi (una frase sola, con 很). Quale?", "opzioni": [
      { "t": "你们都很累。", "ok": true, "perche": "都 riassume il gruppo e sta prima di 很 e del predicato." },
      { "t": "你们很都累。", "ok": false, "perche": "Gli avverbi si ordinano: 都 viene prima di 很, non dopo." }
    ] },
    { "q": "Ci sono quattro amici e nessuno vuole il caffè. Quale frase?", "opzioni": [
      { "t": "他们都不喝咖啡。", "ok": true, "perche": "都 + 不 = «nessuno»: tutti sono dalla parte del no." },
      { "t": "他们不都喝咖啡。", "ok": false, "perche": "不都 = «non tutti»: lascia capire che qualcuno il caffè lo beve." }
    ] },
    { "q": "Dici che alcuni vanno e altri no: «Non andiamo tutti». Quale frase?", "opzioni": [
      { "t": "我们不都去。", "ok": true, "perche": "不 nega 都: non è vero che vanno tutti." },
      { "t": "我们都不去。", "ok": false, "perche": "都不 = «nessuno»: qui nessuno di noi va." }
    ] },
    { "q": "Dici che anche voi, tutti, amate il film (gli altri lo amano). Quale frase?", "opzioni": [
      { "t": "我们也都喜欢这个电影。", "ok": true, "perche": "L'ordine è 也 + 都 + verbo." },
      { "t": "我们都也喜欢这个电影。", "ok": false, "perche": "都 non si mette prima di 也: l'ordine è sempre 也都." }
    ] },
    { "q": "Parli di te e di tuo fratello: «Siamo entrambi insegnanti». Quale frase?", "opzioni": [
      { "t": "我和哥哥都是老师。", "ok": true, "perche": "Il gruppo (io e mio fratello) sta prima di 都, che lo riassume." },
      { "t": "我都是老师。", "ok": false, "perche": "Davanti a 都 c'è un solo elemento: non c'è nessun gruppo da riassumere." }
    ] },
    { "q": "Hai detto che ti piace il tè. Ora aggiungi, con lo stesso soggetto, che ti piace anche il caffè. Quale frase?", "opzioni": [
      { "t": "我喜欢茶，也喜欢咖啡。", "ok": true, "perche": "也 introduce il secondo verbo, dopo il soggetto sottinteso." },
      { "t": "我喜欢茶，和喜欢咖啡。", "ok": false, "perche": "和 unisce due nomi (茶和咖啡), non due verbi o due frasi." }
    ] }
  ],
  "dialogo": {
    "titolo": "Il fine settimana",
    "righe": [
      { "chi": "A", "t": "周末我们去公园，你们都去吗？", "tr": "Nel fine settimana andiamo al parco, venite tutti?" },
      { "chi": "B", "t": "我去，我朋友也去。", "tr": "Io vado, viene anche un mio amico." },
      { "chi": "A", "t": "小王呢？", "tr": "E Xiao Wang?" },
      { "chi": "B", "t": "他不去，他要工作。", "tr": "Lui non viene, deve lavorare." },
      { "chi": "A", "t": "那我们不都去。", "tr": "Allora non andiamo tutti." },
      { "chi": "B", "t": "对，可是下次我们都去。", "tr": "Sì, ma la prossima volta andiamo tutti." }
    ],
    "esercizi": [
      { "q": "Perché A dice 我们不都去 e non 我们都不去?", "opzioni": [
        { "t": "Perché qualcuno va (B e il suo amico) e qualcuno no (Xiao Wang).", "ok": true, "perche": "不都 vuol dire «non tutti»: una parte del gruppo va." },
        { "t": "Perché nessuno va.", "ok": false, "perche": "Questo sarebbe 我们都不去; ma B e il suo amico vanno." },
        { "t": "Perché tutti vanno.", "ok": false, "perche": "Tutti vanno sarebbe 我们都去." }
      ] },
      { "q": "Che cosa dice B con 我朋友也去?", "opzioni": [
        { "t": "Che il suo amico va come lui.", "ok": true, "perche": "也 aggiunge un secondo caso alla stessa azione (去)." },
        { "t": "Che il suo amico va da solo.", "ok": false, "perche": "也 mette in relazione due persone: B e il suo amico." },
        { "t": "Che il suo amico non va.", "ok": false, "perche": "Non c'è nessuna negazione nella frase." }
      ] }
    ]
  },
  "tranello": {
    "errore": "In italiano «anche» può stare dopo il verbo, davanti all'oggetto o in fondo: «Bevo anche il tè», «Io pure». Chi studia cinese lo traduce con la stessa libertà: 我喝也茶, 我是学生也, 也我是学生, 我不也去. Stessa interferenza con «tutti»: 我们是都学生.",
    "perche": "In cinese 也 e 都 sono avverbi con posto fisso, prima del predicato. L'italiano mostra il peso di «anche» con la posizione («anche io» o «io, anche»), il cinese lo mostra con la struttura della frase: il gruppo o il soggetto vengono prima, poi l'avverbio, poi il verbo.",
    "esci": "Prima di scrivere chiediti: chi è il soggetto? Subito dopo il soggetto metti 也, 都 o 也都, e poi il verbo. Se c'è una negazione, mettila dopo di loro. Per unire due nomi usa 和, non 也.",
    "esempi": [
      { "sbagliata": "我是也学生。", "giusta": "我也是学生。" },
      { "sbagliata": "我们是都学生。", "giusta": "我们都是学生。" },
      { "sbagliata": "我不也去。", "giusta": "我也不去。" },
      { "sbagliata": "我们都也喝茶。", "giusta": "我们也都喝茶。" }
    ]
  },
  "curiosi": [
    { "titolo": "都 guarda a sinistra", "t": "Di solito 都 riprende ciò che sta prima di lui. Per questo si dice 这些书我都看过 («questi libri li ho letti tutti») e non 我看过都这些书. Quando davanti c'è una parola come 每 («ogni»), il valore è lo stesso: 他每天都跑步. Il gruppo può anche essere implicito: 都 in 大家都 riassume le persone presenti." },
    { "titolo": "都 vuol dire anche «già» e «perfino»", "t": "Con altre parole 都 prende significati vicini: 都十点了 («sono già le dieci»), 连他都知道 («lo sa perfino lui»), 一点都不累 («non sono stanco per niente»). Il valore comune è l'idea di «portare al limite»: tutto, già tutto, nemmeno un po'. Sono espressioni da imparare come blocchi." },
    { "titolo": "Due letture del carattere 都", "t": "Il carattere 都 si legge dōu quando è l'avverbio, ma dū nei nomi di città e capitali (首都, «capitale»). Il dizionario CC-CEDICT registra per dū «capitale, metropoli»: è un altro carattere-parola, con un'altra pronuncia, che non si confonde con l'avverbio." },
    { "titolo": "「也」 non è sempre «anche»", "t": "In cinese 也 vale sia «anche» sia «nemmeno», a seconda che la frase sia affermativa o negativa: 我也去 («vado anch'io»), 我也不去 («non vado nemmeno io»). Il dizionario CC-CEDICT registra infatti «also; too; as well; (not ...) either»." }
  ],
  "pragmatica": "Nel parlato di ogni giorno 我也是 è la risposta breve per dire «anch'io» (anche con 我也一样) e 都 si sente in ogni conversazione: 大家都来了, 都可以. Con 都 è più naturale nominare per primo il gruppo (我们, 大家, 他们). Nei messaggi scritti 也 e 都 sono frequenti per dare un tono di condivisione («anche tu?»). Se vuoi essere preciso su «tutti» o «nessuno», pensa all'ordine: 都不 è un rifiuto totale, 不都 lascia spazio alle eccezioni.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他们都不去。", "opzioni": [
      { "t": "Nessuno di loro va.", "ok": true, "perche": "都不 = tutto il gruppo è dalla parte del no." },
      { "t": "Non vanno tutti.", "ok": false, "perche": "Questo sarebbe 他们不都去, con 不 davanti a 都." },
      { "t": "Anche loro vanno.", "ok": false, "perche": "Per «anche loro» serve 也, qui c'è la negazione 不." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我们不都是学生。", "opzioni": [
      { "t": "Non siamo tutti studenti.", "ok": true, "perche": "不都 = non tutti: qualcuno è studente e qualcuno no." },
      { "t": "Nessuno di noi è studente.", "ok": false, "perche": "Nessuno si direbbe 我们都不是学生." },
      { "t": "Anche noi siamo studenti.", "ok": false, "perche": "Per «anche» servirebbe 也." }
    ] },
    { "k": "buco", "zh": "我们＿是学生。", "tr": "Siamo tutti studenti.", "opzioni": [
      { "t": "都", "ok": true, "perche": "都 riassume il gruppo (我们) e sta prima del verbo." },
      { "t": "也", "ok": false, "perche": "也 vuol dire «anche»: la frase direbbe «anche noi siamo studenti»." },
      { "t": "在", "ok": false, "perche": "在 non vuol dire «tutti»; è la preposizione o il segnale dell'azione in corso." }
    ] },
    { "k": "buco", "zh": "你不去，我＿不去。", "tr": "Tu non vai, nemmeno io.", "opzioni": [
      { "t": "也", "ok": true, "perche": "也不 = «nemmeno»: aggiunge un secondo caso negativo." },
      { "t": "都", "ok": false, "perche": "都 riassume un gruppo: con «io» solo non ha nulla da riassumere." },
      { "t": "很", "ok": false, "perche": "很 è un avverbio di grado («molto») e non si usa con 不 per dire «nemmeno»." }
    ] },
    { "k": "ordine", "t": "我们也都是学生", "tr": "Anche noi siamo tutti studenti." },
    { "k": "ordine", "t": "他们都不去", "tr": "Nessuno di loro va." },
    { "k": "trasforma", "base": "我是老师。", "consegna": "Lui è insegnante. Dì che anche tu lo sei, partendo da questa frase.", "accetta": ["我也是老师。"], "rifiutate": [
      { "t": "我是也老师。", "perche": "也 è un avverbio e va prima del verbo." }
    ], "perche": "也 si mette dopo il soggetto e prima del verbo." },
    { "k": "trasforma", "base": "我们去。", "consegna": "Dì che vanno tutti, partendo da questa frase.", "accetta": ["我们都去。"], "rifiutate": [
      { "t": "我们去都。", "perche": "都 non va in fondo alla frase." }
    ], "perche": "都 si mette dopo il gruppo e prima del verbo." },
    { "k": "trasforma", "base": "我们都去。", "consegna": "Cambia la frase: non vanno tutti, qualcuno resta.", "accetta": ["我们不都去。"], "rifiutate": [
      { "t": "我们都不去。", "perche": "都不 = nessuno: questa frase dice che non va nessuno." }
    ], "perche": "不都 = non tutti: 不 nega 都." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Anche lui è mio amico.»", "a": "他也是我的朋友。", "accetta": ["他也是我朋友。"], "perche": "也 tra il soggetto (他) e il verbo (是)." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Non lo so nemmeno io.»", "a": "我也不知道。", "accetta": ["我也不知道啊。"], "perche": "也不 = «nemmeno»: 也 prima di 不." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你们喝茶还是咖啡？" },
      { "chi": "B", "t": "我们＿喝咖啡。", "buco": true }
    ], "opzioni": [
      { "t": "都", "ok": true, "perche": "都 riassume il gruppo (我们): tutti bevono caffè." },
      { "t": "也", "ok": false, "perche": "也 richiederebbe un altro caso («anche»); A non ha detto altro." },
      { "t": "在", "ok": false, "perche": "在 non significa «tutti»." }
    ] }
  ],
  "capaci": [
    "Sai dire «anche» con 也 e «tutti, entrambi» con 都, nel posto giusto della frase.",
    "Sai combinare 也都 e ricordare che l'ordine è sempre 也 prima di 都.",
    "Sai distinguere 都不 («nessuno») da 不都 («non tutti») e dire «nemmeno» con 也不.",
    "Sai evitare gli errori di chi traduce «anche» e «tutti» dall'italiano, mettendoli dopo il verbo."
  ],
  "fonti": [
    "CC-CEDICT, voci 也 (ye3) e 都 (dou1, du1): «also; too; (not ...) either», «all; both; even; already»",
    "Tatoeba (cinese, cmn.tsv): frasi con 也不 (我爸爸也不喝), 我们都 e 不都 (他们不都是幸福的), riscontro dell'ordine delle parole"
  ]
};
