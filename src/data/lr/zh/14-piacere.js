/* Lezione 14 · Mi piace: 喜欢 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["piacere"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我喜欢茶。", "tr": "Mi piace il tè." },
      { "t": "孩子们都很喜欢狗。", "tr": "A tutti i bambini piacciono molto i cani." },
      { "t": "他不太喜欢跑步。", "tr": "A lui non piace molto correre." },
      { "t": "周末我最喜欢在家看电影。", "tr": "Nel fine settimana quello che mi piace di più è guardare un film a casa." }
    ],
    "domanda": "In ogni frase, chi prova il piacere: la persona o la cosa? Dove stanno 很, 不太 e 最 rispetto a 喜欢? E che cosa può venire dopo 喜欢: solo nomi?",
    "risposta": "Chi prova il piacere è sempre la **persona** e sta **prima** di 喜欢 (我, 孩子们, 他): in italiano è la cosa a diventare soggetto («mi piace il tè»), in cinese no. Le parole di grado (很, 不太, 最) stanno **davanti** a 喜欢, mai dopo. Dopo 喜欢 può esserci un nome (茶, 狗), un verbo (跑步) e perfino un'azione con luogo e oggetto (在家看电影)."
  },
  "regola": {
    "enunciato": "喜欢 è un verbo come gli altri: **chi prova il piacere è il soggetto, ciò che piace è l'oggetto**. Il grado (很, 非常, 最, 不太) e la negazione 不 si mettono davanti a 喜欢; l'oggetto può essere un nome, una persona o un'azione.",
    "schema": ["chi prova", "(很 · 最 · 不太)", "喜欢", "cosa · persona · azione"],
    "punti": [
      { "ok": true, "t": "**Soggetto = chi prova il piacere**: 我喜欢茶, 她喜欢你, 我们都喜欢这里. Il verbo non cambia con il numero: «mi piace il tè» e «mi piacciono i cani» sono entrambi 我喜欢…" },
      { "ok": true, "t": "**Dopo 喜欢 un nome o un'azione**: 我喜欢狗, 他喜欢做饭, 我喜欢在家看书, 她喜欢唱歌. Non serve «di» né un secondo verbo di collegamento: il verbo segue direttamente." },
      { "ok": true, "t": "**Il grado sta davanti**: 很喜欢 (molto), 非常喜欢, 特别喜欢, 比较喜欢 (abbastanza), 最喜欢 (più di tutto). Per attenuare un rifiuto si dice **不太喜欢** («non molto»), più morbido di 不喜欢." },
      { "ok": true, "t": "**Negazione con 不**: 我不喜欢咖啡. Per «non mi è mai piaciuto» si usa 没 con 过, di solito rinforzato da 从来: 我从来没喜欢过他." },
      { "ok": true, "t": "**Domande**: 你喜欢茶吗？ oppure 你喜欢不喜欢茶？ Per scegliere: 你喜欢茶还是咖啡？ La risposta breve ripete il verbo: 喜欢 / 不喜欢." },
      { "ok": true, "t": "**喜欢 + 的 per descrivere**: 我喜欢的颜色, 我最喜欢的歌: «il colore che mi piace», «la canzone che mi piace di più»." },
      { "ok": false, "t": "**Non si inverte** come in italiano: 茶喜欢我 vuol dire «il tè prova piacere per me». E il grado non va dopo: 我喜欢很茶 e 我喜欢茶很 sono errati." }
    ]
  },
  "logica": [
    "In italiano «piacere» ha il soggetto invertito: la cosa che piace comanda il verbo («mi **piacciono** i cani») e la persona è un complemento («mi, a me»). Il cinese fa come l'inglese «I like»: la persona è il soggetto, il verbo è 喜欢 e la cosa è l'oggetto. Quindi 我喜欢狗 si legge come «io gradisco i cani»: il verbo non si accorda con la cosa e non esiste un plurale diverso.",
    "Anche la persona può essere l'oggetto, e qui l'inversione italiana inganna: «mi piaci» è 我喜欢你 (io provo piacere per te), mentre «ti piaccio» è 你喜欢我. Basta chiedersi: **chi prova il sentimento?** Quella persona va prima di 喜欢.",
    "喜欢 descrive un sentimento che dura, non un'azione che si compie: per questo prende gradi come 很 e 最. «Voglio un tè adesso» è 我想喝茶, «mi piace il tè in generale» è 我喜欢茶: il gusto generale e il desiderio di un momento sono due verbi diversi."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Come lo dici", "Esempio"],
    "righe": [
      ["Mi piace", "chi + 喜欢 + cosa", "我喜欢茶。"],
      ["Mi piace molto", "chi + 很 / 非常 + 喜欢 + cosa", "我很喜欢意大利。"],
      ["Mi piace abbastanza", "chi + 比较喜欢 + cosa", "我比较喜欢这个。"],
      ["Mi piace di più", "chi + 最喜欢 + cosa", "我最喜欢夏天。"],
      ["Non mi piace molto", "chi + 不太喜欢 + cosa", "我不太喜欢甜的。"],
      ["Non mi piace", "chi + 不喜欢 + cosa", "我不喜欢咖啡。"],
      ["Mi piace fare qualcosa", "chi + 喜欢 + verbo", "我喜欢做饭。"],
      ["Ti piace?", "喜欢 … 吗 / 喜欢不喜欢", "你喜欢吗？"],
      ["Tè o caffè?", "喜欢 A 还是 B", "你喜欢茶还是咖啡？"]
    ]
  },
  "esempi": [
    { "gruppo": "Mi piace una cosa", "items": [
      { "t": "我喜欢中国菜。", "tr": "Mi piace la cucina cinese." },
      { "t": "我弟弟喜欢猫。", "tr": "A mio fratello minore piacciono i gatti.", "nota": "Il soggetto è chi prova il piacere: 弟弟." },
      { "t": "我们都喜欢这个城市。", "tr": "A tutti noi piace questa città.", "nota": "都 sta tra il soggetto e 喜欢." }
    ] },
    { "gruppo": "Mi piace fare qualcosa", "items": [
      { "t": "我喜欢做饭。", "tr": "Mi piace cucinare." },
      { "t": "她喜欢听音乐。", "tr": "A lei piace ascoltare musica." },
      { "t": "我喜欢在家看书。", "tr": "Mi piace leggere a casa.", "nota": "Dopo 喜欢 può seguire un'azione intera, con luogo e oggetto." },
      { "t": "他喜欢跟朋友一起去旅游。", "tr": "Gli piace viaggiare con gli amici." }
    ] },
    { "gruppo": "Quanto mi piace", "items": [
      { "t": "我很喜欢这个电影。", "tr": "Questo film mi piace molto." },
      { "t": "我最喜欢夏天。", "tr": "L'estate è la stagione che mi piace di più." },
      { "t": "我不太喜欢吃辣的。", "tr": "Non mi piace molto mangiare piccante." },
      { "t": "我不喜欢冬天。", "tr": "Non mi piace l'inverno." }
    ] },
    { "gruppo": "Chiedere e rispondere", "items": [
      { "t": "你喜欢茶还是咖啡？", "tr": "Ti piace di più il tè o il caffè?", "nota": "还是 offre due possibilità tra cui scegliere." },
      { "t": "你喜欢不喜欢这首歌？", "tr": "Ti piace questa canzone?", "nota": "La forma 喜欢不喜欢 non vuole 吗." }
    ] },
    { "gruppo": "Le persone e le cose che ci piacciono", "items": [
      { "t": "我最喜欢的颜色是蓝色。", "tr": "Il mio colore preferito è il blu." },
      { "t": "我喜欢她。", "tr": "Lei mi piace.", "nota": "Chi prova il sentimento (我) sta prima; lei è l'oggetto: in italiano si dice «lei mi piace»." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Mi piacciono i cani»?", "opzioni": [
      { "t": "我喜欢狗。", "ok": true, "perche": "Chi prova il piacere (我) è il soggetto; i cani sono l'oggetto e il verbo non cambia." },
      { "t": "狗喜欢我。", "ok": false, "perche": "Qui il soggetto è 狗: significa «i cani provano piacere per me», cioè «piaccio ai cani»." }
    ] },
    { "q": "Come dici «Mi piace molto il tè»?", "opzioni": [
      { "t": "我很喜欢茶。", "ok": true, "perche": "Il grado va davanti al verbo: 很 + 喜欢." },
      { "t": "我喜欢茶很。", "ok": false, "perche": "Il grado non si mette in fondo alla frase: in cinese precede sempre il verbo." },
      { "t": "我喜欢很茶。", "ok": false, "perche": "很 qualifica il verbo, non il nome che segue." }
    ] },
    { "q": "Come dici «Non mi piace correre»?", "opzioni": [
      { "t": "我不喜欢跑步。", "ok": true, "perche": "Il sentimento è uno stato: si nega con 不." },
      { "t": "我没喜欢跑步。", "ok": false, "perche": "没 nega un fatto accaduto («non l'ho fatto»); per un gusto si usa 不." }
    ] },
    { "q": "Marco dice a Anna «Mi piaci». Quale frase pronuncia?", "opzioni": [
      { "t": "我喜欢你。", "ok": true, "perche": "Chi prova il sentimento è Marco (我), l'oggetto è Anna (你)." },
      { "t": "你喜欢我。", "ok": false, "perche": "Significa «tu provi piacere per me», cioè «ti piaccio»: i ruoli sono invertiti." }
    ] },
    { "q": "Assaggi una tazza e dici che quel tè è davvero buono da bere (giudizio sulla tazza, non sui tuoi gusti).", "opzioni": [
      { "t": "这个茶很好喝。", "ok": true, "perche": "Per il sapore della cosa si usa 好喝 (o 好吃 per il cibo): la cosa è il soggetto." },
      { "t": "这个茶很喜欢。", "ok": false, "perche": "喜欢 vuole come soggetto chi prova il piacere, non il tè." }
    ] },
    { "q": "Un'amica ti chiede 你喜欢咖啡吗？ e a te non piace. Risposta breve.", "opzioni": [
      { "t": "不喜欢。", "ok": true, "perche": "La risposta breve ripete il verbo: 喜欢 oppure 不喜欢." },
      { "t": "不是。", "ok": false, "perche": "不是 risponde a una domanda con 是; qui il verbo della domanda è 喜欢." },
      { "t": "没有。", "ok": false, "perche": "没有 risponde a domande con 有 o a fatti accaduti, non a un gusto." }
    ] },
    { "q": "Quale frase dice che viaggiare ti piace in generale (non che vuoi partire adesso)?", "opzioni": [
      { "t": "我喜欢旅游。", "ok": true, "perche": "喜欢 + verbo descrive un gusto stabile." },
      { "t": "我想旅游。", "ok": false, "perche": "想 dice che ne hai voglia ora o che hai un progetto, non un gusto di sempre." }
    ] },
    { "q": "Come dici «Il mio colore preferito è il blu»?", "opzioni": [
      { "t": "我最喜欢的颜色是蓝色。", "ok": true, "perche": "最 sta davanti a 喜欢; con 的 la frase descrive il nome 颜色." },
      { "t": "我喜欢最的颜色是蓝色。", "ok": false, "perche": "最 non va dopo 喜欢: segue lo stesso ordine degli altri gradi, prima del verbo." }
    ] },
    { "q": "Come chiedi a un amico, con la forma «verbo + non + verbo», se gli piace questo film?", "opzioni": [
      { "t": "你喜欢不喜欢这个电影？", "ok": true, "perche": "Con la forma affermativa-negativa non serve 吗." },
      { "t": "你喜欢不喜欢这个电影吗？", "ok": false, "perche": "吗 e la forma 喜欢不喜欢 fanno lo stesso lavoro: non si mettono insieme." }
    ] }
  ],
  "dialogo": {
    "titolo": "Che cosa fai nel fine settimana?",
    "righe": [
      { "chi": "A", "t": "周末你喜欢做什么？", "tr": "Nel fine settimana che cosa ti piace fare?" },
      { "chi": "B", "t": "我喜欢在家看电影，也喜欢听音乐。你呢？", "tr": "Mi piace guardare un film a casa, e anche ascoltare musica. E a te?" },
      { "chi": "A", "t": "我不太喜欢在家。我最喜欢游泳。", "tr": "A me non piace molto stare a casa. Quello che mi piace di più è nuotare." },
      { "chi": "B", "t": "你喜欢跑步还是游泳？", "tr": "Ti piace di più correre o nuotare?" },
      { "chi": "A", "t": "我喜欢游泳，我不喜欢跑步。", "tr": "Mi piace nuotare, non mi piace correre." },
      { "chi": "B", "t": "我也很喜欢游泳。下个周末一起去吧！", "tr": "Anche a me piace molto nuotare. Il prossimo fine settimana andiamoci insieme!" }
    ],
    "esercizi": [
      { "q": "Che cosa non piace molto ad A?", "opzioni": [
        { "t": "Stare a casa.", "ok": true, "perche": "不太喜欢在家: «non mi piace molto stare a casa»." },
        { "t": "Nuotare.", "ok": false, "perche": "A dice di amare il nuoto (最喜欢游泳)." },
        { "t": "Ascoltare musica.", "ok": false, "perche": "È B a dire che gli piace ascoltare musica." }
      ] },
      { "q": "Che cosa significa 你喜欢跑步还是游泳？", "opzioni": [
        { "t": "Ti piace di più correre o nuotare?", "ok": true, "perche": "还是 mette due possibilità tra cui scegliere, in una domanda." },
        { "t": "Ti piace correre e nuotare?", "ok": false, "perche": "«E» sarebbe 和 (o 也); 还是 chiede di scegliere." }
      ] },
      { "q": "B risponde 我也很喜欢游泳. Come sono disposte le parole prima di 喜欢?", "opzioni": [
        { "t": "也 e 很, in quest'ordine.", "ok": true, "perche": "Gli avverbi stanno davanti al verbo: 也 poi 很, poi 喜欢." },
        { "t": "Solo 也.", "ok": false, "perche": "Nella frase c'è anche 很, che dà il grado." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Si ricalca l'italiano: chi studia mette il grado dopo l'oggetto o davanti al nome (我喜欢很茶), nega un gusto con 没 (我没喜欢咖啡) e, pensando a «mi piace il tè», fa della cosa il soggetto (茶喜欢我).",
    "perche": "«Mi piace» in italiano ha la cosa come soggetto e il gradimento nel pronome «mi». Il cinese ragiona come «io gradisco»: persona-verbo-cosa, con gradi e negazione prima del verbo. Chi traduce parola per parola ottiene frasi con un altro senso (茶喜欢我) o ordini impossibili.",
    "esci": "Chiediti: chi prova il piacere? Quella persona va davanti a 喜欢. Poi metti prima del verbo ogni parola di grado (很, 最, 不太) e, se vuoi negare, 不. La cosa che piace va per ultima.",
    "esempi": [
      { "sbagliata": "我喜欢很茶。", "giusta": "我很喜欢茶。" },
      { "sbagliata": "我没喜欢咖啡。", "giusta": "我不喜欢咖啡。" },
      { "sbagliata": "茶喜欢我。", "giusta": "我喜欢茶。" },
      { "sbagliata": "你喜欢不喜欢吗？", "giusta": "你喜欢不喜欢？" }
    ]
  },
  "curiosi": [
    { "titolo": "Due caratteri, la stessa gioia", "t": "喜欢 unisce 喜 e 欢, che separatamente significano entrambi «lieto, contento». Li ritrovi in 喜事 (un evento lieto, per esempio un matrimonio) e in 欢迎 («benvenuto»). Il verbo «piacere» nasce quindi dall'idea di «essere contento di»: chi gradisce, è contento." },
    { "titolo": "喜欢 e 爱", "t": "爱 è più forte e più intimo. Con le persone 我爱你 è una dichiarazione intensa, che si ascolta più nei film e nelle canzoni che nella vita di tutti i giorni; 我喜欢你 invece può essere un'amicizia calda o l'inizio di un sentimento, secondo il contesto. Con le attività, 爱 + verbo è più vivace di 喜欢: 我爱做饭 («adoro cucinare»)." },
    { "titolo": "Tre verbi, tre intenzioni", "t": "我喜欢茶 dice un gusto stabile; 我想喝茶 dice che ne hai voglia adesso; 我要一杯茶 è la frase che usi per ordinare. Mettere 喜欢 al posto di 想 cambia il senso: 我喜欢喝茶 non dice che vuoi un tè in questo momento." },
    { "titolo": "喜欢上: cominciare a gradire", "t": "Con 上 il verbo indica l'inizio del sentimento: 我喜欢上了这个城市 vuol dire «mi sono affezionato a questa città» (all'inizio non c'era). È un uso frequente quando si racconta come è cambiato un gusto." }
  ],
  "pragmatica": "Per dire di no con garbo, i parlanti preferiscono 不太喜欢 a 不喜欢: 我不太喜欢辣的 suona come «non è il mio forte», mentre 我不喜欢辣的 è netto. Quando qualcuno offre qualcosa, una risposta come 我都可以 («per me va bene tutto») evita di dichiarare un gusto. Con le persone, 我喜欢你 in un messaggio a un amico è sincero ma leggero; come dichiarazione sentimentale ha bisogno del contesto. A tavola, per un complimento al cibo si usa 好吃 o 好喝 oltre che 喜欢: 这个菜很好吃, 我很喜欢.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我喜欢狗。", "opzioni": [
      { "t": "Mi piacciono i cani.", "ok": true, "perche": "我 prova il piacere e 狗 è l'oggetto." },
      { "t": "Piaccio ai cani.", "ok": false, "perche": "Per «piaccio ai cani» servirebbe 狗喜欢我." },
      { "t": "Ho un cane.", "ok": false, "perche": "Per dire «avere» si usa il verbo 有: 我有狗." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "她不太喜欢咖啡。", "opzioni": [
      { "t": "A lei il caffè non piace molto.", "ok": true, "perche": "不太 = «non molto»: un rifiuto morbido." },
      { "t": "A lei il caffè non piace per niente.", "ok": false, "perche": "Il rifiuto totale si direbbe con 一点儿也不喜欢." },
      { "t": "A lei il caffè piace molto.", "ok": false, "perche": "Con 不太 la frase è negativa, non indica un gusto forte." }
    ] },
    { "k": "buco", "zh": "我＿喜欢意大利面。", "tr": "Mi piace moltissimo la pasta.", "opzioni": [
      { "t": "非常", "ok": true, "perche": "Il grado si mette prima di 喜欢; 非常 = «moltissimo»." },
      { "t": "了", "ok": false, "perche": "了 non è un grado: segna un fatto compiuto o un cambiamento." },
      { "t": "吗", "ok": false, "perche": "吗 chiude una domanda, non va prima del verbo." }
    ] },
    { "k": "buco", "zh": "你喜欢茶＿咖啡？", "tr": "Ti piace di più il tè o il caffè?", "opzioni": [
      { "t": "还是", "ok": true, "perche": "还是 offre due alternative in una domanda." },
      { "t": "和", "ok": false, "perche": "和 unisce due elementi in un elenco («tè e caffè»), non chiede di scegliere." },
      { "t": "不", "ok": false, "perche": "不 nega: non crea un'alternativa." }
    ] },
    { "k": "ordine", "t": "我最喜欢周末在家看电影", "tr": "Nel fine settimana ciò che preferisco è guardare un film a casa.", "alt": ["周末我最喜欢在家看电影", "我周末最喜欢在家看电影"] },
    { "k": "ordine", "t": "他不太喜欢吃辣的", "tr": "A lui non piace molto mangiare piccante." },
    { "k": "trasforma", "base": "我喜欢茶。", "consegna": "Di' che ti piace moltissimo: aggiungi un grado.", "accetta": ["我很喜欢茶。", "我非常喜欢茶。", "我特别喜欢茶。"], "rifiutate": [
      { "t": "我喜欢很茶。", "perche": "Il grado va prima del verbo, non davanti al nome." },
      { "t": "我喜欢茶很。", "perche": "Il grado non si mette in fondo alla frase." }
    ], "perche": "很, 非常 e 特别 sono gradi che precedono 喜欢." },
    { "k": "trasforma", "base": "我喜欢咖啡。", "consegna": "Di' che il caffè non ti piace.", "accetta": ["我不喜欢咖啡。"], "rifiutate": [
      { "t": "我没喜欢咖啡。", "perche": "没 nega un fatto accaduto; per un gusto si usa 不." }
    ], "perche": "La negazione di un sentimento è 不 + 喜欢." },
    { "k": "trasforma", "base": "你喜欢这个电影。", "consegna": "Trasforma la frase in una domanda sì/no per un amico.", "accetta": ["你喜欢这个电影吗？", "你喜欢不喜欢这个电影？", "你喜欢这个电影吗", "你喜欢这部电影吗？"], "rifiutate": [
      { "t": "你喜欢不喜欢这个电影吗？", "perche": "吗 e la forma «verbo + non + verbo» non si usano insieme." }
    ], "perche": "Per una domanda sì/no basta 吗 in fondo, oppure la forma 喜欢不喜欢 senza 吗." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Mi piace cucinare.»", "a": "我喜欢做饭。", "accetta": ["我喜欢做菜。", "我爱做饭。"], "perche": "喜欢 è seguito direttamente dal verbo: non serve nessuna particella." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Lei gli piace.» (lui prova piacere per lei)", "a": "他喜欢她。", "perche": "Chi prova il sentimento (lui) è il soggetto; chi lo ispira (lei) è l'oggetto." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Il mio colore preferito è il blu.»", "a": "我最喜欢的颜色是蓝色。", "accetta": ["我最喜欢蓝色。"], "perche": "最 va davanti a 喜欢 e 的 collega la descrizione a 颜色." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你喜欢吃辣的吗？" },
      { "chi": "B", "t": "我＿喜欢，太辣了。", "buco": true }
    ], "opzioni": [
      { "t": "不太", "ok": true, "perche": "不太喜欢 è una risposta cortese: «non molto»." },
      { "t": "不是", "ok": false, "perche": "不是 nega il verbo 是 (essere), non il verbo 喜欢." },
      { "t": "没有", "ok": false, "perche": "没有 non nega un gusto: per un sentimento serve 不." }
    ] },
    { "k": "scegli", "q": "In quale frase l'ordine delle parole è sbagliato?", "opzioni": [
      { "t": "我喜欢很茶。", "ok": true, "perche": "Il grado 很 deve precedere il verbo: 我很喜欢茶." },
      { "t": "我很喜欢茶。", "ok": false, "perche": "Qui l'ordine è giusto: soggetto, grado, verbo, oggetto." },
      { "t": "我不喜欢茶。", "ok": false, "perche": "Qui l'ordine è giusto: la negazione precede il verbo." }
    ] }
  ],
  "capaci": [
    "Sai dire che cosa ti piace e che cosa no, con persone, cose e azioni, usando la persona come soggetto.",
    "Sai graduare un gusto (molto, abbastanza, di più, non molto) con la parola di grado prima di 喜欢.",
    "Sai fare e rispondere a domande sui gusti con 吗, con 喜欢不喜欢 e con 还是.",
    "Sai distinguere 喜欢, 想, 好吃 e 好喝: un gusto stabile, un desiderio del momento, il sapore di una cosa."
  ],
  "fonti": [
    "CC-CEDICT, voce 喜歡 / 喜欢 (to like; to be fond of), consultata nel dizionario locale",
    "Tatoeba (cinese-italiano, es. 我喜欢茶), consultato nei corpora locali"
  ]
};
