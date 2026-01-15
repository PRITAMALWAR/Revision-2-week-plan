import { useState, useEffect } from "react";

const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
  notifications: true,
};

export default function SettingsPanel() {
  const [theme, setTheme] = useState(DEFAULT_SETTINGS.theme);
  const [language, setLanguage] = useState(DEFAULT_SETTINGS.language);
  const [notifications, setNotifications] = useState(
    DEFAULT_SETTINGS.notifications
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedLanguage = localStorage.getItem("language");
    const storedNotifications = localStorage.getItem("notifications");

    if (storedTheme) setTheme(storedTheme);
    if (storedLanguage) setLanguage(storedLanguage);
    if (storedNotifications !== null) {
      setNotifications(storedNotifications === "true");
    }
  }, []);

  // Persist theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Persist language
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Persist notifications
  useEffect(() => {
    localStorage.setItem("notifications", notifications);
  }, [notifications]);

  const resetToDefaults = () => {
    setTheme(DEFAULT_SETTINGS.theme);
    setLanguage(DEFAULT_SETTINGS.language);
    setNotifications(DEFAULT_SETTINGS.notifications);

    localStorage.removeItem("theme");
    localStorage.removeItem("language");
    localStorage.removeItem("notifications");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Settings Panel</h2>

      <div>
        <label>
          Theme:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>

      <button onClick={resetToDefaults} style={{ marginTop: 10 }}>
        Reset to Defaults
      </button>
    </div>
  );
}
