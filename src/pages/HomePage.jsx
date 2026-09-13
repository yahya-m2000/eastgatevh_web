import Seo from '@/components/Seo';
import HomeHero from '@/components/home/HomeHero';
import HomeStory from '@/components/home/HomeStory';
import CtaBand from '@/components/editorial/CtaBand';
import { pageMeta, founderCtaBlock } from '@/content/siteContent';

const HomePage = () => (
  <>
    <Seo {...pageMeta.home} />
    <HomeHero />
    <HomeStory />
    <CtaBand {...founderCtaBlock} />
  </>
);
export default HomePage;
