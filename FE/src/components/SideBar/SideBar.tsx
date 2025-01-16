import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <>
      <Sidebar
        style={{
          // width: "10%",
          height: "auto",
          backgroundColor: isDarkMode ? "#2e3b4e" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#000000",
        }}
      >
        <div
          style={{
            padding: "20px",
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "#74512d",
          }}
        >
          Coffee House
        </div>
        <Menu>
          <SubMenu label="Product">
            <MenuItem component={<Link to={"product/list-product"} />}>
              List Product
            </MenuItem>
            <MenuItem> Add Product </MenuItem>
          </SubMenu>
          {/* <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem> */}
        </Menu>
        {/* <div style={{ padding: "10px", textAlign: "center" }}>
          <button onClick={toggleTheme} style={{ padding: "10px 20px" }}>
            Toggle {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div> */}
      </Sidebar>
    </>
  );
};

export default SideBar;
