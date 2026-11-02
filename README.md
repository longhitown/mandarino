# màndarínō · app gratuita per imparare il cinese e l'italiano

**màndarínō** è un'app open source per imparare il **cinese mandarino** (per chi parla italiano) e l'**italiano** (意大利语, per chi parla cinese).
È gratuita, senza pubblicità, senza account e senza tracciamento, e funziona anche **offline**: i progressi restano sul telefono.

| In breve | |
|---|---|
| Prezzo | Gratis, senza acquisti né abbonamenti |
| Pubblicità, account, tracciamento | Nessuno dei tre; non raccoglie dati personali ([PRIVACY.md](PRIVACY.md)) |
| Offline | Sì, dopo la prima apertura o l'installazione |
| Cinese per italiani | 6385 parole HSK 3.0 in 220 sezioni, 32 dialoghi, 55 lezioni di grammatica, ordine dei tratti, toni con il microfono |
| Italiano per chi parla cinese | 51 lezioni spiegate in cinese, con la coniugazione dei verbi |
| Ripasso | Ripetizione a intervalli con FSRS-6 esteso da ML-FSRS-32 (32 parametri per il cinese) |
| Dove | Android (APK) e web installabile (PWA) |
| Licenze | Codice MIT; contenuti didattici, musica e icone CC BY 4.0 |

I numeri sono generati dal codice ([docs/fatti.json](docs/fatti.json)) e il sito ha una pagina per ogni lezione:
[lezioni di cinese](https://mandarinoapp.org/lezioni/), [parole di cinese](https://mandarinoapp.org/parole/),
[意大利语课程](https://mandarinoapp.org/zh/lessons/). Un [confronto con altre app](https://mandarinoapp.org/confronto/app-per-imparare-cinese/), con la fonte di ogni dato e i nostri limiti,
e la pagina dell'[autore](https://mandarinoapp.org/autore/) sono sul sito.

**中文简介：** màndarínō 是一款免费、开源、无广告、无需账号、可离线使用的学习应用：意大利人学中文，中国人学意大利语（意大利语课程共 51 节，用中文讲解）。不收集任何个人数据。
网站：[mandarinoapp.org](https://mandarinoapp.org/zh/)

È un'app web in un solo file, che si installa sul telefono come una normale app (PWA). Per Android c'è anche un APK.

## Provarla

- **Android:** [scarica l'APK](https://github.com/longhitown/mandarino/releases/latest/download/mandarino.apk) e, quando
  il telefono lo chiede, consenti l'installazione da questa fonte.
- **Tutto il resto:** apri la versione web da [mandarinoapp.org](https://mandarinoapp.org) e installala dal browser; lì trovi anche la pagina di presentazione.

## Dove trovi le cose

- La guida completa, in italiano: [LEGGIMI.md](LEGGIMI.md)
- Che cosa succede ai tuoi dati (niente): [PRIVACY.md](PRIVACY.md) · 不收集任何数据
- Dare una mano, anche senza programmare: [CONTRIBUTING.md](CONTRIBUTING.md) · 不会编程也能参与
- Chi ha già dato una mano: [CONTRIBUTORS.md](CONTRIBUTORS.md)
- Licenze: [NOTICE.md](NOTICE.md) e [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)
- Il nome e il logo (come usarli, come riconoscere la versione vera): [MARCHIO.md](MARCHIO.md)
- Le icone (CC BY 4.0), il loro disegno e come riusarle: [icone/ICONE.md](icone/ICONE.md) · [icone/DESIGN.md](icone/DESIGN.md)

## Per chi sviluppa

Le prove si lanciano con `npm install && npm test`. Come sono fatti i moduli: [docs/ARCHITETTURA.md](docs/ARCHITETTURA.md).
Quello che manca è in
[docs/roadmap.md](docs/roadmap.md); le prove su un telefono vero sono in
[docs/checklist-dispositivo.md](docs/checklist-dispositivo.md).

## Sostenere il progetto

[![Sostieni il progetto](docs/img/sostieni.svg)](https://ko-fi.com/mandarinoapp)

màndarínō è gratuita e resta gratuita. Una donazione è del tutto libera e non sblocca nulla. Se vuoi, ti mando in cambio
un sigillo di gratitudine, che assegno a mano: è un codice firmato, solo estetico, e l'app non sa chi ha donato ([come funziona](docs/sigilli.md)).

## Licenze

Il codice è sotto licenza MIT ([LICENSE](LICENSE)); i contenuti didattici, la musica e le icone sono CC BY 4.0; il nome e il logo
non sono compresi nelle licenze ([MARCHIO.md](MARCHIO.md)); le parti di altri sono elencate in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md). Che cosa vale per che cosa lo trovi in
[NOTICE.md](NOTICE.md).

L'ho costruita io, con l'aiuto di Claude, un'intelligenza artificiale: ne parlo, con la dovuta trasparenza, sempre in
[NOTICE.md](NOTICE.md).

© 2026 Claudio Longhitano
