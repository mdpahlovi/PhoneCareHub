"use client";

import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormDatePick from "@/components/Forms/FormDatePick";
import createBlogSchema from "@/validations/createBlogSchema";
import FormImageUpload from "@/components/Forms/FormImageUpload";

const initialValues = { image: "", title: "", content: "", source: "", publishedDate: "" };

export default function CreateBlogForm() {
    const { handleCreate, loading } = useCreateData("blog");

    return (
        <Form initialValues={initialValues} validationSchema={createBlogSchema} onSubmit={handleCreate}>
            <FormImageUpload name="image" />
            <FormInput name="title" label="Title" />
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="source" label="Source" />
                <FormDatePick name="publishedDate" label="Published Date" />
            </Stack>
            <FormInput name="content" label="Content" textarea />
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
