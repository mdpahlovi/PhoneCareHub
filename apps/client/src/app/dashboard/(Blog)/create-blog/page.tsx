import prisma from "@/libs/prisma";
import Banner from "@/components/Common/Banner";
import CreateBlogForm from "@/components/Dashboard/CreateBlog/CreateBlogForm";

export const metadata = { title: "Create Blog" };

export default function CreateBlog() {
    async function action(data: any) {
        "use server";

        const blog = await prisma.service.create({ data });
        if (!blog) return { success: false, message: "Something went wrong!" };

        return { success: true, message: "Blog Created Successfully", redirect: "/dashboard/blogs" };
    }

    return (
        <>
            <Banner>Create Service</Banner>
            <CreateBlogForm action={action} />
        </>
    );
}
