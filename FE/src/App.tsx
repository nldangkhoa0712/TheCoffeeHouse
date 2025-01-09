import { Home } from "@mui/icons-material";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import MainLayout from "./components/mainlayout";
import "./index.scss";
import Auth from "./pages/auth";
import Content from "./pages/content";
import VerifySuccess from "./pages/verifySuccess";
import { storageService } from "./storage";
import { Toaster } from "react-hot-toast";
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
