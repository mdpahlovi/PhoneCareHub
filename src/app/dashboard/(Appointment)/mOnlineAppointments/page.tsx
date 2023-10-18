import Link from "next/link";
import { Column } from "@/types/global";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import { getallOnlineAppointment } from "@/libs/fetch";
import DeleteButton from "@/components/Common/DeleteButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Avatar, Button, TableBody, TableCell, TableRow, Typography, Stack } from "@mui/material";
import SearchField from "@/components/Common/SearchField";
import StatusFilter from "@/components/Appointment/StatusFilter";

export const metadata = { title: "Manage Online Appointment" };

type SearchParams = { searchParams: { search?: string; page?: string; size?: string; status?: string; email?: string } };

const columns: readonly Column[] = [
    { label: "User" },
    { label: "Device Info", minWidth: 110 },
    { label: "Issue Details", minWidth: 120 },
    { label: "Set Detail", minWidth: 98, align: "right" },
    { label: "Delete", align: "right" },
];

export default async function ManageOnlineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const search = searchParams?.search ? searchParams.search : "";
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const status = searchParams?.status ? searchParams.status : "pending";
    const onlineAppointment = await getallOnlineAppointment(session?.token, search, size, page, status);

    return (
        <>
            <Banner>Online Appointments</Banner>
            <Stack mb={3} direction="row" alignItems="end" flexWrap="wrap" gap={3}>
                <SearchField search={search} />
                <StatusFilter status={status} items={["pending", "reviewing", "payment", "servicing", "completed", "cancelled"]} />
            </Stack>
            <Table columns={columns} total={onlineAppointment?.meta?.total} size={size} page={page}>
                <TableBody>
                    {onlineAppointment?.data?.map(({ id, user, deviceInfo, issueDescription }) => (
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
                                <Button size="small" LinkComponent={Link} href={`/dashboard/mOnlineAppointments/${id}`}>
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
