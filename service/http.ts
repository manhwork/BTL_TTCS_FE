import axios, { AxiosInstance } from "axios";

// Tạo instance Axios với cấu hình mặc định
const http: AxiosInstance = axios.create({
    baseURL: "https://book-tour-khaki.vercel.app",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default http;

export interface ResList {
    hits?: any[];
    pagination?: {
        totalRows?: number;
        totalPages?: number;
    };
}
