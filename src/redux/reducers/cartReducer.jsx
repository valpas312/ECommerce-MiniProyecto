const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity -= 1;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }
    default:
      return state;
  }
};
