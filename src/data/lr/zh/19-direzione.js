/* Lezione 19 · Di qua o di là: 进来, 出去, 回来 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["direzione"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "门开着，你进来吧。", "tr": "La porta è aperta, entra pure." },
      { "t": "孩子们都出去了，家里很安静。", "tr": "I bambini sono usciti tutti, in casa c'è silenzio." },
      { "t": "我明天回学校去。", "tr": "Domani torno a scuola." },
      { "t": "老师走进教室来了。", "tr": "L'insegnante è entrato in aula." }
    ],
    "domanda": "In ogni frase il verbo di movimento (进, 出, 回, 走进) finisce con 来 oppure con 去. Prova a capire dove si trova chi parla rispetto al movimento. E guarda dove stanno i luoghi (学校, 教室): prima o dopo 来 e 去?",
    "risposta": "Si usa **来** quando il movimento si **avvicina** al punto in cui si trova chi parla (chi dice 你进来吧 è dentro; chi dice 老师走进教室来了 racconta stando in aula). Si usa **去** quando il movimento si **allontana** (i bambini sono usciti e non sono più qui; la scuola è un posto diverso da quello in cui parlo). Il luogo sta **in mezzo**: 回学校去, 走进教室来. Nell'italiano «entra» e «torna» vanno bene in tutti i casi; in cinese bisogna scegliere da che parte si guarda."
  },
  "regola": {
    "enunciato": "Dopo un verbo di movimento (进, 出, 回, 上, 下, 过) il cinese aggiunge **来** se il movimento si avvicina al punto di vista di chi parla e **去** se si allontana. Un luogo va tra le due parti, mai dopo: 进房间来, 回家去, 上楼去.",
    "schema": ["chi", "direzione (进 · 出 · 回 · 上 · 下 · 过)", "luogo", "来 / 去", "(了)"],
    "punti": [
      { "ok": true, "t": "**来** si avvicina al punto di vista di chi parla, **去** si allontana: 进来 «entra (qui da me)», 进去 «entra (là)»; 出来, 出去; 回来, 回去; 上来, 上去; 下来, 下去; 过来 «vieni qui», 过去 «va' là»." },
      { "ok": true, "t": "**Il verbo di modo può precedere** la coppia: 走进来 «entra camminando», 跑出去 «esce di corsa», 飞回来 «torna in volo»." },
      { "ok": true, "t": "**Il luogo sta in mezzo**: 进房间来, 走进教室来, 回家去, 回学校去, 上楼去, 下楼来. Il luogo che fa da oggetto del verbo di direzione sta prima di 来/去; dopo non entra." },
      { "ok": false, "t": "**Il luogo non segue 来/去**: non si dice 回去家, 进来房间, 上去楼. Nella lingua parlata, quando il punto di vista è chiaro, si lascia cadere 来/去 e resta il verbo con il luogo: 回家, 进房间, 上楼." },
      { "ok": true, "t": "**Con un oggetto** (non un luogo) la coppia può chiudere la frase dopo l'oggetto (带一本书来, 送你回家去) oppure l'oggetto può seguire la coppia, soprattutto per un fatto compiuto con 了: 带来了一杯茶." },
      { "ok": true, "t": "**了 chiude la frase**, dopo 来/去: 他回来了, 他回家去了, 老师走进教室来了. Il negativo di un fatto non avvenuto è 没(有): 他还没回来." },
      { "ok": true, "t": "**Inviti e divieti**: 请进来 (invito), 别进来 (divieto); 不 + verbo dice la volontà o l'abitudine: 我不出去 «non esco»." }
    ]
  },
  "logica": [
    "L'italiano distingue «venire» e «andare», «portare qui» e «portare via», ma quando dice «entra» o «torna» lascia la direzione in sospeso. Il cinese ha scelto di dirla sempre: dopo un verbo di movimento una piccola freccia, **来** o **去**, indica il punto da cui si guarda la scena. 进 «dentro», 出 «fuori», 回 «indietro», 上 «su», 下 «giù» raccontano il percorso; 来 e 去 dicono se il percorso va verso di te o lontano da te.",
    "Il punto di vista è di solito quello di chi parla. Può però spostarsi: in un racconto si assume quello dell'ambiente in cui si svolge la scena (老师走进教室来了 è raccontato dall'aula), e chi va verso l'altro può mettersi con la testa nel luogo dell'altro (我马上来 «arrivo», detto da chi si muove). Nel dubbio, chiediti «dove sono io con la testa in questa scena?»: se il movimento arriva lì, 来; se parte da lì, 去.",
    "La struttura segue la stessa logica di una freccia posta in fondo: prima si dice il percorso con il suo luogo (进房间, 回家, 上楼), poi la freccia 来/去 lo orienta. Per questo il luogo non può stare dopo: la freccia chiude il blocco, come in «dentro la stanza, verso di me»."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Percorso", "Verso chi parla · 来", "Lontano da chi parla · 去"],
    "righe": [
      ["进 «dentro»", "进来: entra (qui da me)", "进去: entra (là)"],
      ["出 «fuori»", "出来: esci (verso di me)", "出去: esci (via di qui)"],
      ["回 «indietro»", "回来: torna qui", "回去: torna là"],
      ["上 «su»", "上来: sali (da me)", "上去: sali (là)"],
      ["下 «giù»", "下来: scendi (da me)", "下去: scendi (là)"],
      ["过 «attraverso»", "过来: vieni qui", "过去: va' là"]
    ]
  },
  "esempi": [
    { "gruppo": "Verso chi parla: 来", "items": [
      { "t": "我在楼下，你下来吧。", "tr": "Sono giù, scendi.", "nota": "Chi parla è al piano di sotto e il movimento arriva da lui." },
      { "t": "孩子们都跑进来了。", "tr": "I bambini sono corsi tutti dentro.", "nota": "Chi racconta è già dentro: la corsa arriva da lui." },
      { "t": "爸爸晚上回来吃饭。", "tr": "Papà torna la sera a mangiare.", "nota": "Chi parla è a casa: papà torna verso casa." },
      { "t": "你过来一下，我给你看一个东西。", "tr": "Vieni un attimo qui, ti faccio vedere una cosa." }
    ] },
    { "gruppo": "Lontano da chi parla: 去", "items": [
      { "t": "他出去买东西了。", "tr": "È uscito a fare la spesa.", "nota": "Chi parla è rimasto dentro: lui si allontana." },
      { "t": "我先上去，你们慢慢来。", "tr": "Io salgo per primo, voi prendetevela con calma." },
      { "t": "外面下雨了，别出去。", "tr": "Fuori piove, non uscire." },
      { "t": "我马上过去，你在门口等我。", "tr": "Arrivo subito, aspettami all'ingresso.", "nota": "Chi si sposta dice 过去 quando vede il movimento dal suo punto di partenza." }
    ] },
    { "gruppo": "Il luogo sta in mezzo", "items": [
      { "t": "请进房间来。", "tr": "Entra nella stanza, prego." },
      { "t": "我明天回学校去。", "tr": "Domani torno a scuola." },
      { "t": "他上楼去了。", "tr": "È salito di sopra." },
      { "t": "老师走进教室来了。", "tr": "L'insegnante è entrato in aula.", "nota": "Il verbo di modo 走 precede 进, il luogo 教室 precede 来." }
    ] },
    { "gruppo": "Con un oggetto", "items": [
      { "t": "你带一本书来，好吗？", "tr": "Puoi portare un libro?" },
      { "t": "我给你带来了一杯茶。", "tr": "Ti ho portato una tazza di tè." }
    ] },
    { "gruppo": "Il punto di vista cambia", "items": [
      { "t": "你什么时候回去？", "tr": "Quando torni (là da dove vieni)?", "nota": "Detto a un amico che si trova qui con te ma ha la sua casa altrove." }
    ] }
  ],
  "contrasti": [
    { "q": "Che cosa dici alla persona sul pianerottolo?", "ctx": { "t": "Sei dentro casa, la porta è aperta e una persona è sul pianerottolo." }, "opzioni": [
      { "t": "请进来。", "ok": true, "perche": "Il movimento arriva verso chi parla, che è dentro: 来." },
      { "t": "请进去。", "ok": false, "perche": "去 indicherebbe un movimento che si allontana da chi parla; qui la persona si avvicina a te." },
      { "t": "请出来。", "ok": false, "perche": "出 dice «fuori»: invita la persona a uscire, mentre tu vuoi farla entrare." }
    ] },
    { "q": "Che cosa dici a un amico, davanti alla casa di una conoscente?", "ctx": { "t": "Siete tutti e due sul pianerottolo; la porta della conoscente è aperta e volete entrare." }, "opzioni": [
      { "t": "我们进去吧。", "ok": true, "perche": "Il luogo dove entrate è lontano da chi parla, che è fuori: 去." },
      { "t": "我们进来吧。", "ok": false, "perche": "来 sarebbe giusto se chi parla fosse già dentro la casa; dal pianerottolo il movimento si allontana." }
    ] },
    { "q": "Chiami la persona che sta al piano di sopra: «Scendi!»", "ctx": { "t": "Sei in strada, al piano terra." }, "opzioni": [
      { "t": "你下来吧！", "ok": true, "perche": "Scendere significa avvicinarsi a chi parla, che è giù: 下来." },
      { "t": "你下去吧！", "ok": false, "perche": "下去 sposta la persona lontano da te; è la frase di chi sta in alto e manda l'altro giù." }
    ] },
    { "q": "Come chiedi a un collega cinese: «Quando torni in Cina?»", "ctx": { "t": "Siete tutti e due a Roma." }, "opzioni": [
      { "t": "你什么时候回中国去？", "ok": true, "perche": "La Cina è lontana da chi parla, e il luogo sta tra 回 e 去." },
      { "t": "你什么时候回中国来？", "ok": false, "perche": "来 sarebbe corretto per chi parla dalla Cina; da Roma il movimento si allontana." },
      { "t": "你什么时候回去中国？", "ok": false, "perche": "Il luogo non può seguire 去: va tra 回 e 去 (回中国去) oppure resta senza 去 (回中国)." }
    ] },
    { "q": "Come chiedi a tuo fratello: «Quando torni?»", "ctx": { "t": "Tu sei a casa; lui è fuori città e sta per tornare." }, "opzioni": [
      { "t": "你什么时候回来？", "ok": true, "perche": "Torna verso il luogo in cui sei tu: 来." },
      { "t": "你什么时候回去？", "ok": false, "perche": "回去 direbbe che torna lontano da dove sei tu, per esempio a una città in cui vi trovate entrambi ora." }
    ] },
    { "q": "Racconti la scena stando in aula: «L'insegnante è entrato».", "ctx": { "t": "Il racconto è fatto dall'interno dell'aula." }, "opzioni": [
      { "t": "老师走进教室来了。", "ok": true, "perche": "Il luogo (教室) sta tra 走进 e 来, e 了 chiude la frase." },
      { "t": "老师走进来教室了。", "ok": false, "perche": "Il luogo non può stare dopo 来: 来 va in fondo, dopo 教室." },
      { "t": "老师走教室进来了。", "ok": false, "perche": "Il luogo non può stare tra 走 e 进: 进 è la direzione e vuole il luogo subito dopo di sé (走进教室来)." }
    ] },
    { "q": "Impedisci a un bambino di entrare nella tua stanza.", "ctx": { "t": "Sei dentro la stanza e il bambino è sulla porta." }, "opzioni": [
      { "t": "别进来！", "ok": true, "perche": "别 è il divieto; 进来 dice dove sarebbe il movimento: verso di te." },
      { "t": "别进去！", "ok": false, "perche": "去 allontana il movimento da chi parla; il bambino si sta avvicinando a te." },
      { "t": "不进来！", "ok": false, "perche": "不进来 afferma che qualcuno non entra («non entra»): per vietare serve 别 o 不要." }
    ] },
    { "q": "Dalla stanza accanto senti dire 他出去了. Dove è «lui» rispetto a chi parla?", "opzioni": [
      { "t": "È fuori dal luogo in cui parla chi ha detto la frase.", "ok": true, "perche": "出去 allontana dal punto di vista: la persona non è più nella stanza di chi parla." },
      { "t": "Sta entrando in casa in questo momento.", "ok": false, "perche": "Per «entrare» servono 进 e 来; 出 dice «fuori»." },
      { "t": "È appena tornato dove parla chi ha detto la frase.", "ok": false, "perche": "Per «torna qui» si direbbe 回来; 出去 indica un allontanamento." }
    ] }
  ],
  "dialogo": {
    "titolo": "Sotto casa",
    "righe": [
      { "chi": "A", "t": "喂，我在楼下了，你下来吧。", "tr": "Pronto, sono giù, scendi." },
      { "chi": "B", "t": "我还没准备好，你上来坐一会儿吧。", "tr": "Non sono ancora pronto, sali a sederti un attimo." },
      { "chi": "A", "t": "好，我马上上去。几楼？", "tr": "Va bene, salgo subito. Che piano?" },
      { "chi": "B", "t": "三楼。门开着，你直接进来。", "tr": "Terzo. La porta è aperta, entra pure." },
      { "chi": "A", "t": "好的，我进来了！", "tr": "Va bene, sto entrando!" }
    ],
    "esercizi": [
      { "q": "A dice prima 你下来吧 e poi 我上去: perché due direzioni diverse per lo stesso incontro?", "opzioni": [
        { "t": "Perché guarda sempre dal proprio punto: B che scende si avvicina a lui (来), lui che sale si allontana da dove sta (去).", "ok": true, "perche": "Il punto di vista è quello di chi parla: 下来 per ciò che gli arriva, 上去 per ciò che parte da lui." },
        { "t": "Perché cambia idea sul piano.", "ok": false, "perche": "Il piano è sempre lo stesso (terzo); cambia il verso del movimento." },
        { "t": "Perché 下来 e 上去 sono sinonimi.", "ok": false, "perche": "Sono opposti: uno scende verso chi parla, l'altro sale lontano da chi parla." }
      ] },
      { "q": "Perché B dice 你上来 e 直接进来 e non 上去 e 进去?", "opzioni": [
        { "t": "Perché B parla dal suo appartamento e A si avvicina a lui.", "ok": true, "perche": "Per B ogni movimento di A arriva verso il suo punto di vista: 来." },
        { "t": "Perché 进去 si usa solo con porte chiuse.", "ok": false, "perche": "La porta non conta: conta da quale punto si guarda il movimento." },
        { "t": "Perché B è per strada.", "ok": false, "perche": "B è in casa, al terzo piano: ha già detto 门开着." }
      ] },
      { "q": "Che cosa fa A quando dice 我进来了?", "opzioni": [
        { "t": "Annuncia che entra, parlando dal punto di vista della casa di B.", "ok": true, "perche": "Chi entra in un luogo si mette con la mente dentro quel luogo e usa 来." },
        { "t": "Dice che è ancora in strada.", "ok": false, "perche": "Con 进来了 il movimento di ingresso è in corso o compiuto." },
        { "t": "Chiede a B di uscire.", "ok": false, "perche": "Per «esci» si direbbe 出来; qui A sta entrando." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette il luogo dopo la coppia (他回去家了, 请进来房间) e sceglie 来 o 去 senza pensare da dove si guarda la scena: dice 你什么时候回去？ al fratello che deve tornare da te, o 请进去 a chi sta bussando alla tua porta.",
    "perche": "L'italiano non sente la differenza tra «entra» in due direzioni e dispone il complemento di luogo dopo il verbo («torna a casa», «entra nella stanza»). In cinese 来/去 è una freccia che chiude il blocco e il luogo la precede.",
    "esci": "Prima di scrivere fissa due cose: da dove stai guardando (dentro o fuori, qui o là) e quale luogo hai nel verbo. Poi componi: direzione + luogo + 来 oppure 去 (回学校去, 进房间来). Se il luogo ti sembra ingombrante, togli 来/去 e dì solo il verbo con il luogo (回学校, 进房间).",
    "esempi": [
      { "sbagliata": "他回去家了。", "giusta": "他回家去了。" },
      { "sbagliata": "请进来房间。", "giusta": "请进房间来。" },
      { "sbagliata": "我上去楼了。", "giusta": "我上楼去了。" },
      { "sbagliata": "他走进去教室了。", "giusta": "他走进教室去了。" }
    ]
  },
  "curiosi": [
    { "titolo": "我回来了: il saluto di chi rientra", "t": "Chi rientra in casa può dire 我回来了！ e chi è in casa risponde 你回来了 oppure 欢迎回来. Si vede bene il punto di vista: chi arriva parla già dall'interno della casa e usa 来. È una formula quasi rituale, che si impara come un saluto. Si dice soprattutto rientrando a casa." },
    { "titolo": "Entrata e uscita sul cartello", "t": "Alle porte di stazioni e parchi si leggono 入口 e 出口 («entrata» e «uscita»). Nella lingua parlata 进 e 出 sono i verbi usuali, mentre 入 compare soprattutto nello scritto e sui cartelli. Attenzione a 出口: indica l'«uscita» ma anche l'«esportazione», e 进口 di solito significa «importazione»; il contesto decide." },
    { "titolo": "过来 e 过去: attraversare il confine", "t": "过 è il verbo che indica un passaggio da un lato all'altro. 过来 è molto usato per chiamare qualcuno nel luogo in cui si è: 你过来 «vieni qui». 过去 invita a spostarsi verso un luogo più in là: 你过去看看 «vai a dare un'occhiata». Come parola a sé, 过去 significa anche «il passato» (过去的事 «cose passate»): il contesto fa capire quale dei due sensi è in gioco." },
    { "titolo": "«Arrivo!»: 过去 o 来", "t": "Chi risponde «Arrivo!» dopo essere stato chiamato può dire 我马上过去 «mi muovo subito» (dal punto di vista di chi si muove) oppure 我马上来 «arrivo» (con la testa già nel luogo di chi chiama). Sono due modi di guardare la stessa scena, e tutti e due si ascoltano." }
  ],
  "pragmatica": "Con 请 le frasi diventano gentili (请进来, 请上来) e con 吧 diventano inviti morbidi (你进来吧). Senza né l'uno né l'altro suonano come ordini secchi (你出去！), accettabili tra amici o con un bambino, ma duri con un estraneo. Il divieto più cortese è 请别进来 o 请不要进来. Nel parlato 来/去 si omette spesso quando il contesto è chiaro (回家, 上楼, 进来), ma se manca il luogo la freccia resta: 回来, 出去.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "你上来吧。", "opzioni": [
      { "t": "Sali da me.", "ok": true, "perche": "上 dice «su» e 来 dice che il movimento arriva verso chi parla." },
      { "t": "Scendi da me.", "ok": false, "perche": "«Scendere» è 下: qui c'è 上." },
      { "t": "Io salgo da te.", "ok": false, "perche": "Chi parla invita l'altro; per dire «salgo» si userebbe 我上去." }
    ] },
    { "k": "scegli", "q": "In quale frase il luogo sta nella posizione giusta?", "opzioni": [
      { "t": "他上楼去了。", "ok": true, "perche": "Il luogo (楼) sta tra 上 e 去, e 了 chiude la frase." },
      { "t": "他上去楼了。", "ok": false, "perche": "Il luogo non può seguire 去: va tra la direzione e 来/去." },
      { "t": "他楼上去了。", "ok": false, "perche": "Il luogo deve seguire il verbo di direzione, non precederlo: 上楼 e non 楼上." }
    ] },
    { "k": "buco", "zh": "请进＿，门开着。", "tr": "Entra, prego (chi parla è dentro).", "opzioni": [
      { "t": "来", "ok": true, "perche": "Il movimento arriva verso chi parla." },
      { "t": "去", "ok": false, "perche": "去 allontana il movimento da chi parla, che è dentro." },
      { "t": "回", "ok": false, "perche": "回 dice «indietro» e andrebbe al posto di 进, non dopo." }
    ] },
    { "k": "buco", "zh": "他回家＿了。", "tr": "È tornato a casa sua (tu sei al lavoro, lontano da casa sua).", "opzioni": [
      { "t": "去", "ok": true, "perche": "La sua casa è lontana da te: il movimento si allontana da chi parla." },
      { "t": "来", "ok": false, "perche": "来 si userebbe se chi parla fosse a casa di lui." },
      { "t": "回", "ok": false, "perche": "回 è già nel verbo: ripeterlo non ha senso." }
    ] },
    { "k": "ordine", "t": "老师走进教室来了", "tr": "L'insegnante è entrato in aula." },
    { "k": "ordine", "t": "你什么时候回学校去", "tr": "Quando torni a scuola?" },
    { "k": "trasforma", "base": "他回家了。", "consegna": "Chi parla è al lavoro e lui è tornato a casa sua, lontano: aggiungi la freccia giusta.", "accetta": ["他回家去了。"], "rifiutate": [
      { "t": "他回去家了。", "perche": "Il luogo non può seguire 去: va tra 回 e 去." }
    ], "perche": "Il luogo (家) sta tra il verbo e la freccia: 回家去." },
    { "k": "trasforma", "base": "请进教室。", "consegna": "Sei dentro l'aula e inviti l'ospite a entrare: aggiungi la freccia.", "accetta": ["请进教室来。", "请进教室来吧。"], "rifiutate": [
      { "t": "请进来教室。", "perche": "Il luogo non può seguire 来." }
    ], "perche": "Il luogo viene prima: 进教室来." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Quando torni?» (tu sei a casa, parli con tuo fratello che è fuori).", "a": "你什么时候回来？", "accetta": ["你几点回来？", "你什么时候回家来？", "你几点回家来？"], "perche": "Il movimento arriva verso chi parla: 回来. Il luogo, se lo dici, sta prima di 来." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Domani torno a scuola.»", "a": "我明天回学校去。", "accetta": ["明天我回学校去。", "我明天回学校。", "明天我回学校。"], "perche": "Il luogo sta tra 回 e 去. Nel parlato si può anche togliere 去 e dire 回学校." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "我在门口了，你在家吗？" },
      { "chi": "B", "t": "在，你快＿吧。", "buco": true }
    ], "opzioni": [
      { "t": "进来", "ok": true, "perche": "B è in casa e A si avvicina: 来." },
      { "t": "进去", "ok": false, "perche": "去 indicherebbe un movimento che si allontana da B." },
      { "t": "出来", "ok": false, "perche": "出 dice «fuori»: A sarebbe invitato a uscire." }
    ] },
    { "k": "scegli", "q": "Quale frase usa il verbo di modo prima della direzione?", "opzioni": [
      { "t": "他跑出去了。", "ok": true, "perche": "跑 dice come si muove, 出去 dice dove va." },
      { "t": "他出去了。", "ok": false, "perche": "Qui c'è solo la coppia di direzione, senza verbo di modo." },
      { "t": "他回家去了。", "ok": false, "perche": "Qui c'è il luogo in mezzo, ma non c'è un verbo di modo." }
    ] }
  ],
  "capaci": [
    "Sai scegliere tra 来 e 去 secondo il punto da cui guardi il movimento.",
    "Sai invitare, chiamare e vietare con 请进来, 你下来吧, 别进来.",
    "Sai collocare il luogo tra il verbo di direzione e 来/去 (回家去, 进房间来).",
    "Sai raccontare chi entra, esce o torna con 了 e con un verbo di modo (跑出去, 走进来)."
  ],
  "glosse": {
    "走进教室来": "Entrare in classe",
    "带一本书来": "Portare un libro",
    "送你回家去": "Accompagnarti a casa",
    "带来了一杯茶": "Ha portato una tazza di tè",
    "他还没回来": "Non è ancora tornato",
    "你过去看看": "Vai a vedere",
    "我马上过去": "Vado subito",
    "请不要进来": "Non entrate, per favore"
  },
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Direction complement»: 来 e 去 secondo la posizione di chi parla, luogo prima di 来/去 (回中国来, non 回来中国), omissione di 来/去 nel parlato",
    "CC-CEDICT, voci 进来, 出去, 回来, 过来, 过去, 入口, 出口 (uscita, esportazione), 进口 (importazione, ingresso)",
    "Tatoeba (corpus locale cmn.tsv): 进来！, 我能进来吗, 你明天出去吗, 我需要你回家去"
  ]
};
