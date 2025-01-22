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
import Product from "./pages/product/list-product";
import MainLayoutAdmin from "./components/mainLayoutAdmin";
import AddProduct from "./pages/product/add-product";
import { route } from "./constants/Route.menu.constants";
function App() {
  const routeElement = useRoutes(route);
  return (
    <>
      {routeElement}
      <Toaster />
    </>
  );
}

export default App;
