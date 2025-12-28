import React, { useState, useEffect } from "react";

function WindowResizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  let deviceType = "Desktop";
  if (width < 768) deviceType = "Mobile";
  else if (width <= 1024) deviceType = "Tablet";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Window Width: {width}px</h2>
      <p>Device Type: {deviceType}</p>
    </div>
  );
}

export default WindowResizeTracker;
