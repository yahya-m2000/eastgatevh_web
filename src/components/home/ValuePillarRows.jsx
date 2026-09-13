import FadeIn from '@/components/motion/FadeIn';
import { Label, NumLabel, SectionHeading } from '@/components/editorial/primitives';

const ValuePillarRows = ({ title, intro, items }) => (
  <section className="bg-surface px-6 py-24 sm:px-10 md:py-32">
    <div className="container-page">
      <FadeIn>
        <div className="mb-16 grid gap-10 md:grid-cols-12 md:items-end md:gap-20">
          <div className="md:col-span-5">
            <Label>Our approach</Label>
            <SectionHeading>{title}</SectionHeading>
          </div>
          {intro && <p className="text-base leading-relaxed text-muted md:col-span-7">{intro}</p>}
        </div>
      </FadeIn>

      <div className="grid divide-y divide-border border-t border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.05}>
            <div className={index > 0 ? 'py-9 sm:pl-10 sm:pt-9' : 'py-9 sm:pt-9'}>
              <NumLabel n={String(index + 1).padStart(2, '0')} />
              <h3 className="mb-3 text-lg font-semibold leading-snug text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ValuePillarRows;
