export const TotalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const TotalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.product];

    case "Remove":
      return state.filter((item) => item.id !== action.id);

    case "Increase":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "Decrease":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );

    default:
      return state;
  }
};

export default CartReducer;
