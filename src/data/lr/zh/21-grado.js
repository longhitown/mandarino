/* Lezione 21 · Come lo fai: 说得很好 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["grado"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "他说得很好。", "tr": "Parla bene." },
      { "t": "你跑得很快。", "tr": "Corri veloce." },
      { "t": "我昨天睡得不好。", "tr": "Ieri ho dormito male." },
      { "t": "他中文说得很好。", "tr": "Parla bene il cinese." }
    ],
    "domanda": "Che cosa c'è sempre tra il verbo (说, 跑, 睡) e il giudizio (很好, 很快, 不好)? E nell'ultima frase, dove è finito l'oggetto «cinese»: prima o dopo il verbo?",
    "risposta": "Tra il verbo e il giudizio c'è sempre **得** (de). Il giudizio è un aggettivo, di solito preceduto da 很, oppure da 不 per dire il contrario. Nell'ultima frase l'oggetto 中文 sta **prima** del verbo: il verbo con 得 non può avere subito dopo un oggetto, così 中文 passa davanti (oppure il verbo si ripete: 他说中文说得很好)."
  },
  "regola": {
    "enunciato": "Per dire **come** qualcuno fa un'azione si usa **verbo + 得 + aggettivo**: 他说得很好, 你跑得很快. Questa parte dopo 得 si chiama **complemento di grado** (o di stato) e giudica il modo, la qualità o la velocità dell'azione. Se il verbo ha un oggetto, l'oggetto va prima del verbo (中文说得很好) oppure il verbo si ripete (说中文说得很好).",
    "schema": ["chi", "(oggetto)", "verbo", "得", "(很) + aggettivo"],
    "punti": [
      { "ok": true, "t": "**得 sta subito dopo il verbo** e prima del giudizio: 她唱得很好, 我睡得不好. Il giudizio è un aggettivo o un'espressione simile: 好, 快, 慢, 早, 晚, 清楚, 高兴." },
      { "ok": true, "t": "**Il giudizio vuole di solito 很** (o 非常, 太, 真, 不太): 他跑得很快. Un aggettivo nudo, 他跑得快, suona come un confronto implicito («lui corre veloce, io no») e si usa per contrapporre." },
      { "ok": true, "t": "**Si nega l'aggettivo, non il verbo**: 我说得不好, 他写得不太清楚. La frase 我不说得好 non esiste." },
      { "ok": true, "t": "**Con un oggetto**: 他说中文说得很好 (verbo ripetuto) oppure 他中文说得很好 (oggetto davanti). Nel parlato la seconda forma è la più frequente; il primo verbo + oggetto si può anche omettere quando il contesto è chiaro: 中文他说得很好." },
      { "ok": true, "t": "**Domanda**: 他说得好吗？ oppure 他说得好不好？ La risposta ripete verbo e 得: 说得很好 / 说得不好." },
      { "ok": true, "t": "**Confronto**: 他跑得比我快 («corre più veloce di me»), 我说得没有他好 («parlo meno bene di lui»). Il 比 si mette davanti al giudizio, dopo 得." },
      { "ok": false, "t": "**Non si dice** 他说中文得很好 (得 non può seguire un oggetto), né 他说很好 (senza 得 la frase non regge), né 他说得好了 per dire «ha parlato bene ieri»: il complemento di grado descrive il modo, non porta 了." }
    ]
  },
  "logica": [
    "In italiano il modo dell'azione è un avverbio che sta dopo il verbo: «parla bene», «corre veloce». In cinese gli aggettivi non diventano avverbi con un suffisso (come -mente) e non si mettono direttamente dopo il verbo: tra i due serve un legame, e quel legame è 得. Pensa a 说得很好 come a «il suo parlare è molto buono»: il verbo dice l'azione, 得 introduce la valutazione, l'aggettivo la dà.",
    "Da qui nasce la regola dell'oggetto. Dopo 得 c'è già un blocco completo (la valutazione), e il verbo con 得 non può trascinarsi dietro anche un oggetto. Il cinese ha due soluzioni, entrambe naturali: **ripetere il verbo** (说中文 prima, 说得很好 dopo: il primo pezzo nomina l'azione con il suo oggetto, il secondo la giudica) oppure **portare l'oggetto davanti** come argomento della frase (中文, 他说得很好: «il cinese, lo parla bene»). Chi legge italiano di solito pensa «parla + cinese + bene» e inserisce 得 troppo tardi."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Come lo costruisci", "Esempio"],
    "righe": [
      ["Come si fa un'azione (senza oggetto)", "verbo + 得 + 很 + aggettivo", "你跑得很快。"],
      ["Come si fa, con un oggetto", "verbo + oggetto + verbo + 得 + giudizio", "她唱歌唱得很好。"],
      ["Stessa cosa, oggetto davanti", "oggetto + verbo + 得 + giudizio", "他中文说得很好。"],
      ["Non si fa bene", "verbo + 得 + 不 + aggettivo", "我睡得不好。"],
      ["Troppo", "verbo + 得 + 太 + aggettivo + 了", "你来得太晚了。"],
      ["Una domanda sul modo", "verbo + 得 + 好吗 / 好不好", "他唱得好吗？"],
      ["Più di un altro", "verbo + 得 + 比 + persona + aggettivo", "他跑得比我快。"]
    ]
  },
  "esempi": [
    { "gruppo": "Il modo dell'azione: bene, veloce, presto", "items": [
      { "t": "他说得很好。", "tr": "Parla molto bene." },
      { "t": "你跑得很快。", "tr": "Corri molto veloce." },
      { "t": "妈妈今天起得很早。", "tr": "Oggi la mamma si è alzata molto presto.", "nota": "Un fatto di oggi, ma niente 了: 得 descrive il modo." },
      { "t": "他开车开得很慢。", "tr": "Guida molto piano." }
    ] },
    { "gruppo": "Con un oggetto: verbo ripetuto o oggetto davanti", "items": [
      { "t": "她唱歌唱得非常好。", "tr": "Canta benissimo." },
      { "t": "他说中文说得很好。", "tr": "Parla molto bene il cinese." },
      { "t": "我汉字写得不好。", "tr": "Scrivo male i caratteri.", "nota": "Oggetto davanti: 汉字 è l'argomento della frase." },
      { "t": "我弟弟游泳游得很快。", "tr": "Mio fratello nuota molto veloce." }
    ] },
    { "gruppo": "Giudizio negativo e troppo", "items": [
      { "t": "我昨天睡得不好。", "tr": "Ieri ho dormito male." },
      { "t": "你来得太晚了。", "tr": "Sei arrivato troppo tardi." },
      { "t": "他吃得太多了。", "tr": "Ha mangiato troppo." }
    ] },
    { "gruppo": "Domande e confronti", "items": [
      { "t": "她做饭做得好吗？", "tr": "Cucina bene?" },
      { "t": "他跑得比我快。", "tr": "Corre più veloce di me." },
      { "t": "我说得没有他好。", "tr": "Parlo meno bene di lui." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Parla bene il cinese»?", "opzioni": [
      { "t": "他说中文说得很好。", "ok": true, "perche": "Il verbo si ripete: il primo 说 prende l'oggetto, il secondo 说 prende 得 e il giudizio." },
      { "t": "他说中文得很好。", "ok": false, "perche": "得 deve stare subito dopo il verbo: dopo un oggetto non può comparire." }
    ] },
    { "q": "Come dici «Ieri ho dormito male»?", "opzioni": [
      { "t": "我昨天睡得不好。", "ok": true, "perche": "Si nega l'aggettivo (不好) dopo 得." },
      { "t": "我昨天不睡得好。", "ok": false, "perche": "Il 不 va davanti al giudizio, non davanti al verbo: 睡得不好." }
    ] },
    { "q": "Dici che una ragazza cucina molto bene.", "opzioni": [
      { "t": "她做饭做得很好。", "ok": true, "perche": "Verbo ripetuto (做饭 poi 做得) e giudizio con 很." },
      { "t": "她做饭很好。", "ok": false, "perche": "Senza 得 il giudizio non si lega al verbo: la frase suona incompleta." }
    ] },
    { "q": "Dici che tuo fratello corre veloce.", "opzioni": [
      { "t": "我哥哥跑得很快。", "ok": true, "perche": "Dopo il verbo il legame è 得: 跑得很快." },
      { "t": "我哥哥跑地很快。", "ok": false, "perche": "地 sta davanti al verbo e fa da avverbio (很快地跑); dopo il verbo il legame si scrive 得." }
    ] },
    { "q": "Oggi ti sei alzato molto presto. Come lo dici?", "opzioni": [
      { "t": "我今天起得很早。", "ok": true, "perche": "Descrivi il modo (molto presto): 得 + giudizio, senza 了." },
      { "t": "我今天起了很早。", "ok": false, "perche": "了 chiude un'azione e vuole una quantità; per dire «presto» serve il giudizio con 得." }
    ] },
    { "q": "Dici che lui scrive male i caratteri, con l'oggetto davanti.", "opzioni": [
      { "t": "他汉字写得不好。", "ok": true, "perche": "Oggetto (汉字) davanti e poi verbo + 得 + 不好." },
      { "t": "他汉字不写得好。", "ok": false, "perche": "La negazione si lega al giudizio, non al verbo con 得." }
    ] },
    { "q": "Dici «Corre più veloce di me».", "opzioni": [
      { "t": "他跑得比我快。", "ok": true, "perche": "Il confronto sta dopo 得: 比 + persona + aggettivo." },
      { "t": "他跑得很比我快。", "ok": false, "perche": "比 e 很 non stanno insieme: con 比 l'aggettivo resta nudo." }
    ] },
    { "q": "Qualcuno dice 他开车开得太快了。 Che cosa significa?", "opzioni": [
      { "t": "Guida troppo veloce.", "ok": true, "perche": "太…了 con il giudizio 快: l'eccesso riguarda il modo di guidare." },
      { "t": "Ha imparato a guidare presto.", "ok": false, "perche": "Per dire «ha imparato presto» servirebbe un'altra frase (学得很快); qui 得 giudica come guida." },
      { "t": "È partito troppo presto.", "ok": false, "perche": "Partire si direbbe 走得太早; qui c'è 开车 e il giudizio è sulla velocità." }
    ] }
  ],
  "dialogo": {
    "titolo": "Complimenti dopo la lezione",
    "righe": [
      { "chi": "A", "t": "你汉字写得真好看！", "tr": "Scrivi i caratteri proprio bene!" },
      { "chi": "B", "t": "哪里，我写得不太好。你中文说得才好呢。", "tr": "Ma no, non scrivo tanto bene. È il tuo cinese parlato che è bello." },
      { "chi": "A", "t": "我说得不好，我说得太慢了。", "tr": "Non parlo bene, parlo troppo piano." },
      { "chi": "B", "t": "不慢，你说得很清楚，我都听得懂。", "tr": "Non è piano, parli molto chiaro e io capisco tutto." },
      { "chi": "A", "t": "谢谢。你每天几点起床？", "tr": "Grazie. A che ora ti alzi ogni giorno?" },
      { "chi": "B", "t": "我起得很早，六点就起床了。", "tr": "Mi alzo molto presto, già alle sei." }
    ],
    "esercizi": [
      { "q": "Che cosa risponde B al complimento di A?", "opzioni": [
        { "t": "Dice con modestia che scrive non troppo bene.", "ok": true, "perche": "我写得不太好 è la risposta abituale a un complimento: si nega l'aggettivo dopo 得." },
        { "t": "Dice che non scrive mai.", "ok": false, "perche": "不太好 giudica la qualità (non molto buona), non la frequenza." },
        { "t": "Dice che A scrive male.", "ok": false, "perche": "Il soggetto di 我写得不太好 è B: parla di sé." }
      ] },
      { "q": "Perché A dice 我说得太慢了?", "opzioni": [
        { "t": "Giudica la propria velocità nel parlare: troppo piano.", "ok": true, "perche": "太…了 dopo 得 esprime l'eccesso nel modo dell'azione." },
        { "t": "Dice di parlare solo poco.", "ok": false, "perche": "Il giudizio 慢 riguarda la velocità, non la quantità di parole." },
        { "t": "Dice di aver parlato ieri.", "ok": false, "perche": "Nessuna parola di tempo; 得 non segna il passato." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano costruisce «verbo + oggetto + bene» e lascia fuori 得, oppure lo mette dopo l'oggetto: 他说中文得很好, 他说很好, 我不睡得好.",
    "perche": "In italiano l'avverbio si appoggia direttamente al verbo e l'oggetto sta in mezzo senza problemi («parla cinese bene»). In cinese il giudizio si lega al verbo tramite 得, e il verbo con 得 non regge un oggetto subito dopo. Anche la negazione non segue il verbo: l'italiano «non parla bene» fa pensare a 不说得好.",
    "esci": "Prima di scrivere chiediti due cose: c'è un oggetto? Se sì, ripeti il verbo (说中文说得…) oppure metti l'oggetto davanti (中文说得…). Poi controlla che 得 stia subito dopo il verbo che giudichi e che il 不 stia davanti all'aggettivo.",
    "esempi": [
      { "sbagliata": "他说中文得很好。", "giusta": "他说中文说得很好。" },
      { "sbagliata": "他说很好。", "giusta": "他说得很好。" },
      { "sbagliata": "我昨天不睡得好。", "giusta": "我昨天睡得不好。" },
      { "sbagliata": "她唱得歌很好。", "giusta": "她唱歌唱得很好。" }
    ]
  },
  "curiosi": [
    { "titolo": "Tre «de» che si pronunciano uguale", "t": "Il cinese ha tre particelle che si leggono tutte de: 的 (lega un nome a ciò che lo descrive: 我的书), 地 (davanti al verbo, forma l'avverbio: 慢慢地走) e 得 (dopo il verbo, introduce il complemento: 走得很慢). Nella lingua parlata si dice sempre allo stesso modo; nello scritto accurato si distinguono. In questa lezione conta 得: dopo il verbo, quando devi giudicare come si fa un'azione." },
    { "titolo": "Il giudizio può anche descrivere l'effetto", "t": "Dopo 得 non c'è solo un aggettivo come 好 o 快. Si possono aggiungere frasi che descrivono il risultato dell'azione: 笑得很开心 («rideva allegro»), 忙得没有时间吃饭 («così impegnato da non aver tempo di mangiare»). La struttura è la stessa: verbo + 得 + descrizione. Sono forme frequenti nel parlato e nei racconti." },
    { "titolo": "Senza 很, il confronto sottinteso", "t": "Un aggettivo nudo dopo 得, come in 他跑得快, suona come un contrasto: lui corre veloce (e altri no). Per una semplice descrizione si mette 很 (che qui ha poco valore di «molto»): 他跑得很快. Per un tratto negativo si dice 跑得不快, che vale «non corre veloce»." }
  ],
  "pragmatica": "Davanti a un complimento sulla tua lingua, la risposta abituale è la modestia: 哪里哪里, 我说得不好, 还差得远 («ho ancora molta strada»). Chi la fa non vuole dire il falso: la cortesia cinese chiede di non accettare un elogio troppo in fretta. A tua volta, quando lodi un'altra persona, 你…得真好 / 你…得很好 è la formula più naturale: 你唱得真好, 你做饭做得真好吃. Nello scritto formale 得 resta, ma gli aggettivi sono più ricercati.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他说得很好。", "opzioni": [
      { "t": "Parla molto bene.", "ok": true, "perche": "说得很好: verbo + 得 + giudizio positivo." },
      { "t": "Ha detto una cosa molto buona ieri.", "ok": false, "perche": "Senza 了 e senza parole di tempo, 得 giudica il modo di parlare." },
      { "t": "Non parla bene.", "ok": false, "perche": "Per il negativo servirebbe 不 prima di 好." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "你来得太晚了。", "opzioni": [
      { "t": "Sei arrivato troppo tardi.", "ok": true, "perche": "来得太晚了: il modo (tardi) è giudicato con 太…了." },
      { "t": "Sei arrivato molto presto.", "ok": false, "perche": "晚 vuol dire «tardi»; «presto» è 早." },
      { "t": "Non verrai più.", "ok": false, "perche": "Il verbo è 来 con giudizio sul momento d'arrivo, non un'intenzione." }
    ] },
    { "k": "buco", "zh": "她唱歌唱＿很好。", "tr": "Canta molto bene.", "opzioni": [
      { "t": "得", "ok": true, "perche": "Dopo il secondo verbo il legame con il giudizio è 得." },
      { "t": "的", "ok": false, "perche": "的 lega un nome a ciò che lo determina, non un verbo al suo giudizio." },
      { "t": "了", "ok": false, "perche": "了 chiude un'azione; qui si valuta il modo." }
    ] },
    { "k": "buco", "zh": "我昨天睡得＿好。", "tr": "Ieri ho dormito male.", "opzioni": [
      { "t": "不", "ok": true, "perche": "Si nega l'aggettivo: 睡得不好." },
      { "t": "没", "ok": false, "perche": "没 nega un fatto non avvenuto; qui il fatto è avvenuto e il giudizio è negativo." },
      { "t": "很", "ok": false, "perche": "很好 darebbe un giudizio positivo: «ho dormito molto bene»." }
    ] },
    { "k": "ordine", "t": "你跑得很快", "tr": "Corri molto veloce." },
    { "k": "ordine", "t": "他中文说得很好", "tr": "Parla molto bene il cinese.", "alt": ["他说中文说得很好"] },
    { "k": "trasforma", "base": "他说中文。", "consegna": "Aggiungi che lo parla bene, ripetendo il verbo.", "accetta": ["他说中文说得很好。", "他说中文说得好。", "他说中文说得非常好。"], "rifiutate": [
      { "t": "他说中文得很好。", "perche": "得 non può stare dopo l'oggetto: il verbo si ripete." }
    ], "perche": "Dopo l'oggetto il verbo torna e porta 得 con il giudizio." },
    { "k": "trasforma", "base": "他中文说得很好。", "consegna": "Dì che invece parla male il cinese: nega il giudizio.", "accetta": ["他中文说得不好。", "他中文说得不太好。", "他说中文说得不好。", "他说中文说得不太好。"], "rifiutate": [
      { "t": "他中文不说得好。", "perche": "Il 不 va davanti all'aggettivo, dopo 得." }
    ], "perche": "不 si mette subito prima del giudizio: 说得不好." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ieri ho dormito male.»", "a": "我昨天睡得不好。", "accetta": ["昨天我睡得不好。", "我昨天睡得不太好。", "昨天我睡得不太好。"], "perche": "Verbo + 得 + 不好; la parola di tempo basta, niente 了." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Canta benissimo.» (parlando di lei)", "a": "她唱歌唱得非常好。", "accetta": ["她唱歌唱得很好。", "她唱歌唱得特别好。", "她唱得非常好。", "她唱得很好。", "她唱歌唱得真好。"], "perche": "Si ripete il verbo dopo l'oggetto e si giudica con 得 + 非常好." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你的汉字写得真好。" },
      { "chi": "B", "t": "哪里，我写＿不太好。", "buco": true }
    ], "opzioni": [
      { "t": "得", "ok": true, "perche": "写得不太好: verbo + 得 + giudizio negativo attenuato." },
      { "t": "的", "ok": false, "perche": "的 non può stare dopo un verbo per introdurre un giudizio." },
      { "t": "地", "ok": false, "perche": "地 va davanti al verbo e forma l'avverbio, non dopo." }
    ] },
    { "k": "scegli", "q": "Quale frase è corretta?", "opzioni": [
      { "t": "她做饭做得很好。", "ok": true, "perche": "Il verbo si ripete: 做饭 poi 做得." },
      { "t": "她做饭得很好。", "ok": false, "perche": "得 non può seguire direttamente il gruppo verbo + oggetto." },
      { "t": "她做得饭很好。", "ok": false, "perche": "L'oggetto non si inserisce tra 得 e il giudizio." }
    ] }
  ],
  "capaci": [
    "Sai dire come qualcuno fa un'azione con verbo + 得 + giudizio (说得很好, 跑得很快).",
    "Sai gestire l'oggetto: ripetere il verbo (说中文说得好) o portarlo davanti (中文说得好).",
    "Sai negare il giudizio (睡得不好) e dire «troppo» (来得太晚了).",
    "Sai chiedere e confrontare: 他唱得好吗？, 他跑得比我快."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Degree complement»: struttura verbo + 得 + giudizio, verbo ripetuto o oggetto davanti, forme errate con 得 dopo l'oggetto",
    "Chinese Grammar Wiki (AllSet Learning), «State complement»: ripetizione del verbo quando c'è un oggetto, negazione sul giudizio",
    "Tatoeba (cinese), frasi come 她的英语说得很好, 你咖啡喝得太多了, consultate con la raccolta locale cmn.tsv",
    "CC-CEDICT, voce 得 (de, dé, děi): uso come particella strutturale dopo il verbo"
  ]
};
