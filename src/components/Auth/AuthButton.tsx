"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Button, ButtonProps } from "@mui/material";

type AuthButtonProps = { provider: "google" | "github" } & ButtonProps;

export default function AuthButton(props: AuthButtonProps) {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const signInHandler = () => signIn(props.provider, { callbackUrl: callbackUrl ? callbackUrl : "" });

    return <Button {...props} variant="outlined" size="large" sx={{ whiteSpace: "nowrap" }} onClick={signInHandler} fullWidth />;
}
