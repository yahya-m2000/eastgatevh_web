import { cn } from '@/lib/utils';

/**
 * Shared editorial building blocks, adopted from the Figma skeleton
 * (figma/src/components/shared.tsx) and reimplemented as Tailwind-utility
 * React components keyed to this app's theme tokens — so they repaint
 * automatically under either color palette (see src/lib/palette.js) and
 * use Sora rather than the Figma's Fraunces/Inter pairing.
 */

export const Label = ({ children, dark = false, className }) => (
  <p
    className={cn(
      'mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.3em]',
      dark ? 'text-primary/75' : 'text-muted',
      className,
    )}
  >
    {children}
  </p>
);

export const SectionHeading = ({ as: Tag = 'h2', children, dark = false, className }) => (
  <Tag
    className={cn(
      'font-display text-[clamp(1.75rem,2.5vw,2.5rem)] font-light leading-[1.15]',
      dark ? 'text-secondary-foreground' : 'text-ink',
      className,
    )}
  >
    {children}
  </Tag>
);

export const NumLabel = ({ n, className }) => (
  <span
    className={cn('mb-5 block font-mono text-[11px] tracking-[0.22em] text-primary', className)}
  >
    {n}
  </span>
);
