# Pagine per gli assistenti (docs/ai)

Questa cartella è la base del lavoro SEO/AI: testi brevi, veri e citabili, che finiscono in
[llms-full.txt](https://mandarinoapp.org/llms-full.txt) insieme a llms.txt. Chi li legge (un assistente, un motore di ricerca, una
persona) deve poter ripetere ciò che c'è scritto senza rischiare di dire il falso.

## Regole

- **Solo fatti verificabili.** Nessun confronto con altre app, nessuna classifica, nessun numero di utenti o di recensioni: se serve
  un'affermazione su altri, si scrive a mano con data e fonte, in un file a parte.
- **I numeri non si scrivono: si chiamano.** `{{corsoDiCinese.parole}}` viene sostituito dal valore di [fatti.json](../fatti.json)
  (generato dal codice con `node tools/fatti.mjs --scrivi`). Una chiave inesistente ferma la costruzione del sito.
- **Una domanda, una risposta.** Titolo = la domanda come la scriverebbe una persona; sotto, la risposta in poche frasi, poi i dettagli.
- **Due nicchie, due lingue.** Italiani che imparano il cinese (in italiano); persone di lingua cinese che imparano l'italiano (in cinese,
  in un file proprio: il testo non è una traduzione, è scritto per chi lo cerca).
- **Entrano solo i file il cui nome comincia con un numero** (`01-…md`, `02-…md`), in ordine.
- Il tono è quello del progetto: concreto, senza superlativi, senza promesse che il codice non mantiene.
