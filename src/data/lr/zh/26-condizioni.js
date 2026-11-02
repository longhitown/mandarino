/* Lezione 26 · Se, basta che, solo se: 如果…就 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["condizioni"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "如果明天下雨，我就不去了。", "tr": "Se domani piove, non vado più." },
      { "t": "下雨的话，我们就在家看电视。", "tr": "Se piove, restiamo a casa a guardare la tv." },
      { "t": "只要你来，我就高兴。", "tr": "Basta che tu venga e sono contento." },
      { "t": "只有多练习，才能说得好。", "tr": "Solo esercitandoti molto parlerai bene." }
    ],
    "domanda": "Dove sta la condizione, prima o dopo il risultato? Quale parola compare davanti al verbo del risultato? Guarda le ultime due frasi: usano parole diverse, 就 e 才. Che cosa cambia nel pensiero tra «basta che» e «solo se»?",
    "risposta": "La condizione viene **sempre prima**, il risultato dopo, e il risultato porta una parola di legame prima del verbo: **就** nelle prime tre frasi, **才** nell'ultima. La seconda frase non ha 如果: è la condizione chiusa da **的话**. Tra la terza e la quarta cambia la logica: 只要…就 dice che la condizione **basta** (sufficiente), 只有…才 dice che **senza di essa non si ottiene** il risultato (necessaria). Il verbo non cambia mai forma: l'ipotesi si legge dalle parole di legame."
  },
  "regola": {
    "enunciato": "La condizione si mette per prima, il risultato per secondo, e il risultato è introdotto da una parola che sta dopo il soggetto e davanti al verbo. **如果 / 要是 / …的话** dicono «se» e il risultato porta **就**. **只要** dice «basta che» e il risultato porta ancora **就**. **只有** dice «solo se» e il risultato porta **才**.",
    "schema": ["condizione", "，", "chi", "就 / 才", "verbo · risultato"],
    "punti": [
      { "ok": true, "t": "**如果 A，(chi) 就 B** = «se A, allora B»: 如果你有时间，就来我家吧. **要是** è la forma parlata di 如果; **假如** appartiene al registro più scritto." },
      { "ok": true, "t": "**…的话** chiude la condizione e si può usare da solo o insieme a 如果 / 要是: 下雨的话，我们就在家; 如果你累的话，就休息吧. Nel parlato è molto frequente." },
      { "ok": true, "t": "**就 sta dopo il soggetto del risultato** e davanti al verbo: 我就不去, 我们就在家. Se il risultato non ha soggetto espresso (un invito, un ordine), 就 apre la frase: 如果你有时间，就来我家吧." },
      { "ok": true, "t": "**只要 A，(chi) 就 B** = «basta che A, e B»: la condizione è sufficiente, e spesso anche leggera: 只要你努力，就能学好; 只要不下雨，我就去跑步." },
      { "ok": true, "t": "**只有 A，(chi) 才 B** = «solo se A, B»: la condizione è l'unica via. Dopo 才 si trova spesso un verbo modale: 只有买了票，才能进去; 只有多练习，才会说得好." },
      { "ok": true, "t": "**Il verbo resta uguale**: l'italiano ha «se piove» e «se piovesse», il cinese ha sempre 下雨. Che l'ipotesi sia reale o irreale lo dicono il contesto e il risultato: 如果我有很多钱，我就买一辆新车 («se avessi molti soldi, comprerei una macchina nuova»)." },
      { "ok": false, "t": "**Le coppie non si mescolano**: 只有…就 e 只要…才 non formano frasi regolari. Il cambio di parola (就 contro 才) è proprio ciò che cambia la logica. Inoltre 如果 introduce una possibilità, non un fatto già noto: per «dato che» si dice 既然." }
    ]
  },
  "logica": [
    "L'italiano distingue «se» (indicativo) da «se» (congiuntivo) e dal condizionale nel risultato: «se vieni, sono contento» e «se venissi, sarei contento». Il cinese lascia il verbo com'è e lega le due metà con una parola di nesso: **就** significa «allora, a quel punto» e collega il risultato alla condizione senza interruzioni. Per questo 就 è la parola di tutte le ipotesi, e l'ipotesi (reale o immaginata) emerge dal contesto.",
    "Il filo che unisce 就 e 才 è lo stesso della lezione su 就 e 才: **就** è la parola del facile e del rapido, **才** quella del difficile e del tardivo. Con 只要 la condizione è facile da soddisfare («basta che…»), quindi segue 就. Con 只有 la condizione è un requisito stretto («senza questo, niente»), quindi segue 才. Una frase come 只要买票，就能进去 dice che il biglietto è sufficiente; 只有买票，才能进去 dice che è indispensabile."
  ],
  "mappa": {
    "tipo": "albero",
    "inizio": "q0",
    "nodi": {
      "q0": {
        "q": "La condizione è una semplice possibilità («se piove», «se hai tempo») oppure un requisito («basta che», «solo se»)?",
        "risposte": [
          { "t": "Una possibilità: «se…».", "vai": "fse" },
          { "t": "Un requisito: «basta che» o «solo se».", "vai": "q1" }
        ]
      },
      "q1": {
        "q": "Il requisito basta da solo, oppure senza di esso il risultato non c'è?",
        "risposte": [
          { "t": "Basta: una cosa sola è sufficiente («basta che…»).", "vai": "fbasta" },
          { "t": "Senza di esso, niente: è l'unica via («solo se…»).", "vai": "fsolo" }
        ]
      },
      "fse": { "fine": "Usa **如果 A，我就 B** (nel parlato anche 要是, oppure A 的话): 如果明天下雨，我就不去了; 下雨的话，我们就在家. 就 va dopo il soggetto." },
      "fbasta": { "fine": "Usa **只要 A，就 B**: 只要你努力，就能学好. Il risultato porta 就, perché la condizione è facile da soddisfare." },
      "fsolo": { "fine": "Usa **只有 A，才 B**: 只有多练习，才能说得好. Il risultato porta 才, perché la condizione è un requisito stretto." }
    }
  },
  "esempi": [
    { "gruppo": "Se… allora…: 如果… 就…", "items": [
      { "t": "如果明天下雨，我就不去了。", "tr": "Se domani piove, non vado più." },
      { "t": "如果你有时间，就来我家吧。", "tr": "Se hai tempo, vieni a casa mia.", "nota": "Senza un soggetto espresso, 就 apre la seconda frase." },
      { "t": "如果你不想去，就别去。", "tr": "Se non hai voglia di andare, non andare.", "nota": "La condizione può essere negativa; 别 viene dopo 就." }
    ] },
    { "gruppo": "Nel parlato: 要是 e 的话", "items": [
      { "t": "要是你有空，我们就去看电影吧。", "tr": "Se sei libero, andiamo a vedere un film." },
      { "t": "下雨的话，我们就在家看电视。", "tr": "Se piove, restiamo a casa a guardare la tv." },
      { "t": "如果你不舒服的话，就别去了。", "tr": "Se non ti senti bene, meglio non andare.", "nota": "如果 e 的话 insieme: la condizione è doppiamente segnalata." }
    ] },
    { "gruppo": "Basta che…: 只要… 就…", "items": [
      { "t": "只要你努力，就能学好。", "tr": "Basta che ti impegni e imparerai bene." },
      { "t": "只要不下雨，我就去跑步。", "tr": "Basta che non piova e vado a correre." },
      { "t": "只要你在，我就不怕。", "tr": "Basta che tu ci sia e non ho paura." }
    ] },
    { "gruppo": "Solo se…: 只有… 才…", "items": [
      { "t": "只有多练习，才能说得好。", "tr": "Solo esercitandoti molto parlerai bene." },
      { "t": "只有买了票，才能进去。", "tr": "Solo chi ha comprato il biglietto può entrare." },
      { "t": "只有喝了咖啡，我才能开始工作。", "tr": "Solo dopo aver bevuto il caffè riesco a mettermi al lavoro." }
    ] },
    { "gruppo": "Stessa condizione, due logiche", "items": [
      { "t": "只要你来，我就高兴。", "tr": "Basta che tu venga e sono contento.", "nota": "Se vieni tu, sono contento: altre condizioni non servono." },
      { "t": "只有你来，我才高兴。", "tr": "Solo se vieni tu sono contento.", "nota": "Se non vieni tu, non sono contento." }
    ] },
    { "gruppo": "Ipotesi che non si verificano", "items": [
      { "t": "如果我有很多钱，我就买一辆新车。", "tr": "Se avessi molti soldi, comprerei una macchina nuova.", "nota": "Nessun cambio del verbo: l'irrealtà viene dal contesto." },
      { "t": "早知道你不在，我就不来了。", "tr": "Se avessi saputo che non c'eri, non sarei venuto.", "nota": "Con 早知道 si può omettere 如果." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Se domani piove, non vado»?", "opzioni": [
      { "t": "如果明天下雨，我就不去了。", "ok": true, "perche": "就 sta dopo il soggetto 我 e davanti al verbo." },
      { "t": "如果明天下雨，就我不去了。", "ok": false, "perche": "就 non sta davanti al soggetto: va tra il soggetto e il verbo." },
      { "t": "如果明天下雨，我不就去了。", "ok": false, "perche": "不 nega il verbo, quindi sta davanti a 去; 就 viene prima di 不." }
    ] },
    { "q": "Vuoi dire che per imparare bene ti basta impegnarti. Quale frase lo dice?", "opzioni": [
      { "t": "只要你努力，就能学好。", "ok": true, "perche": "只要 dice «basta che» e il risultato porta 就." },
      { "t": "只有你努力，才能学好。", "ok": false, "perche": "只有…才 dice «solo se»: l'impegno diventa l'unica via, non una condizione che basta." }
    ] },
    { "q": "Come dici «Solo esercitandoti molto parlerai bene»?", "opzioni": [
      { "t": "只有多练习，才能说得好。", "ok": true, "perche": "只有 dice «solo se» e il risultato porta 才." },
      { "t": "只有多练习，就能说得好。", "ok": false, "perche": "只有 vuole 才: la coppia 只有…就 non esiste." },
      { "t": "只要多练习，才能说得好。", "ok": false, "perche": "只要 vuole 就: con 才 la frase sarebbe incoerente." }
    ] },
    { "q": "Il medico dice: se non dormi, non guarisci; dormire è l'unica via. Quale frase lo dice?", "opzioni": [
      { "t": "只有睡够了，病才会好。", "ok": true, "perche": "只有…才 esprime che il sonno è condizione necessaria." },
      { "t": "只要睡够了，病就会好。", "ok": false, "perche": "只要…就 dice che il sonno basta, ma non esclude altre vie." }
    ] },
    { "q": "Che cosa significa 只要你来，我就高兴。?", "opzioni": [
      { "t": "Se vieni, sono contento; non serve altro.", "ok": true, "perche": "只要 introduce una condizione che basta." },
      { "t": "Sono contento solo se vieni.", "ok": false, "perche": "«Solo se» sarebbe 只有你来，我才高兴." },
      { "t": "Sono contento anche se non vieni.", "ok": false, "perche": "Non c'è nessuna concessione: la frase lega la gioia alla tua presenza." }
    ] },
    { "q": "Come dici «Se piove, restiamo a casa» usando 的话?", "opzioni": [
      { "t": "下雨的话，我们就在家。", "ok": true, "perche": "的话 chiude la condizione; il risultato comincia con 我们就." },
      { "t": "的话下雨，我们就在家。", "ok": false, "perche": "的话 viene dopo la condizione, non prima." }
    ] },
    { "q": "Come dici «Se non hai voglia di andare, non andare»?", "opzioni": [
      { "t": "如果你不想去，就别去。", "ok": true, "perche": "La condizione negativa si forma con 不想; 别 è il divieto." },
      { "t": "如果你想去，就别去。", "ok": false, "perche": "Questa dice «se hai voglia, non andare»: il contrario." },
      { "t": "如果不你想去，就别去。", "ok": false, "perche": "不 sta davanti al verbo che nega (想), non davanti al soggetto." }
    ] },
    { "q": "Come dici «Se avessi molti soldi, comprerei una macchina nuova»?", "opzioni": [
      { "t": "如果我有很多钱，我就买一辆新车。", "ok": true, "perche": "Il verbo resta al presente: l'irrealtà dell'ipotesi si legge dal contesto." },
      { "t": "如果我买一辆新车，我就有很多钱。", "ok": false, "perche": "La condizione e il risultato sono scambiati: questa dice «se comprassi una macchina, avrei molti soldi»." }
    ] },
    { "q": "Dove va 才 in «Solo con il biglietto si può entrare»?", "opzioni": [
      { "t": "只有买了票，才能进去。", "ok": true, "perche": "才 sta prima del verbo modale 能, nel risultato." },
      { "t": "只有买了票，能才进去。", "ok": false, "perche": "才 non si mette dopo 能: precede il verbo del risultato." }
    ] }
  ],
  "dialogo": {
    "titolo": "Piani per il fine settimana",
    "righe": [
      { "chi": "A", "t": "周末你想做什么？", "tr": "Che cosa vuoi fare nel fine settimana?" },
      { "chi": "B", "t": "如果天气好，我就去爬山。", "tr": "Se il tempo è bello, vado in montagna." },
      { "chi": "A", "t": "要是下雨呢？", "tr": "E se piove?" },
      { "chi": "B", "t": "下雨的话，我就在家看书。你呢？", "tr": "Se piove, resto a casa a leggere. E tu?" },
      { "chi": "A", "t": "我只要有电影看，就很高兴。", "tr": "A me basta avere un film da guardare e sono contento." },
      { "chi": "B", "t": "那下雨天我们一起看电影吧。", "tr": "Allora nei giorni di pioggia guardiamo un film insieme." },
      { "chi": "A", "t": "好啊，不过只有你请客，我才去。", "tr": "Va bene, ma vengo solo se offri tu." }
    ],
    "esercizi": [
      { "q": "Che cosa fa B se il tempo è bello?", "opzioni": [
        { "t": "Va in montagna.", "ok": true, "perche": "如果天气好，我就去爬山: la condizione è il bel tempo, il risultato è andare in montagna." },
        { "t": "Resta a casa a leggere.", "ok": false, "perche": "È ciò che fa B se piove (下雨的话)." },
        { "t": "Guarda un film.", "ok": false, "perche": "Il film è l'idea finale, per i giorni di pioggia." }
      ] },
      { "q": "Che cosa significa 要是下雨呢?", "opzioni": [
        { "t": "E se piove?", "ok": true, "perche": "要是 è la forma parlata di 如果; 呢 sposta la domanda sul caso nuovo." },
        { "t": "Siccome piove…", "ok": false, "perche": "«Siccome» sarebbe 因为 o 既然, non un'ipotesi." },
        { "t": "Quando smette di piovere?", "ok": false, "perche": "Nella frase non c'è nessuna domanda sul tempo." }
      ] },
      { "q": "Che cosa dice A con 我只要有电影看，就很高兴?", "opzioni": [
        { "t": "Un film basta a renderlo contento.", "ok": true, "perche": "只要…就 esprime una condizione sufficiente." },
        { "t": "È contento solo se vede un film.", "ok": false, "perche": "Quella sarebbe 只有有电影看，我才高兴." }
      ] },
      { "q": "Con 只有你请客，我才去, che tono ha l'ultima battuta di A?", "opzioni": [
        { "t": "Scherzoso: pone l'offerta come condizione unica.", "ok": true, "perche": "只有…才 fa dell'invito l'unica via; detto tra amici suona come una battuta." },
        { "t": "Dice che andrà comunque.", "ok": false, "perche": "Il senso è opposto: senza invito non va." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette 就 davanti al soggetto (如果明天下雨，就我不去了), scambia le coppie (只有…就, 只要…才) o si aspetta un verbo diverso per l'ipotesi irreale e non si fida del presente cinese.",
    "perche": "In italiano «allora» può aprire la seconda frase («se piove, allora non vado»), e questo porta a mettere 就 all'inizio. In cinese 就 è un avverbio: deve stare dopo il soggetto, davanti al verbo. Inoltre le coppie 就 e 才 non sono intercambiabili, perché è proprio la parola di nesso a dire se la condizione basta o è indispensabile.",
    "esci": "Cerca prima il soggetto del risultato e metti 就 o 才 subito dopo. Poi controlla la coppia: 如果 / 要是 / 只要 chiamano 就, 只有 chiama 才. Se il risultato non ha soggetto espresso (un invito, un consiglio), 就 apre la frase senza problemi.",
    "esempi": [
      { "sbagliata": "如果明天下雨，就我不去了。", "giusta": "如果明天下雨，我就不去了。" },
      { "sbagliata": "只有多练习，就能说得好。", "giusta": "只有多练习，才能说得好。" },
      { "sbagliata": "只要你努力，才能学好。", "giusta": "只要你努力，就能学好。" }
    ]
  },
  "curiosi": [
    { "titolo": "Quattro modi di dire «se»", "t": "如果 è la parola neutra, adatta a ogni situazione. 要是 è la variante colloquiale: il dizionario CC-CEDICT la marca come parlata. 假如 e 倘若 hanno un tono più scritto. Tutte e quattro funzionano con 就 nel risultato. Nel parlato si può anche togliere la parola iniziale e tenere solo 的话: 你去的话，我也去." },
    { "titolo": "Il 就 che si può omettere", "t": "Nei risultati brevi, soprattutto negli inviti e nei consigli, il 就 può mancare: 如果有困难，给我打电话. Con 就 la frase suona più marcata («in quel caso, allora»); senza è più leggera. In alternativa al 就 si trova anche 那 o 那么 nel registro più parlato." },
    { "titolo": "Lo stesso filo di 就 e 才", "t": "Nella lezione su 就 e 才 si vede che 就 va con ciò che è facile e rapido, 才 con ciò che è difficile e tardivo. La stessa logica spiega le due coppie di questa lezione: 只要 abbassa l'asticella e porta 就, 只有 la alza e porta 才. La lingua non ha due regole separate: ne ha una, dietro due coppie." },
    { "titolo": "既然: quando la condizione è un fatto noto", "t": "Con 如果 si ipotizza qualcosa che può non accadere; con 既然 si parte da un fatto già vero e già noto: 既然你累了，就休息吧 («dato che sei stanco, riposa»). Anche 既然 porta 就 nella seconda frase." }
  ],
  "pragmatica": "如果 è sempre adatto; 要是 e 的话 danno un tono più parlato e amichevole. 只要…就 è una formula rassicurante («basta che…»), perfetta per incoraggiare o per accogliere: 只要你来，我就高兴. 只有…才 è più perentoria: può esprimere un requisito serio («solo con il biglietto») oppure, tra amici, una battuta. Nel dare consigli o ordini cortesi, il tono si ammorbidisce con 吧 in fondo: 如果你累了，就休息吧.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "只要你努力，就能学好。", "opzioni": [
      { "t": "Basta che ti impegni e imparerai bene.", "ok": true, "perche": "只要…就 dice che la condizione basta." },
      { "t": "Solo se ti impegni imparerai bene.", "ok": false, "perche": "«Solo se» si direbbe con 只有…才, non con 只要." },
      { "t": "Anche se ti impegni non imparerai.", "ok": false, "perche": "Non c'è nessuna concessione: la frase lega l'impegno al successo." }
    ] },
    { "k": "scegli", "q": "Quale frase dice che il requisito è indispensabile?", "opzioni": [
      { "t": "只有多练习，才能说得好。", "ok": true, "perche": "只有…才 esprime la condizione necessaria." },
      { "t": "只要多练习，就能说得好。", "ok": false, "perche": "只要…就 dice che basta, ma non esclude altre vie." },
      { "t": "多练习，所以能说得好。", "ok": false, "perche": "所以 porta una conseguenza, non una condizione." }
    ] },
    { "k": "buco", "zh": "如果你有时间，＿来我家吧。", "tr": "Se hai tempo, vieni a casa mia.", "opzioni": [
      { "t": "就", "ok": true, "perche": "就 apre il risultato dopo una condizione con 如果." },
      { "t": "所以", "ok": false, "perche": "所以 chiude una causa (因为), non risponde a una condizione." },
      { "t": "虽然", "ok": false, "perche": "虽然 apre una concessione, non un risultato." }
    ] },
    { "k": "buco", "zh": "只有多练习，＿能说得好。", "tr": "Solo esercitandoti molto parlerai bene.", "opzioni": [
      { "t": "才", "ok": true, "perche": "只有 si completa sempre con 才 nel risultato." },
      { "t": "就", "ok": false, "perche": "就 va con 只要, non con 只有." },
      { "t": "所以", "ok": false, "perche": "所以 porta una conseguenza, non risponde a 只有." }
    ] },
    { "k": "buco", "zh": "只要你来，我＿高兴。", "tr": "Basta che tu venga e sono contento.", "opzioni": [
      { "t": "就", "ok": true, "perche": "只要 si completa sempre con 就 nel risultato." },
      { "t": "才", "ok": false, "perche": "才 va con 只有: cambierebbe la logica in «solo se»." },
      { "t": "但是", "ok": false, "perche": "但是 cambia direzione, ma qui il legame è di condizione." }
    ] },
    { "k": "ordine", "t": "如果明天下雨我就不去了", "tr": "Se domani piove, non vado." },
    { "k": "ordine", "t": "下雨的话我们就在家看电视", "tr": "Se piove, restiamo a casa a guardare la tv." },
    { "k": "trasforma", "base": "明天下雨，我不去。", "consegna": "Aggiungi la condizione con 如果 e il nesso 就: «Se domani piove, non vado».", "accetta": ["如果明天下雨，我就不去。", "如果明天下雨，我就不去了。", "明天如果下雨，我就不去。", "明天如果下雨，我就不去了。"], "rifiutate": [
      { "t": "如果明天下雨，就我不去。", "perche": "就 va dopo il soggetto 我, non prima." }
    ], "perche": "如果 apre la condizione e 就 sta tra il soggetto (我) e il verbo (不去)." },
    { "k": "trasforma", "base": "只要多练习，就能说得好。", "consegna": "Cambia il senso: ora il requisito è indispensabile («solo se ti eserciti molto»).", "accetta": ["只有多练习，才能说得好。", "你只有多练习，才能说得好。"], "rifiutate": [
      { "t": "只有多练习，就能说得好。", "perche": "Con 只有 il risultato vuole 才, non 就." }
    ], "perche": "只有…才 esprime la condizione necessaria: cambiano tutti e due i nessi." },
    { "k": "trasforma", "base": "你努力学习，会有好成绩。", "consegna": "Riscrivi con 只要… 就… per dire «basta che ti impegni a studiare».", "accetta": ["只要你努力学习，就会有好成绩。", "你只要努力学习，就会有好成绩。", "只要你努力学习，就能有好成绩。"], "rifiutate": [
      { "t": "只要你努力学习，才会有好成绩。", "perche": "只要 si completa con 就; 才 cambia la logica in «solo se»." }
    ], "perche": "只要 apre la condizione che basta e il risultato porta 就." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Se hai fame, mangia qualcosa.»", "a": "如果你饿了，就吃点东西吧。", "accetta": ["你饿了的话，就吃点东西吧。", "要是你饿了，就吃点东西吧。", "如果饿了，就吃点东西吧。", "饿了的话，就吃点东西吧。"], "perche": "如果 apre la condizione e 就 apre il consiglio, che non ha soggetto espresso." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Puoi entrare solo se compri il biglietto.»", "a": "只有买了票，才能进去。", "accetta": ["只有买票，才能进去。", "你只有买了票，才能进去。", "只有买了票，才可以进去。", "只有买票，才可以进去。"], "perche": "只有 dice «solo se» e il risultato porta 才, qui con il modale 能 o 可以." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "明天去爬山吗？" },
      { "chi": "B", "t": "如果不下雨，我＿去。", "buco": true }
    ], "opzioni": [
      { "t": "就", "ok": true, "perche": "Dopo una condizione con 如果, il risultato porta 就." },
      { "t": "所以", "ok": false, "perche": "所以 porta la conseguenza di una causa (因为), non di un'ipotesi." },
      { "t": "但是", "ok": false, "perche": "但是 cambia direzione, ma qui il risultato segue la condizione." }
    ] }
  ],
  "capaci": [
    "Sai fare un'ipotesi con 如果, 要是 o 的话 e legare il risultato con 就, al posto giusto.",
    "Sai dire «basta che» con 只要…就 e «solo se» con 只有…才, scegliendo tra condizione sufficiente e necessaria.",
    "Sai riconoscere le coppie sbagliate (只有…就, 只要…才) e la posizione di 就 e 才 dopo il soggetto.",
    "Sai formulare ipotesi irreali in cinese senza cambiare il verbo, affidandoti al contesto."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), pagina «Expressing if then with ruguo jiu»: posizione di 就, 就 omissibile, 那 e 那么, 的话",
    "Chinese Grammar Wiki (AllSet Learning), pagina «Expressing only if with zhiyou»: struttura 只有…才, 才 con 能, condizione necessaria",
    "Chinese Grammar Wiki (AllSet Learning), pagina «Indicating conditions»: elenco di 如果, 要是, 只要, 只有",
    "CC-CEDICT (cedict_ts.u8), voci 如果, 要是, 的话, 假如, 倘若, 只要, 只有, 就, 才, 既然, 请客",
    "Tatoeba (cmn.tsv, interrogato con grep): frasi attestate con 如果…就, 只要…就, 只有…才, 要是…就, 的话…就, 既然…就"
  ]
};
