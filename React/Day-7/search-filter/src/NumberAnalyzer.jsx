import React, { useMemo, useState } from "react";

function NumberAnalyzer() {
  const [number, setNumber] = useState(10);
  const [theme, setTheme] = useState("light");
  const [calculationCount, setCalculationCount] = useState(0);

  const result = useMemo(() => {
    setCalculationCount((prev) => prev + 1);

    let factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }

    const isPrime = factors.length === 2;
    const sumOfFactors = factors.reduce((a, b) => a + b, 0);

    return {
      isPrime,
      factors,
      sumOfFactors,
    };
  }, [number]);

  const themeStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={themeStyle}>
      <h2>Number Analyzer</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      <p>Is Prime: {result.isPrime ? "Yes" : "No"}</p>
      <p>Factors: {result.factors.join(", ")}</p>
      <p>Sum of Factors: {result.sumOfFactors}</p>

      <p>Calculation Count: {calculationCount}</p>
    </div>
  );
}

export default NumberAnalyzer;
