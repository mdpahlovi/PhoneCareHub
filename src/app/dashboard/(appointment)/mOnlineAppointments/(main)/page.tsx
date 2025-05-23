import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import DetailButton from "@/components/Dashboard/Components/DetailButton";
import Table from "@/components/Table/Table";
import prisma from "@/libs/prisma";
import { Avatar, Box, Stack, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { OnlineAppointmentStatus } from "@prisma/client";

export const metadata = { title: "Manage Online Appointment" };
const columns = ["User", "Email", "Device Info", "Issue Details", "See Detail", "Delete"];
type PageProps = {
    searchParams: Promise<{ search?: string; page?: string; size?: string; status?: OnlineAppointmentStatus; email?: string }>;
};

export default async function ManageOnlineAppointment(props: PageProps) {
    const searchParams = await props.searchParams;

    const size = Number(searchParams?.size ? searchParams.size : 5);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const status = searchParams?.status ? searchParams.status : "pending";

    const onlineAppointment = await prisma.onlineAppointment.findMany({
        where: { status },
        include: { user: true },
        skip: size * page,
        take: size,
    });
    const total = await prisma.onlineAppointment.count();

    return (
        <Table columns={columns} pagination={{ total, size, page }}>
            <TableBody>
                {onlineAppointment.map(({ id, user, deviceInfo, issueDescription }) => (
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
                            <DetailButton label="See Detail" href={`mOnlineAppointments/${id}`} />
                        </TableCell>
                        <TableCell align="right">
                            <DeleteButton id={id} path="onlineAppointment" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
