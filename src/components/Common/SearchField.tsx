"use client";

import { useSearchParams } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import useCreateQuery from "@/hooks/useCreateQuery";
import useDeleteQuery from "@/hooks/useDeleteQuery";
import { IconButton, TextField, InputAdornment } from "@mui/material";

export default function SearchField() {
    const createQuery = useCreateQuery();
    const deleteQuery = useDeleteQuery();
    const searchParams = useSearchParams();
    const search = searchParams?.get("search") ? searchParams.get("search") : "";

    return (
        <TextField
            label="Search"
            variant="outlined"
            sx={{ maxWidth: "448px" }}
            value={search}
            onChange={(e) => createQuery("search", e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        {search ? (
                            <IconButton color="default" onClick={() => deleteQuery("search")}>
                                <CloseIcon />
                            </IconButton>
                        ) : null}
                    </InputAdornment>
                ),
            }}
        />
    );
}
