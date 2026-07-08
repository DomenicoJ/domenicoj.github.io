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

// Opt-in background audio (lounge jazz, Pixabay Content License, self-hosted).
// OFF by default: the file is fetched only when the visitor turns it on.
// Preference remembered in localStorage; autoplay on return visits is attempted
// and fails silently where the browser blocks it.
const AUDIO_KEY = "dmj_audio";
let audioEl = null;

function getAudio() {
  if (!audioEl) {
    audioEl = new Audio("site/audio/lounge.mp3");
    audioEl.loop = true;
    audioEl.preload = "none";
    audioEl.volume = 0;
  }
  return audioEl;
}

function fadeAudio(a, to, then) {
  const from = a.volume, t0 = performance.now(), dur = 900;
  const step = (t) => {
    const p = Math.min((t - t0) / dur, 1);
    a.volume = from + (to - from) * p;
    if (p < 1) requestAnimationFrame(step); else if (then) then();
  };
  requestAnimationFrame(step);
}

function AudioToggle({ lang }) {
  const it = lang === "it";
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(AUDIO_KEY) === "on") {
      const a = getAudio();
      a.play().then(() => { setOn(true); fadeAudio(a, 0.3); }).catch(() => {});
    }
  }, []);

  const toggle = () => {
    const a = getAudio();
    if (on) {
      fadeAudio(a, 0, () => a.pause());
      localStorage.setItem(AUDIO_KEY, "off");
      setOn(false);
    } else {
      a.play().then(() => fadeAudio(a, 0.3)).catch(() => {});
      localStorage.setItem(AUDIO_KEY, "on");
      setOn(true);
    }
  };

  return (
    <button
      className={"audio-toggle" + (on ? " is-on" : "")}
      onClick={toggle}
      aria-pressed={on}
      aria-label={it ? "Musica di sottofondo" : "Background music"}
      title={it ? (on ? "Spegni la musica" : "Un po' di jazz?") : (on ? "Turn the music off" : "Some jazz?")}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4z" />
        {on
          ? [<path key="a" d="M15.5 8.5a5 5 0 0 1 0 7" />, <path key="b" d="M18.5 5.5a9 9 0 0 1 0 13" />]
          : [<line key="a" x1="16" y1="9" x2="22" y2="15" />, <line key="b" x1="22" y1="9" x2="16" y2="15" />]}
      </svg>
    </button>
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
          <AudioToggle lang={lang} />
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

// Blog posts (window.POSTS in posts.js), newest first.
function sortedPosts() {
  return (window.POSTS || []).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

// Insight/blog card. Posts with a body open the on-site article page;
// posts without a body link straight to the original LinkedIn post.
function PostCard({ p, lang }) {
  const it = lang === "it";
  const c = window.CONTENT[lang].insights;
  const title = (!it && p.title_en) || p.title;
  const summary = (!it && p.summary_en) || p.summary;
  const internal = Array.isArray(p.body) && p.body.length > 0;
  const href = internal ? "#/insights/" + p.slug : p.linkedin;
  return (
    <a
      className="ins-card ins-card--text"
      href={href}
      {...(internal ? {} : { target: "_blank", rel: "noopener" })}
    >
      <span className={"ins-badge" + (internal ? " ins-badge--dmj" : "")} aria-hidden="true">
        {internal ? "DMJ" : "in"}
      </span>
      <div className="ins-meta">
        <span className="ins-tag">{p.tag}</span>
        <span className="ins-date">{p.dateLabel}</span>
      </div>
      <h3>{title}</h3>
      {summary && <p className="ins-sum">{summary}</p>}
      <span className="ins-readon">
        {internal ? c.readArticle : c.readOn} <span aria-hidden="true">{internal ? "→" : "↗"}</span>
      </span>
    </a>
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

Object.assign(window, { Placeholder, Kicker, Logo, Nav, Footer, CookieBanner, PostCard, sortedPosts, AudioToggle });
