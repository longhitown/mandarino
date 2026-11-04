# Il motore del ripasso di màndarínō

màndarínō decide quando riproporti una parola con **FSRS-6**, un algoritmo di ripetizione dilazionata solido, pubblicato e già provato dalla comunità di Open Spaced Repetition su milioni di ripassi reali. Sopra FSRS-6 abbiamo aggiunto **modifiche sperimentali**, chiamate ML-FSRS-32: undici parametri pensati per le difficoltà del cinese per chi parla italiano. Tutto gira sul tuo telefono o sul tuo computer: nessun dato di studio lascia il dispositivo (vedi [Privacy](../PRIVACY.md)).

**In breve, senza giri di parole**
- FSRS-6 è la parte solida. Le modifiche sperimentali **potrebbero** migliorare i ripassi, ma non sono provate su studenti veri: le abbiamo provate soltanto con simulazioni, e le simulazioni sono sintetiche.
- Un terzo livello, **ML-FSRS-NET**, oggi è soltanto in *modalità ombra*: osserva i ripassi sul tuo dispositivo e misura se avrebbe previsto meglio, ma **non decide mai** un intervallo e non invia nulla.
- Per sapere se le modifiche funzionano ci affidiamo alla community: la ricerca sulla memoria è **volontaria**, spenta di base, con consenso (opt-in) e revoca (opt-out) sempre disponibili. Niente viene tracciato automaticamente.

Questa pagina dice che cosa fa il motore, che cosa è già attivo, che cosa abbiamo simulato e che cosa no, quanto ci si può fidare dei numeri e a chi appartiene il lavoro.

## Che cosa cambia rispetto a FSRS-6

FSRS-6 tratta ogni risposta allo stesso modo: giusta o sbagliata. ML-FSRS-32 tiene conto di quattro cose in più, tutte presenti nell'app.

- **Hai sbagliato solo il tono.** Con FSRS-6 la parola perde quasi tutta la stabilità e torna dopo 10 minuti. Con ML-FSRS-32 la parola resta in ripasso e conserva una parte del ricordo, tanto più quanto era ancora fresco.
- **Che esercizio hai fatto.** Scrivere vale più che riconoscere, e riconoscere vale più che scegliere tra quattro opzioni, perché a caso si indovina una volta su quattro (una volta su due, con due opzioni).
- **C'era una frase d'aiuto.** Negli esercizi con una frase (buco, ordina, minidialogo) la risposta è suggerita dal contesto: l'intervallo cresce un po' meno.
- **Conosci già i caratteri.** In una parola di più caratteri contano i caratteri che studi già: se conosci 电 e 脑, 电脑 parte più facile e più stabile.

### Esempi, calcolati con il motore dell'app

Gli intervalli sono senza la piccola variazione casuale che l'app aggiunge per non far arrivare tutte le parole nello stesso giorno. Gli esempi usano la ritenzione al 90% (il valore predefinito).

| Situazione | FSRS-6 | ML-FSRS-32 |
|---|---|---|
| Parola con stabilità 45 giorni, ripassata dopo 40 giorni, sbagli solo il tono | stabilità 2,75 giorni, riapprendimento di 10 minuti | stabilità 20,7 giorni, resta in ripasso, torna dopo 21 giorni |
| Parola con stabilità 8,3 giorni (difficoltà 5), ripassata dopo 8 giorni, risposta «Bene»: riconoscimento | 27 giorni | 27 giorni (identico) |
| La stessa, con scelta tra 4 opzioni | 27 giorni | 22 giorni |
| La stessa, con scelta tra 2 opzioni | 27 giorni | 17 giorni |
| La stessa, scritta a memoria | 27 giorni | 35 giorni |
| La stessa, con una frase d'aiuto (buco, ordina) | 27 giorni | 22 giorni |
| Parola composta nuova da 电 (stabilità 35) e 脑 (stabilità 25), risposta «Bene» | stabilità iniziale 2,31 giorni, difficoltà 2,12 | stabilità iniziale 3,68 giorni, difficoltà 1,72 |

Senza informazioni sull'esercizio, o con il parametro `dial` a 0, ML-FSRS-32 dà esattamente gli stessi risultati di FSRS-6.

## Che cosa è attivo oggi e che cosa no

Sono attivi tutti i fattori: errore del solo tono, tipo di esercizio, scelta multipla, frase d'aiuto, caratteri già noti, rapidità di risposta e sonno.

