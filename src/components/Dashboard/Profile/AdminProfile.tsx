"use client";

import { useState } from "react";
import { ActionProps } from "@/types";
import { Admin } from "@prisma/client";
import Form from "@/components/Forms/Form";
import { Box, Stack, Button } from "@mui/material";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import useHandleActions from "@/hooks/useHandleAction";
import { getAdminInitialValues } from "@/libs/initialValues";
import FormProfileUpload from "@/components/Forms/FormProfileUpload";
import ChangePasswordButton from "@/components/Dashboard/Components/ChangePasswordButton";

export default function AdminProfile({ profile, action }: { profile: Admin } & ActionProps) {
    const [editing, setEditing] = useState(false);
    const { isPending, handleSubmit } = useHandleActions({ action, reset: false });

    return (
        <Box position="relative" my={3}>
            <Stack position="absolute" right={0} alignItems="end" gap={3}>
                <Button sx={{ width: "max-content" }} onClick={() => setEditing(!editing)}>
                    {editing ? "Cancel" : "Edit"}
                </Button>
                <ChangePasswordButton id={profile.id} path="admin" />
            </Stack>
            <Form initialValues={getAdminInitialValues(profile)} onSubmit={handleSubmit}>
                <FormProfileUpload image={profile.image} name="image" disabled={!editing} />
                <FormInput name="name" label="Name" disabled={!editing} />
                <FormInput name="title" label="Admin Title" disabled={!editing} />
                <Stack direction={{ sm: "row" }} gap={3}>
                    <FormInput type="email" name="email" label="Email" disabled={true} />
                    <FormInput name="phone" label="Phone" disabled={!editing} />
                </Stack>
                {editing ? <FormSubmit loading={isPending}>Submit</FormSubmit> : null}
            </Form>
        </Box>
    );
}
