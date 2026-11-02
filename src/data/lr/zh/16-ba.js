/* Lezione 16 · 把 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["ba"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我把作业做完了。", "tr": "Ho finito i compiti." },
      { "t": "他把杯子放在桌子上。", "tr": "Ha messo il bicchiere sul tavolo." },
      { "t": "你把窗户打开吧。", "tr": "Apri la finestra, dai." },
      { "t": "我做完作业了。", "tr": "Ho finito i compiti (la stessa cosa, senza 把)." }
    ],
    "domanda": "Guarda le tre frasi con 把 e confrontale con l'ultima, che non ce l'ha. Dove sta l'oggetto (作业, 杯子, 窗户) rispetto al verbo? E che cosa segue sempre il verbo?",
    "risposta": "Con 把 l'oggetto sta **prima** del verbo: 把作业做完, 把杯子放在桌子上, 把窗户打开. E il verbo non è mai solo: lo segue qualcosa che dice come va a finire la cosa (完, 在桌子上, 开). Senza 把 l'oggetto torna dopo il verbo (做完作业) e il risultato resta attaccato al verbo."
  },
  "regola": {
    "enunciato": "La costruzione con 把 mette in primo piano **che cosa succede a una cosa**. Lo schema è: chi agisce + 把 + la cosa + verbo + qualcosa che dice come finisce la cosa. Risponde alla domanda «che cosa fa il soggetto a questa cosa?»: la cosa si nomina per prima e poi si dice che cosa le accade.",
    "schema": ["chi agisce", "把", "la cosa", "verbo", "risultato · luogo · direzione"],
    "punti": [
      { "ok": true, "t": "**La cosa è nota o precisa**: 把那本书买了 (quel libro, di cui si parla), più naturale di 把一本书买了. Una cosa qualunque si nomina di solito con la frase normale." },
      { "ok": true, "t": "**Il verbo si accompagna sempre a qualcosa**: dopo il verbo c'è un risultato (做完, 洗干净), una direzione (拿出去, 带回来), un luogo (放在桌子上), un 了 con i verbi di cambiamento (忘了, 卖了), un raddoppio (看看) o un numero di volte (看了两遍)." },
      { "ok": true, "t": "**Negazione, verbi modali e avverbi stanno prima di 把**: 我没把门关上, 你应该把药吃了, 别把杯子放在那里." },
      { "ok": true, "t": "**Chi agisce può anche non volerlo**: 我把钥匙丢了 («ho perso le chiavi») è corretto." },
      { "ok": false, "t": "**Non si usa con i verbi di stato o di inclinazione** (是, 有, 喜欢, 像), con i risultativi di percezione (看见, 听懂) né con una cosa che nasce dall'azione stessa: si dice 我喜欢这个汉字, mai 我把这个汉字喜欢." }
    ]
  },
  "logica": [
    "In italiano l'oggetto resta dopo il verbo: «metto il libro sul tavolo». In cinese lo spazio dopo il verbo è riservato al **risultato**: dove va a finire il libro, come resta la porta, quanto diventa pulito il vestito. Per fare posto al risultato l'oggetto si sposta prima del verbo e 把 lo introduce. Il ragionamento è: **nomino la cosa su cui agisco, poi dico che cosa le accade.**",
    "Per questo la cosa deve essere nota: si nomina per prima qualcosa di cui si sta già parlando. E per questo il verbo non può essere nudo: la costruzione serve proprio a dire come finisce la cosa. Non è «il complemento oggetto cinese»: moltissime frasi con un oggetto non usano 把, e in italiano la traduzione è quasi sempre un normale «soggetto + verbo + oggetto» o un passivo. Storicamente 把 è un verbo che significa «prendere in mano, afferrare»: «prendo la cosa e le faccio qualcosa»."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Dopo il verbo", "Che cosa dice", "Esempio"],
    "righe": [
      ["un risultato", "come finisce la cosa", "我把作业做完了。"],
      ["una direzione", "da dove a dove si muove", "他把东西拿出去了。"],
      ["un luogo", "dove la cosa va a finire", "她把花放在桌子上。"],
      ["un destinatario", "a chi va la cosa", "我把书给了他。"],
      ["una trasformazione", "in che cosa diventa", "把苹果切成两半。"],
      ["了 o un raddoppio", "cambia stato, oppure si prova", "他把手机忘了。 你把课文看看。"]
    ]
  },
  "esempi": [
    { "gruppo": "Il risultato", "items": [
      { "t": "我把作业做完了。", "tr": "Ho finito i compiti.", "nota": "完 dice che l'azione è arrivata alla fine." },
      { "t": "他把衣服洗干净了。", "tr": "Ha lavato i vestiti (ora sono puliti)." }
    ] },
    { "gruppo": "Dove va, da dove a dove", "items": [
      { "t": "她把花放在桌子上。", "tr": "Ha messo i fiori sul tavolo." },
      { "t": "请把书放到我的包里。", "tr": "Metti il libro nella mia borsa, per favore." },
      { "t": "他把东西拿出去了。", "tr": "Ha portato fuori la roba." },
      { "t": "你把孩子带回来吧。", "tr": "Riporta qui il bambino." }
    ] },
    { "gruppo": "A chi, e in che cosa si trasforma", "items": [
      { "t": "他把钱给了我。", "tr": "Mi ha dato i soldi." },
      { "t": "我把这本书借给他了。", "tr": "Ho prestato questo libro a lui." },
      { "t": "把苹果切成两半。", "tr": "Taglia la mela in due metà." },
      { "t": "请把这句话翻译成意大利语。", "tr": "Traduci questa frase in italiano, per favore." }
    ] },
    { "gruppo": "Richieste e istruzioni", "items": [
      { "t": "把门关上！", "tr": "Chiudi la porta!" },
      { "t": "请把窗户打开。", "tr": "Apri la finestra, per favore." }
    ] },
    { "gruppo": "Negazione e azioni involontarie", "items": [
      { "t": "我还没把作业写完。", "tr": "Non ho ancora finito di scrivere i compiti.", "nota": "还 e 没 stanno prima di 把." },
      { "t": "别把杯子放在那里。", "tr": "Non mettere il bicchiere lì." },
      { "t": "我把钥匙丢了。", "tr": "Ho perso le chiavi.", "nota": "Nessuno perde le chiavi di proposito: 把 non richiede volontà." }
    ] }
  ],
  "contrasti": [
    { "q": "Quale frase è corretta?", "opzioni": [
      { "t": "我把门关上了。", "ok": true, "perche": "关上 dice che la porta è chiusa: il verbo porta con sé il suo risultato." },
      { "t": "我把门关。", "ok": false, "perche": "Con 把 il verbo da solo non basta: manca il risultato. Dopo 关 serve 上, oppure un 了." }
    ] },
    { "q": "Come si dice «Non ho chiuso la porta»?", "opzioni": [
      { "t": "我没把门关上。", "ok": true, "perche": "La negazione sta prima di 把, perché nega tutta l'azione." },
      { "t": "我把门没关上。", "ok": false, "perche": "Dopo 把 non può comparire 没: la negazione va prima." }
    ] },
    { "q": "Dici dove hai messo il libro che state cercando, quindi una cosa nota. Quale frase?", "opzioni": [
      { "t": "我把那本书放在桌子上了。", "ok": true, "perche": "那本书 è una cosa precisa, di cui si parla: è quello che 把 chiede." },
      { "t": "我把一本书放在桌子上了。", "ok": false, "perche": "Il libro che cercate è noto: 一本书 lo presenterebbe come un libro qualunque, mentre 把 chiede una cosa precisa." }
    ] },
    { "q": "Come dici «Mi piace questo carattere»?", "opzioni": [
      { "t": "我喜欢这个汉字。", "ok": true, "perche": "喜欢 è un verbo di inclinazione: non fa niente all'oggetto, quindi usa la frase normale." },
      { "t": "我把这个汉字喜欢。", "ok": false, "perche": "把 racconta che cosa succede a una cosa: con 喜欢 non succede niente, e la frase non esiste." }
    ] },
    { "q": "Vuoi dire «Il bicchiere è stato rotto da lui», con il bicchiere come soggetto. Quale frase?", "opzioni": [
      { "t": "杯子被他打碎了。", "ok": true, "perche": "被 introduce chi agisce quando chi subisce è il soggetto." },
      { "t": "杯子把他打碎了。", "ok": false, "perche": "把 introduce la cosa su cui si agisce: qui direbbe che è il bicchiere a rompere lui." }
    ] },
    { "q": "Tutti i compiti, uno per uno, sono finiti: «tutti» riguarda l'oggetto. Quale frase?", "opzioni": [
      { "t": "我把作业都做完了。", "ok": true, "perche": "都 dopo l'oggetto di 把 conta le cose: tutti i compiti." },
      { "t": "我都把作业做完了。", "ok": false, "perche": "都 prima di 把 si riferisce a chi agisce (con più persone: 我们都把作业做完了) oppure vale «ormai»: non dice che i compiti sono tutti finiti." }
    ] },
    { "q": "Come dici «Metti il libro sul tavolo»?", "opzioni": [
      { "t": "请把书放在桌子上。", "ok": true, "perche": "放在桌子上 dice dove finisce il libro." },
      { "t": "请把书放。", "ok": false, "perche": "Manca il luogo: con 把 si deve dire dove va a finire la cosa." }
    ] },
    { "q": "Come chiedi di aprire la finestra usando 把?", "opzioni": [
      { "t": "请把窗户打开。", "ok": true, "perche": "把 + la cosa + il verbo con il suo risultato (打开)." },
      { "t": "请把打开窗户。", "ok": false, "perche": "Dopo 把 viene subito la cosa; il verbo viene dopo l'oggetto, non prima." }
    ] },
    { "q": "Come dici «Dovresti prendere la medicina»?", "opzioni": [
      { "t": "你应该把药吃了。", "ok": true, "perche": "I verbi modali (应该) stanno prima di 把." },
      { "t": "你把药应该吃了。", "ok": false, "perche": "Dopo la cosa non può comparire un modale: va prima di 把." }
    ] }
  ],
  "dialogo": {
    "titolo": "Mettere in ordine la stanza",
    "righe": [
      { "chi": "A", "t": "你把作业做完了吗？", "tr": "Hai finito i compiti?" },
      { "chi": "B", "t": "做完了，我还把书包放好了。", "tr": "Sì, e ho anche sistemato lo zaino." },
      { "chi": "A", "t": "很好。那你把房间打扫一下吧。", "tr": "Bene. Allora pulisci la stanza." },
      { "chi": "B", "t": "好的，我先把东西放回去。", "tr": "Va bene, prima rimetto a posto le cose." },
      { "chi": "A", "t": "别把脏衣服放在床上。", "tr": "Non lasciare i vestiti sporchi sul letto." },
      { "chi": "B", "t": "知道了，我把衣服拿出去洗。", "tr": "Ho capito, porto fuori i vestiti a lavare." }
    ],
    "esercizi": [
      { "q": "B dice che rimette a posto le cose. Quale battuta?", "opzioni": [
        { "t": "我先把东西放回去。", "ok": true, "perche": "把 + la cosa + il verbo con la direzione (放回去)." },
        { "t": "我先放回去东西。", "ok": false, "perche": "La cosa è nota e conta dove finisce: l'oggetto non resta in coda dopo la direzione, passa davanti al verbo con 把." }
      ] },
      { "q": "A dice di non mettere i vestiti sporchi sul letto. Quale frase?", "opzioni": [
        { "t": "别把脏衣服放在床上。", "ok": true, "perche": "Il divieto 别 sta prima di 把." },
        { "t": "把别脏衣服放在床上。", "ok": false, "perche": "别 non può stare dopo 把: negazione e divieto vengono prima." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Lo studente italiano porta in cinese l'ordine che conosce, oppure usa 把 per qualsiasi complemento oggetto, e mette la negazione dopo: 我把门不关上, 我把你爱, 我把书看.",
    "perche": "In italiano basta l'oggetto dopo il verbo per dire tutto; in cinese 把 non è il segno del complemento oggetto: è la costruzione che dice che cosa accade a una cosa già nota, e per questo dopo il verbo deve esserci un risultato.",
    "esci": "Prima di scrivere 把 fatti due domande: dopo il verbo c'è un risultato, un luogo o una direzione? La cosa è già nota? Se non è così, di solito basta la frase normale.",
    "esempi": [
      { "sbagliata": "我把门不关上。", "giusta": "我没把门关上。" },
      { "sbagliata": "我把你爱。", "giusta": "我爱你。" },
      { "sbagliata": "我把书看。", "giusta": "我把书看完了。" }
    ]
  },
  "curiosi": [
    { "titolo": "Perché si parla di «disposizione»", "t": "La grammatica cinese del Novecento ha chiamato questa costruzione «forma di disposizione» (处置式): chi agisce dispone della cosa, la sposta, la trasforma. Oggi molti manuali la chiamano semplicemente «costruzione con 把», ma l'idea è la stessa: la frase racconta che cosa accade a una cosa per mano di qualcuno, o di qualcosa." },
    { "titolo": "把 e 被: due facce della stessa scena", "t": "Con 把 la cosa viene dopo chi agisce: 他把杯子打碎了. Con 被 chi subisce diventa soggetto: 杯子被他打碎了. Dove l'italiano userebbe un passivo, il cinese può usare 把, oppure una frase in cui la cosa è il tema e basta il verbo con il suo risultato: 作业做完了." },
    { "titolo": "弄 e 搞, i verbi tuttofare", "t": "弄 e 搞 sono verbi molto generici («fare, sistemare, combinare») e compaiono spesso con 把, perché si adattano a qualsiasi risultato: 把门弄坏了 («ho rotto la porta»), 把事情搞清楚 («chiarire la faccenda»)." }
  ],
  "pragmatica": "把 è la forma naturale per richieste, ordini e istruzioni: 把门关上！ è frequentissima e chiara. Non è però obbligatoria: spesso esiste anche la frase normale (我做完作业了), che mette l'accento sull'azione invece che sull'effetto sulla cosa.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他把咖啡喝完了。", "opzioni": [
      { "t": "Ha finito il caffè.", "ok": true, "perche": "喝完 = bere fino alla fine; 把 dice che il caffè è la cosa su cui si è agito." },
      { "t": "Ha comprato un caffè.", "ok": false, "perche": "Il verbo è 喝 (bere), non 买 (comprare)." },
      { "t": "Non ha bevuto il caffè.", "ok": false, "perche": "Non c'è nessuna negazione: 完 dice che l'azione è finita." }
    ] },
    { "k": "buco", "zh": "请把门＿上。", "opzioni": [
      { "t": "关", "ok": true, "perche": "关上 = chiudere: il verbo con il suo risultato." },
      { "t": "看", "ok": false, "perche": "看上 non significa «chiudere»: il verbo non si accorda con la porta." },
      { "t": "喝", "ok": false, "perche": "喝 (bere) non si fa a una porta." }
    ] },
    { "k": "ordine", "t": "请把门关上", "alt": ["把门关上"], "tr": "Per favore, chiudi la porta." },
    { "k": "ordine", "t": "我把书放在桌子上了", "tr": "Ho messo il libro sul tavolo." },
    { "k": "trasforma", "base": "我关上了门。", "consegna": "Riscrivi la frase con 把: la porta è la cosa di cui parli.", "accetta": ["我把门关上了。", "我把门关了。"], "rifiutate": [
      { "t": "我把门关。", "perche": "Il verbo è nudo: dopo 关 manca il risultato (上) o il 了." }
    ], "perche": "Con 把 la porta va prima del verbo e il verbo si porta il suo risultato: 把门关上了." },
    { "k": "trasforma", "base": "你吃药。", "consegna": "Trasforma l'ordine con 把: «Prendi la medicina (tutta)!».", "accetta": ["你把药吃了。", "把药吃了。", "你把药吃完。", "把药吃完。", "把药吃掉。"], "rifiutate": [
      { "t": "你把药吃。", "perche": "Manca il 了 (o un altro risultato): il verbo non può restare nudo." }
    ], "perche": "吃了 chiude l'azione: la medicina è la cosa su cui si agisce." },
    { "k": "trasforma", "base": "他打碎了杯子。", "consegna": "Riscrivi la frase con il bicchiere come soggetto, usando 被.", "accetta": ["杯子被他打碎了。"], "rifiutate": [
      { "t": "杯子把他打碎了。", "perche": "把 introduce la cosa su cui si agisce: qui significherebbe che il bicchiere ha rotto lui." }
    ], "perche": "Con 被 il bicchiere diventa soggetto e chi agisce si introduce con 被." },
    { "k": "scrivi", "q": "Scrivi in cinese, con 把: «Non ho ancora finito i compiti.»", "a": "我还没把作业做完。", "accetta": ["我还没把作业写完。", "我还没有把作业做完。", "我还没有把作业写完。"], "perche": "还 e 没 stanno prima di 把; dopo la cosa, il verbo con il suo risultato (做完)." },
    { "k": "scrivi", "q": "Scrivi in cinese, con 把: «Metti il libro sul tavolo.»", "a": "请把书放在桌子上。", "accetta": ["把书放在桌子上。", "请把书放到桌子上。", "把书放到桌子上。", "请把书放在桌上。", "把书放在桌上。"], "perche": "放在桌子上 dice dove finisce il libro." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你的手机在哪里？" },
      { "chi": "B", "t": "我＿手机放在桌子上了。", "buco": true }
    ], "opzioni": [
      { "t": "把", "ok": true, "perche": "Dice dove è finita la cosa che A cerca: la costruzione con 把." },
      { "t": "被", "ok": false, "perche": "被 introduce chi agisce quando la cosa è il soggetto: qui il soggetto è «io»." },
      { "t": "给", "ok": false, "perche": "给 vuol dire «dare»: qui si dice dove è finito il telefono." }
    ] },
    { "k": "scegli", "q": "Quale di questi verbi NON ammette 把?", "opzioni": [
      { "t": "喜欢", "ok": true, "perche": "È un verbo di inclinazione: non fa niente all'oggetto." },
      { "t": "放", "ok": false, "perche": "放 è un verbo di collocazione: con 把 è perfetto (把书放在桌子上)." },
      { "t": "洗", "ok": false, "perche": "洗 ammette 把 se segue un risultato (把衣服洗干净)." }
    ] }
  ],
  "capaci": [
    "Sai usare 把 per dire che cosa succede a una cosa che è già nota.",
    "Sai scegliere che cosa mettere dopo il verbo: risultato, direzione, luogo o destinatario.",
    "Sai mettere negazione, avverbi e verbi modali prima di 把.",
    "Sai riconoscere quando 把 non si usa e quando conviene il passivo con 被."
  ],
  "glosse": {
    "把作业做完": "Finire i compiti",
    "把杯子放在桌子上": "Mettere la tazza sul tavolo",
    "把窗户打开": "Aprire la finestra",
    "把那本书买了": "Comprare quel libro",
    "把一本书买了": "Comprare un libro",
    "放在桌子上": "Mettere sul tavolo",
    "我没把门关上": "Non ho chiuso la porta",
    "你应该把药吃了": "Dovresti prendere la medicina",
    "我喜欢这个汉字": "Mi piace questo carattere",
    "他把杯子打碎了": "Ha rotto la tazza",
    "杯子被他打碎了": "La tazza è stata rotta da lui",
    "作业做完了": "I compiti sono finiti"
  },
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), pagina «Using ba sentences»: oggetto noto, verbo con risultato o direzione, negazione prima di 把, verbi psicologici e di percezione esclusi",
    "Chinese Grammar Wiki (AllSet Learning), stessa pagina: 都 prima di 把 riferito a chi agisce (我们都把作业做完了)"
  ]
};
