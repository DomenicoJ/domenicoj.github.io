# DMJ Lab — www.dmjlab.com

Sito personale di Domenico Maria Jacobone, servito da GitHub Pages (branch `main`, root) sul dominio custom `www.dmjlab.com` (l'apex reindirizza a www) (file `CNAME`).

## Architettura

- `index.html` — pagina unica: CSS inline, metadati SEO/OG, CSP.
- `site/posts.js` — **dati del blog** (sezione Insights), JavaScript puro senza JSX: per aggiungere un articolo si modifica solo questo file e si pusha, **nessuna ricompilazione necessaria**. Il formato dei post è documentato nel commento in testa al file. I post con `body` hanno una pagina propria (`#/insights/<slug>`); quelli senza rimandano al post LinkedIn.
- `site/*.jsx` — **sorgenti** React (contenuti in `data.jsx`, testi legali in `legal.jsx`, componenti e pagine negli altri). Si modificano questi.
- `site/*.js` — **compilati** da `*.jsx` con Babel (preset `react`), ciascuno avvolto in una IIFE. Sono questi che la pagina carica: dopo ogni modifica ai `.jsx` vanno ricompilati.
- `site/vendor/` — React e ReactDOM 18.3.1 production UMD, self-hosted.
- `site/fonts/` — font woff2 self-hosted (Space Grotesk, IBM Plex Sans, IBM Plex Mono) + `fonts.css`. Niente Google Fonts né CDN esterne: scelta GDPR (nessuna comunicazione di IP a terze parti) — non reintrodurre risorse remote senza aggiornare privacy/cookie policy e CSP.
- `insights/` — **pagine statiche degli articoli** per SEO/GEO (le rotte `#/insights/<slug>` della SPA non sono indicizzabili dai crawler). Un archivio (`insights/index.html`), un foglio di stile condiviso (`insights/insights.css`) e una cartella per slug (`insights/<slug>/index.html`) per ogni post **con `body`**; i post solo-LinkedIn compaiono nell'archivio ma non hanno pagina propria. Solo HTML+CSS, nessuno script.
- `chi-sono/`, `servizi/` — **pagine statiche** di profilo e servizi (stesso stile di `insights/`), con JSON-LD ProfilePage, Service e FAQPage: le rotte `#/about` e `#/services` della SPA non sono indicizzabili. Se cambiano i testi in `data.jsx`, aggiornare anche queste.
- `index.html` contiene dentro `#root` una **versione statica della home** per i crawler che non eseguono JavaScript (inclusi quelli dei motori generativi): React la sostituisce al primo render. Va tenuta allineata ai contenuti, inclusi gli ultimi 5 articoli.
- `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt` — indicizzazione: il robots consente tutti i crawler (inclusi quelli dei motori generativi, scelta deliberata); la sitemap elenca home, archivio e articoli; llms.txt è il sommario del sito per i modelli linguistici.

## Quando si aggiunge un articolo (oltre a posts.js)

1. Creare `insights/<slug>/index.html` copiando la struttura di una pagina esistente (title, description = summary, canonical, OG, corpo: paragrafi `<p>`, stringhe `## ` come `<h2>`; escape di `&` → `&amp;`).
2. Aggiungere la voce in cima alla lista di `insights/index.html` e all'elenco di `llms.txt`.
3. Eseguire `node tools/seo-build.js`: aggiorna JSON-LD, navigazione, blocco «Altri articoli» e piè di pagina di tutte le pagine statiche, l'elenco degli ultimi articoli nella home statica, e rigenera `sitemap.xml` e `llms-full.txt`. Segnala le pagine statiche mancanti.

## Link interni e indicizzazione

Google non segue i link `#/...` della SPA. Per questo menu, schede e link «Dal blog» hanno un `href` reale verso le pagine statiche (`/chi-sono/`, `/servizi/`, `/insights/`, `/insights/<slug>/`) e intercettano il click per restare nella SPA (`sectionHref`, `postHref`, `openPost` in `components.jsx`). Non reintrodurre `href="#/..."` per sezioni che hanno una pagina statica.

## Cache e versioni

GitHub Pages serve tutto con `max-age=600`: per 10 minuti i browser possono mescolare pagina nuova e script vecchi (o viceversa), con effetti rotti a metà. Per questo i riferimenti a script e font in `index.html` portano un parametro `?v=…`: **quando si modificano i `.js` compilati o `fonts.css`, incrementare il parametro** (es. `?v=8c` → `?v=8d`) in tutti i riferimenti, così la pagina nuova carica sempre file nuovi. Per il solo `posts.js` (blog) non è indispensabile: al massimo i nuovi articoli compaiono con 10 minuti di ritardo.

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
