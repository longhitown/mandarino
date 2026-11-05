# Quanto ti conosco?

**In due righe:** prima di ogni ripasso l'app prevede quanto è probabile che ti ricordi la parola. Qui vedi se ci azzecca, canale per canale, e vedi accanto che cosa avrebbe previsto il motore sperimentale che osserva in ombra.

È in **Studia**, subito sotto «Memoria e orecchio: i numeri».

## Che cosa mostra
- **Tutto insieme** e cinque canali: *Capire* (che cosa significa), *Dire e toni* (pinyin, tono), *Ascoltare*, *Scrivere*, *Nelle frasi*. Ogni riga ha due barre: **previsto** (scuro) e **ottenuto** (chiaro).
- Una frase che dice se la previsione e la realtà coincidono (entro 5 punti), se ti credevamo più preparato o se sei più bravo di quanto pensassimo.
- Con meno di 30 ripassi in un canale non diamo nessun verdetto: «ancora pochi ripassi».
- **Il motore sperimentale, in ombra** (ML-FSRS-NET): il suo previsto per canale e l'errore medio di previsione accanto a quello del motore attuale (più basso è meglio). Non cambia i tuoi ripassi: è mostrato per trasparenza.

## Da dove vengono i numeri
Dal registro dei ripassi sul tuo dispositivo: per ogni ripasso vero (non le ripetizioni nella stessa sessione) c'è la probabilità prevista prima del voto e l'esito. «Ottenuto» è la quota di ripassi riusciti (voto «Quasi» o meglio). Il canale viene dal tipo di esercizio. Il motore in ombra ricostruisce i ripassi all'apertura, qualche secondo. Niente esce dal dispositivo.

## Limiti
- Il previsto di base è quello del motore che sta pianificando i tuoi ripassi, non un confronto con altri.
- Le carte della sessione di studio sono nel canale *Capire* o *Dire* secondo la domanda; i ripassi senza tipo contano in *Capire*.
- Il motore sperimentale non è provato su persone: i suoi numeri sono una misura, non una promessa.

Codice: `src/study/conosci.js` (al primo uso), `src/core/mlnet-ombra.js` (le somme per tipo di esercizio), `src/study/study.js` (la voce).
