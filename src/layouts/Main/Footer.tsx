import { createElement } from "react";
import { FooterLogo } from "./Client";
import { footer_links, footer_social } from "@/exports/data";
import { StyledLink } from "@/components/Common/StyledLink";
import { Container, Stack, Typography, Divider, Copyright, Box } from "@/exports/mui";

export default function Footer() {
    return (
        <Box borderTop={1} borderColor="divider" py={3}>
            <Container>
                <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={3}>
                    <FooterLogo />
                    <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={6}>
                        {footer_links.map(({ title, items }) => (
                            <Stack key={title} gap={0.5}>
                                <Typography fontWeight={500} textTransform="uppercase">
                                    {title}
                                </Typography>
                                <Stack>
                                    {items.map((link, idx) => (
                                        <StyledLink key={idx} href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>
                                            {link}
                                        </StyledLink>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
                <Divider sx={{ m: "24px 0" }} />
                <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" justifyContent="space-between" gap={1.5}>
                    <Copyright />
                    <Stack direction="row" gap={2}>
                        {footer_social.map(({ link, icon }, idx) => (
                            <a href={link} target="_blank" key={idx} style={{ color: "black" }}>
                                {createElement(icon)}
                            </a>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
