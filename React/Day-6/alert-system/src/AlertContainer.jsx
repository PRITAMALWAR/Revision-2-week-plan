import { useState } from "react";
import Alert from "./Alert";

function AlertContainer() {
  const [alerts, setAlerts] = useState([]);

  function showSampleAlerts() {
    setAlerts([
      { id: 1, type: "success", text: "Success alert message" },
      { id: 2, type: "error", text: "Error alert message" },
      { id: 3, type: "warning", text: "Warning alert message" },
      { id: 4, type: "info", text: "Info alert message" }
    ]);
  }

  function removeAlert(id) {
    setAlerts(alerts.filter(alert => alert.id !== id));
  }

  return (
    <div>
      <button onClick={showSampleAlerts}>
        Show Sample Alerts
      </button>

      <div className="alert-container">
        {alerts.map(alert => (
          <Alert
            key={alert.id}
            type={alert.type}
            onClose={() => removeAlert(alert.id)}
          >
            {alert.text}
          </Alert>
        ))}
      </div>
    </div>
  );
}

export default AlertContainer;
