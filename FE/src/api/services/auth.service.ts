import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { AuthModel, RegisterModel, SetNewPassword, User, UserDTO, VerifyPayload } from "../../models/auth.model"
import { http } from "./http"
import toast from 'react-hot-toast'




export const login = async (params: AuthModel): Promise<User> => {
    try {
        const response = await http.post<any>(apiRouteConstants.LOGIN, undefined, params)
        return UserDTO(response.value)
    } catch (error) {
        throw error
    }
}

export const login2 = async (params: AuthModel): Promise<User> => {
    try {
        const response = await http.post<any>("http://localhost:1880/login", {}, params)
        return UserDTO(response.value)
    } catch (error) {
        throw error
    }
}

export const register = async (params: RegisterModel) => {
    try {
        const response = await http.post(apiRouteConstants.REGISTER, undefined, params)
        toast.success(response.message)
        return response.value
    } catch (error) {
        toast(error)
        throw error
    }
}

export const getOTP = async (email: string) => {
    try {
        const response = await http.post(apiRouteConstants.RESEND, undefined, email)
        return response.value
    } catch (error) {
        throw error
    }
}

export const verify = async (params: VerifyPayload) => {
    try {
        const response = await http.post(apiRouteConstants.VERIFY, undefined, params)
        return response.value
    } catch (error) {
        throw error
    }
}

export const forgotPassword = async (email: string) => {
    try {
        const response = await http.post(apiRouteConstants.FORGOTPASSWORD, undefined, email)
        return response.message
    } catch (error) {
        throw error
    }
}

export const setNewPassword = async (params: SetNewPassword) => {
    try {
        const response = await http.post(apiRouteConstants.SETNEWPASSWORD, undefined, params)
        return response.message
    } catch (error) {
        throw error
    }
}