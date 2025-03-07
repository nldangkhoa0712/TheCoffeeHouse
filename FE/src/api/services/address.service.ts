import { apiRouteConstants } from "../../constants/apiRoute.constants"
import { AddressModel, Location } from "../../models/address.model"
import { http } from "./http"


export const getAddress = async () => {
    try {
        const response = await http.get<AddressModel[]>(
            apiRouteConstants.GETADDRESS,
            {},
            {}
        )
        return response.value
    } catch (error) {
        throw error
    }
}

export const addAddress = async (params: any) => {


    try {
        const response = await http.post(apiRouteConstants.ADDADDRESS, {}, params)
        return response.value
    } catch (error) {
        throw error
    }

}

export const updateAddress = async (params: any) => {
    try {
        const response = await http.post(apiRouteConstants.UPDATEADDRESS, { addressId: params.id }, params)
        return response.value
    } catch (error) {
        throw error
    }
}


export const deleteAddress = async (id: number) => {
    try {
        const response = await http.post(apiRouteConstants.DELETEADDRESS, { addressId: id }, {})
        return response.value
    } catch (error) {
        throw error
    }
}

export const getProvinces = async () => {
    try {
        const response = await fetch(
            'https://esgoo.net/api-tinhthanh/1/0.htm',
            { method: 'GET' }
        )
        return await response.json()
    } catch (error) {
        throw error
    }
}

export const getDistricts = async (code: string) => {
    try {
        const response = await fetch(
            `https://esgoo.net/api-tinhthanh/2/${code}.htm`,
            { method: 'GET' }
        )
        return await response.json()
    } catch (error) {
        throw error
    }
}

export const getWards = async (code: string) => {
    try {
        const response = await fetch(
            `https://esgoo.net/api-tinhthanh/3/${code}.htm`,
            { method: 'GET' }
        )
        return await response.json()
    } catch (error) {
        throw error
    }
}

export const getDetail = async (code: string): Promise<any> => {
    try {
        const response = await fetch(
            `https://esgoo.net/api-tinhthanh/5/${code}.htm`,
            { method: "GET" }
        )
        return await response.json()
    } catch (error) {
        throw error
    }
}

