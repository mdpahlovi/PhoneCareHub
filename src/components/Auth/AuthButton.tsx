"use client";

import { signIn } from "next-auth/react";
import { Button, ButtonProps } from "@mui/material";

type AuthButtonProps = { provider: "google" | "github" } & ButtonProps;

export default function AuthButton(props: AuthButtonProps) {
    const signInHandler = () => signIn(props.provider, { callbackUrl: "/" });

    return <Button {...props} variant="outlined" size="large" sx={{ whiteSpace: "nowrap" }} onClick={signInHandler} fullWidth />;
}
