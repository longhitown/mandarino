# Dalle schede alle lezioni vere: progetto di riscrittura delle lezioni

Stato: **progetto da approvare** (1 novembre 2026). Non cambia ancora niente nell'app. Riguarda le 55 lezioni di cinese per italiani e le 51 lezioni di
italiano per chi parla cinese (`src/data/lessons/`, `src/data/lessons-x/`, `src/data/it/lessons/`, `src/data/it/lessons-x/`).

## 1. Da dove partiamo

Oggi una lezione è una scheda di sintesi: titolo, obiettivo, 4-5 paragrafi brevi, uno schema, 8 esempi, 2-3 errori tipici, 4-6 esercizi
(in media 1,9 KB di dati per lezione). Funziona per ripassare e per sbloccare un vuoto di memoria; fa poco per **capire**. La differenza che
vogliamo colmare:

| | Scheda di sintesi (oggi) | Lezione vera (obiettivo) |
|---|---|---|
| Scopo | ricordare formule e definizioni | capire come ragiona la lingua, e perché |
| Metodo | la regola subito, poi gli esempi | prima l'osservazione, poi la regola |
| Errori | elenco di frasi sbagliate | l'errore del traduttore: perché lo si fa e come se ne esce |
| Esercizi | scegli, ordina, completa | scegli tra due regole vicine, trasforma, usa in un mini-dialogo |
| Risultato | risposte giuste nel quiz | saper scegliere e produrre nella situazione giusta |

**Non si butta niente.** I campi attuali (`body`, `pattern`, `ex`, `dlg`, `traps`, `quiz`) restano, e ogni lezione continua a funzionare com'è. I campi
nuovi sono tutti facoltativi e si aggiungono lezione per lezione. Una lezione non ancora riscritta si presenta come oggi.

## 2. Le parti nuove di una lezione

Ordine sullo schermo: **Scopri → Regola → Logica → Esempi → Contrasto → Dialogo → Il tranello → Per i più curiosi → Esercizi.**

