/* Lezione 40 · Due verbi in fila: andare a fare (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["liandong"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我去商店买东西。", "tr": "Vado al negozio a fare spese." },
      { "t": "他来这里学中文。", "tr": "Viene qui a studiare cinese." },
      { "t": "我坐飞机去北京。", "tr": "Vado a Pechino in aereo." },
      { "t": "他用手机看书。", "tr": "Legge con il telefono." }
    ],
    "domanda": "In ogni frase ci sono due verbi uno dopo l'altro (去…买, 来…学, 坐…去, 用…看) e nessuna parola in mezzo: né «a», né «per», né «e». Che cosa dice il primo verbo, e che cosa il secondo? E in quale ordine stanno?",
    "risposta": "Il **secondo verbo** dice l'azione principale (comprare, studiare, andare, leggere); il **primo** la prepara: dice dove si va (去商店, 来这里), con che mezzo (坐飞机) o con che strumento (用手机). I verbi stanno **nell'ordine in cui accadono**: prima si va al negozio e poi si compra, prima si sale sull'aereo e poi si va a Pechino. Il cinese non scrive nessuna parola di collegamento: l'ordine basta."
  },
  "regola": {
    "enunciato": "Quando una stessa persona compie due azioni collegate, il cinese le mette **una dopo l'altra, nell'ordine del tempo, senza congiunzioni**. Lo schema è: chi + verbo 1 (+ oggetto) + verbo 2 (+ oggetto). Il primo verbo indica lo scopo del movimento, il mezzo o lo strumento; il secondo, ciò che si fa davvero.",
    "schema": ["chi", "verbo 1", "(luogo · mezzo)", "verbo 2", "che cosa"],
    "punti": [
      { "ok": true, "t": "**Scopo**: 去/来 + luogo + azione. 我去商店买东西 («vado a comprare»), 他来这里学中文 («viene a studiare»). In italiano serve «a» o «per»; in cinese no." },
      { "ok": true, "t": "**Mezzo o strumento**: 坐/骑/开/用/走 + ... + azione. 我坐飞机去北京, 他骑车上班, 我用手机看书. Il mezzo viene prima, perché prima si sale sul mezzo e poi si va." },
      { "ok": true, "t": "**Negazione, modali e parole di tempo stanno prima del primo verbo**: 我没去商店买东西, 我想去买东西, 明天我去商店买东西. Valgono per tutta la frase." },
      { "ok": true, "t": "**了 e 过 stanno di norma sull'ultimo verbo**, quello di cui racconti il risultato: 我去商店买了一本书, 我去北京学过中文. Con un fatto passato si può avere anche 了 in fondo: 昨天我去朋友家吃饭了." },
      { "ok": true, "t": "**La persona che agisce è una sola**: chi va è anche chi compra, chi studia, chi legge. Quando la seconda azione è di un'altra persona si usa la costruzione con 请/让 (la lezione precedente)." },
      { "ok": false, "t": "**Non si scambia l'ordine e non si inserisce nessuna congiunzione**: 我买东西去商店 non vuol dire «vado a comprare», e 我去商店和买东西 è sbagliato, perché 和 unisce nomi, non verbi." }
    ]
  },
  "logica": [
    "L'italiano ha bisogno di un legame esplicito tra due verbi: «vado A comprare», «vengo PER studiare», «vado a Pechino IN aereo», «leggo CON il telefono». Il cinese lascia questo compito all'**ordine**: i verbi si leggono come una piccola sequenza di eventi, e il rapporto tra loro (scopo, mezzo, successione) si capisce da ciò che significano. È la stessa logica per cui in cinese la frase non porta il tempo nel verbo: l'informazione viene dalla posizione delle parole.",
    "Per questo l'ordine non si può invertire. 我去商店买东西 racconta due eventi nel loro ordine reale. 我买东西去商店 farebbe leggere prima l'acquisto e poi il movimento: nel parlato suona sbagliato. Lo stesso vale per il mezzo: 我坐飞机去北京 mette il volo prima dell'arrivo. Se dici 我去北京坐飞机, la frase esiste ma cambia significato: «vado a Pechino (per) prendere un aereo». Nei verbi di movimento il secondo verbo è quello che porta il peso della frase."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Primo verbo", "Che cosa dice", "Esempio"],
    "righe": [
      ["去 · 来 + luogo", "dove vai a fare la cosa (scopo)", "他来这里学中文。"],
      ["坐 · 骑 · 开", "con quale mezzo ti sposti", "我坐飞机去北京。"],
      ["走路", "come ti sposti (a piedi)", "我们走路回家。"],
      ["用 + oggetto", "con quale strumento agisci", "他用手机看书。"],
      ["回 + luogo", "dove torni a fare la cosa", "她回家做饭。"]
    ]
  },
  "esempi": [
    { "gruppo": "Andare o venire per fare qualcosa", "items": [
      { "t": "我去商店买东西。", "tr": "Vado al negozio a fare spese." },
      { "t": "他来这里学中文。", "tr": "Viene qui a studiare cinese." },
      { "t": "周末我们去公园玩。", "tr": "Nel fine settimana andiamo al parco a divertirci." },
      { "t": "她回家做饭了。", "tr": "È tornata a casa a cucinare.", "nota": "回 + luogo funziona come 去 e 来: dice dove si va a fare la cosa." }
    ] },
    { "gruppo": "Il mezzo e lo strumento", "items": [
      { "t": "我坐飞机去北京。", "tr": "Vado a Pechino in aereo." },
      { "t": "我每天骑车上班。", "tr": "Ogni giorno vado al lavoro in bicicletta." },
      { "t": "我们走路回家。", "tr": "Torniamo a casa a piedi." },
      { "t": "他用手机看书。", "tr": "Legge con il telefono." }
    ] },
    { "gruppo": "Tempo, 了 e domanda", "items": [
      { "t": "我去商店买了一本书。", "tr": "Sono andato al negozio e ho comprato un libro.", "nota": "了 sta sull'ultimo verbo, quello dell'acquisto." },
      { "t": "昨天我去朋友家吃饭了。", "tr": "Ieri sono andato a mangiare a casa di un amico." },
      { "t": "你怎么去学校？", "tr": "Come vai a scuola?", "nota": "怎么 + verbo di movimento chiede il mezzo." }
    ] },
    { "gruppo": "Negazione e volontà", "items": [
      { "t": "我没去商店买东西。", "tr": "Non sono andato a fare spese." },
      { "t": "我想去图书馆看书。", "tr": "Vorrei andare in biblioteca a leggere." },
      { "t": "明天我不来这里上班。", "tr": "Domani non vengo qui al lavoro." }
    ] }
  ],
  "contrasti": [
    { "q": "Dici che andrai a Pechino in aereo. Quale frase?", "opzioni": [
      { "t": "我坐飞机去北京。", "ok": true, "perche": "Il mezzo (坐飞机) viene prima del movimento (去北京), come nella realtà." },
      { "t": "我去北京坐飞机。", "ok": false, "perche": "La frase esiste, ma significa «vado a Pechino per prendere un aereo»: il mezzo è diventato lo scopo." }
    ] },
    { "q": "Vai al negozio per comprare qualcosa. Come lo dici?", "opzioni": [
      { "t": "我去商店买东西。", "ok": true, "perche": "Prima si va, poi si compra: i verbi seguono l'ordine del tempo." },
      { "t": "我买东西去商店。", "ok": false, "perche": "L'ordine è invertito: leggeresti prima l'acquisto e poi il movimento." }
    ] },
    { "q": "Dici che NON andrai al ristorante a mangiare. Quale frase?", "opzioni": [
      { "t": "我不去饭馆吃饭。", "ok": true, "perche": "不 sta prima del primo verbo e nega tutta la sequenza: non vado a mangiare." },
      { "t": "我去饭馆不吃饭。", "ok": false, "perche": "Questa frase significa «vado al ristorante e non mangio»: nega solo il secondo verbo, quindi dice altro." }
    ] },
    { "q": "Vuoi dire «Voglio andare a comprare un libro». Quale frase?", "opzioni": [
      { "t": "我想去买书。", "ok": true, "perche": "Il modale 想 sta prima del primo verbo, perché vale per tutta la sequenza." },
      { "t": "我去想买书。", "ok": false, "perche": "想 non può stare tra i due verbi di movimento e scopo: il modale va prima del primo verbo." }
    ] },
    { "q": "Dici che leggi usando il telefono. Quale frase?", "opzioni": [
      { "t": "我用手机看书。", "ok": true, "perche": "用 + strumento viene prima dell'azione che lo usa." },
      { "t": "我看书用手机。", "ok": false, "perche": "Lo strumento viene dopo l'azione, contro l'ordine del tempo: sarebbe una frase incompleta." }
    ] },
    { "q": "Vai a casa e poi cucini. Quale frase?", "opzioni": [
      { "t": "我回家做饭。", "ok": true, "perche": "Le due azioni stanno in fila: prima torni, poi cucini." },
      { "t": "我回家和做饭。", "ok": false, "perche": "和 unisce nomi, non verbi: tra i due verbi non serve nessuna parola." }
    ] },
    { "q": "Sei a Pechino e scrivi a un amico: «Vieni a Pechino a trovarmi». Quale frase?", "opzioni": [
      { "t": "你来北京看我。", "ok": true, "perche": "来 indica il movimento verso chi parla: tu sei già a Pechino." },
      { "t": "你去北京看我。", "ok": false, "perche": "去 indica un movimento lontano da chi parla: chi scrive da Pechino direbbe 来." }
    ] },
    { "q": "Domani andrai a comprare il pane. Dove metti 明天?", "opzioni": [
      { "t": "明天我去商店买面包。", "ok": true, "perche": "La parola di tempo sta prima della sequenza e vale per entrambe le azioni." },
      { "t": "我去商店明天买面包。", "ok": false, "perche": "明天 non può stare nel mezzo della sequenza: va prima del soggetto o prima del primo verbo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Che cosa fai nel fine settimana?",
    "righe": [
      { "chi": "A", "t": "周末你做什么？", "tr": "Che cosa fai nel fine settimana?" },
      { "chi": "B", "t": "我想去图书馆看书，下午去朋友家吃饭。你呢？", "tr": "Voglio andare in biblioteca a leggere, e nel pomeriggio a mangiare da un amico. E tu?" },
      { "chi": "A", "t": "我要回老家看爷爷奶奶。", "tr": "Devo tornare al mio paese a trovare i nonni." },
      { "chi": "B", "t": "你坐火车回去吗？", "tr": "Ci torni in treno?" },
      { "chi": "A", "t": "不，我开车回去。", "tr": "No, ci torno in macchina." },
      { "chi": "B", "t": "路上小心。", "tr": "Fai attenzione in viaggio." }
    ],
    "esercizi": [
      { "q": "Come va B dall'amico?", "opzioni": [
        { "t": "Non lo dice: dice solo che ci va a mangiare.", "ok": true, "perche": "B dice 去朋友家吃饭: il mezzo non è nominato." },
        { "t": "In treno.", "ok": false, "perche": "Il treno lo nomina B nella domanda ad A, non per sé." },
        { "t": "In macchina.", "ok": false, "perche": "La macchina è il mezzo di A, che va al paese." }
      ] },
      { "q": "Quale battuta di A dice che torna al paese in macchina?", "opzioni": [
        { "t": "我开车回去。", "ok": true, "perche": "开车 (il mezzo) viene prima di 回去 (il movimento)." },
        { "t": "我回去开车。", "ok": false, "perche": "Direbbe che torna indietro per guidare: il mezzo non può seguire il movimento." }
      ] },
      { "q": "Che cosa va a fare A al paese?", "opzioni": [
        { "t": "Va a trovare i nonni.", "ok": true, "perche": "回老家看爷爷奶奶: tornare (回) e vedere (看) i nonni." },
        { "t": "Va a studiare.", "ok": false, "perche": "Lo studio non è nominato nel dialogo." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette una parola di collegamento tra i due verbi, o ne inverte l'ordine: 我去商店和买东西, 我买东西去商店, 我去北京坐飞机.",
    "perche": "In italiano due verbi hanno bisogno di «a», «per» o «e», e lo scopo può arrivare alla fine («vado a Pechino in aereo»). In cinese i legami li fa l'ordine del tempo: il mezzo e il luogo di partenza vengono prima, l'azione principale viene dopo.",
    "esci": "Prima di scrivere, ripercorri la scena in ordine: che cosa succede per primo? Quel verbo va per primo. Poi controlla che tra i due verbi non ci sia nessuna parola, e che negazione, 想 e parole di tempo stiano prima del primo verbo.",
    "esempi": [
      { "sbagliata": "我买东西去商店。", "giusta": "我去商店买东西。" },
      { "sbagliata": "我去商店和买东西。", "giusta": "我去商店买东西。" },
      { "sbagliata": "我去北京坐飞机。", "giusta": "我坐飞机去北京。" }
    ]
  },
  "curiosi": [
    { "titolo": "连动句: il nome di questa costruzione", "t": "I manuali cinesi la chiamano 连动句, «frase a verbi concatenati» (in inglese serial verb construction). Una persona fa più azioni di seguito, senza congiunzioni." },
    { "titolo": "有 + nome + azione", "t": "Una variante molto comune usa 有 come primo verbo: 我有一个问题想问你 («ho una domanda da farti»), 我没有时间去 («non ho tempo di andare»). Il nome dopo 有 è l'oggetto, e il verbo che segue dice che cosa si fa con quel nome. Come nelle altre frasi, la negazione (没有) sta prima del primo verbo." },
    { "titolo": "为了: lo scopo detto per primo", "t": "Se vuoi mettere in evidenza lo scopo, il cinese lo anticipa con 为了: 为了学中文，他来中国了. Con 是 si può anche chiudere la frase: 他来中国是为了学中文. In entrambi i casi non si tratta di verbi in fila, ma di una frase con lo scopo esplicito." }
  ],
  "pragmatica": "La costruzione è neutra e si usa in qualsiasi registro, dal parlato quotidiano alla scrittura. Nelle domande sul mezzo si dice 怎么去? e si risponde con il mezzo davanti: 坐地铁去. Con i verbi 去 e 来 il luogo si nomina direttamente (去商店, 来这里): non serve nessuna preposizione tra il verbo e il luogo.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他来这里学中文。", "opzioni": [
      { "t": "Viene qui a studiare cinese.", "ok": true, "perche": "来这里 + 学中文: viene qui con lo scopo di studiare." },
      { "t": "Studia cinese e poi viene qui.", "ok": false, "perche": "L'ordine dei verbi è prima 来, poi 学: prima viene, poi studia." },
      { "t": "Non viene qui a studiare.", "ok": false, "perche": "Non c'è nessuna negazione nella frase." }
    ] },
    { "k": "buco", "zh": "我＿手机看书。", "tr": "Leggo con il telefono.", "opzioni": [
      { "t": "用", "ok": true, "perche": "用 introduce lo strumento: con il telefono." },
      { "t": "对", "ok": false, "perche": "对 vuol dire «verso, a»: non indica uno strumento." },
      { "t": "请", "ok": false, "perche": "请 vuol dire «invitare, chiedere con garbo»: non si usa per lo strumento." }
    ] },
    { "k": "ordine", "t": "我去商店买东西", "tr": "Vado al negozio a fare spese." },
    { "k": "ordine", "t": "我坐飞机去北京", "tr": "Vado a Pechino in aereo." },
    { "k": "trasforma", "base": "我去商店，我买东西。", "consegna": "Riunisci le due azioni in una sola frase, con i verbi in fila: «Vado al negozio a comprare».", "accetta": ["我去商店买东西。", "我去商店买东西了。"], "rifiutate": [
      { "t": "我买东西去商店。", "perche": "L'ordine è invertito: prima si va, poi si compra." }
    ], "perche": "Il soggetto non si ripete e i due verbi stanno in fila nell'ordine del tempo." },
    { "k": "trasforma", "base": "我去北京，我坐飞机。", "consegna": "Riunisci le due azioni dicendo che il mezzo è l'aereo: «Vado a Pechino in aereo».", "accetta": ["我坐飞机去北京。"], "rifiutate": [
      { "t": "我去北京坐飞机。", "perche": "Significherebbe «vado a Pechino a prendere un aereo»: cambia il senso." }
    ], "perche": "Il mezzo viene prima del movimento: prima si sale sull'aereo, poi si va." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Non sono andato a fare spese.»", "a": "我没去商店买东西。", "accetta": ["我没去买东西。", "我没有去买东西。", "我没有去商店买东西。"], "perche": "没 nega il fatto e sta prima del primo verbo; la sequenza intera segue." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Torno a casa in metropolitana.»", "a": "我坐地铁回家。", "accetta": ["我坐地铁回家去。", "我坐地铁回去。", "我坐地铁回家了。"], "perche": "坐地铁 è il mezzo e viene prima del movimento 回家." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你怎么去学校？" },
      { "chi": "B", "t": "我＿自行车去。", "buco": true }
    ], "opzioni": [
      { "t": "骑", "ok": true, "perche": "骑 si usa per la bicicletta: 骑自行车去, il mezzo prima del movimento." },
      { "t": "坐", "ok": false, "perche": "坐 si usa con i mezzi su cui si siede, come l'aereo o la metropolitana, non con la bicicletta." },
      { "t": "看", "ok": false, "perche": "看 vuol dire «guardare»: non è un mezzo di trasporto." }
    ] },
    { "k": "scegli", "q": "Quale di queste frasi dice che vai a Pechino per prendere un aereo, non che ci vai in aereo?", "opzioni": [
      { "t": "我去北京坐飞机。", "ok": true, "perche": "Qui 去北京 viene prima e 坐飞机 dopo: l'aereo è lo scopo del viaggio." },
      { "t": "我坐飞机去北京。", "ok": false, "perche": "Questa dice che l'aereo è il mezzo con cui vai a Pechino." },
      { "t": "我去北京和坐飞机。", "ok": false, "perche": "和 non unisce due verbi: la frase non esiste." }
    ] }
  ],
  "capaci": [
    "Sai dire «vado a fare…» e «vengo a fare…» con 去 e 来 senza preposizioni.",
    "Sai indicare il mezzo e lo strumento (坐, 骑, 开, 用) prima dell'azione principale.",
    "Sai mettere negazione, modali e parole di tempo prima del primo verbo.",
    "Sai evitare l'ordine invertito e la congiunzione 和 tra due verbi."
  ],
  "glosse": {
    "他骑车上班": "Va al lavoro in bicicletta",
    "我用手机看书": "Leggo con il cellulare",
    "我想去买东西": "Voglio andare a fare spese",
    "明天我去商店买东西": "Domani vado al negozio a fare spese",
    "我去北京学过中文": "Sono andato a Pechino a studiare cinese",
    "为了学中文，他来中国了": "È venuto in Cina per studiare cinese",
    "他来中国是为了学中文": "È venuto in Cina per studiare cinese"
  },
  "fonti": [
    "CC-CEDICT, voci 坐 e 用: «prendere (un autobus, un aereo)» per 坐, e uso di 用 come introduttore dello strumento",
    "Tatoeba (cmn.tsv), frasi reali con 我坐飞机去… e 我去买…, lette per controllare l'ordine mezzo prima del movimento"
  ]
};
