import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import config from "../../config";
import ApiError from "../../errors/ApiError";
import { verifyToken } from "../../helpers/verifyToken";

const auth =
    (...requiredRoles: string[]) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                throw new ApiError(httpStatus.UNAUTHORIZED, "You are not Authorized");
            }

            let verifiedUser = null;
            verifiedUser = await verifyToken(token, config.secret!);
            req.user = verifiedUser;

            if (requiredRoles.length && !requiredRoles.includes(verifiedUser?.role as string)) {
                throw new ApiError(httpStatus.FORBIDDEN, "Forbidden Access");
            }
            next();
        } catch (error) {
            next(error);
        }
    };

export default auth;
