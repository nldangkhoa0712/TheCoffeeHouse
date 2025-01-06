import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { AuthModel } from "../../models/auth.model"
import { http } from "./http"


export const login = (params: AuthModel) => {
    try {
        const response = http.post(apiRouteConstants.LOGIN, {}, params)
        return response
    } catch (error) {
        // toast.error(error as any)
        console.log(error)
        throw error
    }
}
