/* DMJ Lab — manutenzione SEO/GEO delle pagine statiche, a partire da site/posts.js.
   Eseguire dalla radice del repo, dopo aver creato la pagina statica di un nuovo articolo:
     node tools/seo-build.js
   Idempotente: si può rilanciare quante volte si vuole. Aggiorna:
   - pagine articolo: JSON-LD (Article + BreadcrumbList), navigazione, blocco «Altri articoli», piè di pagina;
   - archivio insights/: JSON-LD Blog con blogPost, navigazione, piè di pagina;
   - chi-sono/ e servizi/: piè di pagina;
   - index.html: elenco «Gli ultimi articoli» nel contenuto statico;
   - sitemap.xml (rigenerata) e llms-full.txt (rigenerato). */
const fs = require("fs");

const SITE = "https://www.dmjlab.com";
const TODAY = new Date().toISOString().slice(0, 10);
global.window = {};
eval(fs.readFileSync("site/posts.js", "utf8"));
const posts = window.POSTS.filter((p) => Array.isArray(p.body) && p.body.length)
  .sort((a, b) => b.date.localeCompare(a.date));

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const read = (f) => fs.readFileSync(f, "utf8");
const LD_RE = /<script type="application\/ld\+json">[\s\S]*?<\/script>/;
const ld = (obj) => '<script type="application/ld+json">\n' + JSON.stringify(obj, null, 2) + "\n</script>";

const NAV = '<nav><a href="/chi-sono/">Chi sono</a><a href="/servizi/">Servizi</a><a href="/insights/">Insights</a><a href="/#/contact">Contatti</a></nav>';
const FOOTER = '<footer><div class="wrap foot"><p>© DMJ Lab, Driving Mindful Innovation · DMJ di Jacobone Domenico Maria · P. IVA 02453580686 · <a href="/">dmjlab.com</a> · <a href="/#/privacy">Privacy</a></p></div></footer>';
const AUTHOR = { "@type": "Person", "@id": SITE + "/#person", "name": "Domenico Maria Jacobone", "url": SITE + "/chi-sono/",
  "sameAs": ["https://www.linkedin.com/in/domenicomjacobone", "https://x.com/domenicoj"] };
const PUBLISHER = { "@type": "Organization", "@id": SITE + "/#org", "name": "DMJ Lab", "url": SITE + "/",
  "logo": { "@type": "ImageObject", "url": SITE + "/site/domenico.jpg" } };

function common(h) {
  h = h.replace(/<nav>[\s\S]*?<\/nav>/, NAV);
  h = h.replace(/<footer>[\s\S]*?<\/footer>/, FOOTER);
  return h;
}

// Articoli correlati: prima stessa sezione, poi i più vicini nel tempo.
function related(p) {
  const others = posts.filter((x) => x.slug !== p.slug);
  const dist = (x) => Math.abs(Date.parse(x.date) - Date.parse(p.date));
  const same = others.filter((x) => x.tag === p.tag).sort((a, b) => dist(a) - dist(b));
  const rest = others.filter((x) => x.tag !== p.tag).sort((a, b) => dist(a) - dist(b));
  return [...same, ...rest].slice(0, 4);
}

