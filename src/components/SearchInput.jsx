import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Data from "../../Data.json"; 

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query") || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    const filteredProducts = Data.products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [query]); 

  return (
    <div className="container mt-3">
      <h2>Search Results for: {query}</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: ₹{product.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
