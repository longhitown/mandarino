/* Lezione 13 · L'hai mai fatto? 过 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["esperienze"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我去年去了上海。", "tr": "L'anno scorso sono andato a Shanghai." },
      { "t": "我去过上海。", "tr": "Sono stato a Shanghai (una volta, nella vita)." },
      { "t": "你吃过饺子吗？", "tr": "Hai mai mangiato i ravioli?" },
      { "t": "我从来没见过雪。", "tr": "Non ho mai visto la neve." }
    ],
    "domanda": "Confronta la prima e la seconda frase: parlano tutte e due di un viaggio a Shanghai. Che cosa cambia? E che cosa fa 过 nelle ultime due frasi, dove non c'è nessuna data?",
    "risposta": "La prima ha una **data** (去年) e racconta un fatto preciso: 去了. La seconda non dice quando: dice soltanto che hai quell'**esperienza** (去过). Nella terza 过 chiede se l'esperienza c'è, e nella quarta, con 没, dice che non c'è: l'esperienza non ce l'hai (没见过). Quindi 过 non racconta un evento: fotografa che cosa, nella tua vita, hai già provato."
  },
  "regola": {
    "enunciato": "**过** dopo il verbo dice che l'azione è avvenuta almeno una volta, in un momento non precisato: ora hai quell'esperienza. Il negativo è **没(有) + verbo + 过** («non ho mai», «non ancora»), la domanda si fa con 吗 o con 有没有.",
    "schema": ["chi", "(没)", "verbo", "过", "(quante volte)", "oggetto"],
    "punti": [
      { "ok": true, "t": "**V + 过** dice un'esperienza di vita: 我吃过饺子, 她去过巴黎. Non c'è una data. Il tempo vago si può precisare con 以前, 小时候, 从来." },
      { "ok": true, "t": "**Con una data o un evento preciso si usa 了**, non 过: 我昨天吃了饺子, 我去年去了北京. 了 racconta quel fatto; 过 dice che nella vita lo hai fatto." },
      { "ok": true, "t": "**Negazione: 没(有) + V + 过**: 我没吃过日本菜. Rafforzata con 从来: 我从来没见过雪 («mai in vita mia»); con 还: 我还没去过中国 («non ancora»). Non si usa 不 con 过." },
      { "ok": true, "t": "**Domande**: 你去过中国吗？ oppure 你有没有去过中国？, 你去过中国没有？. Si risponde con il verbo e 过: 去过。 oppure 没去过。" },
      { "ok": true, "t": "**Quante volte**: il numero con 次 sta dopo 过. Con un luogo vanno bene due ordini: 去过两次北京, 去过北京两次; con un pronome solo uno: 见过他两次. Con un oggetto topicalizzato: 这个电影我看过三次." },
      { "ok": true, "t": "**Professioni e stati passati**: 他当过老师, 我胖过. 过 dice che l'esperienza è conclusa, e spesso che ora non è più così. Per «essere stato insegnante» si usa un verbo concreto (当过, 做过), non 是过." },
      { "ok": false, "t": "**Niente 过 per il futuro e per le abitudini attuali**: non 明天我去过北京, non 我每天吃过饭. 过 guarda a un'esperienza che c'è già. Il posto è subito dopo il verbo, mai dopo l'oggetto: non 我去北京过." }
    ]
  },
  "logica": [
    "L'italiano ha un solo passato prossimo per cose diversissime: «Ieri sono andato a Pechino» e «Sono stato a Pechino» (nella vita). Il cinese li separa. **了** racconta il fatto, con la sua data e il suo confine; **过** dice che nella tua storia c'è questa esperienza, come un timbro sul passaporto. Ecco perché 过 non ha una data: il timbro non dice quando, dice che c'è.",
    "Anche il verbo 过 (guò) dice «passare, attraversare»: l'azione è passata attraverso di te, e adesso fa parte di ciò che sei. Per questo la domanda 你吃过饺子吗？ chiede qualcosa sul presente della persona (sei una persona che li ha provati?) e non sul passato di un singolo pasto. Il negativo 没…过 dice quindi «a questo punto della mia vita, non ancora»: 我还没去过中国，可是我很想去."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Dici", "Esempio"],
    "righe": [
      ["Un'esperienza, senza data", "V + 过", "我去过北京。"],
      ["Un fatto preciso, con data", "V + 了", "我去年去了北京。"],
      ["Quante volte", "V + 过 + 次", "我去过两次北京。"],
      ["Non l'ho mai fatto", "没(有) + V + 过", "我没去过北京。"],
      ["Mai in vita mia", "从来没 + V + 过", "我从来没见过雪。"],
      ["Non ancora", "还没 + V + 过", "我还没去过中国。"],
      ["Domanda: mai?", "V + 过 + 吗 / 有没有 V 过", "你有没有吃过饺子？"],
      ["Già fatto, adesso", "V + 过了", "我吃过了。"],
      ["Una professione di un tempo", "当 / 做 + 过", "他当过老师。"]
    ]
  },
  "esempi": [
    { "gruppo": "Un'esperienza, senza data", "items": [
      { "t": "我去过北京，也去过上海。", "tr": "Sono stato a Pechino e anche a Shanghai." },
      { "t": "我小时候学过画画。", "tr": "Da piccolo ho studiato disegno.", "nota": "小时候 precisa il periodo, ma resta un'esperienza, non un evento." },
      { "t": "她做过老师。", "tr": "Ha fatto l'insegnante.", "nota": "Di solito vuol dire che ora non lo fa più." },
      { "t": "北京下过大雪。", "tr": "A Pechino è già nevicato forte." }
    ] },
    { "gruppo": "Quante volte", "items": [
      { "t": "我坐过一次飞机。", "tr": "Sono stato in aereo una volta." },
      { "t": "这个电影我看过三次。", "tr": "Questo film l'ho visto tre volte." },
      { "t": "我见过他两次。", "tr": "L'ho incontrato due volte.", "nota": "Con un pronome come oggetto il numero va dopo il pronome." }
    ] },
    { "gruppo": "Il negativo: 没…过", "items": [
      { "t": "我没吃过日本菜。", "tr": "Non ho mai mangiato cucina giapponese." },
      { "t": "我从来没见过雪。", "tr": "Non ho mai visto la neve in vita mia." },
      { "t": "我还没去过中国，可是我很想去。", "tr": "Non sono ancora stato in Cina, ma ci tengo ad andarci." }
    ] },
    { "gruppo": "Le domande", "items": [
      { "t": "你看过这个电影吗？", "tr": "Hai mai visto questo film?" },
      { "t": "你有没有骑过马？", "tr": "Sei mai salito a cavallo?" },
      { "t": "你吃过饺子吗？", "tr": "Hai mai mangiato i ravioli?" }
    ] },
    { "gruppo": "过 e 了 a confronto", "items": [
      { "t": "我去年去了北京。", "tr": "L'anno scorso sono andato a Pechino.", "nota": "Un fatto con la sua data: 了." },
      { "t": "我吃过了，谢谢。", "tr": "Ho già mangiato, grazie.", "nota": "过了 dice «già fatto» e chiude l'invito." }
    ] }
  ],
  "contrasti": [
    { "q": "Un nuovo collega ti ha raccontato che a casa sua si fanno spesso i ravioli. Gli chiedi se li ha mai mangiati in Cina.", "opzioni": [
      { "t": "你吃过饺子吗？", "ok": true, "perche": "Chiedi se ha l'esperienza: 过 senza data." },
      { "t": "你吃了饺子吗？", "ok": false, "perche": "了 chiede se in questo pasto, in questa occasione, li ha mangiati." }
    ] },
    { "q": "Non sei mai stato in Giappone. Come lo dici?", "opzioni": [
      { "t": "我没去过日本。", "ok": true, "perche": "Il negativo di un'esperienza è 没 + verbo + 过." },
      { "t": "我不去过日本。", "ok": false, "perche": "不 non si combina con 过: nega un'intenzione, non un fatto mai avvenuto." }
    ] },
    { "q": "Dici che sei già stato a Pechino.", "opzioni": [
      { "t": "我去过北京。", "ok": true, "perche": "过 va subito dopo il verbo." },
      { "t": "我去北京过。", "ok": false, "perche": "过 non va in fondo, dopo l'oggetto: sta attaccato al verbo." }
    ] },
    { "q": "Dici che hai visto questo film tre volte.", "opzioni": [
      { "t": "这个电影我看过三次。", "ok": true, "perche": "次 viene dopo 过, e il film (oggetto noto) sta all'inizio." },
      { "t": "这个电影我看三次过。", "ok": false, "perche": "过 resta attaccato al verbo: 看过, e solo dopo viene 三次." }
    ] },
    { "q": "Ti chiedono 你喝过红酒吗？ e sì, l'hai bevuto. Come rispondi in breve?", "opzioni": [
      { "t": "喝过。", "ok": true, "perche": "Si ripete il verbo con 过." },
      { "t": "喝了。", "ok": false, "perche": "了 racconterebbe un fatto di una volta sola e non risponde alla domanda «mai?»." },
      { "t": "是。", "ok": false, "perche": "是 non risponde a una domanda con un altro verbo." }
    ] },
    { "q": "Vuoi dire con forza «Non ho mai mangiato i ravioli in vita mia».", "opzioni": [
      { "t": "我从来没吃过饺子。", "ok": true, "perche": "从来没 + verbo + 过 è il «mai» più forte." },
      { "t": "我从来不吃过饺子。", "ok": false, "perche": "Con 过 la negazione è 没; 从来不 si usa senza 过, per le abitudini (我从来不吃)." }
    ] },
    { "q": "Dici di un amico che è stato insegnante per un periodo, e adesso fa altro.", "opzioni": [
      { "t": "他当过老师。", "ok": true, "perche": "当过 dice che ha avuto quel ruolo in passato." },
      { "t": "他是过老师。", "ok": false, "perche": "是 non prende 过: serve un verbo come 当 o 做." }
    ] },
    { "q": "Dici che domani andrai a Pechino.", "opzioni": [
      { "t": "明天我去北京。", "ok": true, "perche": "Nel futuro non esiste ancora nessuna esperienza: il verbo resta semplice." },
      { "t": "明天我去过北京。", "ok": false, "perche": "过 dice un'esperienza che c'è già: non va con un fatto del futuro." }
    ] },
    { "q": "Non sei ancora stato in Cina, ma vuoi andarci. Come lo dici?", "opzioni": [
      { "t": "我还没去过中国。", "ok": true, "perche": "还没 + verbo + 过 = «non ancora», cioè l'esperienza manca." },
      { "t": "我还不去过中国。", "ok": false, "perche": "不 non si combina con 过: serve 没." }
    ] }
  ],
  "dialogo": {
    "titolo": "Un viaggio in Cina?",
    "righe": [
      { "chi": "A", "t": "你去过中国吗？", "tr": "Sei mai stato in Cina?" },
      { "chi": "B", "t": "去过两次，一次在北京，一次在上海。", "tr": "Due volte, una a Pechino e una a Shanghai." },
      { "chi": "A", "t": "你吃过饺子吗？", "tr": "Hai mai mangiato i ravioli?" },
      { "chi": "B", "t": "吃过，很好吃。你呢？", "tr": "Sì, erano buonissimi. E tu?" },
      { "chi": "A", "t": "我没去过中国，也没吃过饺子。我很想去！", "tr": "Io non sono mai stato in Cina, né ho mai mangiato i ravioli. Ci terrei tanto ad andare!" },
      { "chi": "B", "t": "那你来中国吧，我带你去。", "tr": "Allora vieni in Cina, ti ci porto io." }
    ],
    "esercizi": [
      { "q": "Quante volte è stato in Cina B?", "opzioni": [
        { "t": "Due volte.", "ok": true, "perche": "B dice 去过两次: due volte nella vita." },
        { "t": "Una volta.", "ok": false, "perche": "Le due città sono due viaggi distinti, 一次…一次." },
        { "t": "Mai.", "ok": false, "perche": "Per «mai» servirebbe 没去过." }
      ] },
      { "q": "Perché B risponde 吃过 e non 吃了?", "opzioni": [
        { "t": "Perché risponde a «hai mai mangiato?»: parla di un'esperienza, non di un pasto di oggi.", "ok": true, "perche": "过 senza data è la risposta a una domanda sull'esperienza." },
        { "t": "Perché ha mangiato solo una volta.", "ok": false, "perche": "Il numero di volte non c'entra con la scelta tra 过 e 了." },
        { "t": "Perché 了 non si usa mai nelle risposte.", "ok": false, "perche": "了 si usa nelle risposte, ma per un fatto preciso." }
      ] },
      { "q": "Che cosa dice A con 我没去过中国?", "opzioni": [
        { "t": "Non ci è mai stato.", "ok": true, "perche": "没…过 nega l'esperienza." },
        { "t": "Non vuole andarci.", "ok": false, "perche": "Subito dopo A dice 我很想去: la voglia c'è." },
        { "t": "Non è andato ieri.", "ok": false, "perche": "Non c'è nessuna data: parla della vita." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano traduce il passato prossimo sempre con 了: dice 你去了中国吗？ per «sei mai stato in Cina?», e per il negativo sceglie 不 (我不去过) oppure mette 过 in fondo alla frase (我去中国过).",
    "perche": "L'italiano usa «sono stato» sia per un evento sia per un'esperienza; il cinese le tiene separate. 过 non è il passato: è l'esperienza. Poi, in cinese 不 nega l'intenzione o l'abitudine, e 没 nega il fatto.",
    "esci": "Chiediti: c'è una data o un singolo evento (ieri, l'anno scorso, quella sera)? Allora 了. Sto dicendo «mai», «già», «una volta nella vita»? Allora 过. Il negativo di 过 è sempre 没(有), e 过 resta attaccato al verbo.",
    "esempi": [
      { "sbagliata": "你去了中国吗？", "giusta": "你去过中国吗？" },
      { "sbagliata": "我不去过中国。", "giusta": "我没去过中国。" },
      { "sbagliata": "我去中国过。", "giusta": "我去过中国。" },
      { "sbagliata": "我去三次过北京。", "giusta": "我去过三次北京。" }
    ]
  },
  "curiosi": [
    { "titolo": "Il verbo 过 e le sue parenti", "t": "Come verbo, 过 (guò) vuol dire «passare, attraversare, trascorrere»: 过马路 (attraversare la strada), 过年 (festeggiare il capodanno). Quando segue un verbo e perde il tono (guo) segna l'esperienza. In una sequenza ha anche un altro senso, «dopo aver finito»: 吃过饭再走 («vai dopo aver mangiato»)." },
    { "titolo": "吃过了吗？: un saluto", "t": "Un saluto frequente è 吃了吗？ o 你吃过了吗？ («hai già mangiato?»), una domanda su un fatto di oggi. Si risponde 吃过了, oppure 还没呢. È un modo di mostrare attenzione; non obbliga a invitare a pranzo." },
    { "titolo": "有人来过: la traccia", "t": "Quando vedi qualcosa fuori posto, 有人来过 vuol dire «qualcuno è passato di qui» e nel presente si vede il segno. È lo stesso uso di 过: il fatto è passato, ma resta una traccia." },
    { "titolo": "曾经 nello scritto", "t": "Nello scritto formale 过 si accompagna spesso a 曾经: 他曾经在北京工作过 («ha lavorato a Pechino un tempo»). Nel parlato basta il solo 过: 他在北京工作过." }
  ],
  "pragmatica": "你去过…吗？ è una domanda di conversazione tra persone che si conoscono: si parla di viaggi, di cibo, di film, e si risponde volentieri con una piccola storia. Rispondere 没去过 non è una brutta figura: di solito si aggiunge 可是我很想去. Per un invito a tavola, 谢谢，我吃过了 è il modo normale di dire «ho già mangiato».",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我没学过中文。", "opzioni": [
      { "t": "Non ho mai studiato cinese.", "ok": true, "perche": "没…过 nega l'esperienza." },
      { "t": "Oggi non studio cinese.", "ok": false, "perche": "Non c'è nessuna data: parla della vita." },
      { "t": "Non voglio studiare cinese.", "ok": false, "perche": "La volontà sarebbe 不想." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他来过这里。", "opzioni": [
      { "t": "È già stato qui.", "ok": true, "perche": "来过 dice che l'esperienza c'è." },
      { "t": "Verrà qui domani.", "ok": false, "perche": "过 non va con il futuro." },
      { "t": "Sta venendo qui adesso.", "ok": false, "perche": "Per l'azione in corso si usa 在 o 正在." }
    ] },
    { "k": "buco", "zh": "你去＿中国吗？", "tr": "Sei mai stato in Cina?", "opzioni": [
      { "t": "过", "ok": true, "perche": "过 chiede dell'esperienza." },
      { "t": "了", "ok": false, "perche": "了 chiederebbe di un singolo viaggio." },
      { "t": "在", "ok": false, "perche": "在 dice che l'azione è in corso." }
    ] },
    { "k": "buco", "zh": "我＿吃过饺子。", "tr": "Non ho mai mangiato ravioli.", "opzioni": [
      { "t": "没", "ok": true, "perche": "没 nega l'esperienza, e la traduzione dice «mai»." },
      { "t": "不", "ok": false, "perche": "不 non si combina con 过." },
      { "t": "别", "ok": false, "perche": "别 è un divieto («non farlo»)." }
    ] },
    { "k": "ordine", "t": "我从来没见过雪", "tr": "Non ho mai visto la neve." },
    { "k": "ordine", "t": "他去过两次上海", "tr": "È stato due volte a Shanghai.", "alt": ["他去过上海两次"] },
    { "k": "trasforma", "base": "我去北京。", "consegna": "Dì che ci sei già stato (un'esperienza di vita).", "accetta": ["我去过北京。"], "rifiutate": [
      { "t": "我去北京过。", "perche": "过 sta subito dopo il verbo, non in fondo." }
    ], "perche": "V + 过 + oggetto: 过 si attacca al verbo." },
    { "k": "trasforma", "base": "我吃过饺子。", "consegna": "Dì che non li hai mai mangiati.", "accetta": ["我没吃过饺子。", "我从来没吃过饺子。"], "rifiutate": [
      { "t": "我不吃过饺子。", "perche": "不 non si combina con 过: il negativo di un'esperienza è 没." }
    ], "perche": "没(有) + verbo + 过 è la negazione dell'esperienza." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Sei mai stato in Italia?»", "a": "你去过意大利吗？", "accetta": ["你有没有去过意大利？", "你去没去过意大利？", "你去过意大利没有？", "你去过意大利吗"], "perche": "Un'esperienza senza data: 去过. La domanda si fa con 吗 o con 有没有." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ho visto questo film due volte.»", "a": "这个电影我看过两次。", "accetta": ["我看过两次这个电影。", "我看过这个电影两次。", "这部电影我看过两次。", "我这个电影看过两次。"], "perche": "次 viene dopo 看过; il film può stare all'inizio o dopo il verbo." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "来，我们一起吃饭吧！" },
      { "chi": "B", "t": "谢谢，我＿，你们吃吧。", "buco": true }
    ], "opzioni": [
      { "t": "吃过了", "ok": true, "perche": "吃过了 dice «ho già mangiato» e declina l'invito." },
      { "t": "没吃过", "ok": false, "perche": "没吃过 vuol dire «non ho mai mangiato» e non risponde all'invito." },
      { "t": "吃了过", "ok": false, "perche": "了 e 过 non si scambiano di posto in questo modo." }
    ] },
    { "k": "scegli", "q": "Quale frase non si dice?", "opzioni": [
      { "t": "我是过老师。", "ok": true, "perche": "是 non prende 过: si dice 我当过老师 o 我做过老师." },
      { "t": "我当过老师。", "ok": false, "perche": "Frase corretta: ruolo avuto in passato." },
      { "t": "我没当过老师。", "ok": false, "perche": "Frase corretta: non ho mai avuto quel ruolo." }
    ] }
  ],
  "capaci": [
    "Sai dire che hai già fatto qualcosa nella vita con V + 过, senza dare una data.",
    "Sai scegliere tra 过 (esperienza) e 了 (fatto preciso, con data).",
    "Sai dire «non ho mai» con 没(有)…过 e «mai in vita mia» con 从来没…过.",
    "Sai chiedere e rispondere a «sei mai stato…?» e dire quante volte con 次."
  ],
  "glosse": {
    "我吃过饺子": "Ho mangiato i ravioli",
    "她去过巴黎": "È stata a Parigi",
    "我昨天吃了饺子": "Ieri ho mangiato i ravioli",
    "你有没有去过中国": "Sei mai stato in Cina?",
    "你去过中国没有": "Sei mai stato in Cina?",
    "去过两次北京": "Sono stato due volte a Pechino",
    "去过北京两次": "Sono stato due volte a Pechino",
    "见过他两次": "L'ho visto due volte",
    "他当过老师": "È stato insegnante",
    "他在北京工作过": "Ha lavorato a Pechino",
    "可是我很想去": "Ma ho molta voglia di andarci",
    "谢谢，我吃过了": "Grazie, ho già mangiato"
  },
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Expressing experiences with guo»: V + 过 per un'esperienza senza data, negazione con 没 + verbo + 过",
    "CC-CEDICT, voce 过 (guo, guò); Tatoeba cinese-italiano (es. 她去过巴黎, 我从没去过欧洲, 他已经吃过午饭了), consultati nei corpora locali"
  ]
};
