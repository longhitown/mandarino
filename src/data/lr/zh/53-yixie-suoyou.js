/* Lezione 53 · Quantità: 一些, 有些, 所有, 每, 别的 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["yixie-suoyou"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我想买一些水果。", "tr": "Vorrei comprare un po' di frutta." },
      { "t": "有些人喜欢茶，有些人喜欢咖啡。", "tr": "Ad alcuni piace il tè, ad altri il caffè." },
      { "t": "所有的学生都来了。", "tr": "Tutti gli studenti sono venuti." },
      { "t": "每个学生都有一本书。", "tr": "Ogni studente ha un libro." }
    ],
    "domanda": "Guarda le quattro frasi. Quale parola sta davanti a un nome qualunque, senza dire quanti sono? Quale divide un gruppo in parti? Quali due vogliono dopo di sé 都 e che cosa mettono prima del nome?",
    "risposta": "**一些** presenta una quantità non precisa (un po' di, alcuni) ed è il compagno naturale di un verbo come 买. **有些** isola una parte del gruppo, di solito per contrapporla a un'altra, ed è tipico del soggetto. **所有的** e **每** parlano di tutto il gruppo e chiamano 都 davanti al verbo; **每** vuole inoltre un classificatore (每个学生)."
  },
  "regola": {
    "enunciato": "Il cinese esprime la quantità con parole che stanno **prima del nome** e che si distinguono per la parte del gruppo che indicano: **一些** una quantità non precisa, **有些** una parte del gruppo, **所有的** e **每** il gruppo intero (preso in blocco o uno per uno), **别的** ciò che resta fuori dal gruppo già nominato.",
    "schema": ["一些 / 有些 / 所有的 / 每个 / 别的", "nome", "都", "verbo"],
    "punti": [
      { "ok": true, "t": "**一些 + nome** dice «un po' di, alcuni» senza precisare: 买一些水果, 一些朋友. Sta bene come oggetto e dopo un aggettivo: 好一些 («un po' meglio»). Non si combina con un altro numero." },
      { "ok": true, "t": "**有些 + nome** indica una parte di un gruppo ed è tipico del soggetto: 有些人没来. Di solito non fa da oggetto (non si dice 买有些水果). Prima di un aggettivo vale «un po', piuttosto»: 我有些累." },
      { "ok": true, "t": "**所有(的) + nome** significa «tutti i» e di solito chiama 都 prima del verbo: 所有的学生都来了. Con 人 si dice anche 所有人 senza 的." },
      { "ok": true, "t": "**每 + classificatore + nome** significa «ogni»: 每个人, 每本书. Con le parole di tempo il classificatore non serve: 每天, 每年. Il verbo ha quasi sempre 都: 每个人都喜欢他." },
      { "ok": true, "t": "**别的** vuol dire «altro, altri» e sostituisce il nome già noto: 你还要别的吗？ Con le persone si usa spesso **别人** («gli altri»)." },
      { "ok": false, "t": "**Non si mette 都 prima del nome né dopo il verbo**: 都 sta tra il soggetto e il verbo (所有的学生都来了), mai 所有的学生来都了." }
    ]
  },
  "logica": [
    "L'italiano ha molte parole per la quantità, ma le usa con una sintassi libera: «tutti sono venuti», «sono venuti tutti», «alcuni sono venuti». Il cinese le allinea tutte nello stesso posto, davanti al nome, e affida a 都 il compito di «sommare» il gruppo davanti al verbo. Per questo 所有 e 每 non bastano da soli: dicono *quale gruppo*, 都 dice *tutti insieme*.",
    "La differenza tra 一些 e 有些 è una differenza di prospettiva. 一些 dice quanta roba c'è, senza guardare il resto; 有些 guarda il gruppo e ne stacca una parte, spesso in attesa di una seconda parte (有些…有些…). Per questo 有些 ama fare il soggetto e di solito non fa da oggetto: l'oggetto è la cosa che si compra o si prende, non una parte del gruppo che si contrappone a un'altra. Quando è davanti a un aggettivo, 有些 diventa un avverbio e vale «piuttosto»."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Parola", "Quale parte del gruppo", "Esempio"],
    "righe": [
      ["一些", "una quantità non precisa", "我买了一些水果。"],
      ["有些", "una parte, di solito contrapposta", "有些人喜欢茶。"],
      ["所有的", "il gruppo intero, in blocco", "所有的学生都来了。"],
      ["每", "ogni elemento, uno per uno", "每个人都有书。"],
      ["别的", "ciò che resta fuori", "你还要别的吗？"]
    ]
  },
  "esempi": [
    { "gruppo": "一些: una quantità non precisa", "items": [
      { "t": "我想买一些水果。", "tr": "Vorrei comprare un po' di frutta." },
      { "t": "桌子上有一些书。", "tr": "Sul tavolo ci sono dei libri." },
      { "t": "请再给我一些时间。", "tr": "Dammi ancora un po' di tempo, per favore." },
      { "t": "你的中文好一些了。", "tr": "Il tuo cinese è un po' migliorato.", "nota": "Dopo un aggettivo 一些 vale «un po' più»." }
    ] },
    { "gruppo": "有些: una parte del gruppo", "items": [
      { "t": "有些人喜欢茶，有些人喜欢咖啡。", "tr": "Ad alcuni piace il tè, ad altri il caffè." },
      { "t": "有些学生今天没来。", "tr": "Alcuni studenti oggi non sono venuti." },
      { "t": "我有些累。", "tr": "Sono un po' stanco.", "nota": "Davanti a un aggettivo 有些 vale «piuttosto, un po'»." }
    ] },
    { "gruppo": "所有: tutto il gruppo", "items": [
      { "t": "所有的朋友都来了。", "tr": "Tutti gli amici sono venuti." },
      { "t": "所有人都知道这件事。", "tr": "Tutti sanno questa cosa." },
      { "t": "他把所有的书都带来了。", "tr": "Ha portato tutti i libri." }
    ] },
    { "gruppo": "每: ogni elemento", "items": [
      { "t": "每天早上我都喝咖啡。", "tr": "Ogni mattina bevo un caffè." },
      { "t": "每个孩子都有一本书。", "tr": "Ogni bambino ha un libro." },
      { "t": "我每次去都买水果。", "tr": "Ogni volta che ci vado compro della frutta." },
      { "t": "每个星期六我们都去公园。", "tr": "Ogni sabato andiamo al parco." }
    ] },
    { "gruppo": "别的: ciò che resta", "items": [
      { "t": "你还想吃别的吗？", "tr": "Vuoi mangiare anche altro?" },
      { "t": "我没有别的问题了。", "tr": "Non ho altre domande." },
      { "t": "别的人都回家了。", "tr": "Gli altri sono tutti tornati a casa." }
    ] }
  ],
  "contrasti": [
    { "q": "Dici al negozio che cosa vuoi comprare: una certa quantità di frutta, non precisata. Quale frase?", "opzioni": [
      { "t": "我想买一些水果。", "ok": true, "perche": "一些 presenta una quantità non precisata e sta bene come oggetto." },
      { "t": "我想买有些水果。", "ok": false, "perche": "有些 stacca una parte di un gruppo ed è tipico del soggetto: come oggetto del verbo non si usa." }
    ] },
    { "q": "Dici che sei un po' stanco. Quale frase?", "opzioni": [
      { "t": "我有些累。", "ok": true, "perche": "Davanti a un aggettivo 有些 vale «un po', piuttosto»." },
      { "t": "我一些累。", "ok": false, "perche": "一些 non sta davanti a un aggettivo con questo valore: dopo l'aggettivo sì (好一些), prima no." }
    ] },
    { "q": "Hai comprato esattamente tre mele. Quale frase dice il numero preciso?", "opzioni": [
      { "t": "我买了三个苹果。", "ok": true, "perche": "Con un numero preciso si usa numero + classificatore." },
      { "t": "我买了三一些苹果。", "ok": false, "perche": "一些 è già una quantità non precisata: non si combina con un altro numero." }
    ] },
    { "q": "Alcuni amici non sono venuti, ma altri sì. Quale frase?", "opzioni": [
      { "t": "有些朋友没来。", "ok": true, "perche": "有些 stacca una parte del gruppo, lasciando intendere che gli altri sono venuti." },
      { "t": "所有的朋友都没来。", "ok": false, "perche": "所有的…都没 dice che nessuno è venuto: significa il contrario di ciò che vuoi." }
    ] },
    { "q": "Dici che ogni studente ha un libro. Quale frase?", "opzioni": [
      { "t": "每个学生都有一本书。", "ok": true, "perche": "每 + classificatore + nome, poi 都 prima del verbo." },
      { "t": "每个学生有都一本书。", "ok": false, "perche": "都 sta prima del verbo, non dopo: la forma giusta è 每个学生都有." }
    ] },
    { "q": "Dici che tutte le sere guardi un film, abitudine ripetuta nel tempo. Quale frase?", "opzioni": [
      { "t": "我每天晚上都看电影。", "ok": true, "perche": "Per le abitudini nel tempo si usa 每: ogni sera, una per una." },
      { "t": "我所有的晚上都看电影。", "ok": false, "perche": "所有的 prende il gruppo in blocco, e non è la forma per le abitudini: per dire «ogni» nel tempo serve 每." }
    ] },
    { "q": "Chiedi al cliente se vuole altre cose. Quale frase?", "opzioni": [
      { "t": "你还要别的吗？", "ok": true, "perche": "别的 sostituisce «altre cose» già note nel discorso." },
      { "t": "你还要别人吗？", "ok": false, "perche": "别人 sono «gli altri», cioè altre persone: chiederesti se vuole un'altra persona." }
    ] },
    { "q": "Dici che ha portato tutti i libri. Quale frase?", "opzioni": [
      { "t": "他把所有的书都带来了。", "ok": true, "perche": "所有的 + nome, poi 都 prima del verbo." },
      { "t": "他把都所有的书带来了。", "ok": false, "perche": "都 non sta prima di 所有的: va tra il nome e il verbo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Dal fruttivendolo",
    "righe": [
      { "chi": "A", "t": "你好，你想买什么？", "tr": "Buongiorno, che cosa desideri?" },
      { "chi": "B", "t": "我想买一些水果。有些苹果看起来不错。", "tr": "Vorrei un po' di frutta. Alcune mele hanno un bell'aspetto." },
      { "chi": "A", "t": "对，所有的苹果都是今天早上到的。", "tr": "Sì, tutte le mele sono arrivate stamattina." },
      { "chi": "B", "t": "好，给我五个。你还有别的吗？", "tr": "Bene, dammene cinque. Hai anche altro?" },
      { "chi": "A", "t": "有香蕉。每个人都喜欢香蕉。", "tr": "Ci sono le banane. A tutti piacciono le banane." },
      { "chi": "B", "t": "那我也买一些。", "tr": "Allora ne prendo un po' anch'io." }
    ],
    "esercizi": [
      { "q": "B dice 有些苹果看起来不错. Che cosa indica 有些?", "opzioni": [
        { "t": "Una parte delle mele, non tutte.", "ok": true, "perche": "有些 stacca una parte del gruppo di mele." },
        { "t": "Tutte le mele.", "ok": false, "perche": "Tutte sarebbe 所有的苹果, come dice A subito dopo." },
        { "t": "Nessuna mela.", "ok": false, "perche": "有些 dice che esistono: indica una parte, non zero." }
      ] },
      { "q": "A dice 所有的苹果都是今天早上到的. Che cosa afferma?", "opzioni": [
        { "t": "Tutte le mele sono arrivate stamattina.", "ok": true, "perche": "所有的…都 abbraccia l'intero gruppo di mele." },
        { "t": "Solo alcune mele sono arrivate stamattina.", "ok": false, "perche": "Solo alcune sarebbe 有些 o 一些." },
        { "t": "Ogni mela costa uguale.", "ok": false, "perche": "Il prezzo non è nominato: la frase parla di quando sono arrivate le mele." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Si traduce «alcuni» sempre con 一些, anche quando serve a contrapporre due parti del gruppo, oppure si usa 有些 come oggetto. In più si dimenticano il classificatore dopo 每 e il 都 dopo 所有 e 每.",
    "perche": "L'italiano ha una sola parola, «alcuni», per cose diverse. In cinese una quantità non precisa (一些) e una parte del gruppo (有些) sono due idee distinte, con posti diversi nella frase; e «tutti» e «ogni» non si leggono senza 都 davanti al verbo.",
    "esci": "Chiediti: sto dicendo quanta roba, o una parte del gruppo? Nel primo caso 一些, nel secondo 有些. Con «tutti» e «ogni» controlla sempre due cose: il classificatore dopo 每 e il 都 davanti al verbo.",
    "esempi": [
      { "sbagliata": "我买了有些水果。", "giusta": "我买了一些水果。" },
      { "sbagliata": "每学生都来了。", "giusta": "每个学生都来了。" },
      { "sbagliata": "你还要别人吗？", "giusta": "你还要别的吗？" }
    ]
  },
  "curiosi": [
    { "titolo": "有的, il cugino di 有些", "t": "Accanto a 有些 esiste 有的, con lo stesso senso di «alcuni». I due si scambiano spesso nel parlato. 有的 si ripete volentieri per elencare le parti del gruppo, per esempio 有的喝茶，有的喝咖啡. 有些 resta il preferito davanti a un aggettivo (我有些累)." },
    { "titolo": "一些 e 一点儿", "t": "一些 e 一点儿 si somigliano. 一点儿 si usa tipicamente per quantità piccole di cose non numerabili (喝一点儿水); 一些 è più generale e vale anche per cose numerabili (一些朋友). Dopo un aggettivo si usano entrambi, soprattutto con 比 e con gli imperativi: 快一点儿, 好一些." },
    { "titolo": "Il plurale dei pronomi: 这些, 那些", "t": "Dentro 这些 e 那些 c'è 些, la stessa parola di 一些: sono «questi» e «quelli» al plurale. Il cinese non marca il plurale dei nomi, e quando serve lo dice con queste parole: 这些书 («questi libri»), 那些人 («quelle persone»)." }
  ],
  "pragmatica": "Nel parlato quotidiano 每 + 都 e 所有的 + 都 sono frequentissimi per generalizzare («tutti», «ogni volta»). 一些 è la parola neutra per una quantità non precisata; 有些 appare quando si contrappongono due gruppi o si attenua un aggettivo. 别的 chiude le domande al negozio, a tavola, al telefono: 还要别的吗？ è la domanda di servizio più comune.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "有些学生今天没来。", "opzioni": [
      { "t": "Alcuni studenti oggi non sono venuti.", "ok": true, "perche": "有些 stacca una parte del gruppo di studenti." },
      { "t": "Tutti gli studenti oggi non sono venuti.", "ok": false, "perche": "Tutti sarebbe 所有的学生都没来." },
      { "t": "Ogni studente è venuto.", "ok": false, "perche": "Il verbo è negato (没来): la frase dice chi non è venuto." }
    ] },
    { "k": "scegli", "q": "Quale parola dice «ogni volta»?", "opzioni": [
      { "t": "每次", "ok": true, "perche": "每 + 次 («volta») = ogni volta." },
      { "t": "有些", "ok": false, "perche": "有些 indica una parte di un gruppo, non la ripetizione." },
      { "t": "别的", "ok": false, "perche": "别的 significa «altro», non «ogni volta»." }
    ] },
    { "k": "buco", "zh": "我想买＿水果。", "tr": "Vorrei comprare un po' di frutta.", "opzioni": [
      { "t": "一些", "ok": true, "perche": "一些 + nome = una quantità non precisata, come oggetto." },
      { "t": "有些", "ok": false, "perche": "有些 non fa da oggetto del verbo." },
      { "t": "别的", "ok": false, "perche": "别的 vuol dire «altro»: la frase parla di frutta in generale." }
    ] },
    { "k": "buco", "zh": "＿个学生都有一本书。", "tr": "Ogni studente ha un libro.", "opzioni": [
      { "t": "每", "ok": true, "perche": "每 + classificatore = ogni." },
      { "t": "有", "ok": false, "perche": "有 vuol dire «avere» e non forma «ogni»." },
      { "t": "所", "ok": false, "perche": "所 da solo non è una parola di quantità; la forma è 所有的." }
    ] },
    { "k": "ordine", "t": "所有的学生都来了", "tr": "Tutti gli studenti sono venuti." },
    { "k": "ordine", "t": "你还要别的吗", "tr": "Vuoi altro?" },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ogni giorno studio cinese.»", "a": "我每天都学中文。", "accetta": ["每天我都学中文。", "我每天都学汉语。", "每天我都学汉语。", "我每天学中文。"], "perche": "每天 non vuole il classificatore; 都 sta prima del verbo e rinforza «ogni»." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Alcune persone amano il tè.»", "a": "有些人喜欢茶。", "accetta": ["一些人喜欢茶。", "有的人喜欢茶。"], "perche": "有些 + nome come soggetto indica una parte del gruppo; anche 一些人 e 有的人 sono corretti." },
    { "k": "trasforma", "base": "学生都来了。", "consegna": "Aggiungi «tutti i» (所有的) al soggetto: «Tutti gli studenti sono venuti.»", "accetta": ["所有的学生都来了。", "所有学生都来了。"], "rifiutate": [
      { "t": "所有的学生来都了。", "perche": "都 sta prima del verbo, mai dopo." }
    ], "perche": "所有(的) + nome, e 都 resta prima del verbo." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你还要别的吗？" },
      { "chi": "B", "t": "再给我＿水果。", "buco": true }
    ], "opzioni": [
      { "t": "一些", "ok": true, "perche": "Una quantità non precisata come oggetto: 一些水果." },
      { "t": "有些", "ok": false, "perche": "有些 non fa da oggetto del verbo: serve 一些." },
      { "t": "每", "ok": false, "perche": "每 significa «ogni» e vuole il classificatore: 每个水果, non 每水果." }
    ] }
  ],
  "capaci": [
    "Sai chiedere e dire una quantità non precisa con 一些.",
    "Sai contrapporre due parti di un gruppo con 有些.",
    "Sai dire «tutti» e «ogni» con 所有的, 每 e 都 al posto giusto.",
    "Sai chiedere e dire «altro» con 别的 e distinguerlo da 别人."
  ],
  "fonti": [
    "CC-CEDICT, voci 一些, 有些, 所有, 每, 别的 (glosse «some», «all», «every», «other»), consultate nel dizionario locale",
    "Tatoeba (cmn.tsv, es. 有些人, 每个人都, 所有的), verificate con grep nel corpus locale"
  ]
};
