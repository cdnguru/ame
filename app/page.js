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

const transformationStats = [
  { label: 'Always-on execution', value: '24/7/365', detail: 'Agents continuously prospect, enrich, and route accounts.' },
  { label: 'Program velocity', value: '3.1x', detail: 'Faster lead-to-meeting cycles with coordinated pod actions.' },
  { label: 'Cost efficiency', value: '-42%', detail: 'Lower regional launch cost before first local headcount.' }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Agentic Market Entry</p>
        <h1>Deploy market entry pods that automate global pipeline generation.</h1>
        <p className="subtitle">
          Blend SDR, marketing, and partner/channel execution into one AI-native operating layer. Run it as SaaS or
          as a managed service that delivers qualified pipeline before you commit local headcount.
        </p>
        <div className="launch-pill">Launching Q3 2026 • Built to scale beyond 30 markets</div>
      </section>

      <section className="snapshots" aria-label="Product snapshots">
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
                <tr>
                  <td>Outbound SDR</td>
                  <td>74</td>
                  <td>22</td>
                  <td>29.7%</td>
                </tr>
                <tr>
                  <td>Inbound Korean Chat</td>
                  <td>46</td>
                  <td>13</td>
                  <td>28.2%</td>
                </tr>
                <tr>
                  <td>Partner Referrals</td>
                  <td>8</td>
                  <td>4</td>
                  <td>50.0%</td>
                </tr>
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
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${entry.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="signal">Signal: Japan (36) vs South Korea (8) indicates Japan is likely next for local headcount.</p>
        </article>
      </section>

      <section className="insights">
        <h2>How agentic pods transform market entry</h2>
        <p className="muted">
          Do more with less: agents run 24/7/365, coordinate every channel, and pave the way for your first local
          headcount with evidence-backed timing.
        </p>

        <div className="stat-grid">
          {transformationStats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-detail">{stat.detail}</p>
            </article>
          ))}
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
    </main>
  );
}
