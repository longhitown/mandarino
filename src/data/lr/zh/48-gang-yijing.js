/* Lezione 48 · Appena e già: 刚, 刚才, 已经 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["gang-yijing"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我刚到家。", "tr": "Sono appena arrivato a casa." },
      { "t": "我刚才在家。", "tr": "Poco fa ero a casa." },
      { "t": "我已经吃了。", "tr": "Ho già mangiato." },
      { "t": "他还没来。", "tr": "Non è ancora venuto." }
    ],
    "domanda": "Guarda dove stanno 刚, 刚才, 已经 e 还没, e se in fondo compare 了. Quali parole si comportano come un avverbio davanti al verbo? Quale invece è una parola di tempo, come 昨天? Che cosa chiede 已经?",
    "risposta": "**刚**, **已经** e **还** stanno tra il soggetto e il verbo, come avverbi. **刚才** si comporta come 昨天 o 今天: è una parola di tempo che dice **quando** (poco fa) e quindi può stare anche in testa alla frase. **已经** chiede un **了** in fondo (我已经吃了), mentre 刚 non ne ha bisogno (我刚到家) e 还没 nega senza 了 (他还没来)."
  },
  "regola": {
    "enunciato": "**刚** significa «appena» e sta davanti al verbo; **刚才** significa «poco fa» ed è una parola di tempo; **已经…了** significa «già»; **还没(有)** significa «non ancora». Con 刚 il 了 di solito non serve; con 已经 il 了 finale è la regola.",
    "schema": ["chi", "刚 / 已经 / 还没", "verbo", "(oggetto)", "(了)"],
    "punti": [
      { "ok": true, "t": "**刚 + verbo** dice che l'azione è appena avvenuta rispetto al momento di chi parla: 我刚到, 他刚走. La vicinanza è soggettiva, non misurata sull'orologio: 我们昨天刚到北京 («siamo arrivati solo ieri»). 刚刚 è una variante più marcata. Davanti agli aggettivi dà la nascita di una condizione: 天刚亮." },
      { "ok": true, "t": "**刚才** è un «quando» che copre pochi minuti: 刚才你说什么？ Può stare prima del soggetto o dopo. Se l'azione è compiuta di solito prende 了 (我刚才吃了一个苹果). Può anche modificare un nome: 刚才的话 («quello che ho detto poco fa»)." },
      { "ok": true, "t": "**已经 + verbo + 了** dice che l'azione, o lo stato, c'è già: 他已经走了. Funziona con aggettivi e orari (已经很晚了, 已经十点了) e, con la negazione, dà «non più»: 我已经不喝咖啡了." },
      { "ok": true, "t": "**还没(有) + verbo** dice «non ancora»: 我还没吃饭, 他还没来. Non porta 了 e la frase si può chiudere con 呢 (他还没起床呢) per dare il senso di «sta ancora così». 还 viene prima di 没." },
      { "ok": true, "t": "**刚…就…** dice che due azioni si seguono subito: 他刚到就走了 («è arrivato e se n'è andato quasi subito»)." },
      { "ok": false, "t": "**Per negare un fatto di poco fa si usa di solito 刚才…没**: 刚才我没看见你. E dopo un tempo lontano non va 刚才: «solo ieri» è 昨天刚, non 昨天刚才. 刚 sta davanti al verbo o all'aggettivo, non in testa alla frase." }
    ]
  },
  "logica": [
    "L'italiano per «appena», «poco fa», «già» e «non ancora» usa tre avverbi più la forma del passato prossimo. Il cinese ha parole diverse perché guarda il momento di chi parla in modi diversi. **刚** misura la distanza dal presente: l'azione è così vicina da sembrare ancora «calda», che sia successa un minuto o un'ora fa. **刚才** dà invece un punto nel tempo, esattamente come 昨天 o 今天: per questo vive in posizioni da parola di tempo e ammette un nome (刚才的话).",
    "Il 了 segue la stessa logica. 了 dice «è compiuto»; 已经 sottolinea proprio che il fatto è compiuto, e quindi vuole il suo 了 finale. 刚 contiene già l'idea di compimento recente, perciò 了 non aggiunge nulla (我刚到). 还没, al contrario, dice che il fatto non c'è stato e non può portare il 了 del compimento: l'assenza di 了 è parte del significato. In sintesi: **刚** = vicino a ora; **刚才** = punto nel passato prossimo; **已经…了** = compiuto, ormai; **还没** = ancora no."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Appena (azione vicina a ora)", "刚 + verbo", "我刚到。"],
      ["Poco fa (momento di pochi minuti)", "刚才", "刚才你说什么？"],
      ["Poco fa, ho/non ho fatto", "刚才 + verbo + 了 / 刚才 + 没", "刚才我没看见你。"],
      ["Già, ormai", "已经 + … + 了", "我已经吃了。"],
      ["Ormai è tardi / sono le dieci", "已经 + aggettivo o ora + 了", "已经十点了。"],
      ["Non ancora", "还没(有) + verbo", "他还没来。"],
      ["Non più", "已经不 + verbo + 了", "我已经不喝咖啡了。"],
      ["Appena… e subito", "刚 … 就 …", "他刚到就走了。"]
    ]
  },
  "esempi": [
    { "gruppo": "刚: azione appena avvenuta", "items": [
      { "t": "我刚到，还没吃饭。", "tr": "Sono appena arrivato, non ho ancora mangiato." },
      { "t": "我们昨天刚到北京。", "tr": "Siamo arrivati a Pechino solo ieri.", "nota": "Con 刚 la vicinanza è misurata dal parlante: «solo ieri»." },
      { "t": "天刚亮，他就出门了。", "tr": "Era appena l'alba quando è uscito.", "nota": "刚 + aggettivo: la condizione è appena cominciata." },
      { "t": "他刚回家，你晚点再打电话吧。", "tr": "È appena rientrato, richiama più tardi." }
    ] },
    { "gruppo": "刚才: un momento di pochi minuti fa", "items": [
      { "t": "刚才你说什么？", "tr": "Che cosa hai detto poco fa?" },
      { "t": "我刚才在洗澡，没听到电话。", "tr": "Poco fa facevo la doccia e non ho sentito il telefono." },
      { "t": "刚才我没看见你。", "tr": "Poco fa non ti ho visto.", "nota": "La negazione è 没, senza 了." },
      { "t": "刚才的话，你别告诉别人。", "tr": "Quello che ho detto poco fa, non dirlo a nessuno.", "nota": "刚才 può precedere un nome con 的." }
    ] },
    { "gruppo": "已经…了: già, ormai", "items": [
      { "t": "他已经走了，你明天再来吧。", "tr": "È già andato via, torna domani." },
      { "t": "已经十点了，快睡觉吧。", "tr": "Sono già le dieci, va' a dormire." },
      { "t": "天已经黑了。", "tr": "Ormai è buio." },
      { "t": "我已经不喝咖啡了。", "tr": "Non bevo più caffè.", "nota": "已经不…了 = non più." }
    ] },
    { "gruppo": "还没: non ancora", "items": [
      { "t": "他还没起床。", "tr": "Non si è ancora alzato." },
      { "t": "我还没做完作业。", "tr": "Non ho ancora finito i compiti." }
    ] },
    { "gruppo": "Due parole insieme", "items": [
      { "t": "他刚到就走了。", "tr": "È arrivato e se n'è andato quasi subito." },
      { "t": "刚才我已经告诉他了。", "tr": "Poco fa gliel'ho già detto." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Siamo arrivati a Pechino solo ieri»?", "opzioni": [
      { "t": "我们昨天刚到北京。", "ok": true, "perche": "刚 si può usare con 昨天: la vicinanza è giudicata da chi parla." },
      { "t": "我们昨天刚才到北京。", "ok": false, "perche": "刚才 è un momento di pochi minuti fa; ieri è troppo lontano." }
    ] },
    { "q": "Come dici «Poco fa non ti ho visto»?", "opzioni": [
      { "t": "刚才我没看见你。", "ok": true, "perche": "刚才 è una parola di tempo e si può negare con 没." },
      { "t": "刚才我不看见你。", "ok": false, "perche": "Un fatto passato si nega con 没, non con 不: 刚才我没看见你." }
    ] },
    { "q": "Qualcuno ti chiede 你吃饭了吗？ e tu hai già mangiato.", "opzioni": [
      { "t": "我已经吃了。", "ok": true, "perche": "已经 si chiude con 了: il fatto è compiuto." },
      { "t": "我还没吃。", "ok": false, "perche": "还没 significa «non ancora»: sarebbe la risposta contraria." }
    ] },
    { "q": "Dici di una persona che non ha ancora telefonato.", "opzioni": [
      { "t": "他还没打电话。", "ok": true, "perche": "还 viene prima di 没: 还没 = non ancora." },
      { "t": "他没还打电话。", "ok": false, "perche": "L'ordine è 还没; 没还 non è una sequenza della lingua." }
    ] },
    { "q": "Che cosa vuol dire 他刚走?", "opzioni": [
      { "t": "È appena uscito.", "ok": true, "perche": "刚 + verbo: azione vicina al momento attuale." },
      { "t": "Non è ancora partito.", "ok": false, "perche": "«Non ancora» si dice 还没走, e non 刚走: sono due significati opposti." },
      { "t": "È partito da tanto tempo.", "ok": false, "perche": "刚 dice il contrario: la partenza è vicina a ora." }
    ] },
    { "q": "Dici a un amico che ormai è tardi e che bisogna andare.", "opzioni": [
      { "t": "已经很晚了，我们走吧。", "ok": true, "perche": "已经 + aggettivo + 了: la situazione è ormai così." },
      { "t": "刚很晚了，我们走吧。", "ok": false, "perche": "刚 va con le azioni; per dire «ormai» serve 已经." }
    ] },
    { "q": "Come dici «Non bevo più caffè»?", "opzioni": [
      { "t": "我已经不喝咖啡了。", "ok": true, "perche": "已经不…了 dice che prima sì e ora no." },
      { "t": "我还没喝咖啡。", "ok": false, "perche": "还没 dice «non ho ancora bevuto»: cambia il significato." }
    ] },
    { "q": "Come dici «Appena arrivato, se n'è andato»?", "opzioni": [
      { "t": "他刚到就走了。", "ok": true, "perche": "刚…就 lega due azioni che si seguono subito." },
      { "t": "他刚到才走了。", "ok": false, "perche": "才 dice che l'azione avviene tardi o con fatica, non «subito dopo»." }
    ] },
    { "q": "Vuoi dire: «Non ripetere a nessuno quello che ho detto poco fa».", "opzioni": [
      { "t": "刚才的话，别告诉别人。", "ok": true, "perche": "刚才 è una parola di tempo e può modificare un nome con 的." },
      { "t": "刚的话，别告诉别人。", "ok": false, "perche": "刚 è un avverbio e non si lega a un nome." }
    ] }
  ],
  "dialogo": {
    "titolo": "Al telefono davanti al ristorante",
    "righe": [
      { "chi": "A", "t": "喂，你到了吗？", "tr": "Pronto, sei arrivato?" },
      { "chi": "B", "t": "我刚到，在门口。", "tr": "Sono appena arrivato, sono all'ingresso." },
      { "chi": "A", "t": "我已经在里面了，菜也点好了。", "tr": "Io sono già dentro e ho anche ordinato." },
      { "chi": "B", "t": "对不起，刚才路上人很多。老王来了吗？", "tr": "Scusa, poco fa c'era molta gente per strada. Lao Wang è venuto?" },
      { "chi": "A", "t": "他还没来，刚才他说要晚一点。", "tr": "Non ancora, poco fa ha detto che farà un po' tardi." },
      { "chi": "B", "t": "那我们先吃吧。", "tr": "Allora cominciamo noi." }
    ],
    "esercizi": [
      { "q": "Perché B dice 我刚到 senza 了?", "opzioni": [
        { "t": "Perché 刚 contiene già l'idea di azione appena avvenuta.", "ok": true, "perche": "Con 刚 il 了 di compimento di solito non serve." },
        { "t": "Perché 到 è sempre senza 了.", "ok": false, "perche": "到 prende 了 in altre frasi (他已经到了): il motivo qui è un altro." },
        { "t": "Perché è una frase negativa.", "ok": false, "perche": "La frase è affermativa: non contiene nessuna negazione, e il 了 manca per un altro motivo." }
      ] },
      { "q": "Che cosa vuol dire A con 菜也点好了?", "opzioni": [
        { "t": "Ha già ordinato.", "ok": true, "perche": "点好了 = ordinare finito; il 了 finale dice che il fatto è compiuto." },
        { "t": "Non ha ancora ordinato.", "ok": false, "perche": "Per «non ancora» servirebbe 还没点." },
        { "t": "Ordinerà più tardi.", "ok": false, "perche": "Il 了 finale non guarda al futuro." }
      ] },
      { "q": "Che cosa sappiamo di Lao Wang?", "opzioni": [
        { "t": "Non è ancora arrivato.", "ok": true, "perche": "还没来 = non è ancora venuto." },
        { "t": "È già andato via.", "ok": false, "perche": "Per dire che se n'è già andato si direbbe 已经走了, con altro significato." },
        { "t": "È appena arrivato.", "ok": false, "perche": "Per dire che è appena arrivato si direbbe 刚到, ma qui è 还没来." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Gli studenti mettono 刚 dopo il verbo (我到刚), scrivono 刚才 con un tempo lontano (昨天刚才到), dimenticano il 了 dopo 已经 (我已经吃) o scambiano 还 e 没 (没还来).",
    "perche": "L'italiano dice «appena», «poco fa» e «già» come avverbi liberi, anche in coda alla frase («sono arrivato appena»). In cinese 刚 e 已经 stanno nel punto fisso tra soggetto e verbo, mentre 刚才 è una parola di tempo con le sue regole. Inoltre l'italiano usa «ancora non» e «non ancora» in modo intercambiabile; in cinese l'unico ordine è 还没.",
    "esci": "Prima il soggetto, poi la parola (刚, 已经, 还), poi il verbo. Se vuoi negare un fatto di poco fa, usa 刚才…没. Se dici già, chiudi con 了. Se dici ancora no, apri con 还没.",
    "esempi": [
      { "sbagliata": "我到刚。", "giusta": "我刚到。" },
      { "sbagliata": "刚才我不看见你。", "giusta": "刚才我没看见你。" },
      { "sbagliata": "我已经吃。", "giusta": "我已经吃了。" },
      { "sbagliata": "他没还来。", "giusta": "他还没来。" }
    ]
  },
  "curiosi": [
    { "titolo": "刚刚 e 刚好", "t": "刚刚 è la forma raddoppiata di 刚 e significa lo stesso, solo con un tono più marcato: 我刚刚到. Non va confusa con 刚好, che vuol dire «proprio, giusto, per l'appunto»: 刚好十点 («sono le dieci in punto»), 他刚好在家 («era proprio in casa»). Da solo, come carattere, 刚 significa anche «duro, saldo» (CC-CEDICT)." },
    { "titolo": "已经 senza 了", "t": "Nelle frasi isolate il 了 finale è quasi obbligatorio, ma può cadere dove la frase prosegue o dipende da un'altra, soprattutto nello scritto: 他才意识到自己已经上当. Nel parlato si sente anche già + durata: 我学中文已经两年了, dove il 了 dice «fino a ora»." },
    { "titolo": "还没…呢", "t": "Aggiungere 呢 in fondo a una frase con 还没 dà il senso di «e la cosa dura ancora»: 他还没起床呢 («dorme ancora»). Senza 呢 la frase è più neutra: 他还没起床. Per chiedere se una cosa è fatta si dice 你吃了没有？ oppure 你吃了吗？." }
  ],
  "pragmatica": "刚才 è la parola con cui si chiede scusa o si riprende un discorso: 刚才对不起, 刚才你说什么？. 刚 mette l'accento su una notizia fresca (我刚到, 我刚听说). 已经 comunica compimento, ma detto con tono secco può sembrare impaziente: 我已经说过了 («te l'ho già detto»). Con 还没 si resta più morbidi: 还没好 («non è ancora pronto») invita ad aspettare, e con 呢 suona gentile.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "刚才你说什么？", "opzioni": [
      { "t": "Che cosa hai detto poco fa?", "ok": true, "perche": "刚才 = poco fa: è una parola di tempo che guarda indietro di pochi minuti." },
      { "t": "Che cosa dirai domani?", "ok": false, "perche": "Per parlare di domani si usa 明天 e un verbo futuro, non 刚才." },
      { "t": "Che cosa dici sempre?", "ok": false, "perche": "Per dire «sempre» si userebbe 总是 o 一直, non 刚才." }
    ] },
    { "k": "scegli", "q": "In quale frase c'è un errore?", "opzioni": [
      { "t": "我昨天刚才到北京。", "ok": true, "perche": "刚才 è un momento di pochi minuti fa; con 昨天 si dice 昨天刚到." },
      { "t": "我刚到北京。", "ok": false, "perche": "La frase è corretta: 刚 + verbo dice che l'arrivo è appena avvenuto." },
      { "t": "他已经走了。", "ok": false, "perche": "La frase è corretta: 已经 + verbo + 了 dice che l'azione è già avvenuta." }
    ] },
    { "k": "buco", "zh": "他＿走了，你别等了。", "tr": "È già andato via, non aspettarlo.", "opzioni": [
      { "t": "已经", "ok": true, "perche": "已经…了 = già: il fatto è compiuto e il 了 finale lo conferma." },
      { "t": "还没", "ok": false, "perche": "还没 negherebbe: «non è ancora andato»." },
      { "t": "别", "ok": false, "perche": "别 è un divieto; qui si descrive un fatto." }
    ] },
    { "k": "buco", "zh": "他＿没吃饭。", "tr": "Non ha ancora mangiato.", "opzioni": [
      { "t": "还", "ok": true, "perche": "还没 = non ancora: la frase nega che il fatto sia avvenuto finora." },
      { "t": "刚", "ok": false, "perche": "Per «non ancora» la forma è 还没; 刚 dice «appena»." },
      { "t": "别", "ok": false, "perche": "别 è un divieto o un consiglio: qui si descrive un fatto, non si dà un ordine." }
    ] },
    { "k": "ordine", "t": "刚才你说什么", "tr": "Che cosa hai detto poco fa?", "alt": ["你刚才说什么"] },
    { "k": "ordine", "t": "天已经黑了", "tr": "Ormai è buio." },
    { "k": "trasforma", "base": "我到。", "consegna": "Dì che sei appena arrivato.", "accetta": ["我刚到。"], "rifiutate": [
      { "t": "我到刚。", "perche": "刚 va prima del verbo, tra soggetto e verbo: mai dopo il verbo." }
    ], "perche": "刚 si mette tra soggetto e verbo." },
    { "k": "trasforma", "base": "他吃饭了。", "consegna": "Dì che non ha ancora mangiato.", "accetta": ["他还没吃饭。", "他还没有吃饭。", "他还没吃饭呢。"], "rifiutate": [
      { "t": "他没还吃饭。", "perche": "L'ordine delle parole è 还没: prima 还 e poi 没, mai il contrario." }
    ], "perche": "还没 + verbo dice «non ancora» e non porta il 了." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Poco fa ho telefonato a mia madre.»", "a": "我刚才给妈妈打了电话。", "accetta": ["刚才我给妈妈打了电话。", "我刚才打电话给妈妈了。", "刚才我打电话给妈妈了。"], "perche": "刚才 è una parola di tempo; l'azione compiuta porta 了." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ho già finito i compiti.»", "a": "我已经做完作业了。", "accetta": ["我作业已经做完了。", "我已经做完了作业。", "我已经把作业做完了。"], "perche": "已经 + verbo con risultato + 了: il fatto è compiuto." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你吃饭了吗？" },
      { "chi": "B", "t": "＿吃了，你呢？", "buco": true }
    ], "opzioni": [
      { "t": "已经", "ok": true, "perche": "已经吃了 = ho già mangiato." },
      { "t": "还没", "ok": false, "perche": "还没吃了 non si dice: 还没 non vuole 了." },
      { "t": "别", "ok": false, "perche": "别 è un divieto o un consiglio: qui si descrive un fatto, non si dà un ordine." }
    ] }
  ],
  "capaci": [
    "Sai dire «sono appena arrivato» con 刚 e «poco fa» con 刚才, mettendo ciascuna parola al suo posto.",
    "Sai dire «già» con 已经…了 e «non ancora» con 还没, senza dimenticare il 了 o l'ordine di 还 e 没.",
    "Sai negare un fatto di poco fa con 刚才…没 e collegare due azioni vicine con 刚…就.",
    "Sai distinguere tra 刚 (vicinanza al presente) e 刚才 (un punto di pochi minuti fa)."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Comparing gang and gangcai»: 刚 avverbio tra soggetto e verbo, 刚才 parola di tempo di pochi minuti, 刚 di solito senza 了",
    "CC-CEDICT, voci 刚, 刚才, 刚刚, 已经; Tatoeba (cmn.tsv: es. 我刚才在洗澡, 我已经看过这部电影了, 他还没来), consultati con grep in locale"
  ]
};
