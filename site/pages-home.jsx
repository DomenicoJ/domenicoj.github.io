/* DMJ Lab — Home page sections */

const { useState, useEffect, useRef } = React;

// Animated counter for a proof stat ("7.500+" → counts up on first view,
// preserving the thousands separator and any suffix).
function StatNumber({ n }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const m = (n || "").match(/^([\d.,]+)(.*)$/);
    if (!m) return;
    const target = parseInt(m[1].replace(/[.,]/g, ""), 10);
    if (!target) return;
    const sep = m[1].indexOf(".") >= 0 ? "." : m[1].indexOf(",") >= 0 ? "," : "";
    const fmt = (v) => sep ? String(v).replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(v);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now(), dur = 1300;
        const step = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(Math.round(target * eased)) + m[2];
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [n]);
  return <div className="stat-n" ref={ref}>{n}</div>;
}

function Hero({ lang, go, dir }) {
  const c = window.CONTENT[lang].hero;
  return (
    <section className={"hero hero--" + dir}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-waves" aria-hidden="true">
        <svg className="wv wv1" viewBox="0 0 2400 160" preserveAspectRatio="none">
          <path d="M0,84 c150,-56 450,56 600,0 c150,-56 450,56 600,0 c150,-56 450,56 600,0 c150,-56 450,56 600,0 L2400,160 L0,160 Z" fill="#dcecfa" />
        </svg>
        <svg className="wv wv2" viewBox="0 0 2400 160" preserveAspectRatio="none">
          <path d="M0,88 c100,-64 300,64 400,0 c100,-64 300,64 400,0 c100,-64 300,64 400,0 c100,-64 300,64 400,0 c100,-64 300,64 400,0 c100,-64 300,64 400,0 L2400,160 L0,160 Z" fill="#bcdcf5" />
        </svg>
        <svg className="wv wv3" viewBox="0 0 2400 160" preserveAspectRatio="none">
          <path d="M0,92 c75,-70 225,70 300,0 c75,-70 225,70 300,0 c75,-70 225,70 300,0 c75,-70 225,70 300,0 c75,-70 225,70 300,0 c75,-70 225,70 300,0 c75,-70 225,70 300,0 c75,-70 225,70 300,0 L2400,160 L0,160 Z" fill="#7dbcec" />
        </svg>
      </div>
      <div className="hero-inner">
        <div className="hero-text">
          <div className="kicker">{c.kicker}</div>
          <h1 className="hero-quote">{c.quote}</h1>
          <p className="hero-lede">{c.lede}</p>
          <div className="hero-actions">
            <a href="#/contact" className="btn btn--solid" onClick={(e) => { e.preventDefault(); go("contact"); }}>
              {c.cta_primary}
            </a>
            <a href="#/services" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); go("services"); }}>
              {c.cta_secondary}
            </a>
          </div>
          <HeroLatest lang={lang} label={c.latest} />
        </div>
        <div className="hero-media">
          <Placeholder label={c.portrait} ratio="4 / 5" src="site/domenico.jpg" />
          <div className="hero-badge">{window.OWNER.fullName}</div>
        </div>
      </div>
      <button
        className="scroll-cue"
        aria-label={lang === "it" ? "Scorri in basso" : "Scroll down"}
        onClick={() => {
          const next = document.querySelector(".forwho");
          if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
          else window.scrollBy({ top: 600, behavior: "smooth" });
        }}
      >
        <span className="cue-label">{lang === "it" ? "Scorri" : "Scroll"}</span>
        <span className="buoy" aria-hidden="true"><span className="buoy-dot" /></span>
      </button>
    </section>
  );
}

// Latest blog article teaser shown under the hero actions.
function HeroLatest({ lang, label }) {
  const it = lang === "it";
  const p = sortedPosts().find((x) => Array.isArray(x.body) && x.body.length);
  if (!p) return null;
  const title = (!it && p.title_en) || p.title;
  return (
    <a className="hero-latest" href={"#/insights/" + p.slug}>
      <span className="hero-latest-label">{label}</span> {title} <span aria-hidden="true">→</span>
    </a>
  );
}

