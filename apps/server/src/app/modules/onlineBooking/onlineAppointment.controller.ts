import { Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { appointmentFilterableFields } from "./onlineAppointment.constant";
import { OnlineAppointmentService } from "./onlineAppointment.service";

const createOnlineAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await OnlineAppointmentService.createOnlineAppointment(req.user, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineAppointment Created Successfully...!",
        data: result,
    });
});

const getAllOnlineAppointment = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, appointmentFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await OnlineAppointmentService.getAllOnlineAppointment(filters, paginationOptions, req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineAppointment Retrieves Successfully...!",
        meta: result.meta,
        data: result.data,
    });
});

const getSingleOnlineAppointment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OnlineAppointmentService.getSingleOnlineAppointment(id, req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineAppointment Retrieve Successfully...!",
        data: result,
    });
});

const updateOnlineAppointment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OnlineAppointmentService.updateOnlineAppointment(id, req.user, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineAppointment Updated Successfully...!",
        data: result,
    });
});

const deleteOnlineAppointment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OnlineAppointmentService.deleteOnlineAppointment(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineAppointment Deleted Successfully...!",
        data: result,
    });
});

export const OnlineAppointmentController = {
    createOnlineAppointment,
    getAllOnlineAppointment,
    getSingleOnlineAppointment,
    updateOnlineAppointment,
    deleteOnlineAppointment,
};
