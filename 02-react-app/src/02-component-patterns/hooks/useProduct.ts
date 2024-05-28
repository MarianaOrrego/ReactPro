import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(
    initialValues?.quantity || value,
  );

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ quantity: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
  };
};
