import { NavLink } from 'react-router-dom';

const PageHero = ({ eyebrow, title, subtitle, cta }) => (
  <section className="hero">
    {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
    <h1>{title}</h1>
    {subtitle && <p className="hero-subtitle">{subtitle}</p>}
    {cta && (
      <NavLink to={cta.path} className="button-primary">
        {cta.label}
      </NavLink>
    )}
  </section>
);

export default PageHero;
