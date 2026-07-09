/* DMJ Lab — legal page renderer + app shell + router */

const {
  useState,
  useEffect,
  useLayoutEffect
} = React;
function Section({
  s
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "legal-section"
  }, /*#__PURE__*/React.createElement("h2", null, s.h), s.p && /*#__PURE__*/React.createElement("p", null, s.p), s.list && /*#__PURE__*/React.createElement("ul", {
    className: "legal-list"
  }, s.list.map((li, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, li))), s.after && /*#__PURE__*/React.createElement("p", null, s.after));
}
function LegalPage({
  lang,
  which
}) {
  const docs = window.legalDocs(lang);
  const doc = docs[which];
  const it = lang === "it";
  return /*#__PURE__*/React.createElement("main", {
    className: "page legal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "legal-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement(Kicker, null, it ? "Note legali" : "Legal"), /*#__PURE__*/React.createElement("h1", null, doc.title), /*#__PURE__*/React.createElement("p", {
    className: "legal-updated"
  }, docs.updated)), /*#__PURE__*/React.createElement("p", {
    className: "legal-intro"
  }, doc.intro), doc.sections.map((s, i) => /*#__PURE__*/React.createElement(Section, {
    s: s,
    key: i
  }))));
}

/* ---------------- App ---------------- */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "soft",
  "accent": "#1f6feb",
  "display": "Space Grotesk",
  "radius": 4
} /*EDITMODE-END*/;
const PAGES = ["home", "about", "services", "insights", "contact", "privacy", "cookie", "ai", "terms"];
function parseHash() {
  const h = (window.location.hash || "").replace(/^#\//, "").trim();
  if (!h || h === "/") return {
    page: "home",
    slug: null
  };
  const parts = h.split("?")[0].split("/").filter(Boolean);
  const id = parts[0];
  if (id === "insights" && parts[1]) return {
    page: "post",
    slug: decodeURIComponent(parts[1])
  };
  return {
    page: PAGES.includes(id) ? id : "home",
    slug: null
  };
}
function App() {
  const t = TWEAK_DEFAULTS;
  const [lang, setLangState] = useState(() => localStorage.getItem("dmj_lang") || "it");
  const [route, setRoute] = useState(parseHash());
  const [cookieOpen, setCookieOpen] = useState(false);

  // language persist
  const setLang = l => {
    setLangState(l);
    localStorage.setItem("dmj_lang", l);
  };

  // routing
  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const go = id => {
    const target = id === "home" ? "/" : "/" + id;
    if (window.location.hash !== "#" + target) window.location.hash = target;else {
      setRoute(parseHash());
      window.scrollTo(0, 0);
    }
  };

  // keep <html lang> in sync with the chosen language
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // scroll-reveal: fade-up elements as they enter the viewport, staggered
  // within their parent. Skipped entirely under prefers-reduced-motion.
  useLayoutEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll(".hero-text > *, .hero-media, .hero-lede, .hero-actions, .hero-latest-row, .section-head, .svc-card, .ins-card, .how-card, .stat, " + ".bio-left, .bio-right, .about-portrait, .about-text, .timeline li, .nl-inner, .ln-banner, " + ".contact-form, .contact-aside, .cta-inner, .legal-section, .post-body"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(el => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -36px 0px"
    });
    els.forEach(el => {
      if (el.classList.contains("is-in")) return;
      el.classList.add("reveal");
      const parent = el.parentElement;
      const sibs = parent ? Array.from(parent.children).filter(c => c.classList.contains("reveal")) : [];
      const idx = sibs.indexOf(el);
      if (idx > 0) el.style.transitionDelay = Math.min(idx * 80, 420) + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
  }, [route, lang]);

  // apply tweaks as CSS vars + direction class
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-dir", t.direction);
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--font-display", '"' + t.display + '", "Space Grotesk", system-ui, sans-serif');
    root.style.setProperty("--radius", (t.radius || 0) + "px");
  }, [t.direction, t.accent, t.display, t.radius]);
  const dir = t.direction;
  let view;
  switch (route.page) {
    case "about":
      view = /*#__PURE__*/React.createElement(AboutPage, {
        lang: lang,
        go: go
      });
      break;
    case "services":
      view = /*#__PURE__*/React.createElement(ServicesPage, {
        lang: lang,
        go: go
      });
      break;
    case "insights":
      view = /*#__PURE__*/React.createElement(InsightsPage, {
        lang: lang,
        go: go
      });
      break;
    case "post":
      view = /*#__PURE__*/React.createElement(PostPage, {
        lang: lang,
        slug: route.slug,
        go: go
      });
      break;
    case "contact":
      view = /*#__PURE__*/React.createElement(ContactPage, {
        lang: lang,
        go: go
      });
      break;
    case "privacy":
      view = /*#__PURE__*/React.createElement(LegalPage, {
        lang: lang,
        which: "privacy"
      });
      break;
    case "cookie":
      view = /*#__PURE__*/React.createElement(LegalPage, {
        lang: lang,
        which: "cookie"
      });
      break;
    case "ai":
      view = /*#__PURE__*/React.createElement(LegalPage, {
        lang: lang,
        which: "ai"
      });
      break;
    case "terms":
      view = /*#__PURE__*/React.createElement(LegalPage, {
        lang: lang,
        which: "terms"
      });
      break;
    default:
      view = /*#__PURE__*/React.createElement(Home, {
        lang: lang,
        go: go,
        dir: dir
      });
  }
  const it = lang === "it";
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("a", {
    className: "skip",
    href: "#main"
  }, it ? "Vai al contenuto" : "Skip to content"), /*#__PURE__*/React.createElement(Nav, {
    lang: lang,
    setLang: setLang,
    route: route.page === "post" ? "insights" : route.page,
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    id: "main",
    key: route.page + ":" + (route.slug || ""),
    className: "page-in"
  }, view), /*#__PURE__*/React.createElement("button", {
    className: "ai-strip",
    onClick: () => go("ai")
  }, /*#__PURE__*/React.createElement("span", {
    className: "ai-dot",
    "aria-hidden": "true"
  }), window.CONTENT[lang].aiNotice.short, /*#__PURE__*/React.createElement("span", {
    className: "ai-strip-cta"
  }, window.CONTENT[lang].aiNotice.cta, " \u2192")), /*#__PURE__*/React.createElement(Footer, {
    lang: lang,
    go: go,
    openCookie: () => setCookieOpen(true)
  }), /*#__PURE__*/React.createElement(CookieBanner, {
    lang: lang,
    open: cookieOpen,
    setOpen: setCookieOpen
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));