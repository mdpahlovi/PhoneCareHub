import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { DeviceShippingService } from "./deviceShipping.service";

const createDeviceShipping = catchAsync(async (req: Request, res: Response) => {
    const result = await DeviceShippingService.createDeviceShipping(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "DeviceShipping Created Successfully...!",
        data: result,
    });
});

const updateDeviceShipping = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DeviceShippingService.updateDeviceShipping(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "DeviceShipping Updated Successfully...!",
        data: result,
    });
});

const deleteDeviceShipping = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DeviceShippingService.deleteDeviceShipping(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "DeviceShipping Deleted Successfully...!",
        data: result,
    });
});

export const DeviceShippingController = { createDeviceShipping, updateDeviceShipping, deleteDeviceShipping };
