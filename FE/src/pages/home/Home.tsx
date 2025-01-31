import Slider, { Settings } from 'react-slick'
import image from '../../images/thecoffee.png'
import { Box } from '@mui/material'
import Banner from '../../components/Banner/Banner'
import imga from '../../images/heading.png'
import image2 from '../../images/daucu.png'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Carousel */}
      <Banner />

      {/* Drink 2023 */}
      <div className="relative my-30">
        <div className="absolute top-[-100px] left-10 z-[-1]">
          <img src={image2} alt="" />
        </div>
        <div className="overflow-hidden rounded-b-[50px] bg-[#F9F6F2] text-center">
          <h1 className="h-30 py-10 text-3xl font-semibold">DRINK 2023</h1>
          <div className="flex">
            <img src={imga} alt="" />
            <img src={imga} alt="" />
            <img src={imga} alt="" />
          </div>
        </div>
        {/* List Item */}
        <div className="mx-auto mt-5 flex max-w-[1440px] justify-evenly py-5 text-center">
          <div className="flex h-[400px] w-[300px] flex-col justify-between rounded-t-full border border-[#6D311F] p-5">
            <div className="w-full">
              <img
                className="h-[200px] w-[259px] rounded-t-full p-2"
                src={image}
                alt=""
              />
            </div>
            <h3 className="px-2 text-xl">Trà Kim Quất Trân Châu</h3>
            <span className="text-lg font-semibold">100.000 đ</span>
            <div className="pb-4">
              <button className="rounded-full bg-[#DA5036] px-4 py-2">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <div className="flex h-[400px] w-[300px] flex-col justify-between rounded-t-full border border-[#6D311F] p-5">
            <div className="w-full">
              <img
                className="h-[200px] w-[259px] rounded-t-full p-2"
                src={image}
                alt=""
              />
            </div>
            <h3 className="px-2 text-xl">Trà Kim Quất Trân Châu</h3>
            <span className="text-lg font-semibold">100.000 đ</span>
            <div className="pb-4">
              <button className="rounded-full bg-[#DA5036] px-4 py-2">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <div className="flex h-[400px] w-[300px] flex-col justify-between rounded-t-full border border-[#6D311F] p-5">
            <div className="w-full">
              <img
                className="h-[200px] w-[259px] rounded-t-full p-2"
                src={image}
                alt=""
              />
            </div>
            <h3 className="px-2 text-xl">Trà Kim Quất Trân Châu</h3>
            <span className="text-lg font-semibold">100.000 đ</span>
            <div className="pb-4">
              <button className="rounded-full bg-[#DA5036] px-4 py-2">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <div className="flex h-[400px] w-[300px] flex-col justify-between rounded-t-full border border-[#6D311F] p-5">
            <div className="w-full">
              <img
                className="h-[200px] w-[259px] rounded-t-full p-2"
                src={image}
                alt=""
              />
            </div>
            <h3 className="px-2 text-xl">Trà Kim Quất Trân Châu</h3>
            <span className="text-lg font-semibold">100.000 đ</span>
            <div className="pb-4">
              <button className="rounded-full bg-[#DA5036] px-4 py-2">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Món ăn được yêu thích */}
      <div className="relative mt-30 mb-10">
        <div className="absolute top-[-100px] right-10 z-[-1]">
          <img src={image2} alt="" />
        </div>
        <div className="overflow-hidden rounded-b-[50px] bg-[#F9F6F2] text-center">
          <h1 className="h-30 py-10 text-3xl font-semibold">
            MÓN ĐƯỢC YÊU THÍCH
          </h1>
          <div className="flex">
            <img src={imga} alt="" />
            <img src={imga} alt="" />
            <img src={imga} alt="" />
          </div>
        </div>
        {/* List Item */}
        <div className="mx-auto mt-5 flex max-w-[1440px] justify-evenly py-5 text-center">
          <div className="flex h-[400px] w-[300px] flex-col justify-between rounded-t-full border border-[#6D311F] p-5">
            <div className="w-full">
              <img
                className="h-[200px] w-[259px] rounded-t-full p-2"
                src={image}
                alt=""
              />
            </div>
            <h3 className="px-2 text-xl">Trà Kim Quất Trân Châu</h3>
            <span className="text-lg font-semibold">100.000 đ</span>
            <div className="pb-4">
              <button className="rounded-full bg-[#DA5036] px-4 py-2">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <div className="flex h-[400px] w-[300px] flex-col justify-between rounded-t-full border border-[#6D311F] p-5">
            <div className="w-full">
              <img
                className="h-[200px] w-[259px] rounded-t-full p-2"
                src={image}
                alt=""
              />
            </div>
            <h3 className="px-2 text-xl">Trà Kim Quất Trân Châu</h3>
            <span className="text-lg font-semibold">100.000 đ</span>
            <div className="pb-4">
              <button className="rounded-full bg-[#DA5036] px-4 py-2">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <div className="flex h-[400px] w-[300px] flex-col justify-between rounded-t-full border border-[#6D311F] p-5">
            <div className="w-full">
              <img
                className="h-[200px] w-[259px] rounded-t-full p-2"
                src={image}
                alt=""
              />
            </div>
            <h3 className="px-2 text-xl">Trà Kim Quất Trân Châu</h3>
            <span className="text-lg font-semibold">100.000 đ</span>
            <div className="pb-4">
              <button className="rounded-full bg-[#DA5036] px-4 py-2">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <div className="flex h-[400px] w-[300px] flex-col justify-between rounded-t-full border border-[#6D311F] p-5">
            <div className="w-full">
              <img
                className="h-[200px] w-[259px] rounded-t-full p-2"
                src={image}
                alt=""
              />
            </div>
            <h3 className="px-2 text-xl">Trà Kim Quất Trân Châu</h3>
            <span className="text-lg font-semibold">100.000 đ</span>
            <div className="pb-4">
              <button className="rounded-full bg-[#DA5036] px-4 py-2">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
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
