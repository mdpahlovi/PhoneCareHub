import Image from "next/image";
import { createElement } from "react";
import { features } from "@/exports/data";
import { StyledWhyChooseUs } from "./Styled";
import { Box, Stack, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function WhyChooseUs() {
    return (
        <StyledWhyChooseUs>
            <Box display={{ xs: "none", md: "block" }} mr="auto">
                <Image src="/images/about/section.png" alt="" style={{ width: "100%" }} width={500} height={500} />
            </Box>
            <Stack>
                <Typography variant="body1" textTransform="uppercase" fontWeight={600} color="secondary.main">
                    Why Choose Us
                </Typography>
                <Typography variant="h4" fontWeight={800}>
                    Over 30,000 gadget repair since year of 2001
                </Typography>
                <Typography mt={2}>
                    Gadget repair services involve the professional repair and mainten of electronic devices and gadgets, including but not
                    limited to the smartphones, tablets, laptops, other consumer electronics.
                </Typography>
                <List>
                    {features.map(({ icon, title, secondary }, idx) => (
                        <ListItem key={idx} divider={features.length !== idx + 1}>
                            <ListItemIcon>{createElement(icon)}</ListItemIcon>
                            <ListItemText primary={title} secondary={secondary} />
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </StyledWhyChooseUs>
    );
}
