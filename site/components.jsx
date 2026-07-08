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
            {it ? "Cookie su questo sito" : "Cookies on this site"}
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

// Cookie info card — the site only uses technical cookies/storage, so no consent
// banner is required (Garante 2021 guidelines). Reachable from the footer.
function CookieBanner({ lang, open, setOpen }) {
  const it = lang === "it";

  if (!open) return null;

  return (
    <div className="cookie" role="dialog" aria-label={it ? "Cookie su questo sito" : "Cookies on this site"} aria-modal="false">
      <div className="cookie-card">
        <div className="cookie-head">
          <strong>{it ? "Cookie su questo sito" : "Cookies on this site"}</strong>
        </div>
        <p className="cookie-body">
          {it
            ? "Questo sito utilizza soltanto cookie e archiviazione tecnici, per il funzionamento e per ricordare lingua e preferenze. Nessun cookie statistico, di marketing o di profilazione è attivo: per questo non ti chiediamo alcun consenso."
            : "This site only uses technical cookies and storage, to work properly and to remember your language and preferences. No statistical, marketing or profiling cookies are active — which is why we don't ask for any consent."}
          {" "}
          <a href="#/cookie" onClick={() => setOpen(false)}>{it ? "Cookie Policy" : "Cookie Policy"}</a>
        </p>
        <div className="cookie-actions">
          <button className="btn btn--solid btn--sm" onClick={() => setOpen(false)}>
            {it ? "Ho capito" : "Got it"}
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Placeholder, Kicker, Logo, Nav, Footer, CookieBanner });
