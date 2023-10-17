import Link from "next/link";
import { Column } from "@/types/global";
import { format, parseISO } from "date-fns";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import { getallOfflineAppointment } from "@/libs/fetch";
import DeleteButton from "@/components/Common/DeleteButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Avatar, Button, Stack, TableBody, TableCell, TableRow, Typography } from "@mui/material";

export const metadata = { title: "Manage Offline Appointment" };

const columns: readonly Column[] = [
    { label: "User" },
    { label: "Device Info", minWidth: 110 },
    { label: "Issue Details", minWidth: 120 },
    { label: "Appointment Date", minWidth: 156, align: "right" },
    { label: "Set Detail", minWidth: 98, align: "right" },
    { label: "Delete", align: "right" },
];

type SearchParams = {
    searchParams: { page?: string; size?: string; status?: string; email?: string; appointmentDate?: string };
};

export default async function ManageOfflineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const offlineAppointment = await getallOfflineAppointment(session?.token, size, page, searchParams?.status, {
        email: searchParams?.email,
        appointmentDate: searchParams?.appointmentDate,
    });

    return (
        <>
            <Banner>Offline Appointment</Banner>
            <Stack mb={3} alignItems="end">
                Pahlovi
            </Stack>
            <Table columns={columns} total={offlineAppointment?.meta?.total} size={size} page={page}>
                <TableBody>
                    {offlineAppointment?.data?.map(({ id, user, deviceInfo, issueDescription, appointmentDate }) => (
                        <TableRow key={id} hover>
                            <TableCell>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <Avatar src={user?.image} alt="" />
                                    <Typography fontWeight={500}>{user?.name}</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>{deviceInfo}</TableCell>
                            <TableCell>{issueDescription}</TableCell>
                            <TableCell align="right">{format(parseISO(appointmentDate), "PPP")}</TableCell>
                            <TableCell align="right">
                                <Button size="small" LinkComponent={Link} href={`/dashboard/mOfflineAppointments/${id}`}>
                                    Set Detail
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <DeleteButton id={id} path="offlineAppointment" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
