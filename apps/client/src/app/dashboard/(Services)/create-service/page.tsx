import prisma from "@/libs/prisma";
import Banner from "@/components/Common/Banner";
import CreateServiceForm from "@/components/Dashboard/CreateService/CreateServiceForm";

export const metadata = { title: "Create Service" };

export default function CreateService() {
    async function action(data: any) {
        "use server";

        const service = await prisma.service.create({ data });
        if (!service) return { success: false, message: "Something went wrong!" };

        return { success: true, message: "Service Created Successfully", redirect: "/dashboard/services" };
    }

    return (
        <>
            <Banner>Create Service</Banner>
            <CreateServiceForm action={action} />
        </>
    );
}
