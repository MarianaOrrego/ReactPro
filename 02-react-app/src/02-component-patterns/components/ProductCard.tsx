import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";

import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, maxQuantity, isMaxQuantityReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        maxQuantity,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          quantity: counter,
          isMaxQuantityReached,
          maxQuantity: initialValues?.maxQuantity,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
