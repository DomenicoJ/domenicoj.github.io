(function(){
/* DMJ Lab — site content, bilingual IT/EN. */

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
  linkedinActivity: "https://www.linkedin.com/in/domenicomjacobone/recent-activity/all/"
};
const NAV = {
  it: [{
    id: "about",
    label: "Chi sono"
  }, {
    id: "services",
    label: "Servizi"
  }, {
    id: "insights",
    label: "Insights"
  }, {
    id: "contact",
    label: "Contatti"
  }],
  en: [{
    id: "about",
    label: "About"
  }, {
    id: "services",
    label: "Services"
  }, {
    id: "insights",
    label: "Insights"
  }, {
    id: "contact",
    label: "Contact"
  }]
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
      portrait: "Ritratto di Domenico — foto verticale"
    },
    bio: {
      kicker: "Chi sono",
      title: "Vent'anni di mercato, oggi al servizio dell'innovazione.",
      body: ["Dopo oltre vent'anni come responsabile commerciale in multinazionali del Food & Beverage, dal 2019 mi sono avvicinato al mondo delle startup e del foodtech, fino a fare dell'innovazione digitale e dell'intelligenza artificiale il centro del mio lavoro.", "Oggi, con DMJ Lab, affianco imprese, PMI e professionisti nell'adozione responsabile dell'AI: dalla strategia alla formazione, fino ai progetti operativi. Sono anche formatore e divulgatore, con interventi a eventi, podcast e pubblicazioni di settore."],
      cta: "Il mio percorso"
    },
    services: {
      kicker: "Servizi",
      title: "Come posso aiutarti",
      lede: "Percorsi su misura per portare l'intelligenza artificiale dentro la tua organizzazione, con metodo e responsabilità.",
      items: [{
        n: "01",
        title: "Consulenza AI & Strategia",
        body: "Mappo i casi d'uso ad alto impatto, definisco una roadmap concreta e ti aiuto a scegliere strumenti e governance per adottare l'AI in modo sostenibile e conforme alle normative."
      }, {
        n: "02",
        title: "Keynote & Talk",
        body: "Porto sul palco una visione lucida sull'innovazione e sull'AI: interventi pensati per ispirare, dare prospettive nuove e tradurre la tecnologia in opportunità di business."
      }, {
        n: "03",
        title: "Formazione & Bootcamp",
        body: "Percorsi formativi e bootcamp pratici per dare al tuo team una mentalità pronta al futuro e competenze reali sull'AI generativa, dall'uso quotidiano alla progettazione."
      }, {
        n: "04",
        title: "AI per Food & Retail",
        body: "Unisco vent'anni di esperienza nel Food & Beverage e nel retail alle nuove tecnologie, per progetti di innovazione mirati ai settori che conosco a fondo."
      }]
    },
    proof: {
      title: "Numeri che raccontano un percorso",
      stats: [{
        n: "20+",
        label: "anni nel mercato e nell'innovazione"
      }, {
        n: "100+",
        label: "interventi tra eventi, talk e formazione"
      }, {
        n: "AI",
        label: "al centro di ogni progetto, in modo responsabile"
      }]
    },
    insights: {
      kicker: "Insights",
      title: "Idee e prospettive sul futuro",
      lede: "Articoli, interventi e riflessioni su intelligenza artificiale, innovazione e impatto sul business — pubblicati su LinkedIn.",
      cta: "Seguimi su LinkedIn",
      linkedinCta: "Leggi tutti i post su LinkedIn",
      readOn: "Leggi su LinkedIn",
      readArticle: "Leggi l'articolo",
      original: "Leggi il post originale su LinkedIn",
      backAll: "Tutti gli insights",
      liveNote: "Pubblico costantemente nuovi contenuti su LinkedIn: qui trovi gli articoli più recenti, adattati per una lettura più comoda, con il rimando al post originale."
    },
    cta: {
      title: "Portiamo l'AI nel tuo prossimo progetto.",
      lede: "Che sia una consulenza, un keynote o un percorso di formazione, partiamo da una conversazione.",
      button: "Scrivimi"
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
        sent: "Grazie! Messaggio inviato: ti risponderò al più presto."
      },
      directLabel: "Oppure scrivimi direttamente"
    },
    newsletter: {
      title: "Resta aggiornato",
      lede: "Insights su AI e innovazione, ogni tanto, senza spam.",
      placeholder: "La tua email",
      button: "Iscrivimi",
      consent: "Acconsento a ricevere la newsletter e ho letto l'informativa privacy.",
      ok: "Iscrizione registrata. Grazie!"
    },
    aiNotice: {
      short: "Questo sito può utilizzare strumenti basati su intelligenza artificiale. Te lo diciamo con trasparenza.",
      cta: "Trasparenza AI"
    }
  },
  en: {
    nav_cta: "Let's talk",
    hero: {
      kicker: "AI Strategist & Innovation Advisor",
      quote: "AI doesn't steal the future. It hands it to those with the courage to lead it.",
      lede: "Companies, professionals and public bodies: I turn artificial intelligence from a promise into a real advantage.\nStrategy, training and vision to use it in an ethical, human, concrete way.",
      cta_primary: "Work with me",
      cta_secondary: "Explore services",
      portrait: "Portrait of Domenico — vertical photo"
    },
    bio: {
      kicker: "About",
      title: "Twenty years in the market, now serving innovation.",
      body: ["After more than twenty years as a sales leader in Food & Beverage multinationals, in 2019 I moved into the world of startups and foodtech, eventually making digital innovation and artificial intelligence the core of my work.", "Today, with DMJ Lab, I support companies, SMEs and professionals in the responsible adoption of AI: from strategy to training, all the way to operational projects. I'm also a trainer and speaker, with talks at events, podcasts and industry publications."],
      cta: "My journey"
    },
    services: {
      kicker: "Services",
      title: "How I can help",
      lede: "Tailored paths to bring artificial intelligence into your organisation, with method and responsibility.",
      items: [{
        n: "01",
        title: "AI Consulting & Strategy",
        body: "I map high-impact use cases, define a concrete roadmap and help you choose tools and governance to adopt AI sustainably and in line with regulations."
      }, {
        n: "02",
        title: "Keynotes & Talks",
        body: "I bring a clear vision on innovation and AI to the stage: talks designed to inspire, open new perspectives and translate technology into business opportunity."
      }, {
        n: "03",
        title: "Training & Bootcamps",
        body: "Hands-on training and bootcamps to give your team a future-ready mindset and real skills in generative AI, from everyday use to design."
      }, {
        n: "04",
        title: "AI for Food & Retail",
        body: "I combine twenty years in Food & Beverage and retail with new technologies, for innovation projects focused on the sectors I know deeply."
      }]
    },
    proof: {
      title: "Numbers that tell a journey",
      stats: [{
        n: "20+",
        label: "years in market and innovation"
      }, {
        n: "100+",
        label: "talks, events and training sessions"
      }, {
        n: "AI",
        label: "at the core of every project, responsibly"
      }]
    },
    insights: {
      kicker: "Insights",
      title: "Ideas and perspectives on the future",
      lede: "Articles, talks and reflections on artificial intelligence, innovation and business impact — published on LinkedIn.",
      cta: "Follow me on LinkedIn",
      linkedinCta: "Read all posts on LinkedIn",
      readOn: "Read on LinkedIn",
      readArticle: "Read the article",
      original: "Read the original post on LinkedIn",
      backAll: "All insights",
      liveNote: "I constantly publish new content on LinkedIn: here you'll find the most recent articles, adapted for easier reading, each linking back to the original post."
    },
    cta: {
      title: "Let's bring AI into your next project.",
      lede: "Whether it's consulting, a keynote or a training path, it starts with a conversation.",
      button: "Get in touch"
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
        sent: "Thank you! Your message has been sent — I'll reply soon."
      },
      directLabel: "Or reach me directly"
    },
    newsletter: {
      title: "Stay updated",
      lede: "Insights on AI and innovation, every now and then, no spam.",
      placeholder: "Your email",
      button: "Subscribe",
      consent: "I agree to receive the newsletter and have read the privacy policy.",
      ok: "Subscription registered. Thank you!"
    },
    aiNotice: {
      short: "This site may use artificial-intelligence based tools. We tell you transparently.",
      cta: "AI transparency"
    }
  }
};
const WEB3FORMS_KEY = "86683b74-437f-48b7-8dbc-0b95f5be3ea6";
Object.assign(window, {
  OWNER,
  NAV,
  CONTENT,
  WEB3FORMS_KEY
});
})();
