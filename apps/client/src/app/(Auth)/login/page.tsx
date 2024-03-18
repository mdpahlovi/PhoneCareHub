import { Suspense } from "react";
import LoginForm from "@/components/Auth/LoginForm";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import AuthButton from "@/components/Auth/AuthButton";
import { Stack, Typography, Link } from "@/exports/mui";

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
            <Stack direction={{ sm: "row" }} gap={3}>
                <Suspense>
                    <AuthButton provider="google" startIcon={<GoogleIcon />}>
                        Login With Google
                    </AuthButton>
                </Suspense>
                <Suspense>
                    <AuthButton provider="github" startIcon={<GitHubIcon />}>
                        Login With Github
                    </AuthButton>
                </Suspense>
            </Stack>
            <Suspense>
                <LoginForm />
            </Suspense>
        </>
    );
}
