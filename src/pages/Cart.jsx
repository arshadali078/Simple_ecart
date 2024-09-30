import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "../components/CartProduct";
import { TotalItem, TotalPrice } from "../Features/CartReducer";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((item) => (
            <CartProduct key={item.id} product={item} />
          ))}
        </div>
        <div className="col-4">
          <div className="bg-secondary p-2 text-white">
            <h5>Total Items: {TotalItem(cart)}</h5>
            <h5>Total Price: ${TotalPrice(cart)}</h5>
            <button className="btn btn-warning">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
