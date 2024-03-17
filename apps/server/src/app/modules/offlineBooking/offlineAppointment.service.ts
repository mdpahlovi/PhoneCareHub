/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { OfflineAppointment, Prisma } from "@prisma/client";
import httpStatus from "http-status";
import { JWTPayload } from "jose";
import ApiError from "../../../errors/ApiError";
import { appointmentSearchQuery } from "../../../helpers/appointmentSearchQuery";
import { IOptions, calculateOptions } from "../../../helpers/paginationHelper";
import prisma from "../../../shared/prisma";
import { AppointmentFilter, appointmentSearchableFields } from "./offlineAppointment.constant";

type Payload = { serviceId: string; deviceInfo: string; issueDescription: string; appointmentDate: Date };

const createOfflineAppointment = async (user: JWTPayload, payload: Payload) => {
    const result = await prisma.offlineAppointment.create({ data: { userId: user?.sub!, ...payload } });

    return result;
};

const getAllOfflineAppointment = async (filter: AppointmentFilter, options: IOptions, user: JWTPayload) => {
    const { search, status, appointmentDate } = filter;
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

    if (appointmentDate) {
        if (Array.isArray(appointmentDate)) {
            andConditions.push({ OR: appointmentDate.map(date => ({ appointmentDate: { equals: date } })) });
        } else {
            andConditions.push({ appointmentDate: { equals: new Date(appointmentDate) } });
        }
    }

    const where: Prisma.OfflineAppointmentWhereInput = { AND: andConditions };
    const orderBy: Prisma.OfflineAppointmentOrderByWithRelationInput = { [sortBy]: sortOrder };

    const result = await prisma.offlineAppointment.findMany({
        where,
        include: { user: true, service: true },
        skip,
        take: size,
        orderBy,
    });
    const total = await prisma.offlineAppointment.count({ where });

    return { meta: { page, size, total, totalPage: Math.ceil(total / size) }, data: result };
};

const getSingleOfflineAppointment = async (id: string, user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.offlineAppointment.findUnique({
            where: { id, userId: user?.sub },
            include: { user: true, service: { include: { reviews: true } } },
        });
    } else {
        result = await prisma.offlineAppointment.findUnique({
            where: { id },
            include: { user: true, service: { include: { reviews: true } } },
        });
    }

    if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    return result;
};

const updateOfflineAppointment = async (id: string, user: JWTPayload, payload: Partial<OfflineAppointment>) => {
    let result;
    if (user.role === "user") {
        result = await prisma.offlineAppointment.update({ where: { id }, data: { status: "cancelled" } });
    } else {
        result = await prisma.offlineAppointment.update({ where: { id }, data: payload });
    }

    return result;
};

const deleteOfflineAppointment = async (id: string) => {
    const result = await prisma.offlineAppointment.delete({ where: { id } });

    return result;
};

export const OfflineAppointmentService = {
    createOfflineAppointment,
    getAllOfflineAppointment,
    getSingleOfflineAppointment,
    updateOfflineAppointment,
    deleteOfflineAppointment,
};