- **Rapidità di risposta.** Una risposta più veloce del tuo solito conta un po' di più, una più lenta un po' di meno (tra +12% e −18% dell'incremento). Il «solito» è la media mobile dei tuoi ultimi tempi di risposta, uno per tipo di esercizio (scegliere e scrivere hanno tempi diversi), e sta solo su questo dispositivo, fuori dai backup. Finché non c'è, vale 2500 ms.
- **Sonno.** L'app non sa quando vai a dormire: conta le notti come i cambi di giorno di studio (le 4 del mattino) dall'ultimo ripasso. Il fattore è piccolo (al massimo il 10% in più, di solito meno) e si esaurisce quando la parola è ormai stabile.
- Come tutto il resto, anche questi due fattori usano parametri di partenza, non misurati su studenti veri.

## Quanto ci si può fidare

- **I primi 21 parametri sono quelli di FSRS-6**, stimati dalla comunità di Open Spaced Repetition su ripassi reali. Non li abbiamo toccati.
- **Gli undici parametri aggiunti (w21–w31) sono valori di partenza.** Li abbiamo scelti dalla letteratura sulla memoria e dal buon senso didattico, e **non sono stati stimati su ripassi di studenti veri**. Gli studi citati sotto ispirano le scelte; non forniscono quei numeri.
- **Il miglioramento misurato in laboratorio non è una prova sugli studenti.** Un ottimizzatore ha ridotto l'errore da 0,3072 a 0,2905 (−5,4%), ma su ripassi simulati con un modello scritto da noi: dimostra che il calcolo è coerente, non che il metodo funzioni meglio per chi studia. I risultati delle altre simulazioni, e perché valgono solo come prova di meccanismo, sono nella sezione «Che cosa abbiamo simulato». Se un parametro usciva dall'ottimizzatore con un valore poco credibile, abbiamo tenuto quello di partenza.
- **Nessuna garanzia di risultati.** Non abbiamo misurato se ML-FSRS-32 faccia imparare di più. Quando ci saranno ripassi reali, raccolti in forma anonima e con il consenso di chi studia, ristimeremo w21–w31 e confronteremo con FSRS-6.
- **Che cosa è verificato.** Il motore è provato con 237 controlli automatici, tra cui: senza informazioni sull'esercizio dà gli stessi risultati di FSRS-6 su 400 ripassi casuali; un richiamo riuscito non fa mai scendere la stabilità; l'effetto degli esercizi sull'incremento resta tra 0,4 e 1,8 volte quello di FSRS-6.

### Ricerca facoltativa

Per ristimare w21–w31, e per sapere se ML-FSRS-NET può un giorno prendere il posto di FSRS-6, servono ripassi veri: solo la community può dircelo. In Impostazioni → Comunità e voci c'è «Ricerca sulla memoria», **volontaria e spenta di base**, con consenso (opt-in) e «Revoca la partecipazione» (opt-out) sempre disponibili: se accetti il foglio del consenso (maggiorenni, licenza CC0) l'app prepara sul telefono un file con i tuoi ripassi in forma anonima, che puoi leggere e poi mandare con l'e-mail o con Condividi. L'app non invia niente da sola. Il file contiene l'ora di ogni ripasso (quindi si vede a che ora studi) e un codice casuale, lo stesso a ogni invio; non contiene nome, e-mail, indirizzo IP, posizione né le parole che hai aggiunto tu. Si può mandare dopo almeno 300 ripassi di parole già viste; la soglia è un minimo pratico, perché sotto quel numero i ripassi che toccano i parametri nuovi sono troppo pochi. Revocare la partecipazione cancella il codice casuale dal telefono; quello che hai già mandato e che è già stato pubblicato (licenza CC0) non si può più ritirare. Il dettaglio, anche per la privacy, è in [Privacy](../PRIVACY.md).

### I parametri aggiunti

| Parametro | Valore | A che cosa serve |
|---|---|---|
| w21 | 0,8158 | quanto conta il tipo di esercizio (scrivere, riconoscere) |
| w22 | 1,0 | sconto per la scelta multipla: pesa come 1 su k |
| w23 | 0,2 | quanto si conserva se sbagli scrivendo |
| w24, w25 | 0,12 e 0,18 | bonus per la risposta rapida e sconto per quella lenta |
| w26, w27 | 0,5 e 0,5 | quanta stabilità si salva e quanto cresce la difficoltà se sbagli solo il tono |
| w28, w29 | 0,4 e 0,4 | vantaggio dai caratteri già noti, su stabilità e su difficoltà iniziale |
| w30 | 0,35 | sconto quando c'è una frase d'aiuto |
| w31 | 0,1 | consolidamento dopo qualche notte |

Il codice è in [src/core/fsrs.js](https://github.com/longhitown/mandarino/blob/main/src/core/fsrs.js) (ML-FSRS-32) e, per il candidato in ombra, in `src/core/fsrs7.js`, `guard.js`, `head.js`, `mlnet.js` e `mlnet-ombra.js`; il test automatico in `tools/unit.mjs`.

## Che cosa abbiamo simulato (e che cosa no)

Abbiamo provato le modifiche con studenti **virtuali**: mondi simulati in cui ogni studente ha una memoria generata da un modello scritto da noi. Servono a collaudare il codice, i limiti dei parametri e le garanzie di sicurezza. **Non possono dire se il metodo funzioni meglio per una persona vera**: un simulatore restituisce quello che gli si è messo dentro. Per questo tutto ciò che segue è una prova di meccanismo, non una prova di efficacia.

| Prova | Che cosa è stato fatto | Esito |
|---|---|---|
| Ripassi simulati | 39 mondi sintetici, **1.053.125 ripassi valutati** | base per le prove sotto |
| Adattamento per utente | un solo coefficiente di decadimento stimato per ogni studente (già nell'app) | è il guadagno più grande: circa −0,018 di perdita logaritmica |
| Parametri w21–w31 | stesso confronto, con e senza le undici modifiche | spostano il tempo di studio di circa ±1–3%; nella prima serie di simulazioni ML-FSRS-32 studia circa il 2,7% in meno di FSRS-6 a parità di conoscenza |
| Ciclo chiuso | 16 mondi, 6 motori, 3 ritenzioni richieste (85%, 90%, 95%): il motore sceglie davvero quando ripassare | a parità di ritenzione ottenuta, ML-FSRS-32 studia il 4,8% in meno di FSRS-6 a 0,82 (circa 115 minuti su 2.500, meno in 9 mondi su 10), il 2,1% in meno a 0,85 e praticamente uguale a 0,88 |
| FSRS-7 (formule di fsrs-rs) | stesso ciclo chiuso, con i parametri di partenza | **nessun vantaggio** su FSRS-6 (a 0,85 anche il 3,7% in più di tempo): la forza di FSRS-7 viene dai suoi 34 parametri stimati per ogni utente |
| Calibrazione online | correzione bayesiana per utente sulle probabilità | **nessun guadagno netto** nel ciclo chiuso; sulle sole probabilità, in prove a parte, riduce l'errore (da 0,4662 a 0,4439 di perdita logaritmica su 450 studenti virtuali) |
| Ritenzione richiesta e ottenuta | in tutti i motori | la ritenzione realmente ottenuta resta **circa 6 punti sotto** quella richiesta (in media −0,066 per FSRS-6, −0,054 per FSRS-7): il cursore della ritenzione è un'indicazione, non una promessa |
| Verifica di FSRS-7 | 12 milioni di transizioni confrontate con l'implementazione Rust ufficiale | errore relativo mediano sulla probabilità di ricordare 2,6·10⁻⁸ |
| Rete di sicurezza | 20.000 flussi simulati in cui il candidato è peggiore, e prove di guasto | 0 adozioni sbagliate su 20.000; un candidato che si rompe viene escluso dopo 55 ripassi (mediana, 1000 prove su 1000) |

Che cosa **non** abbiamo: ripassi di studenti veri. I dati pubblici più grandi (ripassi di Anki) hanno una licenza che ne vieta l'uso in questo contesto senza permesso scritto, che abbiamo chiesto e che non c'è ancora: **per questo nessun numero del motore deriva da dati umani di terzi**. I rapporti completi delle simulazioni non sono ancora nel repository.

Per confronto, il benchmark pubblico di Open Spaced Repetition (dati di 10.000 utenti Anki, non nostri) misura per FSRS-6 una perdita logaritmica di 0,3460 e per FSRS-7 personalizzato di 0,3401; senza personalizzazione FSRS-7 sale a 0,3620, quindi peggio di FSRS-6 personalizzato. È un risultato di terzi e non dice nulla sulle nostre modifiche.

## ML-FSRS-NET: il motore candidato, in modalità ombra

Dalla versione dopo la 0.9.3 l'app contiene un motore candidato che **osserva e non decide**: tre motori (FSRS-6, ML-FSRS-32 e FSRS-7) calcolano in parallelo la probabilità che tu ricordi ogni parola; una *guardia* statistica li confronta con ciò che è successo davvero e una *testa di calibrazione* corregge le probabilità per te.

- **Non cambia nulla per chi studia.** Gli intervalli li decide ancora FSRS-6 esteso con ML-FSRS-32. Il candidato gira dentro un `try/catch`: se si rompe, i progressi non si toccano.
- **Niente esce dal dispositivo e niente viene scritto.** Lo stato si ricostruisce dal registro dei ripassi quando serve; non c'è rete né invio automatico.
- **Come potrebbe diventare reale.** Solo se, con ripassi veri, la guardia dimostra che un candidato prevede meglio di FSRS-6. La guardia è costruita in modo che adottare per errore un candidato non migliore abbia probabilità controllata in ogni istante, e che un candidato che peggiora venga escluso. Per ora nessun candidato ha vinto: FSRS-6 resta la rete di sicurezza.
- **Dipende dalla community.** Senza ripassi veri ML-FSRS-NET resta un esperimento; con quelli volontari (sezione «Ricerca facoltativa») potrebbe diventare, un giorno, il motore dell'app.

## Autore, licenza e diritti

**ML-FSRS-32, di Claudio Longhitano. © 2026 Claudio Longhitano.**

- **Che cosa è mio.** Il codice dell'estensione (in `src/core/fsrs.js`, `src/core/core.js` e `src/study/exercises.js`) e i testi di questa pagina. La legge sul diritto d'autore (legge 22 aprile 1941, n. 633, che per i programmi per elaboratore applica la direttiva europea 2009/24/CE) riconosce a chi scrive un programma il diritto d'autore sul codice, e il diritto, che non si può cedere, di essere riconosciuto autore.
- **Licenza.** Il codice è libero, con licenza MIT, come il resto di màndarínō: chiunque può usarlo, modificarlo e ridistribuirlo, anche in prodotti commerciali, a condizione di conservare l'avviso di copyright e il testo della licenza ([LICENSE](https://github.com/longhitown/mandarino/blob/main/LICENSE)). Se lo usi, mi fa piacere che tu scriva «ML-FSRS-32, di Claudio Longhitano».
- **La base non è mia.** FSRS-6 è il porting in JavaScript di py-fsrs, © 2022 Open Spaced Repetition, licenza MIT, e resta loro. L'elenco di tutte le parti di altri è in [THIRD-PARTY-NOTICES.md](https://github.com/longhitown/mandarino/blob/main/THIRD-PARTY-NOTICES.md).
- **Che cosa il diritto d'autore non copre.** Protegge il modo in cui il programma è scritto, non le idee, i principi e i metodi matematici su cui si basa. Anche i brevetti, in Italia (Codice della proprietà industriale, art. 45), escludono i metodi matematici e i programmi in quanto tali. Quindi non rivendico un diritto esclusivo sull'idea o sulle formule: chiunque può studiarle e scrivere un proprio programma che le usa. Chi copia il mio codice senza rispettare la licenza, invece, viola il mio diritto d'autore.
- **Nome e logo.** «màndarínō» e il logo non hanno licenza: le regole sono in [MARCHIO.md](https://github.com/longhitown/mandarino/blob/main/MARCHIO.md).
- **Gli strumenti.** Ho scritto il motore con l'aiuto di Claude (Anthropic). Sulla tutela di ciò che produce un'IA, ancora incerta in molti paesi, vedi [NOTICE.md](https://github.com/longhitown/mandarino/blob/main/NOTICE.md).

Questa pagina riassume e non sostituisce il testo della licenza, che è quello che vale.

## Studi che hanno ispirato le scelte

- Ye, J., Su, J. e Cao, Y. (2022). *A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling*. Atti della conferenza ACM KDD. È il lavoro da cui nasce FSRS.
- Craik, F. I. M. e Lockhart, R. S. (1972). Levels of processing: A framework for memory research. *Journal of Verbal Learning and Verbal Behavior*, 11(6), 671–684. Perché elaborare di più (scrivere) lascia un ricordo più solido.
- Karpicke, J. D. e Roediger, H. L. (2008). The critical importance of retrieval for learning. *Science*, 319(5865), 966–968. Perché richiamare dalla memoria vale più che rileggere.
- Bjork, E. L. e Bjork, R. A. (2011). Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning. In *Psychology and the real world* (pp. 56–64). Worth Publishers. Perché un indizio può far sembrare di sapere più di quanto si sappia.
- Taft, M. e Zhu, X. (1997). Submorphemic processing in reading Chinese. *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 23(3), 761–775. Il ruolo dei componenti dei caratteri nel riconoscere le parole.
- Diekelmann, S. e Born, J. (2010). The memory function of sleep. *Nature Reviews Neuroscience*, 11(2), 114–126. Il sonno consolida i ricordi.
