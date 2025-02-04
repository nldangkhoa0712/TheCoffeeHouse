import {
  Breadcrumbs,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Slider, { Settings } from 'react-slick'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../api/services'
import { MouseEvent, MouseEventHandler, useState } from 'react'
// import image from '../../../images/thecoffeeshop.jpg'
import {
  ProductDetailsModel,
  ProductSize,
  ProductTopping,
} from '../../../models/product.model'
import { CartModel, ToppingModel } from '../../../models/cart.model'
import { useAddToCart } from '../../../hooks/cart.api'
import { formatCurrency } from '../../../utils/formatCurrency'

const ProductDetail = () => {
  const navigate = useNavigate()
  const [productSizes, setProductSizes] = useState<ProductSize[]>([])
  const [image, setImage] = useState<any>()
  const [topping, setTopping] = useState<ProductTopping[]>([])
  const [price, setPrice] = useState<number>(0)
  const [addToCart, setAddtoCart] = useState<CartModel>({
    productSizeId: 0,
    quantity: 1,
    toppings: [],
  })
  const [quanlity, setQuanlity] = useState<number>(1)
  const { isLoading } = useQuery({
    queryKey: ['getProductDetail'],
    queryFn: async () => await ProductService.getProductDetail(6),
    onSuccess: (data: ProductDetailsModel) => {
      setProductSizes(data.productSizes)
      setTopping(data.toppings)
      setPrice(data.productSizes[0].price)
      setImage(data.imageDefaultNavigation.firebaseImage)
    },
  })
  const { mutate: mutateAddToCart } = useAddToCart()

  const handleChangeQuanlity = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    const quanlityProduct = name == 'minus' ? quanlity - 1 : quanlity + 1
    if (quanlityProduct > 0) {
      setQuanlity(quanlityProduct)
      return
    }
    setQuanlity(0)
  }

  const handleAddToCart = (key: keyof CartModel, value: any) => {
    // console.log(value)
    if (value) {
      if (key === 'toppings') {
        console.log(value)
        const transformArrTopping = value.map((item: any) => {
          return { id: item.id ?? item, quanlity: 1 }
        })
        setAddtoCart({
          ...addToCart,
          [key]: transformArrTopping,
        })
        return
      }
      setAddtoCart({ ...addToCart, [key]: value })
    }
  }

  const onClickAddToCart = () => {
    mutateAddToCart(addToCart)
  }

  const handleChangePrice = (e: MouseEvent<HTMLElement>, value: number) => {
    setPrice(value)
  }

  const handleClick = () => {
    navigate('/home', { state: { id: 12 } })
  }

  const settings: Settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: true,
    autoplay: true,
    // dotsClass: 'dot-slick',
    arrows: false,
  }

  console.log(addToCart)

  return (
    <div className="container m-auto">
      {/* Path Category */}
      <div>
        <Breadcrumbs>
          <Link to={'/'} className="pr-2 text-black">
            Menu
          </Link>
          <Link
            to={{ pathname: '/home', search: '?id=7' }}
            className="px-2 text-black hover:underline"
          >
            Trà sữa
          </Link>
          <Typography className="px-2">Trà sữa Matcha</Typography>
        </Breadcrumbs>
      </div>

      <div className="flex gap-10">
        {/* Carousel */}
        <div className="w-[40%]">
          <Slider {...settings}>
            <div>
              <img className="h-[570px] w-full" src={image} alt="" />
            </div>
            <div>
              <img className="h-[570px] w-full" src={image} alt="" />
            </div>
            <div>
              <img className="h-[570px] w-full" src={image} alt="" />
            </div>
          </Slider>
        </div>

        {/* Information detail (Price, Topping, Size) */}

        <div className="w-[50%]">
          <h1 className="text-4xl">Trà sữa</h1>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl text-orange-400">
              {formatCurrency(price)}
            </h1>
            <div className="flex items-center">
              <button
                onClick={handleChangeQuanlity}
                name="minus"
                className="rounded bg-orange-400 px-4 text-2xl text-white"
              >
                -
              </button>
              <span className="mx-4 text-lg font-light">{quanlity}</span>
              <button
                onClick={handleChangeQuanlity}
                name="plus"
                className="rounded bg-orange-400 px-4 text-2xl text-white"
              >
                +
              </button>
            </div>
          </div>
          {/* Size */}
          <div className="mt-5">
            <h1>Chọn size (Bắt Buộc)</h1>
            <ToggleButtonGroup
              exclusive
              value={addToCart.productSizeId}
              onChange={(e, size) => {
                handleAddToCart('productSizeId', size)
              }}
            >
              <div className="my-2 flex gap-5">
                {productSizes &&
                  productSizes.map((item, index) => {
                    return (
                      <ToggleButton
                        sx={{
                          borderRadius: '10px !important',
                          border: '1px solid #ccc !important',
                          padding: '11px 18px !important',
                        }}
                        onClick={(e) => handleChangePrice(e, item.price)}
                        value={item.id!}
                      >{`${item.size} | ${formatCurrency(item.price)}`}</ToggleButton>
                    )
                  })}
              </div>
            </ToggleButtonGroup>
          </div>

          {/* Topping */}
          <div className="mt-2 h-[50%]">
            <h1>Topping</h1>
            <ToggleButtonGroup
              value={addToCart.toppings.map((item) => item.id)}
              onChange={(e, topping) => {
                handleAddToCart('toppings', topping)
              }}
            >
              <div className="my-2 flex flex-wrap gap-x-5 gap-y-2">
                {topping &&
                  topping.map((item, index) => {
                    return (
                      <ToggleButton
                        sx={{
                          borderRadius: '10px !important',
                          border: '1px solid #ccc !important',
                          padding: '11px 18px !important',
                        }}
                        value={item.id}
                      >{`${item.toppingName} + ${formatCurrency(item.toppingPrice)}`}</ToggleButton>
                    )
                  })}
              </div>
            </ToggleButtonGroup>
          </div>

          {/* Add To Cart */}
          <button
            className="flex w-full items-center justify-center bg-orange-500 px-5 py-4 text-[#ccc]"
            onClick={onClickAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Comments (Future) */}
    </div>
  )
}

export default ProductDetail
