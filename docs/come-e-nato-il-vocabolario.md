# Come è nato il vocabolario di màndarínō (e perché è stato così difficile)

Questa pagina racconta, senza abbellire, come sono state costruite le parole dell'app e le loro glosse in italiano. Non è un elogio: serve a dire con precisione **che cosa è stato fatto, da chi o da che cosa, con quali controlli e con quali limiti**.

## In numeri
- **Il dataset di lavoro** (interno al progetto, non pubblicato) raccoglie **12.732 voci** di cinese con pinyin, glossa inglese, glossa italiana, livello HSK, parte del discorso, scomposizione dei caratteri e toni; più i dati di **3.172 caratteri** (tratti, linee centrali, componenti).
- **Nell'app**: 6.388 parole nel corso base e, nei pacchetti opzionali, altre 5.977: **12.365 in tutto**, che includono tutte le 10.969 voci della lista HSK 3.0 di riferimento (complete-hsk-vocabulary).
- **Italiano curato**: 6.324 voci avevano solo una traduzione automatica e sono state rifatte a mano (fase 5); 1.518 voci dei livelli 6–9 sono state completate o rilette nell'ultima fase.

## Da dove viene ogni cosa
| Che cosa | Fonte | Note |
|---|---|---|
| Elenco delle parole e livelli | complete-hsk-vocabulary (MIT), che riporta la lista HSK 3.0 | la stessa lista usata dall'app |
| Pinyin, definizioni inglesi, classificatori | CC-CEDICT (MDBG, CC BY-SA 4.0) | per questo il vocabolario è CC BY-SA 4.0 |
| Italiano | scritto per il progetto, a partire dalla definizione inglese | vedi sotto |
| Genere, plurale e forme dell'italiano; ortografia | Morph-it! (LGPL), dict-it-it | controllo, non traduzione |
| Frasi d'esempio e riscontri | Tatoeba (CC BY 2.0 FR) | attribuzione per ogni frase |
| Tratti, linee centrali, componenti dei caratteri | Make Me a Hanzi (Arphic / LGPL) | |
| Verifica di pinyin e livelli | materiale didattico e liste HSK di terzi | **solo come controllo interno**: nessun testo di terzi entra nell'app o nel repository |

## Come sono state scritte le glosse italiane
1. **Si parte dalla definizione inglese di CC-CEDICT**, che per molte voci è una lista di sensi, un rimando («see …»), un cognome o una variante di un'altra parola.
2. **Un assistente di intelligenza artificiale (Claude, Anthropic), sotto la direzione dell'autore**, legge la definizione e scrive una resa italiana breve, nella forma di un dizionario: verbi all'infinito, sostantivi senza articolo, sensi separati da punto e virgola. Dove la definizione non basta (rimandi, abbreviazioni, voci ambigue), la resa si basa sul significato noto della parola e la voce è **segnalata come da rileggere**.
3. **Controlli automatici**: ogni parola italiana è controllata contro Morph-it! e un dizionario italiano; si confronta la resa con la vecchia traduzione automatica e con le frasi di Tatoeba. Ogni voce riceve un grado di fiducia: **verificato** (almeno due derivazioni indipendenti concordano), **unica fonte**, **da rivedere**.
4. **Audit indipendenti**: il 3 novembre 2026 due revisori diversi (due sessioni di assistenti IA, non lo stesso che aveva scritto i dati) hanno riletto il dataset e prodotto due rapporti; un arbitro ha **ricalcolato da sé** ogni punto in disaccordo prima di applicare una correzione. Le correzioni sono nel codice, non fatte a mano nei file: rigenerando il dataset dagli originali due volte si ottiene lo stesso risultato. Ogni campo cambiato ha la riga «prima/dopo» in un registro di 899 righe.

## Perché è stato difficile
- **Le fonti sbagliano e si contraddicono.** Esempi trovati lavorando: 烈日 che in una fonte significava «Liegi, città del Belgio» (è un'altra parola, 列日) e 美德 «USA e Germania» (significa «virtù»); 58 pinyin troncati alla prima parola per un errore del nostro stesso programma di correzione; 622 caratteri con la lettura non allineata al pinyin della parola (sandhi, toni neutri, polifoni); una traduzione automatica che trasformava «per sempre» in «sempre».
- **Un solo carattere ha più parole.** 觉 è jué e jiào, 作 è zuò e zuō, 与 è yǔ, yú e yù: la lettura giusta dipende dal senso, e le fonti elencano le letture in ordine diverso.
- **L'italiano non è una traduzione parola per parola.** Il cinese ha cognomi, particelle, rimandi e idiomi (chengyu) che in italiano richiedono una resa, non una corrispondenza; e **una parola italiana controllata nell'ortografia può comunque avere il senso sbagliato**: nessun controllo automatico lo vede.
- **Il confronto con liste ufficiali non è banale.** Due liste «HSK 3.0» a noi disponibili dividono i livelli in modo diverso (una a 11.000 voci, l'altra a 10.969 voci uniche): per questo l'app dichiara la lista di riferimento che usa.
- **Licenze.** Il dato più comodo (le definizioni di CC-CEDICT) impone «condividi allo stesso modo»; per questo il vocabolario è CC BY-SA 4.0 e non si può chiudere in una licenza non commerciale.

## Che cosa NON è stato fatto
- **Nessun madrelingua ha riletto tutte le glosse.** Le voci «verificato» hanno un riscontro tra derivazioni indipendenti, ma **non una rilettura umana**. È il lavoro che chiediamo alla community (vedi [la rilettura da madrelingua](rilettura.md)).
- Le **1.518 voci dei livelli 6–9** completate nell'ultima fase sono state scritte e riviste dallo stesso assistente, senza un secondo riscontro automatico: sono la parte meno controllata e sono segnalate come tali nella rilettura.
- Un «nessun errore possibile» non è un obiettivo realistico e non lo promettiamo. L'obiettivo è **nessun errore non rilevabile**: ogni dato ha una fonte e un grado di fiducia, e i controlli lo confrontano con un'altra fonte.

## Dove stanno i dati e come si ricostruiscono
Il dataset di lavoro e gli script che lo costruiscono e lo controllano restano fuori dal repository (contengono materiali di terzi usati solo come verifica). Dentro il repository c'è tutto ciò che serve all'app: `src/data/vocab/` (corso base), `src/data/packs/` (pacchetti, generati da `tools/packs.mjs` dal dataset) e i controlli di `tools/`. Licenze: [LICENZE/CONTENUTI.txt](../LICENZE/CONTENUTI.txt) e [THIRD-PARTY-NOTICES.md](../THIRD-PARTY-NOTICES.md).
