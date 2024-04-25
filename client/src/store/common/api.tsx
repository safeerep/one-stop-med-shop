import axios from "axios";
import { BASE_URL } from "@/constants";

export const URL: string = BASE_URL;

const axiosInstance = axios.create({
    baseURL: URL,
    withCredentials: true
})

axiosInstance.interceptors.response.use((response) => {
    return response.data;
})

const config = {
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
}

export const commonRequest = async (method: string, url: string, data: object,) => {
    const requestConfig = {
        method,
        url,
        data,
        config
    }

    try {
        const response = axiosInstance(requestConfig)
        return response;
    } catch (error) {
        console.log(`hey safee...  something went wrong ${error}`);
        return error;
    }
}