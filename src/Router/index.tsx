import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../Pages";
import ProductDetail from "../Pages/ProductDetail";
import OrderPayment from "../Pages/OrderPayment";
import OrderList from "../Pages/OrderList";
import OrderDetail from "../Pages/OrderDetail";
import { PATH } from "./path";
import Layout from "../Layout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: PATH.home,
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: `${PATH.productDetail}/:productId`,
      element: (
        <Layout>
          <ProductDetail />
        </Layout>
      ),
    },
    {
      path: PATH.orderPayment,
      element: (
        <Layout>
          <OrderPayment />
        </Layout>
      ),
    },
    {
      path: PATH.orderList,
      element: (
        <Layout>
          <OrderList />
        </Layout>
      ),
    },
    {
      path: `${PATH.orderDetail}/:orderId`,
      element: (
        <Layout>
          <OrderDetail />
        </Layout>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;
