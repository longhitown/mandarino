/* Lezione 24 · Sto facendo: 正在 … 呢 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["incorso"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我在吃饭。", "tr": "Sto mangiando." },
      { "t": "他正在开会。", "tr": "Sta partecipando a una riunione." },
      { "t": "妈妈做饭呢。", "tr": "La mamma sta cucinando." },
      { "t": "我没在看电视。", "tr": "Non sto guardando la TV." }
    ],
    "domanda": "Che cosa sta prima del verbo nelle prime due frasi? Che cosa c'è in fondo alla terza? E come cambia la frase quando si nega, nella quarta?",
    "risposta": "Prima del verbo c'è **在** (nella seconda **正在**): è il segnale di «sto facendo adesso». In fondo alla terza c'è **呢**, che da solo, con il contesto, basta a dire che l'azione è in corso. Nella quarta la negazione è **没** (没在 + verbo): il verbo resta com'è, senza 了."
  },
  "regola": {
    "enunciato": "Per dire che un'azione è **in corso** si mette **在** o **正在** davanti al verbo, e spesso **呢** in fondo alla frase: 我在吃饭, 他正在开会, 妈妈在做饭呢. Il verbo non cambia forma. Il momento (adesso, ieri, domani) lo decidono il contesto e le parole di tempo.",
    "schema": ["chi", "(正)在", "verbo", "(cosa)", "呢"],
    "punti": [
      { "ok": true, "t": "**在** è la forma di tutti i giorni: 我在吃饭, 你在做什么？ **正在** è più esplicita: dice che l'azione è in corso proprio ora, e si usa per precisare il momento: 他正在开会。" },
      { "ok": true, "t": "**呢** in fondo dà alla frase il tono di «sto facendo proprio adesso» ed è facoltativa: 我在看书呢. Nel parlato 呢 può restare da sola, quando il contesto è chiaro: 他睡觉呢, 妈妈做饭呢." },
      { "ok": true, "t": "**Il momento viene dal contesto**: 昨天你打电话的时候，我正在洗澡 («ieri, quando hai telefonato, stavo facendo la doccia»); 明天八点我在上课 («domani alle otto sarò a lezione»)." },
      { "ok": true, "t": "**Negazione con 没**: 我没在看电视, 他没在做饭, e sempre senza 了. Una frase negativa non prende 正在: si dice 没在, non 没正在. Si sente anche 不在 + verbo, ma 没在 è la forma con cui si nega il progressivo (esempio: 你没在吃任何东西)." },
      { "ok": true, "t": "**Doppio 在**: 他在家 («è a casa») usa 在 come verbo di luogo; 他在吃饭 usa 在 come segnale di azione in corso; 他在家吃饭 dice di solito «mangia a casa» (luogo + verbo); con 呢 in fondo, 他在家吃饭呢, diventa «sta mangiando a casa»." },
      { "ok": false, "t": "**Non per verbi di stato o di cognizione**: 是, 有, 喜欢, 知道, 像, 懂 non si dicono con 在: 我知道答案, mai 我在知道答案. E non si aggiunge 了 per dire «sto mangiando»: 我吃饭了 vuol dire «ho mangiato»." }
    ]
  },
  "logica": [
    "In italiano «sto mangiando» si forma con una perifrasi, mentre per l'abitudine e per il presente generico basta il presente semplice. Il cinese non ha un tempo presente nel verbo: 吃 è sempre 吃. Per dire «in questo momento» si aggiunge **prima** del verbo una parola che mette l'azione sotto la lente: 在. 在 è il verbo «essere in, trovarsi in»; davanti a un altro verbo vuol dire «essere dentro a quell'azione». È la stessa parola di 他在家, ed è questo il motivo per cui si vede bene la differenza tra «è a casa» e «sta mangiando».",
    "Il progressivo cinese non dice «ora»: dice «dentro l'azione». Per questo funziona nel passato (昨天…的时候, 我正在洗澡) e nel futuro (明天八点我在上课) esattamente come nel presente. E si distingue dagli altri aspetti: 了 guarda l'azione a cose fatte (我吃了饭), 过 guarda l'esperienza (我吃过北京烤鸭), 着 guarda lo stato che resta (门开着), 在 guarda l'azione mentre si svolge."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Sto facendo (forma di tutti i giorni)", "在 + verbo", "我在吃饭。"],
      ["Sto facendo proprio adesso", "正在 + verbo", "他正在开会。"],
      ["Sto facendo, con tono del parlato", "(在) + verbo + 呢", "妈妈在做饭呢。"],
      ["Non sto facendo", "没(在) + verbo", "我没在看电视。"],
      ["Ho fatto (azione compiuta)", "verbo + 了", "我吃饭了。"],
      ["Lo stato che dura", "verbo + 着", "门开着。"],
      ["Ancora in corso", "还在 + verbo", "他还在睡觉。"]
    ]
  },
  "esempi": [
    { "gruppo": "Che cosa stai facendo?", "items": [
      { "t": "你在做什么呢？", "tr": "Che cosa stai facendo?" },
      { "t": "我在学中文呢。", "tr": "Sto studiando cinese." },
      { "t": "你在看电视吗？", "tr": "Stai guardando la TV?" },
      { "t": "没有，我在看书呢。", "tr": "No, sto leggendo." }
    ] },
    { "gruppo": "Proprio adesso: 正在", "items": [
      { "t": "他正在开会。", "tr": "È in riunione." },
      { "t": "孩子们正在学校上课。", "tr": "I bambini sono a scuola, a lezione." },
      { "t": "妈妈正在做饭。", "tr": "La mamma sta cucinando." }
    ] },
    { "gruppo": "Solo 呢: il tono del parlato", "items": [
      { "t": "他睡觉呢。", "tr": "Sta dormendo." },
      { "t": "别说话，爸爸看书呢。", "tr": "Non parlare, papà sta leggendo." }
    ] },
    { "gruppo": "Nel passato e nel futuro", "items": [
      { "t": "昨天你给我打电话的时候，我正在洗澡。", "tr": "Ieri, quando mi hai telefonato, stavo facendo la doccia." },
      { "t": "我回家的时候，妈妈还在做饭。", "tr": "Quando sono tornato a casa, la mamma stava ancora cucinando." },
      { "t": "明天晚上八点我在开会，不能去。", "tr": "Domani sera alle otto sarò in riunione, non posso venire." }
    ] },
    { "gruppo": "Negazione", "items": [
      { "t": "我没在看电视，我在写作业。", "tr": "Non sto guardando la TV, sto facendo i compiti." },
      { "t": "他没在做饭。", "tr": "Lui non sta cucinando." }
    ] },
    { "gruppo": "Doppio 在: luogo e azione", "items": [
      { "t": "他在家吃饭呢。", "tr": "Sta mangiando a casa.", "nota": "在家 dice il luogo; è 呢 in fondo a dire che l'azione è in corso adesso." }
    ] }
  ],
  "contrasti": [
    { "q": "Un amico ti telefona e chiede che fai; tu stai mangiando proprio ora.", "opzioni": [
      { "t": "我在吃饭呢。", "ok": true, "perche": "在 + verbo (+ 呢) dice che l'azione è in corso adesso." },
      { "t": "我吃饭了。", "ok": false, "perche": "吃饭了 dice che hai mangiato (azione compiuta), non che stai mangiando." }
    ] },
    { "q": "Come dici «Non sto guardando la TV»?", "opzioni": [
      { "t": "我没在看电视。", "ok": true, "perche": "Il progressivo si nega con 没在." },
      { "t": "我不看电视。", "ok": false, "perche": "不 + verbo nega un'abitudine o una volontà («non guardo la TV»), non un'azione in corso adesso: il progressivo si nega con 没在." }
    ] },
    { "q": "«Ieri, quando mi hai telefonato, stavo facendo la doccia.» Quale frase?", "opzioni": [
      { "t": "昨天你给我打电话的时候，我正在洗澡。", "ok": true, "perche": "Il progressivo funziona anche nel passato: il momento lo dice 昨天…的时候." },
      { "t": "昨天你给我打电话的时候，我洗澡了。", "ok": false, "perche": "洗澡了 racconta una doccia fatta (un evento), non l'azione in corso al momento della telefonata." }
    ] },
    { "q": "Come dici «Non sto studiando in questo momento», in modo esplicito?", "opzioni": [
      { "t": "我现在没在学习。", "ok": true, "perche": "Con la negazione si usa 没(在), senza 正." },
      { "t": "我现在没正在学习。", "ok": false, "perche": "正在 non si nega: 没 si lega a 在, e 正 non compare." }
    ] },
    { "q": "Come dici «So la risposta»?", "opzioni": [
      { "t": "我知道答案。", "ok": true, "perche": "知道 è un verbo di cognizione: non descrive un'azione che si svolge, quindi niente 在." },
      { "t": "我在知道答案。", "ok": false, "perche": "在 si mette davanti ad azioni che si svolgono nel tempo; 知道 è uno stato mentale." }
    ] },
    { "q": "Sono le undici e il bambino dorme ancora: «Sta ancora dormendo».", "opzioni": [
      { "t": "他还在睡觉。", "ok": true, "perche": "还在 + verbo dice che l'azione continua ancora." },
      { "t": "他还睡觉了。", "ok": false, "perche": "了 chiude l'azione; con 还 non rende «sta ancora dormendo»." }
    ] },
    { "q": "Come chiedi «Che cosa stai facendo?»", "opzioni": [
      { "t": "你在做什么呢？", "ok": true, "perche": "在 prima del verbo, 呢 in fondo: la domanda più naturale su ciò che l'altro fa ora." },
      { "t": "你做什么在呢？", "ok": false, "perche": "在 sta prima del verbo, non dopo l'oggetto." }
    ] },
    { "q": "Sai già che domani alle otto sarai a lezione: «Domani alle otto sarò a lezione».", "opzioni": [
      { "t": "明天八点我在上课。", "ok": true, "perche": "在 + verbo vale per qualsiasi momento: il futuro lo dice 明天八点." },
      { "t": "明天八点我上课了。", "ok": false, "perche": "了 di fine frase segnala un cambiamento o un fatto compiuto, non il progressivo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Una telefonata",
    "righe": [
      { "chi": "A", "t": "喂，你在家吗？", "tr": "Pronto, sei a casa?" },
      { "chi": "B", "t": "在，我在看电视呢。", "tr": "Sì, sto guardando la TV." },
      { "chi": "A", "t": "我现在去你那儿。你吃饭了吗？", "tr": "Adesso vengo da te. Hai già mangiato?" },
      { "chi": "B", "t": "还没，妈妈正在做饭呢，你来一起吃吧。", "tr": "Non ancora, la mamma sta cucinando. Vieni a mangiare con noi." },
      { "chi": "A", "t": "好，我马上到。", "tr": "Bene, arrivo subito." }
    ],
    "esercizi": [
      { "q": "Nel dialogo ci sono due 在: «你在家吗？» e «我在看电视». Che cosa fanno?", "opzioni": [
        { "t": "Il primo dice dove si trova, il secondo che l'azione è in corso.", "ok": true, "perche": "In 在家 è un verbo di luogo; in 在看电视 segna l'azione che si svolge." },
        { "t": "Fanno la stessa cosa in tutti e due i casi.", "ok": false, "perche": "Sono due funzioni diverse della stessa parola." },
        { "t": "Il secondo dice che B ha già guardato la TV.", "ok": false, "perche": "Il passato compiuto lo direbbe 了, non 在." }
      ] },
      { "q": "Che cosa dice B con 还没?", "opzioni": [
        { "t": "Che non ha ancora mangiato.", "ok": true, "perche": "还没 = non ancora: la domanda 你吃饭了吗 chiedeva se aveva mangiato." },
        { "t": "Che non mangia mai.", "ok": false, "perche": "还没 riguarda questo pasto, non un'abitudine." }
      ] },
      { "q": "Perché la madre di B è presentata con 正在做饭呢?", "opzioni": [
        { "t": "Perché sta cucinando proprio in quel momento.", "ok": true, "perche": "正在 + 呢 insistono sul presente: la mamma è dentro l'azione." },
        { "t": "Perché ha finito di cucinare.", "ok": false, "perche": "Per un'azione finita servirebbe 了." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi studia il cinese nega il progressivo con 不 (我不在看电视, meno adatta a dire che l'azione non è in corso), mette 正在 dopo 没 (我没正在吃饭), usa 在 con verbi di cognizione (我在知道答案) e mette 在 dopo l'oggetto (你做什么在).",
    "perche": "In italiano la negazione del progressivo è sempre «non» («non sto guardando»), quindi si cerca un 不. In cinese 不 nega la volontà o un fatto abituale; per un'azione non in corso la forma normale è 没. Il sistema è: 在 è un segnale che sta prima del verbo, e vale per le azioni che si svolgono nel tempo, non per gli stati.",
    "esci": "Prima di scrivere chiediti: quest'azione si svolge nel tempo (mangiare, leggere, parlare)? Allora 在 prima del verbo. Se la nego, uso 没在. Se il verbo è uno stato (sapere, essere, piacere), non uso 在.",
    "esempi": [
      { "sbagliata": "我不在看电视。", "giusta": "我没在看电视。" },
      { "sbagliata": "我没正在吃饭。", "giusta": "我没在吃饭。" },
      { "sbagliata": "我在知道答案。", "giusta": "我知道答案。" },
      { "sbagliata": "你做什么在呢？", "giusta": "你在做什么呢？" }
    ]
  },
  "curiosi": [
    { "titolo": "正在: «proprio» più «essere in»", "t": "正 vuol dire «proprio, esattamente» e 在 «essere in, trovarsi in»: 正在 è alla lettera «trovarsi proprio dentro». CC-CEDICT lo spiega «essere in corso di (fare qualcosa)». Il verbo di luogo 在 è anche il progressivo di tutti i giorni: l'azione è un posto in cui ci si trova." },
    { "titolo": "呢, una particella con più lavori", "t": "Il dizionario CC-CEDICT registra per 呢 più usi: nelle domande di rimando («e tu?» 你呢？), per dire che una situazione continua ancora, e per segnare una breve pausa o un'enfasi. L'uso di questa lezione è il secondo: l'azione c'è ancora, adesso." },
    { "titolo": "Progressivo e abitudine", "t": "我在学中文 può dire che stai studiando in questo momento, ma anche in questo periodo («in questi mesi studio cinese»), come in italiano «sto studiando cinese». Se vuoi essere sicuro del «proprio adesso» aggiungi 正 o 现在: 我现在正在学中文呢." }
  ],
  "pragmatica": "Nel parlato si usa 在 e 呢, con tono morbido: 你在做什么呢？ è la domanda naturale a un amico, e 在忙呢 («sono occupato») è la risposta che avverte che non hai tempo. 正在 è più marcato: serve a precisare il momento («proprio ora»). Con 没在 si risponde con tono diretto, ma senza durezza: 没在做什么 vuol dire «niente di particolare».",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "妈妈在做饭呢。", "opzioni": [
      { "t": "La mamma sta cucinando.", "ok": true, "perche": "在 + verbo + 呢: azione in corso." },
      { "t": "La mamma ha cucinato.", "ok": false, "perche": "Per un fatto compiuto servirebbe 了." },
      { "t": "La mamma è a casa.", "ok": false, "perche": "Con 做饭 il verbo è un'azione; 在 qui è il segnale dell'azione in corso." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我没在看电视。", "opzioni": [
      { "t": "Non sto guardando la TV.", "ok": true, "perche": "没在 nega l'azione in corso." },
      { "t": "Non guardo mai la TV.", "ok": false, "perche": "Per la negazione abituale servirebbe 不 con 常常 o 从来." },
      { "t": "Non ho guardato la TV.", "ok": false, "perche": "Per un fatto passato negato servirebbe 没 senza 在." }
    ] },
    { "k": "buco", "zh": "我＿在洗澡，等一下。", "tr": "Sto facendo la doccia, aspetta un momento.", "opzioni": [
      { "t": "正", "ok": true, "perche": "正在 insiste sul «proprio adesso»." },
      { "t": "没", "ok": false, "perche": "没在 sarebbe «non sto» e contraddice la frase." },
      { "t": "不", "ok": false, "perche": "不在洗澡 direbbe «non sto facendo la doccia» e contraddice la frase." }
    ] },
    { "k": "buco", "zh": "我＿在看电视，我在看书。", "tr": "Non sto guardando la TV, sto leggendo.", "opzioni": [
      { "t": "没", "ok": true, "perche": "Il progressivo si nega con 没在." },
      { "t": "还", "ok": false, "perche": "还在 dice che l'azione continua: affermerebbe il contrario." },
      { "t": "正", "ok": false, "perche": "正在 affermerebbe il contrario: sto guardando la TV." }
    ] },
    { "k": "ordine", "t": "你在做什么呢", "tr": "Che cosa stai facendo?" },
    { "k": "ordine", "t": "我正在吃饭", "tr": "Sto mangiando." },
    { "k": "trasforma", "base": "我吃饭。", "consegna": "Di' che stai mangiando proprio ora, in modo molto naturale nel parlato: aggiungi 在 e 呢.", "accetta": ["我在吃饭呢。"], "rifiutate": [
      { "t": "我吃饭了。", "perche": "吃饭了 dice che hai mangiato, non che stai mangiando." }
    ], "perche": "在 prima del verbo e 呢 in fondo danno il tono di «sto facendo adesso»." },
    { "k": "trasforma", "base": "他在看书。", "consegna": "Di' che lui non sta leggendo.", "accetta": ["他没在看书。", "他没有在看书。"], "rifiutate": [
      { "t": "他没正在看书。", "perche": "正在 non si nega: si dice 没在, senza 正." }
    ], "perche": "没(有)在 + verbo è la negazione del progressivo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Che cosa stai facendo?»", "a": "你在做什么呢？", "accetta": ["你在做什么？", "你在干什么呢？", "你正在做什么呢？", "你现在在做什么呢？"], "perche": "在 prima del verbo; 呢 in fondo rende la domanda morbida." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Mia madre sta cucinando.»", "a": "妈妈在做饭呢。", "accetta": ["我妈妈在做饭呢。", "妈妈正在做饭。", "妈妈在做饭。", "我妈妈正在做饭呢。", "我妈妈在做饭。"], "perche": "在 o 正在 prima del verbo; 呢 in fondo è facoltativa." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你在看电视吗？" },
      { "chi": "B", "t": "没有，我＿在写作业呢。", "buco": true }
    ], "opzioni": [
      { "t": "正", "ok": true, "perche": "正在 + 呢: sto facendo i compiti proprio ora." },
      { "t": "没", "ok": false, "perche": "没在 nega: B dice invece che sta scrivendo." },
      { "t": "不", "ok": false, "perche": "不在 direbbe «non sto» e contraddice B, che dice di stare facendo i compiti." }
    ] },
    { "k": "scegli", "q": "Quale frase dice con certezza che lui sta mangiando in questo momento?", "opzioni": [
      { "t": "他在吃饭呢。", "ok": true, "perche": "在 + verbo + 呢: azione in corso adesso." },
      { "t": "他每天在家吃饭。", "ok": false, "perche": "每天 fa di 吃饭 un'abitudine: dice dove mangia ogni giorno." },
      { "t": "他吃饭了。", "ok": false, "perche": "了 dice che ha mangiato (azione compiuta)." }
    ] }
  ],
  "capaci": [
    "Sai dire che cosa stai facendo adesso con 在, 正在 e 呢.",
    "Sai chiedere a qualcuno che cosa sta facendo e rispondere con naturalezza.",
    "Sai negare il progressivo con 没在 e capire quando 在 è un luogo e quando è azione in corso.",
    "Sai usare il progressivo nel passato e nel futuro, e distinguerlo da 了 e 着."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Expressing actions in progress (full form)» (letta: struttura soggetto + 正在 / 正 / 在 + verbo + 呢, quasi ogni parte è facoltativa, la variante più comune è 在 + verbo, anche 呢 da solo come in 我吃饭呢)",
    "Tatoeba (cmn.tsv), frasi con 正在 e 没在 consultate: 目前我没在做什么事情, 你没在吃任何东西, 会议室正在使用中",
    "CC-CEDICT, voci 正在 e 呢: significato di «essere in corso di» e usi della particella"
  ]
};
