import Table from "@/components/Table/Table";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { Column, OfflineAppointmentTableProps } from "@/types/global";

const columns: readonly Column[] = [
    { label: "Service Name", minWidth: 128 },
    { label: "Device Info", minWidth: 110 },
    { label: "Issue Details", minWidth: 120, align: "right" },
];

export default function CompletedTable({ appointment, total, page, size }: OfflineAppointmentTableProps) {
    return (
        <Table columns={columns} total={total} size={size} page={page}>
            <TableBody>
                {appointment?.map(({ id, service, deviceInfo, issueDescription }, idx) => (
                    <TableRow key={idx} hover>
                        <TableCell>{service.name}</TableCell>
                        <TableCell>{deviceInfo}</TableCell>
                        <TableCell align="right">{issueDescription}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
