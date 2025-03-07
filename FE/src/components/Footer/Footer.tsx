import { Box, Button, Icon } from '@mui/material'
import '../../styles/component/footer.css'
import TheCoffeeHouseImg from '../../images/thecoffee-removebg.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FaceIcon from '@mui/icons-material/Face'

const Footer = () => {
  return (
    <div className="mx-auto flex h-full w-[1280px] items-center">
      <div className="w-[30%]">
        <img src={TheCoffeeHouseImg} alt="" width={200} />
      </div>
      <div className="flex w-[70%] justify-between">
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
  )
}

export default Footer
