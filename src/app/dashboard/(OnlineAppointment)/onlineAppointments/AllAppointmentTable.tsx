import Link from "next/link";
import Table from "@/components/Table/Table";
import { Button, Chip, TableBody, TableCell, TableRow } from "@mui/material";
import { Column, OnlineAppointmentTableProps } from "@/types/global";
import CancelAppointment from "@/components/Common/CancelAppointment";

const columns: readonly Column[] = [
    { label: "Service Name", minWidth: 128 },
    { label: "Device Info", minWidth: 110 },
    { label: "Issue Details", minWidth: 120 },
    { label: "Status", align: "right" },
    { label: "See Details", minWidth: 98, align: "right" },
    { label: "Cancel", align: "right" },
];

export default function AllAppointmentTable({ appointment, total, page, size }: OnlineAppointmentTableProps) {
    return (
        <Table columns={columns} total={total} size={size} page={page}>
            <TableBody>
                {appointment?.map(({ id, service, deviceInfo, issueDescription, status }, idx) => (
                    <TableRow key={idx} hover>
                        <TableCell>{service.name}</TableCell>
                        <TableCell>{deviceInfo}</TableCell>
                        <TableCell>{issueDescription}</TableCell>
                        <TableCell align="right">
                            <Chip label={status.charAt(0).toUpperCase() + status.slice(1)} color="primary" />
                        </TableCell>
                        <TableCell align="right">
                            <Button size="small" LinkComponent={Link} href={`/dashboard/appointment/${id}`}>
                                See Details
                            </Button>
                        </TableCell>
                        <TableCell align="right">
                            <CancelAppointment type="online" id={id} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
