/* eslint-disable react/jsx-key */

import { getServerSession } from "next-auth";
import Banner from "@/components/Common/Banner";
import { getallOnlineAppointment } from "@/libs/fetch";
import TabContext from "@/components/Common/TabContext";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import AppointmentTabs from "@/components/Appointment/AppointmentTabs";

export const metadata = { title: "Online Appointment" };

type SearchParams = { searchParams: { page?: string; size?: string; status?: string } };

export default async function OnlineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const status = searchParams?.status ? searchParams.status : "appointments";
    const onlineAppointment = await getallOnlineAppointment(session?.token, "", size, page, status);
    const pagination = { total: onlineAppointment?.meta?.total!, size, page };

    return (
        <>
            <Banner>Online Appointment</Banner>
            <TabContext
                query="status"
                value={status}
                values={["appointments", "received", "cancelled"]}
                tabs={[
                    <AppointmentTabs type="online" appointment={onlineAppointment.data!} pagination={pagination} />,
                    <AppointmentTabs type="online" appointment={onlineAppointment.data!} pagination={pagination} />,
                    <AppointmentTabs type="online" appointment={onlineAppointment.data!} pagination={pagination} />,
                ]}
            />
        </>
    );
}
