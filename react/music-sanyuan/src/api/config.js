import axios from "axios";

export const baseUrl = "http://localhost:3300";

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
});

export { axiosInstance };