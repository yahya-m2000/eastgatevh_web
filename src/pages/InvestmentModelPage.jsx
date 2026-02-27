import CardGrid from '../components/CardGrid';
import ContentSection from '../components/ContentSection';
import Seo from '../components/Seo';
import Timeline from '../components/Timeline';
import { founderJourney, modelCapabilities, pageMeta } from '../content/siteContent';

const InvestmentModelPage = () => (
  <>
    <Seo {...pageMeta.investmentModel} />
    <ContentSection
      title="Investment model"
      intro="We partner early, build methodically, and scale responsibly with founder alignment at the center."
    >
      <Timeline steps={founderJourney} />
    </ContentSection>

    <ContentSection
      title="Where we add value"
      intro="EVH combines capital with practical capabilities that improve operating quality and speed of execution."
    >
      <CardGrid items={modelCapabilities} />
    </ContentSection>
  </>
);

export default InvestmentModelPage;
