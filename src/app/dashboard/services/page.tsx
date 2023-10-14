import { Column } from "@/types/global";
import { getallservices } from "@/libs/fetch";
import Table from "@/components/Table/Table";
import { Avatar, TableBody, TableCell, TableRow, Button, Stack } from "@mui/material";
import Link from "next/link";
import Banner from "@/components/Common/Banner";

type SearchParams = { searchParams: { page: string | null; size: string | null } };

const columns: readonly Column[] = [
    { label: "Image" },
    { label: "Name" },
    { label: "Description" },
    { label: "Estimate time", align: "right" },
    { label: "Edit", align: "right" },
    { label: "Delete", align: "right" },
];

export const metadata = { title: "All Service" };

export default async function ManageService({ searchParams }: SearchParams) {
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const services = await getallservices(size, page, "");

    return (
        <>
            <Banner>All Service</Banner>
            <Stack alignItems="end">
                <Button component={Link} href="/dashboard/create-service" sx={{ mt: 3 }}>
                    Create Service
                </Button>
            </Stack>
            <Table columns={columns} total={services?.meta?.total!} size={size} page={page}>
                <TableBody>
                    {services?.data?.map(({ image, name, estimatetime, description }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>
                                <Avatar src={image} alt="" />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{description}</TableCell>
                            <TableCell align="right">{estimatetime}</TableCell>
                            <TableCell align="right">{}</TableCell>
                            <TableCell align="right">{}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
