import { cn } from '@/lib/utils';
import { designContent } from '@/content/siteContent';

const Logo = ({ className, mark = false, invert = false }) => (
  <span className={cn('brand-logo', invert && 'brand-logo--light', className)}>
    <img
      src={mark ? '/logo/1x/brand_logo.png' : '/logo/1x/full_brand_logo.png'}
      alt={designContent.brand}
      width={mark ? 60 : 617}
      height={94}
    />
  </span>
);
export default Logo;
