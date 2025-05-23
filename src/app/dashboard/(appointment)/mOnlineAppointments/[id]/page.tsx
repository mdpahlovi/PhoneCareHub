import UpdateOnlineAppointmentForm from "@/components/Appointment/UpdateOnlineAppointmentForm";
import prisma from "@/libs/prisma";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ id: string }> };

export default async function SetOnlineAppointment(props: PageProps) {
    const params = await props.params;

    const appointment = await prisma.onlineAppointment.findUnique({ where: { id: params?.id } });
    if (!appointment) notFound();

    async function action(data: any) {
        "use server";

        try {
            await prisma.onlineAppointment.update({ where: { id: params?.id }, data });

            return {
                success: true,
                message: "Appointment Updated Successfully",
                redirect: `/dashboard/mOnlineAppointments?status=${appointment?.status}`,
            };
        } catch (error) {
            return { success: false, message: "Something went wrong!" };
        }
    }

    return <UpdateOnlineAppointmentForm appointment={appointment} action={action} />;
}
