/* Lezione 17 · Il passivo: 被 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["bei"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我的自行车被偷了。", "tr": "Mi hanno rubato la bici." },
      { "t": "杯子被弟弟打破了。", "tr": "Il bicchiere l'ha rotto mio fratello." },
      { "t": "他被老师批评了。", "tr": "È stato rimproverato dall'insegnante." },
      { "t": "我的自行车没被偷。", "tr": "La mia bici non è stata rubata." }
    ],
    "domanda": "Chi subisce l'azione (la bici, il bicchiere, lui) sta all'inizio. Che cosa viene subito dopo 被? Che cosa segue il verbo? E dove sta 没 nell'ultima frase?",
    "risposta": "Dopo 被 viene chi compie l'azione (弟弟, 老师), ma può anche mancare: 我的自行车被偷了 non dice chi è il ladro. Il verbo non resta solo: lo segue 了 o un risultato (打破了). E la negazione 没 sta **prima** di 被: 没被偷."
  },
  "regola": {
    "enunciato": "被 mette al primo posto **chi subisce l'azione** e racconta che cosa gli è capitato. Lo schema è: chi subisce + 被 + chi agisce (facoltativo) + verbo + qualcosa che chiude l'azione. È la forma di «mi hanno rubato il telefono», «è stato rimproverato».",
    "schema": ["chi subisce", "(没)", "被", "chi agisce", "verbo + 了 · risultato"],
    "punti": [
      { "ok": true, "t": "**Chi agisce si può tacere**: 我的钱包被偷了 («mi hanno rubato il portafoglio») non dice chi è stato; se si dice, sta tra 被 e il verbo: 钱包被小偷偷走了." },
      { "ok": true, "t": "**Il verbo di norma non resta nudo**: dopo il verbo c'è 了, un risultato (打破, 吃完, 偷走) o una quantità (批评了一顿). Senza questo la frase resta sospesa." },
      { "ok": true, "t": "**Negazione, avverbi e verbi modali stanno prima di 被**: 没被偷, 又被批评了, 会被偷, 不能被别人知道. Per il passato si usa 没 (anche 没有); 不 vale per il presente e per le regole generali." },
      { "ok": true, "t": "**Il tono è di solito spiacevole**: furto, rimprovero, danno, inganno. Con cose neutre o belle si usa 被 soprattutto nei contesti di cronaca o di annunci: 他被选为班长了, 她被老师表扬了." },
      { "ok": true, "t": "**Nel parlato esistono 让 e 叫**: 杯子让弟弟打破了, 他叫妈妈骂了一顿. Con 让 e 叫 chi agisce **va sempre detto**: la forma senza agente è solo di 被." },
      { "ok": false, "t": "**Non è l'unico modo per tradurre un passivo italiano.** «Questo libro è stato scritto da lui» è 这本书是他写的; «la cena è pronta» è 饭做好了. 被 si usa quando c'è un evento che capita a qualcuno, non per ogni participio passato." }
    ]
  },
  "logica": [
    "In italiano il passivo è una scelta neutra di prospettiva: «la finestra è stata aperta» vale per qualunque evento. In cinese il passivo con 被 nasce come costruzione di **subire**: il soggetto riceve qualcosa che non ha scelto, di solito un danno. Per questo i suoi contesti tipici sono quelli in cui l'italiano userebbe «mi hanno rubato», «mi è stato rotto», «sono stato rimproverato».",
    "Per tutto il resto il cinese ha una via più semplice: basta mettere la cosa all'inizio come tema, senza nessuna marca. 饭做好了 si legge «la cena è pronta» senza che serva 被. Se il significato è chiaro (le cose non si cucinano da sole), la marca non serve. 被 compare quando c'è bisogno di dire che qualcuno ha agito, o quando la cosa avrebbe potuto restare intatta.",
    "Come 把, 被 vuole un verbo che arrivi da qualche parte: 偷了, 打破了, 骗走了. Le due costruzioni sono due facce della stessa scena: 弟弟把杯子打破了 (parte da chi agisce) e 杯子被弟弟打破了 (parte da chi subisce)."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Se vuoi dire", "Usa", "Esempio"],
    "righe": [
      ["mi è capitata una cosa spiacevole", "被 (anche senza agente)", "我的手机被偷了。"],
      ["chi ha agito è importante e lo dici", "被 + agente", "杯子被弟弟打破了。"],
      ["lo dici a voce, in modo familiare", "让 o 叫 + agente", "杯子让弟弟打破了。"],
      ["racconti la scena dal punto di vista di chi agisce", "把", "弟弟把杯子打破了。"],
      ["descrivi un oggetto o un fatto neutro", "tema + verbo, senza marca", "饭做好了。"]
    ]
  },
  "esempi": [
    { "gruppo": "Chi agisce non si dice", "items": [
      { "t": "我的钥匙被拿走了。", "tr": "Mi hanno preso le chiavi.", "nota": "Non c'è un agente: si dice solo che cosa è successo alle chiavi." },
      { "t": "他的车被撞坏了。", "tr": "La sua macchina è stata urtata e danneggiata." },
      { "t": "门被锁上了。", "tr": "La porta è stata chiusa a chiave.", "nota": "Fatto neutro: la frase informa su uno stato che qualcuno ha causato." }
    ] },
    { "gruppo": "Chi agisce si dice", "items": [
      { "t": "蛋糕被弟弟吃完了。", "tr": "La torta è stata mangiata tutta dal mio fratellino." },
      { "t": "我被朋友骗了。", "tr": "Sono stato ingannato da un amico." },
      { "t": "书被水弄湿了。", "tr": "Il libro è stato bagnato dall'acqua.", "nota": "L'agente può essere una cosa o una forza della natura: 水, 风." },
      { "t": "窗户被风吹开了。", "tr": "La finestra è stata aperta dal vento." }
    ] },
    { "gruppo": "Negazione, avverbi, verbi modali", "items": [
      { "t": "我的车没被撞坏。", "tr": "La mia macchina non è stata danneggiata.", "nota": "没 sta prima di 被." },
      { "t": "他今天又被老师批评了。", "tr": "Oggi è stato di nuovo rimproverato dall'insegnante." },
      { "t": "小心，手机会被偷的。", "tr": "Attento, ti potrebbero rubare il telefono." },
      { "t": "这件事不能被别人知道。", "tr": "Questa cosa non deve essere saputa da altri." }
    ] },
    { "gruppo": "Non sempre una disgrazia", "items": [
      { "t": "这个孩子被老师表扬了。", "tr": "Questo bambino è stato elogiato dall'insegnante." },
      { "t": "他被大家选为班长。", "tr": "È stato scelto da tutti come rappresentante di classe." }
    ] },
    { "gruppo": "Nel parlato: 让 e 叫", "items": [
      { "t": "我的杯子让弟弟打破了。", "tr": "Il mio bicchiere l'ha rotto il mio fratellino." },
      { "t": "他叫妈妈骂了一顿。", "tr": "Sua madre l'ha sgridato." }
    ] }
  ],
  "contrasti": [
    { "q": "Dici che ti hanno rubato la bici, senza dire da chi. Quale frase?", "opzioni": [
      { "t": "我的自行车被偷了。", "ok": true, "perche": "被 + verbo + 了: il ladro non serve, e 了 chiude l'azione." },
      { "t": "我的自行车被偷。", "ok": false, "perche": "Il verbo è nudo: dopo 偷 serve 了, un risultato o un'altra parola che chiuda l'azione." }
    ] },
    { "q": "Dici che ieri la bici NON è stata rubata. Quale frase?", "opzioni": [
      { "t": "我的自行车昨天没被偷。", "ok": true, "perche": "Per il passato 没 sta prima di 被 e nega tutta l'azione." },
      { "t": "我的自行车昨天被没偷。", "ok": false, "perche": "Dopo 被 non può comparire 没: la negazione precede sempre la marca del passivo." }
    ] },
    { "q": "Mio fratello ha mangiato la torta e la torta è il soggetto. Quale frase?", "opzioni": [
      { "t": "蛋糕被弟弟吃完了。", "ok": true, "perche": "被 introduce chi agisce (弟弟), la torta è chi subisce." },
      { "t": "蛋糕把弟弟吃完了。", "ok": false, "perche": "把 introduce la cosa su cui si agisce: qui direbbe che la torta ha mangiato il fratello." }
    ] },
    { "q": "Vuoi dire «Mi hanno rubato il telefono» senza nominare il ladro. Quale frase?", "opzioni": [
      { "t": "我的手机被偷了。", "ok": true, "perche": "被 permette di tacere chi agisce." },
      { "t": "我的手机让偷了。", "ok": false, "perche": "让 e 叫 vogliono sempre un agente dopo di sé: senza agente si usa 被 (oppure 让人偷了)." }
    ] },
    { "q": "Avverti un amico che al mercato il telefono potrebbe essere rubato. Quale frase?", "opzioni": [
      { "t": "市场里手机会被偷的。", "ok": true, "perche": "Il verbo modale 会 sta prima di 被." },
      { "t": "市场里手机被会偷的。", "ok": false, "perche": "I verbi modali non possono stare dopo 被: vanno prima, davanti alla marca." }
    ] },
    { "q": "Il bicchiere l'ha rotto lui. Quale frase è corretta?", "opzioni": [
      { "t": "杯子被他打破了。", "ok": true, "perche": "Chi subisce, 被, chi agisce, verbo con il suo risultato." },
      { "t": "杯子他被打破了。", "ok": false, "perche": "L'agente deve stare subito dopo 被, non prima: 被 + agente è un blocco." }
    ] },
    { "q": "Il vento ha aperto la finestra. Quale frase?", "opzioni": [
      { "t": "窗户被风吹开了。", "ok": true, "perche": "Il vento è l'agente e la finestra chi subisce." },
      { "t": "风被窗户吹开了。", "ok": false, "perche": "Così la frase direbbe che la finestra ha spinto il vento: soggetto e agente sono invertiti." }
    ] },
    { "q": "Dici che un libro «è stato scritto da lui»: è un fatto, non un evento che ti è capitato. Quale frase?", "opzioni": [
      { "t": "这本书是他写的。", "ok": true, "perche": "Per dire chi ha fatto una cosa, come un fatto noto, si usa 是…的." },
      { "t": "这本书被他写了。", "ok": false, "perche": "被 racconta ciò che capita a qualcuno: con un libro scritto da un autore dà una frase insolita." }
    ] }
  ],
  "dialogo": {
    "titolo": "La bici non c'è più",
    "righe": [
      { "chi": "A", "t": "你怎么了？看起来不太高兴。", "tr": "Che cos'hai? Non sembri contento." },
      { "chi": "B", "t": "我的自行车被偷了。", "tr": "Mi hanno rubato la bici." },
      { "chi": "A", "t": "真的吗？是在哪儿被偷的？", "tr": "Davvero? Dove te l'hanno rubata?" },
      { "chi": "B", "t": "就在学校门口，我只去了一会儿。", "tr": "Proprio davanti a scuola, ero andato via solo un momento." },
      { "chi": "A", "t": "你告诉老师了吗？", "tr": "L'hai detto all'insegnante?" },
      { "chi": "B", "t": "告诉了，老师说会帮我找。", "tr": "Sì, e lui ha detto che mi aiuterà a cercarla." }
    ],
    "esercizi": [
      { "q": "Che cosa è successo a B?", "opzioni": [
        { "t": "Gli hanno rubato la bici.", "ok": true, "perche": "我的自行车被偷了: la bici subisce il furto." },
        { "t": "Ha rubato una bici.", "ok": false, "perche": "Il soggetto di 被偷 è la cosa rubata, non chi ruba." },
        { "t": "Ha perso la bici da solo.", "ok": false, "perche": "被 dice che un altro ha agito: non è una dimenticanza." }
      ] },
      { "q": "A chiede dove è successo. Quale frase serve per la domanda?", "opzioni": [
        { "t": "是在哪儿被偷的？", "ok": true, "perche": "是…的 mette in evidenza il luogo, e 被偷 si inserisce dentro." },
        { "t": "是在哪儿被偷了？", "ok": false, "perche": "Con 是…的 la frase si chiude con 的, non con 了." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano traduce «mi hanno rubato» come 我的手机被偷, senza niente dopo il verbo; oppure mette la negazione dopo 被 (被没偷); oppure usa 被 per ogni «è stato» (这本书被他写了).",
    "perche": "In italiano il participio da solo chiude la frase. In cinese il verbo del passivo ha bisogno di una chiusura (了, un risultato), e la negazione si riferisce a tutta la costruzione, quindi sta prima. Quanto a 被, non è il passivo generico: è la costruzione dell'evento che capita.",
    "esci": "Prima di scrivere: c'è 了 o un risultato dopo il verbo? 没 o 不 stanno davanti a 被? Si tratta di un evento che subisce qualcuno? Se descrivi chi ha fatto una cosa, di solito basta 是…的.",
    "esempi": [
      { "sbagliata": "我的手机被偷。", "giusta": "我的手机被偷了。" },
      { "sbagliata": "我的自行车被没偷。", "giusta": "我的自行车没被偷。" },
      { "sbagliata": "这本书被他写了。", "giusta": "这本书是他写的。" }
    ]
  },
  "curiosi": [
    { "titolo": "Il 被 di una volta: «ricevere»", "t": "被 è anche il carattere di «coperta, piumone» (被子), e come verbo antico significa «ricevere, subire»: chi è 被 qualcosa ne è coperto o colpito. Questo spiega il tono: la costruzione è nata per dire ciò che si riceve senza volerlo, quasi sempre un danno." },
    { "titolo": "Il passivo moderno e le traduzioni", "t": "Nel Novecento le traduzioni dalle lingue europee hanno esteso 被 anche a fatti neutri e positivi (被选为, 被评为, 被誉为), soprattutto nello scritto: giornali, comunicati, testi accademici. Nel parlato di tutti i giorni questi casi sono meno frequenti e si preferisce la frase attiva: 大家选他当班长." },
    { "titolo": "被 più 给, 让 e 叫", "t": "Nel parlato compare anche 给 prima del verbo, per rinforzare l'evento: 杯子被他给打破了. Nel registro familiare 让 e 叫 sostituiscono 被 (杯子让他打破了); nello scritto formale si trova la forma 为…所 (为人所知: «noto alla gente»), che nel parlato non compare." }
  ],
  "pragmatica": "被 è la forma naturale per lamentarsi o per raccontare un guaio: 我的手机被偷了 si dice a un amico, a un poliziotto, al telefono. Chi vuole essere cortese con chi ha causato il danno lo evita e dice solo: 杯子打破了, 对不起. Con 让 e 叫 il tono è familiare e conversazionale.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我被朋友骗了。", "opzioni": [
      { "t": "Sono stato ingannato da un amico.", "ok": true, "perche": "被 + 朋友 + 骗: chi subisce è «io», chi agisce è l'amico." },
      { "t": "Ho ingannato un amico.", "ok": false, "perche": "Con 被 il soggetto subisce l'azione: è l'amico che ha ingannato me." },
      { "t": "Un amico mi ha aiutato.", "ok": false, "perche": "Il verbo è 骗 (ingannare), non 帮 (aiutare)." }
    ] },
    { "k": "buco", "zh": "我的手机＿偷了。", "tr": "Mi hanno rubato il telefono.", "opzioni": [
      { "t": "被", "ok": true, "perche": "Chi subisce è il telefono, e l'agente non si dice." },
      { "t": "把", "ok": false, "perche": "把 chiede un agente prima di sé (他把手机偷了) e una cosa su cui si agisce." },
      { "t": "给", "ok": false, "perche": "给 vuol dire «dare»: non rende il passivo." }
    ] },
    { "k": "ordine", "t": "我的钱包被偷了", "tr": "Mi hanno rubato il portafoglio." },
    { "k": "ordine", "t": "杯子被弟弟打破了", "tr": "Il bicchiere l'ha rotto mio fratello." },
    { "k": "trasforma", "base": "弟弟吃了我的蛋糕。", "consegna": "Riscrivi la frase con la torta come soggetto, usando 被.", "accetta": ["我的蛋糕被弟弟吃光了。", "我的蛋糕被弟弟吃了。", "我的蛋糕被弟弟吃掉了。", "我的蛋糕被弟弟吃完了。", "我的蛋糕让弟弟吃了。"], "rifiutate": [
      { "t": "我的蛋糕被弟弟吃。", "perche": "Il verbo è nudo: dopo 吃 serve 了 o un risultato." },
      { "t": "我的蛋糕弟弟被吃了。", "perche": "被 viene prima dell'agente: 被 + 弟弟 + verbo." }
    ], "perche": "La torta passa all'inizio e chi la mangia viene dopo 被." },
    { "k": "trasforma", "base": "我的手机被偷了。", "consegna": "Dì che il telefono NON è stato rubato.", "accetta": ["我的手机没被偷。", "我的手机没有被偷。", "我的手机没被人偷。"], "rifiutate": [
      { "t": "我的手机被没偷。", "perche": "La negazione non può stare dopo 被: va prima." }
    ], "perche": "没 e 没有 nel passato stanno davanti a 被." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Il mio bicchiere è stato rotto dal mio fratellino.»", "a": "我的杯子被弟弟打破了。", "accetta": ["我的杯子被弟弟打碎了。", "我的杯子让弟弟打破了。", "我的杯子被我弟弟打破了。", "我的杯子被弟弟打坏了。", "我的杯子被弟弟弄破了。"], "perche": "Chi subisce, 被, chi agisce, verbo con il suo risultato (打破了)." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ieri sono stato rimproverato dall'insegnante.»", "a": "我昨天被老师批评了。", "accetta": ["昨天我被老师批评了。", "我昨天被老师骂了。", "昨天我被老师骂了。", "昨天我被老师批评了一顿。", "我昨天被老师批评了一顿。"], "perche": "昨天 sta prima di 被, e dopo il verbo c'è 了." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你的自行车呢？" },
      { "chi": "B", "t": "我的自行车＿偷了。", "buco": true }
    ], "opzioni": [
      { "t": "被", "ok": true, "perche": "La bici è sparita: è stata rubata, e 被 racconta questo." },
      { "t": "把", "ok": false, "perche": "把 chiede una cosa su cui si agisce e un agente nominato prima." },
      { "t": "是", "ok": false, "perche": "是 senza 的 non rende il passivo." }
    ] },
    { "k": "scegli", "q": "In quale frase la negazione è al posto giusto?", "opzioni": [
      { "t": "他没被老师批评。", "ok": true, "perche": "没 sta prima di 被 e nega tutta l'azione del passivo." },
      { "t": "他被没老师批评。", "ok": false, "perche": "Dopo 被 si trova l'agente, non la negazione." },
      { "t": "他被老师没批评。", "ok": false, "perche": "La negazione non può stare tra l'agente e il verbo." }
    ] }
  ],
  "capaci": [
    "Sai raccontare un guaio che ti è capitato con 被: rubato, rotto, rimproverato.",
    "Sai tacere o dire chi ha agito, e sai collocare 没, un avverbio o un verbo modale prima di 被.",
    "Sai scegliere tra 被, 让, 叫 e una frase attiva con 把, secondo la scena e il registro.",
    "Sai riconoscere quando il passivo italiano si traduce con 是…的 o con la cosa come tema."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), pagina «Using \"bei\" sentences»: struttura, agente facoltativo, verbo non nudo, negazione con 没 prima di 被, valore di solito sfavorevole",
    "Chinese Grammar Wiki (AllSet Learning), pagina «Advanced uses of \"bei\"»: 让 e 叫 come alternative parlate, 给 prima del verbo, forma formale con 所",
    "CC-CEDICT (voci 被, 偷, 打破, 批评): significati e uso di 被 come verbo e particella",
    "Tatoeba (corpus cinese, ricerca di frasi con 被): conferma della forma con 了 o risultato dopo il verbo"
  ]
};