let missing = [];
for (const p of posts) {
  const f = `insights/${p.slug}/index.html`;
  if (!fs.existsSync(f)) { missing.push(f); continue; }
  let h = read(f);
  const url = `${SITE}/insights/${p.slug}/`;
  const title = (h.match(/<meta property="og:title" content="([^"]*)"/) || [])[1] || esc(p.title);
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": url + "#article", "headline": p.title, "description": p.summary,
      "datePublished": p.date, "dateModified": p.date, "inLanguage": "it", "articleSection": p.tag,
      "wordCount": p.body.join(" ").split(/\s+/).length,
      "mainEntityOfPage": url, "url": url, "image": SITE + "/site/domenico.jpg",
      "author": AUTHOR, "publisher": PUBLISHER,
      "isPartOf": { "@type": "Blog", "@id": SITE + "/insights/#blog", "name": "DMJ Lab, Insights" } },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "DMJ Lab", "item": SITE + "/" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": SITE + "/insights/" },
      { "@type": "ListItem", "position": 3, "name": p.title, "item": url } ] } ] };
  h = h.replace(LD_RE, ld(graph));
  if (!h.includes("article:section")) h = h.replace(/(<meta property="article:author"[^>]*\/>)/, `$1\n<meta property="article:section" content="${esc(p.tag)}" />`);
  const rel = related(p).map((x) => `<li><a href="/insights/${x.slug}/">${esc(x.title)}</a></li>`).join("\n");
  const block = `<!-- correlati -->\n<nav class="related" aria-label="Altri articoli">\n<h2>Altri articoli</h2>\n<ul>\n${rel}\n</ul>\n<p><a href="/insights/">Tutti gli articoli</a> · <a href="/servizi/">Servizi</a> · <a href="/chi-sono/">Chi sono</a></p>\n</nav>\n<!-- /correlati -->`;
  if (h.includes("<!-- correlati -->")) h = h.replace(/<!-- correlati -->[\s\S]*?<!-- \/correlati -->/, block);
  else h = h.replace("</main>", block + "\n</main>");
  fs.writeFileSync(f, common(h));
}

// Archivio
{
  const f = "insights/index.html";
  let h = read(f);
  h = h.replace(LD_RE, ld({ "@context": "https://schema.org", "@type": "Blog", "@id": SITE + "/insights/#blog",
    "name": "DMJ Lab, Insights", "description": "Articoli di Domenico Maria Jacobone su intelligenza artificiale, innovazione, lavoro e strategia.",
    "url": SITE + "/insights/", "inLanguage": "it", "author": AUTHOR, "publisher": PUBLISHER,
    "blogPost": posts.map((p) => ({ "@type": "BlogPosting", "headline": p.title, "url": `${SITE}/insights/${p.slug}/`, "datePublished": p.date })) }));
  fs.writeFileSync(f, common(h));
}
for (const f of ["chi-sono/index.html", "servizi/index.html"]) fs.writeFileSync(f, common(read(f)));

// Home: ultimi articoli nel contenuto statico
{
  const f = "index.html";
  let h = read(f);
  const list = posts.slice(0, 5).map((p) => `<li><a href="/insights/${p.slug}/">${esc(p.title)}</a></li>`).join("\n");
  h = h.replace(/(<h2>Gli ultimi articoli<\/h2>\n<ul>\n)[\s\S]*?(\n<\/ul>)/, `$1${list}$2`);
  fs.writeFileSync(f, h);
}

// Sitemap: solo URL canonici che rispondono 200, lastmod reale
{
  const latest = posts[0] ? posts[0].date : TODAY;
  const urls = [
    [SITE + "/", TODAY], [SITE + "/chi-sono/", TODAY], [SITE + "/servizi/", TODAY], [SITE + "/insights/", latest],
    ...posts.filter((p) => fs.existsSync(`insights/${p.slug}/index.html`)).map((p) => [`${SITE}/insights/${p.slug}/`, p.date]),
  ];
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(([u, d]) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${d}</lastmod>\n  </url>`).join("\n") + "\n</urlset>\n";
  fs.writeFileSync("sitemap.xml", xml);
}

// llms-full.txt
{
  const out = ["# DMJ Lab, testo integrale degli Insights", "",
    "> Articoli di Domenico Maria Jacobone (AI Strategist, consulente, formatore e giornalista, DMJ Lab) su intelligenza artificiale, innovazione e lavoro. Sommario del sito: https://www.dmjlab.com/llms.txt", ""];
  for (const p of posts) {
    out.push(`## ${p.title}`, "", `URL: ${SITE}/insights/${p.slug}/`, `Autore: Domenico Maria Jacobone · Data: ${p.date} · Sezione: ${p.tag}`, "", p.summary, "");
    for (const b of p.body) out.push(b.startsWith("## ") ? "### " + b.slice(3) : b, "");
  }
  fs.writeFileSync("llms-full.txt", out.join("\n"));
}

console.log(`seo-build: ${posts.length} articoli elaborati`);
if (missing.length) { console.log("ATTENZIONE, pagine statiche mancanti:\n  " + missing.join("\n  ")); process.exitCode = 1; }
