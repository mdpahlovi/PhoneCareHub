import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ReviewService } from "./review.service";

const createReview = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.createReview(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Review Created Successfully...!",
        data: result,
    });
});

const getAllReview = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.getAllReview();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Review Retrieve Successfully...!",
        data: result,
    });
});

const updateReview = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ReviewService.updateReview(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Review Updated Successfully...!",
        data: result,
    });
});

const deleteReview = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ReviewService.deleteReview(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Review Deleted Successfully...!",
        data: result,
    });
});

export const ReviewController = { createReview, getAllReview, updateReview, deleteReview };
