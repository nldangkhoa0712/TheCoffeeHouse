import { Navigate, Outlet, useRoutes } from "react-router-dom";
import MainLayout from "./components/mainlayout";
import "./index.scss";
import Auth from "./pages/auth";
import Content from "./pages/content";
import VerifySuccess from "./pages/verifySuccess";
import { storageService } from "./storage";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Product from "./pages/product";
import MainLayoutAdmin from "./components/mainLayoutAdmin";
function App() {
  const accessToken = storageService.getAccessToken();
  const ProtectedRoutes = () => {
    return accessToken ? <Outlet /> : <Navigate to={"/auth"} />;
  };

  const PrejectedRoutes = () => {
    return !accessToken ? <Outlet /> : <Navigate to={"/auth"} />;
  };

  const routeElement = useRoutes([
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
              children: [
                {
                  path: "list-product",
                  element: <Product />,
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
  ]);
  return (
    <>
      {routeElement}
      <Toaster />
    </>
  );
}

export default App;
