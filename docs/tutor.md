# Il tutor: un invito gentile alla terza ricaduta

**In due righe:** se sbagli la stessa parola per la terza volta, a fine sessione l'app ti propone, con gentilezza, di rivederla insieme. Non è un menù a ogni errore: un solo pop-up, e puoi dire di no.

## Quando compare
- **Terza ricaduta**: la scheda della parola era in ripasso e l'hai sbagliata per la terza volta (`lp` = 3). Alla seconda non succede niente; alla quarta nemmeno.
- **Mai in mezzo alle carte**: l'invito si mette da parte e compare alla schermata finale della sessione.
- **Al massimo uno per sessione**, e **una volta sola per parola**.

## Che cosa dice e che cosa offre
«Hai sbagliato 好 (hǎo, bene) per la terza volta: questo errore sembra essere particolarmente complicato per te. Ti va se lo rivediamo insieme?» Se l'errore era del solo tono, dice «il tono di…».
- **Sì, rivediamolo**: apre il foglio della parola (famiglia, componenti, esempi). Per un errore di tono c'è anche **Allena i toni** (Duotono).
- **Non ora**: chiude, e la parola non viene riproposta.
- **Non mostrarmi più questi consigli**: spegne il tutor. Si riaccende da Impostazioni → Studio → «Consigli del tutor».

## Dove vive
`src/study/tutor.js` (si carica alla prima ricaduta), l'aggancio in `core/core.js` (`CP.grade`) e in `study/study.js` (fine sessione), l'interruttore in `ui/ex-stub.js`. Lo stato (`md-tutor-v1`, `md-tutor-off`) resta sul dispositivo e non entra nei backup. Nel corso di italiano non c'è.
