import CardGrid from '@/components/CardGrid';
import ContentSection from '@/components/ContentSection';
import PageHero from '@/components/PageHero';
import SectionSplit from '@/components/SectionSplit';
import Seo from '@/components/Seo';
import StatStrip from '@/components/StatStrip';
import Timeline from '@/components/Timeline';
import {
  founderCtaBlock,
  founderJourney,
  hero,
  keyStats,
  pageMeta,
  portfolioHighlights,
  regionFocus,
  valuePillars,
} from '@/content/siteContent';

const HomePage = () => (
  <>
    <Seo {...pageMeta.home} />
    <PageHero {...hero} />
    <StatStrip stats={keyStats} />

    <ContentSection
      title="How EVH works"
      intro="A venture builder model grounded in institutional rigor, practical execution, and ethical growth."
    >
      <CardGrid items={valuePillars} />
    </ContentSection>

    <ContentSection
      title="Founder journey"
      intro="From diligence to scale, EVH stays close to execution with a clear operating cadence."
    >
      <Timeline steps={founderJourney} />
    </ContentSection>

    <ContentSection
      title="Regional focus"
      intro="We identify scalable opportunities in underserved markets where operational support creates lasting advantage."
    >
      <CardGrid items={regionFocus} />
    </ContentSection>

    <ContentSection
      title="Portfolio highlights"
      intro="Representative placeholders for launch; these can be replaced with live portfolio companies."
    >
      <CardGrid items={portfolioHighlights} renderMeta={(item) => item.region} />
    </ContentSection>

    <SectionSplit {...founderCtaBlock} />
  </>
);

export default HomePage;
