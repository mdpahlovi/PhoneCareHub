"use server";

import { hash } from "bcrypt";
import prisma from "@/libs/prisma";
import { DeletePath } from "@/types";
import { revalidatePath, revalidateTag } from "next/cache";

export async function deleteAction(id: string, path: DeletePath) {
    switch (path) {
        case "service":
            await prisma.service.delete({ where: { id } });
            revalidatePath("/dashboard/(services)/services/page", "page");
            break;
        case "onlineAppointment":
            await prisma.onlineAppointment.delete({ where: { id } });
            revalidatePath("/dashboard/(appointment)/mOfflineAppointments/(main)/page", "page");
            break;
        case "offlineAppointment":
            await prisma.offlineAppointment.delete({ where: { id } });
            revalidatePath("/dashboard/(appointment)/mOnlineAppointments/(main)/page", "page");
            break;
        case "deviceShipping":
            await prisma.deviceShipping.delete({ where: { id } });

            break;
        case "payment":
            await prisma.payment.delete({ where: { id } });

            break;
        case "deviceReturned":
            await prisma.deviceReturned.delete({ where: { id } });

            break;
        case "review":
            await prisma.review.delete({ where: { id } });

            break;
        case "user":
            await prisma.user.delete({ where: { id } });
            revalidatePath("/dashboard/(user)/users/page", "page");
            break;
        case "admin":
            await prisma.admin.delete({ where: { id } });
            revalidatePath("/dashboard/(admin)/admins/page", "page");
            break;
        case "blog":
            await prisma.blog.delete({ where: { id } });
            revalidatePath("/dashboard/(blog)/blogs/page", "page");
            break;
        case "faq":
            await prisma.fAQs.delete({ where: { id } });
            revalidateTag("faqs");
            break;
    }
}

export async function changePasswordAction(id: string, password: string, path: "user" | "admin") {
    switch (path) {
        case "user":
            await prisma.user.update({ where: { id }, data: { password: await hash(password, 12) } });
        case "admin":
            await prisma.admin.update({ where: { id }, data: { password: await hash(password, 12) } });
    }
}
