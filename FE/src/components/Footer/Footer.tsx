import { Box, Button, Icon } from '@mui/material'
import '../../styles/component/footer.css'
import TheCoffeeHouseImg from '../../images/thecoffee-removebg.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FaceIcon from '@mui/icons-material/Face'

const Footer = () => {
  return (
    <div className="itewm-center flex justify-between">
      <div className="footer-logo">
        <img src={TheCoffeeHouseImg} alt="" className="max-w h-auto" />
      </div>
      <div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Về chúng tôi</h4>
            <ul>
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Lịch sử phát triển</a>
              </li>
              <li>
                <a href="#">Đội ngũ</a>
              </li>
              <li>
                <a href="#">Cơ hội việc làm</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Sản phẩm</h4>
            <ul>
              <li>
                <a href="#">Cà phê Việt Nam</a>
              </li>
              <li>
                <a href="#">Cà phê Espresso</a>
              </li>
              <li>
                <a href="#">Bánh ngọt</a>
              </li>
              <li>
                <a href="#">Đồ uống khác</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Dịch vụ</h4>
            <ul>
              <li>
                <a href="#">Đặt hàng online</a>
              </li>
              <li>
                <a href="#">Giao hàng tận nơi</a>
              </li>
              <li>
                <a href="#">Đặt bàn</a>
              </li>
              <li>
                <a href="#">Tổ chức sự kiện</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Liên hệ</h4>
            <ul>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Hotline</a>
              </li>
              <li>
                <a href="#">Cửa hàng</a>
              </li>
              <li>
                <a href="#">Góp ý</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
