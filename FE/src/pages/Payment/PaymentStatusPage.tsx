import React from 'react'
import { PaymentSuccessQueryParamsType } from '../../models/payment.model'
import { useGetParams } from '../../hooks/useGetQueryParams'
import PaymentSuccess from '../../components/PaymentSuccess'
import PaymentFailed from '../../components/PaymentFailed'

const PaymentStatusPage = () => {
  const [searchParams] = useGetParams<PaymentSuccessQueryParamsType>()
  const isValid =
    searchParams.vnp_ResponseCode == searchParams.vnp_TransactionStatus

  return <>{isValid ? <PaymentSuccess /> : <PaymentFailed />}</>
}

export default PaymentStatusPage
