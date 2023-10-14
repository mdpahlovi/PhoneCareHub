import axios from "axios";
import { GenericErrorResponse, GenericResponse } from "@/types/global";

export const BASE_URL = "http://localhost:5000/api/v1";
export const baseAxios = axios.create({ baseURL: BASE_URL });

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
