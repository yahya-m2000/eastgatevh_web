import ContentSection from '@/components/ContentSection';
import Seo from '@/components/Seo';
import CardGrid from '@/components/CardGrid';
import { pageMeta, regionFocus } from '@/content/siteContent';

const sectors = [
  'Financial inclusion and critical business services',
  'Healthcare delivery and access infrastructure',
  'Agricultural and climate-adaptive value chains',
];

const RegionsPage = () => (
  <>
    <Seo {...pageMeta.regions} />
    <ContentSection
      title="Regions"
      intro="Our current focus spans selected markets in Africa and Asia where long-term value creation can be accelerated through active support."
    >
      <CardGrid items={regionFocus} />
    </ContentSection>

    <ContentSection
      title="Sector orientation"
      intro="EVH prioritises sectors where operational support and strategic capital can generate broad-based market impact."
    >
      <ul className="flex flex-col gap-3">
        {sectors.map((sector) => (
          <li key={sector} className="flex items-start gap-3 text-base text-ink">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {sector}
          </li>
        ))}
      </ul>
    </ContentSection>
  </>
);

export default RegionsPage;
