import React from "react";
import { shallow, mount } from "enzyme";
import ProductList from "./ProductList";
import ProductListItem from "./ProductListItem/ProductListItem";
import Text from "../Atoms/Text/Text";

describe("Productlist component", () => {
  let wrapper;

  const mockedProductListData = [
    {
      productId: "1",
      productName: "A",
      productImage: "",
      productUserAdvice: "You are probably interested in ",
      productPrice: 40.66,
    },
    {
      productId: "2",
      productName: "B",
      productImage: "",
      productUserAdvice: "Check out the newest product ",
      productPrice: 33.2,
    },
    {
      productId: "3",
      productName: "C",
      productImage: "",
      productUserAdvice: "Check out the newest product ",
      productPrice: 12.2,
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<ProductList productListData={mockedProductListData} />);
  });

  it("Should render successfully", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("Should render ProductListItem component", () => {
    expect(wrapper.find(ProductListItem).length).toEqual(3);
  });

  it("Should render WELCOME TO OUR STORE text", () => {
    expect(wrapper.find(Text).props().label).toEqual("WELCOME TO OUR STORE");
  });
});
