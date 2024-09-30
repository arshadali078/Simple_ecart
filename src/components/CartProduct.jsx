import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

function CartProduct({ product }) {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {  
    const index = cart.findIndex((item) => item.id === id);
    if (cart[index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const Decrease = (id) => { 
    const index = cart.findIndex((item) => item.id === id);
    if (cart[index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  const onRemove = (id) => {
    dispatch({ type: "Remove", id });
  };

  return (
    <div className="d-flex border mb-3 p-2">
      <img src={product.thumbnail} className="w-25 h-25" alt={product.title} />
      <div className="detail ms-3">
        <h4>{product.title}</h4>
        <h4>${product.price}</h4>
        <div className="buttons">
          <button 
            className="rounded-circle px-2" 
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button 
            className="rounded-circle px-2" 
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button 
          className="btn btn-sm btn-warning" 
          onClick={() => onRemove(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
