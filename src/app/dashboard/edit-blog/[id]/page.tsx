import { getblog } from "@/libs/fetch";
import Banner from "@/components/Common/Banner";
import EditBlogForm from "@/components/Dashboard/EditBlog/EditBlogForm";

export const metadata = { title: "Edit Blog" };

export default async function EditBlog({ params }: { params: { id: string } }) {
    const blog = await getblog(params.id);

    return (
        <>
            <Banner>Edit Blog</Banner>
            <EditBlogForm blog={blog.data!} />
        </>
    );
}
