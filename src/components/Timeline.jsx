const Timeline = ({ steps }) => (
  <ol className="timeline">
    {steps.map((step) => (
      <li key={step.title} className="timeline-item">
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </li>
    ))}
  </ol>
);

export default Timeline;
