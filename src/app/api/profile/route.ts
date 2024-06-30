import prisma from "@/libs/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const token = await getToken({ req });

        return NextResponse.json({ status: false, message: token });

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
