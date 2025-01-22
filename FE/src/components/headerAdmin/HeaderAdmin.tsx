import { Avatar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import moment from "moment";
import React, { useContext, useState } from "react";
import { HeaderTitleContext } from "../../pages/admin/Admin";

const HeaderAdmin = () => {
  const date = new Date();
  const dateConvert = moment(date).format("DD/MM/YYYY");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const titleHeader = useContext(HeaderTitleContext);
  console.log(titleHeader);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ backgroundColor: "transparent", padding: "20px" }}>
      <Box
        sx={{
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        <h1 style={{ marginLeft: "40px" }}>
          {titleHeader !== "" ? titleHeader : "Dashboard"}
        </h1>
        <div className="tools">
          <IconButton onClick={handleClick}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: "56px", height: "56px" }}
            />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Box>
    </div>
  );
};

export default HeaderAdmin;
