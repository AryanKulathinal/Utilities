import {  useState } from "react";
import "../styles/Counter.css"

const Counter = () => {
  const [count, setCount] = useState(0);


  return (
    <div className="counter">
      <h1> The count is : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
