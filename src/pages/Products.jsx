import React, { useState } from "react";
import Data from "../../Data.json";
import Product1 from "../components/Product1"; // Ensure the import path and filename are correct

const Products = () => {
  const [products, setProducts] = useState(Data.products);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-5 gap-4">
        {products.map((item) => (
          <Product1 key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
