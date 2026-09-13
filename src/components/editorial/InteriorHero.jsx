import SplitHeading from '@/components/motion/SplitHeading';
import { ArrowDownRight } from 'lucide-react';

const InteriorHero = ({ eyebrow, title, subtitle, label, subhead }) => (
  <section className="interior-hero page-gutter">
    <div className="interior-hero-top">
      <p className="eyebrow">{eyebrow || label}</p>
      <ArrowDownRight size={36} strokeWidth={1} aria-hidden="true" />
    </div>
    <SplitHeading className="interior-title">{title}</SplitHeading>
    {(subtitle || subhead) && <p className="interior-subtitle">{subtitle || subhead}</p>}
  </section>
);
export default InteriorHero;
