import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { UserInfo } from "../../models/auth.model"
import { http } from "./http"

export const getUserInfo = async (): Promise<UserInfo> => {
    try {
        const response = await http.get<UserInfo>(
            apiRouteConstants.GETINFOUSER,
            {},
            {}
        )
        return response.value
    } catch (error) {
        throw error
    }
}