import Table from "@/components/Table/Table";
import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";

const columns = ["Image", "Title", "Content", "Source", "Published Date", "Edit", "Delete"];

export default function BlogLoading() {
    return (
        <Table columns={columns}>
            <TableBody>
                {[...Array(5)].map((p, idx) => (
                    <TableRow key={idx} hover>
                        <TableCell>
                            <Skeleton variant="rectangular" width={40} height={40} sx={{ borderRadius: 2 }} />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" width={96} />
                            <Skeleton variant="text" width={128} />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" width={360} />
                            <Skeleton variant="text" width={320} />
                            <Skeleton variant="text" width={280} />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" width={128} />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="text" />
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
