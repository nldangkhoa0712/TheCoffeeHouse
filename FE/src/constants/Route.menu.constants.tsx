import { Navigate, Outlet } from "react-router-dom";
import { storageService } from "../storage";
import MainLayout from "../components/mainlayout";
import Home from "../pages/home";
import Content from "../pages/content";
import Admin from "../pages/admin";
import Product from "../pages/product/list-product";
import AddProduct from "../pages/product/add-product";
import MainLayoutAdmin from "../components/mainLayoutAdmin";
import Auth from "../pages/auth";
import VerifySuccess from "../pages/verifySuccess";
import { JSX } from "react";

const accessToken = storageService.getAccessToken();
const ProtectedRoutes = () => {
  return accessToken ? <Outlet /> : <Navigate to={"/auth"} />;
};

const PrejectedRoutes = () => {
  return !accessToken ? <Outlet /> : <Navigate to={"/auth"} />;
};

interface RouteType {
  path: string;
  isOpenMenu?: string;
  element?: JSX.Element;
  children?: RouteType[];
}

export const route: RouteType[] = [
  {
    path: "",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          { path: "content", element: <Content /> },
        ],
      },
    ],
  },

  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <MainLayoutAdmin />,
        children: [
          {
            path: "product",
            isOpenMenu: "product",
            children: [
              {
                path: "list-product",
                element: <Product />,
              },
              {
                path: "add-product",
                element: <AddProduct />,
              },
            ],
          },
        ],
      },
    ],
  },

  { path: "/auth", element: <Auth /> },
  {
    path: "/verify",
    element: <VerifySuccess />,
  },
];
