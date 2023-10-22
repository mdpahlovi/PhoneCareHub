import Table from "@/components/Table/Table";
import { OnlineAppointmentTableProps } from "@/types/global";
import { TableBody, TableCell, TableRow } from "@mui/material";

const columns = ["Service Name", "Device Info", "Issue Details"];

export default function CompletedTable({ appointment, pagination }: OnlineAppointmentTableProps) {
    return (
        <Table columns={columns} pagination={pagination}>
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
