/* Lezione 52 · Dov'è e che cosa c'è: 在, 有, 是 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["you-zai-shi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我的钥匙在包里。", "tr": "Le mie chiavi sono nella borsa." },
      { "t": "包里有一个手机和两本书。", "tr": "Nella borsa ci sono un telefono e due libri." },
      { "t": "学校前面是公园。", "tr": "Davanti alla scuola c'è un parco." },
      { "t": "公园在学校前面。", "tr": "Il parco è davanti alla scuola." }
    ],
    "domanda": "In italiano tutte e quattro si traducono con «è» o «c'è». In cinese i verbi sono tre, 在, 有 e 是. Guarda che cosa sta all'inizio di ciascuna frase: una cosa oppure un luogo? E guarda la terza e la quarta: descrivono la stessa scena, ma partono da punti opposti. Che cosa cambia?",
    "risposta": "Con **在** si parte dalla **cosa** (le chiavi, il parco) e si dice dove sta. Con **有** e **是** si parte dal **luogo** (la borsa, la scuola) e si dice che cosa c'è. La terza e la quarta frase hanno la stessa scena, ma con 是 il punto di partenza è la scuola («davanti alla scuola, ecco, un parco»), con 在 è il parco («il parco, dov'è? davanti alla scuola»). La differenza tra 有 e 是: 有 elenca che cosa c'è (anche più cose), 是 dice quale è la cosa che si trova lì."
  },
  "regola": {
    "enunciato": "L'italiano usa «c'è» e «è» per tre cose diverse; il cinese le separa. **在**: parti da una cosa che chi ascolta già conosce e dici **dove si trova**. **有**: parti da un luogo e dici **che cosa c'è** (cose nuove, anche più d'una). **是**: parti da un luogo e dici **che cos'è** quello che c'è, di solito una cosa sola che lo identifica.",
    "schema": ["cosa nota + 在 + luogo", "luogo + 有 + cosa nuova", "luogo + 是 + cosa unica"],
    "punti": [
      { "ok": true, "t": "**在** risponde alla domanda «dov'è?»: 书在桌子上, 洗手间在哪儿？ Il soggetto è una cosa o una persona conosciuta (quel libro, mio fratello). Dopo 在 un nome comune ha bisogno di un indicatore di luogo (桌子上, 包里, 学校旁边); i nomi di luogo (学校, 家, 北京) e 这儿, 那儿, 哪儿 no." },
      { "ok": true, "t": "**有** apre con il luogo e porta cose nuove: 桌子上有两本书, 公园里有很多人. Per più cose si elencano di seguito: 包里有手机、钥匙和书. La domanda è 有…吗 o 有没有: 这里有没有咖啡馆？" },
      { "ok": true, "t": "**是** apre con il luogo e dice che cos'è quello che si trova lì: 学校前面是公园, 那边是银行. Di solito è una cosa sola (o un insieme unico), non un elenco. La domanda è 是…吗 e la risposta è 是 o 不是." },
      { "ok": true, "t": "**Negazione**: 在 si nega con 不 (他不在家), 是 con 不 (这里不是银行), 有 con 没(有) (这里没有超市). La forma 不有 non esiste." },
      { "ok": true, "t": "**Il luogo viene prima della cosa** con 有 e 是, perché il luogo è il tema della frase: 桌子上有书, non 书有桌子上. Per una cosa che sta su o in un oggetto si aggiunge 上 o 里: 桌子上, 包里." },
      { "ok": false, "t": "**Di solito non si usa 有 per una cosa già nota**: «Il libro è sul tavolo» è 书在桌子上, non 桌子上有书 (che presenta il libro come novità). E non si mettono due verbi insieme: né 有在, né 在有. Per la persona che è a casa: 他在家, mai 他有在家." }
    ]
  },
  "logica": [
    "Il cinese mette all'inizio ciò che è già noto (il tema) e alla fine l'informazione nuova. In **书在桌子上** il tema è il libro, che conosciamo già, e la novità è il posto. In **桌子上有一本书** il tema è il tavolo, la scena, e la novità è il libro: per questo il libro arriva dopo il verbo e di solito con un numero (一本书, 两本书), non con «quel». L'italiano nasconde tutto questo dietro «c'è», che serve in ogni caso; il cinese ti obbliga a scegliere in anticipo che cosa è noto e che cosa è nuovo.",
    "**是** aggiunge un'altra sfumatura: dà un nome al luogo. 学校前面是公园 non elenca ciò che si trova davanti alla scuola, dice che lì c'è un parco, ed è il parco quello che conta; 学校前面有公园 invece presenta il parco come uno degli elementi (magari ce ne sono altri). Per questo è così frequente quando si danno indicazioni o si descrive una mappa: 左边是银行, 右边是超市."
  ],
  "mappa": {
    "tipo": "albero",
    "inizio": "q0",
    "nodi": {
      "q0": {
        "q": "Da dove parti: dalla cosa o dal luogo?",
        "risposte": [
          { "t": "Dalla cosa, che chi ascolta già conosce", "vai": "fz" },
          { "t": "Dal luogo", "vai": "q1" }
        ]
      },
      "q1": {
        "q": "Che cosa dici di quel luogo?",
        "risposte": [
          { "t": "Che cosa c'è: cose nuove, magari più di una", "vai": "fy" },
          { "t": "Che cos'è quello che c'è: una cosa sola che lo identifica", "vai": "fs" }
        ]
      },
      "fz": { "fine": "Usa **cosa + 在 + luogo**: 我的钥匙在包里, 银行在学校旁边. Risponde a «dov'è?»." },
      "fy": { "fine": "Usa **luogo + 有 + cosa**: 桌子上有两本书, 包里有手机、钥匙和书. Negazione: 没有." },
      "fs": { "fine": "Usa **luogo + 是 + cosa**: 学校前面是公园, 左边是银行. Negazione: 不是." }
    }
  },
  "esempi": [
    { "gruppo": "在: dov'è una cosa nota", "items": [
      { "t": "我的手机在桌子上。", "tr": "Il mio telefono è sul tavolo." },
      { "t": "银行在学校旁边。", "tr": "La banca è accanto alla scuola." },
      { "t": "小王在家。", "tr": "Xiao Wang è a casa.", "nota": "Con 家 e con i nomi di luogo non serve nessun indicatore." },
      { "t": "洗手间在哪儿？", "tr": "Dov'è il bagno?", "nota": "哪儿 è già un luogo: si dice 在哪儿, senza altro." }
    ] },
    { "gruppo": "有: che cosa c'è in un luogo", "items": [
      { "t": "桌子上有两本书。", "tr": "Sul tavolo ci sono due libri." },
      { "t": "包里有手机、钥匙和一本书。", "tr": "Nella borsa ci sono il telefono, le chiavi e un libro." },
      { "t": "公园里有很多人。", "tr": "Nel parco c'è molta gente." },
      { "t": "这儿有没有咖啡馆？", "tr": "C'è un bar qui?", "nota": "有没有 è la forma di domanda più diretta: chiede un sì o un no." },
      { "t": "教室里没有人。", "tr": "In classe non c'è nessuno." }
    ] },
    { "gruppo": "是: che cos'è quello che c'è", "items": [
      { "t": "学校前面是公园。", "tr": "Davanti alla scuola c'è un parco." },
      { "t": "我家对面是医院。", "tr": "Di fronte a casa mia c'è l'ospedale." },
      { "t": "那边是银行，不是学校。", "tr": "Là c'è la banca, non la scuola." }
    ] },
    { "gruppo": "Lo stesso luogo, tre punti di vista", "items": [
      { "t": "学校旁边有一个超市。", "tr": "Accanto alla scuola c'è un supermercato.", "nota": "Presenta il supermercato come novità." },
      { "t": "超市在学校旁边。", "tr": "Il supermercato è accanto alla scuola.", "nota": "Del supermercato si sa già qualcosa e se ne dice la posizione." },
      { "t": "学校旁边是超市。", "tr": "Accanto alla scuola c'è il supermercato.", "nota": "Dice che cosa si trova lì, come una cosa sola." }
    ] },
    { "gruppo": "Negare e chiedere", "items": [
      { "t": "他不在家。", "tr": "Non è a casa." },
      { "t": "这儿不是银行。", "tr": "Questa non è una banca." }
    ] }
  ],
  "contrasti": [
    { "q": "Qualcuno ti chiede dove si trova il tuo libro: rispondi che è sul tavolo.", "ctx": { "t": "你的书在哪儿？" }, "opzioni": [
      { "t": "我的书在桌子上。", "ok": true, "perche": "Il libro è già noto: si parte da lui e si dice dove sta, con 在." },
      { "t": "桌子上有我的书。", "ok": false, "perche": "有 presenta come novità ciò che c'è su un luogo; la domanda invece chiede la posizione di una cosa nota." }
    ] },
    { "q": "Entri in una stanza e noti una cosa nuova: «Sul tavolo c'è un libro».", "opzioni": [
      { "t": "桌子上有一本书。", "ok": true, "perche": "Il luogo apre la frase, e la cosa nuova arriva dopo 有 con un numero." },
      { "t": "一本书在桌子上。", "ok": false, "perche": "In una frase con 在 il soggetto è una cosa nota; un generico «un libro» all'inizio suona fuori posto." }
    ] },
    { "q": "Dici che in questa zona non ci sono supermercati.", "opzioni": [
      { "t": "这儿没有超市。", "ok": true, "perche": "Il negativo di 有 è 没有." },
      { "t": "这儿不有超市。", "ok": false, "perche": "不有 non esiste: con 有 si usa sempre 没." }
    ] },
    { "q": "Dici che tuo fratello non è a casa adesso.", "opzioni": [
      { "t": "我哥哥不在家。", "ok": true, "perche": "不在 nega la presenza di una persona in un luogo noto." },
      { "t": "我哥哥没有家。", "ok": false, "perche": "没有家 vuol dire «non ha una casa», non «non è a casa»." }
    ] },
    { "q": "Dici che la banca (di cui parlavate) si trova accanto alla scuola.", "opzioni": [
      { "t": "银行在学校旁边。", "ok": true, "perche": "La banca è la cosa nota e 在 ne dice la posizione." },
      { "t": "银行有学校旁边。", "ok": false, "perche": "有 non mette in relazione una cosa con un luogo in questo ordine: dopo 有 viene la cosa, non il luogo." }
    ] },
    { "q": "Ti chiedono se davanti c'è la stazione, e tu rispondi che no, c'è un parco.", "ctx": { "t": "前面是车站吗？" }, "opzioni": [
      { "t": "不是，前面是公园。", "ok": true, "perche": "La domanda usa 是, quindi la risposta è 不是, poi si dice che cosa c'è." },
      { "t": "没有，前面是公园。", "ok": false, "perche": "没有 risponde a una domanda con 有; qui la domanda è con 是." }
    ] },
    { "q": "Dici di una borsa: «Ci sono un telefono e due libri».", "opzioni": [
      { "t": "包里有一个手机和两本书。", "ok": true, "perche": "Più cose nuove in un luogo: si usa 有." },
      { "t": "包里是一个手机和两本书。", "ok": false, "perche": "是 identifica una cosa sola, non elenca più cose." }
    ] },
    { "q": "Chiedi a qualcuno se qui c'è un bagno.", "opzioni": [
      { "t": "这儿有洗手间吗？", "ok": true, "perche": "Chiedi se esiste una cosa in un luogo: luogo + 有 + cosa + 吗." },
      { "t": "这儿在洗手间吗？", "ok": false, "perche": "在 non può avere come soggetto un luogo: dopo 在 deve esserci il posto." }
    ] }
  ],
  "dialogo": {
    "titolo": "Dov'è la banca?",
    "righe": [
      { "chi": "A", "t": "请问，这里有银行吗？", "tr": "Scusi, c'è una banca qui?" },
      { "chi": "B", "t": "有，银行在学校旁边。", "tr": "Sì, la banca è accanto alla scuola." },
      { "chi": "A", "t": "学校在哪儿？", "tr": "Dov'è la scuola?" },
      { "chi": "B", "t": "你看，前面是公园，公园对面是学校。", "tr": "Guardi: davanti c'è un parco e di fronte al parco c'è la scuola." },
      { "chi": "A", "t": "谢谢！学校里有洗手间吗？", "tr": "Grazie! C'è un bagno nella scuola?" },
      { "chi": "B", "t": "有，在左边。", "tr": "Sì, è a sinistra." }
    ],
    "esercizi": [
      { "q": "Perché B dice 银行在学校旁边 e non 学校旁边有银行?", "opzioni": [
        { "t": "Perché la banca è già nominata da A: B ne dice solo la posizione.", "ok": true, "perche": "Con una cosa nota si parte da lei e si dice dov'è, con 在." },
        { "t": "Perché 有 non si può usare con la banca.", "ok": false, "perche": "有 è possibile in assoluto, ma presenterebbe la banca come novità." },
        { "t": "Perché la banca è una persona.", "ok": false, "perche": "La banca è un edificio; il verbo non dipende da questo." }
      ] },
      { "q": "Che cosa dice B con 前面是公园?", "opzioni": [
        { "t": "Che quello che si trova davanti è un parco.", "ok": true, "perche": "是 dice che cos'è ciò che c'è in quel luogo, come cosa principale." },
        { "t": "Che il parco è lontano.", "ok": false, "perche": "Nessuna parola indica la distanza: 前面 dice solo «davanti»." },
        { "t": "Che nel parco ci sono molte cose.", "ok": false, "perche": "Per elencare ciò che c'è nel parco servirebbe 有, come in 公园里有很多人." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano traduce «c'è» sempre con lo stesso verbo e con l'ordine italiano, e scrive 桌子上在书, 书有桌子上, 这里不有超市, oppure 他有在家. Inversa è l'abitudine di usare 有 anche quando la cosa è nota, come in 桌子上有我的书 per «il mio libro è sul tavolo».",
    "perche": "In italiano «c'è» e «è» sono una parola sola che dice insieme l'esistenza e la posizione, e il soggetto può essere nuovo o noto. In cinese invece la scelta del verbo dipende da ciò che è noto (cosa → 在) e da ciò che è nuovo (luogo → 有), e l'ordine delle parole cambia con lui.",
    "esci": "Prima di scrivere chiediti: la cosa è già nota a chi ascolta? Se sì, parti da lei e usa 在. Se la cosa è nuova, parti dal luogo e usa 有 (o 是 se è la cosa che identifica il luogo). Con 有 l'oggetto arriva dopo il verbo, e per negarlo serve 没.",
    "esempi": [
      { "sbagliata": "桌子上在书。", "giusta": "书在桌子上。" },
      { "sbagliata": "书有桌子上。", "giusta": "桌子上有书。" },
      { "sbagliata": "这里不有超市。", "giusta": "这里没有超市。" },
      { "sbagliata": "我哥哥有在家。", "giusta": "我哥哥在家。" }
    ]
  },
  "curiosi": [
    { "titolo": "有 vuol dire anche «avere»", "t": "Lo stesso 有 dice il possesso: 我有一个哥哥, «ho un fratello». Le due cose sono parenti: la grammatica cinese vede il luogo come qualcosa che «ha» ciò che contiene, e per questo 桌子上有书 si può leggere «sul tavolo c'è un libro» ma anche, alla lettera, «il tavolo ha un libro». Il negativo è lo stesso, 没有, in tutti e due i sensi." },
    { "titolo": "Altre costruzioni di esistenza: 着", "t": "Con verbi di posizione come 放, 坐, 挂 si usa spesso 着: 桌子上放着一本书 («sul tavolo è posato un libro»). Il luogo viene sempre per primo, e il verbo descrive come sta la cosa. Per le conversazioni di ogni giorno bastano però 在, 有 e 是." },
    { "titolo": "在 verbo, preposizione e progressivo", "t": "在 è un verbo («stare, essere in un luogo»: 他在家) e può diventare una preposizione davanti ad altri verbi: 他在家看书, «legge a casa». Davanti a un verbo, senza luogo, indica anche l'azione in corso: 他在看书, «sta leggendo». Il significato dipende da che cosa viene dopo." },
    { "titolo": "是 senza tempo", "t": "Le frasi come 学校前面是公园 non portano nessuna indicazione di tempo. Possono descrivere un fatto di oggi o una scena nel racconto di un fatto passato: il contesto dice quale. Si usano soprattutto quando il luogo è visibile o evidente e si dà il nome di ciò che c'è." }
  ],
  "pragmatica": "Quando chiedi un'informazione a uno sconosciuto, comincia con 请问 e scegli il verbo secondo ciò che sai: se non sai se esiste, 这附近有银行吗？; se conosci il nome e cerchi il posto, 银行在哪儿？. Per dare indicazioni a un passante, 是 è molto naturale: 左边是银行, 前面是公园. Nelle risposte brevi si può dire solo 有 o 没有, oppure 在前面.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "学校前面是公园。", "opzioni": [
      { "t": "Davanti alla scuola c'è un parco.", "ok": true, "perche": "Luogo + 是 + cosa: il parco è ciò che si trova davanti alla scuola." },
      { "t": "La scuola è davanti al parco.", "ok": false, "perche": "Questo sarebbe 学校在公园前面: la cosa nota e 在." },
      { "t": "Davanti alla scuola non c'è un parco.", "ok": false, "perche": "Non c'è nessuna negazione nella frase." }
    ] },
    { "k": "scegli", "q": "Quale frase è sbagliata?", "opzioni": [
      { "t": "书有桌子上。", "ok": true, "perche": "Con 有 il luogo viene prima della cosa; l'ordine qui è invertito." },
      { "t": "桌子上有书。", "ok": false, "perche": "È corretta: luogo + 有 + cosa." },
      { "t": "书在桌子上。", "ok": false, "perche": "È corretta: cosa + 在 + luogo." }
    ] },
    { "k": "buco", "zh": "银行＿学校旁边。", "tr": "La banca è accanto alla scuola.", "opzioni": [
      { "t": "在", "ok": true, "perche": "Parti dalla cosa nota e ne dici la posizione." },
      { "t": "有", "ok": false, "perche": "有 vorrebbe il luogo all'inizio e la cosa dopo il verbo." },
      { "t": "是", "ok": false, "perche": "是 lega due nomi; qui il luogo viene dopo il verbo, non prima." }
    ] },
    { "k": "buco", "zh": "这里＿超市。", "tr": "Qui non c'è un supermercato.", "opzioni": [
      { "t": "没有", "ok": true, "perche": "Il negativo di 有 è 没有." },
      { "t": "不有", "ok": false, "perche": "不有 non esiste in cinese." },
      { "t": "不在", "ok": false, "perche": "不在 vuol dire «non è in un luogo»: qui manca il luogo dopo il verbo." }
    ] },
    { "k": "buco", "zh": "桌子上＿一本书。", "tr": "Sul tavolo c'è un libro.", "opzioni": [
      { "t": "有", "ok": true, "perche": "Luogo + 有 + cosa nuova con numero." },
      { "t": "在", "ok": false, "perche": "在 vuole la cosa all'inizio, non il luogo." },
      { "t": "去", "ok": false, "perche": "去 vuol dire «andare»: non descrive che cosa c'è." }
    ] },
    { "k": "ordine", "t": "我的手机在桌子上", "tr": "Il mio telefono è sul tavolo." },
    { "k": "ordine", "t": "学校旁边有一个超市", "tr": "Accanto alla scuola c'è un supermercato." },
    { "k": "trasforma", "base": "书在桌子上。", "consegna": "Presenta il libro come novità: parti dal luogo.", "accetta": ["桌子上有书。", "桌子上有一本书。", "桌子上有本书。"], "rifiutate": [
      { "t": "桌子上在书。", "perche": "在 non può reggere il luogo come soggetto: con 在 la cosa viene prima." }
    ], "perche": "Per una cosa nuova si parte dal luogo e si usa 有: 桌子上有书." },
    { "k": "trasforma", "base": "这里有超市。", "consegna": "Dì che qui non c'è un supermercato.", "accetta": ["这里没有超市。", "这儿没有超市。"], "rifiutate": [
      { "t": "这里不有超市。", "perche": "不有 non esiste: il negativo di 有 è 没有." }
    ], "perche": "Il negativo di 有 è 没有." },
    { "k": "scrivi", "q": "Scrivi in cinese la risposta a 洗手间在哪儿？: «È a sinistra.»", "a": "在左边。", "accetta": ["在左边", "洗手间在左边。", "洗手间在左边"], "perche": "Si risponde a «dov'è?» con 在 + il luogo; il soggetto (洗手间) si può anche omettere perché è noto." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Accanto alla scuola c'è un supermercato.»", "a": "学校旁边有一个超市。", "accetta": ["学校旁边有个超市。", "学校旁边有一家超市。", "学校旁边有超市。"], "perche": "Luogo + 有 + cosa nuova con classificatore." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "请问，这里＿银行吗？", "buco": true },
      { "chi": "B", "t": "有，就在学校旁边。" }
    ], "opzioni": [
      { "t": "有", "ok": true, "perche": "A chiede se qui esiste una banca, e B risponde 有." },
      { "t": "在", "ok": false, "perche": "在 richiederebbe la banca all'inizio e il luogo dopo." },
      { "t": "没", "ok": false, "perche": "没 da solo non regge una domanda con 吗: serve 没有." }
    ] }
  ],
  "capaci": [
    "Sai chiedere dov'è un luogo noto con 在哪儿 e rispondere con 在 + indicatore di luogo.",
    "Sai dire che cosa c'è in un posto con luogo + 有 + cosa, anche elencando più cose.",
    "Sai usare 是 per dare il nome di ciò che si trova in un posto e dare indicazioni (左边是银行).",
    "Sai negare con 不在, 没有, 不是, e non cadi più nell'errore 不有."
  ],
  "glosse": {
    "包里有手机、钥匙和书": "Nella borsa ci sono il cellulare, le chiavi e un libro",
    "这里有没有咖啡馆": "C'è un bar qui?",
    "那边是银行": "Là c'è una banca",
    "这里不是银行": "Questa non è una banca",
    "这里没有超市": "Qui non c'è un supermercato",
    "桌子上有一本书": "Sul tavolo c'è un libro",
    "学校前面有公园": "Davanti alla scuola c'è un parco",
    "左边是银行": "A sinistra c'è la banca",
    "右边是超市": "A destra c'è il supermercato",
    "我有一个哥哥": "Ho un fratello maggiore",
    "他在家看书": "Legge a casa",
    "这附近有银行吗": "Qui vicino c'è una banca?",
    "银行在哪儿": "Dov'è la banca?",
    "前面是公园": "Davanti c'è il parco"
  },
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Expressing existence with you»: schema luogo + 有 + oggetto, con 吗 per la domanda (letta per intero)",
    "CC-CEDICT, voci 在, 有 e 是, consultate nel dizionario locale",
    "Tatoeba (cmn.tsv, es. 桌子上有, 旁边有, 不在), verificate con grep nel corpus locale"
  ]
};
