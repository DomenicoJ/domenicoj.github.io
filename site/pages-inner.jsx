/* DMJ Lab — inner pages: About, Services, Insights, Contact */

const { useState } = React;

function PageHero({ kicker, title, lede }) {
  return (
    <div className="page-hero">
      <Kicker>{kicker}</Kicker>
      <h1>{title}</h1>
      {lede && <p className="page-lede">{lede}</p>}
    </div>
  );
}

function AboutPage({ lang, go }) {
  const it = lang === "it";
  const c = window.CONTENT[lang].bio;
  const o = window.OWNER;
  const timeline = it
    ? [
        { y: "2003—2019", t: "Vent'anni nel Food & Beverage", d: "Responsabile commerciale in multinazionali italiane e internazionali del settore." },
        { y: "2019", t: "Verso startup e foodtech", d: "Direzione commerciale in una PMI innovativa del foodtech per la ristorazione." },
        { y: "2018—oggi", t: "Formazione & divulgazione", d: "Docenze, articoli e interventi su innovazione digitale, food delivery e tecnologie emergenti." },
        { y: "Oggi", t: "DMJ Lab — AI & Innovazione", d: "Consulenza, keynote e formazione per l'adozione responsabile dell'intelligenza artificiale." },
      ]
    : [
        { y: "2003—2019", t: "Twenty years in Food & Beverage", d: "Sales leader in Italian and international multinationals." },
        { y: "2019", t: "Into startups and foodtech", d: "Sales director at an innovative foodtech SME for hospitality." },
        { y: "2018—now", t: "Training & outreach", d: "Lectures, articles and talks on digital innovation, food delivery and emerging tech." },
        { y: "Now", t: "DMJ Lab — AI & Innovation", d: "Consulting, keynotes and training for the responsible adoption of AI." },
      ];
  return (
    <main className="page">
      <PageHero kicker={it ? "Chi sono" : "About"} title={c.title} />
      <section className="section about-body">
        <div className="about-grid">
          <div className="about-portrait">
            <Placeholder label={it ? "Ritratto di Domenico" : "Portrait of Domenico"} ratio="4 / 5" src="site/domenico.jpg" />
          </div>
          <div className="about-text">
            {c.body.map((p, i) => <p key={i}>{p}</p>)}
            <p>
              {it
                ? "Credo in un'innovazione concreta, misurabile e umana: la tecnologia ha senso solo quando crea valore reale per le persone e per le imprese."
                : "I believe in concrete, measurable and human innovation: technology only matters when it creates real value for people and businesses."}
            </p>
          </div>
        </div>
      </section>
      <section className="section timeline-sec">
        <div className="section-head"><Kicker>{it ? "Percorso" : "Journey"}</Kicker><h2>{it ? "Le tappe principali" : "Key milestones"}</h2></div>
        <ol className="timeline">
          {timeline.map((tl, i) => (
            <li key={i}>
              <span className="tl-year">{tl.y}</span>
              <div className="tl-body"><h3>{tl.t}</h3><p>{tl.d}</p></div>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand lang={lang} go={go} dir="solid" />
    </main>
  );
}

function ServicesPage({ lang, go }) {
  const it = lang === "it";
  const c = window.CONTENT[lang].services;
  const how = it
    ? [
        { n: "A", t: "Ascolto", d: "Capisco contesto, obiettivi e vincoli reali della tua organizzazione." },
        { n: "B", t: "Strategia", d: "Definiamo insieme priorità, casi d'uso e una roadmap sostenibile e conforme." },
        { n: "C", t: "Esecuzione", d: "Formazione, progetti pilota e affiancamento per portare l'AI in produzione." },
      ]
    : [
        { n: "A", t: "Listen", d: "I understand your organisation's context, goals and real constraints." },
        { n: "B", t: "Strategy", d: "Together we define priorities, use cases and a sustainable, compliant roadmap." },
        { n: "C", t: "Execution", d: "Training, pilots and hands-on support to bring AI into production." },
      ];
  return (
    <main className="page">
      <PageHero kicker={c.kicker} title={c.title} lede={c.lede} />
      <section className="section">
        <div className="svc-grid svc-grid--page">
          {c.items.map((s) => (
            <article className="svc-card svc-card--page" key={s.n}>
              <div className="svc-n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section how-sec">
        <div className="section-head"><Kicker>{it ? "Metodo" : "Method"}</Kicker><h2>{it ? "Come lavoriamo" : "How we work"}</h2></div>
        <div className="how-grid">
          {how.map((h) => (
            <div className="how-card" key={h.n}>
              <span className="how-n">{h.n}</span>
              <h3>{h.t}</h3>
              <p>{h.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand lang={lang} go={go} dir="solid" />
    </main>
  );
}

function InsightsPage({ lang, go }) {
  const c = window.CONTENT[lang].insights;
  const o = window.OWNER;
  return (
    <main className="page">
      <PageHero kicker={c.kicker} title={c.title} lede={c.lede} />
      <section className="section">
        <div className="ln-banner">
          <div className="ln-banner-icon" aria-hidden="true">in</div>
          <p>{c.liveNote}</p>
          <a className="btn btn--solid" href={o.linkedinActivity} target="_blank" rel="noopener">{c.linkedinCta} ↗</a>
        </div>
        <div className="ins-grid ins-grid--page">
          {sortedPosts().map((p) => (
            <PostCard key={p.slug} p={p} lang={lang} />
          ))}
        </div>
      </section>
      <Newsletter lang={lang} />
    </main>
  );
}

function PostPage({ lang, slug, go }) {
  const it = lang === "it";
  const c = window.CONTENT[lang].insights;
  const p = (window.POSTS || []).find((x) => x.slug === slug);

  if (!p || !Array.isArray(p.body) || !p.body.length) {
    return (
      <main className="page">
        <div className="page-hero">
          <Kicker>{c.kicker}</Kicker>
          <h1>{it ? "Articolo non trovato" : "Article not found"}</h1>
          <p className="page-lede">
            <a className="link-arrow" href="#/insights" onClick={(e) => { e.preventDefault(); go("insights"); }}>
              {c.backAll} <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </main>
    );
  }

  const title = (!it && p.title_en) || p.title;
  return (
    <main className="page">
      <div className="page-hero post-hero">
        <Kicker>{p.tag} · {p.dateLabel}</Kicker>
        <h1>{title}</h1>
      </div>
      <section className="section post-sec">
        <article className="post-body">
          {p.body.map((par, i) =>
            par.indexOf("## ") === 0
              ? <h2 key={i}>{par.slice(3)}</h2>
              : <p key={i}>{par}</p>
          )}
          <div className="post-actions">
            {p.linkedin && (
              <a className="btn btn--ghost" href={p.linkedin} target="_blank" rel="noopener">{c.original} ↗</a>
            )}
            <a className="btn btn--solid" href="#/insights" onClick={(e) => { e.preventDefault(); go("insights"); }}>
              {c.backAll}
            </a>
          </div>
        </article>
      </section>
      <Newsletter lang={lang} />
    </main>
  );
}

function ContactPage({ lang, go }) {
  const it = lang === "it";
  const c = window.CONTENT[lang].contact;
  const o = window.OWNER;
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [hp, setHp] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    if (hp) { setSent(true); return; } // honeypot anti-spam: bot rilevato, niente invio
    if (!form.name || !form.email || !form.message || !agree || sending) return;
    setSending(true); setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: window.WEB3FORMS_KEY,
          subject: "Nuovo messaggio dal sito — DMJ Lab",
          from_name: form.name,
          name: form.name,
          email: form.email,
          azienda: form.org,
          messaggio: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) setSent(true); else setError(true);
    } catch (err) { setError(true); }
    finally { setSending(false); }
  };
  return (
    <main className="page">
      <PageHero kicker={c.kicker} title={c.title} lede={c.lede} />
      <section className="section contact-sec">
        <div className="contact-grid">
          <form className="contact-form" onSubmit={submit}>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
            <label className="field">
              <span>{c.form.name}</span>
              <input type="text" value={form.name} onChange={set("name")} required />
            </label>
            <div className="field-row">
              <label className="field">
                <span>{c.form.email}</span>
                <input type="email" value={form.email} onChange={set("email")} required />
              </label>
              <label className="field">
                <span>{c.form.org}</span>
                <input type="text" value={form.org} onChange={set("org")} />
              </label>
            </div>
            <label className="field">
              <span>{c.form.message}</span>
              <textarea rows="5" value={form.message} onChange={set("message")} required />
            </label>
            <label className="consent">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} required />
              <span>
                {c.form.consent.split(it ? "informativa privacy" : "privacy policy")[0]}
                <a href="#/privacy" onClick={(e) => { e.preventDefault(); go("privacy"); }}>
                  {it ? "informativa privacy" : "privacy policy"}
                </a>
                {c.form.consent.split(it ? "informativa privacy" : "privacy policy")[1]}
              </span>
            </label>
            <button className="btn btn--solid" type="submit" disabled={sending}>
              {sending ? (it ? "Invio in corso…" : "Sending…") : c.form.submit}
            </button>
            {sent && <p className="form-ok">{it ? "Grazie! Messaggio inviato: ti risponderò al più presto." : "Thank you! Your message has been sent — I'll reply soon."}</p>}
            {error && <p className="form-ok" style={{ color: "#d33" }}>{it ? ("Invio non riuscito. Riprova o scrivimi a " + o.email + ".") : ("Sending failed. Please retry or email me at " + o.email + ".")}</p>}
          </form>

          <aside className="contact-aside">
            <h3>{c.directLabel}</h3>
            <a className="contact-direct" href={"mailto:" + o.email}>{o.email}</a>
            <a className="contact-direct" href={"tel:" + o.phone.replace(/\s/g, "")}>{o.phone}</a>
            <a className="contact-direct contact-direct--wa" href={"https://wa.me/" + o.phone.replace(/[^0-9]/g, "")} target="_blank" rel="noopener">WhatsApp →</a>
            <a className="contact-direct" href={o.linkedin} target="_blank" rel="noopener">LinkedIn →</a>
            <div className="contact-card-id">
              <p>{o.legalName}</p>
              <p>{o.address}</p>
              <p>P. IVA {o.piva}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { PageHero, AboutPage, ServicesPage, InsightsPage, PostPage, ContactPage });
