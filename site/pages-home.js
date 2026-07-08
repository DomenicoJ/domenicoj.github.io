(function(){
/* DMJ Lab — Home page sections */

const {
  useState
} = React;
function Hero({
  lang,
  go,
  dir
}) {
  const c = window.CONTENT[lang].hero;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero--" + dir
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, c.kicker), /*#__PURE__*/React.createElement("h1", {
    className: "hero-quote"
  }, c.quote), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, c.lede), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "btn btn--solid",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, c.cta_primary), /*#__PURE__*/React.createElement("a", {
    href: "#/services",
    className: "btn btn--ghost",
    onClick: e => {
      e.preventDefault();
      go("services");
    }
  }, c.cta_secondary)), /*#__PURE__*/React.createElement("div", {
    className: "hero-sign"
  }, window.OWNER.fullName)), /*#__PURE__*/React.createElement("div", {
    className: "hero-media"
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: c.portrait,
    ratio: "4 / 5",
    src: "site/domenico.jpg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge"
  }, window.OWNER.fullName))), /*#__PURE__*/React.createElement("div", {
    className: "scroll-cue",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null, lang === "it" ? "Scorri" : "Scroll"), /*#__PURE__*/React.createElement("i", null)));
}
function Bio({
  lang,
  go
}) {
  const c = window.CONTENT[lang].bio;
  return /*#__PURE__*/React.createElement("section", {
    className: "section bio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bio-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bio-left"
  }, /*#__PURE__*/React.createElement(Kicker, null, c.kicker), /*#__PURE__*/React.createElement("h2", {
    className: "bio-title"
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    className: "bio-right"
  }, c.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)), /*#__PURE__*/React.createElement("a", {
    href: "#/about",
    className: "link-arrow",
    onClick: e => {
      e.preventDefault();
      go("about");
    }
  }, c.cta, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")))));
}
function Services({
  lang,
  go,
  compact
}) {
  const c = window.CONTENT[lang].services;
  return /*#__PURE__*/React.createElement("section", {
    className: "section services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Kicker, null, c.kicker), /*#__PURE__*/React.createElement("h2", null, c.title), /*#__PURE__*/React.createElement("p", {
    className: "section-lede"
  }, c.lede)), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, c.items.map(s => /*#__PURE__*/React.createElement("article", {
    className: "svc-card",
    key: s.n,
    onClick: () => !compact && go("services"),
    style: {
      cursor: compact ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-n"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.body), /*#__PURE__*/React.createElement("span", {
    className: "svc-line",
    "aria-hidden": "true"
  })))));
}
function Proof({
  lang
}) {
  const c = window.CONTENT[lang].proof;
  return /*#__PURE__*/React.createElement("section", {
    className: "section proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "proof-title"
  }, c.title), /*#__PURE__*/React.createElement("div", {
    className: "proof-stats"
  }, c.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, s.label))))));
}
function Insights({
  lang,
  go
}) {
  const c = window.CONTENT[lang].insights;
  return /*#__PURE__*/React.createElement("section", {
    className: "section insights"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head section-head--row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, c.kicker), /*#__PURE__*/React.createElement("h2", null, c.title), /*#__PURE__*/React.createElement("p", {
    className: "section-lede"
  }, c.lede)), /*#__PURE__*/React.createElement("a", {
    href: window.OWNER.linkedinActivity,
    target: "_blank",
    rel: "noopener",
    className: "link-arrow"
  }, c.cta, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "ins-grid"
  }, sortedPosts().slice(0, 3).map(p => /*#__PURE__*/React.createElement(PostCard, {
    key: p.slug,
    p: p,
    lang: lang
  }))));
}
function CtaBand({
  lang,
  go,
  dir
}) {
  const c = window.CONTENT[lang].cta;
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-band cta-band--" + dir
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-inner"
  }, /*#__PURE__*/React.createElement("h2", null, c.title), /*#__PURE__*/React.createElement("p", null, c.lede), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "btn btn--invert",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, c.button)));
}
function Newsletter({
  lang
}) {
  const c = window.CONTENT[lang].newsletter;
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [ok, setOk] = useState(false);
  const [sending, setSending] = useState(false);
  const [hp, setHp] = useState("");
  const submit = async e => {
    e.preventDefault();
    if (hp) {
      setOk(true);
      return;
    } // honeypot anti-spam: bot rilevato, niente invio
    if (!email || !agree || sending) return;
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: window.WEB3FORMS_KEY,
          subject: "Nuova iscrizione newsletter — DMJ Lab",
          from_name: "Newsletter DMJ Lab",
          email: email,
          tipo: "Iscrizione newsletter"
        })
      });
      const data = await res.json();
      if (data.success) {
        setOk(true);
        setEmail("");
        setAgree(false);
      }
    } catch (err) {} finally {
      setSending(false);
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section newsletter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nl-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nl-text"
  }, /*#__PURE__*/React.createElement("h2", null, c.title), /*#__PURE__*/React.createElement("p", null, c.lede)), /*#__PURE__*/React.createElement("form", {
    className: "nl-form",
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
  }), /*#__PURE__*/React.createElement("div", {
    className: "nl-row"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: c.placeholder,
    value: email,
    onChange: e => setEmail(e.target.value),
    "aria-label": c.placeholder
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--solid",
    type: "submit",
    disabled: sending
  }, sending ? "…" : c.button)), /*#__PURE__*/React.createElement("label", {
    className: "consent"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    required: true
  }), /*#__PURE__*/React.createElement("span", null, c.consent.split(lang === "it" ? "informativa privacy" : "privacy policy")[0], /*#__PURE__*/React.createElement("a", {
    href: "#/privacy"
  }, lang === "it" ? "informativa privacy" : "privacy policy"), c.consent.split(lang === "it" ? "informativa privacy" : "privacy policy")[1])), ok && /*#__PURE__*/React.createElement("p", {
    className: "form-ok"
  }, lang === "it" ? "Iscrizione registrata. Grazie!" : "Subscription registered. Thank you!"))));
}
function Home({
  lang,
  go,
  dir
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    lang: lang,
    go: go,
    dir: dir
  }), /*#__PURE__*/React.createElement(Bio, {
    lang: lang,
    go: go
  }), /*#__PURE__*/React.createElement(Services, {
    lang: lang,
    go: go
  }), /*#__PURE__*/React.createElement(Proof, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Insights, {
    lang: lang,
    go: go
  }), /*#__PURE__*/React.createElement(CtaBand, {
    lang: lang,
    go: go,
    dir: dir
  }), /*#__PURE__*/React.createElement(Newsletter, {
    lang: lang
  }));
}
Object.assign(window, {
  Hero,
  Bio,
  Services,
  Proof,
  Insights,
  CtaBand,
  Newsletter,
  Home
});
})();
