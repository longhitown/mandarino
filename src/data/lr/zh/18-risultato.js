/* Lezione 18 · Il risultato: 看完, 听懂, 找到 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["risultato"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我看了那本书，可是没看完。", "tr": "Ho letto quel libro, ma non l'ho finito." },
      { "t": "老师说得太快，我没听懂。", "tr": "L'insegnante parlava troppo in fretta, non ho capito." },
      { "t": "我找了很久，终于找到了。", "tr": "Ho cercato a lungo e alla fine l'ho trovato." },
      { "t": "我写错了一个字。", "tr": "Ho sbagliato un carattere." }
    ],
    "domanda": "Guarda i verbi: 看 / 看完, 听 / 听懂, 找 / 找到, 写 / 写错. Che cosa aggiunge la seconda parola? E nella seconda frase, dove sta 没, e c'è un 了?",
    "risposta": "La seconda parola (完, 懂, 到, 错) dice **come è andata l'azione**: finita, capita, riuscita, sbagliata. Il verbo da solo dice solo che l'azione c'è stata: 看了 non vuol dire «finito», 找了 non vuol dire «trovato». Nel negativo 没 sta davanti a tutto il blocco (没听懂) e **non c'è 了**."
  },
  "regola": {
    "enunciato": "In cinese il verbo dice l'azione e una seconda parola subito dopo, il **complemento di risultato**, dice come finisce: verbo + risultato, come in 听懂 («ascoltare e capire») o 找到 («cercare e trovare»). Il blocco si comporta come un verbo solo.",
    "schema": ["soggetto", "(没)", "verbo", "risultato", "(了)", "(oggetto)"],
    "punti": [
      { "ok": true, "t": "**Il risultato sta subito dopo il verbo**, senza nulla in mezzo: 看完, 听懂, 找到, 写错, 准备好. Se c'è un oggetto, segue il blocco: 吃完饭, 写错了一个字." },
      { "ok": true, "t": "**Al passato si aggiunge 了 dopo il blocco**: 我听懂了, 我找到钥匙了. Con un oggetto 了 può stare dopo il blocco (写错了一个字) o in fondo alla frase (我吃完饭了)." },
      { "ok": true, "t": "**La negazione del passato è 没, senza 了**: 我没听懂, 我还没看完. Così si dice che il risultato non è stato raggiunto." },
      { "ok": true, "t": "**Per la capacità si inserisce 得 o 不**: 听得懂 («riesco a capire»), 听不懂 («non riesco a capire»), 买不到 («non riesco a comprarlo, non si trova»). 没听懂 racconta un fatto passato; 听不懂 dice che non ce la fai." },
      { "ok": true, "t": "**Ogni risultato ha i suoi verbi**: 见 sta soprattutto dopo verbi dei sensi (看见, 听见); 到 vale per molti verbi (找到, 买到, 看到, 学到); 完 vale per le azioni che si portano a termine (吃完, 做完, 写完)." },
      { "ok": false, "t": "**Il verbo da solo non basta per il risultato**: 我找了钥匙 dice «ho cercato le chiavi», non «le ho trovate»; 我听了老师 non dice «ho capito». E non si dice 我没听懂了 né 我不听懂 per un fatto passato." }
    ]
  },
  "logica": [
    "In italiano il verbo spesso porta il risultato con sé: «trovare» è già il risultato di «cercare», «vedere» è il risultato di «guardare», «capire» è il risultato di «ascoltare». Il cinese usa invece lo stesso verbo di azione (找, 看, 听) e ci attacca un risultato (到, 见, 懂). Questo spiega perché le parole italiane diverse corrispondono a un solo verbo cinese con complementi diversi.",
    "Anche 了 non è un «passato che dice il risultato»: dice che l'azione è avvenuta. Per questo 看了 racconta «ho guardato», mentre 看完了 racconta «ho finito». Il risultato è una parola in più, e quando c'è si sente: è ciò che permette di dire «non l'ho trovato» (没找到) senza dire che non hai cercato.",
    "Il risultato lavora spesso insieme a 把 e 被: in 把门关上了 e 杯子被打破了 il verbo è seguito da un risultato (上, 破), che dice come finisce la cosa."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Risultato", "Che cosa dice", "Verbi frequenti", "Esempio"],
    "righe": [
      ["完", "finito", "吃, 做, 写, 看", "我写完作业了。"],
      ["懂", "capito", "听, 看", "我没听懂。"],
      ["见 · 到", "percepito · raggiunto", "看, 听 · 找, 买, 学", "我找到钥匙了。"],
      ["错", "sbagliato", "写, 说, 走, 做", "我走错路了。"],
      ["好", "pronto, a posto", "准备, 做, 放, 写", "行李准备好了。"],
      ["清楚", "chiaro, ben distinto", "听, 看, 说, 写", "我没听清楚。"]
    ]
  },
  "esempi": [
    { "gruppo": "完: arrivare alla fine", "items": [
      { "t": "我吃完饭就去上班。", "tr": "Appena finisco di mangiare vado al lavoro.", "nota": "Il blocco 吃完 precede l'oggetto 饭." },
      { "t": "你的作业做完了吗？", "tr": "Hai finito i compiti?" },
      { "t": "这本书我还没看完。", "tr": "Questo libro non l'ho ancora finito." }
    ] },
    { "gruppo": "懂 e 清楚: capire, distinguere", "items": [
      { "t": "老师的话你听懂了吗？", "tr": "Hai capito quello che ha detto l'insegnante?" },
      { "t": "请你再说清楚一点。", "tr": "Per favore spiegati un po' più chiaramente." }
    ] },
    { "gruppo": "见 e 到: vedere, trovare, riuscire a", "items": [
      { "t": "我昨天在超市看见他了。", "tr": "Ieri l'ho visto al supermercato." },
      { "t": "我找了半天才找到钥匙。", "tr": "Ho cercato a lungo prima di trovare le chiavi." },
      { "t": "你买到火车票了吗？", "tr": "Sei riuscito a comprare il biglietto del treno?" }
    ] },
    { "gruppo": "错 e 好: sbagliare, essere pronto", "items": [
      { "t": "对不起，我走错路了。", "tr": "Scusa, ho sbagliato strada." },
      { "t": "他把我的名字写错了。", "tr": "Ha sbagliato a scrivere il mio nome.", "nota": "Il risultato si usa anche con 把: il blocco 写错 sta in fondo." },
      { "t": "行李我已经准备好了。", "tr": "Ho già preparato i bagagli." },
      { "t": "饭做好了，来吃吧。", "tr": "La cena è pronta, vieni a mangiare." }
    ] },
    { "gruppo": "Posso o non posso: 得 e 不", "items": [
      { "t": "我听不懂他说的话。", "tr": "Non capisco quello che dice." },
      { "t": "声音太小，我听不清楚。", "tr": "Il volume è troppo basso, non sento bene." }
    ] }
  ],
  "contrasti": [
    { "q": "Dici che hai trovato le chiavi che cercavi da un'ora. Quale frase?", "opzioni": [
      { "t": "我找到钥匙了。", "ok": true, "perche": "找到 = cercare e trovare: il risultato 到 dice che le chiavi sono state trovate." },
      { "t": "我找钥匙了。", "ok": false, "perche": "找了 dice solo che hai cercato: non dice se le hai trovate." }
    ] },
    { "q": "Dici che non hai capito quello che ha detto l'insegnante. Quale frase?", "opzioni": [
      { "t": "我没听懂。", "ok": true, "perche": "没 + verbo + risultato, senza 了: il risultato 懂 non è stato raggiunto." },
      { "t": "我没听懂了。", "ok": false, "perche": "Con 没 il 了 cade: 没 nega l'evento e 了 lo affermerebbe." }
    ] },
    { "q": "Dici che ieri a lezione non hai capito. Quale frase?", "opzioni": [
      { "t": "昨天上课我没听懂。", "ok": true, "perche": "Per un fatto passato si usa 没 + verbo + risultato." },
      { "t": "昨天上课我不听懂。", "ok": false, "perche": "不 + verbo + risultato non racconta un fatto passato: per «non ho capito» serve 没." }
    ] },
    { "q": "Dici che hai sbagliato un carattere. Quale frase?", "opzioni": [
      { "t": "我写错了一个字。", "ok": true, "perche": "Il blocco 写错 sta insieme, poi 了, poi l'oggetto con la quantità." },
      { "t": "我写了错一个字。", "ok": false, "perche": "Il risultato 错 si attacca subito al verbo: 写错. Non si inserisce 了 in mezzo." }
    ] },
    { "q": "Hai incrociato per caso Xiao Wang e ora lo dici a un amico: «L'ho visto». Quale frase?", "opzioni": [
      { "t": "我看见小王了。", "ok": true, "perche": "见 dopo 看 dice che l'immagine è arrivata a te: l'hai visto." },
      { "t": "我看小王了。", "ok": false, "perche": "看 da solo dice che hai guardato verso di lui, o lo hai guardato fare qualcosa: non che l'hai visto." }
    ] },
    { "q": "Dici che sei riuscito a comprare il biglietto. Quale frase?", "opzioni": [
      { "t": "我买到票了。", "ok": true, "perche": "到 dice che hai ottenuto la cosa: 买到 = riuscire a comprare." },
      { "t": "我买见票了。", "ok": false, "perche": "见 si usa dopo verbi dei sensi (看, 听): comprare non è un senso." }
    ] },
    { "q": "Dici che hai finito il libro. Quale frase?", "opzioni": [
      { "t": "我看完这本书了。", "ok": true, "perche": "完 dice che l'azione è arrivata alla fine." },
      { "t": "我看到这本书了。", "ok": false, "perche": "看到 vuol dire «ho visto» o «sono arrivato a leggere fino a»: non «ho finito»." }
    ] },
    { "q": "Dici che hai sbagliato strada. Quale frase?", "opzioni": [
      { "t": "我走错路了。", "ok": true, "perche": "Verbo + risultato + oggetto: 走错 poi 路." },
      { "t": "我错走路了。", "ok": false, "perche": "错 non si mette prima del verbo: il risultato viene subito dopo, 走错." }
    ] }
  ],
  "dialogo": {
    "titolo": "Il film di ieri sera",
    "righe": [
      { "chi": "A", "t": "昨天的电影你看完了吗？", "tr": "Il film di ieri l'hai visto fino in fondo?" },
      { "chi": "B", "t": "没看完，他们说得太快，我听不懂。", "tr": "No, parlavano troppo in fretta e non riuscivo a capire." },
      { "chi": "A", "t": "我也没听懂，不过我看懂了一半。", "tr": "Neanch'io ho capito, però ne ho capito la metà." },
      { "chi": "B", "t": "那我们明天再看一遍吧。", "tr": "Allora guardiamolo di nuovo domani." }
    ],
    "esercizi": [
      { "q": "Perché B non ha visto tutto il film?", "opzioni": [
        { "t": "Non riusciva a capire quello che dicevano.", "ok": true, "perche": "听不懂 esprime che B non riesce a capire." },
        { "t": "Non ha trovato il film.", "ok": false, "perche": "Nel dialogo non si parla di cercare: manca 找到." },
        { "t": "Ha finito prima del previsto.", "ok": false, "perche": "B dice 没看完: non è arrivato alla fine." }
      ] },
      { "q": "A dice 我也没听懂. Che cosa vuol dire?", "opzioni": [
        { "t": "Neanch'io ho capito.", "ok": true, "perche": "没听懂 racconta che nel film A non ha capito." },
        { "t": "Neanch'io ho ascoltato.", "ok": false, "perche": "Per dire «ascoltare» basta 听: 懂 aggiunge il risultato «capire»." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi studia il cinese usa il verbo da solo per dire il risultato (我找钥匙了 per «le ho trovate»), mette 了 dopo 没 (我没听懂了) o usa 不 per il passato (我不听懂).",
    "perche": "In italiano il verbo «trovare» o «capire» contiene già il risultato e il passato prossimo basta. In cinese il risultato è una parola a parte e il verbo da solo racconta solo l'azione; 没 nega già l'evento, quindi 了 non serve.",
    "esci": "Per dire che qualcosa è riuscito, cerca il risultato: 到, 懂, 完, 好. Per il negativo passato scrivi 没 + verbo + risultato, e per la capacità usa 不: 听不懂.",
    "esempi": [
      { "sbagliata": "我没听懂了。", "giusta": "我没听懂。" },
      { "sbagliata": "我找钥匙了。", "giusta": "我找到钥匙了。" },
      { "sbagliata": "我写了错一个字。", "giusta": "我写错了一个字。" }
    ]
  },
  "curiosi": [
    { "titolo": "看见 e 看到", "t": "Dopo 看 e 听 i risultati 见 e 到 sono quasi intercambiabili: 看见 e 看到 vogliono dire entrambi «vedere». Solo 到 vale anche per molti altri verbi (找到, 买到, 学到)." },
    { "titolo": "Il potenziale: 听得懂, 听不懂", "t": "Inserendo 得 o 不 tra verbo e risultato si ottiene la possibilità: 看得懂 («si riesce a capire leggendo»), 看不懂 («non si riesce»). La forma negativa 不 è molto frequente nel parlato: 听不懂 e 看不懂 sono tra le frasi più usate da chi studia la lingua." },
    { "titolo": "着 al posto di 到", "t": "Dopo alcuni verbi il risultato è 着 (si legge zháo): 睡着 vuol dire «addormentarsi». Non confonderlo con 睡到 + ora, che vuol dire «dormire fino a»: 睡到九点." }
  ],
  "pragmatica": "Per chiedere di ripetere si dice 对不起，我没听清楚，请再说一遍: gentile e molto naturale. Se spieghi qualcosa a qualcuno, 我说清楚了吗？ («mi sono spiegato bene?») mette il peso su chi parla ed è più delicato di 你听懂了吗？, che chiede a chi ascolta di valutarsi.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他看完了那本书。", "opzioni": [
      { "t": "Ha finito il libro.", "ok": true, "perche": "看完 = leggere fino alla fine; 了 conferma che è avvenuto." },
      { "t": "Ha cominciato il libro.", "ok": false, "perche": "完 vuol dire «finito», non «cominciato»." },
      { "t": "Non ha letto il libro.", "ok": false, "perche": "Non c'è negazione: l'azione c'è stata." }
    ] },
    { "k": "buco", "zh": "我昨天在街上＿见她了。", "tr": "Ieri l'ho vista per strada.", "opzioni": [
      { "t": "看", "ok": true, "perche": "看见 = vedere: il risultato 见 si usa con un verbo dei sensi." },
      { "t": "吃", "ok": false, "perche": "吃见 non esiste: 见 vuole un verbo dei sensi." },
      { "t": "写", "ok": false, "perche": "写见 non esiste: 见 vuole un verbo dei sensi." }
    ] },
    { "k": "ordine", "t": "我找到我的钥匙了", "tr": "Ho trovato le mie chiavi." },
    { "k": "ordine", "t": "我还没看完这本书", "tr": "Non ho ancora finito questo libro." },
    { "k": "trasforma", "base": "我听懂了。", "consegna": "Riscrivi la frase al negativo: «Non ho capito.»", "accetta": ["我没听懂。", "我没有听懂。"], "rifiutate": [
      { "t": "我没听懂了。", "perche": "Con 没 il 了 cade: 没 nega già l'evento." },
      { "t": "我不听懂。", "perche": "Per un fatto passato si usa 没, non 不." }
    ], "perche": "没 + verbo + risultato nega che il risultato sia stato raggiunto." },
    { "k": "trasforma", "base": "我找钥匙了。", "consegna": "Riscrivi la frase: vuoi dire che le chiavi le hai trovate.", "accetta": ["我找到钥匙了。", "我找到了钥匙。", "我找到我的钥匙了。"], "rifiutate": [
      { "t": "我找了钥匙到。", "perche": "Il risultato sta subito dopo il verbo: 找到, poi l'oggetto." }
    ], "perche": "Il verbo da solo dice che hai cercato; con 到 dice che hai trovato." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Non ho capito.»", "a": "我没听懂。", "accetta": ["我没有听懂。", "我没听明白。", "我没有听明白。"], "perche": "没 + 听懂, senza 了: il risultato non è stato raggiunto." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Sei riuscito a comprare il biglietto?»", "a": "你买到票了吗？", "accetta": ["你买到票了吗", "你买到车票了吗？", "你买到了票吗？", "你买到票了没有？"], "perche": "买到 dice che hai ottenuto il biglietto, e 吗 fa la domanda." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你的作业做完了吗？" },
      { "chi": "B", "t": "还＿做完。", "buco": true }
    ], "opzioni": [
      { "t": "没", "ok": true, "perche": "还没做完 = non ho ancora finito." },
      { "t": "不", "ok": false, "perche": "不 nega le abitudini o le intenzioni: qui parli di un fatto non ancora avvenuto." },
      { "t": "别", "ok": false, "perche": "别 serve per dire «non fare»: qui rispondi a una domanda." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我听不懂。", "opzioni": [
      { "t": "Non riesco a capire.", "ok": true, "perche": "不 tra verbo e risultato esprime l'impossibilità." },
      { "t": "Non ho ascoltato.", "ok": false, "perche": "Per «non ho ascoltato» si direbbe 我没听: 不懂 aggiunge il risultato «capire»." }
    ] }
  ],
  "capaci": [
    "Sai dire non solo che cosa hai fatto, ma come è andata a finire: 看完, 听懂, 找到, 写错.",
    "Sai negare un risultato con 没 senza 了, e dire che non ce la fai con 听不懂.",
    "Sai scegliere tra 见 e 到, tra 完 e 好, secondo il verbo e il risultato che vuoi dire.",
    "Sai chiedere di ripetere con 我没听清楚 e dire se hai capito."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Expressing result»: complementi di risultato 完, 到, 见, 好, 错 dopo il verbo",
    "CC-CEDICT (voci 听懂, 找到, 看见): significati dei composti, consultati nel dizionario locale",
    "Tatoeba (corpus cinese, es. 对不起，我听不懂 · 我找到那把我一直在找的钥匙了 · 我看完電視就上床睡覺了): conferma di forme e ordine dell'oggetto, consultati nei corpora locali"
  ]
};
