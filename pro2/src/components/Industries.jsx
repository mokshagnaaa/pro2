const industries = [
  ['/pisc/icon5_1.png', 'Finance', 'Automate data reporting and compliance.'],
  ['/pisc/icon5_2.png', 'Healthcare', 'Simplify scheduling and patient analytics.'],
  ['/pisc/icon5_3.png', 'Operations', 'Streamline internal approvals and audits.'],
  ['/pisc/icon5_4.png', 'E-Commerce', 'Manage orders, inventory, and recommendations.'],
];

export default function Industries() {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Smarter Automation Across Every<br />Industry.</h2>
      </div>

      <div className="grid-2">
        {industries.map(([icon, title, text]) => (
          <div className="industry-card" key={title}>
            <img src={icon} alt="" />
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
