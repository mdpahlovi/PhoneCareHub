import { Request, Response } from "express";
import httpStatus from "http-status";
import config from "../../../config";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { PaymentService } from "./payment.service";

const initPayment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PaymentService.initPayment(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment Init Successfully...!",
        data: result,
    });
});

const successPayment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { session_id } = req.query;
    await PaymentService.successPayment(id, session_id as string);

    res.redirect(`${config.client_url}/dashboard/payment/success/${id}`);
});

const cancelPayment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    res.redirect(`${config.client_url}/dashboard/payment/cancel/${id}`);
});

const updatePayment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PaymentService.updatePayment(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment Updated Successfully...!",
        data: result,
    });
});

const deletePayment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PaymentService.deletePayment(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment Deleted Successfully...!",
        data: result,
    });
});

export const PaymentController = { initPayment, successPayment, cancelPayment, updatePayment, deletePayment };
