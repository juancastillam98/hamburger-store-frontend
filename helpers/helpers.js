import axios from "axios";

export const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}`
});
export const axiosCloudinaryClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}`
});