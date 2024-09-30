import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import { Link } from "react-router-dom";

// Function to format price in INR
const formatPriceInINR = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

function Product1({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{ objectFit: "cover", height: "200px" }} 
        />
        <div className="card-body">
          <h5 className="card-title mb-2">{product.title}</h5>
          <Link to={`/showproduct/${product.id}`}>
            <p
              className="card-description mb-2"
              style={{
                fontSize: "14px",
                color: "#666",
                textDecoration: "none",
              }}
            >
              {product.description}
            </p>
          </Link>
          <p
            className="card-size mb-2"
            style={{ fontSize: "14px", color: "#333" }}
          >
            <strong>Size:</strong> {product.size}
          </p>
          <h5 className="card-price mb-3">{formatPriceInINR(product.price)}</h5>
          <button
            className="btn btn-primary w-100"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product1;
