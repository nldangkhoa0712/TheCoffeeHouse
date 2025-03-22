import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { useGetParams } from '../../hooks/useGetQueryParams'
import moment from 'moment'
import { PaymentSuccessQueryParamsType } from '../../models/payment.model'
import { Link } from 'react-router-dom'

const PaymentFailed = () => {
  const [searchParams, setSearchParams] =
    useGetParams<PaymentSuccessQueryParamsType>()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-lg space-y-6 rounded-lg bg-white p-6 shadow-md">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-red-100 p-3">
            <TaskAltIcon className="h-10 w-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Thanh toán thất bại!
          </h1>
          <p className="mt-2 text-gray-600">
            Rất tiếc, giao dịch thanh toán của bạn không thành công
          </p>
        </div>

        {/* Transaction Details */}
        <div className="space-y-3 border-b border-t border-gray-200 py-4">
          <div className="flex justify-between">
            <span className="text-gray-600">ID giao dịch:</span>
            <span className="font-medium">{searchParams.vnp_TxnRef}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Thời gian:</span>
            <span className="font-medium">
              {moment(new Date()).format('DD/MM/YYYY')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phương thức thanh toán:</span>
            <span className="font-medium">Thẻ tín dụng</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Lỗi:</span>
            <span className="font-bold text-red-600">Giao dịch bị từ chối</span>
          </div>
        </div>

        {/* Common Issues */}
        {/* <div className="space-y-3">
          <h2 className="font-semibold text-gray-800">Nguyên nhân có thể:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <span className="text-xs font-bold text-red-500">!</span>
              </div>
              <p className="text-gray-600">Số dư tài khoản không đủ</p>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <span className="text-xs font-bold text-red-500">!</span>
              </div>
              <p className="text-gray-600">Thông tin thẻ không chính xác</p>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <span className="text-xs font-bold text-red-500">!</span>
              </div>
              <p className="text-gray-600">
                Ngân hàng phát hành thẻ đã từ chối giao dịch
              </p>
            </li>
          </ul>
        </div> */}

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          {/* <button className="w-full rounded-md bg-red-500 px-4 py-2 text-white transition duration-200 hover:bg-red-600">
            Thử lại thanh toán
          </button> */}
          {/* <button className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-800 transition duration-200 hover:bg-gray-50">
            Chọn phương thức khác
          </button> */}
          <Link to="https://coffee-website-three-gray.vercel.app/page/order-successful">
            <button className="w-full bg-red-500 px-4 py-2 text-white transition duration-200 hover:bg-amber-50 hover:text-red-500 hover:shadow-2xl">
              Quay lại trang chủ
            </button>
          </Link>
        </div>
      </div>

      {/* Customer Support */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Cần hỗ trợ?{' '}
          <a href="#" className="text-red-600 hover:underline">
            Liên hệ đội hỗ trợ
          </a>
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Hotline: 1900-xxxx-xxx (8h-22h hàng ngày)
        </p>
      </div>
    </div>
  )
}

export default PaymentFailed
