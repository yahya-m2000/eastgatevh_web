import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SplitHeading from '@/components/motion/SplitHeading';
import FadeIn from '@/components/motion/FadeIn';
import Parallax from '@/components/motion/Parallax';

const PageHero = ({ eyebrow, title, subtitle, cta }) => (
  <section className="relative overflow-hidden border-b border-border bg-surface">
    <Parallax
      speed={50}
      className="pointer-events-none absolute -right-32 -top-32 h-96 w-96"
      innerClassName="h-full w-full rounded-full bg-accent/20 blur-3xl"
    />
    <Parallax
      speed={30}
      className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72"
      innerClassName="h-full w-full rounded-full bg-primary/15 blur-3xl"
    />

    <div className="container-page relative py-20 md:py-32">
      {eyebrow && (
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </p>
        </FadeIn>
      )}

      <SplitHeading
        as="h1"
        className="max-w-3xl font-display text-4xl font-bold text-ink sm:text-5xl md:text-6xl"
      >
        {title}
      </SplitHeading>

      {subtitle && (
        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg text-muted">{subtitle}</p>
        </FadeIn>
      )}

      {cta && (
        <FadeIn delay={0.25}>
          <Button asChild size="lg" className="mt-8">
            <NavLink to={cta.path}>{cta.label}</NavLink>
          </Button>
        </FadeIn>
      )}
    </div>
  </section>
);

export default PageHero;
