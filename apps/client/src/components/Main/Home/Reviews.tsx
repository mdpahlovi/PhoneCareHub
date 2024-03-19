"use client";

import { Review } from "@prisma/client";
import Section from "@/components/Common/Section";
import { review_props } from "@/exports/constant";
import { Card, CardContent } from "@mui/material";
import { Carousel, Typography, Avatar, Rating } from "@/exports/mui";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const fake_reviews = [
    {
        id: "1",
        rating: 5.0,
        comment: "Amazing service! They fixed my iPhone X quickly. I'm impressed!",
        user: {
            name: "Emily Johnson",
            image: "/reviews/1-image.jpg",
        },
    },
    {
        id: "2",
        rating: 3.5,
        comment: "Good job! Repaired my Google Pixel 4a's screen, but it took longer than expected.",
        user: {
            name: "Michael Smith",
            image: "/reviews/4-image.jpg",
        },
    },
    {
        id: "3",
        rating: 4.5,
        comment: "Decent service. They fixed my OnePlus 7T's battery issue, but the price was a bit high.",
        user: {
            name: "Sophia Williams",
            image: "/reviews/5-image.jpg",
        },
    },
    {
        id: "4",
        rating: 4,
        comment: "Exceptional! Repaired my iPhone 11 screen, and it looks brand new. Highly recommended!",
        user: {
            name: "David Brown",
            image: "/reviews/6-image.jpg",
        },
    },
    {
        id: "5",
        rating: 3.5,
        comment: "Average service. Fixed my Motorola G6, but it had some minor issues after the repair.",
        user: {
            name: "Olivia Davis",
            image: "/reviews/9-image.jpg",
        },
    },
    {
        id: "6",
        rating: 4.5,
        comment: "Incredible! They resolved the charging issue on my LG V60 promptly. Top-notch service!",
        user: {
            name: "Daniel Wilson",
            image: "/reviews/10-image.jpg",
        },
    },
];

export default function Reviews({ reviews }: { reviews: Review[] }) {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 900 }, items: 3, slidesToSlide: 3 },
        tablet: { breakpoint: { max: 900, min: 600 }, items: 2, slidesToSlide: 2 },
        mobile: { breakpoint: { max: 600, min: 0 }, items: 1, slidesToSlide: 1 },
    };

    return (
        <Section title="Client Reviews">
            <Carousel responsive={responsive} autoPlay infinite>
                {fake_reviews.map(({ user, rating, comment }, idx) => (
                    <Card key={idx} sx={{ mx: 1.5, height: "100%" }}>
                        <CardContent sx={review_props}>
                            <Avatar src={user.image} alt="" />
                            <Typography variant="subtitle1" fontWeight="bold" mt={1}>
                                {user.name}
                            </Typography>
                            <Rating value={rating} precision={0.5} readOnly />
                            <Typography color="text.secondary" mt={0.5}>
                                {comment}
                            </Typography>
                            <FormatQuoteRoundedIcon sx={{ mt: "auto", color: "divider", fontSize: "4rem" }} />
                        </CardContent>
                    </Card>
                ))}
            </Carousel>
        </Section>
    );
}
