/* Lezione 22 · Ce la fai o no: 听得懂 / 听不懂 (lezione ricca). Formato: docs/lezioni-guida.md. */
LESSON_RICH.zh["potenziale"] = {
  "v": 1,
  "scopri": {
    "frasi": [
      { "t": "你听得懂吗？", "tr": "Riesci a capire (ascoltando)?" },
      { "t": "他说得太快了，我听不懂。", "tr": "Parla troppo veloce, non riesco a capire." },
      { "t": "这么多菜，我们吃不完。", "tr": "Tutti questi piatti, non riusciamo a finirli." },
      { "t": "我找不到我的手机。", "tr": "Non riesco a trovare il mio telefono." }
    ],
    "domanda": "Che cosa c'è in mezzo a ogni verbo e al suo risultato (听…懂, 吃…完, 找…到)? Che cosa cambia tra 听得懂 e 听不懂?",
    "risposta": "In mezzo c'è **得** oppure **不**. Il verbo (听, 吃, 找) e il suo risultato (懂, 完, 到) sono già uniti in 听懂, 吃完, 找到; mettendo 得 si dice che il risultato **si può raggiungere**, mettendo 不 che **non si può**. Non è «non voglio» né «non so»: è «ce la faccio / non ce la faccio»."
  },
  "regola": {
    "enunciato": "Per dire se è **possibile** arrivare a un risultato si mette **得** (sì) o **不** (no) tra il verbo e il suo complemento di risultato: 听懂 → 听得懂 «riesco a capire», 听不懂 «non riesco a capire». È il complemento potenziale. Nella lingua di ogni giorno la forma con 不 è molto più frequente di quella con 得.",
    "schema": ["chi", "verbo", "得 / 不", "risultato"],
    "punti": [
      { "ok": true, "t": "**Base**: verbo + 得/不 + risultato. I risultati più comuni sono 懂 (capire), 见 (percepire), 到 (arrivare a prendere), 完 (finire), 清楚 (in modo chiaro), 起 (permettersi), 了 (liǎo, riuscire): 看不见, 买不到, 吃不完." },
      { "ok": true, "t": "**Negazione**: si sostituisce 得 con 不, nient'altro: 听得懂 → 听不懂. Il 不 sta in mezzo al verbo e al suo risultato, non davanti: 我听不懂, mai 我不听懂." },
      { "ok": true, "t": "**Affermazione**: 听得懂 si usa soprattutto nelle domande e nelle risposte, o in un contrasto: 你听得懂吗？ 听得懂 / 听不懂. In una frase affermativa semplice, per dire «posso» si preferisce 能, 可以 o 会 (我能听懂)." },
      { "ok": true, "t": "**Domanda**: aggiungi 吗 (你看得见吗？) oppure affianca le due forme: 你听得懂听不懂？ La risposta ripete la forma scelta: 听得懂 / 听不懂." },
      { "ok": true, "t": "**Oggetto**: sta dopo il complemento (我听不懂上海话) oppure all'inizio come argomento (上海话我听不懂, 这个字我看不懂). Non sta tra il verbo e 得/不." },
      { "ok": true, "t": "**Con 了 (liǎo)**: verbo + 得了/不了 dice che si può o non si può portare a termine o sopportare: 我明天去不了 («domani non riesco ad andare»), 这么多我吃不了 («non ce la faccio a mangiarne tanto»)." },
      { "ok": false, "t": "**Non si dice** 我不听懂 (né 我不会听懂) per «non riesco a capire». Il potenziale inserisce 不 al centro; 不会 e 不能 hanno un altro significato (non so fare / non è permesso o non è possibile per un impegno)." }
    ]
  },
  "logica": [
    "L'italiano dice «non riesco» con un verbo servile: «non riesco a capire», «non posso vedere». Il cinese incorpora quel giudizio **dentro** il verbo: 听懂 è già «ascoltare fino a capire», e basta cambiare il piccolo elemento centrale (得 o 不) per dire se quel punto d'arrivo si raggiunge. Per questo 听不懂 non è una negazione di 听 («non ascolto»): ascolti, ma l'ascolto non arriva a «capire».",
    "Ne segue la differenza con gli altri verbi del possibile. 不会 dice che non hai imparato (我不会说中文). 不能 dice che qualcosa non è permesso o che le circostanze non lo consentono (我不能去, ho un impegno). Il potenziale 不 + risultato dice che l'azione non produce il risultato per limiti **concreti**: troppo veloce, troppo lontano, troppo pieno, troppo buio. Confronta anche 没听懂 («non ho capito» quella volta, un fatto avvenuto) con 听不懂 («non riesco a capire», una condizione che dura finché le cose non cambiano)."
  ],
  "mappa": {
    "tipo": "albero",
    "inizio": "q1",
    "nodi": {
      "q1": { "q": "Che cosa manca?", "risposte": [
        { "t": "Non ho imparato a farlo", "vai": "imparato" },
        { "t": "Non è permesso o ho un impegno", "vai": "permesso" },
        { "t": "Faccio l'azione ma il risultato non arriva", "vai": "risultato" }
      ] },
      "imparato": { "fine": "Dici 不会: 我不会说中文 (non so il cinese)." },
      "permesso": { "fine": "Dici 不能: 我不能去 (non posso, ho un impegno)." },
      "risultato": { "fine": "Dici verbo + 不 + risultato: 我听不懂, 我吃不完, 我找不到. Se invece ci riesci, verbo + 得 + risultato: 听得懂." }
    }
  },
  "esempi": [
    { "gruppo": "Capire e percepire: 懂, 见, 清楚", "items": [
      { "t": "你听得懂吗？", "tr": "Riesci a capire (ascoltando)?" },
      { "t": "他说得太快了，我听不懂。", "tr": "Parla troppo veloce, non riesco a capire." },
      { "t": "这个字我看不懂。", "tr": "Questo carattere non riesco a capirlo.", "nota": "L'oggetto 这个字 è davanti come argomento." },
      { "t": "你看得见黑板上的字吗？", "tr": "Riesci a vedere le parole sulla lavagna?" },
      { "t": "我看不清楚，字太小了。", "tr": "Non riesco a vedere bene, i caratteri sono troppo piccoli." }
    ] },
    { "gruppo": "Trovare e ottenere: 到", "items": [
      { "t": "我找不到我的手机。", "tr": "Non riesco a trovare il mio telefono." },
      { "t": "票买不到了。", "tr": "I biglietti non si trovano più." },
      { "t": "这里买得到中国茶吗？", "tr": "Qui si trova il tè cinese?" }
    ] },
    { "gruppo": "Finire e farcela: 完, 了 (liǎo), 起", "items": [
      { "t": "这么多菜，我们吃不完。", "tr": "Tutti questi piatti, non riusciamo a finirli." },
      { "t": "今天的作业我写不完。", "tr": "I compiti di oggi non riesco a finirli." },
      { "t": "明天我有事，去不了。", "tr": "Domani ho da fare, non riesco ad andare." },
      { "t": "这么贵的车，我买不起。", "tr": "Una macchina così cara, non me la posso permettere." }
    ] },
    { "gruppo": "Risposte e contrasti", "items": [
      { "t": "你听得懂听不懂？", "tr": "Riesci a capire o no?" },
      { "t": "听得懂一点，但是说不好。", "tr": "Capisco un po', ma non riesco a parlare bene." }
    ] }
  ],
  "contrasti": [
    { "q": "Ascolti una persona che parla velocissimo. Come dici «Non riesco a capire»?", "opzioni": [
      { "t": "我听不懂。", "ok": true, "perche": "不 sta in mezzo: ascolti, ma l'ascolto non arriva a «capire»." },
      { "t": "我不听懂。", "ok": false, "perche": "Il potenziale mette 不 tra verbo e risultato; 不听懂 non è una frase cinese." },
      { "t": "我不会听。", "ok": false, "perche": "不会 dice «non so ascoltare»; qui sai ascoltare ma non riesci a capire." }
    ] },
    { "q": "Ti chiedono se capisci il dialetto di Shanghai. Rispondi che in generale non ci riesci.", "opzioni": [
      { "t": "我听不懂上海话。", "ok": true, "perche": "听不懂 descrive una condizione che dura: finché non lo impari, non riesci a capirlo." },
      { "t": "我没听懂上海话。", "ok": false, "perche": "没听懂 racconta un fatto: non hai capito quella volta. Qui la domanda è generale." }
    ] },
    { "q": "Dici che i biglietti non si trovano più (sono finiti).", "opzioni": [
      { "t": "票买不到了。", "ok": true, "perche": "买不到: il risultato 到 («riuscire ad averli») non si raggiunge; 了 finale annuncia che ora è così." },
      { "t": "票不买到了。", "ok": false, "perche": "不 davanti al verbo vorrebbe dire «non compro»; il potenziale mette 不 dopo il verbo." }
    ] },
    { "q": "Chiedi a un amico se riesce a vedere la lavagna.", "opzioni": [
      { "t": "你看得见黑板吗？", "ok": true, "perche": "Verbo + 得 + 见, con l'oggetto dopo il complemento e 吗 in fondo." },
      { "t": "你看黑板得见吗？", "ok": false, "perche": "L'oggetto non si inserisce tra il verbo e 得." }
    ] },
    { "q": "Hai davanti un piatto enorme e non ce la fai a finirlo.", "opzioni": [
      { "t": "太多了，我吃不完。", "ok": true, "perche": "吃不完: il limite è concreto (la quantità), il risultato 完 non si raggiunge." },
      { "t": "太多了，我不吃完。", "ok": false, "perche": "不吃完 suona come una scelta («non lo finirò, non voglio»), non come un limite." }
    ] },
    { "q": "Non hai mai imparato a leggere il cinese e un amico ti mostra una frase. Che cosa dici?", "opzioni": [
      { "t": "我不会看汉字。", "ok": true, "perche": "不会 dice che non hai imparato: la capacità manca in generale." },
      { "t": "我没看汉字。", "ok": false, "perche": "没看 racconta un fatto: non l'hai letta quella volta; non dice che non sei capace di leggerla." }
    ] },
    { "q": "Un collega è bloccato in riunione. Che cosa significa 他今天来不了?", "opzioni": [
      { "t": "Oggi, per le circostanze, non riesce a venire.", "ok": true, "perche": "不了 (liǎo) indica che le circostanze impediscono di portare a termine l'azione." },
      { "t": "Non vuole venire oggi.", "ok": false, "perche": "Il potenziale parla di possibilità, non di volontà: per «non vuole» serve 不想来." },
      { "t": "È già venuto oggi.", "ok": false, "perche": "Nessun elemento indica un'azione compiuta: 来不了 è una impossibilità." }
    ] },
    { "q": "Dici che una macchina è troppo cara e che non puoi permettertela.", "opzioni": [
      { "t": "这么贵的车，我买不起。", "ok": true, "perche": "起 nel potenziale indica la possibilità economica: 买不起 = «non posso permettermelo»." },
      { "t": "这么贵的车，我买不到。", "ok": false, "perche": "买不到 significa «non riesco a trovarla» (non è in vendita), non che costa troppo." }
    ] }
  ],
  "dialogo": {
    "titolo": "Al cinema",
    "righe": [
      { "chi": "A", "t": "这个电影你看得懂吗？", "tr": "Questo film riesci a capirlo?" },
      { "chi": "B", "t": "看得懂一半。他们说得太快，我听不懂。", "tr": "Ne capisco metà. Parlano troppo veloce, non riesco a capire." },
      { "chi": "A", "t": "电影下面的字呢？你看得清楚吗？", "tr": "E i sottotitoli? Riesci a leggerli bene?" },
      { "chi": "B", "t": "字太小了，我看不清楚。", "tr": "I caratteri sono troppo piccoli, non vedo bene." },
      { "chi": "A", "t": "那我们坐前面吧。前面的票还买得到吗？", "tr": "Allora sediamoci davanti. I biglietti davanti si trovano ancora?" },
      { "chi": "B", "t": "买得到，我们快去吧。", "tr": "Si trovano, andiamo in fretta." }
    ],
    "esercizi": [
      { "q": "Perché B dice 听不懂 e non 不听懂?", "opzioni": [
        { "t": "Perché il potenziale mette 不 in mezzo al verbo e al risultato.", "ok": true, "perche": "听不懂: 不 sta tra 听 e 懂; 不听懂 non esiste." },
        { "t": "Perché 听 è un verbo di stato.", "ok": false, "perche": "听 è un verbo d'azione; la posizione di 不 dipende dalla struttura." },
        { "t": "Perché B non ha ascoltato.", "ok": false, "perche": "B ascolta, ma l'ascolto non arriva a «capire»." }
      ] },
      { "q": "Che cosa comunica 我看不清楚?", "opzioni": [
        { "t": "Che B non riesce a vedere bene i sottotitoli.", "ok": true, "perche": "看不清楚: il risultato «chiaro» non si raggiunge, per colpa dei caratteri troppo piccoli." },
        { "t": "Che B non vuole leggere i sottotitoli.", "ok": false, "perche": "Il potenziale dice possibilità, non volontà." },
        { "t": "Che B non ha mai imparato a leggere.", "ok": false, "perche": "Per questo si direbbe 不会; qui la causa è nei caratteri troppo piccoli." }
      ] }
    ]
  },
  "tranello": {
    "errore": "Chi parla italiano mette 不 davanti al verbo, come per ogni negazione: 我不听懂, 我不找到, 我不会听懂. Oppure sceglie 不会 e 不能 per tutti i «non riesco».",
    "perche": "In italiano «non riesco a capire» è una negazione che sta davanti a tutto il gruppo. In cinese 听懂 è un blocco (azione + risultato) e il possibile / impossibile si inserisce dentro il blocco. Inoltre 不会 e 不能 esistono, ma rispondono a domande diverse: «hai imparato?» e «ti è permesso o puoi, nelle circostanze?».",
    "esci": "Quando senti l'idea di «non ce la faccio a ottenere il risultato», cerca nel verbo un risultato (懂, 完, 到, 见, 清楚) e metti 不 subito prima di quel risultato: 听 + 不 + 懂. Se invece vuoi dire «non so» (non imparato) usa 不会, se vuoi dire «non posso (impegno, divieto)» usa 不能.",
    "esempi": [
      { "sbagliata": "我不听懂。", "giusta": "我听不懂。" },
      { "sbagliata": "我不会听懂。", "giusta": "我听不懂。" },
      { "sbagliata": "我看这个字不懂。", "giusta": "这个字我看不懂。" },
      { "sbagliata": "票不买到了。", "giusta": "票买不到了。" }
    ]
  },
  "curiosi": [
    { "titolo": "Il potenziale è un risultato con una porta", "t": "Il complemento potenziale nasce dal complemento di risultato: 听懂 («ascoltare e capire») → 听得懂 / 听不懂. Se togli 得/不, hai il fatto già avvenuto: 我听懂了 («ho capito»). Per questo il potenziale con 不 è così naturale: nel parlato indica un blocco concreto, e con 得 conferma che la strada è libera." },
    { "titolo": "得了 e 不了", "t": "Il verbo 了 (liǎo) significa «finire, riuscire». Dopo 得 o 不 forma verbo + 得了 / 不了, molto frequente per dire se si può portare a termine un'azione: 去不了, 吃不了, 忘不了 («non riesco a dimenticare»). Si scrive 了 ma si pronuncia liǎo, a differenza della particella le." },
    { "titolo": "Un uso a metà: 看得出来", "t": "Alcune espressioni si usano solo nella forma potenziale e non hanno una versione con il semplice risultato: 看得出来 («si vede, si capisce»), 想不到 («chi l'avrebbe detto»), 受不了 («non ne posso più»). Si imparano come unità." }
  ],
  "pragmatica": "听不懂 è la frase più utile per chi studia: è educata, chiara e non incolpa nessuno. Aggiungi 请说慢一点 o 请再说一遍 per chiedere di ripetere. Per dire che qualcosa non è possibile per le circostanze, 不了 è più morbido di 不能: 明天我去不了 suona come «purtroppo non ce la faccio», mentre 我不能去 può sembrare una regola o un divieto. Nella lingua scritta formale il potenziale si usa meno, e si preferiscono 无法 o 不能.",
  "esercizi": [
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "太多了，我吃不完。", "opzioni": [
      { "t": "È troppo, non riesco a finirlo.", "ok": true, "perche": "吃不完: il risultato «finire» non si raggiunge." },
      { "t": "Non mi piace, non lo mangio.", "ok": false, "perche": "Il potenziale parla di capacità, non di gusto." },
      { "t": "Ho già finito.", "ok": false, "perche": "Per «ho finito» si direbbe 我吃完了." }
    ] },
    { "k": "scegli", "q": "Che cosa vuol dire?", "zh": "这个字我看不懂。", "opzioni": [
      { "t": "Questo carattere non riesco a capirlo.", "ok": true, "perche": "看不懂: guardi, ma non arrivi a capire." },
      { "t": "Non voglio guardare questo carattere.", "ok": false, "perche": "Non c'è alcuna volontà: 不 è dentro il verbo-risultato." },
      { "t": "Non l'ho guardato.", "ok": false, "perche": "Per dirlo si direbbe 我没看这个字." }
    ] },
    { "k": "buco", "zh": "我听＿懂，他说得太快了。", "tr": "Non capisco, parla troppo veloce.", "opzioni": [
      { "t": "不", "ok": true, "perche": "Il potenziale mette 不 tra il verbo 听 e il risultato 懂: 听不懂." },
      { "t": "没", "ok": false, "perche": "没听懂 sarebbe un fatto passato, e 没 non sta in mezzo." },
      { "t": "得", "ok": false, "perche": "听得懂 vuol dire «riesco a capire»: il senso sarebbe l'opposto." }
    ] },
    { "k": "buco", "zh": "你看＿见黑板上的字吗？", "tr": "Riesci a vedere le parole sulla lavagna?", "opzioni": [
      { "t": "得", "ok": true, "perche": "Nella domanda sulla possibilità 得 apre la porta: 看得见." },
      { "t": "了", "ok": false, "perche": "了 segnerebbe un'azione compiuta, non una possibilità." },
      { "t": "的", "ok": false, "perche": "的 non può stare tra un verbo e il suo risultato." }
    ] },
    { "k": "ordine", "t": "我找不到我的手机", "tr": "Non riesco a trovare il mio telefono." },
    { "k": "ordine", "t": "这个字我看不懂", "tr": "Questo carattere non riesco a capirlo.", "alt": ["我看不懂这个字"] },
    { "k": "trasforma", "base": "我听得懂。", "consegna": "Dì il contrario: non riesci a capire.", "accetta": ["我听不懂。"], "rifiutate": [
      { "t": "我不听懂。", "perche": "Il 不 sostituisce 得 al centro, non va davanti al verbo." }
    ], "perche": "Nel potenziale la negazione scambia 得 con 不." },
    { "k": "trasforma", "base": "我吃完了。", "consegna": "Dì che non riesci a finirlo (è troppo).", "accetta": ["我吃不完。", "我吃不完了。"], "rifiutate": [
      { "t": "我没吃完。", "perche": "没吃完 dice che non l'hai finito (fatto), non che non ce la fai." }
    ], "perche": "Per il limite concreto si usa il potenziale: 吃不完." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Non capisco (ascoltando).»", "a": "我听不懂。", "accetta": ["我听不懂了。"], "perche": "Verbo + 不 + risultato: 听不懂." },
    { "k": "scrivi", "q": "Scrivi in cinese: «Non riesco a trovare il mio telefono.»", "a": "我找不到我的手机。", "accetta": ["我的手机我找不到。", "我找不到手机。", "我找不到我的手机了。"], "perche": "Verbo + 不 + 到, con l'oggetto dopo il complemento." },
    { "k": "minidialogo", "righe": [
      { "chi": "A", "t": "你明天来吗？" },
      { "chi": "B", "t": "对不起，我有事，来＿了。", "buco": true }
    ], "opzioni": [
      { "t": "不", "ok": true, "perche": "来不了: le circostanze impediscono di venire." },
      { "t": "没", "ok": false, "perche": "没 non entra nel potenziale e non si usa con una azione futura." },
      { "t": "别", "ok": false, "perche": "别 è un divieto («non venire»), non una scusa." }
    ] }
  ],
  "capaci": [
    "Sai dire se riesci o non riesci a raggiungere un risultato con verbo + 得/不 + risultato (听得懂, 吃不完, 找不到).",
    "Sai fare la domanda sulla possibilità: 你听得懂吗？ e 你听得懂听不懂？",
    "Sai scegliere tra 不会 (non so), 不能 (non posso, impegno) e il potenziale con 不 (il risultato non arriva).",
    "Sai collocare l'oggetto: dopo il complemento (听不懂中文) o davanti alla frase (这个字我看不懂)."
  ],
  "fonti": [
    "Chinese Grammar Wiki (AllSet Learning), «Potential complement»: struttura verbo + 得/不 + complemento, domanda con 吗, oggetto dopo il complemento o all'inizio",
    "Chinese Grammar Wiki (AllSet Learning), «Degree complement»: il complemento di grado accetta 很 davanti all'aggettivo, il potenziale no",
    "Tatoeba (cinese), frasi come 对不起，我听不懂 e 我听得见你，但我看不见你, consultate con la raccolta locale cmn.tsv",
    "CC-CEDICT, voci 懂, 完, 了 (liǎo), 起: significati dei risultati usati nel potenziale"
  ]
};
