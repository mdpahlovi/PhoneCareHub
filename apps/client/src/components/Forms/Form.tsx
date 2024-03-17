"use client";

import { Stack } from "@mui/material";
import { FormProps } from "@/types/global";
import { Formik, Form as FormikForm } from "formik";

export default function Form({ children, onSubmit, initialValues, validationSchema }: FormProps) {
    const configFormik = { onSubmit, initialValues, validationSchema, validateOnBlur: true, validateOnMount: true, validateOnChange: true };

    return (
        <Formik {...configFormik}>
            <Stack width="100%" gap={3} component={FormikForm}>
                {children}
            </Stack>
        </Formik>
    );
}
