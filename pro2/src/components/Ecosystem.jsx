const apps = [
  ['/pisc/icon6_1.png', 'Figma'],
  ['/pisc/icon6_2.png', 'Slack'],
  ['/pisc/icon6_3.png', 'Salesforce'],
  ['/pisc/icon6_4.png', 'Notion'],
  ['/pisc/icon6_5.png', 'Zapier'],
  ['/pisc/icon6_6.png', 'Gmail'],
];

export default function Ecosystem() {
  return (
    <>
      <section className="section" id="integrations">
        <div className="section-header">
          <h2 className="section-title">Works Seamlessly With Your Ecosystem.</h2>
          <p className="section-subtitle">Connect over 100+ apps to automate your entire digital ecosystem - no code required.</p>
        </div>

        <div className="grid-eco">
          {apps.map(([icon, name]) => (
            <div className="eco-item" key={name}>
              <img src={icon} alt="" />
              <span className="eco-label">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="insights">
        <div className="cta-banner">
          <img src="/pisc/backgrnd_7.png" alt="" className="cta-bg" />
          <div className="cta-content">
            <h2>Automate Everything. Achieve<br />Anything.</h2>
            <p>Join the next generation of smart enterprises that automate workflows, decisions, and growth - all powered by AI.</p>
            <button className="btn-primary">GET EARLY ACCESS</button>
          </div>
        </div>
      </section>
    </>
  );
}
