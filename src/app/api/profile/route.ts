import prisma from "@/libs/prisma";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    try {
        const token = cookies().get("next-auth.session-token")?.value;
        if (!token) return NextResponse.json({ status: false, message: "Unauthorized!..." });

        const data = await decode({ token, secret: process.env.NEXTAUTH_SECRET });

        if (data && data?.role && data?.sub) {
            if (data?.role === "user") {
                const user = await prisma.user.findUnique({ where: { id: data?.sub } });
                return NextResponse.json({ status: true, message: "Data retrieve successfully!...", data: user });
            } else {
                const admin = await prisma.admin.findUnique({ where: { id: data?.sub } });
                return NextResponse.json({ status: true, message: "Data retrieve successfully!...", data: admin });
            }
        } else {
            return NextResponse.json({ status: false, message: "Unauthorized!..." });
        }
    } catch (error) {
        return NextResponse.json({ status: false, message: "Something wants wrong!..." });
    }
}
