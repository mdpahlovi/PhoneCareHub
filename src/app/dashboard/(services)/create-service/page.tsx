import prisma from "@/libs/prisma";
import Banner from "@/components/Common/Banner";
import CreateServiceForm from "@/components/Dashboard/CreateService/CreateServiceForm";

export const metadata = { title: "Create Service" };

export default function CreateService() {
    async function action(data: any) {
        "use server";

        try {
            await prisma.service.create({ data });
            return { success: true, message: "Service Created Successfully", redirect: "/dashboard/services" };
        } catch (error) {
            return { success: false, message: "Something went wrong!" };
        }
    }

    return (
        <>
            <Banner>Create Service</Banner>
            <CreateServiceForm action={action} />
        </>
    );
}
