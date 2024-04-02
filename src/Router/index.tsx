import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../Pages";
import ProductDetail from "../Pages/ProductDetail";
import OrderPayment from "../Pages/OrderPayment";
import OrderList from "../Pages/OrderList";
import OrderDetail from "../Pages/OrderDetail";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product/:productId",
      element: <ProductDetail />,
    },
    {
      path: "/order-payment",
      element: <OrderPayment />,
    },
    {
      path: "/order-list",
      element: <OrderList />,
    },
    {
      path: "/order-detail/:orderId",
      element: <OrderDetail />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;
