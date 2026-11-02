/* Lezione 30 · Perfino e tranne: 连…都, 除了…以外 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["enfasi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "他连一个汉字都不认识。", "tr": "Non conosce nemmeno un carattere." },
      { "t": "他连我的名字都不知道。", "tr": "Non sa nemmeno il mio nome." },
      { "t": "除了他以外，我们都去了。", "tr": "Tranne lui, ci siamo andati tutti." },
      { "t": "除了中文以外，我还学英语。", "tr": "Oltre al cinese, studio anche l'inglese." }
    ],
    "domanda": "Nelle prime due frasi, che cosa sta tra 连 e 都, e che cosa viene dopo? Poi guarda le ultime due: cominciano nello stesso modo (除了…以外), ma una dice «tranne» e l'altra «oltre a». Quale parola dopo la virgola fa la differenza?",
    "risposta": "In 连…都 la cosa **sorprendente** (un carattere, il mio nome) sta tra 连 e 都, e il verbo viene dopo 都: il senso è «perfino, nemmeno». Nelle frasi con 除了 è la parola dopo la virgola a decidere: **都** («tutti») fa di 除了 un «tranne», **还** («anche») ne fa un «oltre a». Quindi 除了 apre un elemento che sta fuori dal gruppo, e 都 o 还 dicono se lo si toglie o se lo si aggiunge."
  },
  "regola": {
    "enunciato": "Con **连 … 都** si mette in rilievo un caso estremo o inatteso («perfino, nemmeno»): 连 + il caso + 都 + verbo. Con **除了 … 以外** si ritaglia un elemento: seguito da **都** vale «tranne», seguito da **还** o **也** vale «oltre a».",
    "schema": ["连", "il caso estremo", "都 / 也", "(不 · 没)", "verbo"],
    "punti": [
      { "ok": true, "t": "**连 … 都 vuole sempre tutti e due i pezzi**: il caso estremo tra 连 e 都, il verbo dopo. 也 al posto di 都 si trova, ma 都 è molto più comune: 他连饭都没吃。" },
      { "ok": true, "t": "**Il caso estremo può essere il soggetto o l'oggetto.** Soggetto: 连老师都不知道 (non lo sa nemmeno l'insegnante). Oggetto: l'oggetto passa davanti al verbo, tra 连 e 都: 他连我的名字都不知道。" },
      { "ok": true, "t": "**Con la negazione si usa spesso 一 + classificatore**, il minimo possibile: 连一个人都不认识, 连一句中文都不会说 («neanche uno, neanche una frase»)." },
      { "ok": true, "t": "**除了 … (以外), … 都 …** vuol dire «tranne»: 除了他以外，大家都来了。 L'elemento escluso sta dopo 除了, e 都 nella seconda parte riprende tutti gli altri." },
      { "ok": true, "t": "**除了 … (以外), … 还 / 也 …** vuol dire «oltre a»: 除了中文以外，我还学英语。 L'elemento dopo 除了 è già un fatto, e la seconda parte ne aggiunge un altro." },
      { "ok": true, "t": "**以外 (o 之外) si può togliere** e il senso non cambia: 除了他，大家都来了。 Con 以外 la frase è un po' più completa e formale; nel parlato veloce molto spesso cade." },
      { "ok": false, "t": "**Non si dice 连 senza 都, né 除了 con «tranne» e senza 都**: 他连一个汉字不认识 e 除了他，我们去了 non vanno bene. Chi dice «tranne» deve avere 都, chi dice «oltre a» deve avere 还 o 也." }
    ]
  },
  "logica": [
    "L'italiano ha parole diverse per «nemmeno», «perfino», «tranne», «oltre a»; il cinese ne ha due strutture a due pezzi e lascia al secondo pezzo la parte che decide il senso. In 连 … 都 il primo pezzo (连) segna il punto estremo di una scala, e 都 è l'avverbio che sta davanti al verbo e dice «tutto, senza eccezione»: «già il caso più improbabile va così, figuriamoci gli altri». Per questo 都 non può cadere: è lui a portare l'asserzione.",
    "Anche 除了 è metà del lavoro. Da solo significa «tolto questo» e lascia aperto che cosa succede dopo: se ciò che resta è «tutto» (都) è un'eccezione; se qualcosa si aggiunge (还, 也) è un'aggiunta. Una frase come 除了他，我们还去了 è corretta ma dice un'altra cosa: «oltre a lui, ci siamo andati anche noi». Quando in italiano dici «tranne», in cinese hai bisogno di 都."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Struttura", "Esempio"],
    "righe": [
      ["Perfino (caso estremo, soggetto)", "连 + soggetto + 都 + verbo", "连老师都不知道。"],
      ["Nemmeno (caso estremo, oggetto)", "soggetto + 连 + oggetto + 都 + 不/没 + verbo", "他连饭都没吃。"],
      ["Neanche uno", "连 + 一 + classificatore + nome + 都 + 不/没", "我连一个人都不认识。"],
      ["Tranne", "除了 + X (以外)， … 都 …", "除了他以外，大家都来了。"],
      ["Oltre a", "除了 + X (以外)， … 还/也 …", "除了中文以外，我还学英语。"],
      ["Solo due possibilità", "除了 A 就是 B", "他周末除了睡觉就是看电视。"]
    ]
  },
  "esempi": [
    { "gruppo": "Perfino: il caso estremo è il soggetto", "items": [
      { "t": "这个问题连孩子都知道。", "tr": "Questa cosa la sa perfino un bambino." },
      { "t": "连老师都不认识这个字。", "tr": "Questo carattere non lo conosce nemmeno l'insegnante." },
      { "t": "今天太热了，连小狗都不想动。", "tr": "Oggi fa così caldo che nemmeno il cagnolino ha voglia di muoversi." }
    ] },
    { "gruppo": "Nemmeno: il caso estremo è l'oggetto", "items": [
      { "t": "他忙得连饭都没吃就走了。", "tr": "Era così occupato che se n'è andato senza nemmeno mangiare." },
      { "t": "他连自己的名字都不会写。", "tr": "Non sa nemmeno scrivere il proprio nome." },
      { "t": "我连一个人都不认识。", "tr": "Non conosco nemmeno una persona." },
      { "t": "他连一句中文都不会说。", "tr": "Non sa dire nemmeno una frase in cinese." }
    ] },
    { "gruppo": "Tranne: 除了 … 都", "items": [
      { "t": "除了星期天，我每天都上班。", "tr": "Tranne la domenica, vado al lavoro tutti i giorni." },
      { "t": "除了他以外，大家都来了。", "tr": "Tranne lui, sono venuti tutti." },
      { "t": "除了北京，别的城市我都没去过。", "tr": "Tranne Pechino, nelle altre città non sono mai stato.", "nota": "Il senso esclusivo chiede 都 nella seconda parte, anche con una frase negativa." }
    ] },
    { "gruppo": "Oltre a: 除了 … 还 / 也", "items": [
      { "t": "除了苹果，我还喜欢香蕉。", "tr": "Oltre alle mele, mi piacciono anche le banane." },
      { "t": "除了茶以外，她也喝咖啡。", "tr": "Oltre al tè, beve anche il caffè." }
    ] },
    { "gruppo": "Solo due possibilità: 除了 A 就是 B", "items": [
      { "t": "他周末除了睡觉就是看电视。", "tr": "Nel fine settimana o dorme o guarda la televisione.", "nota": "Non fa altro: restano solo queste due attività." }
    ] }
  ],
  "contrasti": [
    { "q": "Dici che il tuo amico non conosce nemmeno un carattere. Quale frase?", "opzioni": [
      { "t": "他连一个汉字都不认识。", "ok": true, "perche": "连 e 都 lavorano in coppia: il caso estremo sta tra i due, il verbo viene dopo." },
      { "t": "他连一个汉字不认识。", "ok": false, "perche": "Manca 都: senza l'avverbio davanti al verbo la frase non regge, perché è 都 a portare «nemmeno»." }
    ] },
    { "q": "Sono andati tutti, tranne lui. Quale frase?", "opzioni": [
      { "t": "除了他以外，我们都去了。", "ok": true, "perche": "都 riprende tutti gli altri: è la parola che fa di 除了 un «tranne»." },
      { "t": "除了他以外，我们还去了。", "ok": false, "perche": "还 aggiunge: la frase dice «oltre a lui, anche noi ci siamo andati», che è un altro significato." }
    ] },
    { "q": "Dici che, oltre al tè, bevi anche il caffè. Quale frase?", "opzioni": [
      { "t": "除了茶以外，我还喝咖啡。", "ok": true, "perche": "还 aggiunge una cosa alla lista: dopo il tè, anche il caffè." },
      { "t": "除了茶以外，我都喝咖啡。", "ok": false, "perche": "都 dopo 除了 vuol dire «tranne il tè, tutto il resto è caffè»: non è ciò che vuoi dire." }
    ] },
    { "q": "Dici che non sa nemmeno il tuo nome. Quale frase?", "opzioni": [
      { "t": "他连我的名字都不知道。", "ok": true, "perche": "L'oggetto sta tra 连 e 都 e il verbo viene dopo 都 e la negazione." },
      { "t": "他不知道连我的名字都。", "ok": false, "perche": "Il verbo non può precedere 连: la struttura è 连 + caso + 都 + verbo." }
    ] },
    { "q": "Dici che, tranne Pechino, non sei mai stato in nessuna città. Quale frase?", "opzioni": [
      { "t": "除了北京，别的城市我都没去过。", "ok": true, "perche": "Per «tranne … il resto» il cinese vuole 都 nella seconda parte." },
      { "t": "除了北京，别的城市我没去过。", "ok": false, "perche": "Manca 都: la frase non dice «tutte le altre», e il senso «tranne» resta incompleto." }
    ] },
    { "q": "Ieri eri così preso che non hai nemmeno mangiato. Quale frase?", "opzioni": [
      { "t": "我昨天忙得连饭都没吃。", "ok": true, "perche": "Per un fatto concreto avvenuto ieri la negazione è 没, che sta dopo 都." },
      { "t": "我昨天忙得连饭都不吃。", "ok": false, "perche": "不 dice «non voglio» o un'abitudine: per un fatto che non è avvenuto serve 没." }
    ] },
    { "q": "Dici che nel fine settimana ha solo due attività: dormire o guardare la televisione. Quale frase?", "opzioni": [
      { "t": "他周末除了睡觉就是看电视。", "ok": true, "perche": "除了 A 就是 B: restano soltanto queste due possibilità." },
      { "t": "他周末除了睡觉还是看电视。", "ok": false, "perche": "还是 vuol dire «oppure» in una domanda o «ancora»: non chiude l'alternativa come fa 就是." }
    ] }
  ],
  "dialogo": {
    "titolo": "Dopo l'esame",
    "righe": [
      { "chi": "A", "t": "这次考试怎么样？", "tr": "Com'è andato l'esame?" },
      { "chi": "B", "t": "太难了，我连第一个问题都不会做。", "tr": "Troppo difficile, non sapevo fare nemmeno la prima domanda." },
      { "chi": "A", "t": "真的吗？除了你，大家都说不难。", "tr": "Davvero? Tranne te, tutti dicono che non è difficile." },
      { "chi": "B", "t": "我昨天忙得连书都没看。", "tr": "Ieri ero così occupato che non ho nemmeno guardato il libro." },
      { "chi": "A", "t": "那你除了睡觉，还做什么了？", "tr": "E oltre a dormire, che cosa hai fatto?" },
      { "chi": "B", "t": "除了睡觉，我什么都没做。", "tr": "A parte dormire, non ho fatto niente." }
    ],
    "esercizi": [
      { "q": "Che cosa vuol dire «除了你，大家都说不难»?", "opzioni": [
        { "t": "Tutti dicono che non è difficile, ma B no.", "ok": true, "perche": "都 dopo 除了 esclude B e riprende tutti gli altri." },
        { "t": "Oltre a B, anche gli altri dicono che non è difficile.", "ok": false, "perche": "Per «oltre a» servirebbe 还 o 也, non 都." }
      ] },
      { "q": "Che cosa dimostra «连书都没看» sul giorno prima dell'esame?", "opzioni": [
        { "t": "B non ha aperto nemmeno il libro.", "ok": true, "perche": "连 … 都 mette in rilievo il caso estremo: il minimo possibile, guardare il libro, non è avvenuto." },
        { "t": "B ha letto il libro più volte.", "ok": false, "perche": "没 dice che l'azione non c'è stata." }
      ] },
      { "q": "Che cosa ha fatto B ieri, secondo la sua ultima battuta?", "opzioni": [
        { "t": "Ha solo dormito.", "ok": true, "perche": "除了睡觉，我什么都没做: oltre a dormire, niente." },
        { "t": "Ha dormito e ha studiato.", "ok": false, "perche": "什么都没做 esclude ogni altra attività." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi studia cinese lascia fuori 都 in 连 … 都 (他连一个汉字不认识), oppure usa 还 al posto di 都 per dire «tranne» (除了他，我们还去了), oppure omette 都 dopo 除了 nelle frasi negative (除了北京，别的城市我没去过).",
    "perche": "In italiano «nemmeno» e «tranne» sono parole singole, e si pensa di tradurle con una sola parola cinese. In cinese ciascuna struttura ha due pezzi: il primo (连, 除了) apre, il secondo (都, 还, 也) decide il senso. Senza il secondo pezzo la frase non regge, oppure dice un'altra cosa.",
    "esci": "Per «nemmeno» scrivi sempre 连 + caso + 都 + verbo. Per «tranne» scrivi 除了 + X, poi 都; per «oltre a», poi 还 o 也. Prima di chiudere la frase guarda la parola dopo la virgola.",
    "esempi": [
      { "sbagliata": "他连一个汉字不认识。", "giusta": "他连一个汉字都不认识。" },
      { "sbagliata": "除了他以外，我们还去了。", "giusta": "除了他以外，我们都去了。" },
      { "sbagliata": "除了北京，别的城市我没去过。", "giusta": "除了北京，别的城市我都没去过。" }
    ]
  },
  "curiosi": [
    { "titolo": "都 o 也 dopo 连", "t": "Dopo 连 si trova sia 都 sia 也: 连老师也不知道。 Il senso è lo stesso, ma 都 è più comune e di solito dà più forza alla sorpresa. Se l'elemento dopo 连 è un'intera frase, di solito contiene una parola interrogativa (什么, 哪儿, 谁): 你连她叫什么都没问？" },
    { "titolo": "以外, 之外 e il caso zero", "t": "Nello scritto e nel parlato curato si trova anche 之外 al posto di 以外: 除了专业之外，你还有什么爱好？ Il dizionario CC-CEDICT registra 之外 con il senso di «fuori da, escluso»." },
    { "titolo": "除了 A 就是 B", "t": "È una struttura fissa che significa «o A o B»: chi parla dice che non c'è una terza possibilità. Si usa soprattutto per le abitudini e per descrivere qualcuno con tono scherzoso o critico: 他除了工作就是睡觉。" }
  ],
  "pragmatica": "连 … 都 è la forma naturale per esagerare, lamentarsi o stupirsi: 我连饭都没时间吃！ Ha quasi sempre un tono vivo e affettivo, perciò nello scritto formale si preferisce 甚至. 除了 … 都 è neutro e va bene dappertutto, a voce e per iscritto; quando si ha un dubbio sul senso, controlla se dopo la virgola c'è 都 o 还.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他连自己的名字都不会写。", "opzioni": [
      { "t": "Non sa nemmeno scrivere il proprio nome.", "ok": true, "perche": "连 … 都 + 不会 = «nemmeno»: il proprio nome è il caso più semplice e non lo sa." },
      { "t": "Scrive anche il proprio nome.", "ok": false, "perche": "La negazione 不会 dice che non sa farlo." },
      { "t": "Non vuole dire il proprio nome.", "ok": false, "perche": "Il verbo è 写 (scrivere), non 说 (dire)." }
    ] },
    { "k": "buco", "zh": "他＿一个汉字都不认识。", "tr": "Non conosce nemmeno un carattere.", "opzioni": [
      { "t": "连", "ok": true, "perche": "连 apre il caso estremo, che si chiude con 都." },
      { "t": "把", "ok": false, "perche": "把 introduce una cosa su cui si agisce, non un caso estremo." },
      { "t": "被", "ok": false, "perche": "被 introduce chi compie l'azione in un passivo." }
    ] },
    { "k": "buco", "zh": "除了他以外，我们＿去了。", "tr": "Tranne lui, ci siamo andati tutti.", "opzioni": [
      { "t": "都", "ok": true, "perche": "都 riprende tutti gli altri: è l'eccezione." },
      { "t": "还", "ok": false, "perche": "还 aggiunge: direbbe «oltre a lui, anche noi»." },
      { "t": "连", "ok": false, "perche": "连 non si usa dopo 除了: serve in 连 … 都." }
    ] },
    { "k": "ordine", "t": "他连我的名字都不知道", "tr": "Non sa nemmeno il mio nome." },
    { "k": "ordine", "t": "除了中文以外我还学英语", "alt": ["除了中文我还学英语"], "tr": "Oltre al cinese, studio anche l'inglese." },
    { "k": "trasforma", "base": "他不认识一个汉字。", "consegna": "Riscrivi la frase con 连 … 都 per dire che non conosce nemmeno un carattere.", "accetta": ["他连一个汉字都不认识。", "他连一个汉字也不认识。"], "rifiutate": [
      { "t": "他连一个汉字不认识。", "perche": "Manca 都 prima del verbo." }
    ], "perche": "Il caso estremo (un carattere) va tra 连 e 都, e il verbo viene dopo 都 e la negazione." },
    { "k": "trasforma", "base": "大家都来了，他没来。", "consegna": "Riscrivi la frase con 除了 per dire «Tranne lui, sono venuti tutti».", "accetta": ["除了他以外，大家都来了。", "除了他，大家都来了。", "除了他以外大家都来了。", "除了他大家都来了。"], "rifiutate": [
      { "t": "除了他以外，大家还来了。", "perche": "还 vuol dire «oltre a lui»: aggiunge, non esclude." }
    ], "perche": "Per «tranne» dopo 除了 e l'elemento escluso serve 都." },
    { "k": "trasforma", "base": "我学中文，也学英语。", "consegna": "Riscrivi la frase con 除了 per dire «Oltre al cinese, studio anche l'inglese».", "accetta": ["除了中文以外，我还学英语。", "除了中文，我还学英语。", "除了中文以外，我也学英语。", "除了中文，我也学英语。"], "rifiutate": [
      { "t": "除了中文以外，我都学英语。", "perche": "都 dopo 除了 vuol dire «tranne il cinese»: l'opposto di ciò che si vuole dire." }
    ], "perche": "Per «oltre a» la seconda parte porta 还 o 也." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Non so nemmeno il suo nome.»", "a": "我连他的名字都不知道。", "accetta": ["我连他的名字也不知道。", "我连他叫什么都不知道。", "我连他叫什么名字都不知道。", "我连他的名字都不知道"], "perche": "Il caso estremo, il suo nome, sta tra 连 e 都; il verbo con la negazione viene dopo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Tranne la domenica, lavoro tutti i giorni.»", "a": "除了星期天，我每天都上班。", "accetta": ["除了星期天以外，我每天都上班。", "除了星期天，我每天都工作。", "除了星期天以外，我每天都工作。", "除了星期日，我每天都上班。"], "perche": "Per «tranne» dopo l'elemento escluso si usa 都: 每天都上班." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你喜欢吃什么水果？" },
      { "chi": "B", "t": "除了苹果，我＿喜欢香蕉。", "buco": true }
    ], "opzioni": [
      { "t": "还", "ok": true, "perche": "B aggiunge un secondo frutto alle mele: «oltre alle mele, anche le banane»." },
      { "t": "连", "ok": false, "perche": "连 non si usa dopo 除了: serve nella coppia 连 … 都." },
      { "t": "把", "ok": false, "perche": "把 introduce una cosa su cui si agisce: qui B parla di ciò che gli piace." }
    ] },
    { "k": "scegli", "q": "In quale frase 除了 vuol dire «oltre a», e non «tranne»?", "opzioni": [
      { "t": "除了咖啡，他还喝茶。", "ok": true, "perche": "还 aggiunge una seconda bevanda alla prima." },
      { "t": "除了雨天，我都骑车上班。", "ok": false, "perche": "都 esclude i giorni di pioggia: significa «tranne»." },
      { "t": "除了他，大家都去了。", "ok": false, "perche": "都 esclude lui: significa «tranne»." }
    ] }
  ],
  "capaci": [
    "Sai dire «nemmeno» e «perfino» con 连 … 都, mettendo il caso estremo tra i due pezzi.",
    "Sai scegliere tra 都 e 还/也 dopo 除了, per dire «tranne» o «oltre a».",
    "Sai usare 一 + classificatore per dire «neanche uno» e 除了 A 就是 B per dire «o A o B».",
    "Sai togliere 以外 e 连 quando il registro lo permette, senza perdere 都."
  ],
  "glosse": {
    "他连饭都没吃": "Non ha mangiato nemmeno il riso.",
    "连老师都不知道": "Nemmeno l'insegnante lo sa",
    "连一个人都不认识": "Non conosce nemmeno una persona",
    "除了他，大家都来了": "Tranne lui, sono venuti tutti.",
    "除了他，我们去了": "Tranne lui, siamo andati noi",
    "除了他，我们还去了": "Oltre a lui siamo andati anche noi",
    "连老师也不知道": "Nemmeno l'insegnante lo sa.",
    "你连她叫什么都没问": "Non le hai chiesto nemmeno come si chiama?",
    "除了专业之外，你还有什么爱好": "Oltre alla tua specialità, che altri hobby hai?",
    "他除了工作就是睡觉": "Oltre a lavorare, dorme e basta.",
    "我连饭都没时间吃": "Non ho nemmeno il tempo di mangiare!"
  },
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), pagina «Expressing even with lian and dou»: struttura con soggetto e con oggetto, 都 indispensabile, 也 possibile",
    "CC-CEDICT: voci 连, 除了, 以外 e 除外, con il valore «tranne/oltre a» e il modello 除了 A 就是 B",
    "Tatoeba (cmn.tsv): frasi reali come 这个连小孩都能读, 他连字都不会念, 除了雨天，我都是骑车去上班的, consultate per verificare le due strutture"
  ]
};
