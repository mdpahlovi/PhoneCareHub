"use client";

import useCreateQuery from "@/hooks/useCreateQuery";
import { TablePagination as MuiTablePagination } from "@mui/material";

export default function TablePagination({ total, page, size }: { total: number; page: number; size: number }) {
    const createQuery = useCreateQuery();

    const handleChangePage = (event: unknown, newPage: number) => {
        createQuery("page", newPage.toString());
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        createQuery("size", `${event.target.value}`);
    };

    return (
        <MuiTablePagination
            rowsPerPageOptions={[1, 5, 10, 15, 20]}
            component="div"
            count={total}
            rowsPerPage={size}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
