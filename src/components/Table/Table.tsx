import Link from "next/link";
import TableSearch from "./TableSearch";
import { TableProps } from "@/types/global";
import TablePagination from "./TablePagination";
import firstWordCapital from "@/libs/firstWordCapital";
import { Paper, TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, Stack, Button } from "@mui/material";

export default function Table({ children, columns, pagination, search, create }: TableProps) {
    return (
        <>
            {create ? (
                <Stack mb={3} alignItems="end">
                    <Button LinkComponent={Link} href={`/dashboard/create-${create}`}>
                        Create {firstWordCapital(create)}
                    </Button>
                </Stack>
            ) : null}
            <Paper>
                {search ? <TableSearch label={search.label} search={search.search} /> : null}
                <TableContainer>
                    <MuiTable stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((label, idx) => {
                                    const right = Math.ceil(columns.length / 2) < idx + 1 ? "right" : "left";
                                    return (
                                        <TableCell key={idx} align={right} sx={{ whiteSpace: "nowrap" }}>
                                            {label}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        {children}
                    </MuiTable>
                </TableContainer>
                {pagination ? <TablePagination total={pagination.total} page={pagination.page} size={pagination.size} /> : null}
            </Paper>
        </>
    );
}
