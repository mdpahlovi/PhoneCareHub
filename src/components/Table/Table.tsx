import TableSearch from "./TableSearch";
import { TableProps } from "@/types/global";
import TablePagination from "./TablePagination";
import { Paper, TableContainer, Table as MuiTable, TableHead, TableRow, TableCell } from "@mui/material";

export default function Table({ children, columns, pagination, search }: TableProps) {
    return (
        <Paper>
            {search ? <TableSearch label={search.label} search={search.search} /> : null}
            <TableContainer>
                <MuiTable stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((label, idx) => (
                                <TableCell
                                    key={idx}
                                    sx={{ whiteSpace: "nowrap" }}
                                    align={Math.ceil(columns.length / 2) < idx + 1 ? "right" : "left"}
                                >
                                    {label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {children}
                </MuiTable>
            </TableContainer>
            {pagination ? <TablePagination total={pagination.total} page={pagination.page} size={pagination.size} /> : null}
        </Paper>
    );
}
