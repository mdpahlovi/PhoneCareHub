import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { OfflineAppointment, OnlineAppointment } from "@prisma/client";
import CourierButton from "../Dashboard/Components/CourierButton";
import PaymentButton from "../Dashboard/Components/PaymentButton";
import ReviewButton from "../Dashboard/Components/ReviewButton";
import ActionButtons from "./ActionButtons";
import CancelAppointment from "./CancelAppointment";
import CurrentStatus from "./CurrentStatus";

type AppointmentTabsProps = {
    tab: string;
    type: "online" | "offline";
    appointment: ({ service: { name: string } } & OnlineAppointment)[] | ({ service: { name: string } } & OfflineAppointment)[];
};

export default function AppointmentTabs({ type, tab, appointment }: AppointmentTabsProps) {
    return (
        <Grid container columns={{ xs: 4, md: 8 }} spacing={3}>
            {appointment.map(({ id, userId, serviceId, service, deviceInfo, issueDescription, status }) => (
                <Grid size={{ xs: 4 }} key={id}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" gap={3}>
                                <Typography>{service.name}</Typography>
                                {status === "pending" ? <CancelAppointment id={id} type={type} /> : null}
                            </Stack>
                            <Typography variant="h5" fontWeight={600}>
                                {deviceInfo}
                            </Typography>
                            <Typography mt={1} color="text.secondary">
                                {issueDescription}
                            </Typography>
                            {tab === "appointments" ? <CurrentStatus type={type} status={status} completed={false} /> : ""}
                            {status === "returned" ? (
                                <Typography mt={1} mb={-1} color="text.secondary">
                                    Courier Name:
                                    <br /> Product Id:
                                    <br /> Receipt Date:
                                </Typography>
                            ) : (
                                ""
                            )}
                            <ActionButtons id={id} type={type}>
                                {type === "online" && status === "pending" ? (
                                    <CourierButton onlineAppointmentId={id} type="Shipping" />
                                ) : null}
                                {type === "online" && status === "payment" ? <PaymentButton onlineAppointmentId={id} /> : null}
                                {status === "received" || status === "completed" ? (
                                    <ReviewButton userId={userId} serviceId={serviceId} />
                                ) : null}
                            </ActionButtons>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
