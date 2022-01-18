import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "../actions/productsCart";
import { productsCart, initialState } from "./productsCart";

describe("ProductsCart reducers", () => {
  const mockedProduct = {
    productId: "1",
    productName: "A",
    productImage: "",
    productUserAdvice: "You are probably interested in ",
    productPrice: 40.66,
  };

  it("Should return the initial state when no action passed", () => {
    expect(productsCart(undefined, [])).toEqual(initialState);
  });

  describe("Add product to cart", () => {
    it("Should return the correct state", () => {
      const action = {
        type: ADD_PRODUCT_TO_CART,
        id: mockedProduct.productId,
        name: mockedProduct.productName,
        image: mockedProduct.productImage,
        price: mockedProduct.productPrice,
      };

      const expectedState = [
        {
          id: mockedProduct.productId,
          image: mockedProduct.productImage,
          name: mockedProduct.productName,
          price: mockedProduct.productPrice,
          quantity: 1,
        },
      ];

      expect(productsCart(undefined, action)).toEqual(expectedState);
    });
  });

  describe("Remove product from the cart", () => {
    it("Should return the correct state", () => {
      const startingState = [
        {
          id: mockedProduct.productId,
          image: mockedProduct.productImage,
          name: mockedProduct.productName,
          price: mockedProduct.productPrice,
          quantity: 1,
        },
      ];

      const action = {
        type: REMOVE_PRODUCT_FROM_CART,
        id: mockedProduct.productId,
      };

      const expectedState = [];

      expect(productsCart(startingState, action)).toEqual(expectedState);
    });
  });
});
