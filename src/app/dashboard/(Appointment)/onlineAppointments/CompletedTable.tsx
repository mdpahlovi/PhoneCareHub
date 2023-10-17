import Table from "@/components/Table/Table";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { Column, OnlineAppointmentTableProps } from "@/types/global";

const columns: readonly Column[] = [
    { label: "Service Name", minWidth: 128 },
    { label: "Device Info", minWidth: 110 },
    { label: "Issue Details", minWidth: 120 },
    { label: "Total Price", minWidth: 104, align: "right" },
    { label: "Give Review", minWidth: 116, align: "right" },
];

export default function CompletedTable({ appointment, total, page, size }: OnlineAppointmentTableProps) {
    return (
        <Table columns={columns} total={total} size={size} page={page}>
            <TableBody>
                {appointment?.map(({ id, service, deviceInfo, issueDescription, paymentAmount }, idx) => (
                    <TableRow key={idx} hover>
                        <TableCell>{service.name}</TableCell>
                        <TableCell>{deviceInfo}</TableCell>
                        <TableCell>{issueDescription}</TableCell>
                        <TableCell align="right">{paymentAmount}</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
