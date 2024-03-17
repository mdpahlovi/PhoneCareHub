import { Admin, Prisma } from "@prisma/client";
import { hash } from "bcrypt";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { exclude } from "../../../helpers/exclude";
import { IOptions, calculateOptions } from "../../../helpers/paginationHelper";
import { searchQuery } from "../../../helpers/searchQuery";
import prisma from "../../../shared/prisma";
import { adminSearchableFields } from "./admin.constant";

type CreateAdminPayload = { name: string; email: string; password: string };

const createAdmin = async (payload: CreateAdminPayload) => {
    const isExist = await prisma.admin.findUnique({ where: { email: payload.email } });
    if (isExist) {
        throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, "User Already Exists...!");
    }

    payload.password = await hash(payload.password, 12);
    const user = await prisma.admin.create({ data: { ...payload } });
    const result = exclude(user, ["password", "updatedAt"]);

    return result;
};

const getAllAdmin = async (filters: { search?: string }, options: IOptions) => {
    const { search } = filters;
    const { page, size, skip, sortBy, sortOrder } = calculateOptions(options);

    const andConditions = [];
    if (search) andConditions.push(searchQuery(search, adminSearchableFields));

    const where: Prisma.AdminWhereInput = { AND: andConditions };
    const orderBy: Prisma.AdminOrderByWithRelationInput = { [sortBy]: sortOrder };
    const admins = await prisma.admin.findMany({ where, skip, take: size, orderBy });
    const total = await prisma.admin.count({ where });

    const result = admins.map(admin => exclude(admin, ["password", "updatedAt"]));
    return { meta: { page, size, total, totalPage: Math.ceil(total / size) }, data: result };
};

const getTeamAdmin = async () => {
    const result = await prisma.admin.findMany({
        select: { image: true, name: true, title: true },
        take: 6,
        orderBy: { createdAt: "asc" },
    });

    return result;
};

const getSingleAdmin = async (id: string) => {
    const admin = await prisma.admin.findUnique({ where: { id } });

    if (!admin) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    const result = exclude(admin, ["password", "updatedAt"]);
    return result;
};

const updateAdmin = async (payload: Partial<Admin>, id: string) => {
    if (payload.password) payload.password = await hash(payload.password, 12);
    const admin = await prisma.admin.update({ where: { id }, data: payload });

    const result = exclude(admin, ["password", "updatedAt"]);
    return result;
};

const deleteAdmin = async (id: string) => {
    const admin = await prisma.admin.delete({ where: { id } });

    const result = exclude(admin, ["password", "updatedAt"]);
    return result;
};

export const AdminService = { createAdmin, getAllAdmin, getTeamAdmin, getSingleAdmin, updateAdmin, deleteAdmin };
