import Link from "next/link";
import { Column } from "@/types/global";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import { getallOnlineAppointment } from "@/libs/fetch";
import DeleteButton from "@/components/Common/DeleteButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Avatar, Button, TableBody, TableCell, TableRow, Typography, Stack } from "@mui/material";

export const metadata = { title: "Manage Online Appointment" };

type SearchParams = { searchParams: { page?: string; size?: string; status?: string; email?: string } };

const columns: readonly Column[] = [
    { label: "User" },
    { label: "Device Info", minWidth: 110 },
    { label: "Issue Details", minWidth: 120 },
    { label: "Set Detail", minWidth: 98, align: "right" },
    { label: "Delete", align: "right" },
];

export default async function ManageOnlineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const onlineAppointment = await getallOnlineAppointment(session?.token, size, page, searchParams?.status, {
        email: searchParams?.email,
    });

    return (
        <>
            <Banner>Online Appointment</Banner>
            <Stack mb={3} alignItems="end">
                Pahlovi
            </Stack>
            <Table columns={columns} total={onlineAppointment?.meta?.total} size={size} page={page}>
                <TableBody>
                    {onlineAppointment?.data?.map(({ id, user, deviceInfo, issueDescription, status }) => (
                        <TableRow key={id} hover>
                            <TableCell>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <Avatar src={user?.image} alt="" />
                                    <Typography fontWeight={500}>{user?.name}</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>{deviceInfo}</TableCell>
                            <TableCell>{issueDescription}</TableCell>
                            <TableCell align="right">
                                <Button size="small" LinkComponent={Link} href={`/dashboard/appointment/${id}`}>
                                    Set Detail
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <DeleteButton id={id} path="onlineAppointment" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
