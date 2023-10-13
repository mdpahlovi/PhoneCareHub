"use client";

import Link from "next/link";
import { styled } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import { StyledLinkProps } from "@/types/global";
import { Breadcrumbs, Container, Typography } from "@mui/material";

export const StyledBackground = styled("div")(({ theme }) => ({
    padding: "80px 0",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(/images/banner.jpg)",
    "&::before": {
        inset: "0",
        content: '""',
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
}));

export const StyledBreadcrumbLink = styled((props: StyledLinkProps) => {
    const { selected, ...other } = props;
    return <Link {...other} />;
})(({ theme, selected }) => ({
    textDecoration: selected ? "underline" : "none",
    color: selected ? theme.palette.secondary.main : "white",
    "&:hover": { textDecoration: "underline" },
}));

export default function Banner({ children }: React.PropsWithChildren) {
    const paths = usePathname().split("/");

    return (
        <StyledBackground>
            <Container sx={{ position: "relative", zIndex: 10 }}>
                <Typography variant="h3" fontWeight={600} color="white">
                    {children}
                </Typography>
                <Breadcrumbs separator="›" sx={{ color: "white", mt: 1 }}>
                    {paths.map((path, idx) => {
                        const href = path ? `/${path}` : "/";
                        const selected = paths.length - 1 === idx;
                        return (
                            <StyledBreadcrumbLink key={idx} href={href} selected={selected}>
                                {path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home"}
                            </StyledBreadcrumbLink>
                        );
                    })}
                </Breadcrumbs>
            </Container>
        </StyledBackground>
    );
}
