import FadeIn from '@/components/motion/FadeIn';
import ActionLink from '@/components/ActionLink';
import StoryStages from '@/components/editorial/StoryStages';
import { designContent } from '@/content/siteContent';

const InteriorSection = ({ section, index = 0 }) => {
  const surface = section.bg === 'surface' || index % 2 === 1;
  const id = section.id || section.label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <section id={id} className={`interior-section ${surface ? 'interior-section--surface' : ''}`}>
      <div className="container-page">
        <FadeIn className="editorial-intro">
          <div>
            <p className="eyebrow">{section.label}</p>
            <h2>{section.heading}</h2>
          </div>
          {section.intro && <p>{section.intro}</p>}
        </FadeIn>
        <ContentBlock block={section.content} label={section.label} />
        {section.cta && (
          <FadeIn className="editorial-action">
            <ActionLink href={section.cta.href} to={section.cta.path}>
              {section.cta.label}
            </ActionLink>
          </FadeIn>
        )}
      </div>
    </section>
  );
};
const ContentBlock = ({ block, label }) => {
  if (block.type === 'paragraph')
    return (
      <FadeIn>
        {[].concat(block.body).map((body) => (
          <p key={body} className="editorial-paragraph">
            {body}
          </p>
        ))}
      </FadeIn>
    );
  if (block.type === 'cards')
    return (
      <div className="editorial-card-grid">
        {block.items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.04}>
            <article className="editorial-card">
              <span className="row-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    );
  if (block.type === 'steps')
    return (
      <div>
        {block.items.map((item, i) => (
          <FadeIn key={item.title}>
            <article className="editorial-step">
              <span className="row-index">{item.n || String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    );
  if (block.type === 'story')
    return (
      <FadeIn>
        <StoryStages items={block.items} label={label} />
      </FadeIn>
    );
  if (block.type === 'bullets')
    return (
      <FadeIn>
        <ol className="editorial-bullets">
          {block.items.map((item, i) => (
            <li key={item}>
              <span className="row-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </FadeIn>
    );
  if (block.type === 'team')
    return (
      <div className="team-grid">
        {block.items.map((member, i) => (
          <FadeIn key={member.name} delay={(i % 3) * 0.04}>
            <article className="team-member">
              <div className="team-monogram" aria-hidden="true">
                <span>
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
              {member.note && <p className="team-note">{member.note}</p>}
              {member.experience && (
                <details className="team-experience">
                  <summary>{designContent.team.experienceLabel}</summary>
                  <div className="team-experience-list">
                    {member.experience.map((experience) => (
                      <div key={experience.organisation}>
                        <h4>{experience.organisation}</h4>
                        <p className="team-experience-role">{experience.role}</p>
                        <p>{experience.detail}</p>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </article>
          </FadeIn>
        ))}
      </div>
    );
  if (block.type === 'stat-row')
    return (
      <div className="editorial-stats">
        {block.items.map((stat) => (
          <FadeIn key={stat.label}>
            <div className="editorial-stat">
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    );
  return null;
};
export default InteriorSection;
