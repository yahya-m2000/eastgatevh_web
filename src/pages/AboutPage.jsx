import CardGrid from '../components/CardGrid';
import ContentSection from '../components/ContentSection';
import Seo from '../components/Seo';
import { aboutValues, pageMeta } from '../content/siteContent';

const AboutPage = () => (
  <>
    <Seo {...pageMeta.about} />
    <ContentSection
      title="About EVH"
      intro="Eastgate Venture Holdings is a UK-incorporated venture builder investing in undercapitalised and developing regions across Africa and Asia."
    >
      <p>
        EVH combines venture capital discipline with practical operational development to help businesses become durable,
        investment-ready, and regionally competitive.
      </p>
    </ContentSection>

    <ContentSection
      title="What guides us"
      intro="Our operating principles shape how we partner with founders, investors, and local ecosystems."
    >
      <CardGrid items={aboutValues} />
    </ContentSection>
  </>
);

export default AboutPage;
