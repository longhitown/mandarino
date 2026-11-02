/* Lezione 36 · Quante volte: 次 e 遍 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["cishu"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "这个饭馆我来过好几次。", "tr": "A questo ristorante sono venuto più volte." },
      { "t": "请你再说一遍。", "tr": "Per favore, ripeti ancora una volta." },
      { "t": "我见过他两次。", "tr": "L'ho incontrato due volte." },
      { "t": "我一个星期游泳三次。", "tr": "Vado a nuotare tre volte a settimana." }
    ],
    "domanda": "Dove sta il numero di volte rispetto al verbo? Che cosa fa il pronome 他 nella terza frase? E nella quarta, che cosa sta prima del verbo e che cosa dopo?",
    "risposta": "Il numero con 次 o 遍 sta **dopo il verbo** (来过好几次, 说一遍, 见过他两次, 游泳三次). Il pronome 他 si mette **tra** il verbo e il numero. Nella quarta frase l'unità di tempo (一个星期) sta **prima** del verbo e dice il periodo di riferimento, mentre le volte (三次) seguono il verbo. In italiano «volte» non cambia; in cinese il classificatore (次 o 遍) è obbligatorio."
  },
  "regola": {
    "enunciato": "Per contare quante volte si fa qualcosa, il cinese mette dopo il verbo un **numero + classificatore d'azione**: **次** per contare gli episodi, **遍** per ripetere un'azione dall'inizio alla fine. Il pronome oggetto sta davanti al numero (见过他两次); il nome di luogo accetta due posizioni (去过北京三次, 去过三次北京).",
    "schema": ["chi", "verbo", "过 / 了", "numero", "次 / 遍", "(oggetto)"],
    "punti": [
      { "ok": true, "t": "**次** conta gli episodi di qualunque azione: 去过三次, 来了两次, 给她打了五次电话. Con 过 racconta un'esperienza (去过三次), con 了 un fatto concluso (昨天他来了两次)." },
      { "ok": true, "t": "**遍** conta le volte in cui un'azione si svolge **per intero**, dall'inizio alla fine: leggere, dire, ascoltare, scrivere, guardare un film, ripassare. 这首歌我听了十遍, 请再说一遍. Con andare, venire, incontrare si usa 次." },
      { "ok": true, "t": "**Pronome o persona** come oggetto: l'oggetto sta tra il verbo e il numero. 我见过他两次, 我问了老师三次, 我找了你好几次." },
      { "ok": true, "t": "**Nome di luogo**: due ordini, di solito equivalenti. 我去过上海两次 oppure 我去过两次上海. Con un nome comune l'oggetto precede il verbo come tema (这个电影我看了三次) oppure il numero va davanti al nome (看了三次电影)." },
      { "ok": true, "t": "**Frequenza**: il periodo sta prima del verbo, le volte dopo. 我一个星期游泳三次, 他每个月回家一次. Si chiede con 几次 o 多少次, oppure con 多久…一次 («ogni quanto»): 你多久看一次电影？" },
      { "ok": true, "t": "**Ordinali e ricorrenze**: 第一次 «la prima volta», 上次, 下次, 每次, 有一次 («una volta, c'è stata una volta che…»). Qui 次 è un nome e sta dove sta un nome: 这是我第一次来中国。" },
      { "ok": true, "t": "**«Neanche una volta»**: 一次也没… o 一次都没…, con il numero davanti al verbo: 我一次也没去过。 È l'unico caso in cui 次 sta prima del verbo, ed è un'enfasi." },
      { "ok": false, "t": "**Il numero non va prima del verbo** (tranne in 一次也没) e **il pronome non va dopo il numero**: 我三次去过 e 我见过两次他 non si dicono. 次 e 遍 contano le volte, non le cose: per gli oggetti ci sono 个, 本, 杯." }
    ]
  },
  "logica": [
    "L'italiano ha una sola parola, «volte», e le dà molta libertà: «sono stato tre volte a Roma», «tre volte sono stato a Roma». Il cinese distribuisce il lavoro: il verbo regge un **complemento di quantità** (come in 学了两年, nella lezione sulla durata) e il classificatore dice che cosa si conta. Le **volte** si contano con 次, il **percorso intero** con 遍. Per questo il numero sta dopo il verbo, e per questo serve un classificatore, come per ogni numero in cinese.",
    "L'ordine dell'oggetto segue il peso: un pronome o un nome di persona è corto e va subito dopo il verbo (见过他两次); un nome di luogo è corto e va in entrambe le posizioni; un nome comune ha di solito un posto proprio, come tema davanti (这个电影我看了三次). Il contrasto tra 次 e 遍 invece è di aspetto: andare e incontrare sono episodi, leggere e dire sono percorsi che hanno un inizio e una fine."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa conti o quale oggetto hai", "Costruzione", "Esempio"],
    "righe": [
      ["Episodi, senza oggetto", "V + numero + 次", "我去过三次。"],
      ["Un'azione dall'inizio alla fine", "V + numero + 遍", "请再说一遍。"],
      ["Oggetto pronome o persona", "V + oggetto + numero + 次", "我见过他两次。"],
      ["Oggetto di luogo", "V + luogo + numero + 次, o V + numero + 次 + luogo", "我去过上海两次。"],
      ["Oggetto nome comune", "oggetto (tema) + V + numero + 次/遍", "这个电影我看了三次。"],
      ["Frequenza", "periodo + V + numero + 次", "我一个星期游泳三次。"],
      ["Mai, nemmeno una volta", "一次也没 + V + 过", "我一次也没去过。"],
      ["Ordinale", "第一次 / 上次 / 下次", "这是我第一次来中国。"]
    ]
  },
  "esempi": [
    { "gruppo": "次: contare gli episodi", "items": [
      { "t": "这个饭馆我来过好几次。", "tr": "A questo ristorante sono venuto più volte." },
      { "t": "昨天他来了两次。", "tr": "Ieri è venuto due volte.", "nota": "了 con un fatto di ieri." },
      { "t": "我给她打了三次电话。", "tr": "Le ho telefonato tre volte.", "nota": "Il numero di volte sta prima del nome 电话." }
    ] },
    { "gruppo": "遍: dall'inizio alla fine", "items": [
      { "t": "这首歌我听了十遍。", "tr": "Questa canzone l'ho ascoltata dieci volte, tutta." },
      { "t": "这个字我写了五遍。", "tr": "Questo carattere l'ho scritto cinque volte." },
      { "t": "请再说一遍，好吗？", "tr": "Puoi ripetere ancora una volta, per favore?" }
    ] },
    { "gruppo": "Pronome o persona: tra verbo e numero", "items": [
      { "t": "我见过他两次。", "tr": "L'ho incontrato due volte." },
      { "t": "我问了老师三次。", "tr": "Ho chiesto all'insegnante tre volte." },
      { "t": "我找了你好几次。", "tr": "Ti ho cercato più volte." }
    ] },
    { "gruppo": "Nome di luogo: due ordini", "items": [
      { "t": "我去过上海两次。", "tr": "Sono stato a Shanghai due volte." },
      { "t": "我去过两次上海。", "tr": "Sono stato due volte a Shanghai." }
    ] },
    { "gruppo": "Frequenza: periodo prima del verbo", "items": [
      { "t": "我一个星期游泳三次。", "tr": "Vado a nuotare tre volte a settimana." },
      { "t": "他每个月回家一次。", "tr": "Torna a casa una volta al mese." },
      { "t": "你多久看一次电影？", "tr": "Ogni quanto vai al cinema?" }
    ] },
    { "gruppo": "Mai, prima volta, prossima volta", "items": [
      { "t": "我一次也没去过。", "tr": "Non ci sono mai stato, nemmeno una volta." },
      { "t": "这是我第一次来中国。", "tr": "È la prima volta che vengo in Cina." },
      { "t": "下次我请你。", "tr": "La prossima volta offro io." }
    ] }
  ],
  "contrasti": [
    { "q": "Dici di essere stato a Shanghai due volte. Quale frase è corretta?", "opzioni": [
      { "t": "我去过上海两次。", "ok": true, "perche": "Andare è un episodio: si conta con 次, dopo il verbo (e il luogo)." },
      { "t": "我去过上海两遍。", "ok": false, "perche": "遍 conta un'azione fatta dall'inizio alla fine; andare in un luogo è un episodio, non un percorso." }
    ] },
    { "q": "Dici: «L'ho incontrato due volte».", "opzioni": [
      { "t": "我见过他两次。", "ok": true, "perche": "Il pronome sta tra il verbo e il numero." },
      { "t": "我见过两次他。", "ok": false, "perche": "Un pronome non segue il numero: viene subito dopo il verbo." }
    ] },
    { "q": "Dici: «Vado in piscina tre volte a settimana».", "opzioni": [
      { "t": "我一个星期游泳三次。", "ok": true, "perche": "Il periodo (一个星期) sta prima del verbo, le volte (三次) dopo." },
      { "t": "我游泳三次一个星期。", "ok": false, "perche": "Il periodo di riferimento non può chiudere la frase: precede il verbo." }
    ] },
    { "q": "Dici: «È la prima volta che vengo in Cina».", "opzioni": [
      { "t": "这是我第一次来中国。", "ok": true, "perche": "第一次 è l'ordinale: 第 serve per «prima»." },
      { "t": "这是我一次来中国。", "ok": false, "perche": "Senza 第 il numero diventa una quantità («una volta»), non un ordinale." }
    ] },
    { "q": "Dici di aver visto un film tre volte. Quale frase è corretta?", "opzioni": [
      { "t": "这个电影我看了三次。", "ok": true, "perche": "L'oggetto precede il verbo come tema e le volte seguono il verbo." },
      { "t": "我三次看了这个电影。", "ok": false, "perche": "Le volte non possono stare prima del verbo." }
    ] },
    { "q": "Chiedi a un amico ogni quanto va al cinema.", "opzioni": [
      { "t": "你多久看一次电影？", "ok": true, "perche": "多久…一次 chiede la frequenza: ogni quanto tempo, una volta." },
      { "t": "你看了多久电影？", "ok": false, "perche": "Questa frase chiede per quanto tempo è durata una visita (durata), non la frequenza." }
    ] },
    { "q": "Racconti: «Ha ripetuto ancora una volta, come prima» (è già successo).", "opzioni": [
      { "t": "他又说了一遍。", "ok": true, "perche": "又 si usa per una ripetizione già avvenuta." },
      { "t": "他再说了一遍。", "ok": false, "perche": "再 guarda avanti (richieste, intenzioni): per una ripetizione già avvenuta serve 又." }
    ] },
    { "q": "Dici di aver letto un romanzo dall'inizio alla fine due volte.", "opzioni": [
      { "t": "这本小说我看了两遍。", "ok": true, "perche": "遍 conta le letture complete." },
      { "t": "这本小说我看了两个。", "ok": false, "perche": "个 conta le cose e le persone, non le letture di un libro: qui serve 遍." }
    ] }
  ],
  "dialogo": {
    "titolo": "Il ristorante di cui si parla",
    "righe": [
      { "chi": "A", "t": "周末我们去吃火锅吧？", "tr": "Nel fine settimana andiamo a mangiare la pentola calda?" },
      { "chi": "B", "t": "好啊，那家店你去过吗？", "tr": "Volentieri. In quel locale ci sei stato?" },
      { "chi": "A", "t": "我去过三次了，每次都要等很久。", "tr": "Ci sono già stato tre volte, e ogni volta c'è da aspettare molto." },
      { "chi": "B", "t": "我一次也没去过。你给他们打电话了吗？", "tr": "Io non ci sono mai stato. Hai telefonato loro?" },
      { "chi": "A", "t": "打了两次，一直没人接。", "tr": "Due volte, e nessuno risponde." },
      { "chi": "B", "t": "那我们下次早一点去吧。", "tr": "Allora la prossima volta andiamoci un po' prima." }
    ],
    "esercizi": [
      { "q": "Quante volte è stato A in quel locale?", "opzioni": [
        { "t": "Tre volte.", "ok": true, "perche": "去过三次了: l'esperienza, con 次 dopo 过." },
        { "t": "Due volte.", "ok": false, "perche": "Due sono le telefonate (打了两次)." },
        { "t": "Mai.", "ok": false, "perche": "Mai è B, che dice 我一次也没去过." }
      ] },
      { "q": "Che cosa dice 我一次也没去过?", "opzioni": [
        { "t": "Non ci sono mai stato, nemmeno una volta.", "ok": true, "perche": "一次也没 è l'enfasi che nega ogni volta, anche la prima." },
        { "t": "Ci sono stato una volta sola.", "ok": false, "perche": "Per «una volta sola» si direbbe 只去过一次." },
        { "t": "Ci vado ogni volta.", "ok": false, "perche": "Con 没 il senso è negativo, non c'è nessuna abitudine." }
      ] },
      { "q": "Che cosa si legge in 打了两次，一直没人接?", "opzioni": [
        { "t": "Ha telefonato due volte e nessuno ha risposto.", "ok": true, "perche": "打了两次: l'azione concreta di telefonare, contata con 次." },
        { "t": "Ha parlato al telefono due ore.", "ok": false, "perche": "Per le ore servirebbe 两个小时." },
        { "t": "Nessuno ha telefonato.", "ok": false, "perche": "È A che ha telefonato." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano pone il numero davanti al verbo come in «tre volte sono stato» (我三次去过北京), mette il pronome dopo il numero («due volte lui», 我见过两次他), usa 遍 per contare ogni ripetizione (我去过三遍上海) e mette il periodo di una frequenza dopo il verbo.",
    "perche": "L'italiano ha un'unica parola, «volte», che può stare quasi ovunque. In cinese 次 e 遍 sono classificatori e seguono il verbo; il pronome, breve, passa prima; 遍 chiede un percorso intero, e un viaggio non lo è.",
    "esci": "Scrivi il verbo, aggiungi 过 o 了 se serve, metti l'oggetto se è un pronome o una persona, poi numero e 次. Per leggere, dire, ascoltare e ripetere usa 遍. Se dici «ogni settimana, ogni mese», parti da quel periodo e mettilo prima del verbo.",
    "esempi": [
      { "sbagliata": "我三次去过北京。", "giusta": "我去过北京三次。" },
      { "sbagliata": "我见过两次他。", "giusta": "我见过他两次。" },
      { "sbagliata": "我去过三遍上海。", "giusta": "我去过上海三次。" },
      { "sbagliata": "我去一次电影院一个月。", "giusta": "我一个月去一次电影院。" }
    ]
  },
  "curiosi": [
    { "titolo": "回 e 趟: parenti di 次", "t": "In lingua parlata **回** si usa come 次: 我去过两回, 看了三回. Ha un sapore più familiare e si trova in frasi come 这是怎么回事. **趟** conta i viaggi di andata e ritorno e le corse: 去一趟北京 («fare un salto a Pechino»), 跑了两趟. Se la persona torna a casa, è una 趟; se ci è stata, è una 次." },
    { "titolo": "下: l'azione breve", "t": "**下** conta i colpi e i gesti rapidi: 敲了三下 («ha bussato tre volte»). Con il numero 一, 一下ammorbidisce l'azione e la rende breve e leggera: 看一下, 等一下 («dai un'occhiata», «aspetta un attimo»). Qui 一下 non dice più «una volta», dice «un poco»." },
    { "titolo": "第一次, 下次, 上次", "t": "Ogni ordinale con 次 è un nome e si usa dove si usa un nome: 这次, 下次, 上次, 每次, 第一次. Così 下次再说 vuol dire «ne parliamo la prossima volta», e un invito rimandato spesso si chiude con 下次吧." },
    { "titolo": "再 e 又: ancora una volta", "t": "Con 遍 e 次 ricorrono spesso 再 e 又. **再** guarda avanti: 请再说一遍, 我想再看一次. **又** guarda indietro: 他又说了一遍, 又下雨了. Chi dice 请又说一遍 usa un passato dove la richiesta è futura." }
  ],
  "pragmatica": "Per farsi ripetere qualcosa la formula più comune è 请再说一遍 (o 你能再说一遍吗？), con 慢一点儿 se è troppo veloce. Per lo studio, 听一遍, 读两遍, 写五遍 sono le istruzioni normali di ogni insegnante. Quando racconti una storia, 有一次 apre un episodio («una volta…»), 每次 una regolarità e 一次又一次 una ripetizione sofferta. 第一次 è sempre una buona apertura per una confessione: 这是我第一次说中文。",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我去过北京三次。", "opzioni": [
      { "t": "Sono stato a Pechino tre volte.", "ok": true, "perche": "去过 + 北京 + 三次: esperienza contata." },
      { "t": "Andrò a Pechino tre volte.", "ok": false, "perche": "Il futuro non ha 过 e richiede 要 o 会." },
      { "t": "A Pechino ci sono tre di noi.", "ok": false, "perche": "三次 conta le volte, non le persone." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我一次也没去过。", "opzioni": [
      { "t": "Non ci sono mai stato, nemmeno una volta.", "ok": true, "perche": "一次也没 nega ogni singola volta, anche la prima." },
      { "t": "Ci sono stato una volta.", "ok": false, "perche": "Con 没 il senso è negativo." },
      { "t": "Non so se ci sono stato.", "ok": false, "perche": "La frase afferma in modo netto che non c'è mai stato." }
    ] },
    { "k": "buco", "zh": "请再说一＿。", "tr": "Per favore, ripeti ancora una volta.", "opzioni": [
      { "t": "遍", "ok": true, "perche": "遍 conta la ripetizione di una frase intera." },
      { "t": "个", "ok": false, "perche": "个 è il classificatore dei nomi, non conta le volte." },
      { "t": "本", "ok": false, "perche": "本 è il classificatore dei libri." }
    ] },
    { "k": "buco", "zh": "我见过他两＿。", "tr": "L'ho incontrato due volte.", "opzioni": [
      { "t": "次", "ok": true, "perche": "Incontrare è un episodio: si conta con 次." },
      { "t": "遍", "ok": false, "perche": "遍 vuole un'azione che va dall'inizio alla fine." },
      { "t": "本", "ok": false, "perche": "本 è il classificatore dei libri." }
    ] },
    { "k": "ordine", "t": "我去过北京三次", "tr": "Sono stato a Pechino tre volte.", "alt": ["我去过三次北京"] },
    { "k": "ordine", "t": "我见过他两次", "tr": "L'ho incontrato due volte." },
    { "k": "trasforma", "base": "我见过他。", "consegna": "Aggiungi «due volte» alla frase.", "accetta": ["我见过他两次。"], "rifiutate": [
      { "t": "我见过两次他。", "perche": "Il pronome non segue il numero." }
    ], "perche": "Il pronome oggetto resta subito dopo il verbo, poi vengono numero e 次." },
    { "k": "trasforma", "base": "我游泳。", "consegna": "Dì che vai a nuotare tre volte a settimana.", "accetta": ["我一个星期游泳三次。", "我每个星期游泳三次。", "我每周游泳三次。"], "rifiutate": [
      { "t": "我游泳三次一个星期。", "perche": "Il periodo viene prima del verbo." }
    ], "perche": "Periodo prima del verbo, volte dopo il verbo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ci sono stato due volte.»", "a": "我去过两次。", "accetta": ["我去过两次了。"], "perche": "过 + numero + 次 dice quante volte si ha l'esperienza." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Questo libro l'ho letto due volte.»", "a": "这本书我看了两遍。", "accetta": ["这本书我看过两遍。", "这本书我读了两遍。", "这本书我读过两遍。"], "perche": "L'oggetto sta davanti come tema, e 遍 conta le letture complete." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你去过北京吗？" },
      { "chi": "B", "t": "去过，我去过＿。", "buco": true }
    ], "opzioni": [
      { "t": "两次", "ok": true, "perche": "两次 risponde a «quante volte»: il numero con 次 sta dopo il verbo." },
      { "t": "次两", "ok": false, "perche": "Il numero precede il classificatore." },
      { "t": "两个", "ok": false, "perche": "个 conta gli oggetti, non le volte." }
    ] },
    { "k": "scegli", "q": "In quale frase l'ordine delle parole è corretto?", "opzioni": [
      { "t": "我找了你好几次。", "ok": true, "perche": "Il pronome sta tra il verbo e il numero." },
      { "t": "我找了好几次你。", "ok": false, "perche": "Il pronome non va dopo il numero." },
      { "t": "我好几次找了你。", "ok": false, "perche": "Le volte non vanno prima del verbo." }
    ] }
  ],
  "capaci": [
    "Sai contare le volte con 次 e 遍 mettendo il numero dopo il verbo.",
    "Sai scegliere tra 次 (episodi) e 遍 (azione dall'inizio alla fine) e chiedere 几次 o 多久…一次.",
    "Sai collocare pronomi, nomi di persona e di luogo rispetto al numero di volte.",
    "Sai dire la frequenza (un periodo prima del verbo), «mai, nemmeno una volta» e «la prima volta»."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Measure words for verbs»: verbo + numero + classificatore, 次, 遍, 下 e pronome oggetto tra verbo e numero",
    "Chinese Grammar Wiki (AllSet Learning), «Comparing 遍 and 次»: 遍 per l'azione dall'inizio alla fine, 次 per le volte, esempi con 去过三次北京",
    "mandarintemple.com, pagina HSK 3 su «quantity complement for actions»: pronome oggetto prima del numero (找了他两次)",
    "CC-CEDICT, voci 次, 遍 e 趟, e Tatoeba (cinese, es. 她去过三次法国, 我去过一次京都, 你多久看一次牙医？, 请再说一遍), consultati con grep sui corpora locali"
  ]
};
