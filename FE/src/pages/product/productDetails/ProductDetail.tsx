import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CircularProgress,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Rating,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import Slider, { Settings } from 'react-slick'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../api/services'
import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react'
import image2 from '../../../images/thecoffeeshop.jpg'
import avatar from '../../../images/download (1).jpg'
import {
  ProductDetailsModel,
  ProductSize,
  ProductTopping,
  ReviewModel,
} from '../../../models/product.model'
import { CartDetail, CartModel, ToppingModel } from '../../../models/cart.model'
import { useAddToCart } from '../../../hooks/cart.api'
import { formatCurrency } from '../../../utils/formatCurrency'
import SendIcon from '@mui/icons-material/Send'
import {
  useGetRecommendProduct,
  useGetReview,
  usePostReview,
} from '../../../hooks/product.api'
import { AvgNumber } from '../../../utils/avgnumber'

const ProductDetail = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [productSizes, setProductSizes] = useState<ProductSize[]>([])
  const [image, setImage] = useState<any>()
  const [topping, setTopping] = useState<ProductTopping[]>([])
  const [price, setPrice] = useState<number>(0)
  const [qtyComment, setQtyComment] = useState<number>(5)
  const [addToCart, setAddtoCart] = useState<CartModel>({
    productSizeId: productSizes[0],
    quantity: 1,
    toppings: [],
  })
  const [review, setReview] = useState<ReviewModel>({
    productId: Number(searchParams.get('id')),
    comment: '',
    rating: 5,
  })
  const [quanlity, setQuanlity] = useState<number>(1)
  const { data: RecommendProduct } = useGetRecommendProduct(
    Number(searchParams.get('id')),
  )
  const {
    data: listComment,
    refetch,
    isRefetching: listCommentLoading,
  } = useGetReview(Number(searchParams.get('id')), qtyComment)
  const postReview = usePostReview()
  const {
    isLoading,
    data: productDetail,
    isSuccess,
  } = useQuery({
    queryKey: ['getProductDetail'],
    queryFn: async () =>
      await ProductService.getProductDetail(Number(searchParams.get('id'))),
    onSuccess: (data: ProductDetailsModel) => {
      setProductSizes(data.productSizes)
      handleAddToCart('productSizeId', data.productSizes[0])
      setTopping(data.toppings)
      setPrice(data.productSizes[0].price)
      setImage(
        data.imageDefaultNavigation &&
          data.imageDefaultNavigation.firebaseImage,
      )
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
    if (value) {
      if (key === 'toppings') {
        const transformArrTopping = value.map((item: ProductTopping) => {
          return item
        })
        setAddtoCart({
          ...addToCart,
          [key]: transformArrTopping,
        })
        return
      }
      if (key == 'productSizeId') setAddtoCart({ ...addToCart, [key]: value })
    }
  }

  const onClickAddToCart = () => {
    const { toppings, productSizeId } = addToCart
    const payload = {
      productSizeId: productSizeId.id,
      quantity: quanlity,
      toppings: toppings.map((item: ProductTopping) => {
        return { id: item.id, quantity: 1 }
      }),
    }
    mutateAddToCart(payload)
  }

  const handleChangePrice = (e: MouseEvent<HTMLElement>, value: number) => {
    setPrice(value)
  }

  const handleClick = () => {
    navigate('/home', { state: { id: 12 } })
  }

  const handleChangeReview = (
    key: keyof ReviewModel,
    value: number | string,
  ) => {
    setReview({ ...review, [key]: value })
  }

  const handlePostReview = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault()
    if (e.key == 'Enter') {
      callAPIComment()
    }
  }
  const handleClickSend = () => {
    callAPIComment()
  }

  const callAPIComment = async () => {
    try {
      const result = await postReview.mutateAsync(review)
      if (result) {
        refetch()
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error)
    }
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

  useEffect(() => {
    refetch()
  }, [qtyComment])
  return (
    <div className="container">
      {/* Path Category */}
      <Breadcrumbs sx={{ padding: '20px 0' }}>
        <Link to={'/'} className="pr-2 text-black">
          Menu
        </Link>
        <Link
          to={{ pathname: '/home', search: '?id=7' }}
          className="px-2 text-black hover:underline"
        >
          {productDetail && productDetail.category.categoryName}
        </Link>
        <Typography className="px-2">
          {productDetail && productDetail.productName}
        </Typography>
      </Breadcrumbs>

      <div className="flex gap-10">
        {/* Carousel */}
        <div className="size-6/12">
          <Slider {...settings}>
            <div>
              <img className="size-full" src={image} alt="" />
            </div>
            <div>
              <img className="size-full" src={image} alt="" />
            </div>
            <div>
              <img className="size-full" src={image} alt="" />
            </div>
          </Slider>
        </div>

        {/* Information detail (Price, Topping, Size) */}

        <div className="flex w-[50%] flex-col justify-between">
          <h1 className="text-4xl">{productDetail?.productName}</h1>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl text-[#74512d]">{formatCurrency(price)}</h1>
            <div className="flex items-center">
              <button
                onClick={handleChangeQuanlity}
                name="minus"
                className="rounded bg-[#74512d] px-4 text-2xl text-white"
              >
                -
              </button>
              <span className="mx-4 text-lg font-light">{quanlity}</span>
              <button
                onClick={handleChangeQuanlity}
                name="plus"
                className="rounded bg-[#74512d] px-4 text-2xl text-white"
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
                {isSuccess &&
                  productSizes.map((item, index) => {
                    return (
                      <ToggleButton
                        key={index}
                        sx={{
                          borderRadius: '10px !important',
                          border: '1px solid #ccc !important',
                          padding: '11px 18px !important',
                        }}
                        onClick={(e) => handleChangePrice(e, item.price)}
                        value={item}
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
              value={addToCart.toppings?.map((item) => item)}
              onChange={(e, topping) => {
                handleAddToCart('toppings', topping)
              }}
            >
              <div className="my-2 flex flex-wrap gap-x-5 gap-y-2">
                {topping &&
                  topping.map((item, index) => {
                    return (
                      <ToggleButton
                        key={index}
                        sx={{
                          borderRadius: '10px !important',
                          border: '1px solid #ccc !important',
                          padding: '11px 18px !important',
                        }}
                        value={item}
                      >{`${item.toppingName} + ${formatCurrency(item.toppingPrice)}`}</ToggleButton>
                    )
                  })}
              </div>
            </ToggleButtonGroup>
          </div>

          {/* Add To Cart */}
          <button
            className="flex w-full items-center justify-center bg-[#74512d] px-5 py-4 text-[#f9f6f2]"
            onClick={onClickAddToCart}
          >
            {`Add To Cart : ${formatCurrency(price + (addToCart.toppings ? addToCart.toppings : []).reduce((total, priceTopping) => total + priceTopping.toppingPrice, 0))}`}
          </button>
        </div>
      </div>

      {/* Recommend */}
      <Card
        sx={{
          padding: '40px',
          mt: '50px',
          boxShadow:
            'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px !important',
        }}
      >
        <Typography variant="h5">Sản phẩm liên quan</Typography>
        <Box
          sx={{
            mt: '30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            height: '480px',
          }}
        >
          {RecommendProduct &&
            RecommendProduct.map((item: any, index: number) => {
              return (
                <Card
                  key={index}
                  sx={{
                    transform: 'scale(1)',
                    transition: 'all 0.5s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <div className="h-[250px] w-full rounded-lg border">
                    <img
                      style={{
                        boxShadow:
                          'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      }}
                      className="h-full w-full rounded-lg"
                      src={item.imageDefaultNavigation?.firebaseImage ?? ''}
                      alt=""
                    />
                  </div>
                  <div className="my-3 px-5">
                    <h3 className="h-[60px] text-xl">{item.productName}</h3>
                    <span className="my-4 flex items-center justify-between text-xl font-semibold">
                      {formatCurrency(item.productSizes[0].price)}
                      <Rating
                        readOnly
                        precision={0.5}
                        value={AvgNumber(item.reviews)}
                      />
                    </span>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      Lượt đánh giá: <em>{item.reviews.length}</em>
                    </p>
                    <button className="my-2 w-full rounded-[12px] bg-[#DA5036] px-4 py-2 text-white">
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </Card>
              )
            })}
        </Box>
      </Card>

      {/* Comments (Future) */}
      <Card
        sx={{
          padding: '40px',
          mt: '50px',
          boxShadow:
            'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px !important',
        }}
      >
        <Typography variant="h5">Đánh giá sản phẩm</Typography>
        <Box>
          {listComment &&
            listComment.map((item: ReviewModel, index: number) => {
              console.log(qtyComment)
              if (index > qtyComment - 1) return null
              return (
                <div key={index}>
                  <div
                    style={{ display: 'flex', gap: '20px', marginTop: '15px' }}
                  >
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        boxShadow:
                          'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
                      }}
                      src={avatar}
                      alt=""
                    />
                    <div>
                      <Typography variant="h6">Nguyễn Văn A</Typography>
                      <Rating value={item.rating} precision={0.5} />
                      <p>{item.comment}</p>
                    </div>
                  </div>
                  {listComment.length - 1 == index ? null : (
                    <hr style={{ margin: '20px 0 0 0' }} />
                  )}
                </div>
              )
            })}
          <div className="flex justify-center">
            <button
              onClick={() => setQtyComment((prev) => prev + 5)}
              className="flex w-[150px] items-center justify-center gap-2 rounded-lg bg-[#da5036] px-6 py-3 text-white"
            >
              {!listCommentLoading ? (
                <span style={{ height: '24px' }}>Load More</span>
              ) : (
                <CircularProgress size="25px" sx={{ color: 'white' }} />
              )}
            </button>
          </div>

          <div className="mt-10 flex gap-5">
            <img
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                boxShadow:
                  'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
              }}
              src={avatar}
              alt=""
            />
            <FormControl fullWidth>
              <OutlinedInput
                onKeyUp={handlePostReview}
                onChange={(e) => handleChangeReview('comment', e.target.value)}
                sx={{ borderRadius: '50px' }}
                endAdornment={
                  <InputAdornment position="end">
                    <button
                      style={{ cursor: 'pointer' }}
                      onClick={handleClickSend}
                    >
                      <SendIcon />
                    </button>
                  </InputAdornment>
                }
              />
              <Rating
                onChange={(e, newE) => {
                  handleChangeReview('rating', newE ?? 5)
                }}
                value={review.rating}
                precision={0.5}
              />
            </FormControl>
          </div>
        </Box>
      </Card>
    </div>
  )
}

export default ProductDetail
