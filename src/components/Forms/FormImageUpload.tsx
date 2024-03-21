"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormikContext } from "formik";
import { Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { borderRounded } from "@/exports/constant";

export default function FormImageUpload({ image, name }: { image?: string; name: string }) {
    const { setFieldValue } = useFormikContext();
    const [preview, setPreview] = useState<string | ArrayBuffer | null | undefined>(image);

    return (
        <Stack direction="row" alignItems="center" gap={3}>
            <Stack
                height={240}
                {...borderRounded}
                position="relative"
                alignItems="center"
                justifyContent="center"
                minWidth={{ sm: 500 }}
                width={{ xs: "100%", sm: "auto" }}
            >
                {preview ? (
                    <>
                        <IconButton
                            color="error"
                            sx={{ position: "absolute", top: 3, right: 3 }}
                            onClick={() => {
                                setPreview(null);
                                setFieldValue(name, "");
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Image src={preview as string} alt="" style={{ borderRadius: "24px" }} width={500} height={240} />
                    </>
                ) : (
                    <label htmlFor="File Upload">
                        <Typography textAlign="center">Click to upload</Typography>
                        <Typography variant="body2" textAlign="center" color="text.secondary">
                            SVG, PNG, JPG or GIF (MAX. 10MB)
                        </Typography>
                        <input
                            hidden
                            type="file"
                            name={name}
                            accept="image/*"
                            id="File Upload"
                            onChange={(e) => {
                                const fileReader = new FileReader();
                                fileReader.onload = () => {
                                    if (fileReader.readyState === 2) {
                                        setPreview(fileReader.result);
                                        setFieldValue(name, fileReader.result);
                                    }
                                };
                                fileReader.readAsDataURL(e.target.files![0]);
                            }}
                        />
                    </label>
                )}
            </Stack>
        </Stack>
    );
}
