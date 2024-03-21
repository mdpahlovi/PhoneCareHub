import prisma from "@/libs/prisma";
import Banner from "@/components/Common/Banner";
import CreateAdminForm from "@/components/Dashboard/CreateUserOrAdmin/CreateUserOrAdminForm";

export const metadata = { title: "Create Admin" };

export default function CreateAdmin() {
    const action = async ({ c_password, ...data }: any) => {
        "use server";

        const isExist = await prisma.admin.findUnique({ where: { email: data.email } });
        if (isExist) return { success: false, message: "Admin already exist!" };

        const admin = await prisma.admin.create({ data });
        if (!admin) return { success: false, message: "Something went wrong!" };

        return { success: true, message: "Admin Created Successfully", redirect: "/dashboard/admins" };
    };

    return (
        <>
            <Banner>Create Admin</Banner>
            <CreateAdminForm path="admin" action={action} />
        </>
    );
}
