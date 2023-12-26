"use client";

import { useField, useFormikContext } from "formik";
import type { FromDatePickProps } from "@/types/global";
import { textAreaDisableColor } from "@/exports/constant";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

type TextFieldConfig = { name: string; error: boolean; helperText?: React.ReactNode };

export default function FormDatePick({ name, label, disabled }: FromDatePickProps) {
    const [{ value }, meta] = useField(name);
    const { setFieldValue } = useFormikContext();

    let configTextfield: TextFieldConfig = { name, error: false };
    if (meta && meta.touched && meta.error) configTextfield = { ...configTextfield, error: true, helperText: meta.error };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={value}
                disabled={disabled}
                sx={{ ...textAreaDisableColor }}
                onChange={(newValue) => setFieldValue(name, newValue)}
                slotProps={{
                    textField: { ...configTextfield },
                    clearButton: { color: "default" },
                    nextIconButton: { color: "default" },
                    openPickerButton: { color: "default" },
                    switchViewButton: { color: "default" },
                    previousIconButton: { color: "default" },
                }}
            />
        </LocalizationProvider>
    );
}
