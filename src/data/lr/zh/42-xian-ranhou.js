/* Lezione 42 · Prima, poi, dopo: 先, 然后, 以前, 以后 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["xian-ranhou"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我们先吃饭，然后去看电影。", "tr": "Prima mangiamo, poi andiamo al cinema." },
      { "t": "毕业以后我想去北京工作。", "tr": "Dopo la laurea voglio andare a lavorare a Pechino." },
      { "t": "睡觉以前我喜欢听音乐。", "tr": "Prima di dormire mi piace ascoltare musica." },
      { "t": "以前我住在小城市。", "tr": "Prima abitavo in una piccola città." }
    ],
    "domanda": "Guarda dove stanno 先 e 然后 rispetto ai verbi, e dove stanno 以后 e 以前 rispetto a 毕业 e 睡觉. Poi confronta la terza e la quarta frase: 以前 compare in tutte e due, ma in una sta dopo un verbo e nell'altra apre la frase. Che differenza di significato c'è?",
    "risposta": "**先** sta davanti al verbo (吃饭), **然后** apre il passo successivo: i fatti si leggono nell'ordine in cui accadono. **以后** e **以前** stanno **dopo** l'evento di riferimento (毕业以后, 睡觉以前) e formano una cornice di tempo che precede il verbo principale. Quando non c'è nessun evento, 以前 apre la frase e vuol dire semplicemente «un tempo, in passato»."
  },
  "regola": {
    "enunciato": "Il cinese mette i fatti **nell'ordine in cui accadono**. Il primo passo si segna con 先, i passi seguenti con 然后 o 再, l'ultimo con 最后. Per collocare un fatto rispetto a un altro si usano 以前 («prima») e 以后 («dopo»), che si mettono **dopo** l'evento o il momento di riferimento: 吃饭以后, 三天以前.",
    "schema": ["chi", "先", "azione 1", "，", "然后 / 再", "azione 2"],
    "punti": [
      { "ok": true, "t": "**先 sta davanti al verbo e dopo il soggetto**: 我先洗澡, 你先说. Con un soggetto solo si dice una volta sola: 我先洗手，然后吃饭." },
      { "ok": true, "t": "**然后 apre il passo successivo e 再 fa lo stesso nei piani e nelle istruzioni**: 你先洗手，再吃饭. Nel racconto del passato è normale 然后, ma 再 si trova anche lì: 他先洗了澡，再睡觉。 Per tre passi: 先…然后…最后…" },
      { "ok": true, "t": "**先…再说** vuol dire «intanto facciamo questo, poi si vedrà»: 先吃饭，再说. E 先 da solo in un invito dice «prima tu, o intanto io»: 你先走吧, 我先走了." },
      { "ok": true, "t": "**以前 e 以后 senza evento** sono parole di tempo vago: 以前 «un tempo, in passato», 以后 «in futuro, più avanti». Stanno prima o dopo il soggetto: 以前我不喝咖啡 e 我以前不喝咖啡." },
      { "ok": true, "t": "**Dopo un evento o un momento**: 吃饭以后, 睡觉以前, 三年以前, 三天以后. Il gruppo è una cornice di tempo e sta **prima** del verbo principale: 吃饭以后我去学校." },
      { "ok": true, "t": "**Con una quantità di tempo** 以前 vuol dire «fa» e 以后 «fra»: 三天以前 «tre giorni fa», 三天以后 «fra tre giorni, dopo tre giorni»; il punto di riferimento è il momento in cui si parla." },
      { "ok": false, "t": "**Non si mette 先 dopo il verbo, né 以后 in fondo alla frase principale**: 我先吃饭, non 我吃饭先; 吃饭以后我去学校, non 我去学校吃饭以后. 先 non vuol dire «in passato» (per quello c'è 以前) e 以前 non significa «per primo»." }
    ]
  },
  "logica": [
    "In italiano «prima» ha tre mestieri: «come primo passo» (prima mangio), «in passato» (prima abitavo a Roma) e «prima di un evento» (prima di dormire). «Dopo» ne ha altrettanti: «poi» (mangio, dopo guardo la TV), «dopo un evento» (dopo cena) e «più tardi» (ne parliamo dopo). Il cinese li separa per **ruolo grammaticale**: 先 e 然后 sono avverbi e congiunzioni che stanno accanto al verbo; 以前 e 以后 sono parole di tempo che prendono un riferimento e lo seguono, come la parola «fa» in «tre giorni fa».",
    "Alla base c'è un principio semplice: un racconto cinese segue l'ordine reale dei fatti, e per questo la cornice «dopo mangiato» si mette all'inizio, prima dell'azione principale. Chi legge incontra i fatti nell'ordine in cui accadono. Non servono molte congiunzioni: bastano 先, 然后, 再, 最后 e due parole di tempo, e il discorso procede come una linea."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["In italiano", "In cinese", "Esempio"],
    "righe": [
      ["prima (come primo passo)", "先 + verbo", "我先洗手。"],
      ["poi, dopo (passo successivo)", "然后 / 再 + verbo", "我先洗手，然后吃饭。"],
      ["infine", "最后 + verbo", "最后我回家。"],
      ["intanto, io per primo", "先", "我先走了。"],
      ["un tempo, in passato", "以前 (da solo)", "以前这里没有地铁。"],
      ["in futuro", "以后 (da solo)", "我以后每天早上跑步。"],
      ["prima di + evento", "evento + 以前", "睡觉以前"],
      ["dopo + evento", "evento + 以后", "吃饭以后"],
      ["tre giorni fa / fra tre giorni", "三天以前 / 三天以后", "三天以后我去上海。"]
    ]
  },
  "esempi": [
    { "gruppo": "Prima… poi…", "items": [
      { "t": "你先洗手，再吃饭。", "tr": "Prima lavati le mani, poi mangia.", "nota": "In un invito o in un'istruzione 再 è naturale." },
      { "t": "他先做作业，然后看电视。", "tr": "Prima fa i compiti, poi guarda la TV." },
      { "t": "我先坐地铁，然后坐公共汽车。", "tr": "Prima prendo la metropolitana, poi l'autobus." },
      { "t": "我想先休息一下，再做作业。", "tr": "Voglio prima riposare un po', poi fare i compiti." }
    ] },
    { "gruppo": "Tre passi: 先… 然后… 最后…", "items": [
      { "t": "我先去银行，然后去超市，最后回家。", "tr": "Prima vado in banca, poi al supermercato, infine torno a casa." },
      { "t": "早上我先喝水，然后跑步，最后吃早饭。", "tr": "La mattina prima bevo acqua, poi corro, infine faccio colazione." }
    ] },
    { "gruppo": "先 nel senso di «intanto»", "items": [
      { "t": "你先走吧，我马上来。", "tr": "Vai pure avanti, arrivo subito." },
      { "t": "先吃饭，再说。", "tr": "Intanto mangiamo, poi ne parliamo.", "nota": "先…再说: si rimanda la decisione a dopo." },
      { "t": "我先走了，明天见。", "tr": "Io vado, a domani.", "nota": "Frase di congedo molto frequente." }
    ] },
    { "gruppo": "以前 e 以后 da soli", "items": [
      { "t": "以前这里没有地铁。", "tr": "Un tempo qui non c'era la metropolitana." },
      { "t": "我以后每天早上跑步。", "tr": "D'ora in poi corro ogni mattina." },
      { "t": "他以前不爱吃鱼。", "tr": "Prima non gli piaceva il pesce.", "nota": "以前 può stare anche dopo il soggetto." }
    ] },
    { "gruppo": "Dopo un evento o un tempo", "items": [
      { "t": "下课以后你有时间吗？", "tr": "Dopo la lezione hai tempo?" },
      { "t": "三天以后我去上海。", "tr": "Fra tre giorni vado a Shanghai." },
      { "t": "我们三年以前认识。", "tr": "Ci siamo conosciuti tre anni fa." },
      { "t": "开会以前请给我打电话。", "tr": "Prima della riunione telefonami, per favore." }
    ] }
  ],
  "contrasti": [
    { "q": "Dici che dopo mangiato vai a scuola. Quale frase?", "opzioni": [
      { "t": "吃饭以后我去学校。", "ok": true, "perche": "La cornice 吃饭以后 sta prima del verbo principale: i fatti vengono nell'ordine in cui accadono." },
      { "t": "我去学校吃饭以后。", "ok": false, "perche": "Il gruppo 吃饭以后 non può stare in fondo come cornice del verbo principale; in questo ordine la frase non si regge." }
    ] },
    { "q": "Dici che un tempo non ti piaceva il pesce. Quale frase?", "opzioni": [
      { "t": "以前我不爱吃鱼。", "ok": true, "perche": "以前 senza evento è «un tempo, in passato»." },
      { "t": "先我不爱吃鱼。", "ok": false, "perche": "先 è «come primo passo» e vuole un verbo da ordinare con un passo successivo; non dice «un tempo»." }
    ] },
    { "q": "Dici che prima fai il bagno e poi dormi. Quale frase?", "opzioni": [
      { "t": "我先洗澡，然后睡觉。", "ok": true, "perche": "先 sta davanti al primo verbo, 然后 apre il secondo." },
      { "t": "我洗澡先，然后睡觉。", "ok": false, "perche": "先 è un avverbio e va prima del verbo, non dopo." },
      { "t": "我然后洗澡，先睡觉。", "ok": false, "perche": "L'ordine dei fatti è invertito: 先 va con il primo passo e 然后 con il secondo." }
    ] },
    { "q": "Dici che fra tre giorni andrai a Pechino. Quale frase?", "opzioni": [
      { "t": "三天以后我去北京。", "ok": true, "perche": "Con una durata, 以后 guarda avanti: «fra tre giorni»." },
      { "t": "三天以前我去北京。", "ok": false, "perche": "三天以前 è «tre giorni fa»: guarda indietro." }
    ] },
    { "q": "Dici che ti lavi i denti prima di dormire. Quale frase?", "opzioni": [
      { "t": "睡觉以前我刷牙。", "ok": true, "perche": "睡觉以前 colloca il fatto prima di dormire." },
      { "t": "睡觉以后我刷牙。", "ok": false, "perche": "以后 vorrebbe dire «dopo aver dormito»: l'opposto." }
    ] },
    { "q": "Ti alzi dalla tavola con gli amici e dici che intanto vai via. Quale frase?", "opzioni": [
      { "t": "我先走了。", "ok": true, "perche": "先 dice «intanto, per primo»: il congedo normale." },
      { "t": "我以前走了。", "ok": false, "perche": "以前 è una parola di tempo («un tempo, fa») e non descrive un'azione da compiere adesso." }
    ] },
    { "q": "Dici che in futuro verrai spesso. Quale frase?", "opzioni": [
      { "t": "我以后常来。", "ok": true, "perche": "以后 senza evento è «in futuro» e sta davanti al verbo." },
      { "t": "我常来以后。", "ok": false, "perche": "以后 non si mette dopo il verbo senza un evento che lo preceda: la frase non si regge." }
    ] },
    { "q": "Elenchi tre passi: banca, supermercato, casa. Quale frase?", "opzioni": [
      { "t": "我先去银行，然后去超市，最后回家。", "ok": true, "perche": "Primo passo con 先, secondo con 然后, ultimo con 最后." },
      { "t": "我先去银行，然后去超市，先回家。", "ok": false, "perche": "先 segna il primo passo, non l'ultimo: per l'ultimo serve 最后." }
    ] }
  ],
  "dialogo": {
    "titolo": "Il programma del fine settimana",
    "righe": [
      { "chi": "A", "t": "周末你有什么计划？", "tr": "Che programmi hai per il fine settimana?" },
      { "chi": "B", "t": "星期六我先去看奶奶，然后和朋友吃饭。", "tr": "Sabato prima vado a trovare la nonna, poi mangio con degli amici." },
      { "chi": "A", "t": "吃饭以后你们做什么？", "tr": "Dopo mangiato che fate?" },
      { "chi": "B", "t": "我们去看电影。你呢？", "tr": "Andiamo al cinema. E tu?" },
      { "chi": "A", "t": "我先在家休息，下午再去买东西。", "tr": "Prima mi riposo a casa, nel pomeriggio poi vado a fare spesa." },
      { "chi": "B", "t": "买东西以前给我打电话吧，我也想去。", "tr": "Prima di andare a fare spesa telefonami, voglio venire anche io." }
    ],
    "esercizi": [
      { "q": "Che cosa farà B per prima cosa sabato?", "opzioni": [
        { "t": "Andrà a trovare la nonna.", "ok": true, "perche": "星期六我先去看奶奶: 先 segna il primo passo." },
        { "t": "Mangerà con gli amici.", "ok": false, "perche": "Questo è il secondo passo, introdotto da 然后." },
        { "t": "Andrà al cinema.", "ok": false, "perche": "Il cinema viene dopo il pranzo." }
      ] },
      { "q": "Quando deve telefonare A a B?", "opzioni": [
        { "t": "Prima di andare a fare spesa.", "ok": true, "perche": "买东西以前: l'evento di riferimento è la spesa e 以前 colloca la telefonata prima." },
        { "t": "Dopo aver fatto la spesa.", "ok": false, "perche": "Dopo la spesa si direbbe 买东西以后." },
        { "t": "Mentre mangia con gli amici.", "ok": false, "perche": "Il pranzo con gli amici è il programma di B, non quello di A." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano traduce «prima» e «dopo» sempre con la stessa parola: scrive 我吃饭先 e 我去学校吃饭以后, oppure usa 以前 al posto di 以后 quando parla di giorni a venire (三天以前我去上海 per «fra tre giorni»).",
    "perche": "L'italiano ha una parola per tre idee: il primo passo, il tempo passato e la cornice «prima di un evento». Il cinese le distribuisce in categorie diverse: 先 è un avverbio davanti al verbo, 以前 e 以后 sono parole di tempo che seguono un evento o una durata e sono rivolte una al passato e una al futuro (o al «dopo» di un evento).",
    "esci": "Chiediti che cosa stai dicendo: un primo passo (先 davanti al verbo), un passo successivo (然后 o 再), un tempo vago (以前 o 以后 da soli) oppure un fatto collocato rispetto a un altro (evento + 以前 o 以后, prima del verbo principale). Con una durata, 以前 guarda indietro e 以后 guarda avanti.",
    "esempi": [
      { "sbagliata": "我吃饭先，然后看电视。", "giusta": "我先吃饭，然后看电视。" },
      { "sbagliata": "他去学校吃饭以后。", "giusta": "吃饭以后他去学校。" },
      { "sbagliata": "三天以前我去上海。", "giusta": "三天以后我去上海。" }
    ]
  },
  "curiosi": [
    { "titolo": "我先走了: il congedo con 先", "t": "先 vuol dire «prima, per primo» ma anche «intanto, per ora», e in questo senso è la parola del congedo. 我先走了 («io vado, ci vediamo») lascia agli altri il tempo di restare; 你先走 e 你先请 concedono il passo. Nello stesso senso 先 apre inviti come 你先坐 («accomodati intanto»)." },
    { "titolo": "再: due volti, un'idea sola", "t": "再 vuol dire «di nuovo» (请再说一遍) e anche «poi» (先…，再…). Il filo comune è il passo che viene in seguito: ripetere la stessa azione o fare quella successiva. In una sequenza 再 e 然后 si somigliano, ma 再 appartiene soprattutto a piani e istruzioni, mentre 然后 racconta con la stessa naturalezza fatti passati e futuri." },
    { "titolo": "之前, 之后 e 后来", "t": "Accanto a 以前 e 以后 esistono 之前 e 之后, di significato molto vicino e un po' più formali, ma usati correntemente anche nel parlato: 出国之前, 吃完饭之后. Nel racconto del passato si trova poi 后来 («più tardi, in seguito»), che di solito guarda sempre indietro: 以后 si usa anche per il futuro, 后来 di norma no." }
  ],
  "pragmatica": "先…再… è la forma di tutte le istruzioni, le ricette e i consigli: 先洗手，再吃饭. 我先走了 è la frase normale per andare via. Nel parlato 然后 apre molto spesso un nuovo passo del discorso, quasi come «e poi…», mentre nello scritto formale si preferisce 之后. Con le durate, ricorda che 以前 guarda indietro e 以后 guarda avanti.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我两天以前买了这本书。", "opzioni": [
      { "t": "Ho comprato questo libro due giorni fa.", "ok": true, "perche": "两天以前 con una durata è «due giorni fa»." },
      { "t": "Fra due giorni comprerò questo libro.", "ok": false, "perche": "Il futuro si direbbe 两天以后." },
      { "t": "Prima ho comprato due libri.", "ok": false, "perche": "两天 è una durata, non il numero dei libri." }
    ] },
    { "k": "scegli", "q": "In quale frase 先 vuol dire «intanto»?", "opzioni": [
      { "t": "你先走吧，我马上来。", "ok": true, "perche": "先 qui vuol dire «intanto, vai pure»: l'altro resta ancora un momento." },
      { "t": "以前我不喝咖啡。", "ok": false, "perche": "Qui non c'è 先: 以前 è una parola di tempo («un tempo»)." },
      { "t": "三天以后我去上海。", "ok": false, "perche": "Qui non c'è 先: 三天以后 è «fra tre giorni»." }
    ] },
    { "k": "scegli", "q": "Quale frase è sbagliata?", "opzioni": [
      { "t": "我去学校吃饭以后。", "ok": true, "perche": "Il gruppo 吃饭以后 deve stare prima dell'azione principale: 吃饭以后我去学校." },
      { "t": "吃饭以后我去学校。", "ok": false, "perche": "È la frase corretta: cornice di tempo e poi verbo principale." },
      { "t": "我吃饭以后去学校。", "ok": false, "perche": "È corretta: il gruppo sta tra il soggetto e il verbo." }
    ] },
    { "k": "buco", "zh": "我＿洗手，再吃饭。", "tr": "Prima mi lavo le mani, poi mangio.", "opzioni": [
      { "t": "先", "ok": true, "perche": "先 apre il primo passo e prepara 再." },
      { "t": "以前", "ok": false, "perche": "以前 è una parola di tempo: sta dopo un evento oppure apre la frase." },
      { "t": "以后", "ok": false, "perche": "以后 è «dopo» o «in futuro», non il primo passo." }
    ] },
    { "k": "buco", "zh": "下课＿，我们去买东西。", "tr": "Dopo la lezione andiamo a fare spesa.", "opzioni": [
      { "t": "以后", "ok": true, "perche": "Dopo un evento (下课) la cornice è 以后." },
      { "t": "先", "ok": false, "perche": "先 va davanti a un verbo, non in fondo a un evento." },
      { "t": "然后", "ok": false, "perche": "然后 apre un passo successivo; qui serve una parola di tempo che segua 下课." }
    ] },
    { "k": "ordine", "t": "我先去银行然后回家", "tr": "Prima vado in banca, poi torno a casa." },
    { "k": "ordine", "t": "吃饭以后我们去散步", "tr": "Dopo mangiato andiamo a fare una passeggiata." },
    { "k": "trasforma", "base": "我吃饭，看电视。", "consegna": "Dì che prima mangi e poi guardi la TV: aggiungi le parole che segnano l'ordine.", "accetta": ["我先吃饭，然后看电视。", "我先吃饭，再看电视。", "我先吃饭，然后再看电视。"], "rifiutate": [
      { "t": "我吃饭先，然后看电视。", "perche": "先 va davanti al verbo, non dopo." }
    ], "perche": "先 sta prima del primo verbo; 然后 o 再 aprono il secondo passo." },
    { "k": "trasforma", "base": "我下课，去图书馆。", "consegna": "Usa 以后 per dire che dopo la lezione vai in biblioteca.", "accetta": ["下课以后我去图书馆。", "我下课以后去图书馆。", "下课以后，我去图书馆。"], "rifiutate": [
      { "t": "我去图书馆下课以后。", "perche": "La cornice 下课以后 non può stare in fondo alla frase." }
    ], "perche": "下课以后 è la cornice di tempo e precede il verbo principale." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Prima di dormire mi lavo i denti.»", "a": "睡觉以前我刷牙。", "accetta": ["我睡觉以前刷牙。", "睡觉以前，我刷牙。", "睡觉之前我刷牙。", "我睡觉之前刷牙。"], "perche": "睡觉以前 (o 睡觉之前) colloca il fatto prima di dormire." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Fra un anno vado in Cina.»", "a": "一年以后我去中国。", "accetta": ["一年以后我要去中国。", "我一年以后去中国。", "一年之后我去中国。", "我一年以后要去中国。"], "perche": "Una durata + 以后 guarda avanti: «fra un anno»." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你们几点吃饭？" },
      { "chi": "B", "t": "我们先看电影，＿吃饭。", "buco": true }
    ], "opzioni": [
      { "t": "然后", "ok": true, "perche": "然后 apre il secondo passo dopo 先." },
      { "t": "以前", "ok": false, "perche": "以前 è una parola di tempo, non un connettivo tra due passi." },
      { "t": "已经", "ok": false, "perche": "已经 dice «già» e non ordina i due fatti." }
    ] }
  ],
  "capaci": [
    "Sai raccontare una sequenza di due o tre passi con 先, 然后 (o 再) e 最后.",
    "Sai dire «prima di» e «dopo» un evento mettendo 以前 o 以后 dopo l'evento.",
    "Sai distinguere 以前 («fa», «un tempo») da 以后 («fra», «in futuro») con le durate.",
    "Sai usare 先 per invitare e congedarti con frasi come 你先走吧 e 我先走了."
  ],
  "glosse": {
    "我先洗手，然后吃饭": "Prima mi lavo le mani, poi mangio",
    "他先洗了澡，再睡觉": "Prima ha fatto il bagno, poi ha dormito.",
    "先…然后…最后": "Prima… poi… alla fine",
    "我以前不喝咖啡": "Prima non bevevo caffè",
    "请再说一遍": "Ripeta, per favore",
    "吃完饭之后": "Dopo aver mangiato",
    "先洗手，再吃饭": "Prima mi lavo le mani, poi mangio"
  },
  "fonti": [
    "Tatoeba (cmn.tsv, interrogato in locale): frasi con 先…然后/再 e con 以前/以后 dopo un evento, ad esempio 毕业以后, 吃饭以后, 睡觉之前",
    "CC-CEDICT (cedict_ts.u8, consultato in locale): voci 先, 然后, 最后, 以前, 以后, 之前, 后来, 接着"
  ]
};
