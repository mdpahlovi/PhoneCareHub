import { format, parseISO } from "date-fns";
import Table from "@/components/Table/Table";
import { OfflineAppointmentTableProps } from "@/types/global";
import { TableBody, TableCell, TableRow } from "@mui/material";
import CancelAppointment from "@/components/Appointment/CancelAppointment";

const columns = ["Service Name", "Device Info", "Issue Details", "Appointment Date", "Time Left", "Cancel"];

export default function AllAppointmentTable({ appointment, pagination }: OfflineAppointmentTableProps) {
    return (
        <Table columns={columns} pagination={pagination}>
            <TableBody>
                {appointment?.map(({ id, service, deviceInfo, issueDescription, appointmentDate }, idx) => (
                    <TableRow key={idx} hover>
                        <TableCell>{service.name}</TableCell>
                        <TableCell>{deviceInfo}</TableCell>
                        <TableCell>{issueDescription}</TableCell>
                        <TableCell align="right">{format(parseISO(appointmentDate), "PPP")}</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">
                            <CancelAppointment type="offline" id={id} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
