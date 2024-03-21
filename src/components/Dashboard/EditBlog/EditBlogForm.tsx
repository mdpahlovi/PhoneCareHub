"use client";

import { Blog } from "@prisma/client";
import { Stack } from "@mui/material";
import { ActionProps } from "@/types";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import useHandleActions from "@/hooks/useHandleAction";
import FormDatePick from "@/components/Forms/FormDatePick";
import { getBlogInitialValues } from "@/libs/initialValues";
import FormImageUpload from "@/components/Forms/FormImageUpload";

export default function EditBlogForm({ blog, action }: { blog: Blog } & ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={getBlogInitialValues(blog)} onSubmit={handleSubmit}>
            <FormImageUpload image={blog.image} name="image" />
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
