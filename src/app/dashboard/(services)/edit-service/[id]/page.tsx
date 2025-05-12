import EditServiceForm from "@/components/Dashboard/EditService/EditServiceForm";
import prisma from "@/libs/prisma";
import { notFound } from "next/navigation";

export const metadata = { title: "Edit Service" };
type PageProps = { params: Promise<{ id: string }> };

export default async function EditService(props: PageProps) {
    const params = await props.params;

    const service = await prisma.service.findUnique({ where: { id: params?.id } });
    if (!service) notFound();

    async function action(data: any) {
        "use server";

        try {
            await prisma.service.update({ where: { id: params?.id }, data });
            return { success: true, message: "Service Updated Successfully", redirect: "/dashboard/services" };
        } catch (error) {
            return { success: false, message: "Something went wrong!" };
        }
    }

    return <EditServiceForm service={service} action={action} />;
}
