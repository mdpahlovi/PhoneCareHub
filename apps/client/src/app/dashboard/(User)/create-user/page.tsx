import prisma from "@/libs/prisma";
import Banner from "@/components/Common/Banner";
import CreateUserForm from "@/components/Dashboard/CreateUserOrAdmin/CreateUserOrAdminForm";

export const metadata = { title: "Create User" };

export default function CreateUser() {
    const action = async ({ c_password, ...data }: any) => {
        "use server";

        const isExist = await prisma.user.findUnique({ where: { email: data.email } });
        if (isExist) return { success: false, message: "User already exist!" };

        const user = await prisma.user.create({ data });
        if (!user) return { success: false, message: "Something went wrong!" };

        return { success: true, message: "User Created Successfully", redirect: "/dashboard/users" };
    };

    return (
        <>
            <Banner>Create User</Banner>
            <CreateUserForm path="user" action={action} />
        </>
    );
}
