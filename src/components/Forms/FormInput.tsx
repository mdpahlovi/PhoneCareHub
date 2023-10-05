"use client";

import { useState } from "react";
import { useField } from "formik";
import type { FromInputProps } from "@/types/global";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputAdornment, TextField, type TextFieldProps } from "@mui/material";

const FormInput = ({ type = "text", name, label }: FromInputProps) => {
    const [field, meta] = useField(name);
    const [show, setShow] = useState(false);
    let configTextfield: TextFieldProps = { type, label, ...field };

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

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
        return <TextField {...configTextfield} />;
    }
};

export default FormInput;
