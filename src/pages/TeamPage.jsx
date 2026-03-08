import ContentSection from '../components/ContentSection';
import Seo from '../components/Seo';
import { pageMeta, teamMembers } from '../content/siteContent';

const TeamPage = () => (
  <>
    <Seo {...pageMeta.team} />
    <ContentSection
      title="Team"
      intro="A cross-functional partnership model combining investment rigor with operating execution expertise."
    >
      <div className="team-grid">
        {teamMembers.map((member) => (
          <article key={member.name} className="content-card">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p className="card-meta">{member.focus}</p>
          </article>
        ))}
      </div>
    </ContentSection>
  </>
);

export default TeamPage;
