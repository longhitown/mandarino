# Abilità invisibili: coppie di toni e componenti

**In due righe:** il ripasso impara anche quali coppie di toni ti sfuggono e quali componenti dei caratteri tradiscono più parole. Non c'è nessun pulsante nuovo: le coppie decidono *che cosa* esce, i componenti (per ora) vengono solo misurati in ombra.

## 1. Le coppie di toni, come «carte abilità»
- **Che cos'è una coppia.** I toni *parlati* di una parola di due sillabe, dopo il sandhi (`CP.sandhi`). Esempi: `24`, `41`; `33>23` è la coppia scritta 3+3 che si dice 2+3 (你好). Restano fuori le parole ambigue e quelle di una o tre-quattro sillabe.
- **La carta.** Ogni coppia ha una carta FSRS sua, separata da quelle delle parole, in `cp-ex-v1.sk.p`. Risposta giusta = «Bene», sbagliata = «Di nuovo»; più risposte giuste lo stesso giorno contano una volta, come per le parole.
- **Chi la aggiorna.** Una risposta di **Duotono** sulle due sillabe; una risposta all'esercizio **«tono-parola»** del ripasso; un errore del solo tono su una parola di due sillabe. La **verifica di tappa misura soltanto**: non aggiorna nessuna carta.
- **Dove cambia le cose (senza che tu faccia nulla).**
  - *Duotono*: le combinazioni la cui coppia è debole escono più spesso (peso da 1 a 4; 1,5 se mai provata).
  - *Ripasso Misto e Guidato*: «tono-parola» (ascolta la parola, scegli i due toni in ordine) è un tipo del motore della famiglia mista. Esce solo se la coppia è in scadenza (R < 85 %) e non è stata chiesta da meno di 6 ore, o se è mai provata ma la parola è già nota; al massimo tre volte per apertura dell'app. Con voce disponibile.
  - *Verifica di tappa*: la parte «pinyin e toni» usa «tono-parola» sulla coppia più debole, al posto dell'esercizio a una sillaba.
- **Errore del solo tono.** Sbagliare «tono-parola» conta come errore del solo tono: ML-FSRS-32 non azzera il ricordo della parola.
- **Canale.** In «Quanto ti conosco?» le risposte di «tono-parola» contano nel canale «Dire e toni».

## 2. I componenti, come suggerimento in ombra
- **Che cosa si tiene.** Per ogni componente di primo livello (`data/anatomy.js`) il numero di ripassi, gli errori e gli ultimi 12 esiti delle parole che lo contengono (`cp-ex-v1.sk.c`).
- **Il suggerimento.** Se due parole *diverse* con lo stesso componente sono sbagliate entro 14 giorni, nasce un suggerimento di micro-ripasso del componente (al massimo uno ogni 7 giorni per componente). **Non viene mai mostrato e non tocca la coda.**
- **La misura.** Il motore in ombra (`core/mlnet-ombra.js`) somma, per i ripassi con coppia debole/media/solida (`psk`) e con un suggerimento attivo (`csg`), previsto e ottenuto. Se i ripassi con suggerimento falliscono più di quanto il motore prevedeva, il suggerimento porta informazione; altrimenti si toglie. Solo allora una PR separata potrà mostrarlo.
- **Limite.** I ripassi ricostruiti dal registro all'avvio non hanno l'indicatore (le carte abilità non hanno storia): la misura parte dai ripassi fatti dopo questa versione. Non è provata su persone.

## Dove sta il codice
`src/study/abilita.js` (carte, componenti, `CP.skills.report()`; al primo uso), `src/study/ex-varie.js` («tono-parola»), `src/study/duotono.js`, `src/study/guided.js` (verifica), `src/core/core.js` (due indicatori per il motore in ombra), `src/core/mlnet-ombra.js` (le somme), `src/core/store.js` (unione tra dispositivi).
