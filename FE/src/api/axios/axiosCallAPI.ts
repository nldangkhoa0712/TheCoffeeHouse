import axios, { AxiosHeaders, AxiosInstance, AxiosResponse } from "axios";
import * as qs from 'qs'
import { storageService } from "../../storage";

export const axiosCallAPI: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET',
    withCredentials: false,
    paramsSerializer: (params) => qs.stringify(params, { encode: false })
})

axiosCallAPI.interceptors.request.use(
    async (config) => {
        const token = storageService.getAccessToken()
        if (token) {
            const axiosHeaders = new AxiosHeaders(config.headers);
            axiosHeaders.set('Authorization', `Bearer ${token}`);
            config.headers = axiosHeaders
        }
        return config
    },
    (error) => {
        return Promise.reject(error); // Xử lý lỗi nếu có
    }
)

axiosCallAPI.interceptors.response.use(
    (response: AxiosResponse) => {
        // const route = response.config.params?.route
        const responseData = response.data

        // Xử lí khi hết hạn token


        // Xử lí khi login => lưu accessToken

        return responseData
    },

    async (error) => {
        return Promise.reject(error)
    }
)