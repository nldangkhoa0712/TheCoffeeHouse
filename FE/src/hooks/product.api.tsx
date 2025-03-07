import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductService } from '../api/services'

export const useAddProduct = () => {
  return useMutation(ProductService.addProduct)
}

export const useGetRecommendProduct = (id: number) => {
  return useQuery({
    queryKey: ['getRecommendProduct'],
    queryFn: () => ProductService.getRecommendProduct(id),
    refetchOnWindowFocus: false,
  })
}

export const useGetReview = (id: number, qty: number) => {
  return useQuery({
    queryKey: ['getReview'],
    queryFn: () => ProductService.getReview(id, qty),
    refetchOnWindowFocus: false,
  })
}

export const usePostReview = () => {
  return useMutation(ProductService.addReview)
}
