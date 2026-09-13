import { ArrowDown } from 'lucide-react';
import ActionLink from '@/components/ActionLink';
import SplitHeading from '@/components/motion/SplitHeading';
import ParallaxImage from '@/components/motion/ParallaxImage';
import { designContent, keyStats } from '@/content/siteContent';

const HomeHero = () => {
  const content = designContent.home;
  return (
    <>
      <section className="home-hero page-gutter">
        <div className="hero-topline">
          <p className="eyebrow">{content.eyebrow}</p>
          <span className="eyebrow hero-edition">{content.locations}</span>
        </div>
        <h1 className="hero-title" aria-label={content.lines.join(' ')}>
          {content.lines.map((line, i) => (
            <SplitHeading
              as="span"
              key={line}
              className={`hero-title-line ${i ? 'text-accent' : ''}`}
            >
              {line}
            </SplitHeading>
          ))}
        </h1>
        <div className="hero-bottom">
          <a className="scroll-cue" href="#perspective">
            <span className="scroll-circle">
              <ArrowDown size={24} aria-hidden="true" />
            </span>
            <span>{content.scroll}</span>
          </a>
          <div className="hero-intro">
            <p>{content.intro}</p>
            <ActionLink to={content.cta.path}>{content.cta.label}</ActionLink>
          </div>
        </div>
      </section>
      <section id="perspective" className="hero-landscape">
        <ParallaxImage src={content.image} alt={content.imageAlt} priority>
          <div className="landscape-shade" />
          <div className="landscape-copy page-gutter">
            <p className="eyebrow">{content.imageLabel}</p>
            <h2>{content.imageHeading}</h2>
            <p className="landscape-note">{content.imageNote}</p>
          </div>
        </ParallaxImage>
      </section>
      <div className="stat-strip page-gutter">
        {keyStats.map((stat) => (
          <div key={stat.label}>
            <span>{stat.value}</span>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default HomeHero;
