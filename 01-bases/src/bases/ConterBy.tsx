import { useState } from "react";
import { CounterProps, CounterState } from "./types/types";

const CounterBy = ({ initialValue = 0 }: CounterProps) => {
  const [{ clicks, counter }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (num: number) => {
    setCounterState(({ clicks, counter }) => ({
      counter: counter + num,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};

export default CounterBy;
