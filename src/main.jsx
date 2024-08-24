import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Components/Auth/Register.jsx";
import Add from "./Components/Sidebar/Add.jsx";
import LoginPag from "./Components/Auth/LoginPag.jsx";
// import Add from "./Components/Add.jsx";
// import VIew from "./Components/VIew.jsx";
// import Header from "./Components/Header.jsx";
// import LoginPage1 from "./Components/LoginPage1.jsx";
// import LoginPage from "./Components/LoginPage.jsx";
// import MyTable from "./Components/MyTable.jsx";
// import SearchTable from "./Components/SearchTable.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Add />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/loginpage",
    element: <LoginPag/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
