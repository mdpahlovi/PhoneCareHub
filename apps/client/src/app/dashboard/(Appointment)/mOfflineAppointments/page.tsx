import dayjs from "dayjs";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import { getStatus } from "@/exports/constant";
import Banner from "@/components/Common/Banner";
import { getallOfflineAppointment } from "@/libs/fetch";
import SearchField from "@/components/Common/SearchField";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import StatusFilter from "@/components/Dashboard/Components/StatusFilter";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import DetailButton from "@/components/Dashboard/Components/DetailButton";
import { Avatar, Box, Stack, TableBody, TableCell, TableRow, Typography } from "@mui/material";

export const metadata = { title: "Manage Offline Appointment" };
export const columns = ["User", "Email", "Device Info", "Issue Details", "Appointment Date", "See Detail", "Delete"];
type SearchParams = { searchParams: { search?: string; page?: string; size?: string; status?: string; email?: string } };

export default async function ManageOfflineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const search = searchParams?.search ? searchParams.search : "";
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const status = searchParams?.status ? searchParams.status : "pending";
    const offlineAppointment = await getallOfflineAppointment(session?.token, search, size, page, status);

    return (
        <>
            <Banner>Offline Appointment</Banner>
            <Stack mb={3} direction={{ xs: "column", sm: "row" }} alignItems="end" justifyContent="end" gap={3}>
                <SearchField search={search} />
                <StatusFilter status={status} items={[...getStatus("offline", true), "cancelled"]} />
            </Stack>
            <Table columns={columns} pagination={{ total: offlineAppointment?.meta?.total!, size, page }}>
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
                            <TableCell align="right">{dayjs(appointmentDate).format("MMMM D, YYYY")}</TableCell>
                            <TableCell align="right">
                                <DetailButton label="See Detail" href={`mOfflineAppointments/${id}`} />
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
