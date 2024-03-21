"use client";

import { ActionProps } from "@/types";
import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import useHandleActions from "@/hooks/useHandleAction";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormDatePick from "@/components/Forms/FormDatePick";
import createBlogSchema from "@/validations/createBlogSchema";
import FormImageUpload from "@/components/Forms/FormImageUpload";

const initialValues = { image: "", title: "", content: "", source: "", publishedDate: "" };

export default function CreateBlogForm({ action }: ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={initialValues} validationSchema={createBlogSchema} onSubmit={handleSubmit}>
            <FormImageUpload name="image" />
            <FormInput name="title" label="Title" />
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="source" label="Source" />
                <FormDatePick name="publishedDate" label="Published Date" />
            </Stack>
            <FormInput name="content" label="Content" textarea />
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
