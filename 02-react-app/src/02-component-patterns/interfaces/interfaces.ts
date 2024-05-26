import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductoButtonProps) => JSX.Element;
}

export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ProductoButtonProps {
  className?: string;
  style?: React.CSSProperties;
}
