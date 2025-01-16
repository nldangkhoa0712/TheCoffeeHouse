import React from "react";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "15% 85%",
        height: "100vh",
        // gap: "-10px",
      }}
    >
      <SideBar />
      <Outlet />
      {/* <div style={{ width: "20%" }}>
      </div>
      <div style={{ width: "80%" }}>
      </div> */}
    </div>
  );
};

export default Admin;
