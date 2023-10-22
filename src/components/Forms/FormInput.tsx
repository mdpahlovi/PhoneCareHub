"use client";

import { useState } from "react";
import { useField } from "formik";
import type { FromInputProps } from "@/types/global";
import { textAreaDisableColor } from "@/exports/constant";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputAdornment, TextField, type TextFieldProps } from "@mui/material";

const FormInput = ({ type = "text", name, label, textarea, disabled }: FromInputProps) => {
    const [field, meta] = useField(name);
    const [show, setShow] = useState(false);
    let configTextfield: TextFieldProps = { type, label, disabled, ...field };

    if (meta && meta.touched && meta.error) configTextfield = { ...configTextfield, error: true, helperText: meta.error };
    if (textarea) configTextfield = { ...configTextfield, multiline: true, rows: 4 };

    if (type === "password") {
        configTextfield.type = show ? "text" : "password";
        return (
            <TextField
                {...configTextfield}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sx={{ ":hover": { cursor: "pointer" } }} onClick={() => setShow(!show)}>
                            {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </InputAdornment>
                    ),
                }}
            />
        );
    } else {
        return <TextField {...configTextfield} sx={{ ...textAreaDisableColor }} />;
    }
};

export default FormInput;
