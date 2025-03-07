import Slider, { Settings } from 'react-slick'
import image from '../../images/thecoffee.png'
import { Box, Card, Rating } from '@mui/material'
import Banner from '../../components/Banner/Banner'
import imga from '../../images/heading.png'
import image2 from '../../images/daucu.png'
import { Helmet } from 'react-helmet'
import { formatCurrency } from '../../utils/formatCurrency'

const arrItem = [
  {
    id: 1,
    img: image,
    name: 'Trà Kim Quất Trân Châu',
    price: 100000,
    size: 'L',
  },
  {
    id: 2,
    img: image,
    name: 'Trà Kim Quất Trân Châu',
    price: 100000,
    size: 'L',
  },
  {
    id: 3,
    img: image,
    name: 'Trà Kim Quất Trân Châu',
    price: 100000,
    size: 'L',
  },
  {
    id: 4,
    img: image,
    name: 'Trà Kim Quất Trân Châu',
    price: 100000,
    size: 'L',
  },
]

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Carousel */}
      <Banner />

      {/* Drink 2023 */}
      <div className="px-[200px]">
        <div className="overflow-hidden rounded-[20px] bg-[#F9F6F2] text-center">
          <h1 className="h-30 py-10 text-3xl font-semibold">DRINK 2023</h1>
        </div>
        {/* List Item */}
        <div className="mx-auto flex gap-10 py-10">
          {arrItem.map((item, index) => {
            return (
              <Card
                sx={{
                  borderRadius: '18px',
                }}
                key={item.id}
                className="flex flex-col justify-between rounded-[18px] p-5"
              >
                <div className="w-full">
                  <img
                    style={{
                      boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    }}
                    className="h-[300px] w-[500px] rounded-[18px] p-2"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="border-b-1 border-[#edecec] px-2 py-3">
                  <h3 className="text-xl">{item.name}</h3>
                  <span className="flex items-center justify-between py-5 text-xl font-semibold">
                    {formatCurrency(item.price)}
                    <Rating value={5} />
                  </span>
                </div>
                <div className="pb-4">
                  <button className="w-full rounded-[12px] bg-[#DA5036] px-4 py-2 text-white">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Món ăn được yêu thích */}
      <div className="px-[200px]">
        <div className="overflow-hidden rounded-[20px] bg-[#F9F6F2] text-center">
          <h1 className="h-30 py-10 text-3xl font-semibold">
            MÓN ĐƯỢC YÊU THÍCH
          </h1>
        </div>
        {/* List Item */}
        <div className="mx-auto flex gap-10 py-10">
          {arrItem.map((item, index) => {
            return (
              <Card
                sx={{
                  borderRadius: '18px',
                }}
                key={item.id}
                className="flex flex-col justify-between rounded-[18px] p-5"
              >
                <div className="w-full">
                  <img
                    style={{
                      boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    }}
                    className="h-[300px] w-[500px] rounded-[18px] p-2"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="border-b-1 border-[#edecec] px-2 py-3">
                  <h3 className="text-xl">{item.name}</h3>
                  <span className="flex items-center justify-between py-5 text-xl font-semibold">
                    {formatCurrency(item.price)}
                    <Rating value={5} />
                  </span>
                </div>
                <div className="pb-4">
                  <button className="w-full rounded-[12px] bg-[#DA5036] px-4 py-2 text-white">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Thành lập */}
      <div className="mx-auto mb-10 max-w-[1440px] p-5 text-center">
        <h1 className="text-4xl font-semibold">SÁNG LẬP VÀO 2015</h1>
        <p className="my-5 text-2xl font-light">
          Một tiệm thức uống truyền thống. Bakes tin rằng bánh ngọt nên giống
          như tình yêu: thú vị, chu đáo và <br /> trung thực.
        </p>
        <p className="text-3xl">
          Bánh cho ngày bình thường, ngày đặc biệt và ngày đặc biệt rãnh rỗi.
        </p>
      </div>

      {/* About */}
      <div>
        <div className="overflow-hidden rounded-b-[50px] bg-[#F9F6F2] text-center">
          <h1 className="h-30 py-10 text-3xl font-semibold">
            THỨC UỐNG Ở LYNCAKEs
          </h1>
          <div className="flex">
            <img src={imga} alt="" />
            <img src={imga} alt="" />
            <img src={imga} alt="" />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[1440px]">
          <div className="w-full py-10">
            <div className="flex items-center justify-center">
              {/* Txt */}
              <div className="w-[50%] p-10">
                <h2 className="text-3xl">Chuỗi cửa hàng</h2>
                <p className="my-2 text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam repudiandae soluta iste deleniti? Rem, aliquam
                  corporis dolorum cumque corrupti, optio eos sunt quidem
                  veritatis dolorem eaque vitae unde incidunt excepturi!
                </p>
                <div>
                  <button className="rounded-full bg-[#DA5036] px-4 py-2">
                    Xem các cửa hàng
                  </button>
                </div>
              </div>
              {/* Img */}
              <div className="w-[50%] rounded-r-full border border-l-0">
                <img
                  className="h-[350px] w-[100%] rounded-r-full p-10"
                  src="https://cdnb.artstation.com/p/assets/images/images/034/073/861/large/quan-au-weekenderscoffee.jpg?1611322075"
                  alt=""
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              {/* Img */}
              <div className="w-[50%] rounded-l-full border border-r-0">
                <img
                  className="h-[350px] w-[100%] rounded-l-full p-10"
                  src="https://cdnb.artstation.com/p/assets/images/images/034/073/861/large/quan-au-weekenderscoffee.jpg?1611322075"
                  alt=""
                />
              </div>

              {/* Txt */}
              <div className="w-[50%] p-10">
                <h2 className="text-3xl">Chuỗi thức uống</h2>
                <p className="my-2 text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam repudiandae soluta iste deleniti? Rem, aliquam
                  corporis dolorum cumque corrupti, optio eos sunt quidem
                  veritatis dolorem eaque vitae unde incidunt excepturi!
                </p>
                <div>
                  <button className="rounded-full bg-[#DA5036] px-4 py-2">
                    Xem các sản phẩm
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              {/* Txt */}
              <div className="w-[50%] p-10">
                <h2 className="text-3xl">Nguồn gốc</h2>
                <p className="my-2 text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam repudiandae soluta iste deleniti? Rem, aliquam
                  corporis dolorum cumque corrupti, optio eos sunt quidem
                  veritatis dolorem eaque vitae unde incidunt excepturi!
                </p>
                <div>
                  <button className="rounded-full bg-[#DA5036] px-4 py-2">
                    Xem các tin tức
                  </button>
                </div>
              </div>
              {/* Img */}
              <div className="w-[50%] rounded-r-full border border-l-0">
                <img
                  className="h-[350px] w-[100%] rounded-r-full p-10"
                  src="https://cdnb.artstation.com/p/assets/images/images/034/073/861/large/quan-au-weekenderscoffee.jpg?1611322075"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4882.533202143704!2d106.60838257588428!3d10.86696865751539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b4fdc5b39e7%3A0xde2af1da38626015!2sINFINITEA%20tea%20and%20more!5e1!3m2!1svi!2s!4v1737627954030!5m2!1svi!2s"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default Home
