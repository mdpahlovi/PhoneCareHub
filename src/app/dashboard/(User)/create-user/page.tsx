import { Box } from "@mui/material";
import Banner from "@/components/Common/Banner";
import CreateUserForm from "@/components/Dashboard/CreateUserOrAdmin/CreateUserOrAdminForm";

export const metadata = { title: "Create User" };

export default function CreateUser() {
    return (
        <>
            <Banner>Create User</Banner>
            <Box my={3}>
                <CreateUserForm path="user" />
            </Box>
        </>
    );
}
