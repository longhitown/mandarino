# Duotono: l'orecchio ai toni, sillaba per sillaba

**In due righe:** ascolta una parola di due, tre o quattro sillabe e scegli il tono di ogni sillaba, anche il neutro. Dove il tono cambia parlando, come in 你好 (si scrive nǐ hǎo, si dice ní hǎo), te lo spieghiamo.

È in **Studia**, sotto «Allena l'orecchio» e «Sfida 60 secondi».

## Perché esiste
Nel cinese parlato i toni non stanno fermi: stanno in coppia e si influenzano. Un esercizio sulla sola sillaba isolata non allena l'orecchio a ciò che si sente davvero. Duotono parte dalle parole di due, tre e quattro sillabe (10.814 su circa 12.360: 9.262 + 944 + 608) e dice la verità sul parlato.

## Come funziona
1. **Dieci parole a sessione**, scelte tra quelle che hai già visto (se ne hai viste poche, anche tra le prime del corso). Circa un terzo delle domande sono parole **con sandhi**, un quinto con **tono neutro**, un quinto di tre sillabe e una su otto di quattro; le altre si scelgono combinazione per combinazione, così 4+4 non occupa tutto lo spazio.
2. **Si ascolta** la parola (la voce del telefono, rallentata un po'; «Riascolta» la ripete).
3. **Si sceglie un tono per sillaba**: una riga per sillaba, con cinque pulsanti (1°–4° e neutro; da tastiera 1-4 e 5 o 0 per il neutro, nell'ordine delle sillabe).
4. **La risposta giusta è il tono che si pronuncia davvero**, non quello scritto sul dizionario. Dopo la risposta compaiono hanzi, pinyin, significato e, dove il tono cambia, **«Si dice»** con la forma parlata e la regola.

## Le regole di sandhi che spiega
Sono quelle che dipendono solo dalla parola (quelle che dipendono dalla frase restano fuori):
- **3° + 3° → 2° + 3°** (你好 → ní hǎo). Con **tre** terzi di fila come dirlo dipende dal ritmo: Duotono lo dice senza inventare.
- **不 → bú** davanti a un 4° tono (不是 → bú shì).
- **一 → yí** davanti a un 4° tono, **yì** davanti a 1°, 2° o 3°; **resta yī** a fine parola e dopo 第 o 初; tra due verbi uguali (看一看) è **atono**.
- **Semiterzo**: un 3° tono davanti a un altro tono si dice solo discendente, senza risalire (北京: la prima sillaba resta bassa). È una nota di pronuncia: il pinyin non cambia.

Il pinyin delle nostre fonti riporta già 不 e 一 «di superficie» (bú shì, yìqǐ) ma non il 3+3. Dove la fonte dice altro, vale la fonte (eccezione lessicale).

## Come è stato provato
La funzione `CP.sandhi` (in `src/study/sandhi.js`) è pura e senza dipendenze. È stata confrontata con i valori di riferimento calcolati dal dataset (`script/sandhi.py`) su **tutte le 12.360 parole** del vocabolario, pacchetti compresi: **zero differenze**. Una parte dei vettori (1.307 parole: tutte quelle con sandhi o ambigue, più un campione) è nel repository (`tools/fixtures/sandhi-vettori.json`) e gira a ogni controllo, insieme a casi noti e alle spiegazioni in italiano e in cinese.

## Colore
Il pinyin e i caratteri sono colorati col tono **scritto** (quello del dizionario). Dopo la risposta, «Si dice» mostra anche i caratteri e il pinyin nei colori del tono **parlato**: in 你好 il 你 passa dal colore del 3° a quello del 2°.

## Limiti dichiarati
- La **voce del dispositivo** può non rendere il cambio di tono: la spiegazione scritta è la verità, l'audio è un aiuto.
- Restano fuori le parole con **tre o più terzi toni di fila** (8 su 12.360: come si dicono dipende dal ritmo, le segnaliamo come ambigue) e quelle di **cinque o più sillabe** (12).
- Il **sandhi di frase** (che dipende dal ritmo e dalla segmentazione) non è coperto da questo esercizio; nelle frasi lo gestisce la lettura in contesto (`core/segment.js`).

## Dove si vede il sandhi, oltre all'esercizio
Nella carta di studio, quando una parola cambia tono parlando, sotto il pinyin compare «Come si dice davvero» con la forma parlata. In arrivo: la curva ideale del microfono (Parla) con i toni parlati e il semiterzo, e le coppie di toni come «carte abilità» del ripasso.

Codice: `src/study/duotono.js` (l'esercizio, al primo uso), `src/study/sandhi.js` (la funzione), `src/study/study.js` (il pulsante e la forma parlata sulla carta). Il piano completo è in `mandarino-dataset/docs/PIANO_PROSSIME_PR.md`.
