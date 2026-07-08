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
      quote: "L'innovazione è una storia da raccontare, prima che un processo da implementare.",
      lede: "Aiuto imprenditori, PMI e professionisti a scrivere la propria: strategia, formazione e progetti sull'intelligenza artificiale che producono risultati, non presentazioni.",
      cta_primary: "Raccontami la tua sfida",
      cta_secondary: "Come lavoro",
      latest: "Dal blog",
      portrait: "Ritratto di Domenico — foto verticale"
    },
    forwho: {
      kicker: "Per chi",
      title: "Lavoro con chi decide",
      items: [{
        title: "Imprese e PMI",
        body: "Per chi deve decidere se e come portare l'AI in azienda, senza farsi vendere fumo e senza restare a guardare."
      }, {
        title: "Professionisti e studi",
        body: "Per chi vuole moltiplicare il proprio tempo: l'AI come collaboratore affidabile, non come minaccia."
      }, {
        title: "Scuola e PA",
        body: "Per chi forma le persone e amministra la cosa pubblica: adozione responsabile, conforme, sostenibile."
      }]
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
        body: "Dalla curiosità al piano operativo: mappiamo i casi d'uso che spostano i numeri della tua azienda, definiamo priorità, strumenti e governance conforme all'AI Act. Esci con una roadmap, non con una lista di software."
      }, {
        n: "02",
        title: "Keynote & Talk",
        body: "Interventi su AI e innovazione costruiti sul tuo contesto: casi veri, numeri verificati, zero slide fotocopia. Il pubblico esce con idee, non solo con applausi."
      }, {
        n: "03",
        title: "Formazione & Bootcamp",
        body: "Il tuo team operativo sull'AI in settimane, non in anni: prima gli strumenti spiegati bene, poi il laboratorio pratico sui vostri casi reali."
      }, {
        n: "04",
        title: "AI per Food & Retail",
        body: "Vent'anni tra scaffali e cucine, più l'intelligenza artificiale: distribuzione, ristorazione, foodtech. Progetti che parlano la lingua di chi il food lo fa davvero."
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
        n: "7.500+",
        label: "lettori su LinkedIn"
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
      title: "Ogni azienda ha una storia di innovazione da scrivere.",
      lede: "Cominciamo dalla tua: basta una conversazione per capire se posso esserti utile.",
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
      title: "Il mio osservatorio, nella tua posta",
      lede: "Casi concreti, numeri verificati e consigli operativi su AI e innovazione. Quando ho qualcosa da dire, non a scadenza fissa.",
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
      quote: "Innovation is a story to tell, before it is a process to implement.",
      lede: "I help entrepreneurs, SMEs and professionals write their own: strategy, training and artificial-intelligence projects that deliver results, not slide decks.",
      cta_primary: "Tell me your challenge",
      cta_secondary: "How I work",
      latest: "From the blog",
      portrait: "Portrait of Domenico — vertical photo"
    },
    forwho: {
      kicker: "Who it's for",
      title: "I work with those who decide",
      items: [{
        title: "Companies and SMEs",
        body: "For those deciding whether and how to bring AI into the business — without being sold smoke, and without standing still."
      }, {
        title: "Professionals and firms",
        body: "For those who want to multiply their time: AI as a reliable collaborator, not a threat."
      }, {
        title: "Schools and public sector",
        body: "For those who educate people and manage public services: responsible, compliant, sustainable adoption."
      }]
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
        body: "From curiosity to an operating plan: we map the use cases that move your company's numbers, set priorities, tools and AI Act-compliant governance. You leave with a roadmap, not a list of software."
      }, {
        n: "02",
        title: "Keynotes & Talks",
        body: "Talks on AI and innovation built on your context: real cases, verified numbers, zero photocopied slides. The audience leaves with ideas, not just applause."
      }, {
        n: "03",
        title: "Training & Bootcamps",
        body: "Your team operational on AI in weeks, not years: first the tools explained properly, then hands-on labs on your real cases."
      }, {
        n: "04",
        title: "AI for Food & Retail",
        body: "Twenty years among shelves and kitchens, plus artificial intelligence: distribution, hospitality, foodtech. Projects that speak the language of those who actually make food happen."
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
        n: "7,500+",
        label: "readers on LinkedIn"
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
      title: "Every company has an innovation story to write.",
      lede: "Let's start with yours: one conversation is enough to see whether I can help.",
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
      title: "My observatory, in your inbox",
      lede: "Concrete cases, verified numbers and practical advice on AI and innovation. When I have something to say — not on a fixed schedule.",
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
