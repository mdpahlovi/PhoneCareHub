import TableSearch from "./TableSearch";
import { TableProps } from "@/types/global";
import TablePagination from "./TablePagination";
import { Paper, TableContainer, Table as MuiTable, TableHead, TableRow, TableCell } from "@mui/material";

export default function Table({ children, columns, total, page, size, search, label }: TableProps) {
    return (
        <Paper>
            {label ? <TableSearch label={label} search={search!} /> : null}
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
            {size ? <TablePagination total={total!} page={page!} size={size} /> : null}
        </Paper>
    );
}
