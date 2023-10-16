import Link from "next/link";
import { Column } from "@/types/global";
import { getallblogs } from "@/libs/fetch";
import { Avatar, Button, Stack, TableBody, TableCell, TableRow } from "@mui/material";
import Banner from "@/components/Common/Banner";
import Table from "@/components/Table/Table";
import DeleteButton from "@/components/Common/DeleteButton";
import { format, parseISO } from "date-fns";
import EditButton from "@/components/Common/EditButton";

type SearchParams = { searchParams: { page: string | null; size: string | null } };

const columns: readonly Column[] = [
    { label: "Image" },
    { label: "Title" },
    { label: "Content" },
    { label: "Source" },
    { label: "Published Date", minWidth: 136, align: "right" },
    { label: "Edit", align: "right" },
    { label: "Delete", align: "right" },
];

export const metadata = { title: "All Blog" };

export default async function Blogs({ searchParams }: SearchParams) {
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const blogs = await getallblogs(size, page + 1, "");

    return (
        <>
            <Banner>All Blog</Banner>
            <Stack mb={3} alignItems="end">
                <Button LinkComponent={Link} href="/dashboard/create_blog">
                    Create Blog
                </Button>
            </Stack>
            <Table columns={columns} total={blogs?.meta?.total!} size={size} page={page}>
                <TableBody>
                    {blogs?.data?.map(({ id, image, title, content, source, publishedDate }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>
                                <Avatar src={image} alt="" />
                            </TableCell>
                            <TableCell>{title}</TableCell>
                            <TableCell>{content}</TableCell>
                            <TableCell>{source}</TableCell>
                            <TableCell align="right">{format(parseISO(publishedDate), "PPP")}</TableCell>
                            <TableCell align="right">
                                <EditButton href={`/edit-blog/${id}`} />
                            </TableCell>
                            <TableCell align="right">
                                <DeleteButton id={id} path="blog" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
