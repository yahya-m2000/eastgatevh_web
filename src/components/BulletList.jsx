import { cn } from '@/lib/utils';

/**
 * Shared bulleted list treatment (a small primary-color dot marker) used
 * wherever a simple bullet list appears, instead of each call site
 * duplicating the same `<span className="mt-2 h-1.5 w-1.5 ...">` marker.
 */
const BulletList = ({ items, tone = 'light', className }) => (
  <ul className={cn('flex flex-col gap-3', className)}>
    {items.map((item) => (
      <li
        key={item}
        className={cn(
          'flex items-start gap-3 text-base',
          tone === 'dark' ? 'text-paper/80' : 'text-ink',
        )}
      >
        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
        {item}
      </li>
    ))}
  </ul>
);

export default BulletList;
