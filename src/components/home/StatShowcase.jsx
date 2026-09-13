import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';

const StatShowcase = ({ stats }) => (
  <section data-header-dark className="bg-secondary px-6 py-14 text-secondary-foreground sm:px-10">
    <StaggerContainer className="container-page grid divide-y divide-paper/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {stats.map((stat, i) => (
        <StaggerItem key={stat.label}>
          <div className={i > 0 ? 'py-6 sm:py-0 sm:pl-10' : 'py-6 sm:py-0'}>
            <p className="font-display text-4xl font-light leading-none text-primary sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 max-w-[22ch] text-sm text-secondary-foreground/60">{stat.label}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  </section>
);

export default StatShowcase;
