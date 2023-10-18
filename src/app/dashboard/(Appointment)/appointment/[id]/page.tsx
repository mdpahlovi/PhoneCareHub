import { getServerSession } from "next-auth";
import getDateRange from "@/libs/getDateRange";
import { getOnlineAppointment } from "@/libs/fetch";
import PaymentButton from "@/components/Appointment/PaymentButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CancelAppointment from "@/components/Appointment/CancelAppointment";
import { Chip, Button, Stack, Divider, Typography, ListItemText, List, ListItem, Box } from "@mui/material";

export const metadata = { title: "Appointment Details" };

export default async function AppointmentDetails({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const appointment = await getOnlineAppointment(params.id, session?.token);

    let ActionButton;
    switch (appointment?.data?.status) {
        case "payment":
            ActionButton = (
                <PaymentButton
                    onlineAppointmentId={appointment?.data?.id}
                    amount={appointment?.data?.paymentAmount}
                    status={appointment?.data?.status}
                />
            );
            break;
        case "servicing":
            ActionButton = (
                <Button color="success" size="small">
                    Servicing
                </Button>
            );
            break;
        case "completed":
            ActionButton = (
                <Button color="success" size="small">
                    Completed
                </Button>
            );
            break;
        default:
            ActionButton = <CancelAppointment type="online" id={appointment?.data?.id!} />;
            break;
    }
    const status = appointment?.data?.status;
    const dateRange = getDateRange(appointment?.data?.deliveryDate!);

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
                    <ListItemText primary="Device Info" secondary={appointment?.data?.deviceInfo} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Issue Description" secondary={appointment?.data?.issueDescription} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Shipping Address" secondary={appointment?.data?.shippingAddress} />
                </ListItem>
            </List>
            <Divider variant="middle" sx={{ mb: 2.5 }} />
            <Typography mb={1.5}>Current Status</Typography>
            <Stack direction="row" gap={1}>
                {["pending", "reviewing", "payment", "servicing", "completed"].map((status, idx) => (
                    <Chip
                        key={idx}
                        label={status.charAt(0).toUpperCase() + status.slice(1)}
                        color={appointment.data?.status === status ? "primary" : "default"}
                    />
                ))}
            </Stack>
            {status === "payment" || status === "servicing" || status === "completed" ? (
                <List>
                    <ListItem>
                        <ListItemText primary="Payment Amount" secondary={appointment?.data?.deviceInfo} />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Issue Didected"
                            secondary={
                                <Box>
                                    {appointment?.data?.issueDidected.map((issue, idx) => (
                                        <ListItemText key={idx} secondary={issue} />
                                    ))}
                                </Box>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Delivery Date" secondary={dateRange} />
                    </ListItem>
                </List>
            ) : null}
        </Stack>
    );
}
