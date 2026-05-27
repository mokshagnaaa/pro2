export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Automate Intelligence.<br />Amplify Growth.</h1>
          <p>Aionx combines artificial intelligence with automation to optimize your operations. From predictive insights to workflow orchestration, we empower teams to make smarter, faster decisions - effortlessly. Experience the evolution of intelligent automation.</p>
          <div className="hero-actions">
            <button className="btn-primary">GET STARTED</button>
            <button className="btn-secondary">
              SEE PLATFORM DEMO
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src="/pisc/pic1_1.png" alt="Aionx AI brain visual" className="hero-visual" />
        </div>
      </div>
    </section>
  );
}
