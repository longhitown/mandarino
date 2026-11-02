/* Lezione 9 · Quando: il tempo prima del verbo (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["quando"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我明天去北京。", "tr": "Domani vado a Pechino." },
      { "t": "星期六我们在家看电视。", "tr": "Sabato guardiamo la televisione a casa." },
      { "t": "他每天早上七点起床。", "tr": "Ogni mattina si alza alle sette." },
      { "t": "我学了三年中文。", "tr": "Ho studiato cinese per tre anni." }
    ],
    "domanda": "Dove stanno 明天, 星期六, 每天早上七点, rispetto al verbo? E 三年, nell'ultima frase, sta nello stesso posto? Prova a dire che cosa cambia tra «un momento» e «una durata».",
    "risposta": "Le espressioni che dicono **quando** (明天, 星期六, 每天早上七点) stanno **prima del verbo**: o subito dopo chi agisce, o all'inizio della frase, davanti al soggetto. Non in fondo, come in italiano. 三年, invece, non dice «quando» ma **per quanto tempo**: è una durata e sta **dopo il verbo** (学了三年). Il momento si colloca prima, la durata si misura dopo."
  },
  "regola": {
    "enunciato": "In cinese il momento in cui accade qualcosa si dice **prima del verbo**: chi + quando + verbo + che cosa. La parola di tempo può anche aprire la frase, davanti al soggetto, ma di norma non va in fondo come in italiano. Il verbo non cambia forma: è la parola di tempo a dire se si parla di ieri, di oggi o di domani.",
    "schema": ["(quando)", "chi", "quando", "verbo", "che cosa"],
    "punti": [
      { "ok": true, "t": "**Dopo il soggetto o all'inizio**: 我明天去北京 e 明天我去北京 hanno lo stesso contenuto. Con il tempo in apertura si mette il momento in evidenza: è il «quadro» in cui sta tutta la frase." },
      { "ok": true, "t": "**Dal grande al piccolo**: si parte dalla cornice più ampia e si scende al dettaglio: 明天下午三点, 星期六晚上, 每天早上七点. L'italiano fa spesso l'inverso («alle sette di ogni mattina»)." },
      { "ok": true, "t": "**Il tempo precede avverbi e negazione**: 我们今天都在家, 我明天不去, 他昨天也来了. La posizione normale è: soggetto + tempo + (都, 也, 不, 没) + verbo." },
      { "ok": true, "t": "**Tempo prima del luogo**: 我们明天在公司开会 è l'ordine normale (quando, dove, verbo); 我们在公司明天开会 suona scomodo. Quando e dove stanno entrambi prima del verbo." },
      { "ok": true, "t": "**Le domande seguono la stessa posizione**: 你什么时候去北京？ 你几点起床？ La parola interrogativa sta dove starebbe la risposta." },
      { "ok": true, "t": "**Frasi di tempo con 的时候, 以前, 以后**: 我吃饭的时候看电视, 他下班以后回家. Anche queste espressioni vanno prima del verbo principale." },
      { "ok": false, "t": "**Non in fondo alla frase**: nella frase normale 我去北京明天 non si dice (solo nel parlato, come aggiunta pensata dopo, si sente un tempo in coda). E la **durata** (三年, 两个小时, 一会儿) segue invece il verbo: 他睡了八个小时, non 他八个小时睡." }
    ]
  },
  "logica": [
    "In italiano «domani» può stare quasi ovunque: «domani vado a Pechino», «vado a Pechino domani». In cinese la frase è costruita in modo che **tutto ciò che inquadra l'azione viene prima di essa**: chi la fa, quando, dove, in quale modo. Il verbo e il suo oggetto arrivano per ultimi, come il punto d'arrivo. Per questo 我去北京明天 suona rovesciato: l'informazione di cornice è finita dopo l'azione.",
    "E poiché il verbo non cambia con il tempo, la parola di tempo diventa essenziale. «Studio», «studiavo», «studierò» sono tre forme in italiano; in cinese 我学中文 resta uguale e si precisa con 现在, 以前, 明天. Se il contesto è già chiaro, la parola di tempo si può anche tralasciare: chi ascolta capisce dal discorso.",
    "Il momento (un punto sull'asse del tempo) e la durata (un tratto) si comportano in modo opposto. Il punto serve a **localizzare** l'azione e come ogni cornice sta davanti; il tratto serve a **misurarla** e come ogni misura segue il verbo (学了三年, 等了一个小时)."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa dici", "Dove sta", "Esempio"],
    "righe": [
      ["Un momento preciso (今天, 明天, 三点)", "prima del verbo", "我三点去医院。"],
      ["Un momento in apertura", "prima del soggetto", "明天我去医院。"],
      ["Un'abitudine (每天, 常常, 周末)", "prima del verbo", "他周末去公园。"],
      ["Più parole di tempo", "dal grande al piccolo", "我们明天下午三点开会。"],
      ["Tempo e luogo insieme", "tempo, poi luogo, poi verbo", "我们明天在公司开会。"],
      ["Una durata (两个小时, 三年)", "dopo il verbo", "他睡了八个小时。"],
      ["Una frase di tempo (……的时候)", "prima del verbo principale", "我吃饭的时候看电视。"]
    ]
  },
  "esempi": [
    { "gruppo": "Il momento dopo il soggetto", "items": [
      { "t": "我们昨天去了公园。", "tr": "Ieri siamo andati al parco." },
      { "t": "她今天下午有课。", "tr": "Oggi pomeriggio lei ha lezione." },
      { "t": "我晚上看书。", "tr": "La sera leggo." }
    ] },
    { "gruppo": "Il tempo in apertura di frase", "items": [
      { "t": "明天我去上班。", "tr": "Domani vado al lavoro.", "nota": "Stesso senso di 我明天去上班, con il momento messo in primo piano." },
      { "t": "星期六他们在家吃饭。", "tr": "Sabato mangiano a casa." }
    ] },
    { "gruppo": "Ogni quanto: abitudini", "items": [
      { "t": "我每天喝一杯茶。", "tr": "Ogni giorno bevo una tazza di tè." },
      { "t": "他常常在晚上给我打电话。", "tr": "Spesso mi telefona la sera.", "nota": "常常 è un avverbio di frequenza e sta prima del verbo, come il tempo." },
      { "t": "爸爸每个星期六去买菜。", "tr": "Ogni sabato papà va a fare la spesa." }
    ] },
    { "gruppo": "Dal grande al piccolo", "items": [
      { "t": "我们明天下午三点开会。", "tr": "Domani pomeriggio alle tre abbiamo una riunione." },
      { "t": "他每天早上六点半起床。", "tr": "Ogni mattina si alza alle sei e mezza." }
    ] },
    { "gruppo": "Tempo, avverbi e negazione", "items": [
      { "t": "我们今天都在家。", "tr": "Oggi siamo tutti a casa." },
      { "t": "我明天不去学校。", "tr": "Domani non vado a scuola.", "nota": "Il tempo precede la negazione: soggetto + 明天 + 不 + verbo." },
      { "t": "他昨天也没来。", "tr": "Neanche ieri è venuto." }
    ] },
    { "gruppo": "Domande e frasi di tempo", "items": [
      { "t": "你什么时候下班？", "tr": "Quando stacchi dal lavoro?" },
      { "t": "我吃饭的时候不看手机。", "tr": "Quando mangio non guardo il telefono." },
      { "t": "他下班以后去朋友家。", "tr": "Dopo il lavoro va da un amico." },
      { "t": "我学了两年中文。", "tr": "Ho studiato cinese per due anni.", "nota": "La durata (两年) segue il verbo. Per dire «studio da due anni» (e continuo) si aggiunge 了 in fondo: 我学了两年中文了." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Domani vado a scuola»?", "opzioni": [
      { "t": "我明天去学校。", "ok": true, "perche": "Il momento sta prima del verbo, subito dopo il soggetto." },
      { "t": "我去学校明天。", "ok": false, "perche": "È la struttura italiana («vado a scuola domani»): in cinese una parola di tempo in fondo alla frase non è una collocazione normale." }
    ] },
    { "q": "Vuoi mettere in evidenza il momento: «Domani sera guardiamo un film».", "opzioni": [
      { "t": "明天晚上我们看电影。", "ok": true, "perche": "Il tempo può aprire la frase, davanti al soggetto, e va dal grande (明天) al piccolo (晚上)." },
      { "t": "晚上明天我们看电影。", "ok": false, "perche": "Si parte dalla cornice più ampia: «domani sera», non «sera domani»." }
    ] },
    { "q": "Come dici «Domani non vado a lavorare»?", "opzioni": [
      { "t": "我明天不上班。", "ok": true, "perche": "Il tempo precede la negazione e il verbo: soggetto + 明天 + 不 + verbo." },
      { "t": "我不明天上班。", "ok": false, "perche": "La negazione va subito davanti al verbo, non davanti alla parola di tempo." }
    ] },
    { "q": "«Domani siamo tutti a casa» (tutti insieme).", "opzioni": [
      { "t": "我们明天都在家。", "ok": true, "perche": "Soggetto + tempo + 都 + verbo: il tempo viene prima di 都." },
      { "t": "我们都明天在家。", "ok": false, "perche": "都 si avvicina al predicato e segue la parola di tempo." }
    ] },
    { "q": "Hai una riunione domani. Come dici dove e quando la fai?", "opzioni": [
      { "t": "我们明天在公司开会。", "ok": true, "perche": "Prima il quando, poi il dove, poi il verbo." },
      { "t": "我们在公司明天开会。", "ok": false, "perche": "Il tempo precede il luogo: quando, dove, che cosa." }
    ] },
    { "q": "Come dici «Ho dormito otto ore»?", "opzioni": [
      { "t": "我睡了八个小时。", "ok": true, "perche": "八个小时 è una durata e sta dopo il verbo (睡了八个小时)." },
      { "t": "我八个小时睡了。", "ok": false, "perche": "Una durata non sta prima del verbo come un momento: si dice dopo, come misura dell'azione." }
    ] },
    { "q": "Quale domanda significa «Quando parti?»", "opzioni": [
      { "t": "你什么时候走？", "ok": true, "perche": "La parola interrogativa sta nel posto in cui starebbe il momento nella risposta, prima del verbo." },
      { "t": "你走什么时候？", "ok": false, "perche": "In italiano «parti quando?» è un'alternativa familiare; in cinese 什么时候 non segue il verbo." }
    ] },
    { "q": "«Quando mangio non guardo il telefono.»", "opzioni": [
      { "t": "我吃饭的时候不看手机。", "ok": true, "perche": "La frase di tempo con 的时候 sta prima del verbo principale (dopo il soggetto o in apertura)." },
      { "t": "我不看手机吃饭的时候。", "ok": false, "perche": "Anche 的时候 delimita il quadro dell'azione e non può stare in fondo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Un appuntamento",
    "righe": [
      { "chi": "A", "t": "你明天下午有空吗？", "tr": "Domani pomeriggio sei libero?" },
      { "chi": "B", "t": "明天下午我要上课，晚上有空。", "tr": "Domani pomeriggio ho lezione, la sera sono libero." },
      { "chi": "A", "t": "那我们明天晚上七点在学校见面吧。", "tr": "Allora vediamoci domani sera alle sette a scuola." },
      { "chi": "B", "t": "好啊。你每天几点下班？", "tr": "Va bene. A che ora stacchi ogni giorno?" },
      { "chi": "A", "t": "我每天五点下班，可是明天四点就走。", "tr": "Stacco ogni giorno alle cinque, ma domani vado via già alle quattro." }
    ],
    "esercizi": [
      { "q": "Dove sta 明天晚上七点 in 我们明天晚上七点在学校见面?", "opzioni": [
        { "t": "Prima di 在学校 e del verbo, dal grande al piccolo.", "ok": true, "perche": "Il tempo precede il luogo e va da 明天 a 晚上 a 七点." },
        { "t": "In fondo alla frase, dopo 见面.", "ok": false, "perche": "In cinese un momento non si mette dopo il verbo." },
        { "t": "Subito dopo 见面.", "ok": false, "perche": "Dopo il verbo si mette una durata, non un momento." }
      ] },
      { "q": "Che cosa chiede A con 你每天几点下班？", "opzioni": [
        { "t": "A che ora B esce ogni giorno dal lavoro.", "ok": true, "perche": "每天 e 几点 stanno prima del verbo: l'abitudine e l'ora." },
        { "t": "Per quante ore B lavora.", "ok": false, "perche": "Per chiedere la durata si direbbe 工作几个小时, con la durata dopo il verbo." },
        { "t": "Quando B ha finito il lavoro ieri.", "ok": false, "perche": "Non c'è nessuna parola per «ieri»: 每天 indica un'abitudine." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette la parola di tempo in fondo (我去北京明天, 我学中文每天) perché in italiano è una posizione naturale. All'opposto, trasferisce nella durata l'ordine del momento (我八个小时睡).",
    "perche": "L'italiano dispone le informazioni di cornice anche alla fine della frase («vado a Pechino domani»), e il tempo è segnato sul verbo. In cinese il verbo è nudo e la frase si costruisce con l'ordine: chi, quando, dove, che cosa fa. Il momento va prima; la durata, che misura l'azione, dopo.",
    "esci": "Prima di scrivere il verbo domanda: ho detto chi? ho detto quando? ho detto dove? Solo dopo scrivo l'azione. Se si tratta di «per quanto tempo» invece di «quando», la parola segue il verbo.",
    "esempi": [
      { "sbagliata": "我去北京明天。", "giusta": "我明天去北京。" },
      { "sbagliata": "我学中文每天。", "giusta": "我每天学中文。" },
      { "sbagliata": "我们在公司明天开会。", "giusta": "我们明天在公司开会。" },
      { "sbagliata": "他八个小时睡了。", "giusta": "他睡了八个小时。" }
    ]
  },
  "curiosi": [
    { "titolo": "Il tempo che non cambia il verbo", "t": "In cinese il verbo resta invariato: 我去 vale «vado», «andai», «andrò». Ma questo non vuol dire che la lingua ignori il tempo: lo affida a parole come 昨天, 以前, 明天, 以后, e agli aspetti (了, 过, 在). Se il discorso ha già stabilito il quando, la parola di tempo si può omettere: dopo 你昨天去哪儿了？ si risponde 我去公园了 senza ripetere 昨天." },
    { "titolo": "Il tempo prima o dopo il soggetto", "t": "我明天去北京 e 明天我去北京 sono entrambe normali. La seconda mette il momento in primo piano, come una scena che si apre: «Domani... io vado a Pechino». Quando il soggetto è lungo o cambia nel discorso, il tempo in apertura aiuta a restare chiari. Quando si confrontano due persone, il tempo segue ciascun soggetto: 我明天去，他后天去." },
    { "titolo": "Anno, mese, giorno: sempre dal grande al piccolo", "t": "Le date cinesi vanno dall'anno al giorno: 2025年3月8日, e anche le ore dal più grande al più piccolo: 下午三点二十分. È lo stesso principio della frase, dalla cornice ai dettagli." },
    { "titolo": "Il tempo dopo il verbo: la durata", "t": "Dopo il verbo si mette la **quantità di tempo**: 住了三年, 等了一会儿, 休息一天. Quando c'è anche un oggetto, il verbo si ripete oppure si usa la durata come specificazione: 学中文学了三年, 学了三年中文. Sono costruzioni che si studiano più avanti; per ora basta distinguere «quando» (prima) da «quanto» (dopo)." }
  ],
  "pragmatica": "Nel parlato quotidiano la parola di tempo si omette volentieri quando il discorso è già chiaro, e si ripete invece per fissare un appuntamento: 明天晚上七点, 学校见 è un messaggio perfetto tra amici. Mettere il tempo in apertura dà un tono più scandito, adatto a orari, avvisi e programmi (明天上午九点开会). Nei messaggi di lavoro conviene scrivere sempre l'ora precisa, dal grande al piccolo.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他每天早上七点起床。", "opzioni": [
      { "t": "Ogni mattina si alza alle sette.", "ok": true, "perche": "每天早上七点 è un'abitudine, dal grande al piccolo, prima del verbo." },
      { "t": "Domani mattina si alza alle sette.", "ok": false, "perche": "Per «domani mattina» servirebbe 明天早上, non 每天." },
      { "t": "Si è alzato alle sette ieri.", "ok": false, "perche": "Manca 昨天, e 每天 indica un'abitudine, non un fatto passato." }
    ] },
    { "k": "scegli", "q": "Quale frase è sbagliata?", "opzioni": [
      { "t": "我吃饭每天在家。", "ok": true, "perche": "Il tempo (每天) e il luogo vanno prima del verbo: 我每天在家吃饭." },
      { "t": "明天我去北京。", "ok": false, "perche": "È corretta: il tempo può aprire la frase." },
      { "t": "我昨天去了北京。", "ok": false, "perche": "È corretta: il tempo sta dopo il soggetto, prima del verbo." }
    ] },
    { "k": "buco", "zh": "我＿去北京。", "tr": "Domani vado a Pechino.", "opzioni": [
      { "t": "明天", "ok": true, "perche": "Il momento va prima del verbo 去." },
      { "t": "昨天", "ok": false, "perche": "昨天 vuol dire «ieri»: il senso della traduzione è «domani»." },
      { "t": "每天", "ok": false, "perche": "每天 vuol dire «ogni giorno», non «domani»." }
    ] },
    { "k": "buco", "zh": "他睡了八＿。", "tr": "Ha dormito otto ore.", "opzioni": [
      { "t": "个小时", "ok": true, "perche": "Una durata si misura dopo il verbo: 八个小时." },
      { "t": "点", "ok": false, "perche": "点 indica un'ora sull'orologio (八点), non una durata." },
      { "t": "号", "ok": false, "perche": "号 indica il giorno del mese." }
    ] },
    { "k": "ordine", "t": "我们明天下午三点开会", "tr": "Domani pomeriggio alle tre abbiamo una riunione.", "alt": ["明天下午三点我们开会"] },
    { "k": "ordine", "t": "你什么时候下班", "tr": "Quando stacchi dal lavoro?" },
    { "k": "ordine", "t": "我们明天在公司开会", "tr": "Domani abbiamo una riunione in ufficio.", "alt": ["明天我们在公司开会"] },
    { "k": "trasforma", "base": "我去北京明天。", "consegna": "Correggi la frase: il momento va nel posto giusto.", "accetta": ["我明天去北京。", "明天我去北京。"], "rifiutate": [
      { "t": "我去明天北京。", "perche": "Il tempo si mette prima del verbo, non tra il verbo e il suo oggetto." }
    ], "perche": "Il momento si colloca prima del verbo, dopo il soggetto o in apertura." },
    { "k": "trasforma", "base": "我明天去学校。", "consegna": "Dì che domani non vai a scuola.", "accetta": ["我明天不去学校。", "明天我不去学校。"], "rifiutate": [
      { "t": "我不明天去学校。", "perche": "La negazione sta subito davanti al verbo, dopo il tempo." }
    ], "perche": "Soggetto + tempo + 不 + verbo: la negazione si avvicina al verbo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ogni giorno bevo una tazza di tè.»", "a": "我每天喝一杯茶。", "accetta": ["每天我喝一杯茶。", "我每天都喝一杯茶。", "每天我都喝一杯茶。", "我每天喝一杯茶"], "perche": "每天 precede il verbo 喝; una tazza (一杯) segue il verbo." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Domani alle tre andiamo al parco.»", "a": "我们明天三点去公园。", "accetta": ["明天三点我们去公园。", "明天我们三点去公园。", "我们明天下午三点去公园。", "明天下午三点我们去公园。"], "perche": "Chi + quando (dal grande al piccolo) + verbo + luogo." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你什么时候去上海？" },
      { "chi": "B", "t": "我＿去。", "buco": true }
    ], "opzioni": [
      { "t": "下个月", "ok": true, "perche": "Risponde a «quando» ed è un momento: va prima del verbo." },
      { "t": "三个月", "ok": false, "perche": "三个月 è una durata («tre mesi»), non un momento." },
      { "t": "在家", "ok": false, "perche": "在家 risponde a «dove», non a «quando»." }
    ] }
  ],
  "capaci": [
    "Sai collocare il momento prima del verbo, dopo il soggetto o all'inizio della frase.",
    "Sai ordinare più parole di tempo dal grande al piccolo (明天下午三点) e metterle prima del luogo.",
    "Sai distinguere un momento (prima del verbo) da una durata (dopo il verbo).",
    "Sai fare e capire domande con 什么时候 e 几点, e frasi con 的时候 e 以后."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Time words and word order»: il tempo prima del soggetto o subito dopo, sempre prima del verbo; in fondo alla frase suona innaturale",
    "Chinese Grammar Wiki (AllSet Learning), «Expressing duration with le»: verbo + 了 + durata, la durata segue il verbo",
    "Tatoeba (cinese), corpus locale cmn.tsv: 你什么时候…, 他在這裏已經住了兩年了嗎, per la posizione di 什么时候 e il doppio 了 della durata in corso",
    "CC-CEDICT, voci 时候, 以后, 点, per significati e usi"
  ]
};
