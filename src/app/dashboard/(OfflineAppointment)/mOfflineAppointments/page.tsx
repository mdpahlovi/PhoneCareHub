import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Banner from "@/components/Common/Banner";
import { getallOfflineAppointment } from "@/libs/fetch";
import { getServerSession } from "next-auth";

export const metadata = { title: "Manage Offline Appointment" };

type SearchParams = {
    searchParams: { page?: string; size?: string; status?: string; email?: string; appointmentDate?: string };
};

export default async function ManageOfflineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const offlineAppointment = await getallOfflineAppointment(session?.token, size, page, searchParams?.status, {
        email: searchParams?.email,
        appointmentDate: searchParams?.appointmentDate,
    });

    console.log(offlineAppointment);

    return (
        <>
            <Banner>Offline Appointment</Banner>
        </>
    );
}
