export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#">
            <img src="/pisc/icon7_1.png" alt="Aionx Company logo" />
          </a>
          <p className="footer-desc">Redefining automation with AI that learns, adapts, and grows.</p>
        </div>

        <div>
          <h4 className="footer-title">Quick Navigation</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Quick Contact</h4>
          <img src="/pisc/icon7_2.png" alt="Contact badges" className="contact-badges" />
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
}
