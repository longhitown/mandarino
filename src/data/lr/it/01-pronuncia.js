/* Lezione 1 · La pronuncia: si legge come si scrive (lezione ricca, corso di italiano). Formato: docs/lezioni-guida.md. */
LESSON_RICH.it["pronuncia"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "Ciao, Chiara!", "tr": "你好，基娅拉！" },
      { "t": "La cena è alle otto.", "tr": "晚饭八点。" },
      { "t": "Che gelato buono!", "tr": "这冰淇淋真好吃！" },
      { "t": "Il gatto dorme sul divano.", "tr": "猫在沙发上睡觉。" }
    ],
    "domanda": "先看 **c**：在 Ciao 和 cena 里，c 后面是 i、e；在 Chiara 里，c 后面是 h。再看 **g**：gelato 和 gatto 的 g 后面分别是 e 和 a。你觉得这些 c 和 g 的读音一样吗？是什么在决定它们的读音？",
    "risposta": "不一样。**Ciao、cena** 里的 c 读 [tʃ]（像英语 church 开头），**Chiara** 里的 ch 读 [k]（所以是“基亚拉”，不是“奇亚拉”）；**gelato** 的 g 读 [dʒ]，**gatto** 的 g 读 [g]。决定读音的是**后面的字母**：c、g 后面是 e、i 就读“软音”，后面是 a、o、u 就读“硬音”；想在 e、i 前保持硬音，就在中间加 **h**。"
  },
  "regola": {
    "enunciato": "意大利语基本上**怎么写就怎么读**：一个字母或一组固定的字母对应一个固定的声音，每个字母都要读出来，没有哑音（只有 h 不读）。你只需要掌握五个元音、几组关键的辅音拼写（c/g、gn、gli、sc）、双辅音要读长，以及重音的位置，就能读出几乎所有的词。",
    "schema": ["字母", "固定的声音", "｜", "c/g + e·i", "软音", "c/g + a·o·u", "硬音"],
    "punti": [
      { "ok": true, "t": "**五个元音 a e i o u 清晰、纯净**：每个都读成一个固定的音，不要拖成双元音。a 像“啊”，i 像“衣”，u 像“乌”；e、o 介于“诶/哦”之间，口型保持不动。" },
      { "ok": true, "t": "**c、g 看后面的字母**：ce ci 读 [tʃe] [tʃi]；ca co cu 读 [k]；ge gi 读 [dʒ]；ga go gu 读 [g]。在 a、o、u 前读软音，就在中间加一个不发音的 i：ciao、giorno、cioccolato。" },
      { "ok": true, "t": "**加 h 保持硬音**：che chi 读 [ke] [ki]；ghe ghi 读 [ge] [gi]：chilo、spaghetti、ghiaccio。h 本身不发音。" },
      { "ok": true, "t": "**gn、gli、sc 是一个整体的音**：gn 读 [ɲ]（像“你”的声母）：bagno；gli 读 [ʎ]（舌面贴上颚发 l）：figlio；sce sci 读 [ʃ]（像英语 she）：pesce；sca sco scu 和 sch- 读 [sk]：scuola、schiena。" },
      { "ok": true, "t": "**p、t、c[k] 几乎不送气，b、d、g 是浊音**：pane 的 p 接近拼音的 b；而意大利语的 b、d、g 发音时声带要振动，这是普通话里没有的音，如 banana、dado、gatto。" },
      { "ok": true, "t": "**双辅音要读长**：把辅音多保持一小会儿，意思会变：pala（铲子）/ palla（球），caro（亲爱的、贵）/ carro（车）。重音一般落在倒数第二个音节：a-**MI**-co；重音在最后一个元音上，就要写重音符号：città、caffè。" },
      { "ok": false, "t": "**不要用汉语拼音的读法去读**：意大利语的 c 不读拼音的 c [ts‘]，ch 不读拼音的 ch（卷舌），r 也不是汉语的 r，而是舌尖颤音或轻弹音。" }
    ]
  },
  "logica": [
    "汉语的拼音靠声母和韵母拼出一个音节，声调决定词义；意大利语没有声调，词义靠**音节的长短和重音位置**来区分。因为每个字母的读音很固定，所以只要学会这套对应关系，看到一个没学过的词也能读出来，这和英语“同一个 ough 有五种读法”完全不同。",
    "c 和 g 的规则，其实是在**保护同一个声音**。拉丁语的 c 原本总是读 [k]，后来在 e、i 前面变成了 [tʃ]。为了让写法跟着读音走，意大利语选择：不改字母，而是用 h 来“拦住”变化（che、chi），再用不发音的 i 来“放行”（ciao、giorno）。这样一来，读音永远可以从拼写推出来。",
    "对说汉语的人来说，有三个特别要注意：一是**浊音 b、d、g**，汉语里没有对应的音；二是**双辅音**，汉语没有“长辅音”这个概念，容易读成单辅音；三是**重音**，汉语习惯用声调，意大利语用的是“音节读得更重更长”。"
  ],
  "mappa": {
    "tipo": "tabella",
    "testa": ["拼写", "读音", "例词"],
    "righe": [
      ["ca · co · cu", "[k]", "casa, cosa, cucina"],
      ["ce · ci", "[tʃ]", "cena, ciao"],
      ["che · chi", "[k]", "che, chi, Chiara"],
      ["ga · go · gu", "[g]", "gatto, gola, gusto"],
      ["ge · gi", "[dʒ]", "gelato, giorno"],
      ["ghe · ghi", "[g]", "spaghetti, ghiaccio"],
      ["gn", "[ɲ]", "bagno, lasagna"],
      ["gli", "[ʎ]", "figlio, famiglia"],
      ["sce · sci", "[ʃ]", "pesce, sciare"],
      ["sca · sco · scu · sch-", "[sk]", "scuola, schiena"]
    ]
  },
  "esempi": [
    { "gruppo": "五个元音：每个都清晰", "items": [
      { "t": "Anna ama Roma.", "tr": "安娜爱罗马。", "nota": "每个 a 都是同一个清晰的“啊”，没有长短变化。" },
      { "t": "Luigi sa suonare il piano.", "tr": "路易吉会弹钢琴。", "nota": "suonare 里的 uo 连读成一个音节：suo-NA-re。" }
    ] },
    { "gruppo": "c：软音还是硬音", "items": [
      { "t": "Che cosa cerchi in cucina?", "tr": "你在厨房里找什么？", "nota": "che 和 cosa 的 c 是硬音 [k]；cerchi 的 c 是软音 [tʃ]；cucina 里第一个 c 硬，第二个 c 软。" },
      { "t": "Ciao, ci vediamo domani.", "tr": "你好（再见），明天见。", "nota": "ciao 里的 i 不发音，只让 c 变软。" },
      { "t": "Che bel cielo!", "tr": "多美的天空！" }
    ] },
    { "gruppo": "g：软音还是硬音", "items": [
      { "t": "Giorgio mangia un gelato in giardino.", "tr": "乔治在花园里吃冰淇淋。", "nota": "Giorgio 里的 i 不发音；gelato 和 giardino 的 g 都是 [dʒ]。" },
      { "t": "Gli spaghetti sono buoni.", "tr": "意大利面很好吃。", "nota": "gli 是冠词，读 [ʎi]；spaghetti 的 gh 是硬音 [g]。" },
      { "t": "Luigi ha un gatto grigio.", "tr": "路易吉有一只灰色的猫。", "nota": "gatto、grigio 的第一个 g 是 [g]；grigio 的最后 gi 是 [dʒ]。" }
    ] },
    { "gruppo": "gn、gli、sc：一个整体的音", "items": [
      { "t": "Mia figlia mangia gli gnocchi con il pesce.", "tr": "我女儿吃土豆团子配鱼。", "nota": "figlia 和 gli 里是 [ʎ]，gnocchi 开头是 [ɲ]，pesce 里是 [ʃ]。" },
      { "t": "Voglio una camera con bagno.", "tr": "我想要一间带卫生间的房间。" },
      { "t": "La scuola è vicino alla stazione.", "tr": "学校在车站附近。", "nota": "scuola 是 sc+u，读 [sk]，不读 [ʃ]。" }
    ] },
    { "gruppo": "双辅音：读长就能改变意思", "items": [
      { "t": "La palla è sul tavolo, la pala è in giardino.", "tr": "球在桌子上，铲子在花园里。", "nota": "palla 的 ll 要读得长一点。" },
      { "t": "Ho sete, ma ho solo sette euro.", "tr": "我渴了，但我只有七欧元。" },
      { "t": "Mio nonno ha settant'anni.", "tr": "我爷爷七十岁。", "nota": "nonno 的 nn 和 settanta 的 tt 都是双辅音。" }
    ] },
    { "gruppo": "重音和重音符号", "items": [
      { "t": "In città il caffè è buono.", "tr": "城里的咖啡很好喝。", "nota": "città 和 caffè 的重音在最后一个元音上，必须写出重音符号。" },
      { "t": "Perché sei felice? Perché è domenica!", "tr": "你为什么高兴？因为今天是星期天！" },
      { "t": "Il telefono è sul tavolo.", "tr": "电话在桌子上。", "nota": "telefono 的重音在倒数第三个音节（TE-le-fo-no），这种情况不写重音符号，要靠记忆。" }
    ] }
  ],
  "contrasti": [
    { "q": "pane（面包）里的 p，更接近汉语拼音的哪个音？", "opzioni": [
      { "t": "b", "ok": true, "perche": "意大利语的 p 几乎不送气，听感接近拼音的 b。" },
      { "t": "p", "ok": false, "perche": "拼音的 p 是明显送气的音，读成 p 会听起来太“用力”。" },
      { "t": "f", "ok": false, "perche": "f 是摩擦音，和爆破音 p 完全不同。" }
    ] },
    { "q": "che（什么）里的 ch 怎么读？", "opzioni": [
      { "t": "[k]，读作“凯”", "ok": true, "perche": "ch 加 e 或 i 保持硬音 [k]；h 只负责“拦住”变化，本身不发音。" },
      { "t": "[tʃ]，像英语 church 的开头", "ok": false, "perche": "[tʃ] 要写成 ce、ci，不是 che。" },
      { "t": "[ʃ]，像英语 she", "ok": false, "perche": "[ʃ] 要写成 sce、sci，和 ch 无关。" }
    ] },
    { "q": "要拼出“意大利面”的写法，spa＿etti 里应该补什么，才能读成硬音 [g]？", "opzioni": [
      { "t": "gh", "ok": true, "perche": "g 在 e 前面读软音，所以要加 h：spaghetti 读 [spaˈgetti]。" },
      { "t": "g", "ok": false, "perche": "spagetti 会读成 [spaˈdʒetti]，g 在 e 前变成了软音。" },
      { "t": "gi", "ok": false, "perche": "gi 在 e 前读软音 [dʒ]，不是硬音。" }
    ] },
    { "q": "scuola（学校）里的 sc 怎么读？", "opzioni": [
      { "t": "[sk]", "ok": true, "perche": "sc 在 a、o、u 前读 [sk]；只有在 e、i 前才读 [ʃ]。" },
      { "t": "[ʃ]", "ok": false, "perche": "[ʃ] 只出现在 sce、sci（如 pesce），scuola 里 sc 后面是 u。" },
      { "t": "[s]，c 不发音", "ok": false, "perche": "意大利语没有哑音的 c，每个字母都要读出来。" }
    ] },
    { "q": "figlio（儿子）里的 gli 怎么读？", "opzioni": [
      { "t": "[ʎ]，舌面贴上颚发 l", "ok": true, "perche": "gli 是一个整体的音，类似“利”的发音，但舌面更贴近上颚。" },
      { "t": "[gli]，g 和 l 分开读", "ok": false, "perche": "在 figlio 这类词里，gli 不分开读，g 不单独发音。" },
      { "t": "[li]，g 不读但也没有特别的音", "ok": false, "perche": "gli 的舌位和普通的 l 不同：舌面要贴住上颚。" }
    ] },
    { "q": "你想说“我有一个球”。哪一句写对了？", "opzioni": [
      { "t": "Ho una palla.", "ok": true, "perche": "palla 是球，双 l 要读长。" },
      { "t": "Ho una pala.", "ok": false, "perche": "pala 的意思是铲子，句子的意思变了。" }
    ] },
    { "q": "“为什么？”怎么写才完整？", "opzioni": [
      { "t": "Perché?", "ok": true, "perche": "重音落在最后一个元音上，必须写重音符号。" },
      { "t": "Perche?", "ok": false, "perche": "没有重音符号，会读成 PER-che，重音位置就错了。" }
    ] },
    { "q": "amico（朋友）的重音在哪个音节？", "opzioni": [
      { "t": "a-MI-co", "ok": true, "perche": "重音一般在倒数第二个音节，这种情况不写重音符号。" },
      { "t": "A-mi-co", "ok": false, "perche": "倒数第三个音节重音的词是少数，amico 不是。" },
      { "t": "a-mi-CO", "ok": false, "perche": "最后音节重音的词必须写重音符号，如 città。" }
    ] }
  ],
  "dialogo": {
    "titolo": "Al bar",
    "righe": [
      { "chi": "A", "t": "Buongiorno! Un caffè e un gelato al cioccolato, per favore.", "tr": "早上好！请给我一杯咖啡和一个巧克力冰淇淋。" },
      { "chi": "B", "t": "Subito! Con la panna?", "tr": "马上来！要奶油吗？" },
      { "chi": "A", "t": "No, grazie. Quanto costa?", "tr": "不用，谢谢。多少钱？" },
      { "chi": "B", "t": "Sono tre euro e cinquanta.", "tr": "三欧元五十。" },
      { "chi": "A", "t": "Ecco a lei. Grazie mille!", "tr": "给您。非常感谢！" },
      { "chi": "B", "t": "Prego, buona giornata!", "tr": "不客气，祝您愉快！" }
    ],
    "esercizi": [
      { "q": "Buongiorno 里的 gi，i 读出来吗？", "opzioni": [
        { "t": "不单独发音，只让 g 变成软音 [dʒ]", "ok": true, "perche": "gi 加 o 时，i 只是“放行”的标记，读作 [dʒo]。" },
        { "t": "读成“基”，i 清楚地发音", "ok": false, "perche": "这里的 i 不单独发音，否则会读成 [dʒio]。" }
      ] },
      { "q": "panna（奶油）里的 nn 应该怎么读？", "opzioni": [
        { "t": "n 读得长一点", "ok": true, "perche": "双辅音要读长，panna 和 pana 的读音不同。" },
        { "t": "和单个 n 一样", "ok": false, "perche": "把双辅音读成单辅音，会造成别的词或让人听不懂。" }
      ] }
    ]
  },
  "tranello": {
    "errore": "用汉语拼音的习惯去读和写：把 c 读成拼音的 c [ts‘]，把 ch 读成卷舌的 ch，写 ciao 时写成 *chiao*，写 città 时漏掉重音符号，写 gnocchi 时忘记双 c。",
    "perche": "拼音里 c、ch、q、g 的读音和意大利语不同，而且汉语没有“长辅音”和“写在字母上的重音符号”这两种概念。结果是看起来“差不多”，但读音和拼写都错了。",
    "esci": "每次拼写之前，先问两个问题：①这个音是硬音还是软音？c/g 后面是 e、i 就是软音，要硬音就加 h；②这里有没有双辅音？念出来时辅音有没有“停一下”？",
    "esempi": [
      { "sbagliata": "chiao", "giusta": "ciao" },
      { "sbagliata": "citta", "giusta": "città" },
      { "sbagliata": "spagetti", "giusta": "spaghetti" },
      { "sbagliata": "gnochi", "giusta": "gnocchi" }
    ]
  },
  "curiosi": [
    { "titolo": "z 和 s 的两种读法", "t": "字母 z 读 [ts] 或 [dz]：pizza、grazie 读 [ts]，zero 读 [dz]。字母 s 在两个元音之间，北方多读 [z]（casa 读成“咖扎”），中部和南方多读 [s]。这些差别在不同地区都被接受，不会造成误会，初学者先读好最清楚的版本即可。" },
    { "titolo": "托斯卡纳的“h”：la casa 变成 la hasa", "t": "在托斯卡纳（佛罗伦萨一带），元音之间的 c [k] 常读成气音，听起来像 h：la casa 像是 la hasa。这叫“托斯卡纳气音化”（gorgia toscana），p、t 也有类似的变化。标准意大利语以托斯卡纳语为基础，但这个特点并不属于标准发音。" },
    { "titolo": "重音可以区分词义", "t": "有些词只靠重音区分：àncora 是“锚”，ancóra 是“还、再”。单音节词里，重音符号也用来区分同形词：è（是）/ e（和），dà（给）/ da（从），sì（是的）/ si（代词），là（那里）/ la（冠词）。" },
    { "titolo": "意大利语只有 21 个传统字母", "t": "传统的意大利语字母表只有 21 个字母，j、k、w、x、y 只用在外来词里：jeans、kiwi、whisky、taxi、yogurt。h 虽然在字母表里，但只用来标记硬音，或出现在 ho、hai、ha、hanno 这几个动词形式里，本身不发音。" }
  ],
  "pragmatica": "刚开始说意大利语时，慢一点、清楚一点比快更重要：每个元音读清楚，双辅音停一下，重音落对位置，对方就很容易听懂。遇到不认识的词，先看 c/g 后面的字母，再找双辅音，最后找重音，大多数时候能直接读出来。路牌、菜单和人名（Chiara、Giorgio、Luigi）是很好的练习材料。",
  "esercizi": [
    { "k": "scegli", "q": "哪个词里的 c 读软音 [tʃ]？", "opzioni": [
      { "t": "cena", "ok": true, "perche": "c 后面是 e，读 [tʃ]。" },
      { "t": "cane", "ok": false, "perche": "c 后面是 a，读 [k]。" },
      { "t": "che", "ok": false, "perche": "ch 加 e 读 [k]。" }
    ] },
    { "k": "scegli", "q": "哪个词里有 [ɲ] 这个音（像“你”的声母）？", "opzioni": [
      { "t": "bagno", "ok": true, "perche": "gn 是一个整体的音，读 [ɲ]，bagno 读作“巴妞”。" },
      { "t": "gatto", "ok": false, "perche": "gatto 的 g 在 a 前读 [g]。" },
      { "t": "gelato", "ok": false, "perche": "gelato 的 g 在 e 前读 [dʒ]。" }
    ] },
    { "k": "scegli", "q": "下面哪个词必须写重音符号？", "opzioni": [
      { "t": "caffè", "ok": true, "perche": "重音在最后一个元音上，必须写 è。" },
      { "t": "amico", "ok": false, "perche": "重音在倒数第二个音节，不写符号。" },
      { "t": "casa", "ok": false, "perche": "重音在倒数第二个音节，不写符号。" }
    ] },
    { "k": "buco", "zh": "La ＿ è molto bella.", "tr": "这座城市很漂亮。", "opzioni": [
      { "t": "città", "ok": true, "perche": "最后一个音节重读，需要写 à（向左下斜）。" },
      { "t": "citta", "ok": false, "perche": "没有重音符号，拼写不完整。" },
      { "t": "cittá", "ok": false, "perche": "a 上的重音符号是 à，不是 á。" }
    ] },
    { "k": "buco", "zh": "Sono le otto di ＿.", "tr": "现在是晚上八点。", "opzioni": [
      { "t": "sera", "ok": true, "perche": "sera 是晚上，单个 r。" },
      { "t": "serra", "ok": false, "perche": "serra 是温室，双 r 是另一个词。" }
    ] },
    { "k": "ordine", "t": "il gatto mangia il pesce", "tr": "猫吃鱼。" },
    { "k": "ordine", "t": "mia figlia studia a scuola", "tr": "我女儿在学校学习。" },
    { "k": "scrivi", "q": "写出意大利语的“球”，注意双辅音。", "a": "palla", "accetta": ["Palla"], "perche": "palla 是球，双 l 要读长；pala 是铲子。" },
    { "k": "scrivi", "q": "写出意大利语的“城市”，注意重音符号。", "a": "città", "accetta": ["Città"], "perche": "重音落在最后一个元音上，必须写 à。" },
    { "k": "scrivi", "q": "写出意大利语的“意大利面”（复数），注意 g 要读硬音。", "a": "spaghetti", "accetta": ["Spaghetti"], "perche": "g 在 e 前读软音，要保持硬音就加 h：gh；双 t 读长。" },
    { "k": "trasforma", "consegna": "只改一个词：把“铲子”改成“球”。", "base": "Ho una pala.", "accetta": ["Ho una palla."], "perche": "pala 是铲子，palla 是球，只多了一个 l，要读长。" },
    { "k": "trasforma", "consegna": "补上缺少的重音符号。", "base": "Dov'e il caffe?", "accetta": ["Dov'è il caffè?", "Dov'è il caffè", "Dov’è il caffè?", "Dov’è il caffè"], "rifiutate": [
      { "t": "Dov'é il caffé?", "perche": "è 和 caffè 用向左下斜的重音符号 `；é 是另一个符号，用在 perché 这类词里。" }
    ], "perche": "è（是）和 caffè 的最后一个元音重读，写 è。" },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "Quanti anni ha tuo nonno?" },
      { "chi": "B", "t": "Mio nonno ha ＿ anni.", "buco": true }
    ], "opzioni": [
      { "t": "settanta", "ok": true, "perche": "settanta（七十）有双 t，要读长。" },
      { "t": "setanta", "ok": false, "perche": "只有一个 t，不是意大利语的词。" }
    ] }
  ],
  "capaci": [
    "你会根据 c/g 后面的字母判断是软音还是硬音，并用 h 和不发音的 i 拼出需要的音。",
    "你会读出 gn、gli、sc 这些组合，也会读 bagno、figlio、pesce、scuola 这样的词。",
    "你会把双辅音读长，区分 pala 和 palla、nono 和 nonno 这样的词。",
    "你会判断重音的位置，并在 città、caffè、perché 这类词里写出重音符号。"
  ],
  "fonti": [
    "Wikipedia (inglese), Italian phonology: consonanti geminate, /ɲ ʃ ʎ/ sempre geminate tra vocali, accento lessicale e dominanza della parossitona, gorgia toscana",
    "Tatoeba (ita.tsv), controllo dell'uso reale di gnocchi, figlio, pesce, scuola, chiave, ghiaccio, uova, città, spaghetti, schiena, bruschetta e dei due caffè"
  ]
};
