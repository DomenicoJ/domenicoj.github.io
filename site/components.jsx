/* DMJ Lab — shared UI components */

const { useState, useEffect, useRef } = React;

// Striped placeholder with a mono caption — never a fake photo.
// Pass `src` to show a real image instead of the placeholder.
function Placeholder({ label, ratio = "4 / 5", radius = 0, className = "", src, position }) {
  if (src) {
    return (
      <div className={"ph ph--img " + className} style={{ aspectRatio: ratio, borderRadius: radius }}>
        <img src={src} alt={label} style={{ objectPosition: position || "center top" }} />
      </div>
    );
  }
  return (
    <div
      className={"ph " + className}
      style={{ aspectRatio: ratio, borderRadius: radius }}
      role="img"
      aria-label={label}
    >
      <span className="ph-tag">{label}</span>
    </div>
  );
}

function Kicker({ children }) {
  return <div className="kicker">{children}</div>;
}

// Logo mark
function Logo({ onClick, tagline }) {
  return (
    <a
      href="#/"
      className="logo"
      onClick={(e) => { e.preventDefault(); onClick && onClick("home"); }}
      aria-label="DMJ Lab home"
    >
      <span className="logo-mark" aria-hidden="true">
        <span className="logo-dot" />
      </span>
      <span className="logo-stack">
        <span className="logo-word">DMJ<span className="logo-thin"> Lab</span></span>
        {tagline && <span className="logo-tagline">{window.OWNER.tagline}</span>}
      </span>
    </a>
  );
}

