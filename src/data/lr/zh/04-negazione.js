/* Lezione 4 · Dire di no: 不 e 没 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["negazione"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我不喝咖啡。", "tr": "Non bevo caffè." },
      { "t": "我没有钱。", "tr": "Non ho soldi." },
      { "t": "他昨天没来。", "tr": "Ieri non è venuto." },
      { "t": "我不是老师。", "tr": "Non sono insegnante." }
    ],
    "domanda": "In italiano si dice sempre «non». Qui ci sono due parole diverse: 不 e 没. Prova a capire quando compare l'una e quando l'altra. In quali frasi c'è un verbo «avere» o un fatto accaduto (o non accaduto) ieri?",
    "risposta": "**没** compare con **有** (没有钱: «non c'è / non ho») e con un fatto di ieri che **non è avvenuto** (他昨天没来). **不** compare con tutto il resto: un'abitudine o un gusto (我不喝咖啡), il verbo «essere» (我不是老师). Non conta il tempo del verbo, conta che cosa neghi: «non è così, non lo faccio» (不) oppure «non c'è, non è successo» (没)."
  },
  "regola": {
    "enunciato": "In cinese esistono due negazioni. **不** nega ciò che è abitudine, qualità, volontà, futuro o identità («non è così, non lo faccio»). **没(有)** nega il fatto: «non c'è» (没有) e «non è accaduto» (没 + verbo, senza 了).",
    "schema": ["soggetto", "不 | 没(有)", "verbo / aggettivo", "(oggetto)"],
    "punti": [
      { "ok": true, "t": "**不 + verbo o aggettivo** per abitudini, gusti, presente e futuro: 我不喝咖啡, 他不忙, 明天我不去, 我不知道." },
      { "ok": true, "t": "**不 + 是** per «non essere» (identità): 我不是老师, 这不是我的书. Con i verbi modali serve ancora 不: 我不会游泳, 我不想去." },
      { "ok": true, "t": "**没有** nega 有: 我没有钱 («non ho soldi»), 家里没有人. Nel parlato 有 si può omettere: 我没钱. Mai 不有." },
      { "ok": true, "t": "**没 + verbo** nega un fatto che non è accaduto, senza 了: 我没吃饭, 他今天没来. Si può dire anche 没有 + verbo (我没有吃饭): è più marcato e frequente nelle risposte." },
      { "ok": true, "t": "**还没 + verbo** per «non ancora»: 我还没吃饭. **没 + verbo + 过** per «mai»: 我没去过中国." },
      { "ok": true, "t": "**Risposte brevi**: si ripete il verbo negato. 你去吗？ — 不去。 你吃了吗？ — 没吃 / 没有。 Di solito non si risponde con un «no» separato: si risponde con 不 o 没(有), seguiti o no dal verbo." },
      { "ok": false, "t": "**Il passato da solo non decide**: abitudini, qualità e volontà del passato restano con 不 (以前我不喝咖啡, 昨天我不忙). Nei fatti accaduti non si usa 不 per negare: 我昨天不去 vuol dire «ieri non volevo andare / non sono andato per scelta», non «non ci sono andato»." },
      { "ok": false, "t": "**Con 没 non si mette 了** dopo il verbo: 我没吃了饭 non esiste. Il 了 di fatto compiuto e 没 si escludono." }
    ]
  },
  "logica": [
    "L'italiano nega seguendo il tempo del verbo: «non vado» e «non sono andato» sono due forme diverse della stessa frase negativa. Il cinese tiene lo stesso verbo e cambia la parola di negazione, perché guarda un'altra cosa: **不 nega un'affermazione** («non è così, non voglio, non lo faccio mai»), **没 nega un fatto** («non c'è stato»). 没 viene da 没有, la negazione di 有: 我没去 è, in fondo, «non c'è stato un mio andare». Ecco perché 没 non va d'accordo con 了 e perché basta una parola come 昨天 o 还 a far comparire 没.",
    "Un test pratico: prova a sostituire la frase con «non c'è stato…» o «non ho (ancora) …». Se la sostituzione regge, usa 没: 他昨天没来 = «ieri non c'è stato un suo arrivo». Altrimenti usa 不: 他不喝咖啡 non vuol dire «non c'è stato il suo bere caffè», ma «non è uno che beve caffè». È per questo che abitudini passate, qualità, volontà e identità, anche riferite a ieri, restano con 不."
  ],
  "mappa": {
    "tipo": "albero",
    "inizio": "q0",
    "nodi": {
      "q0": {
        "q": "Vuoi dire che qualcosa non c'è oppure che non si ha (come in «non ho soldi», «non c'è nessuno»)?",
        "risposte": [
          { "t": "Sì: non ho, non c'è.", "vai": "fyou" },
          { "t": "No: è un'altra cosa.", "vai": "q1" }
        ]
      },
      "q1": {
        "q": "Vuoi dire che un fatto preciso non è accaduto («ieri non sono venuto», «non ho ancora mangiato», «non sono mai stato in Cina»)?",
        "risposte": [
          { "t": "Sì: un fatto che non c'è stato.", "vai": "fmei" },
          { "t": "No: un'abitudine, un gusto, un rifiuto, il futuro, «non è» (identità o qualità).", "vai": "fbu" }
        ]
      },
      "fyou": { "fine": "Usa **没有**: 我没有钱, 家里没有人. Nel parlato anche 我没钱. Non si dice 不有." },
      "fmei": { "fine": "Usa **没 + verbo** (senza 了): 他昨天没来, 我没吃饭. Per «non ancora» 还没, per «mai» 没…过: 我还没吃饭, 我没去过中国." },
      "fbu": { "fine": "Usa **不**: 我不喝咖啡 (abitudine o gusto), 明天我不去 (futuro), 我不是老师 (identità), 今天不冷 (qualità), 我不想去 (volontà)." }
    }
  },
  "esempi": [
    { "gruppo": "不: abitudini, gusti, presente", "items": [
      { "t": "我不喝咖啡。", "tr": "Non bevo caffè." },
      { "t": "他不忙。", "tr": "Lui non è impegnato." },
      { "t": "我不知道。", "tr": "Non lo so." }
    ] },
    { "gruppo": "不: futuro, volontà, capacità", "items": [
      { "t": "明天我不去。", "tr": "Domani non vado." },
      { "t": "我不想吃肉。", "tr": "Non ho voglia di mangiare carne." },
      { "t": "我不会游泳。", "tr": "Non so nuotare." }
    ] },
    { "gruppo": "不是: identità", "items": [
      { "t": "我不是老师。", "tr": "Non sono insegnante." },
      { "t": "这不是我的书。", "tr": "Questo non è il mio libro." }
    ] },
    { "gruppo": "没有: non avere, non esserci", "items": [
      { "t": "我没有钱。", "tr": "Non ho soldi." },
      { "t": "他没有手机。", "tr": "Lui non ha il cellulare." },
      { "t": "家里没有人。", "tr": "A casa non c'è nessuno." }
    ] },
    { "gruppo": "没: un fatto che non è accaduto", "items": [
      { "t": "我没吃饭。", "tr": "Non ho mangiato." },
      { "t": "他今天没来。", "tr": "Oggi lui non è venuto." },
      { "t": "我还没吃饭。", "tr": "Non ho ancora mangiato.", "nota": "还没: «non ancora», ma a breve." },
      { "t": "我没去过中国。", "tr": "Non sono mai stato in Cina.", "nota": "没 … 过 nega l'esperienza." }
    ] }
  ],
  "contrasti": [
    { "q": "Ieri dovevi venire e non sei venuto. Come lo dici?", "opzioni": [
      { "t": "我昨天没来。", "ok": true, "perche": "È un fatto che non è accaduto: 没 + verbo, senza 了." },
      { "t": "我昨天不来。", "ok": false, "perche": "不 qui sarebbe un rifiuto («ieri non volevo venire»), non la constatazione che non è successo." }
    ] },
    { "q": "Dici che domani non vai (un programma, una decisione).", "opzioni": [
      { "t": "明天我不去。", "ok": true, "perche": "Il futuro si nega con 不: dici ciò che non farai." },
      { "t": "明天我没去。", "ok": false, "perche": "没 nega un fatto accaduto e non può riguardare il futuro." }
    ] },
    { "q": "Racconti la tua abitudine: «Non bevo caffè».", "opzioni": [
      { "t": "我不喝咖啡。", "ok": true, "perche": "Un'abitudine non è un fatto: si nega con 不." },
      { "t": "我没喝咖啡。", "ok": false, "perche": "没喝 vuol dire «non ho bevuto» (una volta): non descrive un'abitudine." }
    ] },
    { "q": "Dici che non hai soldi.", "opzioni": [
      { "t": "我没有钱。", "ok": true, "perche": "有 si nega solo con 没: 没有." },
      { "t": "我不有钱。", "ok": false, "perche": "不 non può stare davanti a 有: è l'errore classico di chi pensa «non» = 不." }
    ] },
    { "q": "Dici che non sei insegnante.", "opzioni": [
      { "t": "我不是老师。", "ok": true, "perche": "是 si nega con 不: l'identità non è un fatto avvenuto." },
      { "t": "我没是老师。", "ok": false, "perche": "没 non si usa davanti a 是." }
    ] },
    { "q": "Da giovane non bevevi caffè. Come lo racconti?", "opzioni": [
      { "t": "以前我不喝咖啡。", "ok": true, "perche": "Un'abitudine del passato si nega con 不; il passato lo dice 以前." },
      { "t": "以前我没喝咖啡。", "ok": false, "perche": "没喝 nega un fatto singolo; non descrive un'abitudine che durava." }
    ] },
    { "q": "Sono le tre e dici che non hai ancora mangiato.", "opzioni": [
      { "t": "我还没吃饭。", "ok": true, "perche": "还没 significa «non ancora»: il fatto non è accaduto." },
      { "t": "我还不吃饭。", "ok": false, "perche": "还不 vuol dire «ancora non (voglio o devo)»: è una scelta, non un «non ancora»." }
    ] },
    { "q": "Un amico ti chiede 你吃饭了吗？ Non hai mangiato. Come rispondi con una sola parola?", "opzioni": [
      { "t": "没有。", "ok": true, "perche": "La domanda riguarda un fatto accaduto: la risposta negativa è 没有." },
      { "t": "不。", "ok": false, "perche": "Il solo 不 nega un'abitudine o un rifiuto: qui suonerebbe come «non mangio»." }
    ] }
  ],
  "dialogo": {
    "titolo": "Dove andiamo a cena?",
    "righe": [
      { "chi": "A", "t": "你吃饭了吗？", "tr": "Hai mangiato?" },
      { "chi": "B", "t": "没有。我今天太忙了，没吃午饭。", "tr": "No. Oggi sono stato troppo impegnato e non ho pranzato." },
      { "chi": "A", "t": "那我们去吃饭吧。你吃肉吗？", "tr": "Allora andiamo a mangiare. Mangi carne?" },
      { "chi": "B", "t": "我不吃肉，我吃鱼。", "tr": "Non mangio carne, mangio pesce." },
      { "chi": "A", "t": "好，我知道一个地方，那里的鱼很好吃。", "tr": "Bene, conosco un posto dove il pesce è buono." },
      { "chi": "B", "t": "太好了！我现在没有钱，但是明天有。", "tr": "Che bello! Ora non ho soldi, ma domani sì." }
    ],
    "esercizi": [
      { "q": "Perché B risponde 没有 alla domanda 你吃饭了吗?", "opzioni": [
        { "t": "Perché nega un fatto che non è accaduto (non ho mangiato).", "ok": true, "perche": "La domanda riguarda un pasto di oggi, già passato: la negazione giusta è 没(有)." },
        { "t": "Perché 没有 è sempre la forma educata.", "ok": false, "perche": "Non è una questione di educazione: con 不 la risposta cambierebbe senso." },
        { "t": "Perché il verbo è 有.", "ok": false, "perche": "Il verbo della domanda è 吃, non 有: 没有 qui è la risposta breve a un fatto." }
      ] },
      { "q": "Perché B dice 我不吃肉 e non 我没吃肉?", "opzioni": [
        { "t": "Perché descrive una scelta stabile, non un fatto singolo.", "ok": true, "perche": "Un gusto o un'abitudine si nega con 不." },
        { "t": "Perché il verbo è al futuro.", "ok": false, "perche": "La frase non parla del futuro: dice come B mangia di solito." },
        { "t": "Perché la frase è al passato.", "ok": false, "perche": "Il verbo è al presente abituale: e 没 sarebbe stato un passato." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano traduce «non» con 不 sempre (我不有钱, 我昨天不去) oppure sceglie 没 solo perché la frase è al passato, anche per un'abitudine. L'errore opposto è mettere 了 dopo 没 (我没吃了饭).",
    "perche": "In italiano il «non» è uno solo e il tempo del verbo cambia da solo. In cinese la scelta dipende da ciò che neghi: un fatto che non c'è stato (没), oppure un'abitudine, una qualità, una volontà (不). 没 viene da 没有 e mal sopporta 了, che marca invece un fatto accaduto.",
    "esci": "Prima di scrivere chiediti: sto negando 有, o un fatto che «non c'è stato»? Allora 没. Sto negando un'abitudine, un gusto, un rifiuto, una qualità, il futuro o 是? Allora 不. E dopo 没 non scrivere 了.",
    "esempi": [
      { "sbagliata": "我不有钱。", "giusta": "我没有钱。" },
      { "sbagliata": "我昨天不去。", "giusta": "我昨天没去。" },
      { "sbagliata": "我没吃了饭。", "giusta": "我没吃饭。" },
      { "sbagliata": "我不去过中国。", "giusta": "我没去过中国。" }
    ]
  },
  "curiosi": [
    { "titolo": "不 cambia tono: bù o bú", "t": "不 si pronuncia bù, ma davanti a una sillaba di quarto tono diventa bú: 不是 (bú shì), 不去 (bú qù), 不要 (bú yào). Davanti agli altri toni resta bù: 不喝, 不忙, 不好. Nelle forme come 好不好 il 不 in mezzo si pronuncia leggero. Il pinyin dell'app segue questa regola in automatico." },
    { "titolo": "没 è la forma breve di 没有", "t": "Nelle frasi con un verbo d'azione, 没 e 没有 sono la stessa cosa: 我没吃饭 = 我没有吃饭. 没有 si sente di più nelle risposte brevi (没有。) e nello scritto; 没 è il più comune quando segue un verbo nel parlato veloce. Al contrario 有 come verbo «avere» ammette 没 solo nella forma breve: 我没钱." },
    { "titolo": "都不 e 不都", "t": "Con 都 («tutti») l'ordine cambia il senso: 我们都不去 vuol dire «nessuno di noi va», mentre 我们不都去 vuol dire «non andiamo tutti» (qualcuno sì, qualcuno no)." },
    { "titolo": "Vietare: 别", "t": "Per un divieto o un consiglio negativo si usa 别 (o, più formale, 不要): 别去 «non andare», 别说了 «non dirlo più». Non è né 不 né 没, ma completa il quadro delle negazioni del cinese." }
  ],
  "pragmatica": "Un «no» in cinese si dice quasi sempre con il verbo: 你去吗？ — 不去。 Il solo 不 dà un tono secco, quasi brusco; si ammorbidisce con 不太 (不太想去 «non ho molta voglia») o con una spiegazione (不去，我很累). 没有 è la risposta normale a una domanda con 了 e anche a 你有…吗？. Nel parlato 没 + verbo è la forma più comune, e 没有 chiude la frase quando si risponde («Ha già mangiato?» — «没有。»).",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他今天没来。", "opzioni": [
      { "t": "Oggi lui non è venuto.", "ok": true, "perche": "没 + verbo: il fatto non è accaduto." },
      { "t": "Oggi lui non viene.", "ok": false, "perche": "Per il futuro o il rifiuto servirebbe 不: 他今天不来." },
      { "t": "Lui non viene mai.", "ok": false, "perche": "Un'abitudine si direbbe 他从来不来 o con 不 e una parola come 常常." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我不喝咖啡。", "opzioni": [
      { "t": "Non bevo caffè (di solito).", "ok": true, "perche": "不 + verbo: abitudine o gusto." },
      { "t": "Non ho bevuto caffè.", "ok": false, "perche": "Per un fatto non accaduto serve 没: 我没喝咖啡." },
      { "t": "Non c'è caffè.", "ok": false, "perche": "Per «non c'è» si direbbe 没有咖啡." }
    ] },
    { "k": "buco", "zh": "我＿有钱。", "tr": "Non ho soldi.", "opzioni": [
      { "t": "没", "ok": true, "perche": "Il verbo 有 («avere») si nega sempre con 没: 没有." },
      { "t": "不", "ok": false, "perche": "不 non si mette mai davanti a 有." },
      { "t": "别", "ok": false, "perche": "别 è un divieto («non fare»)." }
    ] },
    { "k": "buco", "zh": "他＿是老师。", "tr": "Lui non è insegnante.", "opzioni": [
      { "t": "不", "ok": true, "perche": "Il verbo 是 («essere») si nega con 不: 不是." },
      { "t": "没", "ok": false, "perche": "没 non si usa davanti a 是." },
      { "t": "别", "ok": false, "perche": "别 è un divieto, non una negazione dell'identità." }
    ] },
    { "k": "buco", "zh": "我还＿吃饭。", "tr": "Non ho ancora mangiato.", "opzioni": [
      { "t": "没", "ok": true, "perche": "还没 significa «non ancora»: il fatto non è accaduto." },
      { "t": "不", "ok": false, "perche": "还不 dice «ancora non (voglio o devo)»: una scelta, non un fatto." },
      { "t": "别", "ok": false, "perche": "别 è un divieto: 别吃饭 vuol dire «non mangiare»." }
    ] },
    { "k": "ordine", "t": "我今天没吃饭", "tr": "Oggi non ho mangiato." },
    { "k": "ordine", "t": "他不是我的老师", "tr": "Lui non è il mio insegnante." },
    { "k": "trasforma", "base": "我吃饭了。", "consegna": "Dì che non hai mangiato: nega la frase.", "accetta": ["我没吃饭。", "我没有吃饭。"], "rifiutate": [
      { "t": "我没吃了饭。", "perche": "Dopo 没 il 了 sparisce: nega il fatto, non lo chiude." }
    ], "perche": "Un fatto non accaduto si nega con 没 e il 了 cade." },
    { "k": "trasforma", "base": "我有手机。", "consegna": "Dì che non hai il cellulare.", "accetta": ["我没有手机。", "我没手机。"], "rifiutate": [
      { "t": "我不有手机。", "perche": "Il verbo 有 si nega solo con 没, mai con 不." }
    ], "perche": "有 si nega con 没(有): non esiste 不有." },
    { "k": "trasforma", "base": "明天我去北京。", "consegna": "Dì che domani non vai a Pechino.", "accetta": ["明天我不去北京。", "我明天不去北京。"], "rifiutate": [
      { "t": "明天我没去北京。", "perche": "没 nega un fatto accaduto: non può riferirsi a domani." }
    ], "perche": "Il futuro e la scelta si negano con 不." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ieri non sono venuto.»", "a": "我昨天没来。", "accetta": ["昨天我没来。", "我昨天没有来。", "昨天我没有来。"], "perche": "È un fatto che non è accaduto: 没 + verbo, senza 了." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Non bevo il tè.»", "a": "我不喝茶。", "accetta": ["我不喝茶。"], "perche": "Un'abitudine o un gusto si nega con 不." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你明天来吗？" },
      { "chi": "B", "t": "我＿来，我有事。", "buco": true }
    ], "opzioni": [
      { "t": "不", "ok": true, "perche": "La domanda riguarda il futuro: la negazione è 不." },
      { "t": "没", "ok": false, "perche": "没 nega un fatto accaduto, non un progetto per domani." },
      { "t": "别", "ok": false, "perche": "别 è un divieto («non venire»), non la risposta di B." }
    ] }
  ],
  "capaci": [
    "Sai scegliere tra 不 e 没 in base a ciò che neghi (abitudine, volontà, identità oppure fatto accaduto), non in base al tempo del verbo.",
    "Sai dire «non ho» con 没有 e non usi mai 不有.",
    "Sai dire «non ancora» con 还没 e «mai» con 没…过.",
    "Sai rispondere con una negazione breve a una domanda (不去, 没有)."
  ],
  "fonti": [
    "Wikipedia (inglese), «Chinese grammar»: 不 come negatore più comune, 没 per 有 e per eventi compiuti",
    "CC-CEDICT, voci 不 (bù, bú) e 没 (méi): cambio di tono e uso come negazione di 有",
    "Tatoeba (cinese), frasi di riscontro per 我不喝咖啡, 我没有钱, 我没吃饭, consultate con i corpora locali"
  ]
};
