/* Lezione 50 · Forse, deve, certamente: 可能, 应该, 一定 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["keneng-yinggai"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "他可能不来。", "tr": "Forse non viene." },
      { "t": "他应该到了。", "tr": "Dovrebbe essere già arrivato." },
      { "t": "他一定来。", "tr": "Verrà di sicuro." },
      { "t": "我得走了。", "tr": "Devo proprio andare." }
    ],
    "domanda": "Dove stanno 可能, 应该, 一定 e 得 rispetto al verbo? Il verbo cambia forma? E se li metti in ordine dal meno sicuro al più sicuro (le prime tre frasi parlano della stessa persona), quale ordine ottieni?",
    "risposta": "Tutti stanno **prima del verbo**, e il verbo non cambia mai forma. La sicurezza di chi parla cresce così: 可能 («forse»), 应该 («dovrebbe, è probabile»), 一定 («di sicuro»). 得 è diverso: non dice quanto è sicuro qualcosa, dice che chi parla **deve** fare l'azione. In italiano queste sfumature stanno nel verbo («verrà», «dovrebbe essere arrivato»); in cinese sono parole separate, davanti al verbo."
  },
  "regola": {
    "enunciato": "Per dire quanto sei sicuro di qualcosa si mette una parola davanti al verbo: **可能** (forse), **应该** (è probabile, dovrebbe), **一定** (di sicuro). Per dire che qualcosa è necessario o consigliabile: **应该** (dovrebbe, è giusto che), **得** e **要** (deve, è necessario). La negazione 不 si mette dopo 可能 e 一定, e prima di 应该.",
    "schema": ["chi", "可能 / 应该 / 一定 / 得", "(不)", "verbo"],
    "punti": [
      { "ok": true, "t": "**可能** = «forse, è possibile che»: 明天可能下雨. Sta anche all'inizio della frase (可能我记错了) e, come nome, in 有可能 + verbo («è possibile che»). Al futuro si può dire 可能会 + verbo senza cambiare il senso." },
      { "ok": true, "t": "**应该** ha due sensi: consiglio o dovere (你应该多喝水) e previsione (他应该到了). Il contesto distingue i due: con un verbo di azione futura è un consiglio, con 了 o con uno stato è quasi sempre una previsione." },
      { "ok": true, "t": "**一定** = «di sicuro»: 他一定知道. Con **一定要** diventa «devi assolutamente»: 你一定要小心. Con 一定 + 不 + verbo si è sicuri che non accade: 他一定不会忘." },
      { "ok": true, "t": "**得** (děi) e **要** = «devo, devi»: 我得走了, 明天我得早起, 你要小心. Sono i più usati quando si parla di un obbligo che viene da una situazione concreta." },
      { "ok": true, "t": "**Negazioni diverse**: 他可能不来 («forse non viene»), 他不可能来 («è impossibile che venga»), 他不一定来 («non è detto che venga»), 他一定不来 («di sicuro non viene»). Dopo 得 e 要, l'obbligo si nega con 不用 («non serve»): 你不用来." },
      { "ok": false, "t": "**Non si mettono dopo il verbo**: 他不来可能 e 你休息应该 non sono frasi cinesi. Nel parlato non si nega 得 con 不 (我不得走 non si dice per «non devo andare»; 不得 è un divieto dello scritto formale), e 不要 vuol dire «non farlo»." }
    ]
  },
  "logica": [
    "L'italiano mescola due cose nello stesso verbo: il tempo e la sicurezza («verrà», «dovrebbe venire», «deve essere arrivato»). Il cinese le tiene separate: il verbo resta com'è e una parola davanti dice come lo valuti. Il vantaggio è la facilità: non si coniuga niente; basta scegliere la parola giusta per la sicurezza che si ha.",
    "Pensa a una scala: **可能** (c'è una possibilità) → **应该** (è più probabile che non, o è giusto che) → **一定** (nessun dubbio). Quando entri nella negazione, il punto è dove cade 不: dopo la parola di sicurezza si nega l'azione (可能不来 = forse non viene), prima si nega la sicurezza stessa (不一定来 = non è sicuro che venga; 不可能来 = non c'è nessuna possibilità). Così cambia il senso senza cambiare le parole.",
    "Il «dovere» si divide in due: **应该** è il dovere «giusto» o consigliato (dovresti), **得** e **要** sono il dovere che viene dalle circostanze (devo andare perché è tardi). Per questo il contrario non è lo stesso: «non dovresti» è 不应该, «non serve» è 不用, «non farlo» è 别 o 不要."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Forse, è possibile", "可能 + verbo", "明天可能下雨。"],
      ["Forse non", "可能 + 不 + verbo", "他可能不来。"],
      ["È impossibile che", "不可能 + verbo", "他不可能来。"],
      ["Dovrebbe, è probabile", "应该 + verbo (+ 了)", "他应该到了。"],
      ["Dovresti, è giusto", "应该 + verbo", "你应该多喝水。"],
      ["Non dovresti", "不应该 + verbo", "你不应该这么晚睡觉。"],
      ["Di sicuro", "一定 + verbo", "他一定知道。"],
      ["Di sicuro non", "一定 + 不 + verbo", "他一定不会忘。"],
      ["Non è detto che", "不一定 + verbo", "他不一定来。"],
      ["Devo, è necessario", "得 / 要 + verbo", "我得走了。"],
      ["Non serve", "不用 + verbo", "你不用来。"]
    ]
  },
  "esempi": [
    { "gruppo": "Forse: 可能", "items": [
      { "t": "明天可能下雨。", "tr": "Domani forse piove." },
      { "t": "他可能在家。", "tr": "Forse è a casa." },
      { "t": "可能我记错了。", "tr": "Forse mi sono sbagliato (ho ricordato male).", "nota": "可能 può aprire la frase." },
      { "t": "他有可能不知道。", "tr": "È possibile che non lo sappia.", "nota": "有可能 = «c'è la possibilità che»." }
    ] },
    { "gruppo": "Dovrebbe: previsione e consiglio con 应该", "items": [
      { "t": "他应该到了。", "tr": "Dovrebbe essere già arrivato.", "nota": "Con 了 è una previsione su un fatto già avvenuto." },
      { "t": "应该不会下雨。", "tr": "Probabilmente non pioverà." },
      { "t": "你应该多喝水。", "tr": "Dovresti bere più acqua." },
      { "t": "你不应该这么晚睡觉。", "tr": "Non dovresti andare a dormire così tardi." }
    ] },
    { "gruppo": "Di sicuro: 一定", "items": [
      { "t": "他一定知道这件事。", "tr": "Di sicuro sa questa cosa." },
      { "t": "你一定要小心。", "tr": "Devi fare molta attenzione.", "nota": "一定要 = «devi assolutamente»." },
      { "t": "他一定不会忘。", "tr": "Di sicuro non dimenticherà." }
    ] },
    { "gruppo": "Devo: 得 e 要", "items": [
      { "t": "我得走了。", "tr": "Devo proprio andare." },
      { "t": "明天我得早起。", "tr": "Domani devo alzarmi presto." },
      { "t": "你不用来，我自己去。", "tr": "Non serve che tu venga, vado da solo." }
    ] },
    { "gruppo": "Stesse parole, senso diverso con 不", "items": [
      { "t": "他不一定来。", "tr": "Non è detto che venga.", "nota": "Si nega la sicurezza." },
      { "t": "他不可能来。", "tr": "È impossibile che venga.", "nota": "Si nega la possibilità." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Forse non viene»?", "opzioni": [
      { "t": "他可能不来。", "ok": true, "perche": "可能 + 不 + verbo: c'è la possibilità che non venga." },
      { "t": "他不可能来。", "ok": false, "perche": "Vuol dire «è impossibile che venga»: la possibilità è negata, non l'azione." },
      { "t": "他不来可能。", "ok": false, "perche": "可能 sta prima del verbo, mai dopo." }
    ] },
    { "q": "Qualcuno dice che Marco arriva in cinque minuti da Roma. Tu non ci credi affatto: «È impossibile che arrivi».", "opzioni": [
      { "t": "他不可能到。", "ok": true, "perche": "不可能 nega ogni possibilità: è l'espressione di «impossibile»." },
      { "t": "他可能不到。", "ok": false, "perche": "Vuol dire «forse non arriva», molto più debole." }
    ] },
    { "q": "Non sei sicuro che Anna venga: «Non è detto che venga».", "opzioni": [
      { "t": "她不一定来。", "ok": true, "perche": "不一定: non è sicuro. Può venire o non venire." },
      { "t": "她一定不来。", "ok": false, "perche": "Vuol dire «di sicuro non viene»: una certezza opposta." }
    ] },
    { "q": "Dai un consiglio a un amico stanco: «Dovresti riposare».", "opzioni": [
      { "t": "你应该休息。", "ok": true, "perche": "应该 + verbo esprime il consiglio." },
      { "t": "你休息应该。", "ok": false, "perche": "应该 va davanti al verbo, non dietro." }
    ] },
    { "q": "Vedi le scarpe di Luca all'ingresso: «Dovrebbe essere già a casa».", "opzioni": [
      { "t": "他应该到家了。", "ok": true, "perche": "应该 + 了 con un fatto compiuto dice che è probabile che sia già successo." },
      { "t": "他到家应该了。", "ok": false, "perche": "应该 non può seguire il verbo." }
    ] },
    { "q": "Il tuo amico parla troppo forte in biblioteca; lo rimproveri: «Non dovresti parlare così forte».", "opzioni": [
      { "t": "你不应该这么大声说话。", "ok": true, "perche": "不应该 = «non è giusto, non si fa»: è il rimprovero." },
      { "t": "你不用这么大声说话。", "ok": false, "perche": "不用 dice «non serve» e toglie l'obbligo: qui si vuole dire che è sbagliato." }
    ] },
    { "q": "Il tuo amico si offre di venire a prenderti, ma non c'è bisogno: «Non serve che tu venga».", "opzioni": [
      { "t": "你不用来。", "ok": true, "perche": "不用 nega la necessità: l'altro non è obbligato a venire." },
      { "t": "你不得来。", "ok": false, "perche": "不得 è una forma di divieto del linguaggio formale; qui non c'è nessun divieto." },
      { "t": "你不要来。", "ok": false, "perche": "不要 è un divieto, «non venire»: sarebbe un rifiuto, non un «non serve»." }
    ] },
    { "q": "Prometti con certezza: «Verrò di sicuro».", "opzioni": [
      { "t": "我一定来。", "ok": true, "perche": "一定 + verbo: certezza totale." },
      { "t": "我可能来。", "ok": false, "perche": "可能 dice «forse vengo»: è proprio il contrario di una promessa." },
      { "t": "我来一定。", "ok": false, "perche": "一定 va prima del verbo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Una gita al parco",
    "righe": [
      { "chi": "A", "t": "明天我们去公园玩，好吗？", "tr": "Domani andiamo al parco, ti va?" },
      { "chi": "B", "t": "明天可能下雨，你看了吗？", "tr": "Domani forse piove, hai guardato?" },
      { "chi": "A", "t": "看了，手机上说应该不会下雨。", "tr": "Sì, sul telefono dice che probabilmente non pioverà." },
      { "chi": "B", "t": "那好，我一定去。几点？", "tr": "Allora va bene, vengo di sicuro. A che ora?" },
      { "chi": "A", "t": "九点吧。你得早点起床。", "tr": "Alle nove. Devi alzarti presto." },
      { "chi": "B", "t": "没问题。我带吃的，你不用带。", "tr": "Nessun problema. Porto io da mangiare, tu non serve." },
      { "chi": "A", "t": "好。他也来吗？", "tr": "Bene. Viene anche lui?" },
      { "chi": "B", "t": "他不一定来，他可能要工作。", "tr": "Non è detto che venga, forse deve lavorare." }
    ],
    "esercizi": [
      { "q": "Che cosa dice A sul tempo di domani?", "opzioni": [
        { "t": "Che probabilmente non pioverà.", "ok": true, "perche": "应该不会下雨: 应该 dà una previsione, con 不会 il senso è «probabilmente non»." },
        { "t": "Che di sicuro non pioverà.", "ok": false, "perche": "La certezza si direbbe 一定不会下雨." },
        { "t": "Che forse pioverà.", "ok": false, "perche": "Questo è ciò che dice B (可能下雨), non A." }
      ] },
      { "q": "Che cosa vuol dire 你不用带?", "opzioni": [
        { "t": "Non serve che tu porti niente.", "ok": true, "perche": "不用 toglie la necessità: B si occupa del cibo." },
        { "t": "Non devi portare niente, è vietato.", "ok": false, "perche": "Il divieto si direbbe 别带 o 不要带: qui B è gentile e non vieta." },
        { "t": "Forse non porti niente.", "ok": false, "perche": "Il dubbio si direbbe con 可能: qui si parla di necessità." }
      ] },
      { "q": "Che cosa pensa B di 他?", "opzioni": [
        { "t": "Non sa se verrà.", "ok": true, "perche": "不一定 = non è detto: ci sono due possibilità e B non sa quale." },
        { "t": "È sicuro che non viene.", "ok": false, "perche": "Questa certezza negativa si direbbe 他一定不来." },
        { "t": "È sicuro che viene.", "ok": false, "perche": "Questa certezza positiva si direbbe 他一定来." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette «forse» e «dovrebbe» alla fine (他不来可能, 你休息应该), confonde 不一定 con 一定不 (non è detto / di sicuro no), 不可能 con 可能不 (impossibile / forse no) e nega il dovere con 不: 我不得走, mentre nel parlato si dice 我不用走.",
    "perche": "In italiano «forse» si sposta in molti punti della frase (forse non viene, non viene forse) e «non» sta davanti al verbo coniugato. In cinese invece le parole di sicurezza sono davanti al verbo, e il posto di 不 decide che cosa si nega: la sicurezza (不一定) o l'azione (一定不). Quanto al dovere, «non devo» può voler dire due cose diverse, «non serve» e «è vietato», e il cinese le ha in due parole: 不用 e 不要.",
    "esci": "Prima di tutto metti la parola di sicurezza (可能, 应该, 一定) subito davanti al verbo. Poi chiediti: voglio negare **quanto sono sicuro** o **l'azione**? Nel primo caso 不 va prima (不一定, 不可能), nel secondo dopo (一定不, 可能不). Per il dovere, scegli 不用 se vuoi dire «non serve» e 不应该 se vuoi dire «non è giusto».",
    "esempi": [
      { "sbagliata": "他不来可能。", "giusta": "他可能不来。" },
      { "sbagliata": "他一定不是来。", "giusta": "他一定不来。" },
      { "sbagliata": "你休息应该。", "giusta": "你应该休息。" }
    ]
  },
  "curiosi": [
    { "titolo": "不可能! come reazione", "t": "不可能 da solo è una reazione piena: «Impossibile!», «Non è possibile!». Si dice quando una notizia sembra troppo strana per essere vera. Allo stesso modo 真的吗？ chiede conferma, ma 不可能！ la rifiuta. Il nome 可能 vive anche in 有可能 («c'è la possibilità») e in 没有可能 («non c'è nessuna possibilità»)." },
    { "titolo": "应该: due sensi, una sola parola", "t": "Come il verbo italiano «dovere» (deve essere tardi / devi riposare), 应该 vale per un consiglio e per una previsione. Il contesto aiuta: 他应该到了 è una previsione (c'è 了); 你应该早点睡 è un consiglio (c'è un'azione futura). Per rendere evidente la previsione si può aggiungere 已经 (他应该已经到了)." },
    { "titolo": "得 si legge děi, non de", "t": "Il carattere 得 ha tre letture: de (dopo il verbo, 跑得快), dé (ottenere) e děi, «dover fare». Nel significato di dovere si pronuncia solo děi ed è tipico della lingua parlata. Nello scritto e nel registro formale di solito si preferiscono 必须 o 需要; 得 resta nel parlato, nei messaggi e nei dialoghi." },
    { "titolo": "Il futuro con 会", "t": "Con le parole di sicurezza si può mettere 会 davanti al verbo quando si parla del futuro: 明天可能会下雨, 他一定会来. Il senso non cambia; 会 serve a dire «accadrà». Al negativo la forma è 不会: 他一定不会忘, 应该不会下雨." }
  ],
  "pragmatica": "Con 可能 ci si protegge: è il modo cortese per non impegnarsi (可能不行, «forse non va»). 应该 dà un consiglio con un tono morbido; detto a una persona anziana o a un superiore può suonare come una lezione, e lo si addolcisce con 我觉得你应该… («penso che dovresti…»). 一定 e 一定要 sono forti: sono promesse e raccomandazioni insistenti, e vanno bene tra amici e in famiglia, meno nelle richieste formali. 得 si dice di sé («devo andare») e crea un tono diretto e franco.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他不一定来。", "opzioni": [
      { "t": "Non è detto che venga.", "ok": true, "perche": "不一定 nega la sicurezza: potrebbe venire come no." },
      { "t": "Di sicuro non viene.", "ok": false, "perche": "Per questo si direbbe 他一定不来." },
      { "t": "Di sicuro viene.", "ok": false, "perche": "Per questo si direbbe 他一定来." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他不可能来。", "opzioni": [
      { "t": "È impossibile che venga.", "ok": true, "perche": "不可能 = non c'è nessuna possibilità." },
      { "t": "Forse non viene.", "ok": false, "perche": "Per questo si direbbe 他可能不来." },
      { "t": "Non è detto che venga.", "ok": false, "perche": "Per questo si direbbe 他不一定来." }
    ] },
    { "k": "buco", "zh": "你感冒了，＿多喝水。", "tr": "Hai il raffreddore, dovresti bere di più.", "opzioni": [
      { "t": "应该", "ok": true, "perche": "应该 + verbo introduce il consiglio." },
      { "t": "吗", "ok": false, "perche": "吗 chiude una domanda e non sta davanti al verbo." },
      { "t": "着", "ok": false, "perche": "着 segue il verbo e non dà nessun consiglio." }
    ] },
    { "k": "buco", "zh": "太晚了，我＿回家了。", "tr": "È tardi, devo tornare a casa.", "opzioni": [
      { "t": "得", "ok": true, "perche": "得 (děi) + verbo: il dovere che viene dalle circostanze." },
      { "t": "吗", "ok": false, "perche": "吗 serve per le domande." },
      { "t": "着", "ok": false, "perche": "着 segue il verbo e non esprime dovere." }
    ] },
    { "k": "ordine", "t": "我们明天可能去北京", "tr": "Domani forse andiamo a Pechino.", "alt": ["明天我们可能去北京"] },
    { "k": "ordine", "t": "你不应该这么晚睡觉", "tr": "Non dovresti andare a dormire così tardi." },
    { "k": "trasforma", "base": "他来。", "consegna": "Dì che forse non viene.", "accetta": ["他可能不来。", "可能他不来。"], "rifiutate": [
      { "t": "他不可能来。", "perche": "Vuol dire che è impossibile che venga." }
    ], "perche": "可能 prima del verbo e 不 dopo 可能: la possibilità c'è, ma è che non venga." },
    { "k": "trasforma", "base": "他可能来。", "consegna": "Dì che sei sicuro che non viene (usa 一定).", "accetta": ["他一定不来。", "他一定不会来。"], "rifiutate": [
      { "t": "他不一定来。", "perche": "Vuol dire «non è detto che venga»: manca la certezza." }
    ], "perche": "一定 + 不 + verbo: certezza che l'azione non avviene." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Domani devo alzarmi presto.»", "a": "明天我得早起。", "accetta": ["我明天得早起。", "明天我得早点起床。", "我明天得早点起床。", "明天我要早起。"], "perche": "得 (o 要) prima del verbo dice il dovere che viene dalle circostanze." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Dovrebbe essere già arrivato.»", "a": "他应该已经到了。", "accetta": ["他应该到了。"], "perche": "应该 + verbo + 了 è la previsione su un fatto che dovrebbe essere compiuto." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你明天来吗？" },
      { "chi": "B", "t": "我＿来，你放心。", "buco": true }
    ], "opzioni": [
      { "t": "一定", "ok": true, "perche": "B promette con certezza: 一定 + verbo." },
      { "t": "不一定", "ok": false, "perche": "Vuol dire «non è detto»: contraddice 你放心 (stai tranquillo)." },
      { "t": "不可能", "ok": false, "perche": "Vuol dire «è impossibile»: è un rifiuto." }
    ] }
  ],
  "capaci": [
    "Sai dire quanto sei sicuro di qualcosa con 可能, 应该 e 一定, sempre prima del verbo.",
    "Sai distinguere 可能不, 不可能, 不一定 e 一定不 dal punto in cui cade 不.",
    "Sai dare un consiglio con 应该 e dire un dovere concreto con 得 e 要.",
    "Sai dire «non serve» con 不用 e «non si fa» con 不应该 o 别."
  ],
  "glosse": {
    "他一定知道": "Di sicuro lo sa",
    "你应该早点睡": "Dovresti andare a letto presto",
    "他应该已经到了": "Dovrebbe essere già arrivato",
    "明天可能会下雨": "Domani potrebbe piovere",
    "他一定会来": "Sicuramente verrà"
  },
  "fonti": [
    "CC-CEDICT (cedict_ts.u8), voci 可能, 一定, 应该 e 得 (děi): significati di «forse», «di sicuro», «dovrebbe» e «dovere», consultate nel dizionario locale",
    "Tatoeba (cmn.tsv, es. 他可能迷路了, 现在他应该已经到了), verificate con grep nel corpus locale"
  ]
};
