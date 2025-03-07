import { useMutation } from '@tanstack/react-query'
import { AddressService } from '../api/services'

export const useAddAddress = () => {
  return useMutation(AddressService.addAddress)
}

export const useGetDetail = () => {
  return useMutation(AddressService.getDetail)
}

export const useUpdateAddress = () => {
  return useMutation(AddressService.updateAddress)
}

export const useDeleteAddress = () => {
  return useMutation(AddressService.deleteAddress)
}
