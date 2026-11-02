/* Lezione 33 · Presto o tardi: 就 e 才 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["jiu-cai"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "他八点就到了。", "tr": "Alle otto era già arrivato." },
      { "t": "他十点才到。", "tr": "È arrivato solo alle dieci." },
      { "t": "我就要一杯水。", "tr": "Voglio solo un bicchiere d'acqua." },
      { "t": "他才五岁。", "tr": "Ha solo cinque anni." }
    ],
    "domanda": "Le prime due frasi dicono l'ora in cui arriva qualcuno: chi sta giudicando quell'ora, e che cosa ne pensa? E nelle ultime due, che cosa è «poco» e che cosa è «tanto»?",
    "risposta": "A giudicare è **chi parla**, non l'orologio. Con 就 (他八点就到了) l'ora gli sembra **presto** rispetto a ciò che si aspettava; con 才 (他十点才到) gli sembra **tardi**. Con le quantità vale lo stesso: in 我就要一杯水 la quantità è piccola e la dice con 就, in 他才五岁 l'età è **inferiore all'atteso** e la dice con 才. Tutti e due stanno davanti al verbo o alla quantità."
  },
  "regola": {
    "enunciato": "**就** e **才** stanno davanti al verbo (o alla quantità) e dicono come chi parla giudica il momento o la quantità rispetto a ciò che si aspettava. **就** = «già, subito, allora, proprio, solo»: è presto, rapido, facile, o segue subito. **才** = «solo ora, appena, soltanto»: è tardi, faticoso, o arriva solo dopo una condizione.",
    "schema": ["chi", "momento · quantità", "就 / 才", "verbo"],
    "punti": [
      { "ok": true, "t": "**就 = anticipo e rapidità**: 他八点就到了 («alle otto era già qui»). Spesso si accompagna a 了 quando il fatto è compiuto, ma ci sono anche 就 senza 了 per il futuro e l'abitudine: 我明天就走, 她每天六点就起床." },
      { "ok": true, "t": "**就 = una cosa subito dopo l'altra**: 我下了课就回家; con 一…就… («appena…, subito…»): 他一到家就睡觉了. Il 就 dice «allora, a quel punto»." },
      { "ok": true, "t": "**就 = conseguenza in condizione + risultato**: 如果下雨，我们就不去; 因为太累了，他就先回去了; 只要你来，我就高兴. La prima parte dice il motivo o la condizione, 就 introduce ciò che ne segue." },
      { "ok": true, "t": "**就 = «solo» e «proprio»**: 我家就三口人 («siamo solo in tre»); con 是 identifica: 这就是我的家 («questa è proprio casa mia»)." },
      { "ok": true, "t": "**才 = tardi, solo dopo, con fatica**: 他十点才到, 你吃了饭才能去 («solo dopo aver mangiato»), 只有努力，才能成功 (una condizione unica e necessaria). Con una quantità dice «soltanto, appena»: 他才五岁, 他才学了三个月." },
      { "ok": true, "t": "**都…了 e 才…呢 sono specchi**: 现在都十点了 («sono già le dieci!», è tardi) contro 现在才八点呢 («sono solo le otto», è presto). 呢 rafforza il tono." },
      { "ok": false, "t": "**Con l'ora di un fatto, 才 non porta il 了 di azione compiuta**: si dice 他十点才到 (o 他十点才到的), non 他十点才到了. Il 了 appare solo dopo il verbo in un conteggio di tempo o di quantità: 他才学了三个月." },
      { "ok": false, "t": "**Non si scrive 没才**: la negazione di «non ancora» è 还没 (我还没吃饭); 才 non si colloca dopo 没 e non si mette dopo la quantità (他五岁才 non esiste)." }
    ]
  },
  "logica": [
    "Il cinese non ha, per «già», «solo» e «appena», una parola ciascuna per ogni caso. Ha **due piccole parole davanti al verbo** che dicono la stessa cosa in due direzioni: «per me è andata meglio, prima, con meno passaggi del previsto» (就) oppure «è andata peggio, dopo, con più passaggi o più condizioni» (才). L'ora non cambia: 他九点就到了 e 他九点才到 sono la stessa ora, ma due giudizi opposti. Per scegliere, chiediti: **mi sembra presto, facile, poco? Oppure tardi, difficile, tanto?** Nel primo caso 就, nel secondo 才.",
    "Un'immagine aiuta con 就: il suo senso di base è «avvicinarsi, accostarsi» (da qui «subito, allora, proprio»: la cosa è già vicina). 才 dice invece «appena, solo ora»: la cosa arriva proprio adesso, e non prima. In italiano la stessa idea si rende con «già», «subito», «allora», «solo», «appena», «soltanto» e «non… finché»: per questo la traduzione cambia da frase a frase, mentre in cinese la regola è unica e riguarda sempre il giudizio di chi parla."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa dici", "就 · «presto, poco, subito»", "才 · «tardi, solo, soltanto»"],
    "righe": [
      ["L'ora", "他八点就到了。 (già alle otto)", "他十点才到。 (solo alle dieci)"],
      ["Quanto tempo ci vuole", "他学了一年就会说了。 (in un anno)", "他学了三年才会说。 (ci sono voluti tre anni)"],
      ["Quantità", "我家就三口人。 (siamo solo in tre)", "他才五岁。 (ha soltanto cinque anni)"],
      ["Una cosa dopo l'altra", "我下了课就回家。 (subito dopo)", "你吃了饭才能去。 (solo dopo)"],
      ["Condizione", "如果下雨，我们就不去。 (allora)", "只有努力，才能成功。 (solo così)"],
      ["Con 了", "spesso: 他八点就到了。", "non nell'ora: 他十点才到。"],
      ["Il tono di chi parla", "sorpresa, elogio, fretta", "lamentela, fatica, calma"]
    ]
  },
  "esempi": [
    { "gruppo": "L'ora: presto o tardi", "items": [
      { "t": "他六点就起床了。", "tr": "Si è alzato già alle sei.", "nota": "Per chi parla è presto: 就 + 了." },
      { "t": "他九点才起床。", "tr": "Si è alzato solo alle nove.", "nota": "Lo stesso verbo, ma l'ora sembra tarda: 才, senza 了." },
      { "t": "火车十点才开。", "tr": "Il treno parte solo alle dieci.", "nota": "Anche il futuro ammette 才: nessun 了." }
    ] },
    { "gruppo": "Quanto tempo ci vuole", "items": [
      { "t": "他学了一年就会说中文了。", "tr": "In un anno ha già imparato a parlare cinese." },
      { "t": "他学了三年才会说中文。", "tr": "Ci sono voluti tre anni prima che sapesse parlare cinese." },
      { "t": "这个菜十分钟就做好了。", "tr": "Questo piatto è pronto già in dieci minuti." }
    ] },
    { "gruppo": "Quantità: poco, soltanto", "items": [
      { "t": "我就要一杯水。", "tr": "Voglio solo un bicchiere d'acqua." },
      { "t": "他才五岁。", "tr": "Ha soltanto cinque anni." },
      { "t": "他才吃了一个苹果。", "tr": "Ha mangiato solo una mela finora.", "nota": "Dopo la quantità, 了 sta dopo il verbo: è il conteggio, non l'ora." }
    ] },
    { "gruppo": "Una cosa subito dopo l'altra", "items": [
      { "t": "我下了课就回家。", "tr": "Appena finita la lezione, vado a casa." },
      { "t": "他一到家就睡觉了。", "tr": "Appena arrivato a casa, si è messo a dormire.", "nota": "一…就…: due azioni che si seguono senza pause." },
      { "t": "你吃了饭才能去。", "tr": "Puoi andare solo dopo aver mangiato." }
    ] },
    { "gruppo": "Condizione e conseguenza", "items": [
      { "t": "如果下雨，我们就不去。", "tr": "Se piove, non andiamo." },
      { "t": "只有努力，才能成功。", "tr": "Solo con l'impegno si riesce." },
      { "t": "因为太累了，他就先回去了。", "tr": "Era troppo stanco e così è tornato prima." }
    ] },
    { "gruppo": "Proprio: 就 con 是", "items": [
      { "t": "这就是我的家。", "tr": "Questa è proprio casa mia." }
    ] }
  ],
  "contrasti": [
    { "q": "La lezione comincia alle otto. Lui è arrivato alle sette e ti sembra presto. Quale frase?", "opzioni": [
      { "t": "他七点就到了。", "ok": true, "perche": "7 è prima di 8: per chi parla è presto, quindi 就, con 了 perché l'arrivo è compiuto." },
      { "t": "他七点才到。", "ok": false, "perche": "才 direbbe che è tardi: ma le sette sono prima dell'inizio." }
    ] },
    { "q": "La lezione comincia alle otto. Lui è arrivato alle nove e ti sembra tardi. Quale frase?", "opzioni": [
      { "t": "他九点才到。", "ok": true, "perche": "Per chi parla l'ora è tarda rispetto all'attesa: 才, senza 了." },
      { "t": "他九点就到了。", "ok": false, "perche": "就 direbbe che le nove sono presto: è il giudizio opposto." }
    ] },
    { "q": "Dici che solo con l'impegno si ottiene il successo. Quale frase?", "opzioni": [
      { "t": "只有努力，才能成功。", "ok": true, "perche": "只有 indica una condizione unica e necessaria: il risultato arriva solo con 才." },
      { "t": "只有努力，就能成功。", "ok": false, "perche": "只有 e 就 non si abbinano: 就 introduce una conseguenza semplice, non una condizione unica." }
    ] },
    { "q": "Dici: «Se piove, non andiamo.»", "opzioni": [
      { "t": "如果下雨，我们就不去。", "ok": true, "perche": "如果… introduce la condizione e 就 introduce ciò che ne segue: «allora»." },
      { "t": "如果下雨，我们才不去。", "ok": false, "perche": "Dopo 如果 il legame normale tra condizione e conseguenza è 就. 才 darebbe alla frase un tono di smentita («figurati se andiamo!») e non direbbe la semplice conseguenza che vuoi." }
    ] },
    { "q": "Dici di un bambino piccolo: «Ha solo cinque anni.»", "opzioni": [
      { "t": "他才五岁。", "ok": true, "perche": "才 davanti a una quantità: è meno di quanto ci si aspettasse." },
      { "t": "他五岁才。", "ok": false, "perche": "才 sta sempre davanti al verbo o alla quantità, mai alla fine." }
    ] },
    { "q": "Dici: «È arrivato solo alle dieci.»", "opzioni": [
      { "t": "他十点才到。", "ok": true, "perche": "Con 才 e un'ora, il verbo resta senza 了." },
      { "t": "他十点才到了。", "ok": false, "perche": "Con 才 + ora il fatto è già colto dal giudizio «tardi»: il 了 di compiuto non si aggiunge, e si dice 他十点才到." }
    ] },
    { "q": "Dici: «Non ho ancora mangiato.»", "opzioni": [
      { "t": "我还没吃饭。", "ok": true, "perche": "还没 è la forma di «non ancora»." },
      { "t": "我没才吃饭。", "ok": false, "perche": "Non si scrive «没才»: la negazione e 才 non si combinano in questo modo." }
    ] },
    { "q": "Dici al figlio che si può uscire soltanto dopo aver mangiato (senza mangiare non esce).", "opzioni": [
      { "t": "你吃了饭才能出去。", "ok": true, "perche": "才 dice «solo dopo»: mangiare è condizione necessaria." },
      { "t": "你吃了饭就能出去。", "ok": false, "perche": "就 direbbe «appena hai mangiato, puoi uscire»: è una sequenza, non una condizione necessaria." }
    ] },
    { "q": "Sono le otto e vuoi dire che è ancora presto: «Sono solo le otto, è presto.»", "opzioni": [
      { "t": "现在才八点，还早呢。", "ok": true, "perche": "才 davanti a un'ora dice «solo, non di più»: chi parla la trova presto." },
      { "t": "现在都八点了，还早呢。", "ok": false, "perche": "都…了 dice «sono già le otto!», cioè tardi: contraddice «è presto»." }
    ] },
    { "q": "Dici di un amico che, appena arrivato a casa, si è messo subito a dormire.", "opzioni": [
      { "t": "他一到家就睡觉了。", "ok": true, "perche": "一…就… dice che le due azioni si seguono senza intervallo." },
      { "t": "他一到家才睡觉了。", "ok": false, "perche": "Con 才 un'azione arriva dopo una condizione o un ritardo: non dice «subito dopo», e non si abbina a 了 in questa frase." }
    ] }
  ],
  "dialogo": {
    "titolo": "A che ora ti sei alzato?",
    "righe": [
      { "chi": "A", "t": "你今天几点起床的？", "tr": "A che ora ti sei alzato oggi?" },
      { "chi": "B", "t": "我六点就起床了，你呢？", "tr": "Io già alle sei. E tu?" },
      { "chi": "A", "t": "我九点才起床。", "tr": "Io solo alle nove." },
      { "chi": "B", "t": "这么晚！你今天不用上班吗？", "tr": "Così tardi! Oggi non lavori?" },
      { "chi": "A", "t": "要上班，可是昨天工作到很晚，所以我今天九点才起床。", "tr": "Lavoro, ma ieri ho lavorato fino a tardi, e così oggi mi sono alzato solo alle nove." },
      { "chi": "B", "t": "那你到了公司就先喝杯咖啡吧。", "tr": "Allora, appena arrivato in ufficio, prenditi prima un caffè." }
    ],
    "esercizi": [
      { "q": "Con «我六点就起床了», che cosa pensa B delle sei?", "opzioni": [
        { "t": "Che sono presto e ne va un po' fiero.", "ok": true, "perche": "就 + 了 dice che l'ora è presto, per chi parla." },
        { "t": "Che sono tarde e se ne dispiace.", "ok": false, "perche": "Per dire «tardi» servirebbe 才." }
      ] },
      { "q": "Perché A dice «九点才起床»?", "opzioni": [
        { "t": "Perché ieri ha lavorato fino a tardi e giustifica l'ora tarda.", "ok": true, "perche": "Dopo 才 spesso si spiega il perché: A giustifica il ritardo." },
        { "t": "Perché le nove sono presto per lui.", "ok": false, "perche": "Se fossero presto avrebbe usato 就." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Lo studente italiano traduce una parola con una parola: «già» sempre con 已经, «solo» sempre con 只 o 才 e «appena» con qualcosa di fisso. Poi impara «才 = tardi» e ignora che 才 serve anche per «solo» davanti a una quantità. Il risultato sono frasi senza giudizio o con il giudizio sbagliato: 他十点就到，太晚了; 他十点才到了; 我没才吃饭.",
    "perche": "In italiano «già» e «solo» dicono cosa è successo, mentre in cinese 就 e 才 dicono cosa ne pensa chi parla. La scelta non dipende dall'ora ma dal giudizio: l'orologio è lo stesso, ma 就 e 才 raccontano due emozioni opposte. Il 了 è un'altra abitudine italiana: nel passato prossimo si mette sempre un ausiliare, in cinese 才 con un'ora non ne chiede.",
    "esci": "Prima di scrivere, dì a voce: «per me è presto/poco/facile?» e scegli 就; «è tardi/tanto/difficile?» e scegli 才. Poi controlla il 了: dopo 才 con un'ora non va messo.",
    "esempi": [
      { "sbagliata": "他十点才到了。", "giusta": "他十点才到。" },
      { "sbagliata": "我没才吃饭。", "giusta": "我还没吃饭。" },
      { "sbagliata": "他十点就到，太晚了。", "giusta": "他十点才到，太晚了。" }
    ]
  },
  "curiosi": [
    { "titolo": "到…才…: «non… fino a»", "t": "Con 到 («fino a») 才 traduce l'italiano «non… fino a»: 他到十点才起床 («non si è alzato fino alle dieci»). La frase cinese è affermativa: la negazione italiana è nel significato di 才, che dice «solo allora e non prima»." },
    { "titolo": "都…了 e 才…呢", "t": "都 e 才 sono due modi opposti di guardare lo stesso orologio. 都十点了 sottolinea che è già tardi, mentre 才八点呢 («sono solo le otto») dice che c'è ancora tempo. 呢 a fine frase rafforza il tono: chi parla vuole convincere chi ascolta." },
    { "titolo": "就 e 只: due «solo»", "t": "Per «solo» esistono 就 e 只. 只 è neutro e oggettivo (我只要一杯水), mentre 就 aggiunge il giudizio di chi parla («è davvero poco»). 就 ha poi molte altre funzioni (subito, allora, proprio) che 只 non ha." },
    { "titolo": "才 prima della negazione: il rifiuto stizzito", "t": "In lingua parlata 才 può stare davanti a 不 o 没 in una risposta decisa: 我才不去呢！ («ma figurati, io non ci vado!»). Il senso è di correzione o di contrasto con ciò che l'altro ha detto. È un uso colloquiale e affettivo, diverso dalla costruzione con 还没 che dice «non ancora»." }
  ],
  "pragmatica": "Entrambi portano l'atteggiamento di chi parla: 才 può suonare di lamentela o di calma, 就 di sorpresa, elogio o fretta. Una frase come 他八点才到 è un giudizio sull'altro: tra persone che non si conoscono bene si accompagna con una spiegazione (他八点才到，因为路上堵车) o si lascia fuori il giudizio con 他八点到的.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他十点才到。", "opzioni": [
      { "t": "È arrivato solo alle dieci.", "ok": true, "perche": "才 davanti all'ora dice che per chi parla è tardi." },
      { "t": "È arrivato già alle dieci.", "ok": false, "perche": "«Già» si dice con 就, non con 才: qui l'ora è tarda." },
      { "t": "Arriverà alle dieci.", "ok": false, "perche": "La frase giudica l'ora, non annuncia il futuro." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他才五岁。", "opzioni": [
      { "t": "Ha solo cinque anni.", "ok": true, "perche": "才 davanti a una quantità: è meno dell'atteso." },
      { "t": "Ha già cinque anni.", "ok": false, "perche": "«Già» si dice con 就; 才 davanti all'età dice invece che è poco." },
      { "t": "Ha compiuto cinque anni oggi.", "ok": false, "perche": "Non c'è nessun riferimento al compleanno." }
    ] },
    { "k": "buco", "zh": "他三岁＿会说中文。", "tr": "A tre anni parlava già cinese.", "opzioni": [
      { "t": "就", "ok": true, "perche": "A tre anni è presto: 就, «già»." },
      { "t": "才", "ok": false, "perche": "才 direbbe «solo a tre anni», cioè tardi: è il significato opposto a quello richiesto." },
      { "t": "再", "ok": false, "perche": "再 vuol dire «di nuovo, poi»: non dice nulla del momento." }
    ] },
    { "k": "buco", "zh": "你吃了饭＿能去。", "tr": "Puoi andare solo dopo aver mangiato.", "opzioni": [
      { "t": "才", "ok": true, "perche": "Condizione necessaria: «solo dopo»." },
      { "t": "就", "ok": false, "perche": "就 direbbe «appena hai mangiato»: una sequenza." },
      { "t": "都", "ok": false, "perche": "都 vuol dire «tutti, già»: non introduce una condizione." }
    ] },
    { "k": "buco", "zh": "现在＿八点，还早呢。", "tr": "Sono solo le otto, è ancora presto.", "opzioni": [
      { "t": "才", "ok": true, "perche": "才 + ora + 呢 dice «sono solo»: è presto." },
      { "t": "都", "ok": false, "perche": "都 vorrebbe il 了 («sono già le otto») e direbbe che è tardi." },
      { "t": "也", "ok": false, "perche": "也 vuol dire «anche»: qui non c'è nulla da aggiungere." }
    ] },
    { "k": "ordine", "t": "我七点就来了", "tr": "Sono venuto già alle sette." },
    { "k": "ordine", "t": "他九点才起床", "tr": "Si è alzato solo alle nove." },
    { "k": "trasforma", "base": "他八点到。", "consegna": "Per te è presto: scrivi la frase con 就 e 了 («Alle otto era già arrivato»).", "accetta": ["他八点就到了。"], "rifiutate": [
      { "t": "他八点才到。", "perche": "才 direbbe che è tardi: l'opposto del giudizio richiesto." }
    ], "perche": "就 va davanti al verbo e 了 chiude il fatto compiuto: 他八点就到了." },
    { "k": "trasforma", "base": "他五岁。", "consegna": "Dici che per te è poco: «Ha solo cinque anni».", "accetta": ["他才五岁。"], "rifiutate": [
      { "t": "他五岁才。", "perche": "才 non sta alla fine: si mette davanti alla quantità." }
    ], "perche": "才 davanti alla quantità dice che è meno dell'atteso." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Sono arrivato solo alle dieci.»", "a": "我十点才到。", "accetta": ["我十点才来。", "十点我才到。", "我是十点才到的。", "我十点才到的。"], "perche": "L'ora tarda si dice con 才 davanti al verbo e senza 了." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Se piove, non andiamo.»", "a": "如果下雨，我们就不去。", "accetta": ["如果下雨我们就不去。", "要是下雨，我们就不去。", "下雨的话，我们就不去。", "如果下雨，我们就不去了。"], "perche": "如果 dice la condizione e 就 introduce la conseguenza." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你几点到的？" },
      { "chi": "B", "t": "我六点＿到了，很早吧？", "buco": true }
    ], "opzioni": [
      { "t": "就", "ok": true, "perche": "B pensa che le sei siano presto: 就." },
      { "t": "才", "ok": false, "perche": "才 direbbe tardi, ma B aggiunge «很早»." },
      { "t": "再", "ok": false, "perche": "再 non dice nulla del momento." }
    ] }
  ],
  "capaci": [
    "Sai dire se un'ora o una quantità ti sembra presto o tardi, poca o tanta, scegliendo 就 o 才.",
    "Sai collegare due azioni che si seguono con 就 e con 一…就….",
    "Sai usare 如果/因为…就… per la conseguenza e 只有…才… per la condizione unica.",
    "Sai evitare 才…了 con l'ora e 没才, e usare 还没 per «non ancora»."
  ],
  "glosse": {
    "我明天就走": "Parto domani",
    "她每天六点就起床": "Si alza ogni giorno alle sei",
    "只要你来，我就高兴": "Basta che tu venga e io sono contento",
    "他才学了三个月": "Ha studiato solo tre mesi",
    "现在都十点了": "Sono già le dieci",
    "现在才八点呢": "Sono solo le otto!",
    "他十点才到的": "È arrivato solo alle dieci",
    "我还没吃饭": "Non ho ancora mangiato",
    "他九点才到": "È arrivato solo alle nove",
    "我只要一杯水": "Voglio solo un bicchiere d'acqua",
    "他八点才到，因为路上堵车": "È arrivato solo alle otto perché c'era traffico",
    "他八点到的": "È arrivato alle otto"
  },
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Comparing cai and jiu»: 才 = più tardi del previsto, 就 = più presto, entrambi per piccole quantità, 才 + ora = «solo»",
    "Chinese Grammar Wiki (AllSet Learning), «Expressing earliness with jiu»: 就 + 了 per l'anticipo",
    "CC-CEDICT, voci 就 e 才 (valori: subito, solo, appena, soltanto) e Tatoeba (cinese-italiano, es. 我刚刚才到的), consultati con tools/lezioni-check.mjs"
  ]
};
