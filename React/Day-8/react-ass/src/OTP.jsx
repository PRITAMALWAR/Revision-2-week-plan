import React, { useRef, useState } from "react";

function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = useRef([]);

  const handleChange = (e, i) => {
    const newOtp = [...otp];
    newOtp[i] = e.target.value;
    setOtp(newOtp);

    if (e.target.value && i < 5) {
      refs.current[i + 1].focus();
    }
  };

  const handleBackspace = (e, i) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      refs.current[i - 1].focus();
    }
  };

  const clearOtp = () => {
    setOtp(["", "", "", "", "", ""]);
    refs.current[0].focus();
  };

  return (
    <div>
      <h2>OTP Input</h2>

      {otp.map((val, i) => (
        <input
          key={i}
          value={val}
          maxLength="1"
          ref={(el) => (refs.current[i] = el)}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleBackspace(e, i)}
          style={{ width: 30, margin: 5, textAlign: "center" }}
        />
      ))}

      <br />
      <button onClick={clearOtp}>Clear</button>

      <p>Entered OTP: {otp.join("")}</p>
    </div>
  );
}

export default OTP;

















