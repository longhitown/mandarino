/* Lezione 46 · Scegliere: 去不去 e 还是 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["zhengfan-haishi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "你去不去？", "tr": "Vai o non vai?" },
      { "t": "你有没有时间？", "tr": "Hai tempo?" },
      { "t": "你喝茶还是咖啡？", "tr": "Bevi tè o caffè?" },
      { "t": "茶或者咖啡都可以。", "tr": "Tè o caffè, per me va bene tutto." }
    ],
    "domanda": "In nessuna delle prime tre domande compare 吗. Come si costruisce la domanda nella prima e nella seconda? E nella terza e nella quarta, che cosa significa «o»: le due parole sono la stessa o sono diverse?",
    "risposta": "Nella prima il verbo è ripetuto con **不** in mezzo (去不去), nella seconda con **没** (有没有): la domanda sta nella forma stessa, quindi **吗 non serve**. Nella terza «o» è **还是**, perché c'è una domanda e chi ascolta deve scegliere. Nella quarta «o» è **或者**, perché la frase è affermativa e non chiede niente: elenca due possibilità accettabili."
  },
  "regola": {
    "enunciato": "In cinese una domanda senza 吗 si fa in due modi. **V不V** (去不去) chiede «fare o non fare», sì o no, e al posto di 吗 ha la forma ripetuta. **A 还是 B** chiede di scegliere tra due possibilità. Nelle frasi affermative «o» si dice invece **或者**.",
    "schema": ["soggetto", "V + 不 + V", "(oggetto)", "A + 还是 + B"],
    "punti": [
      { "ok": true, "t": "**V不V**: ripeti il verbo con 不 in mezzo: 你去不去？ 你们来不来？ 你想不想喝水？ Funziona anche con gli aggettivi: 这个贵不贵？ 好不好？ L'oggetto sta alla fine: 你喝不喝茶？" },
      { "ok": true, "t": "**有 e 是**: con 有 si usa 没: 你有没有时间？ (mai 有不有). Con 是 si dice 是不是: 你是不是中国人？ La risposta ripete il verbo: 有 o 没有; 是 o 不是." },
      { "ok": true, "t": "**Verbi di due sillabe**: di solito si ripete solo la prima sillaba, 喜不喜欢, 高不高兴, 好不好吃. La ripetizione dell'intera parola (喜欢不喜欢) è possibile, ma più rara." },
      { "ok": true, "t": "**Passato**: per un fatto avvenuto si usa 没 e 了: 你去没去？ 你吃饭了没有？ Non si dice 你昨天去不去, che chiede una decisione, non un fatto." },
      { "ok": true, "t": "**还是** collega due possibilità in una domanda: 你喝茶还是咖啡？ 你今天去还是明天去？ 他是老师还是学生？ Chi risponde sceglie una delle due: 我喝茶." },
      { "ok": true, "t": "**或者** serve nelle frasi affermative e dice che le possibilità sono accettabili tutte: 你可以今天或者明天来。 茶或者咖啡都可以。" },
      { "ok": true, "t": "**Domande indirette**: dopo «non so», «voglio sapere» si usa ancora 还是: 我不知道他喝茶还是咖啡。 La frase contiene una scelta che aspetta una risposta." },
      { "ok": false, "t": "**Niente 吗 in queste domande**: 你去不去吗？ e 你喝茶还是咖啡吗？ non si dicono. Né 或者 nella domanda (你喝茶或者咖啡？), né 有不有." }
    ]
  },
  "logica": [
    "In italiano la domanda si riconosce dal tono, e «o» è una parola sola: «vieni o non vieni?», «tè o caffè?», «tè o caffè, per me è uguale». Il cinese ha una scelta in più: la forma della frase dice già che è una domanda, perciò 吗, che serve a trasformare un'affermazione in domanda, non serve più. 你去不去 contiene i due esiti («vai / non vai») e chi ascolta ne sceglie uno. Per questo la risposta più naturale è il verbo, non «sì» o «no»: 去, 不去.",
    "Anche «o» viene diviso in due. **还是** appartiene alla domanda: gli esiti sono esclusivi e chi parla aspetta di sapere quale. **或者** appartiene all'affermazione: le possibilità restano aperte, anche tutte e due, e nessuno deve scegliere subito. La stessa distinzione vale in italiano tra «Vuoi tè o caffè?» e «Va bene tè o caffè»: cambia la funzione, non la parola. Il cinese però la scrive con due parole diverse.",
    "Il test più semplice: la frase finisce con un punto interrogativo, oppure è una domanda nascosta dopo «non so se»? Allora 还是. Se è una dichiarazione o una proposta, 或者."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa chiedi", "Forma", "Esempio", "Risposta"],
    "righe": [
      ["Sì o no, in modo neutro", "frase + 吗", "你去吗？", "去 / 不去"],
      ["Fare o non fare", "V不V", "你去不去？", "去 / 不去"],
      ["Avere o non avere", "有没有", "你有没有时间？", "有 / 没有"],
      ["Essere o non essere", "是不是", "你是不是中国人？", "是 / 不是"],
      ["Un fatto passato", "V没V, 了没有", "你吃饭了没有？", "吃了 / 没吃"],
      ["Scegliere tra due", "A还是B", "你喝茶还是咖啡？", "喝茶 / 喝咖啡"],
      ["«O» in affermazione", "A或者B", "茶或者咖啡都可以。", "nessuna risposta"]
    ]
  },
  "esempi": [
    { "gruppo": "V不V con i verbi e con gli aggettivi", "items": [
      { "t": "你们来不来？", "tr": "Venite o no?" },
      { "t": "你想不想喝水？", "tr": "Vuoi bere dell'acqua?", "nota": "Il modale 想 si ripete: 想不想 + verbo." },
      { "t": "这个贵不贵？", "tr": "Questo è caro?" },
      { "t": "这个菜好不好吃？", "tr": "Questo piatto è buono?", "nota": "好吃 ha due sillabe: si ripete la prima." }
    ] },
    { "gruppo": "有没有, 是不是 e fatti passati", "items": [
      { "t": "你有没有时间？", "tr": "Hai tempo?" },
      { "t": "你是不是累了？", "tr": "Sei stanco, vero?", "nota": "Con 是不是 chi parla si aspetta spesso di avere ragione." },
      { "t": "你吃饭了没有？", "tr": "Hai mangiato?" }
    ] },
    { "gruppo": "还是: scegliere tra due", "items": [
      { "t": "你坐火车还是坐飞机？", "tr": "Prendi il treno o l'aereo?" },
      { "t": "你今天去还是明天去？", "tr": "Vai oggi o domani?" },
      { "t": "他是老师还是学生？", "tr": "È un insegnante o uno studente?" },
      { "t": "你要大的还是小的？", "tr": "Lo vuoi grande o piccolo?" }
    ] },
    { "gruppo": "Domanda indiretta e affermazioni: 还是 e 或者", "items": [
      { "t": "我不知道他去还是不去。", "tr": "Non so se va o non va." },
      { "t": "茶或者咖啡都可以。", "tr": "Tè o caffè, per me va bene tutto." },
      { "t": "你可以今天或者明天来。", "tr": "Puoi venire oggi oppure domani." }
    ] },
    { "gruppo": "Proporre e chiedere accordo", "items": [
      { "t": "我们明天去，好不好？", "tr": "Andiamo domani, ti va?", "nota": "好不好 alla fine chiede il consenso." }
    ] }
  ],
  "contrasti": [
    { "q": "Chiedi a un amico: «Vai o non vai?»", "opzioni": [
      { "t": "你去不去？", "ok": true, "perche": "La forma ripetuta contiene già la domanda: nessun 吗." },
      { "t": "你去不去吗？", "ok": false, "perche": "吗 serve a fare una domanda da un'affermazione; qui la domanda c'è già, e due segni insieme non si usano." }
    ] },
    { "q": "Chiedi: «Hai tempo?», con la forma ripetuta.", "opzioni": [
      { "t": "你有没有时间？", "ok": true, "perche": "Con 有 la forma ripetuta usa 没, come nella negazione." },
      { "t": "你有不有时间？", "ok": false, "perche": "有 si nega con 没, mai con 不: la forma ripetuta lo segue." }
    ] },
    { "q": "Al bar chiedi a un amico che cosa prende: tè o caffè.", "opzioni": [
      { "t": "你喝茶还是咖啡？", "ok": true, "perche": "还是 collega le due scelte in una domanda e chiede di sceglierne una." },
      { "t": "你喝茶或者咖啡？", "ok": false, "perche": "或者 appartiene alle affermazioni; nella domanda si usa 还是." }
    ] },
    { "q": "Fai una proposta, non una domanda: «Puoi venire oggi oppure domani».", "opzioni": [
      { "t": "你可以今天或者明天来。", "ok": true, "perche": "In un'affermazione le possibilità restano aperte: 或者." },
      { "t": "你可以今天还是明天来。", "ok": false, "perche": "还是 trasformerebbe la frase in una domanda a cui si deve rispondere: «oggi o domani?»." }
    ] },
    { "q": "Dici: «Non so se lui beve tè o caffè».", "opzioni": [
      { "t": "我不知道他喝茶还是咖啡。", "ok": true, "perche": "Dopo «non so» la scelta aspetta ancora una risposta: serve 还是." },
      { "t": "我不知道他喝茶或者咖啡。", "ok": false, "perche": "或者 elenca possibilità tutte accettabili; qui una sola è vera e chi parla non sa quale." }
    ] },
    { "q": "A chiede 你喝茶还是咖啡？ Quale risposta è naturale?", "opzioni": [
      { "t": "我喝咖啡。", "ok": true, "perche": "La risposta sceglie una delle due possibilità." },
      { "t": "是的，我喝。", "ok": false, "perche": "«Sì» non ha senso: la domanda non è sì/no, ma una scelta tra due cose." }
    ] },
    { "q": "Chiedi: «Questo piatto è buono?», ripetendo la prima sillaba.", "opzioni": [
      { "t": "这个菜好不好吃？", "ok": true, "perche": "Nelle parole di due sillabe si ripete di solito la prima: 好不好吃." },
      { "t": "这个菜好吃不吃？", "ok": false, "perche": "不 va dopo la prima sillaba ripetuta (好不好吃) o dopo la parola intera (好吃不好吃): 好吃不吃 sposta la ripetizione sulla seconda sillaba." }
    ] },
    { "q": "Chiedi a un amico se ieri è andato alla festa (è un fatto già avvenuto).", "opzioni": [
      { "t": "你昨天去没去？", "ok": true, "perche": "Per un fatto passato si usa 没, non 不." },
      { "t": "你昨天去不去？", "ok": false, "perche": "不 chiede una decisione presente o futura; ieri è passato e non si decide più." }
    ] }
  ],
  "dialogo": {
    "titolo": "Che cosa facciamo sabato?",
    "righe": [
      { "chi": "A", "t": "你周末有没有时间？", "tr": "Nel weekend hai tempo?" },
      { "chi": "B", "t": "有。我们去看电影还是去公园？", "tr": "Sì. Andiamo al cinema o al parco?" },
      { "chi": "A", "t": "我想看电影。你今天去还是明天去？", "tr": "Vorrei il cinema. Vai oggi o domani?" },
      { "chi": "B", "t": "明天吧，今天我有点累。你累不累？", "tr": "Domani, oggi sono un po' stanco. E tu, sei stanco?" },
      { "chi": "A", "t": "我不累。那我们明天去，好不好？", "tr": "Io no. Allora andiamo domani, ti va?" },
      { "chi": "B", "t": "好。茶或者咖啡，你想喝什么？", "tr": "Va bene. Tè o caffè, che cosa vuoi bere?" }
    ],
    "esercizi": [
      { "q": "Perché A chiede 有没有时间 e non 有不有时间?", "opzioni": [
        { "t": "Perché 有 si nega con 没, e la forma ripetuta lo segue.", "ok": true, "perche": "有没有 è la forma ripetuta di 有." },
        { "t": "Perché 时间 è sempre al passato.", "ok": false, "perche": "时间 non ha un tempo verbale: qui si parla del weekend." },
        { "t": "Perché A vuole una risposta con 吗.", "ok": false, "perche": "La forma ripetuta esclude 吗." }
      ] },
      { "q": "B dice 去看电影还是去公园. Che cosa chiede?", "opzioni": [
        { "t": "Di scegliere tra due attività.", "ok": true, "perche": "还是 in una domanda offre due possibilità." },
        { "t": "Se A vuole andare al cinema sì o no.", "ok": false, "perche": "Sarebbe 你想不想去看电影, una domanda sì/no." },
        { "t": "Entrambe le cose, una dopo l'altra.", "ok": false, "perche": "还是 chiede di sceglierne una sola." }
      ] },
      { "q": "Che cosa chiede A con 好不好 alla fine?", "opzioni": [
        { "t": "Il consenso di B alla proposta di andare domani.", "ok": true, "perche": "好不好 alla fine di una proposta chiede se va bene." },
        { "t": "Quale film vedere.", "ok": false, "perche": "Per scegliere un film servirebbe 什么 o 还是." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano aggiunge 吗 per riflesso (你去不去吗？, 你是不是学生吗？), traduce «o» sempre con 或者 (你喝茶或者咖啡？) e, con 有, dice 有不有.",
    "perche": "In italiano la domanda si riconosce da un solo segno, il tono, e «o» è sempre la stessa parola. In cinese la domanda sì/no ha tre forme (吗, V不V, 还是 per la scelta) e non si sommano; inoltre «o» cambia secondo la funzione, domanda o affermazione.",
    "esci": "Scegli una sola forma di domanda per frase. Poi controlla «o»: nella domanda 还是, nell'affermazione 或者. Con 有 usa sempre 没: 有没有.",
    "esempi": [
      { "sbagliata": "你去不去吗？", "giusta": "你去不去？" },
      { "sbagliata": "你有不有时间？", "giusta": "你有没有时间？" },
      { "sbagliata": "你喝茶或者咖啡？", "giusta": "你喝茶还是咖啡？" },
      { "sbagliata": "你是不是中国人吗？", "giusta": "你是不是中国人？" }
    ]
  },
  "curiosi": [
    { "titolo": "还是 vuol dire anche «ancora» e «meglio»", "t": "La stessa parola 还是 è anche un avverbio: 他还是很忙 («è ancora molto occupato») e 我们还是坐地铁吧 («meglio andare in metropolitana»). Il dizionario CC-CEDICT registra tutti e tre i valori: «o», «ancora, come prima» e «sarebbe meglio». Il contesto decide: tra due possibilità in una domanda è «o»; davanti a un verbo in un'affermazione è «ancora» o «meglio»." },
    { "titolo": "好不好, 行不行, 对不对: la domanda di conferma", "t": "La forma V不V chiude spesso una proposta e chiede il consenso: 我们明天去，好不好？ Allo stesso modo 对不对？ («giusto?») e 行不行？ («può andare?»). In questi casi la domanda ha un tono più morbido di un semplice 吗, perché lascia a chi ascolta la possibilità di dire di no." },
    { "titolo": "Particelle in fondo: 啊 e 呢", "t": "La forma ripetuta ammette particelle finali che dànno il tono, ma non 吗: 你去不去啊？ è insistente o affettuosa, 你去不去呢？ chiede e aspetta. Questo conferma che 吗 e la forma ripetuta non si sommano: la domanda è già fatta." }
  ],
  "pragmatica": "V不V è colloquiale e diretta: è la forma di tutti i giorni tra amici, in famiglia, al lavoro. 还是 è neutra e va bene dappertutto, anche nelle domande formali. Per una proposta cortese chiudi con 好不好 o 可以吗. Quando rispondi, ripeti il verbo (去, 不去, 有, 没有) o scegli una delle due possibilità (我喝茶): evita la risposta «sì/no» che non rispetta la forma della domanda. In una frase che non è una domanda, come un invito aperto, usa 或者.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "你去不去？", "opzioni": [
      { "t": "Vai o non vai?", "ok": true, "perche": "V不V è la domanda sì/no con la forma ripetuta." },
      { "t": "Non vai?", "ok": false, "perche": "Non è una negazione retorica: si chiede ancora «vai o no»." },
      { "t": "Non vado.", "ok": false, "perche": "Per dire «non vado» si direbbe 我不去." }
    ] },
    { "k": "scegli", "q": "Quale frase è una proposta, non una domanda?", "opzioni": [
      { "t": "你可以今天或者明天来。", "ok": true, "perche": "或者 appartiene alle affermazioni." },
      { "t": "你今天来还是明天来？", "ok": false, "perche": "还是 con il punto interrogativo è una domanda." },
      { "t": "你来不来？", "ok": false, "perche": "V不V è sempre una domanda." }
    ] },
    { "k": "buco", "zh": "你喝茶＿咖啡？", "tr": "Bevi tè o caffè?", "opzioni": [
      { "t": "还是", "ok": true, "perche": "还是 collega due scelte in una domanda." },
      { "t": "或者", "ok": false, "perche": "或者 serve nelle affermazioni." },
      { "t": "和", "ok": false, "perche": "和 vuol dire «e»: tè e caffè, non una scelta." }
    ] },
    { "k": "buco", "zh": "你有＿有时间？", "tr": "Hai tempo?", "opzioni": [
      { "t": "没", "ok": true, "perche": "有 si nega con 没, quindi la forma è 有没有." },
      { "t": "不", "ok": false, "perche": "不有 non esiste: 有 non si nega con 不." },
      { "t": "了", "ok": false, "perche": "了 non fa parte della forma ripetuta." }
    ] },
    { "k": "ordine", "t": "你喝茶还是咖啡", "tr": "Bevi tè o caffè?" },
    { "k": "ordine", "t": "你有没有时间", "tr": "Hai tempo?" },
    { "k": "trasforma", "base": "你去。", "consegna": "Trasforma l'affermazione in una domanda con la forma ripetuta (senza 吗).", "accetta": ["你去不去？", "你去不去"], "rifiutate": [
      { "t": "你去不去吗？", "perche": "吗 non si aggiunge alla forma ripetuta." }
    ], "perche": "V不V: il verbo si ripete con 不 in mezzo, e la domanda è fatta." },
    { "k": "trasforma", "base": "你喝茶。你喝咖啡。", "consegna": "Fai una sola domanda per chiedere quale delle due bevande vuole.", "accetta": ["你喝茶还是咖啡？", "你喝茶还是喝咖啡？", "你是喝茶还是咖啡？", "你是喝茶还是喝咖啡？"], "rifiutate": [
      { "t": "你喝茶或者咖啡？", "perche": "Nelle domande «o» è 还是; 或者 sta nelle affermazioni." }
    ], "perche": "还是 unisce due possibilità in una sola domanda: bevi questo o quello." },
    { "k": "scrivi", "q": "Scrivi in cinese, con la forma ripetuta: «Hai tempo?»", "a": "你有没有时间？", "accetta": ["你有没有时间"], "perche": "有 si nega con 没, e la forma ripetuta lo segue: 有没有." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Prendi il treno o l'aereo?»", "a": "你坐火车还是坐飞机？", "accetta": ["你坐火车还是飞机？", "你是坐火车还是坐飞机？", "你是坐火车还是飞机？"], "perche": "还是 collega le due possibilità in una domanda." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你想不想喝水？" },
      { "chi": "B", "t": "＿，谢谢。", "buco": true }
    ], "opzioni": [
      { "t": "想", "ok": true, "perche": "La risposta alla forma ripetuta ripete il verbo: 想 o 不想." },
      { "t": "还是", "ok": false, "perche": "还是 introduce una scelta tra due cose, non risponde." },
      { "t": "吗", "ok": false, "perche": "吗 si usa per fare una domanda, non per rispondere." }
    ] },
    { "k": "scegli", "q": "Quale di queste frasi è scorretta?", "opzioni": [
      { "t": "你是不是中国人吗？", "ok": true, "perche": "La forma ripetuta e 吗 non stanno insieme." },
      { "t": "你有没有时间？", "ok": false, "perche": "È la forma ripetuta di 有: corretta." },
      { "t": "你坐火车还是坐飞机？", "ok": false, "perche": "È la domanda di scelta: corretta." }
    ] }
  ],
  "capaci": [
    "Sai fare domande sì/no con la forma ripetuta (去不去, 有没有, 是不是) senza aggiungere 吗.",
    "Sai chiedere di scegliere tra due possibilità con 还是 e rispondere scegliendone una.",
    "Sai distinguere 还是 (domande e domande indirette) da 或者 (affermazioni).",
    "Sai chiudere una proposta con 好不好 e riconoscere gli errori più comuni (吗 in più, 有不有)."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Affirmative-negative question»: V不V, 有没有 (la negazione di 有 è 没), 不 dopo la prima sillaba (喜不喜欢), oggetto tra V e 不 V",
    "CC-CEDICT (cedict_ts.u8), voci 还是, 或者, 一下, consultate in locale",
    "Tatoeba (cmn.tsv, consultato in locale): frasi con 还是 (你乘飞机还是乘火车去), 是不是, 有没有, 去不去, 或者, usate per controllare l'uso"
  ]
};
