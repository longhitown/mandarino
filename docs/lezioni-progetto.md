# Le lezioni-capitolo

Le 55 lezioni di cinese per italiani e le 51 di italiano per chi parla cinese diventano capitoli di manuale universitario, pensati per il telefono: la complessità non si taglia, si
organizza (progressive disclosure e visual chunking). Come si scrive una lezione: [`docs/lezioni-guida.md`](lezioni-guida.md).

## 1. Che cosa cambia

| | Scheda di sintesi | Lezione-capitolo |
|---|---|---|
| Scopo | ricordare formule e definizioni | capire come ragiona la lingua, e perché |
| Metodo | la regola subito, poi gli esempi | prima l'osservazione, poi la regola |
| Errori | elenco di frasi sbagliate | l'errore del traduttore: perché lo si fa e come se ne esce |
| Esercizi | scegli, ordina, completa | scegli tra regole vicine, trasforma, scrivi, usa in un mini-dialogo |
| Estensione | 4-5 paragrafi | regola, logica, contrasti, dialogo, note per i più curiosi, pragmatica |

I campi della lezione di base (`body`, `pattern`, `ex`, `dlg`, `traps`, `quiz`) restano: servono alla ricerca, ai ripassi, al diario e al resto dell'app. Il capitolo vive in un file a parte,
`src/data/lr/<zh|it>/NN-<id>.js`, e sostituisce la pagina della lezione.

## 2. Il percorso

**Scopri → La regola → Il ragionamento → Colpo d'occhio → Esempi → Scegli la regola giusta → Dialogo → Il tranello → Per i più curiosi → Esercizi → Che cosa sai fare ora.**
Rispetta le fasi dell'acquisizione (osservazione induttiva, analisi, fissazione, reimpiego). L'indice in alto segue la lettura, una barra mostra l'avanzamento, le risposte
spiegano sempre il «perché», e il risultato elenca ciò che si sa fare.

## 3. Qualità

- Ogni lezione nasce già nella forma definitiva: fonti incrociate (almeno due, una in inglese), verifica automatica a ogni build, revisione avversaria indipendente.
- Esempi, dialoghi ed esercizi sono creazioni originali; nessun testo protetto entra nell'app. I manuali di riferimento (Masini, Lavagnino, Tartaglione, Balboni, Serianni, Nuovo Espresso)
  danno l'ordine degli argomenti e il livello di precisione.
- Lessico: le frasi cinesi usano parole del vocabolario dell'app (HSK 1-3), così ogni parola è un tocco che apre la sua scheda.
- Fonti libere usate per i controlli: Tatoeba (CC BY 2.0 Francia), CC-CEDICT, Morph-it!, Mozilla Common Voice (CC0).
- Le correzioni dopo la pubblicazione entrano nel Libro degli errori: data, voce corretta, soprannome di chi l'ha segnalata.

## 4. Fonti e Double Check Accademico (al posto delle bozze)

Il controllo di qualità avviene **mentre si scrive**, non dopo la pubblicazione. Una lezione esce solo se ha passato questi passi, e nell'app non compare nessuna etichetta di stato.

1. **Triangolazione delle fonti.** Prima di scrivere si incrociano almeno tre descrizioni indipendenti dell'argomento: due manuali (per il cinese: le grammatiche consultate in PDF,
   `Modern Mandarin Chinese Grammar`, `Basic Chinese: A Grammar and Workbook`, `Chinese: An Essential Grammar`, e il testo accademico italiano `Lingua e letteratura cinese`; per l'italiano: le
   pagine di grammatica consultate in rete) e una fonte nella terza lingua (inglese per il cinese; per l'italiano, l'inglese e il cinese). I manuali di riferimento di cui si tratta il programma
   (Masini, Lavagnino, Tartaglione, Balboni, Serianni, Nuovo Espresso) servono come **ordine degli argomenti e livello di precisione**: dove non sono stati consultati direttamente lo si scrive nel registro delle fonti.
