import prisma from "@/libs/prisma";
import getUserId from "@/libs/getUserId";
import { Admin, User } from "@prisma/client";
import { getServerSession } from "next-auth";
import Banner from "@/components/Common/Banner";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import UserProfile from "@/components/Dashboard/Profile/UserProfile";
import AdminProfile from "@/components/Dashboard/Profile/AdminProfile";
import { revalidatePath } from "next/cache";

export async function generateMetadata() {
    const session = await getServerSession(authOptions);
    return { title: session?.user?.name };
}

export default async function Profile() {
    const userId = await getUserId();
    const session = await getServerSession(authOptions);

    let profile;
    if (session?.user?.role === "user") {
        profile = await prisma.user.findUnique({ where: { id: userId } });
    } else {
        profile = await prisma.admin.findUnique({ where: { id: userId } });
    }

    async function action(data: any) {
        "use server";

        if (session?.user?.role === "user") {
            const user = await prisma.user.update({ where: { id: userId }, data });
            if (!user) return { success: false, message: "Something went wrong!" };

            revalidatePath("/dashboard/profile");
            return { success: true, message: "User Updated Successfully" };
        } else {
            const admin = await prisma.admin.update({ where: { id: userId }, data });
            if (!admin) return { success: false, message: "Something went wrong!" };

            revalidatePath("/dashboard/profile");
            return { success: true, message: "Admin Updated Successfully" };
        }
    }

    if (session?.user?.role === "user") {
        return (
            <>
                <Banner>User Profile</Banner>
                <UserProfile profile={profile as User} action={action} />
            </>
        );
    } else {
        return (
            <>
                <Banner>Admin Profile</Banner>
                <AdminProfile profile={profile as Admin} action={action} />
            </>
        );
    }
}
