"use client";

import { useState } from "react";
import { Admin } from "@/types/response";
import Form from "@/components/Forms/Form";
import useUpdateData from "@/hooks/useUpdateData";
import { Box, Stack, Button } from "@mui/material";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import { getAdminInitialValues } from "@/libs/initialValues";
import FormProfileUpload from "@/components/Forms/FormProfileUpload";
import ChangePasswordButton from "@/components/Dashboard/Components/ChangePasswordButton";

export default function AdminProfile({ profile }: { profile: Admin }) {
    const [editing, setEditing] = useState(false);
    const { handleUpdate, loading } = useUpdateData("/profile");

    return (
        <Box position="relative" my={3}>
            <Stack position="absolute" right={0} alignItems="end" gap={3}>
                <Button sx={{ width: "max-content" }} onClick={() => setEditing(!editing)}>
                    {editing ? "Cancel" : "Edit"}
                </Button>
                <ChangePasswordButton id={profile.id} path="profile" />
            </Stack>
            <Form initialValues={getAdminInitialValues(profile)} onSubmit={handleUpdate}>
                <FormProfileUpload image={profile.image} name="image" disabled={!editing} />
                <FormInput name="name" label="Name" disabled={!editing} />
                <FormInput name="title" label="Admin Title" disabled={!editing} />
                <Stack direction={{ sm: "row" }} gap={3}>
                    <FormInput type="email" name="email" label="Email" disabled={true} />
                    <FormInput name="phone" label="Phone" disabled={!editing} />
                </Stack>
                {editing ? <FormSubmit loading={loading}>Submit</FormSubmit> : null}
            </Form>
        </Box>
    );
}
