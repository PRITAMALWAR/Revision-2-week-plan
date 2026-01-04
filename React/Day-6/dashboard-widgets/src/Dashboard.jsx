import { useState, useEffect } from "react";
import Widget from "./Widget";

function Dashboard() {
    
  const [showUserStats, setShowUserStats] = useState(
    JSON.parse(localStorage.getItem("userStats")) ?? true
  );

  const [showActivity, setShowActivity] = useState(
    JSON.parse(localStorage.getItem("activity")) ?? true
  );

  const [showActions, setShowActions] = useState(
    JSON.parse(localStorage.getItem("actions")) ?? true
  );

  useEffect(() => {
    localStorage.setItem("userStats", showUserStats);
    localStorage.setItem("activity", showActivity);
    localStorage.setItem("actions", showActions);
  }, [showUserStats, showActivity, showActions]);

  if (!showUserStats && !showActivity && !showActions) {
    return (
      <div>
        <h3>No widgets selected</h3>

        <button onClick={() => setShowUserStats(true)}>Show User Stats</button>
        <button onClick={() => setShowActivity(true)}>Show Activity</button>
        <button onClick={() => setShowActions(true)}>Show Actions</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setShowUserStats(!showUserStats)}>
        {showUserStats ? "Hide" : "Show"} User Stats
      </button>

      <button onClick={() => setShowActivity(!showActivity)}>
        {showActivity ? "Hide" : "Show"} Activity
      </button>

      <button onClick={() => setShowActions(!showActions)}>
        {showActions ? "Hide" : "Show"} Actions
      </button>

      <hr />

      {showUserStats && <Widget title="User Stats" />}

      {showActivity ? <Widget title="Recent Activity" /> : null}

      {showActions && <Widget title="Quick Actions" />}
    </div>
  );
}

export default Dashboard;
