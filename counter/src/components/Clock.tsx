import React, { useEffect, useState } from "react";
import "../styles/Clock.css";

const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
      <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }} />
      <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }} />
      <div className="center" />

     
      {[...Array(12)].map((_, i) => {
        const angle = (i + 1) * 30;
        const radius = 110;
        const x = 125 + radius * Math.sin((angle * Math.PI) / 180);
        const y = 125 - radius * Math.cos((angle * Math.PI) / 180);
        return (
          <div
            key={i}
            className="clock-number"
            style={{ left: `${x}px`, top: `${y}px` }}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};

export default AnalogClock;
