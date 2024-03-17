import { z } from "zod";

const signupValidate = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is Required" }),
        email: z.string({ required_error: "Email is Required" }),
        password: z.string({ required_error: "Password is Required" }),
    }),
});
const signinValidate = z.object({
    body: z.object({
        email: z.string({ required_error: "Email is Required" }),
        password: z.string({ required_error: "Password is Required" }),
    }),
});
const socialSigninValidate = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is Required" }),
        image: z.string({ required_error: "Image is Required" }),
        email: z.string({ required_error: "Email is Required" }),
        provider: z.enum(["google", "github", "credentials"], { required_error: "Role is Required" }),
    }),
});

export const AuthValidation = { signupValidate, signinValidate, socialSigninValidate };
