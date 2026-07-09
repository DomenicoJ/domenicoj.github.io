(function(){
/* DMJ Lab — legal content (GDPR / ePrivacy / EU AI Act).
   Plain-language but substantive. Returns structured sections rendered by the legal page. */

function legalDocs(L) {
  const o = window.OWNER;
  const it = L === "it";
  const updated = it ? "Ultimo aggiornamento: luglio 2026" : "Last updated: July 2026";
  const titolare = [`${o.legalName}`, it ? `Sede legale: ${o.address}` : `Registered office: ${o.address}`, `C.F. ${o.cf} — P. IVA ${o.piva}`, `Email: ${o.email}`, it ? `Telefono: ${o.phone}` : `Phone: ${o.phone}`];

  // ---------- PRIVACY ----------
  const privacy = {
    title: it ? "Informativa sulla Privacy" : "Privacy Policy",
    intro: it ? `Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.lgs. 196/2003 (Codice Privacy) come modificato dal D.lgs. 101/2018, descriviamo come trattiamo i dati personali raccolti tramite ${o.domain}.` : `Pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR) and Italian Legislative Decree 196/2003 as amended, this notice explains how personal data collected through ${o.domain} is processed.`,
    sections: [{
      h: it ? "Titolare del trattamento" : "Data controller",
      list: titolare
    }, {
      h: it ? "Quali dati trattiamo" : "What data we process",
      list: it ? ["Dati di contatto che fornisci volontariamente tramite il form (nome, email, azienda, contenuto del messaggio).", "Dati che fornisci prenotando un appuntamento tramite la pagina di prenotazione su Google Calendar (nome, cognome, email, data e ora scelte).", "Indirizzo email fornito per l'iscrizione alla newsletter.", "Dati di navigazione e statistici raccolti tramite cookie/analytics, solo previo tuo consenso (es. pagine viste, dispositivo, dati aggregati).", "Dati tecnici (indirizzo IP, log del server) trattati per la sicurezza e il corretto funzionamento del sito."] : ["Contact data you voluntarily provide through the form (name, email, company, message content).", "Data you provide when booking an appointment through the Google Calendar booking page (first name, last name, email, chosen date and time).", "Email address provided to subscribe to the newsletter.", "Navigation and statistical data collected via cookies/analytics, only with your prior consent (e.g. pages viewed, device, aggregated data).", "Technical data (IP address, server logs) processed for security and correct site operation."]
    }, {
      h: it ? "Finalità e basi giuridiche" : "Purposes and legal bases",
      list: it ? ["Rispondere alle tue richieste tramite il form — base giuridica: misure precontrattuali e legittimo interesse (art. 6.1.b/f).", "Gestire gli appuntamenti che prenoti tramite la pagina di prenotazione — base giuridica: misure precontrattuali (art. 6.1.b).", "Invio della newsletter — base giuridica: tuo consenso esplicito (art. 6.1.a), revocabile in ogni momento.", "Analisi statistica e miglioramento del sito — base giuridica: consenso (art. 6.1.a) per i cookie non tecnici.", "Sicurezza, prevenzione abusi e adempimenti di legge — legittimo interesse e obblighi legali (art. 6.1.c/f)."] : ["Responding to your requests via the form — legal basis: pre-contractual measures and legitimate interest (Art. 6.1.b/f).", "Managing the appointments you book through the booking page — legal basis: pre-contractual measures (Art. 6.1.b).", "Sending the newsletter — legal basis: your explicit consent (Art. 6.1.a), revocable at any time.", "Statistical analysis and site improvement — legal basis: consent (Art. 6.1.a) for non-technical cookies.", "Security, abuse prevention and legal compliance — legitimate interest and legal obligations (Art. 6.1.c/f)."]
    }, {
      h: it ? "Conferimento e conseguenze" : "Provision and consequences",
      p: it ? "Il conferimento dei dati di contatto è facoltativo, ma necessario per rispondere alle richieste: senza di essi non potremo ricontattarti. Il consenso alla newsletter e ai cookie statistici è del tutto facoltativo." : "Providing contact data is optional but necessary to respond to requests: without it we cannot contact you back. Consent for the newsletter and statistical cookies is entirely optional."
    }, {
      h: it ? "Destinatari dei dati" : "Data recipients",
      p: it ? "Per erogare i servizi del sito ci avvaliamo di fornitori che agiscono come responsabili del trattamento (art. 28 GDPR): Web3Forms (Cool Devs LLC, USA) per la ricezione e l'inoltro dei messaggi dei form Contatti e Newsletter; GitHub Pages (GitHub, Inc., USA) per l'hosting tecnico; Google Workspace (Google Ireland Limited, Irlanda) per la prenotazione degli appuntamenti tramite Google Calendar e per le videochiamate su Google Meet — la prenotazione avviene su una pagina di Google, esterna a questo sito. Caratteri tipografici e librerie software sono serviti direttamente dal dominio del sito, senza chiamate a reti di distribuzione di terze parti. Tali fornitori trattano i dati solo per nostro conto e su nostre istruzioni. Non vendiamo né cediamo i tuoi dati a terzi per finalità di marketing." : "To run the site we rely on providers acting as data processors (Art. 28 GDPR): Web3Forms (Cool Devs LLC, USA) to receive and forward Contact and Newsletter form messages; GitHub Pages (GitHub, Inc., USA) for technical hosting; Google Workspace (Google Ireland Limited, Ireland) for appointment booking via Google Calendar and video calls on Google Meet — booking takes place on a Google page, outside this site. Fonts and software libraries are served directly from the site's own domain, with no calls to third-party content delivery networks. These providers process data only on our behalf and on our instructions. We do not sell or transfer your data to third parties for marketing."
    }, {
      h: it ? "Trasferimenti extra-UE" : "Transfers outside the EU",
      p: it ? "Alcuni fornitori (in particolare Web3Forms, GitHub e Google) hanno sede negli Stati Uniti e possono trattare i dati al di fuori dello Spazio Economico Europeo. Tali trasferimenti avvengono sulla base della decisione di adeguatezza EU-US Data Privacy Framework e/o di Clausole Contrattuali Standard (SCC) approvate dalla Commissione Europea, con misure supplementari ove necessario." : "Some providers (notably Web3Forms, GitHub and Google) are based in the United States and may process data outside the European Economic Area. Such transfers rely on the EU-US Data Privacy Framework adequacy decision and/or on Standard Contractual Clauses (SCC) approved by the European Commission, with supplementary measures where needed."
    }, {
      h: it ? "Periodo di conservazione" : "Retention period",
      list: it ? ["Richieste dal form: per il tempo necessario a gestirle e fino a 24 mesi successivi.", "Newsletter: fino alla revoca del consenso (disiscrizione).", "Dati analytics: secondo la durata indicata nella Cookie Policy.", "Log tecnici: per il tempo strettamente necessario alla sicurezza."] : ["Form requests: for the time needed to handle them and up to 24 months thereafter.", "Newsletter: until consent is withdrawn (unsubscribe).", "Analytics data: per the duration stated in the Cookie Policy.", "Technical logs: for the time strictly necessary for security."]
    }, {
      h: it ? "I tuoi diritti" : "Your rights",
      p: it ? "Hai il diritto di accesso, rettifica, cancellazione, limitazione, portabilità, opposizione e di revocare il consenso in qualsiasi momento (artt. 15-22 GDPR). Puoi esercitarli scrivendo a:" : "You have the right of access, rectification, erasure, restriction, portability, objection and to withdraw consent at any time (Arts. 15-22 GDPR). You can exercise them by writing to:",
      list: [o.email],
      after: it ? "Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)." : "You also have the right to lodge a complaint with the Italian Data Protection Authority (Garante, www.garanteprivacy.it)."
    }, {
      h: it ? "Processo decisionale automatizzato" : "Automated decision-making",
      p: it ? "Il sito non adotta processi decisionali automatizzati che producano effetti giuridici sull'utente ai sensi dell'art. 22 GDPR. Eventuali strumenti di AI utilizzati sono descritti nell'informativa sulla trasparenza AI." : "The site does not carry out automated decision-making producing legal effects on the user under Art. 22 GDPR. Any AI tools used are described in the AI transparency notice."
    }]
  };

  // ---------- COOKIE ----------
  const cookie = {
    title: it ? "Cookie Policy" : "Cookie Policy",
    intro: it ? "Questo sito utilizza soltanto cookie e strumenti di archiviazione tecnici, necessari al funzionamento e al salvataggio delle tue preferenze. In conformità alle Linee guida del Garante (2021) e alla Direttiva ePrivacy, per questi strumenti non è richiesto il consenso: per questo non trovi un banner all'ingresso. Se in futuro venissero introdotti cookie statistici o di marketing, verrebbero attivati solo previo tuo consenso esplicito." : "This site uses only technical cookies and storage, needed for it to work and to save your preferences. In line with the Italian DPA guidelines (2021) and the ePrivacy Directive, no consent is required for these tools — which is why there is no entry banner. Should statistical or marketing cookies ever be introduced, they would be activated only with your explicit prior consent.",
    sections: [{
      h: it ? "Cookie tecnici (sempre attivi)" : "Technical cookies (always on)",
      p: it ? "Necessari al funzionamento del sito e al salvataggio delle tue preferenze (es. lingua, scelta sui cookie). Non richiedono consenso." : "Necessary for the site to function and to store your preferences (e.g. language, cookie choice). They do not require consent."
    }, {
      h: it ? "Cookie statistici / analytics" : "Statistical / analytics cookies",
      p: it ? "Ci aiutano a capire come viene usato il sito in forma aggregata (es. Google Analytics, ove attivato). Installati solo con il tuo consenso e, ove possibile, con IP anonimizzato. Attualmente il sito non ha strumenti di analytics attivi." : "Help us understand how the site is used in aggregate form (e.g. Google Analytics, where enabled). Installed only with your consent and, where possible, with anonymised IP. The site currently has no active analytics tools."
    }, {
      h: it ? "Cookie di marketing" : "Marketing cookies",
      p: it ? "Eventuali cookie di profilazione di terze parti vengono installati solo previo consenso specifico. Attualmente il sito non utilizza cookie di marketing." : "Any third-party profiling cookies are installed only with specific consent. The site currently uses no marketing cookies."
    }, {
      h: it ? "Hosting e archiviazione locale" : "Hosting and local storage",
      p: it ? "Il sito è ospitato su GitHub Pages: durante la navigazione il browser contatta i server di GitHub, con la comunicazione tecnicamente necessaria del tuo indirizzo IP. Caratteri tipografici, librerie e musica di sottofondo sono serviti dal dominio del sito, senza reti di distribuzione di terze parti. Il sito salva inoltre nel tuo browser (localStorage) solo tre preferenze tecniche: la lingua scelta, le tue scelte sui cookie e l'eventuale attivazione della musica di sottofondo. Nessuno di questi elementi è usato per profilarti." : "The site is hosted on GitHub Pages: while browsing, your browser contacts GitHub's servers, which technically requires sharing your IP address. Fonts, libraries and background music are served from the site's own domain, with no third-party content delivery networks. The site also stores in your browser (localStorage) just three technical preferences: your chosen language, your cookie choices and whether you turned on the background music. None of this is used to profile you."
    }, {
      h: it ? "Gestire il consenso" : "Managing consent",
      p: it ? "Puoi consultare in ogni momento questa pagina dal footer e cancellare cookie e dati salvati direttamente dalle impostazioni del tuo browser." : "You can review this page from the footer at any time, and delete cookies and stored data directly from your browser settings."
    }]
  };

  // ---------- AI ACT ----------
  const ai = {
    title: it ? "Trasparenza sull'Intelligenza Artificiale" : "AI Transparency",
    intro: it ? "In linea con il Regolamento (UE) 2024/1689 (\u201cAI Act\u201d) e con i principi di trasparenza dell'art. 50, dichiariamo in modo chiaro come e dove utilizziamo sistemi di intelligenza artificiale." : "In line with Regulation (EU) 2024/1689 (the \u201cAI Act\u201d) and the transparency principles of Art. 50, we clearly disclose how and where we use artificial intelligence systems.",
    sections: [{
      h: it ? "Uso dell'AI in questo sito" : "Use of AI on this site",
      p: it ? "Alcuni contenuti possono essere prodotti o assistiti da strumenti di AI generativa. Eventuali assistenti virtuali o chatbot, se presenti, sono chiaramente identificati come sistemi automatizzati: stai interagendo con una macchina, non con una persona." : "Some content may be produced or assisted by generative AI tools. Any virtual assistants or chatbots, if present, are clearly identified as automated systems: you are interacting with a machine, not a person."
    }, {
      h: it ? "Contenuti generati o manipolati" : "Generated or manipulated content",
      p: it ? "Quando immagini, audio o testi sono generati artificialmente in modo significativo, lo segnaliamo. Non utilizziamo deepfake o contenuti sintetici ingannevoli." : "Where images, audio or text are significantly artificially generated, we flag it. We do not use deepfakes or deceptive synthetic content."
    }, {
      h: it ? "I servizi AI che offro" : "The AI services I offer",
      p: it ? "Nelle attività di consulenza e formazione adotto un approccio di \u201cAI responsabile\u201d: rispetto della normativa, supervisione umana, attenzione a bias, sicurezza e protezione dei dati. Aiuto i clienti a comprendere i propri obblighi ai sensi dell'AI Act." : "In consulting and training I follow a \u201cresponsible AI\u201d approach: regulatory compliance, human oversight, attention to bias, security and data protection. I help clients understand their obligations under the AI Act."
    }, {
      h: it ? "Supervisione umana" : "Human oversight",
      p: it ? "Le decisioni che ti riguardano restano sotto controllo umano. L'AI è uno strumento di supporto, non un sostituto del giudizio professionale." : "Decisions affecting you remain under human control. AI is a support tool, not a substitute for professional judgement."
    }]
  };

  // ---------- TERMS ----------
  const terms = {
    title: it ? "Termini e Condizioni d'uso" : "Terms & Conditions",
    intro: it ? `L'utilizzo del sito ${o.domain} implica l'accettazione dei presenti termini.` : `Use of the ${o.domain} website implies acceptance of these terms.`,
    sections: [{
      h: it ? "Proprietà dei contenuti" : "Content ownership",
      p: it ? `Tutti i contenuti (testi, grafica, logo, marchi) sono di proprietà di ${o.legalName} o utilizzati con licenza, e sono tutelati dalle norme sul diritto d'autore. È vietata la riproduzione senza autorizzazione.` : `All content (text, graphics, logo, trademarks) is owned by ${o.legalName} or used under licence, and is protected by copyright law. Reproduction without authorisation is prohibited.`
    }, {
      h: it ? "Limitazione di responsabilità" : "Limitation of liability",
      p: it ? "Le informazioni sul sito hanno scopo divulgativo e non costituiscono consulenza professionale vincolante. Pur curandone l'accuratezza, non garantiamo l'assenza di errori o l'aggiornamento costante." : "Information on the site is informational and does not constitute binding professional advice. While we take care over accuracy, we do not guarantee the absence of errors or constant updates."
    }, {
      h: it ? "Link esterni" : "External links",
      p: it ? "Il sito può contenere link a siti terzi, sui cui contenuti non abbiamo controllo e per i quali decliniamo ogni responsabilità." : "The site may contain links to third-party sites, over whose content we have no control and for which we accept no responsibility."
    }, {
      h: it ? "Legge applicabile e foro" : "Governing law and jurisdiction",
      p: it ? "I presenti termini sono regolati dalla legge italiana. Per le controversie con i consumatori è competente il foro del luogo di residenza o domicilio del consumatore; è inoltre disponibile la piattaforma UE di risoluzione online delle controversie (ODR)." : "These terms are governed by Italian law. For disputes with consumers, the court of the consumer's place of residence or domicile has jurisdiction; the EU online dispute resolution (ODR) platform is also available."
    }]
  };
  return {
    updated,
    privacy,
    cookie,
    ai,
    terms
  };
}
Object.assign(window, {
  legalDocs
});
})();
