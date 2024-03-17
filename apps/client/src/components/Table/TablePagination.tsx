"use client";

import useCreateQuery from "@/hooks/useCreateQuery";
import { TablePaginationProps } from "@/types/global";
import { TablePagination as MuiTablePagination } from "@mui/material";

export default function TablePagination({ total, page, size }: TablePaginationProps) {
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
