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
