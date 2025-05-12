import EditBlogForm from "@/components/Dashboard/EditBlog/EditBlogForm";
import prisma from "@/libs/prisma";
import { notFound } from "next/navigation";

export const metadata = { title: "Edit Blog" };
type PageProps = Promise<{ params: { id: string } }>;

export default async function EditBlog(props: PageProps) {
    const { params } = await props;
    const blog = await prisma.blog.findUnique({ where: { id: params?.id } });
    if (!blog) notFound();

    async function action(data: any) {
        "use server";

        try {
            await prisma.blog.update({ where: { id: params?.id }, data });
            return { success: true, message: "Blog Updated Successfully", redirect: "/dashboard/blogs" };
        } catch (error) {
            return { success: false, message: "Something went wrong!" };
        }
    }

    return <EditBlogForm blog={blog} action={action} />;
}
