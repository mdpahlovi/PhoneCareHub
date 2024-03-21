import prisma from "@/libs/prisma";
import Banner from "@/components/Common/Banner";
import CreateBlogForm from "@/components/Dashboard/CreateBlog/CreateBlogForm";

export const metadata = { title: "Create Blog" };

export default function CreateBlog() {
    async function action(data: any) {
        "use server";

        try {
            await prisma.blog.create({ data });
            return { success: true, message: "Blog Created Successfully", redirect: "/dashboard/blogs" };
        } catch (error) {
            return { success: false, message: "Something went wrong!" };
        }
    }

    return (
        <>
            <Banner>Create Blog</Banner>
            <CreateBlogForm action={action} />
        </>
    );
}
