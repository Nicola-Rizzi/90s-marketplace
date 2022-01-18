import styled from "styled-components";

import ProductListItem from "./ProductListItem/ProductListItem";
import Text from "../Atoms/Text/Text";

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

const ProductsList = ({ productListData }) => {
  const productListItem = productListData.map((product) => {
    return <ProductListItem product={product} key={product.productId} />;
  });

  return (
    <StyledContainer>
      <Text label="WELCOME TO OUR STORE"/>
      <StyledList>{productListItem}</StyledList>
    </StyledContainer>
  );
};

export default ProductsList;
