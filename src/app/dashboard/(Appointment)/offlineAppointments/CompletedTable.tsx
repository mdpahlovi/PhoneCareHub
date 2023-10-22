import Table from "@/components/Table/Table";
import { OfflineAppointmentTableProps } from "@/types/global";
import { TableBody, TableCell, TableRow } from "@mui/material";
import ReviewButton from "@/components/Dashboard/Components/ReviewButton";

const columns = ["Service Name", "Device Info", "Issue Details", "Total Price", "Give Review"];

export default function CompletedTable({ appointment, pagination }: OfflineAppointmentTableProps) {
    return (
        <Table columns={columns} pagination={pagination}>
            <TableBody>
                {appointment?.map(({ id, userId, serviceId, service, deviceInfo, issueDescription, paymentAmount }) => (
                    <TableRow key={id} hover>
                        <TableCell>{service.name}</TableCell>
                        <TableCell>{deviceInfo}</TableCell>
                        <TableCell>{issueDescription}</TableCell>
                        <TableCell align="right">{paymentAmount}</TableCell>
                        <TableCell align="right">
                            <ReviewButton userId={userId} serviceId={serviceId} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
