import React from "react";

import { CountProps } from "../../shared/interface";

export const Control: React.FC<CountProps> = ({ setCount }) => {
  const handleCounterChange = (amount: number) => {
    setCount((prevCount) => {
      const newCount = Math.max(prevCount + amount, 0);

      // Add count to localStorage
      localStorage.setItem("count", JSON.stringify(newCount));

      // Update state with count added
      return newCount;
    });
  };

  const handleIncrease = () => handleCounterChange(+1);
  const handleDecrease = () => handleCounterChange(-1);

  return (
    <>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </>
  );
};
