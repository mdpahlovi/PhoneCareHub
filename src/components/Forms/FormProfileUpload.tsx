"use client";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Stack, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    position: "absolute",
});

export default function FormProfileUpload({ image, disabled }: { image: string; disabled?: boolean }) {
    return (
        <Stack direction="row" alignItems="center" gap={3}>
            <Image src={image} alt="" width={100} height={100} />
            {disabled ? null : (
                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ height: "max-content" }}>
                    Upload file
                    <VisuallyHiddenInput type="file" />
                </Button>
            )}
        </Stack>
    );
}
