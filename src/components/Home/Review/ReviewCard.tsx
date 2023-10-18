import { Review } from "@/types/response";
import { Paper, Typography, Avatar, Rating, Stack } from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const ReviewCard = ({ review }: { review: Review }) => {
    return (
        <Stack alignItems="center" justifyContent="center" textAlign="center" gap={1} p={3} component={Paper}>
            <Avatar alt={review.name} />
            <Typography variant="subtitle1" fontWeight="bold">
                {review.name}
            </Typography>
            <Rating value={review.rating} precision={0.5} readOnly />
            <Typography color="text.secondary">{review.text}</Typography>
            <FormatQuoteRoundedIcon sx={{ color: "divider", fontSize: "4rem" }} />
        </Stack>
    );
};

export default ReviewCard;
