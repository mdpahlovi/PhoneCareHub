"use client";

import type { FromRatting } from "@/types/global";
import { Typography, Rating } from "@mui/material";
import { useField, useFormikContext } from "formik";

const FormRatting = ({ name, label, disabled }: FromRatting) => {
    const [{ value }, meta] = useField(name);
    const { setFieldValue } = useFormikContext();

    let error = { error: false, helperText: "" };
    if (meta && meta.touched && meta.error) error = { error: true, helperText: meta.error };

    return (
        <>
            <Typography component="legend" color={error.error ? "red" : ""}>
                {error.error ? error.helperText : label}
            </Typography>
            <Rating
                name={name}
                value={value}
                precision={0.5}
                readOnly={disabled}
                onChange={(event, newValue) => setFieldValue(name, newValue)}
            />
        </>
    );
};

export default FormRatting;
