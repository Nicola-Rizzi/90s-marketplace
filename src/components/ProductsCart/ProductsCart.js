import { useSelector } from "react-redux";
import styled from "styled-components";

import ProductsCartitem from "./ProductsCartItem/ProductsCartItem";
import Text from "../Atoms/Text/Text";

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 25px;
  float: right;
`;

const StyledTextContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

const ProductsCart = () => {
  const productsCart = useSelector((state) => state.productsCart);
  const productsTotal = productsCart.reduce(
    (sum, { quantity }) => sum + quantity,
    0
  );

  const productsPrice = productsCart.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  const finalProductsPrice = productsPrice.toFixed(2);

  const productsCartItem = productsCart.map((product) => {
    return <ProductsCartitem key={product.id} product={product} />;
  });
  
  const cartText = productsCartItem.length
    ? "Are you ready to purchase these?"
    : "Your cart is empty";

  return (
    <>
      <StyledTextContainer>
        <Text label={cartText} />
      </StyledTextContainer>
      <StyledList>{productsCartItem}</StyledList>
      {productsCartItem.length > 0 && (
        <StyledContainer>
          <Text label={`Total items: ${productsTotal}`} />
          <Text label={`Total price: ${finalProductsPrice}`} />
        </StyledContainer>
      )}
    </>
  );
};

export default ProductsCart;
