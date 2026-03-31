<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
import React from "react";
import Product from "./Product";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 12000,
      isActive: false,
    },
    {
      id: 2,
      name: "Product 2",
      price: 13000,
      isActive: true,
      attributes: ["Attribute 1", "Attribute 2"],
    },
    {
      id: 3,
      name: "Product 3",
      price: 14000,
      isActive: false,
      attributes: ["Attribute 1", "Attribute 2", "Attribute 3"],
    },
  ];
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
<<<<<<< Updated upstream
=======
import React from "react";
import Product from "./Product";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 12000,
      isActive: false,
    },
    {
      id: 2,
      name: "Product 2",
      price: 13000,
      isActive: true,
      attributes: ["Attribute 1", "Attribute 2"],
    },
    {
      id: 3,
      name: "Product 3",
      price: 14000,
      isActive: false,
      attributes: ["Attribute 1", "Attribute 2", "Attribute 3"],
    },
  ];
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
>>>>>>> 08b3f08 (Update code)
=======
>>>>>>> Stashed changes
