import dayjs from "dayjs";
import { getAllBlog } from "@/libs/fetch";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import EditButton from "@/components/Dashboard/Components/EditButton";
import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";

type SearchParams = { searchParams: { page?: string; size?: string } };

const columns = ["Image", "Title", "Content", "Source", "Published Date", "Edit", "Delete"];

export const metadata = { title: "All Blog" };

export default async function Blogs({ searchParams }: SearchParams) {
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const blogs = await getAllBlog(size, page + 1, "");
    const pagination = { total: blogs?.meta?.total!, size, page };

    return (
        <>
            <Banner>All Blog</Banner>
            <Table columns={columns} pagination={pagination} create="blog">
                <TableBody>
                    {blogs?.data?.map(({ id, image, title, content, source, publishedDate }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>
                                <Avatar src={image} alt="" />
                            </TableCell>
                            <TableCell sx={{ minWidth: 192 }}>{title}</TableCell>
                            <TableCell sx={{ minWidth: 384 }}>{content}</TableCell>
                            <TableCell>{source}</TableCell>
                            <TableCell align="right">{dayjs(publishedDate).format("MMMM D, YYYY")}</TableCell>
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
