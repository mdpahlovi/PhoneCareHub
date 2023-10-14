"use client";

import { useState } from "react";
import { Admin } from "@/types/response";
import Form from "@/components/Forms/Form";
import { Box, Stack, Button } from "@mui/material";
import FormInput from "@/components/Forms/FormInput";
import useAxiosRequest from "@/hooks/useAxiosRequest";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormProfileUpload from "@/components/Forms/FormProfileUpload";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

type AdminProfileValue = { name: string; email: string; phone: string };

export default function AdminProfile({ profile }: { profile: Admin }) {
    const axios = useAxiosRequest();
    const { update } = useSession();
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const { name, email, phone, image } = profile;
    const initialValues = { name, email, phone };

    const onSubmit = (data: AdminProfileValue) => {
        setLoading(true);
        axios
            .patch("/profile", data)
            .then((res: any) => {
                if (res.success) {
                    setLoading(false);
                    update({ name: res.data.name, image: res.data.image });
                    toast.success(res.message);
                }
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
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
                {editing ? <FormSubmit loading={loading}>Submit</FormSubmit> : null}
            </Form>
        </Box>
    );
}
