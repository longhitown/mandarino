/* Lezione 7 · Avere e «c'è»: 有 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["avere"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我有一个姐姐。", "tr": "Ho una sorella maggiore." },
      { "t": "房间里有一张床。", "tr": "In camera c'è un letto." },
      { "t": "教室里有三个人。", "tr": "In classe ci sono tre persone." },
      { "t": "我没有时间。", "tr": "Non ho tempo." }
    ],
    "domanda": "Guarda la prima e la seconda frase: il verbo è lo stesso, 有, ma la prima dice «ho» e la seconda dice «c'è». Che cosa sta davanti a 有 nelle due frasi? E come si nega 有 nell'ultima?",
    "risposta": "Davanti a 有 c'è una **persona** (我) quando si parla di possesso e un **luogo** (房间里, 教室里) quando si parla di ciò che si trova lì. Il verbo non cambia: in cinese «avere» e «esserci» sono la stessa idea, perché dire «la stanza ha un letto» è come dire «nella stanza c'è un letto». Per negare non si usa 不 ma **没**: 没有."
  },
  "regola": {
    "enunciato": "有 vuol dire **«avere»** e anche **«esserci»**: davanti a 有 si mette chi possiede (我有一个姐姐) oppure il luogo in cui si trova qualcosa (房间里有一张床), dopo 有 viene ciò che si possiede o ciò che c'è. Si nega sempre con **没有** (mai 不有) e la domanda si fa con 吗 oppure con 有没有.",
    "schema": ["chi / dove", "有 / 没有", "che cosa"],
    "punti": [
      { "ok": true, "t": "**Possesso**: persona + 有 + cosa. 我有一个哥哥, 他有两个孩子, 你有手机吗？ Vale anche per ciò che si ha in testa o nel programma della giornata: 我今天有很多问题." },
      { "ok": true, "t": "**Esistenza**: luogo + 有 + cosa. Il luogo viene **prima** di 有: 桌子上有三杯茶, 学校旁边有一个银行. Non si dice mai 有一个银行学校旁边." },
      { "ok": true, "t": "**Negazione**: 没有 (nel parlato anche 没). 我没有时间, 教室里没有人, 我家没有狗. 不 non si usa mai davanti a 有: 我不有时间 è un errore." },
      { "ok": true, "t": "**Domanda sì/no**: aggiungi 吗 in fondo (你有时间吗？) oppure ripeti il verbo in forma affermativa e negativa (你有没有时间？). La risposta breve è 有 oppure 没有, non 是 o 不是." },
      { "ok": true, "t": "**Ciò che c'è è nuovo**: dopo 有 viene di solito una cosa che chi ascolta non conosce ancora, con un numero (一张床), con «molti» (很多朋友) o senza quantità (有牛奶). Se la cosa è precisa e nota (la mia borsa, quel libro) non si usa 有 ma 在: 我的书在桌子上." },
      { "ok": true, "t": "**Quanti?** Si chiede con 几 (fino a una decina circa): 你家有几个人？ Il numero prima del nome vuole il classificatore, di cui parla la lezione successiva: 三个人, 一张床." },
      { "ok": false, "t": "**Niente 是 per dire «c'è»**: 这里是一个超市 non significa «qui c'è un supermercato», ma «questo posto è un supermercato». Per dire che qualcosa esiste in un posto serve 有." }
    ]
  },
  "logica": [
    "In italiano «avere» e «esserci» sono due cose diverse: «ho un fratello» si dice con il verbo avere, «c'è un letto» con essere (la particella «ci» più il verbo). In cinese il pensiero è uno solo: qualcosa **si trova presso** qualcuno o qualcosa. Se dico 我有一个姐姐, la sorella «sta presso di me»; se dico 房间里有一张床, il letto «sta presso la stanza». Il verbo è 有 in tutti e due i casi, e per questo anche la forma è la stessa: soggetto (la persona o il luogo), verbo, ciò che si ha.",
    "Questo spiega l'ordine delle parole: il luogo viene prima di 有 perché è il «possessore». L'italiano può dire «c'è un supermercato qui» con il luogo in fondo, mentre il cinese no: il luogo sta all'inizio (这里有一个超市). Spiega anche la negazione. 不 si usa per dire che qualcuno non fa qualcosa o non vuole qualcosa (我不吃肉), mentre 有 non descrive un'azione ma un fatto: o la cosa c'è, o non c'è. Il contrario di «c'è» è 没有, che letteralmente dice «non c'è stato / non esiste»."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Ho qualcosa", "persona + 有 + cosa", "我有一个姐姐。"],
      ["C'è qualcosa in un posto", "luogo + 有 + cosa", "房间里有一张床。"],
      ["Non ho / non c'è", "没有 + cosa", "我没有时间。"],
      ["Domanda sì/no", "有 … 吗？", "你有手机吗？"],
      ["Domanda «ha o non ha?»", "有没有 + cosa", "这附近有没有超市？"],
      ["Quanti ce ne sono?", "有 + 几 + classificatore", "你家有几个人？"],
      ["Dov'è una cosa nota?", "cosa + 在 + luogo", "我的书在桌子上。"],
      ["Chi o che cos'è?", "A + 是 + B", "他是我哥哥。"]
    ]
  },
  "esempi": [
    { "gruppo": "Possesso: chi ha che cosa", "items": [
      { "t": "我有一个姐姐。", "tr": "Ho una sorella maggiore." },
      { "t": "他有两个孩子。", "tr": "Ha due figli." },
      { "t": "你有手机吗？", "tr": "Hai il cellulare?", "nota": "Domanda sì/no: la frase affermativa più 吗." },
      { "t": "我今天有很多问题。", "tr": "Oggi ho molte domande.", "nota": "Anche le cose astratte si «hanno»: tempo, problemi, domande." }
    ] },
    { "gruppo": "Esistenza: dove c'è che cosa", "items": [
      { "t": "桌子上有三杯茶。", "tr": "Sul tavolo ci sono tre tazze di tè.", "nota": "Il luogo (桌子上) apre la frase." },
      { "t": "房间里有一张床。", "tr": "In camera c'è un letto." },
      { "t": "学校旁边有一个银行。", "tr": "Accanto alla scuola c'è una banca." },
      { "t": "冰箱里有牛奶。", "tr": "In frigo c'è del latte.", "nota": "Senza numero: il latte c'è, non conta quanto." }
    ] },
    { "gruppo": "Negare con 没有", "items": [
      { "t": "我没有时间。", "tr": "Non ho tempo." },
      { "t": "我家没有狗。", "tr": "A casa mia non c'è un cane." },
      { "t": "教室里没有人。", "tr": "In classe non c'è nessuno.", "nota": "没有人 vuol dire «non c'è nessuno»." }
    ] },
    { "gruppo": "Domandare", "items": [
      { "t": "你有哥哥吗？", "tr": "Hai un fratello maggiore?" },
      { "t": "这附近有没有超市？", "tr": "Qui vicino c'è un supermercato?", "nota": "有没有 offre la scelta: c'è o non c'è?" },
      { "t": "你家有几个人？", "tr": "Quante persone siete in famiglia?" }
    ] },
    { "gruppo": "Quando non si usa 有", "items": [
      { "t": "我的书在桌子上。", "tr": "Il mio libro è sul tavolo.", "nota": "Una cosa precisa e nota: 在 dice dove sta." },
      { "t": "他是我哥哥。", "tr": "Lui è mio fratello maggiore.", "nota": "Identità: 是, non 有." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Non ho tempo»?", "opzioni": [
      { "t": "我没有时间。", "ok": true, "perche": "有 si nega con 没: la forma completa è 没有." },
      { "t": "我不有时间。", "ok": false, "perche": "不 non sta mai davanti a 有: 有 descrive un fatto (c'è o non c'è), non un'azione che si può rifiutare." },
      { "t": "我有没时间。", "ok": false, "perche": "Le due particelle si scambiano il posto: 没 viene prima di 有, e la forma è 没有." }
    ] },
    { "q": "Cerchi una banca in un quartiere che non conosci e chiedi: «Qui vicino c'è una banca?»", "opzioni": [
      { "t": "这附近有银行吗？", "ok": true, "perche": "Chiedi se una banca qualsiasi esiste in quel luogo: luogo + 有 + cosa, e 吗 per la domanda." },
      { "t": "这附近银行在吗？", "ok": false, "perche": "在 si usa per una cosa precisa di cui si conosce l'identità («la banca che dico io è qui?»), non per scoprire se ne esiste una." },
      { "t": "有银行这附近吗？", "ok": false, "perche": "Il luogo deve stare prima di 有: «qui vicino» è il possessore, non una coda." }
    ] },
    { "q": "Dici: «Ho un fratello maggiore» (possesso).", "opzioni": [
      { "t": "我有一个哥哥。", "ok": true, "perche": "有 mette il fratello «presso di me»: ce l'ho." },
      { "t": "我是一个哥哥。", "ok": false, "perche": "是 dice chi sei: questa frase significa «io sono un fratello maggiore»." }
    ] },
    { "q": "«Qui c'è un supermercato.» Quale frase dice che il supermercato esiste in questo luogo?", "opzioni": [
      { "t": "这里有一个超市。", "ok": true, "perche": "Luogo + 有 + cosa: il supermercato è la novità che informa chi ascolta." },
      { "t": "这里是一个超市。", "ok": false, "perche": "Con 是 stai dicendo che tutto questo posto è un supermercato (per esempio entrando in un negozio), non che ce n'è uno." },
      { "t": "有这里一个超市。", "ok": false, "perche": "Il luogo viene prima del verbo, non dopo." }
    ] },
    { "q": "Ti chiedono se hai fratelli maggiori e tu non ne hai. Quale è la risposta breve naturale?", "opzioni": [
      { "t": "没有。", "ok": true, "perche": "La risposta breve ripete il verbo della domanda, nella forma negativa di 有." },
      { "t": "不有。", "ok": false, "perche": "不有 non esiste in cinese." },
      { "t": "不是。", "ok": false, "perche": "不是 risponde a una domanda con 是 («sei…?»), non a una con 有." }
    ] },
    { "q": "Vuoi chiedere «Hai una macchina?» con la forma «ha o non ha?».", "opzioni": [
      { "t": "你有没有车？", "ok": true, "perche": "有没有 mette insieme «hai» e «non hai», e la domanda è completa senza 吗." },
      { "t": "你有不有车？", "ok": false, "perche": "Nella forma «ha o non ha» il negativo di 有 è sempre 没有, quindi non 有不有." },
      { "t": "你有没有车吗？", "ok": false, "perche": "La domanda con 有没有 non vuole 吗: la domanda è già completa e 吗 sarebbe di troppo." }
    ] },
    { "q": "Ti chiedono dov'è il tuo telefono e tu lo vedi sul tavolo. Come dici: «Il mio telefono è sul tavolo»?", "opzioni": [
      { "t": "我的手机在桌子上。", "ok": true, "perche": "Il telefono è una cosa precisa e nota: si dice dove sta con 在." },
      { "t": "我的手机有桌子上。", "ok": false, "perche": "有 vuole il luogo prima e la cosa dopo; qui l'ordine non è possibile e 在 è il verbo giusto." }
    ] },
    { "q": "Dici: «Non ho più soldi» (adesso sono rimasto senza).", "opzioni": [
      { "t": "我没钱了。", "ok": true, "perche": "没 nega 有 e 了 in fondo annuncia il cambiamento: prima c'erano, adesso no." },
      { "t": "我不有钱了。", "ok": false, "perche": "Anche con 了, 有 non si nega con 不." },
      { "t": "我有没钱了。", "ok": false, "perche": "没 viene prima di 有 (o prende il suo posto), non dopo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Cerco una banca",
    "righe": [
      { "chi": "A", "t": "你好，请问这附近有银行吗？", "tr": "Buongiorno, scusi, qui vicino c'è una banca?" },
      { "chi": "B", "t": "有，学校旁边有一个。", "tr": "Sì, accanto alla scuola ce n'è una." },
      { "chi": "A", "t": "那附近有没有超市？", "tr": "E lì vicino c'è un supermercato?" },
      { "chi": "B", "t": "没有超市，不过有很多饭馆。", "tr": "Supermercati no, ma ci sono molti ristoranti." },
      { "chi": "A", "t": "太好了，我有点饿了。", "tr": "Benissimo, ho un po' fame." }
    ],
    "esercizi": [
      { "q": "Che cosa vuol dire 有，学校旁边有一个 nella risposta di B?", "opzioni": [
        { "t": "Sì, accanto alla scuola ce n'è una (di banche).", "ok": true, "perche": "一个 sostituisce 银行, già nominata: luogo + 有 + numero, senza ripetere il nome." },
        { "t": "Sì, la scuola ha un edificio vicino.", "ok": false, "perche": "Il soggetto è il luogo ma il senso è «ce n'è una», non «la scuola possiede»." },
        { "t": "No, accanto alla scuola non c'è niente.", "ok": false, "perche": "B comincia con 有, che significa «sì, c'è»." }
      ] },
      { "q": "Perché B dice 没有超市 e non 不有超市?", "opzioni": [
        { "t": "Perché 有 si nega sempre con 没.", "ok": true, "perche": "Il negativo di 有 è 没有 in ogni caso." },
        { "t": "Perché 不 si usa solo con i verbi al passato.", "ok": false, "perche": "不 non ha niente a che fare con il tempo: non si usa con 有 per un'altra ragione." },
        { "t": "Perché il supermercato è lontano.", "ok": false, "perche": "Il verbo 有 nega l'esistenza, non la distanza." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano ricostruisce 有 sul modello della frase italiana: dice 我不有时间 (come «non ho tempo»), mette il luogo dopo («c'è un supermercato qui») oppure usa 是 per dire «c'è» (这里是一个超市). Nelle domande aggiunge 吗 anche dopo 有没有.",
    "perche": "L'italiano ha una sola negazione, «non», che vale per tutti i verbi, e il suo «c'è» comincia con la particella «ci», non con il luogo. Il cinese ha due negazioni (不 per le azioni e i giudizi, 没 per l'esistenza e per ciò che non è avvenuto) e vuole il luogo, che è il «possessore», prima del verbo.",
    "esci": "Prima di scrivere una frase con 有 chiediti due cose. Chi è il possessore: una persona o un luogo? Mettilo per primo. E come nego? Con 没, sempre. Se vuoi dire che qualcosa si trova in un luogo, usa 有; se vuoi dire dove sta una cosa nota, usa 在.",
    "esempi": [
      { "sbagliata": "我不有时间。", "giusta": "我没有时间。" },
      { "sbagliata": "有一个超市这里。", "giusta": "这里有一个超市。" },
      { "sbagliata": "这里是一个超市。", "giusta": "这里有一个超市。" },
      { "sbagliata": "你有不有时间？", "giusta": "你有没有时间？" }
    ]
  },
  "curiosi": [
    { "titolo": "Perché 没 e non 不", "t": "Il cinese usa 不 quando dice «non» a un'azione, a una qualità o a un'intenzione (不吃, 不贵, 不去) e usa 没 per negare un fatto, cioè ciò che non c'è o non è avvenuto. 有 è un fatto: la cosa c'è oppure no. Per questo è 没有 e non 不有. Anche per le azioni passate si usa 没: 我没吃饭 («non ho mangiato»), come vedrai nella lezione su 了." },
    { "titolo": "Il gioco 有的…有的", "t": "Con 有 si fanno frasi come 有的人喜欢茶，有的人喜欢咖啡: «alcuni amano il tè, altri il caffè». 有的人 vuol dire letteralmente «ci sono persone che…». È un modo molto comune di dividere un gruppo in parti, senza dover dire quante." },
    { "titolo": "有 per le qualità: 很有…", "t": "Con la parola «molto» 有 diventa un modo di dire che una cosa ha una certa qualità: 这个人很有钱 vuol dire «questa persona ha molti soldi» (è ricca). L'italiano usa un aggettivo o un'altra costruzione, il cinese resta con il verbo avere." },
    { "titolo": "我有钱了: 有 con 了", "t": "有 senza 了 descrive un fatto qualsiasi (我有一个姐姐). Con 了 in fondo annuncia un cambiamento: 我有钱了 vuol dire «adesso ho i soldi» (prima no). E il negativo, 我没钱了, vuol dire «non ho più soldi». È la costruzione che si sente più spesso quando finiscono i soldi o il tempo." }
  ],
  "pragmatica": "有 e 没有 sono anche le risposte brevi più frequenti: 你有时间吗？ — 有。 / 没有。 Per chiedere informazioni si apre con 请问 («scusi»): 请问，这里有洗手间吗？ Davanti a una porta chiusa si domanda 有人吗？ («c'è qualcuno?»). Tra amici 有没有 è diretto e normale; in un negozio si chiede più volentieri 你们有…吗？ Per rifiutare un complimento si dice 没有没有, cioè «ma no, per niente».",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "冰箱里没有牛奶。", "opzioni": [
      { "t": "In frigo non c'è latte.", "ok": true, "perche": "Luogo + 没有 + cosa: il latte non c'è in quel posto." },
      { "t": "Il latte non è in frigo.", "ok": false, "perche": "Per dire dove sta il latte si direbbe 牛奶不在冰箱里, con 在." },
      { "t": "Non voglio il latte.", "ok": false, "perche": "Non c'è nessun verbo di volontà: 没有 nega l'esistenza." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "教室里有三个人。", "opzioni": [
      { "t": "In classe ci sono tre persone.", "ok": true, "perche": "Luogo + 有 + numero + cosa: dice quante persone ci sono." },
      { "t": "Le tre persone sono in classe.", "ok": false, "perche": "Dopo 有 le persone sono nuove, senza che si sappia chi siano: per persone note servirebbe 在." },
      { "t": "In classe non ci sono persone.", "ok": false, "perche": "Questa frase afferma che qualcuno c'è: per negare servirebbe 没有." }
    ] },
    { "k": "buco", "zh": "我＿时间。", "tr": "Non ho tempo.", "opzioni": [
      { "t": "没有", "ok": true, "perche": "Il negativo di 有 è 没有." },
      { "t": "不有", "ok": false, "perche": "不有 non esiste in cinese: davanti a 有 si usa soltanto 没." },
      { "t": "不是", "ok": false, "perche": "不是 è il negativo di 是, e dice «non è»." }
    ] },
    { "k": "buco", "zh": "桌子上＿一本书。", "tr": "Sul tavolo c'è un libro.", "opzioni": [
      { "t": "有", "ok": true, "perche": "Luogo + 有 + numero + cosa: un libro nuovo, mai nominato." },
      { "t": "在", "ok": false, "perche": "在 mette in relazione una cosa precisa con il luogo (书在桌子上), non una cosa nuova con un numero." },
      { "t": "没", "ok": false, "perche": "没 nega: la frase direbbe che il libro non c'è, e manca un 有 dopo." }
    ] },
    { "k": "ordine", "t": "学校旁边有一个银行", "tr": "Accanto alla scuola c'è una banca." },
    { "k": "ordine", "t": "我家没有狗", "tr": "A casa mia non c'è un cane." },
    { "k": "trasforma", "base": "这里有一个超市。", "consegna": "Dì che qui non c'è nessun supermercato.", "accetta": ["这里没有超市。", "这儿没有超市。"], "rifiutate": [
      { "t": "这里不有超市。", "perche": "有 si nega con 没, non con 不." }
    ], "perche": "没有 prende il posto di 有; il numero e il classificatore spariscono, perché non c'è niente da contare." },
    { "k": "trasforma", "base": "你有哥哥。", "consegna": "Trasformala in una domanda sì/no con 吗.", "accetta": ["你有哥哥吗？"], "rifiutate": [
      { "t": "你有吗哥哥？", "perche": "吗 va in fondo alla frase, dopo tutto il resto." }
    ], "perche": "La domanda sì/no è la frase affermativa più 吗 alla fine." },
    { "k": "trasforma", "base": "他有时间。", "consegna": "Trasformala in una domanda con 有没有.", "accetta": ["他有没有时间？"], "rifiutate": [
      { "t": "他有不有时间？", "perche": "Il negativo di 有 è 没有, quindi 有没有." }
    ], "perche": "有没有 + cosa offre due possibilità («ha o non ha?»), e la domanda è già completa senza 吗." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Non ho un fratello maggiore.»", "a": "我没有哥哥。", "accetta": ["我没哥哥。", "我没有一个哥哥。"], "perche": "没有 + 哥哥: la negazione di 有; nel parlato 没 da solo basta." },
    { "k": "scrivi", "q": "Scrivi in cinese: «In camera c'è un letto.»", "a": "房间里有一张床。", "accetta": ["房间里有一张床。", "房间有一张床。"], "perche": "Luogo + 有 + numero + classificatore + cosa." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你有时间吗？" },
      { "chi": "B", "t": "对不起，我＿时间。", "buco": true }
    ], "opzioni": [
      { "t": "没有", "ok": true, "perche": "B risponde di non avere tempo: 没有 è il negativo di 有." },
      { "t": "不有", "ok": false, "perche": "不有 non si può dire: il negativo di 有 è soltanto 没有." },
      { "t": "不是", "ok": false, "perche": "不是 nega 是, e la domanda era con 有." }
    ] },
    { "k": "scegli", "q": "Quale frase è sbagliata?", "opzioni": [
      { "t": "我不有手机。", "ok": true, "perche": "有 si nega con 没: 我没有手机." },
      { "t": "我没有手机。", "ok": false, "perche": "Corretta: «non ho il cellulare»." },
      { "t": "房间里有人。", "ok": false, "perche": "Corretta: «in camera c'è qualcuno»." }
    ] }
  ],
  "capaci": [
    "Sai dire che cosa hai e che cosa c'è in un luogo con la stessa costruzione: persona o luogo + 有 + cosa.",
    "Sai negare con 没有 e riconoscere perché 不有 non esiste.",
    "Sai fare le domande con 有…吗 e con 有没有, e rispondere con 有 o 没有.",
    "Sai scegliere tra 有 (c'è una cosa nuova), 在 (dove sta una cosa nota) e 是 (chi o che cos'è)."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Expressing existence with you»: luogo + 有 + cosa, domanda con 吗",
    "Chinese Grammar Wiki (AllSet Learning), «Negation of you with mei»: 没 nega 有, mai 不有; 没有 si accorcia in 没",
    "CC-CEDICT, voci 有 e 没; Tatoeba (cinese), frasi con 没有时间, 这里有, 有没有, consultate con i corpora locali"
  ]
};
