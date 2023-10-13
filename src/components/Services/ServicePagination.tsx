"use client";

import { Pagination } from "@mui/material";
import useCreateQuery from "@/hooks/useCreateQuery";

export default function ServicePagination({ page, count }: { page: number; count: number }) {
    const createQuery = useCreateQuery();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        createQuery("page", value.toString());
    };

    return (
        <Pagination
            page={page}
            count={count}
            size="large"
            color="primary"
            onChange={handleChange}
            sx={{ display: "flex", justifyContent: "center" }}
        />
    );
}
