import { getServerSession } from "next-auth";
import { getOfflineAppointment } from "@/libs/fetch";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import UpdateOfflineAppointmentForm from "@/components/Appointment/UpdateOfflineAppointmentForm";

export default async function SetOfflineAppointment({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const appointment = await getOfflineAppointment(params?.id, session?.token);

    return <UpdateOfflineAppointmentForm appointment={appointment?.data!} />;
}
