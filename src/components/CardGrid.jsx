const CardGrid = ({ items, renderMeta }) => (
  <div className="card-grid">
    {items.map((item) => (
      <article key={item.title ?? item.name} className="content-card">
        <h3>{item.title ?? item.name}</h3>
        <p>{item.body ?? item.sector}</p>
        {renderMeta && <p className="card-meta">{renderMeta(item)}</p>}
      </article>
    ))}
  </div>
);

export default CardGrid;
