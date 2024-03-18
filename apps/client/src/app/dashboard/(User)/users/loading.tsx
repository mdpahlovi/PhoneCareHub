import Table from "@/components/Table/Table";
import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";

const columns = ["Image", "Name", "Email", "BirthDate", "Gender", "Phone", "Change Password", "Delete"];

export default function UserLoading() {
    return (
        <Table columns={columns}>
            <TableBody>
                {[...Array(5)].map((p, idx) => (
                    <TableRow key={idx} hover>
                        <TableCell>
                            <Skeleton variant="rectangular" width={40} height={40} sx={{ borderRadius: 2 }} />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" width={64} />
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" width={160} />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" width={128} />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="text" width={96} sx={{ ml: "auto" }} />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="rectangular" width={160} height={36} sx={{ ml: "auto", borderRadius: 2.25 }} />
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
