import { format, parseISO } from "date-fns";
import Table from "@/components/Table/Table";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { Column, OfflineAppointmentTableProps } from "@/types/global";
import CancelAppointment from "@/components/Appointment/CancelAppointment";

const columns: readonly Column[] = [
    { label: "Service Name", minWidth: 128 },
    { label: "Device Info", minWidth: 110 },
    { label: "Issue Details", minWidth: 120 },
    { label: "Appointment Date", minWidth: 156, align: "right" },
    { label: "Time Left", minWidth: 98, align: "right" },
    { label: "Cancel", align: "right" },
];

export default function AllAppointmentTable({ appointment, total, page, size }: OfflineAppointmentTableProps) {
    return (
        <Table columns={columns} total={total} size={size} page={page}>
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
