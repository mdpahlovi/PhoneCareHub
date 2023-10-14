"use client";

import { useField } from "formik";
import type { FromDatePickProps } from "@/types/global";
import { TextField, type TextFieldProps } from "@mui/material";

export default function FormSelect({ name, label, disabled }: FromDatePickProps) {
    const [field, meta] = useField(name);

    let configTextfield: TextFieldProps = { label, disabled, ...field };
    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return <TextField type="date" {...configTextfield} />;
}
