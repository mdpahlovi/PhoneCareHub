import { getServerSession } from "next-auth";
import Banner from "@/components/Common/Banner";
import { getallOnlineAppointment } from "@/libs/fetch";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export const metadata = { title: "Manage Online Appointment" };

type SearchParams = { searchParams: { page?: string; size?: string; status?: string; email?: string } };

export default async function ManageOnlineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const onlineAppointment = await getallOnlineAppointment(session?.token, size, page, searchParams?.status, {
        email: searchParams?.email,
    });

    console.log(onlineAppointment);

    return (
        <>
            <Banner>Online Appointment</Banner>
        </>
    );
}
