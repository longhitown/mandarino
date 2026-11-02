/* Lezione 49 · La cosa che…: 的 con una frase (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["de-shuyu"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我买的书很好看。", "tr": "Il libro che ho comprato è bello." },
      { "t": "他说的话我都听懂了。", "tr": "Ho capito tutto quello che ha detto." },
      { "t": "坐在那儿的人是我朋友。", "tr": "La persona seduta là è un mio amico." },
      { "t": "这是妈妈做的菜。", "tr": "Questo è il piatto che ha cucinato la mamma." }
    ],
    "domanda": "In ogni frase c'è un pezzo che descrive un nome: 书, 话, 人, 菜. Dove sta questo pezzo rispetto al nome? Che cosa c'è tra il pezzo e il nome? E dov'è, in italiano, il «che»?",
    "risposta": "Il pezzo che descrive il nome è una frase intera (我买, 他说, 坐在那儿, 妈妈做) e sta **prima** del nome. Tra la frase e il nome c'è sempre **的**. In cinese non c'è nessun «che» da tradurre: ci pensa 的. In italiano si dice prima il nome e poi la descrizione («il libro / che ho comprato»); in cinese si dice prima la descrizione e poi il nome («ho comprato 的 libro»)."
  },
  "regola": {
    "enunciato": "Una frase può descrivere un nome come fa un aggettivo, ma sta **davanti** al nome ed è chiusa da **的**: frase + 的 + nome. Il nome descritto è il «posto vuoto» della frase: in 我买的书, ciò che ho comprato è proprio il libro; per questo non si ripete dentro la frase.",
    "schema": ["frase (con un posto vuoto)", "的", "nome descritto"],
    "punti": [
      { "ok": true, "t": "**Con ogni verbo e con ogni funzione**: il nome può essere l'oggetto (我买的书), il soggetto (坐在那儿的人, 说中文的女孩), un luogo (我们吃饭的地方) o un tempo (他来的时候)." },
      { "ok": true, "t": "**Il posto vuoto resta vuoto**: dentro la frase non si mette un pronome che riprenda il nome. Si dice 我昨天看的电影, mai 我昨天看它的电影. Le persone e le cose si riconoscono dal contesto e dal verbo." },
      { "ok": true, "t": "**Il tempo non si legge nella frase**: 我买的书 può essere «il libro che ho comprato» o «che compro»; lo dicono le parole di tempo (昨天, 以前, 明天) o il contesto." },
      { "ok": true, "t": "**Quando c'è anche 这/那 + classificatore**, la frase di solito sta prima: 我昨天买的那本书 («quel libro che ho comprato ieri»). 的 chiude la frase e il gruppo 那本书 segue." },
      { "ok": true, "t": "**Il nome si può togliere** quando è chiaro: 我买的 («quello che ho comprato»), 妈妈做的 («quello che ha fatto la mamma»). Per le persone, un verbo con 的 nomina anche il mestiere: 卖菜的, 开车的, 做饭的." },
      { "ok": false, "t": "**Non si mette la frase dopo il nome e non si salta 的**: 书我买的, 我买书的很好看 e e 我喜欢人是他 non sono frasi relative. 的 sta sempre subito prima del nome descritto." }
    ]
  },
  "logica": [
    "L'italiano costruisce la frase relativa **dopo** il nome e la lega con «che»: prima sai di che cosa si parla, poi arriva la descrizione. Il cinese fa l'opposto: tutto ciò che descrive un nome sta **davanti** a esso, che sia una parola (红色的书), un possessore (我的书) o una frase intera (我买的书). 的 è sempre lo stesso gancio: attacca ciò che descrive al nome. Per questo in cinese la descrizione lunga non rompe la frase: arriva tutta prima, e poi arriva il nome.",
    "Un trucco per leggere: parti dal nome e vai **verso sinistra**. In 我昨天在商店买的那本书, il nome è 书; poi viene 那本 («quel»); poi 的 ti dice che quello che segue verso sinistra è la descrizione: «è stato comprato da me, ieri, nel negozio». Il risultato in italiano è «quel libro che ho comprato ieri nel negozio». Per scrivere, fai l'opposto: scrivi prima la frase intera con il posto vuoto (我买 ___), poi aggiungi 的 e infine il nome.",
    "La frase davanti a 的 è la stessa dell'altra lezione sul 是…的: 这本书是我买的 («questo libro l'ho comprato io») ha dentro la stessa idea, un 买 senza oggetto. Quando il nome è già noto (la frase precedente parla del libro), 的 può chiudere la frase anche senza il nome."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Il nome descritto è…", "Schema", "Esempio"],
    "righe": [
      ["l'oggetto del verbo", "soggetto + verbo + 的 + nome", "我买的书"],
      ["il soggetto del verbo", "verbo (+ oggetto) + 的 + nome", "说中文的女孩"],
      ["un luogo", "frase + 的 + 地方", "我们吃饭的地方"],
      ["un tempo", "frase + 的 + 时候", "他来的时候"],
      ["una persona con quel mestiere", "verbo + oggetto + 的", "卖菜的"],
      ["già noto, non si ripete", "frase + 的", "我买的"]
    ]
  },
  "esempi": [
    { "gruppo": "L'oggetto del verbo: la cosa che…", "items": [
      { "t": "这是我昨天买的手机。", "tr": "Questo è il cellulare che ho comprato ieri.", "nota": "Il posto vuoto è l'oggetto di 买: 买 ___." },
      { "t": "你吃的饺子是我做的。", "tr": "I ravioli che mangi li ho fatti io." },
      { "t": "我不喜欢他说的话。", "tr": "Non mi piace quello che dice.", "nota": "话 qui è «quello che si dice»." },
      { "t": "我朋友写的歌很好听。", "tr": "La canzone scritta da un mio amico è molto bella." }
    ] },
    { "gruppo": "Il soggetto del verbo: la persona che…", "items": [
      { "t": "说中文的女孩是我同学。", "tr": "La ragazza che parla cinese è una mia compagna di classe.", "nota": "Il posto vuoto è il soggetto: ___ 说中文." },
      { "t": "喜欢我的人不多。", "tr": "Le persone a cui piaccio non sono molte.", "nota": "Attenzione: 我喜欢的人 è «la persona che mi piace», 喜欢我的人 è «la persona a cui piaccio»." },
      { "t": "在门口等你的人是谁？", "tr": "Chi è la persona che ti aspetta alla porta?" }
    ] },
    { "gruppo": "Luogo e tempo", "items": [
      { "t": "我们吃饭的地方很大。", "tr": "Il posto dove mangiamo è grande." },
      { "t": "他来的时候我不在家。", "tr": "Quando è venuto non ero a casa." },
      { "t": "我出生的城市在南方。", "tr": "La città dove sono nato è nel Sud." }
    ] },
    { "gruppo": "Con 这/那 e con il nome omesso", "items": [
      { "t": "我昨天买的那本书很好看。", "tr": "Quel libro che ho comprato ieri è bello.", "nota": "La frase sta prima di 那本书." },
      { "t": "这个蛋糕是我朋友做的。", "tr": "Questa torta l'ha fatta un mio amico.", "nota": "Nome omesso: 朋友做的 = «fatto da lui»." },
      { "t": "你喜欢哪件衣服？我喜欢红色的。", "tr": "Quale vestito ti piace? Mi piace quello rosso.", "nota": "Anche con 的 dopo un aggettivo il nome si può togliere." },
      { "t": "卖菜的在那儿。", "tr": "Il venditore di verdura è là." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Il libro che ho comprato è bello»?", "opzioni": [
      { "t": "我买的书很好看。", "ok": true, "perche": "La frase 我买 sta davanti al nome, e 的 le sta subito dopo." },
      { "t": "我买书的很好看。", "ok": false, "perche": "Con 的 dopo 书 la frase è 我买书, e 的 resta in fondo senza nome: significa piuttosto «quelli che comprano libri»." },
      { "t": "书我买的很好看。", "ok": false, "perche": "Metti il nome in testa come in italiano; in cinese la descrizione deve precedere il nome, non seguirlo." }
    ] },
    { "q": "Come dici «La persona che mi piace è lui»?", "opzioni": [
      { "t": "我喜欢的人是他。", "ok": true, "perche": "喜欢 ha come soggetto 我 e il posto vuoto è l'oggetto: è la persona che piace a me." },
      { "t": "我喜欢人是他。", "ok": false, "perche": "Manca 的: senza di esso 喜欢人 sarebbe solo «mi piacciono le persone» e il nome non è collegato alla frase." }
    ] },
    { "q": "Che cosa vuol dire 喜欢我的人?", "opzioni": [
      { "t": "La persona a cui piaccio.", "ok": true, "perche": "Il soggetto di 喜欢 è proprio il nome descritto (人) e 我 è l'oggetto: qualcuno prova simpatia per me." },
      { "t": "La persona che mi piace.", "ok": false, "perche": "Sarebbe 我喜欢的人: chi mi piace è l'oggetto di 喜欢, e 我 è davanti al verbo." }
    ] },
    { "q": "Come dici «Il film che ho visto ieri è lungo»?", "opzioni": [
      { "t": "我昨天看的电影很长。", "ok": true, "perche": "Il posto vuoto è l'oggetto di 看: non si ripete e non serve nessun pronome." },
      { "t": "我昨天看它的电影很长。", "ok": false, "perche": "Metti un «lo» come in italiano: in cinese il nome descritto non si riprende con un pronome dentro la frase." }
    ] },
    { "q": "Come dici «Il posto dove mangiamo è grande»?", "opzioni": [
      { "t": "我们吃饭的地方很大。", "ok": true, "perche": "Frase + 的 + 地方: il luogo è il nome descritto e non c'è nessun «dove» da tradurre." },
      { "t": "我们吃饭地方很大。", "ok": false, "perche": "Senza 的, 吃饭 e 地方 non sono legati: la frase non descrive il posto." }
    ] },
    { "q": "«Quel libro che ho comprato ieri»: quale ordine è giusto?", "opzioni": [
      { "t": "我昨天买的那本书", "ok": true, "perche": "La frase con 的 si legge per prima, poi vengono 那本 e il nome 书." },
      { "t": "我昨天买那本书的", "ok": false, "perche": "Il gruppo 那本书 sta dentro la frase e 的 è rimasto senza nome: significa «quello che ha comprato quel libro ieri»." }
    ] },
    { "q": "Come dici «La ragazza che parla cinese»?", "opzioni": [
      { "t": "说中文的女孩", "ok": true, "perche": "Il soggetto è il nome descritto: nella frase 说中文 il posto vuoto sta davanti al verbo." },
      { "t": "女孩说中文的", "ok": false, "perche": "Anche in cinese la descrizione precede il nome; un nome seguito da 说中文的 non è una frase relativa." },
      { "t": "说中文女孩", "ok": false, "perche": "Manca 的: tra una frase intera e il nome è sempre necessario." }
    ] },
    { "q": "Qualcuno dice 他说的话我都听懂了。 Chi ha capito?", "opzioni": [
      { "t": "Io (chi parla): ho capito quello che ha detto lui.", "ok": true, "perche": "Il soggetto della frase principale è 我 (都听懂了); 他说的话 è il suo oggetto." },
      { "t": "Lui: ha capito quello che ho detto io.", "ok": false, "perche": "Il soggetto di 说 dentro la frase relativa è 他: è lui che parla, non chi ha capito." }
    ] }
  ],
  "dialogo": {
    "titolo": "Il libro in mano",
    "righe": [
      { "chi": "A", "t": "你手里拿的那本书是什么书？", "tr": "Che libro è quello che hai in mano?" },
      { "chi": "B", "t": "是我朋友送我的书，写的是中国的故事。", "tr": "È un libro che mi ha regalato un amico; racconta storie cinesi." },
      { "chi": "A", "t": "好看吗？我想看你喜欢的书。", "tr": "È bello? Voglio leggere i libri che ti piacciono." },
      { "chi": "B", "t": "很好看。我看完了借给你。", "tr": "Molto. Quando l'ho finito te lo presto." },
      { "chi": "A", "t": "谢谢！我也有一本好书，是妈妈买的。", "tr": "Grazie! Anch'io ho un bel libro, l'ha comprato mia madre." },
      { "chi": "B", "t": "那我们换着看吧。", "tr": "Allora scambiamoceli." }
    ],
    "esercizi": [
      { "q": "Che cosa vuol dire 你手里拿的那本书?", "opzioni": [
        { "t": "Il libro che hai in mano.", "ok": true, "perche": "La frase 你手里拿 descrive 那本书 e viene prima di essa." },
        { "t": "Chi ha in mano un libro.", "ok": false, "perche": "Il nome descritto è 书, non una persona; 的 chiude la frase che descrive il libro." },
        { "t": "Il libro che ti ho dato.", "ok": false, "perche": "Il verbo è 拿 (tenere in mano) e non c'è nessun dono nella frase." }
      ] },
      { "q": "Che cosa vuol dire 我想看你喜欢的书?", "opzioni": [
        { "t": "Voglio leggere i libri che ti piacciono.", "ok": true, "perche": "喜欢 ha come soggetto 你: i libri sono l'oggetto." },
        { "t": "Voglio leggere i libri che piacciono a tutti.", "ok": false, "perche": "Il soggetto è 你, non una folla; la frase non dice «tutti»." },
        { "t": "Voglio che tu legga i miei libri.", "ok": false, "perche": "Chi legge è A (我想看) e i libri sono quelli di B." }
      ] },
      { "q": "In 是妈妈买的, che cosa è omesso?", "opzioni": [
        { "t": "Il nome del libro: 书.", "ok": true, "perche": "Il libro è già noto dalla frase precedente, perciò 买的 basta." },
        { "t": "Il verbo 买.", "ok": false, "perche": "Il verbo c'è: è 买, davanti a 的." },
        { "t": "Il soggetto 妈妈.", "ok": false, "perche": "妈妈 c'è, subito dopo 是." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette la descrizione dopo il nome (书我买的), dimentica 的 (我喜欢人是他), oppure riprende il nome con un pronome (我看它的电影). Un'altra confusione tipica riguarda il verso della frase: 我喜欢的人 («che mi piace») e 喜欢我的人 («a cui piaccio») hanno le stesse parole ma sensi opposti.",
    "perche": "In italiano la frase relativa segue il nome e «che» ne segna l'inizio; in cinese la frase relativa precede il nome e 的 ne segna la fine. Come l'italiano standard («il libro che ho comprato», non «che l'ho comprato»), il cinese lascia dentro la frase solo un posto vuoto, ma chi sbaglia è tentato dal pronome del parlato. Quanto alla coppia 我喜欢的人 / 喜欢我的人, è l'ordine dei pezzi della frase (chi fa, che cosa fa) a dire chi è il soggetto di 喜欢.",
    "esci": "Scrivi prima la frase completa con il posto vuoto (我买 ___, 在门口等你 ___), poi aggiungi 的 e per ultimo il nome. Se vuoi sapere chi fa l'azione, guarda chi sta davanti al verbo dentro la frase: 我 + 喜欢 = io provo il sentimento, 喜欢 + 我 = lo provano per me.",
    "esempi": [
      { "sbagliata": "书我买的很好看。", "giusta": "我买的书很好看。" },
      { "sbagliata": "我喜欢人是他。", "giusta": "我喜欢的人是他。" },
      { "sbagliata": "我昨天看它的电影很长。", "giusta": "我昨天看的电影很长。" },
      { "sbagliata": "我们吃饭地方很大。", "giusta": "我们吃饭的地方很大。" }
    ]
  },
  "curiosi": [
    { "titolo": "Un solo 的 per tre lavori", "t": "Il 的 di 我的书 (possesso), di 红色的书 (aggettivo) e di 我买的书 (frase) è lo stesso: attacca ciò che precede al nome che segue. Per questo 的 è la particella più frequente del cinese. Non c'è bisogno di imparare tre regole diverse: basta ricordare che in cinese tutto ciò che descrive un nome sta davanti ad esso." },
    { "titolo": "卖菜的, 开车的: i mestieri con 的", "t": "Un verbo con il suo oggetto e 的 nomina la persona che lo fa: 卖菜的 («chi vende verdura»), 开车的 («chi guida»), 做饭的 («chi cucina»). È il modo parlato per indicare mestieri e ruoli in modo semplice e diretto, spesso con un tono familiare; in un contesto più formale si usa il nome del mestiere, per esempio 司机 per 开车的." },
    { "titolo": "Come si fa a sapere il tempo?", "t": "La frase davanti a 的 non porta un tempo verbale. 我买的书 può essere un libro già comprato o un libro che compro in generale: lo dicono le parole di tempo (我昨天买的书) o il contesto. Per questo, quando devi essere preciso, aggiungi 昨天, 以前, 明天 dentro la frase." },
    { "titolo": "Frasi lunghe: tutto davanti", "t": "Il cinese accetta descrizioni lunghe prima del nome (我昨天在商店买的那本很贵的书), ma nella lingua parlata si preferisce spesso spezzarle in due frasi: 我昨天在商店买了一本书，很贵。 La struttura con 的 resta comoda quando la descrizione è breve e il nome è già al centro del discorso." }
  ],
  "pragmatica": "Nella conversazione la frase davanti a 的 è breve: un verbo, un soggetto, al massimo un luogo o un tempo. Se la descrizione è lunga, il parlato tende a dividerla in due frasi. Nello scritto (articoli, manuali, notizie) le descrizioni lunghe con 的 sono normali e danno al testo un aspetto compatto. Togliere il nome (我买的, 妈妈做的) è una scelta tipica del parlato, quando tutti sanno di che cosa si parla.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "妈妈做的菜很好吃。", "opzioni": [
      { "t": "Il piatto che cucina la mamma è buono.", "ok": true, "perche": "妈妈做 descrive 菜 e 的 sta in mezzo." },
      { "t": "La mamma che cucina è buona.", "ok": false, "perche": "Il nome descritto è 菜 (il cibo) e non 妈妈." },
      { "t": "La mamma non cucina.", "ok": false, "perche": "Non c'è nessuna negazione nella frase." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "喜欢我的人不多。", "opzioni": [
      { "t": "Non sono molte le persone a cui piaccio.", "ok": true, "perche": "Dentro la frase 喜欢 ha come oggetto 我: chi prova simpatia sta nel nome descritto, 人." },
      { "t": "Non sono molte le persone che mi piacciono.", "ok": false, "perche": "Sarebbe 我喜欢的人不多: 我 deve stare davanti al verbo." },
      { "t": "Non mi piace nessuno.", "ok": false, "perche": "La frase non dice questo: dice quante persone provano simpatia per me." }
    ] },
    { "k": "buco", "zh": "你写＿字很好看。", "tr": "I caratteri che scrivi sono belli.", "opzioni": [
      { "t": "的", "ok": true, "perche": "Tra la frase 你写 e il nome 字 serve 的." },
      { "t": "得", "ok": false, "perche": "得 collega un verbo al suo grado (写得很好), ma qui il nome 字 segue subito: non c'è un complemento." },
      { "t": "着", "ok": false, "perche": "着 segna un'azione in corso o uno stato e non collega una frase a un nome." }
    ] },
    { "k": "buco", "zh": "在那儿说话＿人是我老师。", "tr": "La persona che parla là è il mio insegnante.", "opzioni": [
      { "t": "的", "ok": true, "perche": "La frase 在那儿说话 descrive 人: serve 的." },
      { "t": "了", "ok": false, "perche": "了 segna un'azione compiuta e non unisce una frase a un nome." },
      { "t": "吗", "ok": false, "perche": "吗 chiude una domanda: qui la frase è affermativa." }
    ] },
    { "k": "ordine", "t": "我朋友做的蛋糕很好吃", "tr": "La torta fatta dal mio amico è molto buona." },
    { "k": "ordine", "t": "他喜欢的歌我也喜欢", "tr": "Mi piace anche la canzone che piace a lui." },
    { "k": "trasforma", "base": "我昨天买书。", "consegna": "Fai dire: «Il libro che ho comprato ieri è molto bello» (usa 很好看).", "accetta": ["我昨天买的书很好看。", "昨天我买的书很好看。"], "rifiutate": [
      { "t": "我昨天买书的很好看。", "perche": "La frase con 的 deve finire con il nome descritto: 书 va dopo 的." }
    ], "perche": "Il posto vuoto è l'oggetto di 买: 我昨天买 + 的 + 书, poi il predicato 很好看." },
    { "k": "scrivi", "q": "Scrivi in cinese: «La persona che ti piace è un mio compagno di classe.»", "a": "你喜欢的人是我同学。", "accetta": ["你喜欢的人是我的同学。", "你喜欢的那个人是我同学。"], "perche": "你喜欢 + 的 + 人: 你 è il soggetto di 喜欢 e il nome descritto è l'oggetto." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ho capito quello che hai detto.»", "a": "你说的话我听懂了。", "accetta": ["我听懂了你说的话。", "你说的话我都听懂了。"], "perche": "你说 + 的 + 话: 话 è il nome descritto (le parole che hai detto)." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你昨天去的饭馆好吗？" },
      { "chi": "B", "t": "很好，我们吃饭＿地方很大。", "buco": true }
    ], "opzioni": [
      { "t": "的", "ok": true, "perche": "我们吃饭 + 的 + 地方: la frase descrive il luogo." },
      { "t": "了", "ok": false, "perche": "了 non lega la frase al nome 地方." },
      { "t": "过", "ok": false, "perche": "过 racconta un'esperienza e non può stare tra 吃饭 e 地方." }
    ] },
    { "k": "scegli", "q": "Quale gruppo di parole vuol dire «la ragazza che parla con te»?", "opzioni": [
      { "t": "和你说话的女孩", "ok": true, "perche": "La frase 和你说话 sta prima del nome e 的 le sta subito dopo." },
      { "t": "女孩和你说话的", "ok": false, "perche": "La descrizione segue il nome come in italiano: in cinese deve precederlo." },
      { "t": "和你说话女孩", "ok": false, "perche": "Manca 的 tra la frase e il nome." }
    ] }
  ],
  "capaci": [
    "Sai descrivere un nome con una frase intera mettendola prima del nome e chiudendola con 的.",
    "Sai distinguere 我喜欢的人 da 喜欢我的人 guardando chi sta davanti al verbo.",
    "Sai togliere il nome quando è chiaro (我买的, 妈妈做的) e nominare ruoli con 卖菜的, 开车的.",
    "Sai usare la frase con 的 per luoghi e tempi (我们吃饭的地方, 他来的时候)."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Modifying nouns with phrase + de»: struttura frase + 的 + nome, nome omesso, esempi 妈妈做的菜 e 你教的",
    "Tatoeba (cmn.tsv, interrogato con grep): frasi reali con 他说的话, 我不明白他说的话 e altre frasi relative con 的"
  ]
};
