/* eslint-disable react/jsx-key */
import { getServerSession } from "next-auth";
import CompletedTable from "./CompletedTable";
import CancelledTable from "./CancelledTable";
import Banner from "@/components/Common/Banner";
import AllAppointmentTable from "./AllAppointmentTable";
import TabContext from "@/components/Common/TabContext";
import { getallOfflineAppointment } from "@/libs/fetch";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export const metadata = { title: "Offline Appointment" };

type SearchParams = { searchParams: { page?: string; size?: string; status?: string } };

export default async function OfflineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const status = searchParams?.status ? searchParams.status : "appointments";
    const offlineAppointment = await getallOfflineAppointment(session?.token, size, page, status, {});

    return (
        <>
            <Banner>Offline Appointment</Banner>
            <TabContext
                query="status"
                value={status}
                values={["appointments", "completed", "cancelled"]}
                tabs={[
                    <AllAppointmentTable
                        appointment={offlineAppointment?.data!}
                        total={offlineAppointment?.meta?.total!}
                        page={page}
                        size={size}
                    />,
                    <CompletedTable
                        appointment={offlineAppointment?.data!}
                        total={offlineAppointment?.meta?.total!}
                        page={page}
                        size={size}
                    />,
                    <CancelledTable
                        appointment={offlineAppointment?.data!}
                        total={offlineAppointment?.meta?.total!}
                        page={page}
                        size={size}
                    />,
                ]}
            />
        </>
    );
}
