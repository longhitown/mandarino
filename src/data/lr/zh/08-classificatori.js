/* Lezione 8 · Contare: numeri e classificatori (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["classificatori"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我要一杯茶。", "tr": "Vorrei una tazza di tè." },
      { "t": "他有两本书。", "tr": "Ha due libri." },
      { "t": "桌子旁边有三个人。", "tr": "Accanto al tavolo ci sono tre persone." },
      { "t": "我买了一件衣服。", "tr": "Ho comprato un vestito." }
    ],
    "domanda": "In ogni frase tra il numero e la cosa contata c'è una piccola parola in più: 杯, 本, 个, 件. L'italiano non ce l'ha: «due libri», e basta. Che cosa noti? Quella parola è sempre la stessa?",
    "risposta": "Il cinese non conta mai un nome da solo: tra il numero e il nome mette una parola di misura, il **classificatore**. Non è sempre la stessa: 杯 con il tè (una tazza), 本 con i libri, 件 con i vestiti, 个 con le persone. Il classificatore dice in che «forma» si conta la cosa: una tazza, un volume, un pezzo."
  },
  "regola": {
    "enunciato": "Per contare in cinese si dice **numero + classificatore + nome**: 三个朋友, 两本书, 一杯茶. Lo stesso vale con 这 («questo»), 那 («quello»), 哪 («quale») e 几 («quanti»): 这本书, 那个人, 你要哪杯茶？ Il classificatore generale è 个, ma molti nomi hanno il loro, e davanti a un classificatore il «due» si dice 两, non 二.",
    "schema": ["numero / 这 / 那 / 几", "classificatore", "nome"],
    "punti": [
      { "ok": true, "t": "**Struttura**: 一个人, 三本书, 这杯茶, 哪件衣服, 几张票. Il classificatore sta sempre subito dopo il numero o dopo 这, 那, 哪, 几 e prima del nome." },
      { "ok": true, "t": "**个 e i classificatori propri**: 个 va bene per le persone e per moltissime cose, ed è la scelta sicura quando non conosci quello giusto. Con altri nomi si usa il classificatore proprio: 本 (libri), 杯 (tazze, bicchieri), 张 (cose piatte), 件 (vestiti), 只 (animali piccoli), 瓶 (bottiglie)." },
      { "ok": true, "t": "**Due = 两**: davanti a un classificatore il «due» è 两 (两个人, 两杯茶). 二 si usa quando si conta a voce (一, 二, 三) e dentro i numeri composti (十二, 二十, 二十二个人)." },
      { "ok": true, "t": "**Un po' di libertà nel parlato**: dopo un verbo il 一 si può togliere (我买本书, 来杯茶), e il nome si può omettere quando è chiaro: 你要几杯？ — 我要两杯。" },
      { "ok": true, "t": "**Il tempo**: 年, 天 e 分钟 si contano senza classificatore (三年, 两天, 十分钟); 月, 星期 e 小时 vogliono 个 (三个月, 两个星期, 两个小时). Attenzione: 三月 vuol dire «marzo»." },
      { "ok": true, "t": "**Quanti?** Con numeri piccoli si usa 几 + classificatore (你有几个孩子？); per le quantità grandi o i prezzi, 多少 (这个多少钱？), che non vuole il classificatore." },
      { "ok": false, "t": "**Il classificatore non si salta**: 我有三朋友, 这书很贵, 一书 sono errori. Tra numero (o 这/那) e nome ci vuole sempre il classificatore, tranne nelle espressioni di tempo viste sopra." },
      { "ok": false, "t": "**Niente 的 tra classificatore e nome**: si dice 三个朋友, non 三个的朋友. Il classificatore si lega al nome come un unico blocco." }
    ]
  },
  "logica": [
    "In italiano diciamo «due tazze di tè» o «un pezzo di pane»: anche noi usiamo una parola di misura quando il nome non si conta da solo (tè, pane, acqua). In cinese è così per **tutti** i nomi: anche le cose che in italiano si contano da sole (libri, amici, vestiti) passano da una parola di misura. Se l'italiano dice «un libro», il cinese dice «un volume di libro»; «tre amici» diventa «tre persone di amici».",
    "Questa abitudine ha un vantaggio: il classificatore ricorda la forma o la natura della cosa. 条 è per le cose lunghe e sottili (una strada, un pesce, un paio di pantaloni), 张 per le cose piatte (un biglietto, un tavolo), 本 per i volumi rilegati, 辆 per i veicoli. Chi impara il classificatore impara anche un'immagine del nome, e per questo conviene studiare i nomi in coppia: 一本书, 一张票, 一件衣服. Quando non lo sai, 个 è il tuo salvagente."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Classificatore", "Per che cosa", "Esempio"],
    "righe": [
      ["个", "persone e moltissime cose", "三个朋友"],
      ["位", "persone, in modo cortese", "两位老师"],
      ["本", "libri, quaderni, riviste", "一本书"],
      ["杯", "ciò che sta in una tazza o in un bicchiere", "两杯茶"],
      ["瓶", "ciò che sta in una bottiglia", "一瓶水"],
      ["碗", "ciò che sta in una ciotola", "一碗饭"],
      ["张", "cose piatte: biglietti, carte, tavoli, letti", "三张票"],
      ["件", "vestiti (capi superiori), faccende", "一件衣服"],
      ["条", "cose lunghe e sottili: pesci, strade, pantaloni", "一条鱼"],
      ["只", "animali piccoli: gatti, uccelli", "一只猫"],
      ["辆", "veicoli", "一辆车"],
      ["家", "negozi, ristoranti, aziende", "一家饭馆"],
      ["块", "pezzi; i soldi nel parlato", "三块钱"]
    ]
  },
  "esempi": [
    { "gruppo": "Numero + classificatore + nome", "items": [
      { "t": "我有三个朋友。", "tr": "Ho tre amici." },
      { "t": "我买了一本书。", "tr": "Ho comprato un libro." },
      { "t": "我要两杯茶。", "tr": "Vorrei due tazze di tè." },
      { "t": "她有一只猫。", "tr": "Lei ha un gatto." }
    ] },
    { "gruppo": "Un classificatore per ogni forma", "items": [
      { "t": "请给我一瓶水。", "tr": "Mi dia una bottiglia d'acqua.", "nota": "瓶 è la bottiglia: non si dice mai 一个水." },
      { "t": "他吃了一碗饭。", "tr": "Ha mangiato una ciotola di riso." },
      { "t": "路边有一辆车。", "tr": "Sul bordo della strada c'è un'auto." },
      { "t": "我有三张票。", "tr": "Ho tre biglietti.", "nota": "张 per le cose piatte, come un biglietto." }
    ] },
    { "gruppo": "Con 这, 那 e 哪", "items": [
      { "t": "这本书很贵。", "tr": "Questo libro è caro." },
      { "t": "那个人是谁？", "tr": "Chi è quella persona?" },
      { "t": "你要哪杯茶？", "tr": "Quale tazza di tè vuoi?", "nota": "哪 si usa come 这 e 那, con il classificatore." }
    ] },
    { "gruppo": "Due: 两 o 二", "items": [
      { "t": "我有两个哥哥。", "tr": "Ho due fratelli maggiori." },
      { "t": "教室里有二十二个人。", "tr": "In classe ci sono ventidue persone.", "nota": "二 fa parte del numero 二十二." },
      { "t": "现在两点。", "tr": "Adesso sono le due.", "nota": "Per le ore si usa sempre 两点." }
    ] },
    { "gruppo": "Tempo e domande", "items": [
      { "t": "我等了两个小时。", "tr": "Ho aspettato due ore.", "nota": "小时 vuole 个." },
      { "t": "你有几个孩子？", "tr": "Quanti figli hai?" }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «due persone»?", "opzioni": [
      { "t": "两个人", "ok": true, "perche": "Davanti a un classificatore il «due» è 两, e per le persone il classificatore è 个." },
      { "t": "二个人", "ok": false, "perche": "二 serve per contare a voce e nei numeri composti, non davanti a un classificatore." },
      { "t": "两人个", "ok": false, "perche": "Il classificatore sta tra il numero e il nome, non dopo il nome." }
    ] },
    { "q": "Come dici «tre libri»?", "opzioni": [
      { "t": "三本书", "ok": true, "perche": "本 è il classificatore dei libri: numero + 本 + nome." },
      { "t": "三个书", "ok": false, "perche": "I libri hanno il loro classificatore, 本; 个 non è la forma normale per i libri." },
      { "t": "三书", "ok": false, "perche": "Senza classificatore il nome non si conta." }
    ] },
    { "q": "Come dici «tre biglietti» (del cinema)?", "opzioni": [
      { "t": "三张票", "ok": true, "perche": "Il biglietto è una cosa piatta, e per le cose piatte si usa 张." },
      { "t": "三杯票", "ok": false, "perche": "杯 è per ciò che sta in una tazza o in un bicchiere." },
      { "t": "三件票", "ok": false, "perche": "件 è per i vestiti e le faccende, non per i biglietti." }
    ] },
    { "q": "Al bar chiedi «due bottiglie d'acqua».", "opzioni": [
      { "t": "两瓶水", "ok": true, "perche": "瓶 è la bottiglia, e davanti al classificatore il «due» è 两." },
      { "t": "两张水", "ok": false, "perche": "张 è per le cose piatte: l'acqua non ha quella forma." },
      { "t": "两本水", "ok": false, "perche": "本 è il classificatore dei libri, non dei liquidi." }
    ] },
    { "q": "Come dici «questo libro» in una frase come «Questo libro è caro»?", "opzioni": [
      { "t": "这本书很贵。", "ok": true, "perche": "这 + 本 + 书: anche 这 vuole il classificatore." },
      { "t": "这书本很贵。", "ok": false, "perche": "Il classificatore viene prima del nome, non dopo." },
      { "t": "本这书很贵。", "ok": false, "perche": "Il classificatore non apre mai il gruppo: prima viene 这, poi 本." }
    ] },
    { "q": "Al mercato chiedi il prezzo di un oggetto: «Quanto costa questo?»", "opzioni": [
      { "t": "这个多少钱？", "ok": true, "perche": "多少钱 è l'espressione fissa per «quanto costa», e 这个 sta per la cosa che indichi." },
      { "t": "这个几钱？", "ok": false, "perche": "几 si usa per piccole quantità contabili, e 几钱 non è un'espressione di prezzo: serve 多少钱." }
    ] },
    { "q": "Vuoi dire «ventidue persone».", "opzioni": [
      { "t": "二十二个人", "ok": true, "perche": "二 è dentro il numero composto 二十二, e il numero intero precede 个." },
      { "t": "两十两个人", "ok": false, "perche": "Dentro un numero composto non si usa 两: 二十二 è sempre scritto con 二." },
      { "t": "二十二人个", "ok": false, "perche": "Il classificatore sta tra il numero e il nome." }
    ] },
    { "q": "Dici «tre mesi» (una durata).", "opzioni": [
      { "t": "三个月", "ok": true, "perche": "月 per le durate vuole 个: 三个月." },
      { "t": "三月", "ok": false, "perche": "三月 è il mese di marzo, non una durata di tre mesi." }
    ] },
    { "q": "Dici «una maglietta».", "opzioni": [
      { "t": "一件衣服", "ok": true, "perche": "件 è il classificatore dei vestiti." },
      { "t": "一条衣服", "ok": false, "perche": "条 è per le cose lunghe e sottili, non per un capo come la maglietta." },
      { "t": "一只衣服", "ok": false, "perche": "只 è per gli animali piccoli." }
    ] }
  ],
  "dialogo": {
    "titolo": "Al ristorante",
    "righe": [
      { "chi": "A", "t": "你好，请问几位？", "tr": "Buonasera, quanti siete?" },
      { "chi": "B", "t": "两位。", "tr": "Due." },
      { "chi": "A", "t": "请坐。你们要什么？", "tr": "Prego, accomodatevi. Che cosa prendete?" },
      { "chi": "B", "t": "我们要两碗饭，一条鱼，还有两杯茶。", "tr": "Prendiamo due ciotole di riso, un pesce e due tazze di tè." },
      { "chi": "A", "t": "好的，一共六十块。", "tr": "Va bene, in tutto sono sessanta yuan." }
    ],
    "esercizi": [
      { "q": "Perché A chiede 几位 e non 几个人?", "opzioni": [
        { "t": "位 è il modo cortese di contare le persone, adatto a un cameriere.", "ok": true, "perche": "位 si usa con i clienti e gli ospiti; 个 resta il classificatore neutro." },
        { "t": "Perché 位 si usa per gli oggetti.", "ok": false, "perche": "位 si usa per le persone, non per gli oggetti." },
        { "t": "Perché 几 vuole sempre 位.", "ok": false, "perche": "几 va con qualsiasi classificatore: 几个, 几本, 几杯." }
      ] },
      { "q": "Perché B dice 一条鱼?", "opzioni": [
        { "t": "Perché il pesce è lungo e sottile, e per queste forme si usa 条.", "ok": true, "perche": "条 è il classificatore delle cose lunghe e sottili, come un pesce." },
        { "t": "Perché il pesce è un animale piccolo.", "ok": false, "perche": "Il pesce non è contato con 只 ma con 条." },
        { "t": "Perché 条 è il classificatore del cibo.", "ok": false, "perche": "Il cibo non ha un classificatore unico: 碗 per il riso, 条 per il pesce." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano dimentica il classificatore (我有三朋友, 这书很贵), usa 二 invece di 两 davanti al classificatore (二个人), oppure conta il tempo con 个 anche quando non serve (三个天).",
    "perche": "In italiano «tre amici», «questo libro» e «due persone» si dicono senza una parola intermedia, e il «due» è sempre «due». Il cinese separa il numero dal nome con una parola di misura, e il «due» ha due forme diverse a seconda del posto: 两 prima del classificatore, 二 nei numeri.",
    "esci": "Fai un'abitudine: ogni volta che metti un numero, un 这 o un 那 davanti a un nome, chiediti qual è la parola di misura. Se non la conosci scrivi 个. Prima di scrivere «due», guarda che cosa segue: un classificatore vuole 两.",
    "esempi": [
      { "sbagliata": "我有三朋友。", "giusta": "我有三个朋友。" },
      { "sbagliata": "二个人", "giusta": "两个人" },
      { "sbagliata": "这书很贵。", "giusta": "这本书很贵。" },
      { "sbagliata": "我等了三个天。", "giusta": "我等了三天。" }
    ]
  },
  "curiosi": [
    { "titolo": "个, il classificatore tuttofare", "t": "个 è la forma semplificata di 個. Nel cinese parlato è così frequente che molte persone lo usano anche con nomi che avrebbero un classificatore proprio, e lo si capisce comunque. Per chi studia la regola è semplice: il classificatore proprio è più preciso, ed è quello che si trova nei testi e negli esami; con 个 non sbagli quando non sai quale usare." },
    { "titolo": "Il classificatore ricorda la forma", "t": "La parola 张 vuol dire anche «aprire, distendere», ed è il classificatore delle cose che si distendono, come un foglio o un tavolo. 条 è un pezzo lungo e flessibile: un pesce, una strada, un fiume. Il classificatore funziona come una piccola definizione del nome. Per questo in cinese si dice con naturalezza 一条路 e 一张纸, e un nome nuovo si ricorda meglio in coppia con il suo classificatore." },
    { "titolo": "Due, di nuovo: ore, date e centinaia", "t": "Le ore usano sempre 两: 两点 («le due»). Le date e i numeri d'ordine usano 二: 二月 (febbraio), 二号 (il due del mese), 第二 (secondo). Per le centinaia e le migliaia il parlato preferisce 两: 两百, 两千; in alcune regioni si sente anche 二百. Nei numeri che finiscono per due si usa 二: 十二, 二十二." },
    { "titolo": "I numeri si costruiscono sommando", "t": "Dopo 十 (dieci) i numeri sono addizioni e moltiplicazioni: 十一 è «dieci-uno» (11), 二十 è «due-dieci» (20), 二十三 è «due-dieci-tre» (23), 九十九 è «nove-dieci-nove» (99). Con 一百 («cento») si prosegue: 一百零一 è 101, dove 零 tiene il posto dello zero." }
  ],
  "pragmatica": "Al bar o al ristorante la formula più naturale è 来 + numero + classificatore + cosa: 来两杯咖啡 («due caffè, per favore»). Con il cameriere si dice 几位？ e si risponde 两位, con 个 negli altri casi. Il prezzo si chiede con 多少钱, e nel parlato i soldi si contano in 块: 三十五块. Quando indichi qualcosa al mercato, 这个 e 那个 bastano a farsi capire, anche quando non conosci il nome della cosa: il classificatore ti salva.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他有两本书。", "opzioni": [
      { "t": "Ha due libri.", "ok": true, "perche": "两 + 本 + 书: due volumi." },
      { "t": "Ha il secondo libro.", "ok": false, "perche": "«Secondo» si direbbe 第二本书; 两 conta, non ordina." },
      { "t": "Ha due penne.", "ok": false, "perche": "Il nome è 书, che vuol dire «libro»." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我要一瓶水。", "opzioni": [
      { "t": "Vorrei una bottiglia d'acqua.", "ok": true, "perche": "瓶 è il classificatore delle bottiglie." },
      { "t": "Vorrei un bicchiere d'acqua.", "ok": false, "perche": "Il bicchiere sarebbe 一杯水, con 杯." },
      { "t": "Vorrei due bottiglie d'acqua.", "ok": false, "perche": "Il numero della frase è 一 (una sola bottiglia), non 两." }
    ] },
    { "k": "buco", "zh": "我买了一＿衣服。", "tr": "Ho comprato un vestito.", "opzioni": [
      { "t": "件", "ok": true, "perche": "件 è il classificatore dei vestiti." },
      { "t": "本", "ok": false, "perche": "本 è il classificatore dei libri, non dei vestiti." },
      { "t": "杯", "ok": false, "perche": "杯 è per ciò che sta in una tazza o in un bicchiere." }
    ] },
    { "k": "buco", "zh": "请给我两＿茶。", "tr": "Mi dia due tazze di tè.", "opzioni": [
      { "t": "杯", "ok": true, "perche": "Il tè si serve in tazze o bicchieri: 杯." },
      { "t": "张", "ok": false, "perche": "张 è per le cose piatte." },
      { "t": "件", "ok": false, "perche": "件 è per i vestiti e per le faccende." }
    ] },
    { "k": "buco", "zh": "他有＿个孩子。", "tr": "Ha due figli.", "opzioni": [
      { "t": "两", "ok": true, "perche": "Davanti a un classificatore il «due» è 两." },
      { "t": "二", "ok": false, "perche": "二 non si mette davanti al classificatore." },
      { "t": "三", "ok": false, "perche": "三 vuol dire «tre», ma la traduzione dice «due»." }
    ] },
    { "k": "ordine", "t": "我有三个朋友", "tr": "Ho tre amici." },
    { "k": "ordine", "t": "这本书很贵", "tr": "Questo libro è caro." },
    { "k": "trasforma", "base": "我有朋友。", "consegna": "Dì che hai tre amici: aggiungi il numero e il classificatore.", "accetta": ["我有三个朋友。"], "rifiutate": [
      { "t": "我有三朋友。", "perche": "Manca il classificatore: tra 三 e 朋友 ci vuole 个." }
    ], "perche": "Il numero con il classificatore forma un blocco che sta davanti al nome." },
    { "k": "trasforma", "base": "我要一杯茶。", "consegna": "Cambia la frase: ora vuoi due tazze di tè.", "accetta": ["我要两杯茶。"], "rifiutate": [
      { "t": "我要二杯茶。", "perche": "Davanti a un classificatore il «due» è 两, non 二." }
    ], "perche": "Il numero cambia, il classificatore resta 杯: 两杯茶." },
    { "k": "trasforma", "base": "我买了一本书。", "consegna": "Dì che hai comprato «questo libro»: sostituisci il numero con 这.", "accetta": ["我买了这本书。"], "rifiutate": [
      { "t": "我买了这书。", "perche": "Anche 这 vuole il classificatore: 这本书." }
    ], "perche": "这 prende il posto del numero, e il classificatore 本 resta." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ho due sorelle maggiori.»", "a": "我有两个姐姐。", "accetta": ["我有两个姐姐。"], "perche": "有 + 两 + 个 + 姐姐: il «due» davanti al classificatore è 两." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Chi è quella persona?»", "a": "那个人是谁？", "accetta": ["那个人是谁？"], "perche": "那 + 个 + 人: quel gruppo chiede il classificatore, e 谁 è «chi»." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你要几杯咖啡？" },
      { "chi": "B", "t": "我要＿杯。", "buco": true }
    ], "opzioni": [
      { "t": "两", "ok": true, "perche": "Davanti a 杯 il «due» è 两, e il nome 咖啡 è già chiaro." },
      { "t": "二", "ok": false, "perche": "二 non va davanti al classificatore." },
      { "t": "个", "ok": false, "perche": "个 è un classificatore, non un numero: manca la quantità." }
    ] },
    { "k": "scegli", "q": "Quale frase è sbagliata?", "opzioni": [
      { "t": "我有二个姐姐。", "ok": true, "perche": "Davanti a 个 il «due» è 两: 我有两个姐姐." },
      { "t": "她有三只猫。", "ok": false, "perche": "Corretta: 只 è il classificatore dei gatti." },
      { "t": "我们有两个孩子。", "ok": false, "perche": "Corretta: 两 davanti a 个." }
    ] }
  ],
  "capaci": [
    "Sai contare persone e cose con la costruzione numero + classificatore + nome.",
    "Sai scegliere tra 个, 本, 杯, 瓶, 张, 件 e gli altri classificatori più comuni.",
    "Sai distinguere 两 da 二 e usare 这, 那, 哪 e 几 con il classificatore.",
    "Sai chiedere e dire quantità, ore e prezzi in una situazione quotidiana."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Measure words»: struttura numero + classificatore + nome, 个 e classificatori comuni, 点 per le ore",
    "Chinese Grammar Wiki (AllSet Learning), «Comparing 二 and 两»: 两 davanti al classificatore, 二 nei numeri composti, ore e centinaia",
    "CC-CEDICT, voci 个, 两, 张, 辆, 位, 块; Tatoeba (cinese), frasi con 有两个, 三张, 一杯, consultate con i corpora locali"
  ]
};
