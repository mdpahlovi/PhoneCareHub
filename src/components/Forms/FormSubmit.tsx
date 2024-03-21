"use client";

import { useFormikContext } from "formik";
import { Button, ButtonProps, CircularProgress } from "@mui/material";

export default function FormSubmit({ children, loading }: { loading?: boolean } & React.PropsWithChildren) {
    const { submitForm, errors } = useFormikContext();
    const hasError = Object.keys(errors).length !== 0;

    let props: ButtonProps = { size: "large", onClick: submitForm };
    if (hasError) props = { ...props, disabled: hasError };
    if (loading) props = { ...props, disabled: loading, startIcon: <CircularProgress size={24} /> };

    return <Button {...props}>{loading ? "Loading..." : children}</Button>;
}
