/* Lezione 54 · Come e perché: 怎么, 怎么样, 怎么了 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["zenme"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "这个字怎么写？", "tr": "Come si scrive questo carattere?" },
      { "t": "你的新工作怎么样？", "tr": "Com'è il tuo nuovo lavoro?" },
      { "t": "你怎么了？", "tr": "Che cos'hai?" },
      { "t": "你怎么不吃？", "tr": "Come mai non mangi?" }
    ],
    "domanda": "Tutte e quattro le domande contengono 怎么. Dove sta nella prima e nella quarta? E nella seconda, dove sta la parola e come cambia? Nella terza chi segue 怎么? Che cosa chiede ciascuna frase?",
    "risposta": "In **这个字怎么写** e **你怎么不吃** 怎么 sta **davanti al verbo**: nella prima chiede il modo («come»), nella quarta, con il verbo negato, chiede il motivo con sorpresa («come mai»). In **你的新工作怎么样** compare **怎么样** a fine frase e chiede com'è qualcosa. In **你怎么了** c'è **怎么了**, che chiede che cosa è successo."
  },
  "regola": {
    "enunciato": "**怎么** sta davanti a un verbo e chiede il **modo** («come si fa») oppure, con tono di sorpresa, il **motivo** («come mai»); **怎么样** sta a fine frase e chiede **com'è** una cosa o che ne pensi; **怎么了** è una domanda a sé e chiede **che cosa è successo**.",
    "schema": ["soggetto", "怎么", "verbo", "(oggetto)", "？"],
    "punti": [
      { "ok": true, "t": "**怎么 + verbo = come**: 你怎么去？ 这个词怎么说？ 怎么办？ Il verbo segue subito 怎么; l'oggetto, se c'è, sta davanti: 这个字怎么写." },
      { "ok": true, "t": "**…怎么样？ = com'è, che ne dici**: 今天天气怎么样？ chiede com'è il tempo; 我们去公园怎么样？ propone un'attività («che ne dici di andare al parco?»)." },
      { "ok": true, "t": "**怎么了 = che cosa è successo**: 你怎么了？ La domanda è già completa: non si aggiunge 吗." },
      { "ok": true, "t": "**怎么 + verbo negato, o + 还没, 这么 + aggettivo = come mai**: 你怎么不去？ 他怎么还没来？ 今天怎么这么冷？ Il tono è di sorpresa o di lieve rimprovero." },
      { "ok": true, "t": "**为什么** chiede il motivo in modo neutro e si usa anche quando si vuole solo una spiegazione: 你为什么学中文？ Con 怎么 la stessa frase cambierebbe senso (come studi cinese)." },
      { "ok": false, "t": "**Non si mette 怎么 dopo il verbo**: non si dice 你去怎么, ma 你怎么去. Né 吗 si aggiunge a una domanda con 怎么: la parola interrogativa basta già." }
    ]
  },
  "logica": [
    "In italiano «come» sta in testa alla frase («come ci vai?») oppure alla fine nella lingua parlata («ci vai come?»). In cinese una parola interrogativa non si sposta: occupa il posto della risposta. Se chiedi *come* si fa qualcosa, 怎么 sta nella posizione dell'avverbio di modo, cioè davanti al verbo: la risposta sarà «in treno», «a piedi», nello stesso posto. Per questo 怎么 non va mai dopo il verbo.",
    "Lo stesso 怎么 prima del verbo ha due letture. Con un verbo normale chiede il modo (你怎么去？ come ci vai?). Ma quando la frase dice una cosa inattesa, per esempio un verbo negato (你怎么不去？), il modo non ha senso e resta il motivo, con un colore di sorpresa: «come mai non vai?». 怎么样 e 怎么了 sono invece forme fisse: la prima valuta («com'è?»), la seconda chiede che cosa è accaduto a qualcuno o a qualcosa."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Forma", "Che cosa chiede", "Esempio"],
    "righe": [
      ["怎么 + verbo", "il modo: come", "这个词怎么说？"],
      ["怎么 + non / 还没 / 这么", "il motivo con sorpresa: come mai", "你怎么不吃？"],
      ["…怎么样？", "com'è, che ne dici", "你的新工作怎么样？"],
      ["怎么了？", "che cosa è successo", "你怎么了？"],
      ["怎么办？", "che cosa si fa", "手机丢了，怎么办？"],
      ["为什么 + frase", "il motivo, in modo neutro", "你为什么学中文？"]
    ]
  },
  "esempi": [
    { "gruppo": "怎么 + verbo: il modo", "items": [
      { "t": "你怎么去学校？", "tr": "Come vai a scuola?" },
      { "t": "这个词怎么说？", "tr": "Come si dice questa parola?" },
      { "t": "这个菜怎么做？", "tr": "Come si prepara questo piatto?" },
      { "t": "请问，去火车站怎么走？", "tr": "Scusi, come si arriva alla stazione?" }
    ] },
    { "gruppo": "怎么样: com'è, che ne dici", "items": [
      { "t": "你的新工作怎么样？", "tr": "Com'è il tuo nuovo lavoro?" },
      { "t": "你觉得这件衣服怎么样？", "tr": "Che ne pensi di questo vestito?" },
      { "t": "今天晚上我们去看电影怎么样？", "tr": "Che ne dici di andare al cinema stasera?", "nota": "Dopo una proposta, 怎么样 chiede il parere dell'altro." },
      { "t": "这家饭馆不怎么样。", "tr": "Questo ristorante non è un granché.", "nota": "不怎么样 è una valutazione cortese ma chiara." }
    ] },
    { "gruppo": "怎么了 e 怎么办", "items": [
      { "t": "你怎么了？", "tr": "Che cos'hai?" },
      { "t": "孩子怎么了？", "tr": "Che cos'ha il bambino?" },
      { "t": "我的手机不见了，怎么办？", "tr": "Non trovo più il telefono, che faccio?" }
    ] },
    { "gruppo": "怎么: come mai", "items": [
      { "t": "你怎么不吃？", "tr": "Come mai non mangi?" },
      { "t": "他怎么还没来？", "tr": "Come mai non è ancora arrivato?" },
      { "t": "你怎么来了？", "tr": "Come mai sei venuto?", "nota": "Con 了 il verbo parla di un fatto già successo: 怎么 chiede il motivo." },
      { "t": "今天怎么这么冷？", "tr": "Come mai oggi fa così freddo?" }
    ] }
  ],
  "contrasti": [
    { "q": "Chiedi com'è il film che l'amico ha visto. Quale frase?", "opzioni": [
      { "t": "这个电影怎么样？", "ok": true, "perche": "…怎么样 a fine frase chiede com'è una cosa." },
      { "t": "这个电影怎么？", "ok": false, "perche": "怎么 da solo a fine frase non forma una domanda completa: serve 怎么样." }
    ] },
    { "q": "Chiedi la strada: come si arriva alla stazione. Quale frase?", "opzioni": [
      { "t": "去火车站怎么走？", "ok": true, "perche": "怎么 sta davanti al verbo e chiede il modo." },
      { "t": "去火车站怎么样？", "ok": false, "perche": "Così chiedi com'è la stazione, non come arrivarci." }
    ] },
    { "q": "È lunedì e il tuo collega è ancora a casa: sei sorpreso. Quale frase?", "opzioni": [
      { "t": "你怎么不去上班？", "ok": true, "perche": "怎么 con il verbo negato chiede il motivo con sorpresa: «come mai non vai?»" },
      { "t": "你怎么去上班？", "ok": false, "perche": "Senza negazione chiede il modo: come vai al lavoro." }
    ] },
    { "q": "Un amico ha la faccia strana e vuoi sapere che cosa è successo. Quale frase?", "opzioni": [
      { "t": "你怎么了？", "ok": true, "perche": "怎么了 è già una domanda completa e chiede che cosa è successo." },
      { "t": "你怎么了吗？", "ok": false, "perche": "吗 non si aggiunge: la parola interrogativa fa già la domanda." }
    ] },
    { "q": "Proponi di andare al parco e chiedi l'opinione dell'altro. Quale frase?", "opzioni": [
      { "t": "我们去公园怎么样？", "ok": true, "perche": "…怎么样 dopo una proposta chiede «che ne dici?»." },
      { "t": "我们怎么去公园？", "ok": false, "perche": "Chiede in che modo andare al parco, non se l'altro è d'accordo." }
    ] },
    { "q": "Chiedi senza sorpresa, per conoscere la ragione, perché l'altro studia cinese. Quale frase?", "opzioni": [
      { "t": "你为什么学中文？", "ok": true, "perche": "为什么 chiede il motivo in modo neutro." },
      { "t": "你怎么学中文？", "ok": false, "perche": "怎么 senza negazione chiede il modo: come studi cinese." }
    ] },
    { "q": "Ti accorgi che oggi fa molto più freddo del previsto e lo dici con sorpresa. Quale frase?", "opzioni": [
      { "t": "今天怎么这么冷？", "ok": true, "perche": "怎么 + 这么 + aggettivo esprime sorpresa: «come mai così freddo?»" },
      { "t": "今天怎么样冷？", "ok": false, "perche": "怎么样 non si mette davanti a un aggettivo con questo senso: serve 怎么这么." }
    ] },
    { "q": "Un amico ti chiede del ristorante: non ti è piaciuto granché. Quale risposta?", "opzioni": [
      { "t": "不怎么样。", "ok": true, "perche": "不怎么样 vuol dire «non un granché»: valutazione negativa e cortese." },
      { "t": "怎么不好？", "ok": false, "perche": "È una domanda («come mai non è buono?»), non una risposta." }
    ] }
  ],
  "dialogo": {
    "titolo": "Un computer rotto",
    "righe": [
      { "chi": "A", "t": "你怎么了？看起来不太高兴。", "tr": "Che cos'hai? Non sembri molto contento." },
      { "chi": "B", "t": "我的电脑坏了，作业还没写完。怎么办？", "tr": "Il mio computer è rotto e non ho finito i compiti. Che faccio?" },
      { "chi": "A", "t": "你怎么不问问老师？", "tr": "Come mai non chiedi al maestro?" },
      { "chi": "B", "t": "老师今天不在。你的电脑怎么样？", "tr": "Oggi il maestro non c'è. E il tuo computer, funziona?" },
      { "chi": "A", "t": "很好。我们去我家用吧。", "tr": "Va benissimo. Andiamo a usarlo a casa mia." }
    ],
    "esercizi": [
      { "q": "A chiede 你怎么了？ Che cosa vuole sapere?", "opzioni": [
        { "t": "Che cosa è successo a B.", "ok": true, "perche": "怎么了 chiede che cosa è successo a qualcuno." },
        { "t": "In che modo B è andato.", "ok": false, "perche": "Il modo si chiede con 怎么 davanti a un verbo, non con 怎么了." },
        { "t": "Quando B arriva.", "ok": false, "perche": "Il tempo si chiede con 什么时候." }
      ] },
      { "q": "A dice 你怎么不问问老师？ Con quale tono?", "opzioni": [
        { "t": "Come mai non lo fai? Un suggerimento con sorpresa.", "ok": true, "perche": "怎么 + verbo negato chiede il motivo e lascia intendere che A si aspettava il contrario." },
        { "t": "Domanda neutra sul modo di chiedere.", "ok": false, "perche": "Il modo si chiederebbe senza negazione: 怎么问老师." },
        { "t": "Domanda sul parere di B.", "ok": false, "perche": "Il parere si chiede con 怎么样 a fine frase." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Si mette la parola interrogativa nel posto in cui starebbe in italiano: 你去怎么？ oppure 今天天气怎么？ Si aggiunge anche 吗 a 怎么了, come in 你怎么了吗？",
    "perche": "L'italiano può chiudere la frase con «come?» o spostare «come» in testa. In cinese la parola interrogativa occupa il posto della risposta: 怎么 prima del verbo, 怎么样 alla fine. E 怎么了 è già una domanda completa.",
    "esci": "Prima di scrivere chiediti: voglio il modo, la valutazione o il fatto accaduto? Modo: 怎么 prima del verbo. Valutazione: 怎么样 alla fine. Fatto accaduto: 怎么了, e mai 吗 dopo.",
    "esempi": [
      { "sbagliata": "你去怎么？", "giusta": "你怎么去？" },
      { "sbagliata": "今天天气怎么？", "giusta": "今天天气怎么样？" },
      { "sbagliata": "你怎么了吗？", "giusta": "你怎么了？" }
    ]
  },
  "curiosi": [
    { "titolo": "怎样, il fratello più formale", "t": "Accanto a 怎么样 esiste 怎样, con lo stesso senso di «come, com'è». Si incontra spesso nello scritto e nel parlato un po' ricercato (你觉得这件事怎样？). Nella conversazione di ogni giorno 怎么样 è la forma più usata." },
    { "titolo": "怎么回事 e 怎么办", "t": "Due espressioni fisse usate di continuo: 怎么回事？ chiede «che cosa sta succedendo, come mai?» davanti a una situazione strana; 怎么办？ è il classico «che si fa?» di fronte a un problema. Sono frasi complete e restano sole anche in una conversazione." },
    { "titolo": "Sorpresa e rimprovero", "t": "Un 怎么 usato con sorpresa può diventare un rimprovero a seconda del tono: 你怎么还没睡？ può essere una domanda affettuosa o un richiamo. In cinese il tono viene dall'intonazione e dal contesto, e anche per questo i parlanti usano 为什么 quando vogliono una domanda priva di sfumature." }
  ],
  "pragmatica": "Per chiedere il modo (come si dice, come si va, come si fa) usa 怎么 senza timore: è la forma di tutti i giorni. 怎么样 è il modo normale di chiedere un parere e di proporre un'attività. 怎么了 è la domanda che si fa a chi sembra turbato; nel parlato spesso si aggiunge un tono di cura. Usa 为什么 quando la domanda deve restare neutra, per esempio con un cliente o un professore.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "你怎么不去？", "opzioni": [
      { "t": "Come mai non vai?", "ok": true, "perche": "怎么 con il verbo negato chiede il motivo, con sorpresa." },
      { "t": "Come ci vai?", "ok": false, "perche": "Per il modo non c'è la negazione: sarebbe 你怎么去." },
      { "t": "Com'è andata?", "ok": false, "perche": "Per questo servirebbe 怎么样." }
    ] },
    { "k": "scegli", "q": "Quale forma chiede «com'è?» a fine frase?", "opzioni": [
      { "t": "怎么样", "ok": true, "perche": "…怎么样？ chiede come va, com'è." },
      { "t": "怎么了", "ok": false, "perche": "怎么了 chiede che cosa è successo." },
      { "t": "什么", "ok": false, "perche": "什么 vuol dire «che cosa»." }
    ] },
    { "k": "buco", "zh": "你＿了？", "tr": "Che cos'hai?", "opzioni": [
      { "t": "怎么", "ok": true, "perche": "怎么了 = che cosa è successo." },
      { "t": "什么", "ok": false, "perche": "什么了 non è una domanda del genere in questa frase." },
      { "t": "在", "ok": false, "perche": "在了 non forma una domanda." }
    ] },
    { "k": "buco", "zh": "今天天气＿？", "tr": "Com'è il tempo oggi?", "opzioni": [
      { "t": "怎么样", "ok": true, "perche": "…怎么样 a fine frase chiede com'è." },
      { "t": "怎么", "ok": false, "perche": "怎么 da solo a fine frase non completa la domanda." },
      { "t": "怎么了", "ok": false, "perche": "怎么了 chiede che cosa è successo a una persona o a una cosa." }
    ] },
    { "k": "ordine", "t": "这个字怎么写", "tr": "Come si scrive questo carattere?" },
    { "k": "ordine", "t": "你的新工作怎么样", "tr": "Com'è il tuo nuovo lavoro?" },
    { "k": "scrivi", "q": "Scrivi in cinese: «Come si dice questa parola?»", "a": "这个词怎么说？", "accetta": ["这个词怎么说", "这个词怎么说呢？"], "perche": "怎么 sta davanti al verbo 说 e chiede il modo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Che ne dici di andare al cinema stasera?»", "a": "今天晚上我们去看电影怎么样？", "accetta": ["我们今天晚上去看电影怎么样？", "今天晚上我们去看电影,怎么样？", "今天晚上我们去看电影怎么样"], "perche": "La proposta viene prima e 怎么样 chiude la frase." },
    { "k": "trasforma", "base": "你不去。", "consegna": "Trasforma in una domanda di sorpresa con 怎么: «Come mai non vai?»", "accetta": ["你怎么不去？", "你怎么不去"], "rifiutate": [
      { "t": "你不去怎么？", "perche": "怎么 non sta dopo il verbo: va prima, davanti a 不去." }
    ], "perche": "怎么 + verbo negato chiede il motivo con sorpresa." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "我的手机不见了。" },
      { "chi": "B", "t": "那＿办？", "buco": true }
    ], "opzioni": [
      { "t": "怎么", "ok": true, "perche": "怎么办 = che si fa: 怎么 davanti al verbo 办." },
      { "t": "什么", "ok": false, "perche": "什么办 non è una forma della lingua." },
      { "t": "为什么", "ok": false, "perche": "为什么办 non esiste: 为什么 si usa con una frase intera." }
    ] }
  ],
  "capaci": [
    "Sai chiedere come si fa qualcosa con 怎么 davanti al verbo.",
    "Sai chiedere com'è qualcosa e proporre un'attività con 怎么样.",
    "Sai chiedere che cosa è successo con 怎么了, senza 吗.",
    "Sai distinguere 怎么 (come, come mai) da 为什么 (perché)."
  ],
  "glosse": {
    "今天天气怎么样": "Com'è il tempo oggi?",
    "我们去公园怎么样": "Che ne dici di andare al parco?",
    "你怎么不去": "Come mai non vai?",
    "你为什么学中文": "Perché studi cinese?",
    "你觉得这件事怎样": "Che cosa ne pensi di questa faccenda?",
    "你怎么还没睡": "Come mai non hai ancora dormito?"
  },
  "fonti": [
    "LibreTexts, CHN101 Elementary Mandarin I, Lesson 7 Grammar: Asking why with zenme (libro di testo costruito su AllSet): 怎么 per il motivo con sorpresa, 怎么 + verbo negato, 怎么 + 不 + aggettivo (letto per intero)",
    "CC-CEDICT, voci 怎么, 怎么了, 怎么样, 怎么办, consultate nel dizionario locale",
    "Tatoeba (cmn.tsv, es. 你怎么了, 怎么写, 怎么办), verificate con grep nel corpus locale"
  ]
};
