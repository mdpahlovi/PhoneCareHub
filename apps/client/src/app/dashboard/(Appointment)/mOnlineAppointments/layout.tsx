import { Stack } from "@mui/material";
import { getStatus } from "@/exports/constant";
import Banner from "@/components/Common/Banner";
import SearchField from "@/components/Common/SearchField";
import StatusFilter from "@/components/Dashboard/Components/StatusFilter";

export default function MOnlineAppointmentLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner>Online Appointments</Banner>
            <Stack mb={3} direction={{ xs: "column", sm: "row" }} alignItems="end" justifyContent="end" gap={3}>
                <SearchField />
                <StatusFilter items={[...getStatus("online", true), "cancelled"]} />
            </Stack>
            {children}
        </>
    );
}
