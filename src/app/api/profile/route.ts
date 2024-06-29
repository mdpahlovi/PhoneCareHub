import prisma from "@/libs/prisma";
import { NextApiRequest } from "next";
import { decode } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function GET(req: NextApiRequest) {
    try {
        const session = await getServerSession(authOptions);
        const token = await decode({ token: session?.token, secret: process.env.NEXTAUTH_SECRET });

        if (token && token?.role && token?.sub) {
            if (token?.role === "user") {
                const user = await prisma.user.findUnique({ where: { id: token?.sub } });
                return NextResponse.json({ status: true, message: "Data retrieve successfully!...", data: user });
            } else {
                const admin = await prisma.admin.findUnique({ where: { id: token?.sub } });
                return NextResponse.json({ status: true, message: "Data retrieve successfully!...", data: admin });
            }
        } else {
            return NextResponse.json({ status: false, message: "Unauthorized!..." });
        }
    } catch (error) {
        return NextResponse.json({ status: false, message: "Something wants wrong!..." });
    }
}
