import { getServerSession } from "next-auth";
import { getAppointment } from "@/libs/fetch";
import getDateRange from "@/libs/getDateRange";
import { OnlineAppointment } from "@/types/response";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CurrentStatus from "@/components/Appointment/CurrentStatus";
import ReviewButton from "@/components/Dashboard/Components/ReviewButton";
import CancelAppointment from "@/components/Appointment/CancelAppointment";
import PaymentButton from "@/components/Dashboard/Components/PaymentButton";
import CourierButton from "@/components/Dashboard/Components/CourierButton";
import { Stack, Divider, Typography, ListItemText, List, ListItem, Box } from "@mui/material";

export const metadata = { title: "Appointment Details" };

export default async function AppointmentDetails({ params }: { params: { id: string; type: string } }) {
    const session = await getServerSession(authOptions);
    const appointment = await getAppointment(params?.id, params?.type, session?.token);
    if (!appointment?.data) throw new Error("Failed To Fetch Data");
    const { id, userId, serviceId, deviceInfo, issueDescription, status, paymentAmount, issueDetected } = appointment?.data;

    let ActionButton;
    switch (appointment?.data?.status) {
        case "pending":
            ActionButton = <CourierButton onlineAppointmentId={id} type="Shipping" />;
            break;
        case "payment":
            ActionButton = <PaymentButton onlineAppointmentId={id} amount={paymentAmount} />;
            break;
        case "received":
            ActionButton = <ReviewButton userId={userId} serviceId={serviceId} />;
            break;
        case "completed":
            ActionButton = <ReviewButton userId={userId} serviceId={serviceId} />;
            break;
        case "cancelled":
            ActionButton = <CancelAppointment type="online" id={id} />;
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
                {(appointment.data as OnlineAppointment)?.shippingAddress ? (
                    <ListItem>
                        <ListItemText primary="Shipping Address" secondary={(appointment.data as OnlineAppointment)?.shippingAddress} />
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
                    {(appointment.data as OnlineAppointment)?.deliveryDate ? (
                        <ListItem>
                            <ListItemText
                                primary="Delivery Date"
                                secondary={getDateRange((appointment.data as OnlineAppointment)?.deliveryDate)}
                            />
                        </ListItem>
                    ) : null}
                </List>
            ) : null}
        </Stack>
    );
}
