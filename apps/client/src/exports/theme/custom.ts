import { Theme } from "@mui/material";

const PrimaryButton = (theme: Theme) => {
    return {
        transition: "all 300ms",
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            boxShadow: theme.shadows[2],
            backgroundColor: theme.palette.primary.dark,
        },
    };
};

const ErrorButton = (theme: Theme) => {
    return {
        transition: "all 300ms",
        color: theme.palette.error.contrastText,
        backgroundColor: theme.palette.error.main,
        "&:hover": {
            boxShadow: theme.shadows[2],
            backgroundColor: theme.palette.error.dark,
        },
    };
};

export const CustomStyle = { PrimaryButton, ErrorButton };
