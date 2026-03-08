import CardGrid from '../components/CardGrid';
import ContentSection from '../components/ContentSection';
import PageHero from '../components/PageHero';
import SectionSplit from '../components/SectionSplit';
import Seo from '../components/Seo';
import StatStrip from '../components/StatStrip';
import Timeline from '../components/Timeline';
import {
  founderJourney,
  hero,
  homeContactCta,
  keyStats,
  modelCapabilities,
  pageMeta,
  portfolioHighlights,
  regionFocus,
  valuePillars,
} from '../content/siteContent';

const HomePage = () => (
  <>
    <Seo {...pageMeta.home} />

    <PageHero {...hero} />

    <ContentSection
      title="What EASTGATE does"
      intro="We invest in and actively build resilient companies across undercapitalised and developing markets in Africa and Asia."
    >
      <CardGrid items={valuePillars} />
    </ContentSection>

    <ContentSection
      title="Investment model overview"
      intro="EASTGATE combines structured investment with practical operating support to improve execution quality and long-term growth outcomes."
    >
      <CardGrid items={modelCapabilities} />
    </ContentSection>

    <ContentSection
      title="Founder journey timeline"
      intro="From diligence to scale, we work alongside founders with a clear sequence of value-creation milestones."
    >
      <Timeline steps={founderJourney} />
    </ContentSection>

    <ContentSection
      title="Regions focus"
      intro="Our regional strategy prioritises markets where operational depth and strategic capital can unlock disproportionate long-term value."
    >
      <CardGrid items={regionFocus} />
    </ContentSection>

    <ContentSection
      title="Portfolio preview"
      intro="Representative placeholders below show how EASTGATE portfolio companies will be presented."
    >
      <CardGrid items={portfolioHighlights} renderMeta={(item) => item.region} />
    </ContentSection>

    <ContentSection
      title="Key statistics"
      intro="A quick snapshot of our foundation, geographic focus, and venture-building model."
    >
      <StatStrip stats={keyStats} />
    </ContentSection>

    <SectionSplit {...homeContactCta} />
  </>
);

export default HomePage;
