import FadeIn from '@/components/motion/FadeIn';

const ContentSection = ({ title, intro, children }) => (
  <section className="container-page py-16 md:py-24">
    <FadeIn>
      <header className="mb-10 max-w-2xl">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
        {intro && <p className="mt-3 text-base text-muted">{intro}</p>}
      </header>
    </FadeIn>
    {children}
  </section>
);

export default ContentSection;
