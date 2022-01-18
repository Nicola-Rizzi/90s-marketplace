import { useDispatch } from "react-redux";
import styled from "styled-components";

import {
  editProductFromCart,
  removeProductFromCart,
} from "../../../redux/actions/productsCart";
import Text from "../../Atoms/Text/Text";

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #ddd; /* Gray border */
  border-radius: 4px; /* Rounded border */
  padding: 5px; /* Some padding */
  float: left;
  object-fit: cover;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const StyledInfoContainer = styled.div`
  display: inline-flex;
  gap: 5px;
  padding: 10px;
`;

const StyledButton = styled.button`
  align-self: center;
  width: 30px;
`;

const ProductsCartItem = ({ product }) => {
  const dispatch = useDispatch();

  const increasProductQuantity = (productId) => {
    dispatch(editProductFromCart(productId, 1));
  };

  const decreasProductQuantity = (productId) => {
    dispatch(editProductFromCart(productId, -1));
  };

  const removeProduct = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  return (
    <StyledContainer>
      <li>
        <StyledImage src={product.image} alt={product.productName} />
        <StyledInfoContainer>
          <Text label={product.name} />
          <Text label={`Price: ${product.price} USD`} />
          <Text label={`Quantity: ${product.quantity}`} />
          <StyledButton onClick={() => increasProductQuantity(product.id)}>
            +
          </StyledButton>
          {product.quantity > 1 && (
            <StyledButton onClick={() => decreasProductQuantity(product.id)}>
              -
            </StyledButton>
          )}
          <StyledButton onClick={() => removeProduct(product.id)}>
            x
          </StyledButton>
        </StyledInfoContainer>
      </li>
    </StyledContainer>
  );
};

export default ProductsCartItem;
