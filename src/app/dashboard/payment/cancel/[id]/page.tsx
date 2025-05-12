import Banner from "@/components/Common/Banner";
import prisma from "@/libs/prisma";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

type PageProps = Promise<{ params: { id: string } }>;

export default async function PaymentCancel(props: PageProps) {
    const { params } = await props;
    const appointment = await prisma.onlineAppointment.findUnique({
        where: { id: params?.id },
        select: { service: { select: { name: true } }, issueDescription: true, issueDetected: true },
    });

    const { service, issueDescription, issueDetected } = appointment!;
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
