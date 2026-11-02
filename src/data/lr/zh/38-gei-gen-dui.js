/* Lezione 38 · A chi, con chi, verso chi: 给, 跟, 对 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["gei-gen-dui"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我给妈妈打电话。", "tr": "Telefono alla mamma." },
      { "t": "我跟朋友一起去。", "tr": "Ci vado insieme a un amico." },
      { "t": "他对我很好。", "tr": "È molto gentile con me." },
      { "t": "她对我笑了。", "tr": "Mi ha sorriso." }
    ],
    "domanda": "In ogni frase c'è una persona (妈妈, 朋友, 我) introdotta da una parola. Dove sta questa coppia «parola + persona» rispetto al verbo? E che cosa cambia nel rapporto con la persona: a chi va qualcosa, con chi si fa qualcosa, verso chi è rivolto un atteggiamento?",
    "risposta": "La coppia sta sempre **prima del verbo** (o dell'aggettivo): 给妈妈打电话, 跟朋友一起去, 对我很好. In italiano la persona viene dopo il verbo («telefono a mia madre», «vado con un amico»). Le tre parole dicono rapporti diversi: **给** = il destinatario di qualcosa, **跟** = il compagno con cui si fa l'azione, **对** = la persona verso cui è rivolto un atteggiamento o un gesto."
  },
  "regola": {
    "enunciato": "Per dire «a chi», «con chi» e «verso chi» il cinese mette una piccola preposizione e la persona **prima del verbo**: **给** + destinatario, **跟** + compagno, **对** + bersaglio di un atteggiamento. La frase ha quindi l'ordine «chi fa + preposizione + persona + verbo».",
    "schema": ["chi fa", "给 / 跟 / 对", "persona", "verbo / aggettivo", "il resto"],
    "punti": [
      { "ok": true, "t": "**给 + persona** introduce il destinatario o il beneficiario: 我给你打电话, 他给我开门 («apre la porta per me»). Con i verbi di trasferimento 给 si mette anche dopo il verbo: 送给她, 借给他, 卖给朋友." },
      { "ok": true, "t": "**跟 + persona** dice con chi si fa l'azione: 我跟朋友去爬山. Con 一起 prima del verbo si sottolinea che si fa insieme: 跟朋友一起去. Con i verbi di parola vale «con, a»: 跟老师说话." },
      { "ok": true, "t": "**对 + persona o cosa** esprime un atteggiamento o un gesto rivolto a qualcuno: 他对我很好, 她对我笑了, 我对中文很有兴趣. Con 对…来说 si dice «per, dal punto di vista di»." },
      { "ok": true, "t": "**Negazione, modali e tempo stanno prima della preposizione**: 我不想跟他说话, 我没给他打电话, 明天我会给你打电话." },
      { "ok": true, "t": "**跟…一样** confronta due cose («uguale a»): 他跟我一样高. Qui 跟 equivale a «come, rispetto a»." },
      { "ok": false, "t": "**Non si scambiano a caso**: 他给我很好 e 我给中文有兴趣 sono errate, perché 给 porta qualcosa a qualcuno e non esprime un atteggiamento. Per un atteggiamento serve 对." }
    ]
  },
  "logica": [
    "L'italiano mette dopo il verbo tutto ciò che riguarda le persone: «telefono **a** mia madre», «vado **con** un amico», «sono gentile **con** lei». Il cinese ha una regola diversa: le informazioni su una persona che accompagnano l'azione (a chi, con chi, verso chi) vanno **prima** del verbo, come una cornice. Il verbo viene dopo ed è la parte più importante della frase.",
    "Le tre parole mantengono anche il senso verbale: 给 «dare» (给我一杯水), con la persona che riceve; 跟 «seguire» (跟我来), con la persona che accompagna; 对 «rivolgersi a» (对…说), con la persona verso cui si rivolge l'atteggiamento. Da questo si capisce perché 对 compare con aggettivi e verbi di atteggiamento (好, 笑, 有兴趣) e 给 con le azioni che portano qualcosa a qualcuno (打电话, 发短信, 买)."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Parola", "Rapporto con la persona", "Esempio"],
    "righe": [
      ["给", "riceve qualcosa, o l'azione è fatta per lui", "我给你发短信。"],
      ["跟", "compie l'azione insieme a me, parla con me", "我想跟你说话。"],
      ["对", "è il bersaglio di un atteggiamento o di un gesto", "他对我很好。"],
      ["对…来说", "dal punto di vista di", "对我来说，中文不难。"],
      ["跟…一样", "uguale a", "他跟我一样高。"]
    ]
  },
  "esempi": [
    { "gruppo": "给: a chi va qualcosa", "items": [
      { "t": "我给你发短信。", "tr": "Ti mando un messaggio." },
      { "t": "我今天给妈妈买了一件衣服。", "tr": "Oggi ho comprato un vestito per la mamma." },
      { "t": "他给我开门。", "tr": "Mi apre la porta.", "nota": "给 qui vale «per»: la persona è il beneficiario dell'azione." },
      { "t": "我把这本书送给她了。", "tr": "Le ho regalato questo libro.", "nota": "Con 送 la persona può seguire il verbo: 送给她." }
    ] },
    { "gruppo": "跟: con chi", "items": [
      { "t": "我周末跟朋友去爬山。", "tr": "Nel fine settimana vado in montagna con gli amici." },
      { "t": "你想跟我一起吃饭吗？", "tr": "Vuoi mangiare insieme a me?" },
      { "t": "他常跟老师聊天。", "tr": "Chiacchiera spesso con l'insegnante." }
    ] },
    { "gruppo": "对: verso chi", "items": [
      { "t": "老板对我们很好。", "tr": "Il capo è molto gentile con noi." },
      { "t": "我对音乐很有兴趣。", "tr": "Mi interessa molto la musica." },
      { "t": "他对我笑了笑。", "tr": "Mi ha fatto un sorriso." },
      { "t": "对我来说，中文不太难。", "tr": "Per me il cinese non è troppo difficile." }
    ] },
    { "gruppo": "Negazione, modali e confronto", "items": [
      { "t": "我不想跟他说话。", "tr": "Non voglio parlare con lui." },
      { "t": "明天我会给你打电话。", "tr": "Domani ti telefono." },
      { "t": "他跟我一样高。", "tr": "È alto come me." }
    ] }
  ],
  "contrasti": [
    { "q": "Dici che comprerai un regalo per la mamma. Quale frase?", "opzioni": [
      { "t": "我想给妈妈买一个礼物。", "ok": true, "perche": "给 introduce il beneficiario: il regalo è per la mamma." },
      { "t": "我想对妈妈买一个礼物。", "ok": false, "perche": "对 esprime un atteggiamento verso qualcuno, non il destinatario di un oggetto." }
    ] },
    { "q": "Dici che andrai al cinema insieme a un amico. Quale frase?", "opzioni": [
      { "t": "我跟朋友一起去看电影。", "ok": true, "perche": "跟 + persona dice con chi si fa l'azione, e 一起 la rafforza." },
      { "t": "我给朋友一起去看电影。", "ok": false, "perche": "给 porta qualcosa a qualcuno: qui l'amico è un compagno, non un destinatario." }
    ] },
    { "q": "Dici che il capo è gentile con tutti voi, con tono di apprezzamento. Quale frase?", "opzioni": [
      { "t": "老板对我们很好。", "ok": true, "perche": "对 + persona rivolge un atteggiamento («gentile con») verso di loro." },
      { "t": "老板给我们很好。", "ok": false, "perche": "给 non esprime un atteggiamento: porta qualcosa a qualcuno." },
      { "t": "老板在我们很好。", "ok": false, "perche": "在 indica il luogo («in, a»), non il rapporto verso una persona." }
    ] },
    { "q": "Dici che la musica ti interessa. Quale frase?", "opzioni": [
      { "t": "我对音乐很有兴趣。", "ok": true, "perche": "L'interesse è un atteggiamento rivolto verso qualcosa: 对." },
      { "t": "我给音乐很有兴趣。", "ok": false, "perche": "给 non introduce l'oggetto di un interesse." }
    ] },
    { "q": "Dici che vuoi parlare con lui. Quale frase?", "opzioni": [
      { "t": "我想跟他说话。", "ok": true, "perche": "跟 + persona sta prima del verbo, dopo il verbo modale 想." },
      { "t": "我想说话跟他。", "ok": false, "perche": "La persona non segue il verbo: 跟他 va prima di 说话." }
    ] },
    { "q": "Dici che non hai telefonato a lui. Quale frase?", "opzioni": [
      { "t": "我没给他打电话。", "ok": true, "perche": "La negazione 没 sta prima della preposizione 给." },
      { "t": "我给他没打电话。", "ok": false, "perche": "La negazione non può comparire dopo la preposizione: va davanti a 给." }
    ] },
    { "q": "Dici «Per me il cinese è un po' difficile». Quale frase?", "opzioni": [
      { "t": "对我来说，中文有点难。", "ok": true, "perche": "对…来说 introduce il punto di vista di chi parla." },
      { "t": "跟我来说，中文有点难。", "ok": false, "perche": "跟 vuol dire «con» e non introduce un punto di vista." }
    ] },
    { "q": "Dici che lui è alto quanto te. Quale frase?", "opzioni": [
      { "t": "他跟我一样高。", "ok": true, "perche": "跟…一样 è la struttura di confronto «uguale a»." },
      { "t": "他对我一样高。", "ok": false, "perche": "对 non esprime uguaglianza: per «come» si usa 跟…一样." }
    ] }
  ],
  "dialogo": {
    "titolo": "Che cosa fai nel fine settimana?",
    "righe": [
      { "chi": "A", "t": "你周末做什么？", "tr": "Che cosa fai nel fine settimana?" },
      { "chi": "B", "t": "星期六我跟朋友去爬山，星期天要给妈妈打电话。", "tr": "Sabato vado in montagna con gli amici, domenica devo telefonare a mia madre." },
      { "chi": "A", "t": "你妈妈对你一定很好。", "tr": "Tua madre sarà sicuramente molto gentile con te." },
      { "chi": "B", "t": "对，她对我特别好。", "tr": "Sì, è gentilissima con me." },
      { "chi": "A", "t": "我也想跟你们一起去爬山，可以吗？", "tr": "Mi piacerebbe venire in montagna con voi, posso?" },
      { "chi": "B", "t": "当然可以，我给你发短信告诉你时间。", "tr": "Certo, ti mando un messaggio con l'orario." }
    ],
    "esercizi": [
      { "q": "Con chi va B in montagna?", "opzioni": [
        { "t": "Con gli amici.", "ok": true, "perche": "B dice 跟朋友去爬山: gli amici sono i compagni." },
        { "t": "Con la madre.", "ok": false, "perche": "La madre riceve una telefonata (给妈妈打电话), non va in montagna." },
        { "t": "Da solo.", "ok": false, "perche": "La frase indica un compagno, 朋友." }
      ] },
      { "q": "A vuole unirsi a loro. Quale frase?", "opzioni": [
        { "t": "我也想跟你们一起去。", "ok": true, "perche": "跟 + persona dice con chi A vuole andare." },
        { "t": "我也想给你们一起去。", "ok": false, "perche": "给 non introduce un compagno di viaggio." }
      ] },
      { "q": "B dice che manderà un messaggio. Quale frase?", "opzioni": [
        { "t": "我给你发短信。", "ok": true, "perche": "给 + destinatario prima di 发." },
        { "t": "我对你发短信。", "ok": false, "perche": "对 esprime un atteggiamento; per il destinatario di un messaggio serve 给." }
      ] }
    ]
  },
  "tranello": {
    "errore": "L'italiano mette le persone dopo il verbo, quindi si scrive 我买一本书妈妈, 我去一起跟朋友 o 他很好对我. Un secondo errore è tradurre «gentile con» con 跟 o 给 invece di 对.",
    "perche": "In italiano «a», «con» e «verso» seguono il verbo e il loro ruolo si capisce dalla preposizione; in cinese la preposizione apre un complemento che precede il verbo, e ogni parola ha un compito preciso: 给 il destinatario, 跟 il compagno, 对 l'atteggiamento.",
    "esci": "Prima di scrivere, individua la persona e chiediti che rapporto ha con l'azione: riceve qualcosa? Allora 给. Fa insieme a me? Allora 跟. È il bersaglio di un sentimento o di un gesto? Allora 对. Poi metti la coppia prima del verbo.",
    "esempi": [
      { "sbagliata": "我买一本书妈妈。", "giusta": "我给妈妈买一本书。" },
      { "sbagliata": "我去一起跟朋友。", "giusta": "我跟朋友一起去。" },
      { "sbagliata": "他很好对我。", "giusta": "他对我很好。" }
    ]
  },
  "curiosi": [
    { "titolo": "跟 e 和: quasi gemelli", "t": "Davanti a una persona 跟 e 和 si scambiano spesso: 我跟朋友去 e 我和朋友去 hanno lo stesso senso, con 跟 un po' più colloquiale. Per unire due nomi («io e lui») la scelta tipica è 和: 我和他. Con 一样 si usa 跟: 他跟我一样高." },
    { "titolo": "给 dopo il verbo", "t": "I verbi che trasferiscono qualcosa accettano 给 dopo il verbo: 送给她, 借给他, 卖给朋友, 还给老师. Si sente anche 打电话给你, ma la forma di base che si insegna è 给你打电话. In entrambi i casi la persona è il destinatario." },
    { "titolo": "对 che vuol dire anche «giusto»", "t": "对 è anche l'aggettivo «giusto» (你说得对) e fa parte di 对不起. Il significato di base è «essere di fronte a, rivolgersi a»: da qui vengono «giusto» (corrisponde al vero), «verso» e «riguardo a»." }
  ],
  "pragmatica": "Nel parlato quotidiano 给 è la parola più frequente di questo gruppo, perché compare in telefonate, messaggi e piccoli favori (给我打电话, 给你发短信). 跟 è quasi sempre accompagnato da 一起 quando l'azione è fatta in gruppo. 对 domina nelle espressioni di atteggiamento (对我很好, 对中文有兴趣) e nel punto di vista (对我来说): in una conversazione gentile è molto usato.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他对我说：“再见！”", "opzioni": [
      { "t": "Mi ha detto: «Arrivederci!»", "ok": true, "perche": "对 + persona + 说 vuol dire «dire a qualcuno»." },
      { "t": "Ha parlato con me al telefono.", "ok": false, "perche": "Non c'è telefono: 对…说 indica il destinatario delle parole." },
      { "t": "Mi ha regalato un libro.", "ok": false, "perche": "Il verbo è 说 (dire), non 送 (regalare)." }
    ] },
    { "k": "buco", "zh": "我＿朋友一起去。", "tr": "Ci vado insieme a un amico.", "opzioni": [
      { "t": "跟", "ok": true, "perche": "跟 + persona dice con chi si fa l'azione." },
      { "t": "给", "ok": false, "perche": "给 introduce un destinatario, non un compagno." },
      { "t": "对", "ok": false, "perche": "对 esprime un atteggiamento verso qualcuno." }
    ] },
    { "k": "buco", "zh": "他＿我很好。", "tr": "È molto gentile con me.", "opzioni": [
      { "t": "对", "ok": true, "perche": "L'essere gentile è un atteggiamento rivolto a me." },
      { "t": "给", "ok": false, "perche": "给 porta qualcosa a qualcuno: non esprime un atteggiamento." },
      { "t": "在", "ok": false, "perche": "在 indica dove, non il rapporto con la persona." }
    ] },
    { "k": "ordine", "t": "我想给妈妈打电话", "tr": "Voglio telefonare alla mamma." },
    { "k": "ordine", "t": "他对我很好", "tr": "È molto gentile con me." },
    { "k": "trasforma", "base": "我买了一本书。", "consegna": "Aggiungi con 给 il destinatario: il libro è per la mamma. Metti la persona prima del verbo.", "accetta": ["我给妈妈买了一本书。", "我给妈妈买了本书。"], "rifiutate": [
      { "t": "我买了一本书妈妈。", "perche": "La persona non può seguire il verbo senza una preposizione: 给妈妈 va prima di 买." }
    ], "perche": "给 + destinatario precede il verbo: 给妈妈买." },
    { "k": "trasforma", "base": "我和朋友去爬山。", "consegna": "Riscrivi con 跟 e aggiungi 一起: «Vado in montagna insieme agli amici».", "accetta": ["我跟朋友一起去爬山。", "我跟朋友一起爬山。"], "rifiutate": [
      { "t": "我一起跟朋友去爬山。", "perche": "一起 sta dopo 跟 + persona, subito prima del verbo." }
    ], "perche": "跟 + persona + 一起 + verbo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Stasera telefono a mio padre.»", "a": "我今天晚上给爸爸打电话。", "accetta": ["今天晚上我给爸爸打电话。", "我晚上给爸爸打电话。", "我今晚给爸爸打电话。", "今晚我给爸爸打电话。"], "perche": "Il tempo precede la preposizione, 给 + destinatario precede il verbo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Mi interessa la musica.»", "a": "我对音乐很有兴趣。", "accetta": ["我对音乐有兴趣。", "我对音乐很感兴趣。", "我对音乐有很大的兴趣。"], "perche": "L'interesse è un atteggiamento verso qualcosa: 对 + oggetto + 有兴趣." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你晚上做什么？" },
      { "chi": "B", "t": "我要＿妈妈打电话。", "buco": true }
    ], "opzioni": [
      { "t": "给", "ok": true, "perche": "La mamma è la destinataria della telefonata." },
      { "t": "对", "ok": false, "perche": "对 introduce un atteggiamento, non il destinatario di una telefonata." },
      { "t": "在", "ok": false, "perche": "在 indica il luogo e non può introdurre una persona." }
    ] }
  ],
  "capaci": [
    "Sai dire a chi va qualcosa con 给 e metterlo prima del verbo.",
    "Sai dire con chi fai qualcosa con 跟 (e 一起) e confrontare con 跟…一样.",
    "Sai esprimere un atteggiamento verso una persona o una cosa con 对, anche in 对…来说.",
    "Sai scegliere tra 给, 跟 e 对 in base al rapporto con la persona."
  ],
  "fonti": [
    "Tatoeba (cmn.tsv), frasi attestate con 跟我一样 (2 occorrenze) e 给…打电话, verificate nel corpus locale",
    "CC-CEDICT, voci 給/给, 跟, 對/对: significati («to», «for», «with», «towards»)"
  ]
};
