import { BASE_URL } from "@/exports/axios";
import Services from "@/components/Main/Services";
import Pagination from "@/components/Common/Pagination";

export const metadata = { title: "Services" };

export default async function ServicePage({ searchParams }: { searchParams: { page?: string; search?: string } }) {
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 1);

    const res = await fetch(`${BASE_URL}/service?page=${page}&search=${search}`);
    if (!res.ok) throw new Error("Failed To Fetch Data");
    const services = await res.json();

    return (
        <>
            <Services services={services?.data} />
            <Pagination page={page} count={services?.meta?.totalPage} />
        </>
    );
}
