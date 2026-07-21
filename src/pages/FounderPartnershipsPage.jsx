import { NavLink } from 'react-router-dom';
import ContentSection from '@/components/ContentSection';
import Seo from '@/components/Seo';
import Timeline from '@/components/Timeline';
import CardGrid from '@/components/CardGrid';
import { Button } from '@/components/ui/button';
import {
  founderJourney,
  founderPartnershipModel,
  founderSupportAreas,
  pageMeta,
} from '@/content/siteContent';

const FounderPartnershipsPage = () => (
  <>
    <Seo {...pageMeta.founderPartnerships} />

    <ContentSection
      title="Founder Partnerships"
      intro="EVH partners closely with founders to build and operate resilient companies in undercapitalised and emerging markets."
    >
      <p className="max-w-2xl text-base text-muted">
        We combine long-term capital with practical execution support so founders can move from
        strategy to outcomes with confidence and discipline.
      </p>
    </ContentSection>

    <ContentSection
      title="How EVH supports founders operationally"
      intro="Our operating-partner model provides embedded support where execution quality most often determines growth outcomes."
    >
      <CardGrid items={founderSupportAreas} />
    </ContentSection>

    <ContentSection
      title="The EVH investment model"
      intro="We invest with founder alignment at the center, then support execution through structured operating rhythms and governance."
    >
      <CardGrid items={founderPartnershipModel} />
    </ContentSection>

    <ContentSection
      title="Founder journey timeline"
      intro="A practical partnership sequence from diligence through scaling operations."
    >
      <Timeline steps={founderJourney} />
    </ContentSection>

    <ContentSection
      title="Build with EVH"
      intro="If you are building in an undercapitalised market and want a hands-on investment partner, we would like to hear from you."
    >
      <Button asChild size="lg">
        <NavLink to="/contact">Contact Us</NavLink>
      </Button>
    </ContentSection>
  </>
);

export default FounderPartnershipsPage;
