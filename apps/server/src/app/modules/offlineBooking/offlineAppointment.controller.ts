import { Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { appointmentFilterableFields } from "./offlineAppointment.constant";
import { OfflineAppointmentService } from "./offlineAppointment.service";

const createOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await OfflineAppointmentService.createOfflineAppointment(req.user, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Created Successfully...!",
        data: result,
    });
});

const getAllOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, appointmentFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await OfflineAppointmentService.getAllOfflineAppointment(filters, paginationOptions, req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Retrieves Successfully...!",
        meta: result.meta,
        data: result.data,
    });
});

const getSingleOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfflineAppointmentService.getSingleOfflineAppointment(id, req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Retrieve Successfully...!",
        data: result,
    });
});

const updateOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfflineAppointmentService.updateOfflineAppointment(id, req.user, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Updated Successfully...!",
        data: result,
    });
});

const deleteOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfflineAppointmentService.deleteOfflineAppointment(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Deleted Successfully...!",
        data: result,
    });
});

export const OfflineAppointmentController = {
    createOfflineAppointment,
    getAllOfflineAppointment,
    getSingleOfflineAppointment,
    updateOfflineAppointment,
    deleteOfflineAppointment,
};
