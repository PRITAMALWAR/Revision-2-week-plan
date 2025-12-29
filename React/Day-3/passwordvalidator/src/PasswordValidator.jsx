import { useState } from "react";

function PasswordValidator() {
  const [password, setPassword] = useState("");

  let count = 0;

  const lengthOk = password.length >= 8;
  const upperOk = /[A-Z]/.test(password);
  const numberOk = /[0-9]/.test(password);
  const specialOk = /[^A-Za-z0-9]/.test(password);

  if (lengthOk) count++;
  if (upperOk) count++;
  if (numberOk) count++;
  if (specialOk) count++;

  let borderColor = "red";
  if (count >= 2) borderColor = "yellow";
  if (count === 4) borderColor = "green";

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "8px",
          border: `2px solid ${borderColor}`
        }}
        placeholder="Enter password"
      />

      <p>{lengthOk ? "✓" : "✗"} Min 8 characters</p>
      <p>{upperOk ? "✓" : "✗"} Uppercase letter</p>
      <p>{numberOk ? "✓" : "✗"} Number</p>
      <p>{specialOk ? "✓" : "✗"} Special character</p>
    </div>
  );
}

export default PasswordValidator;
