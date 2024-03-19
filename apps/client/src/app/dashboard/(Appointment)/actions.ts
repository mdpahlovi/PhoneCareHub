"use server";

import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function handleCancel(id: string, type: "online" | "offline") {
    if (type === "online") {
        await prisma.onlineAppointment.update({ where: { id }, data: { status: "cancelled" } });
        revalidatePath("/onlineAppointments");
    } else {
        await prisma.offlineAppointment.update({ where: { id }, data: { status: "cancelled" } });
        revalidatePath("/offlineAppointments");
    }
}

export async function handleReview(isEdit: boolean, data: any, id?: string) {
    isEdit ? await prisma.review.update({ where: { id }, data }) : await prisma.review.create({ data });
}

export async function handleCourier(type: string, id: string, data: any) {
    type === "Shipping"
        ? await prisma.onlineAppointment.update({
              where: { id },
              data: { status: "shipping", deviceShipping: { create: { ...data } } },
          })
        : await prisma.onlineAppointment.update({
              where: { id },
              data: { status: "returned", deviceReturned: { create: { ...data } } },
          });
}
