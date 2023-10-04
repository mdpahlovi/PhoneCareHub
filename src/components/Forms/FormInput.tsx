"use client";

import { useState } from "react";
import type { FromInputProps } from "@/types/global";
import { TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Controller, useFormContext } from "react-hook-form";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function FormInput({ type = "text", name, label }: FromInputProps) {
    const { control } = useFormContext();
    const [show, setShow] = useState(false);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) =>
                type !== "password" ? (
                    <TextField
                        type={type}
                        label={label}
                        value={value}
                        error={!!error}
                        onChange={onChange}
                        helperText={error ? error.message : null}
                    />
                ) : (
                    <TextField
                        type={show ? "text" : "password"}
                        label={label}
                        value={value}
                        error={!!error}
                        onChange={onChange}
                        helperText={error ? error.message : null}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" onClick={() => setShow(!show)}>
                                    {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </InputAdornment>
                            ),
                        }}
                    />
                )
            }
        />
    );
}
