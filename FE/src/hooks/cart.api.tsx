import { useMutation } from '@tanstack/react-query'
import { CartService } from '../api/services'

export const useAddToCart = () => {
  return useMutation(CartService.AddToCart)
}
