/* DMJ Lab — Home page sections */

const { useState } = React;

function Hero({ lang, go, dir }) {
  const c = window.CONTENT[lang].hero;
  return (
    <section className={"hero hero--" + dir}>
      <div className="hero-glow" aria-hidden="true" />
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
          <div className="hero-sign">{window.OWNER.fullName}</div>
        </div>
        <div className="hero-media">
          <Placeholder label={c.portrait} ratio="4 / 5" src="site/domenico.jpg" />
          <div className="hero-badge">{window.OWNER.fullName}</div>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span>{lang === "it" ? "Scorri" : "Scroll"}</span>
        <i />
      </div>
    </section>
  );
}

function Bio({ lang, go }) {
  const c = window.CONTENT[lang].bio;
  return (
    <section className="section bio">
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
    <section className="section proof">
      <div className="proof-inner">
        <h2 className="proof-title">{c.title}</h2>
        <div className="proof-stats">
          {c.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="proof-note">* {c.note}</p>
      </div>
    </section>
  );
}

function Insights({ lang, go }) {
  const c = window.CONTENT[lang].insights;
  return (
    <section className="section insights">
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
        {c.items.map((a, i) => (
          <a className="ins-card ins-card--text" key={i} href={a.url} target="_blank" rel="noopener">
            <span className="ins-badge" aria-hidden="true">in</span>
            <div className="ins-meta">
              <span className="ins-tag">{a.tag}</span>
              <span className="ins-date">{a.date}</span>
            </div>
            <h3>{a.title}</h3>
            {a.summary && <p className="ins-sum">{a.summary}</p>}
            <span className="ins-readon">{c.readOn} <span aria-hidden="true">↗</span></span>
          </a>
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
            <span>{c.consent}</span>
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
      <Bio lang={lang} go={go} />
      <Services lang={lang} go={go} />
      <Proof lang={lang} />
      <Insights lang={lang} go={go} />
      <CtaBand lang={lang} go={go} dir={dir} />
      <Newsletter lang={lang} />
    </main>
  );
}

Object.assign(window, { Hero, Bio, Services, Proof, Insights, CtaBand, Newsletter, Home });
