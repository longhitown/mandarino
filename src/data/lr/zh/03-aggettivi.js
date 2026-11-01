/* Lezione 3 · Gli aggettivi: 很 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["aggettivi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "茶很热。", "tr": "Il tè è caldo." },
      { "t": "我很累。", "tr": "Sono stanco." },
      { "t": "这本书不贵。", "tr": "Questo libro non è caro." },
      { "t": "他很忙，我也很忙。", "tr": "Lui è impegnato, e anch'io sono impegnato." }
    ],
    "domanda": "Cerca in queste frasi il verbo «essere». C'è? E la parola 很: la traduzione italiana ha un «molto» ogni volta che la incontri? Guarda poi la terza frase: c'è 很 anche lì?",
    "risposta": "Il verbo «essere» (**是**) non c'è mai: l'aggettivo da solo fa il lavoro del verbo, come se dicessi «il tè *caldeggia*». **很** compare nelle frasi affermative davanti all'aggettivo, ma l'italiano non ha nessun «molto»: «Sono stanco» non è «Sono molto stanco». Nella frase negativa (这本书不贵) **很 sparisce** e al suo posto c'è **不**."
  },
  "regola": {
    "enunciato": "In cinese l'aggettivo funziona da verbo: si dice **soggetto + 很 + aggettivo**, senza 是. 很 qui fa da legante e di norma non significa «molto»; per dare un grado preciso si cambia la parola davanti all'aggettivo (非常, 太…了, 有点, 不太).",
    "schema": ["soggetto", "很 / 非常 / 太…了 / 有点", "aggettivo"],
    "punti": [
      { "ok": true, "t": "**Niente 是**: 茶很热, 我很累, 房间很大. 是 serve per collegare due nomi (他是老师), non un nome e un aggettivo." },
      { "ok": true, "t": "**很 lega**: nella frase affermativa neutra l'aggettivo ha quasi sempre 很 davanti. Con la voce che lo accentua, 很 torna a voler dire «molto»; nel parlato normale resta leggero e non si traduce." },
      { "ok": true, "t": "**Un aggettivo nudo suggerisce un confronto**: 这个大，那个小 («questo è grande, quello è piccolo»). Per questo, se descrivi e basta, usa 很: 这个很大." },
      { "ok": true, "t": "**Gradi diversi**: 非常 («molto, davvero»), 真 («davvero», con tono di sorpresa o apprezzamento), 太…了 («troppo»), 有点 («un po'», di solito per cose che non piacciono), 比较 («abbastanza»)." },
      { "ok": true, "t": "**Negazione con 不**: 不贵 («non è caro»), 不太贵 («non è molto caro»). Al negativo 很 non compare: non si dice 不很贵 nel parlato." },
      { "ok": true, "t": "**Domanda**: aggettivo + 吗 (你累吗？) oppure aggettivo + 不 + aggettivo (你累不累？). Nelle domande 很 non serve." },
      { "ok": true, "t": "**也 e 都 vengono prima di 很**: 我也很累, 他们都很忙. L'ordine è sempre soggetto, 也/都, 很, aggettivo." },
      { "ok": false, "t": "**Mai 是 davanti all'aggettivo descrittivo**: 我是累, 茶是热 non si dicono. Le uniche eccezioni sono frasi di enfasi o di contrasto (这本书是贵，但是很好), che qui non servono." }
    ]
  },
  "logica": [
    "L'italiano ha un solo schema per dire «il tè è caldo»: verbo essere + aggettivo. Il cinese ha due famiglie di frasi: quelle con **是** unisce due nomi (他是学生, «lui è uno studente»); quelle con l'aggettivo, dove l'aggettivo stesso porta il predicato. Per i linguisti cinesi gli aggettivi sono «verbi di qualità»: 热 vuol dire «essere caldo», quindi non serve nessun altro verbo, come 吃 vuol dire «mangiare».",
    "Perché allora 很? Perché un aggettivo solo, senza nulla davanti, in una frase affermativa suona come un confronto («questo è grande, quell'altro no»). 很 toglie il confronto e rende la frase una semplice descrizione. È una parola di appoggio, e per questo nella traduzione sparisce. Quando serve un grado vero, la lingua ha parole dedicate (非常, 太, 有点) e 很 non si ripete: 非常热, mai 很非常热. Nella negazione il confronto non c'è, perciò 不 basta: 不热."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Una descrizione semplice", "很 + aggettivo", "茶很热。"],
      ["Molto, davvero", "非常 + aggettivo", "她非常高兴。"],
      ["Troppo (lamentela)", "太 + aggettivo + 了", "太贵了！"],
      ["Un po' (cosa che non piace)", "有点 + aggettivo", "今天有点冷。"],
      ["Non è così", "不 + aggettivo", "这本书不贵。"],
      ["Non molto", "不太 + aggettivo", "这个菜不太好吃。"],
      ["Anche / tutti", "也 / 都 + 很 + aggettivo", "我们都很累。"],
      ["Un confronto implicito", "aggettivo nudo", "这个大，那个小。"],
      ["Domanda sì/no", "aggettivo + 吗", "你累吗？"]
    ]
  },
  "esempi": [
    { "gruppo": "Descrivere senza «essere»: soggetto + 很 + aggettivo", "items": [
      { "t": "茶很热。", "tr": "Il tè è caldo." },
      { "t": "房间很大。", "tr": "La stanza è grande." },
      { "t": "他很忙。", "tr": "Lui è impegnato." },
      { "t": "今天很冷。", "tr": "Oggi fa freddo.", "nota": "Per il tempo che fa si usa lo stesso schema: nessun verbo." }
    ] },
    { "gruppo": "Il grado giusto", "items": [
      { "t": "她非常高兴。", "tr": "È molto contenta.", "nota": "非常 dice davvero «molto»." },
      { "t": "这件衣服太贵了！", "tr": "Questo vestito è troppo caro!", "nota": "太 … 了 ha un tono di lamentela." },
      { "t": "今天有点冷。", "tr": "Oggi fa un po' freddo.", "nota": "有点 lascia capire che il freddo dà fastidio." },
      { "t": "这个菜真好吃。", "tr": "Questo piatto è davvero buono.", "nota": "真 aggiunge entusiasmo, tipico del parlato." }
    ] },
    { "gruppo": "Dire di no: 不 e 不太", "items": [
      { "t": "这本书不贵。", "tr": "Questo libro non è caro." },
      { "t": "我不饿。", "tr": "Non ho fame." },
      { "t": "这个菜不太好吃。", "tr": "Questo piatto non è molto buono.", "nota": "不太 attenua: «non tanto»." }
    ] },
    { "gruppo": "Anche, tutti e il confronto", "items": [
      { "t": "我也很累。", "tr": "Sono stanco anch'io." },
      { "t": "他们都很好。", "tr": "Stanno tutti bene." },
      { "t": "这个大，那个小。", "tr": "Questo è grande, quello è piccolo.", "nota": "Senza 很 i due aggettivi si contrappongono." }
    ] },
    { "gruppo": "Chiedere: l'aggettivo con 吗", "items": [
      { "t": "你累吗？", "tr": "Sei stanco?" },
      { "t": "你渴不渴？", "tr": "Hai sete?", "nota": "渴不渴: la forma affermativa + negativa, molto frequente." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Il tè è caldo»?", "opzioni": [
      { "t": "茶很热。", "ok": true, "perche": "L'aggettivo fa da predicato, 很 lo regge e non c'è nessun verbo «essere»." },
      { "t": "茶是热。", "ok": false, "perche": "是 collega due nomi, non un nome e un aggettivo: l'errore nasce dal «è» italiano." }
    ] },
    { "q": "Descrivi semplicemente come sei, senza sfumature: «Sono stanco».", "opzioni": [
      { "t": "我很累。", "ok": true, "perche": "La forma neutra: 很 è una parola di appoggio e non intensifica." },
      { "t": "我非常累。", "ok": false, "perche": "非常 dice «sono davvero molto stanco», un grado forte che qui non vuoi." }
    ] },
    { "q": "Al mercato giudichi un prezzo che non vuoi pagare: «È troppo caro!»", "opzioni": [
      { "t": "太贵了！", "ok": true, "perche": "太 … 了 esprime l'eccesso, con la lamentela che accompagna." },
      { "t": "非常贵！", "ok": false, "perche": "非常贵 vuol dire «molto caro» e descrive, ma non dice che il prezzo è eccessivo." }
    ] },
    { "q": "Dici a un amico che non ti piace del tutto il freddo di oggi: «Oggi fa un po' freddo (e mi dà fastidio)».", "opzioni": [
      { "t": "今天有点冷。", "ok": true, "perche": "有点 porta un giudizio negativo: è la forma giusta per ciò che dispiace." },
      { "t": "今天很有点冷。", "ok": false, "perche": "Il grado si mette con una parola sola: 很 e 有点 non si sommano." }
    ] },
    { "q": "Commenti con un complimento il piatto che hai appena assaggiato: «È davvero buono!»", "opzioni": [
      { "t": "这个菜真好吃。", "ok": true, "perche": "真 è un complimento caldo, adatto a un piatto che piace." },
      { "t": "这个菜有点好吃。", "ok": false, "perche": "有点 sa di lamentela: per un elogio suona strano." }
    ] },
    { "q": "Come dici «Questo libro non è caro»?", "opzioni": [
      { "t": "这本书不贵。", "ok": true, "perche": "Con la negazione basta 不 + aggettivo, senza 很." },
      { "t": "这本书没贵。", "ok": false, "perche": "没 nega un fatto non avvenuto e non si usa davanti a un aggettivo di qualità: qui serve 不." }
    ] },
    { "q": "Come dici «Anche io sono stanco»?", "opzioni": [
      { "t": "我也很累。", "ok": true, "perche": "也 viene prima di 很: soggetto, 也, 很, aggettivo." },
      { "t": "我很也累。", "ok": false, "perche": "也 non può stare tra 很 e l'aggettivo: 很 deve restare vicino all'aggettivo." }
    ] },
    { "q": "Che cosa comunica 这个大，那个小?", "opzioni": [
      { "t": "Un confronto: questo è grande, quello è piccolo.", "ok": true, "perche": "Due aggettivi nudi, senza 很, si contrappongono tra loro." },
      { "t": "Una descrizione neutra di due oggetti.", "ok": false, "perche": "Per una descrizione neutra servirebbe 很: 这个很大，那个很小." }
    ] },
    { "q": "Domandi a un amico, senza dare niente per scontato: «Il tè è caldo?»", "opzioni": [
      { "t": "茶热吗？", "ok": true, "perche": "Nelle domande con 吗 l'aggettivo sta da solo, senza 很." },
      { "t": "茶是热吗？", "ok": false, "perche": "Anche nella domanda manca 是 davanti all'aggettivo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Un tè con un amico",
    "righe": [
      { "chi": "A", "t": "你最近忙吗？", "tr": "Sei impegnato in questi giorni?" },
      { "chi": "B", "t": "很忙，你呢？", "tr": "Molto, e tu?" },
      { "chi": "A", "t": "我不太忙。今天有点冷，我们去喝茶吧。", "tr": "Io non tanto. Oggi fa un po' freddo, andiamo a bere un tè." },
      { "chi": "B", "t": "好啊，我也想喝热茶。", "tr": "Volentieri, voglio anch'io un tè caldo." },
      { "chi": "A", "t": "那家的茶很好喝，也不贵。", "tr": "Il tè di quel posto è buono e non è caro." }
    ],
    "esercizi": [
      { "q": "Perché A dice 我不太忙 e non 我不很忙?", "opzioni": [
        { "t": "Perché al negativo 很 non compare: si dice 不 oppure 不太.", "ok": true, "perche": "La negazione usa 不 + aggettivo; 不太 attenua." },
        { "t": "Perché 太 vuol dire «molto».", "ok": false, "perche": "不太 vuol dire «non tanto»: il significato è opposto a «molto»." },
        { "t": "Perché 忙 è un verbo d'azione.", "ok": false, "perche": "忙 è un aggettivo di qualità: per questo segue lo schema dell'aggettivo." }
      ] },
      { "q": "Che cosa dice A con 今天有点冷?", "opzioni": [
        { "t": "Oggi fa un po' freddo (e il freddo dà un po' fastidio).", "ok": true, "perche": "有点 dà un tono negativo, ed è il motivo per cui propone di bere qualcosa di caldo." },
        { "t": "Oggi fa freddissimo.", "ok": false, "perche": "Per «freddissimo» servirebbe 非常冷." },
        { "t": "Ieri faceva freddo.", "ok": false, "perche": "Nella frase c'è 今天, e nessun tempo passato." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette 是 davanti all'aggettivo (我是累, 他是很高) e, al contrario, dimentica la parola di appoggio e dice 茶热 per «il tè è caldo». Capita anche di leggere 很 come «molto» in ogni frase e di aggiungerlo nel negativo (不很贵).",
    "perche": "L'italiano usa il verbo «essere» per legare soggetto e aggettivo, quindi si traduce parola per parola con 是. In cinese 是 collega due nomi; con l'aggettivo il legame lo fa 很, che non ha un significato forte.",
    "esci": "Prima di scrivere 是 chiediti se dopo c'è un nome (他是老师) o un aggettivo (他很高). Con l'aggettivo, in una frase affermativa, scrivi 很 davanti; nella negazione scrivi 不 e togli 很.",
    "esempi": [
      { "sbagliata": "我是累。", "giusta": "我很累。" },
      { "sbagliata": "茶是热。", "giusta": "茶很热。" },
      { "sbagliata": "我是很忙。", "giusta": "我很忙。" },
      { "sbagliata": "这本书没贵。", "giusta": "这本书不贵。" }
    ]
  },
  "curiosi": [
    { "titolo": "Gli aggettivi sono verbi di qualità", "t": "Nelle grammatiche del cinese gli aggettivi predicativi si chiamano spesso «verbi stativi»: 热 non vuol dire «caldo» ma «essere caldo». Questo spiega perché non serve 是 e perché si possono usare gli stessi avverbi dei verbi (也, 都, 不). Spiega anche 好吃 e 好喝: 好 + verbo dà un aggettivo («buono da mangiare», «buono da bere»), che si usa come qualunque altro aggettivo: 咖啡很好喝." },
    { "titolo": "很 non è sempre «molto»", "t": "Il carattere 很 nei dizionari ha due vite: «molto» quando è accentato (他很高！) e semplice legante quando non lo è. Questo secondo uso è il più frequente nel parlato: 我很好 vuol dire semplicemente «sto bene». Se vuoi essere sicuro di dire «molto» usa 非常 o 特别, che portano sempre il grado forte." },
    { "titolo": "Quando l'aggettivo cambia, arriva 了", "t": "Con gli aggettivi, 了 in fondo alla frase non indica un fatto compiuto ma una trasformazione: 天黑了 («è diventato buio»), 茶凉了 («il tè si è raffreddato»). Se vuoi solo descrivere lo stato, senza il passaggio da una condizione all'altra, 了 non c'è: 茶很凉." }
  ],
  "pragmatica": "Nel parlato di ogni giorno il registro più comune è 很 + aggettivo, con 太…了 per lamentarsi o esclamare (太好了！ «che bello!», «perfetto!»), 真 + aggettivo per commentare qualcosa che ti piace e 有点 per gli inconvenienti. Una parola di appoggio come 挺 (挺好的, «piuttosto bene») o 比较 («abbastanza») dà sfumature in più, ma l'impianto resta lo stesso. Rispondere con il solo aggettivo (累。) è normale in risposta a una domanda: 你累吗？ — 累。",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我很累。", "opzioni": [
      { "t": "Sono stanco.", "ok": true, "perche": "我 + 很 + 累: descrizione neutra." },
      { "t": "Ieri ero stanco.", "ok": false, "perche": "Manca una parola di tempo come 昨天: la frase parla di adesso." },
      { "t": "Non sono stanco.", "ok": false, "perche": "Per negare si direbbe 我不累." }
    ] },
    { "k": "buco", "zh": "茶＿热。", "tr": "Il tè è caldo.", "opzioni": [
      { "t": "很", "ok": true, "perche": "Con l'aggettivo si usa 很 come legante." },
      { "t": "是", "ok": false, "perche": "是 collega due nomi, non un nome e un aggettivo." },
      { "t": "有", "ok": false, "perche": "有 vuol dire «avere» o «esserci»: non lega un aggettivo." }
    ] },
    { "k": "buco", "zh": "这件衣服＿贵了！", "tr": "Questo vestito è troppo caro!", "opzioni": [
      { "t": "太", "ok": true, "perche": "太 … 了 è la struttura di «troppo»." },
      { "t": "不", "ok": false, "perche": "不 nega: dice «non è caro»." },
      { "t": "也", "ok": false, "perche": "也 vuol dire «anche»: non esprime l'eccesso." }
    ] },
    { "k": "ordine", "t": "今天有点冷", "tr": "Oggi fa un po' freddo." },
    { "k": "ordine", "t": "他们都很忙", "tr": "Sono tutti impegnati." },
    { "k": "trasforma", "base": "茶很热。", "consegna": "Nega la frase: il tè non è caldo.", "accetta": ["茶不热。"], "rifiutate": [
      { "t": "茶没热。", "perche": "没 nega un fatto non avvenuto e non regge un aggettivo di qualità." },
      { "t": "茶是不热。", "perche": "Nella negazione di un aggettivo neutro 是 non compare." }
    ], "perche": "Al negativo l'aggettivo prende 不 e perde 很." },
    { "k": "trasforma", "base": "你很累。", "consegna": "Trasformala in una domanda sì/no.", "accetta": ["你累吗？", "你很累吗？", "你累不累？"], "rifiutate": [
      { "t": "你是累吗？", "perche": "L'aggettivo non vuole 是, nemmeno in una domanda." }
    ], "perche": "Si aggiunge 吗 in fondo (o si usa la forma affermativa + negativa); l'aggettivo resta senza 是." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Il caffè è buono.»", "a": "咖啡很好喝。", "accetta": ["咖啡很好喝。", "这个咖啡很好喝。"], "perche": "咖啡 + 很 + 好喝: nessun 是, e 很 serve da legante." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Anch'io sono stanco.»", "a": "我也很累。", "accetta": ["我也很累。"], "perche": "也 viene prima di 很: soggetto, 也, 很, aggettivo." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你冷吗？" },
      { "chi": "B", "t": "我不＿冷，但是有点饿。", "buco": true }
    ], "opzioni": [
      { "t": "太", "ok": true, "perche": "不太冷 vuol dire «non molto freddo»: attenua la negazione." },
      { "t": "是", "ok": false, "perche": "不是冷 non è una frase corretta: l'aggettivo non vuole 是." },
      { "t": "没", "ok": false, "perche": "没 nega un fatto non avvenuto, non uno stato." }
    ] },
    { "k": "scegli", "q": "Quale frase è sbagliata?", "opzioni": [
      { "t": "我是很忙。", "ok": true, "perche": "Con l'aggettivo non serve 是: si dice 我很忙." },
      { "t": "他很高。", "ok": false, "perche": "La frase è corretta: soggetto + 很 + aggettivo." },
      { "t": "这个菜不太好吃。", "ok": false, "perche": "La frase è corretta: 不太 attenua." }
    ] }
  ],
  "capaci": [
    "Sai descrivere persone, cose e tempo con soggetto + 很 + aggettivo, senza usare 是.",
    "Sai scegliere il grado giusto tra 很, 非常, 太…了, 有点 e 不太.",
    "Sai negare un aggettivo con 不 e fare domande con 吗 o con la forma affermativa + negativa.",
    "Sai mettere 也 e 都 nel posto giusto prima di 很."
  ],
  "fonti": [
    "Wikipedia (inglese), «Chinese grammar»: aggettivi predicativi senza copula, 很 con gli aggettivi e negazione con 不",
    "CC-CEDICT, voci 很, 太, 非常 (annotate come «often used before an adjective without intensifying its meaning»)",
    "Tatoeba (cinese), frasi di riscontro per 我很累, 今天很热, 我不饿, consultate con i corpora locali"
  ]
};
