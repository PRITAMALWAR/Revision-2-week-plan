

import { useState } from "react";

function HistoryApp() {

  const [history, setHistory] = useState([""]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentText = history[currentIndex];

  const handleChange = (e) => {
    const newText = e.target.value;

    const updatedHistory = history.slice(0, currentIndex + 1);

    updatedHistory.push(newText);

    setHistory(updatedHistory);
    setCurrentIndex(updatedHistory.length - 1);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Undo / Redo Text Editor</h2>

      <textarea
        rows="6"
        cols="50"
        value={currentText}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleUndo} disabled={currentIndex === 0}>
        Undo
      </button>

      <button
        onClick={handleRedo}
        disabled={currentIndex === history.length - 1}
        style={{ marginLeft: "10px" }}
      >
        Redo
      </button>

      <p>
        History: {currentIndex + 1} / {history.length}
      </p>
    </div>
  );
}

export default HistoryApp;
