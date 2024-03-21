import Link from "next/link";
import prisma from "@/libs/prisma";
import Banner from "@/components/Common/Banner";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Button, Paper, Typography } from "@mui/material";

export default async function PaymentSuccess({ params }: { params: { id: string } }) {
    const appointment = await prisma.onlineAppointment.findUnique({
        where: { id: params?.id },
        select: { service: { select: { name: true } }, issueDescription: true, issueDetected: true, payment: true },
    });

    const { service, issueDescription, issueDetected, payment } = appointment!;
    return (
        <>
            <Banner>Payment Successful</Banner>
            <Paper elevation={1} sx={{ px: 3, py: 2.5 }}>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    textAlign="center"
                    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <TaskAltIcon color="success" sx={{ fontSize: 40 }} />
                    {service.name}
                </Typography>
                <Typography textAlign="center">{issueDescription}</Typography>
                <Typography textAlign="center" sx={{ mb: 1 }}>
                    {issueDetected.toString()}
                </Typography>
                <Typography>Payment Method: {payment?.method}</Typography>
                <Typography variant="h6" fontWeight={600}>
                    Amount: {payment?.amount}
                </Typography>
                <Typography>Transaction ID: {payment?.transactionId}</Typography>
                <Button LinkComponent={Link} href={`/dashboard/appointment/${params.id}`} sx={{ mt: 2 }}>
                    See Appointment Details
                </Button>
            </Paper>
        </>
    );
}
