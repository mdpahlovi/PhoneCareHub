import { getServerSession } from "next-auth";
import getDateRange from "@/libs/getDateRange";
import { getOnlineAppointment } from "@/libs/fetch";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CurrentStatus from "@/components/Appointment/CurrentStatus";
import ReviewButton from "@/components/Dashboard/Components/ReviewButton";
import CancelAppointment from "@/components/Appointment/CancelAppointment";
import PaymentButton from "@/components/Dashboard/Components/PaymentButton";
import { Button, Stack, Divider, Typography, ListItemText, List, ListItem, Box } from "@mui/material";

export const metadata = { title: "Appointment Details" };

export default async function AppointmentDetails({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const appointment = await getOnlineAppointment(params.id, session?.token);
    if (!appointment?.data) throw new Error("Failed To Fetch Data");
    const { id, userId, serviceId, deviceInfo, issueDescription, shippingAddress, status, paymentAmount, issueDetected, deliveryDate } =
        appointment?.data;

    console.log(status);

    let ActionButton;
    switch (appointment?.data?.status) {
        case "pending":
            ActionButton = (
                <Button color="success" size="small">
                    Courier Button
                </Button>
            );
            break;
        case "payment":
            ActionButton = <PaymentButton onlineAppointmentId={id} amount={paymentAmount} status={status} />;
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
                <ListItem>
                    <ListItemText primary="Shipping Address" secondary={shippingAddress} />
                </ListItem>
            </List>
            <Divider variant="middle" sx={{ mb: 2.5 }} />
            <Typography mb={1.5}>Current Status</Typography>
            <CurrentStatus status={status} completed={true} />
            {status === "payment" || status === "repairing" || status === "returned" || status === "received" ? (
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
                    <ListItem>
                        <ListItemText primary="Delivery Date" secondary={getDateRange(deliveryDate)} />
                    </ListItem>
                    {status === "received" ? <ReviewButton userId={userId!} serviceId={serviceId} /> : null}
                </List>
            ) : null}
        </Stack>
    );
}
