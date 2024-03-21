import prisma from "@/libs/prisma";
import { notFound } from "next/navigation";
import EditServiceForm from "@/components/Dashboard/EditService/EditServiceForm";

export const metadata = { title: "Edit Service" };

export default async function EditService({ params }: { params: { id: string } }) {
    const service = await prisma.service.findUnique({ where: { id: params?.id } });
    if (!service) notFound();

    async function action(data: any) {
        "use server";

        const service = await prisma.service.update({ where: { id: params?.id }, data });
        if (!service) return { success: false, message: "Something went wrong!" };

        return { success: true, message: "Service Updated Successfully", redirect: "/dashboard/services" };
    }

    return <EditServiceForm service={service} action={action} />;
}
