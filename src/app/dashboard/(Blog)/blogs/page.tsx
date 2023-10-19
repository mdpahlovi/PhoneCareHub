import { Column } from "@/types/global";
import { format, parseISO } from "date-fns";
import Table from "@/components/Table/Table";
import { getAllBlog } from "@/libs/fetch";
import Banner from "@/components/Common/Banner";
import EditButton from "@/components/Dashboard/Components/EditButton";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import CreateButton from "@/components/Dashboard/Components/CreateButton";

type SearchParams = { searchParams: { page?: string; size?: string } };

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
    const blogs = await getAllBlog(size, page + 1, "");

    return (
        <>
            <Banner>All Blog</Banner>
            <CreateButton href="blog" />
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
