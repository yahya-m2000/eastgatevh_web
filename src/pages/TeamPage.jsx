import ContentSection from '@/components/ContentSection';
import Seo from '@/components/Seo';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { pageMeta, teamMembers } from '@/content/siteContent';

const TeamPage = () => (
  <>
    <Seo {...pageMeta.team} />
    <ContentSection
      title="Team"
      intro="A cross-functional partnership model combining investment rigor with operating execution expertise."
    >
      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <StaggerItem key={member.name}>
            <article className="h-full rounded-(--radius-card) border border-border bg-surface-raised p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{member.focus}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ContentSection>
  </>
);

export default TeamPage;
