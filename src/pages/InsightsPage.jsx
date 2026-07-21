import ContentSection from '@/components/ContentSection';
import Seo from '@/components/Seo';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { insightPosts, pageMeta } from '@/content/siteContent';

const InsightsPage = () => (
  <>
    <Seo {...pageMeta.insights} />
    <ContentSection
      title="Insights"
      intro="EVH perspectives on venture building, market development, and ethical investment execution."
    >
      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {insightPosts.map((post) => (
          <StaggerItem key={post.title}>
            <article className="h-full rounded-(--radius-card) border border-border bg-surface-raised p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {post.type}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ContentSection>
  </>
);

export default InsightsPage;
