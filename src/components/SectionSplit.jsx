import { NavLink } from 'react-router-dom';

const SectionSplit = ({ title, body, bullets, cta }) => (
  <section className="section-split">
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
    <div>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {cta && (
        <NavLink to={cta.path} className="button-primary">
          {cta.label}
        </NavLink>
      )}
    </div>
  </section>
);

export default SectionSplit;
