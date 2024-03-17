import { SECONDARY } from "@/exports/theme/colors";
import { Container, Typography } from "@mui/material";

export default function Section({ title, children }: { title: string } & React.PropsWithChildren) {
    const titleArray = title.split(" ");
    const lastWord = titleArray.pop();
    const firstPart = titleArray.join(" ");

    return (
        <Container sx={{ pb: 7.5, position: "relative", zIndex: 10 }}>
            <Typography mb={3} variant="h4" fontWeight={600} align="center">
                {firstPart}
                <span style={{ marginLeft: "12px", color: SECONDARY.main }}>{lastWord}</span>
            </Typography>
            {children}
        </Container>
    );
}
