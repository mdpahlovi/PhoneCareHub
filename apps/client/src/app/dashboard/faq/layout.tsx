import prisma from "@/libs/prisma";
import Banner from "@/components/Common/Banner";
import CreateFAQForm from "@/components/Dashboard/CreateFAQ/CreateFAQForm";
import { revalidatePath } from "next/cache";

export default async function FAQLayout({ children }: React.PropsWithChildren) {
    async function action(data: any) {
        "use server";

        await prisma.fAQs.create({ data });
        revalidatePath("/faq");
    }

    return (
        <>
            <Banner>All FAQ</Banner>
            <CreateFAQForm action={action} />
            {children}
        </>
    );
}
