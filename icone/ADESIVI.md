# Gli adesivi di màndarínō

Le 158 icone del set come adesivi a sagoma (il glifo con un bordo color carta di riso, trasparenti), per Telegram e WhatsApp. Si costruiscono con
`node tools/icone-kit.mjs`, che scrive in `dist-kit/` il pacchetto `mandarino-adesivi-<versione>.zip` e le somme SHA-256 da mettere in
[ICONE.md](ICONE.md). La licenza è la stessa delle icone (CC BY 4.0, [ICONE.md](ICONE.md)); il nome e il logo restano fuori ([MARCHIO.md](../MARCHIO.md)).

## Che cosa c'è nel pacchetto

| Cartella | Contenuto |
|---|---|
| `telegram/1-interfaccia-e-vita`, `telegram/2-studio` | I pacchetti già divisi per Telegram (fino a 120 adesivi ciascuno): 103 e 55 adesivi |
| `whatsapp/1-di-6` … `whatsapp/6-di-6` | Sei pacchetti da 26-27 adesivi per WhatsApp (il massimo per pacchetto è 30), ognuno con `tray.png` (96 × 96) |
| `webp/`, `png/` | Tutti gli adesivi in un'unica cartella, in WebP e in PNG, 512 × 512, trasparenti |
| `ELENCO.tsv` | Per ogni file: nome, emoji da associare (Telegram la chiede per la ricerca) e nome in italiano e in cinese |

Ogni adesivo pesa meno di 20 KB: sotto i limiti di Telegram (512 KB) e di WhatsApp (100 KB). I limiti di una piattaforma cambiano: prima di
pubblicare, controlla le regole ufficiali ([Telegram](https://core.telegram.org/stickers), [WhatsApp](https://github.com/WhatsApp/stickers)).

## Per chi li usa: come si aggiungono

**Telegram.** Quando il pacchetto è pubblicato, in questa pagina e in Impostazioni → Social ci sarà un collegamento: tocchi, Telegram si apre,
tocchi «Aggiungi adesivi». Fatto. (Funziona anche dal computer.)

**WhatsApp.** WhatsApp non ha collegamenti diretti: i pacchetti si aggiungono con un'app. Per questo l'app Android di màndarínō avrà un pulsante
«Aggiungi a WhatsApp» (usa il meccanismo ufficiale di WhatsApp, e non carica niente in rete). Su iPhone e dal computer, finché non ci sarà,
si possono usare le immagini come adesivi con le app di terzi che le importano: il pacchetto contiene i file pronti.

## Per chi li pubblica: Telegram, passo passo

Si fa una volta sola, dal tuo account Telegram, senza dare password o chiavi a nessuno: il bot ufficiale **@Stickers** chiede solo di caricare i file.

1. Apri Telegram e cerca **@Stickers** (il bot ufficiale, con la spunta azzurra). Scrivi `/newpack`.
2. Scegli il tipo: **adesivi statici**. Dai un nome al pacchetto (per esempio «màndarínō · interfaccia e vita»).
3. Carica gli adesivi **come file** (non come foto): dalla cartella `telegram/1-interfaccia-e-vita/`, uno alla volta. Dopo ogni file il bot chiede
   un'emoji: usa quella della seconda colonna di `ELENCO.tsv`.
4. Scrivi `/publish`. Il bot chiede l'immagine d'icona del pacchetto: scrivi `/skip` (o carica `mandarin.webp`).
5. Scegli il nome breve: diventa l'indirizzo `https://t.me/addstickers/<nome-breve>`. Per esempio `mandarino_interfaccia`.
6. Ripeti per `telegram/2-studio/` (`mandarino_studio`).
7. Scrivi gli indirizzi in `src/data/social.js` (la voce `telegram`) o dimmi quali sono, e li aggiungo.

Il bot può rifiutare un file troppo pesante o con un lato diverso da 512 px: i nostri sono già a norma. Se manca un'emoji, scegline una qualsiasi:
serve solo alla ricerca, non cambia l'adesivo.

## Per chi li pubblica: WhatsApp

WhatsApp accetta pacchetti da **3 a 30** adesivi, ognuno con `tray.png`. I pacchetti si aggiungono dall'app che li contiene; la guida
ufficiale e un esempio di app sono in [github.com/WhatsApp/stickers](https://github.com/WhatsApp/stickers). Nell'app di màndarínō (Android) il
pulsante «Aggiungi a WhatsApp» arriverà in una PR a parte, con i sei pacchetti già dentro l'app.

## WeChat

WeChat ha una sua galleria di adesivi con una procedura di richiesta e un controllo prima della pubblicazione. Non l'abbiamo ancora verificata:
quando si farà, i file di `webp/` e `png/` sono il punto di partenza.
