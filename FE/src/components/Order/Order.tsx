import {
  Box,
  Button,
  Card,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CartDetail, CartItem, PayloadCartModel } from '../../models/cart.model'
import { formatCurrency } from '../../utils/formatCurrency'
import { CartService } from '../../api/services'
import { useQueries } from '@tanstack/react-query'
import { useGetListVoucher } from '../../hooks/voucher.api'
import { VoucherModel } from '../../models/voucher.model'
import DialogCustom from '../Dialog/DialogCustom'
import Voucher from '../Voucher'
import { useGetAllCart } from '../../hooks/cart.api'

type OrderProps = {
  handleChangeCart: (
    key: keyof PayloadCartModel,
    value: number | number[],
  ) => void
}

const Order = ({ handleChangeCart }: OrderProps) => {
  const [pastedText, setPastedText] = useState<string | null>()
  const [openVoucher, setOpenVoucher] = useState<boolean>(false)
  const [discountValue, setDiscountValue] = useState<number>(0)
  const [voucher, setVoucher] = useState('')
  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText()
      console.log(text)
      setPastedText(text)
    } catch (err) {
      console.error('Lỗi khi paste:', err)
    }
  }
  const { data: dataGetAllCart } = useGetAllCart()

  const finalTotal =
    dataGetAllCart &&
    dataGetAllCart.reduce((current, item: CartItem) => {
      const total =
        item.price +
        item.cartDetails.reduce(
          (totalTopping, priceTopping) =>
            totalTopping + priceTopping.toppingPrice,
          0,
        )
      return current + total
    }, 0)

  useEffect(() => {
    if (dataGetAllCart) {
      handleChangeCart(
        'cartIds',
        dataGetAllCart.map((item) => item.cartId),
      )
    }
  }, [dataGetAllCart])

  return (
    <>
      <DialogCustom
        open={openVoucher}
        onClose={() => setOpenVoucher(false)}
        title="Voucher"
        component={
          <Voucher
            setDiscountValue={setDiscountValue}
            handleChangeCart={handleChangeCart}
            handleClose={setOpenVoucher}
          />
        }
      />

      <div className="border-r-3 flex w-[50%] flex-col items-center border-dashed">
        <h2 className="text-2xl">ĐƠN HÀNG</h2>
        {dataGetAllCart &&
          dataGetAllCart.map((item: CartItem, index: number) => {
            const toppingTotalPrice = item.cartDetails.reduce(
              (total, price) => total + price.toppingPrice,
              0,
            )
            return (
              <Card
                key={item.cartId}
                style={{
                  width: '80%',
                  borderRadius: '10px',
                  margin: '10px 0',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                  }}
                >
                  <img
                    src={item.imageDefaultNavigation || undefined}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      border: '5px solid red',
                    }}
                    alt=""
                  />
                  <div className="text-start">
                    <h3 className="text-xl">{`${item.productName} (${item.productSizeName})`}</h3>
                    <p className="text-end text-base">{`Số lượng: ${item.quantity} ly`}</p>
                    <ul>
                      {item.cartDetails.map((details: CartDetail, idx) => {
                        return (
                          <li key={idx} className="text-base font-light">
                            <span>+</span> {details.toppingName}{' '}
                            {formatCurrency(details.toppingPrice)}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <p className="ml-10 text-xl">
                    {formatCurrency(item.price + toppingTotalPrice)}
                  </p>
                </Box>
              </Card>
            )
          })}

        <FormControl style={{ width: '80%', marginTop: '10px' }}>
          <InputLabel>Chọn mã giảm giá</InputLabel>
          <OutlinedInput
            sx={{ borderRadius: '10px', backgroundColor: '#FFF' }}
            value={pastedText}
            label="Chọn mã giảm giá"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  onClick={() => {
                    setOpenVoucher(true)
                  }}
                  sx={{
                    padding: '5px 10px',
                    backgroundColor: '#DA5036',
                    color: 'white',
                    borderRadius: '50px',
                    fontSize: '14px',
                  }}
                >
                  Chọn voucher
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>

        <div className="my-10 w-[80%]">
          <p className="text-start text-xl font-medium">Tổng Cộng</p>
          <hr style={{ borderTopWidth: '3px', margin: '10px 0' }} />
          <div className="flex justify-between">
            <p className="text-xl">Số lượng</p>
            <p className="text-xl">3 ly</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Tổng tiền</p>
            <p className="text-xl">
              {finalTotal && formatCurrency(finalTotal)}
            </p>
          </div>
          {discountValue ? (
            <div className="flex justify-between text-[#da5036]">
              <p className="text-xl">Giảm tiền</p>
              <p className="text-xl">{`-${formatCurrency(discountValue)}`}</p>
            </div>
          ) : null}
          <hr style={{ margin: '5px 0 10px' }} />

          <div className="flex justify-between">
            <p className="text-xl">Phải thanh toán</p>
            <p className="text-xl">
              {finalTotal && formatCurrency(finalTotal - discountValue)}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
