import { Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { serviceFilterableFields } from "./service.constant";
import { ServiceService } from "./service.service";

const createService = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceService.createService(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Created Successfully...!",
        data: result,
    });
});

const getAllService = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, serviceFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await ServiceService.getAllService(filters, paginationOptions);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Retrieves Successfully...!",
        meta: result.meta,
        data: result.data,
    });
});

const getSingleService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ServiceService.getSingleService(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Retrieve Successfully...!",
        data: result,
    });
});

const updateService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ServiceService.updateService(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Updated Successfully...!",
        data: result,
    });
});

const deleteService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ServiceService.deleteService(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Deleted Successfully...!",
        data: result,
    });
});

export const ServiceController = { createService, getAllService, getSingleService, updateService, deleteService };
