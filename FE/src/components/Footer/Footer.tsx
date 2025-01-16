import { Box, Button, Icon } from "@mui/material";
import "../../styles/component/footer.css";
import ThecoffeeHouseImg from "../../../public/images/thecoffee-removebg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FaceIcon from "@mui/icons-material/Face";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer-top">
        <div className="img-wrapper">
          {/* <img src={ThecoffeeHouseImg} alt="" width={200} /> */}
        </div>
        <div className="footer-wrapper">
          <div className="footer-item">
            <h3>Title</h3>
            <ul>
              <li>
                <a href="">ABC</a>
              </li>
              <li>
                <a href="">ABC</a>
              </li>
              <li>
                <a href="">ABC</a>
              </li>
              <li>
                <a href="">ABC</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h3>Title</h3>
            <ul>
              <li>
                <a href="">ABC</a>
              </li>
              <li>
                <a href="">ABC</a>
              </li>
              <li>
                <a href="">ABC</a>
              </li>
              <li>
                <a href="">ABC</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h3>Title</h3>
            <ul>
              <li>
                <a href="">ABC</a>
              </li>
              <li>
                <a href="">ABC</a>
              </li>
              <li>
                <a href="">ABC</a>
              </li>
              <li>
                <a href="">ABC</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <p style={{ fontSize: 30 }}>@Copyright</p>
        <div className="icon-socical">
          <FacebookIcon sx={{ fontSize: 40 }} />
          <InstagramIcon sx={{ fontSize: 40 }} />
          <XIcon sx={{ fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
