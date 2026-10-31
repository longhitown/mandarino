# Dataset aperto di màndarínō: controllo delle licenze

Stato: **controllo fatto, dataset non ancora pubblicato** (1 novembre 2026). Non è una consulenza legale: è la lettura dei file del progetto
([NOTICE.md](../NOTICE.md), [THIRD-PARTY-NOTICES.md](../THIRD-PARTY-NOTICES.md), le intestazioni dei file in `src/data/`) per decidere che cosa si può
pubblicare e con quali condizioni. Prima di caricare qualunque cosa su GitHub o Hugging Face va riletto con la persona che pubblica.

## Che cosa contiene `src/data/` e che licenza ha

| Dato | Dove | Origine | Licenza | Nel dataset? |
|---|---|---|---|---|
| Vocabolario curato: caratteri, pinyin, significato in italiano, sezione | `src/data/vocab/` | scritto per il progetto (con l'aiuto di Claude); il pinyin è controllato con CC-CEDICT ma non copiato | CC BY 4.0 ([CONTENUTI.txt](../LICENZE/CONTENUTI.txt)) | **Sì (v1)** |
| Livello HSK 3.0 di ogni parola | `src/data/levels.js` | complete-hsk-vocabulary (Yanis Zafirópulos) | MIT | **Sì (v1)**, con l'avviso di copyright MIT |
| Frequenza d'uso | `src/data/freq.js` | complete-hsk-vocabulary | MIT | Sì, come colonna facoltativa |
| Lezioni, dialoghi, esercizi, corso di italiano | `src/data/lessons/`, `src/data/it/lessons/`, `dialogs/` | scritti per il progetto | CC BY 4.0 | Sì (v2: file separato) |
| Frasi d'esempio cinese-italiano | `src/data/ex/frasi-zh.js` e simili | Tatoeba | CC BY 2.0 Francia; ogni frase ha il suo autore in `materiali/crediti/autori-frasi.tsv` | Solo in un file **separato**, con numero di frase e autore |
| Voci italiane (434 clip) | `materiali/audio/it/` | Tatoeba, voce «NM1» | CC BY 4.0 | Non nel dataset di testo |
| Voci cinesi (720 clip) | `materiali/audio/zh/` | Mozilla Common Voice 27.0 | CC0 | Non nel dataset di testo |
| Tratti dei caratteri | `src/data/strokes.js` | Make Me a Hanzi (font Arphic) | Arphic Public License | **No** |
| Struttura dei caratteri, «ricette» dei radicali | `src/data/anatomy.js`, `lab-recipes.js` | Make Me a Hanzi `dictionary.txt` | LGPL 3.0 o successiva | **No** (v1) |
| Genere, plurale e forme dell'italiano | `src/data/it/lexicon.js` | Morph-it! | LGPL (doppia licenza con CC BY-SA 2.0) | **No** (v1) |
| Dati di Wikidata | `src/data/wiki/zh-it.txt` | wikidict-it | CC0 1.0 | Possibile, ma non serve |

## Proposta per la prima versione

**`italian-chinese-hsk3-vocabulary` (v1):** una tabella con `hanzi`, `pinyin`, `italiano`, `sezione`, `livello_hsk`, e (facoltativa) `frequenza`, in CSV e JSON.

- **Licenza dichiarata: CC BY 4.0** (la stessa dei contenuti didattici del progetto), con un file `NOTICE` che nomina complete-hsk-vocabulary (MIT) per i livelli e la frequenza, con il suo testo di licenza accanto.
- **Citazione richiesta:** «màndarínō, di Claudio Longhitano — https://mandarinoapp.org». Il nome e il logo non sono compresi nella licenza ([MARCHIO.md](../MARCHIO.md)): la scheda del dataset lo dice.
- **Scheda del dataset (dataset card):** che cos'è, come è stato costruito (curato nel progetto, controllato con strumenti, con l'aiuto di un'intelligenza artificiale: va detto), che cosa non contiene, i limiti noti (italiano non rivisto da madrelingua cinesi per le glosse in cinese, ecc.), checksum SHA-256 dei file, versione e data.
- **Collegamento con l'app:** nella scheda e nel README, «questo dataset è la base del vocabolario dell'app gratuita màndarínō (mandarinoapp.org)». È vero e verificabile, e porta il nome del progetto accanto ai dati.

**Versione 2, separata:** `…-sentences` con le frasi di Tatoeba (CC BY 2.0 Francia) e gli autori per ogni frase; il file di lezioni e dialoghi (CC BY 4.0).

**Fuori dal dataset di proposito:** tratti e struttura dei caratteri (licenze diverse e condizioni da rispettare), il lessico italiano derivato da Morph-it! (LGPL), le voci. Se un giorno servono, ognuno va in un pacchetto con la propria licenza.

## Punti aperti (da decidere o verificare prima di pubblicare)

1. **Opere prodotte con l'aiuto di un'IA.** In molti paesi la tutela del testo generato dall'IA è incerta ([NOTICE.md](../NOTICE.md) lo dice già): la licenza CC BY 4.0 dichiara come il progetto vuole che sia usato, non garantisce un diritto. È accettabile, ma va scritto nella scheda.
2. **L'elenco HSK ufficiale.** L'elenco delle parole di ciascun livello è una lista di fatti, e nel progetto arriva da una fonte con licenza MIT; la lista ufficiale è però pubblicata da un ente cinese e non abbiamo verificato le sue condizioni d'uso. Nel dataset le parole sono quelle del vocabolario del progetto, con il livello da complete-hsk-vocabulary.
3. **Commit di complete-hsk-vocabulary non annotato** ([THIRD-PARTY-NOTICES.md](../THIRD-PARTY-NOTICES.md)): prima di pubblicare va rigenerato `levels.js` con `tools/levels.mjs` (scrive la data) e annotata la versione nella scheda.
4. **Chi pubblica.** Un account GitHub o Hugging Face della persona che firma il progetto; nessuna chiave o token passa dalla chat. La pubblicazione la fa lei, con i comandi che prepariamo.
5. **Il nome del repository.** Proposta: `longhitown/italian-chinese-hsk3-vocabulary` su GitHub e lo stesso nome su Hugging Face.

## Prossimi passi, in ordine

1. Confermare lo scopo della v1 (qui sopra).
2. Scrivere `tools/dataset.mjs`: esporta CSV e JSON dai file del progetto, scrive `NOTICE`, scheda e checksum, e **si rifiuta di esportare** se trova un dato con licenza non ammessa.
3. Rileggere la scheda con la persona che pubblica; pubblicare a mano.
