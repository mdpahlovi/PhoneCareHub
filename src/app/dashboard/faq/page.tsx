import Context from "./context";
import { getFaqs } from "@/libs/fetch";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata = { title: "FAQs" };

export default async function FAQs() {
    const data = await getFaqs();
    if (!data || !data?.status) notFound();

    return <Context faqs={data.data} />;
}
