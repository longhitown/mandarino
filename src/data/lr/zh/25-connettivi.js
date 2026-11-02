/* Lezione 25 · Perché e anche se: 因为…所以, 虽然…但是 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["connettivi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "因为下雨，所以我们没去公园。", "tr": "Siccome pioveva, non siamo andati al parco." },
      { "t": "我们没去公园，因为下雨了。", "tr": "Non siamo andati al parco, perché pioveva." },
      { "t": "虽然这个菜很辣，但是我很喜欢吃。", "tr": "Anche se questo piatto è piccante, mi piace molto." },
      { "t": "他虽然很忙，可是每天都学中文。", "tr": "Anche se è molto impegnato, studia cinese ogni giorno." }
    ],
    "domanda": "Quali parole aprono la causa e quali la conseguenza? Che cosa cambia tra la prima e la seconda frase? E nella terza e nella quarta: quante parole servono per dire «anche se… però», e dove sta 虽然 nella quarta?",
    "risposta": "In cinese la causa e la conseguenza hanno ciascuna la propria parola: **因为** apre la causa, **所以** apre la conseguenza. Nella seconda frase l'ordine si gira (prima il fatto, poi la ragione) e resta solo 因为. Con **虽然** il cinese usa due parole, come con 因为…所以: 虽然 apre la concessione e **但是** (o **可是**) apre il «però», che di regola non manca. Nella quarta frase 虽然 sta dopo il soggetto 他: se il soggetto è lo stesso nelle due frasi, può stare prima o dopo di lui."
  },
  "regola": {
    "enunciato": "I connettivi cinesi lavorano **in coppia**: la prima frase apre con 因为 (causa) o 虽然 (concessione), la seconda con 所以 (conseguenza) o 但是 (contrasto). L'ordine segue il pensiero: prima il dato di partenza, poi ciò che ne deriva. Con 因为 e 所以 si può tenere una parola sola; con 虽然 la seconda parola (但是, 可是) resta.",
    "schema": ["因为 + causa", "，", "所以 + conseguenza"],
    "punti": [
      { "ok": true, "t": "**因为… 所以…** = «siccome…, quindi…»: 因为太累了，所以我想休息. Tutte e due le parole sono corrette e frequenti, soprattutto quando si spiega qualcosa con calma." },
      { "ok": true, "t": "**Una parola sola va benissimo**: 所以 da solo (天很冷，所以我穿了外套) oppure 因为 da solo in apertura (因为太累了，我想休息). Nel parlato 所以 da solo è molto comune." },
      { "ok": true, "t": "**La ragione può venire dopo**: 我没去，因为下雨了. Qui c'è solo 因为, che aggiunge il motivo a un fatto già detto; è anche la risposta normale a 为什么: 你为什么没去？ 因为下雨了." },
      { "ok": true, "t": "**虽然… 但是…** = «anche se…, però…»: 虽然很贵，但是很好吃. In cinese la seconda parola non si omette: l'italiano «anche se è caro, è buono» ha una parola sola, il cinese ne ha due. **可是** è più parlato di 但是, **不过** è più morbido («solo che»)." },
      { "ok": true, "t": "**Posizione di 虽然 e di 因为**: stanno all'inizio della prima frase. Con lo stesso soggetto 虽然 può seguirlo: 他虽然很忙，但是…. Dopo 但是 (e 可是) c'è la frase del contrasto, spesso con 还是 «ugualmente»: 但是他还是来了." },
      { "ok": true, "t": "**Dopo il soggetto, 却 al posto di 但是**: 这件衣服虽然便宜，却很好看. È più scritto; 却 sta dopo il soggetto e davanti al verbo o all'aggettivo." },
      { "ok": false, "t": "**Le due coppie non si mescolano**: 虽然…所以, 因为…但是 non funzionano, perché dicono cose opposte. La concessione chiede un contrasto (但是), la causa chiede una conseguenza (所以)." }
    ]
  },
  "logica": [
    "In italiano «perché» fa da tuttofare: apre la causa («non sono venuto perché ero malato») e risponde a «perché?». Per la conseguenza si usa «quindi, perciò», che spesso si omette: «Ero malato, non sono venuto». Il cinese tiene separate le due funzioni: **因为** porta la ragione, **所以** porta il risultato, e le due parole possono comparire insieme senza che suoni ridondante, come invece accadrebbe in italiano con «siccome… quindi». Lo stesso vale per il contrasto: l'italiano evita «anche se… però» perché è doppio, il cinese lo richiede.",
    "Un buon modo di ricordarlo: **la seconda frase deve avere il suo segnale**. Il segnale dice a chi ascolta che cosa fa la frase: 所以 «ecco il risultato», 但是 «attenzione, cambia direzione». Perciò 虽然 non resta solo: la seconda frase cambia direzione e lo dice. Con la causa il legame è più ovvio, e per questo 因为 o 所以 possono stare da soli. Le due coppie non si scambiano: dopo 虽然 la direzione cambia (但是), dopo 因为 la direzione prosegue (所以)."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Che cosa metti", "Esempio"],
    "righe": [
      ["Siccome A, quindi B", "因为 A，所以 B", "因为很累，所以我想休息。"],
      ["Quindi B (A è già noto)", "A，所以 B", "天很冷，所以我穿了外套。"],
      ["B, perché A (la ragione dopo)", "B，因为 A", "我没去，因为下雨了。"],
      ["Perché? Perché A", "因为 A", "你为什么哭？ 因为我很难过。"],
      ["Anche se A, però B", "虽然 A，但是 B", "虽然很贵，但是很好吃。"],
      ["Anche se A, però B (più parlato)", "虽然 A，可是 B", "虽然很贵，可是很好吃。"],
      ["A, solo che B", "A，不过 B", "很好看，不过有点贵。"]
    ]
  },
  "esempi": [
    { "gruppo": "Causa e conseguenza: 因为… 所以…", "items": [
      { "t": "因为明天要考试，所以我今天不出去玩。", "tr": "Siccome domani ho l'esame, oggi non esco a divertirmi." },
      { "t": "因为路上堵车，所以他迟到了。", "tr": "Siccome c'era traffico, è arrivato in ritardo." },
      { "t": "因为太贵了，所以我没买。", "tr": "Siccome era troppo caro, non l'ho comprato." }
    ] },
    { "gruppo": "Una parola sola basta", "items": [
      { "t": "天很冷，所以我穿了外套。", "tr": "Faceva freddo, quindi ho messo il cappotto.", "nota": "Solo 所以: dopo la prima frase, introduce il risultato." },
      { "t": "因为我很累，想早点睡觉。", "tr": "Siccome sono stanco, voglio andare a letto presto.", "nota": "Solo 因为, senza 所以: la conseguenza segue senza parola d'apertura." }
    ] },
    { "gruppo": "La ragione dopo il fatto", "items": [
      { "t": "我今天没去上班，因为孩子生病了。", "tr": "Oggi non sono andato al lavoro, perché mio figlio è malato.", "nota": "Prima il fatto, poi la ragione: qui 所以 non si usa." },
      { "t": "你为什么不吃？ 因为太辣了。", "tr": "Perché non mangi? Perché è troppo piccante.", "nota": "La risposta a 为什么 si apre con 因为." }
    ] },
    { "gruppo": "Il contrasto: 虽然… 但是…", "items": [
      { "t": "虽然这家饭店很小，但是菜很好吃。", "tr": "Anche se questo ristorante è piccolo, i piatti sono ottimi." },
      { "t": "虽然天气很冷，可是很多人在外面跑步。", "tr": "Anche se fa molto freddo, molte persone corrono all'aperto." },
      { "t": "他虽然很年轻，但是工作很认真。", "tr": "Anche se è molto giovane, lavora con molta serietà.", "nota": "Con lo stesso soggetto 虽然 può seguirlo." },
      { "t": "这个手机虽然便宜，却很好用。", "tr": "Questo telefono, anche se costa poco, funziona molto bene.", "nota": "却 sostituisce 但是, soprattutto nello scritto, e sta dopo il soggetto." },
      { "t": "虽然很晚了，但是他还是在工作。", "tr": "Anche se è tardi, lui sta ancora lavorando.", "nota": "还是 dopo 但是 sottolinea il «ugualmente»." }
    ] },
    { "gruppo": "Le due coppie nella stessa frase", "items": [
      { "t": "虽然我很想去，但是因为明天要考试，所以不能去。", "tr": "Anche se ho molta voglia di andare, siccome domani ho l'esame non posso andare." },
      { "t": "虽然路上堵车，但是我没有迟到。", "tr": "Anche se c'era traffico, non sono arrivato in ritardo." }
    ] },
    { "gruppo": "Un contrasto più morbido", "items": [
      { "t": "这件衣服很好看，不过有点贵。", "tr": "Questo vestito è molto bello, solo che è un po' caro.", "nota": "不过 attenua: segnala una riserva e non un vero contrasto." }
    ] }
  ],
  "contrasti": [
    { "q": "Come dici «Siccome pioveva, non siamo usciti»?", "opzioni": [
      { "t": "因为下雨，所以我们没出去。", "ok": true, "perche": "La causa (下雨) apre con 因为, la conseguenza (没出去) con 所以." },
      { "t": "因为下雨，但是我们没出去。", "ok": false, "perche": "但是 cambia direzione, ma qui il risultato segue la causa: serve 所以." },
      { "t": "虽然下雨，所以我们没出去。", "ok": false, "perche": "虽然 apre una concessione e vuole 但是; non si scambia con 因为." }
    ] },
    { "q": "Come dici «Anche se è caro, lo compro ugualmente»?", "opzioni": [
      { "t": "虽然很贵，但是我还是买。", "ok": true, "perche": "虽然 apre la concessione, 但是 il contrasto, 还是 aggiunge «ugualmente»." },
      { "t": "虽然很贵，所以我还是买。", "ok": false, "perche": "所以 porta una conseguenza logica: dopo 虽然 il pensiero cambia direzione e serve 但是 o 可是." },
      { "t": "因为很贵，但是我还是买。", "ok": false, "perche": "因为 apre una causa e vuole la sua conseguenza (所以): qui il senso è di contrasto, quindi serve 虽然." }
    ] },
    { "q": "Dici che non sei venuto e dai la ragione: «Non sono venuto perché ero malato». Quale frase rende il senso giusto?", "opzioni": [
      { "t": "我没来，因为我病了。", "ok": true, "perche": "Dopo il fatto, 因为 introduce la ragione: ero malato, quindi non sono venuto." },
      { "t": "我没来，所以我病了。", "ok": false, "perche": "È grammaticale, ma dice il contrario: «non sono venuto, quindi mi sono ammalato»." }
    ] },
    { "q": "A chiede 你为什么哭？ Che cosa risponde B in modo naturale?", "opzioni": [
      { "t": "因为我很难过。", "ok": true, "perche": "A chiede la ragione: la risposta porta 因为 e la causa." },
      { "t": "所以我很难过。", "ok": false, "perche": "所以 porterebbe un risultato; a «perché?» si risponde con la causa." },
      { "t": "虽然我很难过。", "ok": false, "perche": "虽然 apre una concessione e lascia la frase in sospeso." }
    ] },
    { "q": "Che cosa significa 他虽然很累，但是还在学习。?", "opzioni": [
      { "t": "Anche se è stanco, continua a studiare.", "ok": true, "perche": "虽然 apre la concessione (è stanco), 但是 il contrasto (studia ancora)." },
      { "t": "Siccome è stanco, studia.", "ok": false, "perche": "Per «siccome» servirebbe 因为…所以; la stanchezza qui non è la causa." },
      { "t": "Se è stanco, studia.", "ok": false, "perche": "«Se» è un'ipotesi (如果); 虽然 introduce un fatto vero." }
    ] },
    { "q": "Hai detto «Faceva freddo, quindi ho messo il cappotto». Quale frase lo dice?", "opzioni": [
      { "t": "天很冷，所以我穿了外套。", "ok": true, "perche": "所以 apre il risultato; il cappotto è la conseguenza del freddo." },
      { "t": "天很冷，因为我穿了外套。", "ok": false, "perche": "Così il cappotto sarebbe la causa del freddo: l'ordine causa-effetto è invertito." },
      { "t": "天很冷，虽然我穿了外套。", "ok": false, "perche": "虽然 apre una concessione e qui non si apre una frase che la completi." }
    ] },
    { "q": "Che cosa manca? 这件衣服很好看，＿有点贵。 Vuoi dire «solo che costa un po'», senza un vero contrasto.", "opzioni": [
      { "t": "不过", "ok": true, "perche": "不过 aggiunge una riserva morbida: «bello, solo che un po' caro»." },
      { "t": "所以", "ok": false, "perche": "所以 trasformerebbe il prezzo in una conseguenza della bellezza." },
      { "t": "因为", "ok": false, "perche": "因为 introdurrebbe il prezzo come causa del fatto che è bello." }
    ] },
    { "q": "Qual è la frase corretta per «Sono stanco, ma sono contento»?", "opzioni": [
      { "t": "虽然我很累，但是我很高兴。", "ok": true, "perche": "Due stati che vanno in direzioni diverse: concessione e contrasto." },
      { "t": "虽然我很累，所以我很高兴。", "ok": false, "perche": "La stanchezza non causa la gioia: la coppia 虽然…所以 non esiste." },
      { "t": "因为我很累，但是我很高兴。", "ok": false, "perche": "因为 prepara la conseguenza (所以), non il contrasto." }
    ] }
  ],
  "dialogo": {
    "titolo": "Un'assenza a lezione",
    "righe": [
      { "chi": "A", "t": "你今天怎么没来上课？", "tr": "Come mai oggi non sei venuto a lezione?" },
      { "chi": "B", "t": "因为我生病了，所以在家休息。", "tr": "Perché ero malato, e sono rimasto a casa a riposare." },
      { "chi": "A", "t": "现在好一点了吗？", "tr": "Adesso va meglio?" },
      { "chi": "B", "t": "好多了。虽然头还有点疼，但是不发烧了。", "tr": "Molto meglio. Anche se mi fa ancora un po' male la testa, la febbre è passata." },
      { "chi": "A", "t": "那明天来吗？", "tr": "Allora domani vieni?" },
      { "chi": "B", "t": "来。因为明天有考试，所以我一定要去。", "tr": "Sì. Siccome domani c'è l'esame, devo proprio esserci." }
    ],
    "esercizi": [
      { "q": "Perché B non è venuto a lezione?", "opzioni": [
        { "t": "Perché era malato.", "ok": true, "perche": "因为我生病了，所以在家休息: la malattia è la causa, il riposo la conseguenza." },
        { "t": "Perché aveva l'esame.", "ok": false, "perche": "L'esame è domani ed è il motivo per cui B verrà, non per cui è rimasto a casa." },
        { "t": "Perché pioveva.", "ok": false, "perche": "Nel dialogo non si parla di pioggia." }
      ] },
      { "q": "Che cosa fa 虽然头还有点疼，但是不发烧了?", "opzioni": [
        { "t": "Dice che c'è ancora un disturbo, ma è migliorato.", "ok": true, "perche": "虽然 apre il lato negativo, 但是 il lato positivo: la direzione cambia." },
        { "t": "Spiega perché la testa fa male.", "ok": false, "perche": "Per spiegare una causa servirebbe 因为." },
        { "t": "Dice che la febbre è la causa del mal di testa.", "ok": false, "perche": "Non c'è un legame di causa: sono due fatti messi a contrasto." }
      ] },
      { "q": "Perché B dice che domani ci sarà a tutti i costi?", "opzioni": [
        { "t": "Perché c'è l'esame.", "ok": true, "perche": "因为明天有考试，所以我一定要去: l'esame è la causa." },
        { "t": "Perché è già guarito del tutto.", "ok": false, "perche": "B dice solo che va meglio; la ragione che dà è l'esame." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano traduce «anche se… però» con una sola parola (虽然很贵，我买了), mette 所以 dove l'italiano ha «perché» (我没去，所以下雨了) o incrocia le due coppie (虽然下雨，所以我去了).",
    "perche": "L'italiano usa «perché» sia per la causa sia per rispondere, e «anche se» da solo regge la frase. In cinese ogni funzione ha la sua parola: la causa porta 因为, la conseguenza 所以, la concessione 虽然 e il contrasto 但是 o 可是. Scambiarle cambia il senso della frase.",
    "esci": "Prima di scegliere il connettivo chiediti: la seconda frase è un risultato (所以) o un cambio di direzione (但是)? E se la ragione viene dopo il fatto, usa 因为 solo. Con 虽然 ricorda sempre di aprire la seconda frase con 但是 o 可是.",
    "esempi": [
      { "sbagliata": "虽然下雨，所以我去了。", "giusta": "虽然下雨，但是我去了。" },
      { "sbagliata": "我没去，所以下雨了。", "giusta": "我没去，因为下雨了。" },
      { "sbagliata": "因为很贵，但是我买了。", "giusta": "虽然很贵，但是我买了。" }
    ]
  },
  "curiosi": [
    { "titolo": "之所以… 是因为…: la ragione in primo piano", "t": "Nello scritto e nel discorso formale esiste la forma 他之所以没来，是因为生病了: «il motivo per cui non è venuto è che era malato». Mette in primo piano il fatto, e la ragione arriva dopo, introdotta da 是因为. Nel parlato di tutti i giorni basta 他没来，因为生病了." },
    { "titolo": "Quattro modi di dire «però»", "t": "但是 è il «però» neutro; 可是 è più parlato e più caldo; 不过 è più morbido e introduce una riserva («solo che»); 却 è del registro scritto e sta dopo il soggetto. Con 虽然 si usano 但是, 可是 o 却: 不过 funziona anche senza 虽然, come in 很好看，不过有点贵." },
    { "titolo": "既然: «dato che», un fatto già noto", "t": "既然 introduce una ragione che chi parla e chi ascolta già conoscono e da cui si trae una conclusione: 既然你累了，就休息吧 («dato che sei stanco, riposa»). Diversamente da 因为, non spiega ma parte dal fatto noto. Di solito la seconda frase porta 就: ne riparliamo nella lezione sulle condizioni." }
  ],
  "pragmatica": "Nel parlato quotidiano si sente soprattutto 所以 da solo e 因为 da solo come risposta a 为什么: la coppia completa è più frequente quando si spiega con ordine o si scrive. 虽然…但是 invece conserva sempre il suo «però»: toglierlo suona incompleto. 可是 e 不过 danno un tono più caldo e conversazionale di 但是, che resta il neutro adatto a ogni situazione, anche formale.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "因为他生病了，所以没来上课。", "opzioni": [
      { "t": "Siccome è malato, non è venuto a lezione.", "ok": true, "perche": "因为 apre la causa, 所以 il risultato." },
      { "t": "Anche se è malato, è venuto a lezione.", "ok": false, "perche": "Per «anche se» servirebbe 虽然…但是." },
      { "t": "È venuto a lezione perché è malato.", "ok": false, "perche": "没来上课 dice che non è venuto." }
    ] },
    { "k": "scegli", "q": "Quale frase è corretta?", "opzioni": [
      { "t": "虽然我很累，但是我很高兴。", "ok": true, "perche": "虽然 con 但是: concessione e contrasto." },
      { "t": "虽然我很累，所以我很高兴。", "ok": false, "perche": "虽然 non si abbina a 所以." },
      { "t": "因为我很累，但是我很高兴。", "ok": false, "perche": "因为 non si abbina a 但是." }
    ] },
    { "k": "buco", "zh": "因为下雨，＿我们不去公园了。", "tr": "Siccome piove, non andiamo più al parco.", "opzioni": [
      { "t": "所以", "ok": true, "perche": "所以 apre il risultato dopo la causa." },
      { "t": "但是", "ok": false, "perche": "但是 cambia direzione: qui il risultato segue la causa." },
      { "t": "虽然", "ok": false, "perche": "虽然 apre la prima frase di una concessione, non il risultato." }
    ] },
    { "k": "buco", "zh": "虽然他很忙，＿每天都运动。", "tr": "Anche se è molto impegnato, fa sport ogni giorno.", "opzioni": [
      { "t": "但是", "ok": true, "perche": "但是 è il «però» che risponde a 虽然." },
      { "t": "所以", "ok": false, "perche": "所以 porta una conseguenza, non un contrasto." },
      { "t": "因为", "ok": false, "perche": "因为 introduce una causa, e la frase non la contiene." }
    ] },
    { "k": "buco", "zh": "我没去，＿下雨了。", "tr": "Non sono andato, perché pioveva.", "opzioni": [
      { "t": "因为", "ok": true, "perche": "Dopo il fatto, 因为 introduce la ragione." },
      { "t": "所以", "ok": false, "perche": "所以 direbbe che la pioggia è la conseguenza del non essere andato." },
      { "t": "虽然", "ok": false, "perche": "虽然 apre una concessione, non una ragione." }
    ] },
    { "k": "ordine", "t": "虽然天气很冷但是很多人在外面跑步", "tr": "Anche se fa molto freddo, molte persone corrono all'aperto." },
    { "k": "ordine", "t": "因为太累了所以我想早点睡觉", "tr": "Siccome sono troppo stanco, voglio andare a letto presto." },
    { "k": "trasforma", "base": "我今天没去上班，因为孩子病了。", "consegna": "Riscrivi mettendo la causa per prima, con 因为… 所以….", "accetta": ["因为孩子病了，所以我今天没去上班。", "因为孩子病了，所以我今天没去上班了。", "因为孩子病了，所以今天我没去上班。", "因为孩子病了，所以今天没去上班。"], "rifiutate": [
      { "t": "因为孩子病了，但是我今天没去上班。", "perche": "但是 cambia direzione, ma il risultato segue la causa: serve 所以." }
    ], "perche": "Con la causa per prima, il risultato si apre con 所以: 因为孩子病了，所以我今天没去上班." },
    { "k": "trasforma", "base": "这个菜很辣，我很喜欢吃。", "consegna": "Unisci le due frasi con 虽然… 但是… («anche se è piccante, mi piace»).", "accetta": ["虽然这个菜很辣，但是我很喜欢吃。", "这个菜虽然很辣，但是我很喜欢吃。", "虽然这个菜很辣，可是我很喜欢吃。", "这个菜虽然很辣，可是我很喜欢吃。"], "rifiutate": [
      { "t": "虽然这个菜很辣，所以我很喜欢吃。", "perche": "所以 porta una conseguenza; qui serve il contrasto 但是." }
    ], "perche": "虽然 apre la concessione (è piccante), 但是 o 可是 il contrasto (mi piace); 虽然 può stare prima o dopo il soggetto 这个菜." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Siccome fa freddo, non esco.»", "a": "因为天气很冷，所以我不出去。", "accetta": ["因为很冷，所以我不出去。", "天气很冷，所以我不出去。", "因为天气冷，所以我不出去。", "因为天气很冷，所以我不出门。"], "perche": "因为 apre la causa (天气很冷), 所以 apre la conseguenza (我不出去)." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Anche se è caro, è buonissimo.»", "a": "虽然很贵，但是很好吃。", "accetta": ["虽然很贵，可是很好吃。", "虽然很贵，但是非常好吃。", "虽然很贵，可是非常好吃。"], "perche": "虽然 apre la concessione (很贵), 但是 o 可是 il contrasto (很好吃)." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你为什么不去？" },
      { "chi": "B", "t": "＿我明天要考试。", "buco": true }
    ], "opzioni": [
      { "t": "因为", "ok": true, "perche": "A chiede il motivo: B risponde con 因为 e la causa." },
      { "t": "所以", "ok": false, "perche": "所以 porterebbe un risultato, non la ragione richiesta." },
      { "t": "虽然", "ok": false, "perche": "虽然 apre una concessione che qui non c'è." }
    ] }
  ],
  "capaci": [
    "Sai collegare causa e conseguenza con 因为… 所以…, e sai usare 所以 o 因为 da soli.",
    "Sai dare un motivo dopo un fatto (我没去，因为…) e rispondere a 为什么 con 因为.",
    "Sai esprimere un contrasto con 虽然… 但是… e scegliere tra 但是, 可是, 不过 e 却.",
    "Sai evitare le coppie sbagliate (虽然…所以, 因为…但是) e combinare le due coppie in una frase."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), pagina «Cause and effect with yinwei and suoyi»: 因为 e 所以 in coppia o da soli, ragione dopo il risultato",
    "Chinese Grammar Wiki (AllSet Learning), pagina «Expressing although with suiran and danshi»: 但是 o 可是 necessari dopo 虽然, posizione di 虽然 rispetto al soggetto",
    "CC-CEDICT (cedict_ts.u8), voci 因为, 所以, 虽然, 但是, 可是, 不过, 却, 既然",
    "Tatoeba (cmn.tsv, interrogato con grep): frasi attestate con 因为…所以, 虽然…但是, 既然…就"
  ]
};
