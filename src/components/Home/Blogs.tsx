import { Grid } from "@mui/material";
import { Blog } from "@/types/response";
import SeeAllButton from "./SeeAllButton";
import Section from "@/components/Common/Section";
import BlogCard from "@/components/Blogs/BlogCard";

export default function Blogs({ blogs }: { blogs: Blog[] }) {
    return (
        <Section title="Our Latest Blogs">
            <Grid container columns={{ xs: 4, md: 8 }} spacing={3}>
                {blogs.map((blog, idx) => (
                    <Grid item key={idx} xs={4}>
                        <BlogCard blog={blog} />
                    </Grid>
                ))}
            </Grid>
            <SeeAllButton href="blog" />
        </Section>
    );
}
