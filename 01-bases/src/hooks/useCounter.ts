import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    tl.current
      .to(elementToAnimate.current, {
        duration: 0.5,
        y: -10,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        duration: 0.5,
        y: 0,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return { elementToAnimate, counter, handleClick };
};
