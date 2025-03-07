import { useQueries } from '@tanstack/react-query'
import { useState } from 'react'
import { CartService } from '../../../api/services'
import FormCart from '../../../components/Form/FormCart'
import Order from '../../../components/Order'
import { PayloadCartModel } from '../../../models/cart.model'

const InforCart = () => {
  const [payloadCart, setPayloadCart] = useState<PayloadCartModel>({
    cartIds: [],
    voucherId: 0,
    addressId: 0,
  })

  const handleChangeCart = (
    key: keyof PayloadCartModel,
    value: number | number[],
  ) => {
    setPayloadCart({ ...payloadCart, [key]: value })
  }

  console.log(payloadCart)

  return (
    <div className="container mx-auto my-10">
      <button className="rounded-full bg-[#DA5036] px-4 py-2 text-xl">
        Tiếp tục mua hàng
      </button>
      <div className="text-center">
        <h1 className="mb-10 text-4xl text-[#6D311F]">THÔNG TIN ĐẶT HÀNG</h1>
        <div className="flex justify-around bg-[#F9F6F2] px-[30px] py-[60px]">
          {/* Đơn hàng */}
          <Order handleChangeCart={handleChangeCart} />

          {/* Thông tin người nhận */}
          <FormCart
            handleChangeCart={handleChangeCart}
            payloadCart={payloadCart}
          />
        </div>
      </div>
    </div>
  )
}

export default InforCart
