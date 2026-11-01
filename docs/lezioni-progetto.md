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

## 4. Parte tecnica

- **Caricamento pigro.** Ogni lezione è un blocco di testo (`<script type="text/plain" id="lr-<corso>-<id>">`) eseguito da `window.LRL` solo quando la si apre: non pesa sull'avvio.
- **Schermata.** `src/ui/lezione.js` (modulo caricato al primo uso, con `src/ui/lezione-css.js`) disegna il capitolo per entrambi i corsi; `src/phrases/lessons.js` e `src/it/course.js` lo collegano.
- **Controlli.** `tools/lib/ricche.mjs` gira a ogni build (struttura, quantità, una sola risposta giusta, lessico, testo senza segnaposto); `tools/lezioni-ricche-check.mjs` lo lancia da solo;
  `tools/lezioni-indice.mjs` tiene aggiornato l'elenco in `src/index.html`; l'e2e apre una lezione e fa gli esercizi di ogni tipo.
- **Dopo.** Ripasso FSRS della struttura grammaticale e «Perché è sbagliato?» nel laboratorio; pagine del sito più ricche per ogni lezione.
