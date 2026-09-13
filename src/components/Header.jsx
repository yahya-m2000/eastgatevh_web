import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLenis } from 'lenis/react';
import Logo from '@/components/Logo';
import MenuOverlay from '@/components/MenuOverlay';
import { designContent } from '@/content/siteContent';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef(null);
  const lenis = useLenis();
  useEffect(() => {
    if (menuOpen) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [menuOpen, lenis]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">
        {designContent.skip}
      </a>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <NavLink to="/" aria-label={designContent.homeLabel} className="header-brand">
            <Logo />
            <span>{designContent.descriptor}</span>
          </NavLink>
          <nav className="desktop-nav" aria-label={designContent.navigation}>
            {designContent.primaryNav.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <NavLink className="header-contact" to={designContent.contactLink.path}>
              {designContent.contactLink.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </NavLink>
            <button
              ref={triggerRef}
              className="menu-trigger"
              type="button"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span>{designContent.menu}</span>
              <span className="menu-lines" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay open={menuOpen} onOpenChange={setMenuOpen} triggerRef={triggerRef} />
    </>
  );
};
export default Header;
