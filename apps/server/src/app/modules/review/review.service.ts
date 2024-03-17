import { Review } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createReview = async (payload: Review) => {
    const result = await prisma.review.create({ data: payload });

    return result;
};

const getAllReview = async () => {
    const result = await prisma.review.findMany({ include: { user: true, service: true }, orderBy: { rating: "desc" }, take: 6 });

    return result;
};

const updateReview = async (payload: Partial<Review>, id: string) => {
    const result = await prisma.review.update({ where: { id }, data: payload });

    return result;
};

const deleteReview = async (id: string) => {
    const result = await prisma.review.delete({ where: { id } });

    return result;
};

export const ReviewService = { createReview, getAllReview, updateReview, deleteReview };
