/* Lezione 11 · Volere e potere: 想, 要, 会, 能, 可以 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["modali"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "我会开车，可是我喝了酒，今天不能开车。", "tr": "So guidare, ma ho bevuto, quindi oggi non posso guidare." },
      { "t": "我想喝茶，不想喝咖啡。", "tr": "Ho voglia di tè, non di caffè." },
      { "t": "这里可以坐吗？", "tr": "Si può sedere qui?" },
      { "t": "明天会下雨。", "tr": "Domani pioverà." }
    ],
    "domanda": "Nella prima frase compaiono 会 e 能 con lo stesso verbo 开车, ma dicono cose diverse. Che differenza c'è? E che cosa fa 会 nell'ultima frase, dove nessuno «sa» fare niente?",
    "risposta": "**会** dice che sai guidare (l'hai imparato): è una competenza. **能** dice che adesso, in questa situazione, puoi farlo oppure no: dopo aver bevuto, no. **可以** chiede un permesso. **想** esprime una voglia. Nell'ultima frase **会** non parla di abilità: prevede che una cosa accadrà (la pioggia non «sa» fare nulla). L'italiano «posso» e «so» si distribuisce quindi su più verbi, e ogni verbo guarda a una cosa diversa: competenza, circostanze, permesso, previsione."
  },
  "regola": {
    "enunciato": "I verbi modali cinesi stanno **davanti** al verbo principale e non cambiano mai forma. **想** e **要** dicono «volere», **会** dice «saper fare» e «prevedere», **能** dice «poter fare» per le circostanze, **可以** dice «poter fare» per il permesso. Il negativo si mette davanti al modale: 不想, 不会, 不能, 不可以.",
    "schema": ["chi", "(不)", "想 · 要 · 会 · 能 · 可以", "verbo", "(oggetto)"],
    "punti": [
      { "ok": true, "t": "**想** è la voglia, «vorrei, ho voglia di»: 我想喝茶. È il «volere» gentile, e accetta gradi: 我很想去, 我真想睡觉. Il negativo è 不想: 我不想去." },
      { "ok": true, "t": "**要** è il «volere» deciso («prendo, voglio»): 我要一杯茶 al bar. Davanti a un verbo vuol dire anche «devo»: 明天我要早起, e annuncia ciò che sta per accadere: 要下雨了. Per «non voglio» si usa 不想; 不要 vuol dire «non farlo!» e 不用 «non serve»." },
      { "ok": true, "t": "**会** è la competenza imparata: 我会做饭, 他不会开车. Con un verbo che non è un'abilità prevede il futuro: 明天会下雨, 他不会忘记. Con 很 vuol dire «essere bravo a»: 他很会做饭." },
      { "ok": true, "t": "**能** guarda alle circostanze e alla capacità: 我今天能来 (ho tempo), 我感冒了，不能去 (qualcosa me lo impedisce), 他一天能走三十公里 (la sua capacità). Il negativo 不能 è il «non posso» più comune." },
      { "ok": true, "t": "**可以** è il permesso: 我可以坐这里吗？ Per rispondere «sì» si dice 可以. Per «no» si dice 不行 o 不能; 不可以 è un divieto più netto, come in un cartello: 这里不可以拍照. Nelle richieste 能 e 可以 si alternano: 我能/可以用一下吗？" },
      { "ok": true, "t": "**Il negativo e gli avverbi vanno prima del modale**: 我也不想去, 我还不会, 我不能来. Domande: 吗 in fondo (你会开车吗？) oppure modale + 不 + modale (你会不会开车？, 你想不想去？), mai tutti e due. Risposta breve: il modale solo (会。不会。可以。不能。)." },
      { "ok": false, "t": "**Il modale non segue il verbo e non regge un nome da solo**: non 我喝想茶, e 想 + nome non vuol dire «voglio»: 我想一杯茶 non si dice (si dice 我要一杯茶 oppure 我想喝茶). Inoltre 要 e 可以 non prendono 很." }
    ]
  },
  "logica": [
    "L'italiano ha tre verbi: «volere», «potere», «sapere». Il cinese distingue di più dove noi usiamo un solo verbo. «Potere» si spezza in tre: **会** (hai la chiave: sai come si fa), **能** (la porta è libera adesso: le circostanze lo permettono) e **可以** (qualcuno ti lascia entrare: permesso). La domanda da farsi è sempre: «sto parlando di una competenza, di una situazione o di un permesso?»",
    "Anche «volere» ha due gradi. **想** è il desiderio che affiora; **要** è la decisione già presa. Per questo al bar si dice 我要…, mentre 我想… suona più morbido e vuole un verbo (我想喝). La stessa idea spiega gli altri sensi di 要: ciò che decidi o ti serve diventa «devo», e ciò che sta per accadere diventa «sta per»: 要下雨了.",
    "Infine 会 prevede: chi sa come funzionano le cose sa anche che cosa succederà. Per questo 会 compare sia in 我会游泳 sia in 明天会下雨. Il contesto dice quale dei due sensi vale: con un soggetto che agisce c'è la competenza, con un fenomeno o con un avvenimento c'è la previsione."
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["Che cosa vuoi dire", "Dici", "Esempio"],
    "righe": [
      ["Ho voglia di, vorrei", "想 + verbo", "我想喝热茶。"],
      ["Prendo, voglio (deciso)", "要 + nome / verbo", "我要一杯茶。"],
      ["Devo, è deciso", "要 + verbo", "明天我要早起。"],
      ["So fare (imparato)", "会 + verbo", "我会做饭。"],
      ["Probabilmente accadrà", "会 + verbo", "晚上会冷。"],
      ["Posso adesso, nelle circostanze", "能 + verbo", "你明天能来吗？"],
      ["Mi è permesso", "可以 + verbo", "我可以用你的笔吗？"],
      ["Non voglio", "不想 + verbo", "我不想去。"],
      ["Non so fare", "不会 + verbo", "他不会骑自行车。"],
      ["Non posso", "不能 + verbo", "我今天不能去。"],
      ["Non è permesso", "不可以 / 不能", "这里不可以拍照。"],
      ["Non farlo! / Non serve", "不要 / 不用", "不要走！ 你不用来。"]
    ]
  },
  "esempi": [
    { "gruppo": "想 e 要: volere", "items": [
      { "t": "我想喝热茶。", "tr": "Vorrei bere un tè caldo." },
      { "t": "我很想去北京。", "tr": "Ho una gran voglia di andare a Pechino.", "nota": "想 accetta 很: il desiderio ha gradi." },
      { "t": "服务员，我要两个饺子。", "tr": "Cameriere, prendo due ravioli.", "nota": "Al ristorante 要 + nome è normale." },
      { "t": "我不想吃米饭，我想吃面条。", "tr": "Non ho voglia di riso, ho voglia di noodles." },
      { "t": "明天我要早起。", "tr": "Domani devo alzarmi presto.", "nota": "要 + verbo può dire «devo»." }
    ] },
    { "gruppo": "会: saper fare e prevedere", "items": [
      { "t": "我会做饭。", "tr": "So cucinare." },
      { "t": "你会说英语吗？", "tr": "Parli inglese?" },
      { "t": "他不会骑自行车。", "tr": "Non sa andare in bicicletta." },
      { "t": "晚上会冷，你多穿一点。", "tr": "Stasera farà freddo, mettiti qualcosa in più.", "nota": "会 prevede: il freddo non «sa» nulla, accade." }
    ] },
    { "gruppo": "能: circostanze e capacità", "items": [
      { "t": "我感冒了，今天不能去上班。", "tr": "Ho il raffreddore, oggi non posso andare al lavoro." },
      { "t": "你明天能来吗？", "tr": "Domani puoi venire?" },
      { "t": "他一天能走三十公里。", "tr": "Può camminare trenta chilometri al giorno.", "nota": "Una capacità fisica: 能 e non 会." }
    ] },
    { "gruppo": "可以: permesso", "items": [
      { "t": "我可以用一下你的笔吗？", "tr": "Posso usare un attimo la tua penna?" },
      { "t": "这里不可以拍照。", "tr": "Qui non è permesso fotografare." },
      { "t": "你可以先走，我再等一会儿。", "tr": "Puoi pure andare, io aspetto ancora un po'." }
    ] },
    { "gruppo": "Le domande con modale + 不 + modale", "items": [
      { "t": "你想不想去？", "tr": "Ti va di andare?" },
      { "t": "你会不会游泳？", "tr": "Sai nuotare?" }
    ] }
  ],
  "contrasti": [
    { "q": "Non hai mai imparato a guidare e un amico ti chiede di portare la macchina. Che cosa rispondi?", "opzioni": [
      { "t": "我不会开车。", "ok": true, "perche": "Parli di una competenza che non hai: 不会 + verbo." },
      { "t": "我不想开车。", "ok": false, "perche": "不想 dice «non ne ho voglia»; ma il problema è che non sai farlo." }
    ] },
    { "q": "Sai guidare benissimo, ma hai bevuto due bicchieri di vino. Che cosa dici?", "opzioni": [
      { "t": "我喝了酒，不能开车。", "ok": true, "perche": "La competenza c'è; è la situazione che oggi ti blocca: 能 guarda alle circostanze." },
      { "t": "我喝了酒，不会开车。", "ok": false, "perche": "不会 direbbe che non sai guidare, mentre tu sai." }
    ] },
    { "q": "Sei in un caffè e vuoi chiedere se il posto accanto è libero: «Posso sedermi qui?»", "opzioni": [
      { "t": "我可以坐这里吗？", "ok": true, "perche": "Chiedi un permesso: 可以." },
      { "t": "我想坐这里吗？", "ok": false, "perche": "想 chiede se tu hai voglia, non se ti è concesso." },
      { "t": "我会坐这里吗？", "ok": false, "perche": "会 è competenza o previsione: qui non c'entra." }
    ] },
    { "q": "Al bar ordini deciso: «Prendo un caffè». Quale frase è giusta?", "opzioni": [
      { "t": "我要一杯咖啡。", "ok": true, "perche": "要 regge un nome: «voglio, prendo»." },
      { "t": "我想一杯咖啡。", "ok": false, "perche": "想 davanti a un nome vuol dire «penso a», «sento la mancanza di»; per ordinare serve 想喝 o 要." }
    ] },
    { "q": "Domani hai un esame e devi alzarti presto. Come lo dici?", "opzioni": [
      { "t": "明天我要早起。", "ok": true, "perche": "要 + verbo dice «devo»: la sveglia presto è dovuta." },
      { "t": "明天我可以早起。", "ok": false, "perche": "可以 direbbe «ho il permesso di alzarmi presto», e non c'è nessun permesso di mezzo." }
    ] },
    { "q": "Ti chiedono 你会不会开车？ e sai guidare. Come rispondi, in breve?", "opzioni": [
      { "t": "会。", "ok": true, "perche": "Si ripete il modale della domanda: 会. Il negativo è 不会." },
      { "t": "是。", "ok": false, "perche": "是 risponde a una domanda con 是: qui il verbo della domanda è 会." },
      { "t": "有。", "ok": false, "perche": "有 risponde a 有没有; con un modale si ripete il modale." }
    ] },
    { "q": "Il meteo annuncia pioggia: «Domani pioverà».", "opzioni": [
      { "t": "明天会下雨。", "ok": true, "perche": "会 prevede ciò che probabilmente accadrà." },
      { "t": "明天想下雨。", "ok": false, "perche": "想 è la voglia di un soggetto: la pioggia non desidera nulla." }
    ] },
    { "q": "Dici che Marco cucina molto bene, è bravo.", "opzioni": [
      { "t": "他很会做饭。", "ok": true, "perche": "很会 + verbo = «essere bravo a»." },
      { "t": "他很可以做饭。", "ok": false, "perche": "可以 non prende 很: non esiste come «bravo a»." },
      { "t": "他会很做饭。", "ok": false, "perche": "L'avverbio 很 sta davanti al modale, non dopo." }
    ] },
    { "q": "Un cartello in ospedale: «Qui non è permesso fotografare».", "opzioni": [
      { "t": "这里不可以拍照。", "ok": true, "perche": "Divieto: 不可以 nega il permesso." },
      { "t": "这里不想拍照。", "ok": false, "perche": "不想 è una voglia personale, non un regolamento." }
    ] }
  ],
  "dialogo": {
    "titolo": "Andiamo a nuotare?",
    "righe": [
      { "chi": "A", "t": "你想不想去游泳？", "tr": "Ti va di andare a nuotare?" },
      { "chi": "B", "t": "我很想去，可是今天不能去。", "tr": "Ne ho molta voglia, ma oggi non posso." },
      { "chi": "A", "t": "为什么？", "tr": "Perché?" },
      { "chi": "B", "t": "我明天要考试，今天要看书。", "tr": "Domani ho un esame e oggi devo studiare." },
      { "chi": "A", "t": "那星期六去吧。你会游泳吗？", "tr": "Allora andiamo sabato. Sai nuotare?" },
      { "chi": "B", "t": "我不太会，只会一点。", "tr": "Non tanto, so soltanto un po'." },
      { "chi": "A", "t": "没关系，我可以教你。", "tr": "Non importa, posso insegnarti io." }
    ],
    "esercizi": [
      { "q": "Perché B dice 今天不能去?", "opzioni": [
        { "t": "Perché oggi ha un impegno: deve studiare.", "ok": true, "perche": "不能 guarda alle circostanze: il motivo viene subito dopo (要看书)." },
        { "t": "Perché non sa nuotare.", "ok": false, "perche": "Per questo si direbbe 不会; qui B ha un ostacolo di tempo." },
        { "t": "Perché non gli va.", "ok": false, "perche": "B dice 我很想去: la voglia c'è." }
      ] },
      { "q": "Che cosa dice B con 今天要看书?", "opzioni": [
        { "t": "Oggi devo studiare.", "ok": true, "perche": "要 + verbo = dovere deciso (l'esame è domani)." },
        { "t": "Oggi so leggere.", "ok": false, "perche": "Sarebbe 会, e non c'è nessuna competenza in gioco." },
        { "t": "Oggi posso studiare, mi è permesso.", "ok": false, "perche": "Il permesso sarebbe 可以, ma nessuno concede niente." }
      ] },
      { "q": "Che cosa offre A con 我可以教你?", "opzioni": [
        { "t": "Si offre di insegnargli: ha la possibilità e la voglia.", "ok": true, "perche": "可以 qui dice «posso farlo e mi offro»." },
        { "t": "Dice che ha avuto il permesso di insegnare.", "ok": false, "perche": "Nel dialogo nessuno concede permessi." },
        { "t": "Chiede a B di insegnargli.", "ok": false, "perche": "Il soggetto è 我, e il complemento è 你: insegna A a B." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano usa un solo verbo per ogni «posso» (di solito 能) e un solo verbo per ogni «voglio». Dice allora 我能说中文 per «so parlare cinese» (sarebbe 会), oppure 我想一杯茶 per «prendo un tè», e talvolta mette il modale dopo il verbo (我喝想茶).",
    "perche": "In italiano «posso» copre la competenza, la situazione e il permesso; e «voglio» copre il desiderio e l'ordine al bar. In cinese ognuno ha il suo verbo, e il modale sta sempre prima del verbo vero, come «vorrei bere», mai dopo.",
    "esci": "Prima di scrivere, fai tre domande. Ho imparato a farlo? Allora 会. Le circostanze me lo permettono adesso? Allora 能. Qualcuno me lo permette? Allora 可以. Per «voglio»: se c'è un verbo, 想 + verbo; se ordini una cosa, 要 + nome. E il modale va sempre prima del verbo.",
    "esempi": [
      { "sbagliata": "我想一杯茶。", "giusta": "我要一杯茶。" },
      { "sbagliata": "我喝想茶。", "giusta": "我想喝茶。" },
      { "sbagliata": "他很可以做饭。", "giusta": "他很会做饭。" },
      { "sbagliata": "你可不可以来吗？", "giusta": "你可不可以来？" }
    ]
  },
  "curiosi": [
    { "titolo": "想 non vuol dire solo «volere»", "t": "Davanti a un nome o da solo, 想 vuol dire «pensare» e «sentire la mancanza»: 我想你 («mi manchi»), 我想家 («ho nostalgia di casa»), 想一想 («pensaci un po'»). Per ordinare con 想 si può usare 想要: 我想要一杯茶, un po' più morbido di 我要." },
    { "titolo": "«Sapere» ha due verbi", "t": "L'italiano usa «sapere» per due cose. 会 è il «sapere come fare» (我会开车), 知道 è il «sapere che» (我知道他的名字). Chi dice 我知道游泳 non si fa capire. Per le persone conosciute c'è un terzo verbo, 认识." },
    { "titolo": "会…的 e le previsioni", "t": "Quando 会 prevede, in fondo alla frase si aggiunge spesso 的 per dare sicurezza: 他会来的 («verrà, vedrai»). Il negativo 不会 dice «non succederà»: 他不会忘记的 («non se ne dimenticherà»)." },
    { "titolo": "能, 可以 e il «no» gentile", "t": "Alla domanda 我可以坐这里吗？ si risponde 可以 per dire sì. Per dire no si preferisce 不行 o 不好意思，有人 («mi dispiace, è occupato»), perché 不可以 è netto come un cartello. 能 è più neutro: chiede se le condizioni lo permettono." }
  ],
  "pragmatica": "Con gli amici, 我想… e 我要… si alternano senza difficoltà; con un ospite o con una persona più anziana 想 è più morbido, e una richiesta diventa gentile con 可以…吗 o con 能不能…？ Al ristorante 我要… è normale, e con 请给我… si aggiunge cortesia. Per rifiutare, 不行 è diretto; tra amici si attenua con 不好意思 o con la ragione: 今天不能去，我要工作.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "我今天不能去。", "opzioni": [
      { "t": "Oggi non posso andare (qualcosa me lo impedisce).", "ok": true, "perche": "不能 dice che le circostanze lo impediscono." },
      { "t": "Non so andarci.", "ok": false, "perche": "La competenza sarebbe 不会." },
      { "t": "Oggi non ho voglia di andare.", "ok": false, "perche": "Per dire che non ne hai voglia si direbbe 不想, non 不能." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "他很会做饭。", "opzioni": [
      { "t": "Cucina molto bene.", "ok": true, "perche": "很会 + verbo = «essere bravo a»." },
      { "t": "Ha una gran voglia di cucinare.", "ok": false, "perche": "Per la voglia si direbbe 很想." },
      { "t": "Gli è permesso cucinare.", "ok": false, "perche": "Il permesso è 可以, che non prende 很." }
    ] },
    { "k": "buco", "zh": "明天＿下雨，你带伞吧。", "tr": "Domani pioverà, porta l'ombrello.", "opzioni": [
      { "t": "会", "ok": true, "perche": "会 prevede ciò che accadrà." },
      { "t": "想", "ok": false, "perche": "想 è la voglia di una persona, non di un fenomeno." },
      { "t": "可以", "ok": false, "perche": "可以 è il permesso: la pioggia non lo chiede." }
    ] },
    { "k": "buco", "zh": "这里＿拍照吗？", "tr": "Qui si può fotografare?", "opzioni": [
      { "t": "可以", "ok": true, "perche": "Chiedi se è permesso: 可以." },
      { "t": "会", "ok": false, "perche": "会 è saper fare o prevedere, non il permesso." },
      { "t": "在", "ok": false, "perche": "在 non è un modale e non regge un verbo in questo modo." }
    ] },
    { "k": "ordine", "t": "我明天不能去上班", "tr": "Domani non posso andare al lavoro.", "alt": ["明天我不能去上班"] },
    { "k": "ordine", "t": "你会不会说中文", "tr": "Sai parlare cinese?" },
    { "k": "trasforma", "base": "我会开车。", "consegna": "Trasformala in una domanda «tu» con la forma affermativo-negativa (会不会).", "accetta": ["你会不会开车？", "你会不会开车"], "rifiutate": [
      { "t": "你会不会开车吗？", "perche": "Con la forma 会不会 non si aggiunge 吗: la domanda c'è già." }
    ], "perche": "Modale + 不 + modale forma da sola la domanda: niente 吗." },
    { "k": "trasforma", "base": "我要一杯茶。", "consegna": "Dillo in modo più morbido, con «ho voglia di bere un tè» (usa 想 e un verbo).", "accetta": ["我想喝茶。", "我想喝一杯茶。", "我想要一杯茶。"], "rifiutate": [
      { "t": "我想一杯茶。", "perche": "想 davanti a un nome non vuol dire «voglio»: serve un verbo (想喝) oppure 想要." }
    ], "perche": "想 + verbo è il «volere» morbido; 想要 + nome è l'alternativa." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Sai nuotare?»", "a": "你会游泳吗？", "accetta": ["你会不会游泳？", "你会游泳吗", "你会不会游泳"], "perche": "Una competenza imparata: 会. La domanda si fa con 吗 oppure con 会不会." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Domani devo alzarmi presto.»", "a": "明天我要早起。", "accetta": ["我明天要早起。", "明天我得早起。", "我明天得早起。", "明天我要早点起床。"], "perche": "要 + verbo dice «devo» in forma neutra; anche 得 è possibile." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你晚上能来吗？" },
      { "chi": "B", "t": "对不起，我＿来，我晚上要工作。", "buco": true }
    ], "opzioni": [
      { "t": "不能", "ok": true, "perche": "Un impegno impedisce a B di venire: 不能 e il motivo." },
      { "t": "不要", "ok": false, "perche": "不要 è un divieto rivolto agli altri («non venire!»), non una risposta in prima persona." },
      { "t": "不用", "ok": false, "perche": "不用 dice «non serve» e non spiega perché B non venga." }
    ] },
    { "k": "scegli", "q": "In quale frase 会 prevede e non indica una competenza?", "opzioni": [
      { "t": "晚上会冷。", "ok": true, "perche": "Il freddo non «sa» fare nulla: 会 annuncia ciò che accadrà." },
      { "t": "我会做饭。", "ok": false, "perche": "Qui 会 è una competenza imparata." },
      { "t": "他会说三种语言。", "ok": false, "perche": "Anche qui è una competenza: lui sa parlare tre lingue." }
    ] }
  ],
  "capaci": [
    "Sai scegliere tra 会 (competenza), 能 (circostanze) e 可以 (permesso) per dire «posso».",
    "Sai distinguere 想 (voglia) da 要 (decisione, ordine al bar, «devo») e dire «non voglio» con 不想.",
    "Sai negare e fare domande con i modali, anche nella forma 会不会, senza aggiungere 吗.",
    "Sai usare 会 per prevedere (明天会下雨) e per dire che qualcuno è bravo (很会做饭)."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Comparing hui, keyi and neng»: zone di uso, 不可以 contro 不能, 会 per le previsioni",
    "Chinese Grammar Wiki (AllSet Learning), «Comparing yao and xiang» ed «Expressing desires»: 想 e 要 con verbo e con nome (consultati nei risultati di ricerca)",
    "CC-CEDICT, voci 会, 能, 可以, 想, 要; Tatoeba cinese-italiano (es. 汤姆还不会游泳, 明天可能会下雨), consultati nei corpora locali"
  ]
};
