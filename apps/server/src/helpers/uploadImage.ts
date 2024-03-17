import { v2 as cloudinary } from "cloudinary";
import httpStatus from "http-status";
import ApiError from "../errors/ApiError";

export default async function uploadImage(image: string, path: string) {
    const result = await cloudinary.uploader.upload(image, { folder: `PhoneCareHub/${path}` });
    if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Failed to update image");
    return result.secure_url
}
