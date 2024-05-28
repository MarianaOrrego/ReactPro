import { useState } from "react";
import { ProductCard } from "../components";
import { Product, ProductInCard } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug 2 - Card",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

export const ShoppingPage = () => {
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
      if (quantity === 0) {
        const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
        return newShoppingCart;
      }

      return {
        ...oldShoppingCart,
        [product.id]: {
          ...product,
          quantity,
        },
      };
    });
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductChange}
            value={shoppingCart[product.id]?.quantity || 0}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title title={"Hola Mundo"} className="text-white" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            onChange={onProductChange}
            value={product.quantity}
            style={{ width: "100px" }}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
