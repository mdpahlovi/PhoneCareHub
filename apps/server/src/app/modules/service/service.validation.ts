import { z } from "zod";

const createService = z.object({
    body: z.object({
        name: z.string({ required_error: "Service Name is Required" }),
        image: z.string({ required_error: "Service Image is Required" }),
        description: z.string({ required_error: "Service Description is Required" }),
        estimatetime: z.number({ required_error: "Service Estimate Time is Required" }),
    }),
});

const updateService = z.object({
    body: z.object({
        name: z.string().optional(),
        image: z.string().optional(),
        description: z.string().optional(),
        estimatetime: z.number().optional(),
    }),
});

export const ServiceValidation = { createService, updateService };
