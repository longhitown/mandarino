/* Lezione 44 · Uguale e non così: 跟…一样, 没有 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["meiyou-yiyang"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我的手机跟你的一样。", "tr": "Il mio cellulare è uguale al tuo." },
      { "t": "他跟我一样高。", "tr": "È alto come me." },
      { "t": "今天没有昨天热。", "tr": "Oggi non fa caldo come ieri." },
      { "t": "他比我高一点。", "tr": "È un po' più alto di me." }
    ],
    "domanda": "Guarda dove sta l'aggettivo (高, 热) rispetto a 一样, a 没有 e a 比. In quale frase l'aggettivo è l'ultima parola e in quale c'è una parola in più dopo di lui? C'è mai 很 davanti all'aggettivo?",
    "risposta": "L'aggettivo sta sempre **dopo** il termine di confronto. Con 跟…一样 viene dopo 一样 (一样高), con 没有 dopo la seconda cosa (没有昨天热), con 比 dopo la seconda cosa e può avere una misura dopo di sé (高一点). **Non c'è mai 很.** Nella prima frase manca perfino l'aggettivo: 我的手机跟你的一样 dice solo che le due cose sono uguali; nelle altre frasi l'aggettivo precisa in che cosa. Tre strutture, tre rapporti: **uguale** (跟…一样), **inferiore** (没有), **superiore** (比)."
  },
  "regola": {
    "enunciato": "Per confrontare due cose il cinese ha tre schemi con un posto fisso per l'aggettivo: **A 跟 B 一样 (+ aggettivo)** per «uguale», **A 没有 B (+ 那么) + aggettivo** per «A non arriva a B», e **A 比 B + aggettivo** per «A supera B». Al negativo dell'uguaglianza si dice **A 跟 B 不一样** («è diverso»), che è un'altra cosa rispetto a 没有.",
    "schema": ["A", "跟 / 没有 / 比", "B", "(一样)", "aggettivo"],
    "punti": [
      { "ok": true, "t": "**A 跟 B 一样**: le due cose sono uguali, e l'aggettivo si aggiunge dopo 一样 per dire in che cosa: 他跟我一样高. Al posto di 跟 si trova anche 和 (e, nello scritto formale, 与 e 同). Le due cose da confrontare devono essere dello stesso tipo: 我的手机跟你的一样, non 跟你一样." },
      { "ok": true, "t": "**A 跟 B 不一样**: sono diverse. 不 sta davanti a 一样: 我的跟你的不一样. Se vuoi dire che sono diverse in una dimensione, l'aggettivo segue: 这两个不一样大 («non hanno la stessa grandezza»)." },
      { "ok": true, "t": "**A 没有 B + aggettivo**: A sta sotto B in quella qualità. 今天没有昨天热, 我没有他高. Si può aggiungere 那么 o 这么 davanti all'aggettivo (我没有他那么高). Di solito si usa con l'aggettivo «grande» della scala (高, 大, 热, 贵, 好)." },
      { "ok": true, "t": "**Dopo 一样, senza aggettivo, la frase è già completa**: 这件衣服跟那件一样. Per un nome si usa 的: 我想买跟你一样的手机. In una frase con un verbo la qualità va dopo 得: 他汉语说得跟老师一样好." },
      { "ok": true, "t": "**Avverbi come 也 e 都 stanno prima di 跟**: 她也跟我一样高, 我们都跟他一样忙." },
      { "ok": false, "t": "**Mai 很 davanti all'aggettivo** in nessuno dei tre schemi: non si dice 他跟我一样很高, 今天没有昨天很热, 他比我很高. Il confronto fissa già una scala, quindi 很 («molto») è superfluo e contraddice il confronto." },
      { "ok": false, "t": "**Con 没有 non si misura la differenza**: 他没有我高一点, 他没有我高多了 non esistono. «Un po' più» e «molto più» si dicono solo con 比: 他比我高一点, 他比我高多了." }
    ]
  },
  "logica": [
    "L'italiano usa quasi la stessa frase per tre rapporti: «alto come me», «più alto di me», «meno alto di me». Il cinese ha una struttura per ciascuno e ciascuna ha il suo posto per l'aggettivo. Chi parla italiano mette di istinto 很 («è molto alto») perché in cinese un aggettivo isolato vuole 很 per suonare completo (他很高). Nel confronto però la scala è già data da B, e 很 sarebbe una seconda scala sopra la prima.",
    "Il punto da fissare è che **没有 è l'opposto di 比, non la negazione di 一样**. 他没有我高 vuol dire «lui è meno alto di me»; 他跟我不一样高 dice soltanto che l'altezza è diversa, senza dire chi è più alto. Per questo 没有 non regge «un po'» o «molto»: dice solo che A non arriva a B. Chi vuole una misura capovolge la frase e usa 比: 我比他矮一点."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Struttura", "Esempio"],
    "righe": [
      ["Uguali", "A 跟 B 一样", "我的手机跟你的一样。"],
      ["Uguali in una qualità", "A 跟 B 一样 + aggettivo", "他跟我一样高。"],
      ["Diversi", "A 跟 B 不一样", "我的跟你的不一样。"],
      ["A non arriva a B", "A 没有 B (那么) + aggettivo", "今天没有昨天热。"],
      ["A supera B", "A 比 B + aggettivo", "他比我高。"],
      ["A supera B di poco o di molto", "A 比 B + aggettivo + 一点 / 多了", "他比我高一点。"]
    ]
  },
  "esempi": [
    { "gruppo": "Uguali: 跟…一样", "items": [
      { "t": "我的手机跟你的一样。", "tr": "Il mio cellulare è uguale al tuo.", "nota": "Dopo 跟 si ripete il nome o si usa 的: 你的." },
      { "t": "这件衣服跟那件一样。", "tr": "Questo vestito è uguale a quello." },
      { "t": "他的书包跟我的一样。", "tr": "Il suo zaino è uguale al mio." }
    ] },
    { "gruppo": "Uguali in una qualità", "items": [
      { "t": "他跟我一样高。", "tr": "È alto come me." },
      { "t": "这个房间跟那个一样大。", "tr": "Questa stanza è grande come quella." },
      { "t": "她唱歌唱得跟你一样好。", "tr": "Canta bene come te.", "nota": "Con un verbo la qualità va dopo 得." }
    ] },
    { "gruppo": "Diversi", "items": [
      { "t": "我的跟你的不一样。", "tr": "Il mio è diverso dal tuo." },
      { "t": "你说的跟他说的不一样。", "tr": "Quello che dici tu è diverso da quello che dice lui." },
      { "t": "我想买跟你一样的手机。", "tr": "Voglio comprare un cellulare uguale al tuo.", "nota": "Davanti al nome, 一样的 funziona come un aggettivo." }
    ] },
    { "gruppo": "A non arriva a B: 没有", "items": [
      { "t": "今天没有昨天热。", "tr": "Oggi non fa caldo come ieri." },
      { "t": "这家饭馆没有那家好吃。", "tr": "Questo ristorante non è buono come quello." },
      { "t": "我没有他那么高。", "tr": "Non sono alto come lui.", "nota": "那么 rende il confronto più vivo; si può anche togliere." },
      { "t": "我的汉语没有你的好。", "tr": "Il mio cinese non è buono come il tuo." }
    ] },
    { "gruppo": "A supera B: 比 (per confronto)", "items": [
      { "t": "他比我高一点。", "tr": "È un po' più alto di me." },
      { "t": "北京比上海大多了。", "tr": "Pechino è molto più grande di Shanghai." }
    ] }
  ],
  "contrasti": [
    { "q": "I vostri due cellulari sono identici. Come dici «Il mio cellulare è uguale al tuo»?", "opzioni": [
      { "t": "我的手机跟你的一样。", "ok": true, "perche": "Si confrontano due cose dello stesso tipo: il mio cellulare e il tuo (你的)." },
      { "t": "我的手机跟你一样。", "ok": false, "perche": "Confronterebbe un cellulare con una persona: le due cose devono essere dello stesso tipo." }
    ] },
    { "q": "Come dici «È alto come me»?", "opzioni": [
      { "t": "他跟我一样高。", "ok": true, "perche": "Prima 一样, poi l'aggettivo: la qualità segue il segno di uguaglianza." },
      { "t": "他跟我高一样。", "ok": false, "perche": "L'aggettivo non può precedere 一样: lo schema è A 跟 B 一样 + aggettivo." }
    ] },
    { "q": "Oggi ci sono 25 gradi, ieri erano 30. Come dici «Oggi non fa caldo come ieri»?", "opzioni": [
      { "t": "今天没有昨天热。", "ok": true, "perche": "没有 + secondo termine + aggettivo, senza 很." },
      { "t": "今天没有昨天很热。", "ok": false, "perche": "Nel confronto la scala è già data da 昨天: 很 è superfluo e non si usa." }
    ] },
    { "q": "Tuo fratello è alto quanto te. Come dici «Mio fratello è alto quanto me»?", "opzioni": [
      { "t": "我哥哥跟我一样高。", "ok": true, "perche": "跟…一样 + aggettivo: uguaglianza nella statura." },
      { "t": "我哥哥跟我一样很高。", "ok": false, "perche": "Anche dopo 一样 non si mette 很, perché il confronto fissa già la misura." }
    ] },
    { "q": "Lui è alto 1,80 e tu 1,70. Come dici «Io non sono alto come lui»?", "opzioni": [
      { "t": "我没有他高。", "ok": true, "perche": "没有 + B + aggettivo: A non arriva a B." },
      { "t": "我没有高他。", "ok": false, "perche": "Il secondo termine va prima dell'aggettivo: 没有他高, non 没有高他." }
    ] },
    { "q": "Lui è più alto di te di poco. Quale frase lo dice?", "opzioni": [
      { "t": "他比我高一点。", "ok": true, "perche": "比 accetta una misura dopo l'aggettivo: 一点 («un po'»)." },
      { "t": "他没有我高一点。", "ok": false, "perche": "没有 non accetta una misura dopo l'aggettivo: dice solo che A non arriva a B." }
    ] },
    { "q": "Il tuo cellulare costa 2000 e il mio 3000. Vuoi dire chiaramente che il tuo costa meno. Quale frase?", "opzioni": [
      { "t": "你的没有我的贵。", "ok": true, "perche": "没有 dice anche chi sta sotto: il tuo costa meno del mio." },
      { "t": "你的跟我的不一样贵。", "ok": false, "perche": "Dice soltanto che i prezzi sono diversi, senza dire quale dei due è più basso." }
    ] },
    { "q": "Vuoi comprare un telefono uguale a quello di un amico. Quale frase?", "opzioni": [
      { "t": "我想买跟你的一样的手机。", "ok": true, "perche": "跟你的一样 + 的 funziona come un aggettivo davanti al nome 手机." },
      { "t": "我想买跟你的一样手机。", "ok": false, "perche": "Davanti al nome serve 的: 一样的手机." }
    ] },
    { "q": "Anche lei ha la tua altezza. Come aggiungi «anche»?", "opzioni": [
      { "t": "她也跟我一样高。", "ok": true, "perche": "也 sta prima di 跟, davanti a tutto il confronto." },
      { "t": "她跟我一样也高。", "ok": false, "perche": "也 non può spezzare 一样 e l'aggettivo: va davanti a 跟." }
    ] }
  ],
  "dialogo": {
    "titolo": "Due cellulari",
    "righe": [
      { "chi": "A", "t": "你看，我的手机跟你的一样。", "tr": "Guarda, il mio cellulare è uguale al tuo." },
      { "chi": "B", "t": "颜色一样，不过我的比你的新一点。", "tr": "Il colore è lo stesso, ma il mio è un po' più nuovo." },
      { "chi": "A", "t": "那你的贵不贵？", "tr": "Allora il tuo è caro?" },
      { "chi": "B", "t": "我的没有你的贵，才三千块。", "tr": "Il mio non è caro come il tuo, solo tremila yuan." },
      { "chi": "A", "t": "我也想买一个跟你的一样的。", "tr": "Voglio comprarne uno uguale al tuo anch'io." },
      { "chi": "B", "t": "好啊，明天我们一起去买。", "tr": "Volentieri, domani andiamo a comprarlo insieme." }
    ],
    "esercizi": [
      { "q": "Che cosa dice B con 我的没有你的贵?", "opzioni": [
        { "t": "Il mio costa meno del tuo.", "ok": true, "perche": "没有 + B + aggettivo: A sta sotto B nella qualità 贵." },
        { "t": "Il mio costa uguale al tuo.", "ok": false, "perche": "Per «costa uguale» si direbbe 跟你的一样贵." },
        { "t": "Il mio costa più del tuo.", "ok": false, "perche": "Per «più» servirebbe 比: 我的比你的贵." }
      ] },
      { "q": "Che cosa vuol dire 我的比你的新一点?", "opzioni": [
        { "t": "Il mio è un po' più nuovo.", "ok": true, "perche": "比 + aggettivo + 一点 = «un po' più»." },
        { "t": "Il mio è molto più nuovo.", "ok": false, "perche": "«Molto più» si direbbe 新多了." },
        { "t": "Il mio non è nuovo come il tuo.", "ok": false, "perche": "Quel significato è di 没有 (我的没有你的新)." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano aggiunge 很 al confronto (他比我很高, 今天没有昨天很热), mette l'aggettivo prima di 一样 (他跟我高一样) e traduce «non così… come» con 不一样.",
    "perche": "In italiano «molto» e «più» convivono («è molto più alto di me») e «come» regge da solo il confronto. Il cinese costruisce ogni rapporto con una struttura propria e dà all'aggettivo un posto fisso, dopo il termine di paragone. Inoltre 不一样 significa «diverso» e non «inferiore».",
    "esci": "Prima di scrivere chiediti quale rapporto vuoi: uguale, inferiore o superiore? Scegli la struttura (跟…一样, 没有, 比), metti il secondo termine, poi l'aggettivo, e non aggiungere 很. Se vuoi una misura, capovolgi la frase e usa 比 + 一点 o 多了.",
    "esempi": [
      { "sbagliata": "他跟我高一样。", "giusta": "他跟我一样高。" },
      { "sbagliata": "今天没有昨天很热。", "giusta": "今天没有昨天热。" },
      { "sbagliata": "他比我很高。", "giusta": "他比我高。" },
      { "sbagliata": "他没有我高一点。", "giusta": "他比我高一点。" }
    ]
  },
  "curiosi": [
    { "titolo": "不如 e 有: due cugini di 没有", "t": "A 不如 B + aggettivo è un'altra via per dire «A non vale quanto B» e suona un po' più netta, perché giudica: 坐车不如骑车快 («in autobus non si fa tanto in fretta quanto in bici»). Nelle domande e con 那么 compare anche 有 al posto di 没有: 他有你那么高吗？ («è alto come te?»). 有 afferma che A arriva al livello di B." },
    { "titolo": "跟 e 像: «come» in due modi", "t": "跟…一样 dice che due cose sono uguali (他话说得跟老师一样). Per la similitudine («come un bambino») si usa 像…一样: 他笑得像孩子一样. Nel primo caso le due cose coincidono nella qualità; nel secondo una cosa viene paragonata a un'immagine. L'italiano usa «come» per tutti e due." },
    { "titolo": "Perché 很 sparisce", "t": "Un aggettivo da solo in cinese tende a leggersi come un confronto implicito: 他高 suona «lui è più alto (dell'altro)». Per descrivere senza confrontare si mette 很: 他很高. Quando il confronto è esplicito, con 比, 没有 o 一样, l'aggettivo ha già la sua cornice e 很 non serve." }
  ],
  "pragmatica": "跟…不一样 è di uso frequentissimo per dire «non è come mi aspettavo» (跟我想的不一样) e per confrontare abitudini e paesi. 没有 attenua il giudizio e per questo serve come risposta modesta ai complimenti: se qualcuno dice che parli bene, rispondi 哪里，没有你的好 («macché, non come te»). Per i complimenti diretti 跟…一样 è un modo caldo di dire che qualcosa è all'altezza: 你做的菜跟饭馆的一样好吃！ (È un elogio vero, non uno scherzo.)",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他跟我一样高。", "opzioni": [
      { "t": "È alto come me.", "ok": true, "perche": "跟…一样 + aggettivo: stessa statura." },
      { "t": "È più alto di me.", "ok": false, "perche": "Per «più alto» servirebbe 比: 他比我高." },
      { "t": "È meno alto di me.", "ok": false, "perche": "Per «meno alto» servirebbe 没有: 他没有我高." }
    ] },
    { "k": "scegli", "q": "Ieri faceva più caldo di oggi. Che cosa vuol dire?", "zh": "今天没有昨天热。", "opzioni": [
      { "t": "Oggi fa meno caldo di ieri.", "ok": true, "perche": "没有 + ieri + aggettivo: oggi non arriva al caldo di ieri." },
      { "t": "Oggi fa più caldo di ieri.", "ok": false, "perche": "Il significato sarebbe quello di 今天比昨天热." },
      { "t": "Oggi e ieri hanno la stessa temperatura.", "ok": false, "perche": "Per questo servirebbe 今天跟昨天一样热." }
    ] },
    { "k": "buco", "zh": "我的手机＿你的一样。", "tr": "Il mio cellulare è uguale al tuo.", "opzioni": [
      { "t": "跟", "ok": true, "perche": "跟…一样 è la struttura dell'uguaglianza." },
      { "t": "比", "ok": false, "perche": "比 introduce il confronto «più di», non «uguale»." },
      { "t": "没有", "ok": false, "perche": "没有 non va seguito da 一样." }
    ] },
    { "k": "buco", "zh": "他＿我高。", "tr": "Lui non è alto come me.", "opzioni": [
      { "t": "没有", "ok": true, "perche": "没有 + B + aggettivo: A non arriva a B." },
      { "t": "比", "ok": false, "perche": "比 direbbe che lui è più alto di me." },
      { "t": "跟", "ok": false, "perche": "跟 da solo, senza 一样, non forma un confronto." }
    ] },
    { "k": "ordine", "t": "这家饭馆没有那家好吃", "tr": "Questo ristorante non è buono come quello." },
    { "k": "ordine", "t": "他汉语说得跟老师一样好", "alt": ["他说汉语说得跟老师一样好"], "tr": "Parla cinese bene come l'insegnante." },
    { "k": "trasforma", "base": "他比我高。", "consegna": "Cambia la frase: dì che lui è alto quanto te, con 一样.", "accetta": ["他跟我一样高。", "他和我一样高。", "我跟他一样高。", "我和他一样高。"], "rifiutate": [
      { "t": "他跟我高一样。", "perche": "L'aggettivo non può precedere 一样." }
    ], "perche": "A 跟 B 一样 + aggettivo: il secondo termine e 一样 vengono prima dell'aggettivo." },
    { "k": "trasforma", "base": "昨天比今天热。", "consegna": "Dì la stessa cosa partendo da oggi, con 没有.", "accetta": ["今天没有昨天热。", "今天没有昨天那么热。"], "rifiutate": [
      { "t": "今天没有昨天很热。", "perche": "Con 没有 non si mette 很 davanti all'aggettivo." }
    ], "perche": "Il rapporto si capovolge: se ieri era più caldo, oggi non arriva a ieri." },
    { "k": "trasforma", "base": "我的手机跟你的一样。", "consegna": "Dì che i due cellulari sono diversi.", "accetta": ["我的手机跟你的不一样。", "我的手机和你的不一样。", "我的跟你的不一样。", "我的手机跟你的手机不一样。"], "rifiutate": [
      { "t": "我的手机跟你的没一样。", "perche": "Per negare 一样 serve 不, non 没." }
    ], "perche": "不 davanti a 一样 dice che le due cose sono diverse." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Mia sorella minore non è alta come me.»", "a": "我妹妹没有我高。", "accetta": ["我妹妹没有我那么高。", "妹妹没有我高。", "妹妹没有我那么高。"], "perche": "没有 + secondo termine + aggettivo, senza 很; 那么 è facoltativo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Il mio cellulare è uguale al tuo.»", "a": "我的手机跟你的一样。", "accetta": ["我的手机和你的一样。", "我的手机跟你的手机一样。", "我的手机和你的手机一样。", "我的跟你的一样。"], "perche": "A 跟 B 一样: due cose dello stesso tipo, con 你的 che riprende 手机." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "这两本书一样吗？" },
      { "chi": "B", "t": "不，这本跟那本＿。", "buco": true }
    ], "opzioni": [
      { "t": "不一样", "ok": true, "perche": "不一样 = diverso: è la risposta negativa a una domanda su 一样." },
      { "t": "没有", "ok": false, "perche": "没有 si usa con un aggettivo di confronto: manca qui." },
      { "t": "不比", "ok": false, "perche": "不比 non risponde alla domanda su uguale o diverso." }
    ] }
  ],
  "capaci": [
    "Sai dire che due cose sono uguali, con o senza aggettivo, usando 跟…一样, e che sono diverse con 不一样.",
    "Sai dire che una cosa non arriva a un'altra con 没有 e distinguere 没有 da 不一样.",
    "Sai scegliere tra 跟…一样, 没有 e 比 secondo il rapporto, mettendo l'aggettivo al posto giusto e senza 很.",
    "Sai aggiungere «un po'» o «molto» al confronto con 比…一点 e 比…多了."
  ],
  "glosse": {
    "没有昨天热": "Non fa caldo come ieri",
    "我没有他高": "Non sono alto come lui",
    "他汉语说得跟老师一样好": "Parla cinese bene come l'insegnante",
    "她也跟我一样高": "Anche lei è alta come me",
    "我们都跟他一样忙": "Siamo tutti occupati come lui",
    "他没有我高多了": "Non è molto più alto di me",
    "他比我高多了": "È molto più alto di me",
    "他没有我高": "Non è alto come me",
    "他跟我不一样高": "Non è alto quanto me",
    "我比他矮一点": "Sono un po' più basso di lui",
    "他话说得跟老师一样": "Parla come l'insegnante",
    "他笑得像孩子一样": "Ride come un bambino",
    "跟我想的不一样": "Diverso da come penso",
    "你做的菜跟饭馆的一样好吃": "Quello che cucini è buono come quello del ristorante!"
  },
  "fonti": [
    "CC-CEDICT, voci 一样 e 没有, consultate nel file locale",
    "Tatoeba (cinese, file cmn.tsv): frasi come Ken跟Bill一样高 e 他话说得跟老师一样, controllate nel corpus locale"
  ]
};
