import ProductsList from "../components/ProductList/ProductList";
import ProductsCart from "../components/ProductsCart/ProductsCart";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { productListDataSample } from "../staticData/productListDataSample";

const routes = {
  "/": () => <ProductsList productListData={productListDataSample} />,
  "/cart": () => <ProductsCart />,
  "/products/:id": ({ id }) => <ProductDetail id={id} />,
};

export default routes;
