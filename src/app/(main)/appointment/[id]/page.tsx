import OfflineAppointmentForm from "@/components/Appointment/OfflineAppointmentForm";
import OnlineAppointmentForm from "@/components/Appointment/OnlineAppointmentForm";
import Banner from "@/components/Common/Banner";
import TabContext from "@/components/Common/TabContext";
import prisma from "@/libs/prisma";
import { Container } from "@mui/material";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ id: string }>; searchParams: Promise<{ type: string }> };

export default async function Appointment(props: PageProps) {
    const params = await props.params;
    const searchParams = await props.searchParams;

    const value = searchParams?.type ? searchParams.type : "online";
    const service = await prisma.service.findUnique({ where: { id: params?.id }, select: { id: true, name: true } });
    if (!service) notFound();

    async function action(data: any) {
        "use server";

        try {
            if (value === "online") {
                await prisma.onlineAppointment.create({ data: { ...data, serviceId: service?.id } });
                return { success: true, message: "Service Created Successfully", redirect: "/dashboard/onlineAppointments" };
            } else {
                await prisma.offlineAppointment.create({ data: { ...data, serviceId: service?.id } });
                return { success: true, message: "Service Created Successfully", redirect: "/dashboard/offlineAppointments" };
            }
        } catch (error) {
            return { success: false, message: "Something went wrong!" };
        }
    }

    return (
        <>
            <Banner>{service.name}</Banner>
            <Container sx={{ my: 5 }}>
                <TabContext
                    query="type"
                    value={value}
                    values={["online", "offline"]}
                    tabs={[
                        <OnlineAppointmentForm key="online" action={action} />,
                        <OfflineAppointmentForm key="offline" action={action} />,
                    ]}
                />
            </Container>
        </>
    );
}
