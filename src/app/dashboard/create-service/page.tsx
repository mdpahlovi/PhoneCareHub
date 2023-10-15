import { Box } from "@mui/material";
import Banner from "@/components/Common/Banner";
import CreateServiceForm from "@/components/Dashboard/CreateService/CreateServiceForm";

export const metadata = { title: "Create Service" };

export default function CreateService() {
    return (
        <>
            <Banner>Create Service</Banner>
            <Box my={3}>
                <CreateServiceForm />
            </Box>
        </>
    );
}
