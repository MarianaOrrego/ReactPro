import { useContext } from "react";
import { ProductTitleProps } from "../interfaces/interfaces";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export const ProductTitle = ({
  title,
  className,
  style,
}: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
