import { createElement } from "react";
import { ThemedLogo } from "./Button";
import { NavLink } from "@/exports/component";
import convertToSlug from "@/libs/convertToSlug";
import { StyledFooter } from "./StyledComponent";
import { footer_links, footer_social } from "@/exports/data";
import { Container, Stack, Typography, Divider } from "@/exports/mui";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={3}>
                    <ThemedLogo />
                    <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={3}>
                        {footer_links.map(({ title, items }) => (
                            <Stack key={title} gap={0.5}>
                                <Typography fontWeight={500} textTransform="uppercase">
                                    {title}
                                </Typography>
                                <Stack>
                                    {items.map((link, idx) => (
                                        <NavLink key={idx} href={`/${convertToSlug(link)}`}>
                                            {link}
                                        </NavLink>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
                <Divider style={{ margin: "24px 0" }} />
                <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" justifyContent="space-between" gap={1.5}>
                    <Typography align="center">&copy; {new Date().getFullYear()} eGroupLearn, All Rights Reserved.</Typography>
                    <Stack direction="row" gap={2}>
                        {footer_social.map(({ link, icon }, idx) => createElement(icon, { key: idx }))}
                    </Stack>
                </Stack>
            </Container>
        </StyledFooter>
    );
}
