import Table from "@/components/Table/Table";
import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";

const columns = ["Image", "Name", "Description", "Estimate Time", "Edit", "Delete"];

export default function ServiceLoading() {
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
                            <Skeleton variant="text" width={96} />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" width={560} />
                            <Skeleton variant="text" width={520} />
                            <Skeleton variant="text" width={480} />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" width={32} sx={{ ml: "auto" }} />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="rectangular" width={36} height={36} sx={{ ml: "auto", borderRadius: 1.5 }} />
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
