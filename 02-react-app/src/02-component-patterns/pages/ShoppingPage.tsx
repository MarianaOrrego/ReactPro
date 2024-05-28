import { ProductCard } from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark"
        initialValues={{
          quantity: 2,
          maxQuantity: 10,
        }}
      >
        <ProductCard.Image className="custom-image" />
        <ProductCard.Title title={"Hola Mundo"} className="text-white" />
        <ProductCard.Buttons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};
