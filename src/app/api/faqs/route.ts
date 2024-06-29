import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const faqs = await prisma.fAQs.findMany({ orderBy: { serial: "asc" } });

        return NextResponse.json({ status: true, message: "Data retrieve successfully!...", data: faqs });
    } catch (error) {
        return NextResponse.json({ status: false, message: "Something wants wrong!..." });
    }
}
