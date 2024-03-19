"use client";

import Image from "next/image";
import { useState } from "react";
import { StyledFAQ } from "./Styled";
import { FAQs } from "@prisma/client";
import Section from "@/components/Common/Section";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";

export default function FAQComp({ faq }: { faq: FAQs[] }) {
    const [expanded, setExpanded] = useState<number | boolean>(0);

    const handleChange = (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : true);
    };

    return (
        <Section title="Frequently Asked Questions">
            <StyledFAQ>
                <Box display={{ xs: "none", md: "block" }} mr="auto">
                    <Image src="/images/faq.png" alt="" style={{ width: "100%" }} width={400} height={400} />
                </Box>
                <div>
                    {faq.map(({ id, question, answer }, idx) => (
                        <Accordion key={id} expanded={expanded === idx} onChange={handleChange(idx)}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={600}>{question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary">{answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </StyledFAQ>
        </Section>
    );
}
