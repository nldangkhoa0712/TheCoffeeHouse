import { axiosCallAPI } from "../../axios/axiosCallAPI"

type ResponseModel<T> = {
    value: T,
    status: number,
    message: string,

}

const callAPI = async <T>(url: string, resquestData: object, requestQuery: Record<string, string>): Promise<ResponseModel<T>> => {
    const queryParams = new URLSearchParams(requestQuery)
    const URLAPI = queryParams ? `${url}?${queryParams}` : url
    try {
        const response = await axiosCallAPI(URLAPI, {
            method: axiosCallAPI.defaults.method,
            data: resquestData
        })
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const get = <T>(url: string, requestQuery: Record<string, string>, responseData: object) => {
    return callAPI<T>(url, responseData, requestQuery,)
}

export const post = <T>(url: string, requestQuery: Record<string, string>, responseData: object) => {
    axiosCallAPI.defaults.method = "POST"
    return callAPI<T>(url, responseData, requestQuery)
}

export const del = <T>(url: string, requestQuery: Record<string, string>, responseData: object) => {
    axiosCallAPI.defaults.method = 'DELETE'
    return callAPI<T>(url, responseData, requestQuery)
}

export const put = <T>(url: string, requestQuery: Record<string, string>, responseData: object) => {
    axiosCallAPI.defaults.method = 'PUT'
    return callAPI<T>(url, responseData, requestQuery)
}