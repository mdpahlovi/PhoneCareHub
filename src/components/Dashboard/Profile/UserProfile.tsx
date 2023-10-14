"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { User } from "@/types/response";
import { format, parseISO } from "date-fns";
import Form from "@/components/Forms/Form";
import { Box, Stack, Button } from "@mui/material";
import FormInput from "@/components/Forms/FormInput";
import useAxiosRequest from "@/hooks/useAxiosRequest";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormSelect from "@/components/Forms/FormSelect";
import FormDatePack from "@/components/Forms/FormDatePack";
import FormProfileUpload from "@/components/Forms/FormProfileUpload";
import { useSession } from "next-auth/react";
import useUpdateProfile from "@/hooks/useUpdateProfile";

type UserProfileValue = {
    name: string;
    image: string;
    email: string;
    phone: string;
    address: string;
    birthdate: Date | string;
    gender: string;
};

export default function UserProfile({ profile }: { profile: User }) {
    const [editing, setEditing] = useState(false);
    const { updateProfile, loading } = useUpdateProfile();
    const { name, image, email, phone, address, birthdate, gender } = profile;
    const initialValues = { name, email, phone, address, birthdate: format(parseISO(birthdate!), "y-M-d"), gender };

    const onSubmit = (data: UserProfileValue) => {
        if (data.birthdate) data.birthdate = new Date(data.birthdate);
        updateProfile(data);
    };

    return (
        <Box position="relative" my={3}>
            <Button sx={{ width: "max-content", position: "absolute", right: 0 }} onClick={() => setEditing(!editing)}>
                {editing ? "Cancel" : "Edit"}
            </Button>
            <Form initialValues={initialValues} onSubmit={onSubmit}>
                <FormProfileUpload image={image} name="image" disabled={!editing} />
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