| Campo (nuovo) | Che cosa è | Note |
|---|---|---|
| `scopri` | 3 frasi mirate e una domanda («guarda dove sta *ieri*: che cosa noti rispetto all'italiano?»); un tocco rivela la risposta e poi si apre la regola | metodo induttivo guidato; ha `esempi`, `domanda`, `risposta` |
| `logica` | «la logica del pensiero»: perché la lingua fa così, in 2-4 frasi | per il cinese: perché 把 mette l'oggetto prima; per l'italiano: perché il genere muove articolo e aggettivo |
| `contrasti` | esercizi in cui si **sceglie tra due regole vicine** nello stesso contesto (还 / 再 / 又, 就 / 才; passato prossimo / imperfetto) | tipo di esercizio `scegli2`: ogni risposta sbagliata ha il suo «perché» |
| `tranello` | scheda «Il tranello»: l'interferenza con la lingua madre (perché lo studente sbaglia, come evitarlo) | `errore`, `perche`, `esci` |
| `focus` | pannello espandibile «Per i più curiosi»: note accademiche, storia, sfumature | progressive disclosure: sul telefono la lezione resta leggera |
| `pragmatica` | quando e con chi si usa (cortesia, formalità, diplomazia) | per esempio «Vorrei un caffè» e «Voglio un caffè» |
| `perche` (nei quiz) | il «perché è sbagliato» per ogni risposta sbagliata, in una frase | sostituisce il solo «la risposta giusta è X» |
| `trasforma` (esercizio) | riscrivere una frase applicando la regola della lezione (con 把, con il passivo; al passato prossimo o all'imperfetto) | si controlla la frase intera, con più risposte accettate |
| `minidialogo` (esercizio) | un buco dentro un dialogo di 2-3 battute: si sceglie in base all'intenzione, non alla frase isolata | al posto di molte frasi slegate |
| `svolta` | segna le lezioni «punti di svolta» (cambiano la mappa mentale): hanno più cura e un breve richiamo delle basi | per esempio 了 in cinese, il passato in italiano |
| `revisione` | `stato` (`bozza`, `controllata`, `riletta da madrelingua`), `da`, `data` | visibile nell'app: la fiducia nasce dall'onestà |

I tag che l'utente ha proposto (`<scoperta>`, `<tranello>`, `<focus>`, `"perche_sbagliato"`) diventano questi campi: l'app legge dati, non markup, così la
build può controllarli uno per uno.

**Ancoraggio al dizionario.** Le parole delle frasi sono già tagliate dal motore (`CP.segment`) e controllate contro il vocabolario dalla build: nella
lezione ogni parola diventa un tocco che apre la sua scheda, senza lasciare la spiegazione.

## 3. Contenuto: come si scrive una lezione vera

Ogni lezione riscritta segue una scaletta fissa (così si controlla e si confronta):

1. **Scopri** (3 frasi e una domanda).
2. **Regola** in 3-5 frasi, con un soggetto e un verbo espliciti (la stessa forma delle risposte che i motori di ricerca citano).
3. **Logica**: il perché.
4. **8-12 esempi**, graduati; per il cinese con il pinyin automatico, per l'italiano con la glossa in cinese.
5. **Contrasto**: almeno 4 esercizi di scelta tra due regole vicine, ognuno con il suo «perché».
6. **Mini-dialogo** di 3-5 battute e almeno 2 esercizi che lo usano.
7. **Il tranello**: un solo errore, quello più frequente, spiegato bene.
8. **Per i più curiosi**: 1-3 note; **Pragmatica** dove serve.
9. **Esercizi di uscita**: 8-12 tra scelta, buco, ordine, scrittura e trasformazione.

Lunghezza attesa: 8-14 KB di dati per lezione, quindi 106 lezioni diventano circa 1-1,3 MB di dati. Vedi la parte tecnica.

### Lezioni pilota (ondata 0)

| Corso | Lezione | Che cosa dimostra |
|---|---|---|
| Cinese | 16 · 把 | `scopri` + `logica` (perché l'oggetto va prima) + `trasforma` |
| Cinese | 12 · 了 (svolta) | `svolta`, `tranello` (了 scambiato per un passato), `focus` sull'aspetto |
| Cinese | 32 · 还, 再, 又 | `contrasti` con `perche` per ogni scelta |
| Cinese | 33 · 就 e 才 | contrasto temporale con mini-dialoghi |
| Italiano | 12 · imperfetto | linea del tempo testuale: sfondo e evento che lo interrompe |
| Italiano | 5 · accordo | l'effetto domino del genere (articolo, nome, aggettivo, colorati) |
| Italiano | 8 · preposizioni | macro-funzioni (moto a luogo / stato in luogo) e contrasto *in Italia / a Roma* |
| Italiano | 21 · condizionale | `pragmatica` (cortesia) e `trasforma` («Voglio…» → «Vorrei…») |

Dopo le otto pilota si decide il formato, poi si procede a ondate di 5-6 lezioni per PR (ondata 1: i «punti di svolta»; poi in ordine di numero).

## 4. Fonti: che cosa possiamo usare, onestamente e con licenza

- **Scrittura originale.** Le spiegazioni si scrivono da capo. I libri di riferimento che ci hai indicato (Masini e altri per il cinese; Tartaglione, Balboni,
  Serianni, Nuovo Espresso per l'italiano) sono protetti: li usiamo come **programma di riferimento** (quali argomenti, in che ordine, a quale livello QCER o HSK) e per
  confrontare le nostre scelte, **non per copiare** testo, esercizi o schemi. Copiare porterebbe anche contenuto protetto dentro una licenza CC BY che non è nostra da dare.
- **Libri scaricati da fonti non legittime: no.** Non per moralismo: sono materiale che non possiamo citare né verificare, e il progetto vive di fonti dichiarate (vedi
  `THIRD-PARTY-NOTICES.md`). Alternative legali: biblioteche (prestito digitale, biblioteche universitarie, Open Library), saggi in accesso aperto, e il tuo acquisto dei volumi che ti servono come riferimento.
- **Dati liberi già in uso:** Tatoeba (frasi e autori, CC BY 2.0 Francia), Mozilla Common Voice (CC0), CC-CEDICT (solo per controllo, CC BY-SA 4.0), Make Me a Hanzi (struttura dei caratteri), Morph-it! (forme dell'italiano).
- **Da consultare, non da copiare:** Wikipedia, Wikibooks e Wiktionary (CC BY-SA: la condivisione allo stesso modo non è compatibile con il nostro CC BY, quindi si leggono e si scrive con parole nostre), Treccani e Accademia della Crusca (consultazione).
- **Etimologie e «logica dei caratteri»:** attenzione alle etimologie popolari. Una nota sul significato letterale di un carattere entra solo se è documentata (struttura da Make Me a Hanzi, altrimenti una fonte accademica citata); altrimenti si scrive «si può immaginare come…», dichiarato come aiuto mnemonico.

## 5. Qualità: come evitiamo di scrivere spiegazioni sbagliate

Una spiegazione sbagliata è peggio di una scheda breve. Il rischio più grande è il cinese, perché nel team non c'è un madrelingua.

1. **Controlli automatici (già in build):** ogni frase usa solo parole del vocabolario; pinyin verificato con CC-CEDICT; l'italiano con Hunspell e Morph-it!.
2. **Nuovi controlli** (in `tools/lib/lab.mjs`): scaletta completa, minimo di esercizi per tipo, ogni risposta sbagliata ha un `perche`, ogni `scopri` ha una risposta, ogni lezione dichiara la sua `revisione`.
3. **Rilettura:** ogni lezione parte come `bozza`; passa a `controllata` dopo la rilettura di chi gestisce il progetto, a `riletta da madrelingua` solo dopo un controllo vero. Lo stato si vede nell'app: «Questa lezione aspetta la rilettura di un madrelingua» è un invito, non una vergogna, e lo trasformiamo nel Libro degli errori (vedi `docs/audit-comportamentale.md`).
4. **Una lezione alla volta:** nessun lotto da 20. Le correzioni dei madrelingua si fanno prima sulle otto pilota.

## 6. Parte tecnica

- **Peso di avvio.** Oggi `LESSONS` e `ITLESSONS` sono script caricati all'avvio (circa 170 KB) e il margine sul limite di 1500 KB è di 4 KB. Le lezioni crescono di 6-8 volte:
  vanno **tutte lazy**. Il meccanismo c'è già: le lezioni dalla 31 in poi stanno in `lessons-x/` e si caricano con `window.__mdLoad.LEZIONIX`; si estende a tutte e a `ITLESSONS`
  (o si usa il blocco `LAZY` di `tools/build.mjs` con JSON letto al primo accesso). Dimensione del file unico stimata: da 4,4 a circa 5,5 MB (la musica pesa molto più); da misurare.
- **Schermata della lezione:** `src/phrases/lessons.js` (cinese) e `src/it/course.js` (italiano): si aggiungono le sezioni nuove in `lessonHTML` e i tipi di esercizio `scegli2`, `trasforma`, `minidialogo` nel motore dei quiz. Il progresso salvato (`cp-lessons…`) non cambia.
- **Controlli:** `tools/lib/lab.mjs` (`checkLessons`) e `tools/lezioni-check.mjs`; test unit per ogni tipo nuovo; e2e per aprire una lezione pilota.
- **Sito:** `tools/pagine.mjs` mostra già i dati delle lezioni come pagine: con i campi nuovi le 106 pagine diventano molto più ricche (domande-risposte, tabelle dei contrasti, tranello) e più utili per chi cerca la grammatica.
- **FSRS grammaticale** (ripasso della struttura, non solo della parola) e il **«Perché è sbagliato?»** nel laboratorio: fasi successive (ondata 3), perché dipendono dai campi nuovi.

## 7. Che cosa mi serve da te

1. Ok al **formato** (sezione 2) e all'ordine sullo schermo, o le tue correzioni.
2. Ok alle **otto lezioni pilota**, o altre.
3. Come far leggere il cinese e l'italiano a madrelingua (la rilettura è il collo di bottiglia): amici, la community, una persona pagata.
4. Se vuoi i riferimenti (Masini, Tartaglione…): dimmi quali volumi hai a disposizione in forma legittima, così posso lavorare da lì (programma e livelli).
