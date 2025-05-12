"use client";

import useReviewDialogStore from "@/hooks/zustand/useReviewDialogStore";
import EditIcon from "@mui/icons-material/Edit";
import { Card, CardContent, Grid, IconButton, Rating, Stack, Typography } from "@mui/material";
import { Review } from "@prisma/client";
import DeleteButton from "../Dashboard/Components/DeleteButton";

export default function ReviewComponent({ reviews }: { reviews: Review[] }) {
    const { onEdit } = useReviewDialogStore();

    if (reviews.length === 0) return "No Reviews Added";

    return (
        <Grid container mt={0} columns={{ xs: 4, md: 8 }} spacing={3}>
            {reviews.map((review) => {
                const { id, rating, comment } = review;

                return (
                    <Grid size={{ xs: 4 }} key={id}>
                        <Card>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Rating value={rating} precision={0.5} readOnly />
                                    <Stack direction="row" gap={2}>
                                        <IconButton onClick={() => onEdit(review)}>
                                            <EditIcon />
                                        </IconButton>
                                        <DeleteButton id={id} path="review" />
                                    </Stack>
                                </Stack>
                                <Typography sx={{ paddingBottom: 0 }}>{comment}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}
