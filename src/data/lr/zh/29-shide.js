/* Lezione 29 · Quando, dove, come: 是…的 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["shide"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我昨天到了。", "tr": "Sono arrivato ieri (ed eccomi)." },
      { "t": "我是昨天到的。", "tr": "Sono arrivato ieri (e non un altro giorno)." },
      { "t": "你是怎么来的？", "tr": "Come sei venuto?" },
      { "t": "我是坐火车来的。", "tr": "Sono venuto in treno." }
    ],
    "domanda": "Confronta la prima e la seconda frase: parlano della stessa cosa, ma una ha 了 e l'altra ha 是 e 的. Che cosa c'è tra 是 e il verbo nelle frasi con 是…的? E secondo te, qual è l'informazione importante in ciascuna delle due frasi?",
    "risposta": "Nella prima frase la **notizia** è che sono arrivato: 了 annuncia un fatto. Nella seconda l'arrivo è già noto a tutti e l'informazione importante è **quando**: 昨天 sta tra 是 e il verbo, e 的 chiude la frase. Nelle frasi 3 e 4 tra 是 e il verbo c'è «come» (怎么, 坐火车). Quindi 是…的 non annuncia un fatto: **prende un fatto già noto e ne mette in luce un dettaglio** (quando, dove, come, con chi)."
  },
  "regola": {
    "enunciato": "Quando si sa già che un fatto è avvenuto e interessa un suo **dettaglio** (il momento, il luogo, il modo, la compagnia, l'autore), si dice: chi + **是** + dettaglio + verbo + **的**. Il dettaglio sta subito dopo 是 e prima del verbo; la frase non porta 了.",
    "schema": ["chi", "是", "quando · dove · come · con chi", "verbo", "的"],
    "punti": [
      { "ok": true, "t": "**Il fatto è già noto** a chi parla e a chi ascolta; la frase dice un particolare in più. Per questo è la forma ideale per le domande: 你是什么时候来的？ 你是怎么来的？ 你是在哪儿学的中文？" },
      { "ok": true, "t": "**Il dettaglio può essere di vari tipi**: tempo (昨天), luogo (在北京), modo (坐火车, 用手机), compagnia (跟朋友一起), anche l'autore: 这个菜是我妈妈做的 (è stata la mamma a farlo)." },
      { "ok": true, "t": "**Il 是 si può togliere nel parlato, il 的 di solito resta**: 你什么时候来的？ 我昨天到的。 Con la negazione, invece, 是 è obbligatorio: 我不是昨天到的。" },
      { "ok": true, "t": "**Con un oggetto**, 的 sta in fondo oppure subito dopo il verbo: 我是在北京学中文的 e 我是在北京学的中文 si dicono tutte e due; con un pronome come oggetto si preferisce 的 in fondo: 我是昨天认识他的。" },
      { "ok": true, "t": "**Negazione con 不是…的**: 我不是一个人来的 («non sono venuto da solo», ma sono venuto). Si nega solo il dettaglio, non il fatto. 没 non si usa in questa costruzione." },
      { "ok": false, "t": "**Niente 了 dentro la costruzione**: 我是昨天来了 non si dice. Neppure si usa per annunciare una novità: «Sono arrivato!» è 我到了, senza 是…的." }
    ]
  },
  "logica": [
    "Ogni frase ha un'informazione già nota e una nuova. 我昨天到了 dice «è accaduto qualcosa» e mette in primo piano l'avvenimento: è il lavoro di 了. 我是昨天到的 parte dall'avvenimento come già sicuro e mette in primo piano il particolare: è il lavoro di 是…的. 是 apre il riflettore e 的 lo chiude: il pezzo illuminato sta in mezzo.",
    "In italiano questa differenza si fa con l'intonazione o con la frase scissa: «è **ieri** che sono arrivato», «sono venuto **in treno**». Il cinese la scrive nella struttura della frase. Per questo 是…的 serve soprattutto per fatti già avvenuti e già noti, e vive nelle domande e nelle risposte: se qualcuno ti dice «sono qui», la domanda naturale è 你是怎么来的？ e la risposta 我是坐火车来的。 Una frase come 我是昨天来了 mescola due strumenti diversi: o si annuncia con 了, o si illumina il dettaglio con 是…的."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa metti in luce", "Che cosa sta tra 是 e il verbo", "Esempio"],
    "righe": [
      ["Il momento", "una parola di tempo", "我是昨天到的。"],
      ["Il luogo", "在 + luogo", "我是在北京学的中文。"],
      ["Il modo", "坐, 用, 走…", "我是坐火车来的。"],
      ["La compagnia", "跟 + persona + 一起", "他是跟朋友一起去的。"],
      ["L'autore", "il nome di chi ha agito, subito dopo 是", "这个菜是我妈妈做的。"],
      ["Negare il dettaglio", "不是…的", "我不是一个人来的。"]
    ]
  },
  "esempi": [
    { "gruppo": "Quando: il momento", "items": [
      { "t": "我是昨天到的。", "tr": "Sono arrivato ieri.", "nota": "Si sa già che sei arrivato: l'informazione è «ieri»." },
      { "t": "你是什么时候来的？", "tr": "Quando sei venuto?" },
      { "t": "他是上个月认识我朋友的。", "tr": "Ha conosciuto il mio amico il mese scorso.", "nota": "Con un oggetto, 的 può stare in fondo." }
    ] },
    { "gruppo": "Dove: il luogo", "items": [
      { "t": "你是在哪儿学的中文？", "tr": "Dove hai studiato il cinese?", "nota": "Qui 的 sta subito dopo il verbo; anche 你是在哪儿学中文的 è corretto." },
      { "t": "这本书是在商店买的。", "tr": "Questo libro è stato comprato in negozio." },
      { "t": "我是在家吃的饭。", "tr": "Ho mangiato a casa." }
    ] },
    { "gruppo": "Come: il modo", "items": [
      { "t": "你是怎么去北京的？", "tr": "Come sei andato a Pechino?" },
      { "t": "我是坐飞机去的。", "tr": "Ci sono andato in aereo." },
      { "t": "这张照片是用手机拍的。", "tr": "Questa foto è stata scattata col telefonino." }
    ] },
    { "gruppo": "Con chi, e chi è stato", "items": [
      { "t": "他是跟朋友一起去的。", "tr": "Ci è andato con un amico." },
      { "t": "这个菜是我妈妈做的。", "tr": "Questo piatto l'ha fatto la mamma.", "nota": "Il dettaglio è chi ha cucinato." },
      { "t": "是谁告诉你的？", "tr": "Chi te l'ha detto?", "nota": "Con 是 prima del soggetto si mette in luce chi è stato." }
    ] },
    { "gruppo": "Negare il dettaglio", "items": [
      { "t": "我不是一个人来的。", "tr": "Non sono venuto da solo." },
      { "t": "他不是昨天到的，是前天到的。", "tr": "Non è arrivato ieri, è arrivato l'altro ieri." },
      { "t": "我们不是坐飞机去的。", "tr": "Non ci siamo andati in aereo." }
    ] }
  ],
  "contrasti": [
    { "q": "Sai già che il tuo amico è arrivato. Vuoi sapere con quale mezzo. Quale domanda?", "opzioni": [
      { "t": "你是怎么来的？", "ok": true, "perche": "Il fatto è noto e il dettaglio è il modo: è proprio il lavoro di 是…的." },
      { "t": "你怎么来了？", "ok": false, "perche": "Con 了 e senza 是…的 la domanda vuol dire «come mai sei venuto?»: chiede il motivo, non il mezzo." }
    ] },
    { "q": "Dici che sei arrivato ieri, e a chi ascolta interessa il giorno. Quale frase?", "opzioni": [
      { "t": "我是昨天到的。", "ok": true, "perche": "Il dettaglio 昨天 sta tra 是 e il verbo, e 的 chiude la frase." },
      { "t": "我是昨天到了。", "ok": false, "perche": "In una frase con 是 il verbo si chiude con 的, non con 了: sono due strumenti diversi." }
    ] },
    { "q": "Un amico ti chiede se sei venuto da solo; dici di no, c'era altra gente. Quale frase?", "opzioni": [
      { "t": "我不是一个人来的。", "ok": true, "perche": "Con 不是…的 si nega solo il dettaglio (da solo); che sei venuto resta vero." },
      { "t": "我没是一个人来的。", "ok": false, "perche": "没 non si usa con 是…的: la negazione di 是 è sempre 不是." }
    ] },
    { "q": "Chiedi a qualcuno dove ha imparato il cinese, sapendo che lo parla bene. Quale frase?", "opzioni": [
      { "t": "你是在哪儿学的中文？", "ok": true, "perche": "Il dettaglio (dove) sta tra 是 e il verbo; 的 segue subito il verbo." },
      { "t": "你是在哪儿的学中文？", "ok": false, "perche": "的 non può precedere il verbo: va subito dopo il verbo oppure in fondo alla frase." }
    ] },
    { "q": "Racconti che sei venuto ieri e metti in luce il giorno. Quale frase?", "opzioni": [
      { "t": "我是昨天来的。", "ok": true, "perche": "Il dettaglio sta subito dopo 是, davanti al verbo." },
      { "t": "我是来昨天的。", "ok": false, "perche": "Il dettaglio non può stare dopo il verbo: nella costruzione il tempo precede sempre 来." }
    ] },
    { "q": "Qualcuno ti chiede chi ha preparato la cena. Rispondi che è stata la mamma. Quale frase?", "opzioni": [
      { "t": "是我妈妈做的。", "ok": true, "perche": "Il dettaglio (chi ha agito) sta subito dopo 是: 我妈妈 viene prima di 做." },
      { "t": "我妈妈是做的。", "ok": false, "perche": "Tra 是 e il verbo non c'è nessun dettaglio da mettere in luce, e la frase resta vuota." }
    ] },
    { "q": "Ti chiedono: «Sei venuto in treno?». Rispondi: «No, in aereo.» Quale risposta?", "opzioni": [
      { "t": "不是，我是坐飞机来的。", "ok": true, "perche": "不是 nega il dettaglio (in treno); poi si dà quello giusto con 是…的." },
      { "t": "没有，我是坐飞机来的。", "ok": false, "perche": "没有 nega che l'azione sia avvenuta; qui l'azione è avvenuta e cambia solo il mezzo, quindi serve 不是." }
    ] },
    { "q": "Squilla il telefono e dici a chi ti aspetta: «Sono arrivato!» (è la novità). Quale frase?", "opzioni": [
      { "t": "我到了！", "ok": true, "perche": "Qui l'informazione nuova è l'arrivo: la annuncia 了." },
      { "t": "我是到的！", "ok": false, "perche": "Non c'è nessun dettaglio da mettere in luce, e l'arrivo non è ancora noto: 是…的 non si presta a dare una novità." }
    ] }
  ],
  "dialogo": {
    "titolo": "Dove hai imparato il cinese",
    "righe": [
      { "chi": "A", "t": "你的中文真好，是在哪儿学的？", "tr": "Il tuo cinese è davvero bravo, dove l'hai studiato?" },
      { "chi": "B", "t": "在北京学的，我是去年去的。", "tr": "A Pechino. Ci sono andato l'anno scorso." },
      { "chi": "A", "t": "你是一个人去的吗？", "tr": "Ci sei andato da solo?" },
      { "chi": "B", "t": "不是，我是跟朋友一起去的。", "tr": "No, ci sono andato con un amico." },
      { "chi": "A", "t": "你们是怎么去的？坐飞机吗？", "tr": "Come ci siete andati? In aereo?" },
      { "chi": "B", "t": "不是，我们是坐火车去的。", "tr": "No, ci siamo andati in treno." }
    ],
    "esercizi": [
      { "q": "Come sono andati a Pechino B e il suo amico?", "opzioni": [
        { "t": "In treno.", "ok": true, "perche": "B risponde 我们是坐火车去的: il mezzo è «treno»." },
        { "t": "In aereo.", "ok": false, "perche": "A lo propone, ma B lo nega con 不是." }
      ] },
      { "q": "Che cosa vuol dire la risposta di B «在北京学的»?", "opzioni": [
        { "t": "Ho studiato (cinese) a Pechino.", "ok": true, "perche": "Nel parlato si toglie 是 e anche il soggetto: resta il luogo e il verbo con 的." },
        { "t": "Studio a Pechino ogni giorno.", "ok": false, "perche": "È un fatto già avvenuto e noto: 的 mette in luce il luogo, non esprime un'abitudine." }
      ] },
      { "q": "Perché A dice 你是一个人去的吗 invece di 你一个人去了吗？", "opzioni": [
        { "t": "Sa già che B è andato e vuole sapere se è andato da solo.", "ok": true, "perche": "Il dettaglio su cui chiede conferma è «da solo»: lo mette in luce 是…的." },
        { "t": "Vuole sapere se B è andato o no.", "ok": false, "perche": "Il fatto è già noto; se volesse chiedere questo userebbe 了." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi studia cinese porta in 是…的 il 了 che conosce dal passato (我是昨天来了), oppure mette il dettaglio dopo il verbo come in italiano (我是来昨天的), oppure usa 没 per negare.",
    "perche": "In italiano il passato prossimo dice tutto: «sono venuto ieri» annuncia il fatto e dà il giorno insieme. In cinese i due compiti sono divisi: 了 annuncia il fatto, 是…的 illumina un particolare di un fatto già noto. Per questo non si possono mettere insieme, e il dettaglio deve stare davanti al verbo.",
    "esci": "Chiediti: il fatto lo sanno già tutti? Se sì e conta il dettaglio, scrivi 是 + dettaglio + verbo + 的. Se invece dai la notizia, usa 了. Per negare il dettaglio, sempre 不是.",
    "esempi": [
      { "sbagliata": "我是昨天来了。", "giusta": "我是昨天来的。" },
      { "sbagliata": "我是来昨天的。", "giusta": "我是昨天来的。" },
      { "sbagliata": "我没是一个人来的。", "giusta": "我不是一个人来的。" }
    ]
  },
  "curiosi": [
    { "titolo": "Perché 是 sparisce e 的 resta", "t": "Nel parlato di tutti i giorni 是 si omette spesso: 你什么时候来的？ 我昨天到的。 Il 的 di solito resta: è lui a segnalare che la frase mette in luce un dettaglio. Il 是 serve però quando si nega (不是) o quando si vuole che la scelta del dettaglio sia chiarissima, per esempio nella correzione: 不是昨天，是前天。" },
    { "titolo": "Il 的 prima o dopo l'oggetto", "t": "Con un oggetto ci sono due posti per 的: in fondo (我是在网上买手机的) o subito dopo il verbo (我是在网上买的手机). Sono tutti e due corretti, e la seconda forma è molto comune nel parlato. Con un pronome come oggetto si preferisce in fondo: 我是在学校认识他的。 Attenzione: con il 的 prima dell'oggetto, senza una parola di tempo, la frase può anche suonare come un'abitudine." },
    { "titolo": "Gli altri 是…的", "t": "Esistono altre frasi con 是 e 的 che non hanno a che fare con il passato. 这个菜是辣的 descrive una proprietà («è piccante»); 他是教书的 dice il mestiere («fa l'insegnante»). Hanno lo stesso scheletro, ma non c'è nessun fatto noto di cui illuminare un dettaglio." }
  ],
  "pragmatica": "È la forma naturale per interviste, presentazioni e conversazioni a due: chiedi come, quando e con chi è successo qualcosa che l'altro ha già detto. Nelle domande 是 si omette volentieri, mentre in una risposta con correzione (不是…，是…) resta. Per dare una notizia, o per raccontare in sequenza una storia, si usa 了.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他是跟朋友一起去的。", "opzioni": [
      { "t": "Ci è andato con un amico.", "ok": true, "perche": "跟…一起 = insieme a; il dettaglio messo in luce è la compagnia." },
      { "t": "Andrà con un amico.", "ok": false, "perche": "È un fatto già avvenuto, non un progetto." },
      { "t": "Non è andato con un amico.", "ok": false, "perche": "Non c'è nessuna negazione." }
    ] },
    { "k": "buco", "zh": "你＿怎么来的？", "tr": "Come sei venuto?", "opzioni": [
      { "t": "是", "ok": true, "perche": "Apre il dettaglio: 是 + 怎么 + 来 + 的." },
      { "t": "把", "ok": false, "perche": "把 introduce una cosa su cui si agisce: qui non c'è nessun oggetto." },
      { "t": "了", "ok": false, "perche": "了 annuncia un fatto, mentre qui il fatto è noto e si chiede il mezzo." }
    ] },
    { "k": "buco", "zh": "我是坐飞机来＿。", "tr": "Sono venuto in aereo.", "opzioni": [
      { "t": "的", "ok": true, "perche": "Chiude la costruzione, dopo il verbo." },
      { "t": "了", "ok": false, "perche": "Nelle frasi con 是 il verbo si chiude con 的, non con 了." },
      { "t": "吗", "ok": false, "perche": "吗 trasformerebbe la frase in una domanda." }
    ] },
    { "k": "ordine", "t": "我是坐飞机来的", "tr": "Sono venuto in aereo." },
    { "k": "ordine", "t": "你是在哪儿学的中文", "alt": ["你是在哪儿学中文的"], "tr": "Dove hai studiato il cinese?" },
    { "k": "trasforma", "base": "他昨天来了。", "consegna": "Riscrivi la frase con 是…的, per dire che il giorno (ieri) è l'informazione importante.", "accetta": ["他是昨天来的。", "他昨天来的。"], "rifiutate": [
      { "t": "他是昨天来了。", "perche": "Con 是 il verbo si chiude con 的; 了 non si mette." }
    ], "perche": "Il giorno sta tra 是 e il verbo, e 的 chiude la frase." },
    { "k": "trasforma", "base": "我在北京学中文。", "consegna": "Trasforma in una frase al passato che mette in luce il luogo: «Ho studiato cinese a Pechino».", "accetta": ["我是在北京学的中文。", "我是在北京学中文的。", "我在北京学的中文。", "我在北京学中文的。"], "rifiutate": [
      { "t": "我是在北京学了中文。", "perche": "Nella costruzione non c'è 了: il verbo si chiude con 的." }
    ], "perche": "Il luogo sta tra 是 e il verbo; 的 va subito dopo 学 oppure in fondo alla frase." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Non sono venuto da solo.»", "a": "我不是一个人来的。", "accetta": ["我不是一个人来的"], "perche": "Si nega solo il dettaglio con 不是…的; che sono venuto è un fatto vero." },
    { "k": "scrivi", "q": "Scrivi in cinese, mettendo in luce il mezzo: «Ci sono andato in treno.»", "a": "我是坐火车去的。", "accetta": ["我坐火车去的。", "我是坐火车去的", "我坐火车去的"], "perche": "Il modo, 坐火车, sta tra 是 e il verbo; 的 chiude la frase." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你的手机真好看，是在哪儿买的？" },
      { "chi": "B", "t": "我＿在网上买的。", "buco": true }
    ], "opzioni": [
      { "t": "是", "ok": true, "perche": "Risponde alla domanda sul luogo: 是 + 在网上 + 买 + 的." },
      { "t": "把", "ok": false, "perche": "把 non regge la costruzione: qui si dice dove è stato comprato." },
      { "t": "被", "ok": false, "perche": "被 introduce chi compie un'azione su un soggetto: qui il soggetto è «io»." }
    ] },
    { "k": "scegli", "q": "Quale di queste frasi dà una novità, senza mettere in luce un dettaglio?", "opzioni": [
      { "t": "我饿了。", "ok": true, "perche": "了 annuncia che la situazione è cambiata: non c'è nessun dettaglio da illuminare." },
      { "t": "我是昨天来的。", "ok": false, "perche": "Il fatto è già noto e viene messo in luce il giorno." },
      { "t": "我是坐火车来的。", "ok": false, "perche": "Il fatto è già noto e viene messo in luce il mezzo." }
    ] }
  ],
  "capaci": [
    "Sai chiedere quando, dove, come e con chi è successo qualcosa che l'altro ha già detto.",
    "Sai rispondere mettendo in luce il dettaglio giusto con 是…的.",
    "Sai negare solo il dettaglio con 不是…的, senza usare 没.",
    "Sai scegliere tra 了, che annuncia un fatto, e 是…的, che ne illumina un particolare."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), pagina «The shi… de construction for emphasizing details»: struttura, posizione di 的 con l'oggetto, 不是 e non 没, 是 omettibile, uso nelle domande",
    "Tatoeba (cmn.tsv): frasi reali come 她是昨天去的, 她是什么时候出生的, consultate per verificare l'uso di 是…的 nelle domande e nelle risposte"
  ]
};
