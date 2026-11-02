/* Lezione 10 · Dove: 在 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["dove"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我妈妈在医院。", "tr": "Mia madre è in ospedale." },
      { "t": "我妈妈在医院工作。", "tr": "Mia madre lavora in ospedale." },
      { "t": "她在看书。", "tr": "Sta leggendo." },
      { "t": "她住在北京。", "tr": "Abita a Pechino." }
    ],
    "domanda": "In tutte e quattro le frasi compare 在, ma non fa sempre lo stesso lavoro. Che cosa fa nella prima? Dove sta il luogo nella seconda e nella quarta, prima o dopo il verbo? E nella terza, 在 è seguito da un luogo?",
    "risposta": "Nella prima 在 è **il verbo**: «essere (in un posto)». Nella seconda 在医院 sta **prima** del verbo 工作 e dice dove si svolge l'azione. Nella terza non c'è nessun luogo: 在 + verbo dice che l'azione è **in corso** («sta leggendo»). Nella quarta il luogo viene **dopo** il verbo, perché 住 appartiene a un piccolo gruppo di verbi (住, 放, 坐, 站, 写…) in cui il luogo è il punto d'arrivo dell'azione: 住在北京. (Con 住 si sente anche 在北京住, per esempio 他在北京住了三年.)"
  },
  "regola": {
    "enunciato": "在 ha tre impieghi legati dall'idea di «stare in un posto»: come **verbo** dice dove si trova qualcuno o qualcosa (我在家); come **preposizione** introduce il luogo dell'azione e va **prima del verbo** (我在家吃饭); davanti a un verbo, senza luogo, indica l'azione **in corso** (我在吃饭).",
    "schema": ["chi", "在", "luogo", "verbo", "che cosa"],
    "punti": [
      { "ok": true, "t": "**在 verbo**: chi o che cosa + 在 + luogo. 我在家, 他在公司, 你的手机在桌子上. Per negare: 不在 (我不在家, «non sono a casa»)." },
      { "ok": true, "t": "**在 + luogo prima del verbo**: 我在图书馆看书, 我们在北京学中文. L'ordine è chi, (quando), dove, che cosa fai." },
      { "ok": true, "t": "**La domanda**: 你在哪儿？ 你在哪里工作？ 哪里 e 哪儿 sono equivalenti; 哪儿 è più frequente nel parlato, 哪里 è un po' più neutro. La parola interrogativa sta dove starebbe il luogo." },
      { "ok": true, "t": "**Parole di luogo con i nomi comuni**: un nome di cosa vuole 上, 里 o 下 per fare un luogo (桌子上, 房间里, 椅子下面). I nomi propri e i luoghi come 家, 学校, 公司 non lo vogliono: 在学校, 在公司." },
      { "ok": true, "t": "**在 + verbo = azione in corso**: 我在学中文, 他在打电话. Si può aggiungere un luogo: 他在家看电视. Per negare un'azione in corso si mette 没 davanti a 在: 我没在看电视." },
      { "ok": true, "t": "**Alcuni verbi vogliono il luogo dopo**: 住在北京, 坐在椅子上, 放在桌子上, 站在门口, 写在黑板上. Qui 在 + luogo dice dove finisce o dove resta qualcosa. Con 住 si trova anche l'ordine inverso (他在北京住了三年), ma 住在 + luogo è la forma di base." },
      { "ok": false, "t": "**Non si mette il luogo in fondo come in italiano**: 我吃饭在家 non si dice. E per dire dove sei non serve 是: 在 è già il verbo, quindi 我在家." }
    ]
  },
  "logica": [
    "In italiano il luogo dell'azione di solito sta in fondo: «mangio a casa», «lavoro in ospedale». In cinese, come per il tempo, ciò che inquadra l'azione viene **prima** del verbo: chi, quando, dove, e solo dopo che cosa fai. Il luogo è la scena in cui l'azione si svolge, e la scena si costruisce prima che l'attore entri in azione.",
    "I verbi come 住, 放, 坐, 站 sembrano un'eccezione, ma hanno una logica loro. In 住在北京 il luogo non è la scena dell'azione: è dove l'azione **va a finire** o dove il soggetto **resta** (abito e quindi sto a Pechino). Il luogo è un risultato che segue il verbo, come 做完 (finire di fare). Per questo con questi verbi 在 cambia posto, anche se significa sempre «in». Con tutti gli altri verbi (工作, 吃, 学习, 看书) il luogo è solo lo sfondo e sta davanti. (住 è il più flessibile del gruppo: accanto a 住在北京 si dice anche 在北京住.)",
    "L'italiano sa già distinguere «Dove sei?» (verbo di luogo) da «Dove lavori?» (azione in un luogo) grazie al verbo che cambia. In cinese è 在 a fare i due lavori. Per questo non c'è bisogno di 是: 在 è già il verbo. Se vuoi dire che qualcosa esiste in un posto, senza identificare la cosa, serve invece 有: 桌子上有一本书."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Dove si trova qualcuno o qualcosa", "在 + luogo (è il verbo)", "我在家。"],
      ["Dove avviene un'azione", "在 + luogo, prima del verbo", "她在医院工作。"],
      ["Un'azione in corso", "在 + verbo", "我在学中文。"],
      ["Azione in corso, con luogo", "在 + luogo + verbo", "他在家看电视。"],
      ["Dove abiti, ti siedi, metti qualcosa", "verbo + 在 + luogo", "我住在上海。"],
      ["Una cosa è in un posto", "cosa + 在 + nome + 上/里", "手机在桌子上。"],
      ["Chiedere dove", "在哪儿 / 在哪里", "你在哪儿？"],
      ["Non è lì", "不在", "他不在家。"]
    ]
  },
  "esempi": [
    { "gruppo": "在 come verbo: dove sei", "items": [
      { "t": "我在学校。", "tr": "Sono a scuola." },
      { "t": "我的手机在桌子上。", "tr": "Il mio telefono è sul tavolo.", "nota": "桌子 è un nome comune e prende 上." },
      { "t": "他不在家。", "tr": "Non è a casa." }
    ] },
    { "gruppo": "Dove avviene l'azione: prima del verbo", "items": [
      { "t": "我在家吃饭。", "tr": "Mangio a casa." },
      { "t": "她在医院工作。", "tr": "Lavora in ospedale." },
      { "t": "我们在北京学中文。", "tr": "Studiamo cinese a Pechino." },
      { "t": "他每天在图书馆看书。", "tr": "Ogni giorno legge in biblioteca.", "nota": "Ordine: chi, quando, dove, che cosa." }
    ] },
    { "gruppo": "Azione in corso", "items": [
      { "t": "我在学中文。", "tr": "Sto studiando cinese." },
      { "t": "妈妈在做饭。", "tr": "La mamma sta cucinando." },
      { "t": "他在公司开会。", "tr": "È in ufficio a una riunione.", "nota": "In corso, con un luogo." }
    ] },
    { "gruppo": "Il luogo dopo il verbo", "items": [
      { "t": "我住在北京。", "tr": "Abito a Pechino." },
      { "t": "请坐在这儿。", "tr": "Si sieda qui, prego." },
      { "t": "他把书放在桌子上。", "tr": "Ha messo il libro sul tavolo." }
    ] },
    { "gruppo": "Domande", "items": [
      { "t": "你在哪儿？", "tr": "Dove sei?" },
      { "t": "你在哪里工作？", "tr": "Dove lavori?" },
      { "t": "你爸爸住在哪儿？", "tr": "Dove abita tuo padre?" }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Mangio a casa»?", "opzioni": [
      { "t": "我在家吃饭。", "ok": true, "perche": "Il luogo dell'azione sta prima del verbo: 在家 + 吃饭." },
      { "t": "我吃饭在家。", "ok": false, "perche": "È l'ordine italiano («mangio a casa»). In cinese il luogo di un'azione come 吃 non segue il verbo." }
    ] },
    { "q": "Come dici «Mia madre non è a casa»?", "opzioni": [
      { "t": "我妈妈不在家。", "ok": true, "perche": "Con 在 verbo si nega con 不: 不在 + luogo." },
      { "t": "我妈妈不是家。", "ok": false, "perche": "是 identifica una cosa con un'altra («è la casa»); per dire dove si trova qualcuno il verbo è 在." }
    ] },
    { "q": "Dici che il telefono è sul tavolo.", "opzioni": [
      { "t": "手机在桌子上。", "ok": true, "perche": "桌子 è un nome comune e fa luogo con 上: «sul tavolo»." },
      { "t": "手机在桌子。", "ok": false, "perche": "Un oggetto comune non è un luogo da solo: serve 上, 里 o simili." }
    ] },
    { "q": "«Studio cinese a Pechino.»", "opzioni": [
      { "t": "我在北京学中文。", "ok": true, "perche": "Il luogo dell'azione (在北京) sta prima di 学." },
      { "t": "我学在北京中文。", "ok": false, "perche": "In cinese non si inserisce 在 + luogo tra il verbo e l'oggetto." }
    ] },
    { "q": "Che cosa vuol dire 我在学中文？", "opzioni": [
      { "t": "Sto studiando cinese.", "ok": true, "perche": "在 davanti al verbo, senza luogo, indica l'azione in corso." },
      { "t": "Studio cinese a scuola.", "ok": false, "perche": "Non c'è nessun luogo dopo 在: sarebbe 我在学校学中文." }
    ] },
    { "q": "Dici dove hai messo il libro: sul tavolo.", "opzioni": [
      { "t": "我把书放在桌子上。", "ok": true, "perche": "放 vuole il luogo dopo il verbo: 放在桌子上." },
      { "t": "我把书在桌子上放。", "ok": false, "perche": "Con 放 il luogo è il punto d'arrivo e segue il verbo." }
    ] },
    { "q": "Chiedi a un amico dove sia in questo momento.", "opzioni": [
      { "t": "你在哪儿？", "ok": true, "perche": "在 è il verbo e 哪儿 sta al posto del luogo." },
      { "t": "你是哪儿？", "ok": false, "perche": "是哪儿 non chiede dove si è; per «sei di dove?» (provenienza) si direbbe 你是哪里人." }
    ] }
  ],
  "dialogo": {
    "titolo": "Dove sei?",
    "righe": [
      { "chi": "A", "t": "你在哪儿？我找不到你。", "tr": "Dove sei? Non riesco a trovarti." },
      { "chi": "B", "t": "我在图书馆。我在看书。", "tr": "Sono in biblioteca. Sto leggendo." },
      { "chi": "A", "t": "你在图书馆几楼？", "tr": "A che piano della biblioteca sei?" },
      { "chi": "B", "t": "我在三楼，坐在窗户旁边。", "tr": "Al terzo piano, seduto vicino alla finestra." },
      { "chi": "A", "t": "好，我马上到。", "tr": "Bene, arrivo subito." }
    ],
    "esercizi": [
      { "q": "Che cosa fa 在 in 我在图书馆?", "opzioni": [
        { "t": "È il verbo: «sono in biblioteca».", "ok": true, "perche": "Dopo 我在 c'è un luogo e nessun altro verbo: 在 è il verbo." },
        { "t": "Indica l'azione in corso.", "ok": false, "perche": "L'azione in corso è 我在看书: qui 在 è seguito da un verbo." },
        { "t": "Introduce il luogo di un'azione.", "ok": false, "perche": "Nella frase non c'è nessuna azione dopo il luogo." }
      ] },
      { "q": "Che cosa mostra 坐在窗户旁边 (verbo + 在 + luogo)?", "opzioni": [
        { "t": "Che con 坐 il luogo segue di norma il verbo e dice dove si resta.", "ok": true, "perche": "坐, 住, 放, 站 portano il luogo dopo: 坐在…" },
        { "t": "Che la frase è al passato.", "ok": false, "perche": "Il cinese non cambia l'ordine con il tempo." },
        { "t": "Che 窗户旁边 non è un luogo.", "ok": false, "perche": "旁边 è una parola di luogo e funziona benissimo come luogo." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette il luogo in fondo alla frase (我吃饭在家, 我工作在医院), traducendo «mangio a casa» parola per parola. All'opposto, chi ha imparato 住在 e 放在 allarga la regola a tutti i verbi (我学习在学校) oppure usa 是 al posto di 在 (我是学校).",
    "perche": "In italiano il luogo segue il verbo, e la preposizione («a casa», «in ospedale») fa tutto il lavoro. In cinese sono due costruzioni diverse: il luogo come scena (prima del verbo) e il luogo come destinazione (dopo, solo per un gruppo piccolo di verbi di posizione).",
    "esci": "Chiediti: il luogo è dove si svolge l'azione, oppure dove va a finire qualcuno o qualcosa? Nel primo caso (工作, 吃饭, 看书, 学习) metti 在 + luogo prima del verbo. Nel secondo caso (住, 坐, 放, 站) lo metti dopo. Per dire dove sei, usa 在 come verbo, senza 是.",
    "esempi": [
      { "sbagliata": "我吃饭在家。", "giusta": "我在家吃饭。" },
      { "sbagliata": "我工作在医院。", "giusta": "我在医院工作。" },
      { "sbagliata": "我学习在学校。", "giusta": "我在学校学习。" },
      { "sbagliata": "我是学校。", "giusta": "我在学校。" }
    ]
  },
  "curiosi": [
    { "titolo": "Un carattere, tre impieghi", "t": "Il significato di fondo di 在 è «trovarsi, esserci», ed è ciò che unisce i tre usi: essere in un posto (verbo), fare qualcosa in un posto (preposizione), stare facendo (azione in corso). Il passaggio da «stare in un luogo» a «stare facendo» si trova anche in italiano, dove «stare» è insieme verbo di posizione e verbo dell'azione in corso («sto leggendo»)." },
    { "titolo": "哪儿 e 哪里", "t": "Le due forme hanno lo stesso significato. 哪儿 è la forma colloquiale, soprattutto al nord, con la finale -r che si sente nel parlato; 哪里 è la forma più neutra e compare anche nello scritto. Con 哪里 si risponde però anche in modo cortese a un complimento: 哪里哪里, «ma no, si figuri»." },
    { "titolo": "Il luogo con 上, 里, 下", "t": "In cinese un nome di cosa non è di per sé un luogo: 桌子 è «il tavolo», 桌子上 è «sul tavolo». Si aggiungono parole come 上, 里, 下, 旁边, 前面, 后面 che trasformano la cosa in un posto. I nomi di luogo veri e propri (家, 学校, 医院, 公司, 北京) fanno luogo da soli. Per questo 在家 e 在学校 non vogliono nessuna particella, mentre 在书里 e 在桌子上 li vogliono." },
    { "titolo": "在 e 有 e 是", "t": "Tre frasi sul luogo, tre ordini diversi. 我的书在桌子上 parte da una cosa nota e dice dove sta. 桌子上有一本书 parte dal luogo e annuncia che c'è qualcosa (di non ancora nominato). 这是我的桌子 identifica. Vale la regola: la cosa nota, in apertura, con 在; il luogo in apertura, con 有." }
  ],
  "pragmatica": "你在哪儿？ è la domanda di ogni telefonata e di ogni messaggio: si risponde in poche parole (我在家, 我在路上, 我在公司). 我在 + verbo è invece il modo normale di dire che cosa stai facendo adesso (我在吃饭, 我在开会) e serve a dire con garbo che sei occupato e non puoi parlare. Le risposte con 住在 e 坐在 sono la base per dare il proprio indirizzo o indicare un posto a tavola.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我在家吃饭。", "opzioni": [
      { "t": "Mangio a casa.", "ok": true, "perche": "在家 è il luogo dell'azione, prima del verbo 吃饭." },
      { "t": "Sto mangiando.", "ok": false, "perche": "L'azione in corso sarebbe 我在吃饭, senza luogo." },
      { "t": "Ho mangiato a casa ieri.", "ok": false, "perche": "Non c'è nessuna parola di tempo." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我在学中文。", "opzioni": [
      { "t": "Sto studiando cinese.", "ok": true, "perche": "在 davanti al verbo, senza luogo: azione in corso." },
      { "t": "Studio cinese a Pechino.", "ok": false, "perche": "Per dire il luogo servirebbe un nome dopo 在: 我在北京学中文." },
      { "t": "Sono in Cina.", "ok": false, "perche": "Il verbo 学 mostra un'azione, non una posizione." }
    ] },
    { "k": "buco", "zh": "我＿家吃饭。", "tr": "Mangio a casa.", "opzioni": [
      { "t": "在", "ok": true, "perche": "在 + luogo introduce dove si svolge l'azione." },
      { "t": "是", "ok": false, "perche": "是 identifica («è»), non indica un luogo." },
      { "t": "有", "ok": false, "perche": "有 vuol dire «avere» o «c'è»; non introduce il luogo di un'azione." }
    ] },
    { "k": "buco", "zh": "手机在桌子＿。", "tr": "Il telefono è sul tavolo.", "opzioni": [
      { "t": "上", "ok": true, "perche": "桌子上 trasforma «il tavolo» in un luogo («sul tavolo»)." },
      { "t": "的", "ok": false, "perche": "的 collega un possessore o un attributo a un nome: non dà un luogo." },
      { "t": "了", "ok": false, "perche": "了 segna un fatto compiuto o un cambiamento, non un luogo." }
    ] },
    { "k": "ordine", "t": "她在医院工作", "tr": "Lavora in ospedale." },
    { "k": "ordine", "t": "你在哪里工作", "tr": "Dove lavori?", "alt": ["你在哪儿工作"] },
    { "k": "ordine", "t": "我住在北京", "tr": "Abito a Pechino." },
    { "k": "trasforma", "base": "我吃饭在家。", "consegna": "Correggi la frase: metti il luogo dove deve stare.", "accetta": ["我在家吃饭。"], "rifiutate": [
      { "t": "我在吃饭家。", "perche": "在 + luogo va tutto prima del verbo; non si spezza il luogo." }
    ], "perche": "Il luogo dell'azione sta prima del verbo: 在家 + 吃饭." },
    { "k": "trasforma", "base": "我在家吃饭。", "consegna": "Cambia la frase: ora mangi in ufficio, non a casa.", "accetta": ["我在公司吃饭。", "我不在家吃饭，在公司吃饭。", "我不在家吃饭，我在公司吃饭。", "我不在家吃，在公司吃。"], "rifiutate": [
      { "t": "我吃饭在公司。", "perche": "Anche con un altro luogo, 在 + luogo resta prima del verbo." }
    ], "perche": "Cambia il luogo e l'ordine resta: chi + 在 + luogo + verbo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Dove lavori?»", "a": "你在哪里工作？", "accetta": ["你在哪儿工作？", "你在哪里工作", "你在哪儿工作", "你在哪里上班？", "你在哪儿上班？"], "perche": "哪里 sta dove starebbe il luogo, prima del verbo 工作." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Studiamo cinese a scuola.»", "a": "我们在学校学中文。", "accetta": ["我们在学校学习中文。", "我们在学校学汉语。", "我们在学校学习汉语。"], "perche": "Il luogo dell'azione (在学校) sta prima del verbo." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你在哪儿工作？" },
      { "chi": "B", "t": "我＿银行工作。", "buco": true }
    ], "opzioni": [
      { "t": "在", "ok": true, "perche": "在 + luogo introduce dove si svolge l'azione di 工作." },
      { "t": "是", "ok": false, "perche": "是 non indica un luogo." },
      { "t": "去", "ok": false, "perche": "去 vuol dire «andare»: si direbbe 我去银行, ma non risponde a «dove lavori»." }
    ] }
  ],
  "capaci": [
    "Sai dire dove sei o dove sta qualcosa con 在, e negare con 不在.",
    "Sai mettere 在 + luogo prima del verbo per dire dove fai qualcosa.",
    "Sai distinguere 在 + luogo (dove) da 在 + verbo (azione in corso).",
    "Sai usare 住在, 坐在 e 放在 con il luogo dopo il verbo e chiedere dove con 哪儿 e 哪里."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Indicating location with zai before verbs»: soggetto + 在 + luogo + verbo; 上 e 里 per fare luogo di un nome comune",
    "Chinese Grammar Wiki (AllSet Learning), «Special cases of zai following verbs»: 住, 放, 坐, 站 con 在 + luogo dopo il verbo",
    "Tatoeba (cinese), corpus locale cmn.tsv: 他在法國住了一段時間, per l'ordine 在 + luogo + 住",
    "CC-CEDICT, voci 在, 住, 放, 哪儿, 哪里, per significati e usi"
  ]
};
