import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus } from 'lucide-react';
import ActionLink from '@/components/ActionLink';
import FadeIn from '@/components/motion/FadeIn';
import ParallaxImage from '@/components/motion/ParallaxImage';
import VentureCard from '@/components/VentureCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  designContent,
  portfolioHighlights,
  valuePillars,
  whatWeDoTabs,
} from '@/content/siteContent';

const SectionIntro = ({ content }) => (
  <FadeIn className="section-intro">
    <p className="eyebrow">{content.eyebrow}</p>
    <div>
      <h2 className="section-title">{content.heading}</h2>
      {content.intro && <p className="section-description">{content.intro}</p>}
    </div>
  </FadeIn>
);
const HomeStory = () => (
  <>
    <section className="section-space page-gutter approach-section">
      <SectionIntro content={designContent.approach} />
      <Tabs defaultValue={whatWeDoTabs[0].id} className="approach-tabs">
        <TabsList aria-label={designContent.approach.label} className="approach-tab-list">
          {whatWeDoTabs.map((tab, i) => (
            <TabsTrigger className="approach-tab" key={tab.id} value={tab.id}>
              <span className="tab-index">0{i + 1}</span>
              <span>{tab.label}</span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="approach-panels">
          {whatWeDoTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="approach-panel">
              <h3>{tab.heading}</h3>
              <p>{tab.body}</p>
              <ul>
                {tab.items.map((item) => (
                  <li key={item}>
                    <Plus size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <ActionLink to={designContent.approach.cta.path}>
                {designContent.approach.cta.label}
              </ActionLink>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
    <section className="section-space page-gutter conviction-section">
      <SectionIntro content={designContent.principles} />
      <div className="conviction-rows">
        {valuePillars.map((item, i) => (
          <FadeIn key={item.title}>
            <article className="conviction-row">
              <span className="row-index">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
    <section className="section-space page-gutter criteria-section">
      <div className="criteria-intro">
        <SectionIntro content={designContent.criteria} />
        <ActionLink to={designContent.criteria.cta.path}>
          {designContent.criteria.cta.label}
        </ActionLink>
      </div>
      <div className="criteria-steps">
        {designContent.criteria.items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.03}>
            <article className="criteria-step">
              <span className="criteria-index">0{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <span className="criteria-dot" aria-hidden="true" />
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
    <section className="section-space page-gutter regions-section">
      <SectionIntro content={designContent.regions} />
      <div className="region-grid">
        {designContent.regions.cards.map((region, i) => (
          <FadeIn key={region.title} delay={i * 0.1}>
            <Link to={region.path} className="region-card">
              <ParallaxImage src={region.image} alt={region.alt}>
                <div className="region-shade" />
                <div className="region-card-top">
                  <span>{region.regions}</span>
                  <span className="region-arrow">
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </span>
                </div>
                <h3>{region.title}</h3>
              </ParallaxImage>
            </Link>
          </FadeIn>
        ))}
      </div>
      <div className="section-end">
        <ActionLink to={designContent.regions.cta.path}>
          {designContent.regions.cta.label}
        </ActionLink>
      </div>
    </section>
    <section className="section-space page-gutter portfolio-section">
      <SectionIntro content={designContent.portfolio} />
      <div className="venture-list">
        {portfolioHighlights.slice(0, 4).map((company) => (
          <FadeIn key={company.id}>
            <VentureCard company={company} />
          </FadeIn>
        ))}
      </div>
    </section>
  </>
);
export default HomeStory;
