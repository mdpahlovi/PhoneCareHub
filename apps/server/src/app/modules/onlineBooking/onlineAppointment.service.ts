/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { OnlineAppointment, Prisma } from "@prisma/client";
import httpStatus from "http-status";
import { JWTPayload } from "jose";
import ApiError from "../../../errors/ApiError";
import { appointmentSearchQuery } from "../../../helpers/appointmentSearchQuery";
import { IOptions, calculateOptions } from "../../../helpers/paginationHelper";
import prisma from "../../../shared/prisma";
import { AppointmentFilter, appointmentSearchableFields } from "./onlineAppointment.constant";

type Payload = { serviceId: string; deviceInfo: string; issueDescription: string; shippingAddress: string };

const createOnlineAppointment = async (user: JWTPayload, payload: Payload) => {
    const result = await prisma.onlineAppointment.create({ data: { userId: user?.sub!, ...payload } });

    return result;
};

const getAllOnlineAppointment = async (filter: AppointmentFilter, options: IOptions, user: JWTPayload) => {
    const { search, status } = filter;
    const { page, size, skip, sortBy, sortOrder } = calculateOptions(options);

    const andConditions: any[] = [];
    if (user.role === "user") andConditions.push({ userId: user?.sub });

    if (search) andConditions.push(appointmentSearchQuery(search, appointmentSearchableFields));

    if (status) {
        if (Array.isArray(status)) {
            andConditions.push({ OR: status.map(s => ({ status: { equals: s } })) });
        } else {
            andConditions.push({ status: { equals: status } });
        }
    }

    const where: Prisma.OnlineAppointmentWhereInput = { AND: andConditions };
    const orderBy: Prisma.OnlineAppointmentOrderByWithRelationInput = { [sortBy]: sortOrder };

    const result = await prisma.onlineAppointment.findMany({
        where,
        include: { user: true, service: true, payment: true, deviceShipping: true, deviceReturned: true },
        skip,
        take: size,
        orderBy,
    });
    const total = await prisma.onlineAppointment.count({ where });

    return { meta: { page, size, total, totalPage: Math.ceil(total / size) }, data: result };
};

const getSingleOnlineAppointment = async (id: string, user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.onlineAppointment.findUnique({
            where: { id, userId: user?.sub },
            include: { user: true, service: { include: { reviews: true } }, payment: true, deviceShipping: true, deviceReturned: true },
        });
    } else {
        result = await prisma.onlineAppointment.findUnique({
            where: { id },
            include: { user: true, service: { include: { reviews: true } }, payment: true, deviceShipping: true, deviceReturned: true },
        });
    }

    if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    return result;
};

const updateOnlineAppointment = async (id: string, user: JWTPayload, payload: Partial<OnlineAppointment>) => {
    let result;
    if (user.role === "user") {
        result = await prisma.onlineAppointment.update({ where: { id }, data: { status: "cancelled" } });
    } else {
        result = await prisma.onlineAppointment.update({ where: { id }, data: payload });
    }

    return result;
};

const deleteOnlineAppointment = async (id: string) => {
    const result = await prisma.onlineAppointment.delete({ where: { id } });

    return result;
};

export const OnlineAppointmentService = {
    createOnlineAppointment,
    getAllOnlineAppointment,
    getSingleOnlineAppointment,
    updateOnlineAppointment,
    deleteOnlineAppointment,
};
