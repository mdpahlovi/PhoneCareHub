import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FAQService } from "./faq.service";

const createFAQ = catchAsync(async (req: Request, res: Response) => {
    const result = await FAQService.createFAQ(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "FAQ Created Successfully...!",
        data: result,
    });
});

const getAllFAQ = catchAsync(async (req: Request, res: Response) => {
    const result = await FAQService.getAllFAQ();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "FAQ Retrieves Successfully...!",
        data: result,
    });
});

const getSingleFAQ = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FAQService.getSingleFAQ(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "FAQ Retrieve Successfully...!",
        data: result,
    });
});

const updateFAQ = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FAQService.updateFAQ(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "FAQ Updated Successfully...!",
        data: result,
    });
});

const deleteFAQ = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FAQService.deleteFAQ(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "FAQ Deleted Successfully...!",
        data: result,
    });
});

export const FAQController = { createFAQ, getAllFAQ, getSingleFAQ, updateFAQ, deleteFAQ };
