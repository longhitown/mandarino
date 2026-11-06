# Google Play: risposte per la Console

Bozza delle risposte ai moduli della Play Console, ricavate dal codice di questa versione (`android/app/src/main/AndroidManifest.xml`,
[PRIVACY.md](../../PRIVACY.md)). **Prima di inviare ogni modulo, rileggi le domande della Console: Google le cambia nel tempo.**
Le voci segnate «DA DECIDERE» non hanno una risposta ovvia e vanno confermate da chi gestisce il progetto. La sezione «Sicurezza dei dati» è stata decisa il 6 novembre 2026.

## Scheda
- **Nome:** `màndarínō: impara il cinese` (27/30). Il marchio resta màndarínō; il resto aiuta chi cerca «app per imparare il cinese».
- **Descrizione breve e lunga:** [it-IT.md](it-IT.md) e [zh-CN.md](zh-CN.md) (fonte: `fastlane/metadata/android/`).
- **Categoria:** Istruzione. **Contatto pubblico:** `mandarinoapp@gmail.com`. **Sito:** `https://mandarinoapp.org/`.
- **Informativa sulla privacy (indirizzo pubblico):** `https://mandarinoapp.org/privacy.html` (si genera da `PRIVACY.md`, in italiano e in cinese).
- **Parole chiave:** Play non ha un campo apposito: la ricerca legge titolo, descrizione breve e descrizione lunga. Usare i termini
  veri (cinese mandarino, HSK, pinyin, hanzi, flashcard) una volta o due, senza elenchi di parole: Google lo considera spam.

## Sicurezza dei dati (Data safety)
Principio: **lo sviluppatore non riceve dati personali.** Sul telefono restano progressi, impostazioni e contributi. Non ci sono analytics, account, pubblicità né server nostri.

**Scelta del 6 novembre 2026: dichiarazione prudente.** Alla domanda «L'app raccoglie o condivide uno o più dei tipi di dati utente richiesti?» si risponde **Sì**, perché due funzioni facoltative mandano qualcosa fuori dal telefono (per Google «raccogliere» = trasmettere dati dall'app fuori dal dispositivo). Dichiarare un po' di più costa poco; dichiarare di meno espone a provvedimenti se Google trova una discrepanza. Le etichette della Console cambiano nel tempo: rileggi le domande.

| Domanda | Risposta |
|---|---|
| L'app raccoglie o condivide tipi di dati utente? | **Sì** (solo le due funzioni facoltative qui sotto) |
| Dati criptati in transito | Sì: le richieste usano HTTPS |
| Cancellazione dei dati | Nessun dato è conservato dallo sviluppatore; i dati locali si cancellano da Impostazioni → Dati e sincronizzazione o disinstallando |
| Pubblicità, acquisti, account | Nessuna pubblicità, nessun acquisto, nessun account |

Tipi di dati da selezionare:
1. **Registrazioni vocali o audio** (esercizi di pronuncia): *facoltativo*; finalità «funzionalità dell'app»; non condiviso (lo elabora il riconoscitore di sistema per conto della persona, e l'app non riceve né salva l'audio).
2. **Altri contenuti generati dall'utente** (il testo cinese letto dalla «Voce online», che può includere quello che la persona incolla nel Lettore): *facoltativo* (spenta di base); finalità «funzionalità dell'app»; **condiviso con una terza parte** (il servizio di sintesi vocale di Google, `translate.googleapis.com`).

Non dichiarare: posizione, contatti, identificativi, acquisti, salute, foto o video. Non sono dati dell'utente nel senso del modulo:
- i pacchetti di dati scaricabili e il controllo del pacchetto voci (`GET` di file pubblici, uguali per tutti, senza dati nostri né cookie né Referer);
- la sincronizzazione cloud, il backup e lo scambio linguistico (azioni della persona, su un file che sceglie lei, fuori dall'app);
- la fotocamera (solo per leggere un QR) e il microfono (registrazioni che restano sul telefono).

Se in futuro si toglie la voce online dall'edizione store (usa un indirizzo di Google Translate non ufficiale), resta solo il riconoscimento vocale di sistema e il punto 2 cade.

**Protezione automatica di Google («Protected with Play»): spenta**, compreso il «controllo del dispositivo». Contraddice la distribuzione su GitHub e F-Droid, non protegge nulla di segreto (il codice è aperto), aggiunge codice di Google e rende diversa la build di Play dalle altre.

**Pacchetto dell'app: `it.mandarino.app`** (definitivo dal primo caricamento; è lo stesso di F-Droid, dell'APK diretto e della chiave di firma).

## Autorizzazioni e dichiarazioni
| Permesso | A che cosa serve |
|---|---|
| `RECORD_AUDIO` | esercizi di pronuncia, oscilloscopio dei toni, scambio linguistico (facoltativo) |
| `CAMERA` | leggere un QR (cambio telefono, sigilli); `uses-feature camera` non obbligatoria |
| `POST_NOTIFICATIONS`, `RECEIVE_BOOT_COMPLETED` | promemoria facoltativo e ripristino dopo il riavvio |
| `FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_MEDIA_PLAYBACK` | musica per studiare in secondo piano. **La Console chiede una dichiarazione per il servizio in primo piano e può chiedere un breve video:** prepara una registrazione dello schermo mentre parte la musica |
| `MODIFY_AUDIO_SETTINGS`, `VIBRATE`, `INTERNET` | gestione audio, vibrazione, le richieste elencate in `PRIVACY.md` |

## Altri moduli
- **Pubblico di destinazione:** non per bambini. Proposta: 13 anni e oltre (lo scambio linguistico è solo per maggiorenni e resta spento di base). DA DECIDERE.
- **Classificazione dei contenuti (IARC):** nessuna violenza, nessun contenuto per adulti, nessun gioco d'azzardo, nessuna interazione fra utenti, nessuna posizione. DA RIPASSARE nel questionario.
- **Annunci:** no. **App governativa / finanziaria / sulla salute:** no.
- **Account personale:** prima del primo rilascio in produzione servono un test chiuso con **almeno 12 tester per 14 giorni** (regola Google per gli account personali creati dopo novembre 2023; verificala nella Console).
- **Firma:** dai la **stessa chiave** di F-Droid e dell'APK diretto, caricandola con lo strumento PEPK **prima** del primo caricamento. Non lasciare che Google ne generi una nuova. Vedi [rilascio.md](rilascio.md).
