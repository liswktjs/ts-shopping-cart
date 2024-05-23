import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "../Pages";
import ProductDetail from "../Pages/ProductDetail";
import OrderPayment from "../Pages/OrderPayment";
import OrderList from "../Pages/OrderList";
import OrderDetail from "../Pages/OrderDetail";
import { PATH } from "./path";
import Layout from "../Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATH.home}
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path={`${PATH.productDetail}/:productId`}
            element={<ProductDetail />}
          />
          <Route
            path={PATH.orderPayment}
            element={<OrderPayment />}
          />
          <Route
            path={PATH.orderList}
            element={<OrderList />}
          />
          <Route
            path={PATH.orderDetail}
            element={<OrderDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
