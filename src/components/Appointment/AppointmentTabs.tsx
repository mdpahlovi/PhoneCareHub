"use client";

import CurrentStatus from "./CurrentStatus";
import ActionButtons from "./ActionButtons";
import { useSearchParams } from "next/navigation";
import CancelAppointment from "./CancelAppointment";
import { AppointmentTabsProps } from "@/types/global";
import { Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

export default function AppointmentTabs({ type, appointment }: AppointmentTabsProps) {
    const searchParams = useSearchParams();
    const tab = searchParams.get("status") ? searchParams.get("status") : "appointments";

    return (
        <Grid container columns={{ xs: 4, md: 8 }} spacing={3}>
            {appointment.map(({ id, service, deviceInfo, issueDescription, status }, idx) => (
                <Grid item key={idx} xs={4}>
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
                        </CardContent>
                        <ActionButtons id={id} type={type}></ActionButtons>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