function Nav({ lang, setLang, route, go }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const c = window.CONTENT[lang];
  const items = window.NAV[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (id) => { setOpen(false); go(id); };

  return (
    <header className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <div className="nav-inner">
        <Logo onClick={nav} tagline />

        <nav className="nav-links" aria-label="Primary">
          {items.map((it) => (
            <a
              key={it.id}
              href={"#/" + it.id}
              className={"nav-link" + (route === it.id ? " is-active" : "")}
              onClick={(e) => { e.preventDefault(); nav(it.id); }}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            <button className={lang === "it" ? "on" : ""} onClick={() => setLang("it")}>IT</button>
            <span aria-hidden="true">/</span>
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a
            href="#/contact"
            className="btn btn--solid btn--sm nav-cta"
            onClick={(e) => { e.preventDefault(); nav("contact"); }}
          >
            {c.nav_cta}
          </a>
          <button
            className={"burger" + (open ? " is-open" : "")}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={"nav-mobile" + (open ? " is-open" : "")}>
        {items.map((it) => (
          <a key={it.id} href={"#/" + it.id} onClick={(e) => { e.preventDefault(); nav(it.id); }}>
            {it.label}
          </a>
        ))}
        <a href="#/contact" className="btn btn--solid" onClick={(e) => { e.preventDefault(); nav("contact"); }}>
          {c.nav_cta}
        </a>
      </div>
    </header>
  );
}

function Footer({ lang, go, openCookie }) {
  const o = window.OWNER;
  const it = lang === "it";
  const legal = [
    { id: "privacy", label: it ? "Privacy Policy" : "Privacy Policy" },
    { id: "cookie", label: it ? "Cookie Policy" : "Cookie Policy" },
    { id: "ai", label: it ? "Trasparenza AI" : "AI Transparency" },
    { id: "terms", label: it ? "Termini & Condizioni" : "Terms & Conditions" },
  ];
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo onClick={go} tagline />
          <p className="footer-tag">
            {it ? "AI Strategist & Innovation Advisor" : "AI Strategist & Innovation Advisor"}
          </p>
          <p className="footer-ai-note">
            {it
              ? "Sito realizzato con il supporto di strumenti AI, nel rispetto dei principi di trasparenza dell'AI Act."
              : "Site built with the support of AI tools, respecting the AI Act transparency principles."}
          </p>
        </div>

        <div className="footer-col">
          <h4>{it ? "Contatti" : "Contact"}</h4>
          <a href={"mailto:" + o.email}>{o.email}</a>
          <a href={"tel:" + o.phone.replace(/\s/g, "")}>{o.phone}</a>
          <a href={o.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        </div>

        <div className="footer-col">
          <h4>{it ? "Legale" : "Legal"}</h4>
          {legal.map((l) => (
            <a key={l.id} href={"#/" + l.id} onClick={(e) => { e.preventDefault(); go(l.id); }}>{l.label}</a>
          ))}
          <button className="footer-cookie-btn" onClick={openCookie}>
            {it ? "Preferenze cookie" : "Cookie preferences"}
          </button>
        </div>

        <div className="footer-col footer-legal-id">
          <h4>{it ? "Dati societari" : "Company details"}</h4>
          <p>{o.legalName}</p>
          <p>{o.address}</p>
          <p>C.F. {o.cf}</p>
          <p>P. IVA {o.piva}</p>
          <p>SDI {o.sdi}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {o.legalName}. {it ? "Tutti i diritti riservati." : "All rights reserved."}</span>
        <span className="footer-made">{o.domain}</span>
      </div>
    </footer>
  );
}

// GDPR / ePrivacy cookie banner — opt-in, granular, "reject" as easy as "accept".
const COOKIE_KEY = "dmj_cookie_consent_v1";

function readConsent() {
  try { return JSON.parse(localStorage.getItem(COOKIE_KEY) || "null"); }
  catch (e) { return null; }
}

function CookieBanner({ lang, open, setOpen }) {
  const it = lang === "it";
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [prefs, setPrefs] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (c) { setAnalytics(!!c.analytics); setMarketing(!!c.marketing); }
  }, [open]);

  const save = (obj) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...obj, ts: Date.now() }));
    setOpen(false);
    setPrefs(false);
  };

  if (!open) return null;

  return (
    <div className="cookie" role="dialog" aria-label={it ? "Preferenze cookie" : "Cookie preferences"} aria-modal="false">
      <div className="cookie-card">
        <div className="cookie-head">
          <strong>{it ? "Rispettiamo la tua privacy" : "We respect your privacy"}</strong>
        </div>
        <p className="cookie-body">
          {it
            ? "Usiamo cookie tecnici necessari al funzionamento del sito. Con il tuo consenso usiamo anche cookie statistici per migliorare l'esperienza. Puoi accettare, rifiutare o scegliere."
            : "We use technical cookies needed for the site to work. With your consent we also use statistical cookies to improve the experience. You can accept, reject or choose."}
          {" "}
          <a href="#/cookie" onClick={() => setOpen(false)}>{it ? "Cookie Policy" : "Cookie Policy"}</a>
        </p>

        {prefs && (
          <div className="cookie-prefs">
            <label className="cookie-row is-locked">
              <span><strong>{it ? "Tecnici" : "Technical"}</strong><em>{it ? "Sempre attivi" : "Always on"}</em></span>
              <input type="checkbox" checked readOnly />
            </label>
            <label className="cookie-row">
              <span><strong>{it ? "Statistici" : "Statistics"}</strong><em>{it ? "Analytics anonimi" : "Anonymous analytics"}</em></span>
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            </label>
            <label className="cookie-row">
              <span><strong>{it ? "Marketing" : "Marketing"}</strong><em>{it ? "Profilazione" : "Profiling"}</em></span>
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
            </label>
          </div>
        )}

        <div className="cookie-actions">
          <button className="btn btn--ghost btn--sm" onClick={() => save({ analytics: false, marketing: false })}>
            {it ? "Rifiuta" : "Reject"}
          </button>
          {!prefs && (
            <button className="btn btn--ghost btn--sm" onClick={() => setPrefs(true)}>
              {it ? "Personalizza" : "Customise"}
            </button>
          )}
          {prefs && (
            <button className="btn btn--ghost btn--sm" onClick={() => save({ analytics, marketing })}>
              {it ? "Salva scelte" : "Save choices"}
            </button>
          )}
          <button className="btn btn--solid btn--sm" onClick={() => save({ analytics: true, marketing: true })}>
            {it ? "Accetta tutti" : "Accept all"}
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Placeholder, Kicker, Logo, Nav, Footer, CookieBanner, readConsent, COOKIE_KEY });
