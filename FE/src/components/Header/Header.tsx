import "../../styles/component/header.css";
// import TheCoffeeHouseImg from "../../../public/images/thecoffee-removebg.png";
import { Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="container">
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
        }}
        to={"/"}
      >
        {/* <img src={TheCoffeeHouseImg} width={50} alt="" /> */}
        <h3 style={{ marginLeft: "20px" }}>The Coffee</h3>
      </Link>
      <ul>
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
      <div className="auth">
        <Button
          onClick={() => {
            navigate(`/auth?template=register`);
          }}
          className="btn-signup"
        >
          Sign up
        </Button>
        <Button
          onClick={() => {
            navigate(`/auth?template=login`);
          }}
          className="btn-login"
        >
          Log in
        </Button>
      </div>
    </nav>
  );
};

export default Header;
