import ActionLink from '@/components/ActionLink';
import FadeIn from '@/components/motion/FadeIn';
import { designContent } from '@/content/siteContent';

const CtaBand = ({ title, body, bullets = [], cta }) => (
  <section className="closing-cta page-gutter section-space">
    <FadeIn className="cta-main">
      <p className="eyebrow">{designContent.cta.eyebrow}</p>
      <h2>{designContent.cta.heading}</h2>
      {cta && <ActionLink to={cta.path}>{cta.label}</ActionLink>}
    </FadeIn>
    <FadeIn className="cta-aside" delay={0.1}>
      <p className="cta-statement">{title}</p>
      {body && <p>{body}</p>}
      <p className="eyebrow">{designContent.cta.audienceLabel}</p>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </FadeIn>
  </section>
);
export default CtaBand;
