import { useEffect, useState } from "react";

function CountdownTimer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    const total = Number(minutes) * 60 + Number(seconds);
    if (total > 0) {
      setTimeLeft(total);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resumeTimer = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("Time's Up!");
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, timeLeft]);

  const displayMinutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const displaySeconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Countdown Timer</h2>

      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        placeholder="Minutes"
      />
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        placeholder="Seconds"
      />

      <h1>
        {displayMinutes}:{displaySeconds}
      </h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resumeTimer}>Resume</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default CountdownTimer;
