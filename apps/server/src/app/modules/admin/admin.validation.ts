import { z } from "zod";

const createAdmin = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is Required" }),
        email: z.string({ required_error: "Email is Required" }),
        password: z.string({ required_error: "Password is Required" }),
        phone: z.string({ required_error: "Phone is Required" }),
    }),
});

export const AdminValidation = { createAdmin };
