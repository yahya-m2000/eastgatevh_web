import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useLenis } from 'lenis/react';
import Logo from '@/components/Logo';
import { contactDetails, designContent } from '@/content/siteContent';
import { useReducedMotion } from '@/lib/useReducedMotion';

const Footer = () => {
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const toTop = () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
  };
  return (
    <footer className="site-footer page-gutter">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" aria-label={designContent.homeLabel}>
            <Logo />
          </Link>
          <p>{designContent.footer.statement}</p>
        </div>
        {designContent.footer.groups.map((group) => (
          <nav key={group.label} className="footer-links" aria-label={group.label}>
            <h2>{group.label}</h2>
            {group.items.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
        ))}
        <div className="footer-contact">
          <h2>{designContent.footer.connect}</h2>
          <a className="footer-email" href={`mailto:${contactDetails.email}`}>
            {contactDetails.email}
          </a>
          <p>{contactDetails.location}</p>
          <Link className="footer-contact-link" to={designContent.contactLink.path}>
            {designContent.contactLink.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {designContent.footer.legal}
        </p>
        <button type="button" onClick={toTop}>
          {designContent.backToTop}
          <ArrowUp size={16} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};
export default Footer;
