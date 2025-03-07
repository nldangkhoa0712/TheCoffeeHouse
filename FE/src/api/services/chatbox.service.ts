import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { http } from "./http"

export interface ChatBoxModel {
    productId: number,
    message: string
    productName: string,
    isRelated: boolean
}

export const chatWithAI = async (message: string) => {
    try {
        const response = await http.post<ChatBoxModel[]>(apiRouteConstants.CHATWITHAI, {}, { message })
        return response.value
    } catch (error) {
        throw error
    }
}