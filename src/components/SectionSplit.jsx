import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/motion/FadeIn';

const SectionSplit = ({ title, body, bullets, cta }) => (
  <section className="border-t border-border bg-ink text-paper">
    <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:py-24">
      <FadeIn direction="left">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-4 text-paper/70">{body}</p>
      </FadeIn>

      <FadeIn direction="right" delay={0.1}>
        <ul className="flex flex-col gap-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-paper/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>
        {cta && (
          <Button asChild variant="accent" size="lg" className="mt-6">
            <NavLink to={cta.path}>{cta.label}</NavLink>
          </Button>
        )}
      </FadeIn>
    </div>
  </section>
);

export default SectionSplit;
