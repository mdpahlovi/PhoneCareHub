import { Suspense } from "react";
import { Stack } from "@mui/material";
import { getStatus } from "@/exports/constant";
import Banner from "@/components/Common/Banner";
import SearchField from "@/components/Common/SearchField";
import StatusFilter from "@/components/Dashboard/Components/StatusFilter";

export default function MOfflineAppointmentLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner>Offline Appointment</Banner>
            <Stack mb={3} direction={{ xs: "column", sm: "row" }} alignItems="end" justifyContent="end" gap={3}>
                <Suspense>
                    <SearchField />
                </Suspense>
                <Suspense>
                    <StatusFilter items={[...getStatus("offline", true), "cancelled"]} />
                </Suspense>
            </Stack>
            {children}
        </>
    );
}
