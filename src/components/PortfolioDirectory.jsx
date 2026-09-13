import { useState } from 'react';
import VentureCard from '@/components/VentureCard';
import { designContent, portfolioHighlights } from '@/content/siteContent';

const content = designContent.portfolio;
const regions = [content.all, ...new Set(portfolioHighlights.map((item) => item.region))];

const PortfolioDirectory = () => {
  const [region, setRegion] = useState(content.all);
  const companies =
    region === content.all
      ? portfolioHighlights
      : portfolioHighlights.filter((item) => item.region === region);
  return (
    <section className="portfolio-directory page-gutter">
      {regions.length > 2 && (
        <div className="portfolio-filters" role="group" aria-label={content.filterLabel}>
          {regions.map((item) => (
            <button
              className="portfolio-filter"
              type="button"
              aria-pressed={region === item}
              key={item}
              onClick={() => setRegion(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <p className="portfolio-result-count" role="status" aria-live="polite">
        {companies.length} {companies.length === 1 ? content.singularLabel : content.resultLabel}
      </p>
      <div className="venture-list">
        {companies.map((company) => (
          <VentureCard key={company.id} company={company} headingAs="h2" />
        ))}
      </div>
    </section>
  );
};
export default PortfolioDirectory;
