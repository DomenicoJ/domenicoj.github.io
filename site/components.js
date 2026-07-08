(function(){
/* DMJ Lab — shared UI components */

const {
  useState,
  useEffect,
  useRef
} = React;

// Striped placeholder with a mono caption — never a fake photo.
// Pass `src` to show a real image instead of the placeholder.
function Placeholder({
  label,
  ratio = "4 / 5",
  radius = 0,
  className = "",
  src,
  position
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ph ph--img " + className,
      style: {
        aspectRatio: ratio,
        borderRadius: radius
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: label,
      style: {
        objectPosition: position || "center top"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ph " + className,
    style: {
      aspectRatio: ratio,
      borderRadius: radius
    },
    role: "img",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("span", {
    className: "ph-tag"
  }, label));
}
function Kicker({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, children);
}

// Logo mark
function Logo({
  onClick,
  tagline
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#/",
    className: "logo",
    onClick: e => {
      e.preventDefault();
      onClick && onClick("home");
    },
    "aria-label": "DMJ Lab home"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-mark",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "logo-stack"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-word"
  }, "DMJ", /*#__PURE__*/React.createElement("span", {
    className: "logo-thin"
  }, " Lab")), tagline && /*#__PURE__*/React.createElement("span", {
    className: "logo-tagline"
  }, window.OWNER.tagline)));
}
function Nav({
  lang,
  setLang,
  route,
  go
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const c = window.CONTENT[lang];
  const items = window.NAV[lang];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = id => {
    setOpen(false);
    go(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: nav,
    tagline: true
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    "aria-label": "Primary"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: "#/" + it.id,
    className: "nav-link" + (route === it.id ? " is-active" : ""),
    onClick: e => {
      e.preventDefault();
      nav(it.id);
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang",
    role: "group",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "it" ? "on" : "",
    onClick: () => setLang("it")
  }, "IT"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "on" : "",
    onClick: () => setLang("en")
  }, "EN")), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "btn btn--solid btn--sm nav-cta",
    onClick: e => {
      e.preventDefault();
      nav("contact");
    }
  }, c.nav_cta), /*#__PURE__*/React.createElement("button", {
    className: "burger" + (open ? " is-open" : ""),
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile" + (open ? " is-open" : "")
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: "#/" + it.id,
    onClick: e => {
      e.preventDefault();
      nav(it.id);
    }
  }, it.label)), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "btn btn--solid",
    onClick: e => {
      e.preventDefault();
      nav("contact");
    }
  }, c.nav_cta)));
}
function Footer({
  lang,
  go,
  openCookie
}) {
  const o = window.OWNER;
  const it = lang === "it";
  const legal = [{
    id: "privacy",
    label: it ? "Privacy Policy" : "Privacy Policy"
  }, {
    id: "cookie",
    label: it ? "Cookie Policy" : "Cookie Policy"
  }, {
    id: "ai",
    label: it ? "Trasparenza AI" : "AI Transparency"
  }, {
    id: "terms",
    label: it ? "Termini & Condizioni" : "Terms & Conditions"
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: go,
    tagline: true
  }), /*#__PURE__*/React.createElement("p", {
    className: "footer-tag"
  }, it ? "AI Strategist & Innovation Advisor" : "AI Strategist & Innovation Advisor"), /*#__PURE__*/React.createElement("p", {
    className: "footer-ai-note"
  }, it ? "Sito realizzato con il supporto di strumenti AI, nel rispetto dei principi di trasparenza dell'AI Act." : "Site built with the support of AI tools, respecting the AI Act transparency principles.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, it ? "Contatti" : "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + o.email
  }, o.email), /*#__PURE__*/React.createElement("a", {
    href: "tel:" + o.phone.replace(/\s/g, "")
  }, o.phone), /*#__PURE__*/React.createElement("a", {
    href: o.linkedin,
    target: "_blank",
    rel: "noopener"
  }, "LinkedIn")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, it ? "Legale" : "Legal"), legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#/" + l.id,
    onClick: e => {
      e.preventDefault();
      go(l.id);
    }
  }, l.label)), /*#__PURE__*/React.createElement("button", {
    className: "footer-cookie-btn",
    onClick: openCookie
  }, it ? "Cookie su questo sito" : "Cookies on this site")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col footer-legal-id"
  }, /*#__PURE__*/React.createElement("h4", null, it ? "Dati societari" : "Company details"), /*#__PURE__*/React.createElement("p", null, o.legalName), /*#__PURE__*/React.createElement("p", null, o.address), /*#__PURE__*/React.createElement("p", null, "C.F. ", o.cf), /*#__PURE__*/React.createElement("p", null, "P. IVA ", o.piva), /*#__PURE__*/React.createElement("p", null, "SDI ", o.sdi))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " ", o.legalName, ". ", it ? "Tutti i diritti riservati." : "All rights reserved."), /*#__PURE__*/React.createElement("span", {
    className: "footer-made"
  }, o.domain)));
}

// Cookie info card — the site only uses technical cookies/storage, so no consent
// banner is required (Garante 2021 guidelines). Reachable from the footer.
function CookieBanner({
  lang,
  open,
  setOpen
}) {
  const it = lang === "it";
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "cookie",
    role: "dialog",
    "aria-label": it ? "Cookie su questo sito" : "Cookies on this site",
    "aria-modal": "false"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cookie-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cookie-head"
  }, /*#__PURE__*/React.createElement("strong", null, it ? "Cookie su questo sito" : "Cookies on this site")), /*#__PURE__*/React.createElement("p", {
    className: "cookie-body"
  }, it ? "Questo sito utilizza soltanto cookie e archiviazione tecnici, per il funzionamento e per ricordare lingua e preferenze. Nessun cookie statistico, di marketing o di profilazione è attivo: per questo non ti chiediamo alcun consenso." : "This site only uses technical cookies and storage, to work properly and to remember your language and preferences. No statistical, marketing or profiling cookies are active — which is why we don't ask for any consent.", " ", /*#__PURE__*/React.createElement("a", {
    href: "#/cookie",
    onClick: () => setOpen(false)
  }, it ? "Cookie Policy" : "Cookie Policy")), /*#__PURE__*/React.createElement("div", {
    className: "cookie-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--solid btn--sm",
    onClick: () => setOpen(false)
  }, it ? "Ho capito" : "Got it"))));
}
Object.assign(window, {
  Placeholder,
  Kicker,
  Logo,
  Nav,
  Footer,
  CookieBanner
});
})();
