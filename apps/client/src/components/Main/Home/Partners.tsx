import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Box, Container } from "@mui/material";

export default function Partners() {
    return (
        <Box bgcolor="divider" py={7.5}>
            <Container>
                <Marquee>
                    {[...Array(6)].map((_, idx) => (
                        <Image key={idx} src={`/partners/${idx + 1}.png`} alt="" width={140} height={80} style={{ marginLeft: "48px" }} />
                    ))}
                </Marquee>
            </Container>
        </Box>
    );
}
