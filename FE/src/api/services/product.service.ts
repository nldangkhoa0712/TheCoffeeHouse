import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { AddProductRequest } from "../../models/product.model"
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