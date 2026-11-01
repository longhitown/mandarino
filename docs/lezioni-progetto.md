# Dalle schede alle lezioni vere: progetto di riscrittura delle lezioni

Stato: **linee guida approvate nei principi** (1 novembre 2026), in attesa della verifica delle otto lezioni pilota. Riguarda le 55 lezioni di cinese per italiani e le 51 di
italiano per chi parla cinese (`src/data/lessons/`, `src/data/lessons-x/`, `src/data/it/lessons/`, `src/data/it/lessons-x/`).

## 1. L'obiettivo

Oggi una lezione è una scheda di sintesi (in media 1,9 KB di dati). Vogliamo che ogni lezione sia un **capitolo di un manuale universitario**, segmentato per il telefono:
la complessità non si taglia, si organizza (progressive disclosure e visual chunking).

| | Scheda di sintesi (oggi) | Lezione vera (obiettivo) |
|---|---|---|
| Scopo | ricordare formule e definizioni | capire come ragiona la lingua, e perché |
| Metodo | la regola subito, poi gli esempi | prima l'osservazione, poi la regola |
| Errori | elenco di frasi sbagliate | l'errore del traduttore: perché lo si fa e come se ne esce |
| Esercizi | scegli, ordina, completa | scegli tra due regole vicine, trasforma, usa in un mini-dialogo |
| Estensione | 4-5 paragrafi | tutto ciò che serve, a strati: regola, logica, contrasti, note per i più curiosi |

**Non si butta niente.** I campi attuali (`body`, `pattern`, `ex`, `dlg`, `traps`, `quiz`) restano e ogni lezione continua a funzionare; i campi nuovi sono facoltativi e si aggiungono lezione per lezione.

## 2. Schermata di una lezione

Ordine: **Scopri → Regola → Logica → Esempi → Contrasto → Dialogo → Il tranello → Per i più curiosi → Esercizi.** Rispetta le fasi dell'acquisizione (percezione globale e induttiva,
poi analisi, poi fissazione e reimpiego). Ogni sezione è un blocco che si può aprire e chiudere; «Regola» e «Esercizi» sono sempre visibili, il resto si apre al tocco, e l'ultimo punto
raggiunto si ricorda.

## 3. Scrittura: la scaletta di ogni lezione

1. **Scopri**: 3-4 frasi mirate e una domanda; il tocco rivela la risposta e apre la regola.
2. **Regola**: l'enunciato completo, con soggetto e verbo espliciti, le condizioni e i limiti.
3. **Logica**: perché la lingua fa così (il ragionamento, non l'etichetta).
4. **Esempi**: 10-14, graduati e commentati: per il cinese con il pinyin automatico, per l'italiano con la glossa in cinese.
5. **Contrasto**: esercizi in cui si sceglie tra due regole vicine, con il «perché» per ogni risposta sbagliata.
6. **Dialogo**: 4-6 battute che usano la regola in una situazione vera, e almeno 2 esercizi che lo usano.
7. **Il tranello**: l'errore del traduttore (interferenza con la lingua madre).
8. **Per i più curiosi**: note accademiche e storiche, sfumature di registro; **Pragmatica** quando serve.
9. **Esercizi**: scelta, buco, ordine, scrittura, **trasformazione**, mini-dialogo.

Esempi, dialoghi ed esercizi sono **creazioni originali**: non si copia nessun testo, esempio o esercizio di manuali.

## 4. Fonti e Double Check Accademico (al posto delle bozze)

Il controllo di qualità avviene **mentre si scrive**, non dopo la pubblicazione. Una lezione esce solo se ha passato questi passi, e nell'app non compare nessuna etichetta di stato.

1. **Triangolazione delle fonti.** Prima di scrivere si incrociano almeno tre descrizioni indipendenti dell'argomento: due manuali (per il cinese: le grammatiche consultate in PDF,
   `Modern Mandarin Chinese Grammar`, `Basic Chinese: A Grammar and Workbook`, `Chinese: An Essential Grammar`, e il testo accademico italiano `Lingua e letteratura cinese`; per l'italiano: le
   pagine di grammatica consultate in rete) e una fonte nella terza lingua (inglese per il cinese; per l'italiano, l'inglese e il cinese). I manuali di riferimento di cui si tratta il programma
   (Masini, Lavagnino, Tartaglione, Balboni, Serianni, Nuovo Espresso) servono come **ordine degli argomenti e livello di precisione**: dove non sono stati consultati direttamente lo si scrive nel registro delle fonti.
