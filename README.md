# DMJ Lab — www.dmjlab.com

Sito personale di Domenico Maria Jacobone, servito da GitHub Pages (branch `main`, root) sul dominio custom `www.dmjlab.com` (file `CNAME`).

## Architettura

- `index.html` — pagina unica: CSS inline, metadati SEO/OG, CSP.
- `site/posts.js` — **dati del blog** (sezione Insights), JavaScript puro senza JSX: per aggiungere un articolo si modifica solo questo file e si pusha, **nessuna ricompilazione necessaria**. Il formato dei post è documentato nel commento in testa al file. I post con `body` hanno una pagina propria (`#/insights/<slug>`); quelli senza rimandano al post LinkedIn.
- `site/*.jsx` — **sorgenti** React (contenuti in `data.jsx`, testi legali in `legal.jsx`, componenti e pagine negli altri). Si modificano questi.
- `site/*.js` — **compilati** da `*.jsx` con Babel (preset `react`), ciascuno avvolto in una IIFE. Sono questi che la pagina carica: dopo ogni modifica ai `.jsx` vanno ricompilati.
- `site/vendor/` — React e ReactDOM 18.3.1 production UMD, self-hosted.
- `site/fonts/` — font woff2 self-hosted (Space Grotesk, IBM Plex Sans, IBM Plex Mono) + `fonts.css`. Niente Google Fonts né CDN esterne: scelta GDPR (nessuna comunicazione di IP a terze parti) — non reintrodurre risorse remote senza aggiornare privacy/cookie policy e CSP.

## Ricompilare dopo una modifica ai .jsx

Con Node disponibile (anche portatile) e `@babel/standalone` scaricato come `babel.min.js`:

```js
// build.js — eseguire con: node build.js
const fs = require("fs");
const Babel = require("./babel.min.js");
for (const f of ["data", "legal", "components", "pages-home", "pages-inner", "app"]) {
  const src = fs.readFileSync(`site/${f}.jsx`, "utf8");
  const out = Babel.transform(src, { presets: ["react"] }).code;
  fs.writeFileSync(`site/${f}.js`, "(function(){\n" + out + "\n})();\n");
}
```

## Audio

`site/audio/lounge.mp3` — musica di sottofondo opt-in (interruttore nel menu, spenta di default, caricata solo all'attivazione). Fonte: Pixabay, brano "Jazz Lounge Relaxing Background Music" (traditional-jazz-jazz-lounge-relaxing-background-music-537739), Pixabay Content License: uso commerciale consentito, nessuna attribuzione richiesta.

## Form

Contatti e Newsletter inviano a Web3Forms (`https://api.web3forms.com/submit`, consentito nella CSP); le notifiche arrivano a domenico@dmjlab.com. Web3Forms rifiuta le chiamate server-side: testare solo dal browser.
