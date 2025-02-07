import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import ImageCart from '../../../images/daucu.png'
import { pink } from '@mui/material/colors'
import { useQueries, useQuery } from '@tanstack/react-query'
import { CartService } from '../../../api/services'
import { CartItem } from '../../../models/cart.model'

const InforCart = () => {
  const [pastedText, setPastedText] = useState('')

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setPastedText(text)
    } catch (err) {
      console.error('Lỗi khi paste:', err)
    }
  }

  const [getAllCart] = useQueries({
    queries: [
      {
        queryKey: ['getAllCart'],
        queryFn: async () => CartService.getAllCart(),
      },
    ],
  })

  // const result = u({
  //   queryKey: ['getAllCart'],
  //   queryFn: () => CartService.getAllCart(),
  // })

  const { data: dataGetAllCart } = getAllCart

  console.log(dataGetAllCart)

  return (
    <div className="container mx-auto my-10">
      <button className="rounded-full bg-[#DA5036] px-4 py-2 text-xl">
        Tiếp tục mua hàng
      </button>
      <div className="text-center">
        <h1 className="mb-10 text-4xl text-[#6D311F]">THÔNG TIN ĐẶT HÀNG</h1>
        <div className="flex justify-around bg-[#F9F6F2] px-[30px] py-[60px]">
          {/* Đơn hàng */}
          <div className="flex w-[50%] flex-col items-center border-r-3 border-dashed">
            <h2 className="text-2xl">ĐƠN HÀNG</h2>

            {/* {dataGetAllCart.} */}

            <Card
              style={{ width: '70%', borderRadius: '10px', margin: '10px 0' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '20px',
                }}
              >
                <img
                  src={ImageCart}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '5px solid red',
                  }}
                  // className="h-[100px] w-[100px] rounded-[50%] border"
                  alt=""
                />
                <div className="text-start">
                  <h3 className="text-xl">Matcha Latte (L)</h3>
                  <p className="text-end text-base">Số lượng: 2 ly</p>
                  <ul>
                    <li className="text-base font-light">
                      <span>+</span> ABC
                    </li>
                    <li className="text-base font-light">
                      <span>+</span> ABC
                    </li>
                  </ul>
                </div>
                <p className="ml-10 text-xl">63.000 đ</p>
              </Box>
            </Card>

            <Card
              style={{ width: '70%', borderRadius: '10px', margin: '10px 0' }}
            >
              <Box sx={{ display: 'flex', padding: '20px', gap: '30px' }}>
                <img
                  src={ImageCart}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '5px solid red',
                  }}
                  // className="h-[100px] w-[100px] rounded-[50%] border"
                  alt=""
                />
                <div className="text-start">
                  <h3 className="text-xl">Matcha Latte (L)</h3>
                  <p className="text-end text-base">Số lượng: 2 ly</p>
                  <ul>
                    <li className="text-base font-light">
                      <span>+</span> ABC
                    </li>
                    <li className="text-base font-light">
                      <span>+</span> ABC
                    </li>
                  </ul>
                </div>
                <p className="ml-10 text-xl">63.000 đ</p>
              </Box>
            </Card>

            <FormControl style={{ width: '70%' }}>
              <InputLabel>Chọn mã giảm giá</InputLabel>
              <OutlinedInput
                value={pastedText}
                label="Chọn mã giảm giá"
                sx={{ borderRadius: '10px', backgroundColor: '#FFF' }}
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      onClick={pasteFromClipboard}
                      sx={{
                        padding: '5px 10px',
                        backgroundColor: '#DA5036',
                        color: 'white',
                        borderRadius: '50px',
                        fontSize: '14px',
                      }}
                    >
                      Dán mã giảm giá
                    </Button>
                  </InputAdornment>
                }
              />
            </FormControl>

            <div className="my-10 w-[70%]">
              <p className="text-start text-xl font-medium">Tổng Cộng</p>
              <hr style={{ borderTopWidth: '3px', margin: '10px 0' }} />
              <div className="flex justify-between">
                <p className="text-xl">Số lượng</p>
                <p className="text-xl">3 ly</p>
              </div>
              <div className="flex justify-between">
                <p className="text-xl">Tổng tiền</p>
                <p className="text-xl">193.000đ</p>
              </div>
              <div className="flex justify-between">
                <p className="text-xl">Phải thanh toán</p>
                <p className="text-xl">193.000đ</p>
              </div>
            </div>
          </div>

          {/* Thông tin người nhận */}
          <div className="flex w-[50%] flex-col items-center text-start">
            <h2 className="text-2xl">THÔNG TIN NGƯỜI NHẬN</h2>
            <Box component="form" noValidate sx={{ padding: '0 100px' }}>
              <FormControl fullWidth sx={{ marginY: '10px' }}>
                <label htmlFor="" className="mb-3 text-xl">
                  Họ tên
                </label>
                <TextField
                  placeholder="Name"
                  sx={{ '& .MuiInputBase-root': { borderRadius: '50px' } }}
                />
              </FormControl>

              <FormControl fullWidth sx={{ marginY: '10px' }}>
                <label htmlFor="" className="mb-3 text-xl">
                  Số điện thoại
                </label>
                <TextField
                  placeholder="Phone"
                  sx={{ '& .MuiInputBase-root': { borderRadius: '50px' } }}
                />
              </FormControl>

              <FormControl fullWidth sx={{ marginY: '10px' }}>
                <label htmlFor="" className="mb-3 text-xl">
                  Địa chỉ
                </label>
                <Select
                  // variant="standard"
                  sx={{
                    borderRadius: '50px',
                  }}
                  value=""
                >
                  <MenuItem value="">
                    <Typography
                      sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}
                    >
                      {/* value */}
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ marginY: '10px' }}>
                <label htmlFor="" className="mb-3 text-xl">
                  Phương thức thanh toán
                </label>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="1"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="1"
                    sx={{ color: '#DA5036' }}
                    control={
                      <Radio
                        sx={{
                          color: '#DA5036',
                          '&.Mui-checked': {
                            color: '#DA5036',
                          },
                        }}
                      />
                    }
                    label="Thanh toán trực tuyến"
                  />
                  <FormControlLabel
                    sx={{ color: '#DA5036' }}
                    value="2"
                    control={
                      <Radio
                        sx={{
                          color: '#DA5036',
                          '&.Mui-checked': {
                            color: '#DA5036',
                          },
                        }}
                      />
                    }
                    label="Thanh toán khi nhận hàng"
                  />
                </RadioGroup>
              </FormControl>

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#DA5036',
                  padding: '6px 12px',
                  fontSize: '20px',
                  color: 'white',
                  borderRadius: '50px',
                }}
              >
                Tiếp tục thanh toán
              </button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InforCart
