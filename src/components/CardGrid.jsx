import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';

const CardGrid = ({ items, renderMeta }) => (
  <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item) => (
      <StaggerItem key={item.title ?? item.name}>
        <article className="group h-full rounded-(--radius-card) border border-border bg-surface-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-ink/5">
          <h3 className="font-display text-lg font-semibold text-ink">{item.title ?? item.name}</h3>
          <p className="mt-2 text-sm text-muted">{item.body ?? item.sector}</p>
          {renderMeta && (
            <p className="mt-4 text-sm font-semibold text-primary">{renderMeta(item)}</p>
          )}
        </article>
      </StaggerItem>
    ))}
  </StaggerContainer>
);

export default CardGrid;
