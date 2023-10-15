import { TableProps } from "@/types/global";
import TablePagination from "./TablePagination";
import { Paper, TableContainer, Table as MuiTable, TableHead, TableRow, TableCell } from "@mui/material";

export default function Table({ children, columns, total, page, size }: TableProps & React.PropsWithChildren) {
    return (
        <Paper sx={{ mt: 3, width: "100%", overflow: "hidden" }}>
            <TableContainer>
                <MuiTable stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map(({ label, align, minWidth }, idx) => (
                                <TableCell key={idx} align={align} style={{ minWidth: minWidth }}>
                                    {label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {children}
                </MuiTable>
            </TableContainer>
            {total && page && size && <TablePagination total={total} page={page} size={size} />}
        </Paper>
    );
}
