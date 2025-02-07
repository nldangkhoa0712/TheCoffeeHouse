import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { CartItem, CartModel } from "../../models/cart.model"
import { http } from "./http"

export const AddToCart = async (param: CartModel) => {
    try {
        const response = await http.post(
            apiRouteConstants.ADDTOCART,
            {},
            param
        )
        return response.value
    } catch (error) {
        console.log(error)
    }
}

export const getAllCart = async () => {
    try {
        const response = await http.get<CartItem[]>(
            apiRouteConstants.GETCART,
            {},
            {}
        )
        return response
    } catch (error) {
        throw error
    }
}