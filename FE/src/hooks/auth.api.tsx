import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../api/services";

export const useLogin = () => {
  return useMutation(AuthService.login);
};

export const useRegister = () => {
  return useMutation(AuthService.register);
};

export const useGetOTP = () => {
  return useMutation(AuthService.getOTP);
};

export const useVerify = () => {
  return useMutation(AuthService.verify);
};

export const useForgotPassword = () => {
  return useMutation(AuthService.forgotPassword);
};

export const useSetPassword = () => {
  return useMutation(AuthService.setNewPassword);
};
