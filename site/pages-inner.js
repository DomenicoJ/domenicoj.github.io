(function(){
/* DMJ Lab — inner pages: About, Services, Insights, Contact */

const {
  useState
} = React;
function PageHero({
  kicker,
  title,
  lede
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement(Kicker, null, kicker), /*#__PURE__*/React.createElement("h1", null, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "page-lede"
  }, lede));
}
function AboutPage({
  lang,
  go
}) {
  const it = lang === "it";
  const c = window.CONTENT[lang].bio;
  const o = window.OWNER;
  const timeline = it ? [{
    y: "2003—2019",
    t: "Vent'anni nel Food & Beverage",
    d: "Responsabile commerciale in multinazionali italiane e internazionali del settore."
  }, {
    y: "2019",
    t: "Verso startup e foodtech",
    d: "Direzione commerciale in una PMI innovativa del foodtech per la ristorazione."
  }, {
    y: "2018—oggi",
    t: "Formazione & divulgazione",
    d: "Docenze, articoli e interventi su innovazione digitale, food delivery e tecnologie emergenti."
  }, {
    y: "Oggi",
    t: "DMJ Lab — AI & Innovazione",
    d: "Consulenza, keynote e formazione per l'adozione responsabile dell'intelligenza artificiale."
  }] : [{
    y: "2003—2019",
    t: "Twenty years in Food & Beverage",
    d: "Sales leader in Italian and international multinationals."
  }, {
    y: "2019",
    t: "Into startups and foodtech",
    d: "Sales director at an innovative foodtech SME for hospitality."
  }, {
    y: "2018—now",
    t: "Training & outreach",
    d: "Lectures, articles and talks on digital innovation, food delivery and emerging tech."
  }, {
    y: "Now",
    t: "DMJ Lab — AI & Innovation",
    d: "Consulting, keynotes and training for the responsible adoption of AI."
  }];
  return /*#__PURE__*/React.createElement("main", {
    className: "page"
  }, /*#__PURE__*/React.createElement(PageHero, {
    kicker: it ? "Chi sono" : "About",
    title: c.title,
    lede: it ? "«L'innovazione è una storia da raccontare, prima che un processo da implementare.»" : "“Innovation is a story to tell, before it is a process to implement.”"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section about-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-portrait"
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: it ? "Ritratto di Domenico" : "Portrait of Domenico",
    ratio: "4 / 5",
    src: "site/domenico.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "about-text"
  }, c.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)), /*#__PURE__*/React.createElement("p", null, it ? "Credo in un'innovazione che si misura: se non cambia i numeri o il modo di lavorare delle persone, non è innovazione — è intrattenimento." : "I believe in innovation you can measure: if it doesn't change the numbers or the way people work, it isn't innovation — it's entertainment.")))), /*#__PURE__*/React.createElement("section", {
    className: "section timeline-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Kicker, null, it ? "Percorso" : "Journey"), /*#__PURE__*/React.createElement("h2", null, it ? "Le tappe principali" : "Key milestones")), /*#__PURE__*/React.createElement("ol", {
    className: "timeline"
  }, timeline.map((tl, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-year"
  }, tl.y), /*#__PURE__*/React.createElement("div", {
    className: "tl-body"
  }, /*#__PURE__*/React.createElement("h3", null, tl.t), /*#__PURE__*/React.createElement("p", null, tl.d)))))), /*#__PURE__*/React.createElement(CtaBand, {
    lang: lang,
    go: go,
    dir: "solid"
  }));
}
function ServicesPage({
  lang,
  go
}) {
  const it = lang === "it";
  const c = window.CONTENT[lang].services;
  const how = it ? [{
    n: "1",
    t: "Ascolto",
    d: "Prima di proporre, ascolto: il contesto, gli obiettivi e i vincoli reali della tua organizzazione. Il generico non esiste."
  }, {
    n: "2",
    t: "Comprensione",
    d: "Trasformo ciò che ho ascoltato in una lettura chiara: priorità, casi d'uso che contano e una roadmap sostenibile e conforme."
  }, {
    n: "3",
    t: "Messa a terra",
    d: "Formazione, progetti pilota e affiancamento fino al risultato: l'innovazione che non atterra resta una promessa."
  }] : [{
    n: "1",
    t: "Listening",
    d: "Before proposing anything, I listen: your organisation's context, goals and real constraints. Generic doesn't exist."
  }, {
    n: "2",
    t: "Understanding",
    d: "I turn what I've heard into a clear reading: priorities, the use cases that matter, and a sustainable, compliant roadmap."
  }, {
    n: "3",
    t: "Landing it",
    d: "Training, pilot projects and hands-on support all the way to the result: innovation that doesn't land is just a promise."
  }];
  const team = it ? "E quando la sfida chiede più mani, non sono solo: ho costruito una squadra di professionisti che condividono gli stessi valori, con competenze pronte ad affrontare qualunque sfida nel campo dell'innovazione e dell'intelligenza artificiale." : "And when the challenge calls for more hands, I'm not alone: I've built a team of professionals who share the same values, with the skills to take on any challenge in innovation and artificial intelligence.";
  return /*#__PURE__*/React.createElement("main", {
    className: "page"
  }, /*#__PURE__*/React.createElement(PageHero, {
    kicker: c.kicker,
    title: c.title,
    lede: c.lede
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-grid svc-grid--page"
  }, c.items.map(s => /*#__PURE__*/React.createElement("article", {
    className: "svc-card svc-card--page",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-n"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.body))))), /*#__PURE__*/React.createElement("section", {
    className: "section how-sec band--tint"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Kicker, null, it ? "Metodo" : "Method"), /*#__PURE__*/React.createElement("h2", null, it ? "Come lavoro" : "How I work")), /*#__PURE__*/React.createElement("div", {
    className: "how-grid"
  }, how.map(h => /*#__PURE__*/React.createElement("div", {
    className: "how-card",
    key: h.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "how-n"
  }, h.n), /*#__PURE__*/React.createElement("h3", null, h.t), /*#__PURE__*/React.createElement("p", null, h.d)))), /*#__PURE__*/React.createElement("p", {
    className: "how-team"
  }, team)), /*#__PURE__*/React.createElement(CtaBand, {
    lang: lang,
    go: go,
    dir: "solid"
  }));
}
function InsightsPage({
  lang,
  go
}) {
  const c = window.CONTENT[lang].insights;
  const o = window.OWNER;
  return /*#__PURE__*/React.createElement("main", {
    className: "page"
  }, /*#__PURE__*/React.createElement(PageHero, {
    kicker: c.kicker,
    title: c.title,
    lede: c.lede
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-banner-icon",
    "aria-hidden": "true"
  }, "in"), /*#__PURE__*/React.createElement("p", null, c.liveNote), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--solid",
    href: o.linkedinActivity,
    target: "_blank",
    rel: "noopener"
  }, c.linkedinCta, " \u2197")), /*#__PURE__*/React.createElement("div", {
    className: "ins-grid ins-grid--page"
  }, sortedPosts().map(p => /*#__PURE__*/React.createElement(PostCard, {
    key: p.slug,
    p: p,
    lang: lang
  })))), /*#__PURE__*/React.createElement(Newsletter, {
    lang: lang
  }));
}
function PostPage({
  lang,
  slug,
  go
}) {
  const it = lang === "it";
  const c = window.CONTENT[lang].insights;
  const p = (window.POSTS || []).find(x => x.slug === slug);
  if (!p || !Array.isArray(p.body) || !p.body.length) {
    return /*#__PURE__*/React.createElement("main", {
      className: "page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-hero"
    }, /*#__PURE__*/React.createElement(Kicker, null, c.kicker), /*#__PURE__*/React.createElement("h1", null, it ? "Articolo non trovato" : "Article not found"), /*#__PURE__*/React.createElement("p", {
      className: "page-lede"
    }, /*#__PURE__*/React.createElement("a", {
      className: "link-arrow",
      href: "#/insights",
      onClick: e => {
        e.preventDefault();
        go("insights");
      }
    }, c.backAll, " ", /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\u2192")))));
  }
  const title = !it && p.title_en || p.title;
  return /*#__PURE__*/React.createElement("main", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero post-hero"
  }, /*#__PURE__*/React.createElement(Kicker, null, p.tag, " \xB7 ", p.dateLabel), /*#__PURE__*/React.createElement("h1", null, title)), /*#__PURE__*/React.createElement("section", {
    className: "section post-sec"
  }, /*#__PURE__*/React.createElement("article", {
    className: "post-body"
  }, p.body.map((par, i) => par.indexOf("## ") === 0 ? /*#__PURE__*/React.createElement("h2", {
    key: i
  }, par.slice(3)) : /*#__PURE__*/React.createElement("p", {
    key: i
  }, par)), /*#__PURE__*/React.createElement("div", {
    className: "post-actions"
  }, p.linkedin && /*#__PURE__*/React.createElement("a", {
    className: "btn btn--ghost",
    href: p.linkedin,
    target: "_blank",
    rel: "noopener"
  }, c.original, " \u2197"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--solid",
    href: "#/insights",
    onClick: e => {
      e.preventDefault();
      go("insights");
    }
  }, c.backAll)))), /*#__PURE__*/React.createElement(Newsletter, {
    lang: lang
  }));
}
function ContactPage({
  lang,
  go
}) {
  const it = lang === "it";
  const c = window.CONTENT[lang].contact;
  const o = window.OWNER;
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    message: ""
  });
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [hp, setHp] = useState("");
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = async e => {
    e.preventDefault();
    if (hp) {
      setSent(true);
      return;
    } // honeypot anti-spam: bot rilevato, niente invio
    if (!form.name || !form.email || !form.message || !agree || sending) return;
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: window.WEB3FORMS_KEY,
          subject: "Nuovo messaggio dal sito — DMJ Lab",
          from_name: form.name,
          name: form.name,
          email: form.email,
          azienda: form.org,
          messaggio: form.message
        })
      });
      const data = await res.json();
      if (data.success) setSent(true);else setError(true);
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "page"
  }, /*#__PURE__*/React.createElement(PageHero, {
    kicker: c.kicker,
    title: c.title,
    lede: c.lede
  }), /*#__PURE__*/React.createElement("section", {
    className: "section contact-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "website",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    value: hp,
    onChange: e => setHp(e.target.value),
    style: {
      position: "absolute",
      left: "-9999px",
      width: "1px",
      height: "1px",
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, c.form.name), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: form.name,
    onChange: set("name"),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, c.form.email), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: form.email,
    onChange: set("email"),
    required: true
  })), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, c.form.org), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: form.org,
    onChange: set("org")
  }))), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, c.form.message), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    value: form.message,
    onChange: set("message"),
    required: true
  })), /*#__PURE__*/React.createElement("label", {
    className: "consent"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    required: true
  }), /*#__PURE__*/React.createElement("span", null, c.form.consent.split(it ? "informativa privacy" : "privacy policy")[0], /*#__PURE__*/React.createElement("a", {
    href: "#/privacy",
    onClick: e => {
      e.preventDefault();
      go("privacy");
    }
  }, it ? "informativa privacy" : "privacy policy"), c.form.consent.split(it ? "informativa privacy" : "privacy policy")[1])), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--solid",
    type: "submit",
    disabled: sending
  }, sending ? it ? "Invio in corso…" : "Sending…" : c.form.submit), sent && /*#__PURE__*/React.createElement("p", {
    className: "form-ok"
  }, it ? "Grazie! Messaggio inviato: ti risponderò al più presto." : "Thank you! Your message has been sent — I'll reply soon."), error && /*#__PURE__*/React.createElement("p", {
    className: "form-ok",
    style: {
      color: "#d33"
    }
  }, it ? "Invio non riuscito. Riprova o scrivimi a " + o.email + "." : "Sending failed. Please retry or email me at " + o.email + ".")), /*#__PURE__*/React.createElement("aside", {
    className: "contact-aside"
  }, /*#__PURE__*/React.createElement("h3", null, c.directLabel), /*#__PURE__*/React.createElement("a", {
    className: "contact-direct",
    href: "mailto:" + o.email
  }, o.email), /*#__PURE__*/React.createElement("a", {
    className: "contact-direct",
    href: "tel:" + o.phone.replace(/\s/g, "")
  }, o.phone), /*#__PURE__*/React.createElement("a", {
    className: "contact-direct contact-direct--wa",
    href: "https://wa.me/" + o.phone.replace(/[^0-9]/g, ""),
    target: "_blank",
    rel: "noopener"
  }, "WhatsApp \u2192"), /*#__PURE__*/React.createElement("a", {
    className: "contact-direct",
    href: o.linkedin,
    target: "_blank",
    rel: "noopener"
  }, "LinkedIn \u2192"), /*#__PURE__*/React.createElement("div", {
    className: "contact-card-id"
  }, /*#__PURE__*/React.createElement("p", null, o.legalName), /*#__PURE__*/React.createElement("p", null, o.address), /*#__PURE__*/React.createElement("p", null, "P. IVA ", o.piva))))));
}
Object.assign(window, {
  PageHero,
  AboutPage,
  ServicesPage,
  InsightsPage,
  PostPage,
  ContactPage
});
})();
