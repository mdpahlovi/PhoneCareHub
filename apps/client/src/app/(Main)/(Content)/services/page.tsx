import prisma from "@/libs/prisma";
import { Prisma } from "@prisma/client";
import { searchQuery } from "@/libs/searchQuery";
import Services from "@/components/Main/Services";
import Pagination from "@/components/Common/Pagination";

export const metadata = { title: "Services" };

export default async function ServicePage({ searchParams }: { searchParams: { page?: string; search?: string } }) {
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 1);

    const andConditions = [];
    if (search) andConditions.push(searchQuery(search, ["name"]));
    const where: Prisma.ServiceWhereInput = { AND: andConditions };

    const services = await prisma.service.findMany({
        where,
        select: { id: true, image: true, name: true, description: true },
        skip: (page - 1) * 6,
        take: 6,
    });
    const total = await prisma.service.count({ where });

    return (
        <>
            <Services services={services} />
            <Pagination page={page} count={Math.ceil(total / 6)} />
        </>
    );
}
