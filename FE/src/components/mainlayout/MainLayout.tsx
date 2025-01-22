import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "rgba(255,255, 255, 0.4)",
          position: "sticky",
          top: "0",
          borderBottom: "1px solid #ccc",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Header />
      </header>
      <Outlet />
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          height: "32vh",
          backgroundColor: "#543310",
          // width: "100%",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