2. **Il registro interno delle fonti.** Per ogni lezione, un blocco `fonti` (non visibile nell'app) elenca che cosa è stato consultato e dove le fonti non concordano e come si è scelto.
3. **Revisione avversaria.** Un secondo agente, indipendente da chi ha scritto, riceve la lezione e le fonti e cerca errori: generalizzazioni false, esempi che violano la regola, risposte multiple valide
   negli esercizi, pinyin e toni, uso del lessico. Le segnalazioni si correggono prima della consegna.
4. **Controlli automatici (build):** ogni frase usa solo parole del vocabolario (`checkLessons`), pinyin verificato con CC-CEDICT, italiano con Hunspell e Morph-it!; nuovi controlli: scaletta
   completa, ogni risposta sbagliata ha il suo `perche`, ogni `scopri` ha una risposta, ogni contrasto ha una sola risposta giusta.
5. **Lessico mappato.** Le frasi usano parole già nel dizionario dell'app (così ogni parola è un tocco che apre la sua scheda); si preferiscono parole HSK 1-3; una parola oltre il livello è ammessa solo se è nel
   vocabolario e serve al punto della lezione.
6. **La rilettura di un madrelingua** è la rifinitura finale e non una condizione di uscita. Ogni correzione successiva entra nel **Libro degli errori**, un registro storico e pubblico di trasparenza
   (non un paracadute per spiegazioni approssimative): data, voce corretta, soprannome di chi ha segnalato.

Le fonti **libere** che possiamo usare restano: Tatoeba (CC BY 2.0 Francia), Mozilla Common Voice (CC0), CC-CEDICT (solo per controllo), Make Me a Hanzi (struttura dei caratteri), Morph-it!.
Wikipedia, Wikibooks e Wiktionary (CC BY-SA) si leggono ma non si copiano. Nessun testo protetto entra nell'app; i manuali sono bussola e controllo, mai una fonte da cui trascrivere.

## 5. Parte tecnica

- **Caricamento pigro (obbligatorio).** Ogni lezione è un blocco di dati letto solo quando la si apre: la densità di testo non pesa mai sull'avvio (oggi `LESSONS` e `ITLESSONS` sono script di avvio, circa 170 KB, con
  un margine di 4 KB sul limite di 1500 KB). Il meccanismo `lessons-x/` (`window.__mdLoad.LEZIONIX`) si estende a tutte le lezioni di entrambi i corsi, con un blocco **per lezione** (non uno solo per tutte: aprire una lezione non deve analizzare
  megabyte di dati). Stima: le lezioni diventano 15-30 KB ciascuna, in tutto 2-3 MB nel file unico; da misurare.
- **Schermata:** `src/phrases/lessons.js` e `src/it/course.js` mostrano le sezioni nuove e i tipi di esercizio `scegli2`, `trasforma`, `minidialogo` (motore dei quiz).
- **Controlli:** `tools/lib/lab.mjs` (`checkLessons`), `tools/lezioni-check.mjs`, test unit per ogni tipo nuovo, e2e che apre una lezione pilota.
- **Sito:** `tools/pagine.mjs` rende le lezioni anche come pagine del sito: con i campi nuovi diventano pagine molto più ricche (risposte, tabelle dei contrasti, tranello).
- **Fasi successive:** FSRS grammaticale (ripasso della struttura, non solo della parola) e il «Perché è sbagliato?» nel laboratorio.

## 6. Piano

1. **Ondata 0: otto lezioni pilota** (descritte per esteso in `docs/lezioni-pilota.md`): cinese 16 把, 12 了, 32 还 / 再 / 又, 33 就 e 才; italiano 12 imperfetto, 5 accordo, 8 preposizioni, 21 condizionale. Servono a calibrare registro,
   estensione e modello dati; devono nascere già nella forma definitiva.
2. **Approvate le otto, tutte le altre in un'unica pull request**, con la ricerca distribuita tra più agenti (uno per lezione o per piccolo gruppo, ognuno con le fonti e il suo registro) e la revisione avversaria
   indipendente su ciascuna. Chi coordina compila i risultati, li fa passare dai controlli e li consegna insieme.
3. **Dopo**: FSRS grammaticale, «Perché è sbagliato?», Libro degli errori, ancoraggi ipertestuali.
