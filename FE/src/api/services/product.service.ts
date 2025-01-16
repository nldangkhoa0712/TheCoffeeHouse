import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { http } from "./http"

export const getAllProduct = async () => {
    try {
        const response = await http.get(
            apiRouteConstants.GETALLPRODUCT,
            undefined,
            {}
        )
        return response.value
    } catch (error) {
        console.log(error)
    }
}