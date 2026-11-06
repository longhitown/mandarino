# Dataset V3: il grafo italiano ⇄ cinese

Stato: **in preparazione, locale** (6 novembre 2026). Questo documento descrive il dataset V3 che alimenterà il vocabolario e i pacchetti opzionali dell'app. Il dataset **non è in questo repository**: vive in una cartella di lavoro dell'autore, con i suoi script, le sue fonti e il suo registro delle licenze. Questo documento non cambia né i dati né il codice dell'app: descrive come funziona il dataset e le regole che lo governano.

## Idea
Un grafo di parole, costruzioni e modi di dire. I **nodi** sono parole cinesi (`hanzi#pinyin`), lemmi italiani (`it:lemma`), costruzioni (le lezioni), errori tipici, modi di dire e concetti. Gli **archi** dicono come si collegano: `traduce`, `usa_classificatore`, `composto_da` (parola → caratteri, con la lettura giusta: 银行 → 行 *háng*), `stesso_campo_semantico`, `opposto_di`, `calco_sintattico` e `calco_it_per_sinofoni` (le trappole del corso di cinese e del corso di italiano), `separabile_con`, `regge_frame`, `metafora_concettuale`, `ponte_culturale`, `interferenza_fsrs` (omofoni e coppie tonali che si confondono). Ogni arco porta le sue prove, una fiducia (`verificato`, `unica_fonte`, `proposta`) e la sua licenza.

## Le tre regole sulle fonti
| Livello | Che cosa | Può stare nei dati distribuiti |
|---|---|---|
| **A** | scritto per il progetto, o licenza permissiva: lezioni e calchi (CC BY-NC-SA 4.0, come `NOTICE.md`), fatti linguistici e codice (MIT), complete-hsk-vocabulary per i livelli (MIT) | sì |
| **B** | di altri con attribuzione o share-alike: CC-CEDICT, Tatoeba, Morph-it!, Wiktionary (via Wiktextract), il vocabolario curato dell'app (CC BY-SA 4.0) | sì, con attribuzione e licenza |
| **C** | quarantena: libri di testo e dati di cui non possiamo mostrare la licenza | **mai**; si consultano al massimo per verificare una regola, senza copiare frasi, tabelle o esercizi |

Ogni record dichiara le fonti da cui dipende e la licenza che ne risulta; un record che dipende da una fonte di livello C, da una fonte non registrata o da licenze incompatibili (per esempio CC BY-NC-SA e CC BY-SA nello stesso record) non viene compilato. Un file nuovo che nessuno ha classificato è trattato come livello C finché una persona decide. I test del dataset provano anche che nessuna frase cinese di 8 caratteri o sequenza di 6 parole italiane coincida con i testi dei libri di quarantena.

## Che cosa porta in più rispetto al vocabolario di oggi
- **Livelli onesti.** `hsk_v3` solo dalle tabelle HSK 3.0; per le altre parole `extra_hsk` con un livello *stimato* dichiarato come tale (quello del carattere che entra più tardi nell'HSK).
- **Rango di frequenza.** Da complete-hsk-vocabulary. Ha origine in dati CC BY-SA 4.0 (SUBTLEX-CH e altri): nei dati V3 è un campo con la sua licenza e la sua attribuzione, in un file separato per licenza; non è nei dati dell'app oggi (vedi [dataset-licenze.md](dataset-licenze.md)).
- **Equivalenza tipizzata** delle traduzioni: esatta, parziale, idiomatica, calco contrastivo, corrispondenza unica.
- **Classificatori con la loro ragione** (張 per le cose piatte, 条 per le cose lunghe…), 30 chengyu con il modo di dire italiano e la differenza di senso, 15 verbi con la loro costruzione, 15 ponti culturali.
- **Distrattori per gli esercizi**: per ogni parola tre vicini diversi per motivo (stesso suono, stesso classificatore, stesso campo, stesso carattere), mai sinonimi.
- **Pacchetti** per licenza, con SHA-256 e conteggi esatti, e un core autonomo (≈ 250 KB compressi).

## Che cosa non è ancora
- **Nessuna rilettura di un madrelingua.** Le frasi d'esempio dei semi sono per lo più scritte per il progetto (8 su 60 sono attestate nelle lezioni o in Tatoeba). I ponti culturali restano `proposta` e fuori dai pacchetti finché non li legge una persona competente (c'è una scheda pronta, nel formato di [rilettura.md](rilettura.md)).
- **Etichette grammaticali in parte calcolate** (jieba per 2.848 parole) e dichiarate come tali nel campo `pos_fonte`.
- **Categorie dei calchi dell'italiano** assegnate da regole sui testi, non da un madrelingua.
- **Nell'app non c'è ancora niente di tutto questo.** I pacchetti scaricabili sono descritti in [PRIVACY.md](../PRIVACY.md) come funzione prevista; arriveranno con una modifica a parte.

## Determinismo
Ogni file esportato ha chiavi ordinate e record ordinati, e il manifest non porta data: due compilazioni degli stessi dati danno gli stessi SHA-256, bit per bit. Il test lo prova anche rimescolando l'ordine dei dati in ingresso.
