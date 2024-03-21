import prisma from "@/libs/prisma";
import Banner from "@/components/Common/Banner";
import CreateFAQForm from "@/components/Dashboard/CreateFAQ/CreateFAQForm";
import { revalidatePath } from "next/cache";

export default async function FAQLayout({ children }: React.PropsWithChildren) {
    async function action(data: any) {
        "use server";

        const faq = await prisma.fAQs.create({ data });
        if (!faq) return { success: false, message: "Something went wrong!" };

        revalidatePath("/dashboard/faq/page", "page");
        return { success: true, message: "FAQ Created Successfully" };
    }

    return (
        <>
            <Banner>All FAQ</Banner>
            <CreateFAQForm action={action} />
            {children}
        </>
    );
}
