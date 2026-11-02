/* ===== màndarínō · i testi del foglio «Ricerca sulla memoria» (ui/research.js), nelle due lingue dell'interfaccia.
   Si caricano al primo uso di CP.research (tools/build.mjs, LAZYMOD). Titolo, introduzione e pulsante della sezione stanno in i18n/community.js.
   Le chiavi it e zh devono essere le stesse (tools/unit.mjs). ===== */
Object.assign(I18N.it, {
  "cm.rs.sheetTitle": "Ricerca sulla memoria (ML-FSRS-32)", "cm.rs.h": "Prima di cominciare, leggi con calma",
  "cm.rs.t1": "Perché: il ripasso di màndarínō usa FSRS-6 con un'estensione, ML-FSRS-32, i cui undici parametri aggiunti sono ancora valori di partenza. Per stimarli bene servono ripassi di persone vere.",
  "cm.rs.t2": "Che cosa c'è nel file: per ogni ripasso la parola, il voto, il tempo di risposta, il tipo di esercizio, il numero di opzioni, se hai sbagliato solo il tono, la stabilità dei caratteri che già studi e le notti passate dall'ultima volta; per ogni parola, la stabilità e la difficoltà.",
  "cm.rs.t3": "C'è anche l'ora esatta di ogni ripasso: da lì si vede a che ora studi e, indirettamente, quando vai a dormire. È proprio ciò che serve per misurare l'effetto del sonno.",
  "cm.rs.t4": "Che cosa non c'è: nome, e-mail, indirizzo IP, posizione, identificativi del telefono, le parole che hai aggiunto tu. C'è un codice casuale, lo stesso a ogni invio, che serve a riconoscere i ripassi della stessa persona; non è legato a te. Però l'e-mail con cui mandi il file mostra il tuo indirizzo a chi la riceve.",
  "cm.rs.t5": "Se lo mandi, rilasci i dati in pubblico dominio (licenza CC0): potranno essere usati e pubblicati da chiunque per la ricerca. Quello che è già stato pubblicato non si può più ritirare.",
  "cm.rs.t6": "Puoi revocare la partecipazione quando vuoi: nessun altro invio parte e il codice casuale viene cancellato da questo telefono. Per chiedere di togliere dati non ancora pubblicati scrivi a mandarinoapp@gmail.com, indicando il codice.",
  "cm.rs.t7": "La ricerca è per persone maggiorenni. L'app non ha account e non può verificare l'età: confermando dichiari di avere almeno 18 anni.",
  "cm.rs.t8": "L'app non manda niente da sola: il file lo prepara sul telefono e puoi aprirlo e leggerlo prima. L'invio lo fai tu, con l'e-mail o con Condividi.",
  "cm.rs.age": "Dichiaro di avere almeno 18 anni.", "cm.rs.cc0": "Autorizzo l'uso scientifico e la pubblicazione dei miei ripassi in forma anonima (licenza CC0).",
  "cm.rs.aware": "Ho capito che il file contiene l'ora dei miei ripassi e un codice casuale.", "cm.rs.go": "Accetto e continua",
  "cm.rs.have": "Ripassi pronti da inviare: {n} (ne servono almeno {min}, di parole già viste)",
  "cm.rs.few": "Ancora pochi: continua a studiare. Sotto i {min} ripassi il file avrebbe troppo poco per stimare i parametri. Intanto puoi scaricarlo e guardarlo.",
  "cm.rs.id": "Il tuo codice casuale: {id}", "cm.rs.help": "Il tasto qui sotto apre l'e-mail con il file già allegato (dove il telefono lo permette). Dopo l'invio, i prossimi file conterranno solo i ripassi nuovi.",
  "cm.rs.send": "Invia per e-mail", "cm.rs.download": "Scarica il file", "cm.rs.revoke": "Revoca la partecipazione", "cm.rs.revoked": "Partecipazione revocata: il codice è stato cancellato.",
  "cm.rs.done": "Fatto: {f}. Se l'e-mail non si è aperta, scrivi a", "cm.rs.attach": "Allega a mano il file {f} all'e-mail.", "cm.rs.saved": "File salvato: {f}",
  "cm.rs.subject": "màndarínō · ricerca sul ripasso", "cm.rs.body": "Ciao, ti mando i miei ripassi in forma anonima (file allegato: {f}). Autorizzo l'uso scientifico e la pubblicazione con licenza CC0.",
  "cm.rs.e": "Non sono riuscito a preparare il file. Riprova.", "cm.rs.none": "Non ci sono ancora ripassi da esportare."
});
Object.assign(I18N.zh, {
  "cm.rs.sheetTitle": "记忆研究（ML-FSRS-32）", "cm.rs.h": "开始之前，请仔细阅读",
  "cm.rs.t1": "目的：màndarínō 的复习使用 FSRS-6 加上扩展 ML-FSRS-32，新增的十一个参数目前还只是初始值。要估得准，需要真实学习者的复习记录。",
  "cm.rs.t2": "文件里有什么：每次复习的词、评分、答题用时、练习类型、选项个数、是否只错了声调、你已学汉字的稳定度，以及距上次复习过了几个夜晚；每个词的稳定度和难度。",
  "cm.rs.t3": "文件里还有每次复习的准确时间：由此能看出你几点学习，也就能间接看出你几点睡觉。这正是衡量睡眠影响所需要的。",
  "cm.rs.t4": "文件里没有什么：姓名、电子邮件、IP 地址、位置、手机的识别码、你自己添加的词。里面有一个随机代码，每次发送都一样，用来认出同一个人的记录；它与你本人无关。但你发送文件的电子邮件，会让收件人看到你的邮箱地址。",
  "cm.rs.t5": "如果你发送，就是把这些数据以公有领域（CC0 许可）发布：任何人都可以为研究使用和发布。已经发布的内容无法再撤回。",
  "cm.rs.t6": "你可以随时撤销参与：之后不会再发送任何内容，随机代码也会从这台手机上删除。如需删除尚未发布的数据，请写信到 mandarinoapp@gmail.com 并注明代码。",
  "cm.rs.t7": "研究仅限成年人。应用没有账号，无法核实年龄：确认即表示你声明自己至少 18 岁。",
  "cm.rs.t8": "应用不会自己发送任何东西：文件在手机上生成，你可以先打开阅读。发送由你自己用电子邮件或“分享”完成。",
  "cm.rs.age": "我声明自己至少 18 岁。", "cm.rs.cc0": "我授权以匿名方式将我的复习记录用于科学研究并发布（CC0 许可）。",
  "cm.rs.aware": "我明白文件里包含我复习的时间和一个随机代码。", "cm.rs.go": "同意并继续",
  "cm.rs.have": "可发送的复习记录：{n} 条（至少需要 {min} 条，来自已见过的词）",
  "cm.rs.few": "还不够：请继续学习。少于 {min} 条时，文件太少，无法估计参数。现在你可以先下载并查看。",
  "cm.rs.id": "你的随机代码：{id}", "cm.rs.help": "下面的按钮会打开电子邮件并附上文件（手机支持时）。发送之后，下一个文件只包含新的复习记录。",
  "cm.rs.send": "用电子邮件发送", "cm.rs.download": "下载文件", "cm.rs.revoke": "撤销参与", "cm.rs.revoked": "已撤销参与：随机代码已删除。",
  "cm.rs.done": "完成：{f}。如果电子邮件没有打开，请写信到", "cm.rs.attach": "请手动把文件 {f} 附到电子邮件里。", "cm.rs.saved": "文件已保存：{f}",
  "cm.rs.subject": "màndarínō · 复习研究", "cm.rs.body": "你好，我匿名发送我的复习记录（附件：{f}）。我授权以 CC0 许可用于科学研究并发布。",
  "cm.rs.e": "无法生成文件，请重试。", "cm.rs.none": "还没有可导出的复习记录。"
});
