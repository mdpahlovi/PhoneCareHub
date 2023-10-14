import { Box } from "@mui/material";
import Banner from "@/components/Common/Banner";
import CreateAdminForm from "@/components/Dashboard/CreateAdmin/CreateAdminForm";

export const metadata = { title: "Create Admin" };

export default function CreateAdmin() {
    return (
        <>
            <Banner>Create Admin</Banner>
            <Box my={3}>
                <CreateAdminForm />
            </Box>
        </>
    );
}
