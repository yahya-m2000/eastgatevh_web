import FadeIn from '@/components/motion/FadeIn';
import { Label, SectionHeading } from '@/components/editorial/primitives';

const JourneyEditorial = ({ title, intro, steps }) => (
  <section
    data-header-dark
    className="bg-secondary px-6 py-24 text-secondary-foreground sm:px-10 md:py-32"
  >
    <div className="container-page">
      <FadeIn>
        <div className="mb-16 grid gap-10 md:grid-cols-12 md:items-end md:gap-20">
          <div className="md:col-span-5">
            <Label dark>The journey</Label>
            <SectionHeading dark>{title}</SectionHeading>
          </div>
          {intro && (
            <p className="text-base leading-relaxed text-secondary-foreground/65 md:col-span-7">
              {intro}
            </p>
          )}
        </div>
      </FadeIn>

      <div className="border-t border-paper/10">
        {steps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.04}>
            <div className="grid gap-4 border-b border-paper/10 py-6 sm:grid-cols-[48px_260px_1fr] sm:items-center sm:gap-8">
              <span className="font-mono text-[11px] tracking-[0.2em] text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-xl font-light">
                {step.title.replace(/^\d+\.\s*/, '')}
              </span>
              <span className="text-sm leading-relaxed text-secondary-foreground/65">
                {step.body}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default JourneyEditorial;
