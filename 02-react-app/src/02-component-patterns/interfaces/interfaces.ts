import { ReactElement } from "react";

export interface onChangeArgs {
  product: Product;
  quantity: number;
}

export interface ProductCardProps {
  product: Product;
  children?: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  style?: React.CSSProperties;
  initialValues?: InitialValues;
}

export interface InitialValues {
  quantity?: number;
  maxQuantity?: number;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductInCard extends Product {
  quantity: number;
}

export interface ProductContextProps {
  counter: number;
  maxQuantity?: number;
  product: Product;
  increaseBy: (value: number) => void;
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

export interface ProductCardHandlers {
  quantity: number;
  isMaxQuantityReached: boolean;
  maxQuantity?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
