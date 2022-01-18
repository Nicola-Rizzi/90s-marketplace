import {
  ADD_PRODUCT_TO_CART,
  EDIT_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART,
  addProductToCart,
  editProductFromCart,
  removeProductFromCart,
} from "./productsCart";

describe("Actions", () => {
  const mockedProduct = {
    productId: "1",
    productName: "A",
    productImage: "",
    productUserAdvice: "You are probably interested in ",
    productPrice: 40.66,
  };

  it("Should create an action to add product from Cart", () => {
    const expectedAction = {
      type: ADD_PRODUCT_TO_CART,
      id: mockedProduct.productId,
      name: mockedProduct.productName,
      image: mockedProduct.productImage,
      price: mockedProduct.productPrice,
    };

    expect(addProductToCart(mockedProduct)).toEqual(expectedAction);
  });

  it("Should create an action to remove product from Cart", () => {
    const expectedAction = {
      type: REMOVE_PRODUCT_FROM_CART,
      id: mockedProduct.productId,
    };

    expect(removeProductFromCart(mockedProduct.productId)).toEqual(
      expectedAction
    );
  });

  it("Should create an action to edit product from Cart", () => {
    const expectedAction = {
      type: EDIT_PRODUCT_FROM_CART,
      id: mockedProduct.productId,
    };

    expect(editProductFromCart(mockedProduct.productId)).toEqual(
      expectedAction
    );
  });
});
