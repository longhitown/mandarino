# Il motore del ripasso di màndarínō

màndarínō decide quando riproporti una parola con **FSRS-6 esteso con ML-FSRS-32**. FSRS-6 è un algoritmo di ripetizione dilazionata molto diffuso e già provato su milioni di ripassi reali. ML-FSRS-32 ci aggiunge undici parametri pensati per le difficoltà del cinese per chi parla italiano. Tutto gira sul tuo telefono o sul tuo computer: nessun dato di studio lascia il dispositivo (vedi [Privacy](../PRIVACY.md)).

Questa pagina dice che cosa fa il motore, che cosa è già attivo, quanto ci si può fidare dei numeri e a chi appartiene il lavoro.

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
- **Il miglioramento misurato in laboratorio non è una prova sugli studenti.** Un ottimizzatore ha ridotto l'errore da 0,3072 a 0,2905 (−5,4%), ma su ripassi simulati con un modello scritto da noi: dimostra che il calcolo è coerente, non che il metodo funzioni meglio per chi studia. Se un parametro usciva dall'ottimizzatore con un valore poco credibile, abbiamo tenuto quello di partenza.
- **Nessuna garanzia di risultati.** Non abbiamo misurato se ML-FSRS-32 faccia imparare di più. Quando ci saranno ripassi reali, raccolti in forma anonima e con il consenso di chi studia, ristimeremo w21–w31 e confronteremo con FSRS-6.
- **Che cosa è verificato.** Il motore è provato con 237 controlli automatici, tra cui: senza informazioni sull'esercizio dà gli stessi risultati di FSRS-6 su 400 ripassi casuali; un richiamo riuscito non fa mai scendere la stabilità; l'effetto degli esercizi sull'incremento resta tra 0,4 e 1,8 volte quello di FSRS-6.

### Ricerca facoltativa

Per ristimare w21–w31 servono ripassi veri. In Impostazioni → Comunità e voci c'è «Ricerca sulla memoria», spenta di base: se accetti il foglio del consenso (maggiorenni, licenza CC0) l'app prepara sul telefono un file con i tuoi ripassi in forma anonima, che puoi leggere e poi mandare con l'e-mail o con Condividi. L'app non invia niente da sola. Il file contiene l'ora di ogni ripasso (quindi si vede a che ora studi) e un codice casuale, lo stesso a ogni invio; non contiene nome, e-mail, indirizzo IP, posizione né le parole che hai aggiunto tu. Si può mandare dopo almeno 300 ripassi di parole già viste; la soglia è un minimo pratico, perché sotto quel numero i ripassi che toccano i parametri nuovi sono troppo pochi. Il dettaglio, anche per la privacy, è in [Privacy](../PRIVACY.md).

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

Il codice è in [src/core/fsrs.js](https://github.com/longhitown/mandarino/blob/main/src/core/fsrs.js), il test automatico del motore in `tools/unit.mjs`.

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
