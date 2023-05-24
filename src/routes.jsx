import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { PasswordChange } from "./screens/PasswordChange";
import { Register } from "./screens/Register";
import { Login } from "./screens/Login";
import { Dashboard } from "./screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/registro",
    Component: Register,
  },
  {
    path: "/trocar-senha",
    Component: PasswordChange,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
