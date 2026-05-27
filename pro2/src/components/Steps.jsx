const steps = [
  ['/pisc/Group4_1.png', '01', 'Connect', 'Integrate apps in one click'],
  ['/pisc/Group4_2.png', '02', 'Analyze', 'AI detects workflow patterns'],
  ['/pisc/Group4_3.png', '03', 'Automate', 'Executes smart actions'],
  ['/pisc/Group4_4.png', '04', 'Optimize', 'Learns and improves over time'],
];

export default function Steps() {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Automation In Motion</h2>
      </div>

      <div className="steps-wrapper">
        {steps.map(([icon, number, title, text], index) => (
          <div className="step-node" key={title}>
            <div className="step-badge">
              <img src={icon} alt="" />
              <span>{number}</span>
            </div>
            <h4 className="step-title">{title}</h4>
            <p className="step-description">{text}</p>
            {index < steps.length - 1 && <span className="step-arrow" aria-hidden="true"></span>}
          </div>
        ))}
      </div>
    </section>
  );
}
