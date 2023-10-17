import Link from "next/link";
import Table from "@/components/Table/Table";
import Status from "@/components/Appointment/Status";
import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import { Column, OnlineAppointmentTableProps } from "@/types/global";

const columns: readonly Column[] = [
    { label: "Service Name", minWidth: 128 },
    { label: "Device Info", minWidth: 110 },
    { label: "Issue Details", minWidth: 120 },
    { label: "Status", align: "right" },
    { label: "Delivery", align: "right" },
    { label: "See Details", minWidth: 98, align: "right" },
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
                            <Status status={status} />
                        </TableCell>
                        <TableCell align="right">
                            <Button size="small" disabled>
                                Pay Now
                            </Button>
                        </TableCell>
                        <TableCell align="right">
                            <Button size="small" LinkComponent={Link} href={`/dashboard/appointment/${id}`}>
                                See Details
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
