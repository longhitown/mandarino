# Le otto lezioni pilota (ondata 0): esposizione in linguaggio naturale

Stato: **proposta da approvare** (1 novembre 2026). Non c'è ancora codice. Per ogni lezione il testo descrive che cosa dice ogni sezione, con l'estensione e il rigore di un capitolo di manuale;
il testo definitivo che vedrà chi studia è in cinese (corso di italiano) o in italiano (corso di cinese) e si scrive solo dopo l'approvazione, con gli esempi originali già pronti qui.

**Come sono state controllate.** Per il cinese: tre grammatiche in inglese (*Modern Mandarin Chinese Grammar*, *Basic Chinese: A Grammar and Workbook*, *Chinese: An Essential Grammar*), il testo accademico
italiano *Lingua e letteratura cinese*, l'eserciziario *61 esercitazioni di lingua cinese* e le pagine di MandarinBean. Per l'italiano: le pagine di grammatica di lagrammaticaitaliana.it e le descrizioni
che ho dalla grammatica accademica e dalla glottodidattica (Serianni, Balboni, Tartaglione, *Nuovo Espresso*): questi ultimi **non li ho consultati direttamente**, li uso come
ordine degli argomenti e livello di precisione, e lo dichiaro nel registro delle fonti. Tutti gli esempi sono miei.

---

## Il modello dati proposto

Una lezione è un solo oggetto, un blocco lazy per lezione (`LESSON_<id>`), con questi campi. Un adattatore all'apertura trasforma le lezioni vecchie (`body`, `pattern`, `ex`, `dlg`, `traps`, `quiz`)
in questa forma, così l'interfaccia conosce una sola struttura.

```js
{
  id: "ba", n: 16, corso: "zh",                 // corso: "zh" (cinese per italiani) | "it" (italiano per sinofoni)
  titolo: "Che cosa fai a una cosa: 把", obiettivo: "…",
  svolta: false,                                  // true: lezione «punto di svolta» (richiamo delle basi in testa)
  scopri:  { frasi: [ { t: "…", tr: "…" } ], domanda: "…", risposta: "…" },
  regola:  { enunciato: "…", schema: [ "S", "把", "O", "V + complemento" ],
             condizioni: [ { ok: true, t: "…" }, { ok: false, t: "…" } ] },
  logica:  [ "paragrafo", "paragrafo" ],
  esempi:  [ { gruppo: "sfondo + evento", t: "…", tr: "…", nota: "…" } ],
  contrasti: [ { prompt: "…", opzioni: [ { t: "…", ok: true, perche: "…" }, { t: "…", ok: false, perche: "…" } ] } ],
  dialogo: { titolo: "…", battute: [ { chi: "A", t: "…", tr: "…" } ],
             esercizi: [ { k: "minidialogo", buco: 1, opzioni: [ { t: "…", ok: true, perche: "…" } ] } ] },
  tranello: { errore: "…", perche: "…", esci: "…" },
  curiosi: [ { titolo: "…", t: "…" } ],             // pannelli espandibili, «Per i più curiosi»
  pragmatica: "…",
  esercizi: [ { k: "scegli2" | "buco" | "ordine" | "scrivi" | "trasforma" | "minidialogo", … } ],
  fonti: [ "…" ]                                    // registro interno: non si mostra nell'app
}
```

Tipi di esercizio nuovi: **`scegli2`** (due regole vicine, ogni opzione ha `perche`), **`trasforma`** (`base`, `consegna`, `accetta: [...]`, `rifiutate: [{ t, perche }]`; il confronto ignora spazi e
punteggiatura finale), **`minidialogo`** (un buco dentro 2-3 battute). Il **«Perché è sbagliato?»** è il `perche` dell'opzione scelta, mostrato in una riga sotto la correzione. Le parole di ogni frase passano da
`CP.segment` e sono tocchi che aprono la scheda del vocabolo.

---

# Il corso di italiano (per chi parla cinese)

Il testo che lo studente vede è in cinese; qui è in italiano e le frasi in italiano (originali) hanno la glossa in cinese dove serve.

## 12 · L'imperfetto e il passato prossimo (lezione «punto di svolta»)

**Scopri.** Tre frasi: «Da bambino giocavo ogni giorno in cortile.» (小时候我每天都在院子里玩。) · «Ieri sera ho giocato a carte con mio nonno.» (昨晚我和爷爷打了牌。) ·
«Mentre giocavo a carte, è squillato il telefono.» (我正打着牌，电话响了。). Domanda: *in quale frase il giocare è un fatto concluso e in quale è lo sfondo o un'abitudine? Che cosa cambia nel verbo?* Risposta e passaggio alla regola.

**Regola.** Il passato prossimo presenta un'azione come un **fatto compiuto**, un evento con un inizio e una fine (anche lunghi) o con conseguenze sul presente: *ho mangiato, sono partito*. L'imperfetto presenta
un'azione o uno stato passato **visto dall'interno**, senza dire quando comincia e finisce: sfondo, descrizione, abitudine, azioni che durano insieme: *mangiavo, era, avevo*. Formazione dell'imperfetto
(-avo/-evo/-ivo, con le irregolari *ero, facevo, dicevo, bevevo*) e del passato prossimo (presente di *avere* o *essere* + participio; l'ausiliare *essere* con i verbi di movimento, di cambiamento e con i riflessivi, e il
participio concorda con il soggetto). Marcatori tipici: imperfetto con *di solito, ogni giorno, sempre, mentre, da bambino*; passato prossimo con *ieri, una volta, all'improvviso, poi, alla fine, due volte*.

