/* Lezione 23 · Uno stato che dura: 着 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["zhe"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "门开着。", "tr": "La porta è aperta." },
      { "t": "墙上挂着一张画。", "tr": "Alla parete è appeso un quadro." },
      { "t": "他笑着说：「没关系。」", "tr": "Dice sorridendo: «Non fa niente.»" },
      { "t": "门开了。", "tr": "La porta si è aperta." }
    ],
    "domanda": "Confronta 门开着 con 门开了: che cosa cambia nel senso? Poi guarda la seconda frase: dove sta il luogo (墙上) e dove sta la cosa (一张画)? E nella terza: che rapporto c'è tra 笑着 e 说?",
    "risposta": "门开了 racconta un **evento** (la porta si è aperta, ora è aperta), 门开着 descrive uno **stato** che dura (la porta è lì, aperta). Nella seconda frase il **luogo viene per primo** (墙上), poi verbo + 着, poi la cosa che si trova lì (一张画): è la formula per descrivere una scena. Nella terza, 笑着 non è un'azione separata: dice **in che modo** si fa 说 (sorridendo)."
  },
  "regola": {
    "enunciato": "**着** si mette subito dopo un verbo e dice che la condizione creata dal verbo **continua**: 门开着, 他坐着, 她穿着红裙子. Serve a descrivere una scena, a dare un ordine di «restare così» e a dire in che modo si fa una seconda azione. Non conta il tempo: conta che lo stato duri.",
    "schema": ["luogo / chi", "verbo", "着", "(cosa)", "(verbo 2)"],
    "punti": [
      { "ok": true, "t": "**Stato che dura**: dopo verbi di posizione, di stato e di abbigliamento (坐, 站, 躺, 开, 关, 亮, 挂, 放, 穿, 戴, 拿) 着 descrive il risultato che resta: 门开着, 灯亮着, 他躺着, 她穿着红裙子, 他手里拿着一杯咖啡." },
      { "ok": true, "t": "**Scena con luogo**: luogo + verbo + 着 + cosa dice che cosa si trova lì: 桌子上放着一本书, 门口站着一个人, 黑板上写着今天的作业. Chi guarda vede la scena; non dice chi ha messo il libro o quando." },
      { "ok": true, "t": "**Verbo 1 + 着 + verbo 2**: il primo verbo è il modo o la postura in cui si compie il secondo: 他笑着说, 她躺着看书, 我们走着去, 我站着等车." },
      { "ok": true, "t": "**Ordini e richieste**: 着 dice di restare in quella condizione: 你等着, 你拿着这个, 听着, 你坐着，别动." },
      { "ok": true, "t": "**Negazione con 没**: 灯没亮着, 门没开着. Il divieto di restare così si fa con 别: 别站着, 坐吧." },
      { "ok": false, "t": "**Non si usa con un verbo che non crea uno stato**: 忘, 死, 到, 是, 知道. Si dice 我忘了, non 我忘着. E sullo stesso verbo si sceglie: 开了 (evento) oppure 开着 (stato), non 开了着." }
    ]
  },
  "logica": [
    "L'italiano ha molti modi per dire «è aperta», «sta seduto», «indossa», «c'è appeso»: uno diverso per ogni verbo. Il cinese ha un'unica etichetta, 着: prendi un verbo che produce una posizione o una condizione e aggiungi 着, e ottieni «si trova in quella condizione». Per questo traduce cose molto diverse: «è aperta» (门开着), «indossa» (穿着), «tiene in mano» (拿着), «c'è appeso» (挂着), «stando seduto» (坐着).",
    "Il confine con 了 e 在 è il punto da tenere a mente. 了 guarda l'**evento** (la porta si è aperta), 在 guarda l'**azione in corso** (sta aprendo la porta), 着 guarda lo **stato che resta** (la porta è aperta). Un verbo come 开 può dare tutte e tre le immagini; 着 è quella in cui nulla si muove."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Lo stato di adesso: com'è la cosa", "verbo + 着", "门开着。"],
      ["Che cosa c'è in un luogo", "luogo + verbo + 着 + cosa", "墙上挂着一张画。"],
      ["Come si fa un'altra azione", "verbo 1 + 着 + verbo 2", "他笑着说。"],
      ["Resta così, aspetta", "verbo + 着 (ordine)", "你等着。"],
      ["Non è così", "没 + verbo + 着", "灯没亮着。"],
      ["L'evento: è successo", "verbo + 了", "门开了。"],
      ["L'azione in corso", "在 + verbo", "他在开门。"]
    ]
  },
  "esempi": [
    { "gruppo": "Lo stato di una cosa o di una persona", "items": [
      { "t": "门开着，灯也亮着。", "tr": "La porta è aperta e la luce è accesa.", "nota": "Due stati di fila: la scena che trovi entrando." },
      { "t": "孩子躺着，还没睡。", "tr": "Il bambino è sdraiato e non dorme ancora." },
      { "t": "她穿着一条红裙子。", "tr": "Indossa una gonna rossa.", "nota": "穿着 è lo stato di chi la porta; 在穿 direbbe che se la sta mettendo." },
      { "t": "他手里拿着一杯咖啡。", "tr": "Ha in mano una tazza di caffè." }
    ] },
    { "gruppo": "Che cosa c'è in un luogo", "items": [
      { "t": "桌子上放着一本书。", "tr": "Sul tavolo c'è un libro." },
      { "t": "门口站着一个人。", "tr": "Davanti alla porta c'è una persona in piedi." },
      { "t": "黑板上写着今天的作业。", "tr": "Sulla lavagna sono scritti i compiti di oggi." }
    ] },
    { "gruppo": "In che modo si fa un'azione", "items": [
      { "t": "他笑着说：「没关系。」", "tr": "Dice sorridendo: «Non fa niente.»" },
      { "t": "她躺着看书。", "tr": "Legge sdraiata." },
      { "t": "我们走着去吧。", "tr": "Andiamo a piedi.", "nota": "Il modo di andare è camminare." }
    ] },
    { "gruppo": "Restare così: ordini e richieste", "items": [
      { "t": "你等着，我马上来。", "tr": "Aspetta lì, arrivo subito." },
      { "t": "你拿着这个。", "tr": "Tieni questo." },
      { "t": "你坐着，别动。", "tr": "Stai seduto, non ti muovere." }
    ] },
    { "gruppo": "Negazione", "items": [
      { "t": "灯没亮着。", "tr": "La luce non è accesa." },
      { "t": "门没开着。", "tr": "La porta non è aperta." }
    ] }
  ],
  "contrasti": [
    { "q": "Entri in una stanza e descrivi la porta com'è: «La porta è aperta».", "opzioni": [
      { "t": "门开着。", "ok": true, "perche": "È uno stato che dura: 着 descrive come si trova la porta." },
      { "t": "门开了着。", "ok": false, "perche": "了 e 着 non si sommano sullo stesso verbo: si sceglie l'evento (开了) o lo stato (开着)." }
    ] },
    { "q": "Hai appena fatto l'azione e racconti: «Ho messo un libro sul tavolo».", "opzioni": [
      { "t": "我在桌子上放了一本书。", "ok": true, "perche": "È un evento compiuto che racconti: 了 chiude l'azione di 放." },
      { "t": "我在桌子上放着一本书。", "ok": false, "perche": "着 non racconta l'atto di mettere: descrive un libro che si trova lì, come stato." }
    ] },
    { "q": "Come dici «La porta non è aperta»?", "opzioni": [
      { "t": "门没开着。", "ok": true, "perche": "Lo stato con 着 si nega con 没." },
      { "t": "门不开着。", "ok": false, "perche": "不 nega volontà o abitudine; per dire che uno stato presente non c'è, la forma normale è 没 (门没开着)." }
    ] },
    { "q": "Come dici «Andiamo a piedi»?", "opzioni": [
      { "t": "我们走着去吧。", "ok": true, "perche": "Verbo 1 (走着) = il modo, poi verbo 2 (去): si va camminando." },
      { "t": "我们去着走吧。", "ok": false, "perche": "L'ordine è invertito: il verbo con 着 è quello che dice il modo, e viene prima dell'azione principale." }
    ] },
    { "q": "Descrivi com'è vestita una ragazza che vedi: non dici che si sta cambiando, la descrivi.", "opzioni": [
      { "t": "她穿着红裙子。", "ok": true, "perche": "穿着 è il risultato che resta: indossa la gonna." },
      { "t": "她在穿红裙子。", "ok": false, "perche": "在穿 racconta l'atto in corso di infilarsi la gonna, non lo stato di chi la indossa." }
    ] },
    { "q": "Dalla finestra vedi un uomo che gira la chiave nella serratura: «Sta aprendo la porta».", "opzioni": [
      { "t": "他正在开门。", "ok": true, "perche": "正在 dice che l'azione è in corso." },
      { "t": "他开着门。", "ok": false, "perche": "开着门 descrive la porta lasciata aperta (lui la tiene aperta), non un atto in corso." }
    ] },
    { "q": "Dici a un amico, che sta uscendo, di tenere questa borsa in mano un momento.", "opzioni": [
      { "t": "你拿着这个。", "ok": true, "perche": "拿着 in un ordine vuol dire «tienilo in mano»: si resta in quella condizione." },
      { "t": "你拿了这个。", "ok": false, "perche": "拿了 è un fatto: l'hai preso. Non è un ordine." }
    ] },
    { "q": "Come dici «Sulla parete è appeso un quadro»?", "opzioni": [
      { "t": "墙上挂着一张画。", "ok": true, "perche": "Luogo + verbo + 着 + cosa: 着 sta subito dopo il verbo." },
      { "t": "墙上挂一张画着。", "ok": false, "perche": "着 resta attaccato al verbo e non va in fondo alla frase." }
    ] },
    { "q": "Come dici «Mi sono dimenticato»?", "opzioni": [
      { "t": "我忘了。", "ok": true, "perche": "忘 è un cambiamento che avviene in un momento: si dice con 了." },
      { "t": "我忘着。", "ok": false, "perche": "忘 non crea una posizione o una condizione che dura: non prende 着." }
    ] }
  ],
  "dialogo": {
    "titolo": "Ti aspetto in ufficio",
    "righe": [
      { "chi": "A", "t": "你到哪儿了？我在门口等着你呢。", "tr": "A che punto sei? Ti sto aspettando alla porta." },
      { "chi": "B", "t": "我快到了。门开着吗？", "tr": "Sto per arrivare. La porta è aperta?" },
      { "chi": "A", "t": "开着。老师在里面坐着，桌子上放着你的书。", "tr": "È aperta. L'insegnante è seduto là dentro, e sul tavolo c'è il tuo libro." },
      { "chi": "B", "t": "他手里拿着什么？", "tr": "Che cosa ha in mano?" },
      { "chi": "A", "t": "他拿着一杯咖啡，笑着看你。", "tr": "Ha una tazza di caffè e ti guarda sorridendo." }
    ],
    "esercizi": [
      { "q": "Che cosa dice A con 门开着?", "opzioni": [
        { "t": "Com'è la porta in questo momento: è aperta.", "ok": true, "perche": "着 descrive lo stato che dura, senza raccontare chi o quando l'ha aperta." },
        { "t": "Che la porta sta per aprirsi.", "ok": false, "perche": "Per un evento in arrivo servirebbe 要…了; 着 non guarda avanti." },
        { "t": "Che qualcuno ha aperto la porta poco fa.", "ok": false, "perche": "Questo lo direbbe 门开了 (evento)." }
      ] },
      { "q": "Nella battuta di A, 桌子上放着你的书, che cosa viene per primo?", "opzioni": [
        { "t": "Il luogo, poi il verbo con 着, poi la cosa.", "ok": true, "perche": "È l'ordine della scena: luogo + 放着 + 书." },
        { "t": "La cosa, poi il verbo, poi il luogo.", "ok": false, "perche": "Con 着 la cosa viene in coda, dopo il verbo." },
        { "t": "Il verbo, poi il luogo, poi la cosa.", "ok": false, "perche": "Il luogo apre la frase: non sta dopo il verbo." }
      ] },
      { "q": "In 笑着看你, che cosa fa 笑着?", "opzioni": [
        { "t": "Dice in che modo guarda: sorridendo.", "ok": true, "perche": "Verbo 1 + 着 + verbo 2: il primo è il modo del secondo." },
        { "t": "Dice che prima ha sorriso e poi ha guardato.", "ok": false, "perche": "Le due azioni sono insieme: il sorriso accompagna lo sguardo." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Si mette 着 per ogni «sto facendo» (我在吃着饭), si somma a 了 (门开了着), si nega con 不 (门不开着) oppure lo si porta in fondo alla frase (墙上挂一张画着). All'opposto, per «indossa» o «c'è appeso» si usa il solo verbo e la frase non descrive niente.",
    "perche": "In italiano il gerundio e «sta + gerundio» coprono sia l'azione in corso sia lo stato. In cinese sono due strumenti diversi: 在 per l'azione che si svolge, 着 per lo stato che resta. E 着 sta sempre attaccato al verbo, perché è il verbo a creare lo stato.",
    "esci": "Chiediti: sto descrivendo un'azione che si svolge adesso, oppure come si trova qualcosa? Nel primo caso 在 o 正在 prima del verbo; nel secondo 着 subito dopo il verbo. Per negare uno stato usa 没, e non sommare 了 sullo stesso verbo.",
    "esempi": [
      { "sbagliata": "门开了着。", "giusta": "门开着。" },
      { "sbagliata": "门不开着。", "giusta": "门没开着。" },
      { "sbagliata": "墙上挂一张画着。", "giusta": "墙上挂着一张画。" },
      { "sbagliata": "她在穿红裙子。", "giusta": "她穿着红裙子。" }
    ]
  },
  "curiosi": [
    { "titolo": "Un carattere, quattro letture", "t": "Nel dizionario CC-CEDICT 着 ha quattro letture: zhe (la particella di questa lezione, con tono neutro), zháo («toccare, prendere fuoco», in 睡着 «addormentarsi»), zhāo («mossa»), zhuó («indossare»). Per questo 他睡着了 non è «sta dormendo» ma «si è addormentato», con 着 pronunciato zháo. E nella scrittura tradizionale la particella si scrive 著." },
    { "titolo": "Lo stato e il contatto", "t": "Nello stesso dizionario le altre letture di 着 hanno a che fare con il contatto (zháo «toccare, entrare in contatto», zhuó «indossare, applicare»). Come aiuto mnemonico (non come etimologia) si può ricordare l'idea della particella così: la cosa è messa in una posizione e ci rimane, a contatto con essa. Per questo 着 si trova così bene con i verbi di posizione e di abbigliamento." },
    { "titolo": "着呢: un tocco in più", "t": "Alla fine della frase 着呢 aggiunge enfasi e un tocco di «e come!»: 时间还早着呢 («è ancora prestissimo»), 我弟弟还睡着呢 («mio fratello dorme ancora»). È una forma del parlato." },
    { "titolo": "Quando preferire 一边…一边", "t": "Verbo 1 + 着 + verbo 2 vale quando il primo verbo è uno stato o una postura (坐着, 站着, 笑着). Per due azioni che si svolgono insieme si usa 一边…一边: 一边走一边说 («cammino e parlo»)." }
  ],
  "pragmatica": "着 è la forma naturale per descrivere ciò che si vede: la stanza, un abito, la posizione di una persona. Nel parlato accompagna gli ordini brevi (等着, 拿着, 听着) con tono diretto ma non scortese tra amici; con una persona che non conosci conviene 请 o 一下: 请等一下. In una descrizione di scena, per esempio il racconto di cosa c'è su un tavolo, la formula luogo + verbo + 着 + cosa è quella standard.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "她躺着看书。", "opzioni": [
      { "t": "Legge sdraiata.", "ok": true, "perche": "躺着 è il modo in cui si compie 看书." },
      { "t": "Si è sdraiata e ha letto.", "ok": false, "perche": "Le due azioni non vengono una dopo l'altra: sono insieme." },
      { "t": "Si sta sdraiando.", "ok": false, "perche": "Per un'azione in corso servirebbe 在 prima del verbo." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "门口站着一个人。", "opzioni": [
      { "t": "Davanti alla porta c'è una persona in piedi.", "ok": true, "perche": "Luogo + verbo + 着 + cosa: la scena che vedi." },
      { "t": "Una persona è arrivata alla porta.", "ok": false, "perche": "Per un evento servirebbe 了 (来了)." },
      { "t": "Una persona sta per uscire.", "ok": false, "perche": "着 non guarda avanti: descrive come stanno le cose." }
    ] },
    { "k": "buco", "zh": "你拿＿这个，我马上回来。", "tr": "Tieni questo, torno subito.", "opzioni": [
      { "t": "着", "ok": true, "perche": "In un ordine 拿着 vuol dire «tienilo»." },
      { "t": "过", "ok": false, "perche": "过 racconta un'esperienza fatta, non un ordine." },
      { "t": "在", "ok": false, "perche": "在 va prima del verbo e dice un'azione in corso." }
    ] },
    { "k": "buco", "zh": "他笑＿说话。", "tr": "Parla sorridendo.", "opzioni": [
      { "t": "着", "ok": true, "perche": "笑着 è il modo in cui si compie 说话: si parla sorridendo." },
      { "t": "了", "ok": false, "perche": "笑了说话 vorrebbe dire «ha riso e poi ha parlato»." },
      { "t": "过", "ok": false, "perche": "过 racconta un'esperienza, non il modo in cui si parla." }
    ] },
    { "k": "ordine", "t": "墙上挂着一张画", "tr": "Alla parete è appeso un quadro." },
    { "k": "ordine", "t": "她穿着一条红裙子", "tr": "Indossa una gonna rossa." },
    { "k": "trasforma", "base": "桌子上有一本书。", "consegna": "Descrivi con 放 e 着 il libro appoggiato sul tavolo: la scena che vedi.", "accetta": ["桌子上放着一本书。"], "rifiutate": [
      { "t": "桌子上放一本书着。", "perche": "着 sta subito dopo il verbo, non in fondo alla frase." }
    ], "perche": "Luogo + 放着 + cosa: lo stato di un libro appoggiato." },
    { "k": "trasforma", "base": "他坐在椅子上，看书。", "consegna": "Riscrivi la frase in modo che 坐 sia la postura in cui legge.", "accetta": ["他坐着看书。"], "rifiutate": [
      { "t": "他坐了看书。", "perche": "了 farebbe di 坐 un'azione conclusa prima del resto, non la postura." }
    ], "perche": "Verbo 1 + 着 + verbo 2: la postura accompagna l'azione di 看书." },
    { "k": "scrivi", "q": "Scrivi in cinese: «La porta non è aperta.»", "a": "门没开着。", "accetta": ["门没有开着。"], "perche": "Lo stato con 着 si nega con 没, davanti al verbo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Sul tavolo ci sono due libri.»", "a": "桌子上放着两本书。", "accetta": ["桌上放着两本书。"], "perche": "Luogo + 放着 + cosa: i due libri sono lì appoggiati." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "灯关了吗？" },
      { "chi": "B", "t": "没有，还亮＿呢。", "buco": true }
    ], "opzioni": [
      { "t": "着", "ok": true, "perche": "亮着 descrive lo stato: la luce è ancora accesa." },
      { "t": "了", "ok": false, "perche": "亮了 racconta l'evento (si è accesa): B dice com'è ora." },
      { "t": "过", "ok": false, "perche": "亮过 vuol dire «una volta si è accesa»." }
    ] },
    { "k": "scegli", "q": "In quale frase 着 è sbagliato?", "opzioni": [
      { "t": "我忘着他的名字。", "ok": true, "perche": "忘 non crea uno stato: si dice 我忘了他的名字." },
      { "t": "窗户开着。", "ok": false, "perche": "Qui 着 è giusto: lo stato di una finestra." },
      { "t": "他穿着一件蓝色上衣。", "ok": false, "perche": "Qui 着 è giusto: lo stato di chi la indossa." }
    ] }
  ],
  "capaci": [
    "Sai descrivere come sta una cosa o una persona (porta, luce, postura, abito) con verbo + 着.",
    "Sai dire che cosa c'è in un luogo con la formula luogo + verbo + 着 + cosa.",
    "Sai usare verbo 1 + 着 + verbo 2 per dire in che modo si fa un'azione.",
    "Sai scegliere tra 着 (stato), 了 (evento) e 在 (azione in corso), e negare lo stato con 没."
  ],
  "fonti": [
    "Mango Languages, «How to use the aspectual particles zhe and zai in Mandarin Chinese»: 着 per lo stato contro 在 per l'azione in corso, 穿着 contro 在穿, 拿着 contro 在拿, 忘 che prende solo 了, esempi di luogo + verbo + 着 + cosa",
    "Chinese Grammar Wiki (AllSet Learning), pagina «Aspect particle»: i due schemi verbo + 着 e verbo + 着 + verbo (la pagina dedicata a 着 è solo un abbozzo)",
    "Tatoeba (cmn.tsv), esempi consultati: 书架上放着很多字典, 这个位子空着吗, 他闭着眼, 我弟弟还睡着呢, 时间还早着呢, 她终于睡着了, 我现在忙着呢",
    "CC-CEDICT, voci 着 e 著: letture zhe5, zhao2, zhao1, zhuo2"
  ]
};
