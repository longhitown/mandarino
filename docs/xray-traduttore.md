# X-Ray: il traduttore istantaneo italiano ⇄ cinese

**In due righe:** in Frasi → X-Ray scrivi o incolli una frase in italiano o in cinese, qualunque sia il corso. L'app la traduce, ti dice quanto è sicura e la puoi ascoltare nelle due lingue.

## Che cosa fa, e che cosa non promette
Non è un traduttore automatico generico, e non finge di esserlo: funziona sul dispositivo, senza rete, ed è **prudente per costruzione**. Se non è sicuro, non inventa.

| Direzione | Come traduce | Etichetta che vedi |
|---|---|---|
| Cinese → italiano | Prima le frasi dell'app (verificate, esempi, dialoghi), poi le regole del laboratorio (`CP.lab.translate`) | «Frase dell'app» o «Per regole» |
| Italiano → cinese | 1) una frase che l'app già conosce; 2) una frase costruita con le parole e le regole note e **controllata al contrario**: la frase cinese trovata viene ritradotta in italiano dalle stesse regole e deve dare la frase scritta (articoli a parte; «vorrei» e «voglio» contano come la stessa scelta); 3) altrimenti solo le parole, una per una | «Frase dell'app», «Per regole, controllata al contrario», «Parola per parola: solo un indizio» |

Sotto la traduzione italiana → cinese compare «Ritradotta: …», così vedi che cosa significa la frase cinese trovata. Se la frase ha virgole e non è nota per intero, si prova clausola per clausola, e solo se **tutte** sono sicure. Le età («Ho 25 anni») sono una regola a parte.

**Limiti.** Copre le frasi semplici costruibili con le schede di `data/grammar.js` (82 verbi, 181 nomi, 55 aggettivi e le parole grammaticali). Le frasi lunghe, idiomatiche o fuori da queste schede ricevono «Parola per parola». Un traduttore preciso per testi liberi richiederebbe un modello di traduzione: non è nell'app e non è stato valutato qui.

## Ascolto
Due pulsanti: «Ascolta il cinese» e «Ascolta l'italiano» (la voce del dispositivo; per l'italiano la voce scelta nel corso, se c'è).

## I calchi (prima fase, debole)
`src/data/calchi.js` contiene poche trappole classiche di chi traduce parola per parola (età con «avere», fame e sete, «è» davanti a un aggettivo, il momento in fondo alla frase, il classificatore, «anche», il possesso con le cose). Compaiono come **avviso in bozza** sotto la traduzione, quando la frase italiana invita al calco. Ogni voce ha `rev: 0` (bozza) finché non la rivede un madrelingua; si ampliano con la comunità (vedi CONTRIBUTING.md). Il test unitario controlla campi, espressioni e una frase che attiva ciascuna voce.

Codice: `src/phrases/xrt.js` (al primo uso), `src/phrases/reader.js` (X-Ray), `src/data/calchi.js`.
