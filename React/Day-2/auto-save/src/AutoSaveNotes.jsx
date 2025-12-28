import React, { useState, useEffect } from "react";

function AutoSaveNotes() {
  const [note, setNote] = useState("");      
  const [status, setStatus] = useState("Saved"); 

  useEffect(() => {
    if (!note) return; 

    setStatus("Saving"); 

    const timer = setTimeout(() => {
      setStatus("Saved");
      console.log("Note saved:", note);
    }, 2000);

    return () => clearTimeout(timer);

  }, [note]);

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <textarea
        rows="5"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <p>{status}</p>
    </div>
  );
}

export default AutoSaveNotes;
