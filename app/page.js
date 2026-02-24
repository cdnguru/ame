const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Snapshots', href: '#snapshots' },
  { label: 'Impact', href: '#impact' },
  { label: 'Pricing', href: '#pricing' }
];

const partnerData = [
  { name: 'HanCom Distribution Alliance', fitRatio: '90%', sourcedPipeline: '$1.4M' },
  { name: 'Seoul Enterprise Cloud Network', fitRatio: '74%', sourcedPipeline: '$820K' },
  { name: 'K-Scale Channel Group', fitRatio: '23%', sourcedPipeline: '$140K' }
];

const podPerformance = [
  { label: 'SDR Agent', value: 42, className: 'sdr' },
  { label: 'Marketing Agent', value: 33, className: 'marketing' },
  { label: 'Partner Agent', value: 25, className: 'partner' }
];

const quarterlyPipeline = [
  { market: 'Japan', leads: 36, progress: 90 },
  { market: 'South Korea', leads: 8, progress: 20 },
  { market: 'Taiwan', leads: 14, progress: 35 }
];

const transformationStats = [
  { label: 'Always-on execution', value: '24/7/365', detail: 'Agents continuously prospect, enrich, and route accounts.' },
  { label: 'Program velocity', value: '3.1x', detail: 'Faster lead-to-meeting cycles with coordinated pod actions.' },
  { label: 'Cost efficiency', value: '-42%', detail: 'Lower regional launch cost before first local headcount.' }
];

const analystQuotes = [
  {
    quote:
      'Agent-driven market entry will compress 18 months of manual GTM setup into a 90-day signal loop for global teams.',
    source: 'GTM Systems Forum, 2026 Outlook'
  },
  {
    quote:
      'The winners in cross-border growth will be operators that can run prospecting, localization and partner mapping 24/7.',
    source: 'Revenue Operations Council Brief'
  },
  {
    quote:
      'First regional hires will increasingly be triggered by AI-qualified pipeline density rather than intuition.',
    source: 'B2B Expansion Benchmark Report'
  }
];

const costData = [
  { metric: 'Traditional market-entry setup', before: '$480K', after: '$278K' },
  { metric: 'Time to first qualified pipeline', before: '22 weeks', after: '7 weeks' },
  { metric: 'Cost per qualified opportunity', before: '$3,200', after: '$1,180' }
];

