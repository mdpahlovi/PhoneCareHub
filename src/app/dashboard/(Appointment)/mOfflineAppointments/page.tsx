import { Column } from "@/types/global";
import { format, parseISO } from "date-fns";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import { getallOfflineAppointment } from "@/libs/fetch";
import SearchField from "@/components/Common/SearchField";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import StatusFilter from "@/components/Dashboard/Components/StatusFilter";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import SetDetailButton from "@/components/Dashboard/Components/SetDetailButton";
import { Avatar, Box, Stack, TableBody, TableCell, TableRow, Typography } from "@mui/material";

export const metadata = { title: "Manage Offline Appointment" };

const columns: readonly Column[] = [
    { label: "User" },
    { label: "Email" },
    { label: "Device Info", minWidth: 110 },
    { label: "Issue Details", minWidth: 120 },
    { label: "Appointment Date", minWidth: 156, align: "right" },
    { label: "Set Detail", minWidth: 98, align: "right" },
    { label: "Delete", align: "right" },
];

type SearchParams = {
    searchParams: { search?: string; page?: string; size?: string; status?: string; email?: string; appointmentDate?: string };
};

export default async function ManageOfflineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const search = searchParams?.search ? searchParams.search : "";
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const status = searchParams?.status ? searchParams.status : "appointments";
    const appointmentDate = searchParams?.appointmentDate ? searchParams.appointmentDate : undefined;
    const offlineAppointment = await getallOfflineAppointment(session?.token, search, size, page, status, appointmentDate);

    return (
        <>
            <Banner>Offline Appointment</Banner>
            <Stack mb={3} direction={{ xs: "column", sm: "row" }} alignItems="end" justifyContent="end" gap={3}>
                <SearchField search={search} />
                <StatusFilter status={status} items={["appointments", "completed", "cancelled"]} />
            </Stack>
            <Table columns={columns} total={offlineAppointment?.meta?.total} size={size} page={page}>
                <TableBody>
                    {offlineAppointment?.data?.map(({ id, user, deviceInfo, issueDescription, appointmentDate }) => (
                        <TableRow key={id} hover>
                            <TableCell>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <Avatar src={user?.image} alt="" />
                                    <Box>
                                        <Typography variant="body2">{user?.name}</Typography>
                                        <Typography variant="body2">{user?.phone}</Typography>
                                    </Box>
                                </Stack>
                            </TableCell>
                            <TableCell>
                                <Typography>{user?.email}</Typography>
                            </TableCell>
                            <TableCell>{deviceInfo}</TableCell>
                            <TableCell>{issueDescription}</TableCell>
                            <TableCell align="right">{format(parseISO(appointmentDate), "PPP")}</TableCell>
                            <TableCell align="right">
                                <SetDetailButton href={`mOfflineAppointments/${id}`} />
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
