import React, { createContext, useState } from "react";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";

export const HeaderTitleContext = createContext("");

const Admin = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [titleHeader, setTitleHeader] = useState<string>("");
  return (
    <HeaderTitleContext.Provider value={titleHeader}>
      <div
        style={{
          display: "flex", // Sử dụng flexbox để chia không gian giữa sidebar và outlet
          height: "100vh",
          overflowX: "hidden",
          gap: "30px",
        }}
      >
        <SideBar
          isDrawerOpen={isDrawerOpen}
          setDrawerOpen={setDrawerOpen}
          setTitleHeader={setTitleHeader}
        />
        <div
          style={{
            flex: isDrawerOpen ? "0 0 85%" : "0 0 95%",
            transition: "flex 0.3s ease-in-out",
            minWidth: "0",
          }}
        >
          <Outlet />
        </div>
      </div>
    </HeaderTitleContext.Provider>
  );
};

export default Admin;
