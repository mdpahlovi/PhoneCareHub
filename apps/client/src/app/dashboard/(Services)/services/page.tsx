import Table from "@/components/Table/Table";
import { getAllService } from "@/libs/fetch";
import EditButton from "@/components/Dashboard/Components/EditButton";
import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";

type SearchParams = { searchParams: { page?: string; size?: string } };

const columns = ["Image", "Name", "Description", "Estimate Time", "Edit", "Delete"];

export const metadata = { title: "All Service" };

export default async function ManageService({ searchParams }: SearchParams) {
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const services = await getAllService(size, page + 1, "");

    return (
        <Table columns={columns} pagination={{ total: services?.meta?.total!, size, page }}>
            <TableBody>
                {services?.data?.map(({ id, image, name, estimatetime, description }, idx) => (
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
