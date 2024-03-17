import { z } from "zod";

const createBlog = z.object({
    body: z.object({
        image: z.string({ required_error: "Blog Image is Required" }),
        title: z.string({ required_error: "Blog Title is Required" }),
        content: z.string({ required_error: "Blog Content is Required" }),
        source: z.string({ required_error: "Blog Source Time is Required" }),
        publishedDate: z.string({ required_error: "Publish Date Time is Required" }),
    }),
});

const updateBlog = z.object({
    body: z.object({
        image: z.string().optional(),
        title: z.string().optional(),
        content: z.string().optional(),
        source: z.string().optional(),
        publishedDate: z.string().optional(),
    }),
});

export const BlogValidation = { createBlog, updateBlog };
