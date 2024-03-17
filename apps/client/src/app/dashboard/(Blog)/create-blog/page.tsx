import Banner from "@/components/Common/Banner";
import CreateBlogForm from "@/components/Dashboard/CreateBlog/CreateBlogForm";

export const metadata = { title: "Create Blog" };

export default function CreateBlog() {
    return (
        <>
            <Banner>Create Service</Banner>
            <CreateBlogForm />
        </>
    );
}
