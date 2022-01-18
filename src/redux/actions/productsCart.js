export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const EDIT_PRODUCT_FROM_CART = "EDIT_PRODUCT_FROM_CART";

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  id: product.productId,
  name: product.productName,
  price: product.productPrice,
  image: product.productImage,
  quantity: product.productQuantity,
});

export const removeProductFromCart = (id) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  id: id,
});

export const editProductFromCart = (id, quantity) => ({
  type: EDIT_PRODUCT_FROM_CART,
  id: id,
  quantity: quantity,
});
