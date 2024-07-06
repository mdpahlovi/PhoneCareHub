import Context from "./context";
import type { FAQs } from "@prisma/client";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata = { title: "FAQs" };

async function getFaqs(): Promise<{ status: boolean; message: string; data: FAQs[] }> {
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/faqs`, { next: { tags: ["faqs"] } });
    if (!res.ok) throw new Error("Failed to fetch data");

    return res.json();
}

export default async function FAQs() {
    const data = await getFaqs();
    if (!data || !data?.status) notFound();

    return <Context faqs={data.data} />;
}
