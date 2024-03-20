import prisma from "@/libs/prisma";
import { notFound } from "next/navigation";
import UpdateOfflineAppointmentForm from "@/components/Appointment/UpdateOfflineAppointmentForm";

export default async function SetOfflineAppointment({ params }: { params: { id: string } }) {
    const appointment = await prisma.offlineAppointment.findUnique({ where: { id: params?.id } });
    if (!appointment) notFound();

    return <UpdateOfflineAppointmentForm appointment={appointment} />;
}
