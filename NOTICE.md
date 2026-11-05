# màndarínō · che cosa vale per che cosa

| Parte | Dove | Licenza | Testo |
|---|---|---|---|
| Codice dell'app e degli strumenti | `src/` (escluso `src/data/` e `src/audio/music/`), `tools/`, `android/` | MIT | [LICENSE](LICENSE) |
| Contenuti didattici originali: lezioni, dialoghi, esercizi, frasi d'esempio del progetto, corso di italiano | `src/data/` (salvo le eccezioni sotto) | CC BY-NC-SA 4.0 | [LICENZE/CONTENUTI.txt](LICENZE/CONTENUTI.txt) |
| Vocabolario curato (pinyin e significati italiani), derivato in parte da CC-CEDICT | `src/data/vocab/`, `src/data/anatomy-mean.js` | CC BY-SA 4.0 | [LICENZE/CONTENUTI.txt](LICENZE/CONTENUTI.txt) |
| Musica: 22 brani originali | `src/audio/music/` | CC BY-NC-SA 4.0 | [LICENZE/MUSICA.txt](LICENZE/MUSICA.txt) |
| Icone: il set «D2 · Mandarino & Cinabro» (SVG, sprite, manifest, figure del disegno) | `icone/` | CC BY-NC-SA 4.0 | [LICENZE/ICONE.txt](LICENZE/ICONE.txt), [icone/ICONE.md](icone/ICONE.md) |
| Nome «màndarínō» e logo (il mandarino con le foglie e gli accenti dei toni) | dappertutto | **nessuna licenza**: sono un segno distintivo | [MARCHIO.md](MARCHIO.md) |
| Parti di altri | elencate una per una | la loro | [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md), `LICENZE/` |

© 2026 Claudio Longhitano. Per citare l'app basta scrivere «màndarínō, di Claudio Longhitano», con un link al
repository.

**Il nome e il logo non sono compresi nelle licenze.** Il codice (MIT) si può riusare anche in prodotti commerciali; le grafiche, la musica e i contenuti originali (CC BY-NC-SA 4.0) solo per scopi non commerciali, e per l'uso commerciale serve il mio permesso scritto (mandarinoapp@gmail.com). In ogni caso vanno dati i crediti a «màndarínō» e a Claudio Longhitano. Il nome «màndarínō» e il logo, inoltre, non si possono usare per un prodotto che si possa confondere con questo: le regole, e come
riconoscere la versione ufficiale, sono in [MARCHIO.md](MARCHIO.md). Il testo della licenza MIT in [LICENSE](LICENSE) resta quello standard, senza aggiunte.

## Autore, strumenti e proprietà intellettuale

### Titolarità dell'opera
L'applicazione màndarínō è un'opera dell'ingegno ideata, progettata, coordinata e diretta in ogni sua fase da Claudio Longhitano, che ne detiene la titolarità e i diritti d'autore, salvo le parti di altri elencate in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

### Ruolo dell'intelligenza artificiale come strumento
Nello sviluppo del progetto è stato utilizzato il modello di intelligenza artificiale Claude (Anthropic) come strumento assistivo e di supporto alla programmazione. Sotto la diretta e costante supervisione dell'autore, il sistema di IA è stato impiegato per:

- generare bozze di codice, componenti logici e script;
- produrre semilavorati testuali e spunti di arrangiamento musicale;
- ottimizzare porzioni di codice preesistenti.

### Apporto creativo e controllo umano
L'intero nucleo creativo e decisionale è rimasto in capo all'autore umano. L'intervento dell'IA è stato subordinato alle seguenti attività umane, che conferiscono originalità all'opera:

- **Ideazione e architettura:** concepimento dell'applicazione, strutturazione dell'interfaccia (UI/UX) e disegno dell'architettura del software.
- **Contenuti didattici e linguistici:** selezione delle parole (HSK 3.0), redazione delle lezioni di grammatica, definizione delle regole linguistiche e cura dei contenuti.
- **Direzione e revisione:** selezione critica, correzione sintattica e logica, riscrittura di testi, eventuale riassemblaggio e approvazione finale del codice e dei testi.
- **Musica e audio:** composizione, direzione artistica e finalizzazione dei brani musicali e dei contributi audio originali.

### Validazione indipendente
A maggior garanzia della stabilità, della sicurezza e dell'originalità del software, il codice sorgente complessivo è stato sottoposto a una revisione indipendente da parte di un professionista terzo, esterno al progetto.

Dichiaro l'uso dell'IA per trasparenza. Dove una parte non avesse un apporto creativo umano sufficiente per essere tutelata dalla legge sul diritto d'autore (L. 22 aprile 1941, n. 633), voglio comunque che sia usata secondo i termini delle licenze qui sopra.

## Che cosa si può fare, in breve
- **Sempre:** i crediti a «màndarínō» e a Claudio Longhitano, con l'indicazione delle modifiche.
- **Uso non commerciale:** liberissimo per tutto ciò che è CC BY-NC-SA 4.0 (rilasciando le modifiche con la stessa licenza).
- **Uso commerciale:** il codice (MIT) e il vocabolario (CC BY-SA 4.0, con la stessa licenza sulle modifiche) sì; per il resto (lezioni, dialoghi, esercizi, musica, icone) serve il mio permesso scritto: mandarinoapp@gmail.com.
- **Versioni già pubblicate:** restano sotto la licenza con cui sono uscite (CC BY 4.0); la nuova licenza vale per le versioni successive.
- **Scambio linguistico e ricerca sulla memoria:** non cambiano.

## Eccezioni dentro `src/data/`

Questi file hanno la licenza della loro fonte.

| File | Fonte | Licenza |
|---|---|---|
| `strokes.js` | Make Me a Hanzi | Arphic Public License |
| `levels.js`, `freq.js` | complete-hsk-vocabulary | MIT |
| `wiki/zh-it.txt` | wikidict-it, dati di Wikidata | CC0 |
| `it/lexicon.js`, `it/lexicon-*.js` | genere, plurale e forme ricavati da Morph-it! | LGPL, una delle due licenze di Morph-it! |

`levels.js` e `freq.js` sono MIT come il progetto da cui vengono, ma quel progetto raccoglie dati di altri (anche CC BY-SA 4.0, per la frequenza): le fonti, una per una, sono in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

## Contributi

Se mi proponi una correzione o una parola (dall'app, con una issue o per e-mail), accetti che venga pubblicata con la
licenza della parte a cui si aggiunge (CC BY-NC-SA 4.0 o, per il vocabolario, CC BY-SA 4.0) o, se è codice, con la MIT. Per i dettagli vedi [CONTRIBUTING.md](CONTRIBUTING.md).
