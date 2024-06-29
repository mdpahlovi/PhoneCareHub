import prisma from "@/libs/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    try {
        const faqs = await prisma.fAQs.findMany({ orderBy: { serial: "asc" } });

        return NextResponse.json({ status: true, message: "Data retrieve successfully!...", data: faqs });
    } catch (error) {
        return NextResponse.json({ status: false, message: "Something wants wrong!..." });
    }
}