const featureCards = [
  {
    title: 'Pod Orchestration Layer',
    detail: 'Coordinate SDR outreach, local marketing, and channel plays in one operating surface with weekly signal scoring.'
  },
  {
    title: 'Managed Service Mode',
    detail: 'Switch to full-service execution and receive qualified meetings and pipeline while we run daily operations.'
  },
  {
    title: 'Headcount Signal Engine',
    detail: 'Use real pipeline density, conversion quality, and cost curves to decide when a local hire becomes ROI-positive.'
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="site-nav">
        <div className="brand">Agentic Market Entry</div>
        <nav>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="#pricing">Book Demo</a>
      </header>

      <section className="hero" id="platform">
        <p className="eyebrow">Launches Q3 2026</p>
        <h1>Market entry pods that generate pipeline before you place your first local headcount.</h1>
        <p className="subtitle">
          Blend SDR, marketing, and partner/channel execution into one AI-native operating layer. Run it as SaaS or
          as a managed service that gives you qualified pipeline with clear hiring signals by market.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#snapshots">See Live Snapshots</a>
          <a className="btn btn-secondary" href="#impact">View Analyst Data</a>
        </div>
      </section>

      <section className="feature-grid">
        {featureCards.map((card) => (
          <article className="feature-card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.detail}</p>
          </article>
        ))}
      </section>

      <section className="snapshots" id="snapshots" aria-label="Product snapshots">
        <article className="card">
          <div className="card-header">
            <h2>Snapshot 01 · Lead Operations Table</h2>
            <span className="badge">South Korea Pod</span>
          </div>
          <p className="muted">Generated demand, inbound chat load, and handoff quality in one operator view.</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Channel</th>
                  <th>Generated Leads</th>
                  <th>SQLs</th>
                  <th>Conversion</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Outbound SDR</td><td>74</td><td>22</td><td>29.7%</td></tr>
                <tr><td>Inbound Korean Chat</td><td>46</td><td>13</td><td>28.2%</td></tr>
                <tr><td>Partner Referrals</td><td>8</td><td>4</td><td>50.0%</td></tr>
              </tbody>
            </table>
          </div>
          <div className="metric">Live signal: 39 SQLs routed this quarter from the Seoul pod.</div>
        </article>

        <article className="card">
          <div className="card-header">
            <h2>Snapshot 02 · Pod Mix Pie + Partner Fit</h2>
            <span className="badge">Automation Mix</span>
          </div>
          <p className="muted">AI pod capacity split by function, then matched with channel partner fit quality.</p>
          <div className="pie-row">
            <div className="pie-chart" aria-label="Pod performance split" />
            <div className="legend">
              {podPerformance.map((item) => (
                <div className="legend-row" key={item.label}>
                  <span className={`dot ${item.className}`} />
                  <span>{item.label}</span>
                  <strong>{item.value}%</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="stack">
            {partnerData.map((partner) => (
              <div className="row" key={partner.name}>
                <span>{partner.name}</span>
                <span>{partner.fitRatio} fit</span>
                <span>{partner.sourcedPipeline}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <div className="card-header">
            <h2>Snapshot 03 · Stacked Progress by Market</h2>
            <span className="badge">Headcount Signal</span>
          </div>
          <p className="muted">Q1 qualified pipeline density suggests where to place your next regional hire.</p>
          <div className="bars">
            {quarterlyPipeline.map((entry) => (
              <div className="bar-group" key={entry.market}>
                <div className="bar-label-row">
                  <span>{entry.market}</span>
                  <strong>{entry.leads} leads</strong>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${entry.progress}%` }} /></div>
              </div>
            ))}
          </div>
          <p className="signal">Signal: Japan (36) vs South Korea (8) indicates Japan is likely next for local headcount.</p>
        </article>
      </section>

      <section className="insights" id="impact">
        <h2>Analyst perspective: how AI changes global expansion economics</h2>
        <p className="muted">Do more with less: agents run 24/7/365 to reduce setup overhead, accelerate first pipeline, and de-risk headcount timing.</p>

        <div className="stat-grid">
          {transformationStats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-detail">{stat.detail}</p>
            </article>
          ))}
        </div>

        <div className="cost-panel">
          <h3>Market entry cost benchmark (analyst modeled)</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Metric</th><th>Legacy Motion</th><th>With Agentic Pods</th></tr>
              </thead>
              <tbody>
                {costData.map((row) => (
                  <tr key={row.metric}><td>{row.metric}</td><td>{row.before}</td><td>{row.after}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="quote-grid">
          {analystQuotes.map((item) => (
            <blockquote key={item.source}>
              <p>“{item.quote}”</p>
              <cite>{item.source}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="pricing" id="pricing">
        <h2>Launch-ready commercial options</h2>
        <div className="pricing-grid">
          <article className="price-card">
            <h3>SaaS Control Plane</h3>
            <p className="price">$4,900<span>/month</span></p>
            <ul>
              <li>Pod orchestration workspace</li>
              <li>Regional signal dashboards</li>
              <li>Partner fit scoring</li>
            </ul>
          </article>
          <article className="price-card featured">
            <h3>Managed Service</h3>
            <p className="price">$12,000<span>/month</span></p>
            <ul>
              <li>Done-for-you pod operations</li>
              <li>Qualified meetings and pipeline</li>
              <li>Weekly headcount signal review</li>
            </ul>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Agentic Market Entry</strong>
          <p>AI-driven pipeline generation for global expansion teams.</p>
        </div>
        <div className="footer-links">
          <a href="#platform">Platform</a>
          <a href="#snapshots">Snapshots</a>
          <a href="#impact">Impact</a>
          <a href="#pricing">Pricing</a>
        </div>
        <p className="copyright">© 2026 Agentic Market Entry. All rights reserved.</p>
      </footer>
    </main>
  );
}