2. **Il registro interno delle fonti.** Per ogni lezione, un blocco `fonti` (non visibile nell'app) elenca che cosa è stato consultato e dove le fonti non concordano e come si è scelto.
3. **Revisione avversaria.** Un secondo agente, indipendente da chi ha scritto, riceve la lezione e le fonti e cerca errori: generalizzazioni false, esempi che violano la regola, risposte multiple valide
   negli esercizi, pinyin e toni, uso del lessico. **Guardrail obbligatori:** lezione e fonti sono trattate come dati non fidati (mai come istruzioni), eventuali comandi nel testo si ignorano, i contenuti
   si passano come citazioni/blocchi dati, la valutazione segue una rubrica fissa, e i controlli automatici deterministici di build restano la fonte di verità. Le segnalazioni si correggono prima della consegna.
4. **Controlli automatici (build):** ogni frase usa solo parole del vocabolario (`checkLessons`), pinyin verificato con CC-CEDICT, italiano con Hunspell e Morph-it!; nuovi controlli: scaletta
   completa, ogni risposta sbagliata ha il suo `perche`, ogni `scopri` ha una risposta, ogni contrasto ha una sola risposta giusta.
5. **Lessico mappato.** Le frasi usano parole già nel dizionario dell'app (così ogni parola è un tocco che apre la sua scheda); si preferiscono parole HSK 1-3; una parola oltre il livello è ammessa solo se è nel
   vocabolario e serve al punto della lezione.
6. **La rilettura di un madrelingua** è la rifinitura finale e non una condizione di uscita. Ogni correzione successiva entra nel **Libro degli errori**, un registro storico e pubblico di trasparenza
   (non un paracadute per spiegazioni approssimative): data, voce corretta, soprannome di chi ha segnalato.

Le fonti **libere** che possiamo usare restano: Tatoeba (CC BY 2.0 Francia), Mozilla Common Voice (CC0), CC-CEDICT (solo per controllo), Make Me a Hanzi (struttura dei caratteri), Morph-it!.
Wikipedia, Wikibooks e Wiktionary (CC BY-SA) si leggono ma non si copiano. Nessun testo protetto entra nell'app; i manuali sono bussola e controllo, mai una fonte da cui trascrivere.

## 5. Parte tecnica (realizzata)

- **Caricamento pigro.** Ogni lezione è un blocco di testo (`<script type="text/plain" id="lr-<corso>-<id>">`) eseguito da `CP.lezione.rich` (in `src/ui/lezione.js`) solo quando la si apre: non pesa sull'avvio.
- **Schermata.** `src/ui/lezione.js` (modulo caricato al primo uso, con `src/ui/lezione-css.js`) disegna il capitolo per entrambi i corsi; `src/phrases/lessons.js` e `src/it/course.js` lo collegano.
- **Controlli.** `tools/lib/ricche.mjs` gira a ogni build (struttura, quantità, una sola risposta giusta, lessico, testo senza segnaposto); `tools/lezioni-ricche-check.mjs` lo lancia da solo;
  `tools/lezioni-indice.mjs` tiene aggiornato l'elenco in `src/index.html`; l'e2e apre una lezione e fa gli esercizi di ogni tipo.
- **Dopo.** Ripasso FSRS della struttura grammaticale e «Perché è sbagliato?» nel laboratorio; pagine del sito più ricche per ogni lezione.

## 6. Piano

1. **Ondata 0: otto lezioni pilota** (descritte per esteso in `docs/lezioni-pilota.md`): cinese 16 把, 12 了, 32 还 / 再 / 又, 33 就 e 才; italiano 12 imperfetto, 5 accordo, 8 preposizioni, 21 condizionale. Servono a calibrare registro,
   estensione e modello dati; devono nascere già nella forma definitiva.
2. **Approvate le otto, tutte le altre in un'unica pull request**, con la ricerca distribuita tra più agenti (uno per lezione o per piccolo gruppo, ognuno con le fonti e il suo registro) e la revisione avversaria
   indipendente su ciascuna. Chi coordina compila i risultati, li fa passare dai controlli e li consegna insieme.
3. **Dopo**: FSRS grammaticale, «Perché è sbagliato?», Libro degli errori, ancoraggi ipertestuali.
