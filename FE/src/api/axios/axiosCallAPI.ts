import axios, { AxiosHeaders, AxiosInstance, AxiosResponse } from "axios";
import * as qs from 'qs'
import { storageService } from "../../storage";
import { ResponseModel } from "../services/http/http.service";
import { apiRouteConstants } from "../../constants/apiRoute.constants";

export const axiosCallAPI: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET',
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
    (response: AxiosResponse<ResponseModel>) => {
        // const route = response.config.params?.route
        const responseData = response.data

        // Xử lí khi hết hạn token


        // Xử lí khi login => lưu accessToken
        if (response.config.url === apiRouteConstants.LOGIN) {
            storageService.setAccessToken(responseData.value.token)
        }

        return response
    },

    async (error) => {
        return Promise.reject(error)
    }
)