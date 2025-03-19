import toast from "react-hot-toast"
import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { CartItem, CartModel, PayloadCartModel } from "../../models/cart.model"
import { http } from "./http"

type AddToCartModel = {
    productSizeId: number,
    quantity: number,
    toppings: { id: number, quantity: number }[]
}

export const AddToCart = async (param: AddToCartModel) => {
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

export const RemoveItem = async (cartId: number) => {
    try {
        const response = await http.post(
            apiRouteConstants.DELETECART,
            { cartId },
            {}
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
        return response.value
    } catch (error) {
        throw error
    }
}

export const createOrderFromCart = async (params: PayloadCartModel) => {
    try {
        const response = await http.post(apiRouteConstants.CREATEORDER, {}, params)
        return response.value
    } catch (error) {
        toast.error(error)
        throw error
    }
}