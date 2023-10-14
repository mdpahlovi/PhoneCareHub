"use client";

import { useField } from "formik";
import type { FromSelectProps } from "@/types/global";
import { textAreaDisableColor } from "@/exports/constant";
import { TextField, type TextFieldProps, MenuItem } from "@mui/material";

export default function FormSelect({ items, name, label, disabled }: FromSelectProps) {
    const [field, meta] = useField(name);

    let configTextfield: TextFieldProps = { label, disabled, ...field };
    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <TextField {...configTextfield} sx={{ ...textAreaDisableColor }} select>
            {items.map((item, idx) => (
                <MenuItem key={idx} value={item}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </MenuItem>
            ))}
        </TextField>
    );
}
