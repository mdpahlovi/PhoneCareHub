import { Box, Container } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = [
    "https://demo.proteusthemes.com/repairpress/wp-content/uploads/sites/27/2015/09/1.png",
    "https://demo.proteusthemes.com/repairpress/wp-content/uploads/sites/27/2015/09/2.png",
    "https://demo.proteusthemes.com/repairpress/wp-content/uploads/sites/27/2015/09/3.png",
    "https://demo.proteusthemes.com/repairpress/wp-content/uploads/sites/27/2015/09/4.png",
    "https://demo.proteusthemes.com/repairpress/wp-content/uploads/sites/27/2015/09/5.png",
    "https://demo.proteusthemes.com/repairpress/wp-content/uploads/sites/27/2015/09/6.png",
];

export default function Partners() {
    return (
        <Box bgcolor="divider" py={7.5}>
            <Container>
                <Marquee>
                    {images.map((image, idx) => (
                        <Image key={idx} src={image} alt="" width={140} height={80} style={{ marginLeft: "48px" }} />
                    ))}
                </Marquee>
            </Container>
        </Box>
    );
}
