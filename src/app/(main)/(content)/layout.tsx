import { Suspense } from "react";
import { Container } from "@mui/material";
import Banner from "@/components/Common/Banner";
import SearchField from "@/components/Common/SearchField";

export default function ServicesLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner />
            <Container sx={{ my: 5, display: "flex", flexDirection: "column", gap: 4 }}>
                <Suspense>
                    <SearchField />
                </Suspense>
                {children}
            </Container>
        </>
    );
}
