import { useQuery } from '@tanstack/react-query'
import { VoucherService } from '../api/services'

export const useGetListVoucher = () => {
  return useQuery({
    queryKey: ['getListVoucer'],
    queryFn: async () => await VoucherService.getListVoucher(),
  })
}
