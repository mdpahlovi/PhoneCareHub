import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.service";

const signupUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.signupUser(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User Created Successfully...!",
        data: result,
    });
});

const signinUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.signinUser(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User Signin Successfully...!",
        data: result,
    });
});

const socialSignin = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.socialSignin(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User Signin Successfully...!",
        data: result,
    });
});

export const AuthController = { signupUser, signinUser, socialSignin };
