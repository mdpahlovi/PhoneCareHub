"use client";

import { useState } from "react";
import { User } from "@/types/response";
import Form from "@/components/Forms/Form";
import useUpdateData from "@/hooks/useUpdateData";
import { Box, Stack, Button } from "@mui/material";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormSelect from "@/components/Forms/FormSelect";
import FormDatePack from "@/components/Forms/FormDatePack";
import { getUserInitialValues } from "@/libs/initialValues";
import FormProfileUpload from "@/components/Forms/FormProfileUpload";

export default function UserProfile({ profile }: { profile: User }) {
    const [editing, setEditing] = useState(false);
    const { handleUpdate, loading } = useUpdateData("/profile");

    return (
        <Box position="relative" my={3}>
            <Button sx={{ width: "max-content", position: "absolute", right: 0 }} onClick={() => setEditing(!editing)}>
                {editing ? "Cancel" : "Edit"}
            </Button>
            <Form initialValues={getUserInitialValues(profile)} onSubmit={handleUpdate}>
                <FormProfileUpload image={profile.image} name="image" disabled={!editing} />
                <FormInput name="name" label="Name" disabled={!editing} />
                <Stack direction={{ sm: "row" }} gap={3}>
                    <FormInput type="email" name="email" label="Email" disabled={true} />
                    <FormInput name="phone" label="Phone" disabled={!editing} />
                </Stack>
                <Stack direction={{ sm: "row" }} gap={3}>
                    <FormSelect items={["male", "female", "transgender"]} name="gender" label="Gender" disabled={!editing} />
                    <FormDatePack name="birthdate" label="BirthDate" disabled={!editing} />
                </Stack>
                <FormInput name="address" label="Address" disabled={!editing} />
                {editing ? <FormSubmit loading={loading}>Submit</FormSubmit> : null}
            </Form>
        </Box>
    );
}
