import { Prisma, Service } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IOptions, calculateOptions } from "../../../helpers/paginationHelper";
import { searchQuery } from "../../../helpers/searchQuery";
import uploadImage from "../../../helpers/uploadImage";
import prisma from "../../../shared/prisma";
import { serviceSearchableFields } from "./service.constant";

const createService = async (payload: Service) => {
    if (payload.image) payload.image = await uploadImage(payload.image, "Service");

    const result = await prisma.service.create({ data: payload });
    return result;
};
const getAllService = async (filters: { search?: string }, options: IOptions) => {
    const { search } = filters;
    const { page, size, skip, sortBy, sortOrder } = calculateOptions(options);

    const andConditions = [];
    if (search) andConditions.push(searchQuery(search, serviceSearchableFields));

    const where: Prisma.ServiceWhereInput = { AND: andConditions };
    const orderBy: Prisma.ServiceOrderByWithRelationInput = { [sortBy]: sortOrder };

    const result = await prisma.service.findMany({ where, include: { reviews: true }, skip, take: size, orderBy });
    const total = await prisma.service.count({ where });

    return { meta: { page, size, total, totalPage: Math.ceil(total / size) }, data: result };
};
const getSingleService = async (id: string) => {
    const result = await prisma.service.findUnique({ where: { id }, include: { reviews: true } });

    if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    return result;
};
const updateService = async (payload: Partial<Service>, id: string) => {
    if (payload.image) payload.image = await uploadImage(payload.image, "Service");

    const result = await prisma.service.update({ where: { id }, data: payload });
    return result;
};
const deleteService = async (id: string) => {
    const result = await prisma.service.delete({ where: { id } });

    return result;
};

export const ServiceService = { createService, getAllService, getSingleService, updateService, deleteService };
