import { AppConfig } from "@/core/config/app.config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: AppConfig.env.PUBLIC_API_URL,
  withCredentials: true,
});

// Request interceptors
axiosInstance.interceptors.request.use((config) => {
  return config;
});

// Response interceptors
axiosInstance.interceptors.response.use((response) => {
  return response;
});

export default axiosInstance;
