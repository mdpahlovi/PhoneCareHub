import prisma from "@/libs/prisma";
import getUserId from "@/libs/getUserId";
import { notFound } from "next/navigation";
import getDateRange from "@/libs/getDateRange";
import CurrentStatus from "@/components/Appointment/CurrentStatus";
import ReviewComponent from "@/components/Appointment/ReviewComponent";
import ReviewButton from "@/components/Dashboard/Components/ReviewButton";
import PaymentButton from "@/components/Dashboard/Components/PaymentButton";
import CourierButton from "@/components/Dashboard/Components/CourierButton";
import { Stack, Divider, Typography, ListItemText, List, ListItem, Box } from "@mui/material";

export const metadata = { title: "Appointment Details" };
type AppointmentDetailProps = { params: { id: string }; searchParams: { type?: "online" | "offline" } };

export default async function AppointmentDetails({ params, searchParams }: AppointmentDetailProps) {
    const userId = await getUserId();

    let appointment;
    if (searchParams?.type === "online") {
        appointment = await prisma.onlineAppointment.findUnique({
            where: { id: params?.id, userId },
            include: { service: { include: { reviews: true } } },
        });
    } else {
        appointment = await prisma.offlineAppointment.findUnique({
            where: { id: params?.id, userId },
            include: { service: { include: { reviews: true } } },
        });
    }

    if (!appointment) notFound();
    const { id, serviceId, deviceInfo, issueDescription, status, paymentAmount, issueDetected, service } = appointment;

    let ActionButton;
    switch (appointment.status) {
        case "pending":
            ActionButton = <CourierButton onlineAppointmentId={id} type="Shipping" />;
            break;
        case "payment":
            ActionButton = <PaymentButton onlineAppointmentId={id} />;
            break;
        case "received":
            ActionButton = <ReviewButton userId={userId!} serviceId={serviceId} />;
            break;
        case "completed":
            ActionButton = <ReviewButton userId={userId!} serviceId={serviceId} />;
            break;
        default:
            ActionButton = null;
            break;
    }

    return (
        <Stack mx={1.5}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={3}>
                <Typography variant="h4" fontWeight={800}>
                    Appointment Details
                </Typography>
                {ActionButton}
            </Stack>
            <List>
                <ListItem>
                    <ListItemText primary="Device Info" secondary={deviceInfo} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Issue Description" secondary={issueDescription} />
                </ListItem>
                {/* @ts-ignore */}
                {appointment?.shippingAddress ? (
                    <ListItem>
                        {/* @ts-ignore */}
                        <ListItemText primary="Shipping Address" secondary={appointment?.shippingAddress} />
                    </ListItem>
                ) : null}
            </List>
            <Divider variant="middle" sx={{ mb: 2.5 }} />
            <Typography mb={1.5}>Current Status</Typography>
            <CurrentStatus status={status} completed={true} />
            {status === "payment" || status === "repairing" || status === "returned" || status === "received" || status === "completed" ? (
                <List>
                    <ListItem>
                        <ListItemText primary="Payment Amount" secondary={paymentAmount} />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Issue Detected"
                            secondary={
                                <Box>
                                    {issueDetected.map((issue, idx) => (
                                        <ListItemText key={idx} secondary={issue} />
                                    ))}
                                </Box>
                            }
                        />
                    </ListItem>
                    {/* @ts-ignore */}
                    {appointment?.deliveryDate ? (
                        <ListItem>
                            {/* @ts-ignore */}
                            <ListItemText primary="Delivery Date" secondary={getDateRange(appointment?.deliveryDate)} />
                        </ListItem>
                    ) : null}
                    {status === "received" || status === "completed" ? (
                        <ListItem>
                            <ListItemText primary="Reviews" secondary={<ReviewComponent reviews={service?.reviews} />} />
                        </ListItem>
                    ) : null}
                </List>
            ) : null}
        </Stack>
    );
}
