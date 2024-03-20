import dayjs from "dayjs";
import prisma from "@/libs/prisma";
import Table from "@/components/Table/Table";
import { OfflineAppointmentStatus } from "@prisma/client";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import DetailButton from "@/components/Dashboard/Components/DetailButton";
import { Avatar, Box, Stack, TableBody, TableCell, TableRow, Typography } from "@mui/material";

export const metadata = { title: "Manage Offline Appointment" };
const columns = ["User", "Email", "Device Info", "Issue Details", "Appointment Date", "See Detail", "Delete"];
type SearchParams = { searchParams: { search?: string; page?: string; size?: string; status?: OfflineAppointmentStatus; email?: string } };

export default async function ManageOfflineAppointment({ searchParams }: SearchParams) {
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const status = searchParams?.status ? searchParams.status : "pending";

    const offlineAppointment = await prisma.offlineAppointment.findMany({
        where: { status },
        include: { user: true },
        skip: size * page,
        take: size,
    });
    const total = await prisma.offlineAppointment.count();

    return (
        <Table columns={columns} pagination={{ total, size, page }}>
            <TableBody>
                {offlineAppointment.map(({ id, user, deviceInfo, issueDescription, appointmentDate }) => (
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
    );
}
