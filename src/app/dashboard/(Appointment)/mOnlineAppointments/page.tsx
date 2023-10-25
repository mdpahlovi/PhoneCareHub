import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import { getallOnlineAppointment } from "@/libs/fetch";
import SearchField from "@/components/Common/SearchField";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import StatusFilter from "@/components/Dashboard/Components/StatusFilter";
import DetailButton from "@/components/Dashboard/Components/DetailButton";
import { Avatar, TableBody, TableCell, TableRow, Typography, Stack, Box } from "@mui/material";

export const metadata = { title: "Manage Online Appointment" };

type SearchParams = { searchParams: { search?: string; page?: string; size?: string; status?: string; email?: string } };

const columns = ["User", "Email", "Device Info", "Issue Details", "Set Detail", "Delete"];

export default async function ManageOnlineAppointment({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const search = searchParams?.search ? searchParams.search : "";
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const status = searchParams?.status ? searchParams.status : "pending";
    const onlineAppointment = await getallOnlineAppointment(session?.token, search, size, page, status);
    const pagination = { total: onlineAppointment?.meta?.total!, size, page };

    return (
        <>
            <Banner>Online Appointments</Banner>
            <Stack mb={3} direction={{ xs: "column", sm: "row" }} alignItems="end" justifyContent="end" gap={3}>
                <SearchField search={search} />
                <StatusFilter status={status} items={["pending", "reviewing", "payment", "servicing", "completed", "cancelled"]} />
            </Stack>
            <Table columns={columns} pagination={pagination}>
                <TableBody>
                    {onlineAppointment?.data?.map(({ id, user, deviceInfo, issueDescription }) => (
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
                            <TableCell align="right">{issueDescription}</TableCell>
                            <TableCell align="right">
                                <DetailButton label="Set Detail" href={`mOnlineAppointments/${id}`} />
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
