import { useEffect, useState } from 'react';

const links = ['Home', 'Platform', 'Features', 'Integrations', 'Insights', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} id="navbar">
      <a href="#" className="brand">
        <img src="/pisc/icon7_1.png" alt="Aionx Company logo" />
      </a>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link}>
            <a href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>

      <button className="nav-cta">GET EARLY ACCESS</button>

      <button
        className="nav-menu"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {mobileOpen && (
        <>
          <button className="sidebar-backdrop" aria-label="Close navigation" onClick={() => setMobileOpen(false)}></button>
          <aside className="mobile-sidebar" aria-label="Mobile navigation">
            <div className="sidebar-top">
              <img src="/pisc/icon7_1.png" alt="Aionx Company logo" />
              <button className="sidebar-close" aria-label="Close navigation" onClick={() => setMobileOpen(false)}>×</button>
            </div>
            <ul className="sidebar-links">
              {links.map((link) => (
                <li key={link}>
                  <a href={link === 'Home' ? '#' : `#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <button className="nav-cta sidebar-cta">GET EARLY ACCESS</button>
          </aside>
        </>
      )}
    </nav>
  );
}
