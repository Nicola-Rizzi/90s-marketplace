import { useSelector } from "react-redux";
import { A } from "hookrouter";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 10px;
  text-align: center;
`;

const StyledMenu = styled.div`
  display: inline-block;
  margin-right: 10px;
  padding: 5px 10px;
`;

const Header = () => {
  const productsCart = useSelector((state) => state.productsCart);
  
  const productsCartItems = productsCart.reduce(
    (sum, { quantity }) => sum + quantity,
    0
  );

  return (
    <StyledHeader>
        <StyledMenu>
          <A href="/">Home</A>
        </StyledMenu>
        <StyledMenu>
          <A href="/cart">Cart ({productsCartItems})</A>
        </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
