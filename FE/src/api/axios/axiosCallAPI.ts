import axios, { AxiosInstance } from "axios";
import * as qs from 'qs'

export const axiosCallAPI: AxiosInstance = axios.create({
    baseURL: 'localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 3000,
    paramsSerializer: (params) => qs.stringify(params, { encode: false })
})

axiosCallAPI.interceptors.request.use(
    async (config) => {
        console.log(config)
        return config
    }
)

axiosCallAPI.interceptors.response.use()