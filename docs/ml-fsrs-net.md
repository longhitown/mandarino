# ML-FSRS-NET: che cos'è, perché esiste e che cosa (non) promette

**In una frase:** ML-FSRS-NET è un modo prudente per capire, con i ripassi di chi studia davvero, se il ripasso di màndarínō può diventare migliore di FSRS-6, senza mai far peggiorare quello che c'è oggi. Oggi gira soltanto in *modalità ombra*: osserva e misura, non decide nessun intervallo e non invia niente.

Questa pagina completa [Il motore del ripasso](motore-ripasso.md), dove trovi i numeri delle simulazioni e i limiti.

## Perché si chiama così

- **ML-FSRS** sta per **Multi-modal Linguistic Free Spaced Repetition Scheduler**: FSRS (Free Spaced Repetition Scheduler, l'algoritmo di ripetizione dilazionata della comunità Open Spaced Repetition, la parte solida) reso *multi-modale*, cioè attento al modo in cui ripassi (scrivere, ascoltare, riconoscere, scegliere) e *linguistico*, cioè attento a come funziona una lingua come il cinese (toni, caratteri fatti di componenti).
- **32** sono i parametri di ML-FSRS-32: i 21 di FSRS-6 più **undici** aggiunti da noi (tono, tipo di esercizio, caratteri già noti, rapidità di risposta, sonno).
- **NET** sta per **Neural Network**, rete neurale. Viene dall'idea di partenza (4 novembre 2026): un motore *neuro-semantico e biomimetico*, cioè ispirato a come funziona la memoria, in cui le parole non sono isole ma nodi di una rete. Se dimentichi 火 (fuoco), la debolezza potrebbe propagarsi ai nodi vicini per significato (热, caldo), per suono (la confusione dei toni) e per componenti (radicali Kangxi). Intorno a quella rete l'idea originale aveva altri tre pilastri: i tempi di risposta e i ritmi del giorno, la scelta dell'esercizio più adatto, il vantaggio dei componenti già noti.
- **Una precisazione onesta sul nome.** La versione che esiste oggi **non contiene una rete neurale**: la calibrazione è una regressione logistica a due numeri per persona, e la guardia è statistica. Il nome indica la direzione dell'idea, non l'architettura attuale; una rete neurale vera la prenderemmo in considerazione solo se i ripassi reali dimostrassero che serve.

## Perché è stato ipotizzato

Perché FSRS-6 tratta ogni parola come isolata e ogni studente come uno che somiglia agli altri. Le persone vere non sono così: il cinese ha toni, caratteri fatti di componenti, esercizi diversi che costano sforzi diversi. Chi costruisce un'app di ripasso deve anche rispondere a una domanda scomoda: *come sappiamo che una modifica al motore aiuta chi studia, e non solo il simulatore con cui l'abbiamo provata?*

## Che cosa cerca di risolvere

1. **Pochi dati su di te, soprattutto all'inizio.** Un algoritmo che parte da valori medi ci mette un po' a conoscerti.
2. **Non si può sapere in anticipo quale motore è migliore.** Cambiare l'algoritmo alla cieca può far dimenticare parole o far ripassare cose inutili. Le nostre simulazioni sono sintetiche e non bastano a decidere.
3. **Le probabilità non coincidono con la realtà.** Nei nostri test la ritenzione realmente ottenuta restava circa 6 punti sotto quella richiesta: se l'app dice «ricordi al 90%» ma è l'84%, il cursore della ritenzione non è onesto.

## Come cerca di risolverlo

- **Tre motori in parallelo.** FSRS-6 (la rete di sicurezza), ML-FSRS-32 e FSRS-7 calcolano, per ogni ripasso, la probabilità che tu ricordi la parola. Tutto sul tuo dispositivo.
- **Una guardia che decide con prove, non con fiducia.** Ogni motore «scommette» sull'esito di ogni ripasso. Un candidato può prendere il posto di FSRS-6 solo quando ha accumulato prove abbastanza forti di essere migliore; la probabilità di promuoverne uno non migliore resta sotto una soglia fissata in anticipo, anche guardando i risultati di continuo (è la logica dei test sequenziali con scommesse, detti *e-process*). Se un candidato peggiora, la guardia lo esclude.
- **Una testa di calibrazione.** Con due numeri per te (una pendenza e uno spostamento) corregge le probabilità dei motori e tiene conto della scelta multipla: tirando a caso su quattro opzioni si indovina una volta su quattro.
- **Modalità ombra.** Tutto questo oggi non cambia i tuoi ripassi: raccoglie misure sul dispositivo. L'app non invia niente.

Che cosa hanno mostrato le simulazioni (sintetiche, quindi solo prove di meccanismo; i numeri completi sono in [Il motore del ripasso](motore-ripasso.md)): la guardia non ha mai promosso per errore un candidato peggiore in 20.000 prove e ha escluso un candidato guasto dopo 55 ripassi (mediana); la calibrazione ha ridotto l'errore sulle probabilità; **nessun candidato ha invece dimostrato un vantaggio netto su FSRS-6 sul tempo di studio**.

**Segnali in prova.** In ombra il motore misura anche se due segnali dell'app avrebbero migliorato le previsioni: la debolezza della coppia di toni di una parola e i suggerimenti sui componenti. Non cambiano nessun intervallo; vedi [Abilità invisibili](abilita-invisibili.md).

## Che cosa è rimasto dell'idea originale

Le idee più ambiziose le abbiamo provate in simulazione e **non le abbiamo spedite**:

| Ipotesi originale | Che cosa è successo |
|---|---|
| Rete semantica che propaga il dimenticare ai nodi vicini | migliorava la previsione in ogni mondo, ma i segni stimati erano sbagliati dove conoscevamo la verità: assorbe qualsiasi struttura correlata, non misura la ricaduta |
| Ritmi del giorno (circadiani) | diventava un semplice parametro di scala; centrato non fa danno ma nemmeno trova l'effetto |
| Tempi di risposta come processo stocastico | utile per generare tempi realistici in simulazione, non per stimare |
| Scelta dell'esercizio per minimizzare l'energia cognitiva | con il solo tempo come costo spingerebbe verso la scelta multipla, cioè esercizi superficiali |
| Vantaggio dei componenti già noti | già nell'app (parametri w28 e w29 di ML-FSRS-32) |

Il nome è rimasto, ma la versione che esiste oggi è **molto più piccola dell'idea originale**: tre motori, una guardia, una calibrazione, in ombra. È una scelta voluta: tenere ciò che regge alla prova e lasciare fuori il resto.

## Perché non è overengineering

- **Per chi studia non c'è nulla da fare.** Nessuna impostazione, nessun pulsante, nessuna scelta di algoritmo. Se non arriva mai un candidato migliore, l'app resta identica a oggi.
- **La complessità sta nella verifica, non nell'uso.** L'alternativa semplice, «cambiamo algoritmo e speriamo», sposta il rischio su chi studia. Il candidato in ombra sposta invece il rischio sulla prova.
- **Costa poco.** Circa 30 KB di codice, caricati al primo ripasso e fuori dal codice di avvio, e circa 0,03 ms per ripasso (misurato su Node); gira dentro un `try/catch`, quindi un guasto non tocca i progressi.
- **Può semplificare, non complicare.** Se i ripassi veri lo confermano, un motore che prevede meglio ripropone meno ripassi inutili e dice una ritenzione più onesta. Lo diciamo come possibilità, non come risultato: **non è provato su persone**.
- **Ha un criterio per essere tolto.** Se con i dati veri nessun candidato dimostra un vantaggio, FSRS-6 resta il motore dell'app e il candidato in ombra si può eliminare.

## Che cosa dipende da te

Senza ripassi veri ML-FSRS-NET resta un esperimento. La ricerca sulla memoria è **volontaria**, spenta di base, con consenso e «Revoca la partecipazione» sempre disponibili (Impostazioni → Comunità e voci → Ricerca sulla memoria); l'app non traccia niente da sola. I dati, se li mandi, sono in pubblico dominio (CC0). Dettagli in [Privacy](../PRIVACY.md).

## Dove sta il codice

`src/core/fsrs7.js` (FSRS-7, porting delle formule di fsrs-rs, BSD-3-Clause), `guard.js` (la guardia), `head.js` (la calibrazione), `mlnet.js` (i tre motori insieme) e `mlnet-ombra.js` (la modalità ombra, agganciata a `CP.grade` in `core.js`). Licenze e crediti in [THIRD-PARTY-NOTICES.md](https://github.com/longhitown/mandarino/blob/main/THIRD-PARTY-NOTICES.md).

## Riferimenti

- Ye, J., Su, J. e Cao, Y. (2022). *A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling*. ACM KDD. Da lì nasce FSRS.
- Ramdas, A., Grünwald, P., Vovk, V. e Shafer, G. (2023). Game-theoretic statistics and safe anytime-valid inference. *Statistical Science*, 38(4). La logica delle scommesse della guardia.
- Platt, J. (1999). Probabilistic outputs for support vector machines and comparisons to regularized likelihood methods. In *Advances in Large Margin Classifiers*. La calibrazione con pendenza e spostamento.
