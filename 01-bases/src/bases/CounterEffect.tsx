import { useEffect, useState } from "react";
import { CounterProps } from "./types/types";

const MAXIMUN_COUNT = 10;

const CounterEffect = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return;

    console.log('Se llegó al valor maximo');

  }, [counter]);

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
};

export default CounterEffect;
