"use client";

import useCreateQuery from "@/hooks/useCreateQuery";
import { MenuItem, TextField } from "@mui/material";
import firstWordCapital from "@/libs/firstWordCapital";
import { useSearchParams } from "next/navigation";

export default function StatusFilter({ items }: { items: string[] }) {
    const createQuery = useCreateQuery();
    const searchParams = useSearchParams();
    const status = searchParams?.get("status") ? searchParams.get("status") : "pending";

    return (
        <TextField
            value={status}
            variant="outlined"
            label="Select Status"
            sx={{ maxWidth: "448px" }}
            onChange={(e) => createQuery("status", e.target.value)}
            select
        >
            {items.map((item, idx) => (
                <MenuItem key={idx} value={item}>
                    {firstWordCapital(item)}
                </MenuItem>
            ))}
        </TextField>
    );
}
