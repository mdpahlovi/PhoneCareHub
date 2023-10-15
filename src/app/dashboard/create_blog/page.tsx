import { Box } from "@mui/material";
import Banner from "@/components/Common/Banner";
import CreateBlogForm from "@/components/Dashboard/CreateBlog/CreateBlogForm";

export const metadata = { title: "Create Blog" };

export default function CreateBlog() {
    return (
        <>
            <Banner>Create Service</Banner>
            <Box my={3}>
                <CreateBlogForm />
            </Box>
        </>
    );
}
