import CtaBand from '@/components/editorial/CtaBand';
import InteriorHero from '@/components/editorial/InteriorHero';
import InteriorSection from '@/components/editorial/InteriorSection';
import Seo from '@/components/Seo';
import { founderCtaBlock, pageHeroContent, pageMeta, pageSections } from '@/content/siteContent';

const ContentPage = ({ page, children }) => (
  <>
    <Seo {...pageMeta[page]} />
    <InteriorHero {...pageHeroContent[page]} />
    {children}
    {pageSections[page].map((section, i) => (
      <InteriorSection key={section.heading} section={section} index={i} />
    ))}
    <CtaBand {...founderCtaBlock} />
  </>
);
export default ContentPage;
