import { getblog } from "@/libs/fetch";
import EditBlogForm from "@/components/Dashboard/EditBlog/EditBlogForm";

export const metadata = { title: "Edit Blog" };

export default async function EditBlog({ params }: { params: { id: string } }) {
    const blog = await getblog(params.id);

    return <EditBlogForm blog={blog.data!} />;
}
