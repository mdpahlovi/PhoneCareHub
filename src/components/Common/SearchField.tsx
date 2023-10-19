"use client";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import useCreateQuery from "@/hooks/useCreateQuery";
import useDeleteQuery from "@/hooks/useDeleteQuery";
import { IconButton, TextField, InputAdornment } from "@mui/material";

export default function SearchField({ search }: { search: string }) {
    const createQuery = useCreateQuery();
    const deleteQuery = useDeleteQuery();

    return (
        <TextField
            value={search}
            label="Search"
            variant="outlined"
            onChange={(e) => createQuery("search", e.target.value)}
            sx={{ maxWidth: "448px" }}
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
