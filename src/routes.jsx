import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { PasswordChange } from "./screens/PasswordChange";
import { Register } from "./screens/Register";
import { Login } from "./screens/Login";
import { Dashboard } from "./screens/Dashboard";
import { NotFound } from "./screens/NotFound";

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
    path: "/alterar-senha",
    Component: PasswordChange,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