// "Per chi" — three audience cards right after the hero.
function ForWho({ lang }) {
  const c = window.CONTENT[lang].forwho;
  return (
    <section className="section forwho">
      <div className="section-head">
        <Kicker>{c.kicker}</Kicker>
        <h2>{c.title}</h2>
      </div>
      <div className="who-grid">
        {c.items.map((w, i) => (
          <div className="how-card" key={i}>
            <h3>{w.title}</h3>
            <p>{w.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Bio({ lang, go }) {
  const c = window.CONTENT[lang].bio;
  return (
    <section className="section bio band--tint">
      <div className="bio-grid">
        <div className="bio-left">
          <Kicker>{c.kicker}</Kicker>
          <h2 className="bio-title">{c.title}</h2>
        </div>
        <div className="bio-right">
          {c.body.map((p, i) => <p key={i}>{p}</p>)}
          <a href="#/about" className="link-arrow" onClick={(e) => { e.preventDefault(); go("about"); }}>
            {c.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Services({ lang, go, compact }) {
  const c = window.CONTENT[lang].services;
  return (
    <section className="section services">
      <div className="section-head">
        <Kicker>{c.kicker}</Kicker>
        <h2>{c.title}</h2>
        <p className="section-lede">{c.lede}</p>
      </div>
      <div className="svc-grid">
        {c.items.map((s) => (
          <article
            className="svc-card"
            key={s.n}
            onClick={() => !compact && go("services")}
            style={{ cursor: compact ? "default" : "pointer" }}
          >
            <div className="svc-n">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <span className="svc-line" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Proof({ lang }) {
  const c = window.CONTENT[lang].proof;
  return (
    <section className="section proof band--ink">
      <div className="proof-inner">
        <h2 className="proof-title">{c.title}</h2>
        <div className="proof-stats">
          {c.stats.map((s, i) => (
            <div className="stat" key={i}>
              <StatNumber n={s.n} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights({ lang, go }) {
  const c = window.CONTENT[lang].insights;
  return (
    <section className="section insights band--tint">
      <div className="section-head section-head--row">
        <div>
          <Kicker>{c.kicker}</Kicker>
          <h2>{c.title}</h2>
          <p className="section-lede">{c.lede}</p>
        </div>
        <a href={window.OWNER.linkedinActivity} target="_blank" rel="noopener" className="link-arrow">
          {c.cta} <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="ins-grid">
        {sortedPosts().slice(0, 3).map((p) => (
          <PostCard key={p.slug} p={p} lang={lang} />
        ))}
      </div>
    </section>
  );
}

function CtaBand({ lang, go, dir }) {
  const c = window.CONTENT[lang].cta;
  return (
    <section className={"cta-band cta-band--" + dir}>
      <div className="cta-inner">
        <h2>{c.title}</h2>
        <p>{c.lede}</p>
        <a href="#/contact" className="btn btn--invert" onClick={(e) => { e.preventDefault(); go("contact"); }}>
          {c.button}
        </a>
      </div>
    </section>
  );
}

function Newsletter({ lang }) {
  const c = window.CONTENT[lang].newsletter;
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [ok, setOk] = useState(false);
  const [sending, setSending] = useState(false);
  const [hp, setHp] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    if (hp) { setOk(true); return; } // honeypot anti-spam: bot rilevato, niente invio
    if (!email || !agree || sending) return;
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: window.WEB3FORMS_KEY,
          subject: "Nuova iscrizione newsletter — DMJ Lab",
          from_name: "Newsletter DMJ Lab",
          email: email,
          tipo: "Iscrizione newsletter",
        }),
      });
      const data = await res.json();
      if (data.success) { setOk(true); setEmail(""); setAgree(false); }
    } catch (err) {}
    finally { setSending(false); }
  };
  return (
    <section className="section newsletter">
      <div className="nl-inner">
        <div className="nl-text">
          <h2>{c.title}</h2>
          <p>{c.lede}</p>
        </div>
        <form className="nl-form" onSubmit={submit}>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
          <div className="nl-row">
            <input
              type="email"
              required
              placeholder={c.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label={c.placeholder}
            />
            <button className="btn btn--solid" type="submit" disabled={sending}>{sending ? "…" : c.button}</button>
          </div>
          <label className="consent">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} required />
            <span>
              {c.consent.split(lang === "it" ? "informativa privacy" : "privacy policy")[0]}
              <a href="#/privacy">{lang === "it" ? "informativa privacy" : "privacy policy"}</a>
              {c.consent.split(lang === "it" ? "informativa privacy" : "privacy policy")[1]}
            </span>
          </label>
          {ok && <p className="form-ok">{lang === "it" ? "Iscrizione registrata. Grazie!" : "Subscription registered. Thank you!"}</p>}
        </form>
      </div>
    </section>
  );
}

function Home({ lang, go, dir }) {
  return (
    <main>
      <Hero lang={lang} go={go} dir={dir} />
      <ForWho lang={lang} />
      <Bio lang={lang} go={go} />
      <Services lang={lang} go={go} />
      <Proof lang={lang} />
      <Insights lang={lang} go={go} />
      <CtaBand lang={lang} go={go} dir={dir} />
      <Newsletter lang={lang} />
    </main>
  );
}

Object.assign(window, { Hero, HeroLatest, ForWho, Bio, Services, Proof, Insights, CtaBand, Newsletter, Home });
