import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Data from "../../Data.json";
import { CartContext } from "../Features/ContextProvider"; 
const ShowItem = () => {
  const { id } = useParams();
  const productId = Number(id);
  const product = Data.products.find((item) => item.id === productId);

  const [selectedSize, setSelectedSize] = useState(product.size || "S");
  const [isHovered, setIsHovered] = useState(false);

  const { dispatch } = useContext(CartContext); 

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    dispatch({ type: "Add", product: { ...product, size: selectedSize } });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <img
              src={product.thumbnail}
              className="card-img-top"
              alt={product.title}
              style={{
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </div>
        <div className="col-md-7">
          <h3 className="card-title mb-3">{product.title}</h3>
          <h4 className="text-danger mb-3">₹{product.price}</h4>
          <p className="card-text mb-4">{product.description}</p>
          
          <div className="mb-3">
            <p className="card-text"><strong>Size:</strong></p>
            <div className="btn-group" role="group" aria-label="Size selection">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`btn btn-outline-primary ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <p className="card-text"><strong>Selected Size:</strong> {selectedSize}</p>
          <p className="card-text"><strong>Quantity:</strong> {product.quantity}</p>
          
          <button
            className="btn btn-primary w-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
