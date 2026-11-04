# Lavagna: scrivere a mano, a memoria

**In due righe:** vedi il pinyin e il significato di una parola e la scrivi con il dito, un carattere alla volta. Ordine e direzione dei tratti sono controllati tratto per tratto.

È in **Studia**, accanto a «Duotono», sotto «Sfida 60 secondi».

## Come funziona
1. **Cinque parole a sessione**, di uno-quattro caratteri, scelte tra quelle già viste (se ne hai viste poche, anche tra le prime del corso).
2. Il carattere **non è mostrato**: i pulsanti dei caratteri dicono 1, 2, 3, così si scrive a memoria. «Mostra il carattere» accende la guida.
3. Un carattere scritto con almeno il **70% di aderenza** ai tratti di riferimento conta come riuscito; una parola è riuscita se lo sono tutti i suoi caratteri.
4. Alla fine: quante parole sono state scritte bene, con «Riprova».

## Che cosa copre
I tratti (`src/data/strokes.js`, da Make Me a Hanzi) e l'anatomia dei caratteri (`src/data/anatomy.js`) coprono **tutti i caratteri del vocabolario, pacchetti compresi**: 3.070 caratteri per i tratti, 3.426 per l'anatomia. `tools/strokes.mjs` e `tools/anatomy.mjs` includono i pacchetti.

## Codice
`src/study/lavagna.js` (l'esercizio, caricato al primo uso), `src/voice/pad.js` (la lavagna, opzione `blind`), `src/study/study.js` (il pulsante). Prova: `tools/e2e.mjs` (sezione «Lavagna»).
