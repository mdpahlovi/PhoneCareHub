import { FAQs } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";

const createFAQ = async (payload: FAQs) => {
    const result = await prisma.fAQs.create({ data: payload });

    return result;
};
const getAllFAQ = async () => {
    const result = await prisma.fAQs.findMany({ orderBy: { serial: "asc" } });

    return result;
};
const getSingleFAQ = async (id: string) => {
    const result = await prisma.fAQs.findUnique({ where: { id } });

    if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    return result;
};
const updateFAQ = async (payload: Partial<FAQs>, id: string) => {
    const result = await prisma.fAQs.update({ where: { id }, data: payload });

    return result;
};
const deleteFAQ = async (id: string) => {
    const result = await prisma.fAQs.delete({ where: { id } });

    return result;
};

export const FAQService = { createFAQ, getAllFAQ, getSingleFAQ, updateFAQ, deleteFAQ };
