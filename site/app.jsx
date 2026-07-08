/* DMJ Lab — legal page renderer + app shell + router */

const { useState, useEffect } = React;

function Section({ s }) {
  return (
    <div className="legal-section">
      <h2>{s.h}</h2>
      {s.p && <p>{s.p}</p>}
      {s.list && (
        <ul className="legal-list">
          {s.list.map((li, i) => <li key={i}>{li}</li>)}
        </ul>
      )}
      {s.after && <p>{s.after}</p>}
    </div>
  );
}

function LegalPage({ lang, which }) {
  const docs = window.legalDocs(lang);
  const doc = docs[which];
  const it = lang === "it";
  return (
    <main className="page legal">
      <div className="legal-inner">
        <div className="page-hero">
          <Kicker>{it ? "Note legali" : "Legal"}</Kicker>
          <h1>{doc.title}</h1>
          <p className="legal-updated">{docs.updated}</p>
        </div>
        <p className="legal-intro">{doc.intro}</p>
        {doc.sections.map((s, i) => <Section s={s} key={i} />)}
      </div>
    </main>
  );
}

/* ---------------- App ---------------- */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "soft",
  "accent": "#1f6feb",
  "display": "Space Grotesk",
  "radius": 4
}/*EDITMODE-END*/;

const PAGES = ["home", "about", "services", "insights", "contact", "privacy", "cookie", "ai", "terms"];

function parseHash() {
  const h = (window.location.hash || "").replace(/^#\//, "").trim();
  if (!h || h === "/") return "home";
  const id = h.split(/[/?]/)[0];
  return PAGES.includes(id) ? id : "home";
}

function App() {
  const t = TWEAK_DEFAULTS;
  const [lang, setLangState] = useState(() => localStorage.getItem("dmj_lang") || "it");
  const [route, setRoute] = useState(parseHash());
  const [cookieOpen, setCookieOpen] = useState(false);

  // language persist
  const setLang = (l) => { setLangState(l); localStorage.setItem("dmj_lang", l); };

  // routing
  useEffect(() => {
    const onHash = () => { setRoute(parseHash()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (id) => {
    const target = id === "home" ? "/" : "/" + id;
    if (window.location.hash !== "#" + target) window.location.hash = target;
    else { setRoute(id); window.scrollTo(0, 0); }
  };

  // keep <html lang> in sync with the chosen language
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
  switch (route) {
    case "about": view = <AboutPage lang={lang} go={go} />; break;
    case "services": view = <ServicesPage lang={lang} go={go} />; break;
    case "insights": view = <InsightsPage lang={lang} go={go} />; break;
    case "contact": view = <ContactPage lang={lang} go={go} />; break;
    case "privacy": view = <LegalPage lang={lang} which="privacy" />; break;
    case "cookie": view = <LegalPage lang={lang} which="cookie" />; break;
    case "ai": view = <LegalPage lang={lang} which="ai" />; break;
    case "terms": view = <LegalPage lang={lang} which="terms" />; break;
    default: view = <Home lang={lang} go={go} dir={dir} />;
  }

  const it = lang === "it";

  return (
    <div className="app">
      <a className="skip" href="#main">{it ? "Vai al contenuto" : "Skip to content"}</a>
      <Nav lang={lang} setLang={setLang} route={route} go={go} />

      <div id="main">{view}</div>

      {/* AI transparency strip — spostata in fondo alla pagina */}
      <button className="ai-strip" onClick={() => go("ai")}>
        <span className="ai-dot" aria-hidden="true" />
        {window.CONTENT[lang].aiNotice.short}
        <span className="ai-strip-cta">{window.CONTENT[lang].aiNotice.cta} →</span>
      </button>

      <Footer lang={lang} go={go} openCookie={() => setCookieOpen(true)} />
      <CookieBanner lang={lang} open={cookieOpen} setOpen={setCookieOpen} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
