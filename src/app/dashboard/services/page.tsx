import Link from "next/link";
import { Column } from "@/types/global";
import Table from "@/components/Table/Table";
import { getallservices } from "@/libs/fetch";
import Banner from "@/components/Common/Banner";
import DeleteButton from "@/components/Common/DeleteButton";
import { Avatar, TableBody, TableCell, TableRow, Button, Stack } from "@mui/material";
import EditButton from "@/components/Common/EditButton";

type SearchParams = { searchParams: { page: string | null; size: string | null } };

const columns: readonly Column[] = [
    { label: "Image" },
    { label: "Name" },
    { label: "Description" },
    { label: "Estimate time", minWidth: 128, align: "right" },
    { label: "Edit", align: "right" },
    { label: "Delete", align: "right" },
];

export const metadata = { title: "All Service" };

export default async function ManageService({ searchParams }: SearchParams) {
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const services = await getallservices(size, page + 1, "");

    return (
        <>
            <Banner>All Service</Banner>
            <Stack alignItems="end">
                <Button component={Link} href="/dashboard/create-service">
                    Create Service
                </Button>
            </Stack>
            <Table columns={columns} total={services?.meta?.total!} size={size} page={page}>
                <TableBody>
                    {services?.data?.map(({ id, image, name, estimatetime, description }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>
                                <Avatar src={image} alt="" />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{description}</TableCell>
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
        </>
    );
}
