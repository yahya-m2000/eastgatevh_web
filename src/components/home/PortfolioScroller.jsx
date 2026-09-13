import { NavLink } from 'react-router-dom';
import FadeIn from '@/components/motion/FadeIn';
import { Label, SectionHeading } from '@/components/editorial/primitives';
import { cn } from '@/lib/utils';

/**
 * Horizontal-scroll card row, adopted from the Figma's Regions/Portfolio
 * scroller pattern. `variant="light"` (bordered surface cards) or
 * `variant="dark"` (navy cards) — the two homepage instances use different
 * variants so they read as visually distinct rows rather than a repeated
 * block, per the Figma.
 */
const PortfolioScroller = ({
  title,
  intro,
  items,
  renderMeta,
  viewAllHref,
  viewAllLabel,
  variant = 'light',
}) => {
  const dark = variant === 'dark';

  return (
    <section className={cn('py-24 pl-6 sm:pl-10 md:py-32', dark ? 'bg-surface' : 'bg-paper')}>
      <div className="container-page mb-10 pr-6 sm:pr-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Label>{title.eyebrow}</Label>
            <SectionHeading>{title.heading}</SectionHeading>
          </div>
          {viewAllHref && (
            <NavLink
              to={viewAllHref}
              className="whitespace-nowrap border-b border-primary pb-0.5 text-sm text-primary"
            >
              {viewAllLabel} &rarr;
            </NavLink>
          )}
        </div>
        {intro && <p className="mt-4 max-w-2xl text-base text-muted">{intro}</p>}
      </div>

      <FadeIn delay={0.1}>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-6 sm:pr-10">
          {items.map((item) => (
            <article
              key={item.title ?? item.name}
              className={cn(
                'shrink-0 snap-start p-8',
                dark
                  ? 'w-60 bg-secondary text-secondary-foreground transition-colors hover:bg-secondary-hover'
                  : 'w-70 border border-border bg-surface-raised transition-colors hover:border-primary/40 sm:w-85',
              )}
            >
              {renderMeta && (
                <p
                  className={cn(
                    'mb-5 text-[10px] font-semibold uppercase tracking-[0.22em]',
                    dark ? 'text-primary/70' : 'text-muted',
                  )}
                >
                  {renderMeta(item)}
                </p>
              )}
              <h3
                className={cn(
                  'font-display font-light leading-snug',
                  dark ? 'text-xl' : 'text-2xl',
                  dark ? 'text-secondary-foreground' : 'text-ink',
                )}
              >
                {item.title ?? item.name}
              </h3>
              {(item.body ?? item.sector) && (
                <p
                  className={cn(
                    'mt-4 text-sm',
                    dark ? 'text-secondary-foreground/45' : 'text-muted',
                  )}
                >
                  {item.body ?? item.sector}
                </p>
              )}
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default PortfolioScroller;
