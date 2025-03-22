import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { useGetParams } from '../../hooks/useGetQueryParams'
import moment from 'moment'
import { formatCurrency } from '../../utils/formatCurrency'
import PaymentFailed from '../PaymentFailed'
import { PaymentSuccessQueryParamsType } from '../../models/payment.model'

const PaymentSuccess = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] =
    useGetParams<PaymentSuccessQueryParamsType>()

  const date = new Date()
  const isValid =
    searchParams.vnp_ResponseCode == searchParams.vnp_TransactionStatus

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-lg space-y-6 rounded-lg bg-white p-6 shadow-md">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-green-100 p-3">
            <TaskAltIcon className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Thanh toán thành công!
          </h1>
          <p className="mt-2 text-gray-600">
            Cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi
          </p>
        </div>

        {/* Order Details */}
        <div className="space-y-3 border-b border-t border-gray-200 py-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Mã đơn hàng:</span>
            <span className="font-medium">{searchParams.vnp_TxnRef}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Ngày đặt hàng:</span>
            <span className="font-medium">
              {moment(date).format('DD/MM/YYYY')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phương thức thanh toán:</span>
            <span className="font-medium">{searchParams.vnp_CardType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tổng thanh toán:</span>
            <span className="font-bold text-green-600">
              {formatCurrency(searchParams.vnp_Amount / 100)}
            </span>
          </div>
        </div>

        {/* What's Next */}
        <div className="space-y-3">
          <h2 className="font-semibold text-gray-800">Bước tiếp theo:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                <span className="text-xs font-bold text-green-500">1</span>
              </div>
              <p className="text-gray-600">
                Email xác nhận đơn hàng sẽ được gửi tới hòm thư của bạn.
              </p>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                <span className="text-xs font-bold text-green-500">2</span>
              </div>
              <p className="text-gray-600">
                Đơn hàng của bạn sẽ được xử lý và giao hàng trong 2-3 ngày tới.
              </p>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          <button className="w-full rounded-md bg-green-500 px-4 py-2 text-white transition duration-200 hover:bg-green-600">
            Theo dõi đơn hàng
          </button>
          <Link to="http://192.168.77.101:3000/page/order-successful">
            <button className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-800 transition duration-200 hover:bg-gray-50">
              Tiếp tục mua sắm
            </button>
          </Link>
        </div>
      </div>

      {/* Customer Support */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Cần hỗ trợ?{' '}
          <a href="#" className="text-green-600 hover:underline">
            Liên hệ với chúng tôi
          </a>
        </p>
      </div>
    </div>
  )
}

export default PaymentSuccess
