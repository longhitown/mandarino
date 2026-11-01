# Guida alla scrittura delle lezioni-capitolo

Questa guida serve a chi scrive (persone o agenti) una lezione-capitolo di màndarínō: la versione approfondita di una lezione, con la
qualità di un capitolo di manuale universitario e l'ordine di un percorso di scoperta. Ogni lezione è **un file** in `src/data/lr/`, che si
carica solo quando la lezione si apre (non pesa sull'avvio dell'app).

Il modello da imitare è [`src/data/lr/zh/16-ba.js`](../src/data/lr/zh/16-ba.js): tutte le sezioni, tutti i tipi di esercizio, il tono giusto.
Il controllo automatico (`node tools/lezioni-ricche-check.mjs`) verifica struttura, quantità, lessico e risposte; la qualità didattica si
costruisce con il metodo qui sotto.

## 1. Dove sta e come si chiama

| Corso | Cartella | Chi spiega | Esempi |
|---|---|---|---|
| Cinese per italiani (`zh`) | `src/data/lr/zh/NN-<id>.js` | italiano | cinese, con pinyin automatico |
| Italiano per cinesi (`it`) | `src/data/lr/it/NN-<id>.js` | cinese (semplice, chiaro) | italiano |

`NN` è il numero della lezione a due cifre, `<id>` è l'id che la lezione ha già in `src/data/lessons/` (o `lessons-x/`) per il cinese e in
`src/data/it/lessons/` (o `lessons-x/`) per l'italiano. Il file assegna `LESSON_RICH.<corso>["<id>"] = { … }`. Dopo aver creato o tolto un
file: `node tools/lezioni-indice.mjs` (aggiorna l'elenco in `src/index.html`).

La lezione di base (titolo, obiettivo, esempi, esercizi corti) resta com'è: serve alla ricerca, ai ripassi, al diario e agli altri punti dell'app.
Il capitolo la sostituisce solo nella pagina della lezione.

## 2. Il percorso del capitolo

1. **Scopri** (`scopri`): 3-4 frasi senza spiegazione e una domanda («che cosa noti?»). Chi legge formula da sé la regola; poi preme «Mostra la risposta».
2. **La regola** (`regola`): l'enunciato in una frase netta, lo schema (`schema`, 2-7 pezzi che si leggono come una formula) e 2-8 punti, ciascuno `{ t, ok? }`
   (`ok:false` = «non si fa»).
3. **Il ragionamento** (`logica`, 1-4 paragrafi): perché la lingua funziona così. Confronti con l'altra lingua, l'idea che unifica le eccezioni.
4. **Colpo d'occhio** (`mappa`, facoltativa): una forma visiva che vale più del testo. `tabella`, `catena` (concordanza genere/numero), `timeline`
   (aspetto e tempi: sfondo/evento/abitudine), `albero` (decisione a domande). Usala quando serve davvero.
5. **Esempi** (`esempi`): 10-18 frasi in 2-6 gruppi con un titolo che dice che cosa mostra il gruppo; ogni frase ha traduzione e, se utile, una `nota`.
6. **Scegli la regola giusta** (`contrasti`): 6-10 domande a risposta singola; ogni opzione ha il suo `perche`, anche quelle sbagliate. È la parte che insegna a
   distinguere (la regola contro l'errore che si fa davvero).
7. **Dialogo** (`dialogo`): 4-8 battute A/B in una situazione reale, traduzione nascosta fino a richiesta; 2-4 domande sul dialogo.
8. **Il tranello** (`tranello`): l'errore tipico di chi studia questa lingua (`errore`), perché capita (`perche`), come si evita (`esci`) e 1-4 coppie
   `{ sbagliata, giusta }`.
9. **Per i più curiosi** (`curiosi`, 1-4 voci da aprire): storia, uso regionale, registro, curiosità che spiegano la regola. `pragmatica`: quando, con chi, che tono.
10. **Esercizi** (`esercizi`, 8-14): almeno tre tipi diversi e almeno un `scrivi` o `trasforma`. Tipi: `scegli`, `buco`, `ordine`, `scrivi`, `trasforma`, `minidialogo`.
11. **Che cosa sai fare ora** (`capaci`, 3-5): competenze formulate come azioni («sai chiedere…», «sai scegliere tra…»). Compare nel risultato.

Altri campi: `v: 1`, `svolta: true` (lezione-chiave, con etichetta dedicata), `fonti` (2-12 voci interne, vedi §6).

## 3. Forma dei dati

Vedi `16-ba.js` per un esempio completo. In breve:

```js
LESSON_RICH.zh["id"] = {
  v: 1, svolta: true,
  scopri: { frasi: [{ t: "…", tr: "…" }], domanda: "…", risposta: "…" },
  regola: { enunciato: "…", schema: ["S", "把", "O", "V+altro"], punti: [{ t: "…" }, { t: "…", ok: false }] },
  logica: ["…"],
  mappa: { tipo: "tabella", testa: ["…", "…"], righe: [["…", "…"]] },
  esempi: [{ gruppo: "…", items: [{ t: "…", tr: "…", nota: "…" }] }],
  contrasti: [{ q: "…", ctx: { t: "…" }, opzioni: [{ t: "…", ok: true, perche: "…" }, { t: "…", ok: false, perche: "…" }] }],
  dialogo: { titolo: "…", righe: [{ chi: "A", t: "…", tr: "…" }], esercizi: [{ q: "…", opzioni: [ … ] }] },
  tranello: { errore: "…", perche: "…", esci: "…", esempi: [{ sbagliata: "…", giusta: "…" }] },
  curiosi: [{ titolo: "…", t: "…" }], pragmatica: "…",
  esercizi: [
    { k: "scegli", q: "…", zh: "…", opzioni: [ … ] },
    { k: "buco", zh: "我＿书放在桌子上。", tr: "…", opzioni: [ … ] },
    { k: "ordine", t: "…", tr: "…", alt: ["…"] },
    { k: "scrivi", q: "…", a: "…", accetta: ["…"], perche: "…" },            // con py:true la risposta è pinyin con i toni
    { k: "trasforma", consegna: "…", base: "…", accetta: ["…"], rifiutate: [{ t: "…", perche: "…" }], perche: "…" },
    { k: "minidialogo", righe: [{ chi: "A", t: "…" }, { chi: "B", t: "…＿…", buco: true }], opzioni: [ … ] }
  ],
  capaci: ["…"], fonti: ["…", "…"]
};
```

Testo dentro le stringhe: `**grassetto**` e `[[evidenziato]]`. Nei campi `t` delle frasi da imparare, solo la frase (niente grassetto). Il buco è `＿`.
Ogni opzione ha `ok` (una sola vera per domanda) e `perche`. Nessuna emoji: solo i segnaposto `⟦icona⟧` del set quando serve davvero.

## 4. Qualità: che cosa fa funzionare un capitolo

- **Densità senza fatica.** Un capitolo contiene molto; la fatica la toglie l'ordine: scoperta, regola, ragionamento, esempi, prova, produzione.
  Ogni sezione è breve da leggere e rimane aperta solo ciò che serve in quel momento.
- **La regola prima in una frase, poi in dettaglio.** L'enunciato si ricorda; i punti rispondono ai casi.
- **L'errore vero.** Il tranello e i contrasti partono da ciò che chi parla la lingua dell'utente sbaglia davvero (la lingua madre interferisce: italiano→cinese,
  cinese→italiano). Spiegare **perché** quella forma è sbagliata, non solo che lo è.
- **Esempi originali e naturali.** Frasi scritte per la lezione, di registro quotidiano, con parole di livello HSK 1-3 nel corso di cinese. Niente frasi copiate
  da manuali o corpora; i manuali sono un riferimento del programma, non una fonte di testo.
- **Il «perché» di ogni scelta.** Anche la risposta giusta spiega perché lo è.
- **Produzione.** Almeno un esercizio in cui si scrive o si trasforma; l'ordine delle tessere non basta.
- **Tono.** Chiaro, diretto, un po' di calore; mai paternalistico; mai giudizi sull'utente. Spiegazioni affermative: si dice come funziona la lingua e quando.
  Ciò che ha varianti si descrive con le sue condizioni d'uso («in lingua parlata…», «nello scritto formale…»), come fa un buon manuale.

## 5. Lessico del corso di cinese

Nel corso di cinese **ogni carattere delle frasi cinesi deve stare nel vocabolario dell'app** (`src/data/`: 6385 parole): è ciò che permette pinyin, tocco
sulle parole e dizionario. Preferisci HSK 1-3. Se una parola utile manca, trova un sinonimo del vocabolario o riformula; il controllo segnala i caratteri fuori vocabolario
(`usa caratteri fuori dal vocabolario (…)`). Nelle opzioni e nei contesti dei contrasti è consentito il cinese libero ma resta buona pratica restare nel vocabolario.
Nel corso di italiano le frasi italiane non contengono caratteri cinesi; le spiegazioni sono in cinese semplice.

## 6. Doppio controllo accademico (obbligatorio per ogni lezione)

1. **Fonti incrociate.** Per ogni regola e per ogni esempio non banale, riscontro in almeno due fonti indipendenti, di cui una in inglese o nella lingua madre del
   fenomeno. Per il cinese: grammatiche di riferimento (es. Li & Thompson, *Mandarin Chinese: A Functional Reference Grammar*; Yip & Rimmington, *Chinese: A
   Comprehensive Grammar*; Ross & Ma, *Modern Mandarin Chinese Grammar*), dizionari (CC-CEDICT), corpora (Tatoeba, via `tools/lezioni-check.mjs`). Per l'italiano:
   Serianni, *Grammatica italiana*; Salvi & Vanelli, *Nuova grammatica italiana*; Treccani/Accademia della Crusca; Dardano & Trifone. I riferimenti si citano nel campo `fonti`
   (interno: nome e capitolo/sezione), mai copiando testo.
2. **Verifica automatica.** `node tools/lezioni-ricche-check.mjs <zh|it> <id>` e, per frasi e traduzioni, `node tools/lezioni-check.mjs` (CC-CEDICT/Tatoeba).
3. **Revisione avversaria.** Un secondo revisore, che non ha scritto la lezione, legge solo il file e cerca: regole imprecise, esempi innaturali, risposte
   equivalenti accettate come sbagliate, esercizi con due risposte giuste, traduzioni libere che cambiano senso, spiegazioni che non reggono un controesempio.
   Le correzioni si fanno nel file e si ripete la verifica automatica.
4. **Esame di uso.** Ogni frase cinese: la direbbe una persona madrelingua? Ogni frase italiana: è naturale e di registro corrente? Se la risposta non è sì chiaro, si riscrive.

## 7. Provarla

```bash
node tools/lezioni-ricche-check.mjs zh ba     # struttura, quantità, lessico, una risposta giusta per domanda
node tools/build.mjs                          # costruisce dist/index.html (controlla anche tutte le lezioni ricche)
```

Per vedere la pagina: apri `dist/index.html` → Frasi → Impara → Lezioni → la lezione.

## 8. Regole del progetto per i testi

- Tutto in italiano nelle spiegazioni del corso di cinese, in cinese semplice in quelle del corso di italiano.
- Nessuna emoji letterale; nessuna nota di lavoro dentro il testo; nessun testo preso da altri libri.
- File con fine riga LF.
