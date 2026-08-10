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
  linkedinActivity: "https://www.linkedin.com/in/domenicomjacobone/recent-activity/all/",
  booking: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ25fdYFNy4s7k8p4XTwOJEl0hyUnwYlP2y6g8nMP_lPpxblY4VM_bdHs8lQRb9d30kmZE6MPNdt"
};
const NAV = {
  it: [{
    id: "about",
    label: "Chi sono"
  }, {
    id: "services",
    label: "Servizi"
  }, {
    id: "proposte",
    label: "Proposte"
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
    id: "proposte",
    label: "Work with me"
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
      kicker: "AI Strategist, Consulente, Formatore e Giornalista",
      quote: "La parte più complessa dell'AI non è tecnologica, ma di relazione tra l'essere umano e la macchina.\n\nEd è la parte che mi piace di più.",
      lede: "La tecnologia è l'ingranaggio più facile del processo di cambiamento: migliora da sola ogni sei mesi senza che nessuno glielo chieda. Il collo di bottiglia è spesso l'essere umano, che deve cambiare completamente approccio e abitudini.\nNessun modello, per quanto potente, sposta questa inerzia: lì, dove il software non arriva, intervengo io.",
      cta_primary: "Raccontami la tua sfida",
      cta_secondary: "Come lavoro",
      latest: "Dal blog",
      portrait: "Ritratto di Domenico — foto verticale"
    },
    forwho: {
      kicker: "Per chi",
      title: "Lavoro con chi vuole rimanere al centro del cambiamento tecnologico",
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
    deontologia: {
      kicker: "Deontologia",
      title: "I principi con cui scrivo e lavoro",
      intro: "Da giornalista porto in tutto ciò che faccio — articoli, consulenze, aule — gli stessi doveri che l'Ordine chiede a chi fa informazione:",
      items: [{
        t: "Verità e verifica.",
        d: "Pubblico solo fatti controllati alla fonte, con numeri verificabili; quando cito un dato, dico da dove viene. Se sbaglio, rettifico senza aspettare che me lo chiedano."
      }, {
        t: "Fatti e opinioni separati.",
        d: "Distinguo sempre ciò che è accaduto da ciò che ne penso: l'analisi non si traveste da cronaca."
      }, {
        t: "Rispetto della persona.",
        d: "La dignità e la riservatezza di chi incontro vengono prima della notizia o del caso di studio."
      }, {
        t: "Trasparenza.",
        d: "Dichiaro conflitti d'interesse e contenuti sponsorizzati, e ti dico quando uso strumenti di intelligenza artificiale."
      }, {
        t: "Tutela delle fonti.",
        d: "Chi mi affida un'informazione in confidenza resta protetto."
      }],
      close: "Non è un vezzo: è il motivo per cui sul mio lavoro puoi fidarti dei numeri."
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
    proposte: {
      kicker: "Proposte",
      title: "Come lavoriamo insieme",
      lede: "Tre modi per partire, dal più leggero al più strutturato: una conversazione, un percorso di consulenza, un intervento di formazione. Nessun listino: ogni lavoro parte dal tuo caso, e il preventivo arriva dopo aver capito cosa ti serve davvero.",
      ask: "Non sai da dove cominciare? Partiamo da una chiamata: mezz'ora, senza impegno.",
      askCta: "Prenota una chiamata",
      takeawayLabel: "Cosa porti a casa",
      groups: [{
        idx: "01",
        title: "Appuntamenti",
        note: "Per iniziare a parlarne, senza impegno.",
        cards: [{
          eyebrow: "Il primo passo",
          title: "Chiamata conoscitiva",
          claim: "Trenta minuti per capirci.",
          badges: [{
            t: "Gratuita",
            free: true
          }, {
            t: "30 minuti"
          }, {
            t: "Google Meet"
          }],
          body: "Il primo passo non è un preventivo: è una conversazione. Mi racconti dove sei e cosa ti frena, io ti dico senza giri se e come posso esserti utile — anche quando la risposta onesta è che un consulente non ti serve.",
          takeaway: "Una direzione chiara e un parere sincero, non una proposta commerciale.",
          cta: "Prenota la chiamata",
          action: "booking"
        }, {
          eyebrow: "Sessione di lavoro",
          title: "Sessione strategica 1:1",
          claim: "Un problema reale, sul tavolo.",
          badges: [{
            t: "90 minuti"
          }, {
            t: "In call o in sede"
          }, {
            t: "Su misura"
          }],
          body: "Un blocco di lavoro concentrato sul tuo caso: un processo da automatizzare, uno strumento da scegliere, un team da convincere. Entriamo nel merito e usciamo con i prossimi tre passi, in ordine di priorità.",
          takeaway: "Un piano d'azione essenziale, subito applicabile, e gli strumenti giusti per te.",
          cta: "Parliamone",
          action: "contact"
        }]
      }, {
        idx: "02",
        title: "Consulenze",
        note: "Percorsi su misura, dalla strategia ai progetti.",
        cards: [{
          eyebrow: "Strategia",
          title: "Consulenza AI & Strategia",
          claim: "Dalla curiosità al piano operativo.",
          badges: [{
            t: "Percorso"
          }, {
            t: "In sede / da remoto"
          }, {
            t: "Conforme all'AI Act"
          }],
          body: "Per imprenditori e direzioni che vogliono decidere con metodo. Mappiamo insieme i casi d'uso che spostano davvero i numeri della tua azienda, e li trasformiamo in un piano che puoi eseguire.",
          steps: ["**Mappa dei casi d'uso** che incidono sui tuoi numeri", "**Priorità e stima d'impatto**: cosa prima, cosa dopo", "**Strumenti e governance** conforme all'AI Act", "**Roadmap operativa** con tempi e responsabilità"],
          takeaway: "Una roadmap, non una lista di software: sai cosa fare, in che ordine e perché.",
          cta: "Progettiamo la tua roadmap",
          action: "contact"
        }, {
          eyebrow: "Settore",
          title: "AI per Food & Retail",
          claim: "Vent'anni tra scaffali e cucine, più l'AI.",
          badges: [{
            t: "Food & Retail"
          }, {
            t: "Progetto su misura"
          }, {
            t: "Distribuzione · Ristorazione · Foodtech"
          }],
          body: "Il settore lo conosco da dentro: direzione commerciale, GDO, ristorazione, foodtech. Porto l'intelligenza artificiale dentro problemi che ho vissuto, non su slide teoriche — dai listini alla previsione della domanda, dal punto vendita alla filiera.",
          takeaway: "Progetti d'innovazione che parlano la lingua di chi il food lo fa davvero.",
          cta: "Parliamone",
          action: "contact"
        }]
      }, {
        idx: "03",
        title: "Corsi & interventi",
        note: "Formazione pratica e keynote costruiti sul tuo contesto.",
        cards: [{
          eyebrow: "Formazione",
          title: "Formazione & Bootcamp",
          claim: "Il team operativo sull'AI in settimane, non in anni.",
          badges: [{
            t: "Mezza o una giornata"
          }, {
            t: "In aula o online"
          }, {
            t: "Laboratorio pratico"
          }, {
            t: "Materiali inclusi"
          }],
          body: "Il metodo è sempre lo stesso: prima gli strumenti spiegati bene, poi le mani in pasta sui vostri casi reali. La teoria senza pratica mi fa venire i brividi — e in aula si vede.",
          steps: ["**Gli strumenti spiegati bene**, senza gergo", "**Laboratorio** sui vostri casi di lavoro reali", "**Playbook e materiali** da riusare il giorno dopo"],
          takeaway: "Un team che il lunedì dopo sa già usare l'AI sul lavoro vero.",
          cta: "Progetta la formazione",
          action: "contact"
        }, {
          eyebrow: "Sul palco",
          title: "Keynote & Talk",
          claim: "Il pubblico esce con idee, non solo con applausi.",
          badges: [{
            t: "45–60 minuti"
          }, {
            t: "In presenza o streaming"
          }, {
            t: "Su misura"
          }],
          body: "Interventi su AI e innovazione costruiti sul tuo contesto: casi veri, numeri verificati, zero slide fotocopia. Per convention aziendali, associazioni di categoria, eventi ed enti che vogliono far pensare la propria platea.",
          ticks: ["Taglio scelto sul **tuo pubblico** e sul tuo settore", "Casi concreti e **numeri verificati**, niente fumo", "Una **domanda aperta** che resta anche dopo l'applauso"],
          takeaway: "Un intervento che la tua platea ricorda e cita, non uno slot da riempire.",
          cta: "Richiedi un keynote",
          action: "contact"
        }]
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
      booking: {
        title: "Preferisci parlarne a voce?",
        lede: "Prenota una chiamata conoscitiva di 30 minuti su Google Meet: scegli tu giorno e ora tra quelli liberi.",
        cta: "Prenota un appuntamento"
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
      kicker: "AI Strategist, Consultant, Trainer and Journalist",
      quote: "The most complex part of AI isn't technological — it's the relationship between human and machine.\n\nAnd it's the part I enjoy the most.",
      lede: "Technology is the easiest gear in the process of change: it improves on its own every six months without being asked. The bottleneck is often the human being, who has to completely change approach and habits.\nNo model, however powerful, moves that inertia: there, where software doesn't reach, I step in.",
      cta_primary: "Tell me your challenge",
      cta_secondary: "How I work",
      latest: "From the blog",
      portrait: "Portrait of Domenico — vertical photo"
    },
    forwho: {
      kicker: "Who it's for",
      title: "I work with those who want to stay at the centre of technological change",
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
    deontologia: {
      kicker: "Ethics",
      title: "The principles I write and work by",
      intro: "As a journalist, I bring to everything I do — articles, consulting, classrooms — the same duties the Order asks of those who report the news:",
      items: [{
        t: "Truth and verification.",
        d: "I publish only facts checked at the source, with verifiable numbers; when I cite data, I say where it comes from. If I'm wrong, I correct it without waiting to be asked."
      }, {
        t: "Facts and opinions kept apart.",
        d: "I always separate what happened from what I think of it: analysis doesn't disguise itself as reporting."
      }, {
        t: "Respect for the person.",
        d: "The dignity and privacy of the people I meet come before the story or the case study."
      }, {
        t: "Transparency.",
        d: "I disclose conflicts of interest and sponsored content, and I tell you when I use artificial-intelligence tools."
      }, {
        t: "Protection of sources.",
        d: "Anyone who shares information with me in confidence stays protected."
      }],
      close: "It isn't a flourish: it's why you can trust the numbers in my work."
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
    proposte: {
      kicker: "Work with me",
      title: "How we work together",
      lede: "Three ways to start, from the lightest to the most structured: a conversation, a consulting path, a training session. No price list: every engagement starts from your case, and the quote comes after we've understood what you actually need.",
      ask: "Not sure where to start? Let's begin with a call: half an hour, no strings attached.",
      askCta: "Book a call",
      takeawayLabel: "What you take home",
      groups: [{
        idx: "01",
        title: "Appointments",
        note: "To start talking, with no commitment.",
        cards: [{
          eyebrow: "The first step",
          title: "Intro call",
          claim: "Thirty minutes to get to know each other.",
          badges: [{
            t: "Free",
            free: true
          }, {
            t: "30 minutes"
          }, {
            t: "Google Meet"
          }],
          body: "The first step isn't a quote: it's a conversation. You tell me where you are and what's holding you back, and I tell you straight whether and how I can help — even when the honest answer is that you don't need a consultant.",
          takeaway: "A clear direction and an honest opinion, not a sales pitch.",
          cta: "Book the call",
          action: "booking"
        }, {
          eyebrow: "Working session",
          title: "1:1 strategy session",
          claim: "A real problem, on the table.",
          badges: [{
            t: "90 minutes"
          }, {
            t: "Online or on site"
          }, {
            t: "Tailored"
          }],
          body: "A focused block of work on your case: a process to automate, a tool to choose, a team to convince. We get into the detail and leave with the next three steps, in order of priority.",
          takeaway: "A lean action plan you can apply right away, and the right tools for you.",
          cta: "Let's talk",
          action: "contact"
        }]
      }, {
        idx: "02",
        title: "Consulting",
        note: "Tailored paths, from strategy to projects.",
        cards: [{
          eyebrow: "Strategy",
          title: "AI Consulting & Strategy",
          claim: "From curiosity to an operating plan.",
          badges: [{
            t: "Path"
          }, {
            t: "On site / remote"
          }, {
            t: "AI Act compliant"
          }],
          body: "For entrepreneurs and leadership teams who want to decide with method. Together we map the use cases that actually move your company's numbers, and turn them into a plan you can execute.",
          steps: ["**Use-case map** that affects your numbers", "**Priorities and impact estimate**: what first, what next", "**Tools and governance**, AI Act compliant", "**Operating roadmap** with timelines and ownership"],
          takeaway: "A roadmap, not a list of software: you know what to do, in what order and why.",
          cta: "Let's design your roadmap",
          action: "contact"
        }, {
          eyebrow: "Industry",
          title: "AI for Food & Retail",
          claim: "Twenty years among shelves and kitchens, plus AI.",
          badges: [{
            t: "Food & Retail"
          }, {
            t: "Tailored project"
          }, {
            t: "Distribution · Hospitality · Foodtech"
          }],
          body: "I know the sector from the inside: sales leadership, retail, hospitality, foodtech. I bring artificial intelligence into problems I've lived, not theoretical slides — from pricing to demand forecasting, from the store to the supply chain.",
          takeaway: "Innovation projects that speak the language of those who actually make food happen.",
          cta: "Let's talk",
          action: "contact"
        }]
      }, {
        idx: "03",
        title: "Courses & talks",
        note: "Hands-on training and keynotes built on your context.",
        cards: [{
          eyebrow: "Training",
          title: "Training & Bootcamp",
          claim: "Your team operational on AI in weeks, not years.",
          badges: [{
            t: "Half or full day"
          }, {
            t: "In-room or online"
          }, {
            t: "Hands-on lab"
          }, {
            t: "Materials included"
          }],
          body: "The method is always the same: first the tools explained properly, then hands-on work on your real cases. Theory without practice gives me the shivers — and it shows in the room.",
          steps: ["**The tools explained well**, no jargon", "**Lab** on your real work cases", "**Playbook and materials** to reuse the next day"],
          takeaway: "A team that already knows how to use AI on real work the following Monday.",
          cta: "Design the training",
          action: "contact"
        }, {
          eyebrow: "On stage",
          title: "Keynotes & Talks",
          claim: "The audience leaves with ideas, not just applause.",
          badges: [{
            t: "45–60 minutes"
          }, {
            t: "In person or streaming"
          }, {
            t: "Tailored"
          }],
          body: "Talks on AI and innovation built on your context: real cases, verified numbers, zero photocopied slides. For corporate conventions, trade associations, events and institutions that want to make their audience think.",
          ticks: ["Angle chosen for **your audience** and your sector", "Concrete cases and **verified numbers**, no smoke", "An **open question** that stays after the applause"],
          takeaway: "A talk your audience remembers and quotes, not a slot to fill.",
          cta: "Request a keynote",
          action: "contact"
        }]
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
      booking: {
        title: "Prefer to talk it through?",
        lede: "Book a 30-minute intro call on Google Meet: pick the day and time that suit you.",
        cta: "Book an appointment"
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
