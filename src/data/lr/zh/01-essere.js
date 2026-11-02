/* Lezione 1 · Essere: 是 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["essere"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我是学生。", "tr": "Sono studente." },
      { "t": "他不是老师。", "tr": "Lui non è insegnante." },
      { "t": "我们都是意大利人。", "tr": "Siamo tutti italiani." },
      { "t": "我很忙。", "tr": "Sono occupato." }
    ],
    "domanda": "Nelle prime tre frasi compare 是: cambia forma quando cambia la persona (我, 他, 我们)? Dove stanno 不 e 都 rispetto a 是? E nella quarta frase, dove l'italiano direbbe ancora «sono», che cosa c'è al posto di 是?",
    "risposta": "是 resta **identico** con 我, 他 e 我们: niente coniugazione, niente singolare e plurale. 不 («non») e 都 («tutti») stanno **prima** di 是, tra il soggetto e il verbo. Nella quarta frase 是 non c'è: davanti all'aggettivo 忙 («occupato») compare 很, e basta. Quindi 是 collega due **nomi** (我 = 学生); con un aggettivo il cinese non usa «essere»."
  },
  "regola": {
    "enunciato": "**是** collega due nomi e dice che sono la stessa persona o cosa, oppure che il secondo appartiene a una categoria: 我是学生 («io sono studente»). Ha una sola forma per ogni persona, numero e tempo. Si nega mettendo **不** davanti (不是), e le parole **也** («anche») e **都** («tutti») vanno prima di 是. Davanti a un aggettivo, a un'età o a un luogo 是 non serve.",
    "schema": ["chi / che cosa", "(也 · 都 · 不)", "是", "chi / che cosa"],
    "punti": [
      { "ok": true, "t": "**Una sola forma**: 我是, 你是, 他是, 我们是, 他们是. Anche il genere non conta: 他是老师 e 她是老师 hanno lo stesso verbo e lo stesso nome." },
      { "ok": true, "t": "**Nazionalità = paese + 人** («persona»): 意大利人, 中国人, 美国人. Dopo 是 si usa il nome della persona, non quello del paese: 我是意大利人, non 我是意大利." },
      { "ok": true, "t": "**Negazione con 不 davanti a 是**: 我不是老师. Davanti a un quarto tono 不 cambia pronuncia in bú: 不是 si legge bú shì, ma si scrive sempre 不." },
      { "ok": true, "t": "**也 e 都 stanno tra il soggetto e 是**: 我也是学生 («anche io sono studente»), 我们都是学生 («siamo tutti studenti»). Con 不: 我也不是老师 («nemmeno io sono insegnante»)." },
      { "ok": true, "t": "**Domande**: 你是学生吗？ con 吗 in fondo; oppure 你是不是学生？ con la forma «è / non è». Si risponde ripetendo il verbo: 是 («è così»), 不是 («non è così»). Con una parola interrogativa questa rimane al suo posto: 这是什么？, 他是谁？" },
      { "ok": false, "t": "**Niente 是 davanti a un aggettivo**: 我很累, non 我是累. Neppure con l'età (我二十岁) o con un luogo, dove si usa 在 (我在家). 是 serve di regola davanti a un nome (学生, 老师, 星期一); le altre funzioni di 是 arrivano più avanti." }
    ]
  },
  "logica": [
    "In italiano «essere» fa tutto: dice chi sei (sono Marco), come stai (sono stanco), che giorno è (è lunedì) e dove ti trovi (sono a casa). Il cinese ripartisce questi compiti: **是** è solo il segno di uguaglianza tra due nomi. Per le qualità l'aggettivo funziona già da solo come predicato, e 很 lo appoggia («sono molto stanco» o semplicemente «sono stanco»). Per il luogo c'è 在, per l'esistenza c'è 有.",
    "Il verbo non cambia perché il cinese non coniuga: la persona la dice il soggetto, il tempo lo dicono parole come 昨天 («ieri») e 明天 («domani»). Quindi un'unica forma 是 sostituisce sono, sei, è, siamo, siete, sono, ero, sarò. Regola pratica: dopo il verbo c'è un nome? Allora 是. C'è un aggettivo? Allora 很 (o un altro avverbio). C'è un'età, una data, un luogo? Allora niente 是."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Identità o mestiere", "A 是 B", "我是学生。"],
      ["Nazionalità", "paese + 人", "他是美国人。"],
      ["Non è", "不是", "我不是老师。"],
      ["Anche · tutti", "也是 · 都是", "我们都是学生。"],
      ["Domanda sì o no", "…吗 · 是不是", "你是中国人吗？"],
      ["Come sei (qualità)", "很 + aggettivo, senza 是", "我很忙。"],
      ["Età", "numero + 岁, senza 是", "我二十岁。"],
      ["Giorno della settimana", "是 + giorno", "今天是星期一。"]
    ]
  },
  "esempi": [
    { "gruppo": "Chi sei: nome e mestiere", "items": [
      { "t": "我是马可。", "tr": "Sono Marco." },
      { "t": "我是学生。", "tr": "Sono studente.", "nota": "Niente articolo: 学生 vale sia «studente» sia «uno studente»." },
      { "t": "他是我朋友。", "tr": "Lui è un mio amico." }
    ] },
    { "gruppo": "Nazionalità: paese + 人", "items": [
      { "t": "我是意大利人。", "tr": "Sono italiano (o italiana).", "nota": "Lo stesso per uomo e donna." },
      { "t": "她是中国人。", "tr": "Lei è cinese." },
      { "t": "他们是美国人。", "tr": "Sono americani." }
    ] },
    { "gruppo": "Negare: 不 davanti a 是", "items": [
      { "t": "我不是老师。", "tr": "Non sono insegnante." },
      { "t": "他不是我哥哥。", "tr": "Non è mio fratello." }
    ] },
    { "gruppo": "Domande", "items": [
      { "t": "你是学生吗？", "tr": "Sei studente?" },
      { "t": "你是不是中国人？", "tr": "Sei cinese, vero?", "nota": "La forma «è / non è» suggerisce che chi chiede si aspetta di sentire sì." },
      { "t": "这是什么？", "tr": "Che cos'è questo?", "nota": "什么 resta al posto della risposta: 这是书." },
      { "t": "他是谁？", "tr": "Chi è lui?" }
    ] },
    { "gruppo": "也 e 都 prima di 是", "items": [
      { "t": "我也是学生。", "tr": "Anche io sono studente." },
      { "t": "我们都是意大利人。", "tr": "Siamo tutti italiani." }
    ] },
    { "gruppo": "Dove l'italiano dice «sono» e il cinese no", "items": [
      { "t": "我很忙。", "tr": "Sono occupato.", "nota": "Aggettivo: 很, non 是." },
      { "t": "我二十岁。", "tr": "Ho vent'anni." },
      { "t": "今天是星期一。", "tr": "Oggi è lunedì.", "nota": "星期一 è un nome: con 是 la frase è la forma normale; nel parlato rapido si sente anche senza." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Sono stanco»?", "opzioni": [
      { "t": "我很累。", "ok": true, "perche": "累 è un aggettivo e fa da predicato con 很: nessun verbo «essere» tra soggetto e aggettivo." },
      { "t": "我是累。", "ok": false, "perche": "Copi lo schema italiano «sono + aggettivo». 是 collega solo nomi: davanti all'aggettivo non si mette." }
    ] },
    { "q": "Ti presenti: «Sono italiano».", "opzioni": [
      { "t": "我是意大利人。", "ok": true, "perche": "Per la persona serve 人 dopo il nome del paese: 意大利人 è «italiano»." },
      { "t": "我是意大利。", "ok": false, "perche": "意大利 è il paese. Dire 我是意大利 vuol dire «io sono l'Italia»: manca 人." }
    ] },
    { "q": "Come dici «Non sono cinese»?", "opzioni": [
      { "t": "我不是中国人。", "ok": true, "perche": "不 si mette subito prima di 是, come in 不是." },
      { "t": "我是不中国人。", "ok": false, "perche": "Il «non» italiano sta prima del verbo, e anche 不 sta prima del verbo: qui è finito dopo 是." }
    ] },
    { "q": "Anche tu sei studente e vuoi dire «Anche io sono studente».", "opzioni": [
      { "t": "我也是学生。", "ok": true, "perche": "也 si mette davanti al verbo, dopo il soggetto." },
      { "t": "我是也学生。", "ok": false, "perche": "也 non può seguire 是: va prima, tra 我 e 是." },
      { "t": "也我是学生。", "ok": false, "perche": "也 non apre la frase: sta dopo il soggetto." }
    ] },
    { "q": "Come dici «Siamo tutti insegnanti»?", "opzioni": [
      { "t": "我们都是老师。", "ok": true, "perche": "都 riassume il soggetto plurale e va prima di 是." },
      { "t": "我们是都老师。", "ok": false, "perche": "都 non si mette dopo 是: sta tra il soggetto e il verbo, come 也." }
    ] },
    { "q": "Ti stai presentando in modo neutro e dici la tua età: «Ho vent'anni».", "opzioni": [
      { "t": "我二十岁。", "ok": true, "perche": "Con l'età il numero con 岁 basta: l'età non è un nome da collegare a «io»." },
      { "t": "我是二十岁。", "ok": false, "perche": "Nella presentazione neutra 是 è di troppo. Compare solo se si contrappone un'età a un'altra (…不是三十岁)." }
    ] },
    { "q": "Qualcuno ti mostra una foto: come domandi «Che cos'è questo?»", "opzioni": [
      { "t": "这是什么？", "ok": true, "perche": "La parola interrogativa occupa il posto della risposta (这是书), quindi dopo 是." },
      { "t": "什么是这？", "ok": false, "perche": "In italiano «che cosa» può aprire la frase, ma in cinese 什么 resta dove sarebbe la risposta." }
    ] },
    { "q": "Vuoi chiedere a un nuovo compagno se è cinese, con 吗.", "opzioni": [
      { "t": "你是中国人吗？", "ok": true, "perche": "吗 chiude la frase affermativa e la trasforma in domanda sì o no." },
      { "t": "你吗是中国人？", "ok": false, "perche": "吗 va sempre in fondo alla frase, mai in mezzo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Il primo giorno di corso",
    "righe": [
      { "chi": "A", "t": "你好，我是马可。你是中国人吗？", "tr": "Ciao, sono Marco. Sei cinese?" },
      { "chi": "B", "t": "不是，我是美国人。你呢？", "tr": "No, sono americano. E tu?" },
      { "chi": "A", "t": "我是意大利人。他是你朋友吗？", "tr": "Sono italiano. Lui è un tuo amico?" },
      { "chi": "B", "t": "对，他也是美国人。我们都是学生。", "tr": "Sì, anche lui è americano. Siamo tutti e due studenti." },
      { "chi": "A", "t": "我也是学生！", "tr": "Anche io sono studente!" }
    ],
    "esercizi": [
      { "q": "Di che nazionalità è B?", "opzioni": [
        { "t": "Americana.", "ok": true, "perche": "B risponde 不是 alla domanda sulla Cina e poi dice 我是美国人." },
        { "t": "Cinese.", "ok": false, "perche": "A lo chiede, ma B risponde 不是: nega di essere cinese." },
        { "t": "Italiana.", "ok": false, "perche": "L'italiano è Marco, cioè A." }
      ] },
      { "q": "Perché B dice 他也是美国人 con 也 prima di 是?", "opzioni": [
        { "t": "Perché 也 va tra il soggetto e il verbo e qui significa «anche lui».", "ok": true, "perche": "Anche l'amico è americano, come B: 也 sta davanti a 是." },
        { "t": "Perché 也 serve a negare.", "ok": false, "perche": "Per negare serve 不; 也 vuol dire «anche»." },
        { "t": "Perché 也 va sempre in fondo alla frase.", "ok": false, "perche": "In una frase come questa 也 non va in fondo: precede il verbo." }
      ] },
      { "q": "Chi è studente nel dialogo?", "opzioni": [
        { "t": "Tutti e tre: A, B e l'amico di B.", "ok": true, "perche": "B dice 我们都是学生 per sé e per l'amico, poi A aggiunge 我也是学生." },
        { "t": "Solo B.", "ok": false, "perche": "B parla di sé e dell'amico (我们都是), e A conferma di esserlo." },
        { "t": "Solo A.", "ok": false, "perche": "Anche B lo dice per sé stesso con 我们都是学生." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette 是 davanti agli aggettivi (我是累, 我是高兴), davanti all'età o ai luoghi, e dimentica 人 nella nazionalità (我是意大利). Spesso mette anche 不 al posto sbagliato (我是不老师).",
    "perche": "In italiano «essere» regge nomi, aggettivi, età e luoghi: il cervello cerca un verbo prima di ogni cosa. In cinese 是 collega solo due nomi, e il paese e la persona di quel paese sono due nomi diversi (意大利 e 意大利人).",
    "esci": "Prima di scrivere 是 guarda che cosa viene dopo. Un nome (学生, 老师, 意大利人)? Allora 是. Un aggettivo? Allora 很 e niente 是. Un numero con 岁? Niente 是. Un giorno è un nome: 今天是星期一. E per negare metti 不 subito prima di 是: 不是.",
    "esempi": [
      { "sbagliata": "我是累。", "giusta": "我很累。" },
      { "sbagliata": "我是意大利。", "giusta": "我是意大利人。" },
      { "sbagliata": "我是不老师。", "giusta": "我不是老师。" },
      { "sbagliata": "我是也学生。", "giusta": "我也是学生。" }
    ]
  },
  "curiosi": [
    { "titolo": "Un carattere che vuol dire anche «giusto»", "t": "Nel dizionario 是 ha anche il senso di «corretto, vero» e risponde bene a una domanda: 是 equivale a «è così», 不是 a «non è così». In una domanda di conferma, 是的 («sì, è così») è un'altra risposta normale." },
    { "titolo": "Il sì e il no si dicono con il verbo", "t": "Di solito il cinese non risponde con un «sì» e un «no» come parole separate: si ripete il verbo della domanda. A 你是学生吗？ si risponde 是 o 不是; a 你忙吗？ si risponde 忙 o 不忙. Quando vuoi dire «hai ragione» o «è giusto» si usa invece 对." },
    { "titolo": "Il tono di 不 cambia, la scrittura no", "t": "不 si legge bù quando sta davanti a un tono alto, ascendente o basso, ma diventa bú davanti a un quarto tono: 不是 si pronuncia bú shì. L'app mostra il pinyin con il tono della pronuncia reale. Nella scrittura in caratteri resta 不 in ogni caso." },
    { "titolo": "Un 是 con l'accento", "t": "Quando si pronuncia 是 con forza, serve a confermare o a contrapporre: 是 a metà frase può dire «è proprio così», anche davanti a un aggettivo. È un uso di enfasi che incontrerai più avanti (per esempio nella struttura 是…的) e che non riguarda le frasi neutre di questa lezione." }
  ],
  "pragmatica": "Per presentarti dici 我是 e il tuo nome, oppure 我叫 e il tuo nome: tutte e due sono normali. Con una persona che incontri per la prima volta 你是…吗？ serve a verificare chi hai davanti. Tra amici si risponde spesso con il solo 是 o 不是, e la risposta lunga (我不是中国人，我是意大利人) si usa quando vuoi correggere un malinteso.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "她是中国人。", "opzioni": [
      { "t": "Lei è cinese.", "ok": true, "perche": "是 collega 她 e 中国人: paese + 人 dà la nazionalità." },
      { "t": "Lei è in Cina.", "ok": false, "perche": "Per il luogo servirebbe 在: 她在中国." },
      { "t": "Lei non è cinese.", "ok": false, "perche": "Non c'è 不 prima di 是: la frase è affermativa." }
    ] },
    { "k": "scegli", "q": "Quale di queste frasi è sbagliata?", "opzioni": [
      { "t": "我是忙。", "ok": true, "perche": "忙 è un aggettivo: 是 non si mette davanti, serve 我很忙." },
      { "t": "我是老师。", "ok": false, "perche": "老师 è un nome: 是 è giusto." },
      { "t": "我很忙。", "ok": false, "perche": "Aggettivo con 很, senza 是: è la forma giusta." }
    ] },
    { "k": "buco", "zh": "他＿是老师。", "tr": "Lui non è insegnante.", "opzioni": [
      { "t": "不", "ok": true, "perche": "不 nega 是 e si mette subito prima: 不是." },
      { "t": "没", "ok": false, "perche": "没 nega 有 e le azioni passate, non 是." },
      { "t": "吗", "ok": false, "perche": "吗 forma una domanda e va in fondo alla frase." }
    ] },
    { "k": "buco", "zh": "我们＿是学生。", "tr": "Siamo tutti studenti.", "opzioni": [
      { "t": "都", "ok": true, "perche": "都 vuol dire «tutti» e sta prima di 是." },
      { "t": "也", "ok": false, "perche": "也 vuol dire «anche», non «tutti»." },
      { "t": "很", "ok": false, "perche": "很 si mette davanti agli aggettivi, non davanti a 是." }
    ] },
    { "k": "buco", "zh": "你是中国人＿？", "tr": "Sei cinese?", "opzioni": [
      { "t": "吗", "ok": true, "perche": "吗 in fondo trasforma l'affermazione in una domanda sì o no." },
      { "t": "不", "ok": false, "perche": "不 si mette davanti a 是, non in fondo alla domanda." },
      { "t": "也", "ok": false, "perche": "也 vuol dire «anche» e va davanti a 是." }
    ] },
    { "k": "ordine", "t": "我也是学生", "tr": "Anche io sono studente." },
    { "k": "ordine", "t": "你是不是意大利人", "tr": "Sei italiano, vero?" },
    { "k": "trasforma", "base": "我是老师。", "consegna": "Trasforma la frase in negativa: «Non sono insegnante».", "accetta": ["我不是老师。"], "rifiutate": [
      { "t": "我是不老师。", "perche": "不 va subito prima di 是, non dopo." }
    ], "perche": "La negazione 不 si mette davanti al verbo 是: 不是." },
    { "k": "trasforma", "base": "我是学生。", "consegna": "Aggiungi «anche»: «Anche io sono studente».", "accetta": ["我也是学生。"], "rifiutate": [
      { "t": "我是也学生。", "perche": "也 va prima di 是, non dopo." }
    ], "perche": "也 si mette tra il soggetto e il verbo: 我也是." },
    { "k": "trasforma", "base": "他是中国人。", "consegna": "Trasformala in una domanda con 吗: «Lui è cinese?»", "accetta": ["他是中国人吗？", "他是中国人吗?"], "rifiutate": [
      { "t": "他吗是中国人？", "perche": "吗 va sempre in fondo alla frase." }
    ], "perche": "Basta aggiungere 吗 alla fine: l'ordine delle parole non cambia." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Lei non è cinese, è americana.»", "a": "她不是中国人，她是美国人。", "accetta": ["她不是中国人,她是美国人。", "她不是中国人，是美国人。", "她不是中国人,是美国人。"], "perche": "不是 per negare, poi 是 con 美国人: paese + 人 dà la nazionalità." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Siamo tutti amici.»", "a": "我们都是朋友。", "accetta": ["我们都是朋友"], "perche": "都 va tra il soggetto plurale e 是; 朋友 è un nome, quindi 是 è giusto." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你是老师吗？" },
      { "chi": "B", "t": "＿，我是学生。", "buco": true }
    ], "opzioni": [
      { "t": "不是", "ok": true, "perche": "A chiede 是 o non 是: la risposta negativa è 不是." },
      { "t": "没有", "ok": false, "perche": "没有 nega l'avere o un'azione passata, non l'essere." },
      { "t": "也是", "ok": false, "perche": "也是 vuol dire «anche»: B però dice di non essere insegnante." }
    ] }
  ],
  "capaci": [
    "Sai presentarti con 是: dire come ti chiami, che lavoro fai e di che nazionalità sei (paese + 人).",
    "Sai negare con 不是 e mettere 也 e 都 nel posto giusto, prima di 是.",
    "Sai fare una domanda con 吗 o con 是不是 e rispondere con 是 o 不是.",
    "Sai riconoscere quando 是 non serve: davanti ad aggettivi (很) e all'età."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Connecting nouns with shi»: schema A 是 B, negazione 不是, 是 solo con i nomi",
    "Wikipedia (inglese), «Chinese grammar»: aggettivi predicativi senza copula, 很 davanti all'aggettivo",
    "Tatoeba cinese-italiano (es. 你是不是…, 我们都是…, 我也是, 他不是…, 今天星期…) e CC-CEDICT, voce 是, consultati nei corpora locali"
  ]
};
