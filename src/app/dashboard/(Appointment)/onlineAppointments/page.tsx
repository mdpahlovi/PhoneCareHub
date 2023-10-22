/* eslint-disable react/jsx-key */
import { getServerSession } from "next-auth";
import CompletedTable from "./CompletedTable";
import CancelledTable from "./CancelledTable";
import Banner from "@/components/Common/Banner";
import AllAppointmentTable from "./AllAppointmentTable";
import TabContext from "@/components/Common/TabContext";
import { getallOnlineAppointment } from "@/libs/fetch";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export const metadata = { title: "Offline Appointment" };

type SearchParams = { searchParams: { page?: string; size?: string; status?: string } };

export default async function OnlineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const value = searchParams?.status ? searchParams.status : "appointments";
    const onlineAppointment = await getallOnlineAppointment(session?.token, "", size, page, value);
    const pagination = { total: onlineAppointment?.meta?.total!, size, page };

    return (
        <>
            <Banner>Offline Appointment</Banner>
            <TabContext
                query="status"
                value={value}
                values={["appointments", "completed", "cancelled"]}
                tabs={[
                    <AllAppointmentTable appointment={onlineAppointment?.data!} pagination={pagination} />,
                    <CompletedTable appointment={onlineAppointment?.data!} pagination={pagination} />,
                    <CancelledTable appointment={onlineAppointment?.data!} pagination={pagination} />,
                ]}
            />
        </>
    );
}
