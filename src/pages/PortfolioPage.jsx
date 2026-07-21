import { useMemo, useState } from 'react';
import CardGrid from '@/components/CardGrid';
import ContentSection from '@/components/ContentSection';
import Seo from '@/components/Seo';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pageMeta, portfolioHighlights } from '@/content/siteContent';

const allRegions = ['All', ...new Set(portfolioHighlights.map((item) => item.region))];

const PortfolioPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredPortfolio = useMemo(() => {
    if (selectedRegion === 'All') {
      return portfolioHighlights;
    }

    return portfolioHighlights.filter((item) => item.region === selectedRegion);
  }, [selectedRegion]);

  return (
    <>
      <Seo {...pageMeta.portfolio} />
      <ContentSection
        title="Portfolio"
        intro="Placeholder companies below demonstrate the intended portfolio showcase structure and filter behavior."
      >
        <Tabs value={selectedRegion} onValueChange={setSelectedRegion} className="mb-8">
          <TabsList aria-label="Filter portfolio by region">
            {allRegions.map((region) => (
              <TabsTrigger key={region} value={region}>
                {region}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <CardGrid
          items={filteredPortfolio}
          renderMeta={(item) => `${item.region} · ${item.stage}`}
        />
      </ContentSection>
    </>
  );
};

export default PortfolioPage;
