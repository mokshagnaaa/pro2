const primaryCards = [
  ['/pisc/pic2_1.png', 'Adaptive Learning Engine', 'AI that improves with every workflow.'],
  ['/pisc/pic2_2.png', 'No-Code Automation', 'Build processes visually in seconds.'],
  ['/pisc/pic2_3.png', 'Smart Analytics', 'Real-time insights that drive decisions.'],
];

const featureCards = [
  ['/pisc/orchestration3_6.png', 'Workflow Orchestration', 'Connect and automate across all tools.'],
  ['/pisc/predictive-analytics3_5.png', 'Predictive Insights', 'Forecast trends with data-driven precision.'],
  ['/pisc/chatbot3_4.png', 'AI Assistant', 'Automate repetitive tasks with commands.'],
  ['/pisc/exploratory-analysis3_3.png', 'Multi-App Integration', 'Work seamlessly with 100+ platforms.'],
  ['/pisc/user3_2.png', 'Data Visualization', 'See the bigger picture instantly.'],
  ['/pisc/cyber-security3_1.png', 'Security & Compliance', 'Enterprise-grade protection.'],
];

export default function Features() {
  return (
    <>
      <section className="section" id="platform">
        <div className="section-header">
          <h2 className="section-title">Built To Think, Learn, And Automate.</h2>
          <p className="section-subtitle">Our platform goes beyond static automation - it adapts, learns, and evolves with your business data. We integrate AI that understands context, prioritizes performance, and reduces manual work.</p>
        </div>

        <div className="grid-3">
          {primaryCards.map(([icon, title, text]) => (
            <div className="card" key={title}>
              <img src={icon} alt="" />
              <h3 className="card-title">{title}</h3>
              <p className="card-desc">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-header">
          <h2 className="section-title">The Future Of Work, Powered By AI.</h2>
        </div>

        <div className="grid-6">
          {featureCards.map(([icon, title, text]) => (
            <div className="card-sm" key={title}>
              <img src={icon} alt="" />
              <h4 className="card-sm-title">{title}</h4>
              <p className="card-sm-desc">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
