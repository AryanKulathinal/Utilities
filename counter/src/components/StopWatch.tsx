import React, { useRef, useState } from "react";
import "../styles/Stopwatch.css";

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const hundredths = time % 100;

  const pad = (num: number) => num.toString().padStart(2, "0");

  return `${pad(minutes)}:${pad(seconds)}:${pad(hundredths)}`;
};

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0); 
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 10); 
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h2 className="stopwatch-time">{formatTime(time)}</h2>
      <div className="stopwatch-buttons">
        <button className="stopwatch-btn start" onClick={start}>Start</button>
        <button className="stopwatch-btn stop" onClick={stop}>Stop</button>
        <button className="stopwatch-btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
