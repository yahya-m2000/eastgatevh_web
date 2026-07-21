import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';

const StatStrip = ({ stats }) => (
  <StaggerContainer
    className="container-page -mt-10 grid gap-4 sm:grid-cols-3"
    aria-label="Key metrics"
  >
    {stats.map((stat) => (
      <StaggerItem key={stat.label}>
        <article className="rounded-(--radius-card) border border-border bg-surface-raised p-6 shadow-sm">
          <p className="font-display text-2xl font-extrabold text-primary">{stat.value}</p>
          <p className="mt-1 text-sm text-muted">{stat.label}</p>
        </article>
      </StaggerItem>
    ))}
  </StaggerContainer>
);

export default StatStrip;
