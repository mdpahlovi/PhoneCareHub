import Link from "next/link";
import LoginForm from "@/components/Auth/LoginForm";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import AuthButton from "@/components/Auth/AuthButton";
import { Stack, Grid, Typography } from "@mui/material";

export const metadata = { title: "Login" };

export default function Login() {
    return (
        <>
            <Stack gap={1}>
                <Typography variant="h4" fontWeight={800}>
                    Login
                </Typography>
                <Typography color="text.secondary">
                    Don&apos;t have an account? <Link href="/register">Register</Link>
                </Typography>
            </Stack>
            <Grid container flexWrap={{ sm: "nowrap" }} gap={3}>
                <Grid xs={12} sm={6} component={AuthButton} provider="google" startIcon={<GoogleIcon />} whiteSpace="nowrap">
                    Login With Google
                </Grid>
                <Grid xs={12} sm={6} component={AuthButton} provider="github" startIcon={<GitHubIcon />} whiteSpace="nowrap">
                    Login With Github
                </Grid>
            </Grid>
            <LoginForm />
        </>
    );
}
