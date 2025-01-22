import { useMutation } from "@tanstack/react-query";
import { ProductService } from "../api/services";

export const useAddProduct = () => {
  return useMutation(ProductService.addProduct);
};
