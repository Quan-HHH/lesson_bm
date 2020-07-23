import axios from 'axios';

export const baseUrl = 'http://localhost:3000'  // 全局的后端api前缀

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export { axiosInstance };