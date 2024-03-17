import { Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { adminFilterableFields } from "./admin.constant";
import { AdminService } from "./admin.service";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminService.createAdmin(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Created Successfully...!",
        data: result,
    });
});

const getAllAdmin = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, adminFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await AdminService.getAllAdmin(filters, paginationOptions);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Retrieves Successfully...!",
        meta: result.meta,
        data: result.data,
    });
});

const getTeamAdmin = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminService.getTeamAdmin();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Retrieves Successfully...!",
        data: result,
    });
});

const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AdminService.getSingleAdmin(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Retrieve Successfully...!",
        data: result,
    });
});

const updateAdmin = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AdminService.updateAdmin(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Updated Successfully...!",
        data: result,
    });
});

const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AdminService.deleteAdmin(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Deleted Successfully...!",
        data: result,
    });
});

export const AdminController = { createAdmin, getAllAdmin, getTeamAdmin, getSingleAdmin, updateAdmin, deleteAdmin };
