import { hash } from "bcrypt";
import prisma from "@/libs/prisma";
import { Stack, Typography, Link } from "@/exports/mui";
import RegisterForm from "@/components/Auth/RegisterForm";

export const metadata = { title: "Register" };

export default function Signup() {
    async function action({ first_name, last_name, email, password }: any) {
        "use server";

        try {
            const isExist = await prisma.user.findUnique({ where: { email } });
            if (isExist) return { success: false, message: "User already exist...!" };

            await prisma.user.create({ data: { name: first_name + " " + last_name, email, password: await hash(password, 12) } });
            return { success: true, message: "User Created Successfully", redirect: "/login" };
        } catch (error) {
            return { success: false, message: "Something went wrong!" };
        }
    }

    return (
        <>
            <Stack gap={1}>
                <Typography variant="h4" fontWeight={800}>
                    Register
                </Typography>
                <Typography color="text.secondary">
                    Already have an account? <Link href="/login">Login</Link>
                </Typography>
            </Stack>
            <RegisterForm action={action} />
        </>
    );
}
