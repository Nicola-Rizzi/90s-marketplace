import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  EDIT_PRODUCT_FROM_CART,
} from "../actions/productsCart";

export const initialState = [];

export const productsCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          image: action.image,
          quantity: action.quantity | 1,
        },
      ];
    case EDIT_PRODUCT_FROM_CART:
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: product.quantity + action.quantity }
          : product
      );
    case REMOVE_PRODUCT_FROM_CART:
      return [...state.filter((item) => item.id !== action.id)];
    default:
      return state;
  }
};

export default productsCart;
