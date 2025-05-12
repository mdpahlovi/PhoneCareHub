import AppointmentTabs from "@/components/Appointment/AppointmentTabs";
import Banner from "@/components/Common/Banner";
import TabContext from "@/components/Common/TabContext";
import getUserId from "@/libs/getUserId";
import prisma from "@/libs/prisma";
import { Prisma } from "@prisma/client";

export const metadata = { title: "Online Appointment" };
type PageProps = { searchParams: Promise<{ status?: string }> };

export default async function OnlineAppointment(props: PageProps) {
    const searchParams = await props.searchParams;

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
                    <AppointmentTabs key="appointments" type="online" tab={status} appointment={onlineAppointments} />,
                    <AppointmentTabs key="completed" type="online" tab={status} appointment={onlineAppointments} />,
                    <AppointmentTabs key="cancelled" type="online" tab={status} appointment={onlineAppointments} />,
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
