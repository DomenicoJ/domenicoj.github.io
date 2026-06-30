/* DMJ Lab — site content, bilingual IT/EN.
   Placeholders marked [PLACEHOLDER] are safe-to-edit guesses for Domenico to confirm. */

const OWNER = {
  brand: "DMJ Lab",
  fullName: "Domenico Maria Jacobone",
  legalName: "DMJ di Jacobone Domenico Maria",
  address: "Via Aterno Pescara, 52 — 65013 Città Sant'Angelo (PE), Italia",
  email: "domenico@dmjlab.com",
  phone: "+39 342 374 1038",
  cf: "JCBDNC81L04H501X",
  piva: "02453580686",
  sdi: "KRRH6B9",
  domain: "dmjlab.com",
  tagline: "Driving Mindful Innovation",
  linkedin: "https://www.linkedin.com/in/domenicomjacobone",
  linkedinActivity: "https://www.linkedin.com/in/domenicomjacobone/recent-activity/all/",
};

const NAV = {
  it: [
    { id: "about", label: "Chi sono" },
    { id: "services", label: "Servizi" },
    { id: "insights", label: "Insights" },
    { id: "contact", label: "Contatti" },
  ],
  en: [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "insights", label: "Insights" },
    { id: "contact", label: "Contact" },
  ],
};

