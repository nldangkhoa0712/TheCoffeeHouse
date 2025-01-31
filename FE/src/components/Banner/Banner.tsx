import React from 'react'
import Slider, { Settings } from 'react-slick'
import TheCoffeeShop from '../../images/thecoffeeshop.jpg'
import '../../styles/component/banner.css'

const Banner = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: true,
    autoplay: true,
    dotsClass: 'dot-slick',
    arrows: false,
  }
  return (
    <div>
      {/* Carousel */}
      <Slider {...settings}>
        <div>
          <img className="h-[70vh] w-full" src={TheCoffeeShop} alt="" />
        </div>
        <div>
          <img className="h-[70vh] w-full" src={TheCoffeeShop} alt="" />
        </div>
        <div>
          <img className="h-[70vh] w-full" src={TheCoffeeShop} alt="" />
        </div>
      </Slider>

      <div className="h-10"></div>
    </div>
  )
}

export default Banner
