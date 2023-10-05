"use client";

import { Button } from "@mui/material";
import { useFormikContext } from "formik";

export default function FormSubmit({ children, loading }: { loading?: string } & React.PropsWithChildren) {
    const { submitForm } = useFormikContext();

    return (
        <Button size="large" onClick={submitForm}>
            {loading ? "Loading" : children}
        </Button>
    );
}
