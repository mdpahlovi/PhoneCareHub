"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormikContext } from "formik";
import { Button, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function FormProfileUpload({ image, name, disabled }: { image: string; name: string; disabled?: boolean }) {
    const { setFieldValue } = useFormikContext();
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(image);

    return (
        <Stack direction="row" alignItems="center" gap={3}>
            <Image src={preview as string} alt="" style={{ borderRadius: "16px" }} width={100} height={100} />
            {disabled ? null : (
                <Button component="label" htmlFor="File Upload" startIcon={<CloudUploadIcon />}>
                    Choose Avatar
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
                </Button>
            )}
        </Stack>
    );
}
