/* Lezione 12 · Fatto e finito: 了 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["passato"] = {
  "v": 1,
  "svolta": true,
  "scopri": {
    "frasi": [
      { "t": "我昨天去了北京。", "tr": "Ieri sono andato a Pechino." },
      { "t": "昨天我很累。", "tr": "Ieri ero stanco." },
      { "t": "明天我吃了饭就去找你。", "tr": "Domani, appena avrò mangiato, vengo a cercarti." },
      { "t": "天黑了。", "tr": "Si è fatto buio." }
    ],
    "domanda": "In quali frasi c'è 了? Sono tutte frasi sul passato? Guarda anche la seconda: parla di ieri, eppure è senza 了. Che cosa hanno in comune le frasi con 了?",
    "risposta": "C'è 了 nella prima, nella terza e nella quarta. La terza parla del **futuro** (明天), la seconda parla del passato e **non** ha 了. Quindi 了 non segna il passato: segna un **confine** (nella prima e nella terza l'azione di 去 e di 吃 è vista come compiuta) oppure un **aggiornamento** (nella quarta la situazione è cambiata: prima c'era luce, adesso è buio). Ieri «ero stanco» è solo uno stato descritto, senza nessun confine e senza nessuna novità."
  },
  "regola": {
    "enunciato": "In cinese esistono **due 了** che si scrivono allo stesso modo. Quello **dopo il verbo** dice che l'azione è compiuta e delimitata (我买了一本书). Quello **in fondo alla frase** dice che la situazione è cambiata o è nuova (我饿了). Si possono avere tutti e due insieme, e al negativo di un fatto non avvenuto 了 sparisce: 没(有) + verbo.",
    "schema": ["chi", "verbo", "了", "quantità · oggetto preciso", "(了)"],
    "punti": [
      { "ok": true, "t": "**了 dopo il verbo** chiude l'azione: 他喝了三杯茶, 我看了那个电影. Funziona in ogni tempo: 明天我吃了饭就去找你 guarda al futuro, ma l'azione di 吃 è vista come compiuta." },
      { "ok": true, "t": "**Il verbo con 了 vuole un appoggio**: un oggetto con quantità o precisazione (三杯茶, 那个电影, 他的车) oppure una seconda frase (…就去找你). 我喝了咖啡 raccontato da solo suona incompleto; come risposta a una domanda (你喝了什么？) va benissimo." },
      { "ok": true, "t": "**了 in fondo alla frase** dà una notizia: 天黑了 (prima no), 我饿了, 他三十岁了, 我不喝咖啡了 («non più»), 快下雨了 («sta per»)." },
      { "ok": true, "t": "**Doppio 了**: il primo chiude l'azione, il secondo dice «fino a ora»: 我已经吃了两碗饭了 («ho già mangiato due ciotole»). Con un oggetto nudo basta un 了: 我吃饭了." },
      { "ok": true, "t": "**Negazione**: 没(有) + verbo, senza 了: 我没买书, 他没来. Per «non ancora» si dice 还没: 我还没吃饭. Per «non più» invece: 不…了. Quando 没 è il verbo «non avere», il 了 finale può restare e dice «non più»: 我没钱了 («non ho più soldi»)." },
      { "ok": true, "t": "**Il risultato precede 了**: 写完了, 听懂了, 看见了. Il 了 va dopo il complemento di risultato, non prima: 我写完了作业." },
      { "ok": false, "t": "**Niente 了 con abitudini e stati passati senza confine**: 以前我每天跑步, 昨天很冷, 他是老师. Il passato lo dicono le parole di tempo (以前, 昨天); 了 si aggiunge solo con un confine o un cambiamento. Se lo stato ha una durata delimitata, il confine c'è e 了 torna: 他在北京住了三年." }
    ]
  },
  "logica": [
    "L'italiano mette il passato nel verbo: «mangio» e «ho mangiato» sono due forme diverse. Il cinese non cambia il verbo: il tempo lo dicono parole come 昨天, 以前, 明天, e le particelle dicono **come guardi** l'azione. 了 dopo il verbo è il timbro «fatto»: l'azione ha un inizio e una fine, è un blocco chiuso. 了 in fondo è il cartello «aggiornato»: la situazione di adesso è diversa da quella di prima. Per questo 了 può comparire in un racconto sul futuro (明天我吃了饭就去…) e può mancare in un racconto sul passato (昨天很冷).",
    "Ne segue che 了 **non è il passato prossimo**. «Ieri ero stanco» e «Prima correvo ogni giorno» in italiano sono imperfetti e in cinese non hanno 了: sono sfondi e abitudini, non fatti chiusi. «Ho mangiato» ha 了 perché c'è un fatto concluso; «Sono stato a Pechino» (come esperienza di vita) ha 过; «Sto mangiando» ha 在. Un test pratico: nella frase è successo qualcosa di **concluso** o di **nuovo**? Se sì, 了. Altrimenti, nessun 了."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Un fatto concluso, con quantità o oggetto preciso", "了 dopo il verbo", "他喝了三杯茶。"],
      ["Qualcosa è cambiato o è nuovo", "了 in fondo", "天黑了。"],
      ["Un fatto concluso, visto a questo punto", "了 doppio", "我已经吃了两碗饭了。"],
      ["Non è successo", "没(有) + verbo, senza 了", "我没买书。"],
      ["Non più", "不 + verbo + 了", "我不喝咖啡了。"],
      ["Un'abitudine del passato", "parola di tempo, senza 了", "以前我每天跑步。"],
      ["Uno stato del passato", "parola di tempo, senza 了", "昨天很冷。"],
      ["Un'esperienza di vita", "过 dopo il verbo", "我去过北京。"],
      ["Prima A, poi B", "A + 了 … 就 B", "我下了课就回家。"]
    ]
  },
  "esempi": [
    { "gruppo": "Un'azione compiuta: 了 dopo il verbo", "items": [
      { "t": "他喝了三杯茶。", "tr": "Ha bevuto tre tazze di tè.", "nota": "三杯 è una quantità: con 了 l'azione ha un limite preciso." },
      { "t": "我昨天买了那本书。", "tr": "Ieri ho comprato quel libro.", "nota": "那本书 è un oggetto preciso." },
      { "t": "我写完了作业。", "tr": "Ho finito i compiti.", "nota": "完 dice il risultato; 了 viene dopo il risultato." }
    ] },
    { "gruppo": "La situazione è cambiata: 了 in fondo", "items": [
      { "t": "天黑了。", "tr": "Si è fatto buio." },
      { "t": "我饿了。", "tr": "Ho fame (adesso).", "nota": "Prima non avevi fame: 了 annuncia il cambiamento." },
      { "t": "他三十岁了。", "tr": "Ora ha trent'anni.", "nota": "Anche l'età aggiorna la situazione." },
      { "t": "我不喝咖啡了。", "tr": "Non bevo più caffè." },
      { "t": "快下雨了。", "tr": "Sta per piovere." }
    ] },
    { "gruppo": "Tutti e due: il fatto e il punto della situazione", "items": [
      { "t": "我已经吃了两碗饭了。", "tr": "Ho già mangiato due ciotole di riso.", "nota": "Il primo 了 chiude l'azione, il secondo dice «a questo punto»." }
    ] },
    { "gruppo": "Negazione e domanda", "items": [
      { "t": "我没买书。", "tr": "Non ho comprato libri." },
      { "t": "你吃饭了吗？", "tr": "Hai mangiato?" },
      { "t": "我还没吃饭。", "tr": "Non ho ancora mangiato." }
    ] },
    { "gruppo": "Abitudini e stati: nessun 了", "items": [
      { "t": "以前我每天跑步。", "tr": "Prima correvo ogni giorno.", "nota": "Abitudine: 以前 basta a dire che è passato." },
      { "t": "昨天很冷。", "tr": "Ieri faceva freddo.", "nota": "Uno stato descritto, senza nessun cambiamento." }
    ] },
    { "gruppo": "Sequenze ed esperienze", "items": [
      { "t": "我下了课就回家。", "tr": "Appena finita la lezione, torno a casa." },
      { "t": "明天我吃了饭就去找你。", "tr": "Domani, appena avrò mangiato, vengo a cercarti.", "nota": "Il futuro con 了: la prima azione è compiuta prima della seconda." },
      { "t": "我去过北京。", "tr": "Sono stato a Pechino.", "nota": "过 racconta un'esperienza di vita, senza dire quando." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Non ho comprato il libro»?", "opzioni": [
      { "t": "我没买书。", "ok": true, "perche": "没 nega che il fatto sia avvenuto; un fatto che non è avvenuto non ha un confine, quindi non porta 了." },
      { "t": "我没买了书。", "ok": false, "perche": "了 dice che l'azione si è compiuta, 没 dice che non è avvenuta: le due cose si escludono." }
    ] },
    { "q": "Descrivi come stavi ieri: «Ieri ero stanco».", "opzioni": [
      { "t": "昨天我很累。", "ok": true, "perche": "È uno stato descritto: 昨天 dice che è passato e nessun cambiamento viene annunciato." },
      { "t": "昨天我很累了。", "ok": false, "perche": "了 annuncerebbe un cambiamento («mi sono stancato»); qui descrivi soltanto come stavi." }
    ] },
    { "q": "Racconti un'abitudine: «Prima correvo ogni giorno».", "opzioni": [
      { "t": "以前我每天跑步。", "ok": true, "perche": "Un'abitudine non è un fatto chiuso, e il passato lo dice 以前: nessun 了." },
      { "t": "以前我每天跑步了。", "ok": false, "perche": "Trasferisci l'imperfetto italiano nel «passato = 了»: ma 了 chiude l'azione, e un'abitudine non è chiusa in un solo blocco." }
    ] },
    { "q": "Come dici «Ho finito di scrivere»?", "opzioni": [
      { "t": "我写完了。", "ok": true, "perche": "完 è il risultato; 了 chiude la frase dopo il risultato." },
      { "t": "我写了完。", "ok": false, "perche": "Il risultato è legato al verbo (写完) e non si spezza: 了 viene dopo, mai in mezzo." }
    ] },
    { "q": "Racconti il tuo caffè di stamattina come fatto compiuto, in una frase che si regge da sola.", "opzioni": [
      { "t": "我喝了一杯咖啡。", "ok": true, "perche": "一杯 è una quantità: il verbo con 了 ha il suo appoggio e la frase si chiude." },
      { "t": "我喝了咖啡。", "ok": false, "perche": "Come racconto autonomo, con un oggetto nudo la frase suona incompleta: chi ascolta aspetta il seguito (…就走). Serve una quantità, un oggetto preciso o una seconda frase." }
    ] },
    { "q": "Qualcuno dice 他三十岁了。 Che cosa comunica?", "opzioni": [
      { "t": "Ora ha trent'anni (un fatto nuovo).", "ok": true, "perche": "了 in fondo aggiorna: l'età è un numero che cambia e qui si segnala il punto raggiunto." },
      { "t": "Aveva trent'anni nel momento di cui si parla.", "ok": false, "perche": "Per uno stato passato senza cambiamento si direbbe 那时候他三十岁, senza 了." }
    ] },
    { "q": "Come dici «Non sono mai stato a Pechino»?", "opzioni": [
      { "t": "我没去过北京。", "ok": true, "perche": "没 + verbo + 过 è la negazione dell'esperienza." },
      { "t": "我没去了北京。", "ok": false, "perche": "了 non si usa dopo 没; e per l'esperienza serve 过, non 了." }
    ] },
    { "q": "Come dici «Ho già mangiato due ciotole di riso»?", "opzioni": [
      { "t": "我已经吃了两碗饭了。", "ok": true, "perche": "Il primo 了 sta dopo il verbo, davanti alla quantità; il secondo chiude la frase." },
      { "t": "我已经吃两碗了饭。", "ok": false, "perche": "了 non si mette dopo la quantità: va subito dopo il verbo, oppure in fondo alla frase." }
    ] },
    { "q": "Come dici «Non bevo più caffè»?", "opzioni": [
      { "t": "我不喝咖啡了。", "ok": true, "perche": "不…了 significa «non più»: la situazione è cambiata, ora la risposta è no." },
      { "t": "我没喝咖啡了。", "ok": false, "perche": "没 nega un fatto non avvenuto («non ho bevuto»); per «non più» serve 不 con 了 finale." }
    ] }
  ],
  "dialogo": {
    "titolo": "A pranzo",
    "righe": [
      { "chi": "A", "t": "你吃饭了吗？", "tr": "Hai mangiato?" },
      { "chi": "B", "t": "还没吃。我今天太忙了。", "tr": "Non ancora. Oggi sono troppo impegnato." },
      { "chi": "A", "t": "你早上没吃早饭吗？", "tr": "Stamattina non hai fatto colazione?" },
      { "chi": "B", "t": "没吃，我只喝了一杯咖啡。", "tr": "No, ho bevuto solo un caffè." },
      { "chi": "A", "t": "那你一定饿了。我们去吃饭吧。", "tr": "Allora avrai fame. Andiamo a mangiare." },
      { "chi": "B", "t": "好，我吃了饭就回公司。", "tr": "Va bene, appena ho mangiato torno in ufficio." }
    ],
    "esercizi": [
      { "q": "Perché B risponde 没吃 e non 没吃了?", "opzioni": [
        { "t": "Perché 没 nega il fatto, e un fatto non avvenuto non porta 了.", "ok": true, "perche": "Con 没 l'azione non c'è stata: non può essere vista come compiuta." },
        { "t": "Perché 吃 è un verbo di stato.", "ok": false, "perche": "吃 è un verbo d'azione: con altre frasi prende 了 senza problemi (我吃了饭)." },
        { "t": "Perché la risposta riguarda il presente.", "ok": false, "perche": "La domanda riguarda stamattina: è un fatto passato, ma negato." }
      ] },
      { "q": "Che cosa comunica A con 你一定饿了?", "opzioni": [
        { "t": "Ora hai fame, dopo una mattina senza colazione.", "ok": true, "perche": "了 in fondo aggiorna la situazione: dal digiuno di stamattina alla fame di adesso." },
        { "t": "Ieri avevi fame.", "ok": false, "perche": "Nel dialogo si parla di oggi, e 了 non segna un tempo passato." },
        { "t": "Hai mangiato troppo.", "ok": false, "perche": "Il verbo è 饿 (aver fame), e B ha mangiato pochissimo." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette 了 in ogni frase al passato (昨天我很累了, 以前我每天跑步了), la usa dopo 没 (我没吃了) e la inserisce tra verbo e risultato (我写了完作业). All'opposto, per «ho mangiato» dice 我吃饭 senza che nulla chiuda la frase.",
    "perche": "In italiano il passato prossimo si forma sempre con un verbo ausiliare e ci porta a pensare «passato = 了». In cinese però 了 non misura il tempo: segna un fatto concluso o una situazione nuova. Stati, abitudini e azioni negate non hanno né l'uno né l'altra.",
    "esci": "Prima di scrivere 了 fai due domande: nella frase c'è un fatto concluso o un cambiamento? E il verbo è un'azione singola, non un'abitudine o uno stato? Se la risposta è no, lascia solo la parola di tempo. Se è sì, metti 了 subito dopo il verbo, oppure in fondo alla frase.",
    "esempi": [
      { "sbagliata": "昨天我很累了。", "giusta": "昨天我很累。" },
      { "sbagliata": "我没买了书。", "giusta": "我没买书。" },
      { "sbagliata": "我写了完作业。", "giusta": "我写完了作业。" },
      { "sbagliata": "以前我每天跑步了。", "giusta": "以前我每天跑步。" }
    ]
  },
  "curiosi": [
    { "titolo": "Un carattere, due origini", "t": "了 dopo il verbo viene dal verbo «finire, concludere» (la pronuncia di quel verbo è liǎo): l'azione «è finita». Anche 了 in fondo alla frase discende dallo stesso verbo. Oggi i due si scrivono e si pronunciano allo stesso modo (le), ma fanno due lavori diversi. Esiste anche un terzo 了, liǎo, in 吃不了 («non riesco a finire di mangiare»): è il verbo originale e non c'entra con questa lezione." },
    { "titolo": "我吃饭了: un 了 o due?", "t": "Quando l'oggetto è nudo, i due 了 si fondono in uno solo: 我吃饭了 dice che il pasto è fatto e ne dà notizia nello stesso tempo. I manuali la descrivono in modi diversi (aspetto compiuto, particella finale, o tutti e due), ma l'uso non cambia: è la risposta normale a 你吃饭了吗？" },
    { "titolo": "Con gli aggettivi 了 vuol dire «diventare»", "t": "Con aggettivi e verbi di qualità 了 non indica un fatto compiuto ma il passaggio a una nuova condizione: 天黑了 (è diventato buio), 他老了 (è invecchiato), 苹果贵了 (le mele sono diventate care). Per questo «ieri faceva freddo» non vuole 了, mentre «adesso fa freddo (prima no)» sì: 现在冷了." },
    { "titolo": "了 e il futuro vicino", "t": "Con 要, 快, 就要 + 了 si annuncia qualcosa che sta per accadere: 我们要走了 («stiamo per andare»), 快下雨了 («sta per piovere»). Anche qui 了 non guarda al passato: segnala che la situazione sta per cambiare." }
  ],
  "pragmatica": "了 in fondo alla frase coinvolge chi parla: 我走了 significa «adesso vado» e chiude il discorso con un tono caldo; 好了 vuol dire «va bene, ci siamo». È frequentissima nel parlato e nei messaggi tra amici. Nel racconto scritto e nei testi formali si usa quando c'è davvero un cambiamento o un fatto concluso da segnalare, e non per marcare il passato: per quello bastano le parole di tempo (以前, 昨天, 去年).",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他喝了三杯茶。", "opzioni": [
      { "t": "Ha bevuto tre tazze di tè.", "ok": true, "perche": "喝了 + 三杯茶: azione compiuta con una quantità." },
      { "t": "Beve tre tazze di tè ogni giorno.", "ok": false, "perche": "Per un'abitudine non c'è 了: servirebbe 每天." },
      { "t": "Non ha bevuto tè.", "ok": false, "perche": "Per negare serve 没; qui non c'è nessuna negazione." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我饿了。", "opzioni": [
      { "t": "Adesso ho fame (prima no).", "ok": true, "perche": "了 in fondo annuncia che la situazione è cambiata." },
      { "t": "Ieri ho avuto fame.", "ok": false, "perche": "Manca una parola come 昨天; 了 non segna il passato." },
      { "t": "Non ho fame.", "ok": false, "perche": "Per negare si direbbe 我不饿." }
    ] },
    { "k": "buco", "zh": "我＿买书。", "tr": "Non ho comprato libri.", "opzioni": [
      { "t": "没", "ok": true, "perche": "没 nega un fatto che non è avvenuto." },
      { "t": "不", "ok": false, "perche": "我不买书 vuol dire «non compro libri» (abitudine o rifiuto), non «non ho comprato»." },
      { "t": "了", "ok": false, "perche": "了 non nega: segna un fatto compiuto o un cambiamento." }
    ] },
    { "k": "buco", "zh": "天黑＿。", "tr": "Si è fatto buio.", "opzioni": [
      { "t": "了", "ok": true, "perche": "了 in fondo: prima c'era luce, adesso no." },
      { "t": "过", "ok": false, "perche": "过 racconta un'esperienza, non un cambiamento." },
      { "t": "没", "ok": false, "perche": "没 nega un'azione; non sta in fondo alla frase." }
    ] },
    { "k": "ordine", "t": "他下了课就回家", "tr": "Appena finita la lezione, torna a casa." },
    { "k": "ordine", "t": "我还没吃饭", "tr": "Non ho ancora mangiato." },
    { "k": "trasforma", "base": "我昨天去北京。", "consegna": "Racconta che ci sei andato davvero: aggiungi 了 nel posto giusto.", "accetta": ["我昨天去了北京。"], "rifiutate": [
      { "t": "我昨天了去北京。", "perche": "了 viene dopo il verbo, mai prima." }
    ], "perche": "了 si mette subito dopo il verbo: 去了北京 chiude il viaggio come fatto compiuto." },
    { "k": "trasforma", "base": "天很黑。", "consegna": "Dì che è appena diventato buio, e che prima non lo era.", "accetta": ["天黑了。", "天很黑了。"], "rifiutate": [
      { "t": "天了黑。", "perche": "了 di cambiamento va in fondo alla frase, non nel mezzo." }
    ], "perche": "了 in fondo alla frase annuncia il passaggio dalla luce al buio." },
    { "k": "trasforma", "base": "我喝咖啡。", "consegna": "Dì che non bevi più caffè: cambia la frase.", "accetta": ["我不喝咖啡了。"], "rifiutate": [
      { "t": "我没喝咖啡了。", "perche": "没 nega un fatto non avvenuto; per «non più» servono 不 e 了 finale." }
    ], "perche": "不…了 significa «non più»: la situazione è cambiata." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Ieri ho comprato due libri.»", "a": "我昨天买了两本书。", "accetta": ["昨天我买了两本书。"], "perche": "了 subito dopo il verbo, davanti a una quantità (两本书): l'azione è compiuta e delimitata." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Prima correvo ogni giorno.»", "a": "以前我每天跑步。", "accetta": ["我以前每天跑步。", "以前我每天都跑步。", "我以前每天都跑步。"], "perche": "Un'abitudine del passato non ha 了: la parola di tempo 以前 dice che è passato." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你昨天去上海了吗？" },
      { "chi": "B", "t": "我＿去，我在家。", "buco": true }
    ], "opzioni": [
      { "t": "没", "ok": true, "perche": "A chiede di un fatto passato: la risposta negativa è 没 + verbo." },
      { "t": "不", "ok": false, "perche": "我不去 vuol dire «non vado» (rifiuto o abitudine), non «non ci sono andato»." },
      { "t": "别", "ok": false, "perche": "别 è un divieto («non andare»), non una risposta." }
    ] },
    { "k": "scegli", "q": "In quale frase va tolto 了?", "opzioni": [
      { "t": "昨天很冷了。", "ok": true, "perche": "Uno stato passato senza cambiamento non porta 了: basta 昨天 e il verbo." },
      { "t": "我买了一本书。", "ok": false, "perche": "Qui 了 è giusto: azione compiuta con una quantità." },
      { "t": "天黑了。", "ok": false, "perche": "Qui 了 è giusto: la situazione è cambiata." }
    ] }
  ],
  "capaci": [
    "Sai scegliere tra 了 dopo il verbo (fatto compiuto) e 了 in fondo alla frase (situazione cambiata).",
    "Sai negare un fatto passato con 没(有) senza mettere 了, e dire «non più» con 不…了.",
    "Sai dire abitudini e stati passati usando solo le parole di tempo, senza 了.",
    "Sai costruire una sequenza con 了 … 就 e distinguere 了 da 过 quando racconti un'esperienza."
  ],
  "glosse": {
    "我看了那个电影": "Ho visto quel film",
    "你喝了什么": "Che cosa hai bevuto?",
    "他在北京住了三年": "Ha abitato a Pechino tre anni",
    "明天我吃了饭就去": "Domani, quando avrò mangiato, vado"
  },
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Expressing completion with le»: 了 dopo il verbo, quantità, un solo 了 nelle sequenze, uso nel futuro",
    "Chinese Grammar Wiki (AllSet Learning), «Change of state with le» e «Expressing not anymore with le»: 了 finale, 不…了 e 没(有)…了",
    "CC-CEDICT, voce 了 (le, liǎo) e Tatoeba (cinese-italiano, es. 我没钱了, 他在神户住了三年), consultati con tools/lezioni-check.mjs"
  ]
};
