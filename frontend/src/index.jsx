import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import OrderBox from "./component/OrderBox";
import Admin from "./component/Admin/Admin";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
<<<<<<< HEAD
import Category from "./Admin/pages/Category";
import HomeInfo from "./Admin/pages/HomeInfo";
import Product from "./Admin/pages/Product";
import AllOrders from "./Admin/pages/AllOrders";
import CurrentOrder from "./Admin/pages/CurrentOrder";
import PaymentStatus from "./Admin/pages/PaymentStatus";
import Staffs from "./Admin/pages/Staffs";
import Setting from "./Admin/pages/Setting";
import Customer from "./Admin/pages/Customer";
import Login from "./Authentication/Login";
=======
>>>>>>> 05dd14ac8d3adfb779cdbeae287f700c215529c5

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<OrderBox />} />
      </Route>
      <Route path="/dashboard" element={<Admin />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
