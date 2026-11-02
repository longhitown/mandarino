/* Lezione 17 · I possessivi (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["possessivi"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Questo è il mio libro.", "tr": "这是我的书。" },
      { "t": "Mia madre abita a Torino.", "tr": "我妈妈住在都灵。" },
      { "t": "I miei amici arrivano domani.", "tr": "我的朋友们明天到。" },
      { "t": "Questa è la loro casa.", "tr": "这是他们的家。" }
    ],
    "domanda": "汉语说“我的书、我的朋友们”，“我的”永远是同一个词。观察这四句：mio 变成了哪些形式？是什么决定了它的形式？哪一句的 mia 前面没有冠词？",
    "risposta": "物主词有不同的形式：**mio、mia、miei**。决定形式的不是“我”，而是**被拥有的东西**：libro 是阳性单数，所以是 il mio；amici 是阳性复数，所以是 i miei。大多数情况下，物主词**前面有定冠词**（il mio libro、la loro casa）。第二句的 **mia madre** 是例外：单数的亲属名词前面通常**不加冠词**。注意 loro 不变形，不过前面仍然有冠词（la loro casa）。"
  },
  "regola": {
    "enunciato": "意大利语的物主形容词（mio、tuo、suo、nostro、vostro、loro）要和**被拥有的东西**在性和数上一致，而不是和主人一致；它的前面通常有**定冠词**：il mio libro、la mia casa、i miei amici、le mie chiavi。单数的亲属名词是例外，不加冠词：mia madre、tuo fratello。",
    "schema": ["冠词", "物主词", "（形容词）", "名词"],
    "punti": [
      { "ok": true, "t": "**形式**：mio / mia / miei / mie；tuo / tua / tuoi / tue；suo / sua / suoi / sue；nostro / nostra / nostri / nostre；vostro / vostra / vostri / vostre。**loro 永远不变**：il loro, la loro, i loro, le loro。" },
      { "ok": true, "t": "**和东西一致，不和主人一致**：Marco 和 Anna 都说 la mia casa；说“他的家”和“她的家”都是 la sua casa，因为 casa 是阴性单数。" },
      { "ok": true, "t": "**一般要加定冠词**：il mio libro、la tua borsa、i nostri amici。汉语的“我的书”没有冠词，所以最容易漏掉。" },
      { "ok": true, "t": "**单数亲属不加冠词**：mio padre、mia madre、tuo fratello、nostra zia。复数、加了修饰成分或指小词（-ino、-etto）时要加冠词：i miei fratelli、la mia sorellina、il mio fratello maggiore。**loro** 前面总有冠词：la loro madre。mamma 和 papà 也带冠词：la mia mamma、il mio papà。" },
      { "ok": true, "t": "**suo 和 Suo**：suo / sua 是“他的、她的”，看东西的性别。对用 Lei 称呼的人，说“您的”要用 **Suo / Sua**，书面上常写大写：la Sua borsa（您的包）。" },
      { "ok": true, "t": "**我的一个朋友**：物主词前面可以放不定冠词、数词和 alcuni：**un mio amico**、due miei colleghi、alcuni miei amici。这时物主词前面没有定冠词。" },
      { "ok": true, "t": "**作表语，或者名词不出现**：Questo libro è mio.（这本书是我的。）作表语时通常不加冠词；如果前面有对比，要加冠词：Il mio è qui, il tuo è là.（我的在这儿，你的在那儿。）" },
      { "ok": false, "t": "**不要**用物主词说自己的身体部位：我洗手是 Mi lavo le mani，我头疼是 Mi fa male la testa。反身代词 mi 已经说明了是谁的手、谁的头，所以不再说 le mie mani。" }
    ]
  },
  "logica": [
    "汉语里“我的”加在名词前面，不管名词是什么，“我的”都不变；意大利语的物主词却是一个**形容词**，它必须和名词一致，所以要有 mio / mia / miei / mie 这么多形式，而且它前面通常还要有冠词，就像 il libro 那样。可以这样记：物主词是“穿着冠词出门”的，所以先放冠词，再放 mio、tuo、suo，最后是名词。",
    "亲属名词是例外，这一点汉语学习者其实并不陌生：汉语说“我妈妈、我哥哥”，不说“我的妈妈”。意大利语的 mia madre、mio fratello 也是这样，单数的亲属名词指一个特定的人，所以不再需要冠词。可是一旦变成复数（i miei fratelli）、加了修饰语（la mia cara zia）或者变成指小词（la mia sorellina），指的就不再是“唯一的那一个”，冠词又回来了。loro 总是带冠词，所以说 la loro madre。",
    "suo 的难点在于只看东西，不看主人：Anna ama la sua città 和 Marco ama la sua città 用的是完全一样的形式。汉语靠“他的”和“她的”区分，意大利语在需要区分的时候改用 di lui / di lei：la casa di lui（他的家）、la casa di lei（她的家）。对一个用 Lei 称呼的人，说“您的”要用大写的 Suo，这样就不会和“他的、她的”混在一起。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["主人", "阳单", "阴单", "阳复", "阴复"],
    "righe": [
      ["io（我）", "il mio", "la mia", "i miei", "le mie"],
      ["tu（你）", "il tuo", "la tua", "i tuoi", "le tue"],
      ["lui / lei / Lei", "il suo", "la sua", "i suoi", "le sue"],
      ["noi（我们）", "il nostro", "la nostra", "i nostri", "le nostre"],
      ["voi（你们）", "il vostro", "la vostra", "i vostri", "le vostre"],
      ["loro（他们）", "il loro", "la loro", "i loro", "le loro"]
    ]
  },
  "esempi": [
    { "gruppo": "冠词 + 物主词 + 名词", "items": [
      { "t": "Dove sono le mie chiavi?", "tr": "我的钥匙在哪儿？" },
      { "t": "Il tuo telefono è nuovo?", "tr": "你的手机是新的吗？" },
      { "t": "Ho dimenticato il mio ombrello al bar.", "tr": "我把我的伞忘在咖啡馆了。" },
      { "t": "I nostri vicini hanno un cane simpatico.", "tr": "我们的邻居有一只很可爱的狗。" }
    ] },
    { "gruppo": "亲属：单数不加冠词，复数和指小词要加", "items": [
      { "t": "Mia madre lavora in ospedale.", "tr": "我妈妈在医院工作。" },
      { "t": "Tuo fratello è molto simpatico.", "tr": "你哥哥人很好。", "nota": "fratello 可以是哥哥，也可以是弟弟，意大利语不区分。" },
      { "t": "I miei genitori abitano a Bologna.", "tr": "我的父母住在博洛尼亚。", "nota": "复数，所以加冠词 i。" },
      { "t": "La mia sorellina ha sei anni.", "tr": "我的小妹妹六岁。", "nota": "sorellina 是指小词，所以加冠词 la。" }
    ] },
    { "gruppo": "suo、loro 和敬称 Suo", "items": [
      { "t": "Anna ama la sua città.", "tr": "安娜爱她的城市。", "nota": "sua 和 città 一致，不和 Anna 一致。" },
      { "t": "Marco ama la sua città.", "tr": "马可爱他的城市。", "nota": "主人换成男人，形式还是 la sua。" },
      { "t": "Questa è la loro casa.", "tr": "这是他们的家。" },
      { "t": "Signora, ecco la Sua borsa.", "tr": "女士，这是您的包。", "nota": "对用 Lei 称呼的人，用大写的 Suo / Sua。" }
    ] },
    { "gruppo": "特别的用法", "items": [
      { "t": "Un mio amico lavora a Londra.", "tr": "我的一个朋友在伦敦工作。", "nota": "un mio amico：不定冠词放在物主词前面。" },
      { "t": "Questo libro è mio, non è tuo.", "tr": "这本书是我的，不是你的。" },
      { "t": "Mi lavo le mani prima di cena.", "tr": "晚饭前我洗手。", "nota": "身体部位用定冠词，不用物主词。" },
      { "t": "Casa mia è proprio qui dietro.", "tr": "我家就在这后面。", "nota": "casa mia：口语里物主词放在 casa 的后面。" }
    ] }
  ],
  "contrasti": [
    { "q": "“我的车是红色的。”（macchina 是阴性）哪一句对？", "opzioni": [
      { "t": "La mia macchina è rossa.", "ok": true, "perche": "物主词前面要有定冠词，并和 macchina 一致：阴性单数 la mia。" },
      { "t": "Mia macchina è rossa.", "ok": false, "perche": "macchina 不是单数亲属名词，前面不能省冠词。" },
      { "t": "Il mia macchina è rossa.", "ok": false, "perche": "冠词和物主词都要和 macchina 一致，阴性要用 la，不能用 il。" }
    ] },
    { "q": "“我妈妈是老师。”哪一句对？", "opzioni": [
      { "t": "Mia madre è insegnante.", "ok": true, "perche": "madre 是单数亲属名词，前面不加冠词；mia 和阴性的 madre 一致。" },
      { "t": "La mia madre è insegnante.", "ok": false, "perche": "标准意大利语里，单数亲属名词前面通常不加冠词，汉语的“我妈妈”也不说“我的妈妈”。" },
      { "t": "Mio madre è insegnante.", "ok": false, "perche": "madre 是阴性，物主词要用 mia，不用 mio。" }
    ] },
    { "q": "“我的哥哥们住在罗马。”（fratelli 是复数）哪一句对？", "opzioni": [
      { "t": "I miei fratelli abitano a Roma.", "ok": true, "perche": "亲属名词变成复数就要加冠词，物主词也用阳性复数 miei。" },
      { "t": "Miei fratelli abitano a Roma.", "ok": false, "perche": "复数的亲属名词前面要有冠词。" },
      { "t": "I mio fratelli abitano a Roma.", "ok": false, "perche": "mio 的阳性复数是 miei，冠词是 i。" }
    ] },
    { "q": "“我的朋友们都来了。”（朋友们是男女混合，amici）哪一句对？", "opzioni": [
      { "t": "I miei amici sono venuti tutti.", "ok": true, "perche": "amici 是阳性复数，冠词用 i，物主词用 miei。" },
      { "t": "I mii amici sono venuti tutti.", "ok": false, "perche": "mio 的阳性复数是不规则的 miei，没有 mii。" },
      { "t": "Le mie amici sono venuti tutti.", "ok": false, "perche": "amici 是阳性复数，不用阴性的 le mie。" }
    ] },
    { "q": "马可喜欢他的房子（casa）。哪一句对？", "opzioni": [
      { "t": "Marco ama la sua casa.", "ok": true, "perche": "物主词和 casa 一致：阴性单数 la sua，不管主人 Marco 是男的。" },
      { "t": "Marco ama il suo casa.", "ok": false, "perche": "不能因为 Marco 是男人就用 il suo；要看 casa，它是阴性。" },
      { "t": "Marco ama la suo casa.", "ok": false, "perche": "物主词要和 casa 一致，阴性是 sua，不是 suo。" }
    ] },
    { "q": "“他们的妈妈来了。”（说的是他们两个人的妈妈）哪一句对？", "opzioni": [
      { "t": "La loro madre è arrivata.", "ok": true, "perche": "loro 前面总有冠词，即使后面是单数的亲属名词。" },
      { "t": "Loro madre è arrivata.", "ok": false, "perche": "loro 和其他物主词不同，前面必须有冠词。" }
    ] },
    { "q": "“我的一个朋友住在米兰。”哪一句对？", "opzioni": [
      { "t": "Un mio amico abita a Milano.", "ok": true, "perche": "不定冠词放在物主词前面：un mio amico。" },
      { "t": "Un il mio amico abita a Milano.", "ok": false, "perche": "不能把不定冠词和定冠词连在一起用。" },
      { "t": "Mio un amico abita a Milano.", "ok": false, "perche": "不定冠词要放在物主词前面，不是后面。" }
    ] },
    { "q": "“我洗手。”（日常的说法）哪一句对？", "opzioni": [
      { "t": "Mi lavo le mani.", "ok": true, "perche": "反身代词 mi 已经说明是谁的手，所以身体部位只用定冠词 le。" },
      { "t": "Mi lavo le mie mani.", "ok": false, "perche": "mi 已经表示“我的”，再加 mie 是多余的，听起来不自然。" },
      { "t": "Mi lavo mani.", "ok": false, "perche": "名词前面需要冠词：le mani。" }
    ] },
    { "q": "你对一位不认识的女士（用 Lei 称呼）说：“女士，这是您的包。”哪一句对？", "opzioni": [
      { "t": "Signora, ecco la Sua borsa.", "ok": true, "perche": "对用 Lei 称呼的人，“您的”是 Suo / Sua，borsa 是阴性，所以 la Sua。" },
      { "t": "Signora, ecco la tua borsa.", "ok": false, "perche": "tuo 是对用 tu 称呼的人说的，对陌生的女士不礼貌。" },
      { "t": "Signora, ecco la vostra borsa.", "ok": false, "perche": "vostro 是对几个人说“你们的”，这里只有一位女士。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Dove sono le mie chiavi?",
    "righe": [
      { "chi": "A", "t": "Hai visto le mie chiavi? Non le trovo da nessuna parte.", "tr": "你看到我的钥匙了吗？我哪儿都找不到。" },
      { "chi": "B", "t": "Prova nella tua borsa.", "tr": "找找你的包里。" },
      { "chi": "A", "t": "Ho già guardato. C'è solo il mio telefono.", "tr": "我已经看过了，里面只有我的手机。" },
      { "chi": "B", "t": "Forse le ha prese tuo fratello.", "tr": "也许是你哥哥拿走了。" },
      { "chi": "A", "t": "Mio fratello? Ma lui ha le sue chiavi!", "tr": "我哥哥？他有他自己的钥匙啊！" },
      { "chi": "B", "t": "Allora guarda nella giacca di tua madre.", "tr": "那就看看你妈妈的外套里。" }
    ],
    "esercizi": [
      { "q": "B 说 “tuo fratello”，为什么 tuo 前面没有冠词？", "opzioni": [
        { "t": "因为 fratello 是单数的亲属名词", "ok": true, "perche": "单数的亲属名词前面通常不加冠词：tuo fratello、mia madre。" },
        { "t": "因为 tuo 前面从来不用冠词", "ok": false, "perche": "tuo 一般要加冠词，如 il tuo telefono。" },
        { "t": "因为 fratello 是复数", "ok": false, "perche": "fratello 是单数；复数是 fratelli。" }
      ] },
      { "q": "A 说 “le sue chiavi”，为什么 sue 是阴性复数？", "opzioni": [
        { "t": "因为 chiavi 是阴性复数", "ok": true, "perche": "物主词和被拥有的东西一致，不和主人 lui 一致。" },
        { "t": "因为 lui 是女性", "ok": false, "perche": "lui 是男性；而且物主词本来就不看主人的性别。" },
        { "t": "因为 A 是女性", "ok": false, "perche": "说话人的性别不影响物主词的形式。" }
      ] },
      { "q": "“le mie chiavi”里的 mie 和什么一致？", "opzioni": [
        { "t": "chiavi", "ok": true, "perche": "chiavi 是阴性复数，所以用 le mie。" },
        { "t": "io（说话的人）", "ok": false, "perche": "io 只决定用哪一个物主词（mio），形式由东西决定。" },
        { "t": "fratello", "ok": false, "perche": "fratello 是别的名词，和这里的 chiavi 无关。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "汉语的“我的书”没有冠词，所以很多学习者说出 *Mio libro è qui*；又因为汉语说“我妈妈”，他们有时反过来对所有名词都省冠词，或者对亲属也加冠词，说出 *La mia madre*。第三种常见的错误是让 suo 和主人一致，说出 *Marco ama il suo casa*；还有人对 loro 省略冠词，说出 *Loro madre*。",
    "perche": "汉语的“的”不带性和数，也没有冠词，所以不会想到物主词要和东西一致，也不会想到要补冠词。意大利语的物主词前面通常有冠词，但亲属名词（单数）是例外，这条规则和汉语的“我妈妈”有些相似，却又不完全一样，容易混。汉语的“他的、她的”按主人区分，也让人以为 suo 要看主人。",
    "esci": "说物主词时按三步走：①先找到名词，看它是阳性还是阴性、单数还是复数；②除了单数亲属名词，先放定冠词，再放和名词一致的物主词（il mio libro、la mia casa）；③遇到 suo，想“看东西，不看主人”，遇到 loro，想“不变形，但是有冠词”。",
    "esempi": [
      { "sbagliata": "Mio libro è sul tavolo.", "giusta": "Il mio libro è sul tavolo." },
      { "sbagliata": "La mia madre è insegnante.", "giusta": "Mia madre è insegnante." },
      { "sbagliata": "Marco ama il suo casa.", "giusta": "Marco ama la sua casa." },
      { "sbagliata": "Loro madre è qui.", "giusta": "La loro madre è qui." }
    ]
  },
  "curiosi": [
    { "titolo": "物主词放在名词后面：casa mia, amico mio", "t": "物主词也可以放在名词后面，表示强调或亲近。最常见的是 casa mia（我家）、colpa mia（我的错）以及称呼和感叹：Amico mio!（我的朋友！）、Mamma mia!、Dio mio!。这时物主词前面没有冠词。日常说“去我家”，意大利人常说 vieni a casa mia。" },
    { "titolo": "i miei、i tuoi：指家人", "t": "在口语里，i miei 和 i tuoi 常常指“我的父母、我的家人”：Stasera cena dai miei.（今晚在我爸妈家吃饭。）这是一个固定的用法，形式总是阳性复数。" },
    { "titolo": "suo 说不清楚的时候：proprio", "t": "当第三人称的物主词指的就是句子的主语时，可以用 proprio 代替 suo，避免弄混：Marco ha chiamato il proprio avvocato（马可叫了他自己的律师），而 Marco ha chiamato il suo avvocato 也可能指别人的律师。proprio 多见于书面语；口语里更常见的是用 suo，或者说 di lui / di lei。" },
    { "titolo": "mamma、papà 和 babbo", "t": "mamma 和 papà 比 madre、padre 更亲切，它们前面通常加冠词：la mia mamma、il mio papà。在意大利中部（特别是托斯卡纳），人们常说 babbo 代替 papà：il mio babbo。写作文或写正式的东西时，更多用 mia madre、mio padre。" }
  ],
  "pragmatica": "介绍家人时，直接说 Mia sorella si chiama Giulia.，不加冠词。对不熟的人或长辈，把 tuo 换成 Suo：Come sta Sua madre?（您的母亲好吗？）。意大利语很多时候在主人很明显的时候不说物主词：Ho perso il portafoglio.（我把钱包丢了。）、Metto le chiavi in tasca.（我把钥匙放进口袋里。）比 Ho perso il mio portafoglio 更自然；说 il mio 通常是为了和别人的东西对比。",
  "esercizi": [
    { "k": "scegli", "q": "哪一个短语的冠词和物主词是对的？", "opzioni": [
      { "t": "le mie amiche", "ok": true, "perche": "amiche 是阴性复数，所以冠词是 le，物主词是 mie。" },
      { "t": "i mie amiche", "ok": false, "perche": "阴性复数要用 le，不是 i。" },
      { "t": "la mie amiche", "ok": false, "perche": "复数名词的冠词也要用复数：le。" }
    ] },
    { "k": "scegli", "q": "哪一句的冠词用法是对的？", "opzioni": [
      { "t": "Le mie sorelle studiano medicina.", "ok": true, "perche": "亲属名词是复数，所以要加冠词 le，物主词用 mie。" },
      { "t": "Mie sorelle studiano medicina.", "ok": false, "perche": "复数的亲属名词前面要有冠词。" },
      { "t": "La mie sorelle studiano medicina.", "ok": false, "perche": "冠词和名词都是复数，冠词要用 le，不能用 la。" }
    ] },
    { "k": "scegli", "q": "“la sua macchina”可能是谁的车？", "opzioni": [
      { "t": "他的车，也可能是她的车", "ok": true, "perche": "sua 和 macchina 一致，不和主人一致，所以男女主人都用 la sua macchina。" },
      { "t": "只可能是她的车", "ok": false, "perche": "sua 的阴性来自 macchina，不来自主人。" },
      { "t": "只可能是我的车", "ok": false, "perche": "“我的车”要说 la mia macchina。" }
    ] },
    { "k": "buco", "zh": "＿ nonni abitano in campagna.", "tr": "我的祖父母住在乡下。", "opzioni": [
      { "t": "I miei", "ok": true, "perche": "nonni 是阳性复数，加冠词 i，物主词用 miei。" },
      { "t": "Miei", "ok": false, "perche": "复数的亲属名词前面要有冠词。" },
      { "t": "Le mie", "ok": false, "perche": "nonni 是阳性复数，不用阴性的 le mie。" }
    ] },
    { "k": "buco", "zh": "Dove hai messo ＿ occhiali?", "tr": "你把你的眼镜放哪儿了？", "opzioni": [
      { "t": "i tuoi", "ok": true, "perche": "occhiali 是阳性复数，所以用 i tuoi。" },
      { "t": "le tue", "ok": false, "perche": "occhiali 是阳性复数，不是阴性。" },
      { "t": "tuoi", "ok": false, "perche": "物主词前面一般要有定冠词：i tuoi。" }
    ] },
    { "k": "buco", "zh": "Marco e Anna amano ＿ città.", "tr": "马可和安娜爱他们的城市。", "opzioni": [
      { "t": "la loro", "ok": true, "perche": "主人是两个人，用 loro；loro 不变形，前面有冠词，città 是阴性，所以 la。" },
      { "t": "loro", "ok": false, "perche": "loro 前面必须有冠词。" },
      { "t": "la sua", "ok": false, "perche": "sua 是一个人的“他的、她的”，这里主人是两个人。" }
    ] },
    { "k": "ordine", "t": "dove sono le mie chiavi", "tr": "我的钥匙在哪儿？" },
    { "k": "ordine", "t": "mia madre lavora in ospedale", "tr": "我妈妈在医院工作。" },
    { "k": "scrivi", "q": "用意大利语写：“我妈妈是老师。”", "a": "Mia madre è insegnante.", "accetta": ["Mia madre è un'insegnante.", "Mia madre fa l'insegnante.", "Mia madre è maestra.", "Mia madre è professoressa.", "Mia madre è una insegnante."], "perche": "madre 是单数亲属名词，不加冠词；mia 和阴性一致。" },
    { "k": "scrivi", "q": "用意大利语写：“这是你的书吗？”（对朋友说）", "a": "Questo è il tuo libro?", "accetta": ["È questo il tuo libro?", "Questo libro è tuo?", "È tuo questo libro?", "Questo libro è il tuo?"], "perche": "libro 是阳性单数，物主词前面加冠词：il tuo libro。" },
    { "k": "trasforma", "consegna": "把“我的”改成“我们的”，其他地方跟着改。", "base": "I miei amici abitano a Roma.", "accetta": ["I nostri amici abitano a Roma."], "rifiutate": [
      { "t": "Le nostre amici abitano a Roma.", "perche": "amici 是阳性复数，冠词用 i，物主词用 nostri。" }
    ], "perche": "miei 换成 nostri，冠词 i 不变，因为 amici 还是阳性复数。" },
    { "k": "trasforma", "consegna": "把句子改成复数（朋友们），动词也要变。", "base": "Il tuo amico lavora in banca.", "accetta": ["I tuoi amici lavorano in banca."], "rifiutate": [
      { "t": "I tuoi amici lavora in banca.", "perche": "主语是复数，动词要用 lavorano。" }
    ], "perche": "冠词、物主词、名词、动词都要变成复数：i tuoi amici lavorano。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Di chi è questa borsa?" },
      { "chi": "B", "t": "È ＿, l'ho comprata ieri.", "buco": true }
    ], "opzioni": [
      { "t": "mia", "ok": true, "perche": "作表语时不加冠词，mia 和阴性的 borsa 一致。" },
      { "t": "mio", "ok": false, "perche": "borsa 是阴性，要用 mia。" },
      { "t": "la mio", "ok": false, "perche": "冠词 la 和物主词 mio 的性不一致，而且这里不需要冠词。" }
    ] }
  ],
  "capaci": [
    "你会用 il mio、la tua、i nostri 等形式说“我的、你的、我们的”东西，并让它们和东西一致。",
    "你会判断什么时候不加冠词：单数亲属名词，如 mia madre、tuo fratello；复数和指小词则要加冠词。",
    "你会区分 suo、Suo 和 loro，并知道 suo 不看主人，loro 总带冠词。",
    "你会用 un mio amico 说“我的一个朋友”，并避免用物主词说身体部位：Mi lavo le mani。"
  ],
  "fonti": [
    "Wikipedia (inglese), «Italian grammar», sezione sugli aggettivi possessivi (concordanza, articolo, nomi di parentela, loro, posposizione, proprio)",
    "Tatoeba (ita.tsv), frasi contate con grep: «Mia madre» (441), «Mio padre» (735), «La loro casa» (7), «i miei occhiali» (76)"
  ]
};
