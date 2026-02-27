import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { navLinks } from '../content/siteContent';

const Layout = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-top-row">
          <NavLink to="/" className="brand-mark" aria-label="EVH home">
            EVH
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setNavOpen((current) => !current)}
            aria-expanded={navOpen}
            aria-controls="primary-navigation"
          >
            Menu
          </button>

          <NavLink to="/contact" className="cta-link desktop-only">
            Contact Us
          </NavLink>
        </div>

        <nav
          id="primary-navigation"
          className={`site-nav ${navOpen ? 'open' : ''}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className="nav-link">
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="cta-link mobile-only">
            Contact Us
          </NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Eastgate Venture Holdings (EVH). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
