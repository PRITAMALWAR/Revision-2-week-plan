function Widget({ title }) {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>This is the {title} widget.</p>
    </div>
  );
}

export default Widget;
