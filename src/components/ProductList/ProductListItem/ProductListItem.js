import { A } from "hookrouter";

import Text from "../../Atoms/Text/Text";

const ProductListItem = ({ product }) => {
  return (
    <li>
      <Text label={product.productUserAdvice}></Text>
      <A href={`/products/${product.productId}`}>{product.productName}</A>
    </li>
  );
};

export default ProductListItem;
