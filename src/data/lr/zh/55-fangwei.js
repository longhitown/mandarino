/* Lezione 55 · Le parole di posizione: 前面, 后面, 左边, 右边, 旁边 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["fangwei"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "书在桌子上面。", "tr": "Il libro è sopra il tavolo." },
      { "t": "银行在学校旁边。", "tr": "La banca è accanto alla scuola." },
      { "t": "学校前面有一个公园。", "tr": "Davanti alla scuola c'è un parco." },
      { "t": "我坐在他左边。", "tr": "Mi siedo alla sua sinistra." }
    ],
    "domanda": "Guarda dove stanno 上面, 旁边, 前面, 左边 rispetto al nome che li precede (桌子, 学校, 他). Poi confronta la terza frase con le prime due: che cosa viene per primo, la cosa o il luogo?",
    "risposta": "La parola di posizione sta **sempre dopo** il punto di riferimento: 桌子 + 上面, 学校 + 旁边, 他 + 左边. In italiano è il contrario («sopra il tavolo»). Le due parti insieme formano un **luogo**. Con 在 la cosa che cerchi viene per prima (书在…, 银行在…); con 有 viene per primo il luogo (学校前面有…) e solo dopo la cosa."
  },
  "regola": {
    "enunciato": "Le parole di posizione (上面, 下面, 前面, 后面, 里面, 外面, 左边, 右边, 旁边, 对面, 中间) si mettono **dopo** il punto di riferimento e con lui formano un luogo: 学校前面 «davanti alla scuola». Quel luogo si usa come ogni altro luogo: dopo 在 (银行在学校前面) oppure all'inizio della frase con 有 o 是 (学校前面有一个公园).",
    "schema": ["cosa cercata", "在", "riferimento", "parola di posizione"],
    "punti": [
      { "ok": true, "t": "**Prima il riferimento, poi la parola di posizione**: 桌子上面, 学校前面, 我家旁边, 他左边. Il blocco intero è un luogo e non si spezza." },
      { "ok": true, "t": "**Due schemi per dire dove**: con 在 si dice dove sta una cosa già nota (银行在学校左边); con 有 si presenta una cosa nuova, prima il luogo e poi la cosa (学校左边有一家银行). Con 是 si identifica ciò che occupa quel posto (学校左边是银行)." },
      { "ok": true, "t": "**面 o 边, a seconda della parola**: 上面, 下面, 前面, 后面, 里面, 外面, 对面; 左边, 右边, 旁边. Per 上, 下, 前, 后, 里, 外 esistono anche le forme con 边 (前边, 后边, 上边…), registrate dal dizionario come equivalenti. Per «sinistra» e «destra» si usa di solito 左边 e 右边 (il dizionario dà anche 左面 e 右面); 中间 ha la sua forma fissa." },
      { "ok": true, "t": "**Con 上, 下 e 里 si può restare brevi**: 桌子上, 床下, 包里, 家里. Queste forme brevi sono molto usate dopo un nome comune." },
      { "ok": true, "t": "**Il riferimento può essere una persona**: 他旁边, 我前面, 你左边, 小王和小张中间. Dopo 坐在 o 站在 il blocco indica dove ci si siede o si sta: 坐在他左边 «alla sua sinistra»." },
      { "ok": true, "t": "**的 serve quando il luogo descrive un nome**: 学校旁边的银行 «la banca accanto alla scuola». Tra riferimento e parola di posizione 的 è facoltativo con le forme lunghe (学校(的)前面)." },
      { "ok": false, "t": "**Dopo un nome di solito non si lasciano 左, 右, 旁 da soli**: non 学校左, 我家旁, ma 学校左边, 我家旁边. Anche 前 e 后 da soli sono rari (esiste 门前, «davanti alla porta»): per iniziare usa 前面 e 后面. E **non si aggiunge 里 o 上 a città e paesi**: 他在北京, non 他在北京里." }
    ]
  },
  "logica": [
    "L'italiano mette la preposizione davanti al nome («sopra il tavolo», «accanto a casa»). Il cinese costruisce il luogo al contrario: nomina prima il punto di riferimento, poi dice **in quale parte di lui** ci si trova. 桌子上面 è letteralmente «la parte alta del tavolo», 学校前面 «la parte anteriore della scuola», 我左边 «il mio lato sinistro». Le parole di posizione sono quindi nomi di luogo (come 这儿 e 那儿), e per questo si comportano come i luoghi: si usano dopo 在, all'inizio della frase con 有, davanti a 的 per descrivere un nome.",
    "La stessa idea spiega i due schemi. Con **在** parli di una cosa che chi ascolta conosce e dici dove sta: 手机在桌子上面. Con **有** introduci una cosa nuova in un luogo che hai già nominato: 桌子上面有一个手机. Il soggetto di 在 è noto, quello di 有 compare dopo il luogo e porta di solito un numero o un classificatore (一个, 三本, 一家). Quando riferimento e cosa si scambiano, cambia anche il senso: 超市在银行前面 e 银行在超市前面 sono due frasi opposte."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Posizione", "Parola", "Dopo un nome, forma breve?", "Esempio"],
    "righe": [
      ["sopra", "上面 / 上边", "sì: 桌子上", "书在桌子上面。"],
      ["sotto", "下面 / 下边", "sì: 桌子下", "猫在椅子下面。"],
      ["dentro", "里面 / 里边", "sì: 包里", "手机在包里面。"],
      ["fuori", "外面 / 外边", "di solito si usa 外面", "他在房子外面。"],
      ["davanti", "前面 / 前边", "di solito si usa 前面", "学校前面有一个公园。"],
      ["dietro", "后面 / 后边", "di solito si usa 后面", "车在学校后面。"],
      ["a sinistra", "左边", "di solito si usa 左边", "银行在学校左边。"],
      ["a destra", "右边", "di solito si usa 右边", "我坐在他右边。"],
      ["accanto", "旁边", "di solito si usa 旁边", "我家旁边有一家书店。"],
      ["di fronte", "对面", "di solito si usa 对面", "咖啡店在马路对面。"],
      ["in mezzo, tra", "中间", "di solito si usa 中间", "我坐在小王和小张中间。"]
    ]
  },
  "esempi": [
    { "gruppo": "Con 在: dov'è una cosa nota", "items": [
      { "t": "手机在桌子上面。", "tr": "Il cellulare è sopra il tavolo." },
      { "t": "猫在椅子下面。", "tr": "Il gatto è sotto la sedia." },
      { "t": "车在学校后面。", "tr": "L'auto è dietro la scuola." },
      { "t": "超市在银行对面。", "tr": "Il supermercato è di fronte alla banca.", "nota": "对面 vale per due cose che si guardano, di solito dall'altra parte di una strada." }
    ] },
    { "gruppo": "Con 有: il luogo prima, la cosa dopo", "items": [
      { "t": "学校前面有一个公园。", "tr": "Davanti alla scuola c'è un parco." },
      { "t": "我家旁边有一家小书店。", "tr": "Accanto a casa mia c'è una piccola libreria." },
      { "t": "门后面有一把伞。", "tr": "Dietro la porta c'è un ombrello.", "nota": "一把 è il classificatore degli oggetti con il manico." },
      { "t": "桌子上有三本书。", "tr": "Sul tavolo ci sono tre libri.", "nota": "Forma breve: 桌子上 al posto di 桌子上面." }
    ] },
    { "gruppo": "Il riferimento è una persona", "items": [
      { "t": "我坐在他左边。", "tr": "Mi siedo alla sua sinistra." },
      { "t": "老师在我们前面。", "tr": "L'insegnante è davanti a noi." },
      { "t": "你右边的人是谁？", "tr": "Chi è la persona alla tua destra?", "nota": "的 collega il luogo (你右边) al nome che descrive (人)." }
    ] },
    { "gruppo": "In mezzo e di fronte", "items": [
      { "t": "我坐在小王和小张中间。", "tr": "Mi siedo tra Xiao Wang e Xiao Zhang." },
      { "t": "咖啡店在马路对面。", "tr": "Il bar è dall'altra parte della strada." }
    ] },
    { "gruppo": "Il luogo descrive un nome, o identifica", "items": [
      { "t": "学校旁边的银行很大。", "tr": "La banca accanto alla scuola è grande." },
      { "t": "左边是我的房间，右边是姐姐的房间。", "tr": "A sinistra c'è la mia camera, a destra quella di mia sorella maggiore.", "nota": "是 identifica ciò che occupa tutto quel lato." },
      { "t": "外面下雨了。", "tr": "Fuori piove.", "nota": "Il luogo apre la frase anche senza 在 né 有." },
      { "t": "请在前面等我。", "tr": "Aspettami davanti, per favore." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Il libro è sopra il tavolo»?", "opzioni": [
      { "t": "书在桌子上面。", "ok": true, "perche": "Prima il riferimento (桌子), poi la parola di posizione (上面): insieme formano il luogo dopo 在." },
      { "t": "书在上面桌子。", "ok": false, "perche": "Segue l'ordine italiano «sopra il tavolo»: in cinese la parola di posizione viene dopo il nome." }
    ] },
    { "q": "Come dici «Davanti alla scuola c'è un supermercato»?", "opzioni": [
      { "t": "学校前面有一个超市。", "ok": true, "perche": "Con 有 il luogo viene per primo e la cosa nuova (一个超市) per ultima." },
      { "t": "学校有前面一个超市。", "ok": false, "perche": "Il luogo è un blocco unico (学校前面): 有 non può infilarsi in mezzo." }
    ] },
    { "q": "Qualcuno chiede dov'è il tuo cellulare. Che cosa rispondi?", "opzioni": [
      { "t": "在桌子上面。", "ok": true, "perche": "Il cellulare è noto a tutti e due, quindi basta 在 e il luogo." },
      { "t": "有桌子上面。", "ok": false, "perche": "有 introduce una cosa nuova e vuole il luogo prima; qui il luogo è la risposta, e con 在 si risponde a «dov'è»." }
    ] },
    { "q": "Vuoi dire «la banca accanto alla scuola» per distinguere una banca da un'altra. Quale frase?", "opzioni": [
      { "t": "学校旁边的银行", "ok": true, "perche": "Luogo + 的 + nome: il luogo descrive la banca." },
      { "t": "旁边学校的银行", "ok": false, "perche": "Il riferimento (学校) deve stare prima della parola di posizione, anche dentro un'espressione con 的." }
    ] },
    { "q": "Vuoi dire «Il libro è sul tavolo» nel modo breve del parlato. Quale frase?", "opzioni": [
      { "t": "书在桌子上。", "ok": true, "perche": "上 dopo un nome comune (桌子) è la forma breve normale di 上面." },
      { "t": "书在桌子的上。", "ok": false, "perche": "Con la forma breve 的 non si mette: 的 si aggiunge soltanto davanti a una forma lunga (桌子的上面)." }
    ] },
    { "q": "Come dici «La banca è a sinistra della scuola»?", "opzioni": [
      { "t": "银行在学校左边。", "ok": true, "perche": "Per «a sinistra» si usa la parola intera 左边." },
      { "t": "银行在学校左。", "ok": false, "perche": "左 da solo qui non forma il luogo; serve 左边." }
    ] },
    { "q": "Dici soltanto che una persona si trova a Pechino (la città). Quale frase?", "opzioni": [
      { "t": "他在北京。", "ok": true, "perche": "Con città e paesi 在 basta: non serve nessuna parola di posizione." },
      { "t": "他在北京里。", "ok": false, "perche": "里 si usa con spazi che hanno un dentro (房间里, 包里): una città è il luogo stesso." }
    ] },
    { "q": "Il bar è dall'altra parte della strada. Quale frase lo dice?", "opzioni": [
      { "t": "咖啡店在马路对面。", "ok": true, "perche": "对面 dice «dal lato opposto», che è proprio la posizione descritta." },
      { "t": "咖啡店在马路旁边。", "ok": false, "perche": "旁边 dice «a fianco della strada»: non dice che il bar sta sul lato opposto." }
    ] },
    { "q": "Siedi tra due amici, Xiao Wang e Xiao Zhang. Quale frase?", "opzioni": [
      { "t": "我坐在小王和小张中间。", "ok": true, "perche": "中间 dopo i due riferimenti uniti da 和 significa «tra loro»." },
      { "t": "我坐在小王中间和小张。", "ok": false, "perche": "中间 sta dopo i due riferimenti insieme, non dopo uno solo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Dov'è la biblioteca?",
    "righe": [
      { "chi": "A", "t": "请问，图书馆在哪里？", "tr": "Scusi, dov'è la biblioteca?" },
      { "chi": "B", "t": "你看见前面那个超市了吗？图书馆就在超市后面。", "tr": "Vede il supermercato lì davanti? La biblioteca è proprio dietro il supermercato." },
      { "chi": "A", "t": "超市后面？我只看见超市旁边有一家银行。", "tr": "Dietro il supermercato? Vedo solo una banca accanto al supermercato." },
      { "chi": "B", "t": "对，银行右边有一条小路，走进去就是图书馆。", "tr": "Sì, a destra della banca c'è un vicolo: entri e trova la biblioteca." },
      { "chi": "A", "t": "图书馆对面有什么？", "tr": "Che cosa c'è di fronte alla biblioteca?" },
      { "chi": "B", "t": "对面有一家咖啡店，你很快就能找到。", "tr": "Di fronte c'è un bar: la troverà presto." }
    ],
    "esercizi": [
      { "q": "Dove si trova la biblioteca secondo B?", "opzioni": [
        { "t": "Dietro il supermercato, in fondo a un vicolo.", "ok": true, "perche": "B dice 超市后面 e poi indica la strada: il vicolo a destra della banca." },
        { "t": "Davanti al supermercato.", "ok": false, "perche": "B dice 后面 (dietro), non 前面; 前面 è il supermercato visto da A." },
        { "t": "Dall'altra parte della strada, di fronte alla banca.", "ok": false, "perche": "对面 è usato per il bar che sta di fronte alla biblioteca, non per la banca." }
      ] },
      { "q": "Perché B dice 银行右边有一条小路 con 有 e non con 在?", "opzioni": [
        { "t": "Perché il vicolo è una cosa nuova per A, e 有 la presenta dopo il luogo.", "ok": true, "perche": "Con 有 prima si nomina il luogo (银行右边), poi la cosa nuova (一条小路)." },
        { "t": "Perché 在 non può stare con 右边.", "ok": false, "perche": "银行在学校右边 è corretta: 在 e 右边 vanno benissimo insieme." },
        { "t": "Perché il vicolo è lontano.", "ok": false, "perche": "La distanza non c'entra: la scelta tra 有 e 在 dipende dal fatto che la cosa sia nota o nuova." }
      ] },
      { "q": "Che cosa c'è di fronte alla biblioteca?", "opzioni": [
        { "t": "Un bar.", "ok": true, "perche": "对面有一家咖啡店: 对面 è il lato opposto e 咖啡店 è il bar." },
        { "t": "Un supermercato.", "ok": false, "perche": "Il supermercato è nominato come punto di riferimento (超市后面), non è di fronte." },
        { "t": "Una banca.", "ok": false, "perche": "La banca sta accanto al supermercato e all'inizio del vicolo, non di fronte alla biblioteca." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette la parola di posizione prima del nome (前面学校, 上面桌子), la fa precedere da 的 anche quando è breve (桌子的上), la usa con le città (北京里) e spezza il luogo infilandoci 有 (我家有旁边一个公园).",
    "perche": "L'italiano apre il luogo con una preposizione («sopra», «accanto a») e poi mette il nome. In cinese manca la preposizione: il riferimento viene per primo e la parola di posizione chiude il luogo. Il luogo resta un blocco, e verbi come 有 o 在 stanno fuori, prima o dopo di lui.",
    "esci": "Leggi il luogo da sinistra a destra come «punto di riferimento, poi la sua parte»: 学校 + 前面, 桌子 + 上面. Poi decidi lo schema: cosa nota, 在 dopo di lei; cosa nuova, luogo per primo e 有 con la cosa alla fine.",
    "esempi": [
      { "sbagliata": "书在上面桌子。", "giusta": "书在桌子上面。" },
      { "sbagliata": "我家有旁边一个公园。", "giusta": "我家旁边有一个公园。" },
      { "sbagliata": "桌子的上有一本书。", "giusta": "桌子上有一本书。" },
      { "sbagliata": "他在北京里。", "giusta": "他在北京。" }
    ]
  },
  "curiosi": [
    { "titolo": "Le due sillabe che seguono", "t": "Le parole con 面 si dicono spesso con la seconda sillaba debole: 前面 si sente qiánmian, 里面 lǐmian. Il dizionario CC-CEDICT registra per 上面, 下面, 前面, 里面 e 外面 anche la pronuncia con il tono neutro, accanto a quella con il quarto tono. Le forme con 边 (前边, 后边) sono date come equivalenti di quelle con 面. Per 左 e 右 il dizionario dà sia 左边, 右边 sia 左面, 右面." },
    { "titolo": "前面 e 后面 oltre lo spazio", "t": "Il dizionario dà a 前面 anche il senso di «precedente, sopra (in un testo)» e a 后面 quello di «più avanti, dopo»: sono parole di ordine, oltre che di luogo. Nello spazio dicono anche «avanti» e «indietro»: 请往前面走 «Vada avanti». Quando il contesto è una fila o un percorso, 前面 è ciò che sta più avanti." },
    { "titolo": "左右 vuol dire anche «circa»", "t": "Dopo un numero, 左右 significa «circa»: 三十岁左右 «sui trent'anni». Come 左边 e 右边, anche 左右 resta legato alla coppia sinistra-destra, ma qui non indica nessuna posizione." },
    { "titolo": "Quando 里 e 上 non si aggiungono", "t": "Con città e paesi si dice 在中国, 在北京, senza parole di posizione: la città è già un luogo. Con alcuni eventi, invece, 上 è obbligatorio: 在会议上 «alla riunione», 在课上 «a lezione»." }
  ],
  "pragmatica": "Per dare indicazioni di strada la coppia 左边 e 右边 dipende da chi guarda: se serve chiarezza, nomina il punto di vista (你右边, 我左边, 银行的左边). 旁边 non dice da che lato, dice soltanto «vicino, di fianco» ed è la parola più usata per localizzare qualcosa in modo generico. 对面 si usa di solito per due cose che si guardano, tipicamente dai due lati di una strada o di un tavolo. Con persone sconosciute si apre con 请问.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "学校前面有一个超市。", "opzioni": [
      { "t": "Davanti alla scuola c'è un supermercato.", "ok": true, "perche": "学校前面 è «davanti alla scuola»; 有 presenta il supermercato." },
      { "t": "Dietro la scuola c'è un supermercato.", "ok": false, "perche": "Dietro si dice 后面; qui c'è 前面." },
      { "t": "A sinistra della scuola c'è un supermercato.", "ok": false, "perche": "A sinistra si dice 左边; qui c'è 前面." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "超市在银行前面。", "opzioni": [
      { "t": "Il supermercato è davanti alla banca.", "ok": true, "perche": "Il soggetto di 在 è la cosa che si localizza (超市), il riferimento è 银行." },
      { "t": "La banca è davanti al supermercato.", "ok": false, "perche": "Sarebbe 银行在超市前面: riferimento e cosa si scambiano." },
      { "t": "Il supermercato e la banca sono uno accanto all'altro.", "ok": false, "perche": "Per dire «accanto» serve 旁边, non 前面." }
    ] },
    { "k": "buco", "zh": "银行在学校＿。", "tr": "La banca è accanto alla scuola.", "opzioni": [
      { "t": "旁边", "ok": true, "perche": "旁边 è la parola intera per «accanto»." },
      { "t": "旁", "ok": false, "perche": "La parola intera per «accanto» è 旁边: 旁 da solo non si usa così." },
      { "t": "边旁", "ok": false, "perche": "Le due sillabe sono in ordine inverso: la parola è 旁边." }
    ] },
    { "k": "buco", "zh": "我家＿有一家书店。", "tr": "Davanti a casa mia c'è una libreria.", "opzioni": [
      { "t": "前面", "ok": true, "perche": "Il luogo (我家前面) viene prima di 有." },
      { "t": "在前面", "ok": false, "perche": "Con 有 il luogo non è introdotto da 在." },
      { "t": "前的", "ok": false, "perche": "前 non si lega al nome con 的 e non forma un luogo." }
    ] },
    { "k": "ordine", "t": "咖啡店在马路对面", "tr": "Il bar è dall'altra parte della strada." },
    { "k": "ordine", "t": "我家旁边有一个公园", "tr": "Accanto a casa mia c'è un parco." },
    { "k": "trasforma", "base": "桌子上有一本书。", "consegna": "Parti dal libro, che è una cosa nota, e dì dov'è con 在: «Il libro è sul tavolo».", "accetta": ["书在桌子上。", "书在桌子上面。", "书在桌子上边。", "那本书在桌子上。", "那本书在桌子上面。"], "rifiutate": [
      { "t": "书有桌子上。", "perche": "有 presenta una cosa dopo il luogo; per dire dove sta una cosa nota serve 在." }
    ], "perche": "Con 在 la cosa nota viene per prima, poi 在 e il luogo." },
    { "k": "trasforma", "base": "银行在学校前面。", "consegna": "Parti dal luogo e usa 有: «Davanti alla scuola c'è una banca».", "accetta": ["学校前面有一家银行。", "学校前面有一个银行。", "学校前面有银行。", "学校前边有一家银行。"], "rifiutate": [
      { "t": "有学校前面一家银行。", "perche": "有 sta dopo il luogo e prima della cosa, non all'inizio." }
    ], "perche": "Con 有 il luogo apre la frase e la cosa nuova arriva alla fine." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Il gatto è sotto la sedia.»", "a": "猫在椅子下面。", "accetta": ["猫在椅子下。", "猫在椅子下边。", "那只猫在椅子下面。"], "perche": "Cosa nota + 在 + riferimento + 下面." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Accanto alla scuola c'è un supermercato.»", "a": "学校旁边有一个超市。", "accetta": ["学校旁边有一家超市。", "学校的旁边有一个超市。", "学校的旁边有一家超市。"], "perche": "Il luogo (学校旁边) per primo, poi 有 e la cosa nuova con il suo classificatore." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Mi siedo alla destra di Xiao Wang.»", "a": "我坐在小王右边。", "accetta": ["我坐在小王的右边。"], "perche": "坐在 + riferimento + 右边: la parola di posizione chiude il luogo." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "请问，邮局在哪里？" },
      { "chi": "B", "t": "邮局在银行＿，你看，在马路那边。", "buco": true }
    ], "opzioni": [
      { "t": "对面", "ok": true, "perche": "B indica «dall'altra parte della strada»: 对面." },
      { "t": "左", "ok": false, "perche": "左 da solo non forma il luogo; servirebbe 左边, e comunque non dice «dall'altra parte»." },
      { "t": "对边", "ok": false, "perche": "La parola per «di fronte» è 对面, con 面." }
    ] },
    { "k": "scegli", "q": "In quale frase la parola di posizione è al posto sbagliato?", "opzioni": [
      { "t": "他坐在旁边我。", "ok": true, "perche": "Il riferimento (我) deve precedere 旁边: 他坐在我旁边." },
      { "t": "他坐在我旁边。", "ok": false, "perche": "Frase corretta: 坐在 + riferimento + 旁边." },
      { "t": "他坐在我前面。", "ok": false, "perche": "Frase corretta: 坐在 + riferimento + 前面." }
    ] }
  ],
  "capaci": [
    "Sai dire dov'è una cosa nota con 在 + riferimento + parola di posizione.",
    "Sai presentare una cosa nuova con il luogo per primo e 有 (学校前面有一个公园).",
    "Sai scegliere tra 前面, 后面, 左边, 右边, 旁边, 对面 e 中间 e usare le forme brevi 上 e 里 con i nomi comuni.",
    "Sai descrivere un nome con il suo luogo e 的 (学校旁边的银行) e dare indicazioni dal tuo punto di vista."
  ],
  "glosse": {
    "学校前面有": "Davanti alla scuola c'è",
    "银行在学校前面": "La banca è davanti alla scuola",
    "银行在学校左边": "La banca è a sinistra della scuola",
    "学校左边有一家银行": "A sinistra della scuola c'è una banca",
    "学校左边是银行": "A sinistra della scuola c'è la banca",
    "小王和小张中间": "Tra Xiao Wang e Xiao Zhang",
    "坐在他左边": "Seduto alla sua sinistra",
    "学校旁边的银行": "La banca accanto alla scuola",
    "桌子上面有一个手机": "Sul tavolo c'è un cellulare",
    "超市在银行前面": "Il supermercato è davanti alla banca",
    "银行在超市前面": "La banca è davanti al supermercato",
    "请往前面走": "Vada avanti, per favore",
    "三十岁左右": "Sui trent'anni",
    "银行的左边": "A sinistra della banca"
  },
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Expressing location with zai... shang / xia / li»: 在 + luogo + 上 / 下 / 里 / 旁边, i «nomi di luogo» 方位词 con forma a uno e a due caratteri (上 / 上面 / 上边)",
    "CC-CEDICT, voci 上面, 下面, 前面, 后面, 里面, 外面, 左边, 右边, 旁边, 对面, 中间 (consultate nel dizionario locale)",
    "Tatoeba (cmn.tsv, es. 我坐在他旁边, 小山后面有个美丽的山谷), verificate con grep nel corpus locale"
  ]
};
