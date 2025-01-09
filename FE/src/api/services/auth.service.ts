import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { AuthModel, RegisterModel, User, UserDTO, VerifyPayload } from "../../models/auth.model"
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
