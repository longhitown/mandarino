/* Lezione 35 · Quanto tempo: la durata (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["shiliang"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "他昨天睡了八个小时。", "tr": "Ieri ha dormito otto ore." },
      { "t": "我学中文学了两年了。", "tr": "Sono due anni che studio cinese." },
      { "t": "我等了她半个小时。", "tr": "Ho aspettato lei mezz'ora." },
      { "t": "我两天没睡觉了。", "tr": "Sono due giorni che non dormo." }
    ],
    "domanda": "Dove sta l'indicazione di tempo (八个小时, 两年, 半个小时, 两天) rispetto al verbo? Che cosa cambia di posto nella terza frase, dove c'è una persona? E che differenza c'è tra le frasi 2 e 4 da una parte e la frase 1 dall'altra?",
    "risposta": "Nelle frasi 1, 2 e 3 la durata viene **dopo** il verbo (睡了八个小时, 学了两年, 等了她半个小时). Nella frase 3 il pronome 她 si mette **tra** il verbo e la durata. Nella frase 4 la durata viene **prima** di 没, perché si dice da quanto tempo qualcosa **non** accade. Le frasi 2 e 4 finiscono con 了 e dicono «fino a ora, ancora adesso»; la frase 1 non ha un secondo 了, parla di ieri ed è un periodo chiuso."
  },
  "regola": {
    "enunciato": "In cinese la durata è una **quantità del verbo** e sta **dopo il verbo**: verbo + 了 + durata. Se c'è un oggetto, o si ripete il verbo (学中文学了两年) o si mette la durata prima dell'oggetto (学了两年中文). Un secondo 了 in fondo dice che il periodo continua fino a ora. Con 没 la durata viene prima: 两天没睡觉了.",
    "schema": ["chi", "verbo", "了", "durata", "(oggetto)", "(了)"],
    "punti": [
      { "ok": true, "t": "**Senza oggetto**: verbo + 了 + durata. 我们走了二十分钟。 雨下了一天。 Le unità di tempo: 分钟, 个小时 (anche 小时), 天, 个星期, 个月, 年. Davanti a 天, 年 e 分钟 non c'è 个." },
      { "ok": true, "t": "**Con un oggetto** ci sono tre costruzioni: 我学中文学了两年 (il verbo si ripete), 我学了两年中文 (la durata prima dell'oggetto) e 我学了两年的中文 (con 的, che mette in rilievo la lunghezza). La prima è molto comune nel parlato." },
      { "ok": true, "t": "**Con un pronome o una persona** il pronome sta tra il verbo e la durata: 我等了她半个小时, 我找了你一个晚上. Anche con la ripetizione del verbo: 我等她等了半个小时." },
      { "ok": true, "t": "**Il secondo 了** in fondo alla frase dice che il periodo non è finito: 我学中文学了两年了 (e continuo). Senza il secondo 了, soprattutto con una parola di tempo come 昨天 o 去年, il periodo è concluso: 去年我在上海住了两年." },
      { "ok": true, "t": "**Negazione**: la durata viene prima di 没 e di solito il 了 finale chiude la frase: 我两天没睡觉了, 他好几年没回家了. Si dice da quanto tempo manca l'azione; 已经 può rinforzare." },
      { "ok": true, "t": "**Domande**: 多长时间 o, più colloquiale, 多久. 你等了多久了？ 他睡了多长时间？ Con numeri piccoli, che si aspettano sotto la decina, si dice anche 几: 你睡了几个小时？" },
      { "ok": true, "t": "**Abitudini e piani** non hanno 了, ma la durata resta dopo il verbo: 我每天学一个小时中文。 周末我想睡十个小时。" },
      { "ok": false, "t": "**La durata non sta davanti al verbo** (tranne con 没) e non sta dopo l'oggetto: 我三年学中文 e 我学了中文三年 non sono la forma normale. Il **momento** (昨天, 三点, 明年) invece sta prima del verbo: 我明天学三个小时." }
    ]
  },
  "logica": [
    "L'italiano ha il «da»: «studio cinese **da** due anni» è un verbo al presente, e la durata è un complemento. Il cinese pensa il contrario: la durata è una **quantità dell'azione**, come «tre» in «ho comprato tre libri». Per questo segue il verbo, come ogni quantità (lo stesso 了 che chiude un'azione con una quantità, vedi la lezione sul 了). E per lo stesso motivo il pronome si infila prima, come fa ogni oggetto breve, e il nome lungo (中文) si lascia dopo oppure si affida a una ripetizione del verbo.",
    "Il secondo 了 traduce il «da» italiano: 学了两年 è un periodo di due anni, 学了两年了 è «e siamo ancora lì, a questo punto». Con 没 la logica si rovescia: «non dormire» non è un'azione che si misuri con un verbo, è una situazione che dura; quindi la durata apre il segmento (两天没睡觉) come una cornice di tempo, e 了 finale dice «ormai»."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Come lo costruisci", "Esempio"],
    "righe": [
      ["Un periodo concluso, senza oggetto", "V + 了 + durata", "我们走了二十分钟。"],
      ["Periodo concluso, con oggetto", "V + 了 + durata + oggetto", "我学了两年中文。"],
      ["Lo stesso, con ripetizione del verbo", "V + oggetto + V + 了 + durata", "我学中文学了两年。"],
      ["Con un pronome", "V + 了 + pronome + durata", "我等了她半个小时。"],
      ["Un periodo che continua ancora", "…durata + 了 (secondo)", "我学中文学了两年了。"],
      ["Da quanto tempo non", "durata + 没 + V + 了", "我两天没睡觉了。"],
      ["Un'abitudine o un piano", "V + durata, senza 了", "我每天学一个小时中文。"],
      ["Quanto tempo?", "V + 了 + 多长时间 (+了)", "你等了多久了？"]
    ]
  },
  "esempi": [
    { "gruppo": "Senza oggetto: verbo + 了 + durata", "items": [
      { "t": "雨下了一天。", "tr": "Ha piovuto tutto il giorno." },
      { "t": "我们走了二十分钟。", "tr": "Abbiamo camminato venti minuti.", "nota": "Davanti a 分钟 non c'è 个." },
      { "t": "去年我在上海住了两年。", "tr": "L'anno scorso ho abitato a Shanghai per due anni.", "nota": "Con una parola di tempo passata e senza secondo 了 il periodo è chiuso." }
    ] },
    { "gruppo": "Con un oggetto: ripetizione, durata prima, 的", "items": [
      { "t": "我学中文学了两年。", "tr": "Ho studiato cinese per due anni." },
      { "t": "他打了半个小时电话。", "tr": "Ha telefonato per mezz'ora.", "nota": "Qui la durata sta prima dell'oggetto 电话." },
      { "t": "奶奶看了一下午的电视。", "tr": "La nonna ha guardato la tv tutto il pomeriggio.", "nota": "的 mette in rilievo la lunghezza." }
    ] },
    { "gruppo": "Con un pronome: viene prima della durata", "items": [
      { "t": "我等了你一个小时。", "tr": "Ti ho aspettato un'ora." },
      { "t": "我等他等了半个小时。", "tr": "Ho aspettato lui mezz'ora.", "nota": "Con la ripetizione del verbo il pronome segue il primo verbo." }
    ] },
    { "gruppo": "Fino a ora: il secondo 了", "items": [
      { "t": "他在这儿工作了五年了。", "tr": "Sono cinque anni che lavora qui.", "nota": "Lavora ancora qui." },
      { "t": "我们已经等了半个小时了。", "tr": "Ormai aspettiamo da mezz'ora." },
      { "t": "你学中文学了多久了？", "tr": "Da quanto tempo studi cinese?" }
    ] },
    { "gruppo": "Da quanto tempo non: la durata prima di 没", "items": [
      { "t": "我两天没睡觉了。", "tr": "Sono due giorni che non dormo." },
      { "t": "他好几年没回家了。", "tr": "Sono parecchi anni che non torna a casa." },
      { "t": "我们很久没见面了。", "tr": "È da molto che non ci vediamo." }
    ] },
    { "gruppo": "Abitudini e piani: durata senza 了", "items": [
      { "t": "我每天学一个小时中文。", "tr": "Ogni giorno studio un'ora di cinese." },
      { "t": "周末我想睡十个小时。", "tr": "Nel fine settimana voglio dormire dieci ore." }
    ] }
  ],
  "contrasti": [
    { "q": "L'anno scorso hai lasciato l'ufficio in cui sei stato tre anni. Come lo racconti?", "opzioni": [
      { "t": "我在那个公司工作了三年。", "ok": true, "perche": "Il periodo è chiuso: un solo 了 dopo il verbo, nessun «fino a ora»." },
      { "t": "我在那个公司工作了三年了。", "ok": false, "perche": "Il secondo 了 dice che il periodo continua: in questo contesto direbbe che lavori ancora lì." }
    ] },
    { "q": "Dici che hai studiato cinese per due anni. Quale frase è corretta?", "opzioni": [
      { "t": "我学中文学了两年。", "ok": true, "perche": "Con un oggetto il verbo si ripete e la durata sta dopo il secondo verbo." },
      { "t": "我学了中文两年。", "ok": false, "perche": "La durata non può seguire l'oggetto; deve venire prima (学了两年中文) o dopo il verbo ripetuto." }
    ] },
    { "q": "Dici a un amico: «Ti ho aspettato mezz'ora».", "opzioni": [
      { "t": "我等了你半个小时。", "ok": true, "perche": "Il pronome sta tra il verbo e la durata." },
      { "t": "我等了半个小时你。", "ok": false, "perche": "Un pronome non va dopo la durata: viene subito dopo il verbo." }
    ] },
    { "q": "Dici: «Sono due giorni che non dormo».", "opzioni": [
      { "t": "我两天没睡觉了。", "ok": true, "perche": "Con 没 la durata apre la frase e 了 finale dice «ormai»." },
      { "t": "我没睡觉两天了。", "ok": false, "perche": "La durata non sta dopo 没 più il verbo: si dice da quanto tempo manca l'azione, quindi viene prima." }
    ] },
    { "q": "Descrivi la tua abitudine: «Ogni giorno studio un'ora di cinese».", "opzioni": [
      { "t": "我每天学一个小时中文。", "ok": true, "perche": "Un'abitudine non è un fatto chiuso: la durata resta dopo il verbo e non c'è 了." },
      { "t": "我每天学了一个小时中文。", "ok": false, "perche": "了 chiude un fatto singolo; qui parli di una ripetizione abituale." }
    ] },
    { "q": "Vuoi sapere per quanto tempo ha dormito il tuo amico.", "opzioni": [
      { "t": "他睡了多长时间？", "ok": true, "perche": "多长时间 chiede la durata e viene dopo il verbo con 了." },
      { "t": "他什么时候睡了？", "ok": false, "perche": "什么时候 chiede il momento («quando»), non la durata." }
    ] },
    { "q": "Racconti: «Ieri ho dormito un'ora e mezza».", "opzioni": [
      { "t": "昨天我睡了一个半小时。", "ok": true, "perche": "半 sta dopo il numero e il classificatore: 一个半小时, «un'ora e mezza»." },
      { "t": "昨天我睡了一个小时半。", "ok": false, "perche": "半 non si mette dopo 小时 in questo modo: la forma regolare è 一个半小时." }
    ] },
    { "q": "Chiedi a un amico, ancora in attesa, da quanto aspetta.", "opzioni": [
      { "t": "你等了多久了？", "ok": true, "perche": "Il secondo 了 dice che l'attesa continua; 多久 chiede la durata." },
      { "t": "你多久等了？", "ok": false, "perche": "Una durata non sta davanti al verbo (tranne con 没): serve 等了多久." }
    ] }
  ],
  "dialogo": {
    "titolo": "Un amico in ritardo",
    "righe": [
      { "chi": "A", "t": "你怎么才来？我等了你半个小时了。", "tr": "Come mai arrivi solo adesso? Ti aspetto da mezz'ora." },
      { "chi": "B", "t": "对不起，路上车太多，我坐了一个半小时的车。", "tr": "Scusa, c'era troppo traffico, sono stato in macchina un'ora e mezza." },
      { "chi": "A", "t": "一个半小时？平时不是二十分钟就到吗？", "tr": "Un'ora e mezza? Di solito non ci metti venti minuti?" },
      { "chi": "B", "t": "对，所以我也没想到。你等了多久了？", "tr": "Sì, non me lo aspettavo nemmeno io. Da quanto aspetti?" },
      { "chi": "A", "t": "半个小时了，我都喝了两杯咖啡了。", "tr": "Mezz'ora ormai, ho già bevuto due caffè." },
      { "chi": "B", "t": "那今天我请你吃饭吧。", "tr": "Allora oggi ti offro io il pranzo." }
    ],
    "esercizi": [
      { "q": "Che cosa aggiunge il secondo 了 in 我等了你半个小时了?", "opzioni": [
        { "t": "A sta ancora aspettando, ormai da mezz'ora.", "ok": true, "perche": "Il secondo 了 collega il periodo al presente." },
        { "t": "A ha aspettato mezz'ora ma ora ha smesso.", "ok": false, "perche": "Per un periodo chiuso basterebbe un solo 了." },
        { "t": "A non ha aspettato.", "ok": false, "perche": "La negazione richiederebbe 没." }
      ] },
      { "q": "Quanto è durato il viaggio in macchina di B?", "opzioni": [
        { "t": "Un'ora e mezza.", "ok": true, "perche": "一个半小时 vuol dire 90 minuti." },
        { "t": "Venti minuti.", "ok": false, "perche": "Venti minuti è il tempo che serve di solito, non oggi." },
        { "t": "Mezz'ora.", "ok": false, "perche": "Mezz'ora è l'attesa di A, non il viaggio di B." }
      ] },
      { "q": "Perché in 你等了多久了 la durata 多久 sta dopo il verbo?", "opzioni": [
        { "t": "Perché la durata è una quantità del verbo e segue il verbo.", "ok": true, "perche": "È la regola generale della lezione, valida anche nelle domande." },
        { "t": "Perché è una domanda sul momento.", "ok": false, "perche": "Il momento si chiede con 什么时候 e sta prima del verbo." },
        { "t": "Perché c'è un pronome.", "ok": false, "perche": "Nella frase non c'è nessun pronome oggetto." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette la durata dove la mette l'italiano: davanti al verbo («da due anni studio» → 我两年学中文), dopo l'oggetto («studio cinese due anni» → 我学中文两年), dopo il pronome oggetto («aspetto lui mezz'ora») o dopo 没 («non dormo due giorni»).",
    "perche": "In italiano «due anni» è un complemento libero che può stare in molti punti, e il presente con «da» dice la continuità. In cinese la durata è legata al verbo come una quantità, e la continuità la dice un secondo 了, non il presente.",
    "esci": "Parti dal verbo e attacca la durata subito dopo (con 了). Se c'è un oggetto lungo, ripeti il verbo; se c'è un pronome, mettilo davanti alla durata. Se vuoi dire «da quanto non», porta la durata prima di 没 e chiudi con 了.",
    "esempi": [
      { "sbagliata": "我两年学中文。", "giusta": "我学中文学了两年。" },
      { "sbagliata": "我学三年了中文。", "giusta": "我学了三年中文。" },
      { "sbagliata": "我等了半个小时她。", "giusta": "我等了她半个小时。" },
      { "sbagliata": "我没睡觉两天了。", "giusta": "我两天没睡觉了。" }
    ]
  },
  "curiosi": [
    { "titolo": "个 sì, 个 no", "t": "Le unità di tempo si comportano in modo diverso. **年**, **天**, **分钟** e **秒** si contano senza classificatore (两年, 三天, 五分钟). **月** e **星期** chiedono 个 (三个月, 两个星期). **小时** si usa con o senza 个 (两个小时, 两小时)." },
    { "titolo": "Un'ora e mezza e tre anni e mezzo", "t": "Con unità che hanno il classificatore, 半 sta in mezzo: 一个半小时, 一个半月. Con unità senza classificatore, 半 sta in fondo: 三年半, 两天半. In ogni caso, 半 non si mette davanti al numero. Nel parlato, 半天 vuol dire anche «un bel po' di tempo»: 我等了半天 («ho aspettato un pezzo»)." },
    { "titolo": "多久 e 多长时间", "t": "I due si usano allo stesso modo. 多久 è più breve e colloquiale (è il 久 di 好久不见); 多长时间 è un poco più formale. Con il 了 doppio, la domanda chiede «da quanto tempo, fino a ora»: 你学了多久了？ Senza il secondo 了 la domanda guarda un periodo concluso: 你昨天睡了多久？" },
    { "titolo": "Il 的 della durata", "t": "Tra la durata e l'oggetto può comparire 的: 看了一下午的电视, 坐了十五个小时的飞机. Non cambia la grammatica; dà risalto alla lunghezza, come «ben» in «ho guardato la tv ben tutto il pomeriggio». Con 的 non si ripete il verbo." }
  ],
  "pragmatica": "La durata è anche una nota di atteggiamento. 都 e 已经 lamentano: 我都等了一个小时了 («è già un'ora che aspetto!»). 才 minimizza: 我才等了五分钟 («ho aspettato solo cinque minuti»). In una risposta breve basta la durata: 等了多久？ — 半个小时。 Dopo un lungo intervallo si dice 好久不见 o 我们很久没见面了.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我们走了二十分钟。", "opzioni": [
      { "t": "Abbiamo camminato venti minuti.", "ok": true, "perche": "走了 + 二十分钟: un periodo di venti minuti." },
      { "t": "Camminiamo tra venti minuti.", "ok": false, "perche": "Il momento futuro starebbe prima del verbo." },
      { "t": "Non abbiamo camminato per venti minuti.", "ok": false, "perche": "La negazione richiederebbe 没." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他在这儿工作了五年了。", "opzioni": [
      { "t": "Sono cinque anni che lavora qui, e continua.", "ok": true, "perche": "Il secondo 了 collega i cinque anni al presente." },
      { "t": "Ha lavorato qui cinque anni, poi ha smesso.", "ok": false, "perche": "Per un periodo chiuso basta un solo 了 (工作了五年)." },
      { "t": "Lavorerà qui cinque anni.", "ok": false, "perche": "Il futuro non ha 了 e avrebbe 会 o 要." }
    ] },
    { "k": "buco", "zh": "我们看了两个＿电视。", "tr": "Abbiamo guardato la tv per due ore.", "opzioni": [
      { "t": "小时", "ok": true, "perche": "小时 è l'unità per le ore (个小时 con classificatore)." },
      { "t": "点", "ok": false, "perche": "点 indica l'ora sull'orologio (三点), non una durata." },
      { "t": "号", "ok": false, "perche": "号 è il giorno del mese." }
    ] },
    { "k": "buco", "zh": "我两天＿睡觉了。", "tr": "Sono due giorni che non dormo.", "opzioni": [
      { "t": "没", "ok": true, "perche": "没 nega l'azione per tutto il periodo." },
      { "t": "不", "ok": false, "perche": "不 nega una scelta o un'abitudine, non un fatto assente da due giorni." },
      { "t": "别", "ok": false, "perche": "别 è un divieto («non fare»), non una negazione di durata." }
    ] },
    { "k": "ordine", "t": "我学中文学了两年", "tr": "Ho studiato cinese per due anni.", "alt": ["我学了两年中文"] },
    { "k": "ordine", "t": "我等了你半个小时", "tr": "Ti ho aspettato mezz'ora." },
    { "k": "trasforma", "base": "我学了两年中文。", "consegna": "Riscrivi la frase ripetendo il verbo, senza cambiare il senso.", "accetta": ["我学中文学了两年。"], "rifiutate": [
      { "t": "我学了中文两年。", "perche": "La durata non può seguire l'oggetto." }
    ], "perche": "Con la ripetizione del verbo, la durata segue il secondo verbo e l'oggetto viene dopo il primo." },
    { "k": "trasforma", "base": "我在这儿住了三年。", "consegna": "Dì che abiti ancora qui: aggiungi quello che serve.", "accetta": ["我在这儿住了三年了。", "我在这里住了三年了。"], "rifiutate": [
      { "t": "我在这儿三年住了。", "perche": "La durata non sta davanti al verbo." }
    ], "perche": "Il secondo 了 in fondo dice che il periodo continua fino a ora." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Sono tre giorni che non mangio.»", "a": "我三天没吃饭了。", "accetta": ["我已经三天没吃饭了。"], "perche": "Con 没 la durata (三天) sta prima e 了 chiude la frase." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ieri ho aspettato un'ora.»", "a": "昨天我等了一个小时。", "accetta": ["我昨天等了一个小时。", "我昨天等了一小时。", "昨天我等了一小时。"], "perche": "Il momento (昨天) sta prima, la durata dopo 等了; nessun secondo 了, perché il periodo è chiuso." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你学中文学了多久了？" },
      { "chi": "B", "t": "我学＿两年了。", "buco": true }
    ], "opzioni": [
      { "t": "了", "ok": true, "perche": "学了两年了: il primo 了 segue il verbo, il secondo chiude la frase." },
      { "t": "过", "ok": false, "perche": "过 racconta un'esperienza, non una durata che continua." },
      { "t": "着", "ok": false, "perche": "着 descrive uno stato, non conta gli anni." }
    ] },
    { "k": "scegli", "q": "In quale frase la durata è al posto giusto?", "opzioni": [
      { "t": "他好几年没回家了。", "ok": true, "perche": "Con 没 la durata viene prima." },
      { "t": "他没回家好几年了。", "ok": false, "perche": "La durata dopo 没 + verbo non si usa." },
      { "t": "他好几年回家了。", "ok": false, "perche": "Manca 没: senza negazione la frase non dice che è da anni che non torna." }
    ] }
  ],
  "capaci": [
    "Sai dire per quanto tempo hai fatto qualcosa, mettendo la durata dopo il verbo (e dopo il pronome).",
    "Sai scegliere tra la ripetizione del verbo e la durata prima dell'oggetto quando c'è un oggetto.",
    "Sai distinguere un periodo chiuso (un solo 了) da uno che continua (secondo 了).",
    "Sai dire da quanto tempo non fai qualcosa con la durata prima di 没, e chiedere 多久 o 多长时间."
  ],
  "glosse": {
    "睡了八个小时": "Ha dormito otto ore",
    "等了她半个小时": "Ho aspettato lei mezz'ora",
    "学中文学了两年": "Ho studiato cinese per due anni",
    "学了两年中文": "Ho studiato cinese per due anni",
    "两天没睡觉了": "Sono due giorni che non dorme",
    "我学了两年中文": "Ho studiato cinese per due anni",
    "我学了两年的中文": "Ho studiato cinese per due anni",
    "我找了你一个晚上": "Ti ho cercato per una sera intera",
    "我等她等了半个小时": "Ho aspettato lei mezz'ora",
    "你等了多久了": "Da quanto tempo aspetti?",
    "他睡了多长时间": "Quanto tempo ha dormito?",
    "你睡了几个小时": "Quante ore hai dormito?",
    "我三年学中文": "!Studio cinese per tre anni (ordine sbagliato)",
    "我学了中文三年": "Ho studiato cinese per tre anni",
    "我明天学三个小时": "Domani studio tre ore",
    "学了两年了": "Ho studiato per due anni",
    "两天没睡觉": "Sono due giorni che non dorme",
    "我学中文两年": "Studio cinese da due anni",
    "一个半小时": "Un'ora e mezza",
    "你学了多久了": "Da quanto tempo studi?",
    "你昨天睡了多久": "Quanto hai dormito ieri?",
    "看了一下午的电视": "Ha guardato la TV tutto il pomeriggio",
    "坐了十五个小时的飞机": "Ha viaggiato quindici ore in aereo"
  },
  "fonti": [
    "CC-CEDICT, voci 多久, 半天, 久, 一直, consultate nel dizionario locale",
    "Tatoeba (cinese, es. 我学英语学了4年了, 我已经三天没睡过了！, 我几个月没见过他了), consultato nei corpora locali"
  ]
};
