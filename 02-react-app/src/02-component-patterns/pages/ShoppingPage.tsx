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
        {({ reset, increaseBy, isMaxQuantityReached, quantity }) => (
          <>
            <ProductCard.Title title={"Hola Mundo"} className="text-white" />
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons className="custom-buttons" />

            <div style={{ margin: 10 }}>
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>

              {!isMaxQuantityReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <p className="text-white">Cantidad: {`${quantity}`}</p>
            </div>
          </>
        )}
      </ProductCard>
    </div>
  );
};
