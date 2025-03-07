import { AxiosError } from "axios"
import { axiosCallAPI } from "../../axios/axiosCallAPI"

export interface ResponseModel<T = any> {
    value: T,
    status: number,
    message: string,
    isSuccess: boolean
}

const callAPI = async <T>(url: string, resquestData: object | undefined | string, requestQuery: Record<string, string> | undefined): Promise<ResponseModel<T>> => {
    const queryParams = new URLSearchParams(requestQuery)
    const URLAPI = requestQuery ? `${url}?${queryParams}` : url
    try {
        const response = await axiosCallAPI(URLAPI, {
            // method: axiosCallAPI.defaults.method,
            data: resquestData
        })
        return response.data
    } catch (error) {

        throw error
    }
}


export const get = <T>(url: string, requestQuery: Record<string, any> | undefined, responseData: object) => {
    axiosCallAPI.defaults.method = "GET"
    return callAPI<T>(url, responseData, requestQuery,)
}

export const post = <T>(url: string, requestQuery: Record<string, any> | undefined, responseData: object | string) => {
    axiosCallAPI.defaults.method = "POST"
    return callAPI<T>(url, responseData, requestQuery)
}

export const del = <T>(url: string, requestQuery: Record<string, any> | undefined, responseData: object) => {
    axiosCallAPI.defaults.method = 'DELETE'
    return callAPI<T>(url, responseData, requestQuery)
}

export const put = <T>(url: string, requestQuery: Record<string, any> | undefined, responseData: object) => {
    axiosCallAPI.defaults.method = 'PUT'
    return callAPI<T>(url, responseData, requestQuery)
}