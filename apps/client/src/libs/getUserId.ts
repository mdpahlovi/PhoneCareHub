import { decode } from "next-auth/jwt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { notFound } from "next/navigation";

export default async function getUserId() {
    const session = await getServerSession(authOptions);
    const token = await decode({ token: session?.token, secret: process.env.NEXTAUTH_SECRET });

    if (!token) notFound();
    return token.sub;
}
