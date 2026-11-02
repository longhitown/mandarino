/* Lezione 41 · Appena… subito: 一…就 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["yi-jiu"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我一下飞机就给妈妈发短信。", "tr": "Appena scendo dall'aereo mando un messaggio a mamma." },
      { "t": "老师一来，大家就不说话了。", "tr": "Appena arriva l'insegnante, tutti smettono di parlare." },
      { "t": "他一看书就想睡觉。", "tr": "Appena si mette a leggere, gli viene sonno." },
      { "t": "明天我一起床就去跑步。", "tr": "Domani, appena alzato, vado a correre." }
    ],
    "domanda": "In ogni frase ci sono due piccole parole che si ripetono. Quali sono e dove stanno rispetto ai due verbi? Nella seconda frase c'è un soggetto solo o ce ne sono due? E la terza frase parla di un momento preciso o di qualcosa che succede ogni volta?",
    "risposta": "Le due parole sono **一** e **就**: 一 sta subito prima del primo verbo (下飞机, 来, 看书, 起床), 就 sta subito prima del secondo (发短信, 不说话, 想睡觉, 去跑步). Nella seconda frase i soggetti sono due (老师 e 大家) e ognuno si mette davanti al proprio verbo. La terza può essere letta in due modi: una volta sola oppure **ogni volta** che lui apre un libro; il contesto decide, la forma è la stessa. La quarta guarda al futuro: lo schema non dipende dal tempo."
  },
  "regola": {
    "enunciato": "**一 + verbo, 就 + verbo** dice che la seconda azione segue la prima senza pausa: «appena…, subito…». Se la situazione si ripete, la stessa forma vuol dire «ogni volta che…». Non cambia con il passato, il presente o il futuro: la successione immediata è tutto il suo significato.",
    "schema": ["chi", "一", "azione 1", "，", "(chi)", "就", "azione 2"],
    "punti": [
      { "ok": true, "t": "**一 sta davanti al primo verbo, 就 davanti al secondo**: 她一吃完饭就去看书. Sono avverbi: vanno dopo il soggetto e prima del verbo, come 先 e 也." },
      { "ok": true, "t": "**Un soggetto o due**: se chi agisce è lo stesso si dice una volta sola, prima di 一 (我一上车就睡着了); se cambia, ciascuno sta davanti al proprio verbo e di solito c'è una virgola (我一开门，小狗就跑进来了)." },
      { "ok": true, "t": "**Due letture**: «appena» per un evento singolo (passato o futuro), «ogni volta che» per un'abitudine. 他一喝咖啡就睡不着 è l'abitudine; 我一开门，小狗就跑进来了 è un fatto di una volta." },
      { "ok": true, "t": "**了 solo per un fatto compiuto**: se racconti un evento passato, in fondo puoi mettere 了 (小狗就跑进来了); con il futuro, con le richieste e con le abitudini non si mette." },
      { "ok": true, "t": "**Modali e avverbi stanno dopo 就**, davanti al verbo: 我一下课就要去吃饭, 你一到就马上给我打电话. Il 就 resta attaccato al punto in cui comincia la seconda azione." },
      { "ok": true, "t": "**Il secondo pezzo può essere negativo**: 他一喝咖啡就睡不着, 她一生气就不说话. La negazione appartiene all'azione che segue 就." },
      { "ok": false, "t": "**Non si scambia 就 con 才 o 再**: 才 dice «solo dopo, non prima» (做完作业才能玩), 再 dice «poi, in un secondo momento». In questo schema, per legare la seconda azione alla prima, serve 就. Neppure si spezza il verbo: 他一看见我, non 他看一见我." }
    ]
  },
  "logica": [
    "L'italiano ha una congiunzione, «appena», che apre la frase. Il cinese non ha una congiunzione: usa **due avverbi che lavorano in coppia**. 一 è il «uno» dei conti: basta **un solo atto** (un arrivo, uno sguardo, un'apertura di porta). 就 vuol dire «già, subito»: il secondo atto è lì, senza aspettare. Letta così, 一看就懂 è «a un solo sguardo, già capisco»; il significato di «appena» nasce dal pezzo di destra, che scatta non appena è successo il pezzo di sinistra.",
    "Ne segue che 一 e 就 si tengono insieme: chi ascolta sente 一 e aspetta 就. Per lo stesso motivo il cinese distingue con precisione ciò che l'italiano rende con una sola parola: 就 è «subito», 才 è «solo dopo, e più tardi del previsto», 再 è «poi, in un secondo momento». Per «appena = da poco» (ha appena finito di mangiare) si usa un'altra parola, 刚: 他刚吃完饭 non contiene nessuna successione tra due azioni, dice solo che il fatto è recente."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Come lo costruisci", "Esempio"],
    "righe": [
      ["Appena, un solo soggetto", "chi + 一V1 + 就V2", "她一吃完饭就去看书。"],
      ["Appena, due soggetti", "A 一V1，B 就V2", "你一说，他就明白了。"],
      ["Ogni volta che", "一V1 就V2, senza 了", "她一生气就不说话。"],
      ["Fatto passato, raccontato", "…就V2了", "我一上车就睡着了。"],
      ["Richiesta o promessa", "你一V1 就V2", "你一到就给我发个信息。"],
      ["Dopo il compimento (con 了)", "V1了…就V2", "我下了课就回家。"],
      ["Solo dopo, non prima", "V1 才 V2", "做完作业才能玩。"]
    ]
  },
  "esempi": [
    { "gruppo": "Appena, con lo stesso soggetto", "items": [
      { "t": "她一吃完饭就去看书。", "tr": "Appena finisce di mangiare, va a leggere." },
      { "t": "弟弟一放学就跑回家。", "tr": "Mio fratello, appena esce da scuola, corre a casa." },
      { "t": "我一上车就睡着了。", "tr": "Appena sono salito in macchina, mi sono addormentato.", "nota": "Fatto passato: 了 in fondo." },
      { "t": "爸爸一下班就去买菜。", "tr": "Papà, appena finisce di lavorare, va a fare la spesa." }
    ] },
    { "gruppo": "Due soggetti: ognuno davanti al proprio verbo", "items": [
      { "t": "我一开门，小狗就跑进来了。", "tr": "Appena ho aperto la porta, il cagnolino è entrato di corsa." },
      { "t": "你一说，他就明白了。", "tr": "Appena lo dici, lui capisce." },
      { "t": "医生一到，大家就放心了。", "tr": "Appena è arrivato il medico, tutti si sono tranquillizzati." }
    ] },
    { "gruppo": "Ogni volta che: l'abitudine", "items": [
      { "t": "他一喝咖啡就睡不着。", "tr": "Ogni volta che beve caffè, non riesce a dormire.", "nota": "Abitudine: nessun 了." },
      { "t": "孩子一看见我就笑。", "tr": "Appena mi vede, il bambino ride." },
      { "t": "她一生气就不说话。", "tr": "Quando si arrabbia, non parla più." },
      { "t": "我一到冬天就爱喝热茶。", "tr": "Appena arriva l'inverno, mi viene voglia di tè caldo." }
    ] },
    { "gruppo": "Richieste e promesse", "items": [
      { "t": "你一到就给我发个信息。", "tr": "Appena arrivi, mandami un messaggio.", "nota": "Imperativo con soggetto sottinteso: la forma è la stessa." },
      { "t": "他一回来你就告诉我。", "tr": "Appena torna, dimmelo.", "nota": "Due soggetti: 他 e 你." }
    ] },
    { "gruppo": "Vicini ma diversi: 了…就 e 才", "items": [
      { "t": "我下了课就回家。", "tr": "Finita la lezione, torno a casa.", "nota": "V1了…就V2: la prima azione è compiuta; non c'è 一." },
      { "t": "做完作业才能玩。", "tr": "Solo dopo aver finito i compiti si può giocare.", "nota": "才 dice «solo dopo»: l'opposto della fretta di 就." }
    ] }
  ],
  "contrasti": [
    { "q": "Dici che un tuo amico, appena sale in macchina, si addormenta. Quale frase?", "opzioni": [
      { "t": "他一上车就睡着了。", "ok": true, "perche": "一 prima del primo verbo, 就 prima del secondo, 了 perché è un fatto raccontato." },
      { "t": "他一上车睡着了。", "ok": false, "perche": "Manca 就: senza di lui il secondo verbo non è legato al primo, e la frase non dice più «subito»." },
      { "t": "他上一车就睡着了。", "ok": false, "perche": "一 va davanti al verbo (上), non al nome: 上一车 sposta 一 dove non può stare." }
    ] },
    { "q": "Dici che, appena finiti i compiti, vai subito a giocare. Quale frase dice «subito»?", "opzioni": [
      { "t": "我一做完作业就去玩。", "ok": true, "perche": "一…就 dice che il secondo fatto segue senza pausa." },
      { "t": "我做完作业才去玩。", "ok": false, "perche": "才 dice «solo dopo» e suggerisce che prima non potevi: non è la fretta di 就." }
    ] },
    { "q": "Appena la mamma torna, i bambini smettono di giocare. Quale frase?", "opzioni": [
      { "t": "妈妈一回来，孩子们就不玩了。", "ok": true, "perche": "Con due soggetti ognuno sta davanti al proprio verbo: 妈妈 con 回来, 孩子们 con 玩." },
      { "t": "妈妈一回来，就孩子们不玩了。", "ok": false, "perche": "Il soggetto del secondo verbo va prima di 就, non dopo: 就 sta davanti al verbo." }
    ] },
    { "q": "«Appena finisce la lezione, voglio andare a mangiare.» Dove sta 就 rispetto a 要?", "opzioni": [
      { "t": "我一下课就要去吃饭。", "ok": true, "perche": "Il verbo modale 要 fa parte della seconda azione, quindi segue 就." },
      { "t": "我一下课要就去吃饭。", "ok": false, "perche": "就 non si mette dopo il modale: sta davanti al blocco 要去吃饭." }
    ] },
    { "q": "Dici che il bambino, appena ti vede, ride. Dove va 一?", "opzioni": [
      { "t": "他一看见我就笑。", "ok": true, "perche": "看见 è un verbo con il suo risultato: 一 sta davanti al verbo intero." },
      { "t": "他看一见我就笑。", "ok": false, "perche": "看见 non si spezza: 一 va prima di 看, non tra 看 e 见." }
    ] },
    { "q": "Che cosa comunica 他一说我就懂了?", "opzioni": [
      { "t": "Appena lui parla, io capisco.", "ok": true, "perche": "一…就 lega i due fatti senza pausa: parla lui, capisco io." },
      { "t": "Capisco solo dopo che lo ripete.", "ok": false, "perche": "«Solo dopo» è il significato di 才, non di 就." },
      { "t": "Se lui parla, non capisco.", "ok": false, "perche": "Niente nella frase è negativo: 懂 è affermativo." }
    ] },
    { "q": "Che cosa comunica 孩子一看见狗就哭?", "opzioni": [
      { "t": "Appena (o ogni volta che) vede un cane, il bambino piange.", "ok": true, "perche": "Il pianto segue la vista del cane; con un fatto ripetuto la stessa forma vale «ogni volta»." },
      { "t": "Il bambino piange e poi vede un cane.", "ok": false, "perche": "L'ordine è inverso: 一 sta con 看见, quindi è la vista a venire per prima." },
      { "t": "Il bambino vede un solo cane.", "ok": false, "perche": "Qui 一 non è il numero «uno»: è una parte dello schema «appena»." }
    ] }
  ],
  "dialogo": {
    "titolo": "Un messaggio all'arrivo",
    "righe": [
      { "chi": "A", "t": "你明天几点到上海？", "tr": "A che ora arrivi domani a Shanghai?" },
      { "chi": "B", "t": "十点。我一下飞机就给你打电话。", "tr": "Alle dieci. Appena scendo dall'aereo ti telefono." },
      { "chi": "A", "t": "好。我一吃完早饭就出发。", "tr": "Va bene. Appena ho fatto colazione parto." },
      { "chi": "B", "t": "你开车来吗？", "tr": "Vieni in macchina?" },
      { "chi": "A", "t": "对。你一出来，就能看到我。", "tr": "Sì. Appena esci, mi vedrai." },
      { "chi": "B", "t": "谢谢！我一见到你就请你喝咖啡。", "tr": "Grazie! Appena ti vedo ti offro un caffè." }
    ],
    "esercizi": [
      { "q": "Quando telefonerà B?", "opzioni": [
        { "t": "Appena scenderà dall'aereo.", "ok": true, "perche": "我一下飞机就给你打电话: il telefono segue lo sbarco senza pausa." },
        { "t": "Quando arriverà in albergo.", "ok": false, "perche": "Nel dialogo B non parla di albergo: il momento è 下飞机." },
        { "t": "Dopo aver bevuto il caffè.", "ok": false, "perche": "Il caffè è la seconda promessa di B, non il momento della telefonata." }
      ] },
      { "q": "Che cosa fa A subito dopo la colazione?", "opzioni": [
        { "t": "Parte.", "ok": true, "perche": "我一吃完早饭就出发: 出发 è la seconda azione." },
        { "t": "Va al lavoro.", "ok": false, "perche": "Il lavoro non è nominato nel dialogo." },
        { "t": "Telefona a B.", "ok": false, "perche": "La telefonata spetta a B, non ad A." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano traduce «appena» con una parola sola e mette 就 dove l'italiano mette il soggetto o il verbo modale: 妈妈一回来，就孩子们不玩了; 我一下课要就去吃饭; oppure sceglie 才 per dire «subito».",
    "perche": "In italiano «appena» è una congiunzione isolata e il resto della frase resta com'è. In cinese 就 è un avverbio che si attacca al verbo: il soggetto, il modale e l'oggetto non possono stargli davanti. Inoltre 才 e 再 sono vicini a 就 per forma ma opposti per senso: 才 è «solo dopo», 再 è «poi».",
    "esci": "Quando scrivi, metti 一 davanti al primo verbo, poi 就 davanti al secondo e controlla due cose: il soggetto del secondo verbo sta prima di 就 e il modale sta dopo. Se vuoi dire «subito» non usare 才.",
    "esempi": [
      { "sbagliata": "我一到家才给你打电话。", "giusta": "我一到家就给你打电话。" },
      { "sbagliata": "妈妈一回来，就孩子们不玩了。", "giusta": "妈妈一回来，孩子们就不玩了。" },
      { "sbagliata": "我一下课要就去吃饭。", "giusta": "我一下课就要去吃饭。" },
      { "sbagliata": "他看一见我就笑。", "giusta": "他一看见我就笑。" }
    ]
  },
  "curiosi": [
    { "titolo": "Il «uno» che non conta", "t": "Qui 一 non indica un numero, ma «un solo atto basta». È parente di 一下, che dopo un verbo vuol dire «un po'» e che nel dizionario ha anche il senso di «tutto in una volta, d'un tratto». Esiste anche 一旦, «una volta che», che regge un 就 e dice una condizione, non una fretta: 一旦开始，就不能停。" },
    { "titolo": "Il tono di 一 cambia", "t": "Il carattere 一 si legge yī da solo, ma davanti a un quarto tono diventa yí (一到 yí dào, 一累 yí lèi) e davanti a primo, secondo e terzo tono diventa yì (一听 yì tīng, 一回家 yì huí jiā)." },
    { "titolo": "刚 non è 一…就", "t": "Anche 刚 si traduce con «appena», ma vuol dire «da poco»: 他刚到 («è appena arrivato»). 一…就 non dice mai quanto tempo è passato: lega due azioni che si susseguono. Per questo 他一到就问你 («appena è arrivato ha chiesto di te») ha bisogno di due azioni, mentre 他刚到 ne contiene una sola." }
  ],
  "pragmatica": "一…就 è frequentissimo nelle promesse e nelle richieste tra amici: 你一到就告诉我 è il modo normale per chiedere un messaggio all'arrivo. Con la forma 你怎么一…就…？ si esprime sorpresa o piccola critica su un'abitudine («come mai appena arrivi a casa…?»). Nel racconto di una sequenza di fatti è altrettanto naturale: lo schema funziona nello scritto e nel parlato.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "她一出门就下雨了。", "opzioni": [
      { "t": "Appena è uscita di casa, ha cominciato a piovere.", "ok": true, "perche": "La pioggia segue l'uscita senza pausa; 了 segna il cambiamento." },
      { "t": "Ha piovuto e poi è uscita.", "ok": false, "perche": "L'ordine è quello di 一…就: prima l'uscita, poi la pioggia." },
      { "t": "Non è uscita perché pioveva.", "ok": false, "perche": "Nella frase non c'è nessuna negazione né causa." }
    ] },
    { "k": "scegli", "q": "In quale frase 就 sta nel posto sbagliato?", "opzioni": [
      { "t": "我一下课要就去吃饭。", "ok": true, "perche": "就 deve stare prima del modale: 就要去吃饭." },
      { "t": "我一下课就要去吃饭。", "ok": false, "perche": "È la frase corretta: 就 apre la seconda azione." },
      { "t": "一下课我就去吃饭。", "ok": false, "perche": "Anche questa è corretta: il soggetto può aprire la frase o seguire la prima parte." }
    ] },
    { "k": "buco", "zh": "我一回家＿换衣服。", "tr": "Appena torno a casa mi cambio.", "opzioni": [
      { "t": "就", "ok": true, "perche": "Con 一 davanti al primo verbo, 就 apre il secondo." },
      { "t": "才", "ok": false, "perche": "才 vuol dire «solo dopo»: cambia il senso e non va con 一." },
      { "t": "再", "ok": false, "perche": "再 vuol dire «poi» e non esprime la fretta dello schema." }
    ] },
    { "k": "buco", "zh": "她＿看见我就笑了。", "tr": "Appena mi ha visto, ha riso.", "opzioni": [
      { "t": "一", "ok": true, "perche": "一 sta davanti al primo verbo (看见) e prepara 就." },
      { "t": "才", "ok": false, "perche": "才 non si apre con 就: dice «solo dopo»." },
      { "t": "再", "ok": false, "perche": "再 non porta la successione immediata." }
    ] },
    { "k": "ordine", "t": "你一到就给我发个信息", "tr": "Appena arrivi, mandami un messaggio." },
    { "k": "ordine", "t": "弟弟一放学就跑回家", "tr": "Mio fratello, appena esce da scuola, corre a casa." },
    { "k": "trasforma", "base": "我吃完饭，去散步。", "consegna": "Collega le due azioni con 一…就: appena finisco di mangiare, vado a passeggiare.", "accetta": ["我一吃完饭就去散步。", "一吃完饭我就去散步。", "我一吃完饭，就去散步。"], "rifiutate": [
      { "t": "我吃完饭一就去散步。", "perche": "一 deve stare davanti al primo verbo (吃完), non dopo l'oggetto." },
      { "t": "我一吃完饭才去散步。", "perche": "才 dice «solo dopo»: non è la successione immediata di 就." }
    ], "perche": "一 prima di 吃完, 就 prima di 去散步." },
    { "k": "trasforma", "base": "老师进来，大家不说话了。", "consegna": "Riscrivi la frase con 一…就: appena entra l'insegnante, tutti smettono di parlare.", "accetta": ["老师一进来，大家就不说话了。", "老师一进来大家就不说话了。"], "rifiutate": [
      { "t": "老师一进来，就大家不说话了。", "perche": "Il soggetto del secondo verbo va prima di 就." }
    ], "perche": "Due soggetti: 老师 con 进来, 大家 con 不说话; 就 sta prima del secondo verbo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Appena finisco di lavorare, vado a casa.»", "a": "我一下班就回家。", "accetta": ["一下班我就回家。", "我一下班就回家了。", "我一下班，就回家。"], "perche": "一下班 è la prima azione, 就回家 la seconda." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Appena apro la porta, il gatto scappa.»", "a": "我一开门，猫就跑了。", "accetta": ["我一开门，小猫就跑了。", "我一开门，猫就跑走了。"], "perche": "Due soggetti: 我 con 开门, 猫 con 跑; 就 va davanti al secondo verbo." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你什么时候去商店？" },
      { "chi": "B", "t": "我＿下班就去。", "buco": true }
    ], "opzioni": [
      { "t": "一", "ok": true, "perche": "一 davanti a 下班 apre lo schema che 就 completa." },
      { "t": "也", "ok": false, "perche": "也 vuol dire «anche»: non apre la successione." },
      { "t": "很", "ok": false, "perche": "很 si mette davanti agli aggettivi, non davanti a un verbo come 下班." }
    ] }
  ],
  "capaci": [
    "Sai dire «appena… subito…» con 一 davanti al primo verbo e 就 davanti al secondo.",
    "Sai usare lo schema con uno o due soggetti, mettendo ciascun soggetto davanti al proprio verbo.",
    "Sai distinguere «appena» (一…就), «solo dopo» (才) e «poi» (再).",
    "Sai fare una richiesta o una promessa come 你一到就给我发个信息."
  ],
  "fonti": [
    "Tatoeba (cmn.tsv, interrogato in locale), ricerca del modello 一…就: ad esempio 一到家就, 一回家就, 一着火就 attestati come uso corrente; 一 davanti al primo verbo e 就 davanti al secondo",
    "CC-CEDICT (cedict_ts.u8), voci 一下, 一旦, 一起, 刚 e 刚刚: significati di «d'un tratto», «una volta che», «da poco»"
  ]
};
