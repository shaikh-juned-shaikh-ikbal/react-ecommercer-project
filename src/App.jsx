import React from "react";
import { Counter } from "./features/counter/Counter";

import Home from "./pages/Home";
import LoingPage from "./pages/LoingPage";
import SignupPage from "./pages/SignupPage";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetail from "./features/product-list/components/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoingPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/product-detail",
    element: <ProductDetail/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
