import { Blog, Prisma } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IOptions, calculateOptions } from "../../../helpers/paginationHelper";
import { searchQuery } from "../../../helpers/searchQuery";
import uploadImage from "../../../helpers/uploadImage";
import prisma from "../../../shared/prisma";
import { blogSearchableFields } from "./blog.constant";

const createBlog = async (payload: Blog) => {
    if (payload.image) payload.image = await uploadImage(payload.image, "Blog");

    const result = await prisma.blog.create({ data: payload });
    return result;
};
const getAllBlog = async (filters: { search?: string }, options: IOptions) => {
    const { search } = filters;
    const { page, size, skip, sortBy, sortOrder } = calculateOptions(options);

    const andConditions = [];
    if (search) andConditions.push(searchQuery(search, blogSearchableFields));

    const where: Prisma.BlogWhereInput = { AND: andConditions };
    const orderBy: Prisma.BlogOrderByWithRelationInput = { [sortBy]: sortOrder };

    const result = await prisma.blog.findMany({ where, skip, take: size, orderBy });
    const total = await prisma.blog.count({ where });

    return { meta: { page, size, total, totalPage: Math.ceil(total / size) }, data: result };
};
const getSingleBlog = async (id: string) => {
    const result = await prisma.blog.findUnique({ where: { id } });

    if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    return result;
};
const updateBlog = async (payload: Partial<Blog>, id: string) => {
    if (payload.image) payload.image = await uploadImage(payload.image, "Blog");

    const result = await prisma.blog.update({ where: { id }, data: payload });
    return result;
};
const deleteBlog = async (id: string) => {
    const result = await prisma.blog.delete({ where: { id } });

    return result;
};

export const BlogService = { createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog };
