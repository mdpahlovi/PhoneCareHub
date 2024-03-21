import dayjs from "dayjs";
import prisma from "@/libs/prisma";
import Table from "@/components/Table/Table";
import EditButton from "@/components/Dashboard/Components/EditButton";
import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";

export const metadata = { title: "All Blog" };
const columns = ["Image", "Title", "Content", "Source", "Published Date", "Edit", "Delete"];

export default async function Blogs({ searchParams }: { searchParams: { page?: string; size?: string } }) {
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);

    const blogs = await prisma.blog.findMany({ skip: size * page, take: size, orderBy: { createdAt: "desc" } });
    const total = await prisma.blog.count();

    return (
        <Table columns={columns} pagination={{ total, size, page }}>
            <TableBody>
                {blogs.map(({ id, image, title, content, source, publishedDate }, idx) => (
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
    );
}
