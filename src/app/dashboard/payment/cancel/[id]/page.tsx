import Link from "next/link";
import Banner from "@/components/Common/Banner";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getOnlineAppointment } from "@/libs/fetch";
import { Button, Paper, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default async function PaymentCancel({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const appointment = await getOnlineAppointment(params?.id, session?.token);

    const { service, issueDescription, issueDetected } = appointment.data!;
    return (
        <>
            <Banner>Payment Canceled</Banner>
            <Paper elevation={1} sx={{ px: 3, py: 2.5 }}>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    textAlign="center"
                    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <TaskAltIcon color="error" sx={{ fontSize: 40 }} />
                    {service.name}
                </Typography>
                <Typography textAlign="center">{issueDescription}</Typography>
                <Typography textAlign="center">{issueDetected.toString()}</Typography>
                <Button LinkComponent={Link} href={`/dashboard/appointment/${params.id}`} sx={{ mt: 2 }}>
                    See Appointment Details
                </Button>
            </Paper>
        </>
    );
}
