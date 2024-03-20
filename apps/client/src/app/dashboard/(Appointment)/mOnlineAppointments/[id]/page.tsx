import prisma from "@/libs/prisma";
import { notFound } from "next/navigation";
import UpdateOnlineAppointmentForm from "@/components/Appointment/UpdateOnlineAppointmentForm";

export default async function SetOnlineAppointment({ params }: { params: { id: string } }) {
    const appointment = await prisma.onlineAppointment.findUnique({ where: { id: params?.id } });
    if (!appointment) notFound();

    return <UpdateOnlineAppointmentForm appointment={appointment} />;
}
