import { Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { blogFilterableFields } from "./blog.constant";
import { BlogService } from "./blog.service";

const createBlog = catchAsync(async (req: Request, res: Response) => {
    const result = await BlogService.createBlog(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog Created Successfully...!",
        data: result,
    });
});

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, blogFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await BlogService.getAllBlog(filters, paginationOptions);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog Retrieves Successfully...!",
        meta: result.meta,
        data: result.data,
    });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BlogService.getSingleBlog(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog Retrieve Successfully...!",
        data: result,
    });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BlogService.updateBlog(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog Updated Successfully...!",
        data: result,
    });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BlogService.deleteBlog(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog Deleted Successfully...!",
        data: result,
    });
});

export const BlogController = { createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog };
