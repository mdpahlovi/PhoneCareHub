import { Admin, User } from "@prisma/client";
import { hash } from "bcrypt";
import httpStatus from "http-status";
import { JWTPayload } from "jose";
import ApiError from "../../../errors/ApiError";
import { exclude } from "../../../helpers/exclude";
import uploadImage from "../../../helpers/uploadImage";
import prisma from "../../../shared/prisma";

const getUserProfile = async (jwtPayload: JWTPayload | null) => {
    let user;
    if (jwtPayload!.role === "user") {
        user = await prisma.user.findUnique({ where: { id: jwtPayload?.sub } });
    } else {
        user = await prisma.admin.findUnique({ where: { id: jwtPayload?.sub } });
    }

    if (!user) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get user");
    const result = exclude(user, ["id", "password"]);
    return result;
};

const updateProfile = async (payload: User | Admin, jwtPayload: JWTPayload | null) => {
    if (payload.image) payload.image = await uploadImage(payload.image, "Profile");
    if (payload.password) payload.password = await hash(payload.password, 12);

    let user;
    if (jwtPayload!.role === "user") {
        user = await prisma.user.update({ where: { id: jwtPayload?.sub }, data: payload });
    } else {
        user = await prisma.admin.update({ where: { id: jwtPayload?.sub }, data: payload });
    }

    if (!user) throw new ApiError(httpStatus.NOT_FOUND, "Failed to update user");
    const result = exclude(user, ["id", "password"]);
    return result;
};

export const ProfileService = { getUserProfile, updateProfile };
