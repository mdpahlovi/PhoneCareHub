"use client";

import { signIn } from "next-auth/react";
import { Button, ButtonProps } from "@mui/material";

type AuthButtonProps = { provider: "google" | "github" } & ButtonProps;

export default function AuthButton(props: AuthButtonProps) {
    const signInHandler = () => signIn(props.provider, { callbackUrl: "/" });

    return <Button {...props} fullWidth variant="outlined" size="large" onClick={signInHandler} />;
}
