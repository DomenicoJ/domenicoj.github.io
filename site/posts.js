/* DMJ Lab — blog posts data. PLAIN JS, no JSX: new posts are added here
   WITHOUT any build step — edit this file and push, nothing to recompile.

   Post shape:
   {
     slug: "kebab-case-unique",          // becomes the URL: #/insights/<slug>
     date: "YYYY-MM-DD",                 // used for sorting (newest first)
     dateLabel: "8 luglio 2026",         // shown on cards and article page
     tag: "AI",                          // short category label
     title: "...",                       // Italian title
     summary: "...",                     // Italian card summary (1-2 sentences)
     title_en: "...",                    // optional English title
     summary_en: "...",                  // optional English summary
     body: ["paragraph 1", "..."],       // article paragraphs; a string starting
                                         // with "## " renders as a sub-heading.
                                         // OMIT body to make the card link
                                         // straight to LinkedIn instead.
     linkedin: "https://..."             // original LinkedIn post URL
   }
*/
window.POSTS = [
  {
    slug: "ia-claude-valore-domande",
    date: "2026-06-20",
    dateLabel: "2026",
    tag: "AI",
    title: "IA, Claude e il valore di chi sa porre le domande",
    summary: "Una riflessione su come l'intelligenza artificiale e strumenti come Claude stiano cambiando il modo di lavorare: la tecnologia amplifica chi sa fare le domande giuste.",
    title_en: "AI, Claude and the value of asking the right questions",
    summary_en: "A reflection on how AI and tools like Claude are changing the way we work: technology amplifies those who ask the right questions.",
    linkedin: "https://www.linkedin.com/posts/domenicomjacobone_ia-claude-cashin-share-7476695148257792000-LHu5/"
  },
  {
    slug: "terremoto-venezuela-pochi-secondi",
    date: "2026-06-21",
    dateLabel: "2026",
    tag: "Attualità",
    title: "Terremoto in Venezuela: il valore di pochi secondi",
    summary: "Pochi secondi di preavviso: cosa ci insegna un evento sismico sul valore dei sistemi di allerta, della tecnologia e della prontezza di risposta.",
    title_en: "Earthquake in Venezuela: the value of a few seconds",
    summary_en: "A few seconds of warning: what a seismic event teaches us about the value of alert systems, technology and readiness to respond.",
    linkedin: "https://www.linkedin.com/posts/domenicomjacobone_in-venezuela-pochi-secondi-di-preavviso-share-7476901741427429376-G2Ut/"
  },
  {
    slug: "innovazione-appunti-dal-feed",
    date: "2026-06-18",
    dateLabel: "2026",
    tag: "Innovazione",
    title: "Innovazione e tecnologie emergenti: appunti dal mio feed",
    summary: "Spunti e considerazioni su innovazione, tecnologie emergenti e impatto sul business, condivisi sul mio profilo LinkedIn.",
    title_en: "Innovation and emerging tech: notes from my feed",
    summary_en: "Thoughts on innovation, emerging technologies and business impact, shared on my LinkedIn profile.",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7476643102502477824/"
  }
];
