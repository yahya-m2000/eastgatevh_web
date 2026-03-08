import ContentSection from '../components/ContentSection';
import Seo from '../components/Seo';
import { insightPosts, pageMeta } from '../content/siteContent';

const InsightsPage = () => (
  <>
    <Seo {...pageMeta.insights} />
    <ContentSection
      title="Insights"
      intro="EASTGATE perspectives on venture building, market development, and ethical investment execution."
    >
      <div className="insight-list">
        {insightPosts.map((post) => (
          <article key={post.title} className="content-card">
            <p className="card-meta">{post.type}</p>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </ContentSection>
  </>
);

export default InsightsPage;
