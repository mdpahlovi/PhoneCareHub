import React from "react";
import { Grid } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { threeCol } from "@/exports/constant";
import Section from "@/components/Common/Section";

const reviews = [
    {
        name: "John Doe",
        avatar: "/john-doe-avatar.jpg",
        rating: 4.5,
        text: "Great service! My phone was fixed quickly, and it works perfectly now.",
    },
    {
        name: "John Doe",
        avatar: "/john-doe-avatar.jpg",
        rating: 4.5,
        text: "Great service! My phone was fixed quickly, and it works perfectly now.",
    },
    {
        name: "John Doe",
        avatar: "/john-doe-avatar.jpg",
        rating: 4.5,
        text: "Great service! My phone was fixed quickly, and it works perfectly now.",
    },
];

const Review = () => {
    return (
        <Section title="Client Reviews">
            <Grid container columns={threeCol} spacing={3}>
                {reviews.map((review, idx) => (
                    <Grid item key={idx} xs={4}>
                        <ReviewCard review={review} />
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
};

export default Review;
