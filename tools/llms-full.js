/* DMJ Lab — genera llms-full.txt (testo integrale degli articoli per i modelli linguistici)
   a partire da site/posts.js. Eseguire dalla radice del repo con: node tools/llms-full.js */
const fs = require("fs");
global.window = {};
eval(fs.readFileSync("site/posts.js", "utf8"));
const posts = window.POSTS.filter((p) => p.body).sort((a, b) => b.date.localeCompare(a.date));
const out = [
  "# DMJ Lab, testo integrale degli Insights",
  "",
  "> Articoli di Domenico Maria Jacobone (AI Strategist, consulente, formatore e giornalista, DMJ Lab) su intelligenza artificiale, innovazione e lavoro. Sommario del sito: https://www.dmjlab.com/llms.txt",
  "",
];
for (const p of posts) {
  out.push(`## ${p.title}`, "");
  out.push(`URL: https://www.dmjlab.com/insights/${p.slug}/`);
  out.push(`Autore: Domenico Maria Jacobone · Data: ${p.date} · Sezione: ${p.tag}`, "");
  out.push(p.summary, "");
  for (const b of p.body) out.push(b.startsWith("## ") ? "### " + b.slice(3) : b, "");
}
fs.writeFileSync("llms-full.txt", out.join("\n"));
console.log(`llms-full.txt: ${posts.length} articoli`);
