import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductList from "../components/childComponents/ProductList";
import Home from "../components/Home";
import Basket from "../components/Basket";
import Detail from "../components/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "", element: <ProductList /> },
          { path: ":category", element: <ProductList /> },
        ],
      },

      { path: "basket", element: <Basket /> },
      { path: ":detail/:id", element: <Detail /> },
      { path: ":category/detail/:id", element: <Detail /> },
    ],
  },
]);

export default router;
