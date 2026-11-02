/* Lezione 39 · Chiedere e far fare: 请 e 让 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["rang-qing"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我请你吃饭。", "tr": "Ti invito a mangiare (offro io)." },
      { "t": "请你等一下。", "tr": "Aspetta un momento, per favore." },
      { "t": "妈妈不让我玩手机。", "tr": "La mamma non mi lascia usare il telefono." },
      { "t": "这个消息让我很高兴。", "tr": "Questa notizia mi ha fatto molto piacere." }
    ],
    "domanda": "In ogni frase c'è 请 oppure 让, seguito da una persona (你, 我) e poi da un verbo o da un aggettivo. Che ruolo ha quella persona rispetto ai due verbi? E che differenza di significato senti tra 请 e 让?",
    "risposta": "La persona sta **in mezzo** e lavora due volte: è l'oggetto di 请/让 («invito te», «la mamma lascia me») e insieme chi compie o prova la seconda azione (**tu** mangi, **io** gioco, **io** sono contento). Non c'è nessun «che» o «di»: i due pezzi si incollano. Quanto al significato, **请** è un gesto rivolto a una persona: la invita o le chiede con garbo di fare qualcosa. **让** non chiede: lascia fare (妈妈不让我…) oppure fa accadere (消息让我很高兴), e la persona dentro la frase può non aver scelto niente."
  },
  "regola": {
    "enunciato": "**请** e **让** si costruiscono allo stesso modo: chi parla, poi 请 o 让, poi la persona, poi il verbo (o l'aggettivo) che la riguarda. **请** chiede o invita con garbo; **让** lascia fare o fa fare, e dà anche il valore di «rendere» quando il secondo elemento è un sentimento.",
    "schema": ["chi", "请 / 让", "persona", "verbo · aggettivo"],
    "punti": [
      { "ok": true, "t": "**请 = chiedere con garbo e invitare**: 请坐 («si accomodi»), 请你等一下 («aspetta un momento»), 我请你吃饭 («ti invito a mangiare», e paga chi invita). Quando l'ascoltatore è la persona stessa, 你 si può togliere: 请进, 请喝茶." },
      { "ok": true, "t": "**让 = lasciare o far fare**: 让我想想 («lasciami pensare»), 妈妈不让我去 («la mamma non mi lascia andare»), 老师让我们回家 («l'insegnante ci ha detto di tornare a casa»). Se lascia o impone lo dice il contesto." },
      { "ok": true, "t": "**让 + persona + sentimento o stato** significa «rendere»: 这个消息让我很高兴, 他的话让我生气. Qui il soggetto è spesso una cosa o un fatto; con 请 non si può fare." },
      { "ok": true, "t": "**La negazione sta prima di 请/让**: 妈妈不让我去, 我没让他走, 别让他一个人去. Per un invito negativo gentile si dice 请不要…: 请不要大声说话." },
      { "ok": true, "t": "**La persona non si ripete e non c'è nessun «che»**: 我请你来(non 我请你你来, non 我请你要来). Un secondo verbo senza soggetto si riferisce alla persona di mezzo." },
      { "ok": false, "t": "**Non si scambiano**: per «lasciami pensare» si dice 让我想想, non 请我想想 (sarebbe «invitami a pensare»); per «ti invito a cena» si dice 我请你吃饭, non 我让你吃饭 (sarebbe «ti faccio mangiare» o «ti lascio mangiare»)." }
    ]
  },
  "logica": [
    "In italiano il «chiedere di» e il «lasciare che» portano una preposizione o un congiuntivo: «ti chiedo DI venire», «lascio CHE tu vada». Il cinese toglie tutto e mette le due azioni in fila: 我请你来. La persona di mezzo funziona da **cerniera**: è oggetto del primo verbo e soggetto del secondo. Per questo l'ordine non si può cambiare: 我请来你 vorrebbe dire altro, e il secondo verbo resterebbe senza chi lo compie.",
    "La differenza fra i due verbi sta nella direzione dello sforzo. 请 vuole l'**accordo** di una persona: la si invita, la si prega, e può anche rifiutare. 让 lavora sul **permesso e sull'effetto**: chi ha l'autorità lascia (o non lascia) fare, oppure una cosa produce un effetto su qualcuno. Per questo i genitori dicono 不让 («non permettere») e non 不请, e per questo le notizie 让 la gente felice e non la 请. Il dizionario dà a 让 sia «lasciare» sia «far fare»: tra i due sensi decide il contesto. Dopo un 不 il senso è quasi sempre «non lasciare» (妈妈不让我去), mentre con un sentimento è «rendere» (让我很高兴)."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa usi", "Esempio"],
    "righe": [
      ["Chiedere gentilmente a qualcuno", "请 + persona + verbo", "请你帮我一下。"],
      ["Dare un ordine gentile (a tutti, senza persona)", "请 + verbo", "请坐。"],
      ["Invitare e offrire", "请 + persona + verbo", "我请你吃饭。"],
      ["Lasciare che qualcuno faccia", "让 + persona + verbo", "让我想想。"],
      ["Non permettere", "不让 + persona + verbo", "妈妈不让我去。"],
      ["Rendere qualcuno felice, triste…", "让 + persona + aggettivo", "这个消息让我很高兴。"],
      ["Invito negativo gentile", "请不要 + verbo", "请不要大声说话。"]
    ]
  },
  "esempi": [
    { "gruppo": "请: chiedere con garbo", "items": [
      { "t": "请坐。", "tr": "Si accomodi.", "nota": "Senza persona: si parla direttamente all'altro." },
      { "t": "请你等一下。", "tr": "Aspetta un momento, per favore." },
      { "t": "请你帮我拿一下这个包。", "tr": "Mi tieni questa borsa, per favore?" },
      { "t": "请不要在这里大声说话。", "tr": "Per favore, non parlate ad alta voce qui." }
    ] },
    { "gruppo": "请: invitare e offrire", "items": [
      { "t": "今天我请你吃饭。", "tr": "Oggi ti invito a mangiare (pago io)." },
      { "t": "周末我想请朋友来家里玩。", "tr": "Nel fine settimana vorrei invitare gli amici a casa." },
      { "t": "昨天我请他喝咖啡了。", "tr": "Ieri gli ho offerto un caffè." }
    ] },
    { "gruppo": "让: lasciare, permettere", "items": [
      { "t": "让我想想。", "tr": "Lasciami pensare." },
      { "t": "妈妈不让我玩手机。", "tr": "La mamma non mi lascia usare il telefono." },
      { "t": "你让我看看你的书吧。", "tr": "Fammi vedere il tuo libro." },
      { "t": "我没让他走。", "tr": "Non l'ho lasciato andare." }
    ] },
    { "gruppo": "让: far fare, rendere", "items": [
      { "t": "老师让我们回家。", "tr": "L'insegnante ci ha detto di tornare a casa." },
      { "t": "这个消息让我很高兴。", "tr": "Questa notizia mi ha fatto molto piacere." },
      { "t": "他的话让我很生气。", "tr": "Le sue parole mi hanno fatto arrabbiare." },
      { "t": "别让孩子一个人去。", "tr": "Non lasciare andare il bambino da solo." }
    ] }
  ],
  "contrasti": [
    { "q": "Chiedi gentilmente a un collega di aiutarti. Quale frase usi?", "opzioni": [
      { "t": "请你帮我一下。", "ok": true, "perche": "请 è il verbo della richiesta gentile rivolta a una persona." },
      { "t": "让你帮我一下。", "ok": false, "perche": "让 non chiede: direbbe «lascio che tu mi aiuti» o «ti faccio aiutare»; manca la gentilezza della richiesta." }
    ] },
    { "q": "Hai bisogno di un momento. Come dici «Lasciami pensare»?", "opzioni": [
      { "t": "让我想想。", "ok": true, "perche": "让 + me + verbo: chiedi il permesso di fare tu l'azione." },
      { "t": "请我想想。", "ok": false, "perche": "请 + me vorrebbe dire che qualcuno invita o prega me di pensare: hai invertito chi fa e chi lascia." }
    ] },
    { "q": "La mamma vieta a tuo fratello di uscire. Come dici «La mamma non lo lascia uscire»?", "opzioni": [
      { "t": "妈妈不让他出去。", "ok": true, "perche": "La negazione 不 sta prima di 让, perché nega il permesso." },
      { "t": "妈妈让不他出去。", "ok": false, "perche": "不 non può comparire dopo 让: la negazione si mette davanti al verbo che nega." }
    ] },
    { "q": "Tocca a te pagare la cena degli amici. Quale frase?", "opzioni": [
      { "t": "今天我请你们吃饭。", "ok": true, "perche": "请 contiene l'idea dell'invito: chi invita offre." },
      { "t": "今天我让你们吃饭。", "ok": false, "perche": "让 direbbe «vi faccio mangiare» o «vi lascio mangiare»: non è un invito." }
    ] },
    { "q": "Racconti come hai reagito a una notizia. Quale frase?", "opzioni": [
      { "t": "这个消息让我很高兴。", "ok": true, "perche": "让 + persona + stato d'animo: la notizia produce un effetto su di me." },
      { "t": "这个消息请我很高兴。", "ok": false, "perche": "请 chiede il consenso di una persona: una notizia non può invitare, e il sentimento non si sceglie." }
    ] },
    { "q": "In biblioteca un cartello chiede educatamente di non parlare. Quale frase?", "opzioni": [
      { "t": "请不要大声说话。", "ok": true, "perche": "请不要 è la forma gentile del divieto." },
      { "t": "不请大声说话。", "ok": false, "perche": "不请 vuol dire «non invitare» e non regge un divieto: la negazione va dopo 请, sul verbo che si vieta." }
    ] },
    { "q": "Dici a un amico: «Fammi vedere la tua foto». Quale frase?", "opzioni": [
      { "t": "让我看看你的照片。", "ok": true, "perche": "让 + me + verbo: chiedi che ti lascino fare l'azione." },
      { "t": "让看看我你的照片。", "ok": false, "perche": "La persona (我) sta subito dopo 让, prima del verbo: senza di lei il secondo verbo non ha chi lo compie." }
    ] },
    { "q": "Telefoni a un amico: «Ti ho invitato a pranzo, ma non è venuto». Come dici «Io l'ho invitato»?", "opzioni": [
      { "t": "我请他吃饭了，可是他没来。", "ok": true, "perche": "请 + lui + verbo dice che l'invito è stato fatto; 了 chiude il fatto." },
      { "t": "我请吃饭他了，可是他没来。", "ok": false, "perche": "La persona deve stare tra 请 e il verbo: 请他吃饭, non 请吃饭他." }
    ] }
  ],
  "dialogo": {
    "titolo": "L'invito per il compleanno",
    "righe": [
      { "chi": "A", "t": "周六是我的生日，我想请你来我家吃饭。", "tr": "Sabato è il mio compleanno, vorrei invitarti a mangiare a casa mia." },
      { "chi": "B", "t": "太好了，谢谢你请我。要我带什么吗？", "tr": "Che bello, grazie dell'invito. Devo portare qualcosa?" },
      { "chi": "A", "t": "不用，我妈妈不让客人带东西。", "tr": "No, mia madre non vuole che gli ospiti portino niente." },
      { "chi": "B", "t": "那你让我帮你做点什么吧。", "tr": "Allora lasciami fare qualcosa per aiutarti." },
      { "chi": "A", "t": "好，那请你早点来，帮我们包饺子。", "tr": "Va bene, allora vieni presto e aiutaci a fare i ravioli." },
      { "chi": "B", "t": "没问题，我一定早点到。", "tr": "Nessun problema, arriverò presto di sicuro." }
    ],
    "esercizi": [
      { "q": "Perché B non deve portare niente?", "opzioni": [
        { "t": "Perché la mamma di A non lo permette agli ospiti.", "ok": true, "perche": "我妈妈不让客人带东西: 不让 dice che il permesso manca." },
        { "t": "Perché B non è stato invitato.", "ok": false, "perche": "B è invitato: A dice 我想请你来我家吃饭." },
        { "t": "Perché la festa è a casa di B.", "ok": false, "perche": "La festa è a casa di A: 请你来我家." }
      ] },
      { "q": "B vuole aiutare A. Quale battuta usa?", "opzioni": [
        { "t": "那你让我帮你做点什么吧。", "ok": true, "perche": "让 + me + verbo: B chiede di poter fare qualcosa." },
        { "t": "那你请我帮你做点什么吧。", "ok": false, "perche": "请 + me direbbe che A invita B: l'offerta di aiuto parte da B e chiede il permesso, quindi 让." }
      ] },
      { "q": "Che cosa chiede A a B con 请?", "opzioni": [
        { "t": "Di arrivare presto e aiutare a fare i ravioli.", "ok": true, "perche": "请你早点来，帮我们包饺子: due richieste gentili." },
        { "t": "Di portare dei ravioli da casa.", "ok": false, "perche": "A ha detto che gli ospiti non portano niente." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano costruisce la frase con la persona fuori posto o con un verbo di troppo: 我请来他, 我请你你来, 妈妈让不我去. E confonde i due verbi: 请我想想 per «lasciami pensare».",
    "perche": "In italiano il pensiero è «chiedo A te DI venire»: la preposizione e il «che» tengono insieme le due azioni. In cinese le tiene insieme la persona di mezzo, e per questo deve stare subito dopo 请/让. Quanto a 请 e 让, in italiano «lasciare» e «chiedere» sono due verbi molto lontani, ma chi traduce «per favore» con 请 finisce per usarlo anche dove il senso è «permettere».",
    "esci": "Prima di scrivere, fatti due domande. Chi fa la seconda azione? Quella persona va subito dopo 请/让, una volta sola. Sto chiedendo/invitando (请) o sto permettendo/provocando (让)? E 不, 没 e 别 vanno sempre prima di 请/让.",
    "esempi": [
      { "sbagliata": "我请来他。", "giusta": "我请他来。" },
      { "sbagliata": "妈妈让不我去。", "giusta": "妈妈不让我去。" },
      { "sbagliata": "请我想想。", "giusta": "让我想想。" }
    ]
  },
  "curiosi": [
    { "titolo": "叫, 使, 让: tre modi di far fare", "t": "Accanto a 让 esistono 叫 e 使. 叫 può avere un tono più diretto: 老师叫我们回家 è un'altra forma possibile. 使 è più formale e si usa nello scritto: 这个结果使大家很高兴. Il dizionario dà a 叫 i sensi di «gridare», «chiamare», «ordinare» e di agente di una frase passiva. 让 va bene in quasi tutti i registri e per questo è il verbo da conoscere per primo." },
    { "titolo": "让 al passivo", "t": "Nel parlato 让 può introdurre chi compie l'azione, come 被: 我的杯子让他打碎了 («il mio bicchiere è stato rotto da lui»). Il dizionario la registra come seconda funzione di 让. Per ora ti basta riconoscere il senso quando lo senti: il bicchiere è il soggetto e subisce, e chi agisce segue 让." },
    { "titolo": "请客: l'invito che si paga", "t": "请 contiene l'idea di offrire: 我请你 senza altro vuol già dire «offro io». Il verbo 请客 («offrire un pranzo agli ospiti») e la frase 我请客 dicono che paga chi invita. Tra amici, per dividere il conto si dice invece 我们各付各的, mentre chi propone di pagare dice 这次我请." }
  ],
  "pragmatica": "请 è la formula di cortesia più sicura: aggiunta a un ordine lo rende una richiesta (请坐, 请进, 请等一下). Con persone che conosci bene la si può togliere, e in un negozio o in un ufficio è quasi obbligata. 让 invece non è cortese di per sé: 让我看看! detto a un amico è una richiesta naturale, ma a una persona che non conosci va ammorbidito con 请: 请让我看看. Con i figli e in famiglia 不让 dice il divieto in modo diretto.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他的话让我很生气。", "opzioni": [
      { "t": "Le sue parole mi hanno fatto arrabbiare.", "ok": true, "perche": "让 + me + 生气: le parole producono un effetto su di me." },
      { "t": "Lui mi ha invitato a mangiare.", "ok": false, "perche": "L'invito si direbbe con 请, e nella frase non c'è nessun invito." },
      { "t": "Non mi ha lasciato parlare.", "ok": false, "perche": "Per dire «non mi ha lasciato» servirebbe 不让." }
    ] },
    { "k": "buco", "zh": "妈妈不＿我玩手机。", "tr": "La mamma non mi lascia giocare con il telefono.", "opzioni": [
      { "t": "让", "ok": true, "perche": "不让 = non permettere, non lasciare fare." },
      { "t": "请", "ok": false, "perche": "不请 = non invitare: qui si dice che la mamma non permette." },
      { "t": "给", "ok": false, "perche": "给 vuol dire «dare», non «lasciare»." }
    ] },
    { "k": "ordine", "t": "我请你吃饭", "tr": "Ti invito a mangiare." },
    { "k": "ordine", "t": "老师让我们回家", "tr": "L'insegnante ci ha detto di tornare a casa." },
    { "k": "trasforma", "base": "你帮我。", "consegna": "Trasforma la frase in una richiesta gentile con 请: «Mi aiuti, per favore?».", "accetta": ["请你帮我。", "请你帮帮我。", "请你帮我一下。", "请帮我。", "请帮我一下。"], "rifiutate": [
      { "t": "让你帮我。", "perche": "让 non chiede: lascia o fa fare; la richiesta gentile è con 请." }
    ], "perche": "请 + persona + verbo è la richiesta gentile; la persona (你) si può anche togliere." },
    { "k": "trasforma", "base": "我去。", "consegna": "Di' che tua madre non ti permette di andare, usando 让.", "accetta": ["妈妈不让我去。", "我妈妈不让我去。", "我妈不让我去。"], "rifiutate": [
      { "t": "妈妈让不我去。", "perche": "La negazione sta prima di 让, non dopo." }
    ], "perche": "不让 + persona + verbo: la mamma è soggetto, non permette, e io sono la persona di mezzo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Lasciami pensare.»", "a": "让我想想。", "accetta": ["让我想一想。", "让我想想吧。", "让我想一想吧。"], "perche": "让 + me + verbo: la persona di mezzo (我) è anche chi pensa." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ti invito a bere un caffè.»", "a": "我请你喝咖啡。", "accetta": ["我想请你喝咖啡。", "请你喝咖啡。", "我请你喝一杯咖啡。", "我请你喝杯咖啡。"], "perche": "请 + te + verbo: l'invito contiene l'idea che paga chi invita." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "周末我想＿你来我家吃饭，好吗？", "buco": true },
      { "chi": "B", "t": "好啊，谢谢你！" }
    ], "opzioni": [
      { "t": "请", "ok": true, "perche": "A invita B, e B ringrazia: è un invito, quindi 请." },
      { "t": "让", "ok": false, "perche": "让 direbbe «vorrei che tu venissi», senza il valore di invito." },
      { "t": "给", "ok": false, "perche": "给 vuol dire «dare»: non introduce un invito." }
    ] },
    { "k": "scegli", "q": "Quale di queste frasi dice che qualcuno NON ha il permesso?", "opzioni": [
      { "t": "老师不让我们说话。", "ok": true, "perche": "不让 = non lasciare, non permettere." },
      { "t": "老师请我们说话。", "ok": false, "perche": "请 invita a parlare: è il contrario di un divieto." },
      { "t": "老师让我们说话。", "ok": false, "perche": "让 senza 不 dice che l'insegnante lascia o fa parlare." }
    ] }
  ],
  "capaci": [
    "Sai chiedere qualcosa con garbo e invitare qualcuno con 请, anche togliendo la persona (请坐).",
    "Sai dire «lasciami», «non mi lascia» e «mi ha fatto» con 让, con la negazione al posto giusto.",
    "Sai scegliere tra 请 e 让 guardando se chiedi, inviti, permetti o provochi un effetto.",
    "Sai costruire la frase con la persona di mezzo, senza «che» né preposizioni."
  ],
  "fonti": [
    "CC-CEDICT, voci 请, 让 e 叫: sensi di invitare, pregare e offrire; lasciare, far fare, rendere; 让 come agente passivo; 叫 come agente passivo",
    "Tatoeba (cmn.tsv), esempi con 请你… e 让我… frasi reali con 请你… e 让我… (per esempio 让我试试, 请你不要哭), lette per controllare l'ordine delle parole"
  ]
};
