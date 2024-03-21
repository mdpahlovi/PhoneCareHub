import Context from "./context";
import prisma from "@/libs/prisma";

export const metadata = { title: "FAQs" };
export const dynamic = "force-dynamic";

export default async function FAQs() {
    const faqs = await prisma.fAQs.findMany({ orderBy: { serial: "asc" } });

    return <Context faqs={faqs} />;
}
