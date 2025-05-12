import AppointmentTabs from "@/components/Appointment/AppointmentTabs";
import Banner from "@/components/Common/Banner";
import TabContext from "@/components/Common/TabContext";
import getUserId from "@/libs/getUserId";
import prisma from "@/libs/prisma";
import { Prisma } from "@prisma/client";

export const metadata = { title: "Offline Appointment" };
type PageProps = Promise<{ searchParams: { status?: string } }>;

export default async function OfflineAppointment(props: PageProps) {
    const { searchParams } = await props;
    const userId = await getUserId();

    const status = searchParams?.status ? searchParams.status : "appointments";
    const offlineAppointments = await prisma.offlineAppointment.findMany({
        where: { AND: [{ userId }, { OR: getOfflineStatus(status) }] },
        include: { service: { select: { name: true } } },
    });

    return (
        <>
            <Banner>Offline Appointment</Banner>
            <TabContext
                query="status"
                value={status}
                values={["appointments", "completed", "cancelled"]}
                tabs={[
                    <AppointmentTabs type="offline" tab={status} appointment={offlineAppointments} />,
                    <AppointmentTabs type="offline" tab={status} appointment={offlineAppointments} />,
                    <AppointmentTabs type="offline" tab={status} appointment={offlineAppointments} />,
                ]}
            />
        </>
    );
}

const getOfflineStatus = (status: string): Prisma.OfflineAppointmentWhereInput[] => {
    if (status === "appointments") {
        return [{ status: { equals: "pending" } }];
    } else if (status === "completed") {
        return [{ status: { equals: "completed" } }];
    } else {
        return [{ status: { equals: "cancelled" } }];
    }
};
