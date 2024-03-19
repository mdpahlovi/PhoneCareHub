import { Grid } from "@mui/material";
import { Blog } from "@prisma/client";
import BlogCard from "@/components/Main/Blogs/BlogCard";

export default function Blogs({ blogs }: { blogs: Blog[] }) {
    return (
        <Grid container columns={{ xs: 4, md: 8 }} spacing={3}>
            {blogs.map((blog, idx) => (
                <Grid item key={idx} xs={4}>
                    <BlogCard blog={blog} />
                </Grid>
            ))}
        </Grid>
    );
}
