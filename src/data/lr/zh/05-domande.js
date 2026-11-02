/* Lezione 5 · Domande sì o no: 吗 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["domande"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "你想喝茶吗？", "tr": "Vuoi bere del tè?" },
      { "t": "你想不想喝茶？", "tr": "Vuoi bere del tè?" },
      { "t": "你想喝茶，对吗？", "tr": "Vuoi bere del tè, vero?" },
      { "t": "你想喝茶还是咖啡？", "tr": "Vuoi tè o caffè?" }
    ],
    "domanda": "Confronta le quattro domande. Ti sembra che l'ordine delle parole cambi rispetto a una frase normale come 你想喝茶? Che cosa viene aggiunto, e dove? Quale delle quattro ha bisogno di una risposta diversa da «sì» o «no»?",
    "risposta": "L'ordine è sempre lo stesso: 你想喝茶 resta intatto e la domanda nasce con un **elemento in più**. Nella prima c'è **吗** in fondo; nella seconda il verbo viene detto due volte con **不** in mezzo (想不想); nella terza una piccola domanda di conferma (对吗) segue la frase; nella quarta **还是** offre due scelte, e perciò la risposta non è sì o no ma «tè» oppure «caffè». Le prime tre aspettano un «sì» o un «no»; la quarta no."
  },
  "regola": {
    "enunciato": "Per trasformare una frase in una domanda a cui si risponde sì o no si aggiunge **吗** **in fondo** alla frase, senza cambiare l'ordine delle parole. In alternativa si usa la forma **verbo + 不 + verbo** (去不去), e in questo caso 吗 non si mette. Di solito non si risponde con una parola «sì» separata: si ripete il verbo (去) oppure si nega con 不 + verbo (不去).",
    "schema": ["frase", "吗", "?"],
    "punti": [
      { "ok": true, "t": "**吗 chiude la frase**: 你是学生 diventa 你是学生吗？ La particella è atona (si pronuncia leggera) e non sposta nulla: soggetto, verbo e oggetto restano al loro posto." },
      { "ok": true, "t": "**Verbo + 不 + verbo** è la seconda forma: 你去不去？ 你喜欢不喜欢这个？ Con 有 si dice 有没有 (non 有不有), perché la negazione di 有 è 没: 你有没有时间？ Con 是: 是不是. Con gli aggettivi: 好不好, 贵不贵." },
      { "ok": true, "t": "**Risposta**: si ripete il verbo della domanda. 你去吗？ — 去。 / 不去。 Con un aggettivo: 你累吗？ — 累。 / 不累。 Con 有: 有。 / 没有。 Con 是: 是。 / 不是。 Al passato (你吃饭了吗？) si risponde 吃了。 oppure 还没(有)。 / 没吃。" },
      { "ok": true, "t": "**Domande di conferma**: aggiungi 对吗？ 好吗？ 行吗？ dopo una frase: 我们明天去，好吗？ («andiamo domani, ti va bene?»). Con 吧 chi parla propone una supposizione: 你是学生吧？ («sei studente, immagino»)." },
      { "ok": true, "t": "**Due scelte**: 还是 collega due alternative in una domanda: 你喝茶还是喝咖啡？ La risposta nomina una delle due. In una frase affermativa per «o» si usa 或者: 我喝茶或者咖啡都可以." },
      { "ok": true, "t": "**呢 non serve a fare domande sì o no**: 你呢？ significa «e tu?» e riprende un argomento già aperto: 我很好，你呢？" },
      { "ok": false, "t": "**Non si usano insieme**: 你是不是学生吗？ è errato, perché la domanda è già fatta da 是不是. E 吗 non si mette mai davanti al verbo o all'inizio: 吗你是学生？ è errato." }
    ]
  },
  "logica": [
    "In italiano una domanda sì o no si riconosce dalla melodia e dal punto interrogativo: «Hai fame?» e «Hai fame.» hanno le stesse parole. Il cinese fa lo stesso lavoro con una piccola particella: **吗** è come il punto interrogativo che si pronuncia. Si mette alla fine perché la frase si costruisce per intero e solo dopo si «apre» la domanda. Per questo l'ordine non cambia mai: non esiste nessun equivalente di «Hai tu fame?».",
    "L'altra strada, **verbo + 不 + verbo**, mette sul tavolo le due risposte possibili: 去不去 vuol dire «vai, non vai?». Il parlante fa già vedere le due alternative e la risposta ne sceglie una. È anche per questo che di solito «sì» e «no» non sono parole fisse: il cinese risponde con il verbo stesso. «Vai?» — «Vado.» / «Non vado.» Se vuoi essere ancora più chiaro, ripeti anche il soggetto: 我去。",
    "Una domanda negativa come 你不去吗？ («non vai?») in italiano si risponde «sì» per dire «vado» o «no» per dire «non vado», ma i due «sì» e «no» sono ambigui. In cinese la risposta segue il **fatto**, non la forma della domanda: 去 se vai, 不去 se non vai. Ripetere il verbo elimina il dubbio."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi chiedere", "Che cosa metti", "Esempio"],
    "righe": [
      ["Sì o no, in modo semplice", "frase + 吗", "你累吗？"],
      ["Sì o no, mettendo in vista le due risposte", "verbo + 不 + verbo", "你累不累？"],
      ["Esiste o non esiste", "有没有", "你有没有时间？"],
      ["Conferma di un accordo", "frase + 好吗 / 行吗 / 对吗", "我们明天去，好吗？"],
      ["Supposizione", "frase + 吧", "你是学生吧？"],
      ["Una scelta tra due", "A 还是 B", "你喝茶还是喝咖啡？"],
      ["Riprendere un argomento", "frase + 呢", "我很好，你呢？"]
    ]
  },
  "esempi": [
    { "gruppo": "Con 吗: la frase non cambia, 吗 va in fondo", "items": [
      { "t": "你明天有时间吗？", "tr": "Domani hai tempo?" },
      { "t": "你的朋友是学生吗？", "tr": "Il tuo amico è studente?" },
      { "t": "这个贵吗？", "tr": "Questo è caro?", "nota": "Con un aggettivo si dice direttamente 贵, senza 很: la domanda non descrive, chiede." },
      { "t": "你会开车吗？", "tr": "Sai guidare?" },
      { "t": "你吃饭了吗？", "tr": "Hai mangiato?", "nota": "È anche un saluto di tutti i giorni." }
    ] },
    { "gruppo": "Verbo + 不 + verbo: niente 吗", "items": [
      { "t": "你明天有没有时间？", "tr": "Domani hai tempo?" },
      { "t": "他是不是你的朋友？", "tr": "È tuo amico?" },
      { "t": "这个贵不贵？", "tr": "Questo è caro?" },
      { "t": "你喜欢不喜欢这个？", "tr": "Ti piace questo?" }
    ] },
    { "gruppo": "Le risposte: si ripete il verbo", "items": [
      { "t": "你有钱吗？", "tr": "Hai dei soldi?" },
      { "t": "有，我有一些。", "tr": "Sì, ne ho un po'.", "nota": "Per «sì» si ripete 有." },
      { "t": "没有，我没有钱。", "tr": "No, non ho soldi.", "nota": "La negazione di 有 è 没有, mai 不有." }
    ] },
    { "gruppo": "Conferme, supposizioni, scelte", "items": [
      { "t": "你是学生，对吗？", "tr": "Sei studente, giusto?" },
      { "t": "你是学生吧？", "tr": "Sei studente, immagino." },
      { "t": "你喝茶还是喝咖啡？", "tr": "Bevi tè o caffè?" },
      { "t": "我很好，你呢？", "tr": "Io sto bene, e tu?" }
    ] }
  ],
  "contrasti": [
    { "q": "Come chiedi «Domani hai tempo?» con 吗?", "opzioni": [
      { "t": "你明天有时间吗？", "ok": true, "perche": "La frase resta intera e 吗 chiude: è così che si forma ogni domanda sì o no con 吗." },
      { "t": "吗你明天有时间？", "ok": false, "perche": "吗 non sta mai all'inizio: lo metti dove in italiano metteresti il punto interrogativo, cioè alla fine." }
    ] },
    { "q": "Vuoi usare la forma verbo + 不 + verbo per chiedere «Sei stanco?».", "opzioni": [
      { "t": "你累不累？", "ok": true, "perche": "累不累 contiene già le due risposte possibili: la domanda è completa." },
      { "t": "你累不累吗？", "ok": false, "perche": "Chi aggiunge 吗 fa la domanda due volte: o 吗, o la forma 累不累." }
    ] },
    { "q": "Ti chiedono 你累吗？ e tu non sei stanco. Che risposta dai?", "opzioni": [
      { "t": "不累。", "ok": true, "perche": "Si risponde con il verbo (qui un aggettivo) negato da 不: 不累 vuol dire «non sono stanco»." },
      { "t": "不是。", "ok": false, "perche": "不是 nega il verbo 是 («non è così»), ma nella domanda non c'è 是: bisogna riprendere 累." }
    ] },
    { "q": "Ti chiedono 你有钱吗？ e non ne hai. Che risposta dai?", "opzioni": [
      { "t": "没有。", "ok": true, "perche": "有 si nega con 没, quindi la risposta è 没有." },
      { "t": "不有。", "ok": false, "perche": "不有 non esiste: 有 non accetta 不. Accanto a 有 la negazione è sempre 没." }
    ] },
    { "q": "Ti chiedono 你不去吗？ («non vai?») e tu vai. Che risposta dai?", "opzioni": [
      { "t": "去。", "ok": true, "perche": "La risposta segue il fatto: tu vai, quindi 去 («vado»), senza lasciarti confondere dal «non» della domanda." },
      { "t": "不去。", "ok": false, "perche": "不去 vuol dire «non vado»: dice il contrario di ciò che vuoi comunicare." }
    ] },
    { "q": "Offri una scelta: «Bevi tè o caffè?»", "opzioni": [
      { "t": "你喝茶还是喝咖啡？", "ok": true, "perche": "还是 è la parola per «o» nelle domande: la risposta sceglie uno dei due." },
      { "t": "你喝茶吗咖啡？", "ok": false, "perche": "吗 chiude una domanda sì o no e non separa due alternative: per scegliere tra due cose si usa 还是." }
    ] },
    { "q": "Hai detto «Io sto bene» e vuoi chiedere «e tu?».", "opzioni": [
      { "t": "我很好，你呢？", "ok": true, "perche": "呢 riprende l'argomento appena aperto: «e tu?» senza ripetere la domanda." },
      { "t": "我很好，你吗？", "ok": false, "perche": "吗 ha bisogno di una frase intera da trasformare in domanda sì o no; da solo dopo 你 non regge." }
    ] },
    { "q": "Chiedi «Questo è caro?» con la forma verbo + 不 + verbo (con un aggettivo).", "opzioni": [
      { "t": "这个贵不贵？", "ok": true, "perche": "L'aggettivo si ripete con 不 in mezzo, come un verbo: 贵不贵." },
      { "t": "这个很贵不贵？", "ok": false, "perche": "Dentro la forma A-不-A non entra 很: 很 descrive, e una domanda non descrive." }
    ] },
    { "q": "Chiedi «Hai tempo?» con la forma verbo + 不 + verbo.", "opzioni": [
      { "t": "你有没有时间？", "ok": true, "perche": "有 si nega con 没, perciò la forma è 有没有." },
      { "t": "你有不有时间？", "ok": false, "perche": "不 non si mette mai accanto a 有: 有不有 non si dice." }
    ] }
  ],
  "dialogo": {
    "titolo": "Al bar",
    "righe": [
      { "chi": "A", "t": "你好！你想喝茶还是咖啡？", "tr": "Ciao! Vuoi tè o caffè?" },
      { "chi": "B", "t": "我想喝茶。有热茶吗？", "tr": "Vorrei un tè. Avete tè caldo?" },
      { "chi": "A", "t": "有。你要不要糖？", "tr": "Sì. Vuoi dello zucchero?" },
      { "chi": "B", "t": "不要，谢谢。你不喝吗？", "tr": "No, grazie. Tu non bevi?" },
      { "chi": "A", "t": "我喝咖啡。你是学生吗？", "tr": "Io bevo caffè. Sei studente?" },
      { "chi": "B", "t": "是，我在北京学中文。", "tr": "Sì, studio cinese a Pechino." }
    ],
    "esercizi": [
      { "q": "Perché la domanda 你要不要糖？ non finisce con 吗?", "opzioni": [
        { "t": "Perché 要不要 è già una domanda sì o no.", "ok": true, "perche": "Con la forma verbo + 不 + verbo la domanda è completa: aggiungere 吗 la raddoppierebbe." },
        { "t": "Perché 糖 è un nome.", "ok": false, "perche": "Con qualsiasi nome come oggetto la domanda con 吗 è possibile (你要糖吗？)." },
        { "t": "Perché A sta offrendo una scelta tra due cose.", "ok": false, "perche": "Le due cose in alternativa le dà 还是 (茶还是咖啡), non 要不要." }
      ] },
      { "q": "B risponde 不要 a 你要不要糖？ Che cosa ha fatto?", "opzioni": [
        { "t": "Ha ripetuto il verbo con 不 davanti.", "ok": true, "perche": "Si risponde con il verbo della domanda: 要 per «sì», 不要 per «no, grazie»." },
        { "t": "Ha usato una parola per «no».", "ok": false, "perche": "Il cinese non ha una parola fissa per «no»: 不要 è verbo negato." },
        { "t": "Ha fatto una nuova domanda.", "ok": false, "perche": "不要 è una risposta, non contiene nessuna particella interrogativa." }
      ] },
      { "q": "Con 你不喝吗？ B chiede conferma. Quale risposta di A segue il fatto?", "opzioni": [
        { "t": "我喝咖啡。", "ok": true, "perche": "A beve, e risponde con il verbo e con ciò che beve, senza dire né sì né no." },
        { "t": "不喝。", "ok": false, "perche": "不喝 vuol dire «non bevo», ma A ha detto subito dopo che beve caffè." },
        { "t": "不是。", "ok": false, "perche": "不是 nega 是: nella domanda c'è 喝, e la risposta riprende 喝." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano aggiunge 吗 anche alle domande che hanno già la forma verbo + 不 + verbo (你是不是学生吗？), usa 不 con 有 (有不有) e risponde a ogni domanda con 是 o 对, come se fossero il «sì» italiano. A volte mette 吗 nel posto sbagliato (吗你是学生？).",
    "perche": "In italiano ogni domanda sì o no si risolve con la stessa coppia di parole, «sì» e «no», e un solo segno, il punto interrogativo. In cinese le strade per aprire la domanda sono tre (吗, A不A, 吧) e non si sommano, mentre per rispondere si riprende il verbo della domanda.",
    "esci": "Prima di scrivere 吗 guarda se nella frase c'è già una forma come 去不去, 是不是, 有没有. Se c'è, la domanda è fatta. Se non c'è, metti 吗 come ultima parola. Quando rispondi, riprendi il verbo: 去, 不去, 有, 没有.",
    "esempi": [
      { "sbagliata": "你是不是学生吗？", "giusta": "你是不是学生？" },
      { "sbagliata": "你想不想喝茶吗？", "giusta": "你想不想喝茶？" },
      { "sbagliata": "你有不有时间？", "giusta": "你有没有时间？" },
      { "sbagliata": "吗你是学生？", "giusta": "你是学生吗？" }
    ]
  },
  "curiosi": [
    { "titolo": "吗 e il «qualcosa» di 什么", "t": "Il cinese può mettere 吗 anche dopo una parola come 什么, ma allora la parola non chiede più «che cosa»: vuol dire «qualcosa». 你想吃点儿什么吗？ è «vuoi mangiare qualcosa?», una domanda sì o no. Con 什么 interrogativo (你想吃什么？) 吗 invece non c'è. Ne parliamo nella lezione sulle parole interrogative." },
    { "titolo": "Il «sì» che si può dire: 对 e 是的", "t": "La lingua parlata ha 对 («giusto») e 是的 («è così») per confermare una frase di chi parla: 你是学生，对吗？ — 对，我是学生. Nascono come risposte a una conferma, non a una domanda aperta; per le domande semplici con un verbo, il modo più naturale resta ripetere il verbo." },
    { "titolo": "Il passato: 了 nella domanda", "t": "Per chiedere di un fatto compiuto si mette 了 prima di 吗: 你吃饭了吗？ Nel parlato si sente anche 你吃了没有？ e la risposta è 吃了 oppure 没有 (non ancora). Le due forme sono equivalenti." },
    { "titolo": "吧: indovinare con gentilezza", "t": "吧 trasforma una domanda in una supposizione: chi parla pensa già che la risposta sia «sì» e vuole una conferma. 你是学生吧？ è meno diretta di 你是学生吗？ In una proposta (我们走吧) 吧 vuol dire «andiamo»." }
  ],
  "pragmatica": "你吃饭了吗？ è anche un modo di salutare: significa «come stai?» e non vuole davvero sapere che cosa hai mangiato. 好吗？ e 行吗？ dopo una proposta sono un modo cortese per lasciare all'altro la scelta. Con persone a cui devi rispetto si usa 您 al posto di 你: 您是老师吗？ 吗 è atona: la domanda la segna la particella in fondo, anche quando la voce sale.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "你明天有没有时间？", "opzioni": [
      { "t": "Domani hai tempo?", "ok": true, "perche": "有没有 è la forma «hai, non hai?»: domanda sì o no." },
      { "t": "Domani non hai tempo.", "ok": false, "perche": "Nella frase non c'è nessuna affermazione: 没有 qui è una delle due alternative della domanda." },
      { "t": "Domani vieni?", "ok": false, "perche": "Il verbo della frase è 有, avere." }
    ] },
    { "k": "scegli", "q": "In quale frase va tolto 吗?", "opzioni": [
      { "t": "你是不是学生吗？", "ok": true, "perche": "是不是 fa già la domanda: 吗 la raddoppia." },
      { "t": "你是学生吗？", "ok": false, "perche": "Qui 吗 è al posto giusto, in fondo a una frase affermativa." },
      { "t": "你累吗？", "ok": false, "perche": "Qui 吗 è al posto giusto." }
    ] },
    { "k": "buco", "zh": "你想喝茶＿？", "tr": "Vuoi bere del tè?", "opzioni": [
      { "t": "吗", "ok": true, "perche": "吗 chiude la domanda sì o no." },
      { "t": "呢", "ok": false, "perche": "呢 serve a riprendere un argomento («e tu?»), non a fare una domanda sì o no." },
      { "t": "了", "ok": false, "perche": "了 segna un fatto compiuto o un cambiamento, non una domanda." }
    ] },
    { "k": "buco", "zh": "你有＿有时间？", "tr": "Hai tempo?", "opzioni": [
      { "t": "没", "ok": true, "perche": "La negazione di 有 è 没, quindi la forma è 有没有." },
      { "t": "不", "ok": false, "perche": "不有 non esiste: accanto a 有 non si usa 不." },
      { "t": "吗", "ok": false, "perche": "吗 va in fondo alla frase, non tra 有 e 有." }
    ] },
    { "k": "ordine", "t": "你明天有没有时间", "tr": "Domani hai tempo?", "alt": ["明天你有没有时间"] },
    { "k": "ordine", "t": "你喝茶还是喝咖啡", "tr": "Bevi tè o caffè?" },
    { "k": "trasforma", "base": "你喝茶。", "consegna": "Trasformala in una domanda sì o no usando 吗.", "accetta": ["你喝茶吗？"], "rifiutate": [
      { "t": "你喝茶不喝吗？", "perche": "Due forme di domanda insieme: bisogna scegliere o 吗 o 喝不喝." }
    ], "perche": "Si aggiunge 吗 in fondo e l'ordine non cambia." },
    { "k": "trasforma", "base": "你喝茶。", "consegna": "Fai la stessa domanda con la forma verbo + 不 + verbo, senza 吗.", "accetta": ["你喝不喝茶？", "你喝茶不喝？"], "rifiutate": [
      { "t": "你喝不喝茶吗？", "perche": "Con 喝不喝 la domanda c'è già: 吗 non serve." }
    ], "perche": "Si ripete il verbo con 不 in mezzo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Sei stanco?» (con 吗)", "a": "你累吗？", "accetta": ["你累吗"], "perche": "L'aggettivo 累 non vuole 很 nella domanda: basta 你累 e 吗 in fondo." },
    { "k": "scrivi", "q": "Scrivi in cinese la risposta «No, non ho fame» a 你饿吗？", "a": "不饿。", "accetta": ["我不饿。", "不饿", "我不饿"], "perche": "Si risponde riprendendo 饿 negato da 不." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你有时间吗？" },
      { "chi": "B", "t": "＿，我明天很忙。", "buco": true }
    ], "opzioni": [
      { "t": "没有", "ok": true, "perche": "B risponde alla domanda con 有 negato: 没有." },
      { "t": "不有", "ok": false, "perche": "Con 有 non si usa 不: serve 没." },
      { "t": "不是", "ok": false, "perche": "不是 nega 是; nella domanda il verbo era 有." }
    ] },
    { "k": "scegli", "q": "Ti chiedono 你不去吗？ e tu vai. Quale risposta è giusta?", "opzioni": [
      { "t": "去。", "ok": true, "perche": "La risposta segue il fatto: vai, quindi 去." },
      { "t": "不去。", "ok": false, "perche": "不去 significa «non vado»." },
      { "t": "不是。", "ok": false, "perche": "不是 nega 是, che non è il verbo della domanda." }
    ] }
  ],
  "capaci": [
    "Sai trasformare una frase in domanda sì o no con 吗, mettendo 吗 sempre in fondo.",
    "Sai usare la forma verbo + 不 + verbo (去不去, 有没有) senza aggiungere 吗.",
    "Sai rispondere a una domanda ripetendo il verbo, anche a una domanda negativa.",
    "Sai scegliere tra 吗, 吧, 呢 e 还是 secondo ciò che vuoi chiedere."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Yes-no questions with ma»: 吗 in fondo a una frase affermativa, niente 吗 insieme a una parola interrogativa",
    "Wikipedia (inglese), «A-not-A question»: la forma A-not-A e il confronto con la domanda con 吗",
    "Tatoeba (cinese-italiano), frasi come 你不去吗？ e 你知不知道…？, consultato con tools/lezioni-check.mjs",
    "CC-CEDICT, voci 吗, 吧, 呢, 还是, 对"
  ]
};
