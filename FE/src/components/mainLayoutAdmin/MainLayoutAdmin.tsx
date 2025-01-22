import React from "react";
import HeaderAdmin from "../headerAdmin";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";

const MainLayoutAdmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
      {/* <FooterAdmin /> */}
    </div>
  );
};

export default MainLayoutAdmin;
