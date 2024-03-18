import { getServerSession } from "next-auth";
import { getOnlineAppointment } from "@/libs/fetch";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import UpdateOnlineAppointmentForm from "@/components/Appointment/UpdateOnlineAppointmentForm";

export default async function SetOnlineAppointment({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const appointment = await getOnlineAppointment(params?.id, session?.token);

    return <UpdateOnlineAppointmentForm appointment={appointment?.data!} />;
}
