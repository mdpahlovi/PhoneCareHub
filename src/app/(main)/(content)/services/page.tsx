import Pagination from "@/components/Common/Pagination";
import Services from "@/components/Main/Services";
import prisma from "@/libs/prisma";
import { searchQuery } from "@/libs/searchQuery";
import { Prisma } from "@prisma/client";

export const metadata = { title: "Services" };
type PageProps = Promise<{ searchParams: { page?: string; search?: string } }>;

export default async function ServicePage(props: PageProps) {
    const { searchParams } = await props;

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