const CONTENT = {
  it: {
    nav_cta: "Parliamone",
    hero: {
      kicker: "AI Strategist & Innovation Advisor",
      quote: "L'AI non ruba il futuro. Lo consegna a chi ha il coraggio di guidarla.",
      lede: "Aziende, professionisti e PA: trasformo l'intelligenza artificiale da promessa in vantaggio reale.\nStrategia, formazione e visione per usarla in modo etico, umano e concreto.",
      cta_primary: "Lavoriamo insieme",
      cta_secondary: "Scopri i servizi",
      portrait: "Ritratto di Domenico — foto verticale",
    },
    bio: {
      kicker: "Chi sono",
      title: "Vent'anni di mercato, oggi al servizio dell'innovazione.",
      body: [
        "Dopo oltre vent'anni come responsabile commerciale in multinazionali del Food & Beverage, dal 2019 mi sono avvicinato al mondo delle startup e del foodtech, fino a fare dell'innovazione digitale e dell'intelligenza artificiale il centro del mio lavoro.",
        "Oggi, con DMJ Lab, affianco imprese, PMI e professionisti nell'adozione responsabile dell'AI: dalla strategia alla formazione, fino ai progetti operativi. Sono anche formatore e divulgatore, con interventi a eventi, podcast e pubblicazioni di settore.",
      ],
      cta: "Il mio percorso",
    },
    services: {
      kicker: "Servizi",
      title: "Come posso aiutarti",
      lede: "Percorsi su misura per portare l'intelligenza artificiale dentro la tua organizzazione, con metodo e responsabilità.",
      items: [
        { n: "01", title: "Consulenza AI & Strategia", body: "Mappo i casi d'uso ad alto impatto, definisco una roadmap concreta e ti aiuto a scegliere strumenti e governance per adottare l'AI in modo sostenibile e conforme alle normative." },
        { n: "02", title: "Keynote & Talk", body: "Porto sul palco una visione lucida sull'innovazione e sull'AI: interventi pensati per ispirare, dare prospettive nuove e tradurre la tecnologia in opportunità di business." },
        { n: "03", title: "Formazione & Bootcamp", body: "Percorsi formativi e bootcamp pratici per dare al tuo team una mentalità pronta al futuro e competenze reali sull'AI generativa, dall'uso quotidiano alla progettazione." },
        { n: "04", title: "AI per Food & Retail", body: "Unisco vent'anni di esperienza nel Food & Beverage e nel retail alle nuove tecnologie, per progetti di innovazione mirati ai settori che conosco a fondo." },
      ],
    },
    proof: {
      title: "Numeri che raccontano un percorso",
      note: "Dati indicativi — da aggiornare con le cifre verificate.",
      stats: [
        { n: "20+", label: "anni nel mercato e nell'innovazione" },
        { n: "100+", label: "interventi tra eventi, talk e formazione" },
        { n: "AI", label: "al centro di ogni progetto, in modo responsabile" },
      ],
    },
    insights: {
      kicker: "Insights",
      title: "Idee e prospettive sul futuro",
      lede: "Articoli, interventi e riflessioni su intelligenza artificiale, innovazione e impatto sul business — pubblicati su LinkedIn.",
      cta: "Seguimi su LinkedIn",
      linkedinCta: "Leggi tutti i post su LinkedIn",
      readOn: "Leggi su LinkedIn",
      liveNote: "Pubblico costantemente nuovi contenuti su LinkedIn. Qui trovi alcuni temi ricorrenti: clicca per leggere i post originali e gli aggiornamenti più recenti.",
      items: [
        { tag: "AI", title: "IA, Claude e il valore di chi sa porre le domande", summary: "Una riflessione su come l'intelligenza artificiale e strumenti come Claude stiano cambiando il modo di lavorare: la tecnologia amplifica chi sa fare le domande giuste.", date: "2026", url: "https://www.linkedin.com/posts/domenicomjacobone_ia-claude-cashin-share-7476695148257792000-LHu5/" },
        { tag: "Attualità", title: "Heartquake in Venezuela", summary: "Pochi secondi di preavviso: cosa ci insegna un evento sismico sul valore dei sistemi di allerta, della tecnologia e della prontezza di risposta.", date: "2026", url: "https://www.linkedin.com/posts/domenicomjacobone_in-venezuela-pochi-secondi-di-preavviso-share-7476901741427429376-G2Ut/" },
        { tag: "Innovazione", title: "Riflessioni dal mio feed", summary: "Spunti e considerazioni su innovazione, tecnologie emergenti e impatto sul business, condivisi sul mio profilo LinkedIn.", date: "2026", url: "https://www.linkedin.com/feed/update/urn:li:activity:7476643102502477824/" },
      ],
    },
    cta: {
      title: "Portiamo l'AI nel tuo prossimo progetto.",
      lede: "Che sia una consulenza, un keynote o un percorso di formazione, partiamo da una conversazione.",
      button: "Scrivimi",
    },
    contact: {
      kicker: "Contatti",
      title: "Parliamone",
      lede: "Raccontami la tua sfida: ti risponderò personalmente.",
      form: {
        name: "Nome e cognome",
        email: "Email",
        org: "Azienda / organizzazione",
        message: "Il tuo messaggio",
        submit: "Invia messaggio",
        consent: "Ho letto l'informativa privacy e acconsento al trattamento dei miei dati per essere ricontattato.",
        sent: "Grazie! Questo è un prototipo: il messaggio non è stato inviato realmente.",
      },
      directLabel: "Oppure scrivimi direttamente",
    },
    newsletter: {
      title: "Resta aggiornato",
      lede: "Insights su AI e innovazione, ogni tanto, senza spam.",
      placeholder: "La tua email",
      button: "Iscrivimi",
      consent: "Acconsento a ricevere la newsletter e ho letto l'informativa privacy.",
      ok: "Iscrizione registrata (prototipo).",
    },
    aiNotice: {
      short: "Questo sito può utilizzare strumenti basati su intelligenza artificiale. Te lo diciamo con trasparenza.",
      cta: "Trasparenza AI",
    },
  },

  en: {
    nav_cta: "Let's talk",
    hero: {
      kicker: "AI Strategist & Innovation Advisor",
      quote: "Artificial intelligence doesn't replace people. It amplifies those who ask the right questions.",
      lede: "I help companies and professionals turn AI from hype into a real competitive advantage — with strategy, training and projects that actually work.",
      cta_primary: "Work with me",
      cta_secondary: "Explore services",
      portrait: "Portrait of Domenico — vertical photo",
    },
    bio: {
      kicker: "About",
      title: "Twenty years in the market, now serving innovation.",
      body: [
        "After more than twenty years as a sales leader in Food & Beverage multinationals, in 2019 I moved into the world of startups and foodtech, eventually making digital innovation and artificial intelligence the core of my work.",
        "Today, with DMJ Lab, I support companies, SMEs and professionals in the responsible adoption of AI: from strategy to training, all the way to operational projects. I'm also a trainer and speaker, with talks at events, podcasts and industry publications.",
      ],
      cta: "My journey",
    },
    services: {
      kicker: "Services",
      title: "How I can help",
      lede: "Tailored paths to bring artificial intelligence into your organisation, with method and responsibility.",
      items: [
        { n: "01", title: "AI Consulting & Strategy", body: "I map high-impact use cases, define a concrete roadmap and help you choose tools and governance to adopt AI sustainably and in line with regulations." },
        { n: "02", title: "Keynotes & Talks", body: "I bring a clear vision on innovation and AI to the stage: talks designed to inspire, open new perspectives and translate technology into business opportunity." },
        { n: "03", title: "Training & Bootcamps", body: "Hands-on training and bootcamps to give your team a future-ready mindset and real skills in generative AI, from everyday use to design." },
        { n: "04", title: "AI for Food & Retail", body: "I combine twenty years in Food & Beverage and retail with new technologies, for innovation projects focused on the sectors I know deeply." },
      ],
    },
    proof: {
      title: "Numbers that tell a journey",
      note: "Indicative figures — to be updated with verified numbers.",
      stats: [
        { n: "20+", label: "years in market and innovation" },
        { n: "100+", label: "talks, events and training sessions" },
        { n: "AI", label: "at the core of every project, responsibly" },
      ],
    },
    insights: {
      kicker: "Insights",
      title: "Ideas and perspectives on the future",
      lede: "Articles, talks and reflections on artificial intelligence, innovation and business impact — published on LinkedIn.",
      cta: "Follow me on LinkedIn",
      linkedinCta: "Read all posts on LinkedIn",
      readOn: "Read on LinkedIn",
      liveNote: "I constantly publish new content on LinkedIn. Here are some recurring themes: click to read the original posts and the latest updates.",
      items: [
        { tag: "AI", title: "IA, Claude e il valore di chi sa porre le domande", summary: "A reflection on how AI and tools like Claude are changing the way we work: technology amplifies those who ask the right questions.", date: "2026", url: "https://www.linkedin.com/posts/domenicomjacobone_ia-claude-cashin-share-7476695148257792000-LHu5/" },
        { tag: "Current affairs", title: "Heartquake in Venezuela", summary: "A few seconds of warning: what a seismic event teaches us about the value of alert systems, technology and readiness to respond.", date: "2026", url: "https://www.linkedin.com/posts/domenicomjacobone_in-venezuela-pochi-secondi-di-preavviso-share-7476901741427429376-G2Ut/" },
        { tag: "Innovation", title: "Riflessioni dal mio feed", summary: "Thoughts on innovation, emerging technologies and business impact, shared on my LinkedIn profile.", date: "2026", url: "https://www.linkedin.com/feed/update/urn:li:activity:7476643102502477824/" },
      ],
    },
    cta: {
      title: "Let's bring AI into your next project.",
      lede: "Whether it's consulting, a keynote or a training path, it starts with a conversation.",
      button: "Get in touch",
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk",
      lede: "Tell me about your challenge: I'll reply personally.",
      form: {
        name: "Full name",
        email: "Email",
        org: "Company / organisation",
        message: "Your message",
        submit: "Send message",
        consent: "I have read the privacy policy and consent to the processing of my data to be contacted.",
        sent: "Thanks! This is a prototype: the message was not actually sent.",
      },
      directLabel: "Or reach me directly",
    },
    newsletter: {
      title: "Stay updated",
      lede: "Insights on AI and innovation, every now and then, no spam.",
      placeholder: "Your email",
      button: "Subscribe",
      consent: "I agree to receive the newsletter and have read the privacy policy.",
      ok: "Subscription registered (prototype).",
    },
    aiNotice: {
      short: "This site may use artificial-intelligence based tools. We tell you transparently.",
      cta: "AI transparency",
    },
  },
};

Object.assign(window, { OWNER, NAV, CONTENT });