**Logica.** In cinese il tempo lo dicono le parole di tempo (昨天, 以前) e l'**aspetto** lo dicono le particelle (了 compimento, 过 esperienza, 在/着 svolgimento). In italiano è il verbo a portare insieme il tempo (passato) e
l'aspetto, e chi parla sceglie come presentare la scena: come **fotografia** (passato prossimo: l'evento intero, fermo) o come **ripresa** (imperfetto: la scena che scorre). Una mappa approssimativa, mai biunivoca:
passato prossimo ≈ 了 e 过; imperfetto ≈ 在/着 e 以前常常. Avvertenza esplicita: **了 non è «il passato prossimo»**. «Ieri ero stanco» (昨天我很累) non ha 了 e in italiano è imperfetto; «我要走了» non parla affatto del passato.

**Esempi** (12, in quattro gruppi con una nota ciascuno): sfondo e evento (*Camminavo in centro quando ho visto Luca*); abitudine (*Da piccolo andavo al mare ogni estate*); descrizione di persone, luoghi e tempo (*Era una sera fredda, c'era la nebbia*; *Avevo dieci anni*);
fatto compiuto e durata delimitata (*Ho studiato tre ore*; *Ieri ho comprato una bicicletta*). Poi la coppia dei verbi che cambiano senso: *ho saputo* (ho appreso) / *sapevo* (già lo sapevo); *ho conosciuto* (ho incontrato per la prima volta) / *conoscevo* (già conoscevo).

**Contrasto** (8 esercizi `scegli2`): «Mentre (cucinare), (suonare) il campanello»; «Ogni domenica (andare) dai nonni» / «Domenica scorsa (andare) dai nonni»; «Quando (arrivare) io, lui già (dormire)»; «Ieri (fare) bel tempo, perciò (uscire)»;
ecc. Ogni risposta sbagliata ha il suo perché: «`ho cucinato` presenta la cucina come un fatto concluso, ma qui è lo sfondo in cui avviene il fatto nuovo».

**Dialogo** (4-6 battute): due amici, «Che hai fatto ieri?» — «Ero stanco, quindi sono rimasto a casa. Guardavo un film quando ha chiamato Lucia.» Due esercizi `minidialogo` che chiedono di scegliere il tempo in base a ciò che la persona vuole comunicare.

**Il tranello.** *«Ieri io andare al cinema»*: l'assenza di coniugazione in cinese porta a usare l'infinito, o la stessa forma per tutto; e *«ieri sono stato stanco»* per stati che in italiano vogliono l'imperfetto, perché si trasferisce la regola
«fatto passato = 了». Spiegazione e uscita: prima la persona e il tempo sul verbo; poi la domanda «fatto compiuto o scena?».

**Per i più curiosi.** (1) Nel Nord Italia il passato prossimo ha preso quasi tutto lo spazio del passato remoto, nel Sud il passato remoto resta vivo; nei testi letterari e giornalistici il remoto è più frequente. (2) L'imperfetto «di cortesia»
(*Volevo un caffè*) addolcisce la richiesta; vedi la lezione sul condizionale. (3) L'uso colloquiale dell'imperfetto al posto del condizionale passato e del congiuntivo trapassato (*Se lo sapevo, non venivo*) è corrente nel parlato ma non si scrive.
(4) Aspetto grammaticale e aspetto del verbo: verbi di stato come *essere, avere, sapere* tendono all'imperfetto, verbi di cambiamento al passato prossimo.

**Esercizi** (10-12): `scegli2`, `buco`, `ordine` e due `trasforma` («Oggi leggo mentre mangio» → *Ieri leggevo mentre mangiavo*; «Ogni estate andiamo al mare» → *Da piccoli andavamo al mare ogni estate*).

## 5 · L'accordo di genere e numero

**Scopri.** *il gatto nero · la gatta nera · i gatti neri · le gatte nere.* Domanda: *quali parole cambiano? Che cosa «decide» il cambiamento?* Poi: *la mano piccola, il problema difficile.*

**Regola.** Articolo, aggettivo, participio e pronome **concordano** in genere (maschile/femminile) e numero (singolare/plurale) con il nome a cui si riferiscono. Nomi in *-o* (m), *-a* (f), *-e* (m o f: va imparato); plurali *-i/-e*; aggettivi di due classi (*-o/-a/-i/-e* e *-e/-i*);
articoli *il, lo, l', la, i, gli, le* e *un, uno, una, un'*. Sottogruppi: *-co/-go* (*amico → amici*, *lago → laghi*, ma *greco → greci*), *-cia/-gia* con *i* tonica o no (*farmacia → farmacie*, *arancia → arance*), nomi invariabili (*il caffè → i caffè*, *la città → le città*), plurali con cambio di genere (*l'uovo → le uova*, *il braccio → le braccia*).

**Logica.** Il cinese non ha genere grammaticale e il numero è spesso lasciato al contesto (们, classificatori, quantità). Il genere italiano non è «sesso»: è una **categoria del nome** che si ripercuote su tutto il sintagma, come un effetto domino. La ridondanza ha una funzione: ogni parola
ricorda a chi ascolta di quale nome si parla. Visualizzazione in app: il nome è la tessera di partenza, le altre prendono il suo colore (genere) e il numero con una piccola freccia; si può passare da «mostra la catena» a «nascondi».

**Esempi** (12): catene complete (*le mie amiche italiane sono simpatiche*), nomi in *-e* (*il fiore, la notte, il/la cantante*), nomi in *-ista* (*il turista, la turista, i turisti, le turiste*), eccezioni (*il problema, la mano, il pane*), participi con *essere* (*Maria è arrivata, i ragazzi sono partiti*).

**Contrasto** (8): *il / la* davanti a nomi in *-e* e in *-ma*; *amici / amichi*; *le uova / gli uova*; *un'amica / una amica*; *buono / buon / bel / bello* davanti al nome. Ogni opzione sbagliata con il suo perché.

**Dialogo**: al mercato (*Vorrei due mele rosse e un chilo di pere mature. Sono fresche?*) con esercizi sulla concordanza di aggettivi e quantificatori.

**Il tranello.** *«La gatto nero»* e *«Il mia amica è italiano»*: lo studente aggiunge i suoi tratti di concordanza dove non c'è un modello nella lingua madre, oppure li mette tutti sull'ultima parola. Si corregge con una domanda guida: «chi è il nome?».
E un altro: pensare che il genere sia sempre biologico (*la persona, la guida, il soprano*).

**Per i più curiosi.** Dal latino (tre generi) all'italiano (due): restano tracce del neutro (*le uova*, *le dita*); il maschile «non marcato» per gruppi misti (*i ragazzi*); le forme femminili delle professioni (*la ministra, l'avvocata*) sono oggi in uso e
discusse; *bello/bel/bell'* seguono l'articolo.

**Esercizi** (12): `scegli2`, `buco`, `ordine`, `trasforma` («Il ragazzo italiano è alto» → *Le ragazze italiane sono alte*; «Ho visto il bel film» → plurale), e un `scrivi` con aiuto.

## 8 · Le preposizioni a, in, da, di: una mappa per funzioni

**Scopri.** *Vado a Roma · in Italia · in Sicilia · a Capri · dal medico · al mare · in banca.* Domanda: *in cinese «去» e «在» bastano; perché in italiano la parola dopo «vado» cambia?*

**Regola.** Quattro preposizioni principali, ciascuna con una **funzione di base**: *di* = appartenenza e origine (*il libro di Anna, sono di Napoli*); *a* = destinazione puntuale e stato in un luogo puntuale (città, piccole isole, *casa, scuola*); *in* = destinazione e stato in un luogo «contenitore»
più ampio (paesi, regioni, isole grandi, edifici e luoghi di lavoro: *in Italia, in Toscana, in banca, in ufficio*; mezzi: *in treno, in autobus*); *da* = provenienza e **luogo di una persona** (*vengo da Milano, vado da Marco, dal dentista*), durata dal passato (*da tre anni*). Forme articolate (*a + il = al, in + la = nella, da + i = dai…*).

**Logica.** Il cinese distribuisce la funzione su 在/到/从 e sui localizzatori (里, 上); l'italiano usa poche particelle per molti rapporti e **sceglie in base al tipo di luogo** più che al significato. Regole pratiche, non assolute: città → *a*; paese o regione → *in*; persona → *da*; mezzo → *in* (con *a piedi*, *a cavallo* come eccezioni).

**Esempi** (14, per tipo di luogo): *abito a Milano / in Lombardia / in Italia / in centro / in campagna / al mare / in montagna*; *lavoro in banca / in ufficio / dal commercialista*; *vado a casa / a scuola / all'università*; *arrivo da Pechino / dalla Cina*; mezzi.

**Contrasto** (8 `scegli2`): *a Roma / in Roma*; *in Italia / a Italia*; *a Capri / in Sicilia*; *vado dal medico / al medico*; *da tre anni / per tre anni* (con il verbo al presente o al passato); ogni risposta sbagliata con il suo perché.

**Dialogo**: in stazione, chiedere e dare indicazioni (*Scusi, come arrivo in centro? — Può andare a piedi o prendere l'autobus per Piazza Duomo*).

**Il tranello.** *«Vado a Italia»*, *«Studio in Roma»*, *«Sono da Cina»*: si trasferisce a tutte le preposizioni l'unica logica di 在/到 e non si distingue il tipo di luogo; per la provenienza si usa *da* o *di* a caso (*vengo da Roma, sono di Roma*).

**Per i più curiosi.** (1) *Negli Stati Uniti*, *nel Veneto*: con l'articolo quando il nome è plurale o specifico. (2) *a / ad* davanti a vocale per eufonia. (3) Origine dei valori di *di*: la lezione di grammatica sulla preposizione *di* ne elenca più di venti, di cui la specificazione e l'origine sono le due che servono ai principianti.

**Esercizi** (12): `scegli2`, `buco`, `trasforma` (dall'articolo alla forma articolata), `minidialogo`.

## 21 · Il condizionale: la cortesia in un verbo

**Scopri.** *Voglio un caffè.* e *Vorrei un caffè.* Domanda: *quale suona più cortese? In cinese che cosa si userebbe per ammorbidire?* (请、麻烦、能不能…).

**Regola.** Il condizionale ha due tempi: presente (*vorrei, potrei, mangerei*) e passato (*avrei voluto, sarei andato*). Valori: **cortesia** (*Vorrei, Potrebbe aiutarmi?*), desiderio, consiglio (*Dovresti riposare*), ipotesi (*Se avessi tempo, verrei*),
dubbio o notizia non confermata (*Il ministro sarebbe partito*), futuro nel passato (*Disse che sarebbe venuto*), rimpianto (*Avrei dovuto chiamarti*). Formazione: radice del futuro + *-ei, -esti, -ebbe, -emmo, -este, -ebbero*; radici irregolari (*andr-, dovr-, potr-, vorr-, sapr-, vedr-, verr-, berr-*; *farei, darei, starei, sarei, avrei*).

**Logica.** In cinese la cortesia è affidata a parole (请, 麻烦您, 能不能) e al tono; in italiano il **modo del verbo** crea una distanza: dire *vorrei* invece di *voglio* è «fare un passo indietro» e lasciare all'altra persona la libertà di rispondere. Per questo *Voglio un caffè* suona
come un ordine, mentre in cinese 我要一杯咖啡 al bar è naturale. Scala di cortesia per chiedere: *Dammi → Mi dai → Mi daresti → Mi darebbe (con Lei) → Potrebbe darmi…*

**Esempi** (12): richieste al bar e in negozio, consigli tra amici, ipotesi con *se* + congiuntivo imperfetto, il rimpianto, la notizia non confermata.

**Contrasto** (8 `scegli2`): *Vorrei / Voglio*; *Potresti / Puoi* (tra amici e con uno sconosciuto); *Mi puoi aiutare? / Mi potresti aiutare?*; *Sarei / Ero* nella richiesta; ogni scelta con la sua giustificazione pragmatica.

**Dialogo**: in un negozio di abbigliamento (cliente e commessa) con esercizi che chiedono il registro giusto.

**Il tranello.** *Voglio…* come equivalente di 我要; il condizionale letto come «incertezza» (*Vorrei un caffè, ma non sono sicuro*); e la formazione sbagliata *voglierei, andarei*.

**Per i più curiosi.** Il condizionale «giornalistico» e il futuro nel passato; l'imperfetto di cortesia (*Volevo un caffè*), più colloquiale; *avrei dovuto* e il rimpianto; legame con il periodo ipotetico.

**Pragmatica.** Quando e con chi: *Vorrei* è standard al bar e nei negozi; con persone sconosciute o più anziane si preferisce il *Lei* e il condizionale; tra amici basta *Mi dai?*.

**Esercizi** (10-12): `scegli2`, `buco`, `trasforma` (*Voglio un biglietto* → *Vorrei un biglietto*; *Mi puoi aiutare?* → *Mi potresti aiutare?*), `minidialogo`.


---

# Il corso di cinese (per italiani)

Il testo che vede chi studia è in italiano; gli esempi in cinese sono originali, con pinyin automatico e parole tutte da verificare contro il vocabolario in build (`checkLessons`).

## 16 · Che cosa fai a una cosa: 把

**Scopri.** Tre frasi: *我把作业做完了。 · 他把杯子放在桌子上。 · 你把窗户打开吧。* e, per confronto, *我做完作业了。* Domanda: *dove sta l'oggetto (作业, 杯子, 窗户) rispetto al verbo? E che cosa segue il verbo, ogni volta?*
Risposta: l'oggetto sta **prima** del verbo, dietro 把; il verbo non è mai solo: è seguito da qualcosa che dice che cosa succede all'oggetto (*完*, *在桌子上*, *开*).

**Regola.** Schema: **soggetto + 把 + oggetto + verbo + qualcosa che dice che cosa accade all'oggetto.** La costruzione risponde alla domanda «che cosa fa il soggetto a questa cosa?» (la letteratura la chiama *costruzione di disposizione*). Condizioni:
1. **Oggetto noto o specifico.** *把那本书买了* (quel libro, già noto); non *把一本书买了*. Un oggetto generico è possibile in contesti argomentativi.
2. **Verbo «delimitato»**, cioè mai nudo: ha dopo di sé un complemento di risultato (*做完, 洗干净*), di direzione (*拿出去, 带回来*), di luogo o destinazione (*放在…上, 送到…*), un 了 (con verbi di cambiamento: *忘了, 卖了*), una reduplicazione (*看看*), un numero di volte o una durata controllabile (*看了两遍*), un dativo (*给了我*), o un esito (*切成两半, 翻译成意大利语*).
3. **Negazione, modali e avverbi di frase vanno PRIMA di 把**: *我没把门关上*, *你应该把药吃了*, *别把杯子放在那里*; mai dopo.
4. **Chi agisce** può anche non volerlo: *我把钥匙丢了* (involontario) è corretto.
5. **Non si usa** con verbi di stato o di inclinazione (*是, 有, 喜欢, 像*), con i risultativi di percezione (*看见, 听懂*), né con oggetti creati dall'azione.

**Logica.** In italiano l'oggetto resta dopo il verbo (SVO). In cinese lo spazio dopo il verbo è «riservato» al **risultato**; per dirlo, l'oggetto si **sposta prima** e 把 lo introduce. Il ragionamento è: *nomino la cosa su cui agisco (che quindi è già nota), poi dico che cosa le accade.* Per questo l'oggetto è definito e il verbo non può
essere nudo: manca il «dove va a finire». Non è «il complemento oggetto cinese»: moltissimi oggetti non vogliono 把 (*我喜欢这个汉字*), e in italiano la resa è spesso un normale SVO o un passivo. Storicamente 把 è un verbo che significa *tenere in mano, afferrare*: la costruzione è «prendo la cosa e le faccio…».

**Esempi** (12, in gruppi): risultato (*我把作业做完了。 他把衣服洗干净了。*); collocazione (*她把花放在桌子上。 请把书放到我的包里。*); direzione (*把东西拿出去。 把孩子带回来。*); dativo (*他把钱给了我。 我把这本书借给他了。*); trasformazione (*把苹果切成两半。 把这句话翻译成意大利语。*);
cambiamento (*他把手机忘在家里了。 我把那件衣服卖了。*); richieste (*把门关上！ 请把窗户打开。 你把这些药吃了。*); reduplicazione (*你把这篇课文看看。*); negazione (*我还没把作业写完。 别把杯子放在那里。*); involontario (*我把钥匙丢了。 他把杯子打碎了。*).

**Contrasto** (8 `scegli2`, ognuno con il suo perché): *我把门关 / 我把门关上了* (verbo nudo); *我没把门关上 / 我把门没关上* (negazione prima); *他把那本书买了 / 他把一本书买了* (oggetto noto); *我把这个汉字喜欢 / 我喜欢这个汉字* (verbo di inclinazione);
*杯子___他打碎了 (被/把)* e *他___杯子打碎了* (chi è soggetto: chi subisce o chi agisce); *我把作业都做完了 / 我都把作业做完了* (a che cosa si riferisce 都: all'oggetto o a tutti i soggetti).

**Dialogo** (6 battute): un genitore e un figlio che ordinano la stanza (*你把作业做完了吗？ — 做完了。 — 那你把房间收拾一下，把玩具放回箱子里。 — 好的，可是我还没把书包整理好。*) con tre `minidialogo` (scegliere 把, 被 o la frase senza).

**Il tranello.** L'italofono trasferisce l'ordine SVO e dice *我关门* (verbo nudo, di per sé non sbagliato ma senza risultato) oppure impone 把 a ogni verbo transitivo (*我把你爱*), o mette la negazione dopo (*我把门不关上*). Causa: si pensa a 把 come «segno del complemento oggetto». Rimedio: la domanda
«dopo il verbo c'è qualcosa che dice che cosa succede all'oggetto?». (Nota di registro: gli errori tipici degli italofoni non sono documentati nei manuali; sono un'ipotesi didattica ricavata dal confronto delle due strutture.)

**Per i più curiosi.** (1) *Disposizione*: il nome tecnico viene dalla grammatica cinese del Novecento; oggi si preferisce parlare di «manipolazione» dell'oggetto. (2) 把 e 被 sono speculari: con 把 l'oggetto è nominato dopo chi agisce, con 被 chi subisce diventa soggetto (*他把杯子打碎了* / *杯子被他打碎了*);
il cinese usa 把 o il semplice «tema + commento» dove l'italiano userebbe un passivo. (3) I manuali non concordano su come descrivere il verbo (qualcuno parla di «complemento di risultato», qualcuno di «azione delimitata»), ma convergono sull'estensione dei casi.
(4) Due soli verbi fanno da «tuttofare» con 把: *弄* e *搞* (*把门弄坏了*).

**Pragmatica.** 把 è la forma naturale per richieste e comandi (*把门关上！*); l'uso generico con 把 suona argomentativo; la forma non è obbligatoria: spesso esiste anche la frase senza 把 (*我做完作业了*), e la differenza è di enfasi sull'effetto subito dalla cosa.

**Esercizi** (12): `scegli2`, `buco`, `ordine` (*我 / 把 / 作业 / 做完 / 了*), `scrivi`, e tre `trasforma`: *我关上了门* → *我把门关上了*; *你吃药！* → *你把药吃了*; *他打碎了杯子* → *杯子被他打碎了*.

## 12 · Fatto e finito: 了 (lezione «punto di svolta»)

**Scopri.** *我昨天去了北京。 · 我昨天很累。 · 明天我吃了饭就去找你。 · 天黑了。* Domanda: *in quali frasi c'è 了? Sono tutte nel passato?* Risposta: c'è 了 nella prima, nella terza e nella quarta; la terza parla del **futuro**; la seconda parla del passato e **non** ha 了.

**Regola.** Ci sono **due 了**, con funzioni diverse (anche se si scrivono allo stesso modo):
1. **了 dopo il verbo**: l'azione è vista come **completa e delimitata** (aspetto perfettivo): *我买了一本书。* Serve un oggetto quantificato o specificato (*两杯, 那本*) oppure un seguito (*另一 clausola*): *我吃了饭* da solo suona incompleto, *我吃了饭就去* no.
2. **了 a fine frase**: segnala una **situazione nuova** o un cambiamento rispetto a prima: *天黑了。 我饿了。 他三十岁了。 我不抽烟了。 快下雨了。*
Si combinano (*我买了书了*). **Negazione**: al passato si usa 没(有) + verbo, **senza 了** (*我没买书*). **Non si usa 了** con azioni abituali (*我以前每天跑步*), con stati senza cambiamento (*昨天很冷*) e con *是/有*; e **non** tra verbo e risultato (*写完了*, mai *写了完*).

**Logica.** Il cinese distingue l'**aspetto**, non il tempo: 了 mette un *confine* all'azione o segna un *aggiornamento* della situazione; che sia ieri o domani lo dicono altre parole. Immagine: 了 dopo il verbo è un timbro «fatto»; 了 a fine frase è un cartello «aggiornato». Per questo *明天…吃了饭* è corretto.
Non è il passato prossimo: *昨天很累* (passato, stato) non ha 了; *我要走了* parla del futuro vicino. Un buon test: *è successo qualcosa di nuovo?* → sì, 了.

**Esempi** (14): compimento (*他喝了三杯茶。*), sequenza (*我下了课就回家。*), cambiamento (*天黑了。 我饿了。 他三十岁了。*), «non più» (*我不抽烟了。*), imminenza (*快下雨了。 我们要走了。*), informazione nuova (*我知道了。 好了。*), negazione (*我没买书。 昨天我没去。*), abitudine senza 了 (*我以前每天跑步。*), stato passato senza 了 (*昨天很冷。*), domanda e risposta (*你吃饭了吗？ — 吃了。 — 我还没吃。*).

**Contrasto** (8 `scegli2`): *我没买了书 / 我没买书*; *写完了 / 写了完*; *他去了北京 / 他去过北京* (l'evento è avvenuto, di solito lo si pensa ancora là, a meno che il contesto dica altro / l'esperienza: ci è stato almeno una volta); *昨天很冷了 / 昨天很冷*;
*我每天跑步了 / 我每天跑步*; *我吃了饭 / 我吃了饭就去* (frase incompleta o completa); ognuno con il suo perché.

**Dialogo** (6 battute) tra due amici a ora di pranzo, con tre `minidialogo` («你吃饭＿吗？», «我还没吃＿», «天＿»).

**Il tranello.** Doppio. (1) *La spia del passato*: l'italiano mette il passato dappertutto, e il cinese 了 dappertutto (*昨天我很累了*, *我以前每天跑步了*). (2) *L'assenza di 了 dove serve*: *我吃饭* per «ho mangiato», senza nulla che chiuda; e il calco *我没吃了*.
Rimedio: due domande, «c'è un confine o un cambiamento?» e «è uno stato, un'abitudine o un fatto singolo?».

**Per i più curiosi.** (1) I due 了 hanno origini storiche diverse: quello dopo il verbo viene dal verbo *finire* (了, *liǎo*); quello di fine frase si è sviluppato come particella di aggiornamento. (2) I manuali non concordano su come classificare *我吃饭了*: per alcuni è 了 perfettivo
dopo un oggetto non modificato, per altri è un 了 di fine frase, o i due insieme. (3) Con i verbi di stato e gli aggettivi 了 non indica compimento ma il **diventare** (*天黑了* = è diventato buio). (4) In *听不了/吃得了* c'è un altro 了 (*liǎo*, «riuscire»): non è questo.

**Pragmatica.** 了 finale implica il **coinvolgimento di chi parla** e un'informazione nuova per chi ascolta (*我走了* = «adesso vado»); molto frequente nel parlato e nelle lettere; non è obbligatorio, e in nove contesti d'uso di norma si evita (abitudini, aggettivi, *是/有*, durata o numero di volte, luogo o maniera, *才*).

**Esercizi** (12): `scegli2`, `buco`, `ordine`, `scrivi`, e tre `trasforma`: *我昨天去北京* → *我昨天去了北京*; *天很黑* → *天黑了*; *我抽烟* → *我不抽烟了*.


## 32 · Ancora, di nuovo: 还, 再, 又

**Scopri.** *他昨天又来了。 · 请你明天再来。 · 他还在睡觉。 · 我还想再吃一个。* Domanda: *in italiano tutte e quattro si possono rendere con «ancora» o «di nuovo». Che cosa distingue 又, 再 e 还? Guarda il momento: la cosa è già successa, deve ancora succedere, o non si è mai interrotta?*

**Regola.** Tre avverbi che stanno **davanti al verbo**, con tre idee diverse:
1. **又** = la **ripetizione è un fatto**: succede (o è già successa) di nuovo. Di solito con 了 finale: *他又迟到了。* Si usa anche per ciò che è già nel calendario: *明天又是星期一了。*
2. **再** = la **ripetizione è un progetto, una richiesta o un rinvio**: non è ancora successa. Niente 了: *请再说一遍。 明天再来吧。* Nelle negative: *不再* (non più, per scelta) e *再也不* (mai più): *我不再抽烟了。 我再也不去那家饭店了。*
3. **还** non è ripetizione: è **continuazione** («tuttora»: *他还在睡觉*; negativa *还没*: «non ancora»), **aggiunta** («inoltre»: *我还想买一本书*, *还有一个问题*) e, nei confronti, «ancora più» (*今天比昨天还冷*).
Posizioni: tutti e tre stanno **prima** della negazione (*还没吃*, mai *没还吃*).

**Logica.** «Ancora» e «di nuovo» in italiano mescolano **tre idee che il cinese tiene separate**: (a) l'azione **continua** (nessuna pausa → 还); (b) l'azione **si ripete e l'abbiamo vista** (→ 又); (c) l'azione **si ripeterà o si vuole che si ripeta** (→ 再). Due domande bastano: *c'è stata una pausa?* e *la ripetizione è un fatto o un progetto?*
Una regola pratica che aiuta: 又 guarda indietro (è successo), 再 guarda avanti (succederà). Ma è un'approssimazione: 又 può guardare avanti quando la ripetizione è già decisa dal calendario (*又要开会了*), e 再 può guardare indietro quando la ripetizione era attesa e non è avvenuta (*他没再来过*). Il criterio preciso è **effettivo** contro **progettato**.

**Esempi** (14, in quattro gruppi): 又 (*他昨天又迟到了。 你怎么又忘了？ 明天又是星期一了。*); 再 (*请再说一遍。 我想再看一次。 明天再来吧。 我不再抽烟了。 我再也不去那家饭店了。*); 还 continuazione (*他还在睡觉。 你还记得我吗？ 我还没吃饭。*); 还 aggiunta e confronti (*我还想买一本书。 还有一个问题。 今天比昨天还冷。*).

**Contrasto** (8 `scegli2`, ognuno con il suo perché): *昨天他(又/再)来了*; *请你明天(再/又)来*; *他(还/又)在睡觉*; *我(还没/没还)吃饭*; *我不(再/又)抽烟了*; *他(又/再)要迟到了！* (calendario o previsione: 又); *今天比昨天(还/再)冷*; *我们(再/又)吃一碗吧*.

**Dialogo** (6 battute): *你怎么又迟到了？ — 对不起，地铁又坏了。 — 下次别再迟到了！ — 好，我不会再迟到了。 — 你还没吃早饭吧？ — 还没。* con tre `minidialogo` («又», «再», «还没»).

**Il tranello.** Una sola parola italiana, «ancora», si traduce con tre parole diverse e lo studente ne sceglie una a caso: *他又在睡觉* per «dorme ancora», *他昨天再来了* per «è venuto di nuovo ieri», *我不还吃了* per «non ho ancora mangiato». Rimedio: le due domande della logica prima di scegliere.

**Per i più curiosi.** (1) *再* ha altri usi: *再见*, *再说* («inoltre, anzi»), *再也不*. (2) *又…又…* («sia… sia…», *又高又大*) è un'altra struttura. (3) Non è vero che «solo 再 ha forme negative»: *还没* e *还不* esistono, e 不再 / 没再 hanno sfumature diverse (abitudine o scelta / fatto). (4) I manuali presentano il contrasto in due modi (passato contro futuro; effettivo contro progettato): la nostra regola unisce i due.
(5) *还* come «inoltre» si confronta con 也: 也 aggiunge qualsiasi informazione, 还 solo azioni o situazioni.

**Pragmatica.** *又* in una domanda («你怎么又…？») spesso porta sorpresa o fastidio; *再* può essere un rinvio gentile e a volte un rifiuto morbido (*改天再说*: ne riparliamo un'altra volta). (Questi due giudizi d'uso non sono formulati nei manuali consultati: da verificare con un madrelingua.)

**Esercizi** (12): `scegli2`, `buco`, `ordine`, `scrivi`, `trasforma` (*他迟到了* → *他又迟到了*; *请说一遍* → *请再说一遍*; *他睡觉* → *他还在睡觉*).

## 33 · Presto o tardi: 就 e 才

**Scopri.** *他八点就到了。 · 他十点才到。 · 我就要一杯水。 · 他才五岁。* Domanda: *le prime due dicono l'ora in cui arriva: chi sta giudicando, e che cosa pensa di quell'ora? E nelle ultime due, che cosa è «poco» o «tanto»?*

**Regola.** Entrambi stanno davanti al verbo e dicono come chi parla **giudica** il momento o la quantità rispetto a ciò che si aspettava.
- **就**: **anticipo e rapidità** («già, presto, subito»: *他八点就到了*); **sequenza immediata** (*我下了课就回家*; *一…就…*, *就要…了* «sta per»); **conseguenza** (*如果下雨，我们就不去*; *只要你来，我就高兴*); **unicità o identificazione** («solo, proprio»: *我家就两口人。 这就是我的家。*).
- **才**: **ritardo e fatica** («solo ora, solo dopo»: *他十点才到*); **condizione necessaria** (*只有努力，才能成功*; *你来了，我才走*); **quantità inferiore all'atteso** (*他才五岁*).
Vincoli: **才 non si usa dopo la negazione** e, nella frase principale, **non prende il 了 perfettivo** (*他十点才到*, mai *他十点才到了*); **就** si accompagna spesso a 了 quando indica un cambiamento (*他八点就到了*), ma non lo richiede.

**Logica.** Tutto dipende da un'**aspettativa implicita**: la stessa ora può essere «presto» o «tardi» a seconda di chi la giudica. 就 dice «è andata meglio, più in fretta, con meno passaggi del previsto»; 才 dice «è costato di più: ho dovuto aspettare, c'è voluta una condizione». Per questo non esiste una traduzione fissa: in italiano servono «già», «solo», «appena»,
«non… finché» a seconda del contesto. Per scegliere: *a me sembra presto/facile (→ 就) o tardi/difficile (→ 才)?*

**Esempi** (14): tempo (*他六点就起床了。 他九点才起床。 火车十点才开。*); durata (*他学了一年就会说中文了。 他学了三年才会说。*); quantità (*我就要一杯水。 他才五岁。*); sequenza (*吃了饭我们就走。 我下了课就回家。*); condizione (*如果下雨，我们就不去。 只有努力，才能成功。 只要你来，我就高兴。*); identificazione (*这就是我的家。 我就是小王。*).

**Contrasto** (8 `scegli2`): *他八点上课，七点(就/才)到了* e *九点(才/就)到*; *只有努力(才/就)能成功* e *如果下雨，我们(就/才)不去*; *他(才/就)五岁* e *我家(就/才)两口人*; *他十点才到 / 他十点才到了* (il 了 non va); *我(没才/还没)吃饭*; *吃了饭我(就/才)去 / 你吃了饭(才/就)能去*.

**Dialogo** (6 battute): *你几点起床？ — 我六点就起床了，你呢？ — 我九点才起床。 — 这么晚！ — 昨天工作到很晚，所以今天九点才起。* con tre `minidialogo` che cambiano il giudizio di chi parla.

**Il tranello.** (1) Rendere «già» con 已经 dove serve 就 (*他八点已经到* suona incompleto) e viceversa; (2) imparare «才 = tardi» e basta, perdendo *他才五岁* («solo cinque anni»); (3) *他十点才到了*, che mescola l'aspetto. Rimedio: dire a voce «è presto per me?» prima di scegliere.

**Per i più curiosi.** (1) *只有…才…* e *如果/只要…就…* sono correlazioni: 才 introduce una condizione unica, 就 una conseguenza. (2) *到…才…* («non… fino a») contro *到…就…* («già entro»). (3) Con *以前* il 就 di sequenza non è accettato da molti parlanti e prende il valore di «solo». (4) I manuali descrivono la coppia con due griglie: logico-sequenziale (valori di «solo», «allora», «solo dopo») oppure temporale (conseguenza); noi le mettiamo insieme.
(5) 就 e 只 si sovrappongono nel senso di «solo», ma 只 non ha le altre funzioni di 就.

**Pragmatica.** Entrambi portano l'atteggiamento di chi parla: 才 può suonare di lamentela, 就 di sorpresa o di elogio; senza contesto una frase come *他八点才到* è giudicante, quindi in una situazione di cortesia si accompagna con una spiegazione (*他八点才到，因为路上堵车*).

**Esercizi** (12): `scegli2`, `buco`, `ordine`, `scrivi`, `trasforma` (*他八点到* → *他八点就到了* (presto) / *他十点才到* (tardi); *他五岁* → *他才五岁*).

---

# Fonti consultate, disaccordi e lacune

**Che cosa ha servito davvero** (il registro interno completo andrà nei dati di ogni lezione):
- *Modern Mandarin Chinese Grammar* (descrizione sistematica: 把, 被, 了, 过, 着, 还/再/又, 就/才, con le pagine), *Chinese: An Essential Grammar* e *Basic Chinese: A Grammar and Workbook* (stessa area, con letture diverse: vedi sotto).
- MandarinBean (spiegazioni divulgative, con avvertenze sui punti troppo semplificati: «了 = passato», «solo 再 ha forme negative», il «tono neutro» di 就/才, le chiavi di molti esercizi contestate nei commenti).
- lagrammaticaitaliana.it (solo le lezioni su imperfetto, passato prossimo, preposizione *di*, condizionale, genere e numero degli aggettivi).

**Che cosa NON ha servito** (lo dico perché non credi di avere più fonti di quante ne abbiamo):
- *61 esercitazioni di lingua cinese* non è un eserciziario: è la guida didattica 2007/08 di una facoltà (descrive un corso), quindi può darci solo il programma.
- *Il cinese per il lavoro* è un'anteprima di circa 11 pagine di livello avanzato: non tocca questi argomenti.
- *Lingua e letteratura cinese* (2014) è un corso introduttivo: dà solo la terminologia italiana («particella modale», «particella strutturale») e non tratta 把, 了, 还/再/又, 就/才.
- Gli elenchi del *New HSK Vocabulary* non sono stati ancora usati: servono per controllare il livello del lessico degli esempi, a lezioni scritte.

**Disaccordi tra i manuali, scelti come segue:** 了 (*我吃饭了*: perfettivo o di fine frase: le due letture convivono nella lezione); 把 (verbo «delimitato» o «complemento di risultato»: stessa estensione, descriviamo i casi); 还/再/又 (passato/futuro o effettivo/progettato: usiamo il secondo con il primo come regola pratica).

**Lacune (non documentate nelle fonti consultate):** gli errori tipici degli italofoni sul cinese e dei sinofoni sull'italiano; i giudizi di registro e di sfumatura di 又, 再, 把, 就, 才. Sono scritti come ipotesi didattiche, e vanno sul **registro interno** con la dicitura «non documentato», da confermare appena c'è la rilettura di un madrelingua.
Per l'italiano **mancano** le fonti accademiche lette direttamente (Serianni, Balboni, Tartaglione) e le pagine Treccani: se hai quei libri in forma legittima o mi indichi gli indirizzi delle voci Treccani, rafforziamo le quattro lezioni di italiano prima dell'approvazione.
