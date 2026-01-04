function Alert({ type, onClose, children }) {
  const icons = {
    success: "right",
    error: "wrong",
    warning: "warning",
    info: "ℹnfo"
  };

  return (
    <div className={`alert alert-${type}`}>
      <span className="icon">{icons[type]}</span>

      <span className="message">{children}</span>

      <button className="close" onClick={onClose}>
        ✖
      </button>
    </div>
  );
}

export default Alert;
