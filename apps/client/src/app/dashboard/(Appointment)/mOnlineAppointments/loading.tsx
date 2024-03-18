import { columns } from "./page";
import { Stack } from "@mui/material";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import SearchField from "@/components/Common/SearchField";
import StatusFilter from "@/components/Dashboard/Components/StatusFilter";
import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";

export default function MOnlineAppointmentLoading() {
    return (
        <>
            <Banner>Online Appointment</Banner>
            <Stack mb={3} direction={{ xs: "column", sm: "row" }} alignItems="end" justifyContent="end" gap={3}>
                <SearchField search="" />
                <StatusFilter status="pending" items={["pending"]} />
            </Stack>
            <Table columns={columns}>
                <TableBody>
                    {[...Array(5)].map((p, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <Skeleton variant="rectangular" width={40} height={40} sx={{ borderRadius: 2 }} />
                                <Skeleton variant="text" width={96} height={20} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="text" width={192} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="text" width={128} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="text" width={128} sx={{ ml: "auto" }} />
                            </TableCell>
                            <TableCell align="right">
                                <Skeleton variant="rectangular" width={112} height={32} sx={{ ml: "auto", borderRadius: 2.25 }} />
                            </TableCell>
                            <TableCell align="right">
                                <Skeleton variant="rectangular" width={36} height={36} sx={{ ml: "auto", borderRadius: 1.5 }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
