/* eslint-disable react/jsx-key */
import prisma from "@/libs/prisma";
import { Container } from "@mui/material";
import { notFound } from "next/navigation";
import Banner from "@/components/Common/Banner";
import TabContext from "@/components/Common/TabContext";
import OnlineAppointmentForm from "@/components/Appointment/OnlineAppointmentForm";
import OfflineAppointmentForm from "@/components/Appointment/OfflineAppointmentForm";

export default async function Appointment({ params, searchParams }: { params: { id: string }; searchParams: { type: string } }) {
    const value = searchParams?.type ? searchParams.type : "online";
    const service = await prisma.service.findUnique({ where: { id: params?.id }, select: { id: true, name: true } });
    if (!service) notFound();

    return (
        <>
            <Banner>{service.name}</Banner>
            <Container sx={{ my: 5 }}>
                <TabContext
                    query="type"
                    value={value}
                    values={["online", "offline"]}
                    tabs={[<OnlineAppointmentForm serviceId={service.id} />, <OfflineAppointmentForm serviceId={service.id} />]}
                />
            </Container>
        </>
    );
}
