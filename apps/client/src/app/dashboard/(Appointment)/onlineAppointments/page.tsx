/* eslint-disable react/jsx-key */
import prisma from "@/libs/prisma";
import { Prisma } from "@prisma/client";
import getUserId from "@/libs/getUserId";
import Banner from "@/components/Common/Banner";
import TabContext from "@/components/Common/TabContext";
import AppointmentTabs from "@/components/Appointment/AppointmentTabs";

export const metadata = { title: "Online Appointment" };

export default async function OnlineAppointment({ searchParams }: { searchParams: { status?: string } }) {
    const userId = await getUserId();

    const status = searchParams?.status ? searchParams.status : "appointments";
    const onlineAppointments = await prisma.onlineAppointment.findMany({
        where: { AND: [{ userId }, { OR: getOnlineStatus(status) }] },
        include: { service: { select: { name: true } } },
    });

    return (
        <>
            <Banner>Online Appointment</Banner>
            <TabContext
                query="status"
                value={status}
                values={["appointments", "completed", "cancelled"]}
                tabs={[
                    <AppointmentTabs type="online" tab={status} appointment={onlineAppointments} />,
                    <AppointmentTabs type="online" tab={status} appointment={onlineAppointments} />,
                    <AppointmentTabs type="online" tab={status} appointment={onlineAppointments} />,
                ]}
            />
        </>
    );
}

const getOnlineStatus = (status: string): Prisma.OnlineAppointmentWhereInput[] => {
    if (status === "appointments") {
        return [
            { status: { equals: "pending" } },
            { status: { equals: "shipping" } },
            { status: { equals: "receited" } },
            { status: { equals: "reviewing" } },
            { status: { equals: "payment" } },
            { status: { equals: "repairing" } },
        ];
    } else if (status === "completed") {
        return [{ status: { equals: "returned" } }, { status: { equals: "received" } }];
    } else {
        return [{ status: { equals: "cancelled" } }];
    }
};
