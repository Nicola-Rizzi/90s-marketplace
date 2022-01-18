import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { productListDataSample } from "../../staticData/productListDataSample";
import {
  addProductToCart,
  editProductFromCart,
} from "../../redux/actions/productsCart";
import Text from "../Atoms/Text/Text";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 25px;
`;

const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  height: auto;
  width: 250px;
  height: 250px;
  border: 1px solid #ddd; 
  border-radius: 4px;
  object-fit: cover;
`;

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState({});
  const actualProductCart = useSelector((state) => state.productsCart);

  const dispatch = useDispatch();

  const addToCart = () => {
    const defaultProductQuantity = 1
    const productFound = actualProductCart.some(
      (item) => item.id === product.productId
    );

    if (productFound) {
      dispatch(editProductFromCart(product.productId, defaultProductQuantity));
    } else dispatch(addProductToCart(product));
  };

  useEffect(() => {
    const product = productListDataSample.filter((item) => {
      return item.productId === id;
    });

    setProduct(product[0]);
  }, [id]);

  const addToCartText = "Add to Cart";
  
  return (
    <StyledContainer>
      <Text label={`Product ${product.productName}`} />
      <StyledImage src={product.productImage} alt={product.productName} />
      <StyledProductContainer>
        <Text label={`Price ${product.productPrice} USD`} />
        <button onClick={() => addToCart()}>{addToCartText}</button>
      </StyledProductContainer>
    </StyledContainer>
  );
};

export default ProductDetail;
