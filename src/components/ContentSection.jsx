const ContentSection = ({ title, intro, children }) => (
  <section className="content-section">
    <header className="section-header">
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
    {children}
  </section>
);

export default ContentSection;
