import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';

const Timeline = ({ steps }) => (
  <StaggerContainer className="flex flex-col gap-6">
    {steps.map((step, index) => (
      <StaggerItem key={step.title}>
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {index + 1}
            </span>
            {index < steps.length - 1 && <span className="mt-2 w-px flex-1 bg-border" />}
          </div>
          <div className="pb-2">
            <h3 className="font-display text-lg font-semibold text-ink">
              {step.title.replace(/^\d+\.\s*/, '')}
            </h3>
            <p className="mt-1 text-sm text-muted">{step.body}</p>
          </div>
        </div>
      </StaggerItem>
    ))}
  </StaggerContainer>
);

export default Timeline;
