import axios from "axios";
import { GenericErrorResponse } from "@/types/global";

export const BASE_URL = "https://phonecarehub.onrender.com/api/v1";
export const baseAxios = axios.create({ baseURL: BASE_URL, timeout: 60000 });

baseAxios.interceptors.response.use(
    function (res) {
        return res.data;
    },
    function (err) {
        const error: GenericErrorResponse = {
            statusCode: err?.response?.status || 500,
            message: err?.response?.data?.message || err?.message || "Something went wrong...",
            errorMessages: err?.response?.data?.errorMessages || [],
        };

        return Promise.reject(error);
    }
);

const CLOUDINARY_BASE_URL = "https://api.cloudinary.com/v1_1/dikezpkeg";
export const cloudAxios = axios.create({
    baseURL: CLOUDINARY_BASE_URL,
    headers: { "Content-Type": "multipart/form-data" },
});
