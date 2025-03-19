import { useMutation, useQuery } from '@tanstack/react-query'
import { CartService } from '../api/services'

export const useAddToCart = () => {
  return useMutation(CartService.AddToCart)
}

export const useGetAllCart = () => {
  return useQuery({
    queryKey: ['getAllCart'],
    queryFn: async () => CartService.getAllCart(),
    refetchOnWindowFocus: false,
  })
}

export const useCreateOrder = () => {
  return useMutation(CartService.createOrderFromCart)
}

export const useDeleteCart = () => {
  return useMutation(CartService.RemoveItem)
}
