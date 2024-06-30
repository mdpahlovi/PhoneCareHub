import prisma from "@/libs/prisma";
import { getProfile } from "@/libs/fetch";
import { revalidateTag } from "next/cache";
import { notFound } from "next/navigation";
import { Admin, User } from "@prisma/client";
import { getServerSession } from "next-auth";
import Banner from "@/components/Common/Banner";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import UserProfile from "@/components/Dashboard/Profile/UserProfile";
import AdminProfile from "@/components/Dashboard/Profile/AdminProfile";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
    const session = await getServerSession(authOptions);
    return { title: session?.user?.name };
}

export default async function Profile() {
    const profile = await getProfile();
    if (!profile || !profile?.status) notFound();

    async function action(data: any) {
        "use server";

        try {
            if (profile?.data?.role === "user") {
                await prisma.user.update({ where: { id: profile?.data?.id }, data });

                revalidateTag("profile");
                return { success: true, message: "User Updated Successfully" };
            } else {
                await prisma.admin.update({ where: { id: profile?.data?.id }, data });

                revalidateTag("profile");
                return { success: true, message: "Admin Updated Successfully" };
            }
        } catch (error) {
            return { success: false, message: "Something went wrong!" };
        }
    }

    if (profile?.data?.role === "user") {
        return (
            <>
                <Banner>User Profile</Banner>
                <UserProfile profile={profile?.data as User} action={action} />
            </>
        );
    } else {
        return (
            <>
                <Banner>Admin Profile</Banner>
                <AdminProfile profile={profile?.data as Admin} action={action} />
            </>
        );
    }
}
