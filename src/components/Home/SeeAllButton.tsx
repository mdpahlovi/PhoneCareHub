import Link from "next/link";
import { Box, Button } from "@mui/material";

export default function SeeAllButton({ href }: { href: string }) {
    return (
        <Box textAlign="center">
            <Button LinkComponent={Link} href={`/${href}s`} sx={{ mt: 3 }}>
                See All {href.charAt(0).toUpperCase() + href.slice(1)}
            </Button>
        </Box>
    );
}
