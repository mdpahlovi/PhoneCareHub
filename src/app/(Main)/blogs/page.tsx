import { Container } from "@mui/material";
import { getAllBlog } from "@/libs/fetch";
import Blogs from "@/components/Main/Blogs";
import Banner from "@/components/Common/Banner";
import Pagination from "@/components/Common/Pagination";
import SearchField from "@/components/Common/SearchField";

export const metadata = { title: "Blogs" };

type SearchParams = { searchParams: { page?: string; search?: string } };

export default async function BlogPage({ searchParams }: SearchParams) {
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 1);
    const blogs = await getAllBlog(4, page, search);

    return (
        <>
            <Banner>Blogs</Banner>
            <Container sx={{ my: 5, display: "flex", flexDirection: "column", gap: 4 }}>
                <SearchField search={search} />
                <Blogs blogs={blogs?.data!} />
                <Pagination page={page} count={blogs?.meta?.totalPage!} />
            </Container>
        </>
    );
}
