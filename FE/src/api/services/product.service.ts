import toast from "react-hot-toast"
import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { AddProductRequest, ReviewModel } from "../../models/product.model"
import { fileToFileRequestData, prepareImgsFn } from "../../utils/convertBase64"
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

export const getCategory = async () => {
    try {
        const response = await http.get(
            apiRouteConstants.GETALLCATEGORY,
            {},
            {}
        )
        return response.value
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = async (req: AddProductRequest) => {
    const addProductPayload = {
        productName: req.productName,
        description: req.description,
        categoryId: req.categoryId,
        isValid: true,
        imageDefaultNavigation: await fileToFileRequestData(req.imageDefaultNavigation),
        productSizes: req.productSizes,
        images: await prepareImgsFn(req.images)
    }

    try {
        const response = await http.post(
            apiRouteConstants.ADDPRODUCT,
            {},
            addProductPayload
        )
        return response.value
    } catch (error) {
        console.log(error)
    }
}

export const getProductDetail = async (idProduct: number) => {
    try {
        const response = await http.get(
            apiRouteConstants.GETPRODUCTDETAIL,
            { idProduct },
            {}
        )
        return response.value
    } catch (error) {
        console.log(error)
    }
}

export const getRecommendProduct = async (productId: number) => {
    try {
        const response = await http.get<any>(apiRouteConstants.GETRECOMMENDPRODCUT, { productId }, {})
        return response.value
    } catch (error) {
        toast.error(error)
    }
}

export const getReview = async (id: number, qty: number) => {
    try {
        const response = await http.get<ReviewModel[]>(apiRouteConstants.GETREVIEW, { id, quantity: qty }, {})
        return response.value
    } catch (error) {
        toast.error(error)
    }
}

export const addReview = async (params: ReviewModel) => {
    try {
        const response = await http.post(apiRouteConstants.ADDREVIEW, {}, params)
        return response.isSuccess
    } catch (error) {
        toast.error(error)
    }
}