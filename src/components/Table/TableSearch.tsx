"use client";

import CloseIcon from "@mui/icons-material/Close";
import { TableSearchProps } from "@/types/global";
import SearchIcon from "@mui/icons-material/Search";
import useCreateQuery from "@/hooks/useCreateQuery";
import useDeleteQuery from "@/hooks/useDeleteQuery";
import { InputBase, IconButton, Box } from "@mui/material";

export default function TableSearch({ search, label }: TableSearchProps) {
    const createQuery = useCreateQuery();
    const deleteQuery = useDeleteQuery();

    const padding = { py: 0.5, px: 1.5 };
    const border = { borderBottom: 1, borderColor: "divider" };
    const inputProps = { value: search, placeholder: `Search ${label}`, sx: { flex: 1 } };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => createQuery("search", e.target.value);

    return (
        <Box display="flex" alignItems="center" gap={1.5} {...border} {...padding}>
            <SearchIcon />
            <InputBase {...inputProps} onChange={handleChange} />
            {search ? (
                <IconButton color="default" onClick={() => deleteQuery("search")}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </Box>
    );
}
