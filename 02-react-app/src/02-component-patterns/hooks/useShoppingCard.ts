import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";

export const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCard;
  }>({});

  const onProductChange = ({
    quantity,
    product,
  }: {
    quantity: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCard: ProductInCard = oldShoppingCart[product.id] || {
        ...product,
        quantity: 0,
      };

      if (Math.max(productInCard.quantity + quantity, 0) > 0) {
        productInCard.quantity += quantity;

        return {
          ...oldShoppingCart,
          [product.id]: productInCard,
        };

      }

      //Borrar el producto
      const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
      return newShoppingCart;

    });
  };

  return {shoppingCart, onProductChange};
};