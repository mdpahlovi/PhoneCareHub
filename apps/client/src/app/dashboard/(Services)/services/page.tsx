import prisma from "@/libs/prisma";
import Table from "@/components/Table/Table";
import EditButton from "@/components/Dashboard/Components/EditButton";
import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";

export const metadata = { title: "All Service" };
const columns = ["Image", "Name", "Description", "Estimate Time", "Edit", "Delete"];

export default async function ManageService({ searchParams }: { searchParams: { page?: string; size?: string } }) {
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);

    const services = await prisma.service.findMany({ skip: size * page, take: size, orderBy: { createdAt: "desc" } });
    const total = await prisma.service.count();

    return (
        <Table columns={columns} pagination={{ total, size, page }}>
            <TableBody>
                {services.map(({ id, image, name, estimatetime, description }, idx) => (
                    <TableRow key={idx} hover>
                        <TableCell>
                            <Avatar src={image} alt="" />
                        </TableCell>
                        <TableCell sx={{ minWidth: 160 }}>{name}</TableCell>
                        <TableCell sx={{ minWidth: 640 }}>{description}</TableCell>
                        <TableCell align="right">{estimatetime}</TableCell>
                        <TableCell align="right">
                            <EditButton href={`/edit-service/${id}`} />
                        </TableCell>
                        <TableCell align="right">
                            <DeleteButton id={id} path="service" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
