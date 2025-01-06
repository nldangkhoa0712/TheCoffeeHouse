import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../api/services";

export const useLogin = () => {
  return useMutation(AuthService.login);
};
