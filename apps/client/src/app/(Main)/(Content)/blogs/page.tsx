import { BASE_URL } from "@/exports/axios";
import Blogs from "@/components/Main/Blogs";
import Pagination from "@/components/Common/Pagination";

export const metadata = { title: "Blogs" };

export default async function BlogPage({ searchParams }: { searchParams: { page?: string; search?: string } }) {
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 1);

    const res = await fetch(`${BASE_URL}/blog?size=4&page=${page}&search=${search}`);
    if (!res.ok) throw new Error("Failed To Fetch Data");
    const blogs = await res.json();

    return (
        <>
            <Blogs blogs={blogs?.data} />
            <Pagination page={page} count={blogs?.meta?.totalPage} />
        </>
    );
}
