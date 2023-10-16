"use client";

import { Stack } from "@mui/material";
import { Blog } from "@/types/response";
import Form from "@/components/Forms/Form";
import useUpdateData from "@/hooks/useUpdateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormDatePack from "@/components/Forms/FormDatePack";
import { getBlogInitialValues } from "@/libs/initialValues";
import FormImageUpload from "@/components/Forms/FormImageUpload";

export default function EditBlogForm({ blog }: { blog: Blog }) {
    const { handleUpdate, loading } = useUpdateData(`/blog/${blog.id}`, "/blogs");

    return (
        <Form initialValues={getBlogInitialValues(blog)} onSubmit={handleUpdate}>
            <FormImageUpload image={blog.image} name="image" />
            <FormInput name="title" label="Title" />
            <FormInput name="content" label="Content" />
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="source" label="Source" />
                <FormDatePack name="publishedDate" label="Published Date" />
            </Stack>
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
