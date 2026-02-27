import ContentSection from '../components/ContentSection';
import Seo from '../components/Seo';
import CardGrid from '../components/CardGrid';
import { pageMeta, regionFocus } from '../content/siteContent';

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
      <ul>
        <li>Financial inclusion and critical business services</li>
        <li>Healthcare delivery and access infrastructure</li>
        <li>Agricultural and climate-adaptive value chains</li>
      </ul>
    </ContentSection>
  </>
);

export default RegionsPage;
