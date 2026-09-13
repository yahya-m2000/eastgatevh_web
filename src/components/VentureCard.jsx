import ActionLink from '@/components/ActionLink';
import { designContent } from '@/content/siteContent';

const VentureCard = ({ company, headingAs: Heading = 'h3' }) => (
  <article className="venture-card">
    <div className="venture-identity">
      <p className="eyebrow">{company.stage}</p>
      <Heading>{company.name}</Heading>
      <p className="venture-sector">{company.sector}</p>
      <p className="venture-region">{company.region}</p>
    </div>
    <div className="venture-detail">
      <p className="venture-summary">{company.summary}</p>
      <div className="venture-involvement">
        <p className="eyebrow">{designContent.portfolio.involvementLabel}</p>
        <p>{company.involvement}</p>
      </div>
      <div className="venture-actions">
        <ActionLink to={company.path}>{designContent.portfolio.caseStudyLabel}</ActionLink>
        {company.website && (
          <ActionLink href={company.website.href}>{company.website.label}</ActionLink>
        )}
      </div>
    </div>
  </article>
);
export default VentureCard;
