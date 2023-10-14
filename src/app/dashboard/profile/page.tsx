import { getServerSession } from "next-auth";
import { getprofile } from "@/libs/fetch";
import { Admin, User } from "@/types/response";
import Banner from "@/components/Common/Banner";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import UserProfile from "@/components/Dashboard/Profile/UserProfile";
import AdminProfile from "@/components/Dashboard/Profile/AdminProfile";

export async function generateMetadata() {
    const session = await getServerSession(authOptions);
    return { title: session?.user?.name };
}

export default async function Profile() {
    const session = await getServerSession(authOptions);
    const profile = await getprofile(session?.token);

    return (
        <>
            <Banner>{session?.user?.name} Profile</Banner>
            {session?.user?.role === "user" ? (
                <UserProfile profile={profile.data as User} />
            ) : (
                <AdminProfile profile={profile.data as Admin} />
            )}
        </>
    );
}
