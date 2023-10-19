"use client";

import { Review } from "@/types/response";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Section from "@/components/Common/Section";
import { Typography, Avatar, Rating, Stack } from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

export default function Reviews({ reviews }: { reviews: Review[] }) {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 900 }, items: 3, slidesToSlide: 3 },
        tablet: { breakpoint: { max: 900, min: 600 }, items: 2, slidesToSlide: 2 },
        mobile: { breakpoint: { max: 600, min: 0 }, items: 1, slidesToSlide: 1 },
    };

    return (
        <Section title="Client Reviews">
            <Carousel responsive={responsive} autoPlay>
                {reviews.map(({ user, rating, comment }, idx) => {
                    const borderWhite = { border: 1, borderRadius: 1, borderColor: "divider" };
                    const center = { textAlign: "center", alignItems: "center", justifyContent: "center" };

                    return (
                        <Stack key={idx} mx={1.5} {...(center as any)} gap={1} p={3} {...borderWhite}>
                            <Avatar src={user.image} alt="" />
                            <Typography variant="subtitle1" fontWeight="bold">
                                {user.name}
                            </Typography>
                            <Rating value={rating} precision={0.5} readOnly />
                            <Typography color="text.secondary">{comment}</Typography>
                            <FormatQuoteRoundedIcon sx={{ color: "divider", fontSize: "4rem" }} />
                        </Stack>
                    );
                })}
            </Carousel>
        </Section>
    );
}
