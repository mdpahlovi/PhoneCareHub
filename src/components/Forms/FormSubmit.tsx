"use client";

import { Button } from "@mui/material";
import { useFormikContext } from "formik";

export default function FormSubmit({ children, loading }: { loading?: string } & React.PropsWithChildren) {
    const { submitForm, errors } = useFormikContext();
    const hasError = Object.keys(errors).length !== 0;

    return (
        <Button size="large" onClick={submitForm} disabled={hasError}>
            {loading ? "Loading" : children}
        </Button>
    );
}
