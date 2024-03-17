import { Prisma, User } from "@prisma/client";
import { hash } from "bcrypt";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { exclude } from "../../../helpers/exclude";
import { IOptions, calculateOptions } from "../../../helpers/paginationHelper";
import { searchQuery } from "../../../helpers/searchQuery";
import prisma from "../../../shared/prisma";
import { userSearchableFields } from "./user.constant";

type CreateUserPayload = { name: string; email: string; password: string };

const createUser = async (payload: CreateUserPayload) => {
    const isExist = await prisma.user.findUnique({ where: { email: payload.email } });
    if (isExist) {
        throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, "User Already Exists...!");
    }

    payload.password = await hash(payload.password, 12);
    const user = await prisma.user.create({ data: { ...payload } });
    const result = exclude(user, ["password", "updatedAt"]);

    return result;
};

const getAllUser = async (filters: { search?: string }, options: IOptions) => {
    const { search } = filters;
    const { page, size, skip, sortBy, sortOrder } = calculateOptions(options);

    const andConditions = [];
    if (search) andConditions.push(searchQuery(search, userSearchableFields));

    const where: Prisma.UserWhereInput = { AND: andConditions };
    const orderBy: Prisma.UserOrderByWithRelationInput = { [sortBy]: sortOrder };
    const users = await prisma.user.findMany({ where, skip, take: size, orderBy });
    const total = await prisma.user.count({ where });

    const result = users.map(user => exclude(user, ["password", "provider", "updatedAt"]));
    return { meta: { page, size, total, totalPage: Math.ceil(total / size) }, data: result };
};
const getSingleUser = async (id: string) => {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    const result = exclude(user, ["password", "provider", "updatedAt"]);
    return result;
};
const updateUser = async (payload: Partial<User>, id: string) => {
    if (payload.password) payload.password = await hash(payload.password, 12);
    const user = await prisma.user.update({ where: { id }, data: payload });

    const result = exclude(user, ["password", "provider", "updatedAt"]);
    return result;
};
const deleteUser = async (id: string) => {
    const user = await prisma.user.delete({ where: { id } });

    const result = exclude(user, ["password", "provider", "updatedAt"]);
    return result;
};

export const UserService = { createUser, getAllUser, getSingleUser, updateUser, deleteUser };
