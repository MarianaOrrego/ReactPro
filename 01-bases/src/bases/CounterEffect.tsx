import { useEffect, useRef, useState } from "react";
import { CounterProps } from "./types/types";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

const CounterEffect = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return;

    const tl = gsap.timeline();

    tl.to(counterElement.current, {
      duration: 0.5,
      y: -10,
      ease: "ease.out",
    }).to(counterElement.current, {
      duration: 0.5,
        y: 0,
        ease: "bounce.out",
    });

  }, [counter]);

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;
