import Table from "@/components/Table/Table";
import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";

const columns = ["User", "Email", "Device Info", "Issue Details", "See Detail", "Delete"];

export default function MOnlineAppointmentLoading() {
    return (
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
    );
}
