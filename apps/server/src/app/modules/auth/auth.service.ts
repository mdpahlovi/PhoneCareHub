import { Provider } from "@prisma/client";
import { compare, hash } from "bcrypt";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { exclude } from "../../../helpers/exclude";
import prisma from "../../../shared/prisma";

type SignupUserPayload = { name: string; email: string; password: string };
type SigninUserPayload = { email: string; password: string };
type SocialSignin = { name: string; image: string; email: string; provider: Provider };
const select = { id: true, name: true, role: true, image: true, email: true, password: true };

const signupUser = async (payload: SignupUserPayload) => {
    const isExist = await prisma.user.findUnique({ where: { email: payload.email } });
    if (isExist) {
        throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, "User Already Exists...!");
    }

    payload.password = await hash(payload.password, 12);
    const user = await prisma.user.create({ data: { ...payload } });
    const result = exclude(user, ["password"]);

    return result;
};

const signinUser = async (payload: SigninUserPayload) => {
    const { email, password } = payload;

    let isUserExist;
    const user = await prisma.user.findUnique({ where: { email }, select });
    const admin = await prisma.admin.findUnique({ where: { email }, select });

    if (!user && !admin) throw new ApiError(httpStatus.NOT_FOUND, "User doesn't exist...");
    if (user || admin) isUserExist = admin || user;

    if (!isUserExist?.password || !(await compare(password, isUserExist.password))) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Password doesn't match...!");
    }

    const result = exclude(isUserExist, ["password"]);
    return result;
};

const socialSignin = async (payload: SocialSignin) => {
    let user = await prisma.user.findUnique({ where: { email: payload.email } });
    if (!user) user = await prisma.user.create({ data: { ...payload } });

    return user;
};

export const AuthService = { signupUser, signinUser, socialSignin };
