"use client";

import CurrentStatus from "./CurrentStatus";
import ActionButtons from "./ActionButtons";
import { useSearchParams } from "next/navigation";
import CancelAppointment from "./CancelAppointment";
import { AppointmentTabsProps } from "@/types/global";
import CourierButton from "../Dashboard/Components/CourierButton";
import PaymentButton from "../Dashboard/Components/PaymentButton";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import ReviewButton from "../Dashboard/Components/ReviewButton";

export default function AppointmentTabs({ type, appointment }: AppointmentTabsProps) {
    const searchParams = useSearchParams();
    const tab = searchParams.get("status") ? searchParams.get("status") : "appointments";

    return (
        <Grid container columns={{ xs: 4, md: 8 }} spacing={3}>
            {appointment.map(({ id, userId, serviceId, service, deviceInfo, issueDescription, status, paymentAmount }) => (
                <Grid item key={id} xs={4}>
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
                                <>
                                    <Typography mt={1}>Courier Name:</Typography>
                                    <Typography mt={1}>Product Id:</Typography>
                                    <Typography mt={1} mb={-1}>
                                        Receipt Date:
                                    </Typography>
                                </>
                            ) : (
                                ""
                            )}
                        </CardContent>
                        <ActionButtons id={id} type={type}>
                            {type === "online" && status === "pending" ? <CourierButton onlineAppointmentId={id} type="Shipping" /> : null}
                            {type === "online" && status === "payment" ? (
                                <PaymentButton amount={paymentAmount} onlineAppointmentId={id} />
                            ) : null}
                            {status === "received" || status === "completed" ? (
                                <ReviewButton userId={userId} serviceId={serviceId} />
                            ) : null}
                        </ActionButtons>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
