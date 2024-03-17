import { Container } from "@mui/material";
import { getAllService } from "@/libs/fetch";
import Banner from "@/components/Common/Banner";
import Services from "@/components/Main/Services";
import Pagination from "@/components/Common/Pagination";
import SearchField from "@/components/Common/SearchField";

export const metadata = { title: "Services" };

type SearchParams = { searchParams: { page?: string; search?: string } };

export default async function ServicePage({ searchParams }: SearchParams) {
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 1);
    const services = await getAllService(6, page, search);

    return (
        <>
            <Banner>Services</Banner>
            <Container sx={{ my: 5, display: "flex", flexDirection: "column", gap: 4 }}>
                <SearchField search={search} />
                <Services services={services?.data!} />
                <Pagination page={page} count={services?.meta?.totalPage!} />
            </Container>
        </>
    );
}
