import "../../styles/component/header.css";
import TheCoffeeHouse from "../../images/thecoffee-removebg.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { storageService } from "../../storage";
import { useContext, useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const userAccount = storageService.getUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="flex justify-between items-center w-[1680px]">
      <Link
        className="w-[30%] flex items-center no-underline text-black text-lg"
        to={"/"}
      >
        <img src={TheCoffeeHouse} width={100} alt="" />
        <h3 style={{ marginLeft: "20px" }}>The Coffee</h3>
      </Link>
      <ul className="w-[60%] flex justify-between">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#blog">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {userAccount && (
        <div className="w-[10%] flex justify-end">
          <IconButton id="basic-menu" onClick={handleClick}>
            <Avatar
              src="/static/images/avatar/1.jpg"
              sx={{ width: "56px", height: "56px" }}
            />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </nav>
  );
};

export default Header;
