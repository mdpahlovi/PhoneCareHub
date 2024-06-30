import { cookies } from "next/headers";
import { Admin, FAQs, User } from "@prisma/client";

export async function getFaqs(): Promise<{ status: boolean; message: string; data: FAQs[] }> {
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/faqs`, { next: { tags: ["faqs"] } });
    if (!res.ok) throw new Error("Failed to fetch data");

    return res.json();
}

export async function getProfile(): Promise<{ status: boolean; message: string; data: User | Admin }> {
    const token = cookies().get("next-auth.session-token")?.value;
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/profile`, {
        headers: { Cookie: `next-auth.session-token=${token}` },
        next: { tags: ["profile"] },
    });
    if (!res.ok) throw new Error("Failed to fetch data");

    return res.json();
}
