const marketCoverage = [
  'Argentina',
  'Brazil',
  'Chile',
  'Colombia',
  'Mexico',
  'Peru',
  'UAE',
  'Saudi Arabia',
  'Qatar',
  'South Africa',
  'Nigeria',
  'Kenya',
  'Egypt',
  'Morocco',
  'Turkey',
  'Poland',
  'Czechia',
  'Romania',
  'Ukraine',
  'Portugal',
  'Greece',
  'Netherlands',
  'Belgium',
  'Switzerland',
  'Austria',
  'Denmark',
  'Sweden',
  'Norway',
  'Finland',
  'Singapore',
  'South Korea',
  'India',
  'Indonesia',
  'Thailand',
  'Vietnam',
  'Malaysia',
  'Philippines',
  'Australia',
  'New Zealand'
];

const marketCount = marketCoverage.length;

const partnerData = [
  { name: 'HanCom Distribution Alliance', fitRatio: '90%', status: 'High fit' },
  { name: 'Seoul Enterprise Cloud Network', fitRatio: '74%', status: 'Scaling' },
  { name: 'K-Scale Channel Group', fitRatio: '23%', status: 'Low fit' }
];

const eventData = [
  { event: 'FinTech Seoul Meetup', impact: '18 MQLs', date: 'Jan 24' },
  { event: 'K-Cloud Partner Roadshow', impact: '31 MQLs', date: 'Feb 12' },
  { event: 'AI Export Forum Busan', impact: '22 MQLs', date: 'Mar 02' }
];

const inboundChats = [
  { company: 'Mirae Commerce', note: 'Requested Korean-language demo', priority: 'P1' },
  { company: 'NeoFactory', note: 'Needs partner-assisted onboarding', priority: 'P2' },
  { company: 'BlueHan Tech', note: 'Asks for managed service pricing', priority: 'P1' }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Agentic Market Entry</p>
        <h1>Deploy market entry pods that automate global pipeline generation.</h1>
        <p className="subtitle">
          Blend SDR, marketing and partner/channel execution into one engine. Operate it as SaaS or switch to a
          managed service that delivers qualified leads and pipeline directly to your team.
        </p>
        <div className="launch-pill">Launching Q3 2026 • 30+ markets supported at launch</div>
      </section>

      <section className="snapshots" aria-label="Product snapshots">
        <article className="card">
          <h2>South Korea Lead Engine Snapshot</h2>
          <p className="muted">Generated leads and conversion signals from the Seoul pod.</p>
          <ul>
            <li><strong>128</strong> generated leads this quarter</li>
            <li><strong>39</strong> SQLs routed to sales</li>
            <li><strong>18%</strong> lead-to-opportunity conversion</li>
          </ul>
          <div className="metric">Korean inbound chats: <strong>46</strong> this month</div>
        </article>

        <article className="card">
          <h2>Local Marketing & Inbound Chats</h2>
          <p className="muted">Event-sourced demand and Korean inbound engagement.</p>
          <div className="stack">
            {eventData.map((item) => (
              <div className="row" key={item.event}>
                <span>{item.event}</span>
                <span>{item.impact}</span>
                <span>{item.date}</span>
              </div>
            ))}
          </div>
          <div className="chat-box">
            {inboundChats.map((chat) => (
              <p key={chat.company}><strong>{chat.priority}</strong> {chat.company}: {chat.note}</p>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Headcount Signal & Channel Fit</h2>
          <p className="muted">Q1 pipeline comparison and partner fit ratio.</p>
          <div className="pipeline">
            <p><strong>Q1 pipeline:</strong> Japan 36 vs South Korea 8</p>
            <p className="signal">Signal: Japan appears ripe for next regional headcount.</p>
          </div>
          <div className="stack">
            {partnerData.map((partner) => (
              <div className="row" key={partner.name}>
                <span>{partner.name}</span>
                <span>{partner.fitRatio}</span>
                <span>{partner.status}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="coverage">
        <h2>Launch market coverage (outside US + G8 countries)</h2>
        <p>
          Coverage includes demand generation, partner sourcing, local-language inbound support, and regional GTM
          analytics across <strong>{marketCount}</strong> launch markets. Japan appears above only in comparative
          pipeline signal modeling and is not included in launch coverage.
        </p>
        <div className="market-grid">
          {marketCoverage.map((market) => (
            <span className="market-pill" key={market}>{market}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
