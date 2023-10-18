import Link from "next/link";
import { Box, Button } from "@mui/material";
import firstWordCapital from "@/libs/firstWordCapital";

export default function SeeAllButton({ href }: { href: string }) {
    return (
        <Box textAlign="center">
            <Button LinkComponent={Link} href={`/${href}s`} sx={{ mt: 3 }}>
                See All {firstWordCapital(href)}
            </Button>
        </Box>
    );
}
