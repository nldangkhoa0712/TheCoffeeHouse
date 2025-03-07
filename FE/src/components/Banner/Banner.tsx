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
      <Slider {...settings} className="overflow-hidden rounded-[12px]">
        <img className="h-[60vh] rounded-[12px]" src={TheCoffeeShop} alt="" />

        <img className="h-[60vh] rounded-[12px]" src={TheCoffeeShop} alt="" />

        <img className="h-[60vh] rounded-[12px]" src={TheCoffeeShop} alt="" />
      </Slider>

      <div className="h-10"></div>
    </div>
  )
}

export default Banner
