/* Lezione 2 · Il possesso: 的 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["possesso"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "这是我的书。", "tr": "Questo è il mio libro." },
      { "t": "老师的手机很贵。", "tr": "Il cellulare dell'insegnante è caro." },
      { "t": "她是我妈妈。", "tr": "Lei è mia madre." },
      { "t": "这本书是我的。", "tr": "Questo libro è mio." }
    ],
    "domanda": "Guarda dove stanno chi possiede (我, 老师) e la cosa posseduta (书, 手机): in quale ordine? Che cosa c'è in mezzo? Poi confronta la terza frase: perché in 我妈妈 non c'è? E nell'ultima frase, che cosa è successo al nome dopo 的?",
    "risposta": "**Prima chi possiede, poi la cosa**, con **的** in mezzo: 我的书, 老师的手机. È l'ordine contrario all'italiano («il libro di me»). Con la madre, una persona vicina, 的 può cadere: 我妈妈. Nell'ultima frase il nome 书 è già stato detto (这本书), quindi dopo 的 non serve ripeterlo: 我的 vale «il mio»."
  },
  "regola": {
    "enunciato": "In cinese il **possessore** viene **prima** di ciò che possiede, e **的** li collega: **possessore + 的 + cosa**. Funziona con i pronomi (我的, 你的, 他的) e con i nomi (老师的书). 的 non cambia mai e non c'è l'articolo. Con familiari, amici stretti e luoghi a cui si appartiene (家, 学校) 的 spesso cade. Se il nome è già noto, si può lasciare solo il possessore con 的: 这是我的.",
    "schema": ["possessore", "的", "cosa posseduta"],
    "punti": [
      { "ok": true, "t": "**Ordine inverso rispetto all'italiano**: 我的书 («io-di libro»), 老师的手机 («insegnante-di cellulare»). In italiano si dice «il libro dell'insegnante»: il cinese parte da chi possiede." },
      { "ok": true, "t": "**Con le cose 的 serve**: 我的书, 你的手机, 他的车. Senza 的, in una frase neutra, il risultato suona incompleto." },
      { "ok": true, "t": "**Con familiari e persone vicine 的 è facoltativo**: 我妈妈 e 我的妈妈 sono tutti e due corretti, perché con un rapporto stretto il 的 si può omettere." },
      { "ok": true, "t": "**Con casa, scuola, azienda 的 spesso cade**: 我家, 我们学校, 我们公司. Il possessore è visto come parte di quel gruppo, non come un padrone." },
      { "ok": true, "t": "**Il nome dopo 的 può sparire se è già noto**: 这本书是我的 («questo libro è mio»), 那个是他的. Così 我的 diventa «il mio» come pronome. Domanda: 这是谁的书？ o 这本书是谁的？" },
      { "ok": true, "t": "**Si possono concatenare**: 我朋友的手机 («il cellulare del mio amico»), 我妈妈的朋友 («l'amico di mia madre»). Il possessore più lontano dalla cosa sta per primo." },
      { "ok": false, "t": "**Non si scambia l'ordine e non si sostituisce 的 con «di»**: 书我的, 手机的老师, 的我书 sono tutte forme sbagliate. 的 sta sempre tra il possessore e la cosa." }
    ]
  },
  "logica": [
    "L'italiano dice «il libro di Marco»: prima la cosa, poi chi la possiede, con «di». Il cinese costruisce l'espressione dall'altro lato, come se fosse un'etichetta: **chi** + 的 + **che cosa**. Tutto ciò che precede il nome lo descrive (è un modificatore), e 的 è il segno che il blocco davanti descrive il nome che segue. Per questo 马可的朋友 vuol dire «l'amico di Marco» (non «Marco, amico»), e per lo stesso motivo la cosa posseduta sta sempre alla fine.",
    "Perché in 我妈妈 il 的 cade? Quando il legame è così stretto da formare quasi una parola sola (madre, padre, amico, casa, scuola), il cinese non sente il bisogno di segnare il possesso: l'appartenenza è già nel nome. Con oggetti come libri, cellulari, borse il legame è casuale, e 的 lo segnala. Regola pratica: parente, amico, casa o scuola, 的 è facoltativo; qualsiasi altra cosa, 的."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Una cosa tua", "我的 + cosa", "我的手机"],
      ["Una cosa di una persona", "persona + 的 + cosa", "老师的书"],
      ["Un familiare o amico stretto", "我 + persona (的 facoltativo)", "我妈妈 · 我的妈妈"],
      ["Casa, scuola, azienda", "我 / 我们 + luogo (di solito senza 的)", "我家 · 我们学校"],
      ["Il nome è già noto: «è mio»", "我的 da solo", "这本书是我的。"],
      ["Di chi è?", "谁的 + cosa", "这是谁的书？"],
      ["Due possessori in fila", "A + B + 的 + cosa", "我朋友的手机"]
    ]
  },
  "esempi": [
    { "gruppo": "Possessore + 的 + cosa", "items": [
      { "t": "这是我的书。", "tr": "Questo è il mio libro." },
      { "t": "那是你的手机。", "tr": "Quello è il tuo cellulare." },
      { "t": "老师的书很贵。", "tr": "Il libro dell'insegnante è caro." },
      { "t": "马可的朋友是中国人。", "tr": "L'amico di Marco è cinese." }
    ] },
    { "gruppo": "Familiari e amici: 的 facoltativo", "items": [
      { "t": "我妈妈是老师。", "tr": "Mia madre è insegnante.", "nota": "Si può anche dire 我的妈妈是老师: stesso senso, tono più marcato." },
      { "t": "我哥哥是学生。", "tr": "Mio fratello maggiore è studente.", "nota": "哥哥 è il fratello maggiore." },
      { "t": "他是我的朋友。", "tr": "Lui è un mio amico." }
    ] },
    { "gruppo": "Casa e scuola: di solito senza 的", "items": [
      { "t": "我家很大。", "tr": "Casa mia è grande." },
      { "t": "我们学校在市中心。", "tr": "La nostra scuola è in centro." }
    ] },
    { "gruppo": "Il nome cade: 我的 vale «il mio»", "items": [
      { "t": "这本书是我的。", "tr": "Questo libro è mio." },
      { "t": "那个是他的。", "tr": "Quello è suo." },
      { "t": "这是谁的书？", "tr": "Di chi è questo libro?", "nota": "谁的 = «di chi»: 谁 prende 的 come un nome." }
    ] },
    { "gruppo": "Una catena di possessori", "items": [
      { "t": "这是我朋友的手机。", "tr": "Questo è il cellulare del mio amico." },
      { "t": "我妈妈的朋友是老师。", "tr": "L'amica di mia madre è insegnante." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «il tuo cellulare»?", "opzioni": [
      { "t": "你的手机", "ok": true, "perche": "Prima chi possiede, poi 的, poi la cosa." },
      { "t": "手机你的", "ok": false, "perche": "Segui l'ordine italiano (cosa + possessore): in cinese la cosa viene per ultima." }
    ] },
    { "q": "Mostri il tuo libro a un amico e dici «Questo è il mio libro».", "opzioni": [
      { "t": "这是我的书。", "ok": true, "perche": "Con un oggetto 的 è necessario: 我的书." },
      { "t": "这是我书。", "ok": false, "perche": "Senza 的 il legame tra 我 e 书 non è segnato; la forma breve vale per i familiari, non per le cose." }
    ] },
    { "q": "Qualcuno chiede 这是谁的书？ e il libro è tuo. Come rispondi «È mio»?", "opzioni": [
      { "t": "是我的。", "ok": true, "perche": "Il nome 书 è già noto: basta 我的, che vale «il mio»." },
      { "t": "是我。", "ok": false, "perche": "是我 vuol dire «sono io», non «è mio»: serve 的 per dire il possesso." }
    ] },
    { "q": "Come dici «il libro dell'insegnante»?", "opzioni": [
      { "t": "老师的书", "ok": true, "perche": "Il possessore 老师 viene prima, poi 的, poi la cosa." },
      { "t": "书的老师", "ok": false, "perche": "Così diventa «l'insegnante del libro»: l'ordine è invertito e il senso cambia." },
      { "t": "书老师的", "ok": false, "perche": "的 dopo la cosa non lega nulla: sta tra possessore e cosa." }
    ] },
    { "q": "Come dici «il cellulare del mio amico»?", "opzioni": [
      { "t": "我朋友的手机", "ok": true, "perche": "我朋友 forma il possessore e 的 lo lega a 手机, in fondo." },
      { "t": "手机的我朋友", "ok": false, "perche": "Dopo 的 deve venire la cosa posseduta, non il possessore." }
    ] },
    { "q": "Vuoi chiedere «Di chi è questo cellulare?»", "opzioni": [
      { "t": "这是谁的手机？", "ok": true, "perche": "谁的 prende il posto del possessore, davanti a 手机." },
      { "t": "这是手机谁的？", "ok": false, "perche": "谁的 è un possessore: va davanti alla cosa, non dopo." }
    ] },
    { "q": "Che cosa vuol dire 这本书是他的?", "opzioni": [
      { "t": "Questo libro è suo.", "ok": true, "perche": "他的 è «il suo»: il nome 书 è già detto e non si ripete." },
      { "t": "Questo libro parla di lui.", "ok": false, "perche": "的 indica possesso, non l'argomento di cui un libro parla." },
      { "t": "Lui ha scritto questo libro.", "ok": false, "perche": "的 non dice chi ha scritto: dice a chi appartiene." }
    ] },
    { "q": "Parli del cane di Marco: «il cane di Marco».", "opzioni": [
      { "t": "马可的狗", "ok": true, "perche": "Il possessore è un nome proprio e prende 的 come tutti gli altri." },
      { "t": "狗的马可", "ok": false, "perche": "Il possessore sarebbe il cane e «Marco» la cosa posseduta: il contrario di ciò che vuoi dire." }
    ] }
  ],
  "dialogo": {
    "titolo": "Un cellulare sul tavolo",
    "righe": [
      { "chi": "A", "t": "这是谁的手机？", "tr": "Di chi è questo cellulare?" },
      { "chi": "B", "t": "不是我的。是你的吗？", "tr": "Non è mio. È tuo?" },
      { "chi": "A", "t": "也不是我的。我想是老师的。", "tr": "Non è mio nemmeno. Penso che sia dell'insegnante." },
      { "chi": "B", "t": "对，你看，他的书也在这儿。", "tr": "Sì, guarda, anche il suo libro è qui." }
    ],
    "esercizi": [
      { "q": "Che cosa vuol dire 不是我的 nella risposta di B?", "opzioni": [
        { "t": "Non è mio.", "ok": true, "perche": "我的 vale «il mio», e 手机 è già noto dal contesto." },
        { "t": "Io non sono io.", "ok": false, "perche": "Il possesso si segna con 的: senza di esso la frase non dice «mio»." },
        { "t": "Non ho un cellulare.", "ok": false, "perche": "Per dire «non ho» servirebbe 没有: qui si nega il possesso di quel cellulare." }
      ] },
      { "q": "A chi appartiene il cellulare secondo A?", "opzioni": [
        { "t": "All'insegnante.", "ok": true, "perche": "A dice 我想是老师的: 老师的 = «dell'insegnante»." },
        { "t": "A B.", "ok": false, "perche": "B dice 不是我的, quindi non è suo." },
        { "t": "A A.", "ok": false, "perche": "A dice 也不是我的: nemmeno suo." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano capovolge l'ordine (这是书我的), oppure dimentica 的 con le cose (这是我书) perché ha imparato che 我妈妈 si dice senza 的. A volte lo mette anche al posto di «di» dopo il nome (手机的老师).",
    "perche": "In italiano il possessore viene dopo la cosa («il libro di Marco», «il libro mio») e il «di» è obbligatorio. In cinese il possessore apre l'espressione e 的 lo lega al nome. La regola dei familiari, che permette 我妈妈, si estende per errore a tutti gli oggetti.",
    "esci": "Chiediti: chi possiede? Scrivilo per primo. Poi chiediti se la cosa è un familiare, un amico, una casa o una scuola. Se sì, 的 è facoltativo. Se è un libro, un cellulare o un altro oggetto, metti 的 tra possessore e cosa.",
    "esempi": [
      { "sbagliata": "这是书我的。", "giusta": "这是我的书。" },
      { "sbagliata": "这是我书。", "giusta": "这是我的书。" },
      { "sbagliata": "这是手机老师的。", "giusta": "这是老师的手机。" }
    ]
  },
  "curiosi": [
    { "titolo": "Un solo 的 per molti usi", "t": "Il possesso è solo uno degli usi di 的. La stessa particella lega al nome qualsiasi cosa lo descriva: un possessore (我的书), una qualità (好看的书, «un bel libro»), un'intera frase (我买的书, «il libro che ho comprato»). In tutti i casi lo schema è lo stesso: tutto ciò che sta davanti a 的 descrive il nome che viene dopo." },
    { "titolo": "Il 的 con i familiari", "t": "Con familiari, amici stretti, fidanzati, scuola e lavoro il 的 si può omettere: l'omissione dipende dal tipo di rapporto. Con persone con cui il rapporto non è così stretto, la forma con 的 è quella normale: 我的老师, 我的朋友." },
    { "titolo": "Un carattere, più pronunce", "t": "Come particella, 的 si legge de, in tono neutro. Lo stesso carattere si legge in modo diverso in poche parole: 的确 (díquè, «davvero») e 目的 (mùdì, «scopo»). Non sono parole del possesso, ma conviene saperlo quando le incontri. L'app mostra la lettura corretta in ogni parola." }
  ],
  "pragmatica": "Nelle presentazioni e nei dialoghi di ogni giorno usa 我朋友, 我妈妈, 我家 per le persone e i luoghi vicini, e 我的, 你的 per gli oggetti. Per indicare che una cosa è tua e non altrui, 我的 con il tono marcato è la scelta giusta: 这是我的 («questo è mio, non tuo»). Con persone con cui non c'è un rapporto stretto, la forma con 的 (我的妈妈, 我的老师) è quella normale.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "老师的书很贵。", "opzioni": [
      { "t": "Il libro dell'insegnante è caro.", "ok": true, "perche": "老师的书 = «il libro dell'insegnante», e 很贵 = «è caro»." },
      { "t": "L'insegnante compra libri.", "ok": false, "perche": "Non c'è nessun verbo d'azione: la frase descrive il prezzo di un libro." },
      { "t": "L'insegnante è caro.", "ok": false, "perche": "贵 descrive il libro, non l'insegnante: 的 li lega in 老师的书." }
    ] },
    { "k": "scegli", "q": "Quale di queste frasi è sbagliata?", "opzioni": [
      { "t": "这是我书。", "ok": true, "perche": "Con un oggetto serve 的: 我的书. 我妈妈 si dice senza 的 solo perché è un familiare." },
      { "t": "这是我的书。", "ok": false, "perche": "È la forma corretta con un oggetto." },
      { "t": "这是我妈妈。", "ok": false, "perche": "Con un familiare 的 è facoltativo: la frase è corretta." }
    ] },
    { "k": "buco", "zh": "这是＿的书。", "tr": "Questo è il libro dell'insegnante.", "opzioni": [
      { "t": "老师", "ok": true, "perche": "Il possessore è l'insegnante e sta davanti a 的." },
      { "t": "吗", "ok": false, "perche": "吗 chiude una domanda e non può essere un possessore." },
      { "t": "不", "ok": false, "perche": "不 nega un verbo e non può essere un possessore." }
    ] },
    { "k": "buco", "zh": "这本书是我＿。", "tr": "Questo libro è mio.", "opzioni": [
      { "t": "的", "ok": true, "perche": "我的 vale «il mio», e 书 è già stato nominato." },
      { "t": "是", "ok": false, "perche": "是 è già nella frase e qui non ripete il possesso." },
      { "t": "也", "ok": false, "perche": "也 vuol dire «anche», non indica il possesso." }
    ] },
    { "k": "buco", "zh": "这是＿的手机？", "tr": "Di chi è questo cellulare?", "opzioni": [
      { "t": "谁", "ok": true, "perche": "谁的 = «di chi», e sta davanti alla cosa come ogni possessore." },
      { "t": "什么", "ok": false, "perche": "什么 chiede «che cosa», non «di chi»." },
      { "t": "不", "ok": false, "perche": "不 nega un verbo: non fa domande." }
    ] },
    { "k": "ordine", "t": "这是我朋友的手机", "tr": "Questo è il cellulare del mio amico." },
    { "k": "ordine", "t": "他们的老师是中国人", "tr": "Il loro insegnante è cinese." },
    { "k": "trasforma", "base": "这是书。", "consegna": "Di' che è il tuo libro: «Questo è il mio libro».", "accetta": ["这是我的书。"], "rifiutate": [
      { "t": "这是我书。", "perche": "Con un oggetto 的 serve tra il possessore e la cosa." }
    ], "perche": "Il possessore 我 va davanti a 书, con 的 in mezzo." },
    { "k": "trasforma", "base": "这是我的书。", "consegna": "Di' «Questo è mio», lasciando cadere il nome della cosa.", "accetta": ["这是我的。", "这个是我的。"], "rifiutate": [
      { "t": "这是我。", "perche": "是我 vuol dire «sono io»: senza 的 non c'è possesso." }
    ], "perche": "Quando la cosa è nota, 我的 basta e vale «il mio»." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Il cellulare dell'insegnante è caro.»", "a": "老师的手机很贵。", "accetta": ["老师的手机很贵"], "perche": "老师 + 的 + 手机: possessore, 的, cosa. 很 sta davanti all'aggettivo 贵." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Il mio amico è insegnante.»", "a": "我朋友是老师。", "accetta": ["我的朋友是老师。", "我朋友是老师", "我的朋友是老师"], "perche": "Con un amico 的 è facoltativo; poi 是 collega 朋友 e 老师, che sono due nomi." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "这是谁的书？" },
      { "chi": "B", "t": "是＿。", "buco": true }
    ], "opzioni": [
      { "t": "我的", "ok": true, "perche": "A chiede di chi è il libro: 我的 vale «mio»." },
      { "t": "的我", "ok": false, "perche": "的 non può precedere il possessore." },
      { "t": "我", "ok": false, "perche": "是我 vuol dire «sono io», non «è mio»." }
    ] }
  ],
  "capaci": [
    "Sai dire di chi è una cosa con possessore + 的 + cosa, in questo ordine.",
    "Sai quando 的 cade (familiari, amici, casa, scuola) e quando è necessario (oggetti).",
    "Sai rispondere «è mio» con 我的 e chiedere «di chi è?» con 谁的.",
    "Sai concatenare due possessori: 我朋友的手机."
  ],
  "glosse": {
    "老师的手机": "Il cellulare dell'insegnante",
    "这本书是谁的": "Di chi è questo libro?",
    "手机的老师": "!Il cellulare di un insegnante (ordine sbagliato)",
    "马可的朋友": "L'amico di Marco"
  },
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Expressing close possession without de»: 的 omesso con familiari, amici, scuola e lavoro",
    "Tatoeba cinese-italiano (es. 这是我的书, 我们学校在市中心, 我家很大, 这是我的妈妈) e CC-CEDICT, voce 的, consultati nei corpora locali"
  ]
};
