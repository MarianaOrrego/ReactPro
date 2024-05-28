import { ProductCard } from "../components";
import { products } from "../data/products";
import { useShoppingCard } from "../hooks/useShoppingCard";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { onProductChange, shoppingCart } = useShoppingCard();

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
