import prisma from "@/libs/prisma";
import { notFound } from "next/navigation";
import UpdateOfflineAppointmentForm from "@/components/Appointment/UpdateOfflineAppointmentForm";

export default async function SetOfflineAppointment({ params }: { params: { id: string } }) {
    const appointment = await prisma.offlineAppointment.findUnique({ where: { id: params?.id } });
    if (!appointment) notFound();

    async function action(data: any) {
        "use server";

        try {
            await prisma.offlineAppointment.update({ where: { id: params?.id }, data });

            return {
                success: true,
                message: "Appointment Updated Successfully",
                redirect: `/dashboard/mOfflineAppointments?status=${appointment?.status}`,
            };
        } catch (error) {
            return { success: false, message: "Something went wrong!" };
        }
    }

    return <UpdateOfflineAppointmentForm appointment={appointment} action={action} />;
}
