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
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        {" "}
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoingPage />, 
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        {" "}
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        {" "}
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage />{" "}
      </Protected>
    ),
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
